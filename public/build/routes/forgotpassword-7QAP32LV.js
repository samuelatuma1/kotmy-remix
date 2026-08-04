import {
  require_auth
} from "/build/_shared/chunk-YG2WIZWF.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  useToast
} from "/build/_shared/chunk-LRNROA4B.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-VCQR46EC.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link2 as Link,
  useActionData,
  useLoaderData,
  useNavigation
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

// app/routes/forgotpassword.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/forgotpassword.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/forgotpassword.tsx"
  );
  import.meta.hot.lastModified = "1785850435737.9565";
}
function ForgotPassword() {
  _s();
  const {
    baseUrl,
    resetPath
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const {
    toast: pushToast
  } = useToast();
  const [email, setEmail] = (0, import_react2.useState)("");
  const [message, setMessage] = (0, import_react2.useState)("");
  const redirectLink = (0, import_react2.useMemo)(() => {
    const origin = baseUrl.replace(/\/$/, "");
    return `${origin}${resetPath}`;
  }, [baseUrl, resetPath]);
  const isValidEmail = /\S+@\S+\.\S+/.test(email.trim());
  const isSubmitting = navigation.state !== "idle";
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      pushToast({
        variant: "destructive",
        title: "Request failed",
        description: actionData.error
      });
    }
    if (actionData?.message) {
      setEmail("");
      setMessage(actionData.message);
      pushToast({
        title: "Email sent",
        description: actionData.message
      });
    }
  }, [actionData, pushToast]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "min-h-dvh bg-secondary p-4 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grow flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md rounded-3xl border bg-white p-5 sm:p-8 shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-satoshi-bold", children: "Forgot password" }, void 0, false, {
        fileName: "app/routes/forgotpassword.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-sm font-medium text-primary underline", children: "Back to login" }, void 0, false, {
        fileName: "app/routes/forgotpassword.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/forgotpassword.tsx",
      lineNumber: 100,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirect_link", value: redirectLink }, void 0, false, {
        fileName: "app/routes/forgotpassword.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", labelText: "Email", type: "email", placeholder: "Enter your email address", value: email, onChange: (event) => setEmail(event.currentTarget.value), required: true }, void 0, false, {
        fileName: "app/routes/forgotpassword.tsx",
        lineNumber: 110,
        columnNumber: 13
      }, this),
      message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-black-600", children: message }, void 0, false, {
        fileName: "app/routes/forgotpassword.tsx",
        lineNumber: 111,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", disabled: !isValidEmail || isSubmitting, className: "rounded-xl p-3 font-medium transition-transform duration-200 hover:scale-[1.01]", children: isSubmitting ? "Sending..." : "Send reset email" }, void 0, false, {
        fileName: "app/routes/forgotpassword.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/forgotpassword.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/forgotpassword.tsx",
    lineNumber: 99,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/forgotpassword.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/forgotpassword.tsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
}
_s(ForgotPassword, "VUeHG//yd6O1SSSgW5aG3OLfkzg=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useToast];
});
_c = ForgotPassword;
var _c;
$RefreshReg$(_c, "ForgotPassword");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ForgotPassword as default
};
//# sourceMappingURL=/build/routes/forgotpassword-7QAP32LV.js.map
