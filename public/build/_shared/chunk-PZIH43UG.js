import {
  Cta_default
} from "/build/_shared/chunk-NKBOX2WC.js";
import {
  FormControl
} from "/build/_shared/chunk-LBAJGJUG.js";
import {
  CounterClockwiseClockIcon
} from "/build/_shared/chunk-CMHVCBDB.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-OU5XO7XO.js";
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
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/admin/PermissionsFormControl.tsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/PermissionsFormControl.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/PermissionsFormControl.tsx"
  );
  import.meta.hot.lastModified = "1757765166857.4429";
}
function PermissionsFormControl({
  permissions,
  defaultPermissions,
  ...props
}) {
  _s();
  const [open, setOpen] = (0, import_react.useState)(false);
  const fieldset = (0, import_react.useRef)(null);
  function resetFieldset(e) {
    e.currentTarget.form?.permission.forEach((item) => {
      item.checked = item.defaultChecked;
    });
  }
  function labelize(persission) {
    return persission.split("_").join(" ");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { ref: fieldset, ...props, className: "p-2 sm:p-4 rounded-lg bg-transparent border hover:border-primary sm:col-span-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-open": open, className: "flex justify-between data-[open=true]:pb-2 sm:data-[open=true]:pb-3 data-[open=true]:border-b", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex gap-2 items-center font-bold cursor-pointer grow", onClick: () => setOpen((prev) => !prev), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.arrowDownIcon, className: open ? "" : "-rotate-90" }, void 0, false, {
          fileName: "app/components/admin/PermissionsFormControl.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this),
        "Permissions"
      ] }, void 0, true, {
        fileName: "app/components/admin/PermissionsFormControl.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "button", variant: "outline", "aria-label": "restore defaults", className: "p-2 sm:px-8 sm:py-2 rounded-lg font-medium text-red-500 border-secondary active:border-red-300 sm:hover:border-red-300", onClick: resetFieldset, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CounterClockwiseClockIcon, { className: "text-inherit sm:hidden" }, void 0, false, {
          fileName: "app/components/admin/PermissionsFormControl.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:inline", children: "Restore defaults" }, void 0, false, {
          fileName: "app/components/admin/PermissionsFormControl.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/PermissionsFormControl.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/PermissionsFormControl.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("grid sm:grid-cols-3 gap-6 mt-4 sm:mx-3", {
      "hidden": !open
    }), children: permissions.map((permission) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "checkbox", name: "permission", value: permission, className: "w-min", defaultChecked: defaultPermissions?.includes(permission), labelText: labelize(permission), labelClassNames: "flex capitalize whitespace-nowrap items-center justify-between px-4" }, permission, false, {
      fileName: "app/components/admin/PermissionsFormControl.tsx",
      lineNumber: 59,
      columnNumber: 48
    }, this)) }, void 0, false, {
      fileName: "app/components/admin/PermissionsFormControl.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/PermissionsFormControl.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(PermissionsFormControl, "d2BjRfW3oHFN4v938Sim3bOYuKw=");
_c = PermissionsFormControl;
var _c;
$RefreshReg$(_c, "PermissionsFormControl");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PermissionsFormControl
};
//# sourceMappingURL=/build/_shared/chunk-PZIH43UG.js.map
