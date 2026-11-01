import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import RegisteringContest from "~/components/public/contests/RegisteringContest"
import { contestRepo } from "~/services/contest/contest.server"
import { registerContestant } from "~/services/contestant/actions.server"

function contestPagePath(tournamentId: string | undefined, contestId: string | undefined) {
    return `/contests/${tournamentId}/${contestId}`
}

function isLateRegistrationOpen(contest: { status: string, reg_deadline: string, late_reg_deadline?: string | null }, now = Date.now()) {
    const regularDeadline = new Date(contest.reg_deadline).getTime()
    const lateDeadline = contest.late_reg_deadline ? new Date(contest.late_reg_deadline).getTime() : NaN
    return contest.status === "ongoing" && regularDeadline < now && now < lateDeadline
}

export async function loader({ params }: LoaderFunctionArgs) {
    const { tournamentId, contestId } = params
    const redirectPath = contestPagePath(tournamentId, contestId)
    if (!contestId) return redirect(`/contests/${tournamentId}`)

    const { data: contest, error } = await contestRepo.getContestById(contestId)
    if (error || !contest || !isLateRegistrationOpen(contest)) return redirect(redirectPath)

    return json({ contest })
}

export async function action({ request, params }: ActionFunctionArgs) {
    const formData = await request.formData()
    const intent = formData.get("intent")
    if (intent !== "register") return json({ error: "This action is not supported" }, { status: 400 })

    const cookieHeader = request.headers.get("Cookie")
    if (!cookieHeader) {
        const url = new URL(request.url)
        return redirect(`/login?redirectTo=${url.pathname}`)
    }

    const { data: contest } = params.contestId ? await contestRepo.getContestById(params.contestId) : { data: undefined }
    if (!contest || !isLateRegistrationOpen(contest)) {
        return redirect(contestPagePath(params.tournamentId, params.contestId))
    }

    return registerContestant(formData, request, request)
}

export default function LateContestRegistrationPage() {
    const { contest } = useLoaderData<typeof loader>()
    return (
        <main className="grow">
            <RegisteringContest contest={contest} lateRegistration />
        </main>
    )
}
