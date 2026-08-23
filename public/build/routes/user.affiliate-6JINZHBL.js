import {
  Building2,
  Coins,
  Search,
  Trophy,
  Users
} from "/build/_shared/chunk-3UWAUYI3.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  require_wallet
} from "/build/_shared/chunk-ZOVZPUI6.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
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

// app/routes/user.affiliate.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_session = __toESM(require_session(), 1);
var import_wallet = __toESM(require_wallet(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.affiliate.tsx"' + id);
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
    "app/routes/user.affiliate.tsx"
  );
  import.meta.hot.lastModified = "1786869412753.4375";
}
function validateDateRange(start, end) {
  if (!start || !end) {
    return "Please provide both start and end dates.";
  }
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return "Please provide valid start and end dates.";
  }
  if (startDate > endDate) {
    return "Start date cannot be after end date.";
  }
  const monthDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  if (monthDiff > 12) {
    return "Date range cannot exceed 12 months. Please adjust your search.";
  }
  return null;
}
function formatCurrency(amount, currency) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency
  }).format(amount);
}
function PositionBadge({
  position
}) {
  let ringColor = "border-slate-300 text-slate-600";
  let bgColor = "bg-slate-100";
  if (position === 1) {
    ringColor = "border-amber-400 text-amber-700";
    bgColor = "bg-amber-50";
  } else if (position === 2) {
    ringColor = "border-slate-400 text-slate-700";
    bgColor = "bg-slate-100";
  } else if (position === 3) {
    ringColor = "border-orange-300 text-orange-700";
    bgColor = "bg-orange-50";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${ringColor} ${bgColor} text-sm font-black`, children: position }, void 0, false, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 176,
    columnNumber: 10
  }, this);
}
_c = PositionBadge;
function StatChip({
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60", children: label }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-lg font-black text-white", children: value }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 185,
    columnNumber: 10
  }, this);
}
_c2 = StatChip;
function HeroBanner({
  leaderboard,
  query
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_16px_50px_rgba(14,42,77,0.15)] sm:px-8 sm:py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-white/5" }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/user.affiliate.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this),
          "Affiliate Dashboard"
        ] }, void 0, true, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-black leading-tight sm:text-4xl", children: "Your referral earnings" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-xl text-sm leading-6 text-white/70 sm:text-base", children: "Track how much the users and organizations you referred have earned you." }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 214,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 206,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatChip, { label: "Total referrals", value: String(leaderboard.total_items) }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 221,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatChip, { label: "Currency", value: query.currency }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 222,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatChip, { label: "Page", value: String(leaderboard.current_page) }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 223,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 205,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 201,
    columnNumber: 10
  }, this);
}
_c3 = HeroBanner;
function SearchForm({
  query
}) {
  _s();
  const [localError, setLocalError] = (0, import_react2.useState)(null);
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    const start = formData.get("created_at_start_date");
    const end = formData.get("created_at_end_date");
    if (start || end) {
      const err = validateDateRange(start, end);
      if (err) {
        e.preventDefault();
        setLocalError(err);
        return;
      }
    }
    setLocalError(null);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex items-center gap-2 text-slate-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 252,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Filter results" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 253,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", onSubmit: handleSubmit, className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Start date" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 260,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "created_at_start_date", defaultValue: query.created_at_start_date, className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-pink focus:bg-white" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 263,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "End date" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 267,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "created_at_end_date", defaultValue: query.created_at_end_date, className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-pink focus:bg-white" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 270,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 266,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Currency" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 274,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "currency", defaultValue: query.currency, className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-brand-pink focus:bg-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "NGN", children: "NGN (\u20A6)" }, void 0, false, {
            fileName: "app/routes/user.affiliate.tsx",
            lineNumber: 278,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "USD", children: "USD ($)" }, void 0, false, {
            fileName: "app/routes/user.affiliate.tsx",
            lineNumber: 279,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 277,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isBusy, className: "inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand-pink px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-accent disabled:opacity-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/user.affiliate.tsx",
            lineNumber: 285,
            columnNumber: 13
          }, this),
          isBusy ? "Searching..." : "Search"
        ] }, void 0, true, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 284,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/user/affiliate", className: "inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Reset" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 288,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 283,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 258,
      columnNumber: 7
    }, this),
    localError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 rounded-2xl border border-brand-navy/15 bg-brand-navy/5 px-4 py-3 text-sm font-medium text-brand-navy", children: localError }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 294,
      columnNumber: 21
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 250,
    columnNumber: 10
  }, this);
}
_s(SearchForm, "qpOEeYw0TELc657SybjgertRRkc=", false, function() {
  return [useNavigation];
});
_c4 = SearchForm;
function ErrorBanner({
  message
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-2xl border border-brand-navy/15 bg-brand-navy/5 px-5 py-4 text-sm font-medium text-brand-navy", children: message }, void 0, false, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 306,
    columnNumber: 10
  }, this);
}
_c5 = ErrorBanner;
function ResultsHeader({
  leaderboard
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-wrap items-end justify-between gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-900", children: "Referral earnings" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 316,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: leaderboard.total_items > 0 ? `${leaderboard.total_items} referral${leaderboard.total_items === 1 ? "" : "s"} found` : "No referrals found for the current filters" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 319,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 315,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 324,
        columnNumber: 9
      }, this),
      "Page ",
      leaderboard.current_page
    ] }, void 0, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 323,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 314,
    columnNumber: 10
  }, this);
}
_c6 = ResultsHeader;
function AffiliateTable({
  items
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full min-w-[640px] text-left text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-slate-200 bg-slate-50/80", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500", children: "Position" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 338,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500", children: "Referred User" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 341,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500", children: "Type" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 344,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-5 py-4 text-right text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500", children: "Amount Earned" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 347,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 337,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 336,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y divide-slate-100", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "transition-colors hover:bg-slate-50/70", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-5 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PositionBadge, { position: item.position }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 355,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 354,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-5 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-slate-900", children: item.user_name ?? item.business_name ?? "\u2014" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 358,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 357,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-5 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${item.user_name ? "bg-slate-100 text-slate-700" : "bg-brand-navy/10 text-brand-navy"}`, children: [
        item.user_name ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-3.5 w-3.5" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 364,
          columnNumber: 39
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-3.5 w-3.5" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 364,
          columnNumber: 75
        }, this),
        item.user_name ? "User" : "Organization"
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 363,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 362,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-5 py-4 text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-success-500/60 px-3 py-1 text-sm font-black text-success-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Coins, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 370,
          columnNumber: 21
        }, this),
        formatCurrency(item.amount_earned, item.currency)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 369,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 368,
        columnNumber: 17
      }, this)
    ] }, `${item.position}-${item.user_name ?? item.business_name}`, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 353,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 352,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 335,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 334,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 333,
    columnNumber: 10
  }, this);
}
_c7 = AffiliateTable;
function AffiliateTableSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-slate-200 bg-slate-50/80 px-5 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-40 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 384,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 383,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-slate-100", children: Array.from({
      length: 6
    }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4 px-5 py-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-10 shrink-0 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 390,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-1/3 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 392,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-1/4 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 393,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 391,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-8 w-24 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 395,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 389,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 386,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 382,
    columnNumber: 10
  }, this);
}
_c8 = AffiliateTableSkeleton;
function EmptyState() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "mx-auto h-10 w-10 text-slate-300" }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 403,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-xl font-black text-slate-900", children: "No affiliate referrals found" }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 404,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Try adjusting the search filters or date range to see referral earnings." }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 407,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 402,
    columnNumber: 10
  }, this);
}
_c9 = EmptyState;
function AffiliateDashboard() {
  _s2();
  const {
    leaderboard,
    query,
    error
  } = useLoaderData();
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  const hasItems = leaderboard.items.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full min-h-screen bg-tertiary p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroBanner, { leaderboard, query }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 429,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchForm, { query }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 432,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 431,
      columnNumber: 7
    }, this),
    !isBusy && error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorBanner, { message: error }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 435,
      columnNumber: 27
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultsHeader, { leaderboard }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 438,
        columnNumber: 9
      }, this),
      isBusy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AffiliateTableSkeleton, {}, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 440,
        columnNumber: 19
      }, this) : hasItems ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AffiliateTable, { items: leaderboard.items }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 440,
        columnNumber: 59
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {}, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 440,
        columnNumber: 106
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 437,
      columnNumber: 7
    }, this),
    hasItems ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: leaderboard.last_key_id, firstKey: leaderboard.first_key_id, pageSize: leaderboard.items_per_page }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 443,
      columnNumber: 19
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 428,
    columnNumber: 10
  }, this);
}
_s2(AffiliateDashboard, "OMX62wcPrFI16iWG3kGPasoPH40=", false, function() {
  return [useLoaderData, useNavigation];
});
_c10 = AffiliateDashboard;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
$RefreshReg$(_c, "PositionBadge");
$RefreshReg$(_c2, "StatChip");
$RefreshReg$(_c3, "HeroBanner");
$RefreshReg$(_c4, "SearchForm");
$RefreshReg$(_c5, "ErrorBanner");
$RefreshReg$(_c6, "ResultsHeader");
$RefreshReg$(_c7, "AffiliateTable");
$RefreshReg$(_c8, "AffiliateTableSkeleton");
$RefreshReg$(_c9, "EmptyState");
$RefreshReg$(_c10, "AffiliateDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AffiliateDashboard as default
};
//# sourceMappingURL=/build/routes/user.affiliate-6JINZHBL.js.map
