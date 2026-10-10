import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useFetcher, useLoaderData, useNavigation, useRevalidator } from "@remix-run/react";
import { useEffect, useState, type FormEvent } from "react";
import Pagination from "~/components/reusables/Pagination";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/reusables/Accordion";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "~/components/reusables/Dialog";
import { toast } from "~/components/reusables/use-toast";
import { getErrorMessage, formatMoney, formatVTUDataProductDescription } from "~/lib/utils";
import { requireAuth } from "~/lib/session.server";
import { vtuServer } from "~/services/vtu/vtu.server";
import { VTUDiscountType, VTUProductCategory, VTUProductStatus, type SearchVTUProduct, type UpdateVTUProductDTO, type VTUProductResponseDTOPagedModel, type VTUProductResponseDTO, type VTUProviderOffer } from "~/services/vtu/types/vtu.interface";

type LoaderData = { products: VTUProductResponseDTOPagedModel; query: SearchVTUProduct; error?: string };
type UpdateActionData = { ok: true; product: VTUProductResponseDTO } | { ok: false; error: string };

function buildQuery(params: URLSearchParams): SearchVTUProduct {
  const query: SearchVTUProduct = {};
  const description = params.get("description")?.trim();
  const network = params.get("network")?.trim();
  const category = params.get("category");
  const status = params.get("status");
  if (description) query.description = description;
  if (network) query.network = network;
  if (Object.values(VTUProductCategory).includes(category as VTUProductCategory)) query.category = category as VTUProductCategory;
  if (Object.values(VTUProductStatus).includes(status as VTUProductStatus)) query.status = status as VTUProductStatus;

  const pageSize = Number(params.get("page_size"));
  if (Number.isInteger(pageSize) && pageSize > 0) query.page_size = pageSize;
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

function emptyPage(pageSize = 20): VTUProductResponseDTOPagedModel {
  return { items: [], current_page: 1, total_pages: 0, total_items: 0, items_per_page: pageSize, first_key_id: null, last_key_id: null };
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  const query = buildQuery(new URL(request.url).searchParams);
  const result = await vtuServer.adminGetVTUProductsPaged(query, request);
  if (result.error) {
    return json<LoaderData>({ products: emptyPage(query.page_size), query, error: getErrorMessage(result.error, "Unable to load VTU data products.") });
  }
  return json<LoaderData>({ products: result.data ?? emptyPage(query.page_size), query });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAuth(request);
  const formData = await request.formData();
  if (formData.get("intent") !== "update_product") {
    return json<UpdateActionData>({ ok: false, error: "Unsupported VTU product action." }, { status: 400 });
  }

  const productId = String(formData.get("product_id") ?? "").trim();
  if (!productId) return json<UpdateActionData>({ ok: false, error: "Product ID is required." }, { status: 400 });

  const update: UpdateVTUProductDTO = {};
  const description = String(formData.get("description") ?? "").trim();
  if (description) update.description = description;

  const isDiscounted = String(formData.get("is_discounted") ?? "");
  if (isDiscounted !== "true" && isDiscounted !== "false") {
    return json<UpdateActionData>({ ok: false, error: "Choose whether this product is discounted." }, { status: 400 });
  }
  update.is_discounted = isDiscounted === "true";

  const discountType = String(formData.get("discount_type") ?? "");
  if (discountType && Object.values(VTUDiscountType).includes(discountType as VTUDiscountType)) {
    update.discount_type = discountType as VTUDiscountType;
  } else if (discountType) {
    return json<UpdateActionData>({ ok: false, error: "Select a valid discount type." }, { status: 400 });
  }

  for (const field of ["discount_value", "retail_price"] as const) {
    const value = String(formData.get(field) ?? "").trim();
    if (!value) continue;
    const numberValue = Number(value);
    if (!Number.isFinite(numberValue)) {
      return json<UpdateActionData>({ ok: false, error: `Enter a valid ${field === "retail_price" ? "retail price" : "discount value"}.` }, { status: 400 });
    }
    update[field] = numberValue;
  }

  const result = await vtuServer.adminUpdateVTUProductDTO(productId, update, request);
  if (result.error || !result.data) {
    return json<UpdateActionData>({ ok: false, error: getErrorMessage(result.error, "Unable to update this VTU product.") }, { status: 400 });
  }
  return json<UpdateActionData>({ ok: true, product: result.data });
}

function ProductSkeleton() {
  return <div className="space-y-3 animate-pulse" aria-label="Loading VTU data products">{[0, 1, 2].map(item => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="h-4 w-32 rounded bg-slate-200" /><div className="mt-4 h-5 w-2/3 rounded bg-slate-200" /><div className="mt-3 h-4 w-1/2 rounded bg-slate-100" /></div>)}</div>;
}

function OfferItem({ offer }: { offer: VTUProviderOffer }) {
  return <AccordionItem value={offer._id} className="border-b border-slate-100 last:border-0">
    <AccordionTrigger className="py-3 text-left text-sm"><span className="flex min-w-0 items-center gap-2"><span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">Priority {offer.priority}</span><span className="truncate font-semibold text-slate-800">{offer.provider}</span></span></AccordionTrigger>
    <AccordionContent className="pb-3 text-sm text-slate-600">
      <p>{formatVTUDataProductDescription(offer.category, offer.size, offer.size_unit, offer.validity, offer.validity_unit)} · {offer.provider}</p>
      <p className="mt-1 font-semibold text-slate-800">Cost price: {formatMoney(offer.cost_price_currency, offer.cost_price, 2)}</p>
      <p className="mt-1 text-xs capitalize text-slate-500">Offer status: {offer.status}</p>
    </AccordionContent>
  </AccordionItem>;
}

function ProductCard({ product, onEdit }: { product: VTUProductResponseDTO; onEdit: (product: VTUProductResponseDTO) => void }) {
  const description = formatVTUDataProductDescription(product.category, product.size, product.size_unit, product.validity, product.validity_unit);
  return <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.network}</p><h3 className="mt-1 font-bold text-slate-900">{description}</h3>{product.description && <p className="mt-1 text-sm text-slate-500">{product.description}</p>}</div>
      <div className="flex shrink-0 items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${product.status === VTUProductStatus.ACTIVE ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{product.status}</span><button type="button" disabled={!product._id} onClick={() => onEdit(product)} className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-brand-pink hover:text-brand-pink disabled:cursor-not-allowed disabled:opacity-50">Edit Product</button></div>
    </div>
    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
      <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Retail price</p><p className="mt-1 font-bold text-slate-900">{formatMoney(product.retail_price_currency, product.retail_price, 2)}</p></div>
      <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Discount</p><p className="mt-1 text-sm font-semibold text-slate-900">{product.is_discounted ? "Enabled" : "Disabled"}{product.discount_type ? ` · ${product.discount_type}` : ""}{typeof product.discount_value === "number" ? ` · ${product.discount_value}` : ""}</p>
        {(typeof product.minumum_discount_limit === "number" || typeof product.maximum_discount_limit === "number") && <p className="mt-1 text-xs text-slate-500">Limits: {product.minumum_discount_limit ?? "—"} – {product.maximum_discount_limit ?? "—"}</p>}
      </div>
    </div>
    <div className="mt-4 border-t border-slate-100 pt-2"><div className="mb-1 flex items-center justify-between"><h4 className="text-sm font-bold text-slate-800">Provider offers</h4><span className="text-xs text-slate-500">{product.providers_offers.length}</span></div>
      {product.providers_offers.length ? <Accordion type="multiple" className="w-full">{product.providers_offers.map(offer => <OfferItem key={offer._id} offer={offer} />)}</Accordion> : <p className="py-3 text-sm text-slate-500">No provider offers.</p>}
    </div>
  </article>;
}

export function useVTUDataController() {
  const { products, query, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const updateFetcher = useFetcher<typeof action>();
  const { revalidate } = useRevalidator();
  const [selectedProduct, setSelectedProduct] = useState<VTUProductResponseDTO | null>(null);
  const isLoading = navigation.state !== "idle" && navigation.location?.pathname === "/admin/vtudata";
  useEffect(() => {
    if (error) toast({ variant: "destructive", title: "Unable to load VTU data products", description: error });
  }, [error]);
  useEffect(() => {
    const data = updateFetcher.data;
    if (!data) return;
    if (data.ok) {
      toast({ title: "Product updated", description: "The VTU data product was updated successfully." });
      setSelectedProduct(null);
      revalidate();
    } else {
      toast({ variant: "destructive", title: "Unable to update product", description: data.error });
    }
  }, [updateFetcher.data, revalidate]);
  const validateAndSubmitUpdate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedProduct) return;
    const formData = new FormData(event.currentTarget);
    const submittedPrice = String(formData.get("retail_price") ?? "").trim();
    if (submittedPrice) {
      const price = Number(submittedPrice);
      const offerCosts = selectedProduct.providers_offers.map(offer => offer.cost_price).filter(Number.isFinite);
      const lowestCost = offerCosts.length ? Math.min(...offerCosts) : undefined;
      if (lowestCost !== undefined && Number.isFinite(price) && price < lowestCost) {
        toast({ variant: "destructive", title: "Retail price is too low", description: `Retail price must be at least ${formatMoney(selectedProduct.providers_offers.find(offer => offer.cost_price === lowestCost)?.cost_price_currency ?? selectedProduct.retail_price_currency, lowestCost, 2)}.` });
        return;
      }
    }
    updateFetcher.submit(formData, { method: "post" });
  };
  return { products, query, error, isLoading, updateFetcher, selectedProduct, setSelectedProduct, validateAndSubmitUpdate };
}

export default function AdminVTUData() {
  const { products, query, error, isLoading, updateFetcher, selectedProduct, setSelectedProduct, validateAndSubmitUpdate } = useVTUDataController();
  const submitting = updateFetcher.state !== "idle";
  return <main className="mx-auto min-h-full w-full max-w-7xl overflow-y-auto bg-slate-50/60 p-4 sm:p-6 lg:p-8">
    <header className="mb-6 sm:mb-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-pink">Administration</p><h1 className="mt-2 text-2xl font-black text-primary sm:text-3xl">VTU data products</h1><p className="mt-2 text-sm text-slate-600">Browse product pricing, availability, discounts, and provider offers.</p></header>
    <Form method="get" className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4"><h2 className="font-bold text-slate-900">Search products</h2><p className="mt-1 text-xs text-slate-500">Filter by description, network, category, or status.</p></div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="grid gap-1 text-xs font-medium text-slate-600">Description<input name="description" defaultValue={query.description ?? ""} placeholder="Product description" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900" /></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Network<input name="network" defaultValue={query.network ?? ""} placeholder="Network" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900" /></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Category<select name="category" defaultValue={query.category ?? ""} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"><option value="">All categories</option>{Object.values(VTUProductCategory).map(category => <option key={category} value={category}>{category}</option>)}</select></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Status<select name="status" defaultValue={query.status ?? ""} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"><option value="">All statuses</option>{Object.values(VTUProductStatus).map(status => <option key={status} value={status}>{status}</option>)}</select></label>
      </div>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><a href="/admin/vtudata" className="rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">Clear filters</a><button type="submit" className="rounded-lg bg-brand-pink px-5 py-2.5 text-sm font-bold text-white transition hover:scale-[1.01]">Search products</button></div>
    </Form>
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"><div className="mb-4 flex flex-wrap items-center justify-between gap-2"><h2 className="font-bold text-slate-900">Product results</h2><span className="text-xs text-slate-500">{products.total_items} total</span></div>
      {isLoading ? <ProductSkeleton /> : error ? <div role="status" className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">Product data could not be loaded. See the error notification for details.</div> : products.items.length === 0 ? <div className="rounded-xl border border-dashed border-slate-200 px-4 py-12 text-center"><p className="font-semibold text-slate-800">No VTU data products found</p><p className="mt-1 text-sm text-slate-500">Try adjusting your search filters.</p></div> : <>
        <div className="space-y-3">{products.items.map(product => <ProductCard key={product.str_id} product={product} onEdit={setSelectedProduct} />)}</div>
        <Pagination lastKey={products.last_key_id} firstKey={products.first_key_id} pageSize={products.items_per_page} />
      </>}
    </section>
    <Dialog open={!!selectedProduct} onOpenChange={open => !open && !submitting && setSelectedProduct(null)}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-slate-200 bg-white sm:max-w-xl">
        {selectedProduct && <>
          <DialogHeader className="text-left"><DialogTitle className="text-xl font-black text-slate-950">Edit VTU data product</DialogTitle><DialogDescription>Update the product description, retail price, and discount settings.</DialogDescription></DialogHeader>
          <updateFetcher.Form method="post" onSubmit={validateAndSubmitUpdate} className="space-y-4">
            <input type="hidden" name="intent" value="update_product" /><input type="hidden" name="product_id" value={selectedProduct._id} />
            <label className="grid gap-1.5 text-sm font-semibold text-slate-800">Description<input name="description" defaultValue={selectedProduct.description ?? ""} placeholder="Product description" className="rounded-lg border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-brand-pink focus:ring-2 focus:ring-pink-100" /></label>
            <label className="grid gap-1.5 text-sm font-semibold text-slate-800">Retail price <span className="font-normal text-slate-500">({selectedProduct.retail_price_currency})</span><input name="retail_price" type="number" step="any" defaultValue={selectedProduct.retail_price} className="rounded-lg border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-brand-pink focus:ring-2 focus:ring-pink-100" /></label>
            <label className="grid gap-1.5 text-sm font-semibold text-slate-800">Discount status<select name="is_discounted" defaultValue={String(selectedProduct.is_discounted)} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 font-normal"><option value="true">Enabled</option><option value="false">Disabled</option></select></label>
            <label className="grid gap-1.5 text-sm font-semibold text-slate-800">Discount type<select name="discount_type" defaultValue={selectedProduct.discount_type ?? ""} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 font-normal"><option value="">Not set</option>{Object.values(VTUDiscountType).map(type => <option key={type} value={type}>{type}</option>)}</select></label>
            <label className="grid gap-1.5 text-sm font-semibold text-slate-800">Discount value<input name="discount_value" type="number" step="any" defaultValue={selectedProduct.discount_value ?? ""} className="rounded-lg border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-brand-pink focus:ring-2 focus:ring-pink-100" /></label>
            <DialogFooter className="gap-2 sm:gap-3"><DialogClose asChild><button type="button" disabled={submitting} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700">Cancel</button></DialogClose><button type="submit" disabled={submitting} className="rounded-lg bg-brand-pink px-5 py-2.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Saving…" : "Save changes"}</button></DialogFooter>
          </updateFetcher.Form>
        </>}
      </DialogContent>
    </Dialog>
  </main>;
}
