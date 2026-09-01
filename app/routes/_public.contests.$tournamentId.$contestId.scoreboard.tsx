import { ActionFunctionArgs, json } from "@remix-run/node"
import { Form, Link, useNavigation, useRouteLoaderData, useSearchParams } from "@remix-run/react"

import { getTallyLink, voteContestant, voteContestantFromWallet, voteContestantWithGivaahCredits } from "~/services/contestant/actions.server"
import { setToast } from "~/lib/session.server"
import ContestTimer from "~/components/public/contests/ContestTimer"
import FormControl from "~/components/reusables/FormControl"
import MobileScoreboard from "~/components/public/contests/MobileScoreboard"
import { noImage } from "~/assets/images"
import Pagination from "~/components/reusables/Pagination"
import ScoreboardTable from "~/components/public/contests/ScoreboardTable"
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "~/components/reusables/select-shad"
import StatusTag from "~/components/reusables/StatusTag"
import { StageContestantsLoader } from "./_public.contests.$tournamentId.$contestId"
export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData()
    const intent = formData.get('intent') as 'tally_vote' | 'kotmy_vote' | 'givaah_vote' | 'wallet_vote'
    if (intent === 'tally_vote') return await getTallyLink(formData, request)
    if (intent === "kotmy_vote") return await voteContestant(formData, request)
    if (intent === "givaah_vote") return await voteContestantWithGivaahCredits(formData, request)
    if (intent === "wallet_vote") return await voteContestantFromWallet(formData, request)
    const { headers } = await setToast({ request, toast: `error::This action is not yet supported::${Date.now()}` })
    return json(null, { headers })
}

export default function Scoreboard() {
    const stageContestants = useRouteLoaderData<StageContestantsLoader>("routes/_public.contests.$tournamentId.$contestId")
    if (!stageContestants) throw new Error("Could not load stage contestants")
    const { contest, stage } = stageContestants
    const [searchParams, setUrlSearchParams] = useSearchParams()
    const navigation = useNavigation()
    const isSearching = navigation.state !== 'idle'
    const color = contest!.status === 'registering'
        ? 'yellow' : contest!.status === 'ongoing'
            ? 'green' : contest!.status === 'completed'
                ? 'red' : 'gray'

    const handleStageChange = (val: string) => {
        setUrlSearchParams(prev => {
            prev.set('stage', val)
            prev.delete('wild_card')
            prev.delete('last_key_id')
            prev.delete('first_key_id')
            prev.delete('direction')
            return prev
        })
    }

    return (
        <main className='grow'>
            <header className="wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8">
                <div className="grid">
                    <div className="max-w-2xl">
                        <h1 className="text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3 uppercase">{contest!.name}</h1>
                        <p className="font-satoshi-medium">{contest!.desc}</p>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-2 max-w-4xl">
                        <div className="">
                            <span className="block font-satoshi-bold mb-1">Status</span>
                            <StatusTag status={contest!.status} color={color} />
                        </div>
                        <div className="">
                            <span className="block font-satoshi-bold mb-1">Categories</span>
                            <div className="flex gap-4 flex-wrap capitalize">
                                {contest!.categories.map(category => (<span key={category}>~ {category}</span>))}
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="block font-satoshi-bold mb-1">Prizes</span>
                            <span className="block">{contest!.prizes}</span>
                        </div>
                    </div>
                    <ContestTimer deadline={new Date(contest!.end_date)} title='contest ends in' />
                </div>
                <img src={contest!.image || noImage} alt="kid smiling" className="w-full rounded-3xl h-[350px] object-cover" />
            </header>
            <section className="sm:bg-white">
                <div className="wrapper my-16">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-y-4 gap-x-6 sm:gap-x-8 py-6 flex-wrap">
                        <span className="font-satoshi-medium text-xl">{stage?.total_items ?? 0} Contestants</span>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Form method="get" className="flex flex-col sm:flex-row gap-4">
                                <input type="hidden" name="stage" value={String(stage?.stage ?? 1)} />
                                <input type="hidden" name="page_size" value={searchParams.get('page_size') ?? ''} />
                                <FormControl as='input' type='search' name='wild_card' defaultValue={searchParams.get('wild_card') ?? ''} className='min-w-[280px] bg-white' placeholder='Search contestant by name' />
                                <button type="submit" disabled={isSearching} className="rounded-lg bg-brand-pink px-6 py-2 text-sm font-bold text-white transition hover:bg-brand-pink/90 disabled:opacity-60 disabled:cursor-not-allowed">
                                    {isSearching ? 'Searching...' : 'Search'}
                                </button>
                            </Form>
                            <Select value={String(stage?.stage)} onValueChange={handleStageChange}>
                                <SelectTrigger className="sm:w-[180px] h-auto rounded-lg shadow-none bg-white hover:border-accent">
                                    <SelectValue placeholder={"Stage 1"} />
                                </SelectTrigger>
                                <SelectContent>
                                    {contest!.stages.map(stage => (
                                        <SelectItem key={stage.stage} value={String(stage.stage)} className='focus:bg-blue-700/25'>Stage {stage.stage}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Link to={`/results/${contest!.id}`} className="w-fit text-accent font-bold hover:underline underline-offset-4">See result table</Link>
                            <Link to={`/contests/${contest!.tournament_unique_id}/${contest!.id}`} className="w-fit text-accent font-bold hover:underline underline-offset-4">See contestants</Link>
                        </div>
                    </div>
                    <ScoreboardTable contestants={stage?.items ?? []} socialMediaType={stage?.rates.social_media.type ?? 'kotmy'} show_bonus={stage?.enable_bonus ?? false} />
                    <MobileScoreboard contestants={stage?.items ?? []} socialMediaType={stage?.rates.social_media.type ?? 'kotmy'} />
                    <Pagination lastKey={stage?.last_key_id} firstKey={stage?.first_key_id} pageSize={stage?.items_per_page} />
                </div>
            </section>
        </main>
    )
}
