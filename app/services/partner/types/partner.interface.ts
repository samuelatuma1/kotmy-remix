// filepath: app/services/partner/types/partner.interface.ts

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
}

export interface BusinessPagedResponse {
  current_page: number;
  total_pages: number;
  total_items: number;
  items_per_page: number;
  items: Business[];
  last_key_id?: string;
  first_key_id?: string;
  summary?: any;
}
