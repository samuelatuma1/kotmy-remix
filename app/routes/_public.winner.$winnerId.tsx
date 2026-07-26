import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { contestRepo } from "~/services/contest/contest.server";



export async function loader({ params }: LoaderFunctionArgs) {
  let winnerId = params.winnerId!;
  let { data: winner, error } = await contestRepo.getWinnerById(winnerId);
  return { winner, error };
}


export default function WinnerDetailsPage() {
  const {winner, error} = useLoaderData<typeof loader>();

  const description =
    `We Are Thrilled To Announce The Triumphant Winner Of Our Recent '${winner?.contest_name}'! Let's Take A Moment To Applaud The Outstanding Creativity And Talent That Graced Our Contest.`;

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
            <div className="aspect-[3/4] w-full bg-secondary">
              <img
                src={winner?.image_url}
                alt={winner?.full_name}
                className="h-full w-full object-cover"
              />
            </div>
          </section>

          <section className="overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
            <div className="border-b border-brand-grey bg-gradient-to-br from-brand-navy via-brand-navy to-brand-pink px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                Winner Spotlight
              </p>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                {winner?.contest_name} Winner
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                {description}
              </p>
            </div>

            <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoTile label="Grand Winner" value={winner?.full_name || "Unknown"} />
                <InfoTile label="Contest" value={winner?.contest_name || "Unknown"} />
              </div>

              <div className="rounded-[1.5rem] border border-brand-grey bg-secondary p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate">
                  Winner&apos;s Note
                </p>
                <p className="mt-3 text-sm leading-7 text-brand-charcoal sm:text-base">
                  {winner?.remark}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <PillStat label="Visibility" value="Featured" />
                <PillStat label="Style" value="Premium" />
                <PillStat label="Palette" value="White First" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-brand-grey bg-white px-4 py-4 shadow-[0_6px_20px_rgba(14,42,77,0.04)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-slate">
        {label}
      </p>
      <p className="mt-2 truncate text-sm font-semibold text-brand-navy">
        {value}
      </p>
    </div>
  )
}

function PillStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-brand-grey bg-white px-4 py-3 text-center shadow-[0_6px_20px_rgba(14,42,77,0.04)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-slate">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-brand-navy">
        {value}
      </p>
    </div>
  )
}
