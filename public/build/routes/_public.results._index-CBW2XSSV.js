import {
  ContestCard
} from "/build/_shared/chunk-TF32PXEX.js";
import {
  require_contest
} from "/build/_shared/chunk-7IGOFRJC.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import "/build/_shared/chunk-6HD2VEKU.js";
import "/build/_shared/chunk-7JPCB6PC.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useLoaderData
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

// app/routes/_public.results._index.tsx
var import_node = __toESM(require_node(), 1);
var import_contest = __toESM(require_contest(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.results._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.results._index.tsx"
  );
  import.meta.hot.lastModified = "1785501322831.8433";
}
function Results() {
  _s();
  const {
    contests
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "wrapper my-10 sm:my-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-14", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" }, void 0, false, {
          fileName: "app/routes/_public.results._index.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "relative text-xs font-semibold uppercase tracking-[0.28em] text-white/70", children: "Results" }, void 0, false, {
          fileName: "app/routes/_public.results._index.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "relative mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl", children: "Congratulating the extraordinary talents that stole the spotlight" }, void 0, false, {
          fileName: "app/routes/_public.results._index.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "relative mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base", children: "Explore the completed contest results, celebrate top performers, and browse the standout moments that earned the crown." }, void 0, false, {
          fileName: "app/routes/_public.results._index.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.results._index.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-stretch p-6 sm:p-8 lg:p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col justify-between rounded-[1.75rem] border border-brand-grey bg-secondary p-5 shadow-[0_10px_30px_rgba(14,42,77,0.05)] sm:p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate", children: "Explore" }, void 0, false, {
            fileName: "app/routes/_public.results._index.tsx",
            lineNumber: 82,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-2xl font-black tracking-tight text-brand-navy", children: "Discover every winning moment" }, void 0, false, {
            fileName: "app/routes/_public.results._index.tsx",
            lineNumber: 85,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.results._index.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid gap-3 sm:grid-cols-2" }, void 0, false, {
          fileName: "app/routes/_public.results._index.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.results._index.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.results._index.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full max-w-full px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex min-w-max rounded-full bg-secondary p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap rounded-full bg-accent p-3 text-xs font-satoshi-medium text-white sm:px-6 sm:py-4 sm:text-base", children: "All Contests" }, void 0, false, {
        fileName: "app/routes/_public.results._index.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap rounded-full p-3 text-xs font-satoshi-medium sm:px-6 sm:py-4 sm:text-base", children: "Ongoing Contests" }, void 0, false, {
        fileName: "app/routes/_public.results._index.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap rounded-full p-3 text-xs font-satoshi-medium sm:px-6 sm:py-4 sm:text-base", children: "Completed Contests" }, void 0, false, {
        fileName: "app/routes/_public.results._index.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "wrapper my-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 justify-items-center", children: contests.items.map((contest) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestCard, { contest, to: `/results/${contest.contest_unique_id}`, withTag: true, withCategory: true }, contest.id, false, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 116,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper my-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: contests.last_key_id, firstKey: contests.first_key_id, pageSize: contests.items_per_page }, void 0, false, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.results._index.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(Results, "zIgZIRCxMByZM4aZjYZMoyi+cSA=", false, function() {
  return [useLoaderData];
});
_c = Results;
function HeroStat({
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.25rem] border border-brand-grey bg-white px-4 py-4 shadow-[0_6px_20px_rgba(14,42,77,0.04)] transition hover:-translate-y-0.5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-slate", children: label }, void 0, false, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm font-semibold text-brand-navy", children: value }, void 0, false, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.results._index.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_c2 = HeroStat;
var _c;
var _c2;
$RefreshReg$(_c, "Results");
$RefreshReg$(_c2, "HeroStat");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Results as default
};
//# sourceMappingURL=/build/routes/_public.results._index-CBW2XSSV.js.map
