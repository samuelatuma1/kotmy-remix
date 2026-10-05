import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useFetcher, useLoaderData, useNavigation, useRevalidator } from "@remix-run/react";
import { useEffect, useState } from "react";
import Pagination from "~/components/reusables/Pagination";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/reusables/Dialog";
import { toast } from "~/components/reusables/use-toast";
import { formatDate } from "~/lib/dates.utils";
import { requireAuth } from "~/lib/session.server";
import { formatMoney } from "~/lib/utils";
import type { IFetcherError } from "~/lib/api/types/fetcher.interface";
import { vtuServer } from "~/services/vtu/vtu.server";
import { VTUPurchaseStatus, VTUType, type IQueryVTUPurchases, type VTUPurchaseResponse, type VTUPurchaseResponsePaged } from "~/services/vtu/types/vtu.interface";

type LoaderData = { purchases: VTUPurchaseResponsePaged; query: IQueryVTUPurchases; error?: string };
type RefundActionData = { ok: true; purchase: VTUPurchaseResponse } | { ok: false; error: string };

const statuses = Object.values(VTUPurchaseStatus);
const types = Object.values(VTUType);

function buildQuery(params: URLSearchParams): IQueryVTUPurchases {
  const query: IQueryVTUPurchases = {};
  for (const key of ["status", "email", "type", "phone_number", "reference"] as const) {
    const value = params.get(key)?.trim();
    if (!value) continue;
    if (key === "status") query.status = value as VTUPurchaseStatus;
    else if (key === "type") query.type = value as VTUType;
    else query[key] = value;
  }
  const pageSize = Number(params.get("page_size"));
  if (Number.isInteger(pageSize) && pageSize > 0) query.page_size = pageSize;
  const lastCreatedAt = params.get("last_created_at");
  const firstCreatedAt = params.get("first_created_at");
  if (lastCreatedAt) query.last_created_at = lastCreatedAt;
  if (firstCreatedAt) query.first_created_at = firstCreatedAt;
  const direction = params.get("direction");
  if (direction === "next") {
    query.direction = direction;
    query.last_key_id = params.get("last_key_id");
  } else if (direction === "previous") {
    query.direction = direction;
    query.first_key_id = params.get("first_key_id");
  }
  return query;
}

function emptyPage(pageSize = 20): VTUPurchaseResponsePaged {
  return { items: [], items_per_page: pageSize, total_items: 0, total_pages: 0, current_page: 1, first_key_id: null, last_key_id: null, first_created_at: "", last_created_at: "" };
}

function syncCreatedAtParams(lastCreatedAt?: string | null, firstCreatedAt?: string | null) {
  const url = new URL(window.location.href);
  const timestamps = { last_created_at: lastCreatedAt, first_created_at: firstCreatedAt };
  let changed = false;
  for (const [key, value] of Object.entries(timestamps)) {
    if (value && url.searchParams.get(key) !== value) {
      url.searchParams.set(key, value);
      changed = true;
    }
  }
  if (changed) window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
}

function getErrorMessage(error: IFetcherError | unknown): string {
  if (typeof error === "string") return error;
  if (error && typeof error === "object" && "detail" in error) {
    const detail = error.detail;
    if (typeof detail === "string") return detail;
    if (Array.isArray(detail)) return detail.map(item => item?.msg).filter(Boolean).join(", ") || "The request failed";
  }
  return "Unable to complete the request. Please try again.";
}

function PurchaseSkeleton() {
  return <div className="space-y-3 animate-pulse" aria-label="Loading purchases">{[0, 1, 2].map(item => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="h-4 w-36 rounded bg-slate-200" /><div className="mt-4 h-5 w-2/3 rounded bg-slate-200" /><div className="mt-3 h-4 w-full rounded bg-slate-100" /><div className="mt-5 h-10 w-28 rounded-lg bg-slate-100" /></div>)}</div>;
}

function PurchaseInfo({ purchase }: { purchase: VTUPurchaseResponse }) {
  return <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    <div className="rounded-xl bg-slate-50 p-3"><dt className="text-xs text-slate-500">Type / network</dt><dd className="mt-1 font-semibold text-slate-900">{purchase.type} · {purchase.network ?? "Network unavailable"}</dd></div>
    <div className="rounded-xl bg-slate-50 p-3"><dt className="text-xs text-slate-500">Phone number</dt><dd className="mt-1 font-semibold text-slate-900">{purchase.phone_number}</dd></div>
    <div className="rounded-xl bg-slate-50 p-3"><dt className="text-xs text-slate-500">Description</dt><dd className="mt-1 font-semibold text-slate-900">{purchase.description}</dd></div>
    <div className="rounded-xl bg-slate-50 p-3"><dt className="text-xs text-slate-500">Reference</dt><dd className="mt-1 break-all font-semibold text-slate-900">{purchase.reference}</dd></div>
    <div className="rounded-xl bg-slate-50 p-3"><dt className="text-xs text-slate-500">Created</dt><dd className="mt-1 font-semibold text-slate-900">{formatDate(new Date(purchase.created_at), { dateStyle: "medium", timeStyle: "short" })}</dd></div>
    <div className="rounded-xl bg-slate-50 p-3"><dt className="text-xs text-slate-500">Current status</dt><dd className="mt-1 font-semibold capitalize text-slate-900">{purchase.status.replaceAll("_", " ")}</dd></div>
  </dl>;
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  const query = buildQuery(new URL(request.url).searchParams);
  const result = await vtuServer.adminGetVTUPurchaseResponsePaged(query, request);
  if (result.error) return json<LoaderData>({ purchases: emptyPage(query.page_size), query, error: getErrorMessage(result.error) });
  return json<LoaderData>({ purchases: result.data ?? emptyPage(query.page_size), query });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAuth(request);
  const formData = await request.formData();
  if (String(formData.get("intent") ?? "") !== "initiate_refund") {
    return json<RefundActionData>({ ok: false, error: "Unsupported VTU purchase action" }, { status: 400 });
  }
  const reference = String(formData.get("reference") ?? "").trim();
  const reason = String(formData.get("reason") ?? "").trim();
  if (!reference) return json<RefundActionData>({ ok: false, error: "Purchase reference is required" }, { status: 400 });
  if (!reason) return json<RefundActionData>({ ok: false, error: "Please provide a reason for the refund" }, { status: 400 });

  const result = await vtuServer.adminInitiateRefund({ reference, reason }, request);
  if (result.error || !result.data) {
    return json<RefundActionData>({ ok: false, error: getErrorMessage(result.error) }, { status: 400 });
  }
  return json<RefundActionData>({ ok: true, purchase: result.data });
}

export function useVTUPurchasesController() {
  const { purchases, query, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const { revalidate } = useRevalidator();
  const refundFetcher = useFetcher<typeof action>();
  const [selectedPurchase, setSelectedPurchase] = useState<VTUPurchaseResponse | null>(null);
  const isLoading = navigation.state !== "idle" && navigation.location?.pathname === "/admin/vtupurchases";

  useEffect(() => {
    const data = refundFetcher.data;
    if (!data) return;
    if (data.ok) {
      toast({ title: "Refund initiated", description: `VTU purchase refund initiated successfully. New status: ${data.purchase.status}.` });
      setSelectedPurchase(null);
      revalidate();
    } else {
      toast({ variant: "destructive", title: "Unable to initiate refund", description: data.error });
    }
  }, [refundFetcher.data, revalidate]);

  useEffect(() => {
    syncCreatedAtParams(purchases.last_created_at, purchases.first_created_at);
  }, [purchases.last_created_at, purchases.first_created_at]);

  return { purchases, query, error, isLoading, refundFetcher, selectedPurchase, setSelectedPurchase };
}

export default function AdminVTUPurchases() {
  const { purchases, query, error, isLoading, refundFetcher, selectedPurchase, setSelectedPurchase } = useVTUPurchasesController();
  const busy = refundFetcher.state !== "idle";

  return <main className="mx-auto min-h-full w-full max-w-7xl overflow-y-auto bg-slate-50/60 p-4 sm:p-6 lg:p-8">
    <header className="mb-6 sm:mb-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-pink">Administration</p><h1 className="mt-2 text-2xl font-black text-primary sm:text-3xl">VTU purchases</h1><p className="mt-2 text-sm text-slate-600">Search purchase records and review transactions that need manual attention.</p></header>

    <Form method="get" className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4"><h2 className="font-bold text-slate-900">Search purchases</h2><p className="mt-1 text-xs text-slate-500">Filter by status, email, purchase type, phone number, or reference.</p></div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <label className="grid gap-1 text-xs font-medium text-slate-600">Status<select name="status" defaultValue={query.status ?? ""} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"><option value="">All statuses</option>{statuses.map(status => <option key={status} value={status}>{status.replaceAll("_", " ")}</option>)}</select></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Purchase type<select name="type" defaultValue={query.type ?? ""} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"><option value="">All types</option>{types.map(type => <option key={type} value={type}>{type}</option>)}</select></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Email<input name="email" type="email" defaultValue={query.email ?? ""} placeholder="customer@example.com" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900" /></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Phone number<input name="phone_number" defaultValue={query.phone_number ?? ""} placeholder="Phone number" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900" /></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Reference<input name="reference" defaultValue={query.reference ?? ""} placeholder="Purchase reference" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900" /></label>
      </div>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><a href="/admin/vtupurchases" className="rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">Clear filters</a><button type="submit" className="rounded-lg bg-brand-pink px-5 py-2.5 text-sm font-bold text-white transition hover:scale-[1.01]">Search purchases</button></div>
    </Form>

    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><h2 className="font-bold text-slate-900">Purchase results</h2><span className="text-xs text-slate-500">{purchases.total_items} total</span></div>
      {isLoading ? <PurchaseSkeleton /> : error ? <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : purchases.items.length === 0 ? <div className="rounded-xl border border-dashed border-slate-200 px-4 py-12 text-center"><p className="font-semibold text-slate-800">No VTU purchases found</p><p className="mt-1 text-sm text-slate-500">Try adjusting your search filters.</p></div> : <>
        <div className="space-y-3 sm:hidden">{purchases.items.map(purchase => <article key={purchase._id} className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="break-all text-xs text-slate-500">{purchase.reference}</p><h3 className="mt-1 font-bold text-slate-900">{purchase.phone_number}</h3></div><span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold capitalize text-slate-700">{purchase.status.replaceAll("_", " ")}</span></div>
          <p className="mt-3 text-sm text-slate-600">{purchase.type} · {purchase.network ?? "Network unavailable"}</p><p className="mt-1 text-sm font-bold text-slate-900">{formatMoney(purchase.currency, purchase.discounted_retail_amount, 2)}</p><p className="mt-1 text-xs text-slate-500">Created {formatDate(new Date(purchase.created_at), { dateStyle: "medium", timeStyle: "short" })}</p>
          {purchase.status === VTUPurchaseStatus.MANUAL_REVIEW && <button type="button" onClick={() => setSelectedPurchase(purchase)} className="mt-4 w-full rounded-lg bg-brand-pink px-4 py-2.5 text-sm font-bold text-white">Initiate refund</button>}
        </article>)}</div>
        <div className="hidden overflow-x-auto sm:block"><table className="w-full min-w-[760px] text-left text-sm"><thead><tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">{["Reference", "Customer", "Purchase", "Amount paid", "Status", "Action"].map(label => <th key={label} className="px-3 py-3 font-semibold">{label}</th>)}</tr></thead><tbody>{purchases.items.map(purchase => <tr key={purchase._id} className="border-b border-slate-100 last:border-0"><td className="max-w-48 break-all px-3 py-4 font-medium text-slate-800">{purchase.reference}</td><td className="px-3 py-4"><div className="font-semibold text-slate-900">{purchase.phone_number}</div><div className="text-xs text-slate-500">{purchase.email ?? "No email"}</div></td><td className="px-3 py-4"><div className="font-medium">{purchase.type} · {purchase.network ?? "Unknown"}</div><div className="text-xs text-slate-500">{purchase.description}</div><div className="mt-1 text-xs text-slate-500">Created {formatDate(new Date(purchase.created_at), { dateStyle: "medium", timeStyle: "short" })}</div></td><td className="whitespace-nowrap px-3 py-4 font-semibold">{formatMoney(purchase.currency, purchase.discounted_retail_amount, 2)}</td><td className="px-3 py-4"><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-700">{purchase.status.replaceAll("_", " ")}</span></td><td className="px-3 py-4">{purchase.status === VTUPurchaseStatus.MANUAL_REVIEW ? <button type="button" onClick={() => setSelectedPurchase(purchase)} className="whitespace-nowrap rounded-lg bg-brand-pink px-3 py-2 text-xs font-bold text-white transition hover:scale-[1.02]">Initiate refund</button> : <span className="text-xs text-slate-400">—</span>}</td></tr>)}</tbody></table></div>
        <Pagination lastKey={purchases.last_key_id} firstKey={purchases.first_key_id} pageSize={purchases.items_per_page} />
      </>}
    </section>

    <Dialog open={!!selectedPurchase} onOpenChange={open => !open && !busy && setSelectedPurchase(null)}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-slate-200 bg-white sm:max-w-2xl">
        {selectedPurchase && <>
          <DialogHeader className="text-left"><DialogTitle className="text-xl font-black text-slate-950">Initiate VTU refund</DialogTitle><DialogDescription>Confirm the purchase details and provide a reason. This will start the refund process.</DialogDescription></DialogHeader>
          <div className="space-y-4"><div className="rounded-xl bg-pink-50 p-4"><p className="text-xs font-semibold uppercase tracking-wide text-pink-700">Amount paid</p><p className="mt-1 text-2xl font-black text-slate-950">{formatMoney(selectedPurchase.currency, selectedPurchase.discounted_retail_amount, 2)}</p></div><PurchaseInfo purchase={selectedPurchase} />
            <refundFetcher.Form method="post" className="space-y-4"><input type="hidden" name="intent" value="initiate_refund" /><input type="hidden" name="reference" value={selectedPurchase.reference} /><label className="grid gap-1.5 text-sm font-semibold text-slate-800">Reason for refund<textarea name="reason" required minLength={1} maxLength={1000} rows={4} placeholder="Explain why this purchase should be refunded" className="resize-y rounded-xl border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-brand-pink focus:ring-2 focus:ring-pink-100" /></label><DialogFooter className="gap-2 sm:gap-3"><DialogClose asChild><button type="button" disabled={busy} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700">Cancel</button></DialogClose><button type="submit" disabled={busy} className="rounded-lg bg-brand-pink px-5 py-2.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60">{busy ? "Initiating…" : "Confirm refund"}</button></DialogFooter></refundFetcher.Form>
          </div>
        </>}
      </DialogContent>
    </Dialog>
  </main>;
}
