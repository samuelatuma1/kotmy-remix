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

  console.log({contests})

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
  console.log(contests)
  return (
    <main className='grow'>
      <header className="wrapper my-16">
        <h1 className='text-accent text-2xl lg:text-4xl lg:leading-snug font-satoshi-bold max-w-3xl text-brand-charcoal'>
          Congratulating the Extraordinary Talents That Stole the Spotlight!
        </h1>
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

      <section className='wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center'>
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
