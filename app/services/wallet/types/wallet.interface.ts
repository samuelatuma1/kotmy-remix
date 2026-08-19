import { IBasePaginationQuery } from "~/services/admin/types/admin.interface";
import { ILoginResponseDTO } from "~/services/auth/types/auth.dtos";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { IContestDto } from "~/services/contest/types/contest.interface";
import { IContestant, IContestantBiodata } from "~/services/contestant/types/contestant.interface";

export interface WalletMetrics {
  net_change_this_month: number;
  money_out: number;
  money_in: number;
  net_change: number;
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
  business_withdrawal_pin_set?: boolean
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
  payment_method?: "flutterwave" | "paystack" | "bank"
  contest_code?: string | null
}

export interface IWalletAccount {
  _id: string;
  str_id: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  wallet_id: string;
  name: string;
  acct_number: string;
  acct_type: "personal" | string;
  bankcode: string;
  bankname: string;
  paid_creation_fee: "yes" | "no";
  creation_fee_paid: number;
  creation_fee_paid_at: string | null;
  status: "verified" | string;
}

export interface ICurrencyBanks{
  name: string;
  code: string;
  country?: string | null | undefined 
}

export interface IResolveAccountDetailsResponse{
    country: string
    account_number: string
    bank_code: string
    account_name: string
}

export interface IResolveAccountRequest{
    currency: string
    account_number: string
    bank_code: string,
    wallet_id: string
}
export interface IGetWithdrawalCharge{
    wallet_id: string
    amount: number
    withdrawal_account_id: string
    withdrawal_pin: string
    accepted_charges: number,
}

export interface IWithdrawalChargeResponse {
    transaction_charge: number;
    other_charges: {
        [key: string]: number;
    };
    remark: string;
    currency: string;
    total_charge: number;
}
export interface IAddAccountDetailsRequest{
    currency: string
    account_number: string
    bank_code: string,
    wallet_id: string,
    pin: string
}

export interface IRequestWithdrawal {
    wallet_id: string;
    amount: number;
    withdrawal_account_id: string;
    withdrawal_pin: string;
    narration: string;
    accepted_charges: number;
}

export interface ICreateWithdrawalPinDTO {
  token: string;
  withdrawal_pin: string;
  confirm_withdrawal_pin: string;
}


export interface IRequestWithdrawalResponse {
    status: string;
    message: string;
    is_produced: string;
    reference: string;
}



export interface IReferrerBoardQuery extends IBasePaginationQuery  {
  wallet_id?: string;
  min_created_at?: string | Date; // ISO string or Date object
  max_created_at?: string | Date;
}

export interface IReferrerBoardResponse {
  contestant_biodata: IContestantBiodata;
  contestant_deets: IContestant[];
  current_contest: IContestDto;
  referrer_earnings_ledgers: ILedgerEntry[]
  total_earning: number;
  currency: string;
  contestant_biodata_id: string

}

export interface IReferrerBoardResponseSummary{
  currency: string;
  total_earning: number;
  total_contestants: number
}

export interface ReferrerBoardPagedResponse extends IPaginatedResponse<IReferrerBoardResponse> {
  summary: IReferrerBoardResponseSummary
}

export interface IAdminReferrerBoardQuery extends IBasePaginationQuery  {
  min_created_at?: string | Date; // ISO string or Date object
  max_created_at?: string | Date;
  wallet_id?: string;
  currency?: string
}

export interface IAdminIncomeForReferrer{
  referrer: ILoginResponseDTO;
  referrer_earnings_ledgers: ILedgerEntry[]
  total_earning: number;
  currency: string;
  referrer_id: string;
}
export interface IAdminReferralsIncomeForReferrerSummary{
  currency: string;
  total_earning: number;
  total_referrals: number
}
export interface IAdminRefereeIncomeForReferrerPagedResponse extends IPaginatedResponse<IAdminIncomeForReferrer>{
  summary: IAdminReferralsIncomeForReferrerSummary
}

export interface IAffiliateLeaderboardSearch extends IBasePaginationQuery {
    created_at_start_date: Date;
    created_at_end_date: Date;
    currency: WalletCurrency;
}

export interface IAffiliateLeaderboardResponse {
    user_name?: string | null;
    business_name?: string | null;
    currency: WalletCurrency;
    amount_earned: number;
    position: number;
}