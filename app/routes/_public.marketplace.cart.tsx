import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useFetcher, useLoaderData, useNavigation } from "@remix-run/react";
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { noImage } from "~/assets/images";
import { partnerServer } from "~/services/partner/partner.server";
import type { Cart, ICartItemUpsertDTO, IUpsertCartItemsDTO } from "~/services/partner/types/partner.interface";

type CartRouteLoaderData = {
  cart?: Cart | null;
  cartError?: string | null;
};

type CartRouteActionData = {
  cart?: Cart | null;
  error?: string | null;
};

function formatMoney(currency: string, value: number) {
  return `${currency} ${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(value)}`;
}

function parseCartItemPayload(formData: FormData): ICartItemUpsertDTO {
  const productId = String(formData.get("product_id") ?? "").trim();
  const quantity = Number(formData.get("quantity") ?? 0);
  const productLocationIdRaw = String(formData.get("product_location_id") ?? "").trim();

  return {
    product_id: productId,
    quantity: Number.isFinite(quantity) ? quantity : 0,
    product_location_id: productLocationIdRaw ? productLocationIdRaw : null,
  };
}

function buildCartPayload(formData: FormData): IUpsertCartItemsDTO {
  return {
    cart_items: [parseCartItemPayload(formData)],
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? undefined;
  const cartRes = await partnerServer.getCart(cookieHeader);

  if (cartRes.error) {
    return json<CartRouteLoaderData>({
      cart: null,
      cartError: typeof cartRes.error.detail === "string" ? cartRes.error.detail : "Unable to load cart",
    });
  }

  return json<CartRouteLoaderData>({
    cart: cartRes.data ?? null,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const cookieHeader = request.headers.get("Cookie") ?? undefined;
  const payload = buildCartPayload(formData);
  const cartRes = await partnerServer.upsertCartItems(payload, cookieHeader);

  if (cartRes.error) {
    return json<CartRouteActionData>(
      {
        error: typeof cartRes.error.detail === "string" ? cartRes.error.detail : "Unable to update cart",
      },
      { status: 400 }
    );
  }

  return json<CartRouteActionData>({
    cart: cartRes.data,
  });
}

function CartLineItem({
  item,
}: {
  item: Cart["cart_items"][number];
}) {
  const fetcher = useFetcher<CartRouteActionData>();
  const product = item.product;
  const imageSrc = product.main_image_url || product.image_urls?.[0] || noImage;
  const locationLabel = product.product_locations?.find(location => location.str_id === item.product_location_id)?.name
    ?? product.product_locations?.find(location => location.is_primary)?.name
    ?? product.product_locations?.[0]?.name
    ?? "Default location";
  const isSubmitting = fetcher.state !== "idle";

  const submitQuantity = (quantity: number) => {
    const formData = new FormData();
    formData.set("product_id", item.product_id);
    formData.set("quantity", String(Math.max(0, quantity)));
    if (item.product_location_id) {
      formData.set("product_location_id", item.product_location_id);
    }
    fetcher.submit(formData, { method: "post", action: "/marketplace/cart" });
  };

  return (
    <article className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr_auto] sm:p-5">
      <div className="overflow-hidden rounded-2xl bg-slate-100">
        <img src={imageSrc} alt={product.name} className="aspect-square h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-slate-950">{product.name}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500 line-clamp-2">{product.description}</p>
          </div>
          <span className="rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent">
            {product.category || "Uncategorized"}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="font-bold text-slate-900">
            {product.price_min === 0 && product.price_max === 0
              ? "Free"
              : product.price_min === product.price_max
                ? formatMoney(product.currency, product.price_min)
                : `${formatMoney(product.currency, product.price_min)} - ${formatMoney(product.currency, product.price_max)}`}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500">{locationLabel}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {(product.tags ?? []).slice(0, 4).map(tag => (
            <span key={`${product._id}-${tag}`} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-stretch justify-between gap-3 sm:items-end">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
          <button
            type="button"
            onClick={() => submitQuantity(item.quantity - 1)}
            disabled={isSubmitting || item.quantity <= 0}
            className="grid h-9 w-9 place-items-center rounded-full border border-transparent text-slate-600 transition hover:border-slate-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={`Decrease quantity for ${product.name}`}
          >
            <Minus className="h-4 w-4" />
          </button>

          <span className="min-w-10 px-2 text-center text-sm font-black text-slate-950">{item.quantity}</span>

          <button
            type="button"
            onClick={() => submitQuantity(item.quantity + 1)}
            disabled={isSubmitting}
            className="grid h-9 w-9 place-items-center rounded-full border border-transparent text-slate-600 transition hover:border-slate-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={`Increase quantity for ${product.name}`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => submitQuantity(0)}
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-700 transition hover:-translate-y-0.5 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Trash2 className="h-4 w-4" />
          Remove
        </button>
      </div>
    </article>
  );
}

function CartSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="animate-pulse grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr_auto] sm:p-5">
          <div className="aspect-square rounded-2xl bg-slate-200" />
          <div className="space-y-3">
            <div className="h-5 w-2/3 rounded-full bg-slate-200" />
            <div className="h-4 w-full rounded-full bg-slate-200" />
            <div className="h-4 w-4/5 rounded-full bg-slate-200" />
          </div>
          <div className="space-y-3 sm:items-end">
            <div className="h-11 w-32 rounded-full bg-slate-200" />
            <div className="h-10 w-28 rounded-full bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MarketplaceCart() {
  const { cart, cartError } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const cartItems = cart?.cart_items ?? [];
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const distinctItems = cartItems.length;
  const minimumTotal = cart?.minimum_total_amount ?? 0;
  const maximumTotal = cart?.maximum_total_amount ?? 0;
  const currency = cart?.currency ?? "NGN";

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
                Cart
              </div>
              <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                Review items and adjust quantities before checkout.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                This cart stays guest-friendly and can be updated from the marketplace or directly here.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Items</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{itemCount}</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Products</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{distinctItems}</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Total</div>
              <div className="mt-2 text-2xl font-black text-slate-950">
                {minimumTotal || maximumTotal ? `${formatMoney(currency, minimumTotal)}${maximumTotal !== minimumTotal ? `   - ${formatMoney(currency, maximumTotal)}` : ""}` : `${currency} 0`}
              </div>
            </div>
          </div>
        </div>

        {cartError ? (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {cartError}
          </div>
        ) : null}
      </section>

      <section className="mt-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-slate-950">Your cart</h2>
            <p className="text-sm text-slate-500">
              {cartItems.length > 0 ? `${cartItems.length} line item${cartItems.length === 1 ? "" : "s"}` : "No items in cart yet"}
            </p>
          </div>
          <Link to="/marketplace" className="text-sm font-bold text-accent">
            Continue shopping
          </Link>
        </div>

        {isLoading ? (
          <CartSkeleton />
        ) : cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartLineItem key={`${item.product_id}-${item.product_location_id ?? "default"}`} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <ShoppingCart className="mx-auto h-10 w-10 text-slate-300" />
            <h3 className="mt-4 text-xl font-black text-slate-950">Your cart is empty</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Add products from the marketplace and they will appear here.
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

      <section className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Checkout</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Checkout is intentionally stubbed for now and will be wired up later.
            </p>
          </div>
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-400"
          >
            Checkout coming soon
          </button>
        </div>
      </section>
    </main>
  );
}
