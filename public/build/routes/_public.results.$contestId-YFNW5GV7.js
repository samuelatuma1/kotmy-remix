import {
  Select
} from "/build/_shared/chunk-O4R66NJX.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import {
  require_contest
} from "/build/_shared/chunk-7IGOFRJC.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link2 as Link,
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

// app/routes/_public.results.$contestId.tsx
var import_node = __toESM(require_node(), 1);
var import_contest = __toESM(require_contest(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.results.$contestId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.results.$contestId.tsx"
  );
  import.meta.hot.lastModified = "1785511185683.9792";
}
function ContestResult() {
  _s();
  const {
    contest
  } = useLoaderData();
  if (!contest)
    throw (0, import_node.redirect)(`/results`);
  const color = contest.status === "registering" ? "yellow" : contest.status === "ongoing" ? "green" : contest.status === "completed" ? "red" : "gray";
  let headings = [];
  let table_results = [];
  if (contest?.final_result_scores) {
    headings = contest.final_result_headings;
    table_results = contest.final_result_scores.map((res) => res.table_data);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "min-h-screen w-full overflow-x-hidden bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-brand-navy px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.28em] text-white/65", children: "Results" }, void 0, false, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 60,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl", children: [
        contest.name,
        " result table"
      ] }, void 0, true, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base", children: "Final ranking and stage details are shown below." }, void 0, false, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 66,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.results.$contestId.tsx",
      lineNumber: 59,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.results.$contestId.tsx",
      lineNumber: 58,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-brand-grey px-6 py-6 sm:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate", children: "Table controls" }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 76,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-2xl font-black tracking-tight text-brand-navy", children: "Rankings" }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 79,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 75,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal", children: "SMV: Social media votes" }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 85,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/contests/${contest.tournament_unique_id}/${contest.contest_unique_id}/scoreboard`, className: "w-fit text-sm font-bold text-accent transition hover:underline underline-offset-4", children: "Back to scoreboard" }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 88,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 84,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 74,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex min-w-0 flex-wrap gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "stage", id: "stage", containerClass: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: [
            contest.name.toUpperCase(),
            " - ",
            "FINAL RESULT TABLE"
          ] }, void 0, true, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 97,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 96,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "category", id: "category", containerClass: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Sort by category" }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 100,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 99,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 95,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 94,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 73,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-max w-full table-auto border-separate border-spacing-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "sticky left-0 z-20 border-b border-r border-brand-grey bg-gradient-to-b from-brand-navy to-brand-charcoal px-6 py-4 text-left text-xs font-black uppercase tracking-[0.24em] text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.12)]", children: "S/N" }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 110,
            columnNumber: 37
          }, this),
          headings.map((heading) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "border-b border-r border-brand-grey bg-gradient-to-b from-brand-navy to-brand-charcoal px-6 py-4 text-left text-xs font-black uppercase tracking-[0.24em] text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.12)]", children: heading }, heading, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 113,
            columnNumber: 62
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 109,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 108,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: table_results.map((contestant, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "group transition odd:bg-white even:bg-brand-cloud/60 hover:bg-brand-gold/10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "sticky left-0 z-10 border-b border-r border-brand-grey bg-inherit px-6 py-4 text-sm font-semibold text-brand-navy", children: index + 1 }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 118,
            columnNumber: 41
          }, this),
          headings.map((heading) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border-b border-r border-brand-grey px-6 py-4 text-sm text-brand-charcoal", children: contestant[heading] }, heading, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 121,
            columnNumber: 66
          }, this))
        ] }, index, true, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 117,
          columnNumber: 75
        }, this)) }, void 0, false, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 116,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 107,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 106,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-brand-grey bg-gradient-to-r from-brand-cloud via-white to-brand-gold/10 px-6 py-5 sm:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate", children: "Pagination" }, void 0, false, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 129,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-full border border-brand-grey bg-white px-3 py-2 shadow-[0_6px_20px_rgba(14,42,77,0.04)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { className: "p-0" }, void 0, false, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 133,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 132,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 128,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 127,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.results.$contestId.tsx",
      lineNumber: 72,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.results.$contestId.tsx",
    lineNumber: 57,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.results.$contestId.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(ContestResult, "gSdIJyCI8xa3c9KwQD8w4uoDTZ4=", false, function() {
  return [useLoaderData];
});
_c = ContestResult;
var _c;
$RefreshReg$(_c, "ContestResult");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ContestResult as default
};
//# sourceMappingURL=/build/routes/_public.results.$contestId-YFNW5GV7.js.map
