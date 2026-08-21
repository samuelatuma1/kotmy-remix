import { ActionFunctionArgs, json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigation, useNavigate, Link } from "@remix-run/react";
import { icons } from "~/assets/icons";
import Cta from "~/components/reusables/Cta";
import FormControl from "~/components/reusables/FormControl";
import RoundCta from "~/components/reusables/RoundCta";
import Select from "~/components/reusables/Select";
import { requireAuth, setToast } from "~/lib/session.server";
import { partnerServer } from "~/services/partner/partner.server";
import type { Business, BusinessStatus, IBusinessOwnerModel, IUpdateBusinessStatus } from "~/services/partner/types/partner.interface";

const statusColors: Record<string, string> = {
  Approved: "text-green-600 bg-green-50 border-green-200",
  Pending: "text-yellow-600 bg-yellow-50 border-yellow-200",
  PendingVerification: "text-blue-600 bg-blue-50 border-blue-200",
  Trial: "text-indigo-600 bg-indigo-50 border-indigo-200",
  Suspended: "text-red-600 bg-red-50 border-red-200",
  PendingSettlementDisbursement: "text-purple-600 bg-purple-50 border-purple-200",
  Rejected: "text-red-600 bg-red-50 border-red-200",
};

const statusOptions: BusinessStatus[] = [
  "Pending",
  "PendingVerification",
  "Trial",
  "Approved",
  "Suspended",
  "PendingSettlementDisbursement",
  "Rejected",
];

function prettyStatus(status: string) {
  return status.replace(/([A-Z])/g, " $1").trim();
}

function parseReferralPercentage(value: FormDataEntryValue | null): number | null {
  if (!value) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  const validateAuth = await requireAuth(request);

  const id = params.id ?? "";
  if (!id) {
    const { headers } = await setToast({ request, toast: `error::Missing partner id::${Date.now()}` });
    return redirect("/admin/partners", { headers });
  }

  const response = await partnerServer.getBusinessDetails(id, request);
  if (response.authRequired) return redirect("/login");
  if (response.error || !response.data) {
    const { headers } = await setToast({
      request,
      toast: `error::${response.error?.detail?.toString() ?? "Could not load business details"}::${Date.now()}`,
    });
    return redirect("/admin/partners", { headers });
  }

  return json({ business: response.data });
}

export async function action({ params, request }: ActionFunctionArgs) {
  const validateAuth = await requireAuth(request);
   ;

  const id = params.id ?? "";
  const formData = await request.formData();
  const intent = formData.get("intent")?.toString();

  if (!id || !intent) {
    const { headers } = await setToast({ request, toast: `error::Invalid business request::${Date.now()}` });
    return redirect(`/admin/partners/details/${id}`, { headers });
  }

  if (intent === "update_status") {
    const dto: IUpdateBusinessStatus = {
      business_id: formData.get("business_id")?.toString() || id,
      status: (formData.get("status")?.toString() || undefined) as BusinessStatus | undefined,
      updated_by: formData.get("updated_by")?.toString() || "",
      reason: formData.get("reason")?.toString() || undefined,
      referral_percentage: parseReferralPercentage(formData.get("referral_percentage")),
    };
    const response = await partnerServer.updateBusinessStatus(dto, request);
    if (response.authRequired) return redirect("/login");
    if (response.error) {
      const { headers } = await setToast({
        request,
        toast: `error::${response.error.detail?.toString() ?? "Could not update business"}::${Date.now()}`,
      });
      return redirect(`/admin/partners/details/${id}`, { headers });
    }
    const { headers } = await setToast({
      request,
      toast: `success::Business updated successfully::${Date.now()}`,
    });
    return redirect(`/admin/partners/details/${id}`, { headers });
  } else if (intent === "add_owner") {
    const dto: IBusinessOwnerModel = {
      business_id: formData.get("business_id")?.toString() || id,
      first_name: formData.get("first_name")?.toString() ?? "",
      last_name: formData.get("last_name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      alternate_phone: formData.get("alternate_phone")?.toString() ?? "",
      password: formData.get("password")?.toString() ?? "",
    };
    const response = await partnerServer.addBusinessOwner(dto, request);
    if (response.authRequired) return redirect("/login");
    if (response.error) {
      const { headers } = await setToast({
        request,
        toast: `error::${response.error.detail?.toString() ?? "Could not update business"}::${Date.now()}`,
      });
      return redirect(`/admin/partners/details/${id}`, { headers });
    }
    const { headers } = await setToast({
      request,
      toast: `success::Business updated successfully::${Date.now()}`,
    });
    return redirect(`/admin/partners/details/${id}`, { headers });
  } else {
    const { headers } = await setToast({ request, toast: `error::Unsupported action::${Date.now()}` });
    return redirect(`/admin/partners/details/${id}`, { headers });
  }
}

function DetailCard({ label, value }: { label: string; value?: string | number | null }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</div>
      <div className="mt-2 text-sm font-semibold text-gray-900">{value ?? "—"}</div>
    </div>
  );
}

function DetailCardWithLink({ label, value, link }: { label: string; value?: string | number | null, link: string }) {
  return (
    <Link to={link}>
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</div>
        <div className="mt-2 text-sm font-semibold text-gray-900">{value ?? "—"}</div>
      </div>
    </Link>
    
  );
}

export default function PartnerDetailsPage() {
  const { business } = useLoaderData<typeof loader>() as { business: Business };
  console.log("Business details:", business);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  return (
    <main className="w-full overflow-y-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <RoundCta icon={icons.arrowPrevIcon} className="hover:bg-[#F7F7F8] text-primary" onClick={() => navigate(-1)} />
        <div>
          <h1 className="text-2xl font-black text-primary">{business.legal_business_name}</h1>
          <p className="text-sm text-gray-500 mt-1">Business details and admin controls</p>
        </div>
      </div>

      <section className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="grid gap-4">
          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Business status</div>
                <span className={`mt-2 inline-flex px-3 py-1.5 rounded-full border text-xs font-semibold ${statusColors[business.status] || "text-gray-600 bg-gray-100 border-gray-200"}`}>
                  {prettyStatus(business.status)}
                </span>
              </div>
              {/* <div className="flex flex-wrap gap-2">
                <Form method="post">
                  <input type="hidden" name="intent" value="update_status" />
                  <input type="hidden" name="business_id" value={business._id} />
                  <input type="hidden" name="status" value="Approved" />
                  <input type="hidden" name="reason" value="Approved from business details page" />
                  <button disabled={isSubmitting} className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold text-sm disabled:opacity-60">
                    Approve
                  </button>
                </Form>
                <Form method="post">
                  <input type="hidden" name="intent" value="update_status" />
                  <input type="hidden" name="business_id" value={business._id} />
                  <input type="hidden" name="status" value="Rejected" />
                  <input type="hidden" name="reason" value="Rejected from business details page" />
                  <button disabled={isSubmitting} className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold text-sm disabled:opacity-60">
                    Reject
                  </button>
                </Form>
              </div> */}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
              <DetailCard label="Business Email" value={business.business_email} />
              <DetailCard label="Phone" value={business.phone_number} />
              <DetailCard label="Industry" value={business.industry} />
              <DetailCard label="Country" value={business.country_of_incorporation} />
              <DetailCard label="Referral %" value={business.referral_percentage} />
              <DetailCard label="Owner ID" value={business.owner_id || "Not set"} />
              <DetailCardWithLink label="Partner Settlements" value={business._id} link={`/admin/partners/settlements/?business_id=${business._id}`} />
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6">
            <h2 className="text-lg font-bold text-primary">Business information</h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
              <DetailCard label="Legal Name" value={business.legal_business_name} />
              <DetailCard label="ROC / CAC Number" value={business.roc_cac_number} />
              <DetailCard label="Tax ID" value={business.tax_id} />
              <DetailCard label="Website" value={business.website} />
              <div className="sm:col-span-2 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Description</div>
                <p className="mt-2 text-sm leading-6 text-gray-700 whitespace-pre-wrap">{business.business_description || "—"}</p>
              </div>
              <div className="sm:col-span-2 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Notes</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {business.notes?.length ? business.notes.map((note, index) => (
                    <span key={`${note}-${index}`} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-700">
                      {note}
                    </span>
                  )) : <span className="text-sm text-gray-500">No notes available</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6">
            <h2 className="text-lg font-bold text-primary">Contact person</h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <DetailCard label="Name" value={business.contact_person?.name} />
              <DetailCard label="Email" value={business.contact_person?.email} />
              <DetailCard label="Phone" value={business.contact_person?.phone} />
              <DetailCard label="Country" value={business.contact_person?.country} />
            </div>
          </div>

          {business.owner && (
            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6">
              <h2 className="text-lg font-bold text-primary">Business owner</h2>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <DetailCard label="Owner ID" value={business.owner._id || business.owner.str_id} />
                <DetailCard label="Full Name" value={business.owner.full_name || business.owner.fullName || (business.owner.user_profile ? `${business.owner.user_profile.first_name} ${business.owner.user_profile.last_name}`.trim() : null)} />
                <DetailCard label="Email" value={business.owner.email} />
                <DetailCard label="Status" value={business.owner.user_profile?.status} />
              </div>
            </div>
          )}

          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6">
            <h2 className="text-lg font-bold text-primary">Business locations</h2>
            <div className="grid gap-3 mt-4">
              {business.business_locations?.length ? business.business_locations.map((location, index) => (
                <div key={`${location.street}-${index}`} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm">
                  <div className="font-semibold text-gray-900">{location.street}</div>
                  <div className="text-gray-600 mt-1">
                    {location.city}, {location.state}, {location.country}
                  </div>
                </div>
              )) : <div className="text-sm text-gray-500">No business locations available</div>}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6">
            <h2 className="text-lg font-bold text-primary">Status history</h2>
            <div className="mt-4 grid gap-3">
              {business.status_history?.length ? business.status_history.map((entry, index) => (
                <div key={`${entry.updated_on}-${index}`} className="rounded-2xl border border-gray-100 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`inline-flex px-2.5 py-1 rounded-full border text-xs font-semibold ${statusColors[entry.status] || "text-gray-600 bg-gray-100 border-gray-200"}`}>
                      {prettyStatus(entry.status)}
                    </span>
                    <span className="text-xs text-gray-400">{new Date(entry.updated_on).toLocaleString()}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <div><span className="font-semibold">Updated by:</span> {entry.updated_by || "—"}</div>
                    <div><span className="font-semibold">Reason:</span> {entry.reason || "—"}</div>
                  </div>
                </div>
              )) : <div className="text-sm text-gray-500">No status history available</div>}
            </div>
          </div>
        </div>

        <aside className="grid gap-4">
          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6">
            <h2 className="text-lg font-bold text-primary">Update status</h2>
            <Form method="post" className="grid gap-4 mt-4">
              <input type="hidden" name="intent" value="update_status" />
              <input type="hidden" name="business_id" value={business._id} />
              <input type="hidden" name="updated_by" value="" />
              <Select label="Status" name="status" defaultValue={business.status} required>
                {statusOptions.map((status) => (
                  <option key={status} value={status}>{prettyStatus(status)}</option>
                ))}
              </Select>
              <FormControl as="input" labelText="Referral Percentage" name="referral_percentage" type="number" min={0} max={100} step="0.01" placeholder="Optional" />
              <FormControl as="textarea" labelText="Reason" name="reason" placeholder="Optional reason for change" />
              <Cta element="button" type="submit" disabled={isSubmitting} className="px-4 py-2 rounded-lg font-semibold">
                {isSubmitting ? "Updating..." : "Update status"}
              </Cta>
            </Form>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6">
            <h2 className="text-lg font-bold text-primary">Add business owner</h2>
            <Form method="post" className="grid gap-4 mt-4">
              <input type="hidden" name="intent" value="add_owner" />
              <input type="hidden" name="business_id" value={business._id} />
              <div className="grid sm:grid-cols-2 gap-4">
                <FormControl as="input" labelText="First Name" name="first_name" required placeholder="First name" />
                <FormControl as="input" labelText="Last Name" name="last_name" required placeholder="Last name" />
                <FormControl as="input" labelText="Email" name="email" type="email" required placeholder="Owner email" />
                <FormControl as="input" labelText="Phone" name="phone" type="tel" required placeholder="Phone number" />
                <FormControl as="input" labelText="Alternate Phone" name="alternate_phone" type="tel" required placeholder="Alternate phone" />
                <FormControl as="input" labelText="Password" name="password" type="password" required placeholder="Temporary password" />
              </div>
              <Cta element="button" type="submit" disabled={isSubmitting} className="px-4 py-2 rounded-lg font-semibold">
                {isSubmitting ? "Saving..." : "Add owner"}
              </Cta>
            </Form>
          </div>
        </aside>
      </section>
    </main>
  );
}
