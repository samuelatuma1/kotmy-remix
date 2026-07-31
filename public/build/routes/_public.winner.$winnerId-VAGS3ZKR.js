import {
  require_contest
} from "/build/_shared/chunk-7IGOFRJC.js";
import {
  useLoaderData
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

// app/routes/_public.winner.$winnerId.tsx
var import_contest = __toESM(require_contest(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.winner.$winnerId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.winner.$winnerId.tsx"
  );
  import.meta.hot.lastModified = "1785097671232.6924";
}
function WinnerDetailsPage() {
  _s();
  const {
    winner,
    error
  } = useLoaderData();
  const description = `We Are Thrilled To Announce The Triumphant Winner Of Our Recent '${winner?.contest_name}'! Let's Take A Moment To Applaud The Outstanding Creativity And Talent That Graced Our Contest.`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "min-h-screen w-full overflow-x-hidden bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid min-w-0 gap-6 lg:grid-cols-[0.95fr_1.05fr]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-[3/4] w-full bg-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: winner?.image_url, alt: winner?.full_name, className: "h-full w-full object-cover" }, void 0, false, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 49,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "min-w-0 overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-brand-grey bg-gradient-to-br from-brand-navy via-brand-navy to-brand-pink px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.28em] text-white/70", children: "Winner Spotlight" }, void 0, false, {
          fileName: "app/routes/_public.winner.$winnerId.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-4 break-words text-3xl font-black leading-tight sm:text-4xl lg:text-5xl", children: [
          winner?.contest_name,
          " Winner"
        ] }, void 0, true, {
          fileName: "app/routes/_public.winner.$winnerId.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 max-w-2xl break-words text-sm leading-7 text-white/80 sm:text-base", children: description }, void 0, false, {
          fileName: "app/routes/_public.winner.$winnerId.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6 px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid min-w-0 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoTile, { label: "Grand Winner", value: winner?.full_name || "Unknown" }, void 0, false, {
            fileName: "app/routes/_public.winner.$winnerId.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoTile, { label: "Contest", value: winner?.contest_name || "Unknown" }, void 0, false, {
            fileName: "app/routes/_public.winner.$winnerId.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.winner.$winnerId.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-brand-grey bg-secondary p-5 sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate", children: "Winner's Note" }, void 0, false, {
            fileName: "app/routes/_public.winner.$winnerId.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-sm leading-7 text-brand-charcoal sm:text-base", children: winner?.remark }, void 0, false, {
            fileName: "app/routes/_public.winner.$winnerId.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.winner.$winnerId.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PillStat, { label: "Visibility", value: "Featured" }, void 0, false, {
            fileName: "app/routes/_public.winner.$winnerId.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PillStat, { label: "Style", value: "Premium" }, void 0, false, {
            fileName: "app/routes/_public.winner.$winnerId.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PillStat, { label: "Palette", value: "White First" }, void 0, false, {
            fileName: "app/routes/_public.winner.$winnerId.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.winner.$winnerId.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.winner.$winnerId.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.winner.$winnerId.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.winner.$winnerId.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s(WinnerDetailsPage, "FqFoS6VYUacL5j9ZggADMTo5Ha8=", false, function() {
  return [useLoaderData];
});
_c = WinnerDetailsPage;
function InfoTile({
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 rounded-[1.5rem] border border-brand-grey bg-white px-4 py-4 shadow-[0_6px_20px_rgba(14,42,77,0.04)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-slate", children: label }, void 0, false, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 truncate text-sm font-semibold text-brand-navy", children: value }, void 0, false, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.winner.$winnerId.tsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
}
_c2 = InfoTile;
function PillStat({
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 rounded-full border border-brand-grey bg-white px-4 py-3 text-center shadow-[0_6px_20px_rgba(14,42,77,0.04)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-slate", children: label }, void 0, false, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm font-semibold text-brand-navy", children: value }, void 0, false, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.winner.$winnerId.tsx",
    lineNumber: 114,
    columnNumber: 10
  }, this);
}
_c3 = PillStat;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "WinnerDetailsPage");
$RefreshReg$(_c2, "InfoTile");
$RefreshReg$(_c3, "PillStat");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WinnerDetailsPage as default
};
//# sourceMappingURL=/build/routes/_public.winner.$winnerId-VAGS3ZKR.js.map
