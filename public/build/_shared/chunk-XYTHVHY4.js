import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/reusables/Select.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/Select.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/Select.tsx"
  );
  import.meta.hot.lastModified = "1757765166867.2344";
}
function Select({
  children,
  containerClass,
  className,
  label,
  ...selectProps
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold", children: [
    label,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `border hover:border-primary rounded-lg font-normal overflow-hidden ${containerClass}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: `bg-transparent focus:outline-none p-3 mr-2 cursor-pointer w-[98%] ${className}`, ...selectProps, children }, void 0, false, {
      fileName: "app/components/reusables/Select.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/reusables/Select.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/reusables/Select.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = Select;
var _c;
$RefreshReg$(_c, "Select");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Select
};
//# sourceMappingURL=/build/_shared/chunk-XYTHVHY4.js.map
