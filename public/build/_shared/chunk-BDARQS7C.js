import {
  Svg,
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/reusables/Pagination.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/Pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/Pagination.tsx"
  );
  import.meta.hot.lastModified = "1757765166867.064";
}
function Pagination({
  className = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex gap-6 md:gap-8 justify-center items-center font-semibold ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex gap-1 items-center rounded py-1 px-2 hover:outline outline-primary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.arrowPrevIcon }, void 0, false, {
        fileName: "app/components/reusables/Pagination.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      " Prev"
    ] }, void 0, true, {
      fileName: "app/components/reusables/Pagination.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap", children: "1 of 20" }, void 0, false, {
      fileName: "app/components/reusables/Pagination.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex gap-1 items-center rounded py-1 px-2 hover:outline outline-primary", children: [
      "Next ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.arrowNextIcon }, void 0, false, {
        fileName: "app/components/reusables/Pagination.tsx",
        lineNumber: 32,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/reusables/Pagination.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/reusables/Pagination.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = Pagination;
var _c;
$RefreshReg$(_c, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Pagination
};
//# sourceMappingURL=/build/_shared/chunk-BDARQS7C.js.map
