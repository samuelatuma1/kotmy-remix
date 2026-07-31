import {
  TournamentCard
} from "/build/_shared/chunk-JBZUTT2T.js";
import "/build/_shared/chunk-GKPHRQRO.js";
import {
  require_tournament
} from "/build/_shared/chunk-RCMPT52E.js";
import "/build/_shared/chunk-WXTNT2LW.js";
import "/build/_shared/chunk-A53UP4AC.js";
import "/build/_shared/chunk-3BSRYLMA.js";
import "/build/_shared/chunk-CWOOXBW5.js";
import "/build/_shared/chunk-GJTSJNT7.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import "/build/_shared/chunk-7JPCB6PC.js";
import "/build/_shared/chunk-4X4SKXSG.js";
import "/build/_shared/chunk-OUFOGEKV.js";
import "/build/_shared/chunk-LT4K6HQS.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-XEN7NDCY.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
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
  import.meta.hot.lastModified = "1775366441158.734";
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
        lineNumber: 95,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 97,
          columnNumber: 21
        }, this),
        "Create Tournament"
      ] }, void 0, true, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "sm:flex justify-evenly max-w-xl mx-auto gap-2 p-3 border rounded-md my-4 bg-[#F6F8FA] text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.adminTournamentIcon, className: "text-primary" }, void 0, false, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 103,
          columnNumber: 75
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 103,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grid", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary font-satoshi-black", children: tournaments.length }, void 0, false, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 105,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "", children: "Tournaments Created" }, void 0, false, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 106,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 104,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-sm:my-2 max-sm:border-t sm:border-r sm:h-10" }, void 0, false, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, false, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 111,
          columnNumber: 75
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 111,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grid", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary font-satoshi-black", children: numberOfContests }, void 0, false, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 113,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "", children: "Contests Created" }, void 0, false, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 114,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 112,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 110,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "add", className: "flex sm:hidden gap-2 justify-center items-center rounded-lg px-3 py-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 119,
        columnNumber: 17
      }, this),
      "Create Tournament"
    ] }, void 0, true, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 118,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "my-8 grid sm:grid-cols-2 gap-6", children: tournaments.map((tournament) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TournamentCard, { tournament }, tournament.id, false, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 123,
      columnNumber: 48
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 122,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tournaments._index.tsx",
    lineNumber: 93,
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
//# sourceMappingURL=/build/routes/admin.tournaments._index-5KS33HYH.js.map
