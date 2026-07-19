import {
  ShoppingCart
} from "/build/_shared/chunk-JZYOZKIK.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import {
  no_image_default
} from "/build/_shared/chunk-7JPCB6PC.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link2 as Link,
  useFetcher,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-NO4YTAWP.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_public.marketplace._index.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.marketplace._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.marketplace._index.tsx"
  );
  import.meta.hot.lastModified = "1781987338549.7969";
}
function formatPrice(currency, price) {
  return `${currency} ${new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(price)}`;
}
function getProductLocationId(product) {
  const primaryLocation = product.product_locations?.find((location) => location.is_primary);
  return primaryLocation?.str_id ?? product.product_locations?.[0]?.str_id ?? null;
}
function ProductCard({
  product,
  onAddToCart,
  isSubmitting
}) {
  const imageSrc = product.main_image_url || product.image_urls?.[0] || no_image_default;
  const hasRange = product.price_max > product.price_min;
  const priceLabel = product.price_min === 0 && product.price_max === 0 ? "Free" : hasRange ? `${formatPrice(product.currency, product.price_min)} - ${formatPrice(product.currency, product.price_max)}` : formatPrice(product.currency, product.price_min);
  const locationCount = product.product_locations?.length ?? 0;
  const buttonLabel = isSubmitting ? "Adding..." : "Add to cart";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.1)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative aspect-[4/3] overflow-hidden bg-slate-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imageSrc, alt: product.name, className: "h-full w-full object-cover transition duration-500 group-hover:scale-105", loading: "lazy" }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur", children: product.status.replace(/_/g, " ") }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col gap-4 p-5 min-h-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-black text-slate-950 line-clamp-1", children: product.name }, void 0, false, {
              fileName: "app/routes/_public.marketplace._index.tsx",
              lineNumber: 199,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium leading-6 text-slate-500 line-clamp-2", children: product.description }, void 0, false, {
              fileName: "app/routes/_public.marketplace._index.tsx",
              lineNumber: 200,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 198,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: product.category || "Uncategorized" }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 197,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-base font-black text-slate-950", children: priceLabel }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-medium text-slate-400", children: locationCount > 0 ? `${locationCount} location${locationCount === 1 ? "" : "s"}` : "Online only" }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 196,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: (product.tags ?? []).slice(0, 4).map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600", children: tag.trim() }, `${product._id}-${tag}`, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 216,
        columnNumber: 56
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto flex items-center justify-between gap-3 border-slate-100 pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-medium text-slate-400", children: product.accepts_prepayment ? "Prepayment supported" : "Pay on confirmation" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 222,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => onAddToCart(product), className: "inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70", disabled: isSubmitting, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 226,
            columnNumber: 13
          }, this),
          buttonLabel
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 221,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 195,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace._index.tsx",
    lineNumber: 186,
    columnNumber: 10
  }, this);
}
_c = ProductCard;
function ProductCardx({
  product,
  onAddToCart,
  isSubmitting
}) {
  const imageSrc = product.main_image_url || product.image_urls?.[0] || no_image_default;
  const hasRange = product.price_max > product.price_min;
  const priceLabel = product.price_min === 0 && product.price_max === 0 ? "Free" : hasRange ? `${formatPrice(product.currency, product.price_min)} - ${formatPrice(product.currency, product.price_max)}` : formatPrice(product.currency, product.price_min);
  const locationCount = product.product_locations?.length ?? 0;
  const buttonLabel = isSubmitting ? "Adding..." : "Add to cart";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.1)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative aspect-[4/3] overflow-hidden bg-slate-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imageSrc, alt: product.name, className: "h-full w-full object-cover transition duration-500 group-hover:scale-105", loading: "lazy" }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 246,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur", children: product.status.replace(/_/g, " ") }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full flex-col gap-4 p-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-black text-slate-950 line-clamp-1", children: product.name }, void 0, false, {
              fileName: "app/routes/_public.marketplace._index.tsx",
              lineNumber: 256,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium leading-6 text-slate-500 line-clamp-2", children: product.description }, void 0, false, {
              fileName: "app/routes/_public.marketplace._index.tsx",
              lineNumber: 257,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 255,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: product.category || "Uncategorized" }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 259,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 254,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-base font-black text-slate-950", children: priceLabel }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 265,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-medium text-slate-400", children: locationCount > 0 ? `${locationCount} location${locationCount === 1 ? "" : "s"}` : "Online only" }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 264,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 253,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: (product.tags ?? []).slice(0, 4).map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600", children: tag.trim() }, `${product._id}-${tag}`, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 273,
        columnNumber: 56
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-medium text-slate-400", children: product.accepts_prepayment ? "Prepayment supported" : "Pay on confirmation" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 279,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => onAddToCart(product), className: "inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70", disabled: isSubmitting, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 283,
            columnNumber: 13
          }, this),
          buttonLabel
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 282,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 278,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 252,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace._index.tsx",
    lineNumber: 244,
    columnNumber: 10
  }, this);
}
_c2 = ProductCardx;
function MarketplaceSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: Array.from({
    length: 6
  }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-[4/3] bg-slate-200" }, void 0, false, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 296,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 p-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-2/3 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 298,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-full rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 299,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-4/5 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 300,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-24 rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 302,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-9 w-32 rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 303,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 301,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 297,
      columnNumber: 11
    }, this)
  ] }, index, true, {
    fileName: "app/routes/_public.marketplace._index.tsx",
    lineNumber: 295,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/routes/_public.marketplace._index.tsx",
    lineNumber: 292,
    columnNumber: 10
  }, this);
}
_c3 = MarketplaceSkeleton;
function MarketplaceHome() {
  _s();
  const {
    products,
    query,
    productError
  } = useLoaderData();
  const navigation = useNavigation();
  const cartSummaryFetcher = useFetcher();
  const cartMutationFetcher = useFetcher();
  const [cartState, setCartState] = (0, import_react2.useState)(null);
  const [cartHydrated, setCartHydrated] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    cartSummaryFetcher.load("/marketplace?intent=cart");
  }, []);
  (0, import_react2.useEffect)(() => {
    if (cartSummaryFetcher.data && ("cart" in cartSummaryFetcher.data || "cartError" in cartSummaryFetcher.data)) {
      setCartState(cartSummaryFetcher.data.cart ?? null);
      setCartHydrated(true);
    }
  }, [cartSummaryFetcher.data]);
  (0, import_react2.useEffect)(() => {
    if (cartMutationFetcher.data?.cart !== void 0) {
      setCartState(cartMutationFetcher.data.cart ?? null);
      setCartHydrated(true);
      cartSummaryFetcher.load("/marketplace?intent=cart");
    }
  }, [cartMutationFetcher.data]);
  const cartItemCount = (0, import_react2.useMemo)(() => {
    return cartState?.cart_items?.length ?? 0;
  }, [cartState]);
  const totalItems = products?.total_items ?? 0;
  const totalPages = products?.total_pages ?? 0;
  const pageSize = query?.page_size ?? products?.items_per_page ?? 20;
  const showSkeleton = navigation.state === "loading" && navigation.formMethod === "get";
  const pendingProductId = cartMutationFetcher.state === "submitting" ? String(cartMutationFetcher.formData?.get("product_id") ?? "") : "";
  const cartError = cartSummaryFetcher.data?.cartError ?? null;
  const mutationError = cartMutationFetcher.data?.error ?? null;
  const handleAddToCart = (product) => {
    const formData = new FormData();
    formData.set("intent", "add-to-cart");
    formData.set("product_id", product._id);
    formData.set("quantity", "1");
    const locationId = getProductLocationId(product);
    if (locationId) {
      formData.set("product_location_id", locationId);
    }
    cartMutationFetcher.submit(formData, {
      method: "post",
      action: "/marketplace"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.04),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.06),transparent_28%)]" }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 366,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Marketplace" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 369,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: "Discover products with a clean, calm shopping experience." }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 373,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: "Search by keyword and location, then add items to a cart that stays friendly for guests and signed-in users alike." }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 376,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 372,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace/cart", className: "inline-flex items-center gap-3 rounded-full border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/_public.marketplace._index.tsx",
              lineNumber: 383,
              columnNumber: 17
            }, this),
            "View Cart",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-white/15 px-2.5 py-1 text-xs font-black", children: cartHydrated ? cartItemCount : "\u2026" }, void 0, false, {
              fileName: "app/routes/_public.marketplace._index.tsx",
              lineNumber: 385,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 382,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace", className: "inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Refresh Catalog" }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 389,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 381,
          columnNumber: 13
        }, this),
        productError || mutationError || cartError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: productError || mutationError || cartError }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 394,
          columnNumber: 59
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 368,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 367,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace/cart", "aria-label": "View cart", className: "absolute right-5 top-5 hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 sm:inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 430,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Cart" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 431,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-950 px-2.5 py-1 text-xs font-black text-white", children: cartHydrated ? cartItemCount : "\u2026" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 432,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 429,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 365,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Search products" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 441,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "wildcard", defaultValue: query?.wildcard ?? "", placeholder: "Try: shoes, watch, MacBook", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 442,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 440,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Location" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 445,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "location_wildcard", defaultValue: query?.location_wildcard ?? "", placeholder: "Try: lag, ikeja, abuja", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 446,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 444,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "h-12 rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Search" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 449,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace", className: "inline-flex h-12 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Clear" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 452,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 448,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 439,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 438,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-950", children: "Catalog" }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 462,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: totalItems > 0 ? `${totalItems} product${totalItems === 1 ? "" : "s"} found` : "No products found for this search" }, void 0, false, {
            fileName: "app/routes/_public.marketplace._index.tsx",
            lineNumber: 463,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 461,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
          "Page ",
          products?.current_page ?? 1
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 467,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 460,
        columnNumber: 9
      }, this),
      showSkeleton ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MarketplaceSkeleton, {}, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 472,
        columnNumber: 25
      }, this) : products?.items?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: products.items.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product, onAddToCart: handleAddToCart, isSubmitting: pendingProductId === product._id }, product._id, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 473,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 472,
        columnNumber: 77
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-black text-slate-950", children: "No matching products" }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 475,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Try a broader keyword or location to expand the catalog results." }, void 0, false, {
          fileName: "app/routes/_public.marketplace._index.tsx",
          lineNumber: 476,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace._index.tsx",
        lineNumber: 474,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 459,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: products?.last_key_id, firstKey: products?.first_key_id, pageSize }, void 0, false, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 483,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.marketplace._index.tsx",
      lineNumber: 482,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace._index.tsx",
    lineNumber: 364,
    columnNumber: 10
  }, this);
}
_s(MarketplaceHome, "6M6TeZTjefrZLIUcCB1as9Xu7wM=", false, function() {
  return [useLoaderData, useNavigation, useFetcher, useFetcher];
});
_c4 = MarketplaceHome;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "ProductCard");
$RefreshReg$(_c2, "ProductCardx");
$RefreshReg$(_c3, "MarketplaceSkeleton");
$RefreshReg$(_c4, "MarketplaceHome");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MarketplaceHome as default
};
//# sourceMappingURL=/build/routes/_public.marketplace._index-OSCJPYRY.js.map
