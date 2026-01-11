import {
  require_contest
} from "/build/_shared/chunk-5XKVHEZW.js";
import {
  require_actions
} from "/build/_shared/chunk-AUWIFI2P.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Outlet
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

// app/routes/_public.contests.$tournamentId.$contestId.tsx
var import_node = __toESM(require_node(), 1);
var import_contest = __toESM(require_contest(), 1);
var import_session = __toESM(require_session(), 1);
var import_actions = __toESM(require_actions(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.contests.$tournamentId.$contestId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.contests.$tournamentId.$contestId.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.3145";
}
function ContestLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_c = ContestLayout;
var _c;
$RefreshReg$(_c, "ContestLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ContestLayout as default
};
//# sourceMappingURL=/build/routes/_public.contests.$tournamentId.$contestId-Q7MBGK42.js.map
