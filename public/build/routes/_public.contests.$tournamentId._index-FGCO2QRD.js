import {
  ContestCard
} from "/build/_shared/chunk-WCE7PJHW.js";
import {
  require_tournament
} from "/build/_shared/chunk-R3PEAKI3.js";
import {
  Button
} from "/build/_shared/chunk-FXW5HQF7.js";
import "/build/_shared/chunk-DGIR3IGL.js";
import {
  require_contest
} from "/build/_shared/chunk-5XKVHEZW.js";
import "/build/_shared/chunk-XDSNFUTZ.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  useLoaderData
} from "/build/_shared/chunk-RJTUOXH3.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/_public.contests.$tournamentId._index.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.contests.$tournamentId._index.tsx"
  );
  import.meta.hot.lastModified = "1763528197954.4016";
}
function useTournamentPageController() {
  _s();
  const {
    tournament
  } = useLoaderData();
  return {
    tournament
  };
}
_s(useTournamentPageController, "cPBpVK+KotIPpRJSopX4nDAH1cw=", false, function() {
  return [useLoaderData];
});
function TournamentPage() {
  _s2();
  const {
    tournament
  } = useTournamentPageController();
  const [filteredContests, setFilteredContests] = (0, import_react2.useState)(tournament.contests ?? []);
  const [activeId, setActiveId] = (0, import_react2.useState)("all");
  function handleFilterStatus(e, status) {
    setActiveId(e.currentTarget.id);
    setFilteredContests(tournament.contests.filter((contest) => contest.status === status));
    e.currentTarget.classList.add("bg-accent", "text-white");
  }
  function getAllContestsInTournament(e) {
    setActiveId(e.currentTarget.id);
    setFilteredContests(tournament.contests);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "wrapper my-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-bold max-w-3xl", children: tournament.name }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 82,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-full bg-secondary flex w-fit text-xs sm:text-base", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "all" ? "bg-accent text-white" : ""}`, id: "all", onClick: (e) => getAllContestsInTournament(e), children: "All KOTM" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 88,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "ongoing" ? "bg-accent text-white" : ""}`, id: "ongoing", onClick: (e) => handleFilterStatus(e, "ongoing"), children: "Ongoing" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 89,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "registering" ? "bg-accent text-white" : ""}`, id: "registering", onClick: (e) => handleFilterStatus(e, "registering"), children: "Registering" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 90,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "completed" ? "bg-accent text-white" : ""}`, id: "completed", onClick: (e) => handleFilterStatus(e, "completed"), children: "Completed" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 91,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 87,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 86,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center", children: filteredContests.map((contest) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestCard, { contest, to: contest.id, withTag: true }, contest.id, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 95,
      columnNumber: 50
    }, this)) }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper my-20 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { element: "button", variant: "outline", children: "See more contests" }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 98,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s2(TournamentPage, "MPP7yd2/8TwiPJcKnmiVy1/C5RQ=", false, function() {
  return [useTournamentPageController];
});
_c = TournamentPage;
var _c;
$RefreshReg$(_c, "TournamentPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TournamentPage as default
};
//# sourceMappingURL=/build/routes/_public.contests.$tournamentId._index-FGCO2QRD.js.map
