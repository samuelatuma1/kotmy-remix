import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

import { icons } from "~/assets/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/reusables/Dialog";
import { VtuPaymentPreviewDetails, type VtuPaymentWallet } from "~/components/public/vtu/VtuPaymentPreviewDetails";
import Svg from "~/components/reusables/Svg";
import { toast } from "~/components/reusables/use-toast";
import { UserAtom } from "~/lib/store/atoms/token";
import { getAuthSessionToken } from "~/lib/session.server";
import { useUserManager } from "~/lib/store/store_managers/tokenManager";
import { formatAmount, getErrorMessage, isValidEmail, isValidNigerianPhoneNumber, normalizePhoneNumber } from "~/lib/utils";
import { walletRepo } from "~/services/wallet/wallet.server";
import { vtuServer } from "~/services/vtu/vtu.server";
import type { DiscountedDataAmountResponse, VTUDataCategoryResponse, VTUDataPlansDTO, VTUProduct } from "~/services/vtu/types/vtu.interface";

export async function loader({ request }: LoaderFunctionArgs) {
  const phoneNumber = normalizePhoneNumber(new URL(request.url).searchParams.get("phone_number") ?? "");

  return json({ phoneNumber, plans: null, error: null });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = String(formData.get("intent") ?? "search_data_plans");

  if (intent === "preview_data_payment") {
    const dataProductId = String(formData.get("data_product_id") ?? "").trim();
    const amount = Number(formData.get("amount"));

    if (!dataProductId || !Number.isFinite(amount) || amount <= 0) {
      return json({ intent, preview: null, wallet: null, walletError: null, error: "Select a valid data plan." }, { status: 400 });
    }

    const response = await vtuServer.getDiscountedDataPrice({ data_product_id: dataProductId, amount }, request);

    if (response.error || !response.data) {
      return json({ intent, preview: null, wallet: null, walletError: null, error: getErrorMessage(response.error, "Unable to calculate the data price.") }, { status: 400 });
    }

    let wallet: VtuPaymentWallet | null = null;
    let walletError: string | null = null;
    const authToken = await getAuthSessionToken(request);

    if (authToken) {
      const walletsResponse = await walletRepo.getUserWallets(request);
      const matchingWallet = walletsResponse.data?.find((candidate) => candidate.wallet_currency === response.data?.currency);

      if (matchingWallet) {
        wallet = {
          wallet_id: matchingWallet._id,
          wallet_currency: matchingWallet.wallet_currency,
          withdrawable_balance: matchingWallet.withdrawable_balance,
        };
      } else {
        walletError = walletsResponse.error
          ? getErrorMessage(walletsResponse.error, "Unable to load your wallet.")
          : `No wallet found for ${response.data.currency}.`;
      }
    }

    return json({ intent, preview: response.data, wallet, walletError, error: null });
  }

  if (intent === "purchase_data_wallet") {
    const productId = String(formData.get("vtu_product_id") ?? "").trim();
    const phoneNumber = normalizePhoneNumber(String(formData.get("phone_number") ?? ""));
    const amount = Number(formData.get("amount"));
    const walletId = String(formData.get("wallet_id") ?? "").trim();
    const pin = String(formData.get("pin") ?? "").trim();
    const referrerCode = String(formData.get("referrer_code") ?? "").trim();

    if (
      !productId ||
      !isValidNigerianPhoneNumber(phoneNumber) ||
      !Number.isFinite(amount) || amount <= 0 ||
      !walletId ||
      !/^\d{6}$/.test(pin)
    ) {
      return json({ intent, error: "Enter a valid six-digit PIN and confirm the purchase details." }, { status: 400 });
    }

    const purchaseResponse = await vtuServer.purchaseVTUDataProductFromWallet({
      vtu_product_id: productId,
      phone_number: phoneNumber,
      amount,
      wallet_id: walletId,
      pin,
      ...(referrerCode ? { referrer_code: referrerCode } : {}),
    }, request);

    if (purchaseResponse.error || !purchaseResponse.data?.reference) {
      return json({ intent, error: getErrorMessage(purchaseResponse.error, "Unable to complete the data purchase.") }, { status: 400 });
    }

    return redirect(`/vtuservice/vtupurchase/${encodeURIComponent(purchaseResponse.data.reference)}`);
  }

  if (intent === "purchase_data_bank") {
    const productId = String(formData.get("vtu_product_id") ?? "").trim();
    const phoneNumber = normalizePhoneNumber(String(formData.get("phone_number") ?? ""));
    const amount = Number(formData.get("amount"));
    const email = String(formData.get("email") ?? "").trim();
    const referrerCode = String(formData.get("referrer_code") ?? "").trim();

    if (
      !productId ||
      !isValidNigerianPhoneNumber(phoneNumber) ||
      !Number.isFinite(amount) || amount <= 0 ||
      !isValidEmail(email)
    ) {
      return json({ intent, error: "Provide a valid email and confirm the data purchase details." }, { status: 400 });
    }

    const purchaseResponse = await vtuServer.purchaseVTUDataProductFromBank({
      vtu_product_id: productId,
      phone_number: phoneNumber,
      amount,
      email,
      redirect_url: new URL("/vtuservice/provider_payment_redirect", request.url).toString(),
      ...(referrerCode ? { referrer_code: referrerCode } : {}),
    }, request);

    if (purchaseResponse.error) {
      return json({ intent, error: getErrorMessage(purchaseResponse.error, "Unable to start bank payment.") }, { status: 400 });
    }

    const paymentLink = purchaseResponse.data?.payment_link?.trim();
    if (!paymentLink) {
      return json({ intent, error: "Payment provider did not return a payment link." }, { status: 400 });
    }

    return redirect(paymentLink);
  }

  if (intent !== "search_data_plans") {
    return json({ intent, plans: null, error: "Unsupported data-plan action." }, { status: 400 });
  }

  const phoneNumber = normalizePhoneNumber(String(formData.get("phone_number") ?? ""));

  if (!isValidNigerianPhoneNumber(phoneNumber)) {
    return json({ intent, phoneNumber, plans: null, error: "Enter a valid Nigerian phone number." }, { status: 400 });
  }

  const response = await vtuServer.searchDataPlans({ phone_number: phoneNumber }, request);

  if (response.error) {
    return json({ intent, phoneNumber, plans: null, error: getErrorMessage(response.error, "Unable to load data plans.") }, { status: 400 });
  }

  return json({ intent, phoneNumber, plans: response.data ?? null, error: null });
}

function NetworkLogo({ network }: { network: string }) {
  const networkKey = network.toLowerCase().replace(/\s+/g, "");
  const networkIcons: Record<string, string> = {
    mtn: icons.mtnIcon,
    glo: icons.gloIcon,
    airtel: icons.airtelIcon,
    "9mobile": icons.nineMobileIcon,
    etisalat: icons.nineMobileIcon,
  };

  return <Svg aria-label={`${network} network`} className="h-14 w-14" role="img" src={networkIcons[networkKey] ?? icons.dataIcon} />;
}

function DataSkeleton() {
  return (
    <div aria-hidden="true" className="animate-pulse space-y-5">
      <div className="h-28 rounded-[1.5rem] bg-slate-200" />
      <div className="h-14 rounded-2xl bg-slate-200" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => <div className="h-40 rounded-[1.5rem] bg-slate-200" key={item} />)}
      </div>
    </div>
  );
}

function DataPlanCard({ plan, onPreview }: { plan: VTUProduct; onPreview: (plan: VTUProduct) => void }) {
  return (
    <button
      className="group rounded-[1.5rem] border border-brand-grey bg-white p-5 text-left shadow-[0_12px_36px_rgba(14,42,77,0.06)] transition hover:-translate-y-1 hover:border-brand-pink hover:shadow-[0_18px_44px_rgba(14,42,77,0.12)]"
      onClick={() => onPreview(plan)}
      type="button"
    >
      <p className="text-2xl font-black text-brand-navy">{formatAmount(plan.size)}{plan.size_unit}</p>
      <p className="mt-2 text-sm font-semibold text-brand-slate">Valid for {plan.validity} {plan.validity_unit}</p>
      <p className="mt-5 border-t border-slate-100 pt-4 text-lg font-black text-brand-pink">
        {plan.retail_price_currency}{plan.discounted_retail_price != null && plan.discounted_retail_price !== plan.retail_price ? (
          <>
            <span className="mr-2 text-sm font-semibold text-brand-slate line-through">{formatAmount(plan.retail_price)}</span>
            {formatAmount(plan.discounted_retail_price)}
          </>
        ) : formatAmount(plan.retail_price)}
      </p>
    </button>
  );
}

function DataPlans({ plans, onPreview }: { plans: VTUDataPlansDTO; onPreview: (plan: VTUProduct) => void }) {
  const categories = plans.categories ?? [];
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.category_id ?? "");

  useEffect(() => {
    setActiveCategoryId(categories[0]?.category_id ?? "");
  }, [plans]);

  const activeCategory: VTUDataCategoryResponse | undefined = categories.find((category) => category.category_id === activeCategoryId) ?? categories[0];
  const activePlans = activeCategory?.plans ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-[1.5rem] border border-brand-grey bg-secondary p-5">
        <NetworkLogo network={plans.network} />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-slate">Available network</p>
          <h2 className="mt-1 text-2xl font-black text-brand-navy">{plans.network}</h2>
        </div>
      </div>

      {categories.length > 0 ? (
        <>
          <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Data plan categories">
            {categories.map((category) => {
              const isActive = category.category_id === activeCategory?.category_id;

              return (
                <button
                  aria-selected={isActive}
                  className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition ${isActive ? "bg-brand-pink text-white" : "bg-secondary text-brand-navy hover:bg-brand-pink/10"}`}
                  key={category.category_id}
                  onClick={() => setActiveCategoryId(category.category_id)}
                  role="tab"
                  type="button"
                >
                  {category.category_name}
                </button>
              );
            })}
          </div>

          {activePlans.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {activePlans.map((plan) => <DataPlanCard key={plan.str_id} onPreview={onPreview} plan={plan} />)}
            </div>
          ) : (
            <p className="rounded-2xl bg-secondary p-5 text-sm text-brand-slate">No data plans are available in this category.</p>
          )}
        </>
      ) : (
        <p className="rounded-2xl bg-secondary p-5 text-sm text-brand-slate">No data plan categories are available for this number.</p>
      )}
    </div>
  );
}

type DataPaymentPreview = {
  preview: DiscountedDataAmountResponse;
  wallet: VtuPaymentWallet | null;
  walletError: string | null;
  plan: VTUProduct;
};

function DataPaymentPreviewModal({
  data,
  phoneNumber,
  user,
  referrerCode,
  walletPaymentOpen,
  walletPin,
  bankPaymentOpen,
  bankEmail,
  isPurchaseProcessing,
  isBankPaymentProcessing,
  onReferrerCodeChange,
  onWalletPaymentOpen,
  onWalletPinChange,
  onCompleteWalletPurchase,
  onBankPaymentOpen,
  onBankEmailChange,
  onStartBankPayment,
  onClose,
}: {
  data: DataPaymentPreview;
  phoneNumber: string;
  user: UserAtom | null;
  referrerCode: string;
  walletPaymentOpen: boolean;
  walletPin: string;
  bankPaymentOpen: boolean;
  bankEmail: string;
  isPurchaseProcessing: boolean;
  isBankPaymentProcessing: boolean;
  onReferrerCodeChange: (value: string) => void;
  onWalletPaymentOpen: () => void;
  onWalletPinChange: (value: string) => void;
  onCompleteWalletPurchase: () => void;
  onBankPaymentOpen: () => void;
  onBankEmailChange: (value: string) => void;
  onStartBankPayment: () => void;
  onClose: () => void;
}) {
  const hasSufficientWalletBalance = Boolean(data.wallet && data.wallet.withdrawable_balance >= data.preview.amount);
  const showComingSoon = () => toast({ title: "Coming soon", description: "Data payment will be available in the next step." });

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[calc(100dvh-1rem)] max-w-md overflow-y-auto overscroll-contain rounded-[1.75rem] bg-white p-0 sm:max-h-[calc(100dvh-2rem)]">
        <DialogHeader className="border-b border-slate-200 p-6">
          <DialogTitle className="text-left text-2xl font-black text-brand-navy">Complete data payment</DialogTitle>
          <DialogDescription className="mt-2 text-left text-sm leading-6 text-slate-500">Complete purchase to earn Givaah Credits</DialogDescription>
        </DialogHeader>
        <VtuPaymentPreviewDetails
          onReferrerCodeChange={onReferrerCodeChange}
          phoneNumber={phoneNumber}
          preview={data.preview}
          productDescription={`${data.plan.description ? `${data.plan.description} · ` : ""}${formatAmount(data.plan.size)}${data.plan.size_unit} data plan valid for ${data.plan.validity} ${data.plan.validity_unit}`}
          referrerCode={referrerCode}
          user={user}
          wallet={data.wallet}
          walletError={data.walletError}
        />
        {bankPaymentOpen && !walletPaymentOpen && (
          <div className="space-y-3 border-t border-slate-200 px-6 pt-5">
            <p className="text-sm font-bold text-brand-navy">Provide your email to continue to bank payment.</p>
            <label className="block text-sm font-bold text-brand-navy" htmlFor="data-payment-email">
              Email address
              <input
                aria-describedby="data-payment-email-help"
                className="mt-2 h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 font-medium outline-none transition focus:border-brand-pink focus:bg-white"
                id="data-payment-email"
                onChange={(event) => onBankEmailChange(event.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={bankEmail}
              />
              <span className="mt-2 block text-xs font-normal leading-5 text-slate-500" id="data-payment-email-help">
                Provide email to notify you of the status of your data
              </span>
            </label>
          </div>
        )}
        {walletPaymentOpen && data.wallet && user && (
          <div className="space-y-3 border-t border-slate-200 px-6 pt-5">
            <p className="text-sm font-bold text-brand-navy">Pay {data.preview.currency}{formatAmount(data.preview.amount)} from wallet, enter pin to continue</p>
            <input
              aria-label="Wallet PIN"
              autoComplete="off"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-center text-xl font-bold tracking-[0.5em] outline-none transition focus:border-brand-pink focus:bg-white"
              inputMode="numeric"
              maxLength={6}
              onChange={(event) => onWalletPinChange(event.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="••••••"
              type="password"
              value={walletPin}
            />
          </div>
        )}
        <DialogFooter className="gap-3 border-t border-slate-200 p-6 sm:flex-row">
          {walletPaymentOpen ? (
            <button className="min-h-14 w-full rounded-2xl bg-brand-pink px-5 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-pink/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60" disabled={walletPin.length !== 6 || isPurchaseProcessing} onClick={onCompleteWalletPurchase} type="button">{isPurchaseProcessing ? "Processing…" : "Complete Purchase"}</button>
          ) : bankPaymentOpen ? (
            <button className="min-h-14 w-full rounded-2xl bg-brand-pink px-5 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-pink/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60" disabled={!isValidEmail(bankEmail) || isBankPaymentProcessing} onClick={onStartBankPayment} type="button">{isBankPaymentProcessing ? "Starting payment…" : "Continue to Bank"}</button>
          ) : (
            <>
              <button className="min-h-14 w-full flex-1 rounded-2xl bg-brand-pink px-5 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-pink/90 active:scale-[0.99] sm:w-auto" onClick={onBankPaymentOpen} type="button">Pay from Bank</button>
              {data.wallet && user && (
                <button className="min-h-14 w-full flex-1 rounded-2xl border-2 border-brand-pink px-5 py-4 text-base font-bold text-brand-pink shadow-sm transition hover:bg-brand-pink/5 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto" disabled={!hasSufficientWalletBalance || isPurchaseProcessing} onClick={onWalletPaymentOpen} type="button">Pay from Wallet</button>
              )}
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function useDataController() {
  const initialData = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();
  const previewFetcher = useFetcher<typeof action>();
  const { getUserStoreManager } = useUserManager();
  const [user, setUser] = useState<UserAtom | null>(null);
  const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber);
  const [paymentPreview, setPaymentPreview] = useState<DataPaymentPreview | null>(null);
  const [referrerCode, setReferrerCode] = useState("");
  const [walletPaymentOpen, setWalletPaymentOpen] = useState(false);
  const [walletPin, setWalletPin] = useState("");
  const [bankPaymentOpen, setBankPaymentOpen] = useState(false);
  const [bankEmail, setBankEmail] = useState("");
  const selectedPlan = useState<VTUProduct | null>(null);

  useEffect(() => {
    const user = getUserStoreManager();
    setUser(user);
    if (user?.phone) setPhoneNumber(normalizePhoneNumber(user.phone));
  }, []);

  useEffect(() => {
    if (fetcher.data?.error) {
      toast({
        variant: "destructive",
        title: "Data plans unavailable",
        description: fetcher.data.error,
      });
    }
  }, [fetcher.data?.error]);

  useEffect(() => {
    const data = previewFetcher.data;
    if (data?.intent === "preview_data_payment" && "preview" in data && data.preview && selectedPlan[0]) {
      setPaymentPreview({
        preview: data.preview,
        wallet: data.wallet,
        walletError: data.walletError,
        plan: selectedPlan[0],
      });
    }

    if (data?.error) {
      toast({ variant: "destructive", title: data.intent === "purchase_data_bank" ? "Unable to start bank payment" : "Unable to prepare payment", description: data.error });
    }
  }, [previewFetcher.data]);

  const hasValidPhoneNumber = isValidNigerianPhoneNumber(normalizePhoneNumber(phoneNumber));
  const plans = hasValidPhoneNumber && fetcher.data && "plans" in fetcher.data ? fetcher.data.plans : null;

  const requestPaymentPreview = (plan: VTUProduct) => {
    if (!plan.str_id || !Number.isFinite(plan.retail_price) || plan.retail_price <= 0) {
      toast({ variant: "destructive", title: "Invalid data plan", description: "This data plan cannot be selected." });
      return;
    }

    selectedPlan[1](plan);
    setPaymentPreview(null);
    setWalletPaymentOpen(false);
    setWalletPin("");
    setBankPaymentOpen(false);
    setBankEmail("");
    previewFetcher.submit({
      intent: "preview_data_payment",
      data_product_id: plan.str_id,
      amount: String(plan.retail_price),
    }, { method: "post" });
  };

  const closePaymentPreview = () => {
    setPaymentPreview(null);
    setReferrerCode("");
    setWalletPaymentOpen(false);
    setWalletPin("");
    setBankPaymentOpen(false);
    setBankEmail("");
    selectedPlan[1](null);
  };

  const openBankPayment = () => {
    setWalletPaymentOpen(false);
    setBankPaymentOpen(true);
    setBankEmail(user?.email ?? "");
  };

  const startBankPayment = () => {
    if (!paymentPreview || !isValidEmail(bankEmail)) {
      toast({ variant: "destructive", title: "Invalid email", description: "Provide email to notify you of the status of your data." });
      return;
    }

    previewFetcher.submit({
      intent: "purchase_data_bank",
      vtu_product_id: paymentPreview.plan.str_id,
      phone_number: phoneNumber,
      amount: String(paymentPreview.preview.amount),
      email: bankEmail.trim(),
      referrer_code: user ? "" : referrerCode,
    }, { method: "post" });
  };

  const completeWalletPurchase = () => {
    if (!paymentPreview?.wallet || !user || walletPin.length !== 6) return;

    previewFetcher.submit({
      intent: "purchase_data_wallet",
      vtu_product_id: paymentPreview.plan.str_id,
      phone_number: phoneNumber,
      amount: String(paymentPreview.preview.amount),
      wallet_id: paymentPreview.wallet.wallet_id,
      pin: walletPin,
      referrer_code: referrerCode,
    }, { method: "post" });
  };

  return {
    fetcher,
    phoneNumber,
    setPhoneNumber: (value: string) => setPhoneNumber(normalizePhoneNumber(value)),
    plans,
    user,
    paymentPreview,
    referrerCode,
    setReferrerCode,
    walletPaymentOpen,
    walletPin,
    setWalletPin,
    completeWalletPurchase,
    openWalletPayment: () => setWalletPaymentOpen(true),
    bankPaymentOpen,
    bankEmail,
    setBankEmail,
    openBankPayment,
    startBankPayment,
    requestPaymentPreview,
    closePaymentPreview,
    hasValidPhoneNumber,
    isLoading: fetcher.state !== "idle" || previewFetcher.state !== "idle",
    isPurchaseProcessing: previewFetcher.state !== "idle",
    isBankPaymentProcessing: previewFetcher.state !== "idle" && bankPaymentOpen,
  };
}

export default function DataPage() {
  const { fetcher, phoneNumber, setPhoneNumber, plans, user, paymentPreview, referrerCode, setReferrerCode, walletPaymentOpen, walletPin, setWalletPin, completeWalletPurchase, openWalletPayment, bankPaymentOpen, bankEmail, setBankEmail, openBankPayment, startBankPayment, requestPaymentPreview, closePaymentPreview, hasValidPhoneNumber, isLoading, isPurchaseProcessing, isBankPaymentProcessing } = useDataController();

  return (
    <main className="grow min-w-0 overflow-x-hidden bg-white text-brand-navy">
      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mb-8 flex items-start gap-4 sm:mb-10">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-brand-pink/10 text-brand-pink">
            <Svg aria-label="Data" className="h-10 w-10" role="img" src={icons.dataIcon} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-pink">VTUload</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Buy data</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-brand-navy/70 sm:text-base">Enter a phone number to see the data plans available on its network.</p>
          </div>
        </div>

        <fetcher.Form method="post">
          <section className="mb-8 rounded-[1.75rem] border border-brand-grey bg-white p-5 shadow-[0_16px_48px_rgba(14,42,77,0.08)] sm:mb-10 sm:p-7">
            <input name="intent" type="hidden" value="search_data_plans" />
            <label className="block text-sm font-bold text-brand-navy" htmlFor="data_phone_number">Phone number</label>
            <input autoComplete="tel" className="mt-3 h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-lg font-semibold outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white" id="data_phone_number" inputMode="numeric" name="phone_number" onChange={(event) => setPhoneNumber(event.target.value)} placeholder="080 1234 5678" type="tel" value={phoneNumber} />
            <p className="mt-3 text-xs leading-5 text-brand-slate">Use an 11-digit Nigerian number starting with 0 or a 13-digit number starting with 234.</p>
            <button className="mt-5 h-14 w-full rounded-2xl bg-brand-pink px-6 font-bold text-white transition hover:bg-brand-pink/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60" disabled={!hasValidPhoneNumber || isLoading} type="submit">
              {isLoading ? "Loading data plans…" : "Get Data Plans"}
            </button>
          </section>
        </fetcher.Form>

        {isLoading ? <DataSkeleton /> : plans ? <DataPlans onPreview={requestPaymentPreview} plans={plans} /> : <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-secondary px-5 py-12 text-center"><p className="text-lg font-bold text-brand-navy">Your data plans will appear here</p><p className="mt-2 text-sm text-brand-slate">Enter a valid phone number to continue.</p></div>}
      </section>
      {paymentPreview && <DataPaymentPreviewModal bankEmail={bankEmail} bankPaymentOpen={bankPaymentOpen} data={paymentPreview} isBankPaymentProcessing={isBankPaymentProcessing} isPurchaseProcessing={isPurchaseProcessing} onBankEmailChange={setBankEmail} onBankPaymentOpen={openBankPayment} onClose={closePaymentPreview} onCompleteWalletPurchase={completeWalletPurchase} onReferrerCodeChange={setReferrerCode} onStartBankPayment={startBankPayment} onWalletPaymentOpen={openWalletPayment} onWalletPinChange={setWalletPin} phoneNumber={phoneNumber} referrerCode={referrerCode} user={user} walletPaymentOpen={walletPaymentOpen} walletPin={walletPin} />}
    </main>
  );
}
