import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-YZONELX2.js";
import {
  no_image_default
} from "/build/_shared/chunk-7JPCB6PC.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-JQLQAHH7.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-QORMC3GD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_public.marketplace.tsx
var import_node = __toESM(require_node(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.marketplace.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.marketplace.tsx"
  );
  import.meta.hot.lastModified = "1781937122346.637";
}
function formatPrice(currency, price) {
  return `${currency} ${new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(price)}`;
}
function ProductCard({
  product
}) {
  const imageSrc = product.main_image_url || product.image_urls?.[0] || no_image_default;
  const hasRange = product.price_max > product.price_min;
  const priceLabel = product.price_min === 0 && product.price_max === 0 ? "Free" : hasRange ? `${formatPrice(product.currency, product.price_min)} - ${formatPrice(product.currency, product.price_max)}` : formatPrice(product.currency, product.price_min);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "group overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative aspect-[4/3] overflow-hidden bg-slate-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imageSrc, alt: product.name, className: "h-full w-full object-cover transition duration-500 group-hover:scale-105", loading: "lazy" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-4 top-4 rounded-full border border-white/60 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur", children: product.status.replace(/_/g, " ") }, void 0, false, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full flex-col gap-4 p-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-black text-slate-950 line-clamp-1", children: product.name }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-slate-500 line-clamp-2", children: product.description }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-base font-black text-slate-950", children: priceLabel }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 130,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: product.category || "Uncategorized" }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 131,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: (product.tags ?? []).slice(0, 4).map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600", children: tag.trim() }, `${product._id}-${tag}`, false, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 138,
        columnNumber: 56
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        product.product_locations?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: product.product_locations.slice(0, 2).map((location) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600", children: location.name }, location.str_id, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 145,
          columnNumber: 70
        }, this)) }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 144,
          columnNumber: 48
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-medium text-slate-400", children: "Location details available on request." }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 148,
          columnNumber: 22
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3 pt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-medium text-slate-400", children: product.accepts_prepayment ? "Prepayment supported" : "Pay on confirmation" }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 151,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-full border border-accent/20 bg-[#EEF0FF] px-4 py-2 text-sm font-bold text-accent transition hover:border-accent/40 hover:bg-accent hover:text-white", children: "Add to cart" }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 154,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 150,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.tsx",
    lineNumber: 112,
    columnNumber: 10
  }, this);
}
_c = ProductCard;
function MarketplaceHome() {
  _s();
  const {
    products,
    query
  } = useLoaderData();
  const navigation = useNavigation();
  const isSearching = navigation.state !== "idle";
  const totalItems = products?.total_items ?? 0;
  const totalPages = products?.total_pages ?? 0;
  const pageSize = query.page_size ?? products?.items_per_page ?? 20;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_45%,#4b4870_100%)] px-6 py-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.25)] sm:px-8 sm:py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(238,240,255,0.14),transparent_28%)]" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/85", children: "Marketplace" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "max-w-2xl text-4xl font-black leading-tight sm:text-5xl", children: "Discover products with a clean, focused storefront experience." }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 183,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-base leading-7 text-white/78 sm:text-lg", children: "Search by product keyword or location wildcard, then browse the catalog with paged results that feel fast and easy to scan." }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 182,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "/marketplace", className: "rounded-full px-5 py-3 text-sm font-bold", variant: "solid", children: "Not sure yet" }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "/marketplace", className: "rounded-full px-5 py-3 text-sm font-bold", variant: "outline", children: "Refresh Catalog" }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 194,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-[1.75rem] border border-slate-200/70 bg-white p-4 shadow-sm sm:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Search products" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "wildcard", defaultValue: query.wildcard ?? "", placeholder: "Try: shoes, watch, MacBook", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-accent focus:bg-white" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 222,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Location wildcard" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "location_wildcard", defaultValue: query.location_wildcard ?? "", placeholder: "Try: lag, ikeja, abuja", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-accent focus:bg-white" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "h-12 rounded-2xl bg-accent px-5 text-sm font-bold text-white transition hover:opacity-95 disabled:cursor-wait disabled:opacity-70", disabled: isSearching, children: isSearching ? "Searching..." : "Search" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "/marketplace", className: "h-12 flex items-center rounded-2xl px-5 text-sm font-bold", variant: "outline", children: "Clear" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 232,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.tsx",
      lineNumber: 219,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.marketplace.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-950", children: "Catalog" }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 242,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: totalItems > 0 ? `${totalItems} product${totalItems === 1 ? "" : "s"} found` : "No products found for this search" }, void 0, false, {
            fileName: "app/routes/_public.marketplace.tsx",
            lineNumber: 243,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
          "Page ",
          products?.current_page ?? 1
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 240,
        columnNumber: 9
      }, this),
      products?.items?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: products.items.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product._id, false, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 253,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 252,
        columnNumber: 36
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-black text-slate-900", children: "No matching products" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Try a broader keyword or location wildcard to expand the catalog results." }, void 0, false, {
          fileName: "app/routes/_public.marketplace.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.tsx",
        lineNumber: 254,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: products?.last_key_id, firstKey: products?.first_key_id, pageSize }, void 0, false, {
      fileName: "app/routes/_public.marketplace.tsx",
      lineNumber: 263,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.marketplace.tsx",
      lineNumber: 262,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.tsx",
    lineNumber: 174,
    columnNumber: 10
  }, this);
}
_s(MarketplaceHome, "I3nzvz5eXe3Z6T4cM6BrY7QUTeo=", false, function() {
  return [useLoaderData, useNavigation];
});
_c2 = MarketplaceHome;
var _c;
var _c2;
$RefreshReg$(_c, "ProductCard");
$RefreshReg$(_c2, "MarketplaceHome");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MarketplaceHome as default
};
//# sourceMappingURL=/build/routes/_public.marketplace-HDDKETCL.js.map
