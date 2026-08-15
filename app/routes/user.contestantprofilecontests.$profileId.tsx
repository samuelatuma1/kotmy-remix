import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigation } from "@remix-run/react";
import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { toast } from "~/components/reusables/use-toast";
import { requireAuth } from "~/lib/session.server";
import { contestantRepo } from "~/services/contestant/contestant.server";
import { noImage } from "~/assets/images";
import type { IContestWFinalResult } from "~/services/contest/types/contest.interface";
import { toOrdinal } from "~/lib/numbers.utils";

export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireAuth(request);
  const profileId = params.profileId;

  if (!profileId) {
    throw new Error("Invalid profile id");
  }

  const { data, error, authRequired } = await contestantRepo.getContestsForContestantProfile(profileId, request);

  if (authRequired) {
    return redirect("/login");
  }

  return json({ data, error, authRequired });
}

function useContestantProfileContestsController() {
  const { data, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const [contests, setContests] = useState<IContestWFinalResult[]>([]);

  useEffect(() => {
    if (data) {
      setContests(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: error?.detail?.toString() ?? "Error occurred",
      });
    }
  }, [error]);

  const isLoading = navigation.state === "loading" && contests.length === 0;

  return { contests, isLoading };
}

export default function UserContestantProfileContests() {
  const { contests, isLoading } = useContestantProfileContestsController();

  return (
    <div className="min-h-screen bg-white text-brand-navy">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
          <div className="bg-brand-navy px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Contestant profile
            </p>
            <h1 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Contests for profile
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
              These are the contests this profile is participating in, along with the contestant’s performance.
            </p>
          </div>
        </section>

        <main className="py-8 sm:py-10 lg:py-12">
          {isLoading ? (
            <ContestsSkeleton />
          ) : contests.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {contests.map((contest) => (
                <ContestResultCard key={contest._id} contest={contest} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </main>
      </div>
    </div>
  );
}

function ContestResultCard({ contest }: { contest: IContestWFinalResult }) {
  const result = contest.final_result_scores?.[0];
  const fullName = result
    ? `${result.contestant_biodata.first_name} ${result.contestant_biodata.last_name}`.trim()
    : "";
  const image = result?.contestant_image_url || noImage;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-grey bg-white shadow-[0_16px_48px_rgba(14,42,77,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={fullName || contest.name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-navy/45 to-transparent" />
        {result && (
          <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy shadow-[0_8px_24px_rgba(14,42,77,0.12)]">
            Position {result.position}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 py-5 sm:px-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate">
            {contest.name}
          </p>
          <h3 className="mt-2 text-xl font-black tracking-tight text-brand-navy">
            {fullName || "Contestant"}
          </h3>
          {result?.contestant_biodata.email && (
            <p className="mt-1 text-sm text-brand-slate">{result.contestant_biodata.email}</p>
          )}
        </div>

        {result && (
          <div className="mt-auto grid grid-cols-2 gap-3 border-t border-brand-grey pt-4">
            <div className="rounded-2xl bg-secondary px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-slate">
                Position
              </p>
              <p className="mt-1 text-lg font-black text-brand-navy">{toOrdinal(result.position)}</p>
            </div>
            <div className="rounded-2xl bg-secondary px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-slate">
                Total votes Percent
              </p>
              <p className="mt-1 text-lg font-black text-brand-pink">{result.total_votes?.toFixed(2)}%</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function ContestsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-[1.75rem] border border-brand-grey bg-white shadow-[0_16px_48px_rgba(14,42,77,0.08)]"
        >
          <div className="aspect-[4/5] bg-slate-200" />
          <div className="flex flex-col gap-4 px-5 py-5 sm:px-6">
            <div className="space-y-2">
              <div className="h-3 w-1/2 rounded-full bg-slate-200" />
              <div className="h-5 w-3/4 rounded-full bg-slate-200" />
              <div className="h-4 w-1/2 rounded-full bg-slate-200" />
            </div>
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-brand-grey pt-4">
              <div className="h-16 rounded-2xl bg-slate-200" />
              <div className="h-16 rounded-2xl bg-slate-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <section className="rounded-[2rem] border border-dashed border-brand-grey bg-secondary px-6 py-14 text-center sm:px-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-grey bg-white shadow-[0_10px_24px_rgba(14,42,77,0.06)]">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 text-brand-pink" fill="none">
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </div>
      <h2 className="mt-6 text-2xl font-black tracking-tight text-brand-navy">
        No contests for this profile
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-brand-slate">
        This profile is not participating in any contests at the moment.
      </p>
      <Link
        to="/user/contestantprofiles"
        className="mt-6 inline-flex items-center rounded-full bg-brand-pink px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-pink/90"
      >
        Back to profiles
      </Link>
    </section>
  );
}