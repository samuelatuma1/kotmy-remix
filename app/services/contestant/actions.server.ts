import { json, redirect } from "@remix-run/node"

import { getFingerprint, requireAuth, setToast } from "~/lib/session.server"
import { contestantRepo } from "./contestant.server"
import { IEditContestantDTO, IGetTallyLinkDTO, IToggleEvictContestantDTO, IVoteContestantDto, IVoteContestantFromWalletPayload, IVoteContestantWithGivaahCredits } from "./types/contestant.interface"


export class ContestantServer{

}



export async function editContestant(payload: { dto: FormData, contestantId: string }, request: Request) {
    const dto = prepareContestantDTO(payload.dto)
    const validateAuth = await requireAuth(request);;
     ; 
    const { data, error } = await contestantRepo.editContestantAdmin({ dto, contestantId: payload.contestantId }, request)
    if (data) {
        const { headers } = await setToast({ request, toast: `success::The contestant info has been updated::${Date.now()}` })
        return json(null, { headers })
    }
    const { headers } = await setToast({ request, toast: `error::${error.detail ?? "Could not update the contestant"}::${Date.now()}` })
    for (const entry of dto.entries()) {
        console.log(entry)
    }
    return json(error, { headers })
}

export async function toggleEvictContestants(formData: FormData, request: Request) {
    const validateAuth = await requireAuth(request);;
     ; 
    const dto: IToggleEvictContestantDTO = {
        action: formData.get("intent") as "evict" | "admit",
        stage_id: formData.get("stage_id") as string,
        contestants_ids: (formData.get("contestants_ids") as string).split("|")
    }
    const { error } = await contestantRepo.toggleEvictContestants(dto, request)
    if (error) {
        const { headers } = await setToast({ request, toast: `error::${error.detail ?? "Sorry, we could not update the contestants statuses at this time"}::${Date.now()}` })
        return json(error, { headers })
    }
    const { headers } = await setToast({ request, toast: `success::The contestants' statuses have been updated::${Date.now()}` })
    return json(null, { headers })
}

export async function registerContestant(formData: FormData, request: Request, cookies: string | Request) {
    const contestId = formData.get("contestId") as string
    
    const { data, error } = await contestantRepo.registerContestant({ contestId, dto: formData }, cookies)
    if (error) {
        const { headers } = await setToast({ request, toast: `error::${error.detail ?? "Error registering the contestant"}::${Date.now()}` })
        return json({ data: null }, { headers })
    }
    return json({ data })
}

export async function getTallyLink(formData: FormData, request: Request) {
    const dto: IGetTallyLinkDTO = {
        contestant_id: formData.get("contestant_id") as string,
        email: formData.get("email") as string,
        number_of_votes: +(formData.get("vote_quantity") as string),
        phone_number: formData.get("phone") as string,
        provider: formData.get("provider") as string,
        redirect_url: formData.get("redirect_url") as string
    }
    const { data, error } = await contestantRepo.getTallyLink(dto)
    if (error) {
        const { headers } = await setToast({ request, toast: `error::${error.detail ?? "We're sorry, but there seems to be an issue with this action. Please try again later."}::${Date.now()}` })
        return json(error, { headers })
    }
    const { headers } = await setToast({ request, toast: `success::You will be redirected to make the payment::${Date.now()}` })
    return redirect(data.payment_link, { headers })
}

export async function voteContestant(formData: FormData, request: Request) {
    const dto: IVoteContestantDto = {
        contestant_id: formData.get("contestant_id") as string
    }
    const stageId = formData.get("stage_id") as string
    const cookieHeader = request.headers.get("Cookie");
    if (!cookieHeader) {
        // User is not signed in
        const url = new URL(request.url);
        return {errorCode: "LOGIN_REQUIRED" }
        }
    const { fingerprint, headers: fingerprintHeaders } = await getFingerprint({ request })
    const { error, authRequired } = await contestantRepo.voteContestant({ dto, stageId }, request)
    if(authRequired){
        return {errorCode: "LOGIN_REQUIRED" }
    }
    if (error) {
        const { headers } = await setToast({ request, headers: fingerprintHeaders, toast: `error::${error.detail ?? "We're sorry, but there seems to be an issue with this action. Please try again later."}::${Date.now()}` })
        return json(error, { headers })
    }
    const { headers } = await setToast({ request, headers: fingerprintHeaders, toast: `success::Your vote has been registered::${Date.now()}` })
    return json(null, { headers })
}

export async function voteContestantWithGivaahCredits(formData: FormData, request: Request) {
    const cookieHeader = request.headers.get("Cookie");
    if (!cookieHeader) {
        return json({ errorCode: "LOGIN_REQUIRED" }, { status: 401 });
    }
    const givaahCreditsToUse = Number(formData.get("givaah_credits_to_use") ?? 0);
    const dto: IVoteContestantWithGivaahCredits = {
        contestant_id: formData.get("contestant_id") as string,
        givaah_credits_to_use: Number.isFinite(givaahCreditsToUse) ? Math.trunc(givaahCreditsToUse) : 0,
    }

    if (!dto.contestant_id) {
        const { headers } = await setToast({
            request,
            toast: `error::Please select a contestant to vote for::${Date.now()}`
        });
        return json({ error: "Please select a contestant to vote for" }, { headers, status: 400 });
    }

    if (dto.givaah_credits_to_use < 1) {
        const { headers } = await setToast({
            request,
            toast: `error::Please enter at least 1 Givaah credit to vote with::${Date.now()}`
        });
        return json({ error: "Please enter at least 1 Givaah credit to vote with" }, { headers, status: 400 });
    }

    const { data, error, authRequired } = await contestantRepo.voteForContestantWithGivaah(dto, request)
    if (authRequired) {
        return json({ errorCode: "LOGIN_REQUIRED" }, { status: 401 });
    }

    if (error) {
        const { headers } = await setToast({
            request,
            toast: `error::${error.detail ?? "We're sorry, but there seems to be an issue with this action. Please try again later."}::${Date.now()}`
        })
        return json(error, { headers, status: 400 })
    }

    const { headers } = await setToast({
        request,
        toast: `success::${dto.givaah_credits_to_use} Givaah credits used successfully::${Date.now()}`
    })
    return json({ data, givaah_credits_to_use: dto.givaah_credits_to_use }, { headers })
}

export async function voteContestantFromWallet(formData: FormData, request: Request) {
    const cookieHeader = request.headers.get("Cookie");
    if (!cookieHeader) {
        const { headers } = await setToast({
            request,
            toast: `error::Please sign in to vote from your wallet::${Date.now()}`
        });
        return json({ errorCode: "LOGIN_REQUIRED" }, { headers, status: 401 });
    }

    const contestantId = formData.get("contestant_id") as string;
    const walletId = formData.get("wallet_id") as string;
    const remark = String(formData.get("remark") ?? "").trim();
    const parsedVotes = Number(formData.get("number_of_votes") ?? 0);
    const numberOfVotes = Number.isFinite(parsedVotes) ? Math.trunc(parsedVotes) : 0;

    if (!contestantId) {
        const { headers } = await setToast({
            request,
            toast: `error::Please select a contestant to vote for::${Date.now()}`
        });
        return json({ error: "Please select a contestant to vote for" }, { headers, status: 400 });
    }

    if (!walletId) {
        const { headers } = await setToast({
            request,
            toast: `error::We could not find a matching wallet for this vote::${Date.now()}`
        });
        return json({ error: "We could not find a matching wallet for this vote" }, { headers, status: 400 });
    }

    if (numberOfVotes < 1) {
        const { headers } = await setToast({
            request,
            toast: `error::Please enter at least 1 vote::${Date.now()}`
        });
        return json({ error: "Please enter at least 1 vote" }, { headers, status: 400 });
    }

    const dto: IVoteContestantFromWalletPayload = {
        contestant_id: contestantId,
        wallet_id: walletId,
        remark,
        number_of_votes: numberOfVotes,
    };

    const { data, error, authRequired } = await contestantRepo.voteFromWallet(dto, request);
    if (authRequired) {
        const { headers } = await setToast({
            request,
            toast: `error::Please sign in to vote from your wallet::${Date.now()}`
        });
        return json({ errorCode: "LOGIN_REQUIRED" }, { headers, status: 401 });
    }

    if (error) {
        const { headers } = await setToast({
            request,
            toast: `error::${error.detail ?? "We're sorry, but there seems to be an issue with this action. Please try again later."}::${Date.now()}`
        });
        return json(error, { headers, status: 400 });
    }

    const { headers } = await setToast({
        request,
        toast: `success::Your vote has been purchased successfully from your wallet::${Date.now()}`
    });
    return json({ data, number_of_votes: numberOfVotes }, { headers });
}

export async function callTallyWebhook(tx_ref: string) {
    const dto = { "tx_ref": tx_ref}
    return await contestantRepo.callTallyWebhook(dto)
}


export function prepareContestantDTO(formData: FormData) {
    const payloadObj: IEditContestantDTO = {
        "biodata": {
            "first_name": formData.get("first_name") as string,
            "last_name": formData.get("last_name") as string,
            "dob": formData.get("dob") as string,
            "sex": formData.get("sex") as string,
            "email": formData.get("email") as string,
            "state_of_residence": formData.get("state") as string,
            // "whatsapp_no": formData.get("whatsapp_no") as string
        },
        // "social_media_url": formData.get("name") as string ,
        "social_media_url": formData.get("social_media_url") as string ,
        "vote": {
            "social_media": +(formData.get("social_media_vote") as string),
            "judge": +(formData.get("judge_vote") as string),
            "bonus": +(formData.get("stage_bonus") as string),
        }
    }
    const dto = new FormData()
    if(formData.get("media") && (formData.get("media") as File).size > 0){

        dto.append("media", formData.get("media") as Blob)
    }
    dto.append("details", JSON.stringify(payloadObj))
    return dto
}
