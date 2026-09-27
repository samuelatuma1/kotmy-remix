import { json, redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";

import { toast } from "~/components/reusables/use-toast";

export async function loader({ request }: LoaderFunctionArgs) {
  const reference = new URL(request.url).searchParams.get("tx_ref")?.trim();

  if (!reference) {
    return json({ error: "Payment reference is missing." }, { status: 400 });
  }

  return redirect(`/vtuservice/vtupurchase/${encodeURIComponent(reference)}`);
}

export default function ProviderPaymentRedirectPage() {
  const data = useLoaderData<typeof loader>();

  useEffect(() => {
    if (data.error) {
      toast({
        variant: "destructive",
        title: "Payment reference missing",
        description: data.error,
      });
    }
  }, [data.error]);

  return (
    <main className="grow bg-white px-4 py-16 text-center text-brand-navy sm:px-6">
      <div className="mx-auto max-w-lg rounded-[2rem] border border-brand-grey bg-white p-8 shadow-[0_16px_48px_rgba(14,42,77,0.08)]">
        <h1 className="text-2xl font-black">Unable to continue payment</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">{data.error}</p>
      </div>
    </main>
  );
}
