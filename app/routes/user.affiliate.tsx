import { json, redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { Building2, Coins, Search, Trophy, Users } from "lucide-react";
import Pagination from "~/components/reusables/Pagination";
import { requireAuth, setToast } from "~/lib/session.server";
import type { IPaginatedResponse } from "~/services/common/types/paginated_data";
import type {
  IAffiliateLeaderboardResponse,
  IAffiliateLeaderboardSearch,
  WalletCurrency,
} from "~/services/wallet/types/wallet.interface";
import { walletRepo } from "~/services/wallet/wallet.server";

// ---------------------------------------------------------------------------
// Types & helpers
// ---------------------------------------------------------------------------

/**
 * Date fields are serialized as `YYYY-MM-DD` strings (the format API and
 * `<input type="date">` expect), while still carrying every searchable field
 * from `IAffiliateLeaderboardSearch`.
 */
type AffiliateLeaderboardQuery = Omit<
  IAffiliateLeaderboardSearch,
  "created_at_start_date" | "created_at_end_date"
> & {
  created_at_start_date: string;
  created_at_end_date: string;
  currency: WalletCurrency;
};

type AffiliateLoaderData = {
  leaderboard: IPaginatedResponse<IAffiliateLeaderboardResponse>;
  query: AffiliateLeaderboardQuery;
  error?: string | null;
};

function toDateInputValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startOfCurrentMonth(): string {
  const now = new Date();
  return toDateInputValue(new Date(now.getFullYear(), now.getMonth(), 1));
}

function today(): string {
  return toDateInputValue(new Date());
}

function emptyLeaderboard(
  pageSize = 20
): IPaginatedResponse<IAffiliateLeaderboardResponse> {
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

function buildQuery(searchParams: URLSearchParams): AffiliateLeaderboardQuery {
  const query: AffiliateLeaderboardQuery = {
    created_at_start_date:
      searchParams.get("created_at_start_date") ?? startOfCurrentMonth(),
    created_at_end_date: searchParams.get("created_at_end_date") ?? today(),
    currency: (searchParams.get("currency") as WalletCurrency) ?? "NGN",
  };

  if (searchParams.get("page_size")) {
    query.page_size = Number(searchParams.get("page_size"));
  }
  if (searchParams.get("last_key_id")) {
    query.last_key_id = searchParams.get("last_key_id");
  }
  if (searchParams.get("first_key_id")) {
    query.first_key_id = searchParams.get("first_key_id");
  }
  if (searchParams.get("direction")) {
    query.direction = searchParams.get("direction") as "next" | "previous";
  }

  return query;
}

/** Ensures start/end dates are valid and span no more than 12 months. */
function validateDateRange(start: string, end: string): string | null {
  if (!start || !end) {
    return "Please provide both start and end dates.";
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return "Please provide valid start and end dates.";
  }

  if (startDate > endDate) {
    return "Start date cannot be after end date.";
  }

  const monthDiff =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (monthDiff > 12) {
    return "Date range cannot exceed 12 months. Please adjust your search.";
  }

  return null;
}

function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency }).format(
    amount
  );
}

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);

  const url = new URL(request.url);
  const query = buildQuery(url.searchParams);

  const validationError = validateDateRange(
    query.created_at_start_date,
    query.created_at_end_date
  );
  if (validationError) {
    return json<AffiliateLoaderData>({
      leaderboard: emptyLeaderboard(),
      query,
      error: validationError,
    });
  }

  const res = await walletRepo.queryAffiliateReferralBoard(
    request,
    query as unknown as IAffiliateLeaderboardSearch
  );

  if (res.authRequired) {
    throw redirect("/login");
  }

  if (res.error) {
    const errorMsg =
      typeof res.error.detail === "string"
        ? res.error.detail
        : "Unable to load affiliate referrals.";
    const { headers } = await setToast({
      request,
      toast: `error::${errorMsg}::${Date.now()}`,
    });
    return json<AffiliateLoaderData>(
      { leaderboard: emptyLeaderboard(), query, error: errorMsg },
      { headers }
    );
  }

  return json<AffiliateLoaderData>({
    leaderboard: res.data ?? emptyLeaderboard(),
    query,
    error: null,
  });
}

// ---------------------------------------------------------------------------
// UI primitives
// ---------------------------------------------------------------------------

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
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${ringColor} ${bgColor} text-sm font-black`}
    >
      {position}
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
        {label}
      </p>
      <p className="mt-1 text-lg font-black text-white">{value}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function HeroBanner({
  leaderboard,
  query,
}: {
  leaderboard: IPaginatedResponse<IAffiliateLeaderboardResponse>;
  query: AffiliateLeaderboardQuery;
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_16px_50px_rgba(14,42,77,0.15)] sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-white/5" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            <Trophy className="h-4 w-4" />
            Affiliate Dashboard
          </div>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl">
            Your referral earnings
          </h1>
          <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Track how much the users and organizations you referred have earned
            you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-md">
          <StatChip label="Total referrals" value={String(leaderboard.total_items)} />
          <StatChip label="Currency" value={query.currency} />
          <StatChip label="Page" value={String(leaderboard.current_page)} />
        </div>
      </div>
    </section>
  );
}

function SearchForm({ query }: { query: AffiliateLeaderboardQuery }) {
  const [localError, setLocalError] = useState<string | null>(null);
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const start = formData.get("created_at_start_date") as string;
    const end = formData.get("created_at_end_date") as string;

    if (start || end) {
      const err = validateDateRange(start, end);
      if (err) {
        e.preventDefault();
        setLocalError(err);
        return;
      }
    }
    setLocalError(null);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-slate-500">
        <Search className="h-4 w-4" />
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          Filter results
        </h2>
      </div>

      <Form
        method="get"
        onSubmit={handleSubmit}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
      >
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Start date
          </span>
          <input
            type="date"
            name="created_at_start_date"
            defaultValue={query.created_at_start_date}
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-pink focus:bg-white"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            End date
          </span>
          <input
            type="date"
            name="created_at_end_date"
            defaultValue={query.created_at_end_date}
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-pink focus:bg-white"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Currency
          </span>
          <select
            name="currency"
            defaultValue={query.currency}
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-pink focus:bg-white"
          >
            <option value="NGN">NGN (₦)</option>
            <option value="USD">USD ($)</option>
          </select>
        </label>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isBusy}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand-pink px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-accent disabled:opacity-50"
          >
            <Search className="h-4 w-4" />
            {isBusy ? "Searching..." : "Search"}
          </button>
          <a
            href="/user/affiliate"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
          >
            Reset
          </a>
        </div>
      </Form>

      {localError ? (
        <div className="mt-4 rounded-2xl border border-brand-navy/15 bg-brand-navy/5 px-4 py-3 text-sm font-medium text-brand-navy">
          {localError}
        </div>
      ) : null}
    </div>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <section className="mt-6 rounded-2xl border border-brand-navy/15 bg-brand-navy/5 px-5 py-4 text-sm font-medium text-brand-navy">
      {message}
    </section>
  );
}

function ResultsHeader({
  leaderboard,
}: {
  leaderboard: IPaginatedResponse<IAffiliateLeaderboardResponse>;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-2xl font-black text-slate-900">
          Referral earnings
        </h2>
        <p className="text-sm text-slate-500">
          {leaderboard.total_items > 0
            ? `${leaderboard.total_items} referral${
                leaderboard.total_items === 1 ? "" : "s"
              } found`
            : "No referrals found for the current filters"}
        </p>
      </div>
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        <Trophy className="h-4 w-4" />
        Page {leaderboard.current_page}
      </div>
    </div>
  );
}

function AffiliateTable({
  items,
}: {
  items: IAffiliateLeaderboardResponse[];
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Position
              </th>
              <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Referred User
              </th>
              <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Type
              </th>
              <th className="px-5 py-4 text-right text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Amount Earned
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item) => (
              <tr
                key={`${item.position}-${item.user_name ?? item.business_name}`}
                className="transition-colors hover:bg-slate-50/70"
              >
                <td className="px-5 py-4">
                  <PositionBadge position={item.position} />
                </td>
                <td className="px-5 py-4">
                  <p className="font-bold text-slate-900">
                    {item.user_name ?? item.business_name ?? "—"}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      item.user_name
                        ? "bg-slate-100 text-slate-700"
                        : "bg-brand-navy/10 text-brand-navy"
                    }`}
                  >
                    {item.user_name ? (
                      <Users className="h-3.5 w-3.5" />
                    ) : (
                      <Building2 className="h-3.5 w-3.5" />
                    )}
                    {item.user_name ? "User" : "Organization"}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success-500/60 px-3 py-1 text-sm font-black text-success-700">
                    <Coins className="h-4 w-4" />
                    {formatCurrency(item.amount_earned, item.currency)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AffiliateTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-4">
        <div className="h-3 w-40 animate-pulse rounded-full bg-slate-200" />
      </div>
      <div className="divide-y divide-slate-100">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex items-center gap-4 px-5 py-4">
            <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-slate-200" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-1/3 animate-pulse rounded-full bg-slate-200" />
              <div className="h-3 w-1/4 animate-pulse rounded-full bg-slate-200" />
            </div>
            <div className="h-8 w-24 animate-pulse rounded-full bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
      <Trophy className="mx-auto h-10 w-10 text-slate-300" />
      <h3 className="mt-4 text-xl font-black text-slate-900">
        No affiliate referrals found
      </h3>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
        Try adjusting the search filters or date range to see referral
        earnings.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AffiliateDashboard() {
  const { leaderboard, query, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  const hasItems = leaderboard.items.length > 0;

  return (
    <main className="w-full min-h-screen bg-tertiary p-4 sm:p-6 lg:p-8">
      <HeroBanner leaderboard={leaderboard} query={query} />

      <section className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
        <SearchForm query={query} />
      </section>

      {!isBusy && error ? <ErrorBanner message={error} /> : null}

      <section className="mt-8">
        <ResultsHeader leaderboard={leaderboard} />

        {isBusy ? (
          <AffiliateTableSkeleton />
        ) : hasItems ? (
          <AffiliateTable items={leaderboard.items} />
        ) : (
          <EmptyState />
        )}
      </section>

      {hasItems ? (
        <Pagination
          lastKey={leaderboard.last_key_id}
          firstKey={leaderboard.first_key_id}
          pageSize={leaderboard.items_per_page}
        />
      ) : null}
    </main>
  );
}