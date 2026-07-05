// filepath: app/services/partner/types/partner.interface.ts

import { IBasePaginationQuery } from "~/services/admin/types/admin.interface";
import { ILoginResponseDTO, UserProfile } from "~/services/auth/types/auth.dtos";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";

export interface AddressDTO {
  street: string;
  city: string;
  state: string;
  country: string;
}

export interface ContactPersonDTO {
  name: string;
  email: string;
  country: string;
  phone: string;
}

export interface ICreatePartnerDTO {
  legal_business_name: string;
  country_of_incorporation: string;
  phone_number: string;
  roc_cac_number: string;
  tax_id: string;
  industry: string;
  estimated_weekly_volume_min: number;
  estimated_weekly_volume_max: number;
  estimated_weekly_volume_currency: string;
  business_description: string;
  website: string;
  referral_percentage: number;
  business_email: string;
  notes: string[];
  contact_person: ContactPersonDTO;
  business_locations: AddressDTO[];
}

export type BusinessStatus =
  | "Pending"
  | "PendingVerification"
  | "Trial"
  | "Approved"
  | "Suspended"
  | "PendingSettlementDisbursement"
  | "Rejected";

export interface IUpdateBusinessStatus {
  business_id: string;
  status?: BusinessStatus | null;
  updated_by?: string;
  reason?: string | null;
  updated_on?: string;
  referral_percentage?: number | null;
}

export interface IBusinessOwnerModel {
  business_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  alternate_phone: string;
  password: string;
}

export interface BusinessQuery {
  legal_business_name?: string;
  country_of_incorporation?: string;
  phone_number?: string;
  roc_cac_number?: string;
  tax_id?: string;
  industry?: string;
  estimated_weekly_volume_min?: number;
  estimated_weekly_volume_max?: number;
  estimated_weekly_volume_currency?: string;
  business_email?: string;
  status?: BusinessStatus;
  website?: string;
  referral_percentage?: number;
  contact_person_name?: string;
  contact_person_email?: string;
  contact_person_country?: string;
  contact_person_phone?: string;
  location_street?: string;
  location_city?: string;
  location_state?: string;
  location_country?: string;
  page_size?: number;
  direction?: string;
  last_key_id?: string;
  first_key_id?: string;
}

export interface BusinessStatusHistory {
  status: BusinessStatus;
  updated_by: string;
  updated_on: string;
  reason?: string | null;
}

export interface Business {
  _id: string;
  str_id: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  legal_business_name: string;
  country_of_incorporation: string;
  phone_number: string;
  roc_cac_number: string;
  tax_id: string;
  industry: string;
  estimated_weekly_volume_min: number;
  estimated_weekly_volume_max: number;
  estimated_weekly_volume_currency: string;
  business_description: string;
  website: string;
  referral_percentage: number;
  business_email: string;
  status: BusinessStatus;
  notes: string[];
  status_history: BusinessStatusHistory[];
  contact_person: ContactPersonDTO;
  business_locations: AddressDTO[];
  owner_id?: string
  owner?: ILoginResponseDTO 
}

export type PartnerProductStatus = "available" | "out_of_stock" | "suspended";
export type WalletCurrency = "NGN" | "USD";

export interface ICreatePartnerProductDTO {
  name: string;
  description: string;
  price_min?: number;
  price_max?: number;
  category?: string;
  currency?: WalletCurrency;
  status?: PartnerProductStatus;
  business_id?: string;
  sku?: string;
  tags?: string[];
  created_by?: string;
  image?: File | null;
  locations?: string[];
}

export interface IUpdatePartnerProductDTO extends Partial<ICreatePartnerProductDTO> {}

export interface PartnerProduct {
  _id: string;
  name: string;
  description: string;
  price_min: number;
  price_max: number;
  category: string;
  currency: WalletCurrency;
  status: PartnerProductStatus;
  business_id?: string;
  sku?: string;
  tags: string[];
  created_by?: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
  image_urls: string[];
  main_image_url: string;
  locations: string[];
  accepts_prepayment?: boolean;
  meta_data?: {
    quantity_available?: number;
    other_details?: Record<string, unknown>;
  };
  product_locations?: PartnerLocation[];
}

export interface PartnerProductResponse extends PartnerProduct {
}

export interface IQueryPartnerProduct extends IBasePaginationQuery {
    name?: string;
    description?: string;
    price_min?: number;
    price_max?: number;
    category?: string;
    status?: PartnerProductStatus;
    sku?: string;
    tags?: string[];
    business_id?: string;
    wildcard?: string;
    location_wildcard?: string;
}

export interface IQueryPartnerLocations extends IBasePaginationQuery {
     /** ID of the business/partner this location belongs to */
  business_id?: string;
  
  /** Location name or label */
  name?: string;
  
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  
  latitude?: number;
  longitude?: number;
  
  is_primary?: boolean;

  contact_phone?: string;
  directions_hint?: string;
  opening_hours?: string;
}

export interface PartnerLocation {
  /** Internal database ID */
  _id: string;
  /** String representation of the ID for frontend use */
  str_id: string;
  
  /** ISO 8601 formatted timestamps */
  created_at: string;
  updated_at: string;
  
  /** Soft delete status */
  is_deleted: boolean;
  
  /** ID of the business/partner this location belongs to */
  business_id: string;
  
  /** Branch branding/name */
  name: string;
  
  // Address Details
  street: string;
  city: string;
  /** Short code (e.g., 'LA') */
  state: string;
  /** Short code (e.g., 'NG') */
  country: string;
  /** Full display name (e.g., 'Lagos') */
  state_name: string;
  /** Full display name (e.g., 'Nigeria') */
  country_name: string;
  postal_code: string;
  
  // Geographic Data
  latitude: number;
  longitude: number;
  
  /** Indicates if this is the main business branch */
  is_primary: boolean;

  // Contact & Support
  contact_phone: string;
  directions_hint: string;
  opening_hours: string;
}

export interface Cart {
  _id: string;
  str_id: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  user_id?: string;
  device_fingerprint?: string | null;
  cart_items: CartItem[];
  minimum_total_amount: number;
  maximum_total_amount: number;
  currency: string;
  status: string;
  order_id?: string | null;
}

export interface CartItem {
  product_id: string;
  product_location_id: string | null;
  quantity: number;
  product: PartnerProduct;
}

export interface ICartItemUpsertDTO {
  product_id: string;
  quantity: number;
  product_location_id?: string | null;
}

export interface IUpsertCartItemsDTO {
  cart_items: ICartItemUpsertDTO[];
}

export interface ICartItemCountSummary {
  itemCount: number;
  distinctItemCount: number;
}

export enum PaymentOptionKey{
  pay_inperson = "pay_inperson",
  prepay = "prepay"
}

export interface PaymentOption {
  name: string;
  description: string;
  key: PaymentOptionKey;
  is_available: boolean;
}

export interface DeliveryLocation{
  street: string
  city: string
  state: string
  country: string
}
export interface CreateDeliveryDetails {
  name?: string;
  email?: string;
  phone_number: string;
  location?: DeliveryLocation;
}

export interface DeliveryDetails {
  _id: string;
  str_id: string;
  device_fingerprint?: string;
  is_deleted: boolean;
  name?: string;
  email?: string;
  phone_number: string;
  location?: DeliveryLocation;
}


export interface ICartDeliveryAndPaymentOptions {
  cart: Cart | null;
  saved_delivery_details: DeliveryDetails[];
  payment_options: PaymentOption[];
}

export interface PlaceOrderDTO {
  delivery_details_id: string;
  payment_option: PaymentOptionKey;
  prepay_redirect_url?: string;
}

export interface OrderItem {
  product_id: string;
  product_name: string;
  product_location_id: string | null;
  business_id: string;
  quantity: number;
  discount_code: string | null;
  discount_amount: number;
  product_price_min: number;
  product_price_max: number;
  min_amount_total: number;
  max_amount_total: number;
  status: OrderProductStatus;
  currency: string;
  location_contact_phone: string | null;
  location_name: string | null;
  location_street: string | null;
  location_city: string | null;
  location_state: string | null;
  location_country: string | null;
  order_item_id: string;
  fulfilled_at: string | null;
  fulfilled_by: string | null;
  fulfilled_by_email: string | null;
  customer_confirmed_at?: string | null;
  customer_rating?: number | null;
  customer_remark?: string | null;
}

export interface OrderPaymentDetails {
  payment_option: PaymentOptionKey;
  status: string;
  amount: number;
  reference: string;
  payment_link: string | null;
}

export enum OrderStatus {
  PendingPrePayment = "PendingPrePayment",
  Pending = "Pending",
  Processing = "Processing",
  PaidPendingFulfillment = "PaidPendingFulfillment",
  PartiallyFulfilled = "PartiallyFulfilled",
  FullyFulfilled = "FullyFulfilled",
  Completed = "Completed",
  Cancelled = "Cancelled",
}

export enum OrderProductStatus {
  Pending = "Pending",
  Active = "Active",
  Cancelled = "Cancelled",
  Fulfilled = "Fulfilled",
  Returned = "Returned",
  FulfillmentConfirmedByCustomer = "FulfillmentConfirmedByCustomer",
}

export interface OrderResponse {
  _id: string;
  str_id: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  user_id: string;
  device_fingerprint: string | null;
  order_type: string;
  cart_id: string;
  business_id: string;
  business_name: string;
  business_email: string;
  business_phone_number: string;
  business_contact_person_name: string;
  business_contact_person_email: string;
  business_contact_person_phone: string;
  delivery_details_id: string;
  delivery_phone_number: string;
  delivery_name: string;
  delivery_email: string;
  delivery_street: string;
  delivery_city: string;
  delivery_state: string;
  delivery_country: string;
  location_contact_phones: string[];
  orders: OrderItem[];
  order_group_id: string;
  order_code: string;
  min_total_amount: number;
  max_total_amount: number;
  status: OrderStatus;
  currency: string;
  payment_details: OrderPaymentDetails;
  is_prepaid: boolean;
}

export interface CustomerOrdersQuery extends IBasePaginationQuery {
  order_status?: OrderStatus;
  order_product_status?: OrderProductStatus;
}

export interface BusinessSearchOrderDTO extends IBasePaginationQuery {
  order_status?: OrderStatus;
  order_product_status?: OrderProductStatus;
  order_code?: string;
  delivery_phone_number?: string;
  order_id?: string
}

export interface IOrderData {
  order_id: string;
  order_code: string;
  order_items_ids: string[];
}

export interface ICustomerConfirmOrder {
  order_id: string;
  order_code: string;
  order_item_id: string;
  rating?: number;
  remark?: string;
}

export enum PartnerPendingSettlementEnum {
  pending = "pending",
  written_off = "written_off",
  processing = "processing",
  failed = "failed",
  paid = "paid",
  overdue = "overdue"
}

export enum SettlementPaymentOption {
  wallet = "wallet",
  provider = "provider"
}

export interface ISearchPartnerSettlementDTO extends IBasePaginationQuery {
  business_id?: string;
  status?: PartnerPendingSettlementEnum;
  settlement_due_date?: string | Date; // Using string is standard for JSON serialized dates (ISO 8601)
  unique_key?: string;
  order_id?: string;
  order_item_id?: string;
  order_code?: string;
  currency?: WalletCurrency;
  business_name?: string;
  settlement_payment_option?: SettlementPaymentOption;
}

export interface PartnerSettlement {
  _id: string;
  str_id: string;
  created_at: string; // Or Date, if you parse it locally
  updated_at: string;
  is_deleted: boolean;
  business_id: string;
  original_amount: number;
  order_id: string;
  order_item_id: string;
  settlement_amount: number;
  settlement_due_date: string;
  percent_of_original_amount: number;
  status: PartnerPendingSettlementEnum;
  currency: WalletCurrency; // Or your WalletCurrency type
  unique_key: string;
  settlement_ledger_reference: string | null;
  waived_amount: number;
  waived_by_id: string | null;
  waived_by_email: string | null;
  last_payment_update?: string | null; // Serialized date from the API
  order_code: string;
  settlement_payment_ref: string | null;
  all_payment_refs: string[];
  settlement_payment_option: SettlementPaymentOption;
  processing_expiry?: string | null;
  business?: Business;
}
export type IPartnerSettlement = PartnerSettlement;

export interface ISettlementPayment{
  settlement_ids: string[];
  payment_option: SettlementPaymentOption,
  redirect_url?: string
}

export interface ISettlementPaymentProviderResponse {
  reference: string;
  payment_link: string | null;
}

export interface ISettlementPaymentWalletResponse {
  settlement_payment_ref: string;
  business_id: string;
  settlement_ids: string[];
  amount: number;
  currency: WalletCurrency; // You can fallback to `string` if this isn't strictly typed
  payment_option: SettlementPaymentOption;
  status: string; 
  message: string;
}
