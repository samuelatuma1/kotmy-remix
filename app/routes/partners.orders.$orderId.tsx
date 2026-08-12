import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import {
  Link,
  useFetcher,
  useLoaderData,
  useNavigation,
  useRevalidator,
} from "@remix-run/react";
import { ArrowLeft, CreditCard, PackageSearch, Phone, ShieldCheck, SquarePen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/reusables/Dialog";
import { setToast } from "~/lib/session.server";
import { cn } from "~/lib/utils";
import { partnerServer } from "~/services/partner/partner.server";
import { IOrderData, OrderItem, OrderProductStatus, OrderResponse } from "~/services/partner/types/partner.interface";

type OrderDetailLoaderData = {
  order: OrderResponse | null;
  error?: string | null;
};

type OrderMutationResponse =
  | {
      ok: true;
      message: string;
      order: OrderResponse;
    }
  | {
      ok: false;
      error: string;
    };

const actionableStatuses: OrderProductStatus[] = [OrderProductStatus.Pending, OrderProductStatus.Active];

function formatMoney(currency: string, value: number) {
  return `${currency} ${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(value)}`;
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatStatusLabel(value: string) {
  return value.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/\s+/g, " ").trim();
}

function getErrorMessage(error: unknown, fallback: string) {
  if (typeof error === "string") return error;
  if (error && typeof error === "object" && "detail" in error && typeof error.detail === "string") {
    return error.detail;
  }
  return fallback;
}

function OrderPageSkeleton() {
  return (
    <main className="w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="space-y-4">
          <div className="h-4 w-28 animate-pulse rounded-full bg-slate-200" />
          <div className="h-10 w-2/3 animate-pulse rounded-full bg-slate-200" />
          <div className="h-5 w-1/2 animate-pulse rounded-full bg-slate-200" />
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="animate-pulse rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="h-4 w-36 rounded-full bg-slate-200" />
              <div className="mt-3 h-4 w-full rounded-full bg-slate-200" />
              <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
        <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="animate-pulse rounded-2xl bg-slate-50 p-4">
            <div className="h-4 w-24 rounded-full bg-slate-200" />
            <div className="mt-3 h-5 w-3/4 rounded-full bg-slate-200" />
            <div className="mt-3 h-5 w-2/3 rounded-full bg-slate-200" />
          </div>
          <div className="animate-pulse rounded-2xl bg-slate-50 p-4">
            <div className="h-4 w-24 rounded-full bg-slate-200" />
            <div className="mt-3 h-5 w-3/4 rounded-full bg-slate-200" />
            <div className="mt-3 h-5 w-2/3 rounded-full bg-slate-200" />
          </div>
        </div>
      </section>
    </main>
  );
}

function OrderMutationDialog({
  order,
  item,
  intent,
  title,
  description,
  triggerLabel,
  triggerClassName,
  actionLabel,
}: {
  order: OrderResponse;
  item: OrderItem;
  intent: "fulfill" | "cancel";
  title: string;
  description: string;
  triggerLabel: string;
  triggerClassName: string;
  actionLabel: string;
}) {
  const fetcher = useFetcher<OrderMutationResponse>();
  const revalidator = useRevalidator();
  const [open, setOpen] = useState(false);
  const handledSuccessRef = useRef(false);
  const isSubmitting = fetcher.state !== "idle";

  useEffect(() => {
    if (fetcher.state === "submitting") {
      handledSuccessRef.current = false;
    }
  }, [fetcher.state]);

  useEffect(() => {
    const response = fetcher.data;
    if (!response || !response.ok || handledSuccessRef.current) return;

    handledSuccessRef.current = true;
    setOpen(false);
    revalidator.revalidate();
  }, [fetcher.data, revalidator]);

  const errorMessage = fetcher.data && !fetcher.data.ok ? fetcher.data.error : null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className={triggerClassName}>
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-xl border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
        <DialogHeader className="border-b border-slate-100 p-6 text-left">
          <DialogTitle className="text-2xl font-black text-slate-950">{title}</DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </DialogDescription>
        </DialogHeader>

        <fetcher.Form method="post" className="space-y-5 p-6">
          <input type="hidden" name="intent" value={intent} />
          <input type="hidden" name="order_id" value={order._id} />
          <input type="hidden" name="order_item_id" value={item.order_item_id} />

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Order code</div>
            <div className="mt-1 text-sm font-semibold text-slate-900">{order.order_code}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Type the exact order code to confirm this action.
            </p>
          </div>

          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Confirm order code</span>
            <input
              name="order_code"
              required
              autoComplete="off"
              placeholder="Enter the order code"
              className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950"
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
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70",
                intent === "cancel" ? "bg-red-600 hover:bg-red-500" : "bg-slate-950 hover:bg-slate-800"
              )}
            >
              {isSubmitting ? "Working..." : actionLabel}
            </button>
          </DialogFooter>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  );
}

function OrderItemCard({ order, item }: { order: OrderResponse; item: OrderItem }) {
  const hasRange = item.min_amount_total !== item.max_amount_total;
  const canMutate = actionableStatuses.includes(item.status);

  return (
    <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              {formatStatusLabel(item.status)}
            </span>
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Qty {item.quantity}
            </span>
          </div>

          <div>
            <h3 className="text-lg font-black text-slate-950">{item.product_name}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {hasRange
                ? `${formatMoney(item.currency, item.min_amount_total)} - ${formatMoney(item.currency, item.max_amount_total)}`
                : formatMoney(item.currency, item.min_amount_total)}
            </p>
          </div>

          <div className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <div>
              Location: <span className="font-semibold text-slate-900">{item.location_name || "Not assigned"}</span>
            </div>
            <div>
              Fulfilled by: <span className="font-semibold text-slate-900">{item.fulfilled_by || "Not fulfilled"}</span>
            </div>
            <div>
              Contact:{" "}
              <span className="font-semibold text-slate-900">
                {item.location_contact_phone || order.business_phone_number}
              </span>
            </div>
            <div>
              Fulfilled at:{" "}
              <span className="font-semibold text-slate-900">
                {item.fulfilled_at ? formatDateTime(item.fulfilled_at) : "Pending"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {canMutate ? (
            <>
              <OrderMutationDialog
                order={order}
                item={item}
                intent="fulfill"
                title="Fulfill order item"
                description="Confirm the order code before marking this item as fulfilled."
                triggerLabel="Fulfill order"
                actionLabel="Fulfill order"
                triggerClassName="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              />

              <OrderMutationDialog
                order={order}
                item={item}
                intent="cancel"
                title="Cancel order item"
                description="Confirm the order code before cancelling this item."
                triggerLabel="Cancel order"
                actionLabel="Cancel order"
                triggerClassName="inline-flex h-11 items-center justify-center rounded-full border border-red-200 bg-white px-5 text-sm font-bold text-red-600 transition hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-50"
              />
            </>
          ) : (
            <div className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-500">
              {item.status}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
   ;

  const orderId = params.orderId;
  if (!orderId) {
    return json<OrderDetailLoaderData>({ order: null, error: "Missing order id" }, { status: 400 });
  }

  const { data, error } = await partnerServer.getOrderById(orderId, request);

  if (error) {
    return json<OrderDetailLoaderData>(
      {
        order: null,
        error: getErrorMessage(error, "Unable to load order details"),
      },
      { status: 404 }
    );
  }

  return json<OrderDetailLoaderData>({ order: data ?? null });
}

export async function action({ params, request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
   ;

  const orderId = params.orderId;
  if (!orderId) {
    return json<OrderMutationResponse>({ ok: false, error: "Missing order id" }, { status: 400 });
  }

  const formData = await request.formData();
  const intent = String(formData.get("intent") ?? "");
  const orderCode = String(formData.get("order_code") ?? "").trim();
  const orderItemId = String(formData.get("order_item_id") ?? "").trim();

  if (!intent || !["fulfill", "cancel"].includes(intent)) {
    return json<OrderMutationResponse>({ ok: false, error: "Unsupported order action" }, { status: 400 });
  }

  if (!orderCode) {
    return json<OrderMutationResponse>({ ok: false, error: "Order code is required" }, { status: 400 });
  }

  if (!orderItemId) {
    return json<OrderMutationResponse>({ ok: false, error: "Missing order item id" }, { status: 400 });
  }

  const orderRes = await partnerServer.getOrderById(orderId, request);
  if (orderRes.error || !orderRes.data) {
    return json<OrderMutationResponse>(
      {
        ok: false,
        error: getErrorMessage(orderRes.error, "Unable to verify this order"),
      },
      { status: 404 }
    );
  }

  const order = orderRes.data;
  if (order.order_code !== orderCode) {
    return json<OrderMutationResponse>({ ok: false, error: "The order code does not match this order" }, { status: 400 });
  }

  const item = order.orders.find(entry => entry.order_item_id === orderItemId);
  if (!item) {
    return json<OrderMutationResponse>({ ok: false, error: "Order item not found" }, { status: 404 });
  }

  if (!actionableStatuses.includes(item.status)) {
    return json<OrderMutationResponse>(
      { ok: false, error: `This order item cannot be updated from ${formatStatusLabel(item.status)} status` },
      { status: 400 }
    );
  }

  const payload: IOrderData = {
    order_id: order._id,
    order_code: order.order_code,
    order_items_ids: [item.order_item_id],
  };

  const mutationRes =
    intent === "fulfill"
      ? await partnerServer.fulfillOrder(payload, request)
      : await partnerServer.cancelOrder(payload, request);

  if (mutationRes.error) {
    return json<OrderMutationResponse>(
      {
        ok: false,
        error: getErrorMessage(mutationRes.error, `Unable to ${intent} this order item`),
      },
      { status: 400 }
    );
  }

  const { headers } = await setToast({
    request,
    toast: `success::Order item has been ${intent === "fulfill" ? "fulfilled" : "cancelled"}::${Date.now()}`,
  });

  return json<OrderMutationResponse>(
    {
      ok: true,
      message: `Order item has been ${intent === "fulfill" ? "fulfilled" : "cancelled"}`,
      order: mutationRes.data ?? order,
    },
    { headers }
  );
}

export default function PartnerOrderDetailPage() {
  const { order, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading && !order) {
    return <OrderPageSkeleton />;
  }

  if (error || !order) {
    return (
      <main className="w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
              <PackageSearch className="h-5 w-5" />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Order details</p>
                <h1 className="mt-2 text-3xl font-black text-slate-950">We could not load this order.</h1>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-600">
                {error ?? "The requested order could not be found."}
              </p>
              <Link
                to="/partners/orders"
                className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Back to orders
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const paymentLink = order.payment_details?.payment_link;

  return (
    <main className="w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <Link
              to="/partners/orders"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to orders
            </Link>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Order details
              </div>
              <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                {order.business_name}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Order code <span className="font-semibold text-slate-900">{order.order_code}</span>, placed on{" "}
                <span className="font-semibold text-slate-900">{formatDateTime(order.created_at)}</span>.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:w-[420px] lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Status</div>
              <div className="mt-2 text-2xl font-black text-slate-950">{formatStatusLabel(order.status)}</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Total</div>
              <div className="mt-2 text-2xl font-black text-slate-950">
                {order.min_total_amount === order.max_total_amount
                  ? formatMoney(order.currency, order.min_total_amount)
                  : `${formatMoney(order.currency, order.min_total_amount)} - ${formatMoney(order.currency, order.max_total_amount)}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black text-slate-950">Order items</h2>
              <p className="text-sm text-slate-500">Only pending and active items can be updated.</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500">
              <SquarePen className="h-4 w-4" />
              {order.orders.length} items
            </div>
          </div>

          <div className="space-y-4">
            {order.orders.length > 0 ? (
              order.orders.map(item => <OrderItemCard key={item.order_item_id} order={order} item={item} />)
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-5 py-8 text-sm text-slate-500">
                No order items found.
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <CreditCard className="h-4 w-4" />
              Payment
            </div>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <div className="flex items-center justify-between gap-4">
                <span>Payment option</span>
                <span className="font-semibold text-slate-950">{order.payment_details?.payment_option}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Payment status</span>
                <span className="font-semibold text-slate-950">{order.payment_details?.status}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Reference</span>
                <span className="font-semibold text-slate-950">{order.payment_details?.reference}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Amount</span>
                <span className="font-semibold text-slate-950">{formatMoney(order.currency, order.payment_details?.amount ?? order.min_total_amount)}</span>
              </div>
            </div>

            {paymentLink ? (
              <a
                href={paymentLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
              >
                Open payment link
              </a>
            ) : null}
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <Phone className="h-4 w-4" />
              Delivery
            </div>
            <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
              <div className="font-semibold text-slate-950">{order.delivery_name || "Delivery details"}</div>
              <div>{order.delivery_street}</div>
              <div>
                {order.delivery_city}, {order.delivery_state}, {order.delivery_country}
              </div>
              <div className="pt-2">
                Phone: <span className="font-semibold text-slate-950">{order.delivery_phone_number}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <ShieldCheck className="h-4 w-4" />
              Business contact
            </div>
            <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
              <div className="font-semibold text-slate-950">{order.business_contact_person_name}</div>
              <div>{order.business_contact_person_email}</div>
              <div>{order.business_contact_person_phone}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
