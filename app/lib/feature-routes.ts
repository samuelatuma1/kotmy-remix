export function getMarketplacePaths(pathname: string) {
  const isUserRoute = pathname === "/user/shop"
    || pathname.startsWith("/user/cart")
    || pathname.startsWith("/user/checkout")
    || pathname.startsWith("/user/orders");

  return isUserRoute
    ? { shop: "/user/shop", cart: "/user/cart", checkout: "/user/cart/checkout", orders: "/user/orders" }
    : { shop: "/marketplace", cart: "/marketplace/cart", checkout: "/marketplace/checkout", orders: "/marketplace/orders" };
}

export function getVtuPaths(pathname: string) {
  const base = pathname.startsWith("/user/vtu") ? "/user/vtu" : "/vtuservice";
  return {
    base,
    airtime: `${base}/airtime`,
    data: `${base}/data`,
    purchases: `${base}/purchases`,
    purchase: (reference: string) => `${base}/purchase/${encodeURIComponent(reference)}`,
    paymentReturn: `${base}/payment-return`,
  };
}
