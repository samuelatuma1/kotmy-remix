import {
  require_classnames
} from "/build/_shared/chunk-ZE6ILQUM.js";
import {
  Link2 as Link
} from "/build/_shared/chunk-RJTUOXH3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

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
  import.meta.hot.lastModified = "1757765166866.2666";
}
var Cta_default = _c2 = import_react.default.forwardRef(_c = function Cta({
  variant = "solid",
  kind = "primary",
  ...props
}, ref) {
  if (props.element === "button") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref, ...props, className: (0, import_classnames.default)(`border whitespace-nowrap text-center`, {
      "border-disabled text-inherit": props.disabled,
      "bg-accent border-accent hover:bg-accent/90 text-secondary": variant === "solid",
      "bg-red-600 border-red-600 hover:bg-red-400 text-secondary": variant === "solid" && kind === "danger",
      "bg-gray-300 border-disabled": variant === "solid" && props.disabled,
      "text-accent border-accent border-2": variant === "outline",
      "border-red-400 text-red-400": kind === "danger" && !props.disabled,
      "border-none": variant === "ghost"
    }, props.className), children: props.children }, void 0, false, {
      fileName: "app/components/reusables/Cta.tsx",
      lineNumber: 30,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { ...props, className: (0, import_classnames.default)(`border whitespace-nowrap text-center`, {
    "bg-accent border-accent hover:bg-accent/90 text-secondary": variant === "solid",
    "text-accent border-accent border-2": variant === "outline",
    "border-red-400": kind === "danger",
    "text-red-400": kind === "danger"
  }, props.className), children: props.children }, void 0, false, {
    fileName: "app/components/reusables/Cta.tsx",
    lineNumber: 40,
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
//# sourceMappingURL=/build/_shared/chunk-JSO2QJI7.js.map
