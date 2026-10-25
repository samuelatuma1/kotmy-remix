import { ActionFunctionArgs, json, redirect, type LoaderFunctionArgs, type SerializeFrom } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData, useFetcher, useRevalidator } from "@remix-run/react";
import { useState, useMemo, useEffect } from "react";
import { UserAtom } from "~/lib/store/atoms/token";
import { useUserManager } from "~/lib/store/store_managers/tokenManager";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { AccountLookUpDetails, ILedgerEntry, IUserLedgersQuery, IWallet, TransactionResponse } from "~/services/wallet/types/wallet.interface";
import { walletRepo } from "~/services/wallet/wallet.server";
import Pagination from "~/components/reusables/Pagination";
import { requireAuth } from "~/lib/session.server";
import { toast } from "~/components/reusables/use-toast";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/reusables/Dialog";

// Type for the combined data structure from loader
type WalletWithLedger = {
  wallet: IWallet;
  pagedLedgers: IPaginatedResponse<ILedgerEntry>;
};

type WalletActionData = {
  intent?: string;
  error?: string;
  recipient?: AccountLookUpDetails;
  transaction?: TransactionResponse;
  accountNumber?: string;
};

export async function loader({ request }: LoaderFunctionArgs) {
  const validateAuth = await requireAuth(request);

  // parse pagination/search params from URL
  const url = new URL(request.url);
  const page_size = Number(url.searchParams.get('page_size') ?? '10');
  const last_key_id = url.searchParams.get('last_key_id');
  const first_key_id = url.searchParams.get('first_key_id');
  const wallet_id_param = url.searchParams.get('wallet_id');

  const walletsResponse = await walletRepo.getUserWallets(request);
  let wallets: WalletWithLedger[] = [];

  if (walletsResponse.data?.length) {
    for (const _wallet of walletsResponse.data) {
      // If a wallet_id is supplied via URL and matches this wallet, use the supplied pagination params
      if (wallet_id_param && wallet_id_param === _wallet._id) {
        const pagedLedgers = await walletRepo.getUserLedgersForWallet(request, {
          wallet_id: _wallet._id,
          page_size: page_size,
          last_key_id: last_key_id ?? undefined,
          // first_key_id: first_key_id ?? undefined,
        });
        if (pagedLedgers.data) {
          wallets.push({ wallet: _wallet, pagedLedgers: pagedLedgers.data });
        }
        continue;
      }

      // default fetch for other wallets (first page)
      const pagedLedgers = await walletRepo.getUserLedgersForWallet(request, {
        wallet_id: _wallet._id,
        page_size: 10,
      });
      if (pagedLedgers.data) {
        wallets.push({ wallet: _wallet, pagedLedgers: pagedLedgers.data });
      }
    }
  }
  return json({ wallets });
}

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const intent = String(formData.get("intent") ?? "");

    if (intent === "lookup-transfer-recipient") {
      const accountNumber = String(formData.get("account_number") ?? "").trim();
      const currency = String(formData.get("currency") ?? "").trim();
      if (!/^\d{10}$/.test(accountNumber)) {
        return json({ intent, error: "Enter a valid 10-digit account number." }, { status: 400 });
      }
      if (!currency) return json({ intent, error: "Select a wallet before looking up an account." }, { status: 400 });

      const response = await walletRepo.lookupAccountDetails(request, { account_number: accountNumber, currency });
      if (response.error || !response.data) {
        return json({ intent, accountNumber, error: getWalletErrorMessage(response.error) }, { status: 400 });
      }
      return json({ intent, recipient: response.data });
    }

    if (intent === "transfer-to-wallet") {
      const sourceWalletId = String(formData.get("source_wallet_id") ?? "").trim();
      const recipientAccountNumber = String(formData.get("recipient_account_number") ?? "").trim();
      const amount = Number(String(formData.get("amount") ?? "").trim());
      const narration = String(formData.get("narration") ?? "").trim();
      const withdrawalPin = String(formData.get("withdrawal_pin") ?? "");
      if (!sourceWalletId) return json({ intent, error: "Select a wallet to transfer from." }, { status: 400 });
      if (!/^\d{10}$/.test(recipientAccountNumber)) return json({ intent, error: "Look up a valid recipient account before continuing." }, { status: 400 });
      if (!Number.isFinite(amount) || amount <= 0) return json({ intent, error: "Enter an amount greater than zero." }, { status: 400 });
      if (!withdrawalPin.trim()) return json({ intent, error: "Enter your wallet PIN." }, { status: 400 });

      const walletsResponse = await walletRepo.getUserWallets(request);
      const sourceWallet = walletsResponse.data?.find((item) => item._id === sourceWalletId);
      if (!sourceWallet) return json({ intent, error: "The selected wallet could not be found. Refresh and try again." }, { status: 400 });
      if (amount > sourceWallet.withdrawable_balance) {
        return json({ intent, error: "The amount exceeds your available wallet balance." }, { status: 400 });
      }

      // Re-resolve the destination on the server so a client cannot substitute another wallet ID.
      const recipientResponse = await walletRepo.lookupAccountDetails(request, {
        account_number: recipientAccountNumber,
        currency: sourceWallet.wallet_currency,
      });
      const recipient = recipientResponse.data;
      if (recipientResponse.error || !recipient) return json({ intent, error: getWalletErrorMessage(recipientResponse.error) }, { status: 400 });
      if (recipient.wallet_id === sourceWallet._id) return json({ intent, error: "You cannot transfer to the same wallet." }, { status: 400 });
      if (recipient.wallet_currency !== sourceWallet.wallet_currency) {
        return json({ intent, error: "Transfers are only available between wallets with the same currency." }, { status: 400 });
      }

      const response = await walletRepo.transferToKidmonthWallet(request, {
        transfer_to_wallet_id: recipient.wallet_id,
        transfer_from_wallet_id: sourceWallet._id,
        amount,
        narration: narration || undefined,
        withdrawal_pin: withdrawalPin,
      });
      if (response.error || !response.data) {
        return json({ intent, error: getWalletErrorMessage(response.error) }, { status: 400 });
      }
      return json({ intent, transaction: response.data });
    }

    if (intent === "fund-wallet") {
      const amount = Number(String(formData.get("amount") ?? "").trim());
      const walletId = String(formData.get("wallet_id") ?? "").trim();

      if (!Number.isFinite(amount) || amount <= 0) {
        return json({ intent, error: "Please enter a valid amount greater than zero." }, { status: 400 });
      }
      if (!walletId) {
        return json({ intent, error: "Please select a wallet to fund." }, { status: 400 });
      }

      const response = await walletRepo.fundUserWallet({
        amount,
        wallet_id: walletId,
        narration: String(formData.get("narration") ?? "").trim() || undefined,
        redirect_url: new URL("/user/wallet", request.url).toString(),
      }, request);

      if (response.error) {
        return json({ intent, error: getWalletErrorMessage(response.error) }, { status: 400 });
      }

      const paymentLink = response.data?.payment_link?.trim();
      if (!paymentLink) {
        return json({ intent, error: "Payment provider did not return a payment link." }, { status: 400 });
      }

      return redirect(paymentLink);
    }

    // clean form data: remove empty values
    const cleaned: Record<string, string> = {};
    formData.forEach((value, key) => {
      const v = (value ?? '').toString().trim();
      if (v !== '') cleaned[key] = v;
    });

    // build IUserLedgersQuery
    const query: IUserLedgersQuery = {} as IUserLedgersQuery;
    if (cleaned.transaction_type) query.transaction_type = cleaned.transaction_type as any;
    if (cleaned.status) query.status = cleaned.status as any;
    if (cleaned.min_amount) query.min_amount = Number(cleaned.min_amount);
    if (cleaned.max_amount) query.max_amount = Number(cleaned.max_amount);
    if (cleaned.min_created_at) query.min_created_at = cleaned.min_created_at;
    if (cleaned.max_created_at) query.max_created_at = cleaned.max_created_at;
    if (cleaned.user_id) query.user_id = cleaned.user_id;
    if (cleaned.wallet_id) query.wallet_id = cleaned.wallet_id;
    if (cleaned.currency) query.currency = cleaned.currency as any;
    if (cleaned.payment_method) query.payment_method = cleaned.payment_method as any;
    if(cleaned.contest_code) query.contest_code = cleaned.contest_code as any

    // call wallet_search
    const walletResp = await walletRepo.wallet_search(query, request);
    if (walletResp.error) {
      return json({ error: walletResp.error }, { status: 400 });
    }

    // fetch ledgers for wallet using same query
    const ledgersResp = await walletRepo.getUserLedgersForWallet(request, query);
    if (ledgersResp.error) {
      return json({ error: ledgersResp.error }, { status: 400 });
    }

    // rebuild wallets list: get all wallets again and replace/update the matched wallet
    const walletsResp = await walletRepo.getUserWallets(request);
    let wallets: WalletWithLedger[] = [];
    if (walletsResp.data?.length) {
      let cleanedWallets: WalletWithLedger[] = []
      for (const _wallet of walletsResp.data) {
        if (_wallet._id === walletResp.data?._id) {
          var updatedWallet = {..._wallet}
          updatedWallet.metrics.money_in = walletResp.data.metrics.money_in;updatedWallet.metrics.money_out = walletResp.data.metrics.money_out; 
          updatedWallet.metrics.net_change_this_month = walletResp.data.metrics.net_change_this_month; updatedWallet.metrics.net_change = walletResp.data.metrics.net_change;
          
          cleanedWallets.push({ wallet: updatedWallet, pagedLedgers: ledgersResp.data });
        } else {
          const paged = await walletRepo.getUserLedgersForWallet(request, { wallet_id: _wallet._id, page_size: 10 });
          cleanedWallets.push({ wallet: _wallet, pagedLedgers: paged.data ?? { items: [], total_items: 0, items_per_page: 10 } as any });
        }
      }
      if(cleanedWallets.length){
        wallets = cleanedWallets;
      }
    }
    console.log("WALLET RESP", walletResp, wallets)
    return json({ wallets });
}

function getWalletErrorMessage(error: unknown): string {
  if (typeof error === "string") return error;
  if (error && typeof error === "object" && "detail" in error) {
    const detail = (error as { detail?: unknown }).detail;
    if (typeof detail === "string") return detail;
    if (Array.isArray(detail)) return detail.map((item) => typeof item === "object" && item && "msg" in item ? String(item.msg) : String(item)).join(", ");
  }
  return "Unable to complete this wallet request. Please try again.";
}

function useWalletController() {
  const { wallets } = useLoaderData<{ wallets: WalletWithLedger[] }>();
  const {setUserStoreManager, getUserStoreManager} = useUserManager();
  const [user, setUser] = useState<UserAtom | null>(null)
  // Track which wallet is currently selected (default to the first one)

  const [activeWalletId, setActiveWalletId] = useState<string | null>(
    wallets.length > 0 ? wallets[0].wallet._id : null
  );

  

  useEffect(() => {
    const _user = getUserStoreManager()
    if(_user){
      setUser(_user)
    }
  }, [getUserStoreManager]);

  const activeData = useMemo(() => {
    return wallets.find((w) => w.wallet._id === activeWalletId) || null;
  }, [activeWalletId, wallets]);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  // const { wallets, activeData, setActiveWalletId, formatCurrency, user } = useWalletController();
  const [searchOpen, setSearchOpen] = useState(false);
  const fetcher = useFetcher();
  const fundFetcher = useFetcher<typeof action>();
  const isSubmitting = fetcher.state === 'submitting';
  const isFunding = fundFetcher.state !== "idle";
  const [fundWalletOpen, setFundWalletOpen] = useState(false);
  const [transferOpen, setTransferOpen] = useState(false);
  const lookupFetcher = useFetcher<WalletActionData>();
  const transferFetcher = useFetcher<WalletActionData>();
  const revalidator = useRevalidator();
  const revalidate = revalidator.revalidate;
  const [accountNumber, setAccountNumber] = useState("");
  const [transferStep, setTransferStep] = useState<"lookup" | "details" | "review" | "success" | "failed">("lookup");
  const [transferAmount, setTransferAmount] = useState("");
  const [transferNarration, setTransferNarration] = useState("");
  const [withdrawalPin, setWithdrawalPin] = useState("");
  const actionData = useActionData<typeof action>();

  useEffect(() => {
    const data = fundFetcher.data as { intent?: string; error?: string } | undefined;
    if (data?.intent === "fund-wallet" && data.error) {
      toast({ variant: "destructive", title: "Wallet funding failed", description: data.error });
    }
  }, [fundFetcher.data]);

  const lookedUpRecipient = lookupFetcher.data?.intent === "lookup-transfer-recipient" ? lookupFetcher.data.recipient : undefined;
  const recipient = lookedUpRecipient?.account_number === accountNumber ? lookedUpRecipient : undefined;

  useEffect(() => {
    if (transferFetcher.data?.intent === "transfer-to-wallet" && transferFetcher.data.transaction) {
      const failed = transferFetcher.data.transaction.transaction_status === "FAILED";
      setTransferStep(failed ? "failed" : "success");
      if (!failed) revalidate();
    }
  }, [transferFetcher.data?.intent, transferFetcher.data?.transaction?.id, revalidate]);

  // local wallets state so we can update UI when action/fetcher returns updated wallets
  const [walletsState, setWalletsState] = useState<WalletWithLedger[]>(wallets);

  // keep local state in sync with loader updates
  useEffect(() => {
    // If a fetcher or action has returned updated wallets, prefer that and don't overwrite.
    const latestFromFetcherOrAction = (fetcher.data as any)?.wallets ?? (actionData as any)?.wallets;
    if (!latestFromFetcherOrAction) {
      setWalletsState(wallets);
    }
  }, [wallets, fetcher.data, actionData]);

  // update local wallets when fetcher or action returns updated data
  useEffect(() => {
    const fw = (fetcher.data as any)?.wallets ?? (actionData as any)?.wallets;
    if (fw && Array.isArray(fw)) {
      setWalletsState(fw as WalletWithLedger[]);
    }
  }, [fetcher.data, actionData]);

  return { 
    wallets, 
    activeData, 
    setActiveWalletId, 
    formatCurrency,
    user,
    actionData,
    searchOpen, isSubmitting, walletsState, setSearchOpen, fetcher,
    fundFetcher, isFunding, fundWalletOpen, setFundWalletOpen
    , transferOpen, setTransferOpen, lookupFetcher, transferFetcher, accountNumber, setAccountNumber,
    transferStep, setTransferStep, transferAmount, setTransferAmount, transferNarration, setTransferNarration,
    withdrawalPin, setWithdrawalPin, recipient
  };
}

export default function WalletPage() {
   const { wallets, activeData, setActiveWalletId, formatCurrency, user, searchOpen, isSubmitting, walletsState, setSearchOpen, fetcher, fundFetcher, isFunding, fundWalletOpen, setFundWalletOpen, transferOpen, setTransferOpen, lookupFetcher, transferFetcher, accountNumber, setAccountNumber, transferStep, setTransferStep, transferAmount, setTransferAmount, transferNarration, setTransferNarration, withdrawalPin, setWithdrawalPin, recipient } = useWalletController();

  if (!activeData) return <div className="p-8">No wallets found.</div>;

  // derive active data from local wallets state so UI reflects updates
  const activeDataLocal = walletsState.find(w => w.wallet._id === activeData?.wallet._id) ?? activeData;
  const { wallet, pagedLedgers } = activeDataLocal;

  return (
    <div className="p-8 max-w-7xl mx-auto bg-[#F9FAFB] min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Wallet</h1>

      {/* Main Balance Card */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-sm">Account balance</span>
            <button className="hover:bg-gray-100 p-1 rounded-full">👁️</button>
          </div>
          
          {/* Multi-Wallet Selector */}
          <select 
            className="border rounded-full px-4 py-2 bg-gray-50 text-sm font-medium outline-none cursor-pointer"
            value={wallet._id}
            onChange={(e) => setActiveWalletId(e.target.value)}
          >
            {walletsState.map((w) => (
              <option key={w.wallet._id} value={w.wallet._id}>
                {w.wallet.wallet_currency} - {w.wallet.account_number}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <div className="text-4xl font-bold mb-1">
              {formatCurrency(wallet.account_balance, wallet.wallet_currency)}
            </div>
            <div className="text-gray-400 text-sm">{wallet.wallet_name}</div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-6">
                <dt className="text-gray-500">External-withdrawable</dt>
                <dd className="font-medium text-gray-900">{formatCurrency(wallet.external_withdrawable_balance, wallet.wallet_currency)}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-gray-500">Platform-only</dt>
                <dd className="font-medium text-gray-900">{formatCurrency(wallet.platform_only_balance, wallet.wallet_currency)}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Dialog open={fundWalletOpen} onOpenChange={setFundWalletOpen}>
            <DialogTrigger asChild>
              <button type="button" className="bg-[#E91E63] text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto">
                + Fund Wallet
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-md rounded-2xl bg-white p-0">
              <DialogHeader className="border-b border-gray-100 p-6 text-left">
                <DialogTitle className="text-xl font-bold">Fund Wallet</DialogTitle>
                <DialogDescription className="mt-2 text-sm text-gray-500">Enter the amount you want to add to this wallet.</DialogDescription>
              </DialogHeader>
              <fundFetcher.Form method="post" className="space-y-5 p-6">
                <input type="hidden" name="intent" value="fund-wallet" />
                <input type="hidden" name="wallet_id" value={wallet._id} />
                <label className="block text-sm font-medium text-gray-700">
                  Amount ({wallet.wallet_currency})
                  <input required min="0.01" step="0.01" type="number" name="amount" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#E91E63]" placeholder="0.00" />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Narration <span className="font-normal text-gray-400">(optional)</span>
                  <textarea name="narration" rows={3} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#E91E63]" placeholder="What is this funding for?" />
                </label>
                <DialogFooter className="gap-3 sm:flex-row sm:justify-end">
                  <DialogClose asChild><button type="button" className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700">Cancel</button></DialogClose>
                  <button type="submit" disabled={isFunding} className="rounded-xl bg-[#E91E63] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50">{isFunding ? "Preparing payment..." : "Continue to payment"}</button>
                </DialogFooter>
              </fundFetcher.Form>
            </DialogContent>
          </Dialog>
          <Link to={`/user/withdraw/${wallet._id}`}>
           <button className="bg-[#312E81] text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto">
            ↗ Withdraw
          </button>
          </Link>
         
          {user?.withdrawal_pin_set ? (
            <Link to={`/user/addwithdrawalaccount/${wallet._id}`}>
              <button className="bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto">
                Add withdrawal account
              </button>
            </Link>
          
          ) : (
            <Link to='/user/setwithdrawalpin'>
            <button className="bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto">
              + Set withdrawal PIN
            </button></Link>
          )}
          <Dialog open={transferOpen} onOpenChange={(open) => {
            setTransferOpen(open);
            if (!open) {
              setAccountNumber(""); setTransferStep("lookup"); setTransferAmount(""); setTransferNarration(""); setWithdrawalPin("");
            }
          }}>
            <DialogTrigger asChild>
              <button type="button" className="bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto">
                ⇄ Transfer to another wallet
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] max-w-md overflow-y-auto rounded-2xl bg-white p-0">
              <DialogHeader className="border-b border-gray-100 p-6 text-left">
                <DialogTitle className="text-xl font-bold">{transferStep === "success" ? "Transfer receipt" : transferStep === "failed" ? "Transfer failed" : "Transfer to a Kotmy wallet"}</DialogTitle>
                <DialogDescription className="mt-2 text-sm text-gray-500">
                  {transferStep === "lookup" && "Enter the recipient’s 10-digit wallet account number."}
                  {transferStep === "details" && "Enter the amount and your wallet PIN."}
                  {transferStep === "review" && "Review the transfer details before confirming."}
                  {transferStep === "success" && "Your transfer request was received."}
                  {transferStep === "failed" && "The transfer could not be completed."}
                </DialogDescription>
              </DialogHeader>

              {transferStep === "lookup" && <lookupFetcher.Form method="post" className="space-y-5 p-6">
                <input type="hidden" name="intent" value="lookup-transfer-recipient" />
                <input type="hidden" name="currency" value={wallet.wallet_currency} />
                <label className="block text-sm font-medium text-gray-700">
                  Account number
                  <input required type="text" inputMode="numeric" autoComplete="off" maxLength={10} pattern="[0-9]{10}" name="account_number" value={accountNumber} onChange={(event) => { setAccountNumber(event.target.value.replace(/\D/g, "").slice(0, 10)); setTransferStep("lookup"); }} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#E91E63]" placeholder="10-digit account number" />
                </label>
                {lookupFetcher.data?.intent === "lookup-transfer-recipient" && lookupFetcher.data.accountNumber === accountNumber && lookupFetcher.data.error && <p role="alert" className="text-sm text-red-600">{lookupFetcher.data.error}</p>}
                {recipient && <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm"><p className="font-semibold text-gray-900">{recipient.wallet_name}</p><p className="mt-1 text-gray-500">{recipient.account_number} · {recipient.wallet_currency}</p></div>}
                <DialogFooter className="gap-3 sm:flex-row sm:justify-end">
                  <DialogClose asChild><button type="button" className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700">Cancel</button></DialogClose>
                  {recipient ? <button type="button" onClick={() => setTransferStep("details")} className="rounded-xl bg-[#E91E63] px-5 py-2.5 text-sm font-medium text-white">Continue</button> : <button type="submit" disabled={!/^\d{10}$/.test(accountNumber) || lookupFetcher.state !== "idle"} className="rounded-xl bg-[#E91E63] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50">{lookupFetcher.state !== "idle" ? "Looking up…" : "Look up account"}</button>}
                </DialogFooter>
              </lookupFetcher.Form>}

              {transferStep === "details" && recipient && <div className="space-y-5 p-6">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm"><p className="font-semibold text-gray-900">{recipient.wallet_name}</p><p className="mt-1 text-gray-500">{recipient.account_number}</p></div>
                <label className="block text-sm font-medium text-gray-700">Amount ({wallet.wallet_currency})<input type="number" min="0.01" max={wallet.withdrawable_balance} step="0.01" value={transferAmount} onChange={(event) => setTransferAmount(event.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#E91E63]" placeholder="0.00" /><span className="mt-2 block text-xs font-normal text-gray-500">Available to transfer: {formatCurrency(wallet.withdrawable_balance, wallet.wallet_currency)}</span></label>
                <label className="block text-sm font-medium text-gray-700">Narration <span className="font-normal text-gray-400">(optional)</span><textarea rows={2} value={transferNarration} onChange={(event) => setTransferNarration(event.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#E91E63]" placeholder="Add a note" /></label>
                <label className="block text-sm font-medium text-gray-700">Wallet PIN<input type="password" inputMode="numeric" autoComplete="off" value={withdrawalPin} onChange={(event) => setWithdrawalPin(event.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#E91E63]" placeholder="Enter your wallet PIN" /></label>
                {transferFetcher.data?.intent === "transfer-to-wallet" && transferFetcher.data.error && <p role="alert" className="text-sm text-red-600">{transferFetcher.data.error}</p>}
                <DialogFooter className="gap-3 sm:flex-row sm:justify-between"><button type="button" onClick={() => setTransferStep("lookup")} className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700">Back</button><button type="button" disabled={!Number.isFinite(Number(transferAmount)) || Number(transferAmount) <= 0 || Number(transferAmount) > wallet.withdrawable_balance || !withdrawalPin.trim()} onClick={() => setTransferStep("review")} className="rounded-xl bg-[#E91E63] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50">Review transfer</button></DialogFooter>
              </div>}

              {transferStep === "review" && recipient && <transferFetcher.Form method="post" className="space-y-5 p-6">
                <input type="hidden" name="intent" value="transfer-to-wallet" /><input type="hidden" name="source_wallet_id" value={wallet._id} /><input type="hidden" name="recipient_account_number" value={recipient.account_number} /><input type="hidden" name="amount" value={transferAmount} /><input type="hidden" name="narration" value={transferNarration} /><input type="hidden" name="withdrawal_pin" value={withdrawalPin} />
                <dl className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm"><div className="flex justify-between gap-4"><dt className="text-gray-500">Recipient</dt><dd className="text-right font-medium text-gray-900">{recipient.wallet_name}<br />{recipient.account_number}</dd></div><div className="flex justify-between"><dt className="text-gray-500">Amount</dt><dd className="font-medium text-gray-900">{formatCurrency(Number(transferAmount), wallet.wallet_currency)}</dd></div><div className="flex justify-between"><dt className="text-gray-500">Currency</dt><dd className="font-medium text-gray-900">{wallet.wallet_currency}</dd></div><div className="flex justify-between"><dt className="text-gray-500">Transfer charge</dt><dd className="font-medium text-gray-900">{formatCurrency(0, wallet.wallet_currency)}</dd></div></dl>
                {transferFetcher.data?.intent === "transfer-to-wallet" && transferFetcher.data.error && <p role="alert" className="text-sm text-red-600">{transferFetcher.data.error}</p>}
                <DialogFooter className="gap-3 sm:flex-row sm:justify-between"><button type="button" onClick={() => setTransferStep("details")} className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700">Back</button><button type="submit" disabled={transferFetcher.state !== "idle"} className="rounded-xl bg-[#E91E63] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50">{transferFetcher.state !== "idle" ? "Transferring…" : "Confirm transfer"}</button></DialogFooter>
              </transferFetcher.Form>}

              {transferStep === "success" && transferFetcher.data?.intent === "transfer-to-wallet" && transferFetcher.data.transaction && <div className="space-y-5 p-6">
                {(() => { const transaction = transferFetcher.data.transaction!; return <dl className="space-y-3 rounded-xl border border-green-100 bg-green-50 p-4 text-sm"><div className="flex justify-between"><dt className="text-gray-600">Status</dt><dd className="font-semibold text-green-700">{transaction.transaction_status}</dd></div><div className="flex justify-between"><dt className="text-gray-600">Amount</dt><dd className="font-medium">{formatCurrency(transaction.amount, transaction.currency)}</dd></div><div className="flex justify-between gap-4"><dt className="text-gray-600">Reference</dt><dd className="break-all text-right font-medium">{transaction.reference}</dd></div><div className="flex justify-between"><dt className="text-gray-600">Date</dt><dd className="font-medium">{new Date(transaction.created_at).toLocaleString()}</dd></div>{transaction.narration && <div className="flex justify-between gap-4"><dt className="text-gray-600">Narration</dt><dd className="text-right">{transaction.narration}</dd></div>}</dl>; })()}
                <DialogFooter><DialogClose asChild><button type="button" className="w-full rounded-xl bg-[#E91E63] px-5 py-2.5 text-sm font-medium text-white">Done</button></DialogClose></DialogFooter>
              </div>}

              {transferStep === "failed" && transferFetcher.data?.intent === "transfer-to-wallet" && transferFetcher.data.transaction && <div className="space-y-5 p-6">
                <p role="alert" className="text-sm text-red-600">{transferFetcher.data.transaction.processing_remark || "Your transfer failed. Please try again."}</p>
                <p className="text-sm text-gray-500">Reference: {transferFetcher.data.transaction.reference}</p>
                <DialogFooter><DialogClose asChild><button type="button" className="w-full rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700">Done</button></DialogClose></DialogFooter>
              </div>}
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Search (collapsible) */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-medium text-gray-700">Search</h2>
          <button
            type="button"
            onClick={() => setSearchOpen((s) => !s)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
            aria-expanded={searchOpen}
          >
            <span>{searchOpen ? 'Hide' : 'Show'}</span>
            <svg
              className={`w-4 h-4 transition-transform ${searchOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>

        <div className={`transition-all ${searchOpen ? 'overflow-scroll max-h-96' : 'overflow-hidden max-h-0'}`}>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
            <fetcher.Form method="post" className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {/* transaction_type */}
              <label className="flex flex-col text-xs text-gray-600">
                <span className="mb-1">Transaction type</span>
                <select id="transaction_type" name="transaction_type" className="border rounded-md px-3 py-2 bg-gray-50 outline-none">
                  <option value="">All transaction types</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </select>
              </label>

              {/* status */}
              <label className="flex flex-col text-xs text-gray-600">
                <span className="mb-1">Status</span>
                <select id="status" name="status" className="border rounded-md px-3 py-2 bg-gray-50 outline-none">
                  <option value="">Any status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="void">Void</option>
                </select>
              </label>

              {/* min_amount */}
              <label className="flex flex-col text-xs text-gray-600">
                <span className="mb-1">Min amount</span>
                <input id="min_amount" name="min_amount" type="number" step="0.01" placeholder="Min amount" className="border rounded-md px-3 py-2 bg-gray-50 outline-none" />
              </label>

              {/* max_amount */}
              <label className="flex flex-col text-xs text-gray-600">
                <span className="mb-1">Max amount</span>
                <input id="max_amount" name="max_amount" type="number" step="0.01" placeholder="Max amount" className="border rounded-md px-3 py-2 bg-gray-50 outline-none" />
              </label>

              {/* min_created_at */}
              <label className="flex flex-col text-xs text-gray-600">
                <span className="mb-1">From date</span>
                <input id="min_created_at" name="min_created_at" type="date" className="border rounded-md px-3 py-2 bg-gray-50 outline-none" />
              </label>

              <label className="flex flex-col text-xs text-gray-600">
                <span className="mb-1">To date</span>
                <input id="max_created_at" name="max_created_at" type="date" className="border rounded-md px-3 py-2 bg-gray-50 outline-none" />
              </label>

              {/* payment_method */}
              <label className="flex flex-col text-xs text-gray-600">
                <span className="mb-1">Payment method</span>
                <select id="payment_method" name="payment_method" className="border rounded-md px-3 py-2 bg-gray-50 outline-none">
                  <option value="">Any payment method</option>
                  <option value="flutterwave">Flutterwave</option>
                  <option value="bank">Bank</option>
                  <option value="paystack">Paystack</option>
                </select>
              </label>

              <label className="flex flex-col text-xs text-gray-600">
                <span className="mb-1">Contest code</span>
                <input id="contest_code" name="contest_code" className="border rounded-md px-3 py-2 bg-gray-50 outline-none" />
              </label>

              {/* include hidden wallet_id so server action can know currently selected wallet */}
              <input type="hidden" name="wallet_id" value={wallet._id} />

              <div className="sm:col-span-3 flex justify-end mt-2">
                <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-[#312E81] text-white rounded-lg text-sm disabled:opacity-50">
                  {isSubmitting ? 'Searching...' : 'Search'}
                </button>
              </div>
            </fetcher.Form>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <span>📁</span>
          <h2 className="font-medium">Recent wallet activity ({wallet.wallet_currency})</h2>
        </div>

        {/* Mini Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 mb-8 border-b border-gray-100 pb-6">
          <MetricItem 
            label="Net change this month" 
            value={formatCurrency(wallet.metrics.net_change_this_month, wallet.wallet_currency)} 
            tooltip 
          />
          <MetricItem 
            label="Money in" 
            value={formatCurrency(wallet.metrics.money_in, wallet.wallet_currency)} 
          />
          <MetricItem 
            label="Money out" 
            value={formatCurrency(wallet.metrics.money_out, wallet.wallet_currency)} 
          />
        </div>

        {/* Ledger Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-400 border-b">
                <th className="pb-4 font-medium">S/N</th>
                <th className="pb-4 font-medium">Date</th>
                <th className="pb-4 font-medium">Ref ID</th>
                <th className="pb-4 font-medium">Narration</th>
                <th className="pb-4 font-medium">Beneficiary name</th>
                <th className="pb-4 font-medium">Type</th>
                <th className="pb-4 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {pagedLedgers.items.map((item, idx) => (
                <tr key={item._id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 text-gray-500">{idx + 1}</td>
                  <td className="py-4 text-gray-900 leading-tight">
                    {new Date(item.completed_at || "").toLocaleDateString()}
                    <div className="text-xs text-gray-400">{new Date(item.completed_at || "").toLocaleTimeString()}</div>
                  </td>
                  <td className="py-4 text-gray-600 font-mono text-xs">{item.payment_ref}</td>
                  <td className="py-4 text-gray-600 max-w-xs">{item.description}</td>
                  <td className="py-4 text-gray-600  trunc_">{item.wallet_name}</td>
                  <td className="py-4 uppercase text-xs font-semibold">{item.entry_type}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold ${item.entry_type === 'credit' ? 'text-green-600' : 'text-gray-900'}`}>
                        {formatCurrency(item.amount, item.currency)}
                      </span>
                      <StatusBadge status={item.status} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
          <div>
            Showing {pagedLedgers.items.length} of {pagedLedgers.total_items} items
          </div>
          <Pagination lastKey={pagedLedgers.last_key_id} pageSize={pagedLedgers.items_per_page} firstKey={pagedLedgers.first_key_id} />
        </div>
      </div>
    </div>
  );
}

// ... StatusBadge and MetricItem helpers remain the same as previous response
// Helper UI Components
function MetricItem({ label, value, tooltip = false }: { label: string, value: string, tooltip?: boolean }) {
  return (
    <div>
      <div className="text-xs text-gray-400 flex items-center gap-1 mb-1">
        {label} {tooltip && <span className="bg-gray-200 rounded-full w-3 h-3 text-[8px] flex items-center justify-center text-white">i</span>}
      </div>
      <div className="text-lg font-bold text-gray-800">{value}</div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Pending: "bg-orange-50 text-orange-500 border-orange-100",
    Failed: "bg-red-50 text-red-500 border-red-100",
    Completed: "bg-green-50 text-green-500 border-green-100",
  };
  
  const icons: Record<string, string> = {
    Pending: "⏱",
    Failed: "⚠️",
    Completed: "✓",
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border flex items-center gap-1 ${styles[status] || ""}`}>
      {icons[status]} {status}
    </span>
  );
}
