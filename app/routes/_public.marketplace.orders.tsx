import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, useLoaderData, useNavigation } from "@remix-run/react";
import { ArrowLeft, PackageSearch, ShoppingBag } from "lucide-react";
import Pagination from "~/components/reusables/Pagination";
import { partnerServer } from "~/services/partner/partner.server";
import type {
  CustomerOrdersQuery,
  OrderProductStatus,
  OrderResponse,
  OrderStatus,
} from "~/services/partner/types/partner.interface";
import type { IPaginatedResponse } from "~/services/common/types/paginated_data";

type OrdersLoaderData = {
  orders: IPaginatedResponse<OrderResponse>;
  query: CustomerOrdersQuery;
  error?: string | null;
};

const orderStatusOptions: Array<{ label: string; value: string }> = [
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

const orderProductStatusOptions: Array<{ label: string; value: string }> = [
  { label: "All item statuses", value: "" },
  { label: "Pending", value: "Pending" },
  { label: "Active", value: "Active" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Fulfilled", value: "Fulfilled" },
  { label: "Returned", value: "Returned" },
  { label: "Fulfillment confirmed", value: "FulfillmentConfirmedByCustomer" },
  { label: "Disputed", value: "Disputed" },
  { label: "Refund triggered", value: "RefundTriggered" },
  { label: "Returned and refunded", value: "ReturnedAndRefunded" },
  { label: "Fulfillment confirmed by admin", value: "FulfillmentConfirmedByAdmin" },
];

function buildCustomerOrdersQuery(searchParams: URLSearchParams): CustomerOrdersQuery {
  const query: CustomerOrdersQuery = {};

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

    if (key === "order_status") {
      query.order_status = value as OrderStatus;
      continue;
    }

    if (key === "order_product_status") {
      query.order_product_status = value as OrderProductStatus;
    }
  }

  return query;
}

function emptyPaginatedOrders(pageSize = 10): IPaginatedResponse<OrderResponse> {
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
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function OrdersSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="h-4 w-28 rounded-full bg-slate-200" />
          <div className="mt-4 h-6 w-2/3 rounded-full bg-slate-200" />
          <div className="mt-3 h-4 w-full rounded-full bg-slate-200" />
          <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-200" />
        </div>
      ))}
    </div>
  );
}

function OrderItemRow({
  item,
}: {
  item: OrderResponse["orders"][number];
}) {
  const hasRange = item.min_amount_total !== item.max_amount_total;

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-sm font-bold text-slate-950">{item.product_name}</div>
          <div className="mt-1 text-xs text-slate-500">
            Qty {item.quantity} · {hasRange ? `${formatMoney(item.currency, item.min_amount_total)} - ${formatMoney(item.currency, item.max_amount_total)}` : formatMoney(item.currency, item.min_amount_total)}
          </div>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
          {item.status.replace(/_/g, " ")}
        </span>
      </div>
    </div>
  );
}

function OrderCard({ order }: { order: OrderResponse }) {
  const paymentLink = order.payment_details?.payment_link;
  const isPrepaid = order.payment_details?.payment_option === "prepay";

  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.1)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent">
              {order.order_code}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {order.status.replace(/_/g, " ")}
            </span>
            {isPrepaid ? (
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Prepaid
              </span>
            ) : null}
          </div>

          <div>
            <h2 className="text-xl font-black text-slate-950">{order.business_name}</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              {order.business_contact_person_name} · {order.delivery_phone_number}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:text-right">
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Created</div>
            <div className="mt-1 text-sm font-semibold text-slate-900">{formatDate(order.created_at)}</div>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Total</div>
            <div className="mt-1 text-sm font-semibold text-slate-900">
              {order.min_total_amount === order.max_total_amount
                ? formatMoney(order.currency, order.min_total_amount)
                : `${formatMoney(order.currency, order.min_total_amount)} - ${formatMoney(order.currency, order.max_total_amount)}`}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Order items</div>
          <div className="space-y-3">
            {order.orders.map(item => (
              <OrderItemRow key={item.order_item_id} item={item} />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Delivery & payment</div>
          <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            <div className="font-semibold text-slate-900">{order.delivery_name || "Delivery details"}</div>
            <div>{order.delivery_street}</div>
            <div>
              {order.delivery_city}, {order.delivery_state}, {order.delivery_country}
            </div>
            <div className="mt-3">
              Payment option: <span className="font-semibold text-slate-900">{order.payment_details?.payment_option}</span>
            </div>
            <div>
              Payment status: <span className="font-semibold text-slate-900">{order.payment_details?.status}</span>
            </div>
            <div>
              Reference: <br/>
              <span className="font-semibold text-slate-900 break-all">{order.payment_details?.reference}</span>
            </div>
            {paymentLink ? (
              <a
                href={paymentLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
              >
                Open payment link
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const cookieHeader = request.headers.get("Cookie") ?? undefined;
  const query = buildCustomerOrdersQuery(url.searchParams);
  const ordersRes = await partnerServer.getCustomerOrders(query, cookieHeader);

  if (ordersRes.error) {
    return json<OrdersLoaderData>({
      orders: emptyPaginatedOrders(query.page_size ?? 10),
      query,
      error: typeof ordersRes.error.detail === "string" ? ordersRes.error.detail : "Unable to load orders",
    });
  }

  return json<OrdersLoaderData>({
    orders: ordersRes.data ?? emptyPaginatedOrders(query.page_size ?? 10),
    query,
  });
}

export default function MarketplaceOrders() {
  const { orders, query, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const hasOrders = orders.items.length > 0;

  return (
    <main className="w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to marketplace
            </Link>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Orders
              </div>
              <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                Track and search your marketplace orders.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Use the filters below to narrow results by order status or item status.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Orders</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{orders.total_items}</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Page size</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{orders.items_per_page}</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Current page</div>
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
        <Form method="get" className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Order status</span>
            <select
              name="order_status"
              defaultValue={query.order_status ?? ""}
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white"
            >
              {orderStatusOptions.map(option => (
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
              {orderProductStatusOptions.map(option => (
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
              Search
            </button>
            <Link
              to="/marketplace/orders"
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
            <h2 className="text-2xl font-black text-slate-950">Orders</h2>
            <p className="text-sm text-slate-500">
              {orders.total_items > 0 ? `${orders.total_items} order${orders.total_items === 1 ? "" : "s"} found` : "No orders found for the selected filters"}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <PackageSearch className="h-4 w-4" />
            Page {orders.current_page}
          </div>
        </div>

        {isLoading ? (
          <OrdersSkeleton />
        ) : hasOrders ? (
          <div className="space-y-4">
            {orders.items.map(order => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <ShoppingBag className="mx-auto h-10 w-10 text-slate-300" />
            <h3 className="mt-4 text-xl font-black text-slate-950">No orders yet</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Once you place an order, it will appear here for tracking and payment follow-up.
            </p>
            <Link
              to="/marketplace"
              className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Browse products
            </Link>
          </div>
        )}
      </section>

      <section className="mt-8">
        <Pagination
          lastKey={orders.last_key_id}
          firstKey={orders.first_key_id}
          pageSize={orders.items_per_page}
        />
      </section>
    </main>
  );
}
