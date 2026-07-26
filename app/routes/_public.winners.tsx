import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { contestRepo } from "~/services/contest/contest.server";

export async function loader({ params }: LoaderFunctionArgs) {
  let { data: winners, error } = await contestRepo.getWinners();
  return { winners, error };
}

interface WinnerCardProps {
  image_url: string;
  contest_name: string;
  remark: string;
  full_name: string;
  id: string;
}

const WinnerCard: React.FC<WinnerCardProps> = ({
  image_url,
  contest_name,
  remark,
  full_name,
  id,
}) => (
  <Link
    to={`/winner/${id}`}
    className="group block h-full overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_16px_45px_rgba(14,42,77,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(14,42,77,0.12)]"
  >
    <article className="flex h-full flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={image_url}
          alt={full_name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent p-4">
          <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
            Winner
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate">
          {contest_name}
        </p>
        <h3 className="text-xl font-black tracking-tight text-brand-navy">
          {full_name}
        </h3>
        <p className="line-clamp-3 text-sm leading-6 text-brand-charcoal">
          {remark}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-brand-grey pt-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-slate">
            View story
          </span>
          <span className="text-sm font-semibold text-brand-pink transition group-hover:translate-x-0.5">
            Open profile
          </span>
        </div>
      </div>
    </article>
  </Link>
);

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

export default function Winners() {
  const { winners, error } = useLoaderData<typeof loader>();
  const [searchWinners, setSearchWinners] = useState("");
  const [winnersFiltered, setWinnersFiltered] = useState(winners ?? []);

  useEffect(() => {
    setWinnersFiltered(winners ?? []);
  }, [winners]);

  useEffect(() => {
    const updated = (winners ?? []).filter((winner) =>
      winner.full_name.toLowerCase().includes(searchWinners.trim().toLowerCase()) ||
      winner.contest_name.toLowerCase().includes(searchWinners.trim().toLowerCase())
    );
    setWinnersFiltered(updated);
  }, [searchWinners, winners]);

  if (error) {
    return (
      <h1 className="font-satoshi-bold text-4xl text-center">
        {error.detail as string}
      </h1>
    );
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <header className="overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-pink px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                Winners Gallery
              </p>
              <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Meet our talented contest winners
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                A clean showcase of the extraordinary creations that rose to the top across KidMonth contests.
              </p>
            </div>

            <div className="flex items-center p-6 sm:p-8 lg:p-10">
              <div className="w-full rounded-[1.75rem] border border-brand-grey bg-secondary p-4 shadow-[0_10px_30px_rgba(14,42,77,0.05)] sm:p-5">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate">
                  Search winners
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by keyword or name"
                    value={searchWinners}
                    onChange={(e) => setSearchWinners(e.target.value)}
                    className="w-full rounded-2xl border border-brand-grey bg-white py-3.5 pl-5 pr-12 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate focus:border-brand-pink sm:text-base"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <SearchIcon className="h-5 w-5 text-brand-slate" />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </header>

        <main className="py-8 sm:py-10 lg:py-14">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                Featured winners
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-brand-navy">
                Celebrating standout performances
              </h2>
            </div>
            <div className="hidden rounded-full border border-brand-grey bg-white px-4 py-2 text-sm font-semibold text-brand-charcoal sm:block">
              {winnersFiltered.length} results
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {winnersFiltered.map((winner, idx) => (
              <WinnerCard
                key={winner.contestant_code || idx}
                image_url={winner.image_url}
                contest_name={winner.contest_name}
                remark={winner.remark}
                full_name={winner.full_name}
                id={winner._id}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center sm:mt-14">
            <button
              type="button"
              className="inline-flex items-center rounded-full border border-brand-grey bg-white px-8 py-3 text-sm font-semibold text-brand-navy shadow-[0_10px_30px_rgba(14,42,77,0.06)] transition hover:-translate-y-0.5 hover:border-brand-pink hover:text-brand-pink"
            >
              See more
            </button>
          </div>
        </main>
      </div>
    </main>
  );
}
