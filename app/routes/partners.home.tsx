import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { ArrowRight, Package, Search, Tag, Store } from "lucide-react";
import Cta from "~/components/reusables/Cta";
import Pagination from "~/components/reusables/Pagination";
import { noImage } from "~/assets/images";
import { requireAuth } from "~/lib/session.server";
import { partnerServer } from "~/services/partner/partner.server";
import type { IPaginatedResponse } from "~/services/common/types/paginated_data";
import type { PartnerProduct } from "~/services/partner/types/partner.interface";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  const url = new URL(request.url);
  const query: any = {};
  for (const [k, v] of url.searchParams.entries()) {
    query[k] = v;
  }
  const pagedUsersRes = await partnerServer.getPartnerProducts(query, request);
  if (pagedUsersRes.authRequired) {
    return redirect("/login");
  }
  return json({ data: pagedUsersRes.data, query });
}

function formatPriceRange(product: PartnerProduct): string {
  const minimum = `${product.currency} ${product.price_min}`;
  if (product.price_max && product.price_max !== product.price_min) {
    return `${minimum} - ${product.currency} ${product.price_max}`;
  }
  return minimum;
}

function Banner({
  data,
}: {
  data?: IPaginatedResponse<PartnerProduct> | null;
}) {
  const totalProducts = data?.total_items ?? data?.items.length ?? 0;
  const totalPages = data?.total_pages ?? 0;
  const currentPage = data?.current_page ?? 1;

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_16px_50px_rgba(14,42,77,0.15)] sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-white/5" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            <Store className="h-4 w-4" />
            Partner Products
          </div>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl">
            Manage your product catalog
          </h1>
          <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Manage your product catalog, update product details, and track inventory.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
              <Package className="h-4 w-4" />
              {totalProducts} products
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
              <Tag className="h-4 w-4" />
              Page {currentPage} of {totalPages || 1}
            </span>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-md">
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Total products
            </p>
            <p className="mt-1 text-lg font-black text-white">{totalProducts}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Current page
            </p>
            <p className="mt-1 text-lg font-black text-white">{currentPage}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Items per page
            </p>
            <p className="mt-1 text-lg font-black text-white">
              {data?.items_per_page ?? "20"}
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

function SearchPanel() {
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";

  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center gap-2 text-slate-500">
        <Search className="h-4 w-4" />
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          Filter products
        </h2>
      </div>

      <Form
        method="get"
        className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
      >
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Price
          </span>
          <input
            type="number"
            name="price,wildcard,status"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white"
            placeholder="Enter a price"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Search term
          </span>
          <input
            type="text"
            name="wildcard"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white"
            placeholder="Name, description, or tag"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Status
          </span>
          <select
            name="status"
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-pink focus:bg-white"
          >
            <option value="available">Available</option>
            <option value="out_of_stock">Out of Stock</option>
            <option value="suspended">Suspended</option>
          </select>
        </label>

        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand-navy px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy/90 disabled:opacity-60"
          disabled={isBusy}
        >
          <Search className="h-4 w-4" />
          {isBusy ? "Searching..." : "Search"}
        </button>
      </Form>
    </section>
  );
}

function ProductCard({ product }: { product: PartnerProduct }) {
  const imgSrc = product.main_image_url ? product.main_image_url : noImage;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={imgSrc}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-base font-black text-slate-900">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500 line-clamp-2">
              {product.description}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-brand-navy/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-navy">
            {product.status.replace(/_/g, " ")}
          </span>
        </div>

        <div className="flex items-center gap-2 text-lg font-black text-brand-pink">
          {formatPriceRange(product)}
        </div>

        <div className="flex flex-wrap gap-2">
          {product.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2 text-xs text-slate-500">
          <span className="truncate">{product.category || "Uncategorized"}</span>
          <div className="flex items-center gap-2">
            {product.sku ? (
              <span className="hidden rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-500 sm:inline-flex">
                SKU: {product.sku}
              </span>
            ) : null}
            <Cta
              element="link"
              to={`/partners/product/update/${product._id}`}
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold"
              variant="outline"
            >
              Edit
              <ArrowRight className="h-3.5 w-3.5" />
            </Cta>
          </div>
        </div>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
      <Package className="mx-auto h-10 w-10 text-slate-300" />
      <h3 className="mt-4 text-xl font-black text-slate-900">
        No products found
      </h3>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
        Try adjusting the search filters or browse all products to find the
        item you need.
      </p>
    </div>
  );
}

export default function PartnerProducts() {
  const { data, query } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";

  return (
    <main className="w-full min-h-screen bg-tertiary p-4 sm:p-6 lg:p-8">
      <Banner data={data} />

      <div className="mt-6 flex justify-end">
        <Cta
          element="link"
          to="/partners/add"
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold"
        >
          Add Product
          <ArrowRight className="h-4 w-4" />
        </Cta>
      </div>

      <div className="mt-6">
        <SearchPanel />
      </div>

      <section className="mt-6">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Product listings
            </h2>
            <p className="text-sm text-slate-500">
              {data?.total_items && data.total_items > 0
                ? `${data.total_items} product${
                    data.total_items === 1 ? "" : "s"
                  } available`
                : "No products found for the current filters"}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
            <Tag className="h-4 w-4" />
            Page {data?.current_page ?? 1}
          </div>
        </div>

        {isBusy && !data ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-[23rem] animate-pulse rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
              />
            ))}
          </div>
        ) : data?.items && data.items.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {data.items.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </section>

      <div className="mt-6 sm:flex sm:justify-between sm:items-center">
        <Pagination
          lastKey={query?.last_key_id}
          pageSize={query?.items_per_page}
          firstKey={query?.first_key_id}
        />
      </div>
    </main>
  );
}
