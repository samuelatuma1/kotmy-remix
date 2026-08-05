import { LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { useLoaderData, Form, useNavigation } from "@remix-run/react"
import { icons } from "~/assets/icons"
import { noImage } from "~/assets/images"
import Cta from "~/components/reusables/Cta"
import Pagination from "~/components/reusables/Pagination"
import Svg from "~/components/reusables/Svg"
import { adminUsers } from "~/lib/data/admin"
import { requireAuth } from "~/lib/session.server"
import { partnerServer } from "~/services/partner/partner.server"

export async function loader({ request }: LoaderFunctionArgs) {
    const validateAuth = await requireAuth(request);;
     ; 
    // get paged users
    const url = new URL(request.url);
    const query: any = {};
    for (const [k, v] of url.searchParams.entries()) {
        query[k] = v;
    }
    const pagedUsersRes = await partnerServer.getPartnerLocations(query, request)
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
                <Cta element="link" to='/partners/add' className="hidden sm:flex gap-2 items-center rounded-lg px-3 py-2">
                    <Svg src={icons.addIcon} width={'.9em'} />
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
      const imgSrc = noImage;
      return (
        <div className="my-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
      <div className="flex items-start gap-2">
        <div className="mt-1 text-indigo-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-700">{product.name}</span>
          <span className="text-[11px] text-gray-500">{product.city}, {product.state_name}</span>
        </div>
      </div>
      
      {/* Dynamic Directions Button */}
      <a 
        href={`https://www.google.com/maps/dir/?api=1&destination=${product.latitude},${product.longitude}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex items-center justify-center gap-1 w-full py-1.5 bg-white border border-indigo-100 text-indigo-600 text-xs font-bold rounded-md hover:bg-indigo-50 transition-colors"
      >
        Get Directions
      </a>
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