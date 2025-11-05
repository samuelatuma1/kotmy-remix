import {
  ContestCard
} from "/build/_shared/chunk-37FD6ZTR.js";
import {
  require_tournament
} from "/build/_shared/chunk-R3PEAKI3.js";
import {
  Button
} from "/build/_shared/chunk-ZEGV464P.js";
import "/build/_shared/chunk-DGIR3IGL.js";
import {
  require_contest
} from "/build/_shared/chunk-5XKVHEZW.js";
import "/build/_shared/chunk-6BY4NF3F.js";
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

// app/routes/_public.contests.$tournamentId._index.tsx
var import_node = __toESM(require_node(), 1);
var import_contest = __toESM(require_contest(), 1);
var import_tournament = __toESM(require_tournament(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.contests.$tournamentId._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.contests.$tournamentId._index.tsx"
  );
  import.meta.hot.lastModified = "1760080481941.858";
}
function TournamentPage() {
  _s();
  const {
    tournament
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "wrapper my-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-bold max-w-3xl", children: tournament.name }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-full bg-secondary flex w-fit text-xs sm:text-base", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium bg-accent text-white", children: "All KOTM" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium", children: "Ongoing" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 64,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium", children: "Registering" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium", children: "Completed" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 62,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center", children: tournament.contests.map((contest) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestCard, { contest, to: contest.id, withTag: true }, contest.id, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 70,
      columnNumber: 53
    }, this)) }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper my-20 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { element: "button", variant: "outline", children: "See more contests" }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 73,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(TournamentPage, "cPBpVK+KotIPpRJSopX4nDAH1cw=", false, function() {
  return [useLoaderData];
});
_c = TournamentPage;
var _c;
$RefreshReg$(_c, "TournamentPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TournamentPage as default
};
//# sourceMappingURL=/build/routes/_public.contests.$tournamentId._index-HG6UMJHR.js.map
