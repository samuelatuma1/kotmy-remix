import {
  ArrowRight,
  Globe,
  MapPin,
  Navigation2,
  Search
} from "/build/_shared/chunk-3UWAUYI3.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
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

// app/routes/partners.location.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/partners.location.tsx"' + id);
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
    "app/routes/partners.location.tsx"
  );
  import.meta.hot.lastModified = "1787239519085.15";
}
function Banner({
  data
}) {
  const totalLocations = data?.total_items ?? data?.items.length ?? 0;
  const totalPages = data?.total_pages ?? 0;
  const currentPage = data?.current_page ?? 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_16px_50px_rgba(14,42,77,0.15)] sm:px-8 sm:py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-white/5" }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        "Partner Locations"
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-black leading-tight sm:text-4xl", children: "Keep every branch easy to find" }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-xl text-sm leading-6 text-white/70 sm:text-base", children: "Review your locations, open directions instantly, and move through each branch without clutter." }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          totalLocations,
          " locations"
        ] }, void 0, true, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation2, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          "Page ",
          currentPage,
          " of ",
          totalPages || 1
        ] }, void 0, true, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.location.tsx",
    lineNumber: 54,
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
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Filter locations" }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Filter value" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "price,wildcard,status", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white", placeholder: "Enter a value" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Search term" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "wildcard", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white", placeholder: "Branch name, city, or state" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Status" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "status", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-pink focus:bg-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "available", children: "Available" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 143,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "out_of_stock", children: "Out of Stock" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 144,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "suspended", children: "Suspended" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand-navy px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy/90 disabled:opacity-60", disabled: isBusy, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 150,
          columnNumber: 11
        }, this),
        isBusy ? "Searching..." : "Search"
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.location.tsx",
    lineNumber: 115,
    columnNumber: 10
  }, this);
}
_s(SearchPanel, "I2WaJhUM5KV32aS1+j3KKeVsgyA=", false, function() {
  return [useNavigation];
});
_c2 = SearchPanel;
function LocationCard({
  location
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "group flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-5 w-5" }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "truncate text-base font-black text-slate-900", children: location.name }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-slate-500", children: [
          location.city,
          ", ",
          location.state_name
        ] }, void 0, true, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 172,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex flex-wrap gap-2 text-xs", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600", children: location.country_name }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600", children: location.state }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-6 text-slate-500", children: location.street || "Location details available from this branch" }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`, target: "_blank", rel: "noopener noreferrer", className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-pink px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-pink/90", children: [
      "Get Directions",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 192,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.location.tsx",
    lineNumber: 163,
    columnNumber: 10
  }, this);
}
_c3 = LocationCard;
function EmptyState() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "mx-auto h-10 w-10 text-slate-300" }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-xl font-black text-slate-900", children: "No locations found" }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Try adjusting the search filters or check back once more branches are available." }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.location.tsx",
    lineNumber: 201,
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
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "/partners/add", className: "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold", children: [
      "Add Location",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 225,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchPanel, {}, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 232,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 231,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-900", children: "Location listings" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 238,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: data?.total_items && data.total_items > 0 ? `${data.total_items} location${data.total_items === 1 ? "" : "s"} available` : "No locations found for the current filters" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 241,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 237,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 246,
            columnNumber: 13
          }, this),
          "Page ",
          data?.current_page ?? 1
        ] }, void 0, true, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 236,
        columnNumber: 9
      }, this),
      isBusy && !data ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-4", children: Array.from({
        length: 4
      }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-64 animate-pulse rounded-[1.5rem] border border-slate-200 bg-white shadow-sm" }, index, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 254,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 251,
        columnNumber: 28
      }, this) : data?.items && data.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4", children: data.items.map((location) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LocationCard, { location }, location._id, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 256,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 255,
        columnNumber: 59
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {}, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 257,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 235,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 sm:flex sm:justify-between sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: query?.last_key_id, pageSize: query?.items_per_page, firstKey: query?.first_key_id }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 261,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 260,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.location.tsx",
    lineNumber: 221,
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
$RefreshReg$(_c3, "LocationCard");
$RefreshReg$(_c4, "EmptyState");
$RefreshReg$(_c5, "PartnerProducts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerProducts as default
};
//# sourceMappingURL=/build/routes/partners.location-4CDDLB3A.js.map
