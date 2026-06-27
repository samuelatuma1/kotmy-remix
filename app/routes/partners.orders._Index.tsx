import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, useLoaderData, useLocation, useNavigation } from "@remix-run/react";
import { PackageSearch, Search, ShoppingBag } from "lucide-react";
import Pagination from "~/components/reusables/Pagination";
import { partnerServer } from "~/services/partner/partner.server";
import type {
  BusinessSearchOrderDTO,
  OrderProductStatus,
  OrderResponse,
  OrderStatus,
} from "~/services/partner/types/partner.interface";
import type { IPaginatedResponse } from "~/services/common/types/paginated_data";

type PartnerOrdersLoaderData = {
  orders: IPaginatedResponse<OrderResponse>;
  query: BusinessSearchOrderDTO;
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
];

const orderProductStatusOptions: Array<{ label: string; value: string }> = [
  { label: "All item statuses", value: "" },
  { label: "Pending", value: "Pending" },
  { label: "Active", value: "Active" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Fulfilled", value: "Fulfilled" },
  { label: "Returned", value: "Returned" },
  { label: "Fulfillment confirmed", value: "FulfillmentConfirmedByCustomer" },
];

function buildPartnerOrdersQuery(searchParams: URLSearchParams): BusinessSearchOrderDTO {
  const query: BusinessSearchOrderDTO = {};

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
      continue;
    }

    if (key === "order_code") {
      query.order_code = value.trim();
      continue;
    }

    if (key === "delivery_phone_number") {
      query.delivery_phone_number = value.trim();
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

function formatStatusLabel(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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
          <div className="mt-5 h-24 rounded-2xl bg-slate-100" />
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
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <div className="text-sm font-bold text-slate-950">{item.product_name}</div>
          <div className="text-xs text-slate-500">
            Qty {item.quantity} · {hasRange ? `${formatMoney(item.currency, item.min_amount_total)} - ${formatMoney(item.currency, item.max_amount_total)}` : formatMoney(item.currency, item.min_amount_total)}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-600">
              {formatStatusLabel(item.status)}
            </span>
            {item.location_name ? (
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-600">
                {item.location_name}
              </span>
            ) : null}
          </div>
        </div>

        {/* <Link
          to={`/partners/orders/${item}`}
          className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
        >
          Open item
        </Link> */}
      </div>
    </div>
  );
}

function OrderCard({ order }: { order: OrderResponse }) {
  const paymentLink = order.payment_details?.payment_link;

  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent">
              {order.order_code}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {formatStatusLabel(order.status)}
            </span>
            {order.is_prepaid ? (
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Prepaid
              </span>
            ) : null}

            <Link
          to={`/partners/orders/${order._id}`}
          className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
        >
          Open Order
        </Link>
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
            {order.orders.length > 0 ? (
              order.orders.map(item => <OrderItemRow key={item.order_item_id} item={item} />)
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500">
                No order items found.
              </div>
            )}
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
              Reference: <span className="font-semibold text-slate-900">{order.payment_details?.reference}</span>
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
  const cookieHeader = request.headers.get("Cookie") ?? "";
  const query = buildPartnerOrdersQuery(url.searchParams);
  const ordersRes = await partnerServer.getPartnerOrders(query, cookieHeader);

  if (ordersRes.error) {
    return json<PartnerOrdersLoaderData>({
      orders: emptyPaginatedOrders(query.page_size ?? 10),
      query,
      error: typeof ordersRes.error.detail === "string" ? ordersRes.error.detail : "Unable to load partner orders",
    });
  }

  return json<PartnerOrdersLoaderData>({
    orders: ordersRes.data ?? emptyPaginatedOrders(query.page_size ?? 10),
    query,
  });
}

export default function PartnerOrdersPage() {
  const { orders, query, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === "loading" && navigation.location?.pathname === location.pathname;
  const hasOrders = orders.items.length > 0;

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
                Search and manage partner orders.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Search by order code, delivery phone number, order status, or item status to find the exact order you need.
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
        <Form method="get" className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
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
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Delivery phone</span>
            <input
              name="delivery_phone_number"
              defaultValue={query.delivery_phone_number ?? ""}
              placeholder="Search delivery phone"
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
              <Search className="mr-2 h-4 w-4" />
              Search
            </button>
            <Link
              to="/partners/orders"
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
            <h3 className="mt-4 text-xl font-black text-slate-950">No orders found</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Try a different code, delivery phone number, or status combination.
            </p>
            <Link
              to="/partners/orders"
              className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Clear filters
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
