// filepath: app/services/partner/types/partner.interface.ts

import { IBasePaginationQuery } from "~/services/admin/types/admin.interface";
import { ILoginResponseDTO, UserProfile } from "~/services/auth/types/auth.dtos";

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

// ...existing code...

export type BusinessStatus = "Pending" | "Approved" | "Rejected";

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
  reason: string;
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
