import { json, type LoaderFunctionArgs } from "@remix-run/node";

import { userServer } from "~/services/user/userserver";

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";

  if (!cookieHeader) {
    return json({ authRequired: true, credits: null, error: null }, { status: 401 });
  }

  const creditsRes = await userServer.getGivaahCredits(undefined, request);

  if (creditsRes.authRequired) {
    return json({ authRequired: true, credits: null, error: null }, { status: 401 });
  }

  if (creditsRes.error) {
    return json(
      {
        authRequired: false,
        credits: null,
        error: typeof creditsRes.error.detail === "string" ? creditsRes.error.detail : "Unable to load Givaah credits",
      },
      { status: 400 }
    );
  }

  return json({
    authRequired: false,
    credits: creditsRes.data ?? null,
    error: null,
  });
}

