import {
  require_classnames
} from "/build/_shared/chunk-ZE6ILQUM.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/reusables/StatusTag.tsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/StatusTag.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/StatusTag.tsx"
  );
  import.meta.hot.lastModified = "1757765166867.3247";
}
function StatusTag({
  status,
  className,
  color = "gray"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: (0, import_classnames.default)(`w-fit px-4 pl-7 py-1.5 rounded-md text-sm capitalize font-satoshi-medium flex items-center ${className}`, {
    "bg-green-100 text-green-700": color === "green",
    "bg-yellow-100 text-yellow-700": color === "yellow",
    "bg-red-100 text-red-700": color === "red",
    "bg-gray-100 text-gray-700": color === "gray"
  }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "before:content-['\u2022'] before:absolute relative before:-left-4 before:top-[10%] before:text-2xl before:leading-3 whitespace-nowrap", children: status }, void 0, false, {
    fileName: "app/components/reusables/StatusTag.tsx",
    lineNumber: 33,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/reusables/StatusTag.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = StatusTag;
var _c;
$RefreshReg$(_c, "StatusTag");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  StatusTag
};
//# sourceMappingURL=/build/_shared/chunk-XDSNFUTZ.js.map
