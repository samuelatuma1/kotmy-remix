import { json, type ActionFunctionArgs, type LoaderFunctionArgs, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigation,
  useRevalidator,
} from "@remix-run/react";
import { PackageSearch, Search, ShieldCheck, ShieldX, ShoppingBag } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
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
import { partnerServer } from "~/services/partner/partner.server";
import {
  OrderProductStatus,
  OrderRefundType,
} from "~/services/partner/types/partner.interface";
import type {
  AdminSearchOrderDTO,
  IAdminResolveOrderDispute,
  OrderItem,
  OrderResponse,
  OrderStatus,
} from "~/services/partner/types/partner.interface";
import type { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { requireAuth } from "~/lib/session.server";

type AdminOrdersLoaderData = {
  orders: IPaginatedResponse<OrderResponse>;
  query: AdminSearchOrderDTO;
  error?: string | null;
};

type AdminOrderMutationResponse =
  | {
      ok: true;
      message: string;
      order: OrderResponse;
    }
  | {
      ok: false;
      error: string;
    };

type OrderRow = {
  order: OrderResponse;
  item: OrderItem;
};

const adminOrderStatusOptions: Array<{ label: string; value: string }> = [
  { label: "All statuses", value: "" },
  { label: "Pending pre-payment", value: "PendingPrePayment" },
  { label: "Pending", value: "Pending" },
  { label: "Processing", value: "Processing" },
  { label: "Paid pending fulfillment", value: "PaidPendingFulfillment" },
  { label: "Partially fulfilled", value: "PartiallyFulfilled" },
  { label: "Fully fulfilled", value: "FullyFulfilled" },
  { label: "Completed", value: "Completed" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Disputed", value: "IsDisputed" },
];

const adminOrderItemStatusOptions: Array<{ label: string; value: string }> = [
  { label: "All item statuses", value: "" },
  { label: "Pending", value: "Pending" },
  { label: "Active", value: "Active" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Fulfilled", value: "Fulfilled" },
  { label: "Returned", value: "Returned" },
  { label: "Fulfillment confirmed by customer", value: "FulfillmentConfirmedByCustomer" },
  { label: "Disputed", value: "Disputed" },
  { label: "Refund triggered", value: "RefundTriggered" },
  { label: "Returned and refunded", value: "ReturnedAndRefunded" },
  { label: "Fulfillment confirmed by admin", value: "FulfillmentConfirmedByAdmin" },
];

const adminResolveStatusOptions: Array<{ label: string; value: OrderProductStatus }> = [
  { label: "Returned and refunded", value: OrderProductStatus.ReturnedAndRefunded },
  { label: "Fulfillment confirmed by admin", value: OrderProductStatus.FulfillmentConfirmedByAdmin },
];

const refundTypeOptions: Array<{ label: string; value: OrderRefundType }> = [
  { label: "Wallet", value: OrderRefundType.wallet },
  { label: "Customer bank", value: OrderRefundType.customer_bank },
];

function buildEmptyOrders(pageSize = 20): IPaginatedResponse<OrderResponse> {
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

function formatMoney(currency: string, value: number) {
  return `${currency} ${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(value)}`;
}

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("en-NG", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return value;
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

function getErrorMessage(error: unknown, fallback: string) {
  if (typeof error === "string") return error;
  if (error && typeof error === "object" && "detail" in error && typeof error.detail === "string") {
    return error.detail;
  }
  return fallback;
}

function buildAdminOrdersQuery(searchParams: URLSearchParams): AdminSearchOrderDTO {
  const query: AdminSearchOrderDTO = {};

  for (const [key, value] of searchParams.entries()) {
    if (!value) continue;

    if (key === "page_size") {
      const parsed = Number(value);
      if (!Number.isNaN(parsed)) query.page_size = parsed;
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

    if (key === "order_status") {
      query.order_status = value as OrderStatus;
      continue;
    }

    if (key === "order_product_status") {
      query.order_product_status = value as OrderProductStatus;
      continue;
    }

    if (key === "order_code") {
      query.order_code = value.trim();
      continue;
    }

    if (key === "order_id") {
      query.order_id = value.trim();
      continue;
    }

    if (key === "order_item_id") {
      query.order_item_id = value.trim();
    }
  }

  return query;
}

function OrdersSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="h-4 w-32 rounded-full bg-slate-200" />
          <div className="mt-4 h-6 w-2/3 rounded-full bg-slate-200" />
          <div className="mt-3 h-4 w-full rounded-full bg-slate-200" />
          <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-200" />
          <div className="mt-5 h-28 rounded-2xl bg-slate-100" />
        </div>
      ))}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value?: ReactNode }) {
  return (
    <div className="rounded-2xl bg-slate-50 px-4 py-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{value ?? "N/A"}</div>
    </div>
  );
}

function OrderDetailsModal({
  row,
  open,
  onOpenChange,
}: {
  row: OrderRow | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!row) return null;
  const { order, item } = row;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
        <DialogHeader className="border-b border-slate-100 p-6 text-left">
          <DialogTitle className="text-2xl font-black text-slate-950">Order details</DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-6 text-slate-600">
            Review the order and item details before taking any admin action.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 p-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Order summary</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <DetailRow label="Order status" value={formatLabel(order.status)} />
                <DetailRow label="Order code" value={order.order_code} />
                <DetailRow label="Order id" value={order._id} />
                <DetailRow label="Currency" value={order.currency} />
                <DetailRow label="Customer name" value={order.delivery_name} />
                <DetailRow label="Delivery email" value={order.delivery_email} />
                <DetailRow label="Business" value={order.business_name} />
                <DetailRow label="Business email" value={order.business_email} />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Item summary</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <DetailRow label="Item status" value={formatLabel(item.status)} />
                <DetailRow label="Order item id" value={item.order_item_id} />
                <DetailRow label="Amount" value={formatMoney(item.currency, item.min_amount_total)} />
                <DetailRow label="Quantity" value={item.quantity} />
                <DetailRow label="Customer remark" value={item.customer_remark ?? "N/A"} />
                <DetailRow label="Partner remark" value={item.partner_remark ?? "N/A"} />
                <DetailRow label="Admin remark" value={item.admin_remark ?? "N/A"} />
                <DetailRow label="Fulfilled at" value={item.fulfilled_at ? formatDate(item.fulfilled_at) : "N/A"} />
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Delivery details</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <DetailRow label="Delivery name" value={order.delivery_name} />
                <DetailRow label="Delivery phone" value={order.delivery_phone_number} />
                <DetailRow label="Delivery street" value={order.delivery_street} />
                <DetailRow label="Delivery city" value={order.delivery_city} />
                <DetailRow label="Delivery state" value={order.delivery_state} />
                <DetailRow label="Delivery country" value={order.delivery_country} />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Payment details</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <DetailRow label="Payment option" value={formatLabel(order.payment_details?.payment_option)} />
                <DetailRow label="Payment status" value={formatLabel(order.payment_details?.status)} />
                <DetailRow label="Reference" value={order.payment_details?.reference} />
                <DetailRow label="Payment amount" value={formatMoney(order.currency, order.payment_details?.amount ?? 0)} />
                <div className="sm:col-span-2">
                  <DetailRow label="Order created" value={formatDate(order.created_at)} />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Status history</h3>
            <div className="mt-4 space-y-3">
              {item.status_history?.length ? (
                item.status_history.map((entry, index) => (
                  <div key={`${entry.status}-${index}`} className="rounded-2xl bg-slate-50 px-4 py-3">
                    <div className="text-sm font-semibold text-slate-900">{formatLabel(entry.status)}</div>
                    <div className="mt-1 text-xs text-slate-500">{formatDate(String(entry.updated_at))}</div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-sm text-slate-500">
                  No status history available.
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ResolveDisputeModal({
  row,
  open,
  onOpenChange,
}: {
  row: OrderRow | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const fetcher = useFetcher<AdminOrderMutationResponse>();
  const revalidator = useRevalidator();
  const handledResponseRef = useRef(false);
  const [updatedStatus, setUpdatedStatus] = useState<OrderProductStatus>(OrderProductStatus.FulfillmentConfirmedByAdmin);
  const [confirmationCode, setConfirmationCode] = useState("");
  const isSubmitting = fetcher.state !== "idle";
  const errorMessage = fetcher.data && !fetcher.data.ok ? fetcher.data.error : null;

  useEffect(() => {
    if (fetcher.state === "submitting") {
      handledResponseRef.current = false;
    }
  }, [fetcher.state]);

  useEffect(() => {
    if (!fetcher.data || handledResponseRef.current) return;
    handledResponseRef.current = true;

    if (fetcher.data.ok) {
      toast({
        title: "Success",
        description: fetcher.data.message,
      });
      onOpenChange(false);
      revalidator.revalidate();
      return;
    }

    toast({
      variant: "destructive",
      title: "Resolve dispute failed",
      description: fetcher.data.error,
    });
  }, [fetcher.data, onOpenChange, revalidator]);

  useEffect(() => {
    if (!open) {
      setUpdatedStatus(OrderProductStatus.FulfillmentConfirmedByAdmin);
      setConfirmationCode("");
    }
  }, [open, row?.order.order_code]);

  const requiresRefund = updatedStatus === OrderProductStatus.ReturnedAndRefunded;

  if (!row || row.item.status !== OrderProductStatus.Disputed) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const submittedCode = String(formData.get("order_code") ?? "").trim();
    const expectedCode = String(formData.get("expected_order_code") ?? "").trim();

    if (!submittedCode || submittedCode !== expectedCode) {
      event.preventDefault();
      toast({
        variant: "destructive",
        title: "Order code mismatch",
        description: "Type the exact order code shown in the dialog before submitting.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
        <DialogHeader className="border-b border-slate-100 p-6 text-left">
          <DialogTitle className="text-2xl font-black text-slate-950">Resolve dispute</DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-6 text-slate-600">
            Verify the order code, choose the final item status, and provide the admin note before submitting.
          </DialogDescription>
        </DialogHeader>

        <fetcher.Form method="post" className="space-y-5 p-6" onSubmit={handleSubmit}>
          <input type="hidden" name="intent" value="resolve_dispute" />
          <input type="hidden" name="order_id" value={row.order._id} />
          <input type="hidden" name="order_item_id" value={row.item.order_item_id} />
          <input type="hidden" name="expected_order_code" value={row.order.order_code} />

          <div className="grid gap-4 rounded-[1.5rem] border border-rose-100 bg-rose-50 p-4 sm:grid-cols-2">
            <DetailRow label="Order code" value={row.order.order_code} />
            <DetailRow label="Order Amount" value={`${row.order.currency} ${row.item.min_amount_total}`} />
            <DetailRow label="Current item status" value={formatLabel(row.item.status)} />
            <DetailRow label="Order Business Name" value={formatLabel(row.order.business_name)} />
            <DetailRow label="Customer Details" value={`${row.order.delivery_name } | ${row.order.delivery_email} | ${row.order.delivery_phone_number}`} />
            <DetailRow label="Partner Details" value={`Business Mail: ${row.order.business_contact_person_email } | Contact Mail:  ${row.order.business_contact_person_email } | Phone: Business ${row.order.business_contact_person_phone} | Contact Person ${row.order.business_contact_person_phone}`} />
            <DetailRow label="Customer Message" value={`${row.item.customer_remark}`} />
            <DetailRow label="Partner Message" value={`${row.item.partner_remark ?? ""}`} />
            <DetailRow label="Order Fulfilled at" value={`${row.item.fulfilled_at}`} />
          </div>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Confirm order code</span>
            <input
              name="order_code"
              required
              autoComplete="off"
              value={confirmationCode}
              onChange={event => setConfirmationCode(event.target.value)}
              placeholder="Type the exact order code"
              className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Updated order item status
            </span>
            <select
              name="updated_order_item_status"
              required
              value={updatedStatus}
              onChange={event => setUpdatedStatus(event.target.value as OrderProductStatus)}
              className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition focus:border-slate-950"
            >
              {adminResolveStatusOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          {requiresRefund ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Refund amount</span>
                <input
                  name="refund_amount"
                  type="number"
                  min="0"
                  step="0.01"
                  required
                  placeholder="Enter refund amount"
                  className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Refund type</span>
                <select
                  name="refund_type"
                  required
                  className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition focus:border-slate-950"
                >
                  <option value="">Select refund type</option>
                  {refundTypeOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Admin remark</span>
            <textarea
              name="remark"
              required
              rows={4}
              placeholder="Explain the resolution decision"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950"
            />
          </label>

          {errorMessage ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          ) : null}

          <DialogFooter className="gap-3 border-t border-slate-100 pt-5 sm:justify-end">
            <DialogClose asChild>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
              >
                Back
              </button>
            </DialogClose>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Resolve dispute"}
            </button>
          </DialogFooter>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  );
}

function OrderItemCard({
  row,
  onShowDetails,
  onResolveDispute,
}: {
  row: OrderRow;
  onShowDetails: (row: OrderRow) => void;
  onResolveDispute: (row: OrderRow) => void;
}) {
  const { order, item } = row;
  const hasRange = item.min_amount_total !== item.max_amount_total;
  const isDisputed = item.status === OrderProductStatus.Disputed;

  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent">
              {order.order_code}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {formatLabel(order.status)}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              {formatLabel(item.status)}
            </span>
            {isDisputed ? (
              <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                Disputed
              </span>
            ) : null}
          </div>

          <div>
            <h2 className="text-xl font-black text-slate-950">{order.business_name}</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              {order.business_email} · {order.delivery_name}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:text-right">
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Amount</div>
            <div className="mt-1 text-sm font-semibold text-slate-900">
              {hasRange
                ? `${formatMoney(item.currency, item.min_amount_total)} - ${formatMoney(item.currency, item.max_amount_total)}`
                : formatMoney(item.currency, item.min_amount_total)}
            </div>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Order item id</div>
            <div className="mt-1 break-all text-sm font-semibold text-slate-900">{item.order_item_id}</div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Important details</div>
          <div className="grid gap-3 sm:grid-cols-2">
            <DetailRow label="Customer name" value={order.delivery_name} />
            <DetailRow label="Customer phone" value={order.delivery_phone_number} />
            <DetailRow label="Business email" value={order.business_email} />
            <DetailRow label="Order currency" value={order.currency} />
            <DetailRow label="Customer remark" value={item.customer_remark ?? "N/A"} />
            <DetailRow label="Order id" value={order._id} />
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Actions</div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={() => onShowDetails(row)}
              className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Details
            </button>
            {isDisputed ? (
              <button
                type="button"
                onClick={() => onResolveDispute(row)}
                className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <ShieldX className="mr-2 h-4 w-4" />
                Resolve dispute
              </button>
            ) : (
              <div className="inline-flex h-11 items-center justify-center rounded-full bg-slate-50 px-5 text-sm font-semibold text-slate-500">
                <ShieldCheck className="mr-2 h-4 w-4" />
                No dispute action
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function OrderList({
  rows,
  onShowDetails,
  onResolveDispute,
}: {
  rows: OrderRow[];
  onShowDetails: (row: OrderRow) => void;
  onResolveDispute: (row: OrderRow) => void;
}) {
  return (
    <div className="space-y-4">
      {rows.map(row => (
        <OrderItemCard
          key={`${row.order._id}-${row.item.order_item_id}`}
          row={row}
          onShowDetails={onShowDetails}
          onResolveDispute={onResolveDispute}
        />
      ))}
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const validateAuth = await requireAuth(request);
   ;

  const url = new URL(request.url);
  const query = buildAdminOrdersQuery(url.searchParams);
  const ordersRes = await partnerServer.getAdminOrders(query, request);

  if (ordersRes.error) {
    return json<AdminOrdersLoaderData>({
      orders: buildEmptyOrders(query.page_size ?? 20),
      query,
      error: getErrorMessage(ordersRes.error, "Unable to load admin orders"),
    });
  }

  return json<AdminOrdersLoaderData>({
    orders: ordersRes.data ?? buildEmptyOrders(query.page_size ?? 20),
    query,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const validateAuth = await requireAuth(request);

  const formData = await request.formData();
  const intent = String(formData.get("intent") ?? "");

  if (intent !== "resolve_dispute") {
    return json<AdminOrderMutationResponse>({ ok: false, error: "Unsupported admin order action" }, { status: 400 });
  }

  const orderId = String(formData.get("order_id") ?? "").trim();
  const orderItemId = String(formData.get("order_item_id") ?? "").trim();
  const confirmedCode = String(formData.get("order_code") ?? "").trim();
  const expectedCode = String(formData.get("expected_order_code") ?? "").trim();
  const updatedStatus = String(formData.get("updated_order_item_status") ?? "").trim() as OrderProductStatus;
  const remark = String(formData.get("remark") ?? "").trim();
  const refundAmountValue = String(formData.get("refund_amount") ?? "").trim();
  const refundTypeValue = String(formData.get("refund_type") ?? "").trim();

  if (!orderId || !orderItemId) {
    return json<AdminOrderMutationResponse>({ ok: false, error: "Missing order details" }, { status: 400 });
  }

  if (!confirmedCode || confirmedCode !== expectedCode) {
    return json<AdminOrderMutationResponse>({ ok: false, error: "The confirmed order code does not match" }, { status: 400 });
  }

  if (!remark) {
    return json<AdminOrderMutationResponse>({ ok: false, error: "Admin remark is required" }, { status: 400 });
  }

  const allowedStatuses = new Set<OrderProductStatus>([
    OrderProductStatus.ReturnedAndRefunded,
    OrderProductStatus.FulfillmentConfirmedByAdmin,
  ]);

  if (!allowedStatuses.has(updatedStatus)) {
    return json<AdminOrderMutationResponse>(
      { ok: false, error: "You can only resolve disputes as returned and refunded or fulfillment confirmed by admin" },
      { status: 400 }
    );
  }

  const orderRes = await partnerServer.getOrderById(orderId, request);
  if (orderRes.error || !orderRes.data) {
    return json<AdminOrderMutationResponse>(
      { ok: false, error: getErrorMessage(orderRes.error, "Unable to verify this order") },
      { status: 404 }
    );
  }

  const order = orderRes.data;
  const item = order.orders.find(entry => entry.order_item_id === orderItemId);

  if (!item) {
    return json<AdminOrderMutationResponse>({ ok: false, error: "Order item not found" }, { status: 404 });
  }

  if (item.status !== OrderProductStatus.Disputed) {
    return json<AdminOrderMutationResponse>({ ok: false, error: "Only disputed items can be resolved here" }, { status: 400 });
  }

  if (updatedStatus === OrderProductStatus.ReturnedAndRefunded) {
    const refundAmount = Number(refundAmountValue);
    if (!refundAmountValue || Number.isNaN(refundAmount) || refundAmount <= 0) {
      return json<AdminOrderMutationResponse>({ ok: false, error: "Refund amount is required" }, { status: 400 });
    }

    if (!refundTypeValue) {
      return json<AdminOrderMutationResponse>({ ok: false, error: "Refund type is required" }, { status: 400 });
    }

    const payload: IAdminResolveOrderDispute = {
      order_id: order._id,
      order_code: order.order_code,
      order_item_id: item.order_item_id,
      updated_order_item_status: updatedStatus,
      refund_amount: refundAmount,
      refund_type: refundTypeValue as OrderRefundType,
      remark,
    };

    const response = await partnerServer.adminResolveDispute(payload, request);
    if (response.error || !response.data) {
      return json<AdminOrderMutationResponse>(
        { ok: false, error: getErrorMessage(response.error, "Unable to resolve dispute") },
        { status: 400 }
      );
    }

    return json<AdminOrderMutationResponse>({
      ok: true,
      message: "Dispute resolved successfully",
      order: response.data,
    });
  }

  const payload: IAdminResolveOrderDispute = {
    order_id: order._id,
    order_code: order.order_code,
    order_item_id: item.order_item_id,
    updated_order_item_status: updatedStatus,
    remark,
  };

  const response = await partnerServer.adminResolveDispute(payload, request);
  if (response.error || !response.data) {
    return json<AdminOrderMutationResponse>(
      { ok: false, error: getErrorMessage(response.error, "Unable to resolve dispute") },
      { status: 400 }
    );
  }

  return json<AdminOrderMutationResponse>({
    ok: true,
    message: "Dispute resolved successfully",
    order: response.data,
  });
}

export default function AdminPartnerOrdersPage() {
  const { orders, query, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === "loading" && navigation.location?.pathname === location.pathname;
  const rows = useMemo<OrderRow[]>(
    () =>
      orders.items.flatMap(order =>
        order.orders.map(item => ({
          order,
          item,
        }))
      ),
    [orders.items]
  );
  const [detailsRow, setDetailsRow] = useState<OrderRow | null>(null);
  const [resolveRow, setResolveRow] = useState<OrderRow | null>(null);

  return (
    <main className="w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Orders
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                Search and resolve orders.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Search all platform orders by order code, order id, item id, or status, then inspect disputed items and resolve them.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Orders</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{orders.total_items}</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Items</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{rows.length}</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Page</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{orders.current_page}</div>
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
        <Form method="get" className="grid gap-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <input type="hidden" name="page_size" value={orders.items_per_page} />

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Order code</span>
            <input
              name="order_code"
              defaultValue={query.order_code ?? ""}
              placeholder="Search order code"
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Order id</span>
            <input
              name="order_id"
              defaultValue={query.order_id ?? ""}
              placeholder="Search order id"
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Item id</span>
            <input
              name="order_item_id"
              defaultValue={query.order_item_id ?? ""}
              placeholder="Search order item id"
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Order status</span>
            <select
              name="order_status"
              defaultValue={query.order_status ?? ""}
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white"
            >
              {adminOrderStatusOptions.map(option => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Item status</span>
            <select
              name="order_product_status"
              defaultValue={query.order_product_status ?? ""}
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white"
            >
              {adminOrderItemStatusOptions.map(option => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className="flex gap-3">
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </button>
            <Link
              to="/admin/partners/orders"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Reset
            </Link>
          </div>
        </Form>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-slate-950">Order items</h2>
            <p className="text-sm text-slate-500">
              {rows.length > 0 ? `${rows.length} item${rows.length === 1 ? "" : "s"} shown` : "No orders found for the selected filters"}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <PackageSearch className="h-4 w-4" />
            Page {orders.current_page}
          </div>
        </div>

        {isLoading ? (
          <OrdersSkeleton />
        ) : rows.length > 0 ? (
          <OrderList rows={rows} onShowDetails={setDetailsRow} onResolveDispute={setResolveRow} />
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <ShoppingBag className="mx-auto h-10 w-10 text-slate-300" />
            <h3 className="mt-4 text-xl font-black text-slate-950">No orders found</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Try a different order code, item id, or status combination.
            </p>
            <Link
              to="/admin/partners/orders"
              className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Clear filters
            </Link>
          </div>
        )}
      </section>

      <section className="mt-8">
        <Pagination lastKey={orders.last_key_id} firstKey={orders.first_key_id} pageSize={orders.items_per_page} />
      </section>

      <OrderDetailsModal row={detailsRow} open={!!detailsRow} onOpenChange={open => !open && setDetailsRow(null)} />
      <ResolveDisputeModal row={resolveRow} open={!!resolveRow} onOpenChange={open => !open && setResolveRow(null)} />
    </main>
  );
}
