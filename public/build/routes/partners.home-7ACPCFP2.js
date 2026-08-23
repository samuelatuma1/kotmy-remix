import {
  ArrowRight,
  Package,
  Search,
  Store,
  Tag
} from "/build/_shared/chunk-3UWAUYI3.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import {
  no_image_default
} from "/build/_shared/chunk-52GSXTRN.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-VCQR46EC.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-NO4YTAWP.js";
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

// app/routes/partners.home.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partners.home.tsx"' + id);
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
    "app/routes/partners.home.tsx"
  );
  import.meta.hot.lastModified = "1787239454947.8186";
}
function formatPriceRange(product) {
  const minimum = `${product.currency} ${product.price_min}`;
  if (product.price_max && product.price_max !== product.price_min) {
    return `${minimum} - ${product.currency} ${product.price_max}`;
  }
  return minimum;
}
function Banner({
  data
}) {
  const totalProducts = data?.total_items ?? data?.items.length ?? 0;
  const totalPages = data?.total_pages ?? 0;
  const currentPage = data?.current_page ?? 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_16px_50px_rgba(14,42,77,0.15)] sm:px-8 sm:py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-white/5" }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Store, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        "Partner Products"
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-black leading-tight sm:text-4xl", children: "Manage your product catalog" }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-xl text-sm leading-6 text-white/70 sm:text-base", children: "Manage your product catalog, update product details, and track inventory." }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Package, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this),
          totalProducts,
          " products"
        ] }, void 0, true, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          "Page ",
          currentPage,
          " of ",
          totalPages || 1
        ] }, void 0, true, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.home.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_c = Banner;
function SearchPanel() {
  _s();
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex items-center gap-2 text-slate-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Filter products" }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Price" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "price,wildcard,status", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white", placeholder: "Enter a price" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Search term" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "wildcard", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white", placeholder: "Name, description, or tag" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Status" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "status", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-pink focus:bg-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "available", children: "Available" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "out_of_stock", children: "Out of Stock" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 149,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "suspended", children: "Suspended" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 150,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 147,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand-navy px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy/90 disabled:opacity-60", disabled: isBusy, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 155,
          columnNumber: 11
        }, this),
        isBusy ? "Searching..." : "Search"
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.home.tsx",
    lineNumber: 120,
    columnNumber: 10
  }, this);
}
_s(SearchPanel, "I2WaJhUM5KV32aS1+j3KKeVsgyA=", false, function() {
  return [useNavigation];
});
_c2 = SearchPanel;
function ProductCard({
  product
}) {
  const imgSrc = product.main_image_url ? product.main_image_url : no_image_default;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative h-48 overflow-hidden bg-slate-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imgSrc, alt: product.name, className: "h-full w-full object-cover transition duration-500 group-hover:scale-105", loading: "lazy" }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 171,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-3 p-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "truncate text-base font-black text-slate-900", children: product.name }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 177,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-slate-500 line-clamp-2", children: product.description }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 180,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "shrink-0 rounded-full bg-brand-navy/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-navy", children: product.status.replace(/_/g, " ") }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-lg font-black text-brand-pink", children: formatPriceRange(product) }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: product.tags?.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600", children: tag }, tag, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 194,
        columnNumber: 37
      }, this)) }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto flex items-center justify-between gap-3 pt-2 text-xs text-slate-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "truncate", children: product.category || "Uncategorized" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          product.sku ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-500 sm:inline-flex", children: [
            "SKU: ",
            product.sku
          ] }, void 0, true, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 202,
            columnNumber: 28
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: `/partners/product/update/${product._id}`, className: "inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold", variant: "outline", children: [
            "Edit",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "app/routes/partners.home.tsx",
              lineNumber: 207,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 205,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 201,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.home.tsx",
    lineNumber: 169,
    columnNumber: 10
  }, this);
}
_c3 = ProductCard;
function EmptyState() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Package, { className: "mx-auto h-10 w-10 text-slate-300" }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-xl font-black text-slate-900", children: "No products found" }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Try adjusting the search filters or browse all products to find the item you need." }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 221,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.home.tsx",
    lineNumber: 216,
    columnNumber: 10
  }, this);
}
_c4 = EmptyState;
function PartnerProducts() {
  _s2();
  const {
    data,
    query
  } = useLoaderData();
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full min-h-screen bg-tertiary p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, { data }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "/partners/add", className: "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold", children: [
      "Add Product",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 242,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 240,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchPanel, {}, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 247,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-900", children: "Product listings" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 253,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: data?.total_items && data.total_items > 0 ? `${data.total_items} product${data.total_items === 1 ? "" : "s"} available` : "No products found for the current filters" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 256,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 252,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 261,
            columnNumber: 13
          }, this),
          "Page ",
          data?.current_page ?? 1
        ] }, void 0, true, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 260,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 251,
        columnNumber: 9
      }, this),
      isBusy && !data ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-4", children: Array.from({
        length: 4
      }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[23rem] animate-pulse rounded-[1.5rem] border border-slate-200 bg-white shadow-sm" }, index, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 269,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 266,
        columnNumber: 28
      }, this) : data?.items && data.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4", children: data.items.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product._id, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 271,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 270,
        columnNumber: 59
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {}, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 272,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 250,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 sm:flex sm:justify-between sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: query?.last_key_id, pageSize: query?.items_per_page, firstKey: query?.first_key_id }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 276,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 275,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.home.tsx",
    lineNumber: 236,
    columnNumber: 10
  }, this);
}
_s2(PartnerProducts, "NtZayoL+39y7vRFsPQPOSGGsxMY=", false, function() {
  return [useLoaderData, useNavigation];
});
_c5 = PartnerProducts;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "Banner");
$RefreshReg$(_c2, "SearchPanel");
$RefreshReg$(_c3, "ProductCard");
$RefreshReg$(_c4, "EmptyState");
$RefreshReg$(_c5, "PartnerProducts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerProducts as default
};
//# sourceMappingURL=/build/routes/partners.home-7ACPCFP2.js.map
