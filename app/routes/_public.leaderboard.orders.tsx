import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { Search, Trophy } from "lucide-react";
import Pagination from "~/components/reusables/Pagination";
import { partnerServer } from "~/services/partner/partner.server";
import type {
  IGeneralOrdersLeaderboardSearch,
  GeneralOrdersLeaderboardSearchResponse,
} from "~/services/partner/types/partner.interface";
import type { IPaginatedResponse } from "~/services/common/types/paginated_data";

type LeaderboardLoaderData = {
  leaderboard: IPaginatedResponse<GeneralOrdersLeaderboardSearchResponse>;
  query: IGeneralOrdersLeaderboardSearch;
  error?: string | null;
};

function buildLeaderboardQuery(searchParams: URLSearchParams): IGeneralOrdersLeaderboardSearch {
  const query: IGeneralOrdersLeaderboardSearch = {};

  for (const [key, value] of searchParams.entries()) {
    if (!value) continue;

    if (key === "page_size") {
      query.page_size = Number(value);
      continue;
    }

    if (key === "direction") {
      query.direction = value === "previous" ? "previous" : "next";
      continue;
    }

    if (key === "last_key_id") {
      query.last_key_id = value;
      continue;
    }

    if (key === "first_key_id") {
      query.first_key_id = value;
      continue;
    }

    if (key === "business_name") {
      query.business_name = value.trim() || null;
      continue;
    }

    if (key === "order_item_fulfilled_at_start_date") {
      query.order_item_fulfilled_at_start_date = value;
      continue;
    }

    if (key === "order_item_fulfilled_at_end_date") {
      query.order_item_fulfilled_at_end_date = value;
    }
  }

  return query;
}

function emptyPaginatedLeaderboard(pageSize = 20): IPaginatedResponse<GeneralOrdersLeaderboardSearchResponse> {
  return {
    current_page: 1,
    total_pages: 0,
    total_items: 0,
    items_per_page: pageSize,
    items: [],
    last_key_id: null,
    first_key_id: null,
  };
}

function formatPercent(value: number | null | undefined): string {
  if (value === null || value === undefined) return "—";
  return `${value.toFixed(2)}%`;
}

function LeaderboardSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-slate-200" />
            <div className="flex-1 space-y-3">
              <div className="h-4 w-1/3 rounded-full bg-slate-200" />
              <div className="h-3 w-1/2 rounded-full bg-slate-200" />
            </div>
            <div className="h-6 w-20 rounded-full bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

function PositionBadge({ position }: { position: number }) {
  let ringColor = "border-slate-300 text-slate-600";
  let bgColor = "bg-slate-100";

  if (position === 1) {
    ringColor = "border-amber-400 text-amber-700";
    bgColor = "bg-amber-50";
  } else if (position === 2) {
    ringColor = "border-slate-400 text-slate-700";
    bgColor = "bg-slate-100";
  } else if (position === 3) {
    ringColor = "border-orange-300 text-orange-700";
    bgColor = "bg-orange-50";
  }

  return (
    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${ringColor} ${bgColor} text-lg font-black`}>
      {position}
    </div>
  );
}

function LeaderboardRow({ entry }: { entry: GeneralOrdersLeaderboardSearchResponse }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="flex items-center gap-4">
        <PositionBadge position={entry.position} />

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-black text-slate-950 truncate">
            {entry.user_full_name || "Unknown"}
          </h3>
          {entry.business_name ? (
            <p className="text-sm text-slate-500 truncate">{entry.business_name}</p>
          ) : null}
        </div>

        <div className="shrink-0 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">
          {formatPercent(entry.percent_share)}
        </div>
      </div>
    </article>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = buildLeaderboardQuery(url.searchParams);
  const cookieHeader = request.headers.get("Cookie") ?? undefined;

  const leaderboardRes = await partnerServer.getGeneralOrdersLeaderboard(query, cookieHeader ?? "");

  if (leaderboardRes.authRequired) {
    return json<LeaderboardLoaderData>({
      leaderboard: emptyPaginatedLeaderboard(query.page_size ?? 20),
      query,
      error: "Authentication required",
    });
  }

  if (leaderboardRes.error) {
    return json<LeaderboardLoaderData>({
      leaderboard: emptyPaginatedLeaderboard(query.page_size ?? 20),
      query,
      error: typeof leaderboardRes.error.detail === "string"
        ? leaderboardRes.error.detail
        : "Unable to load leaderboard",
    });
  }

  return json<LeaderboardLoaderData>({
    leaderboard: leaderboardRes.data ?? emptyPaginatedLeaderboard(query.page_size ?? 20),
    query,
  });
}

export default function GeneralOrdersLeaderboard() {
  const { leaderboard, query, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  const hasItems = leaderboard.items.length > 0;

  return (
    <main className="w-full grow bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              <Trophy className="h-4 w-4" />
              Leaderboard
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                Leaderboard
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                You can top the leaderboard by patronizing our partners. You stand the chance to get Givaah Credits to do many amazing things on our platform
              </p>
            </div>
          </div>
        </div>

        {error ? (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {error}
          </div>
        ) : null}
      </section>

      <section className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
        <Form method="get" className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Business name</span>
            <input
              name="business_name"
              defaultValue={query.business_name ?? ""}
              placeholder="Search by business name"
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Start date</span>
            <input
              type="date"
              name="order_item_fulfilled_at_start_date"
              defaultValue={query.order_item_fulfilled_at_start_date ?? ""}
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">End date</span>
            <input
              type="date"
              name="order_item_fulfilled_at_end_date"
              defaultValue={query.order_item_fulfilled_at_end_date ?? ""}
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white"
            />
          </label>

          <div className="flex gap-3">
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </button>
            <a
              href="/leaderboard/orders"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Reset
            </a>
          </div>
        </Form>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-slate-950">See our leaderboard</h2>
            <p className="text-sm text-slate-500">
              {leaderboard.total_items > 0
                ? `${leaderboard.total_items} entr${leaderboard.total_items === 1 ? "y" : "ies"} found`
                : "No entries found for the current filters"}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <Trophy className="h-4 w-4" />
            Page {leaderboard.current_page}
          </div>
        </div>

        {isBusy && !hasItems ? (
          <LeaderboardSkeleton />
        ) : hasItems ? (
          <div className="space-y-4">
            {leaderboard.items.map((entry, index) => (
              <LeaderboardRow
                key={`${entry.position}-${entry.user_full_name ?? entry.business_name ?? index}`}
                entry={entry}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <Trophy className="mx-auto h-10 w-10 text-slate-300" />
            <h3 className="mt-4 text-xl font-black text-slate-950">No entries found</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Try adjusting the search filters or date range to see leaderboard results.
            </p>
          </div>
        )}
      </section>

      <section className="mt-8">
        <Pagination
          lastKey={leaderboard.last_key_id}
          firstKey={leaderboard.first_key_id}
          pageSize={leaderboard.items_per_page}
        />
      </section>
    </main>
  );
}