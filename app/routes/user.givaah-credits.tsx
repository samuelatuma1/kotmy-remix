import { json, type LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData, useNavigation } from "@remix-run/react";
import { userServer } from "~/services/user/userserver";
import type { IGivaahCreditQuery, UserCreditResponse } from "~/services/user/types/user_.interface";

type GivaahCreditsLoaderData = {
  credits: UserCreditResponse | null;
  query: IGivaahCreditQuery | null;
  error: string | null;
  validationError: string | null;
};

function formatValue(value: number | null | undefined) {
  return new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0,
  }).format(Number(value ?? 0));
}

function buildQuery(searchParams: URLSearchParams): IGivaahCreditQuery | null {
  const phone = searchParams.get("phone")?.trim() ?? "";
  const order_code = searchParams.get("order_code")?.trim() ?? "";

  if (!phone && !order_code) {
    return null;
  }

  return {
    phone,
    order_code,
  };
}

function CreditsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="h-4 w-20 animate-pulse rounded-full bg-slate-200" />
          <div className="mt-4 h-8 w-32 animate-pulse rounded-xl bg-slate-200" />
          <div className="mt-6 space-y-3">
            <div className="h-4 w-full animate-pulse rounded-full bg-slate-200" />
            <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-200" />
            <div className="h-4 w-4/6 animate-pulse rounded-full bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return redirect("/login");

  const url = new URL(request.url);
  const query = buildQuery(url.searchParams);
  const validationError =
    query && (!query.phone || !query.order_code)
      ? "Please enter both phone and order code to search credits."
      : null;

  const creditsRes = await userServer.getGivaahCredits(validationError ? undefined : query ?? undefined, cookieHeader);

  if (creditsRes.error) {
    return json<GivaahCreditsLoaderData>({
      credits: null,
      query,
      error: typeof creditsRes.error.detail === "string" ? creditsRes.error.detail : "Unable to load credits",
      validationError,
    });
  }

  return json<GivaahCreditsLoaderData>({
    credits: creditsRes.data ?? null,
    query,
    error: null,
    validationError,
  });
}

export default function GivaahCreditsPage() {
  const { credits, query, error, validationError } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  const pageCredits = credits?.credits ?? [];

  return (
    <main className="min-h-full bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">User Credits</p>
              <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Givaah Credits</h1>
              <p className="text-sm leading-6 text-slate-600 sm:text-base">
                Review your available voting credits and look up a specific credit record using the phone number and order code tied to the purchase.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Available Credit</p>
                <p className="mt-2 text-2xl font-black text-slate-950">
                  {isBusy && !credits ? "..." : formatValue(credits?.available_credit_value)}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Credit Records</p>
                <p className="mt-2 text-2xl font-black text-slate-950">{isBusy && !credits ? "..." : pageCredits.length}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <Form method="get" className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Phone</span>
              <input
                name="phone"
                type="tel"
                defaultValue={query?.phone ?? ""}
                placeholder="08012345678"
                required
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Order Code</span>
              <input
                name="order_code"
                type="text"
                defaultValue={query?.order_code ?? ""}
                placeholder="ORD-12345"
                required
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.01] hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isBusy}
            >
              {isBusy ? "Searching..." : "Search credits"}
            </button>
          </Form>
          {validationError ? (
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">{validationError}</p>
          ) : null}
          {error ? (
            <p className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>
          ) : null}
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-950">Credit Breakdown</h2>
              <p className="text-sm text-slate-600">
                {pageCredits.length > 0
                  ? "The list below shows the credit entries currently associated with your account."
                  : "No credit records were returned for this search."}
              </p>
            </div>
            <div className="text-sm text-slate-600">
              <p>Get more credit to vote your favourite contestant by purchasing from our partners.</p>
              <p className="mt-1">
                Visit the{" "}
                <Link to="/marketplace" className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950">
                  marketplace
                </Link>{" "}
                to explore available packages.
              </p>
            </div>
          </div>

          <div className="mt-6">
            {isBusy && !credits ? (
              <CreditsSkeleton />
            ) : pageCredits.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {pageCredits.map((credit, index) => (
                  <article
                    key={credit._id ?? `${credit.order_code}-${index}`}
                    className="flex h-full flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Order Code</p>
                          <h3 className="mt-2 text-xl font-black text-slate-950">{credit.order_code}</h3>
                        </div>
                        <div className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                          {credit.order_currency}
                        </div>
                      </div>

                      <dl className="grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <dt className="text-slate-500">Available</dt>
                          <dd className="mt-1 text-base font-bold text-slate-950">{formatValue(credit.available_credit_value)}</dd>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <dt className="text-slate-500">Used</dt>
                          <dd className="mt-1 text-base font-bold text-slate-950">{formatValue(credit.used_credit_value)}</dd>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <dt className="text-slate-500">Redeemed</dt>
                          <dd className="mt-1 text-base font-bold text-slate-950">{formatValue(credit.redeemed_credit_value)}</dd>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <dt className="text-slate-500">Original</dt>
                          <dd className="mt-1 text-base font-bold text-slate-950">{formatValue(credit.original_total_credit_value)}</dd>
                        </div>
                      </dl>

                      <div className="space-y-1 text-sm text-slate-600">
                        <p>
                          <span className="font-semibold text-slate-800">Phone:</span> {credit.delivery_details_phone || credits?.phone_number || "N/A"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">User:</span> {credits?.user_id ?? "N/A"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">Credit Entries:</span> {credit.redeemed_credit_value_break_down.length + credit.used_credit_value_break_down.length}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                <p className="text-base font-semibold text-slate-950">No credit entries found.</p>
                <p className="mt-2 text-sm text-slate-600">
                  Try a different phone number and order code, or purchase more credits from the{" "}
                  <Link to="/marketplace" className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950">
                    marketplace
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
