import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation, Form } from "@remix-run/react";
import { useState } from "react";
import Pagination from "~/components/reusables/Pagination";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { partnerServer } from "~/services/partner/partner.server";
import type { Business, BusinessQuery } from "~/services/partner/types/partner.interface";

const statusColors: Record<string, string> = {
  Approved: "text-green-600 bg-green-50 border-green-200",
  Pending: "text-yellow-600 bg-yellow-50 border-yellow-200",
  Rejected: "text-red-600 bg-red-50 border-red-200",
};

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader) return json({ redirect: "/login" }, { status: 302 });
  const url = new URL(request.url);
  const query: BusinessQuery = {};
  for (const [k, v] of url.searchParams.entries()) {
    if (v) query[k as keyof BusinessQuery] = v as any;
  }
  const partnersRes = await partnerServer.searchPartners(query, cookieHeader);
  return json({ partnersRes: partnersRes.data ?? { items: [], items_per_page: 20 }, query });
}
export default function PartnersIndex() {
  const data = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const [search, setSearch] = useState((data as any).query?.legal_business_name || "");

  // Handle redirect if present in loader data
  if ("redirect" in data && typeof window !== "undefined") {
    window.location.href = data.redirect;
    return null;
  }
  const { partnersRes, query } = data as { partnersRes: IPaginatedResponse<Business>; query: BusinessQuery };

  return (
    <main className="w-full overflow-y-auto p-6">
      <div className="flex justify-between items-center mb-8 sm:mb-16">
        <h1 className="text-2xl font-black text-primary">Partners</h1>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8">
        <Form method="get" className="w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
            <div>
              <label className="block text-xs font-semibold mb-1">Business Name</label>
              <input
                type="text"
                name="legal_business_name"
                className="w-full border rounded-lg px-3 py-2"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by business name"
              />
            </div>
            <div className="sm:col-span-1 flex gap-2 mt-2 sm:mt-0">
              <button type="submit" className="bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold">Search</button>
            </div>
          </div>
        </Form>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="sm:hidden grid gap-4 my-6">
        {partnersRes.items && partnersRes.items.length > 0 ? (
          partnersRes.items.map((partner: Business) => (
            <div key={partner._id} className="rounded-xl border border-gray-100 bg-white shadow-sm p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-base text-primary">{partner.legal_business_name}</span>
                <span className={`inline-block px-2 py-1 rounded-lg border text-xs font-semibold ${statusColors[partner.status] || "text-gray-600 bg-gray-100 border-gray-200"}`}>{partner.status}</span>
              </div>
              <div className="text-xs text-gray-500">{partner.industry}</div>
              <div className="flex flex-col gap-1 mt-2">
                <div><span className="font-semibold">Country:</span> {partner.country_of_incorporation}</div>
                <div><span className="font-semibold">Phone:</span> {partner.phone_number}</div>
                <div><span className="font-semibold">Contact:</span> {partner.contact_person?.name} ({partner.contact_person?.email})</div>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex-1">Approve</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-semibold flex-1">Reject</button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-400">No partners found.</div>
        )}
      </div>

      {/* DESKTOP TABLE VIEW */}
      <div className="hidden sm:block w-full overflow-x-auto">
        <table className="w-full table-auto border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500">
              <th className="px-4 py-2 text-left">Business Name</th>
              <th className="px-4 py-2 text-left">Country</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Industry</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Contact Person</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partnersRes.items && partnersRes.items.length > 0 ? (
              partnersRes.items.map((partner: Business) => (
                <tr key={partner._id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">{partner.legal_business_name}</td>
                  <td className="px-4 py-3">{partner.country_of_incorporation}</td>
                  <td className="px-4 py-3">{partner.phone_number}</td>
                  <td className="px-4 py-3">{partner.industry}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 rounded-lg border text-xs font-semibold ${statusColors[partner.status] || "text-gray-600 bg-gray-100 border-gray-200"}`}>{partner.status}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-xs">
                      <div className="font-semibold">{partner.contact_person?.name}</div>
                      <div>{partner.contact_person?.email}</div>
                      <div>{partner.contact_person?.phone}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold mr-2">Approve</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-semibold">Reject</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={7} className="text-center py-8 text-gray-400">No partners found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="sm:block w-full">
        <Pagination lastKey={partnersRes?.last_key_id} pageSize={partnersRes?.items_per_page} firstKey={partnersRes?.first_key_id} />
      </div>
    </main>
  );
}
export  function _PartnersIndex() {
  const { partnersRes, query } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const [search, setSearch] = useState(query.legal_business_name || "");

  return (
    <main className="w-full overflow-y-auto p-6">
      <div className="flex justify-between items-center mb-8 sm:mb-16">
        <h1 className="text-2xl font-black text-primary">Partners</h1>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8">
        <Form method="get" className="w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
            <div>
              <label className="block text-xs font-semibold mb-1">Business Name</label>
              <input
                type="text"
                name="legal_business_name"
                className="w-full border rounded-lg px-3 py-2"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by business name"
              />
            </div>
            {/* Add more search fields as needed */}
            <div className="sm:col-span-1 flex gap-2 mt-2 sm:mt-0">
              <button type="submit" className="bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold">Search</button>
            </div>
          </div>
        </Form>
      </div>
      <div className="hidden sm:block w-full overflow-x-auto">
        <table className="w-full table-auto border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500">
              <th className="px-4 py-2 text-left">Business Name</th>
              <th className="px-4 py-2 text-left">Country</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Industry</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Contact Person</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partnersRes.items && partnersRes.items.length > 0 ? (
              partnersRes.items.map((partner: Business) => (
                <tr key={partner._id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">{partner.legal_business_name}</td>
                  <td className="px-4 py-3">{partner.country_of_incorporation}</td>
                  <td className="px-4 py-3">{partner.phone_number}</td>
                  <td className="px-4 py-3">{partner.industry}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 rounded-lg border text-xs font-semibold ${statusColors[partner.status] || "text-gray-600 bg-gray-100 border-gray-200"}`}>
                      {partner.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-xs">
                      <div className="font-semibold">{partner.contact_person?.name}</div>
                      <div>{partner.contact_person?.email}</div>
                      <div>{partner.contact_person?.phone}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {/* Approve/Reject actions can go here */}
                    <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold mr-2">Approve</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-semibold">Reject</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={7} className="text-center py-8 text-gray-400">No partners found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="sm:block w-full">
        <Pagination lastKey={partnersRes?.last_key_id} pageSize={partnersRes?.items_per_page} firstKey={partnersRes?.first_key_id} />
      </div>
    </main>
  );
}