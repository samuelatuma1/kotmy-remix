import ProgressBar from './ProgressBar'
import Grade from './Grade'
import VoteLink from './VoteLink'
import { numberSlang } from '~/lib/numbers.utils'
import { noImage } from '~/assets/images'
import { IContestant } from '~/services/contestant/types/contestant.interface'
import { Social } from '~/services/contest/types/contest.interface'
import TallyVoteDialog from './TallyVoteDialog'
import { useFetcher, useLocation, useNavigate } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { toast } from '~/components/reusables/use-toast'
import { UserAtom } from '~/lib/store/atoms/token'
import { useUserManager } from '~/lib/store/store_managers/tokenManager'
import Button from '~/components/reusables/Button'
import GivaahVoteDialog from './GivaahVoteDialog'

export default function MobileScoreboard({ contestants, socialMediaType }: { contestants: IContestant[], socialMediaType: Social }) {
    const fetcher = useFetcher()
    const [signInPrompt, setSignInPrompt] = useState<boolean>(false)
    const { getUserStoreManager} = useUserManager();
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname; // e.g., /my-route
    const search = location.search;   // e.g., ?query=value
    const hash = location.hash;     // e.g., #section
    const path = pathname + search + hash; // Combines them

    useEffect(() => {
        console.log({d: fetcher?.data})
        if(fetcher.state === 'idle' && (fetcher.data && (fetcher.data as any).errorCode === 'LOGIN_REQUIRED' )){
            setSignInPrompt(true)
        }
        
    }, [fetcher.state, fetcher.data]);
    return (
        signInPrompt ?
        <div className="w-full max-w-xl bg-white border rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 py-12 px-6 sm:px-12 text-center">
                        <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mx-auto mb-2 text-accent"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z" fill="currentColor"/></svg>
                        <h2 className="text-2xl font-satoshi-bold text-accent">Sign In Required</h2>
                        <p className="text-gray-700 text-base max-w-md">Voting for your favourite contestant requires you to sign in</p>
                        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-center mt-2">
                            <Button
                            element="button"
                            onClick={() => navigate(`/login?redirectTo=${encodeURIComponent(path)}`)}
                            className="w-full sm:inline-flex sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-accent text-white hover:bg-accent/90 transition"
                            >
                            Sign In
                            </Button>

                            <Button
                            element="button"
                            onClick={() => setSignInPrompt(false)}
                            className="w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-medium borderborder-brand-navy/15 bg-brand-navy/5 text-gray-700 hover:bg-gray-50 transition"                            >
                            Go back
                            </Button>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Don't have an account? <span className="underline text-accent cursor-pointer" onClick={() => navigate(`/signup?redirectTo=${encodeURIComponent(path)}`)}>Sign up here</span></p>
                    </div>:
        <div className="grid gap-6 sm:hidden">
            {contestants.map(contestant => (
                <article key={contestant._id} className='bg-secondary border border-primary rounded-xl p-3 w-full'>
                    <div className="flex gap-4 mb-4 items-center">
                        <span className='font-satoshi-bold'>{contestant.result.position}.</span>
                        <img src={contestant.image_url || noImage} alt="person smiling" width={90} height={90} className='rounded-full aspect-square object-cover' />
                        <div className="flex flex-col gap-2 grow">
                            <p className='uppercase text-sm font-satoshi-medium text-ellipsis overflow-hidden'>
                                {`${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`}
                            </p>
                            <ProgressBar percentage={contestant.result.overall_vote_percentage} />
                            <Grade grade={contestant.result.grade} />
                        </div>
                    </div>
                    <p className='mb-2 text-xs font-satoshi-bold text-[#5F6D7E]'>Vote for this contestant</p>
                    <div className="grid grid-cols-3 gap-3">
                        {socialMediaType === "kotmy" ? (
                            <fetcher.Form method="POST" >
                                <input type="hidden" name="contestant_id" value={contestant._id} />
                                <input type="hidden" name="stage_id" value={contestant.stage_id} />
                                <input type="hidden" name="intent" value="kotmy_vote" />
                                <VoteLink className="w-full" type={socialMediaType}
                                    onClick={() => {
                                        const user = getUserStoreManager();
                                        if(!user){
                                            setSignInPrompt(true)
                                        }
                                    }

                                    }
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
                        <GivaahVoteDialog contestant={contestant} />
                    </div>
                </article>
            ))}
        </div>
    )
}


