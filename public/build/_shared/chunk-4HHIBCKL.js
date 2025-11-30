import {
  Svg
} from "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_classnames
} from "/build/_shared/chunk-ZE6ILQUM.js";
import {
  Link2 as Link
} from "/build/_shared/chunk-MJSDHJ2L.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/reusables/RoundCta.tsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/RoundCta.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/RoundCta.tsx"
  );
  import.meta.hot.lastModified = "1757765166867.149";
}
var RoundCta_default = _c2 = import_react.default.forwardRef(_c = function RoundCta({
  icon,
  className = "",
  iconClass = "",
  ...props
}, ref) {
  const disabled = props.element === "link" ? props["aria-disabled"] : props.disabled || props["aria-disabled"];
  const classNames = (0, import_classnames.default)(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full ${className}`, {
    "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
  });
  if (props.element === "link") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { ...props, className: classNames, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icon, className: iconClass }, void 0, false, {
      fileName: "app/components/reusables/RoundCta.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/reusables/RoundCta.tsx",
      lineNumber: 36,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref, ...props, className: classNames, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icon, className: iconClass }, void 0, false, {
    fileName: "app/components/reusables/RoundCta.tsx",
    lineNumber: 41,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/reusables/RoundCta.tsx",
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
  RoundCta_default
};
//# sourceMappingURL=/build/_shared/chunk-4HHIBCKL.js.map
