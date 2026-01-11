import {
  ContestCard
} from "/build/_shared/chunk-WCE7PJHW.js";
import {
  require_tournament
} from "/build/_shared/chunk-R3PEAKI3.js";
import "/build/_shared/chunk-DGIR3IGL.js";
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
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/user.all-tournaments.tsx
var import_node = __toESM(require_node(), 1);
var import_tournament = __toESM(require_tournament(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.all-tournaments.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/user.all-tournaments.tsx"
  );
  import.meta.hot.lastModified = "1764484125480.7585";
}
function AllTournaments() {
  _s();
  const {
    tournaments
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "wrapper my-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl lg:text-4xl font-satoshi-medium max-w-3xl", children: "From Artistic Marvels to Captivating Moments. Unleash Your Talent and Win Big in Our Monthly and Yearly Contests!" }, void 0, false, {
      fileName: "app/routes/user.all-tournaments.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.all-tournaments.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center", children: tournaments.map((tournament) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestCard, { contest: tournament, to: `/contests/${tournament.id}` }, tournament.id, false, {
      fileName: "app/routes/user.all-tournaments.tsx",
      lineNumber: 49,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/routes/user.all-tournaments.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.all-tournaments.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(AllTournaments, "zf5kIJmsOPBusavkkMaDEvfRxro=", false, function() {
  return [useLoaderData];
});
_c = AllTournaments;
var _c;
$RefreshReg$(_c, "AllTournaments");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AllTournaments as default
};
//# sourceMappingURL=/build/routes/user.all-tournaments-Q2XDQINN.js.map
