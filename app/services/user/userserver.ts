import { ApiEndPoints } from "~/lib/api/endpoints";
import { ApiCall } from "~/lib/api/fetcher";
import { IEditContestantDTO } from "../contestant/types/contestant.interface";
import { contestantRepo, ContestantRepository } from "../contestant/contestant.server";
import { IGivaahCreditQuery, UserCreditResponse } from "./types/user_.interface";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";

export interface IContactFormDTO {
    email: string;
    full_name: string;
    subject: string;
    message: string;
}


export interface IUserServer {
    getGivaahCredits(query?: IGivaahCreditQuery, cookies?: string | Request): Promise<TFetcherResponse<UserCreditResponse>>;
    submitContact(payload: IContactFormDTO, cookies?: string | Request): Promise<TFetcherResponse<boolean>>;

}
export class UserServer implements IUserServer {
    private readonly contestantServer: ContestantRepository
    public constructor(_contestServer: ContestantRepository){
        this.contestantServer = _contestServer
    }

    private buildQueryString(query?: IGivaahCreditQuery) {
        if (!query) return "";

        return new URLSearchParams(
            Object.entries(query).reduce((acc, [key, value]) => {
                if (value !== undefined && value !== null && value !== "") {
                    acc[key] = String(value);
                }
                return acc;
            }, {} as Record<string, string>)
        ).toString();
    }

    async getPendingUploads(cookies: string | Request){
        return await this.contestantServer.getPendingUploads(cookies)
        
    }

    async getGivaahCredits(query?: IGivaahCreditQuery, cookies?: string | Request): Promise<TFetcherResponse<UserCreditResponse>> {
        const queryString = this.buildQueryString(query);
        const url = queryString ? `${ApiEndPoints.getGivaahCredits}?${queryString}` : ApiEndPoints.getGivaahCredits;

        const { data, error, authRequired } = await ApiCall.call<UserCreditResponse, unknown>({
            url,
            method: "GET",
        }, cookies);

        if (data) return { data };
        return { error, authRequired };
    }

    async submitContact(payload: IContactFormDTO, cookies?: string | Request): Promise<TFetcherResponse<boolean>> {
        const { data, error, authRequired } = await ApiCall.call<boolean, IContactFormDTO>({
            url: ApiEndPoints.supportContact,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: payload,
        }, cookies);

        if (data !== undefined) return { data };
        return { error, authRequired };
    }

    async getContestantDetails(contestantId: string, cookies: string | Request){
        return await this.contestantServer.getContestantDetailsWithContest(contestantId, cookies)
    }

    async updateUserContestant(payload: {contestantId: string, formData: FormData, editContestantDTO?: IEditContestantDTO}, cookies?: string | Request){
       const {error, authRequired, data} = await this.contestantServer.updateUserContestant(payload, cookies)

       return {error, authRequired, data};
    }


}






export let userServer = new UserServer(contestantRepo);
