export interface WalletMetrics {
  net_change_this_month: number;
  money_out: number;
  money_in: number;
}

export interface IWallet {
  _id: string;
  str_id: string;
  created_at: string; // ISO Date String
  updated_at: string; // ISO Date String
  is_deleted: boolean;
  account_number: string;
  user_id: string;
  user_type: "INDIVIDUAL" | string; // Using a union if there are other known types
  account_balance: number;
  restricted_balance: number;
  wallet_currency: "NGN" | string;
  wallet_name: string;
  wallet_type: "withdrawable" | string;
  is_active: boolean;
  daily_transaction_limit: number;
  withdrawable_balance: number;
  metrics: WalletMetrics;
}

export interface ILedgerEntry {
  _id: string;
  str_id: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  payment_ref: string;
  amount: number;
  currency: "NGN" | "USD" | string;
  wallet_id: string;
  wallet_name: string;
  contestant_code: string | null;
  contest_code: string | null;
  stage_id: string | null;
  description: string;
  entry_type: "credit" | "debit" | string;
  balance_after: number | null;
  status: "completed" | "pending" | "failed" | string;
  completed_at: string | null;
}


export type LedgerEntryType = "credit" | "debit";
export type LedgerStatus = "completed" | "pending" | "failed";
export type WalletCurrency = "NGN" | "USD" | string;


export interface IUserLedgersQuery{
  transaction_type?: LedgerEntryType | null;
  status?: LedgerStatus | null;
  min_amount?: number | null;
  max_amount?: number | null;
  min_created_at?: string | null; // ISO Date string
  max_created_at?: string | null; // ISO Date string
  user_id?: string | null;
  wallet_id?: string | null;
  currency?: WalletCurrency | null;
  last_key_id?: string | null;
  page_size?: number;
}

export interface IWalletRepository{

}