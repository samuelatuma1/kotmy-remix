import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

type PartnerOrderItemLoaderData = {
  orderItemId: string;
};

export async function loader({ params }: LoaderFunctionArgs) {
  return json<PartnerOrderItemLoaderData>({
    orderItemId: params.orderItemId ?? "",
  });
}

export default function PartnerOrderItemPage() {
  const { orderItemId } = useLoaderData<typeof loader>();

  return (
    <main className="w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Order item
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Order item details
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            This route is ready for order-item level actions such as payment confirmation or fulfillment updates.
          </p>
        </div>
      </section>

      <section className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="rounded-2xl bg-slate-50 p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Order item ID</div>
          <div className="mt-2 break-all text-lg font-black text-slate-950">{orderItemId || "Missing order item id"}</div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/partner/orders"
            className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Back to orders
          </Link>
        </div>
      </section>
    </main>
  );
}
