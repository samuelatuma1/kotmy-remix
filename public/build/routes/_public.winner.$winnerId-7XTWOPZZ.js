import {
  require_contest
} from "/build/_shared/chunk-5XKVHEZW.js";
import {
  useLoaderData
} from "/build/_shared/chunk-MJSDHJ2L.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

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
  import.meta.hot.lastModified = "1760945500077.255";
}
function WinnerDetailsPage() {
  _s();
  const {
    winner,
    error
  } = useLoaderData();
  const description = `We Are Thrilled To Announce The Triumphant Winner Of Our Recent '${winner?.contest_name}'! Let's Take A Moment To Applaud The Outstanding Creativity And Talent That Graced Our Contest.`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-[#EFEFFF] flex items-center justify-center p-4 sm:p-6 lg:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto bg-transparent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-xl order-2 md:order-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: winner?.image_url, alt: winner?.full_name, className: "w-full h-full object-cover" }, void 0, false, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 md:space-y-6 order-1 md:order-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#5B50FB] leading-tight", children: [
        winner?.contest_name,
        " Winner"
      ] }, void 0, true, {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base sm:text-lg text-gray-700 leading-relaxed", children: description }, void 0, false, {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg sm:text-xl font-bold text-gray-900", children: [
        "Grand Winner:",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-900", children: winner?.full_name }, void 0, false, {
          fileName: "app/routes/_public.winner.$winnerId.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        " (",
        winner?.contest_name,
        ")"
      ] }, void 0, true, {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm italic text-gray-600 pt-2", children: [
        `Winner's Note: "`,
        winner?.remark,
        '"'
      ] }, void 0, true, {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.winner.$winnerId.tsx",
    lineNumber: 48,
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
var _c;
$RefreshReg$(_c, "WinnerDetailsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WinnerDetailsPage as default
};
//# sourceMappingURL=/build/routes/_public.winner.$winnerId-7XTWOPZZ.js.map
