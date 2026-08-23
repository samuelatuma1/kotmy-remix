import {
  ArrowRight,
  Building2,
  Globe,
  Search,
  Store,
  Users
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

// app/routes/admin.partners._index.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_session = __toESM(require_session(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.partners._index.tsx"' + id);
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
    "app/routes/admin.partners._index.tsx"
  );
  import.meta.hot.lastModified = "1787352356080.65";
}
var statusColors = {
  Approved: "text-green-700 bg-green-50 border-green-200",
  Pending: "text-amber-700 bg-amber-50 border-amber-200",
  Rejected: "text-red-700 bg-red-50 border-red-200",
  PendingVerification: "text-blue-700 bg-blue-50 border-blue-200",
  Trial: "text-violet-700 bg-violet-50 border-violet-200",
  Suspended: "text-slate-700 bg-slate-100 border-slate-200",
  PendingSettlementDisbursement: "text-cyan-700 bg-cyan-50 border-cyan-200"
};
function Banner({
  data
}) {
  const totalPartners = data?.total_items ?? data?.items.length ?? 0;
  const totalPages = data?.total_pages ?? 0;
  const currentPage = data?.current_page ?? 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_16px_50px_rgba(14,42,77,0.15)] sm:px-8 sm:py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-white/5" }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Store, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        "Partner Directory"
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-black leading-tight sm:text-4xl", children: "Manage partners here" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-xl text-sm leading-6 text-white/70 sm:text-base", children: "Manage partners here" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          totalPartners,
          " partners"
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this),
          "Page ",
          currentPage,
          " of ",
          totalPages || 1
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 69,
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
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Filter partners" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Business name" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "legal_business_name", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-pink focus:bg-white", placeholder: "Search by business name" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand-navy px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy/90 disabled:opacity-60", disabled: isBusy, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        isBusy ? "Searching..." : "Search"
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
}
_s(SearchPanel, "I2WaJhUM5KV32aS1+j3KKeVsgyA=", false, function() {
  return [useNavigation];
});
_c2 = SearchPanel;
function StatusBadge({
  status
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${statusColors[status] || "text-slate-600 bg-slate-100 border-slate-200"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-1.5 w-1.5 rounded-full bg-current" }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    status
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 134,
    columnNumber: 10
  }, this);
}
_c3 = StatusBadge;
function PartnerCard({
  partner
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "group flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-5 w-5" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 146,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "truncate text-base font-black text-slate-900", children: partner.legal_business_name }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-slate-500", children: partner.industry }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBadge, { status: partner.status }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 157,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 space-y-2 text-sm text-slate-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "h-4 w-4 shrink-0 text-slate-400" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: partner.country_of_incorporation }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-4 w-4 shrink-0 text-slate-400", children: "\u{1F4DE}" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: partner.phone_number }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-4 w-4 shrink-0 text-slate-400", children: "\u2709\uFE0F" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "truncate", children: partner.contact_person?.email }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: `/admin/partners/details/${partner._id}`, className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-pink px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-pink/90", children: [
      "View Details",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 176,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 143,
    columnNumber: 10
  }, this);
}
_c4 = PartnerCard;
function EmptyState() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Store, { className: "mx-auto h-10 w-10 text-slate-300" }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-xl font-black text-slate-900", children: "No partners found" }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Try adjusting the search filters or check back once more partners are available." }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 185,
    columnNumber: 10
  }, this);
}
_c5 = EmptyState;
function PartnersTable({
  partners
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block w-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full table-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-slate-200 bg-slate-50/80 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-4", children: "Business Name" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 205,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-4", children: "Country" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 206,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-4", children: "Phone" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 207,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-4", children: "Industry" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 208,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-4", children: "Status" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 209,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-4", children: "Contact Person" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 210,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-4 text-right", children: "Actions" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 211,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 204,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 203,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: partners.map((partner) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-slate-100 last:border-b-0 transition-colors hover:bg-slate-50/60", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-pink/10 text-brand-pink", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 219,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 218,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold text-slate-900", children: partner.legal_business_name }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 221,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 217,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 216,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 text-sm text-slate-600", children: partner.country_of_incorporation }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 226,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 text-sm text-slate-600", children: partner.phone_number }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 229,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 text-sm text-slate-600", children: partner.industry }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 232,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBadge, { status: partner.status }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 236,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 235,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-slate-900", children: partner.contact_person?.name }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 240,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500", children: partner.contact_person?.email }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 243,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500", children: partner.contact_person?.phone }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 246,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 239,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 238,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: `/admin/partners/details/${partner._id}`, className: "inline-flex items-center gap-1.5 rounded-xl bg-brand-pink px-4 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-pink/90", children: [
        "Details",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-3.5 w-3.5" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 254,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 252,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 251,
        columnNumber: 17
      }, this)
    ] }, partner._id, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 215,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 214,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 202,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 201,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 200,
    columnNumber: 10
  }, this);
}
_c6 = PartnersTable;
function LoadingSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-48 animate-pulse rounded-[2rem] bg-slate-200/70" }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-24 animate-pulse rounded-[1.75rem] bg-slate-200/70" }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 267,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-5 sm:hidden", children: Array.from({
      length: 3
    }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-56 animate-pulse rounded-[1.5rem] border border-slate-200 bg-white shadow-sm" }, index, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 271,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 268,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden h-80 animate-pulse rounded-[1.75rem] bg-slate-200/70 sm:block" }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 273,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 265,
    columnNumber: 10
  }, this);
}
_c7 = LoadingSkeleton;
function PartnersIndex() {
  _s2();
  const data = useLoaderData();
  const navigation = useNavigation();
  const [search, setSearch] = (0, import_react2.useState)(data.query?.legal_business_name || "");
  if ("redirect" in data && typeof window !== "undefined") {
    window.location.href = data.redirect;
    return null;
  }
  const {
    partnersRes,
    query
  } = data;
  const isBusy = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full min-h-screen bg-tertiary p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, { data: partnersRes }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 294,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchPanel, {}, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 297,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 296,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-900", children: "Partner listings" }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 303,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: partnersRes?.total_items && partnersRes.total_items > 0 ? `${partnersRes.total_items} partner${partnersRes.total_items === 1 ? "" : "s"} available` : "No partners found for the current filters" }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 306,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 302,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 311,
            columnNumber: 13
          }, this),
          "Page ",
          partnersRes?.current_page ?? 1
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 310,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 301,
        columnNumber: 9
      }, this),
      isBusy && !partnersRes?.items?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingSkeleton, {}, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 316,
        columnNumber: 50
      }, this) : partnersRes?.items && partnersRes.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-5 sm:hidden", children: partnersRes.items.map((partner) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PartnerCard, { partner }, partner._id, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 319,
          columnNumber: 49
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 318,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PartnersTable, { partners: partnersRes.items }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 323,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 316,
        columnNumber: 125
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {}, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 324,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 300,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 sm:flex sm:justify-between sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: partnersRes?.last_key_id, pageSize: partnersRes?.items_per_page, firstKey: partnersRes?.first_key_id }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 328,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 327,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 293,
    columnNumber: 10
  }, this);
}
_s2(PartnersIndex, "O+N+dt23Rrs4GYe1uchWBdAUtqs=", false, function() {
  return [useLoaderData, useNavigation];
});
_c8 = PartnersIndex;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
$RefreshReg$(_c, "Banner");
$RefreshReg$(_c2, "SearchPanel");
$RefreshReg$(_c3, "StatusBadge");
$RefreshReg$(_c4, "PartnerCard");
$RefreshReg$(_c5, "EmptyState");
$RefreshReg$(_c6, "PartnersTable");
$RefreshReg$(_c7, "LoadingSkeleton");
$RefreshReg$(_c8, "PartnersIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnersIndex as default
};
//# sourceMappingURL=/build/routes/admin.partners._index-TGNNMPWC.js.map
