import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, useFetcher, useLoaderData, useNavigation } from "@remix-run/react";
import { ShoppingCart } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { noImage } from "~/assets/images";
import Pagination from "~/components/reusables/Pagination";
import { partnerServer } from "~/services/partner/partner.server";
import type {
  Cart,
  ICartItemUpsertDTO,
  IQueryPartnerProduct,
  IUpsertCartItemsDTO,
  PartnerProduct,
} from "~/services/partner/types/partner.interface";
import type { IPaginatedResponse } from "~/services/common/types/paginated_data";

type MarketplaceLoaderData = {
  products?: IPaginatedResponse<PartnerProduct>;
  query?: IQueryPartnerProduct;
  cart?: Cart | null;
  cartError?: string | null;
  productError?: string | null;
};

type MarketplaceActionData = {
  cart?: Cart | null;
  error?: string | null;
};

function buildMarketplaceQuery(searchParams: URLSearchParams): IQueryPartnerProduct {
  const query: IQueryPartnerProduct = {};

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

    if (key === "wildcard") {
      query.wildcard = value;
      continue;
    }

    if (key === "location_wildcard") {
      query.location_wildcard = value;
      continue;
    }

    if (key === "business_id") {
      query.business_id = value;
      continue;
    }

    if (key === "category") {
      query.category = value;
      continue;
    }

    if (key === "status") {
      query.status = value as PartnerProduct["status"];
      continue;
    }

    if (key === "sku") {
      query.sku = value;
      continue;
    }

    if (key === "name") {
      query.name = value;
      continue;
    }

    if (key === "description") {
      query.description = value;
    }
  }

  return query;
}

function emptyPaginatedProducts(pageSize = 20): IPaginatedResponse<PartnerProduct> {
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
  const url = new URL(request.url);
  const cookieHeader = request.headers.get("Cookie") ?? undefined;
  const intent = url.searchParams.get("intent");

  if (intent === "cart") {
    const cartRes = await partnerServer.getCart(cookieHeader);

    if (cartRes.error) {
      return json<MarketplaceLoaderData>({
        cart: null,
        cartError: typeof cartRes.error.detail === "string" ? cartRes.error.detail : "Unable to load cart",
      });
    }

    return json<MarketplaceLoaderData>({
      cart: cartRes.data ?? null,
    });
  }

  const query = buildMarketplaceQuery(url.searchParams);
  const productsRes = await partnerServer.getMarketplaceProducts(query);

  if (productsRes.error) {
    return json<MarketplaceLoaderData>({
      products: emptyPaginatedProducts(query.page_size ?? 20),
      query,
      productError: typeof productsRes.error.detail === "string" ? productsRes.error.detail : "Unable to load products",
    });
  }

  return json<MarketplaceLoaderData>({
    products: productsRes.data,
    query,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = String(formData.get("intent") ?? "add-to-cart");

  if (intent !== "add-to-cart") {
    return json<MarketplaceActionData>({ error: "Unsupported cart action" }, { status: 400 });
  }

  const cookieHeader = request.headers.get("Cookie") ?? undefined;
  const payload = buildCartPayload(formData);
  const cartRes = await partnerServer.upsertCartItems(payload, cookieHeader);

  if (cartRes.error) {
    return json<MarketplaceActionData>(
      {
        error: typeof cartRes.error.detail === "string" ? cartRes.error.detail : "Unable to update cart",
      },
      { status: 400 }
    );
  }

  return json<MarketplaceActionData>({
    cart: cartRes.data,
  });
}

function formatPrice(currency: string, price: number) {
  return `${currency} ${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(price)}`;
}

function getProductLocationId(product: PartnerProduct): string | null {
  const primaryLocation = product.product_locations?.find(location => location.is_primary);
  return primaryLocation?.str_id ?? product.product_locations?.[0]?.str_id ?? null;
}
function ProductCard({
  product,
  onAddToCart,
  isSubmitting,
}: {
  product: PartnerProduct;
  onAddToCart: (product: PartnerProduct) => void;
  isSubmitting: boolean;
}) {
  const imageSrc = product.main_image_url || product.image_urls?.[0] || noImage;
  const hasRange = product.price_max > product.price_min;
  const priceLabel = product.price_min === 0 && product.price_max === 0
    ? "Free"
    : hasRange
      ? `${formatPrice(product.currency, product.price_min)} - ${formatPrice(product.currency, product.price_max)}`
      : formatPrice(product.currency, product.price_min);
  const locationCount = product.product_locations?.length ?? 0;
  const buttonLabel = isSubmitting ? "Adding..." : "Add to cart";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.1)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={imageSrc}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
          {product.status.replace(/_/g, " ")}
        </div>
      </div>

      {/* make body take remaining space so footer button stays inside card */}
      <div className="flex-1 flex flex-col gap-4 p-5 min-h-0">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-black text-slate-950 line-clamp-1">{product.name}</h3>
              <p className="text-sm font-medium leading-6 text-slate-500 line-clamp-2">{product.description}</p>
            </div>
            <span className="rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent">
              {product.category || "Uncategorized"}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-base font-black text-slate-950">{priceLabel}</span>
            <span className="text-xs font-medium text-slate-400">
              {locationCount > 0 ? `${locationCount} location${locationCount === 1 ? "" : "s"}` : "Online only"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {(product.tags ?? []).slice(0, 4).map(tag => (
            <span key={`${product._id}-${tag}`} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {tag.trim()}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-slate-100 pt-4">
          <span className="text-xs font-medium text-slate-400">
            {product.accepts_prepayment ? "Prepayment supported" : "Pay on confirmation"}
          </span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70"
            disabled={isSubmitting}
          >
            <ShoppingCart className="h-4 w-4" />
            {buttonLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
function ProductCardx({
  product,
  onAddToCart,
  isSubmitting,
}: {
  product: PartnerProduct;
  onAddToCart: (product: PartnerProduct) => void;
  isSubmitting: boolean;
}) {
  const imageSrc = product.main_image_url || product.image_urls?.[0] || noImage;
  const hasRange = product.price_max > product.price_min;
  const priceLabel = product.price_min === 0 && product.price_max === 0
    ? "Free"
    : hasRange
      ? `${formatPrice(product.currency, product.price_min)} - ${formatPrice(product.currency, product.price_max)}`
      : formatPrice(product.currency, product.price_min);
  const locationCount = product.product_locations?.length ?? 0;
  const buttonLabel = isSubmitting ? "Adding..." : "Add to cart";

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.1)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={imageSrc}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
          {product.status.replace(/_/g, " ")}
        </div>
      </div>

      <div className="flex h-full flex-col gap-4 p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-black text-slate-950 line-clamp-1">{product.name}</h3>
              <p className="text-sm font-medium leading-6 text-slate-500 line-clamp-2">{product.description}</p>
            </div>
            <span className="rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent">
              {product.category || "Uncategorized"}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-base font-black text-slate-950">{priceLabel}</span>
            <span className="text-xs font-medium text-slate-400">
              {locationCount > 0 ? `${locationCount} location${locationCount === 1 ? "" : "s"}` : "Online only"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {(product.tags ?? []).slice(0, 4).map(tag => (
            <span key={`${product._id}-${tag}`} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {tag.trim()}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <span className="text-xs font-medium text-slate-400">
            {product.accepts_prepayment ? "Prepayment supported" : "Pay on confirmation"}
          </span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70"
            disabled={isSubmitting}
          >
            <ShoppingCart className="h-4 w-4" />
            {buttonLabel}
          </button>
        </div>
      </div>
    </article>
  );
}

function MarketplaceSkeleton() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <div className="aspect-[4/3] bg-slate-200" />
          <div className="space-y-4 p-5">
            <div className="h-5 w-2/3 rounded-full bg-slate-200" />
            <div className="h-4 w-full rounded-full bg-slate-200" />
            <div className="h-4 w-4/5 rounded-full bg-slate-200" />
            <div className="flex items-center justify-between">
              <div className="h-5 w-24 rounded-full bg-slate-200" />
              <div className="h-9 w-32 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MarketplaceHome() {
  const { products, query, productError } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const cartSummaryFetcher = useFetcher<MarketplaceLoaderData>();
  const cartMutationFetcher = useFetcher<MarketplaceActionData>();
  const [cartState, setCartState] = useState<Cart | null>(null);
  const [cartHydrated, setCartHydrated] = useState(false);

  useEffect(() => {
    cartSummaryFetcher.load("/marketplace?intent=cart");
  }, []);

  useEffect(() => {
    if (cartSummaryFetcher.data && ("cart" in cartSummaryFetcher.data || "cartError" in cartSummaryFetcher.data)) {
      setCartState(cartSummaryFetcher.data.cart ?? null);
      setCartHydrated(true);
    }
  }, [cartSummaryFetcher.data]);

  useEffect(() => {
    if (cartMutationFetcher.data?.cart !== undefined) {
      setCartState(cartMutationFetcher.data.cart ?? null);
      setCartHydrated(true);
      cartSummaryFetcher.load("/marketplace?intent=cart");
    }
  }, [cartMutationFetcher.data]);

  const cartItemCount = useMemo(() => {

    // return cartState?.cart_items?.reduce((total, item) => total + 1, 0) ?? 0;
    return cartState?.cart_items?.length ?? 0
    // return cartState?.cart_items?.reduce((total, item) => total + item.quantity, 0) ?? 0;
  }, [cartState]);

  const totalItems = products?.total_items ?? 0;
  const totalPages = products?.total_pages ?? 0;
  const pageSize = query?.page_size ?? products?.items_per_page ?? 20;
  const showSkeleton = navigation.state === "loading" && navigation.formMethod === "get";
  const pendingProductId = cartMutationFetcher.state === "submitting"
    ? String(cartMutationFetcher.formData?.get("product_id") ?? "")
    : "";
  const cartError = cartSummaryFetcher.data?.cartError ?? null;
  const mutationError = cartMutationFetcher.data?.error ?? null;

  const handleAddToCart = (product: PartnerProduct) => {
    const formData = new FormData();
    formData.set("intent", "add-to-cart");
    formData.set("product_id", product._id);
    formData.set("quantity", "1");
    const locationId = getProductLocationId(product);
    if (locationId) {
      formData.set("product_location_id", locationId);
    }
    cartMutationFetcher.submit(formData, { method: "post", action: "/marketplace" });
  };

  return (
    <main className="w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.04),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.06),transparent_28%)]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Marketplace
            </div>
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                Discover products with a clean, calm shopping experience.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Search by keyword and location, then add items to a cart that stays friendly for guests and signed-in users alike.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/marketplace/cart"
                className="inline-flex items-center gap-3 rounded-full border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <ShoppingCart className="h-4 w-4" />
                View Cart
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-black">
                  {cartHydrated ? cartItemCount : "…"}
                </span>
              </Link>
              <Link
                to="/marketplace"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
              >
                Refresh Catalog
              </Link>
            </div>

            {(productError || mutationError || cartError) ? (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                {productError || mutationError || cartError}
              </div>
            ) : null}
          </div>

          {/* <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Cart</div>
                  <div className="mt-2 text-3xl font-black text-slate-950">
                    {cartHydrated ? cartItemCount : <span className="inline-block h-8 w-16 animate-pulse rounded-full bg-slate-200 align-middle" />}
                  </div>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950 shadow-sm">
                  <ShoppingCart className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The cart summary loads after the page paints, so browsing stays fast.
              </p>
              <Link to="/marketplace/cart" className="mt-4 inline-flex text-sm font-bold text-accent">
                Open cart
              </Link>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Products</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{totalItems}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {totalPages > 0 ? `${totalPages} pages of products ready to browse.` : "No items found for the current search."}
              </p>
            </div>
          </div> */}
        </div>

        <Link
          to="/marketplace/cart"
          aria-label="View cart"
          className="absolute right-5 top-5 hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 sm:inline-flex"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Cart</span>
          <span className="rounded-full bg-slate-950 px-2.5 py-1 text-xs font-black text-white">
            {cartHydrated ? cartItemCount : "…"}
          </span>
        </Link>
      </section>

      <section className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <Form method="get" className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Search products</span>
            <input
              type="text"
              name="wildcard"
              defaultValue={query?.wildcard ?? ""}
              placeholder="Try: shoes, watch, MacBook"
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Location</span>
            <input
              type="text"
              name="location_wildcard"
              defaultValue={query?.location_wildcard ?? ""}
              placeholder="Try: lag, ikeja, abuja"
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
            />
          </label>
          <div className="flex gap-3">
            <button
              type="submit"
              className="h-12 rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Search
            </button>
            <Link
              to="/marketplace"
              className="inline-flex h-12 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Clear
            </Link>
          </div>
        </Form>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-slate-950">Catalog</h2>
            <p className="text-sm text-slate-500">
              {totalItems > 0 ? `${totalItems} product${totalItems === 1 ? "" : "s"} found` : "No products found for this search"}
            </p>
          </div>
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Page {products?.current_page ?? 1}
          </div>
        </div>

        {showSkeleton ? (
          <MarketplaceSkeleton />
        ) : products?.items?.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.items.map(product => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={handleAddToCart}
                isSubmitting={pendingProductId === product._id}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <h3 className="text-xl font-black text-slate-950">No matching products</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Try a broader keyword or location to expand the catalog results.
            </p>
          </div>
        )}
      </section>

      <section className="mt-8">
        <Pagination
          lastKey={products?.last_key_id}
          firstKey={products?.first_key_id}
          pageSize={pageSize}
        />
      </section>
    </main>
  );
}
