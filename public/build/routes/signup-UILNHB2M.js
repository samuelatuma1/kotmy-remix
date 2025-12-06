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
  DragnDrop
} from "/build/_shared/chunk-AGKGXIN2.js";
import "/build/_shared/chunk-WQFJ2CRD.js";
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

// app/routes/signup.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/signup.tsx"' + id);
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
    "app/routes/signup.tsx"
  );
  import.meta.hot.lastModified = "1765043066642.7454";
}
function useSignupController() {
  _s();
  const actionData = useActionData();
  const [searchQuery] = useSearchParams();
  const {
    setUserStoreManager
  } = useUserManager();
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Sign Up Failed",
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
_s(useSignupController, "MwnCBXskQem9DfcD/w2XIN5KD04=", false, function() {
  return [useActionData, useSearchParams, useUserManager, useToast, useNavigate];
});
function Signup() {
  _s2();
  const {
    actionData
  } = useSignupController();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "bg-secondary p-4 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", "aria-label": "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grow flex flex-col justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", encType: "multipart/form-data", className: "w-full max-w-md p-4 sm:p-8 bg-white border rounded-3xl flex flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-max mx-auto p-4 border border-disabled rounded-full bg-gradient-to-b from-slate-200 to-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-max p-4 border border-disabled rounded-full bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: admin_avatar_default, alt: "person silhouette", width: 24, height: 24 }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-satoshi-bold text-center", children: "Create your account" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-sm mt-2", children: [
        "Already have an account? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-primary underline", children: "Login" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 129,
          columnNumber: 76
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-2 flex flex-col gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "first_name", name: "first_name", placeholder: "First Name", labelText: "First Name", icon: icons.avatarIcon, required: true }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "last_name", name: "last_name", placeholder: "Last Name", labelText: "Last Name", icon: icons.avatarIcon, required: true }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", placeholder: "Enter your email address", labelText: "Email", icon: icons.avatarIcon, required: true }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "password", name: "password", placeholder: "Enter your password", labelText: "Password", type: "password", icon: icons.lockIcon, required: true }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "status", name: "status", placeholder: "Status (optional)", labelText: "Status", icon: icons.avatarIcon }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "image", className: "flex items-center gap-2 text-sm font-medium text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.avatarIcon, className: "w-4 h-4" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          "Profile Image (optional)"
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { className: "sm:col-span-2", name: "image", multiple: false, labelText: "Upload profile photo" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "rounded-lg p-3", children: "Sign Up" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 115,
    columnNumber: 10
  }, this);
}
_s2(Signup, "WncGYu3Jfopx6VSc9wSJgDZFHUs=", false, function() {
  return [useSignupController];
});
_c = Signup;
var _c;
$RefreshReg$(_c, "Signup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Signup as default
};
//# sourceMappingURL=/build/routes/signup-UILNHB2M.js.map
