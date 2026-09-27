import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";

import Pagination from "~/components/reusables/Pagination";
import StatusTag from "~/components/reusables/StatusTag";
import { toast } from "~/components/reusables/use-toast";
import { formatDate } from "~/lib/dates.utils";
import { requireAuth } from "~/lib/session.server";
import { formatAmount, getErrorMessage } from "~/lib/utils";
import { vtuServer } from "~/services/vtu/vtu.server";
import type { VTUPurchaseResponse } from "~/services/vtu/types/vtu.interface";

const DEFAULT_PAGE_SIZE = 20;

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);

  const url = new URL(request.url);
  const pageSizeValue = Number(url.searchParams.get("page_size") ?? DEFAULT_PAGE_SIZE);
  const pageSize = Number.isFinite(pageSizeValue) && pageSizeValue > 0 ? pageSizeValue : DEFAULT_PAGE_SIZE;
  const directionValue = url.searchParams.get("direction");

  const response = await vtuServer.getVTUPurchaseResponsePaged({
    page_size: pageSize,
    last_key_id: url.searchParams.get("last_key_id") ?? undefined,
    first_key_id: url.searchParams.get("first_key_id") ?? undefined,
    direction: directionValue === "previous" ? "previous" : "next",
  }, request);

  if (response.error || !response.data) {
    return json({
      purchases: null,
      error: getErrorMessage(response.error, "Unable to load your VTU purchases."),
      pageSize,
    }, { status: 400 });
  }

  return json({ purchases: response.data, error: null, pageSize });
}

function statusColor(status: string): "green" | "yellow" | "red" | "gray" {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus.includes("success") || normalizedStatus.includes("fulfilled")) return "green";
  if (normalizedStatus.includes("pending") || normalizedStatus.includes("initiated") || normalizedStatus.includes("awaiting") || normalizedStatus.includes("review")) return "yellow";
  if (normalizedStatus.includes("fail") || normalizedStatus.includes("revers")) return "red";
  return "gray";
}

function PurchaseCard({ purchase }: { purchase: VTUPurchaseResponse }) {
  const purchaseDate = purchase.last_retried_at ?? purchase.first_retried_at;

  return (
    <article className="rounded-[1.75rem] border border-brand-grey bg-white p-5 shadow-[0_16px_48px_rgba(14,42,77,0.08)] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-slate">{purchase.type}</p>
          <h2 className="mt-2 break-all text-lg font-black text-brand-navy">{purchase.reference}</h2>
        </div>
        <StatusTag color={statusColor(purchase.status)} status={purchase.status.replaceAll("_", " ")} />
      </div>

      {purchase.description && (
        <div className="mt-5 rounded-2xl bg-secondary p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Description</p>
          <p className="mt-1 text-sm font-semibold leading-6 text-brand-navy">{purchase.description}</p>
        </div>
      )}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Network</p>
          <p className="mt-1 font-bold text-brand-navy">{purchase.network ?? "—"}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Phone number</p>
          <p className="mt-1 font-bold text-brand-navy">{purchase.phone_number}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Original amount</p>
          <p className="mt-1 font-bold text-brand-navy">{purchase.currency}{formatAmount(purchase.original_retail_amount)}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Paid amount</p>
          <p className="mt-1 font-bold text-brand-navy">{purchase.currency}{formatAmount(purchase.discounted_retail_amount)}</p>
        </div>
        {purchaseDate && (
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Date</p>
            <p className="mt-1 font-bold text-brand-navy">{formatDate(new Date(purchaseDate), { dateStyle: "medium", timeStyle: "short" })}</p>
          </div>
        )}
      </div>

      {purchase.failure_reason && (
        <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{purchase.failure_reason}</p>
      )}

      <Link
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-brand-pink px-4 text-sm font-bold text-brand-pink transition hover:bg-brand-pink/5"
        to={`/vtuservice/vtupurchase/${encodeURIComponent(purchase.reference)}`}
      >
        View purchase details
      </Link>
    </article>
  );
}

function PurchaseSkeleton() {
  return (
    <div aria-hidden="true" className="animate-pulse space-y-4">
      {[1, 2, 3].map((item) => <div className="h-64 rounded-[1.75rem] bg-slate-200" key={item} />)}
    </div>
  );
}

export default function VTUPurchasesPage() {
  const data = useLoaderData<typeof loader>();

  useEffect(() => {
    if (data.error) {
      toast({
        variant: "destructive",
        title: "Purchases unavailable",
        description: data.error,
      });
    }
  }, [data.error]);

  const purchases = data.purchases?.items ?? [];

  return (
    <main className="grow bg-white px-4 py-10 text-brand-navy sm:px-6 sm:py-16 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-pink">VTUload</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">My VTU purchases</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-brand-navy/70 sm:text-base">Review your airtime and data purchases, their status, and payment details.</p>
          </div>
          {data.purchases && <p className="text-sm font-semibold text-brand-slate">{data.purchases.total_items} purchase{data.purchases.total_items === 1 ? "" : "s"}</p>}
        </header>

        {data.error ? (
          <div className="rounded-[1.75rem] border border-red-200 bg-red-50 p-8 text-center text-red-700">
            <h2 className="text-xl font-black">We could not load your purchases</h2>
            <p className="mt-2 text-sm">{data.error}</p>
          </div>
        ) : data.purchases && purchases.length > 0 ? (
          <>
            <div className="grid gap-5">{purchases.map((purchase) => <PurchaseCard key={purchase._id} purchase={purchase} />)}</div>
            <Pagination firstKey={data.purchases.first_key_id} lastKey={data.purchases.last_key_id} pageSize={data.purchases.items_per_page || data.pageSize} />
          </>
        ) : data.purchases ? (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-secondary px-5 py-14 text-center">
            <h2 className="text-xl font-black">No VTU purchases yet</h2>
            <p className="mt-2 text-sm text-brand-slate">Your completed airtime and data purchases will appear here.</p>
            <Link className="mt-6 inline-flex min-h-12 items-center rounded-2xl bg-brand-pink px-5 font-bold text-white" to="/vtuservice/airtime">Buy airtime</Link>
          </div>
        ) : (
          <PurchaseSkeleton />
        )}
      </section>
    </main>
  );
}
