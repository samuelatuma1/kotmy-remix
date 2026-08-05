import {
  require_classnames
} from "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

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
  import.meta.hot.lastModified = "1785867200981.0127";
}
function Button({
  children,
  element,
  className,
  variant = "solid",
  kind = "primary",
  useDefault = true,
  ...props
}) {
  const Comp = element;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Comp, { ...props, className: (0, import_classnames.default)(`py-4 px-8 text-lg border ${useDefault ? "border-brand-pink" : ""} rounded-md font-black whitespace-nowrap leading-4 text-center ${className}`, {
    "bg-brand-pink text-white hover:bg-brand-pink/90": variant === "solid",
    "text-brand-pink border-2": variant === "outline",
    "border-red-400": kind === "danger",
    "text-red-400": kind === "danger"
  }), children }, void 0, false, {
    fileName: "app/components/reusables/Button.tsx",
    lineNumber: 33,
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
//# sourceMappingURL=/build/_shared/chunk-SWGHYM4G.js.map
