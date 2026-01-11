import {
  ContestTable
} from "/build/_shared/chunk-6YFFW2HY.js";
import "/build/_shared/chunk-3ULBCPB3.js";
import "/build/_shared/chunk-PFWQNT33.js";
import "/build/_shared/chunk-X7MJWV53.js";
import {
  Cta_default
} from "/build/_shared/chunk-NKBOX2WC.js";
import "/build/_shared/chunk-NOEFVVE2.js";
import "/build/_shared/chunk-4PSCNRID.js";
import "/build/_shared/chunk-LBAJGJUG.js";
import "/build/_shared/chunk-AV2RONJM.js";
import "/build/_shared/chunk-N5XOLCME.js";
import "/build/_shared/chunk-CMHVCBDB.js";
import "/build/_shared/chunk-LOUTNZN4.js";
import {
  require_contest
} from "/build/_shared/chunk-5XKVHEZW.js";
import "/build/_shared/chunk-KRCVZZ47.js";
import "/build/_shared/chunk-577Q6RJD.js";
import "/build/_shared/chunk-B65OOJCS.js";
import "/build/_shared/chunk-XDSNFUTZ.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-OU5XO7XO.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
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
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/admin.contests._index.tsx
var import_node = __toESM(require_node(), 1);
var import_contest = __toESM(require_contest(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.contests._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.contests._index.tsx"
  );
  import.meta.hot.lastModified = "1766125531407.393";
}
function Contests() {
  _s();
  const {
    contests
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex max-sm:flex-col gap-10 justify-between sm:items-center mb-6 sm:mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Contests" }, void 0, false, {
        fileName: "app/routes/admin.contests._index.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "add", className: "flex gap-2 items-center justify-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
          fileName: "app/routes/admin.contests._index.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this),
        "Create Contest"
      ] }, void 0, true, {
        fileName: "app/routes/admin.contests._index.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.contests._index.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "my-6 sm:my-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestTable, { data: contests }, void 0, false, {
      fileName: "app/routes/admin.contests._index.tsx",
      lineNumber: 75,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.contests._index.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.contests._index.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s(Contests, "zIgZIRCxMByZM4aZjYZMoyi+cSA=", false, function() {
  return [useLoaderData];
});
_c = Contests;
var _c;
$RefreshReg$(_c, "Contests");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contests as default
};
//# sourceMappingURL=/build/routes/admin.contests._index-WVEQRW4J.js.map
