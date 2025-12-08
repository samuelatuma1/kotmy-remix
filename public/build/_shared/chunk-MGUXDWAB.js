import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/reusables/Checkbox.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/Checkbox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/Checkbox.tsx"
  );
  import.meta.hot.lastModified = "1757765166866.0664";
}
function Checkbox({
  className,
  checked = false,
  onCheckedChange = () => {
  },
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", checked, className: `cursor-pointer ${className}`, onChange: () => onCheckedChange(checked), ...props }, void 0, false, {
    fileName: "app/components/reusables/Checkbox.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Checkbox;
var _c;
$RefreshReg$(_c, "Checkbox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Checkbox
};
//# sourceMappingURL=/build/_shared/chunk-MGUXDWAB.js.map
