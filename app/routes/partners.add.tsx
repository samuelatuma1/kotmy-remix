import { ActionFunctionArgs, redirect, json } from "@remix-run/node";
import { Form, useActionData, useNavigate, useNavigation } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { partnerServer } from "~/services/partner/partner.server";
import type { ICreatePartnerProductDTO, PartnerProductResponse, WalletCurrency, PartnerProductStatus } from "~/services/partner/types/partner.interface";
import { toast } from "~/components/reusables/use-toast";
import Cta from "~/components/reusables/Cta";
import FormControl from "~/components/reusables/FormControl";
import Select from "~/components/reusables/Select";
import DragnDrop from "~/components/public/contests/DragnDrop";

export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader) return redirect("/login");
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
    tags: formData.getAll("tags").map(t => t.toString()),
    image: formData.get("image") as File,
  };
  const response = await partnerServer.addPartnerProduct(dto, cookieHeader);
  return response;
}

export default function AddPartnerProduct() {
  const actionData = useActionData<PartnerProductResponse & { error?: any }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const [tags, setTags] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Add product failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not add partner product!",
      });
    }
    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Product added",
        description: "Partner product was successfully added!",
      });
      navigate("/admin/partners");
    }
  }, [actionData, navigate]);

  return (
    <main className="w-full overflow-y-auto p-6 max-w-2xl mx-auto">
      <div className="flex items-center mb-10 sm:mb-16 gap-4">
        <Cta element="button" type="button" onClick={() => navigate(-1)} className="hover:bg-[#F7F7F8] text-primary px-4 py-2 rounded-lg" variant="outline">
          Back
        </Cta>
        <h1 className="text-2xl font-black text-primary">Add Partner Product</h1>
      </div>
      <Form method="post" encType="multipart/form-data" className="grid gap-4 text-sm bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <FormControl as="input" labelText="Product Name" name="name" id="name" required placeholder="Enter product name" />
        <FormControl as="textarea" labelText="Description" name="description" id="description" required placeholder="Enter product description" />
        <FormControl as="input" labelText="Category" name="category" id="category" placeholder="e.g. Shoes" />
        <div className="grid grid-cols-2 gap-4">
          <FormControl as="input" labelText="Price Min" name="price_min" id="price_min" type="number" min={0} required placeholder="0" />
          <FormControl as="input" labelText="Price Max" name="price_max" id="price_max" type="number" min={0} required placeholder="0" />
        </div>
        <Select label="Currency" id="currency" name="currency" defaultValue="NGN" required>
          <option value="NGN">NGN</option>
          <option value="USD">USD</option>
        </Select>
        <Select label="Status" id="status" name="status" defaultValue="available" required>
          <option value="available">Available</option>
          <option value="out_of_stock">Out of Stock</option>
          <option value="suspended">Suspended</option>
        </Select>
        <FormControl as="input" labelText="SKU" name="sku" id="sku" placeholder="Stock Keeping Unit" />
        <FormControl as="input" labelText="Tags (comma separated)" name="tags" id="tags" value={tags} onChange={e => setTags(e.target.value)} placeholder="e.g. shoes, sports, men" />
        <div>
          {/* <label className="block text-sm font-semibold text-gray-700 mb-2">Product Image</label> */}
          <DragnDrop name="image" labelText="Product Image" multiple={false} required={false} />
          {/* <input ref={fileInputRef} type="file" name="image" accept="image/*" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#EEF0FF] file:text-accent" required /> */}
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <Cta element="button" type="reset" className="px-4 py-2 rounded-lg font-medium border-secondary active:border-accent" variant="outline">Reset</Cta>
          <Cta disabled={isSubmitting} element="button" type="submit" className="px-4 py-2 rounded-lg font-medium">{isSubmitting ? "Adding product..." : "Add Product"}</Cta>
        </div>
      </Form>
    </main>
  );
}
