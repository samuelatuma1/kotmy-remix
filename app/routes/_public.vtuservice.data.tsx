import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

import { icons } from "~/assets/icons";
import Svg from "~/components/reusables/Svg";
import { toast } from "~/components/reusables/use-toast";
import { useUserManager } from "~/lib/store/store_managers/tokenManager";
import { formatAmount, getErrorMessage, isValidNigerianPhoneNumber, normalizePhoneNumber } from "~/lib/utils";
import { vtuServer } from "~/services/vtu/vtu.server";
import type { VTUDataCategoryResponse, VTUDataPlansDTO, VTUProduct } from "~/services/vtu/types/vtu.interface";

export async function loader({ request }: LoaderFunctionArgs) {
  const phoneNumber = normalizePhoneNumber(new URL(request.url).searchParams.get("phone_number") ?? "");

  return json({ phoneNumber, plans: null, error: null });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = String(formData.get("intent") ?? "search_data_plans");

  if (intent !== "search_data_plans") {
    return json({ intent, plans: null, error: "Unsupported data-plan action." }, { status: 400 });
  }

  const phoneNumber = normalizePhoneNumber(String(formData.get("phone_number") ?? ""));

  if (!isValidNigerianPhoneNumber(phoneNumber)) {
    return json({ intent, phoneNumber, plans: null, error: "Enter a valid Nigerian phone number." }, { status: 400 });
  }

  const response = await vtuServer.searchDataPlans({ phone_number: phoneNumber }, request);

  if (response.error) {
    return json({ intent, phoneNumber, plans: null, error: getErrorMessage(response.error, "Unable to load data plans.") }, { status: 400 });
  }

  return json({ intent, phoneNumber, plans: response.data ?? null, error: null });
}

function NetworkLogo({ network }: { network: string }) {
  const networkKey = network.toLowerCase().replace(/\s+/g, "");
  const networkIcons: Record<string, string> = {
    mtn: icons.mtnIcon,
    glo: icons.gloIcon,
    airtel: icons.airtelIcon,
    "9mobile": icons.nineMobileIcon,
    etisalat: icons.nineMobileIcon,
  };

  return <Svg aria-label={`${network} network`} className="h-14 w-14" role="img" src={networkIcons[networkKey] ?? icons.dataIcon} />;
}

function DataSkeleton() {
  return (
    <div aria-hidden="true" className="animate-pulse space-y-5">
      <div className="h-28 rounded-[1.5rem] bg-slate-200" />
      <div className="h-14 rounded-2xl bg-slate-200" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => <div className="h-40 rounded-[1.5rem] bg-slate-200" key={item} />)}
      </div>
    </div>
  );
}

function DataPlanCard({ plan }: { plan: VTUProduct }) {
  return (
    <button
      className="group rounded-[1.5rem] border border-brand-grey bg-white p-5 text-left shadow-[0_12px_36px_rgba(14,42,77,0.06)] transition hover:-translate-y-1 hover:border-brand-pink hover:shadow-[0_18px_44px_rgba(14,42,77,0.12)]"
      onClick={() => undefined}
      type="button"
    >
      <p className="text-2xl font-black text-brand-navy">{formatAmount(plan.size)}{plan.size_unit}</p>
      <p className="mt-2 text-sm font-semibold text-brand-slate">Valid for {plan.validity} {plan.validity_unit}</p>
      <p className="mt-5 border-t border-slate-100 pt-4 text-lg font-black text-brand-pink">
        {plan.retail_price_currency}{formatAmount(plan.retail_price)}
      </p>
    </button>
  );
}

function DataPlans({ plans }: { plans: VTUDataPlansDTO }) {
  const categories = plans.categories ?? [];
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.category_id ?? "");

  useEffect(() => {
    setActiveCategoryId(categories[0]?.category_id ?? "");
  }, [plans]);

  const activeCategory: VTUDataCategoryResponse | undefined = categories.find((category) => category.category_id === activeCategoryId) ?? categories[0];
  const activePlans = activeCategory?.plans ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-[1.5rem] border border-brand-grey bg-secondary p-5">
        <NetworkLogo network={plans.network} />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-slate">Available network</p>
          <h2 className="mt-1 text-2xl font-black text-brand-navy">{plans.network}</h2>
        </div>
      </div>

      {categories.length > 0 ? (
        <>
          <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Data plan categories">
            {categories.map((category) => {
              const isActive = category.category_id === activeCategory?.category_id;

              return (
                <button
                  aria-selected={isActive}
                  className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition ${isActive ? "bg-brand-pink text-white" : "bg-secondary text-brand-navy hover:bg-brand-pink/10"}`}
                  key={category.category_id}
                  onClick={() => setActiveCategoryId(category.category_id)}
                  role="tab"
                  type="button"
                >
                  {category.category_name}
                </button>
              );
            })}
          </div>

          {activePlans.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {activePlans.map((plan) => <DataPlanCard key={plan.str_id} plan={plan} />)}
            </div>
          ) : (
            <p className="rounded-2xl bg-secondary p-5 text-sm text-brand-slate">No data plans are available in this category.</p>
          )}
        </>
      ) : (
        <p className="rounded-2xl bg-secondary p-5 text-sm text-brand-slate">No data plan categories are available for this number.</p>
      )}
    </div>
  );
}

export function useDataController() {
  const initialData = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();
  const { getUserStoreManager } = useUserManager();
  const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber);

  useEffect(() => {
    const user = getUserStoreManager();
    if (user?.phone) setPhoneNumber(normalizePhoneNumber(user.phone));
  }, []);

  useEffect(() => {
    if (fetcher.data?.error) {
      toast({
        variant: "destructive",
        title: "Data plans unavailable",
        description: fetcher.data.error,
      });
    }
  }, [fetcher.data?.error]);

  const hasValidPhoneNumber = isValidNigerianPhoneNumber(normalizePhoneNumber(phoneNumber));
  const plans = hasValidPhoneNumber && fetcher.data && "plans" in fetcher.data ? fetcher.data.plans : null;

  return {
    fetcher,
    phoneNumber,
    setPhoneNumber: (value: string) => setPhoneNumber(normalizePhoneNumber(value)),
    plans,
    hasValidPhoneNumber,
    isLoading: fetcher.state !== "idle",
  };
}

export default function DataPage() {
  const { fetcher, phoneNumber, setPhoneNumber, plans, hasValidPhoneNumber, isLoading } = useDataController();

  return (
    <main className="grow min-w-0 overflow-x-hidden bg-white text-brand-navy">
      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mb-8 flex items-start gap-4 sm:mb-10">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-brand-pink/10 text-brand-pink">
            <Svg aria-label="Data" className="h-10 w-10" role="img" src={icons.dataIcon} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-pink">VTUload</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Buy data</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-brand-navy/70 sm:text-base">Enter a phone number to see the data plans available on its network.</p>
          </div>
        </div>

        <fetcher.Form method="post">
          <section className="mb-8 rounded-[1.75rem] border border-brand-grey bg-white p-5 shadow-[0_16px_48px_rgba(14,42,77,0.08)] sm:mb-10 sm:p-7">
            <input name="intent" type="hidden" value="search_data_plans" />
            <label className="block text-sm font-bold text-brand-navy" htmlFor="data_phone_number">Phone number</label>
            <input autoComplete="tel" className="mt-3 h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-lg font-semibold outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white" id="data_phone_number" inputMode="numeric" name="phone_number" onChange={(event) => setPhoneNumber(event.target.value)} placeholder="080 1234 5678" type="tel" value={phoneNumber} />
            <p className="mt-3 text-xs leading-5 text-brand-slate">Use an 11-digit Nigerian number starting with 0 or a 13-digit number starting with 234.</p>
            <button className="mt-5 h-14 w-full rounded-2xl bg-brand-pink px-6 font-bold text-white transition hover:bg-brand-pink/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60" disabled={!hasValidPhoneNumber || isLoading} type="submit">
              {isLoading ? "Loading data plans…" : "Get Data Plans"}
            </button>
          </section>
        </fetcher.Form>

        {isLoading ? <DataSkeleton /> : plans ? <DataPlans plans={plans} /> : <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-secondary px-5 py-12 text-center"><p className="text-lg font-bold text-brand-navy">Your data plans will appear here</p><p className="mt-2 text-sm text-brand-slate">Enter a valid phone number to continue.</p></div>}
      </section>
    </main>
  );
}
