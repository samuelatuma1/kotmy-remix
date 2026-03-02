export interface WalletAccount {
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
