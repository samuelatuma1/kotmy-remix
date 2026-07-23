import { Link, useFetcher, useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useMemo, useRef, useState } from "react";

import VoteLink from "./VoteLink";
import { numberSlang } from "~/lib/numbers.utils";
import { IContestant } from "~/services/contestant/types/contestant.interface";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/reusables/Dialog";
import Button from "~/components/reusables/Button";
import { toast } from "~/components/reusables/use-toast";
import { useUserManager } from "~/lib/store/store_managers/tokenManager";
import { UserAtom } from "~/lib/store/atoms/token";

type GivaahCreditsLoaderResponse = {
  authRequired: boolean;
  credits: {
    available_credit_value: number;
    user_id: string;
    phone_number: string | null;
    order_code: string | null;
    credits: Array<{
      _id: string;
      str_id: string;
      created_at: string;
      updated_at: string;
      is_deleted: boolean;
      order_id: string;
      user_id: string;
      delivery_details_id: string;
      order_code: string;
      delivery_details_phone: string;
      available_credit_value: number;
      original_total_credit_value: number;
      redeemed_credit_value: number;
      used_credit_value: number;
      order_currency: string;
      redeemed_credit_value_break_down: Array<unknown>;
      used_credit_value_break_down: Array<unknown>;
    }>;
  } | null;
  error: string | null;
};

type GivaahVoteActionResponse =
  | {
      data?: {
        _id: string;
      } | null;
      givaah_credits_to_use?: number;
      error?: never;
      errorCode?: never;
    }
  | {
      error?: string;
      errorCode?: "LOGIN_REQUIRED";
      data?: never;
      givaah_credits_to_use?: never;
    };

function formatCreditValue(value: number) {
  return new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0,
  }).format(value);
}

function buildRedirectPath(pathname: string, search: string, hash: string) {
  return `${pathname}${search}${hash}`;
}

export default function GivaahVoteDialog({ contestant, children }: { contestant: IContestant; children?: React.ReactNode }) {
  const creditsFetcher = useFetcher<GivaahCreditsLoaderResponse>();
  const voteFetcher = useFetcher<GivaahVoteActionResponse>();
  const { getUserStoreManager } = useUserManager();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<UserAtom | null>(null);
  const [givaahCreditsToUse, setGivaahCreditsToUse] = useState("1");
  const hasLoadedCreditsRef = useRef(false);

  const path = useMemo(
    () => buildRedirectPath(location.pathname, location.search, location.hash),
    [location.pathname, location.search, location.hash]
  );

  useEffect(() => {
    setUser(getUserStoreManager());
  }, []);

  useEffect(() => {
    if (!open) {
      hasLoadedCreditsRef.current = false;
      return;
    }

    setGivaahCreditsToUse("1");

    if (user && !hasLoadedCreditsRef.current) {
      hasLoadedCreditsRef.current = true;
      creditsFetcher.load("/givaah-credits");
    }
  }, [open, user, creditsFetcher]);

  useEffect(() => {
    if (!voteFetcher.data) {
      return;
    }

    if ("errorCode" in voteFetcher.data && voteFetcher.data.errorCode === "LOGIN_REQUIRED") {
      toast({
        variant: "destructive",
        title: "Sign In Required",
        description: "Please sign in to vote with Givaah credits.",
      });
      setOpen(false);
      return;
    }

    if ("error" in voteFetcher.data && voteFetcher.data.error) {
      toast({
        variant: "destructive",
        title: "Vote Failed",
        description: voteFetcher.data.error,
      });
      return;
    }

    const usedCredits = "givaah_credits_to_use" in voteFetcher.data && typeof voteFetcher.data.givaah_credits_to_use === "number"
      ? voteFetcher.data.givaah_credits_to_use
      : Number(givaahCreditsToUse);
    // toast({
    //   title: "Vote Successful",
    //   description: `${usedCredits} Givaah credits used for ${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}.`,
    // });

    const timer = window.setTimeout(() => {
      setOpen(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [voteFetcher.data, givaahCreditsToUse, contestant.contestant_biodata.first_name, contestant.contestant_biodata.last_name]);

  const availableCredits = creditsFetcher.data?.credits?.available_credit_value ?? 0;
  const parsedCredits = Number(givaahCreditsToUse);
  const isCreditsLoading = open && user ? creditsFetcher.state !== "idle" && !creditsFetcher.data : false;
  const isSubmitting = voteFetcher.state !== "idle";
  const hasSessionExpired = Boolean(user) && creditsFetcher.data?.authRequired;
  const showSignInPrompt = !user || hasSessionExpired;
  const submitDisabled =
    !user ||
    hasSessionExpired ||
    isSubmitting ||
    creditsFetcher.state !== "idle" ||
    !Number.isInteger(parsedCredits) ||
    parsedCredits < 1 ||
    parsedCredits > availableCredits;

  const contestantName = `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild title="Vote with Givaah credits">
        {children ?? <VoteLink type="givaah" count={numberSlang(contestant.vote.givaah)} className="w-full" />}
      </DialogTrigger>
      <DialogContent className="max-w-2xl border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
        <DialogHeader className="border-b border-slate-100 p-6 text-left">
          <DialogTitle className="text-2xl font-black text-slate-950">Vote with Givaah credits</DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-6 text-slate-600">
            Support your favourite contestant using your available Givaah credits.
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto space-y-5 p-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contestant</p>
            <p className="mt-2 text-lg font-black text-slate-950">{contestantName}</p>
            <p className="mt-1 text-sm text-slate-600">Code: <span className="font-semibold text-slate-900">{contestant.code}</span></p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Get Givaah Credits</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              <Link to="/marketplace" className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950">
                Visit market place to get Givaah credits to vote your favorite contestant
              </Link>
            </p>
          </div>

          {showSignInPrompt ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <h3 className="text-xl font-black text-slate-950">Sign In Required</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                You are not signed in. Please sign in to vote with Givaah credits, or close this modal and continue browsing.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  element="button"
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-6 py-3 text-sm font-semibold"
                >
                  Close
                </Button>
                <Button
                  element="button"
                  type="button"
                  onClick={() => navigate(`/login?redirectTo=${encodeURIComponent(path)}`)}
                  className="rounded-2xl px-6 py-3 text-sm font-semibold"
                >
                  Sign In
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Available Credits</p>
                  <p className="mt-2 text-2xl font-black text-slate-950">
                    {isCreditsLoading ? "Loading..." : formatCreditValue(availableCredits)}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Vote Count</p>
                  <p className="mt-2 text-2xl font-black text-slate-950">{numberSlang(contestant.vote.givaah)}</p>
                </div>
              </div>

              {creditsFetcher.data?.error ? (
                <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {creditsFetcher.data.error}
                </p>
              ) : null}

              <voteFetcher.Form method="post" className="space-y-4">
                <input type="hidden" name="intent" value="givaah_vote" />
                <input type="hidden" name="contestant_id" value={contestant._id} />

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-700">Givaah credits to use</span>
                  <input
                    name="givaah_credits_to_use"
                    type="number"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                    placeholder="Enter credits to use"
                  />
                  <span className="text-xs text-slate-500">
                    Enter votes from 1 to {formatCreditValue(availableCredits)}.
                  </span>
                </label>

                <DialogFooter className="pt-2 sm:justify-end">
                  <DialogClose asChild>
                    <Button
                      element="button"
                      type="button"
                      variant="outline"
                      className="rounded-2xl px-6 py-3 text-sm font-semibold"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <button
                    type="submit"
                    disabled={submitDisabled}
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting..." : "Vote now"}
                  </button>
                </DialogFooter>
              </voteFetcher.Form>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
