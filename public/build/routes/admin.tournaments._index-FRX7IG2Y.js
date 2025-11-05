import {
  TournamentCard
} from "/build/_shared/chunk-Y23FZ6XG.js";
import "/build/_shared/chunk-XGVXYWCS.js";
import "/build/_shared/chunk-B7QPMP4F.js";
import "/build/_shared/chunk-VRCWIES3.js";
import "/build/_shared/chunk-X7MJWV53.js";
import {
  Cta_default
} from "/build/_shared/chunk-JSO2QJI7.js";
import "/build/_shared/chunk-NOEFVVE2.js";
import "/build/_shared/chunk-4PSCNRID.js";
import "/build/_shared/chunk-AV2RONJM.js";
import "/build/_shared/chunk-N5XOLCME.js";
import "/build/_shared/chunk-CMHVCBDB.js";
import "/build/_shared/chunk-LOUTNZN4.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  require_tournament
} from "/build/_shared/chunk-R3PEAKI3.js";
import "/build/_shared/chunk-DGIR3IGL.js";
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

// app/routes/admin.tournaments._index.tsx
var import_node = __toESM(require_node(), 1);
var import_tournament = __toESM(require_tournament(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.tournaments._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.tournaments._index.tsx"
  );
  import.meta.hot.lastModified = "1760080481968.5461";
}
function Tournaments() {
  _s();
  const {
    tournaments
  } = useLoaderData();
  const numberOfContests = tournaments.reduce((total, tournament) => total + tournament.contests.length, 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Tournaments" }, void 0, false, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 93,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 95,
          columnNumber: 21
        }, this),
        "Create Tournament"
      ] }, void 0, true, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 94,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 92,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "sm:flex justify-evenly max-w-xl mx-auto gap-2 p-3 border rounded-md my-4 bg-[#F6F8FA] text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.adminTournamentIcon, className: "text-primary" }, void 0, false, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 101,
          columnNumber: 75
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 101,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grid", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary font-satoshi-black", children: tournaments.length }, void 0, false, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 103,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "", children: "Tournaments Created" }, void 0, false, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 104,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 102,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 100,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-sm:my-2 max-sm:border-t sm:border-r sm:h-10" }, void 0, false, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 107,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, false, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 109,
          columnNumber: 75
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 109,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grid", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary font-satoshi-black", children: numberOfContests }, void 0, false, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 111,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "", children: "Contests Created" }, void 0, false, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 112,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 110,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 108,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "add", className: "flex sm:hidden gap-2 justify-center items-center rounded-lg px-3 py-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      "Create Tournament"
    ] }, void 0, true, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "my-8 grid sm:grid-cols-2 gap-6", children: tournaments.map((tournament) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TournamentCard, { tournament }, tournament.id, false, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 121,
      columnNumber: 48
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 120,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tournaments._index.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s(Tournaments, "zf5kIJmsOPBusavkkMaDEvfRxro=", false, function() {
  return [useLoaderData];
});
_c = Tournaments;
var _c;
$RefreshReg$(_c, "Tournaments");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Tournaments as default
};
//# sourceMappingURL=/build/routes/admin.tournaments._index-FRX7IG2Y.js.map
