import {
  Select
} from "/build/_shared/chunk-VR2MBONM.js";
import {
  Pagination
} from "/build/_shared/chunk-BDARQS7C.js";
import "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_contest
} from "/build/_shared/chunk-5XKVHEZW.js";
import {
  StatusTag
} from "/build/_shared/chunk-6BY4NF3F.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  useLoaderData
} from "/build/_shared/chunk-RJTUOXH3.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

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
  import.meta.hot.lastModified = "1762590160784.8591";
}
function ContestResult() {
  _s();
  const {
    contest
  } = useLoaderData();
  if (!contest)
    throw (0, import_node.redirect)(`/results`);
  console.log(contest);
  const color = contest.status === "registering" ? "yellow" : contest.status === "ongoing" ? "green" : contest.status === "completed" ? "red" : "gray";
  let headings = [];
  let table_results = [];
  if (contest?.final_result_scores) {
    headings = contest.final_result_headings;
    table_results = contest.final_result_scores.map((res) => res.table_data);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "wrapper my-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-accent text-2xl lg:text-4xl lg:leading-snug font-satoshi-bold max-w-3xl uppercase mb-10", children: [
        contest.name,
        " Result Table"
      ] }, void 0, true, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 max-w-2xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Status" }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 65,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusTag, { status: contest.status, color }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 66,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-14", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 70,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: contest.categories.join(", ") }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 71,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 69,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Stages" }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 74,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: contest.no_of_stages ?? 0 }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 75,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 73,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-14", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Duration" }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 80,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: "From May 23 to June 20" }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 81,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 79,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 84,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: contest.prizes }, void 0, false, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 85,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 83,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.results.$contestId.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-white my-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper py-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row-reverse gap-6 md:gap-8 justify-between md:items-center py-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-4 flex-wrap sm:justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "stage", id: "stage", containerClass: "bg-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: [
            contest.name.toUpperCase(),
            " - ",
            "FINAL RESULT TABLE"
          ] }, void 0, true, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 95,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 94,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "category", id: "category", containerClass: "bg-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Sort by category" }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 98,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 97,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 93,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap font-satoshi-bold", children: "SMV: SOCIAL MEDIA VOTES" }, void 0, false, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 101,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 92,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full table-auto border border-secondary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left uppercase font-satoshi-black border border-secondary px-6 py-4", children: "S/N" }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 107,
            columnNumber: 37
          }, this),
          headings.map((heading) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left uppercase font-satoshi-black border border-secondary px-6 py-4", children: heading }, heading, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 108,
            columnNumber: 62
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 106,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 105,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: table_results.map((contestant, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border border-secondary px-6 py-4", children: index + 1 }, void 0, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 114,
            columnNumber: 41
          }, this),
          headings.map((heading) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border border-secondary px-6 py-4", children: contestant[heading] }, heading, false, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 115,
            columnNumber: 66
          }, this))
        ] }, index, true, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 113,
          columnNumber: 75
        }, this)) }, void 0, false, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 111,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 104,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 103,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { className: "p-6" }, void 0, false, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 120,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.results.$contestId.tsx",
      lineNumber: 91,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.results.$contestId.tsx",
      lineNumber: 90,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.results.$contestId.tsx",
    lineNumber: 58,
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
//# sourceMappingURL=/build/routes/_public.results.$contestId-AH2J3NCT.js.map
