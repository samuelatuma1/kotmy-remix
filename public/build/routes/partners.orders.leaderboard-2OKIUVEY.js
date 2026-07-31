import {
  Search,
  Trophy
} from "/build/_shared/chunk-JCJAKJPK.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-QLSTRVVQ.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
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

// app/routes/partners.orders.leaderboard.tsx
var import_node = __toESM(require_node(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partners.orders.leaderboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/partners.orders.leaderboard.tsx"
  );
  import.meta.hot.lastModified = "1785087491323.1863";
}
function LeaderboardSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: Array.from({
    length: 5
  }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-10 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-1/3 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-1/2 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 81,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-6 w-20 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders.leaderboard.tsx",
    lineNumber: 77,
    columnNumber: 11
  }, this) }, index, false, {
    fileName: "app/routes/partners.orders.leaderboard.tsx",
    lineNumber: 76,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/routes/partners.orders.leaderboard.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_c = LeaderboardSkeleton;
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${ringColor} ${bgColor} text-lg font-black`, children: position }, void 0, false, {
    fileName: "app/routes/partners.orders.leaderboard.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
}
_c2 = PositionBadge;
function LeaderboardRow({
  entry
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PositionBadge, { position: entry.position }, void 0, false, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-black text-slate-950  trunc_", children: entry.user_full_name || "Unknown" }, void 0, false, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      entry.business_name ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500  trunc_", children: entry.business_name }, void 0, false, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 120,
        columnNumber: 34
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shrink-0 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white", children: [
      entry.currency,
      " ",
      " ",
      " ",
      entry.amount?.toLocaleString("en")
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders.leaderboard.tsx",
    lineNumber: 113,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/partners.orders.leaderboard.tsx",
    lineNumber: 112,
    columnNumber: 10
  }, this);
}
_c3 = LeaderboardRow;
function GeneralOrdersLeaderboard() {
  _s();
  const {
    leaderboard,
    query,
    error
  } = useLoaderData();
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  const hasItems = leaderboard.items.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full grow bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.orders.leaderboard.tsx",
            lineNumber: 171,
            columnNumber: 15
          }, this),
          "Leaderboard"
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: "Leaderboard" }, void 0, false, {
            fileName: "app/routes/partners.orders.leaderboard.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: "Your top earners for the selected time frame" }, void 0, false, {
            fileName: "app/routes/partners.orders.leaderboard.tsx",
            lineNumber: 178,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: error }, void 0, false, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 185,
        columnNumber: 18
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Start date" }, void 0, false, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 195,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "order_item_fulfilled_at_start_date", defaultValue: query.order_item_fulfilled_at_start_date ?? "", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white" }, void 0, false, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "End date" }, void 0, false, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "order_item_fulfilled_at_end_date", defaultValue: query.order_item_fulfilled_at_end_date ?? "", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white" }, void 0, false, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 199,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.orders.leaderboard.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this),
          "Search"
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", className: "inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Reset" }, void 0, false, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 209,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 191,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-950", children: "See our leaderboard" }, void 0, false, {
            fileName: "app/routes/partners.orders.leaderboard.tsx",
            lineNumber: 219,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: leaderboard.total_items > 0 ? `${leaderboard.total_items} entr${leaderboard.total_items === 1 ? "y" : "ies"} found` : "No entries found for the current filters" }, void 0, false, {
            fileName: "app/routes/partners.orders.leaderboard.tsx",
            lineNumber: 220,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.orders.leaderboard.tsx",
            lineNumber: 225,
            columnNumber: 13
          }, this),
          "Page ",
          leaderboard.current_page
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 224,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this),
      isBusy && !hasItems ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LeaderboardSkeleton, {}, void 0, false, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 230,
        columnNumber: 32
      }, this) : hasItems ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: leaderboard.items.map((entry, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LeaderboardRow, { entry }, `${entry.position}-${entry.user_full_name ?? entry.business_name ?? index}`, false, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 231,
        columnNumber: 54
      }, this)) }, void 0, false, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 230,
        columnNumber: 69
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { className: "mx-auto h-10 w-10 text-slate-300" }, void 0, false, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 233,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-xl font-black text-slate-950", children: "No entries found" }, void 0, false, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 234,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Try adjusting the search filters or date range to see leaderboard results." }, void 0, false, {
          fileName: "app/routes/partners.orders.leaderboard.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.leaderboard.tsx",
        lineNumber: 232,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: leaderboard.last_key_id, firstKey: leaderboard.first_key_id, pageSize: leaderboard.items_per_page }, void 0, false, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 242,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders.leaderboard.tsx",
      lineNumber: 241,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders.leaderboard.tsx",
    lineNumber: 166,
    columnNumber: 10
  }, this);
}
_s(GeneralOrdersLeaderboard, "OMX62wcPrFI16iWG3kGPasoPH40=", false, function() {
  return [useLoaderData, useNavigation];
});
_c4 = GeneralOrdersLeaderboard;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "LeaderboardSkeleton");
$RefreshReg$(_c2, "PositionBadge");
$RefreshReg$(_c3, "LeaderboardRow");
$RefreshReg$(_c4, "GeneralOrdersLeaderboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GeneralOrdersLeaderboard as default
};
//# sourceMappingURL=/build/routes/partners.orders.leaderboard-2OKIUVEY.js.map
