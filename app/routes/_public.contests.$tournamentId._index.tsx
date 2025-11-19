import { LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { useState } from "react"

import Button from "~/components/reusables/Button"
import ContestCard from "~/components/reusables/ContestCard"
import { contestRepo } from "~/services/contest/contest.server"
import { ContestStatus } from "~/services/contest/types/contest.interface"
import { tournamentRepo } from "~/services/tournament/tournament.server"

export async function loader({ params }: LoaderFunctionArgs) {
    const { tournamentId } = params
    if (!tournamentId) return redirect('/contests')
    const { data: tournament, error } = await tournamentRepo.getTournamentById(tournamentId)
    const { data: contests } = await contestRepo.getContestsInTournament(tournamentId)
    if (error) return redirect('/contests')
    return json({
        tournament: {
            ...tournament,
            contests: contests?.toReversed() ?? tournament.contests.filter(contest => contest.status !== 'yet_to_start').toReversed()
        }
    })
}

export function useTournamentPageController(){
    const { tournament } = useLoaderData<typeof loader>()
    
    return {tournament}
}
export default function TournamentPage() {
    const { tournament } = useTournamentPageController()
    const [filteredContests, setFilteredContests] = useState(tournament.contests ?? [])
    const [activeId, setActiveId] = useState("all")
    function handleFilterStatus(e: React.MouseEvent<HTMLSpanElement>, status: ContestStatus) {
        setActiveId(e.currentTarget.id)
        setFilteredContests(tournament.contests.filter((contest) => contest.status === status))
        e.currentTarget.classList.add('bg-accent', 'text-white')
    }

    function getAllContestsInTournament(e: React.MouseEvent<HTMLSpanElement>) {
        setActiveId(e.currentTarget.id)
        setFilteredContests(tournament.contests)
    }
    return (
        <main className='grow'>
            <header className="wrapper my-16">
                <h1 className='text-accent text-2xl lg:text-4xl font-satoshi-bold max-w-3xl'>
                    {tournament.name}
                </h1>
            </header>
            <section className='wrapper'>
                <div className="p-2 rounded-full bg-secondary flex w-fit text-xs sm:text-base">
                    <span className={`cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "all" ? "bg-accent text-white": ""}`} id="all" onClick={(e) => getAllContestsInTournament(e)}>All KOTM</span>
                    <span className={`cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "ongoing" ? "bg-accent text-white": ""}`} id="ongoing" onClick={(e) => handleFilterStatus(e, 'ongoing')}>Ongoing</span>
                    <span className={`cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "registering" ? "bg-accent text-white": ""}`} id="registering" onClick={(e) => handleFilterStatus(e, 'registering')}>Registering</span>
                    <span className={`cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "completed" ? "bg-accent text-white": ""}`} id="completed" onClick={(e) => handleFilterStatus(e, 'completed')}>Completed</span>
                </div>
            </section>
            <section className='wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center'>
                {filteredContests.map(contest => (
                    <ContestCard key={contest.id} contest={contest} to={contest.id} withTag />
                ))}
            </section>
            <div className="wrapper my-20 flex justify-center">
                <Button element="button" variant="outline">See more contests</Button>
            </div>
        </main>
    )
}
