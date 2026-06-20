import { json, type LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { noImage } from "~/assets/images";
import Cta from "~/components/reusables/Cta";
import Pagination from "~/components/reusables/Pagination";
import { partnerServer } from "~/services/partner/partner.server";
import type { IQueryPartnerProduct, PartnerProduct } from "~/services/partner/types/partner.interface";

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

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader) return redirect("/login");

  const url = new URL(request.url);
  const query = buildMarketplaceQuery(url.searchParams);
  const marketplaceRes = await partnerServer.getMarketplaceProducts(query, cookieHeader);

  if (marketplaceRes.authRequired) return redirect("/login");
  if (marketplaceRes.error) {
    throw new Response(
      typeof marketplaceRes.error.detail === "string" ? marketplaceRes.error.detail : "Unable to load marketplace products",
      { status: 500 }
    );
  }

  return json({
    products: marketplaceRes.data,
    query,
  });
}

function formatPrice(currency: string, price: number) {
  return `${currency} ${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(price)}`;
}

function ProductCard({ product }: { product: PartnerProduct }) {
  const imageSrc = product.main_image_url || product.image_urls?.[0] || noImage;
  const hasRange = product.price_max > product.price_min;
  const priceLabel = product.price_min === 0 && product.price_max === 0
    ? "Free"
    : hasRange
      ? `${formatPrice(product.currency, product.price_min)} - ${formatPrice(product.currency, product.price_max)}`
      : formatPrice(product.currency, product.price_min);

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={imageSrc}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
          {product.status.replace(/_/g, " ")}
        </div>
      </div>

      <div className="flex h-full flex-col gap-4 p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-black text-slate-950 line-clamp-1">{product.name}</h3>
              <p className="text-sm font-medium text-slate-500 line-clamp-2">{product.description}</p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-base font-black text-slate-950">{priceLabel}</span>
            <span className="rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent">
              {product.category || "Uncategorized"}
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

        <div className="space-y-2">
          {product.product_locations?.length ? (
            <div className="flex flex-wrap gap-2">
              {product.product_locations.slice(0, 2).map(location => (
                <span key={location.str_id} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                  {location.name}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs font-medium text-slate-400">Location details available on request.</p>
          )}

          <div className="flex items-center justify-between gap-3 pt-1">
            <span className="text-xs font-medium text-slate-400">
              {product.accepts_prepayment ? "Prepayment supported" : "Pay on confirmation"}
            </span>
            <button
              type="button"
              className="rounded-full border border-accent/20 bg-[#EEF0FF] px-4 py-2 text-sm font-bold text-accent transition hover:border-accent/40 hover:bg-accent hover:text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MarketplaceHome() {
  const { products, query } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSearching = navigation.state !== "idle";
  const totalItems = products?.total_items ?? 0;
  const totalPages = products?.total_pages ?? 0;
  const pageSize = query.page_size ?? products?.items_per_page ?? 20;

  return (
    <main className="w-full overflow-y-auto p-4 sm:p-6 lg:p-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_45%,#4b4870_100%)] px-6 py-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.25)] sm:px-8 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(238,240,255,0.14),transparent_28%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/85">
              Marketplace
            </div>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                Discover products with a clean, focused storefront experience.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
                Search by product keyword or location wildcard, then browse the catalog with paged results that feel fast and easy to scan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Cta element="link" to="/marketplace" className="rounded-full px-5 py-3 text-sm font-bold" variant="solid">
                Not sure yet
              </Cta>
              <Cta element="link" to="/marketplace" className="rounded-full px-5 py-3 text-sm font-bold" variant="outline">
                Refresh Catalog
              </Cta>
            </div>
          </div>

          
          {/* <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Products</div>
              <div className="mt-2 text-2xl font-black">{totalItems}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Pages</div>
              <div className="mt-2 text-2xl font-black">{totalPages}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Page size</div>
              <div className="mt-2 text-2xl font-black">{pageSize}</div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="mt-6 rounded-[1.75rem] border border-slate-200/70 bg-white p-4 shadow-sm sm:p-6">
        <Form method="get" className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Search products</span>
            <input
              type="text"
              name="wildcard"
              defaultValue={query.wildcard ?? ""}
              placeholder="Try: shoes, watch, MacBook"
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-accent focus:bg-white"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Location wildcard</span>
            <input
              type="text"
              name="location_wildcard"
              defaultValue={query.location_wildcard ?? ""}
              placeholder="Try: lag, ikeja, abuja"
              className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-accent focus:bg-white"
            />
          </label>
          <div className="flex gap-3">
            <button
              type="submit"
              className="h-12 rounded-2xl bg-accent px-5 text-sm font-bold text-white transition hover:opacity-95 disabled:cursor-wait disabled:opacity-70"
              disabled={isSearching}
            >
              {isSearching ? "Searching..." : "Search"}
            </button>
            <Cta
              element="link"
              to="/marketplace"
              className="h-12 flex items-center rounded-2xl px-5 text-sm font-bold"
              variant="outline"
            >
              Clear
            </Cta>
          </div>
        </Form>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
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

        {products?.items?.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.items.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <h3 className="text-xl font-black text-slate-900">No matching products</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Try a broader keyword or location wildcard to expand the catalog results.
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
