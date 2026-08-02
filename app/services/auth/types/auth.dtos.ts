export interface ILoginDTO {
    email: string
    password: string
}

export interface IForgotPasswordDTO {
    email: string
    redirect_link: string
}

export interface IResetPasswordDTO {
    email: string
    token: string
    password: string
    confirm_password: string
}

export interface UserProfile {
    first_name: string 
    last_name: string  
    status: string 
    image_url?: string
}
export class ILoginResponseDTO {
    email: string = "";
    fullName: string = "";
    token: string = "";
    permissions: string[] = [];
    roles: string[] = [];
    user_profile?: UserProfile; 
    referral_code?: string;
    withdrawal_pin_set: boolean = false;
    full_name: string = "";
    username: string = "";
    password: string = "";
    has_admin_access: boolean = false;
    is_superuser: boolean = false;
    is_staff: boolean = false;
    is_active: boolean = false;
    _id: string = "";
    str_id: string = "";
    business_id: string = "";
    is_partner_account: boolean = false 
}
