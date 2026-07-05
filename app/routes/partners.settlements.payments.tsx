import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { setToast } from "~/lib/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { headers } = await setToast({
    request,
    toast: `success::Your settlement payment is being processed::${Date.now()}`,
  });

  const target = new URL("/partners/settlements", request.url);
  return redirect(`${target.pathname}${target.search}`, { headers });
}

export default function PartnerSettlementPaymentsRedirect() {
  return null;
}
