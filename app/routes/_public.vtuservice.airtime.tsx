import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

import { icons } from "~/assets/icons";
import { VtuPaymentPreviewDetails } from "~/components/public/vtu/VtuPaymentPreviewDetails";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/reusables/Dialog";
import Svg from "~/components/reusables/Svg";
import { toast } from "~/components/reusables/use-toast";
import { UserAtom } from "~/lib/store/atoms/token";
import { formatAmount, getErrorMessage, isValidEmail, isValidNigerianPhoneNumber, normalizePhoneNumber } from "~/lib/utils";
import { getAuthSessionToken } from "~/lib/session.server";
import { useUserManager } from "~/lib/store/store_managers/tokenManager";
import { walletRepo } from "~/services/wallet/wallet.server";
import { vtuServer } from "~/services/vtu/vtu.server";
import type { DiscountedAirtimeAmountResponse, VTUAirtimePlanDTO, VTUAirtimeProduct } from "~/services/vtu/types/vtu.interface";


export async function loader({ request }: LoaderFunctionArgs) {
  const phoneNumber = normalizePhoneNumber(new URL(request.url).searchParams.get("phone_number") ?? "");

  return json({ phoneNumber, plans: null, error: null });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = String(formData.get("intent") ?? "search_airtime_plans");

  if (intent === "preview_airtime_payment") {
    const airtimeProductId = String(formData.get("airtime_product_id") ?? "").trim();
    const amount = Number(formData.get("amount"));

    if (!airtimeProductId || !Number.isFinite(amount) || amount <= 0) {
      return json({ intent, preview: null, wallet: null, walletError: null, error: "Select a valid airtime plan and amount." }, { status: 400 });
    }

    const response = await vtuServer.getDiscountedAirtimePrice({
      airtime_product_id: airtimeProductId,
      amount,
    }, request);

    if (response.error || !response.data) {
      return json({
        intent,
        preview: null,
        wallet: null,
        walletError: null,
        error: getErrorMessage(response.error, "Unable to calculate the airtime price."),
      }, { status: 400 });
    }

    let wallet: { wallet_id: string; wallet_currency: string; withdrawable_balance: number } | null = null;
    let walletError: string | null = null;
    const authToken = await getAuthSessionToken(request);

    if (authToken) {
      const walletsResponse = await walletRepo.getUserWallets(request);
      const matchingWallet = walletsResponse.data?.find(
        (candidate) => candidate.wallet_currency === response.data?.currency,
      );

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

  if (intent === "purchase_wallet") {
    const airtimeProductId = String(formData.get("vtu_airtime_product_id") ?? "").trim();
    const phoneNumber = normalizePhoneNumber(String(formData.get("phone_number") ?? ""));
    const airtimeAmount = Number(formData.get("airtime_amount"));
    const amountPaid = Number(formData.get("amount_paid"));
    const walletId = String(formData.get("wallet_id") ?? "").trim();
    const pin = String(formData.get("pin") ?? "").trim();
    const referrerCode = String(formData.get("referrer_code") ?? "").trim();

    if (
      !airtimeProductId ||
      !isValidNigerianPhoneNumber(phoneNumber) ||
      !Number.isFinite(airtimeAmount) || airtimeAmount <= 0 ||
      !Number.isFinite(amountPaid) || amountPaid <= 0 ||
      !walletId || !/^\d{6}$/.test(pin)
    ) {
      return json({ intent, error: "Enter a valid six-digit PIN and confirm the purchase details." }, { status: 400 });
    }

    const purchaseResponse = await vtuServer.purchaseVTUAirtimeProductFromWallet({
      vtu_airtime_product_id: airtimeProductId,
      phone_number: phoneNumber,
      airtime_amount: airtimeAmount,
      amount_paid: amountPaid,
      wallet_id: walletId,
      pin,
      ...(referrerCode ? { referrer_code: referrerCode } : {}),
    }, request);

    if (purchaseResponse.error || !purchaseResponse.data?.reference) {
      return json({
        intent,
        error: getErrorMessage(purchaseResponse.error, "Unable to complete the airtime purchase."),
      }, { status: 400 });
    }

    return redirect(`/vtuservice/vtupurchase/${encodeURIComponent(purchaseResponse.data.reference)}`);
  }

  if (intent === "purchase_bank") {
    const airtimeProductId = String(formData.get("vtu_airtime_product_id") ?? "").trim();
    const phoneNumber = normalizePhoneNumber(String(formData.get("phone_number") ?? ""));
    const airtimeAmount = Number(formData.get("airtime_amount"));
    const amountPaid = Number(formData.get("amount_paid"));
    const email = String(formData.get("email") ?? "").trim();
    const referrerCode = String(formData.get("referrer_code") ?? "").trim();
    const isAuthenticated = Boolean(await getAuthSessionToken(request));

    if (
      !airtimeProductId ||
      !isValidNigerianPhoneNumber(phoneNumber) ||
      !Number.isFinite(airtimeAmount) || airtimeAmount <= 0 ||
      !Number.isFinite(amountPaid) || amountPaid <= 0 ||
      !isValidEmail(email)
    ) {
      return json({ intent, error: "Provide a valid email and confirm the purchase details." }, { status: 400 });
    }

    const purchaseResponse = await vtuServer.purchaseVTUAirtimeProductFromBank({
      vtu_airtime_product_id: airtimeProductId,
      phone_number: phoneNumber,
      airtime_amount: airtimeAmount,
      amount_paid: amountPaid,
      email,
      redirect_url: new URL("/vtuservice/provider_payment_redirect", request.url).toString(),
      referrer_code: isAuthenticated ? null : (referrerCode || null),
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

  const phoneNumber = normalizePhoneNumber(String(formData.get("phone_number") ?? ""));

  if (!isValidNigerianPhoneNumber(phoneNumber)) {
    return json({ intent: "search_airtime_plans", phoneNumber, plans: null, error: "Enter a valid Nigerian phone number." }, { status: 400 });
  }

  const response = await vtuServer.searchAirtimePlans({ phone_number: phoneNumber }, request);

  if (response.error) {
    return json({ intent: "search_airtime_plans", phoneNumber, plans: null, error: getErrorMessage(response.error, "Unable to load airtime plans.") }, { status: 400 });
  }

  return json({ intent: "search_airtime_plans", phoneNumber, plans: response.data ?? null, error: null });
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

  return (
    <Svg
      aria-label={`${network} network`}
      className="h-14 w-14"
      role="img"
      src={networkIcons[networkKey] ?? icons.airtimeIcon}
    />
  );
}

function PlanSkeleton() {
  return (
    <div aria-hidden="true" className="animate-pulse space-y-5">
      <div className="h-28 rounded-[1.5rem] bg-slate-200" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => <div className="h-32 rounded-[1.5rem] bg-slate-200" key={item} />)}
      </div>
    </div>
  );
}

type PaymentPreview = {
  preview: DiscountedAirtimeAmountResponse;
  wallet: { wallet_id: string; wallet_currency: string; withdrawable_balance: number } | null;
  walletError: string | null;
  airtimeProductId: string;
  airtimeAmount: number;
};

function PaymentPreviewModal({
  data,
  phoneNumber,
  user,
  pin,
  referrerCode,
  walletPaymentOpen,
  bankPaymentOpen,
  bankEmail,
  isBankPaymentProcessing,
  isPurchaseProcessing,
  onClose,
  onPinChange,
  onReferrerCodeChange,
  onWalletPaymentOpen,
  onBankPaymentOpen,
  onBankEmailChange,
  onStartBankPayment,
  onCompleteWalletPurchase,
}: {
  data: PaymentPreview;
  phoneNumber: string;
  user: UserAtom | null;
  pin: string;
  referrerCode: string;
  walletPaymentOpen: boolean;
  bankPaymentOpen: boolean;
  bankEmail: string;
  isBankPaymentProcessing: boolean;
  isPurchaseProcessing: boolean;
  onClose: () => void;
  onPinChange: (value: string) => void;
  onReferrerCodeChange: (value: string) => void;
  onWalletPaymentOpen: () => void;
  onBankPaymentOpen: () => void;
  onBankEmailChange: (value: string) => void;
  onStartBankPayment: () => void;
  onCompleteWalletPurchase: () => void;
}) {
  const isSignedIn = Boolean(user);
  const hasSufficientWalletBalance = Boolean(data.wallet && data.wallet.withdrawable_balance >= data.preview.amount);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[calc(100dvh-1rem)] max-w-md overflow-y-auto overscroll-contain rounded-[1.75rem] bg-white p-0 sm:max-h-[calc(100dvh-2rem)]">
        <DialogHeader className="border-b border-slate-200 p-6">
          <DialogTitle className="text-left text-2xl font-black text-brand-navy">Complete airtime payment</DialogTitle>
          <DialogDescription className="mt-2 text-left text-sm leading-6 text-slate-500">
            Complete purchase to earn givaah credits
          </DialogDescription>
        </DialogHeader>
        <VtuPaymentPreviewDetails
          onReferrerCodeChange={onReferrerCodeChange}
          phoneNumber={phoneNumber}
          preview={data.preview}
          referrerCode={referrerCode}
          user={user}
          wallet={data.wallet}
          walletError={data.walletError}
        />
        {walletPaymentOpen && data.wallet && isSignedIn && (
          <div className="space-y-3 border-t border-slate-200 px-6 pt-5">
            <p className="text-sm font-bold text-brand-navy">Pay {data.preview.currency}{formatAmount(data.preview.amount)} from wallet, enter pin to continue</p>
            <input
              aria-label="Wallet PIN"
              autoComplete="off"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-center text-xl font-bold tracking-[0.5em] outline-none transition focus:border-brand-pink focus:bg-white"
              inputMode="numeric"
              maxLength={6}
              onChange={(event) => onPinChange(event.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="••••••"
              type="password"
              value={pin}
            />
          </div>
        )}
        {bankPaymentOpen && !walletPaymentOpen && (
          <div className="space-y-3 border-t border-slate-200 px-6 pt-5">
            <p className="text-sm font-bold text-brand-navy">Provide your email to continue to bank payment.</p>
            <label className="block text-sm font-bold text-brand-navy" htmlFor="airtime-payment-email">
              Email address
              <input
                aria-describedby="airtime-payment-email-help"
                className="mt-2 h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 font-medium outline-none transition focus:border-brand-pink focus:bg-white"
                id="airtime-payment-email"
                onChange={(event) => onBankEmailChange(event.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={bankEmail}
              />
              <span className="mt-2 block text-xs font-normal leading-5 text-slate-500" id="airtime-payment-email-help">
                Provide email to notify you of the status of your airtime
              </span>
            </label>
          </div>
        )}
        <DialogFooter className="gap-3 border-t border-slate-200 p-6 sm:flex-row">
          {walletPaymentOpen ? (
            <button className="min-h-14 w-full rounded-2xl bg-brand-pink px-5 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-pink/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60" disabled={pin.length !== 6 || isPurchaseProcessing} onClick={onCompleteWalletPurchase} type="button">{isPurchaseProcessing ? "Processing…" : "Complete Purchase"}</button>
          ) : bankPaymentOpen ? (
            <button className="min-h-14 w-full rounded-2xl bg-brand-pink px-5 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-pink/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60" disabled={!isValidEmail(bankEmail) || isBankPaymentProcessing} onClick={onStartBankPayment} type="button">{isBankPaymentProcessing ? "Starting payment…" : "Continue to Bank"}</button>
          ) : (
            <>
              <button className="min-h-14 w-full flex-1 rounded-2xl bg-brand-pink px-5 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-pink/90 active:scale-[0.99] sm:w-auto" onClick={onBankPaymentOpen} type="button">Pay from bank</button>
              {data.wallet && isSignedIn && (
                <button className="min-h-14 w-full flex-1 rounded-2xl border-2 border-brand-pink px-5 py-4 text-base font-bold text-brand-pink shadow-sm transition hover:bg-brand-pink/5 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto" disabled={!hasSufficientWalletBalance} onClick={onWalletPaymentOpen} type="button">Pay from Wallet</button>
              )}
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function CustomPlan({ plan, onPreview }: { plan: VTUAirtimeProduct; onPreview: (product: VTUAirtimeProduct, amount: string) => void }) {
  const placeholder = `${formatAmount(plan.minimum_retail_price)} - ${formatAmount(plan.maximum_retail_price)}`;
  const [amount, setAmount] = useState("");

  return (
    <section className="rounded-[1.75rem] border border-brand-grey bg-white p-5 shadow-[0_16px_48px_rgba(14,42,77,0.08)] sm:p-7">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-slate">Choose an amount</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="block flex-1 text-sm font-bold text-brand-navy">
          Airtime amount
          <div className="mt-2 flex h-14 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-brand-pink focus-within:bg-white">
            <span className="mr-2 text-lg font-black text-brand-navy">{plan.retail_price_currency}</span>
            <input aria-label="Custom airtime amount" className="min-w-0 flex-1 bg-transparent text-lg font-semibold outline-none" inputMode="decimal" onChange={(event) => setAmount(event.target.value)} placeholder={placeholder} type="number" value={amount} />
          </div>
        </label>
        <button className="h-14 rounded-2xl bg-brand-pink px-8 font-bold text-white transition hover:bg-brand-pink/90 active:scale-[0.98]" onClick={() => onPreview(plan, amount)} type="button">Pay</button>
      </div>
    </section>
  );
}

function FixedPlanCard({ plan, onPreview }: { plan: VTUAirtimeProduct; onPreview: (product: VTUAirtimeProduct, amount: string) => void }) {
  return (
    <button className="group rounded-[1.5rem] border border-brand-grey bg-white p-5 text-left shadow-[0_12px_36px_rgba(14,42,77,0.06)] transition hover:-translate-y-1 hover:border-brand-pink hover:shadow-[0_18px_44px_rgba(14,42,77,0.12)]" onClick={() => onPreview(plan, String(plan.retail_price ?? ""))} type="button">
      <p className="text-2xl font-black text-brand-navy">{plan.retail_price_currency}{formatAmount(plan.retail_price)}</p>
      <p className="mt-3 text-sm font-semibold text-brand-slate">Pay {plan.retail_price_currency}{formatAmount(plan.retail_price_after_discount) ?? formatAmount(plan.retail_price)}</p>
      <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.16em] text-brand-pink transition group-hover:translate-x-1">Select plan →</span>
    </button>
  );
}

function Plans({ plans, onPreview }: { plans: VTUAirtimePlanDTO; onPreview: (product: VTUAirtimeProduct, amount: string) => void }) {
  const fixedPlans = plans.fixed_airtime_plans ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-[1.5rem] border border-brand-grey bg-secondary p-5">
        <NetworkLogo network={plans.network} />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-slate">Available network</p>
          <h2 className="mt-1 text-2xl font-black text-brand-navy">{plans.network}</h2>
        </div>
      </div>
      <CustomPlan onPreview={onPreview} plan={plans.custom_airtime_plan} />
      <section>
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-slate">Quick selection</p>
          <h2 className="mt-1 text-2xl font-black text-brand-navy">Fixed airtime plans</h2>
        </div>
        {fixedPlans.length > 0 ? <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">{fixedPlans.map((plan) => <FixedPlanCard key={plan.str_id} onPreview={onPreview} plan={plan} />)}</div> : <p className="rounded-2xl bg-secondary p-5 text-sm text-brand-slate">No fixed airtime plans are available for this number.</p>}
      </section>
    </div>
  );
}

export function useAirtimeController() {
  const initialData = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();
  const previewFetcher = useFetcher<typeof action>();
  const { getUserStoreManager } = useUserManager();
  const [user, setUser] = useState<UserAtom | null>(null);
  const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber);
  const [paymentPreview, setPaymentPreview] = useState<PaymentPreview | null>(null);
  const [walletPaymentOpen, setWalletPaymentOpen] = useState(false);
  const [bankPaymentOpen, setBankPaymentOpen] = useState(false);
  const [bankEmail, setBankEmail] = useState("");
  const [walletPin, setWalletPin] = useState("");
  const [referrerCode, setReferrerCode] = useState("");
  const pendingPayment = useRef<{ productId: string; amount: number } | null>(null);

  useEffect(() => {
    const user = getUserStoreManager();
    setUser(user);
    if (user?.phone) setPhoneNumber(normalizePhoneNumber(user.phone));
  }, []);

  useEffect(() => {
    if (fetcher.data?.error) {
      toast({
        variant: "destructive",
        title: "Airtime plans unavailable",
        description: fetcher.data.error,
      });
    }
  }, [fetcher.data?.error]);

  useEffect(() => {
    const data = previewFetcher.data;

    if (data?.intent === "preview_airtime_payment" && "preview" in data && data.preview) {
      const selectedPayment = pendingPayment.current;
      if (!selectedPayment) return;

      setPaymentPreview({
        preview: data.preview,
        wallet: data.wallet,
        walletError: data.walletError,
        airtimeProductId: selectedPayment.productId,
        airtimeAmount: selectedPayment.amount,
      });
    }

    if (data?.error) {
      toast({
        variant: "destructive",
        title: data.intent === "purchase_bank" ? "Unable to start bank payment" : "Unable to prepare payment",
        description: data.error,
      });
    }
  }, [previewFetcher.data]);

  const hasValidPhoneNumber = isValidNigerianPhoneNumber(normalizePhoneNumber(phoneNumber));
  const plans = hasValidPhoneNumber ? ((fetcher.data && "plans" in fetcher.data ? fetcher.data.plans : null) ?? initialData.plans) : null;
  const isLoading = fetcher.state !== "idle";

  const requestPaymentPreview = (product: VTUAirtimeProduct, amountValue: string) => {
    const amount = Number(amountValue);

    if (!product.str_id || !Number.isFinite(amount) || amount <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid airtime amount",
        description: "Enter a valid amount before continuing.",
      });
      return;
    }

    setPaymentPreview(null);
    setWalletPaymentOpen(false);
    setBankPaymentOpen(false);
    setBankEmail("");
    setWalletPin("");
    pendingPayment.current = { productId: product.str_id, amount };
    previewFetcher.submit(
      {
        intent: "preview_airtime_payment",
        airtime_product_id: product.str_id,
        amount: String(amount),
      },
      { method: "post" },
    );
  };

  const closePaymentPreview = () => {
    setPaymentPreview(null);
    setWalletPaymentOpen(false);
    setBankPaymentOpen(false);
    setWalletPin("");
    setBankEmail("");
    setReferrerCode("");
    pendingPayment.current = null;
  };

  const completeWalletPurchase = () => {
    if (!paymentPreview?.wallet || walletPin.length !== 6) return;

    previewFetcher.submit(
      {
        intent: "purchase_wallet",
        vtu_airtime_product_id: paymentPreview.airtimeProductId,
        phone_number: phoneNumber,
        airtime_amount: String(paymentPreview.airtimeAmount),
        amount_paid: String(paymentPreview.preview.amount),
        wallet_id: paymentPreview.wallet.wallet_id,
        pin: walletPin,
        referrer_code: referrerCode,
      },
      { method: "post" },
    );
  };

  const openBankPayment = () => {
    setWalletPaymentOpen(false);
    setBankPaymentOpen(true);
    setBankEmail(user?.email ?? "");
  };

  const startBankPayment = () => {
    if (!paymentPreview || !isValidEmail(bankEmail)) {
      toast({ variant: "destructive", title: "Invalid email", description: "Provide email to notify you of the status of your airtime." });
      return;
    }

    previewFetcher.submit({
      intent: "purchase_bank",
      vtu_airtime_product_id: paymentPreview.airtimeProductId,
      phone_number: phoneNumber,
      airtime_amount: String(paymentPreview.airtimeAmount),
      amount_paid: String(paymentPreview.preview.amount),
      email: bankEmail.trim(),
      referrer_code: user ? "" : referrerCode,
    }, { method: "post" });
  };

  return {
    fetcher,
    user,
    phoneNumber,
    setPhoneNumber: (value: string) => setPhoneNumber(normalizePhoneNumber(value)),
    plans,
    isLoading: isLoading || previewFetcher.state !== "idle",
    paymentPreview,
    requestPaymentPreview,
    closePaymentPreview,
    walletPaymentOpen,
    bankPaymentOpen,
    bankEmail,
    walletPin,
    referrerCode,
    setWalletPin,
    setReferrerCode,
    openWalletPayment: () => setWalletPaymentOpen(true),
    openBankPayment,
    setBankEmail,
    startBankPayment,
    completeWalletPurchase,
    isPurchaseProcessing: previewFetcher.state !== "idle",
    isBankPaymentProcessing: previewFetcher.state !== "idle" && bankPaymentOpen,
  };
}

export default function AirtimePage() {
  const {
    fetcher,
    user,
    phoneNumber,
    setPhoneNumber,
    plans,
    isLoading,
    paymentPreview,
    requestPaymentPreview,
    closePaymentPreview,
    walletPaymentOpen,
    bankPaymentOpen,
    bankEmail,
    walletPin,
    referrerCode,
    setWalletPin,
    setReferrerCode,
    openWalletPayment,
    openBankPayment,
    setBankEmail,
    startBankPayment,
    completeWalletPurchase,
    isPurchaseProcessing,
    isBankPaymentProcessing,
  } = useAirtimeController();

  return (
    <main className="grow min-w-0 overflow-x-hidden bg-white text-brand-navy">
      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mb-8 flex items-start gap-4 sm:mb-10">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-brand-pink/10 text-brand-pink"><Svg aria-label="Airtime" className="h-10 w-10" role="img" src={icons.airtimeIcon} /></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-pink">VTUload</p><h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Buy airtime</h1><p className="mt-3 max-w-xl text-sm leading-6 text-brand-navy/70 sm:text-base">Enter a phone number to see the airtime plans available on its network.</p></div>
        </div>
        <fetcher.Form method="post">
        <section className="mb-8 rounded-[1.75rem] border border-brand-grey bg-white p-5 shadow-[0_16px_48px_rgba(14,42,77,0.08)] sm:mb-10 sm:p-7">
          <label className="block text-sm font-bold text-brand-navy" htmlFor="phone_number">Phone number</label>
          <input autoComplete="tel" className="mt-3 h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-lg font-semibold outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white" id="phone_number" inputMode="numeric" name="phone_number" onChange={(event) => setPhoneNumber(event.target.value)} placeholder="080 1234 5678" type="tel" value={phoneNumber} />
          <p className="mt-3 text-xs leading-5 text-brand-slate">Use an 11-digit Nigerian number starting with 0 or a 13-digit number starting with 234.</p>
          <button className="mt-5 h-14 w-full rounded-2xl bg-brand-pink px-6 font-bold text-white transition hover:bg-brand-pink/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60" disabled={isLoading} type="submit">{isLoading ? "Loading plans…" : "Get airtime plans"}</button>
        </section>
        </fetcher.Form>
        {isLoading ? <PlanSkeleton /> : plans ? <Plans onPreview={requestPaymentPreview} plans={plans} /> : <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-secondary px-5 py-12 text-center"><p className="text-lg font-bold text-brand-navy">Your airtime plans will appear here</p><p className="mt-2 text-sm text-brand-slate">Enter a valid phone number to continue.</p></div>}
      </section>
      {paymentPreview && <PaymentPreviewModal bankEmail={bankEmail} bankPaymentOpen={bankPaymentOpen} data={paymentPreview} isBankPaymentProcessing={isBankPaymentProcessing} isPurchaseProcessing={isPurchaseProcessing} onBankEmailChange={setBankEmail} onBankPaymentOpen={openBankPayment} onClose={closePaymentPreview} onCompleteWalletPurchase={completeWalletPurchase} onPinChange={setWalletPin} onReferrerCodeChange={setReferrerCode} onStartBankPayment={startBankPayment} onWalletPaymentOpen={openWalletPayment} phoneNumber={phoneNumber} pin={walletPin} referrerCode={referrerCode} user={user} walletPaymentOpen={walletPaymentOpen} />}
    </main>
  );
}
