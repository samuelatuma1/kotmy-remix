import {
  cn
} from "/build/_shared/chunk-LOUTNZN4.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
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

// app/components/reusables/FormControl.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/FormControl.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/FormControl.tsx"
  );
  import.meta.hot.lastModified = "1757765166866.7634";
}
function FormControl({
  labelClassNames,
  labelText,
  error,
  ...props
}) {
  _s();
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const formControlClasses = cn("p-3 py-2 rounded-lg cursor-text w-full font-medium outline outline-1 outline-secondary hover:outline-accent focus-within:outline", "flex gap-2 items-center", {
    "outline-red-400 hover:outline-red-400": error
  }, props.className);
  const errorElement = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("mt-1 text-red-400 font-semibold leading-none flex gap-1.5 items-end", {
    "hidden": !error
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.warningIcon }, void 0, false, {
      fileName: "app/components/reusables/FormControl.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    error
  ] }, void 0, true, {
    fileName: "app/components/reusables/FormControl.tsx",
    lineNumber: 37,
    columnNumber: 24
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: props.id, className: `block font-bold ${labelClassNames}`, children: [
    labelText,
    props.as === "input" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-invalid": !!error, className: formControlClasses, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: props.icon ?? "", className: cn("basis-6", {
          "hidden": !props.icon
        }) }, void 0, false, {
          fileName: "app/components/reusables/FormControl.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...props, type: props.type === "password" && showPassword ? "text" : props.type, className: cn("bg-transparent autofill:bg-transparent outline-none grow shrink min-w-0 h-6") }, void 0, false, {
          fileName: "app/components/reusables/FormControl.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: showPassword ? icons.hiddenIcon : icons.viewIcon, onClick: () => setShowPassword((prev) => !prev), className: cn("basis-6 cursor-pointer", {
          "hidden": props.type !== "password"
        }) }, void 0, false, {
          fileName: "app/components/reusables/FormControl.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/reusables/FormControl.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      errorElement
    ] }, void 0, true, {
      fileName: "app/components/reusables/FormControl.tsx",
      lineNumber: 43,
      columnNumber: 31
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { cols: 30, rows: 6, ...props, className: `${formControlClasses} ${props.className}` }, void 0, false, {
        fileName: "app/components/reusables/FormControl.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      errorElement
    ] }, void 0, true, {
      fileName: "app/components/reusables/FormControl.tsx",
      lineNumber: 54,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/reusables/FormControl.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(FormControl, "daguiRHWMFkqPgCh/ppD7CF5VuQ=");
_c = FormControl;
var _c;
$RefreshReg$(_c, "FormControl");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  FormControl
};
//# sourceMappingURL=/build/_shared/chunk-OZYT4FIK.js.map
