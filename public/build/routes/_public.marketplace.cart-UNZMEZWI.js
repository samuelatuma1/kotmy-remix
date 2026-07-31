import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingCart,
  Trash2
} from "/build/_shared/chunk-JCJAKJPK.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  no_image_default
} from "/build/_shared/chunk-7JPCB6PC.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link2 as Link,
  useFetcher,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-DM6GBINF.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_public.marketplace.cart.tsx
var import_node = __toESM(require_node(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.marketplace.cart.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.marketplace.cart.tsx"
  );
  import.meta.hot.lastModified = "1782017703271.7634";
}
function formatMoney(currency, value) {
  return `${currency} ${new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(value)}`;
}
function CartLineItem({
  item
}) {
  _s();
  const fetcher = useFetcher();
  const product = item.product;
  const imageSrc = product.main_image_url || product.image_urls?.[0] || no_image_default;
  const locationLabel = product.product_locations?.find((location) => location.str_id === item.product_location_id)?.name ?? product.product_locations?.find((location) => location.is_primary)?.name ?? product.product_locations?.[0]?.name ?? "Default location";
  const isSubmitting = fetcher.state !== "idle";
  const submitQuantity = (quantity) => {
    const formData = new FormData();
    formData.set("product_id", item.product_id);
    formData.set("quantity", String(Math.max(0, quantity)));
    if (item.product_location_id) {
      formData.set("product_location_id", item.product_location_id);
    }
    fetcher.submit(formData, {
      method: "post",
      action: "/marketplace/cart"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr_auto] sm:p-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-hidden rounded-2xl bg-slate-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imageSrc, alt: product.name, className: "aspect-square h-full w-full object-cover", loading: "lazy" }, void 0, false, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-black text-slate-950", children: product.name }, void 0, false, {
            fileName: "app/routes/_public.marketplace.cart.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-slate-500 line-clamp-2", children: product.description }, void 0, false, {
            fileName: "app/routes/_public.marketplace.cart.tsx",
            lineNumber: 111,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: product.category || "Uncategorized" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-3 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold text-slate-900", children: product.price_min === 0 && product.price_max === 0 ? "Free" : product.price_min === product.price_max ? formatMoney(product.currency, product.price_min) : `${formatMoney(product.currency, product.price_min)} - ${formatMoney(product.currency, product.price_max)}` }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-400", children: "\u2022" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-500", children: locationLabel }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: (product.tags ?? []).slice(0, 4).map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600", children: tag.trim() }, `${product._id}-${tag}`, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 127,
        columnNumber: 56
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-stretch justify-between gap-3 sm:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => submitQuantity(item.quantity - 1), disabled: isSubmitting || item.quantity <= 0, className: "grid h-9 w-9 place-items-center rounded-full border border-transparent text-slate-600 transition hover:border-slate-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50", "aria-label": `Decrease quantity for ${product.name}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "min-w-10 px-2 text-center text-sm font-black text-slate-950", children: item.quantity }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => submitQuantity(item.quantity + 1), disabled: isSubmitting, className: "grid h-9 w-9 place-items-center rounded-full border border-transparent text-slate-600 transition hover:border-slate-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50", "aria-label": `Increase quantity for ${product.name}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => submitQuantity(0), disabled: isSubmitting, className: "inline-flex items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-700 transition hover:-translate-y-0.5 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 147,
          columnNumber: 11
        }, this),
        "Remove"
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.cart.tsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_s(CartLineItem, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c = CartLineItem;
function CartSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: Array.from({
    length: 3
  }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr_auto] sm:p-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-square rounded-2xl bg-slate-200" }, void 0, false, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 162,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-2/3 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-full rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-4/5 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 163,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3 sm:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-11 w-32 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 169,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-28 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 170,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 168,
      columnNumber: 11
    }, this)
  ] }, index, true, {
    fileName: "app/routes/_public.marketplace.cart.tsx",
    lineNumber: 161,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/routes/_public.marketplace.cart.tsx",
    lineNumber: 158,
    columnNumber: 10
  }, this);
}
_c2 = CartSkeleton;
function MarketplaceCart() {
  _s2();
  const {
    cart,
    cartError
  } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const cartItems = cart?.cart_items ?? [];
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const distinctItems = cartItems.length;
  const minimumTotal = cart?.minimum_total_amount ?? 0;
  const maximumTotal = cart?.maximum_total_amount ?? 0;
  const currency = cart?.currency ?? "NGN";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace", className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.cart.tsx",
              lineNumber: 195,
              columnNumber: 15
            }, this),
            "Back to marketplace"
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.cart.tsx",
            lineNumber: 194,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Cart" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.cart.tsx",
              lineNumber: 199,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: "Review items and adjust quantities before checkout." }, void 0, false, {
              fileName: "app/routes/_public.marketplace.cart.tsx",
              lineNumber: 202,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: "This cart stays guest-friendly and can be updated from the marketplace or directly here." }, void 0, false, {
              fileName: "app/routes/_public.marketplace.cart.tsx",
              lineNumber: 205,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.cart.tsx",
            lineNumber: 198,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Items" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.cart.tsx",
              lineNumber: 213,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: itemCount }, void 0, false, {
              fileName: "app/routes/_public.marketplace.cart.tsx",
              lineNumber: 214,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.cart.tsx",
            lineNumber: 212,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Products" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.cart.tsx",
              lineNumber: 217,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: distinctItems }, void 0, false, {
              fileName: "app/routes/_public.marketplace.cart.tsx",
              lineNumber: 218,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.cart.tsx",
            lineNumber: 216,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Total" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.cart.tsx",
              lineNumber: 221,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-2xl font-black text-slate-950", children: minimumTotal || maximumTotal ? `${formatMoney(currency, minimumTotal)}${maximumTotal !== minimumTotal ? `   - ${formatMoney(currency, maximumTotal)}` : ""}` : `${currency} 0` }, void 0, false, {
              fileName: "app/routes/_public.marketplace.cart.tsx",
              lineNumber: 222,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.cart.tsx",
            lineNumber: 220,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this),
      cartError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: cartError }, void 0, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 229,
        columnNumber: 22
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex items-end justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-950", children: "Your cart" }, void 0, false, {
            fileName: "app/routes/_public.marketplace.cart.tsx",
            lineNumber: 237,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: cartItems.length > 0 ? `${cartItems.length} line item${cartItems.length === 1 ? "" : "s"}` : "No items in cart yet" }, void 0, false, {
            fileName: "app/routes/_public.marketplace.cart.tsx",
            lineNumber: 238,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 236,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace", className: "text-sm font-bold text-accent", children: "Continue shopping" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 242,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 235,
        columnNumber: 9
      }, this),
      isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartSkeleton, {}, void 0, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 247,
        columnNumber: 22
      }, this) : cartItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: cartItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineItem, { item }, `${item.product_id}-${item.product_location_id ?? "default"}`, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 248,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 247,
        columnNumber: 64
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, { className: "mx-auto h-10 w-10 text-slate-300" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 250,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-xl font-black text-slate-950", children: "Your cart is empty" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Add products from the marketplace and they will appear here." }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 252,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace", className: "mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Browse products" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 255,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 249,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 234,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Checkout" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-slate-600", children: "Continue to delivery details, payment selection, and order placement." }, void 0, false, {
          fileName: "app/routes/_public.marketplace.cart.tsx",
          lineNumber: 265,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 263,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace/checkout", className: "inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Checkout" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.cart.tsx",
        lineNumber: 269,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 262,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.marketplace.cart.tsx",
      lineNumber: 261,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.cart.tsx",
    lineNumber: 190,
    columnNumber: 10
  }, this);
}
_s2(MarketplaceCart, "EuQsZZDYpNCDiEkdMZe00+3EyMc=", false, function() {
  return [useLoaderData, useNavigation];
});
_c3 = MarketplaceCart;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "CartLineItem");
$RefreshReg$(_c2, "CartSkeleton");
$RefreshReg$(_c3, "MarketplaceCart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MarketplaceCart as default
};
//# sourceMappingURL=/build/routes/_public.marketplace.cart-UNZMEZWI.js.map
