import { LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { useLoaderData, Form, useNavigation } from "@remix-run/react"
import { icons } from "~/assets/icons"
import { noImage } from "~/assets/images"
import AdminCard from "~/components/admin/accounts/AdminUserCard"
import Cta from "~/components/reusables/Cta"
import FormControl from "~/components/reusables/FormControl"
import Pagination from "~/components/reusables/Pagination"
import RoundCta from "~/components/reusables/RoundCta"
import Svg from "~/components/reusables/Svg"
import ToggleBtn from "~/components/reusables/ToggleBtn"
import { adminUsers } from "~/lib/data/admin"
import { adminRepo } from "~/services/admin/admin.server"
import { partnerServer } from "~/services/partner/partner.server"

export async function loader({ request }: LoaderFunctionArgs) {
    const headings = ['full_name', 'email', 'username', 'roles', 'access'] satisfies (keyof typeof adminUsers[number])[]
    const cookieHeader = request.headers.get('Cookie') ?? '';
    if (!cookieHeader) return redirect("/login"); 
    // get paged users
    const url = new URL(request.url);
    const query: any = {};
    for (const [k, v] of url.searchParams.entries()) {
        query[k] = v;
    }
    const pagedUsersRes = await partnerServer.getPartnerProducts(query, cookieHeader)
    if(pagedUsersRes.authRequired){
      return redirect("/login");
    }
    console.log(pagedUsersRes)
    return json({  data: pagedUsersRes.data, query })
}

export default function PartnerProducts() {
    const { data, query } = useLoaderData<typeof loader>()
    const navigation = useNavigation();
    console.log(data)
    return (
        <main className='w-full overflow-y-auto p-6'>
            <div className="flex justify-between items-center mb-8 sm:mb-16">
                <h1 className="text-2xl font-black text-primary">Products</h1>
                <Cta element="link" to='/partners/add' className=" gap-2 items-center rounded-lg px-3 py-2">
                    {/* <Svg src={icons.addIcon} width={'.9em'} /> */}
                    Add Product
                </Cta>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8">
                    <Form method="get" className="w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                        <div>
                          <label className="block text-xs font-semibold mb-1">Product Price</label>
                          <input
                            type="number"
                            name="price,wildcard,status"
                            className="w-full border rounded-lg px-3 py-2"
                            placeholder="Price"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1">Name, Description or tag</label>
                          <input
                            type="text"
                            name="wildcard"
                            className="w-full border rounded-lg px-3 py-2"
                            placeholder="other fields"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1">Status</label>
                          <select
                            name="status"
                            className="w-full border rounded-lg px-3 py-2"
                          >
                            <option value="available">Available</option>
                            <option value="out_of_stock">Out of Stock</option>
                            <option value="suspended">Suspended</option>
                          </select>
                        </div>
                        <div className="sm:col-span-1 flex gap-2 mt-2 sm:mt-0">
                          <button type="submit" className="bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold">Search</button>
                        </div>
                      </div>
                    </Form>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
  {data?.items && data.items.length > 0 ? (
    data.items.map((product) => {
      // const defaultImg =  ;
      const imgSrc = product.main_image_url && product.main_image_url !== "" ? product.main_image_url : noImage;
      return (
        
        <div
          key={product._id}
          className="flex flex-col bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden h-full min-h-[340px]"
        >
          <div className="h-40 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={imgSrc}
              alt={product.name}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col flex-1 p-4 gap-2">
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-base text-primary line-clamp-1">{product.name}</span>
              <span className="text-xs px-2 py-1 rounded bg-gray-50 border border-gray-200 font-semibold capitalize">{product.status.replace(/_/g, ' ')}</span>
            </div>
            <div className="text-sm text-gray-500 line-clamp-2 mb-1">{product.description}</div>
            <div className="flex items-center gap-2 text-lg font-bold text-accent">
              {product.currency} {product.price_min}
              {product.price_max && product.price_max !== product.price_min ? (
                <span className="text-gray-400 font-normal text-base">- {product.currency} {product.price_max}</span>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {product.tags && product.tags.length > 0 && product.tags.map(tag => (
                <span key={tag} className="bg-indigo-50 text-indigo-600 text-xs px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between pt-2">
              <span className="text-xs text-gray-400">{product.category}</span>
                        <div className="flex items-center gap-2">
                          {product.sku && <span className="text-xs text-gray-400">SKU: {product.sku}</span>}
                          <Cta element="link" to={`/partners/product/update/${product._id}`} className="px-3 py-1 rounded-md text-xs font-semibold border-secondary" variant="outline">
                            Edit
                          </Cta>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center text-gray-400 py-12">No products found.</div>
            )}
          </div>
          <div className=" sm:flex justify-between items-center my-4">
                         
                          <Pagination lastKey={query?.last_key_id} pageSize={query?.items_per_page} firstKey={query?.first_key_id} />
                      </div>
        </main>
    )
}
