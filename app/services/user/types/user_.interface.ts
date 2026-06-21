export interface IGivaahCreditQuery{
    phone?: string
    order_code?: string
}

export interface CreditBreakdown {
  rate_compared_to_original: number;
  value: number;
  order_item_id: string | null;
  created_at: string; // ISO Date String
  original_value: number;
}

export interface Credit {
  _id: string;
  str_id: string;
  created_at: string; // ISO Date String
  updated_at: string; // ISO Date String
  is_deleted: boolean;
  order_id: string;
  user_id: string;
  delivery_details_id: string;
  order_code: string;
  delivery_details_phone: string;
  available_credit_value: number;
  original_total_credit_value: number;
  redeemed_credit_value: number;
  used_credit_value: number;
  order_currency: string;
  redeemed_credit_value_break_down: CreditBreakdown[];
  used_credit_value_break_down: CreditBreakdown[];
}

export interface UserCreditResponse {
  available_credit_value: number;
  user_id: string;
  phone_number: string | null;
  order_code: string | null;
  credits: Credit[];
}

export interface UseGivaahCreditsRequest {
  contestant_id: string;
  givaah_credits_to_use: number;
  phone?: string;
  order_code?: string;
}