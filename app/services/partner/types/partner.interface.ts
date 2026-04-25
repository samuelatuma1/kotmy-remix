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
