import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import { ArrowLeft, ArrowRight, Package, Sparkles, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import Cta from "~/components/reusables/Cta";
import DragnDrop from "~/components/public/contests/DragnDrop";
import FormControl from "~/components/reusables/FormControl";
import Select from "~/components/reusables/Select";
import { toast } from "~/components/reusables/use-toast";
import { requireAuth } from "~/lib/session.server";
import { partnerServer } from "~/services/partner/partner.server";
import type {
  ICreatePartnerProductDTO,
  PartnerLocation,
  PartnerProductResponse,
  PartnerProductStatus,
  WalletCurrency,
} from "~/services/partner/types/partner.interface";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);

  const locationsRes = await partnerServer.getPartnerLocations(
    { page_size: 1000 },
    request
  );
  if (locationsRes.authRequired) return redirect("/login");

  return json({
    locations: locationsRes.data?.items ?? [],
  });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAuth(request);
  const formData = await request.formData();
  const dto: ICreatePartnerProductDTO = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    price_min: Number(formData.get("price_min")) || 0,
    price_max: Number(formData.get("price_max")) || 0,
    category: formData.get("category") as string,
    currency: formData.get("currency") as WalletCurrency,
    status: formData.get("status") as PartnerProductStatus,
    sku: formData.get("sku") as string,
    tags: formData.getAll("tags").map((t) => t.toString()),
    locations: formData.getAll("locations").map((location) =>
      location.toString()
    ),
    image: formData.get("image")
      ? (formData.get("image") as File).size === 0
        ? null
        : (formData.get("image") as File)
      : null,
  };
  const response = await partnerServer.addPartnerProduct(dto, request);
  return response;
}

function Banner() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_16px_50px_rgba(14,42,77,0.15)] sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-white/5" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            <Sparkles className="h-4 w-4" />
            New Product
          </div>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl">
            Add a new product listing
          </h1>
          <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Please fill the product details form below to add a new product to your catalog. Make sure to provide accurate information for better visibility and customer engagement.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
              <Package className="h-4 w-4" />
              Product details
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
              <Upload className="h-4 w-4" />
              Image upload
            </span>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-md">
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Currency
            </p>
            <p className="mt-1 text-lg font-black text-white">NGN</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Status
            </p>
            <p className="mt-1 text-lg font-black text-white">Available</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Locations
            </p>
            <p className="mt-1 text-lg font-black text-white">Multi-select</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-xl font-black text-slate-900">{title}</h2>
      <p className="text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

export default function AddPartnerProduct() {
  const { locations } = useLoaderData<typeof loader>();
  const actionData = useActionData<PartnerProductResponse & { error?: any }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const [tags, setTags] = useState<string>("");

  useEffect(() => {
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Add product failed",
        description:
          actionData.error?.detail?.toString() ||
          actionData.error?.toString() ||
          "Could not add partner product!",
      });
    }
    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Product added",
        description: "Partner product was successfully added!",
      });
      navigate("/partners/home");
    }
  }, [actionData, navigate]);

  return (
    <main className="w-full min-h-screen bg-tertiary p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <Banner />

        <div className="flex items-center justify-between gap-4">
          <Cta
            element="button"
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
            variant="outline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Cta>
          <span className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm sm:inline-flex">
            Ready to publish
          </span>
        </div>

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <Form method="post" encType="multipart/form-data" className="grid gap-8">
            <SectionHeading
              eyebrow="Product basics"
              title="Tell shoppers what this is"
              description="Description of product goes here."
            />

            <div className="grid gap-4">
              <FormControl
                as="input"
                labelText="Product Name"
                name="name"
                id="name"
                required
                placeholder="Enter product name"
              />
              <FormControl
                as="textarea"
                labelText="Description"
                name="description"
                id="description"
                required
                placeholder="Enter product description"
              />
              <FormControl
                as="input"
                labelText="Category"
                name="category"
                id="category"
                placeholder="e.g. Shoes"
              />
            </div>

            <div className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
              <FormControl
                as="input"
                labelText="Price Min"
                name="price_min"
                id="price_min"
                type="number"
                min={0}
                required
                placeholder="0"
              />
              <FormControl
                as="input"
                labelText="Price Max"
                name="price_max"
                id="price_max"
                type="number"
                min={0}
                required
                placeholder="0"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Select
                label="Currency"
                id="currency"
                name="currency"
                defaultValue="NGN"
                required
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
              </Select>
              <Select
                label="Status"
                id="status"
                name="status"
                defaultValue="available"
                required
              >
                <option value="available">Available</option>
                <option value="out_of_stock">Out of Stock</option>
                <option value="suspended">Suspended</option>
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormControl
                as="input"
                labelText="SKU"
                name="sku"
                id="sku"
                placeholder="Stock Keeping Unit"
              />
              <FormControl
                as="input"
                labelText="Tags (comma separated)"
                name="tags"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. shoes, sports, men"
              />
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
              <SectionHeading
                eyebrow="Store reach"
                title="Choose where this product is available"
                description="Use the locations list to assign the branches that should carry this product."
              />

              <label className="mt-4 block font-bold text-sm">
                Locations
                <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <select
                    name="locations"
                    id="locations"
                    multiple
                    className="min-h-36 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm outline-none transition focus:border-brand-pink"
                  >
                    {locations.length > 0 ? (
                      locations.map((location: PartnerLocation) => (
                        <option key={location.str_id} value={location.str_id}>
                          {location.name}
                        </option>
                      ))
                    ) : (
                      <option value="" disabled>
                        No locations available
                      </option>
                    )}
                  </select>
                </div>
                <span className="mt-1 block text-xs font-normal text-slate-500">
                  Hold Ctrl or Cmd to select multiple locations.
                </span>
              </label>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <SectionHeading
                eyebrow="Visual asset"
                title="Upload the product image"
                description="A clean image gives the listing more presence and makes the catalog feel premium."
              />
              <div className="mt-4">
                <DragnDrop
                  name="image"
                  labelText="Product Image"
                  multiple={false}
                  required={false}
                />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Cta
                element="button"
                type="reset"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold"
                variant="outline"
              >
                Reset
              </Cta>
              <Cta
                disabled={isSubmitting}
                element="button"
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold"
              >
                {isSubmitting ? "Adding product..." : "Add Product"}
                <ArrowRight className="h-4 w-4" />
              </Cta>
            </div>
          </Form>
        </section>
      </div>
    </main>
  );
}
