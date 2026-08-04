import {
  Toggletip
} from "/build/_shared/chunk-GKPHRQRO.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-EPD252AU.js";
import {
  admin_avatar_default
} from "/build/_shared/chunk-7JPCB6PC.js";
import {
  cn
} from "/build/_shared/chunk-65Q6VMM7.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
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

// app/components/reusables/ToggleBtn.tsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/ToggleBtn.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/ToggleBtn.tsx"
  );
  import.meta.hot.lastModified = "1785086315329.4653";
}
function ToggleBtn({
  onClick,
  on
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick, className: (0, import_classnames.default)("rounded-xl p-0.5 w-[34px] flex items-center", {
    "bg-brand-pink justify-end": on,
    "bg-brand-grey": !on
  }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-4 h-4 rounded-full" }, void 0, false, {
    fileName: "app/components/reusables/ToggleBtn.tsx",
    lineNumber: 30,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/reusables/ToggleBtn.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = ToggleBtn;
var _c;
$RefreshReg$(_c, "ToggleBtn");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/accounts/AdminUserCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/accounts/AdminUserCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/accounts/AdminUserCard.tsx"
  );
  import.meta.hot.lastModified = "1773390045068.3997";
}
function AdminUserCard({
  user,
  className
}) {
  const mainComponent = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.optionsIcon }, void 0, false, {
    fileName: "app/components/admin/accounts/AdminUserCard.tsx",
    lineNumber: 33,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/admin/accounts/AdminUserCard.tsx",
    lineNumber: 32,
    columnNumber: 25
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { className: cn("border rounded-lg shadow-sm p-3 text-xs font-satoshi-medium", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 mb-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: user.roles?.join(", ") }, void 0, false, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 37,
          columnNumber: 20
        }, this),
        " | ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: user.username }, void 0, false, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 37,
          columnNumber: 60
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/accounts/AdminUserCard.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Toggletip, { mainComponent, mainContainerClass: "ml-auto", childContainerClass: "top-[110%] right-0 bg-tertiary p-3 border border-disabled text-xs flex gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RoundCta_default, { icon: icons.editIcon, element: "link", to: `/admin/accounts/${user._id}`, className: "border-[#262626] bg-[#F7F7F8] text-primary" }, void 0, false, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RoundCta_default, { icon: icons.trashIcon, className: "border-red-500 bg-red-50 text-red-500" }, void 0, false, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/accounts/AdminUserCard.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/accounts/AdminUserCard.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "p-1.5 border border-disabled rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }, void 0, false, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "grid", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-primary line-clamp-1", children: user.full_name }, void 0, false, {
            fileName: "app/components/admin/accounts/AdminUserCard.tsx",
            lineNumber: 49,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "line-clamp-1", children: user.email }, void 0, false, {
            fileName: "app/components/admin/accounts/AdminUserCard.tsx",
            lineNumber: 50,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/accounts/AdminUserCard.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "max-xs:hidden", children: user.is_active ? "Enabled" : "Disabled" }, void 0, false, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ToggleBtn, { on: user.is_active }, void 0, false, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 55,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/accounts/AdminUserCard.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/accounts/AdminUserCard.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/accounts/AdminUserCard.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c2 = AdminUserCard;
var _c2;
$RefreshReg$(_c2, "AdminUserCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ToggleBtn,
  AdminUserCard
};
//# sourceMappingURL=/build/_shared/chunk-BZSFEI5I.js.map
