import ProgressBar from "./ProgressBar"
import Grade from "./Grade"
import VoteLink, { BonusLink } from "./VoteLink"
import { noImage } from "~/assets/images"
import { numberSlang } from "~/lib/numbers.utils"
import { IContestant } from "~/services/contestant/types/contestant.interface"
import { Social } from "~/services/contest/types/contest.interface"
import TallyVoteDialog from "./TallyVoteDialog"
import { useFetcher, useNavigate, useLocation } from "@remix-run/react"
import { useEffect, useState } from "react"
import { useUserManager } from "~/lib/store/store_managers/tokenManager"
import Button from "~/components/reusables/Button"

export default function ScoreboardTable({ contestants, socialMediaType, show_bonus }: { contestants: IContestant[], socialMediaType: Social, show_bonus: boolean }) {
    const fetcher = useFetcher()
    const [signInPrompt, setSignInPrompt] = useState<boolean>(false)
    const { getUserStoreManager} = useUserManager();
    const navigate = useNavigate();
    const location = useLocation();
    const path = `${location.pathname}${location.search}${location.hash}`;

    useEffect(() => {
        console.log({d: fetcher?.data})
        if(fetcher.state === 'idle' && (fetcher.data && (fetcher.data as any).errorCode === 'LOGIN_REQUIRED' )){
            setSignInPrompt(true)
        }
        
    }, [fetcher.state, fetcher.data]);
    return (
        signInPrompt ?
            // outer container centers the card horizontally and vertically within available space
            <div className="w-full flex items-center justify-center py-12">
                <div className="w-full max-w-xl bg-white border rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 py-10 px-6 sm:px-12 text-center">
                    <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mx-auto mb-2 text-accent"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z" fill="currentColor"/></svg>
                    <h2 className="text-2xl font-satoshi-bold text-accent">Sign In Required</h2>
                    <p className="text-gray-700 text-base max-w-md">Voting for your favourite contestant requires you to sign in</p>
                    <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-center mt-2">
                        <Button
                        element="button"
                        onClick={() => setSignInPrompt(false)}
                        className="w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition"
                        >
                        Go back
                        </Button>
                        <Button
                        element="button"
                        onClick={() => navigate(`/login?redirectTo=${encodeURIComponent(path)}`)}
                        className="w-full sm:inline-flex sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-accent text-white hover:bg-accent/90 transition"
                        >
                        Sign In
                        </Button>

                        
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Don't have an account? <button type="button" className="underline text-accent" onClick={() => navigate(`/signup?redirectTo=${encodeURIComponent(path)}`)}>Sign up here</button></p>
                </div>
            </div>:
        <table className="w-full table-auto hidden sm:table">
            <thead>
                <tr className="border-b border-secondary">
                    <th className="text-left uppercase text-sm font-satoshi-bold px-6 py-3">position</th>
                    <th className="text-left uppercase text-sm font-satoshi-bold px-6 py-3">name</th>
                    <th className="text-left uppercase text-sm font-satoshi-bold px-6 py-3 hidden lg:table-cell">progress</th>
                    <th className="text-left uppercase text-sm font-satoshi-bold px-6 py-3  hidden xl:table-cell">grade</th>
                    <th className="text-left uppercase text-sm font-satoshi-bold px-6 py-3">votes (SM, tally, givaah)</th>

                    {show_bonus && (
                        <>
                            <th className="text-left uppercase text-sm font-satoshi-bold px-6 py-3">SMB</th>
                            <th className="text-left uppercase text-sm font-satoshi-bold px-6 py-3">TB</th>
                            <th className="text-left uppercase text-sm font-satoshi-bold px-6 py-3">GB</th>
                            <th className="text-left uppercase text-sm font-satoshi-bold px-6 py-3">JB</th>
                        </>
                    )}
                </tr>
            </thead>
            <tbody>
                {contestants.map((contestant) => (
                    <tr key={contestant._id} className="border-b border-secondary">
                        <td className="px-6 py-3">{contestant.result.position}</td>
                        <td className="px-6 py-3 font-satoshi-medium max-w-[300px] truncate uppercase">
                            <div className="flex items-center gap-2">
                                <img src={contestant.image_url || noImage} alt="person smiling" width={48} className='rounded-full aspect-square object-cover' />
                                <div className="truncate uppercase grow">
                                    {`${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`}
                                    <dl className="lg:hidden">
                                        <dt className="sr-only">progress</dt>
                                        <dd><ProgressBar percentage={contestant.result.overall_vote_percentage} /></dd>
                                        <dt className="sr-only">grade</dt>
                                        <dd><Grade grade={contestant.result.grade} /></dd>
                                    </dl>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-3 hidden lg:table-cell">
                            <ProgressBar percentage={contestant.result.overall_vote_percentage} />
                            <dl className="xl:hidden">
                                <dt className="sr-only">grade</dt>
                                <dd><Grade grade={contestant.result.grade} /></dd>
                            </dl>
                        </td>
                        <td className="px-6 py-3 hidden xl:table-cell"><Grade grade={contestant.result.grade} /></td>
                        <td className="px-6 py-3 grid grid-cols-2 gap-2">
                            {socialMediaType === "kotmy" ? (
                                <fetcher.Form method="POST">
                                    <input type="hidden" name="contestant_id" value={contestant._id} />
                                    <input type="hidden" name="stage_id" value={contestant.stage_id} />
                                    <input type="hidden" name="intent" value="kotmy_vote" />
                                    <VoteLink className="w-full" type={socialMediaType}
                                        onClick={() => {
                                            const user = getUserStoreManager();
                                            if (!user) {
                                                setSignInPrompt(true)
                                            }
                                        }}
                                        url={contestant.social_media_url}
                                        count={numberSlang(contestant.vote.social_media)}
                                    />
                                </fetcher.Form>
                            ) : (
                                <VoteLink type={socialMediaType}
                                    url={contestant.social_media_url}
                                    count={numberSlang(contestant.vote.social_media)}
                                />
                            )}
                            <TallyVoteDialog contestant={contestant} />
                            
                        </td>
                        {show_bonus && (
                            <>
                                <td className="px-6 py-3">
                                    {contestant.vote.social_media_bonus}
                                </td>
                                <td className="px-6 py-3">
                                    {contestant.vote.tally_bonus}
                                </td>
                                <td className="px-6 py-3">
                                    {contestant.vote.givaah_bonus}
                                </td>
                                <td className="px-6 py-3">
                                {contestant.vote.judge_bonus}
                        </td>
                        </>)}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
