import {
  require_auth
} from "/build/_shared/chunk-34RGSVXM.js";
import {
  useUserManager
} from "/build/_shared/chunk-YHAF566D.js";
import {
  useToast
} from "/build/_shared/chunk-7OO7HPYD.js";
import {
  Cta_default
} from "/build/_shared/chunk-NKBOX2WC.js";
import {
  admin_avatar_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import {
  FormControl
} from "/build/_shared/chunk-LBAJGJUG.js";
import "/build/_shared/chunk-LOUTNZN4.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-OU5XO7XO.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Form,
  Link2 as Link,
  useActionData,
  useNavigate,
  useSearchParams
} from "/build/_shared/chunk-RJTUOXH3.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/login.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
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
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1765047673507.4666";
}
function useLoginController() {
  _s();
  const actionData = useActionData();
  const [searchQuery] = useSearchParams();
  const {
    setUserStoreManager,
    getUserStoreManager
  } = useUserManager();
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    const user = getUserStoreManager();
    if (user) {
      navigate(searchQuery.get("redirectTo") || "/user/all-tournaments");
    }
  }, []);
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: actionData.error
      });
      actionData.error = "";
    }
  }, [actionData?.error]);
  (0, import_react2.useEffect)(() => {
    if (actionData?.data) {
      setUserStoreManager(actionData.data, true);
      navigate(searchQuery.get("redirectTo") || "/user/all-tournaments");
      return;
    }
  }, [actionData?.data]);
  return {
    actionData
  };
}
_s(useLoginController, "4I0zOnU1KLWq6zBlGGFiZYGjJDA=", false, function() {
  return [useActionData, useSearchParams, useUserManager, useToast, useNavigate];
});
function Login() {
  _s2();
  const {
    actionData
  } = useLoginController();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "h-dvh bg-secondary p-4 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", "aria-label": "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 131,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 130,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grow flex flex-col justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "w-full max-w-md p-4 sm:p-8 bg-white border rounded-3xl flex flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-max mx-auto p-4 border border-disabled rounded-full bg-gradient-to-b from-slate-200 to-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-max p-4 border border-disabled rounded-full bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: admin_avatar_default, alt: "person silhouette", width: 24, height: 24 }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 137,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 136,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 135,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-satoshi-bold text-center", children: "Enter your details to login" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 140,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 141,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-2 flex flex-col gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", placeholder: "Enter your email address", labelText: "email", icon: icons.avatarIcon, required: true }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 143,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "password", name: "password", placeholder: "Enter your password", labelText: "Password", type: "password", icon: icons.lockIcon, required: true }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 145,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 142,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "rounded-lg p-3", children: "Login" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 147,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 134,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}
_s2(Login, "ma2V1XjkTeFRY9LpgSR9Q3QZgkc=", false, function() {
  return [useLoginController];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-LESEUT6A.js.map
