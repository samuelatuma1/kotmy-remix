import {
  FormControl
} from "/build/_shared/chunk-P6IR6DKG.js";
import {
  CounterClockwiseClockIcon
} from "/build/_shared/chunk-LT4K6HQS.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-ZTZJB4DO.js";
import {
  Cta_default
} from "/build/_shared/chunk-55Q66HLJ.js";
import {
  require_classnames
} from "/build/_shared/chunk-JUDIPLC6.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/admin/RolesFormControl.tsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/RolesFormControl.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/RolesFormControl.tsx"
  );
  import.meta.hot.lastModified = "1773330496001.6226";
}
function RolesFormControl({
  roles,
  defaultRoles,
  ...props
}) {
  _s();
  const [open, setOpen] = (0, import_react.useState)(false);
  const fieldset = (0, import_react.useRef)(null);
  function resetFieldset(e) {
    e.currentTarget.form?.roles.forEach((item) => {
      item.checked = item.defaultChecked;
    });
  }
  function labelize(_role) {
    return _role.split("_").join(" ");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { ref: fieldset, ...props, className: "p-2 sm:p-4 rounded-lg bg-transparent border hover:border-primary sm:col-span-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-open": open, className: "flex justify-between data-[open=true]:pb-2 sm:data-[open=true]:pb-3 data-[open=true]:border-b", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex gap-2 items-center font-bold cursor-pointer grow", onClick: () => setOpen((prev) => !prev), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.arrowDownIcon, className: open ? "" : "-rotate-90" }, void 0, false, {
          fileName: "app/components/admin/RolesFormControl.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this),
        "Roles"
      ] }, void 0, true, {
        fileName: "app/components/admin/RolesFormControl.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "button", variant: "outline", "aria-label": "restore defaults", className: "p-2 sm:px-8 sm:py-2 rounded-lg font-medium text-red-500 border-secondary active:border-red-300 sm:hover:border-red-300", onClick: resetFieldset, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CounterClockwiseClockIcon, { className: "text-inherit sm:hidden" }, void 0, false, {
          fileName: "app/components/admin/RolesFormControl.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:inline", children: "Restore defaults" }, void 0, false, {
          fileName: "app/components/admin/RolesFormControl.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/RolesFormControl.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RolesFormControl.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("grid sm:grid-cols-3 gap-6 mt-4 sm:mx-3", {
      "hidden": !open
    }), children: roles.map((role) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "checkbox", name: "role", value: role, className: "w-min", defaultChecked: defaultRoles?.includes(role), labelText: labelize(role), labelClassNames: "flex capitalize whitespace-nowrap items-center justify-between px-4" }, role, false, {
      fileName: "app/components/admin/RolesFormControl.tsx",
      lineNumber: 59,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/admin/RolesFormControl.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/RolesFormControl.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(RolesFormControl, "d2BjRfW3oHFN4v938Sim3bOYuKw=");
_c = RolesFormControl;
var _c;
$RefreshReg$(_c, "RolesFormControl");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  RolesFormControl
};
//# sourceMappingURL=/build/_shared/chunk-ZDUD4BPS.js.map
