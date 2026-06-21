import {
  useUserManager
} from "/build/_shared/chunk-IHZBV5UE.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-ZTZJB4DO.js";
import {
  Link2 as Link,
  useLocation
} from "/build/_shared/chunk-QORMC3GD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/partner.account.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partner.account.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/partner.account.tsx"
  );
  import.meta.hot.lastModified = "1777725400508.3633";
}
function PartnerLoginOrRequestPartnerShip() {
  _s();
  const {
    setUserStoreManager,
    getUserStoreManager
  } = useUserManager();
  var user = getUserStoreManager();
  const location = useLocation();
  if (!user || !user.is_partner_account) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "h-dvh bg-secondary p-4 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", "aria-label": "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16" }, void 0, false, {
        fileName: "app/routes/partner.account.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/partner.account.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row gap-6 p-8  rounded-2xl border border-gray-100", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col items-start gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 rounded-lg shadow-sm" }, void 0, false, {
            fileName: "app/routes/partner.account.tsx",
            lineNumber: 43,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-satoshi-black text-xl text-gray-900", children: "Welcome Back" }, void 0, false, {
              fileName: "app/routes/partner.account.tsx",
              lineNumber: 46,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 text-sm mt-1", children: "Access your partner dashboard and manage your account." }, void 0, false, {
              fileName: "app/routes/partner.account.tsx",
              lineNumber: 47,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partner.account.tsx",
            lineNumber: 45,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login?redirectTo=/partners/home?&requireNewLogin=1", className: "text-accent font-satoshi-black flex items-center gap-2 hover:underline transition-all", children: "Login to Dashboard \u2192" }, void 0, false, {
            fileName: "app/routes/partner.account.tsx",
            lineNumber: 49,
            columnNumber: 5
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partner.account.tsx",
          lineNumber: 42,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-px bg-gray-200 hidden md:block" }, void 0, false, {
          fileName: "app/routes/partner.account.tsx",
          lineNumber: 54,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col items-start gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-accent/10 p-3 rounded-lg" }, void 0, false, {
            fileName: "app/routes/partner.account.tsx",
            lineNumber: 58,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-satoshi-black text-xl text-gray-900", children: "New Here?" }, void 0, false, {
              fileName: "app/routes/partner.account.tsx",
              lineNumber: 61,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 text-sm mt-1", children: "Join our network and start growing your business with us." }, void 0, false, {
              fileName: "app/routes/partner.account.tsx",
              lineNumber: 62,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partner.account.tsx",
            lineNumber: 60,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/partner/partner", className: "bg-accent text-white px-6 py-2 rounded-full font-satoshi-black hover:opacity-90 transition-all", children: "Become a Partner" }, void 0, false, {
            fileName: "app/routes/partner.account.tsx",
            lineNumber: 64,
            columnNumber: 5
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partner.account.tsx",
          lineNumber: 57,
          columnNumber: 3
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partner.account.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partner.account.tsx",
      lineNumber: 36,
      columnNumber: 12
    }, this);
  }
  (0, import_react2.useEffect)(() => {
    window.location.replace("/partners/home");
  }, []);
}
_s(PartnerLoginOrRequestPartnerShip, "3J7JDblQvCc34lOIw8Nwbds1ZOk=", false, function() {
  return [useUserManager, useLocation];
});
_c = PartnerLoginOrRequestPartnerShip;
var _c;
$RefreshReg$(_c, "PartnerLoginOrRequestPartnerShip");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerLoginOrRequestPartnerShip as default
};
//# sourceMappingURL=/build/routes/partner.account-ORZHSTAS.js.map
