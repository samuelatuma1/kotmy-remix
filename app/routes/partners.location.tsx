import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { ArrowRight, Globe, MapPin, Navigation2, Search } from "lucide-react";
import Cta from "~/components/reusables/Cta";
import Pagination from "~/components/reusables/Pagination";
import { requireAuth } from "~/lib/session.server";
import { partnerServer } from "~/services/partner/partner.server";
import type { IPaginatedResponse } from "~/services/common/types/paginated_data";
import type { PartnerLocation } from "~/services/partner/types/partner.interface";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  const url = new URL(request.url);
  const query: any = {};
  for (const [k, v] of url.searchParams.entries()) {
    query[k] = v;
  }
  const pagedUsersRes = await partnerServer.getPartnerLocations(query, request);
  if (pagedUsersRes.authRequired) {
    return redirect("/login");
  }
  return json({ data: pagedUsersRes.data, query });
}

function Banner({
  data,
}: {
  data?: IPaginatedResponse<PartnerLocation> | null;
}) {
  const totalLocations = data?.total_items ?? data?.items.length ?? 0;
  const totalPages = data?.total_pages ?? 0;
  const currentPage = data?.current_page ?? 1;

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_16px_50px_rgba(14,42,77,0.15)] sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-white/5" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            <MapPin className="h-4 w-4" />
            Partner Locations
          </div>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl">
            Keep every branch easy to find
          </h1>
          <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Review your locations, open directions instantly, and move through
            each branch without clutter.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
              <Globe className="h-4 w-4" />
              {totalLocations} locations
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
              <Navigation2 className="h-4 w-4" />
              Page {currentPage} of {totalPages || 1}
            </span>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-md">
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Total locations
            </p>
            <p className="mt-1 text-lg font-black text-white">
              {totalLocations}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Current page
            </p>
            <p className="mt-1 text-lg font-black text-white">{currentPage}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Items per page
            </p>
            <p className="mt-1 text-lg font-black text-white">
              {data?.items_per_page ?? "20"}
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

function SearchPanel() {
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";

  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center gap-2 text-slate-500">
        <Search className="h-4 w-4" />
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          Filter locations
        </h2>
      </div>

      <Form
        method="get"
        className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
      >
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Filter value
          </span>
          <input
            type="number"
            name="price,wildcard,status"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white"
            placeholder="Enter a value"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Search term
          </span>
          <input
            type="text"
            name="wildcard"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white"
            placeholder="Branch name, city, or state"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Status
          </span>
          <select
            name="status"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-pink focus:bg-white"
          >
            <option value="available">Available</option>
            <option value="out_of_stock">Out of Stock</option>
            <option value="suspended">Suspended</option>
          </select>
        </label>

        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand-navy px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy/90 disabled:opacity-60"
          disabled={isBusy}
        >
          <Search className="h-4 w-4" />
          {isBusy ? "Searching..." : "Search"}
        </button>
      </Form>
    </section>
  );
}

function LocationCard({ location }: { location: PartnerLocation }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink">
          <MapPin className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-black text-slate-900">
            {location.name}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {location.city}, {location.state_name}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600">
          {location.country_name}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600">
          {location.state}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-500">
        {location.street || "Location details available from this branch"}
      </p>

      <div className="mt-auto pt-4">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-pink px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-pink/90"
        >
          Get Directions
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
      <MapPin className="mx-auto h-10 w-10 text-slate-300" />
      <h3 className="mt-4 text-xl font-black text-slate-900">
        No locations found
      </h3>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
        Try adjusting the search filters or check back once more branches are
        available.
      </p>
    </div>
  );
}

export default function PartnerProducts() {
  const { data, query } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";

  return (
    <main className="w-full min-h-screen bg-tertiary p-4 sm:p-6 lg:p-8">
      <Banner data={data} />

      <div className="mt-6 flex justify-end">
        <Cta
          element="link"
          to="/partners/add"
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold"
        >
          Add Location
          <ArrowRight className="h-4 w-4" />
        </Cta>
      </div>

      <div className="mt-6">
        <SearchPanel />
      </div>

      <section className="mt-6">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Location listings
            </h2>
            <p className="text-sm text-slate-500">
              {data?.total_items && data.total_items > 0
                ? `${data.total_items} location${
                    data.total_items === 1 ? "" : "s"
                  } available`
                : "No locations found for the current filters"}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
            <Globe className="h-4 w-4" />
            Page {data?.current_page ?? 1}
          </div>
        </div>

        {isBusy && !data ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-64 animate-pulse rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
              />
            ))}
          </div>
        ) : data?.items && data.items.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {data.items.map((location) => (
              <LocationCard key={location._id} location={location} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </section>

      <div className="mt-6 sm:flex sm:justify-between sm:items-center">
        <Pagination
          lastKey={query?.last_key_id}
          pageSize={query?.items_per_page}
          firstKey={query?.first_key_id}
        />
      </div>
    </main>
  );
}
