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
  REFUND_INITIATED = "refund_initiated",
  REFUND_STATUS_UNKNOWN = "refund_status_unknown",
  REFUND_FAILED = "refund_failed",
  REFUND_PROCESSING = "refund_processing",
  REFUNDED = "refunded"
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

/**
 * 
 * {
    {
    "vtu_product_id": "6aa84b5312ea7bcdd1b31a22",
    "email": "samuel@gmail.com",
    "phone_number": "07059180332",
    "amount": 101.2,
    "referrer_code": "agara",
    "redirect_url": "https://google.com"
}
}
 */

export interface PurchaseDataProductBaseModel {
  vtu_product_id: string;
  phone_number: string;
  amount: number;
  referrer_code?: string;
}

export interface PurchaseDataProductFromWallet extends PurchaseDataProductBaseModel {
  wallet_id: string;
  pin: string;
}

export interface PurchaseDataProductFromBank {
  vtu_product_id: string;
  phone_number: string;
  amount: number;
  email: string;
  referrer_code?: string;
  redirect_url: string;
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
  _id: string;
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
  minumum_discount_limit?: number; 
  maximum_discount_limit?: number;
  retail_price?: number;
  retail_price_after_discount?: number
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
export interface VTUProduct extends VTUProductBase {
  category: VTUProductCategory;
  validity: number;
  validity_unit: string;
  size: number;
  size_unit: VTUDataSizeUnit;
  retail_price: number;
  retail_price_type: VTURetailPriceType;
}

export interface VTUDataCategoryResponse{
  category_id: string;
  category_name: string;
  plans: VTUProduct[]
}

export interface VTUDataPlansDTO{
  network: string;
  categories: VTUDataCategoryResponse[]
}

export interface DiscountedAirtimeAmountResponse{
    amount: number;
    currency: WalletCurrency
    givaah_credits_bonus: number
    givaah_credits_rate: number,
}

export interface DiscountedDataAmountResponse{
    amount: number;
    currency: WalletCurrency
    givaah_credits_bonus: number
    givaah_credits_rate: number,
}

export interface SearchAirtimePlansQuery{
    phone_number: string
}

export interface SearchDataPlansQuery{
    phone_number: string
}

export interface GetDiscountedAirtimePrice{
    airtime_product_id: string;
    amount: number
}

export interface GetDiscountedDataPrice{
    data_product_id: string;
    amount: number
}

export interface VTUPurchaseResponse {
  _id: string;
  str_id: string
  created_at: string;

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
  last_created_at: string;
  first_created_at: string;

}

export interface IQueryVTUPurchases extends IBasePaginationQuery {
  status?: VTUPurchaseStatus;
  email?: string;
  type?: VTUType;
  phone_number?: string;
  reference?: string;
  last_created_at?: string;
  first_created_at?: string;
}

export interface InitiateVTUPurchaseRefundDTO{
    reference: string
    reason: string

}

export interface BaseVTUProviderOffer  {
  _id: string;
  str_id: string;
  created_at: string;
  provider: string;
  network: string;
  description?: string;
  vtu_product_id?: string;
  status: VTUProviderOfferStatus;
  priority: number;
  offer_identifier: string; // Default: ""
}

export interface VTUProviderOffer extends BaseVTUProviderOffer {
  /** Mapped to VTU category string */
  category: string;
  validity: number;
  validity_unit: string;
  type: VTUType;
  size: number;
  size_unit: VTUDataSizeUnit;
  cost_price: number;
  cost_price_currency: WalletCurrency;
  provider_plan_id: string;
}

export interface VTUAirtimeProviderOffer extends BaseVTUProviderOffer {
  minimum_retail_price: number;
  maximum_retail_price: number;
  proposed_cost_price_discount_percent: number;
}
export interface SearchVTUProduct extends IBasePaginationQuery {
  description?: string;
  network?: string;
  category?: VTUProductCategory;
  status?: VTUProductStatus;
}

export interface VTUProductResponseDTO extends VTUProduct{
  _id: string;
  providers_offers: VTUProviderOffer[]
}
export interface VTUProductResponseDTOPagedModel extends IPaginatedResponse<VTUProductResponseDTO>{
}



export interface UpdateVTUProductDTO {
  description?: string;
  is_discounted?: boolean;
  discount_type?: VTUDiscountType;
  discount_value?: number;
  retail_price?: number;
}
