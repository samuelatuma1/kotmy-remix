export interface ILoginDTO {
    email: string
    password: string
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
    user_profile?: UserProfile; 
}