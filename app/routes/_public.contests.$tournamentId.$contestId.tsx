import { LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { Outlet } from "@remix-run/react"

import { contestRepo } from "~/services/contest/contest.server"
import { getFingerprint, setToast } from "~/lib/session.server"
import { callTallyWebhook } from "~/services/contestant/actions.server"
import { walletRepo } from "~/services/wallet/wallet.server"

type WalletVoteContext = {
    authRequired: boolean
    wallet: {
        _id: string
        wallet_currency: string
        withdrawable_balance: number
    } | null
    stageCurrency: string | null
    pricePerVote: number
    error: string | null
}

export async function loader({ params, request }: LoaderFunctionArgs) {
    const { tournamentId, contestId } = params
    if (!contestId) return redirect(`/contests/${tournamentId}`)

    const url = new URL(request.url)
    // Process transaction response
    const tx_status = url.searchParams.get("status")
    const tx_ref = url.searchParams.get("tx_ref")
    if (tx_status && tx_ref) {
        // call the webhook
        await callTallyWebhook(tx_ref)
        // create toast
        const toast = tx_status === "completed"
            ? `success::Your payment has been received. Your vote will reflect shortly.::${Date.now()}` as const
            : `error::There seems to be an issue with your payment. Please try again later.::${Date.now()}` as const
        const { headers } = await setToast({ request, toast })
        // clear other query strings and show success toast
        url.searchParams.delete('status')
        url.searchParams.delete('tx_ref')
        url.searchParams.delete('transaction_id')
        console.log("Redirecting to:", `${url.pathname}?${url.searchParams.toString()}`)
        throw redirect(`${url.pathname}?${url.searchParams.toString()}`, { headers })
    }

    const { data: contest, error } = await contestRepo.getContestById(contestId)
    if (error) return redirect(`/contests/${tournamentId}`)
    if (contest.status === 'registering') {
        return json({ contest, stage: null, baseUrl: process.env._BASE_URL, walletVoteContext: null })
    }

    const stageQ = url.searchParams.get("stage")
    const stageId = (stageQ
        ? contest.stages.find(stage => stage.stage == +stageQ)?._id
        : contest.stages.find(stage => stage.active)?._id
    ) ?? contest.stages.find(stage => stage.stage == 1)?._id
    const { fingerprint, headers } = await getFingerprint({ request })
    const wildCard = url.searchParams.get("wild_card") ?? undefined
    const pageSize = url.searchParams.get("page_size") ? Number(url.searchParams.get("page_size")) : undefined
    const lastKeyId = url.searchParams.get("last_key_id") ?? undefined
    const firstKeyId = url.searchParams.get("first_key_id") ?? undefined
    const direction = url.searchParams.get("direction") as "next" | "previous" | undefined
    const stage = stageId ? (await contestRepo.getPagedContestantsInStage(stageId, { fingerprint }, {
        wild_card: wildCard,
        page_size: pageSize,
        last_key_id: lastKeyId,
        first_key_id: firstKeyId,
        direction,
    })).data ?? null : null
    let walletVoteContext: WalletVoteContext | null = null
    const cookieHeader = request.headers.get("Cookie") ?? ""
    const stageCurrency = stage?.rates.vote_currency ?? null
    const pricePerVote = stage?.rates.price_per_vote ?? stage?.price_per_vote ?? 0

    if (cookieHeader && stageCurrency) {
        const walletsResponse = await walletRepo.getUserWallets(request)
        if (walletsResponse.data) {
            const matchingWallet = walletsResponse.data.find(wallet => wallet.wallet_currency === stageCurrency) ?? null
            walletVoteContext = {
                authRequired: false,
                wallet: matchingWallet
                    ? {
                        _id: matchingWallet._id,
                        wallet_currency: matchingWallet.wallet_currency,
                        withdrawable_balance: matchingWallet.withdrawable_balance,
                    }
                    : null,
                stageCurrency,
                pricePerVote,
                error: matchingWallet ? null : `No wallet found for ${stageCurrency}`
            }
        } else {
            walletVoteContext = {
                authRequired: Boolean(walletsResponse.authRequired),
                wallet: null,
                stageCurrency,
                pricePerVote,
                error: walletsResponse.error?.detail?.toString() ?? null,
            }
        }
    } else {
        walletVoteContext = {
            authRequired: !cookieHeader,
            wallet: null,
            stageCurrency,
            pricePerVote,
            error: stageCurrency ? null : "Wallet voting is unavailable for this stage",
        }
    }

    return json({ contest, stage, baseUrl: process.env._BASE_URL, walletVoteContext }, { headers })
}
export type StageContestantsLoader = typeof loader


export default function ContestLayout() {
    return (<Outlet />)
}
