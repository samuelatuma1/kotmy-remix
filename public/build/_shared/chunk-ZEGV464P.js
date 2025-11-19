import {
  require_classnames
} from "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/reusables/Button.tsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/Button.tsx"
  );
  import.meta.hot.lastModified = "1757765166865.8445";
}
function Button({
  children,
  element,
  className,
  variant = "solid",
  kind = "primary",
  ...props
}) {
  const Comp = element;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Comp, { ...props, className: (0, import_classnames.default)(`py-4 px-8 text-lg border border-accent rounded-md font-black whitespace-nowrap leading-4 text-center ${className}`, {
    "bg-accent text-secondary": variant === "solid",
    "text-accent border-2": variant === "outline",
    "border-red-400": kind === "danger",
    "text-red-400": kind === "danger"
  }), children }, void 0, false, {
    fileName: "app/components/reusables/Button.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = Button;
var _c;
$RefreshReg$(_c, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Button
};
//# sourceMappingURL=/build/_shared/chunk-ZEGV464P.js.map
