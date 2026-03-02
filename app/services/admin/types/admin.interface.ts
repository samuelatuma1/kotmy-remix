export interface IAdmin {
    'id': string;
    'full_name': string;
    'email': string;
    'username': string;
    'password': string;
    'role': string;
    'permissions': string[];
    'access': boolean;
}

export interface ICreateAdminDto {
    'full_name': string;
    'email': string;
    'username': string;
    'password': string;
    'role': string;
    'permissions': string[];
}

export type TallyTransaction = {
    reference: string;
    contestant_code: string;
    number_of_votes: number;
    amount: number;
    app_fee: number;
    created_at: string;
    payment_status: 'PENDING'  | 'revoked' | 'PROCESSING' | 'SUCCESS' | 'FOR_REFUND' |'REFUNDED' | 'FAILED';
    customer: {
        name: string;
        email: string;
        phone_number: string;
    }
}

/*
 PENDING = 'PENDING'
    PROCESSING = 'PROCESSING'
    FOR_REFUND = "FOR_REFUND"
    REFUNDED = "REFUNDED"
    SUCCESS = 'SUCCESS'
    FAILED = 'FAILED'
*/

export type IncomeSummary = {
    contest: string;
    description: string;
    session: string;
    paystack: number;
    bank: number;
}

export type RegistrationTableData = {
    tx_ref: string;
    contest: string;
    contestant: string;
    sender: string;
    amount: number;
    date: string;
    status: 'pending' | 'verified' | 'revoked';
}

export interface IUpdateAdminDto extends ICreateAdminDto {}


export interface IGetPaymentsDTO {
  reference?: string | null;
  amount?: number | null;
  verified?: boolean | null;
  customer_email?: string | null;
  customer_name?: string | null;
  customer_phone?: string | null;
  contestant_code?: string | null;
  contest_id?: string | null;
  min_created_at?: string | null;
  max_created_at?: string | null;
  last_key_id?: string | null;
  page_size?: number;
}

// Payload for creating a bank/tally transaction from admin UI
export interface ICreateBankTransaction {
  email: string;
  phone_number: string;
  name: string;
  contest_id: string;
  contestant_code: string;
  amount: number;
  currency: string;
  gateway_status: string;
  bank_ref: string;
}