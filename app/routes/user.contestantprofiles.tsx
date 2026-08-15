import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigation } from "@remix-run/react";
import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { toast } from "~/components/reusables/use-toast";
import { requireAuth } from "~/lib/session.server";
import { contestantRepo } from "~/services/contestant/contestant.server";
import type { IContestantBiodataWContest } from "~/services/contestant/types/contestant.interface";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  const { data, error, authRequired } = await contestantRepo.getContestantProfiles(request);

  if (authRequired) {
    return redirect("/login");
  }

  return json({ data, error, authRequired });
}

function useContestantProfilesController() {
  const { data, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState<IContestantBiodataWContest[]>([]);

  useEffect(() => {
    if (data) {
      setProfiles(data);
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

  const isLoading = navigation.state === "loading" && profiles.length === 0;

  return { profiles, isLoading };
}

export default function UserContestantProfiles() {
  const { profiles, isLoading } = useContestantProfilesController();

  return (
    <div className="min-h-screen bg-white text-brand-navy">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
          <div className="bg-brand-navy px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              My account
            </p>
            <h1 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Contestant profiles
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
              These are the profiles you have used to register for contests. Select a profile to view the contests it is participating in.
            </p>
          </div>
        </section>

        <main className="py-8 sm:py-10 lg:py-12">
          {isLoading ? (
            <ProfilesSkeleton />
          ) : profiles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {profiles.map((profile) => (
                <ContestantProfileCard key={profile._id} profile={profile} />
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

function ContestantProfileCard({ profile }: { profile: IContestantBiodataWContest }) {
  const fullName = `${profile.first_name} ${profile.last_name}`.trim();
  const contests = profile.contest ?? [];

  return (
    <Link
      to={`/user/contestantprofilecontests/${profile._id}`}
      className="group block h-full transition-transform duration-300 hover:-translate-y-1"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-grey bg-white shadow-[0_16px_48px_rgba(14,42,77,0.08)]">
        <div className="flex flex-1 flex-col gap-4 px-5 py-5 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-pink/10 text-lg font-black text-brand-pink">
              {fullName.charAt(0).toUpperCase() || "?"}
            </div>
            <span className="rounded-full border border-brand-grey bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-pink transition-colors duration-200 group-hover:border-brand-pink group-hover:bg-white">
              View contests
            </span>
          </div>

          <div>
            <h3 className="text-xl font-black tracking-tight text-brand-navy">
              {fullName || "Unnamed profile"}
            </h3>
            {profile.email && (
              <p className="mt-1 text-sm text-brand-slate">{profile.email}</p>
            )}
          </div>

          {profile.info && (
            <p className="line-clamp-2 text-sm leading-6 text-brand-charcoal">
              {profile.info}
            </p>
          )}

          {profile.whatsapp_no && (
            <p className="flex items-center gap-2 text-sm text-brand-slate">
              <span className="font-semibold text-brand-navy">WhatsApp:</span>
              {profile.whatsapp_no}
            </p>
          )}

          <div className="mt-auto border-t border-brand-grey pt-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate">
              {contests.length > 0 ? "Participating contests" : "No contests yet"}
            </p>
            {contests.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {contests.map((contest) => (
                  <span
                    key={contest._id}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-brand-navy"
                  >
                    {contest.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

function ProfilesSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-[1.75rem] border border-brand-grey bg-white shadow-[0_16px_48px_rgba(14,42,77,0.08)]"
        >
          <div className="flex flex-col gap-4 px-5 py-5 sm:px-6">
            <div className="flex items-start justify-between gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-200" />
              <div className="h-6 w-24 rounded-full bg-slate-200" />
            </div>
            <div className="space-y-2">
              <div className="h-5 w-3/4 rounded-full bg-slate-200" />
              <div className="h-4 w-1/2 rounded-full bg-slate-200" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full rounded-full bg-slate-200" />
              <div className="h-4 w-5/6 rounded-full bg-slate-200" />
            </div>
            <div className="mt-auto space-y-2 border-t border-brand-grey pt-4">
              <div className="h-3 w-32 rounded-full bg-slate-200" />
              <div className="flex gap-2">
                <div className="h-6 w-20 rounded-full bg-slate-200" />
                <div className="h-6 w-24 rounded-full bg-slate-200" />
              </div>
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
        No contestant profiles
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-brand-slate">
        You haven’t registered for any contests yet. Once you register, your contestant profiles will appear here.
      </p>
    </section>
  );
}