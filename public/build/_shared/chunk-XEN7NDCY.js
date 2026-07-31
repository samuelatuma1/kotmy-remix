import {
  require_classnames
} from "/build/_shared/chunk-JUDIPLC6.js";
import {
  Link2 as Link
} from "/build/_shared/chunk-DM6GBINF.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/reusables/Cta.tsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/Cta.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/Cta.tsx"
  );
  import.meta.hot.lastModified = "1785086289996.5388";
}
var Cta_default = _c2 = import_react.default.forwardRef(_c = function Cta({
  variant = "solid",
  kind = "primary",
  ...props
}, ref) {
  if ("voted" in props) {
    delete props["voted"];
  }
  if (props.element === "button") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref, ...props, className: (0, import_classnames.default)(`border whitespace-nowrap text-center`, {
      "border-disabled text-inherit": props.disabled,
      "bg-brand-pink border-brand-pink hover:bg-brand-pink/90 text-white": variant === "solid",
      "bg-red-600 border-red-600 hover:bg-red-500 text-white": variant === "solid" && kind === "danger",
      "bg-gray-300 border-disabled": variant === "solid" && props.disabled,
      "text-brand-pink border-brand-pink border-2": variant === "outline",
      "border-red-400 text-red-400": kind === "danger" && !props.disabled,
      "border-none": variant === "ghost"
    }, props.className), children: props.children }, void 0, false, {
      fileName: "app/components/reusables/Cta.tsx",
      lineNumber: 33,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { ...props, className: (0, import_classnames.default)(`border whitespace-nowrap text-center`, {
    "bg-brand-pink border-brand-pink hover:bg-brand-pink/90 text-white": variant === "solid",
    "text-brand-pink border-brand-pink border-2": variant === "outline",
    "border-red-400": kind === "danger",
    "text-red-400": kind === "danger"
  }, props.className), children: props.children }, void 0, false, {
    fileName: "app/components/reusables/Cta.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
});
var _c;
var _c2;
$RefreshReg$(_c, "%default%$React.forwardRef");
$RefreshReg$(_c2, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Cta_default
};
//# sourceMappingURL=/build/_shared/chunk-XEN7NDCY.js.map
