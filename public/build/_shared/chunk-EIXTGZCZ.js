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

// app/components/reusables/ToggleTip.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/ToggleTip.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/ToggleTip.tsx"
  );
  import.meta.hot.lastModified = "1757765166867.6072";
}
function Toggletip({
  mainComponent,
  children,
  mainContainerClass = "",
  childContainerClass = ""
}) {
  _s();
  const [open, setOpen] = (0, import_react.useState)(false);
  const toggletip = (0, import_react.useRef)(null);
  function handleOutsideClick(e) {
    if (e.target !== toggletip.current && !toggletip.current?.contains(e.target)) {
      setOpen(false);
    }
  }
  (0, import_react.useEffect)(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: toggletip, onClick: () => {
    setOpen((prev) => !prev);
  }, className: `relative cursor-pointer ${mainContainerClass}`, children: [
    mainComponent,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute min-w-full rounded-2xl z-10 ${open ? "" : "hidden"} ${childContainerClass}`, children }, void 0, false, {
      fileName: "app/components/reusables/ToggleTip.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/reusables/ToggleTip.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Toggletip, "0nue1WYcWQZ0BkjuxYISzD2WfRQ=");
_c = Toggletip;
var _c;
$RefreshReg$(_c, "Toggletip");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Toggletip
};
//# sourceMappingURL=/build/_shared/chunk-EIXTGZCZ.js.map
