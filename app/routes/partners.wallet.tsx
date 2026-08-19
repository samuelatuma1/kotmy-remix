import { ActionFunctionArgs, json, redirect, type LoaderFunctionArgs, type SerializeFrom } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData, useFetcher } from "@remix-run/react";
import { useState, useMemo, useEffect } from "react";
import { UserAtom } from "~/lib/store/atoms/token";
import { useUserManager } from "~/lib/store/store_managers/tokenManager";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { ILedgerEntry, IUserLedgersQuery, IWallet } from "~/services/wallet/types/wallet.interface";
import { walletRepo } from "~/services/wallet/wallet.server";
import Pagination from "~/components/reusables/Pagination";
import { requireAuth } from "~/lib/session.server";

// Type for the combined data structure from loader
type WalletWithLedger = {
  wallet: IWallet;
  pagedLedgers: IPaginatedResponse<ILedgerEntry>;
};

export async function loader({ request }: LoaderFunctionArgs) {
  const validateAuth = await requireAuth(request);

  // parse pagination/search params from URL
  const url = new URL(request.url);
  const page_size = Number(url.searchParams.get('page_size') ?? '10');
  const last_key_id = url.searchParams.get('last_key_id');
  const first_key_id = url.searchParams.get('first_key_id');
  const wallet_id_param = url.searchParams.get('wallet_id');

  const walletsResponse = await walletRepo.getBusinessWallets(request);
  let wallets: WalletWithLedger[] = [];

  if (walletsResponse.data?.length) {
    for (const _wallet of walletsResponse.data) {
      // If a wallet_id is supplied via URL and matches this wallet, use the supplied pagination params
      if (wallet_id_param && wallet_id_param === _wallet._id) {
        const pagedLedgers = await walletRepo.getBusinessLedgersForWallet(request, {
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
      const pagedLedgers = await walletRepo.getBusinessLedgersForWallet(request, {
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
    const cookieHeader = request.headers.get("Cookie") ?? "";

    const formData = await request.formData();
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

    // call business_wallet_search
    const walletResp = await walletRepo.business_wallet_search(query, request);
    if (walletResp.error) {
      return json({ error: walletResp.error }, { status: 400 });
    }

    // fetch ledgers for wallet using same query
    const ledgersResp = await walletRepo.getBusinessLedgersForWallet(request, query);
    if (ledgersResp.error) {
      return json({ error: ledgersResp.error }, { status: 400 });
    }

    // rebuild wallets list: get all wallets again and replace/update the matched wallet
    const walletsResp = await walletRepo.getBusinessWallets(request);
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
          const paged = await walletRepo.getBusinessLedgersForWallet(request, { wallet_id: _wallet._id, page_size: 10 });
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
  const isSubmitting = fetcher.state === 'submitting';
  const actionData = useActionData<typeof action>();

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
    searchOpen, isSubmitting, walletsState, setSearchOpen, fetcher
  };
}

export default function WalletPage() {
   const { wallets, activeData, setActiveWalletId, formatCurrency, user, searchOpen, isSubmitting, walletsState, setSearchOpen, fetcher } = useWalletController();

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
            <span className="text-sm">Wallet balances</span>
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
              {formatCurrency(wallet.withdrawable_balance, wallet.wallet_currency)}
            </div>
            <div className="text-gray-400 text-sm">{wallet.wallet_name}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Link to={`/partners/withdraw/${wallet._id}`}>
           <button className="bg-[#312E81] text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto">
            ↗ Withdraw
          </button>
          </Link>
         
          {wallet.business_withdrawal_pin_set ? (
            <Link to={`/partners/addwithdrawalaccount/${wallet._id}`}>
              <button className="bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto">
                Add withdrawal account
              </button>
            </Link>
          
          ) : (
            <Link to='/partners/setwithdrawalpin'>
            <button className="bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto">
              + Set withdrawal PIN
            </button></Link>
          )}
          <button className="bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto">
            ⇄ Transfer to another wallet
          </button>
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