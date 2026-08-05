import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import { ChevronRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Pagination from "~/components/reusables/Pagination";
import { setToast } from "~/lib/session.server";
import { partnerServer } from "~/services/partner/partner.server";
import {
  PartnerPendingSettlementEnum,
  SettlementPaymentOption,
  type IPartnerSettlement,
  type ISettlementPayment,
  type ISearchPartnerSettlementDTO,
} from "~/services/partner/types/partner.interface";
import type { IPaginatedResponse } from "~/services/common/types/paginated_data";

type SettlementsLoaderData = {
  settlements: IPaginatedResponse<IPartnerSettlement>;
  query: ISearchPartnerSettlementDTO;
  error?: string | null;
};

type SettlementsActionData = {
  error?: string | null;
};

const selectableStatuses = new Set<PartnerPendingSettlementEnum>([
  PartnerPendingSettlementEnum.pending,
  PartnerPendingSettlementEnum.failed,
  PartnerPendingSettlementEnum.processing,
  PartnerPendingSettlementEnum.overdue,
]);

function buildEmptySettlements(pageSize = 20): IPaginatedResponse<IPartnerSettlement> {
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

function buildSettlementsQuery(searchParams: URLSearchParams): ISearchPartnerSettlementDTO {
  const query: ISearchPartnerSettlementDTO = {};

  for (const [key, value] of searchParams.entries()) {
    if (!value) continue;

    if (key === "page_size") {
      const parsed = Number(value);
      if (!Number.isNaN(parsed)) query.page_size = parsed;
      continue;
    }

    if (key === "direction") {
      query.direction = value as "next" | "previous";
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

    if (key === "status") {
      query.status = value as PartnerPendingSettlementEnum;
      continue;
    }

    if (key === "currency") {
      query.currency = value as ISearchPartnerSettlementDTO["currency"];
      continue;
    }

    if (key === "settlement_payment_option") {
      query.settlement_payment_option = value as SettlementPaymentOption;
      continue;
    }

    if (key === "settlement_due_date") {
      query.settlement_due_date = value;
      continue;
    }

    if (key === "business_name") {
      query.business_name = value.trim();
      continue;
    }

    if (key === "business_id") {
      query.business_id = value.trim();
      continue;
    }

    if (key === "unique_key") {
      query.unique_key = value.trim();
      continue;
    }

    if (key === "order_id") {
      query.order_id = value.trim();
      continue;
    }

    if (key === "order_item_id") {
      query.order_item_id = value.trim();
      continue;
    }

    if (key === "order_code") {
      query.order_code = value.trim();
    }
  }

  return query;
}

function formatMoney(currency: string, value: number) {
  return `${currency} ${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(value)}`;
}

function formatDate(value: string) {
  try{
    return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
  }
  catch(ex){
    return value
  }
  
}

function formatLabel(value?: string | null) {
  if (!value) return "N/A";
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function SettlementSkeleton() {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="animate-pulse rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="h-4 w-28 rounded-full bg-slate-200" />
            <div className="mt-4 h-6 w-2/3 rounded-full bg-slate-200" />
            <div className="mt-3 h-4 w-full rounded-full bg-slate-200" />
            <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-200" />
          </div>
        ))}
      </div>
      <div className="animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="h-4 w-24 rounded-full bg-slate-200" />
        <div className="mt-4 h-8 w-3/4 rounded-full bg-slate-200" />
        <div className="mt-3 h-4 w-full rounded-full bg-slate-200" />
        <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-200" />
        <div className="mt-6 h-28 rounded-2xl bg-slate-100" />
      </div>
    </div>
  );
}

function SettlementCard({
  settlement,
  isSelected,
  onSelect,
  onShowDetails,
}: {
  settlement: IPartnerSettlement;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onShowDetails: () => void;
}) {
  const canSelect = selectableStatuses.has(settlement.status);

  return (
    <article
      className={`rounded-[1.5rem] border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${
        isSelected ? "border-slate-900" : "border-slate-200"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          {canSelect ? (
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onSelect(settlement._id)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
              aria-label={`Select settlement ${settlement._id}`}
            />
          ) : (
            <div className="mt-1 h-4 w-4 rounded-full border border-slate-300 bg-slate-100" aria-hidden="true" />
          )}

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold text-white">
                {settlement.currency}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
                {formatLabel(settlement.status)}
              </span>
              {!canSelect ? (
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                  Locked
                </span>
              ) : null}
            </div>
            <div className="text-lg font-black text-slate-950">
              {formatMoney(settlement.currency, settlement.settlement_amount)}
            </div>
            <div className="text-sm text-slate-500">
              Due {formatDate(settlement.settlement_due_date)}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onShowDetails}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
        >
          Show details <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Settlement id</div>
          <div className="mt-1  trunc_ text-sm font-semibold text-slate-900">{settlement._id}</div>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Business</div>
          <div className="mt-1  trunc_ text-sm font-semibold text-slate-900">
            {settlement.business?.legal_business_name ?? "Unknown business"}
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Original amount</div>
          <div className="mt-1 text-sm font-semibold text-slate-900">
            {formatMoney(settlement.currency, settlement.original_amount)}
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Payable share</div>
          <div className="mt-1 text-sm font-semibold text-slate-900">
            {settlement.percent_of_original_amount.toFixed(2)}%
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Order Code</div>
          <div className="mt-1  trunc_ text-sm font-semibold text-slate-900">{settlement.order_code}</div>
        </div>
      </div>
    </article>
  );
}

function SettlementDetailsPanel({
  settlement,
  onClose,
}: {
  settlement: IPartnerSettlement | null;
  onClose: () => void;
}) {
  return (
    <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Settlement details</div>
          <h2 className="mt-2 text-lg font-black text-slate-950">Details panel</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
          aria-label="Close settlement details"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {settlement ? (
        <div className="mt-5 space-y-4">
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Amount</div>
            <div className="mt-1 text-2xl font-black text-slate-950">
              {formatMoney(settlement.currency, settlement.settlement_amount)}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <DetailRow label="Business" value={settlement.business?.legal_business_name ?? "Unknown business"} />
            <DetailRow label="Status" value={formatLabel(settlement.status)} />
            <DetailRow label="Due date" value={formatDate(settlement.settlement_due_date)} />
            <DetailRow label="Settlement ref" value={settlement.unique_key} />
            <DetailRow label="Business id" value={settlement.business_id} />
            <DetailRow label="Order code" value={settlement.order_code} />
            <DetailRow label="Order id" value={settlement.order_id} />
            <DetailRow label="Order item id" value={settlement.order_item_id} />
            <DetailRow label="Ledger reference" value={settlement.settlement_ledger_reference ?? "Not set"} />
            <DetailRow label="Payment ref" value={settlement.settlement_payment_ref ?? "Not set"} />
            <DetailRow label="Payment option" value={formatLabel(settlement.settlement_payment_option)} />
            <DetailRow label="Waived amount" value={formatMoney(settlement.currency, settlement.waived_amount)} />
            <DetailRow
              label="Processing expiry"
              value={settlement.processing_expiry ? formatDate(String(settlement.processing_expiry)) : "Not set"}
            />
            <DetailRow
              label="Last payment update"
              value={settlement.last_payment_update ? formatDate(String(settlement.last_payment_update)) : "Not set"}
            />
            <DetailRow label="Created" value={formatDate(settlement.created_at)} />
            <DetailRow label="Updated" value={formatDate(settlement.updated_at)} />
          </div>

          {settlement.all_payment_refs?.length ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Payment refs</div>
              <div className="mt-2 space-y-2">
                {settlement.all_payment_refs.map(ref => (
                  <div key={ref} className="rounded-xl bg-white px-3 py-2 text-sm text-slate-700">
                    {ref}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-500">
          Pick a settlement to inspect its full payment history and status trail.
        </div>
      )}
    </aside>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 px-4 py-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="mt-1 break-words text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function PaymentModal({
  open,
  count,
  total,
  currency,
  onClose,
  selectedIds,
  actionError,
}: {
  open: boolean;
  count: number;
  total: number;
  currency: string;
  onClose: () => void;
  selectedIds: string[];
  actionError?: string | null;
}) {
  const [paymentOption, setPaymentOption] = useState<SettlementPaymentOption>(SettlementPaymentOption.provider);

  useEffect(() => {
    if (open) setPaymentOption(SettlementPaymentOption.provider);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-slate-950/40 p-4 backdrop-blur-sm sm:items-center">
      <div className="w-full max-w-lg rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Pay settlements</div>
            <h2 className="mt-2 text-xl font-black text-slate-950">
              {count} selected settlement{count > 1 ? "s" : ""}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Total: {formatMoney(currency, total)}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
            aria-label="Close payment modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {actionError ? (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {actionError}
          </div>
        ) : null}

        <Form method="post" className="mt-5 space-y-4">
          <input type="hidden" name="intent" value="pay-settlements" />
          <input type="hidden" name="settlement_ids" value={JSON.stringify(selectedIds)} />

          <div className="space-y-3">
            <label
              className={`block cursor-pointer rounded-2xl border p-4 transition ${
                paymentOption === SettlementPaymentOption.provider ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="payment_option"
                  value={SettlementPaymentOption.provider}
                  checked={paymentOption === SettlementPaymentOption.provider}
                  onChange={() => setPaymentOption(SettlementPaymentOption.provider)}
                  className="mt-1 h-4 w-4 text-slate-900 focus:ring-slate-900"
                />
                <div>
                  <div className="font-semibold text-slate-950">Provider payment</div>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Redirects you to your payment provider and returns you here when it is done.
                  </p>
                </div>
              </div>
            </label>

            <label
              className={`block cursor-pointer rounded-2xl border p-4 transition ${
                paymentOption === SettlementPaymentOption.wallet ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="payment_option"
                  value={SettlementPaymentOption.wallet}
                  checked={paymentOption === SettlementPaymentOption.wallet}
                  onChange={() => setPaymentOption(SettlementPaymentOption.wallet)}
                  className="mt-1 h-4 w-4 text-slate-900 focus:ring-slate-900"
                />
                <div>
                  <div className="font-semibold text-slate-950">Wallet payment</div>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Pays from your wallet immediately and refreshes the settlements list.
                  </p>
                </div>
              </div>
            </label>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Continue
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
   ;

  const query = buildSettlementsQuery(new URL(request.url).searchParams);
  const settlementsRes = await partnerServer.searchPartnerSettlements(query, request);

  if (settlementsRes.authRequired) {
    return redirect("/login");
  }

  if (settlementsRes.error) {
    return json<SettlementsLoaderData>({
      settlements: buildEmptySettlements(query.page_size ?? 20),
      query,
      error: typeof settlementsRes.error.detail === "string" ? settlementsRes.error.detail : "Unable to load settlements",
    });
  }

  return json<SettlementsLoaderData>({
    settlements: settlementsRes.data ?? buildEmptySettlements(query.page_size ?? 20),
    query,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
   ;

  const formData = await request.formData();
  const settlementIdsRaw = String(formData.get("settlement_ids") ?? "").trim();
  const paymentOptionRaw = String(formData.get("payment_option") ?? "").trim();
  const intent = String(formData.get("intent") ?? "");

  if (intent !== "pay-settlements") {
    const { headers } = await setToast({ request, toast: `error::Unsupported settlement action::${Date.now()}` });
    return json<SettlementsActionData>({ error: "Unsupported settlement action" }, { status: 400, headers });
  }

  let settlementIds: string[] = [];
  try {
    settlementIds = settlementIdsRaw ? (JSON.parse(settlementIdsRaw) as string[]) : [];
  } catch {
    settlementIds = settlementIdsRaw ? settlementIdsRaw.split("|").map(id => id.trim()).filter(Boolean) : [];
  }

  if (settlementIds.length < 1) {
    const { headers } = await setToast({ request, toast: `error::Please select at least one settlements to pay for::${Date.now()}` });
    return json<SettlementsActionData>({ error: "Please select at least one settlements to pay for" }, { status: 400, headers });
  }

  if (paymentOptionRaw !== SettlementPaymentOption.provider && paymentOptionRaw !== SettlementPaymentOption.wallet) {
    const { headers } = await setToast({ request, toast: `error::Please choose a settlement payment option::${Date.now()}` });
    return json<SettlementsActionData>({ error: "Please choose a settlement payment option" }, { status: 400, headers });
  }

  const paymentOption = paymentOptionRaw as SettlementPaymentOption;
  const payload: ISettlementPayment = {
    settlement_ids: settlementIds,
    payment_option: paymentOption,
  };

  if (paymentOption === SettlementPaymentOption.provider) {
    payload.redirect_url = new URL("/partners/settlements/payments", request.url).toString();
    const response = await partnerServer.settlementsProviderPayment(payload, request);

    if (response.error) {
      const { headers } = await setToast({
        request,
        toast: `error::${typeof response.error.detail === "string" ? response.error.detail : "Unable to initiate provider payment"}::${Date.now()}`,
      });
      return json<SettlementsActionData>({ error: "Unable to initiate provider payment" }, { status: 400, headers });
    }

    const paymentLink = response.data?.payment_link?.trim();
    if (!paymentLink) {
      const { headers } = await setToast({ request, toast: `error::Payment provider did not return a payment link::${Date.now()}` });
      return json<SettlementsActionData>({ error: "Payment provider did not return a payment link" }, { status: 400, headers });
    }

    const { headers } = await setToast({
      request,
      toast: `success::You will be redirected to complete your settlement payment::${Date.now()}`,
    });
    return redirect(paymentLink, { headers });
  }

  const response = await partnerServer.settlementsWalletPayment(payload, request);
  const failedStatus = String(response.data?.status ?? "").toLowerCase();

  if (response.error || failedStatus.includes("fail") || failedStatus.includes("error")) {
    const message =
      (typeof response.error?.detail === "string" ? response.error.detail : null) ??
      response.data?.message ??
      "Unable to complete wallet payment";
    const { headers } = await setToast({ request, toast: `error::${message}::${Date.now()}` });
    return json<SettlementsActionData>({ error: message }, { status: 400, headers });
  }

  const { headers } = await setToast({
    request,
    toast: `success::${response.data?.message ?? "Settlement payment completed successfully"}::${Date.now()}`,
  });

  const currentUrl = new URL(request.url);
  return redirect(`${currentUrl.pathname}${currentUrl.search}`, { headers });
}

export default function PartnerSettlementsIndex() {
  const { settlements, query, error } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>() as SettlementsActionData | undefined;
  const navigation = useNavigation();
  const [selectedSettlementIds, setSelectedSettlementIds] = useState<string[]>([]);
  const [activeSettlementId, setActiveSettlementId] = useState<string | null>(null);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const activeSettlement = useMemo(
    () => settlements.items.find(settlement => settlement._id === activeSettlementId) ?? null,
    [activeSettlementId, settlements.items]
  );

  const selectedSettlements = useMemo(
    () => settlements.items.filter(settlement => selectedSettlementIds.includes(settlement._id)),
    [selectedSettlementIds, settlements.items]
  );

  const selectedTotal = useMemo(
    () => selectedSettlements.reduce((sum, settlement) => sum + settlement.settlement_amount, 0),
    [selectedSettlements]
  );

  useEffect(() => {
    setSelectedSettlementIds(current =>
      current.filter(id => settlements.items.some(settlement => settlement._id === id))
    );
  }, [settlements.items]);

  const toggleSelection = (settlementId: string) => {
    setSelectedSettlementIds(current =>
      current.includes(settlementId)
        ? current.filter(id => id !== settlementId)
        : [...current, settlementId]
    );
  };

  const showSkeleton = navigation.state === "loading" && settlements.items.length === 0;

  return (
    <main className="w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Partner settlements
            </div>
            <h1 className="max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Track, review, and pay your pending settlements without leaving the dashboard.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Use the filters below to narrow the ledger, inspect a settlement on the side, and choose whether to pay from your wallet or a provider.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3">
            <MetricCard label="Visible" value={settlements.items.length} />
            <MetricCard label="Selected" value={selectedSettlementIds.length} />
            <MetricCard label="Total selected" value={formatMoney(selectedSettlements[0]?.currency ?? "NGN", selectedTotal)} wide />
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white px-6 py-5 shadow-sm sm:px-8">
        <Form method="get" className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_180px_auto] lg:items-end">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Business name</span>
              <input
                type="text"
                name="business_name"
                defaultValue={query.business_name ?? ""}
                placeholder="Search by business name"
                className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white"
              />
            </label>
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Status</span>
              <select
                name="status"
                defaultValue={query.status ?? ""}
                className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-900 focus:bg-white"
              >
                <option value="">All statuses</option>
                <option value={PartnerPendingSettlementEnum.pending}>Pending</option>
                <option value={PartnerPendingSettlementEnum.processing}>Processing</option>
                <option value={PartnerPendingSettlementEnum.failed}>Failed</option>
                <option value={PartnerPendingSettlementEnum.overdue}>Overdue</option>
                <option value={PartnerPendingSettlementEnum.paid}>Paid</option>
                <option value={PartnerPendingSettlementEnum.written_off}>Written off</option>
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Order code</span>
              <input
                type="text"
                name="order_code"
                defaultValue={query.order_code ?? ""}
                placeholder="Search by order code"
                className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white"
              />
            </label>
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Unique key</span>
              <input
                type="text"
                name="unique_key"
                defaultValue={query.unique_key ?? ""}
                placeholder="Search by settlement key"
                className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white"
              />
            </label>
          </div>

          <div className="flex items-center gap-3 lg:justify-end">
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Search className="h-4 w-4" />
              Filter
            </button>
          </div>
        </Form>
      </section>

      {error ? (
        <section className="mt-6 rounded-[1.5rem] border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
          {error}
        </section>
      ) : null}

      <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-4">
          {showSkeleton ? (
            <SettlementSkeleton />
          ) : settlements.items.length > 0 ? (
            settlements.items.map(settlement => (
              <SettlementCard
                key={settlement._id}
                settlement={settlement}
                isSelected={selectedSettlementIds.includes(settlement._id)}
                onSelect={toggleSelection}
                onShowDetails={() => setActiveSettlementId(settlement._id)}
              />
            ))
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-slate-200 bg-white px-6 py-14 text-center text-sm text-slate-500 shadow-sm">
              No settlements matched your filters.
            </div>
          )}

          <Pagination
            lastKey={settlements.last_key_id}
            firstKey={settlements.first_key_id}
            pageSize={settlements.items_per_page}
          />
        </div>

        <div className="lg:self-start">
          <SettlementDetailsPanel
            settlement={activeSettlement}
            onClose={() => setActiveSettlementId(null)}
          />
        </div>
      </section>

      <div className="fixed bottom-12 left-1/2 z-30 w-[calc(100%-1rem)] max-w-3xl -translate-x-1/2 rounded-full border border-slate-200 bg-white/95 px-4 py-3 shadow-[0_16px_50px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-600">
            {selectedSettlementIds.length < 1 ? (
              <span>Select at least one eligible settlements to continue.</span>
            ) : (
              <span>
                {selectedSettlementIds.length} selected, total {formatMoney(selectedSettlements[0]?.currency ?? "NGN", selectedTotal)}
              </span>
            )}
          </div>
          <button
            type="button"
            disabled={selectedSettlementIds.length < 1}
            onClick={() => setPaymentModalOpen(true)}
            className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Pay for Settlements
          </button>
        </div>
      </div>

      <PaymentModal
        open={paymentModalOpen}
        count={selectedSettlementIds.length}
        total={selectedTotal}
        currency={selectedSettlements[0]?.currency ?? "NGN"}
        onClose={() => setPaymentModalOpen(false)}
        selectedIds={selectedSettlementIds}
        actionError={actionData?.error}
      />
    </main>
  );
}

function MetricCard({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: string | number;
  wide?: boolean;
}) {
  return (
    <div className={`rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 ${wide ? "sm:col-span-3 lg:col-span-1" : ""}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="mt-2 text-lg font-black text-slate-950">{value}</div>
    </div>
  );
}
