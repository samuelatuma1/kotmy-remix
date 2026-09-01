import React, { useEffect, useState } from "react"

import { cn } from "~/lib/utils"
import Cta from "~/components/reusables/Cta"
import Svg from "~/components/reusables/Svg"
import { socialIcons } from "~/lib/data/socials"
import { useFetcher, useLocation, useNavigate } from "@remix-run/react"
import { numberSlang } from "~/lib/numbers.utils"
import VoteLink from "./VoteLink"
import { IContestant } from "~/services/contestant/types/contestant.interface"
import { useUserManager } from "~/lib/store/store_managers/tokenManager"
import Button from "~/components/reusables/Button"

type Props = | {
    type: Exclude<keyof typeof socialIcons, "kotmy">,
    url?: string,
    className?: string,
    voted?: boolean,
    contestantId?: string,
    stageId?: string,
    contestant?: IContestant
} | {
    type: Extract<keyof typeof socialIcons, "kotmy">,
    url?: string,
    className?: string,
    voted: boolean,
    contestantId: string,
    stageId: string,
    contestant?: IContestant
}

export default React.forwardRef(function SocialLink(
    { type, url, className = "", ...rest }: Props,
    ref: React.ForwardedRef<HTMLButtonElement>) {
    const props = url
        ? { element: "link", to: url, ...rest } as const
        : { element: "button", ref, ...rest } as const
    
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
    return type === "kotmy"
        ? (
            signInPrompt ? (
                <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-xl bg-white border rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 py-10 px-6 sm:px-12 text-center">
                        <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mx-auto mb-2 text-accent"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z" fill="currentColor"/></svg>
                        <h2 className="text-2xl font-satoshi-bold text-accent">Sign In Required</h2>
                        <p className="text-gray-700 text-base max-w-md">Voting for your favourite contestant requires you to sign in</p>
                        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-center mt-2">
                            <Button
                                element="button"
                                onClick={() => setSignInPrompt(false)}
                                className="w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-medium borderborder-brand-navy/15 bg-brand-navy/5 text-gray-700 hover:bg-gray-50 transition"                            >
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
                </div>
            ) :
            <fetcher.Form method="POST">
            <input type="hidden" name="contestant_id" value={rest.contestantId} />
            <input type="hidden" name="stage_id" value={rest.stageId} />
            <input type="hidden" name="intent" value="kotmy_vote" />
            <VoteLink className="w-full" type={type}
                onClick={() => {
                    const user = getUserStoreManager();
                    if (!user) {
                        setSignInPrompt(true)
                    }
                }}
                url={rest.contestant?.social_media_url ?? ""}
                count={numberSlang(rest.contestant?.vote.social_media ?? 0)}
            />
        


            {/* <input type="hidden" name="contestant_id" value={rest.contestantId} />
            <input type="hidden" name="stage_id" value={rest.stageId} />
            <Cta onClick={() => {alert("clicked")}} element="button" name="intent" value="kotmy_vote" variant="outline" className={cn("p-2 flex items-center border rounded-full w-full", className)}>
                <span className={cn("w-6 h-6 flex items-center justify-center rounded-full p-1")}>
                    <Svg src={socialIcons[type]} />
                </span>
                <span className="grow text-xs font-bold text-center mr-2">
                    {rest.voted ? null : <span className="capitalize">{type}</span>}
                    {rest.voted ? "Voted" : " vote"}
                </span>
            </Cta> */}
        </fetcher.Form>
        )
        : <Cta {...props} variant="outline" className={cn("p-2 flex items-center border rounded-full", {
            "border-facebook text-facebook bg-facebookBG hover:bg-facebook/15": type === "facebook",
            "border-instagram text-instagram bg-instagramBG hover:bg-instagram/15": type === "instagram",
            "border-twitter text-twitter bg-twitterBG hover:bg-twitter/15": type === "twitter",
            "border-tally text-tally bg-tallyBG hover:bg-tally/15": type === "tally",
            "border-givaah text-givaah bg-givaahBG hover:bg-givaah/15": type === "givaah",
        }, className)}>
            <span className={cn("w-6 h-6 flex items-center justify-center rounded-full p-1", {
                "bg-facebook": type === "facebook",
                "bg-instagram": type === "instagram",
                "bg-twitter": type === "twitter",
                "bg-tally": type === "tally",
                "bg-givaah": type === "givaah",
            })}>
                <Svg src={socialIcons[type]} />
            </span>
            <span className="grow text-xs font-bold text-center mr-2"><span className="capitalize">{type}</span> vote</span>
        </Cta>
})

