import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation, Form } from "@remix-run/react";
import { useState } from "react";
import { ArrowRight, Building2, Globe, Search, Store, Users } from "lucide-react";
import Cta from "~/components/reusables/Cta";
import Pagination from "~/components/reusables/Pagination";
import { requireAuth } from "~/lib/session.server";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { partnerServer } from "~/services/partner/partner.server";
import type { Business, BusinessQuery } from "~/services/partner/types/partner.interface";

const statusColors: Record<string, string> = {
  Approved: "text-green-700 bg-green-50 border-green-200",
  Pending: "text-amber-700 bg-amber-50 border-amber-200",
  Rejected: "text-red-700 bg-red-50 border-red-200",
  PendingVerification: "text-blue-700 bg-blue-50 border-blue-200",
  Trial: "text-violet-700 bg-violet-50 border-violet-200",
  Suspended: "text-slate-700 bg-slate-100 border-slate-200",
  PendingSettlementDisbursement: "text-cyan-700 bg-cyan-50 border-cyan-200",
};

export async function loader({ request }: LoaderFunctionArgs) {
  const validateAuth = await requireAuth(request);
  if (!validateAuth) return json({ redirect: "/login" }, { status: 302 });
  const url = new URL(request.url);
  const query: BusinessQuery = {};
  for (const [k, v] of url.searchParams.entries()) {
    if (v) query[k as keyof BusinessQuery] = v as any;
  }
  const partnersRes = await partnerServer.searchPartners(query, request);
  return json({ partnersRes: partnersRes.data ?? { items: [], items_per_page: 20 }, query });
}

function Banner({ data }: { data?: IPaginatedResponse<Business> | null }) {
  const totalPartners = data?.total_items ?? data?.items.length ?? 0;
  const totalPages = data?.total_pages ?? 0;
  const currentPage = data?.current_page ?? 1;

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_16px_50px_rgba(14,42,77,0.15)] sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-white/5" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            <Store className="h-4 w-4" />
            Partner Directory
          </div>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl">
            Manage partners here
          </h1>
          <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Manage partners here
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
              <Users className="h-4 w-4" />
              {totalPartners} partners
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
              <Globe className="h-4 w-4" />
              Page {currentPage} of {totalPages || 1}
            </span>
          </div>
        </div>
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
          Filter partners
        </h2>
      </div>

      <Form
        method="get"
        className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end"
      >
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Business name
          </span>
          <input
            type="text"
            name="legal_business_name"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white"
            placeholder="Search by business name"
          />
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

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
        statusColors[status] || "text-slate-600 bg-slate-100 border-slate-200"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function PartnerCard({ partner }: { partner: Business }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink">
          <Building2 className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-black text-slate-900">
            {partner.legal_business_name}
          </h3>
          <p className="mt-1 text-sm text-slate-500">{partner.industry}</p>
        </div>
      </div>

      <div className="mt-4">
        <StatusBadge status={partner.status} />
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 shrink-0 text-slate-400" />
          <span>{partner.country_of_incorporation}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 shrink-0 text-slate-400">📞</span>
          <span>{partner.phone_number}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 shrink-0 text-slate-400">✉️</span>
          <span className="truncate">{partner.contact_person?.email}</span>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <Cta
          element="link"
          to={`/admin/partners/details/${partner._id}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-pink px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-pink/90"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Cta>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
      <Store className="mx-auto h-10 w-10 text-slate-300" />
      <h3 className="mt-4 text-xl font-black text-slate-900">
        No partners found
      </h3>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
        Try adjusting the search filters or check back once more partners are
        available.
      </p>
    </div>
  );
}

function PartnersTable({ partners }: { partners: Business[] }) {
  return (
    <div className="hidden sm:block w-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              <th className="px-6 py-4">Business Name</th>
              <th className="px-6 py-4">Country</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Industry</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Contact Person</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner: Business) => (
              <tr
                key={partner._id}
                className="border-b border-slate-100 last:border-b-0 transition-colors hover:bg-slate-50/60"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-pink/10 text-brand-pink">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-slate-900">
                      {partner.legal_business_name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {partner.country_of_incorporation}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {partner.phone_number}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {partner.industry}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={partner.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="font-semibold text-slate-900">
                      {partner.contact_person?.name}
                    </div>
                    <div className="text-slate-500">
                      {partner.contact_person?.email}
                    </div>
                    <div className="text-slate-500">
                      {partner.contact_person?.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <Cta
                    element="link"
                    to={`/admin/partners/details/${partner._id}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand-pink px-4 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-pink/90"
                  >
                    Details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Cta>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-48 animate-pulse rounded-[2rem] bg-slate-200/70" />
      <div className="h-24 animate-pulse rounded-[1.75rem] bg-slate-200/70" />
      <div className="grid gap-5 sm:hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-56 animate-pulse rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
          />
        ))}
      </div>
      <div className="hidden h-80 animate-pulse rounded-[1.75rem] bg-slate-200/70 sm:block" />
    </div>
  );
}

export default function PartnersIndex() {
  const data = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const [search, setSearch] = useState((data as any).query?.legal_business_name || "");

  // Handle redirect if present in loader data
  if ("redirect" in data && typeof window !== "undefined") {
    window.location.href = data.redirect;
    return null;
  }
  const { partnersRes, query } = data as { partnersRes: IPaginatedResponse<Business>; query: BusinessQuery };
  const isBusy = navigation.state !== "idle";

  return (
    <main className="w-full min-h-screen bg-tertiary p-4 sm:p-6 lg:p-8">
      <Banner data={partnersRes} />

      <div className="mt-6">
        <SearchPanel />
      </div>

      <section className="mt-6">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Partner listings
            </h2>
            <p className="text-sm text-slate-500">
              {partnersRes?.total_items && partnersRes.total_items > 0
                ? `${partnersRes.total_items} partner${
                    partnersRes.total_items === 1 ? "" : "s"
                  } available`
                : "No partners found for the current filters"}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
            <Globe className="h-4 w-4" />
            Page {partnersRes?.current_page ?? 1}
          </div>
        </div>

        {isBusy && !partnersRes?.items?.length ? (
          <LoadingSkeleton />
        ) : partnersRes?.items && partnersRes.items.length > 0 ? (
          <>
            {/* MOBILE CARD VIEW */}
            <div className="grid gap-5 sm:hidden">
              {partnersRes.items.map((partner: Business) => (
                <PartnerCard key={partner._id} partner={partner} />
              ))}
            </div>

            {/* DESKTOP TABLE VIEW */}
            <PartnersTable partners={partnersRes.items} />
          </>
        ) : (
          <EmptyState />
        )}
      </section>

      <div className="mt-6 sm:flex sm:justify-between sm:items-center">
        <Pagination
          lastKey={partnersRes?.last_key_id}
          pageSize={partnersRes?.items_per_page}
          firstKey={partnersRes?.first_key_id}
        />
      </div>
    </main>
  );
}