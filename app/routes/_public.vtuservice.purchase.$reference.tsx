import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { useEffect } from "react";

import { toast } from "~/components/reusables/use-toast";
import { formatAmount, getErrorMessage } from "~/lib/utils";
import { vtuServer } from "~/services/vtu/vtu.server";
import { VTUType } from "~/services/vtu/types/vtu.interface";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const reference = params.reference?.trim() ?? "";

  if (!reference) {
    return json({ purchase: null, error: "Purchase reference is missing." }, { status: 400 });
  }

  const response = await vtuServer.getVTUPurchaseByReference(reference, request);

  if (response.error || !response.data) {
    return json({ purchase: null, error: getErrorMessage(response.error, "Unable to load this VTU purchase.") }, { status: 400 });
  }

  return json({ purchase: response.data, error: null });
}

function PurchaseSkeleton() {
  return (
    <div aria-hidden="true" className="animate-pulse space-y-4">
      <div className="h-44 rounded-[2rem] bg-slate-200" />
      <div className="h-72 rounded-[2rem] bg-slate-200" />
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  return <span className="inline-flex rounded-full bg-brand-pink/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-pink">{status.replaceAll("_", " ")}</span>;
}

export default function VTUPurchaseReferencePage() {
  const data = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  useEffect(() => {
    if (data.error) {
      toast({
        variant: "destructive",
        title: "Unable to load purchase",
        description: data.error,
      });
    }
  }, [data.error]);

  if (navigation.state !== "idle") {
    return <main className="grow bg-white px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><PurchaseSkeleton /></div></main>;
  }

  if (!data.purchase) {
    return (
      <main className="grow bg-white px-4 py-16 text-center text-brand-navy">
        <h1 className="text-2xl font-black">Purchase details unavailable</h1>
        <p className="mt-3 text-sm text-slate-500">We could not find the requested VTU purchase.</p>
      </main>
    );
  }

  const purchase = data.purchase;
  const isAirtime = purchase.type === VTUType.AIRTIME || purchase.type.toLowerCase() === VTUType.AIRTIME.toLowerCase();

  return (
    <main className="grow bg-white px-4 py-10 text-brand-navy sm:px-6 sm:py-16 lg:px-8">
      <section className="mx-auto max-w-3xl space-y-6">
        <header className="rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_18px_60px_rgba(14,42,77,0.16)] sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">VTU purchase</p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">Purchase details</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3"><StatusBadge status={purchase.status} /><span className="break-all text-sm text-white/75">{purchase.reference}</span></div>
        </header>

        <section className="rounded-[2rem] border border-brand-grey bg-white p-6 shadow-[0_16px_48px_rgba(14,42,77,0.08)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {purchase.description && <div className="sm:col-span-2"><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Description</p><p className="mt-1 font-bold">{purchase.description}</p></div>}
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Network</p><p className="mt-1 font-bold">{purchase.network ?? "—"}</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Type</p><p className="mt-1 font-bold">{purchase.type}</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Phone number</p><p className="mt-1 font-bold">{purchase.phone_number}</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Currency</p><p className="mt-1 font-bold">{purchase.currency}</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Discounted amount</p><p className="mt-1 font-bold">{purchase.currency}{formatAmount(purchase.discounted_retail_amount)}</p></div>
            {isAirtime && <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Original airtime amount</p><p className="mt-1 font-bold">{purchase.currency}{formatAmount(purchase.original_retail_amount)}</p></div>}
          </div>
          {purchase.failure_reason && <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4"><p className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">Failure reason</p><p className="mt-2 text-sm font-semibold text-red-700">{purchase.failure_reason}</p></div>}
        </section>
      </section>
    </main>
  );
}
