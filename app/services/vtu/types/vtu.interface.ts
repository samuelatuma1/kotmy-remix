import { IBasePaginationQuery } from "~/services/admin/types/admin.interface";
import { ProfileOwnerType } from "~/services/auth/types/auth.dtos";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { WalletCurrency } from "~/services/wallet/types/wallet.interface";

// enums

export enum VTUProviderStatus {
  ACTIVE = "active",
  DELETED = "deleted",
}

export enum VTUProviderOfferStatus {
  ACTIVE = "active",
  SUSPENDED = "suspended",
  UNAVAILABLE = "unavailable",
}

export enum VTUProductStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}
export enum VTUType {
  AIRTIME = "Airtime",
  DATA = "Data",
}

export enum VTUDataPurchaseStatus {
  processing = "processing",
  fulfilled = "fulfilled",
  failed = "failed",
  reversed = "reversed",
}

export enum VTUProductCategory {
  PROMO = "Promo",
  SME = "SME",
  NORMAL = "Normal",
}

export enum VTUDataSizeUnit {
  GB = "GB",
  MB = "MB",
}

export enum VTUDiscountType {
  FIXED = "fixed",
  PERCENTAGE = "percentage",
}

export enum VTUPurchaseStatus {
  INITIATED = "initiated",
  PENDING = "pending",
  SUCCESSFUL = "successful",
  SUCCESSFUL_PENDING_FULFILLMENT = "successful_pending_fulfillment",
  FAILED = "failed",
  MANUAL_REVIEW = "manual_review",
  AWAITING_PROVIDER_WALLET_FUNDS = "awaiting_provider_funds",
}

export enum VTURetailPriceType {
  FIXED = "fixed",
  VARIABLE = "variable",
}

export enum VTUProviderPurchaseStatus {
  success_pending_disbursement = "success_pending_disbursement",
  successful_disbursed = "successful_disbursed",
  failed = "failed",
  provider_unavailable = "provider_unavailable",
  insufficient_funds = "insufficient_funds",
  transaction_not_found = "transaction_not_found",
}

export interface PurchaseAirtimeProductBaseModel {
  vtu_airtime_product_id: string;
  phone_number: string;
  airtime_amount: number;
  referrer_code?: string;
  /** Amount user would actually pay */
  amount_paid: number; 
}

export interface PurchaseVTUAirtimeProductFromWallet extends PurchaseAirtimeProductBaseModel {
  wallet_id: string;
  pin: string;
}

export interface PurchaseVTUAirtimeProductFromPaymentGatewayData extends PurchaseAirtimeProductBaseModel {
  email?: string; // Only optional because signed in users do not need to provide email
  redirect_url: string;
}


export interface VTUProductBase  {
  str_id: string;
  description?: string;
  network: string;
  type: VTUType;
  status: VTUProductStatus;
  set_by?: string;
  identifier: string;
  retail_price_currency: WalletCurrency;
  
  is_discounted: boolean;
  discount_type?: VTUDiscountType;
  discount_value?: number;
  minumum_discount_limit?: number; // Note: Kept the spelling exactly as it is in the Python model
  maximum_discount_limit?: number;
  retail_price?: number;
}

export interface VTUAirtimeProduct extends VTUProductBase {
  minimum_retail_price: number;
  maximum_retail_price: number;
  is_custom_amount: boolean;
}

/** Customer facing VTU Product */
export interface VTUAirtimeDTO extends VTUAirtimeProduct {}

export interface VTUAirtimePlanDTO {
  network: string;
  
  /** User-entered airtime amount */
  custom_airtime_plan: VTUAirtimeDTO;
  
  fixed_airtime_plans: VTUAirtimeDTO[];
  all_airtime_plans: VTUAirtimeDTO[];
}

export interface DiscountedAirtimeAmountResponse{
    amount: number;
    currency: WalletCurrency
    givaah_credits_bonus: number
    givaah_credits_rate: number,
}

export interface SearchAirtimePlansQuery{
    phone_number: string
}

export interface GetDiscountedAirtimePrice{
    airtime_product_id: string;
    amount: number
}

export interface VTUPurchaseResponse {
  _id: string;
  str_id: string
  vtu_product_id: string;
  owner_id?: string;
  owner_type?: ProfileOwnerType;
  reference: string;
  network?: string;
  phone_number: string;
  type: VTUType;
  user_uploaded_amount: number;
  original_retail_amount: number;
  full_retail: number;
  referrer_code?: string;
  provider_reference?: string;
  failure_reason?: string;
  status: VTUPurchaseStatus;
  currency: WalletCurrency;
  email?: string;
  wallet_id?: string;
  provider_charged_amount?: number;

  discounted_retail_amount: number;
  is_discounted: boolean;
  discount_type?: VTUDiscountType;
  discount_value?: number;

  vtu_provider: string;
  vtu_provider_offer_id: string;

  retry_count: number;
  // datetime is typically serialized as an ISO string in JSON responses
  last_retried_at?: string; 
  first_retried_at?: string;
  remark?: string;
  description: string;
}

export interface VTUAirtimeProductFromBank {
  vtu_airtime_product_id: string;
  phone_number: string;
  airtime_amount: number;
  referrer_code: string | null;
  amount_paid: number;
  email: string;
  redirect_url: string;
}

export interface VTUPurchaseResponsePaged extends IPaginatedResponse<VTUPurchaseResponse>{

}

export interface IQueryVTUPurchases extends IBasePaginationQuery {
  
}
