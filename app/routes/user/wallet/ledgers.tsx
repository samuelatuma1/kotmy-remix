import { json } from "@remix-run/node";
import { walletRepo } from "~/services/wallet/wallet.server";

export async function loader({ request }) {
  const url = new URL(request.url);
  const wallet_id = url.searchParams.get("wallet_id");
  const last_key_id = url.searchParams.get("last_key_id");
  const page_size = url.searchParams.get("page_size");
  const cookieHeader = request.headers.get("Cookie") ?? "";

  const query = {
    wallet_id,
    last_key_id,
    page_size: page_size ? Number(page_size) : 10,
  };

  const result = await walletRepo.getUserLedgersForWallet(cookieHeader, query);
  return json({ pagedLedgers: result.data });
}
