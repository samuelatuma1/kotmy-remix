import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Button from '~/components/reusables/Button'
import ContestCard from '~/components/reusables/ContestCard'
import { getContests } from '~/lib/data/contest.server'

export async function loader() {
  const contests = await getContests({ where: { status: 'completed' } })
  return json({ contests })
}

export default function Results() {
  const { contests } = useLoaderData<typeof loader>()
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
        {contests.map(contest => (
          <ContestCard key={contest.id} contest={contest} to={`/results/${contest.id}`} withTag withCategory />
        ))}
      </section>

      <div className="wrapper my-20 flex justify-center">
        <Button element="button" variant="outline">See more results</Button>
      </div>
    </main>
  )
}
