import { LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import Pagination from "~/components/reusables/Pagination"
import Select from "~/components/reusables/Select"
import StatusTag from "~/components/reusables/StatusTag"
import { getFinalResultForContest } from "~/services/contest/contest.server"

export async function loader({ params }: LoaderFunctionArgs) {
    const { contestId } = params
    if (!contestId) return redirect(`/results`)
    const {data: contest, error} = await getFinalResultForContest(contestId)
    
    if (error) redirect(`/results`)
    return { contest }
}

export default function ContestResult() {
    const {  contest } = useLoaderData<typeof loader>()
    if(!contest) throw redirect(`/results`)

    const color = contest.status === 'registering'
        ? 'yellow' : contest.status === 'ongoing'
            ? 'green' : contest.status === 'completed'
                ? 'red' : 'gray'
    let headings: string[] = []
    let table_results: {[key: string]: string | number}[] = []
    if(contest?.final_result_scores){
        headings = contest.final_result_headings
        table_results = contest.final_result_scores.map(res => res.table_data)
    }
    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-white">
            <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                <header className="overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="bg-black px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
                                Results Summary
                            </p>
                            <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                                {contest.name} result table
                            </h1>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                                Leaderboard view for the final outcome, category breakdowns, and ranking details.
                            </p>
                        </div>

                        <div className="flex items-center p-6 sm:p-8 lg:p-10">
                            <div className="w-full rounded-[1.75rem] border border-brand-grey bg-secondary p-5 shadow-[0_10px_30px_rgba(14,42,77,0.05)] sm:p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                                            Current status
                                        </p>
                                        <h2 className="mt-2 text-2xl font-black tracking-tight text-brand-navy">
                                            Contest details
                                        </h2>
                                    </div>
                                    <StatusTag status={contest.status} color={color} />
                                </div>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    <SummaryStat label="Categories" value={contest.categories.join(", ")} />
                                    <SummaryStat label="Stages" value={String(contest.no_of_stages ?? 0)} />
                                    <SummaryStat label="Duration" value="From May 23 to June 20" />
                                    <SummaryStat label="Prizes" value={contest.prizes} />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="mt-6 overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
                    <div className="border-b border-brand-grey px-6 py-6 sm:px-8">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                                    Table controls
                                </p>
                                <h2 className="mt-2 text-2xl font-black tracking-tight text-brand-navy">
                                    Final ranking and stage filters
                                </h2>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                <div className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal">
                                    SMV: Social media votes
                                </div>
                                <div className="rounded-full border border-brand-grey bg-white px-4 py-2 text-xs font-semibold text-brand-slate">
                                    White-first layout
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <fieldset className="flex min-w-0 flex-wrap gap-3">
                                <Select name="stage" id="stage" containerClass="bg-white">
                                    <option value="1">{contest.name.toUpperCase()} - {"FINAL RESULT TABLE"}</option>
                                </Select>
                                <Select name="category" id="category" containerClass="bg-white">
                                    <option value="">Sort by category</option>
                                </Select>
                            </fieldset>
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="min-w-max w-full table-auto border-separate border-spacing-0">
                            <thead>
                                <tr>
                                    <th className="sticky left-0 z-20 border-b border-r border-brand-grey bg-gradient-to-b from-brand-navy to-brand-charcoal px-6 py-4 text-left text-xs font-black uppercase tracking-[0.24em] text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.12)]">
                                        S/N
                                    </th>
                                    {headings.map(heading => (
                                        <th className="border-b border-r border-brand-grey bg-gradient-to-b from-brand-navy to-brand-charcoal px-6 py-4 text-left text-xs font-black uppercase tracking-[0.24em] text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.12)]" key={heading}>{heading}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {table_results.map((contestant, index) => (
                                    <tr
                                        key={index}
                                        className="group transition odd:bg-white even:bg-brand-cloud/60 hover:bg-brand-gold/10"
                                    >
                                        <td className="sticky left-0 z-10 border-b border-r border-brand-grey bg-inherit px-6 py-4 text-sm font-semibold text-brand-navy">
                                            {index + 1}
                                        </td>
                                        {headings.map(heading => (
                                            <td className="border-b border-r border-brand-grey px-6 py-4 text-sm text-brand-charcoal" key={heading}>{contestant[heading]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="border-t border-brand-grey bg-gradient-to-r from-brand-cloud via-white to-brand-gold/10 px-6 py-5 sm:px-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate">
                                Pagination
                            </p>
                            <div className="rounded-full border border-brand-grey bg-white px-3 py-2 shadow-[0_6px_20px_rgba(14,42,77,0.04)]">
                                <Pagination className="p-0" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

function SummaryStat({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-[1.25rem] border border-brand-grey bg-white px-4 py-4 shadow-[0_6px_20px_rgba(14,42,77,0.04)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-slate">
                {label}
            </p>
            <p className="mt-2 break-words text-sm font-semibold text-brand-navy">
                {value}
            </p>
        </div>
    )
}
