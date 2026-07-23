import {
  ChevronRight,
  Search,
  X
} from "/build/_shared/chunk-JCJAKJPK.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
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

// app/routes/admin.partners.settlements.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/admin.partners.settlements.tsx"' + id);
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
    "app/routes/admin.partners.settlements.tsx"
  );
  import.meta.hot.lastModified = "1783288640010.5518";
}
var selectableStatuses = /* @__PURE__ */ new Set(["pending" /* pending */, "failed" /* failed */, "processing" /* processing */, "overdue" /* overdue */]);
function formatMoney(currency, value) {
  return `${currency} ${new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(value)}`;
}
function formatDate(value) {
  try {
    return new Intl.DateTimeFormat("en-NG", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(value));
  } catch (ex) {
    return value;
  }
}
function formatLabel(value) {
  if (!value)
    return "N/A";
  return value.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/\s+/g, " ").trim();
}
function SettlementSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: Array.from({
      length: 3
    }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-28 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 h-6 w-2/3 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-full rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-5/6 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 130,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-24 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 h-8 w-3/4 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-full rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-5/6 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 h-28 rounded-2xl bg-slate-100" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.settlements.tsx",
    lineNumber: 126,
    columnNumber: 10
  }, this);
}
_c = SettlementSkeleton;
function SettlementCard({
  settlement,
  isSelected,
  onSelect,
  onShowDetails
}) {
  const canSelect = selectableStatuses.has(settlement.status);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: `rounded-[1.5rem] border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${isSelected ? "border-slate-900" : "border-slate-200"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
        canSelect ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", checked: isSelected, onChange: () => onSelect(settlement._id), className: "mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900", "aria-label": `Select settlement ${settlement._id}` }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 157,
          columnNumber: 24
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 h-4 w-4 rounded-full border border-slate-300 bg-slate-100", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 157,
          columnNumber: 252
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold text-white", children: settlement.currency }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 161,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600", children: formatLabel(settlement.status) }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 164,
              columnNumber: 15
            }, this),
            !canSelect ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700", children: "Locked" }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 167,
              columnNumber: 29
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 160,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-black text-slate-950", children: formatMoney(settlement.currency, settlement.settlement_amount) }, void 0, false, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 171,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-slate-500", children: [
            "Due ",
            formatDate(settlement.settlement_due_date)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 174,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: onShowDetails, className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: [
        "Show details ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 181,
          columnNumber: 24
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Settlement id" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 187,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 truncate text-sm font-semibold text-slate-900", children: settlement._id }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Business" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 truncate text-sm font-semibold text-slate-900", children: settlement.business?.legal_business_name ?? "Unknown business" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Original amount" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 197,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: formatMoney(settlement.currency, settlement.original_amount) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 196,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Payable share" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: [
          settlement.percent_of_original_amount.toFixed(2),
          "%"
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Order Code" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 209,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 truncate text-sm font-semibold text-slate-900", children: settlement.order_code }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 210,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 208,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Business ID" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 213,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 truncate text-sm font-semibold text-slate-900", children: settlement.business_id }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 214,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 212,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.settlements.tsx",
    lineNumber: 154,
    columnNumber: 10
  }, this);
}
_c2 = SettlementCard;
function SettlementDetailsPanel({
  settlement,
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Settlement details" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-lg font-black text-slate-950", children: "Details panel" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 228,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: onClose, className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900", "aria-label": "Close settlement details", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 231,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, this),
    settlement ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Amount" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 237,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-2xl font-black text-slate-950", children: formatMoney(settlement.currency, settlement.settlement_amount) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 238,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 236,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Business", value: settlement.business?.legal_business_name ?? "Unknown business" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Status", value: formatLabel(settlement.status) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 245,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Due date", value: formatDate(settlement.settlement_due_date) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Settlement ref", value: settlement.unique_key }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 247,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Business id", value: settlement.business_id }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 248,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order code", value: settlement.order_code }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 249,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order id", value: settlement.order_id }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 250,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order item id", value: settlement.order_item_id }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Ledger reference", value: settlement.settlement_ledger_reference ?? "Not set" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 252,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Payment ref", value: settlement.settlement_payment_ref ?? "Not set" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 253,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Payment option", value: formatLabel(settlement.settlement_payment_option) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Waived amount", value: formatMoney(settlement.currency, settlement.waived_amount) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Processing expiry", value: settlement.processing_expiry ? formatDate(String(settlement.processing_expiry)) : "Not set" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Last payment update", value: settlement.last_payment_update ? formatDate(String(settlement.last_payment_update)) : "Not set" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 257,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Created", value: formatDate(settlement.created_at) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 258,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Updated", value: formatDate(settlement.updated_at) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 259,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 243,
        columnNumber: 11
      }, this),
      settlement.all_payment_refs?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Payment refs" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 263,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 space-y-2", children: settlement.all_payment_refs.map((ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-xl bg-white px-3 py-2 text-sm text-slate-700", children: ref }, ref, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 265,
          columnNumber: 57
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 264,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 262,
        columnNumber: 50
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 235,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-500", children: "Pick a settlement to inspect its full payment history and status trail." }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 270,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.settlements.tsx",
    lineNumber: 224,
    columnNumber: 10
  }, this);
}
_c3 = SettlementDetailsPanel;
function DetailRow({
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500", children: label }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 281,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 break-words text-sm font-semibold text-slate-900", children: value }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 282,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.settlements.tsx",
    lineNumber: 280,
    columnNumber: 10
  }, this);
}
_c4 = DetailRow;
function PaymentModal({
  open,
  count,
  total,
  currency,
  onClose,
  selectedIds,
  actionError
}) {
  _s();
  const [paymentOption, setPaymentOption] = (0, import_react2.useState)("provider" /* provider */);
  (0, import_react2.useEffect)(() => {
    if (open)
      setPaymentOption("provider" /* provider */);
  }, [open]);
  if (!open)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-40 flex items-end justify-center bg-slate-950/40 p-4 backdrop-blur-sm sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-lg rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Pay settlements" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 305,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-xl font-black text-slate-950", children: [
          count,
          " selected settlement",
          count > 1 ? "s" : ""
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 306,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-slate-500", children: [
          "Total: ",
          formatMoney(currency, total)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 309,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 304,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: onClose, className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900", "aria-label": "Close payment modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 314,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 313,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 303,
      columnNumber: 9
    }, this),
    actionError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700", children: actionError }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 318,
      columnNumber: 24
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-5 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "pay-settlements" }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 323,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "settlement_ids", value: JSON.stringify(selectedIds) }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 324,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `block cursor-pointer rounded-2xl border p-4 transition ${paymentOption === "provider" /* provider */ ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "payment_option", value: "provider" /* provider */, checked: paymentOption === "provider" /* provider */, onChange: () => setPaymentOption("provider" /* provider */), className: "mt-1 h-4 w-4 text-slate-900 focus:ring-slate-900" }, void 0, false, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 329,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-slate-950", children: "Provider payment" }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 331,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-slate-500", children: "Redirects you to your payment provider and returns you here when it is done." }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 332,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 330,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 328,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 327,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `block cursor-pointer rounded-2xl border p-4 transition ${paymentOption === "wallet" /* wallet */ ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "payment_option", value: "wallet" /* wallet */, checked: paymentOption === "wallet" /* wallet */, onChange: () => setPaymentOption("wallet" /* wallet */), className: "mt-1 h-4 w-4 text-slate-900 focus:ring-slate-900" }, void 0, false, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 341,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-slate-950", children: "Wallet payment" }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 343,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-slate-500", children: "Pays from your wallet immediately and refreshes the settlements list." }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 344,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 342,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 340,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 339,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 326,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row sm:justify-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: onClose, className: "inline-flex h-11 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50", children: "Cancel" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 353,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800", children: "Continue" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 356,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 352,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 322,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.settlements.tsx",
    lineNumber: 302,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.partners.settlements.tsx",
    lineNumber: 301,
    columnNumber: 10
  }, this);
}
_s(PaymentModal, "b7yRrCww7h1MUpQyRmInufunD6A=");
_c5 = PaymentModal;
function PartnerSettlementsIndex() {
  _s2();
  const {
    settlements,
    query,
    error
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [selectedSettlementIds, setSelectedSettlementIds] = (0, import_react2.useState)([]);
  const [activeSettlementId, setActiveSettlementId] = (0, import_react2.useState)(null);
  const [paymentModalOpen, setPaymentModalOpen] = (0, import_react2.useState)(false);
  const activeSettlement = (0, import_react2.useMemo)(() => settlements.items.find((settlement) => settlement._id === activeSettlementId) ?? null, [activeSettlementId, settlements.items]);
  const selectedSettlements = (0, import_react2.useMemo)(() => settlements.items.filter((settlement) => selectedSettlementIds.includes(settlement._id)), [selectedSettlementIds, settlements.items]);
  const selectedTotal = (0, import_react2.useMemo)(() => selectedSettlements.reduce((sum, settlement) => sum + settlement.settlement_amount, 0), [selectedSettlements]);
  (0, import_react2.useEffect)(() => {
    setSelectedSettlementIds((current) => current.filter((id) => settlements.items.some((settlement) => settlement._id === id)));
  }, [settlements.items]);
  const toggleSelection = (settlementId) => {
    setSelectedSettlementIds((current) => current.includes(settlementId) ? current.filter((id) => id !== settlementId) : [...current, settlementId]);
  };
  const showSkeleton = navigation.state === "loading" && settlements.items.length === 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white", children: "Partner settlements" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 546,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl", children: "Track, and review settlements." }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 549,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-sm leading-7 text-slate-500 sm:text-base", children: "Use the filters below to narrow the ledger, inspect a settlement on the side, and choose whether to pay from your wallet or a provider." }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 552,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 545,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MetricCard, { label: "Visible", value: settlements.items.length }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 558,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MetricCard, { label: "Selected", value: selectedSettlementIds.length }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 559,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MetricCard, { label: "Total selected", value: formatMoney(selectedSettlements[0]?.currency ?? "NGN", selectedTotal), wide: true }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 560,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 557,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 544,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 543,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-[2rem] border border-slate-200 bg-white px-6 py-5 shadow-sm sm:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_180px_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Business name" }, void 0, false, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 569,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "business_name", defaultValue: query.business_name ?? "", placeholder: "Search by business name", className: "h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white" }, void 0, false, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 570,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 568,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Status" }, void 0, false, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 573,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "status", defaultValue: query.status ?? "", className: "h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-900 focus:bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "All statuses" }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 575,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pending" /* pending */, children: "Pending" }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 576,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "processing" /* processing */, children: "Processing" }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 577,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "failed" /* failed */, children: "Failed" }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 578,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "overdue" /* overdue */, children: "Overdue" }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 579,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "paid" /* paid */, children: "Paid" }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 580,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "written_off" /* written_off */, children: "Written off" }, void 0, false, {
              fileName: "app/routes/admin.partners.settlements.tsx",
              lineNumber: 581,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 574,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 572,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Order code" }, void 0, false, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 585,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "order_code", defaultValue: query.order_code ?? "", placeholder: "Search by order code", className: "h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white" }, void 0, false, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 586,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 584,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Unique key" }, void 0, false, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 589,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "unique_key", defaultValue: query.unique_key ?? "", placeholder: "Search by settlement key", className: "h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white" }, void 0, false, {
            fileName: "app/routes/admin.partners.settlements.tsx",
            lineNumber: 590,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 588,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 567,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 596,
          columnNumber: 15
        }, this),
        "Filter"
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 595,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 594,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 566,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 565,
      columnNumber: 7
    }, this),
    error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-[1.5rem] border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700", children: error }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 603,
      columnNumber: 16
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        showSkeleton ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettlementSkeleton, {}, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 609,
          columnNumber: 27
        }, this) : settlements.items.length > 0 ? settlements.items.map((settlement) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettlementCard, { settlement, isSelected: selectedSettlementIds.includes(settlement._id), onSelect: toggleSelection, onShowDetails: () => setActiveSettlementId(settlement._id) }, settlement._id, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 609,
          columnNumber: 119
        }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-200 bg-white px-6 py-14 text-center text-sm text-slate-500 shadow-sm", children: "No settlements matched your filters." }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 609,
          columnNumber: 333
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: settlements.last_key_id, firstKey: settlements.first_key_id, pageSize: settlements.items_per_page }, void 0, false, {
          fileName: "app/routes/admin.partners.settlements.tsx",
          lineNumber: 613,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 608,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:self-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettlementDetailsPanel, { settlement: activeSettlement, onClose: () => setActiveSettlementId(null) }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 617,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners.settlements.tsx",
        lineNumber: 616,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 607,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaymentModal, { open: paymentModalOpen, count: selectedSettlementIds.length, total: selectedTotal, currency: selectedSettlements[0]?.currency ?? "NGN", onClose: () => setPaymentModalOpen(false), selectedIds: selectedSettlementIds, actionError: actionData?.error }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 623,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.settlements.tsx",
    lineNumber: 542,
    columnNumber: 10
  }, this);
}
_s2(PartnerSettlementsIndex, "bG32UBGGHNsMb6b139Lx3icpIVQ=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c6 = PartnerSettlementsIndex;
function MetricCard({
  label,
  value,
  wide = false
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 ${wide ? "sm:col-span-3 lg:col-span-1" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500", children: label }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 636,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-lg font-black text-slate-950", children: value }, void 0, false, {
      fileName: "app/routes/admin.partners.settlements.tsx",
      lineNumber: 637,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.settlements.tsx",
    lineNumber: 635,
    columnNumber: 10
  }, this);
}
_c7 = MetricCard;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
$RefreshReg$(_c, "SettlementSkeleton");
$RefreshReg$(_c2, "SettlementCard");
$RefreshReg$(_c3, "SettlementDetailsPanel");
$RefreshReg$(_c4, "DetailRow");
$RefreshReg$(_c5, "PaymentModal");
$RefreshReg$(_c6, "PartnerSettlementsIndex");
$RefreshReg$(_c7, "MetricCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerSettlementsIndex as default
};
//# sourceMappingURL=/build/routes/admin.partners.settlements-XFOI7PRW.js.map
