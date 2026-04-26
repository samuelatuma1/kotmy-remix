import {
  useUserManager
} from "/build/_shared/chunk-LGQ3K34Z.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  Link2 as Link,
  useSearchParams
} from "/build/_shared/chunk-NO4YTAWP.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/logout.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/logout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/logout.tsx"
  );
  import.meta.hot.lastModified = "1765080776229.2437";
}
function useLogoutController() {
  _s();
  const [searchQuery] = useSearchParams();
  const {
    deleteUserStoreManager
  } = useUserManager();
  (0, import_react2.useEffect)(() => {
    deleteUserStoreManager();
  }, []);
}
_s(useLogoutController, "gghri9OmuLNJiPr+2iJpIrvc3/A=", false, function() {
  return [useSearchParams, useUserManager];
});
function Logout() {
  _s2();
  useLogoutController();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "h-dvh bg-secondary p-4 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", "aria-label": "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16 cursor-pointer" }, void 0, false, {
      fileName: "app/routes/logout.tsx",
      lineNumber: 48,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/logout.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "h-dvh bg-secondary p-4 flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-satoshi-bold text-center", children: "You have been logged out" }, void 0, false, {
        fileName: "app/routes/logout.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "mt-4 text-center underline", children: "Login again" }, void 0, false, {
        fileName: "app/routes/logout.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/logout.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/logout.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s2(Logout, "8bXmXx8RL7LIYXTXvPv8HOmiKsg=", false, function() {
  return [useLogoutController];
});
_c = Logout;
var _c;
$RefreshReg$(_c, "Logout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Logout as default
};
//# sourceMappingURL=/build/routes/logout-HDQSCNGS.js.map
