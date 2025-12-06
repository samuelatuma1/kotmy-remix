import { ApiCall } from "~/lib/api/fetcher";
import { ILoginDTO, ILoginResponseDTO } from "./types/auth.dtos";
import { ApiEndPoints } from "~/lib/api/endpoints";


export default class AuthServer {
    async login(loginDto: ILoginDTO) {
        let  { data, error, headers }  = await ApiCall.call<ILoginResponseDTO, unknown>({
                    url: ApiEndPoints.login,
                    method: "POST",
                    data: loginDto
                })

        
        if (error) return { error: error, data: null, headers }
        if(!headers){
            headers = {'Set-Cookie': data?.token ?? ''}
        }
        return { data, error: null, headers }
    }

    async signup(formData: FormData){
        let  { data, error, headers }  = await ApiCall.call<ILoginResponseDTO, unknown>({
                    url: ApiEndPoints.signup,
                    method: "POST",
                    headers: { "Content-Type": "multipart/form-data" },
                    data: formData
                })
        if (error) return { error: error, data: null, headers }
        if(!headers){
            headers = {'Set-Cookie': data?.token ?? ''}
        }
        return { data, error: null, headers }

    }

    async getMe(cookie: string) {
        console.log({cookie, d: "updating profile"})

        let { data, error, headers } = await ApiCall.call<ILoginResponseDTO, unknown>({
            url: ApiEndPoints.me,
            method: "GET",
        }, cookie);
        return { data, error, headers };
    }

    async updateProfile(formData: FormData, cookie: string) {
        for(var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        let { data, error, headers } = await ApiCall.call<ILoginResponseDTO, unknown>({
            url: ApiEndPoints.updateProfile,
            method: "POST",
            headers: { "Content-Type": "multipart/form-data" },
            data: formData
        }, cookie);
        return { data, error, headers };
    }

    prepareUserSignupPayload(formData: FormData) {
    // Prepare the form data for the backend (multipart/form-data)
        const signupData = new FormData();
        signupData.append("first_name", formData.get("first_name") as string);
        signupData.append("last_name", formData.get("last_name") as string);
        signupData.append("email", formData.get("email") as string);
        signupData.append("password", formData.get("password") as string);
        if (formData.get("status")) {
            signupData.append("status", formData.get("status") as string);
        }
        const imageFile = formData.get("image");
        if (!(imageFile instanceof File && imageFile.size === 0)) {
            signupData.append("image", formData.get("image") as File);
         }

        return signupData;
    }

    prepareUpdateUserPayload(formData: FormData) {
    // Prepare the form data for the backend (multipart/form-data)
         const updateData = new FormData();
        updateData.append("email", formData.get("email") as string);
        if (formData.get("first_name")) updateData.append("first_name", formData.get("first_name") as string);
        if (formData.get("last_name")) updateData.append("last_name", formData.get("last_name") as string);
        if (formData.get("status")) updateData.append("status", formData.get("status") as string);
        const imageFile = formData.get("image");
        if (!(imageFile instanceof File && imageFile.size === 0)) {
            updateData.append("image", formData.get("image") as File)
        }
       
       
        return updateData;
    }
}


export const authServer = new AuthServer();