import { TFetcherResponse } from "~/lib/api/types/fetcher.interface"
import { IContestant, IContestantRepository, IEditContestantDTO, IGetTallyLinkDTO, ILeanContestant, IToggleEvictContestantDTO, IVoteContestantDto, IVoteContestantFromWalletPayload, IVoteContestantWithGivaahCredits } from "./types/contestant.interface"
import { ApiCall } from "~/lib/api/fetcher"
import { MethodsEnum } from "~/lib/api/types/methods.interface"
import { ApiEndPoints } from "~/lib/api/endpoints"
import { IContestWStageWContestant } from "../contest/types/contest.interface"

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjFkYTc3MTU1MzE3NzdjMDMwZWI2NCIsImVtYWlsIjoiYXR1bWFzYW11ZWxva3BhcmEzQGdtYWlsLmNvbSIsImlzX3N0YWZmIjp0cnVlLCJpc19zdXBlcnVzZXIiOnRydWUsInJvbGVzIjpbXSwicGVybWlzc2lvbnMiOltdLCJleHAiOjE3NzExNzM0NDJ9.sHAuj-OTgwKuSpgrsY0vjPeHHnOJNzENSxmYIFo414k"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWZjNTg0ZDdiNmI5Y2RlODI2MTg3MCIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaXNfc3RhZmYiOnRydWUsImlzX3N1cGVydXNlciI6dHJ1ZSwiaXNfYWN0aXZlIjp0cnVlLCJyb2xlcyI6WyJ1c2VyIl0sInBlcm1pc3Npb25zIjpbIm1hbmFnZSB1c2VycyIsIm1hbmFnZSBjb250ZW50IiwibWFuYWdlIGJsb2ciLCJtYW5hZ2UgcGF5bWVudCIsIm1hbmFnZSBjb250ZXN0IiwibWFuYWdlIHZvdGVzIl0sImV4cCI6MTgwMTIyOTgyMH0.hvXKQTbFqe1roaqPJQAJrngxPRS5kbyu_UHgJkq2Hy8"

export class ContestantRepository implements IContestantRepository {
    async callTallyWebhook(dto: unknown): Promise<TFetcherResponse<unknown>> {
        let res = await ApiCall.call({
            method: MethodsEnum.POST,
            url: ApiEndPoints.callTallyWebhook,
            // headers: { "verif-hash": "FLWSECK_TESTfae195a81741" },
            data: dto
        })
        console.log("Tally webhook called. Response:", JSON.stringify(res))
        return res
    }
    async editContestantAdmin(payload: { dto: FormData, contestantId: string }, token: string): Promise<TFetcherResponse<IContestant>> {
        return await ApiCall.call({
            method: MethodsEnum.PUT,
            url: ApiEndPoints.editContestant(payload.contestantId),
            headers: { 
                // Authorization: `Bearer ${token}`, 
                "Content-Type": "multipart/form-data" },
            data: payload.dto
        }, token)
    }
    async getTallyLink(dto: IGetTallyLinkDTO): Promise<TFetcherResponse<{ payment_link: string }>> {
        return await ApiCall.call({
            method: MethodsEnum.POST,
            url: ApiEndPoints.getTallyLink,
            data: dto
        })
    }
    async registerContestant(payload: { contestId: string, dto: FormData}, cookies: string): Promise<TFetcherResponse<IContestant>> {
        console.log("Cookies2", cookies)
        return await ApiCall.call({
            method: MethodsEnum.POST,
            url: ApiEndPoints.registerContestant(payload.contestId),
            headers: { "Content-Type": "multipart/form-data" },
            data: payload.dto
        }, cookies)
    }
    async toggleEvictContestants(dto: IToggleEvictContestantDTO, token: string): Promise<TFetcherResponse<void>> {
        return await ApiCall.call({
            method: MethodsEnum.PATCH,
            url: ApiEndPoints.toggleEvictContestants,
            // headers: { Authorization: `Bearer ${token}` },
            data: dto
        }, token)
    }
    async voteContestant(payload: { dto: IVoteContestantDto; stageId: string; /*fingerprint: string*/ }, cookies: string): Promise<TFetcherResponse<ILeanContestant>> {
        return await ApiCall.call({
            method: MethodsEnum.POST,
            url: ApiEndPoints.voteContestant(payload.stageId),
            // headers: { device_fingerprint: payload.fingerprint },
            data: payload.dto
        }, cookies)
    }
    async getContestantViaHash(hash: string): Promise<TFetcherResponse<IContestWStageWContestant>> {
        return await ApiCall.call({
            method: MethodsEnum.GET,
            url: ApiEndPoints.getContestantViaHash(hash),
        })
    }

    async getPendingUploads(cookies: string){
            const { data, error,authRequired } = await ApiCall.call<IContestWStageWContestant[], unknown>({
                method: "GET",
                url: ApiEndPoints.userPendingUploads,
                
            }, cookies)
    
            console.log({data, error})
            if(data) return {data}
            return { error, authRequired }
        }
    
    
    async getContestantDetailsWithContest(contestantId: string, cookies: string){
        if(!contestantId){
            return {error: {detail: "Please input a valid contestant id"}}
        }
        const { data, error,authRequired } = await ApiCall.call<IContestWStageWContestant, unknown>({
            method: "GET",
            url: ApiEndPoints.userContestantDeets(contestantId),
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async voteForContestantWithGivaah(voteDetails: IVoteContestantWithGivaahCredits, cookies: string){
        
        const { data, error,authRequired } = await ApiCall.call<ILeanContestant, unknown>({
            method: MethodsEnum.POST,
            url: ApiEndPoints.voteContestantWGivaahCredits,
            data: voteDetails
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async updateUserContestant(payload: {contestantId: string, formData: FormData, editContestantDTO?: IEditContestantDTO}, cookies?: string){
        const media = payload.formData.get('media')
        if (!(media instanceof File) || media.size === 0) {
        payload.formData.delete('media');
    }
        if(payload.editContestantDTO){
            payload.formData.set('details', JSON.stringify(payload.editContestantDTO))
        }

        const {data, error, authRequired} = await ApiCall.call({
            method: MethodsEnum.PUT,
            url: ApiEndPoints.editUserContestant(payload.contestantId),
            headers: { "Content-Type": "multipart/form-data" },
            data: payload.formData
        }, cookies)

        return {data, error, authRequired}
    }

    async getContestantDetailsForContest(contestant_code: string, stage_id: string) {
        // call contestant server to get contestant data
        const {data, error} = await ApiCall.call<IContestWStageWContestant, unknown>({
            method: MethodsEnum.GET,
            url: ApiEndPoints.getContestantDetailsForContest(contestant_code, stage_id),
        })

        return {data, error}
    }

    
    async voteFromWallet(payload: IVoteContestantFromWalletPayload, cookie: string): Promise<TFetcherResponse<IContestant>> {
        return await ApiCall.call({
            method: MethodsEnum.POST,
            url: ApiEndPoints.voteFromWallet,
            data: payload
        }, cookie)
    }
}

export const contestantRepo = new ContestantRepository()
