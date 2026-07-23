import { Form, useFetcher, useLocation, useNavigate, useRouteLoaderData } from "@remix-run/react"
import { useEffect, useRef, useState } from "react"

import { cn } from "~/lib/utils"
import { icons } from "~/assets/icons"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "~/components/reusables/Dialog"
import FormControl from "~/components/reusables/FormControl"
import { numberSlang } from "~/lib/numbers.utils"
import { providers } from "~/lib/data/payment"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "~/components/reusables/select-shad"
import Svg from "~/components/reusables/Svg"
import VoteLink from "./VoteLink"
import { IContestant } from "~/services/contestant/types/contestant.interface"
import { StageContestantsLoader } from "~/routes/_public.contests.$tournamentId.$contestId"
import { useUserManager } from "~/lib/store/store_managers/tokenManager"
import { UserAtom } from "~/lib/store/atoms/token"
import Button from "~/components/reusables/Button"

type VoteMode = "start" | "provider" | "wallet"

type WalletVoteContext = {
    wallet: {
        _id: string
        wallet_currency: string
        withdrawable_balance: number
    } | null
    stageCurrency: string | null
    pricePerVote: number
    error: string | null
}

type WalletVoteActionData = {
    data?: {
        _id: string
    } | null
    number_of_votes?: number
    error?: string
    errorCode?: "LOGIN_REQUIRED"
}

function formatAmount(value: number) {
    return new Intl.NumberFormat("en-NG", {
        maximumFractionDigits: 0,
    }).format(value)
}

export default function TallyVoteDialog({ contestant, disabled, children }: { contestant: IContestant, disabled?: boolean, children?: React.ReactNode }) {
    const stageContestants = useRouteLoaderData<StageContestantsLoader>("routes/_public.contests.$tournamentId.$contestId")
    const formRef = useRef<HTMLFormElement>(null)
    const walletFetcher = useFetcher<WalletVoteActionData>()
    const { getUserStoreManager } = useUserManager()
    const navigate = useNavigate()
    const { pathname, search, hash } = useLocation()
    const [open, setOpen] = useState(false)
    const [mode, setMode] = useState<VoteMode>("start")
    const [user, setUser] = useState<UserAtom | null>(null)
    const [voteQuantity, setVoteQuantity] = useState("1")
    const [remark, setRemark] = useState("")

    const redirectUrl = `${stageContestants?.baseUrl}${pathname}${search}`
    const currentPageUrl = `${pathname}${search}${hash}`
    const walletVoteContext = stageContestants?.walletVoteContext as WalletVoteContext | null | undefined
    const stageCurrency = walletVoteContext?.stageCurrency ?? stageContestants?.stage?.rates.vote_currency ?? null
    const pricePerVote = walletVoteContext?.pricePerVote ?? stageContestants?.stage?.rates.price_per_vote ?? stageContestants?.stage?.price_per_vote ?? 0
    const parsedVotes = Number(voteQuantity)
    const validVoteQuantity = Number.isFinite(parsedVotes) ? Math.trunc(parsedVotes) : 0
    const payableAmount = validVoteQuantity > 0 ? pricePerVote * validVoteQuantity : 0
    const wallet = walletVoteContext?.wallet ?? null
    const walletId = wallet?._id ?? ""
    const availableBalance = wallet?.withdrawable_balance ?? 0
    const hasWallet = Boolean(wallet)
    const hasSufficientBalance = hasWallet && payableAmount <= availableBalance
    const isWalletSubmitting = walletFetcher.state !== "idle"
    const isWalletSubmitDisabled =
        !user ||
        !hasWallet ||
        validVoteQuantity < 1 ||
        payableAmount < 1 ||
        !hasSufficientBalance ||
        isWalletSubmitting

    useEffect(() => {
        setUser(getUserStoreManager())
    }, [])

    useEffect(() => {
        if (!open) {
            setMode("start")
            setVoteQuantity("1")
            setRemark("")
        }
    }, [open])

    useEffect(() => {
        if (walletFetcher.data?.data) {
            setOpen(false)
            setMode("start")
            setVoteQuantity("1")
            setRemark("")
        }
    }, [walletFetcher.data])

    const handleOpenChange = (nextOpen: boolean) => {
        setOpen(nextOpen)
        if (!nextOpen) {
            setMode("start")
        }
    }

    const renderStartMenu = () => (
        <div className="space-y-5 p-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contestant</p>
                <p className="mt-2 text-xl font-black text-slate-950">
                    {contestant.contestant_biodata.first_name} {contestant.contestant_biodata.last_name}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                    Choose how you would like to fund this vote.
                </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
                <Button
                    element="button"
                    type="button"
                    onClick={() => setMode("wallet")}
                    className="rounded-2xl px-6 py-4 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5"
                >
                    Vote from Wallet
                </Button>
                <Button
                    element="button"
                    type="button"
                    variant="outline"
                    onClick={() => setMode("provider")}
                    className="rounded-2xl px-6 py-4 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5"
                >
                    Vote from Provider
                </Button>
            </div>
        </div>
    )

    const renderProviderFlow = () => (
        <>
            <DialogHeader>
                <DialogTitle className="p-4 flex gap-3 text-left">
                    <div className="size-11 rounded-full bg-orange-100 flex items-center justify-center">
                        <Svg src={icons.questionIcon} />
                    </div>
                    <p>
                        <span className="block">Vote for contestant</span>
                        <span className="font-normal text-base text-admin-pry">{`${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`}</span>
                    </p>
                </DialogTitle>
                <DialogDescription asChild className="border-y p-4">
                    <Form ref={formRef} method="post" className="grid sm:grid-cols-2 gap-4">
                        <FormControl as='input' id='email' name='email' labelText='Email Address' labelClassNames="text-left" required />
                        <FormControl as='input' id='phone' name='phone' labelText='Phone Number' labelClassNames="text-left" />
                        <FormControl as='input' id='vote_quantity' name='vote_quantity' labelText='Vote Quantity' type='number' labelClassNames="text-left" defaultValue={1} min={1} required />
                        <label htmlFor="provider" className='font-bold flex flex-col text-left'>Payment Provider
                            <Select name='provider' required>
                                <SelectTrigger className="h-10 font-normal rounded-lg shadow-none hover:border-accent">
                                    <SelectValue placeholder="Select payment provider" />
                                </SelectTrigger>
                                <SelectContent>
                                    {providers.map(({ label, value }) => (
                                        <SelectItem key={value} value={value} className='focus:bg-blue-700/25'>{label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </label>
                        <input type="hidden" name="contestant_id" value={contestant._id} />
                        <input type="hidden" name="redirect_url" value={redirectUrl} />
                        <input type="hidden" name="intent" value="tally_vote" />
                    </Form>
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className='flex justify-end gap-6 p-4'>
                <DialogClose type='submit' name="intent" value={'delete'} className='px-10 py-2 rounded-md font-bold min-w-[90px] outline outline-1'>
                    Cancel
                </DialogClose>
                <button type='submit' onClick={() => formRef.current?.submit()} className='bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white'>
                    Proceed
                </button>
            </DialogFooter>
        </>
    )

    const renderUnauthenticatedWalletView = () => (
        <div className="space-y-5 p-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <h3 className="text-xl font-black text-slate-950">Sign In Required</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                    You need to be signed in to vote from your wallet.
                </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button
                    element="button"
                    type="button"
                    variant="outline"
                    onClick={() => setMode("start")}
                    className="rounded-2xl px-6 py-3 text-sm font-semibold"
                >
                    Cancel
                </Button>
                <Button
                    element="button"
                    type="button"
                    onClick={() => navigate(`/login?redirectTo=${encodeURIComponent(currentPageUrl)}`)}
                    className="rounded-2xl px-6 py-3 text-sm font-semibold"
                >
                    Sign In
                </Button>
            </div>
        </div>
    )

    const renderWalletFlow = () => (
        <div className="space-y-5 p-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contestant</p>
                <p className="mt-2 text-xl font-black text-slate-950">
                    {contestant.contestant_biodata.first_name} {contestant.contestant_biodata.last_name}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                    Pay from your wallet using the current stage currency.
                </p>
            </div>

            {!user ? renderUnauthenticatedWalletView() : !hasWallet ? (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 className="text-lg font-black text-amber-950">Wallet not available</h3>
                    <p className="mt-2 text-sm leading-6 text-amber-900">
                        {walletVoteContext?.error ?? `We could not find a wallet in ${stageCurrency ?? "the required currency"} for this vote.`}
                    </p>
                    <div className="mt-5 flex justify-end">
                        <Button
                            element="button"
                            type="button"
                            variant="outline"
                            onClick={() => setMode("start")}
                            className="rounded-2xl px-6 py-3 text-sm font-semibold"
                        >
                            Back
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-2">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Available Balance</p>
                            <p className="mt-2 text-2xl font-black text-slate-950">
                                {formatAmount(availableBalance)} {wallet?.wallet_currency}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Vote Currency</p>
                            <p className="mt-2 text-2xl font-black text-slate-950">
                                {wallet?.wallet_currency}
                            </p>
                        </div>
                    </div>

                    {walletVoteContext?.error ? (
                        <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                            {walletVoteContext.error}
                        </p>
                    ) : null}

                    <walletFetcher.Form method="post" className="space-y-4">
                        <input type="hidden" name="intent" value="wallet_vote" />
                        <input type="hidden" name="contestant_id" value={contestant._id} />
                        <input type="hidden" name="wallet_id" value={walletId} />

                        <div className="grid gap-4 sm:grid-cols-2">
                            <FormControl
                                as="input"
                                id="number_of_votes"
                                name="number_of_votes"
                                labelText="Number of Votes"
                                type="number"
                                min={1}
                                required
                                value={voteQuantity}
                                onChange={(event) => setVoteQuantity(event.currentTarget.value)}
                                labelClassNames="text-left"
                            />
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Total Payable</p>
                                <p className="mt-2 text-2xl font-black text-slate-950">
                                    {formatAmount(payableAmount)} {wallet?.wallet_currency}
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                    Calculated as {formatAmount(pricePerVote)} {wallet?.wallet_currency} per vote.
                                </p>
                            </div>
                        </div>

                        <FormControl
                            as="textarea"
                            id="remark"
                            name="remark"
                            labelText="Remark"
                            labelClassNames="text-left"
                            value={remark}
                            onChange={(event) => setRemark(event.currentTarget.value)}
                            placeholder="Tell us why you're voting"
                        />

                        {!hasSufficientBalance ? (
                            <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                                Your wallet balance is not enough for this vote total.
                            </p>
                        ) : null}

                        <DialogFooter className="pt-2 sm:justify-end">
                            <Button
                                element="button"
                                type="button"
                                variant="outline"
                                onClick={() => setMode("start")}
                                className="rounded-2xl px-6 py-3 text-sm font-semibold"
                            >
                                Cancel
                            </Button>
                            <button
                                type="submit"
                                disabled={isWalletSubmitDisabled}
                                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isWalletSubmitting ? "Processing..." : "Vote from Wallet"}
                            </button>
                        </DialogFooter>
                    </walletFetcher.Form>
                </>
            )}
        </div>
    )

    return (
        <Dialog modal open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild disabled={disabled} title='Vote for contestant'
                className={cn(`rounded-full outline-none`, {
                    'bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed': disabled
                })}>
                {children ?? <VoteLink type={'tally'} count={numberSlang(contestant.vote.tally)} className="w-full" />}
            </DialogTrigger>
            <DialogContent className="bg-secondary p-0 gap-0">
                {mode === "provider" ? renderProviderFlow() : mode === "wallet" ? renderWalletFlow() : renderStartMenu()}
            </DialogContent>
        </Dialog>
    )
}
