import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useNavigate, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";
import Cta from "~/components/reusables/Cta";
import DragnDrop from "~/components/public/contests/DragnDrop";
import FormControl from "~/components/reusables/FormControl";
import Select from "~/components/reusables/Select";
import { toast } from "~/components/reusables/use-toast";
import { noImage } from "~/assets/images";
import { partnerServer } from "~/services/partner/partner.server";
import type {
  IUpdatePartnerProductDTO,
  PartnerLocation,
  PartnerProduct,
  PartnerProductResponse,
  PartnerProductStatus,
  WalletCurrency,
} from "~/services/partner/types/partner.interface";

function parseOptionalNumber(value: FormDataEntryValue | null): number | undefined {
  if (value === null) return undefined;
  const trimmed = value.toString().trim();
  if (!trimmed) return undefined;
  const parsed = Number(trimmed);
  return Number.isNaN(parsed) ? undefined : parsed;
}

function parseCommaSeparatedValues(value: FormDataEntryValue | null): string[] | undefined {
  if (value === null) return undefined;
  const parsed = value
    .toString()
    .split(",")
    .map(item => item.trim())
    .filter(Boolean);
  return parsed.length > 0 ? parsed : undefined;
}

function getImageSrc(product: PartnerProduct) {
  return product.main_image_url || product.image_url || noImage;
}

function buildUpdateProductDto(formData: FormData): IUpdatePartnerProductDTO {
  const dto: IUpdatePartnerProductDTO = {};

  const name = formData.get("name")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const category = formData.get("category")?.toString().trim();
  const currency = formData.get("currency")?.toString().trim();
  const status = formData.get("status")?.toString().trim();
  const sku = formData.get("sku")?.toString().trim();
  const businessId = formData.get("business_id")?.toString().trim();
  const createdBy = formData.get("created_by")?.toString().trim();

  if (name) dto.name = name;
  if (description) dto.description = description;
  const priceMin = parseOptionalNumber(formData.get("price_min"));
  const priceMax = parseOptionalNumber(formData.get("price_max"));
  if (priceMin !== undefined) dto.price_min = priceMin;
  if (priceMax !== undefined) dto.price_max = priceMax;
  if (category) dto.category = category;
  if (currency) dto.currency = currency as WalletCurrency;
  if (status) dto.status = status as PartnerProductStatus;
  if (businessId) dto.business_id = businessId;
  if (sku) dto.sku = sku;

  const tags = parseCommaSeparatedValues(formData.get("tags"));
  if (tags) dto.tags = tags;

  const locations = formData.getAll("locations").map(location => location.toString()).filter(Boolean);
  if (locations.length > 0) dto.locations = locations;

  if (createdBy) dto.created_by = createdBy;

  const imageValue = formData.get("image");
  if (imageValue instanceof File && imageValue.size > 0) {
    dto.image = imageValue;
  }

  return dto;
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
   ;

  const productId = params.productId;
  if (!productId) {
    throw new Response("Product id is required", { status: 400 });
  }

  const [productRes, locationsRes] = await Promise.all([
    partnerServer.getPartnerProductById(productId, request),
    partnerServer.getPartnerLocations({ page_size: 1000 }, request),
  ]);

  if (productRes.authRequired || locationsRes.authRequired) {
    return redirect("/login");
  }

  if (productRes.error) {
    throw new Response(
      productRes.error.detail?.toString() || "Could not load partner product",
      { status: 500 }
    );
  }

  if (locationsRes.error) {
    throw new Response(
      locationsRes.error.detail?.toString() || "Could not load partner locations",
      { status: 500 }
    );
  }
  console.log("proddduct")
  console.log(productRes)
  const product = productRes.data;
  if (!product) {
    throw new Response("Partner product was not found", { status: 404 });
  }

  return json({
    product,
    locations: locationsRes.data?.items ?? [],
  });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
   ;

  const productId = params.productId;
  if (!productId) {
    throw new Response("Product id is required", { status: 400 });
  }

  const formData = await request.formData();
  const dto = buildUpdateProductDto(formData);
  return await partnerServer.updatePartnerProduct(productId, dto, request);
}

export default function UpdatePartnerProduct() {
  let { product: product, locations } = useLoaderData<typeof loader>();
  product = product as PartnerProductResponse
  locations = locations as PartnerLocation[];
  const actionData = useActionData<PartnerProductResponse & { error?: any }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const [tags, setTags] = useState<string>(product.tags.join(", "));

  useEffect(() => {
    setTags(product.tags.join(", "));
  }, [product]);

  useEffect(() => {
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Update product failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not update partner product!",
      });
    }
    if (actionData) {
      toast({
        variant: "default",
        title: "Product updated",
        description: "Partner product was successfully updated!",
      });
    //   navigate("/partners/home");
    }
  }, [actionData, navigate]);

  return (
    <main className="w-full overflow-y-auto p-6 max-w-2xl mx-auto">
      <div className="flex items-center mb-10 sm:mb-16 gap-4">
        <Cta element="button" type="button" onClick={() => navigate(-1)} className="hover:bg-[#F7F7F8] text-primary px-4 py-2 rounded-lg" variant="outline">
          Back
        </Cta>
        <h1 className="text-2xl font-black text-primary">Update Partner Product</h1>
      </div>

      <Form method="post" encType="multipart/form-data" onReset={() => setTags(product.tags.join(", "))} className="grid gap-4 text-sm bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <FormControl as="input" labelText="Product Name" name="name" id="name" defaultValue={product.name} placeholder="Enter product name" />
        <FormControl as="textarea" labelText="Description" name="description" id="description" defaultValue={product.description} placeholder="Enter product description" />
        <FormControl as="input" labelText="Category" name="category" id="category" defaultValue={product.category} placeholder="e.g. Shoes" />
        <div className="grid grid-cols-2 gap-4">
          <FormControl as="input" labelText="Price Min" name="price_min" id="price_min" type="number" min={0} defaultValue={product.price_min} placeholder="0" />
          <FormControl as="input" labelText="Price Max" name="price_max" id="price_max" type="number" min={0} defaultValue={product.price_max} placeholder="0" />
        </div>
        <Select label="Currency" id="currency" name="currency" defaultValue={product.currency} required>
          <option value="NGN">NGN</option>
          <option value="USD">USD</option>
        </Select>
        <Select label="Status" id="status" name="status" defaultValue={product.status} required>
          <option value="available">Available</option>
          <option value="out_of_stock">Out of Stock</option>
          <option value="suspended">Suspended</option>
        </Select>
        <FormControl as="input" labelText="SKU" name="sku" id="sku" defaultValue={product.sku} placeholder="Stock Keeping Unit" />
        <FormControl as="input" labelText="Tags (comma separated)" name="tags" id="tags" value={tags} onChange={e => setTags(e.target.value)} placeholder="e.g. shoes, sports, men" />

        <label className="block font-bold text-sm">
          Locations
          <div className="mt-2 rounded-lg border border-secondary bg-white p-3">
            <select
              name="locations"
              id="locations"
              multiple
              defaultValue={product.locations}
              className="w-full min-h-36 rounded-md border border-gray-200 bg-transparent p-3 text-sm outline-none focus:border-accent"
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
          <span className="mt-1 block text-xs font-normal text-gray-500">
            Hold Ctrl or Cmd to select multiple locations.
          </span>
        </label>

        <div className="space-y-3">
          <div className="rounded-xl border border-gray-100 bg-slate-50 p-4">
            <div className="mb-3 text-sm font-semibold text-gray-700">Current Image</div>
            <img
              src={getImageSrc(product)}
              alt={product.name}
              className="h-56 w-full rounded-lg object-cover bg-white"
            />
          </div>
          <DragnDrop name="image" labelText="Replace Product Image" multiple={false} required={false} />
          <p className="text-xs text-gray-500">
            Leave this blank to keep the current image.
          </p>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <Cta element="button" type="reset" className="px-4 py-2 rounded-lg font-medium border-secondary active:border-accent" variant="outline">
            Reset
          </Cta>
          <Cta disabled={isSubmitting} element="button" type="submit" className="px-4 py-2 rounded-lg font-medium">
            {isSubmitting ? "Updating product..." : "Update Product"}
          </Cta>
        </div>
      </Form>
    </main>
  );
}
