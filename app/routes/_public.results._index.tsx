import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import ContestCard from '~/components/reusables/ContestCard'
import Pagination from '~/components/reusables/Pagination'
import { contestRepo } from '~/services/contest/contest.server'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const page_size = Number(url.searchParams.get('page_size') ?? '20')
  const last_key_id = url.searchParams.get('last_key_id')
  const first_key_id = url.searchParams.get('first_key_id')
  const direction = url.searchParams.get('direction')

  const { data: contests, error } = await contestRepo.userGetContests({
    page_size,
    last_key_id: last_key_id ?? undefined,
    first_key_id: first_key_id ?? undefined,
    direction: direction === 'previous' ? 'previous' : 'next',
  })

  return json({
    contests: contests ?? {
      current_page: 1,
      total_pages: 1,
      total_items: 0,
      items_per_page: page_size,
      items: [],
      last_key_id: null,
      first_key_id: null,
    },
    error,
  })
}

export default function Results() {
  const { contests } = useLoaderData<typeof loader>()
  return (
    <main className='grow'>
      <header className="wrapper my-10 sm:my-14">
        <div className="overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-14">
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                Results
              </p>
              <h1 className="relative mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Congratulating the extraordinary talents that stole the spotlight
              </h1>
              <p className="relative mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                Explore the completed contest results, celebrate top performers, and browse the standout moments that earned the crown.
              </p>
            </div>

            <div className="flex items-stretch p-6 sm:p-8 lg:p-10">
              <div className="flex w-full flex-col justify-between rounded-[1.75rem] border border-brand-grey bg-secondary p-5 shadow-[0_10px_30px_rgba(14,42,77,0.05)] sm:p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                    Explore
                  </p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-brand-navy">
                    Discover every winning moment
                  </h2>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full max-w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-full overflow-x-auto">
          <div className="inline-flex min-w-max rounded-full bg-secondary p-2">
            <span className="whitespace-nowrap rounded-full bg-accent p-3 text-xs font-satoshi-medium text-white sm:px-6 sm:py-4 sm:text-base">
              All Contests
            </span>
            <span className="whitespace-nowrap rounded-full p-3 text-xs font-satoshi-medium sm:px-6 sm:py-4 sm:text-base">
              Ongoing Contests
            </span>
            <span className="whitespace-nowrap rounded-full p-3 text-xs font-satoshi-medium sm:px-6 sm:py-4 sm:text-base">
              Completed Contests
            </span>
          </div>
        </div>
      </section>

      <section className='wrapper my-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 justify-items-center'>
        {contests.items.map(contest => (
          <ContestCard key={contest.id} contest={contest} to={`/results/${contest.contest_unique_id}`} withTag withCategory />
        ))}
      </section>

      <div className="wrapper my-20">
        <Pagination
          lastKey={contests.last_key_id}
          firstKey={contests.first_key_id}
          pageSize={contests.items_per_page}
        />
      </div>
    </main>
  )
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] border border-brand-grey bg-white px-4 py-4 shadow-[0_6px_20px_rgba(14,42,77,0.04)] transition hover:-translate-y-0.5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-slate">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-brand-navy">
        {value}
      </p>
    </div>
  )
}
