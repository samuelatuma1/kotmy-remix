import type { UserAtom } from "~/lib/store/atoms/token";
import { formatAmount } from "~/lib/utils";
import type { DiscountedAirtimeAmountResponse, DiscountedDataAmountResponse } from "~/services/vtu/types/vtu.interface";

export type VtuPaymentWallet = {
  wallet_id: string;
  wallet_currency: string;
  withdrawable_balance: number;
};

type VtuPaymentPreviewDetailsProps = {
  preview: DiscountedAirtimeAmountResponse | DiscountedDataAmountResponse;
  phoneNumber: string;
  user: UserAtom | null;
  referrerCode: string;
  onReferrerCodeChange: (value: string) => void;
  wallet: VtuPaymentWallet | null;
  walletError: string | null;
  productDescription?: string;
};

export function VtuPaymentPreviewDetails({
  preview,
  phoneNumber,
  user,
  referrerCode,
  onReferrerCodeChange,
  wallet,
  walletError,
  productDescription,
}: VtuPaymentPreviewDetailsProps) {
  const isSignedIn = Boolean(user);

  return (
    <div className="space-y-5 p-6">
      <div className="rounded-2xl bg-secondary p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-slate">Amount to pay</p>
        <p className="mt-2 text-3xl font-black text-brand-navy">{preview.currency}{formatAmount(preview.amount)}</p>
        <div className="mt-4 border-t border-slate-200 pt-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-slate">Phone number</p>
          <p className="mt-1 text-base font-bold text-brand-navy">{phoneNumber}</p>
        </div>
        {productDescription && <p className="mt-4 border-t border-slate-200 pt-4 text-sm font-semibold leading-6 text-brand-navy">{productDescription}</p>}
      </div>

      {isSignedIn ? (
        <div className="rounded-2xl border border-brand-pink/20 bg-brand-pink/5 p-4 text-sm font-semibold text-brand-navy">
          You will earn {formatAmount(preview.givaah_credits_bonus)} Givaah Credits for this purchase.
        </div>
      ) : (
        <label className="block text-sm font-bold text-brand-navy">
          Referrer code <span className="font-normal text-slate-400">(optional)</span>
          <input
            className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 font-medium outline-none transition focus:border-brand-pink focus:bg-white"
            onChange={(event) => onReferrerCodeChange(event.target.value)}
            placeholder="Enter referrer code"
            value={referrerCode}
          />
          <span className="mt-2 block text-xs font-normal leading-5 text-slate-500">
            Input optional referrer code so your referrer can earn {formatAmount(preview.givaah_credits_bonus)} Givaah Credits.
          </span>
        </label>
      )}

      {walletError && isSignedIn && <p className="text-xs leading-5 text-slate-500">Wallet payment is unavailable for this currency. You can still pay from bank.</p>}

      {wallet && isSignedIn && (
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-slate">Wallet balance</p>
          <p className="mt-2 text-lg font-black text-brand-navy">{wallet.wallet_currency}{formatAmount(wallet.withdrawable_balance)}</p>
        </div>
      )}
    </div>
  );
}
