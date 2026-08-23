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
  Link2 as Link,
  useActionData,
  useLoaderData,
  useNavigate,
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

// app/routes/resetpassword.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/resetpassword.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/resetpassword.tsx"
  );
  import.meta.hot.lastModified = "1785852063125.2214";
}
function ResetPassword() {
  _s();
  const {
    email,
    token
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const {
    toast: pushToast
  } = useToast();
  const [password, setPassword] = (0, import_react2.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, import_react2.useState)("");
  const [redirecting, setRedirecting] = (0, import_react2.useState)(false);
  const decodedEmail = (0, import_react2.useMemo)(() => {
    try {
      return decodeURIComponent(email);
    } catch {
      return email;
    }
  }, [email]);
  const isSubmitting = navigation.state !== "idle" || redirecting;
  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const canSubmit = Boolean(decodedEmail && token && passwordsMatch && password.length >= 6);
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      pushToast({
        variant: "destructive",
        title: "Reset failed",
        description: actionData.error
      });
    }
    if (actionData?.message) {
      pushToast({
        title: "Password updated",
        description: actionData.message
      });
      setRedirecting(true);
      const timer = window.setTimeout(() => {
        navigate("/login");
      }, 4e3);
      return () => window.clearTimeout(timer);
    }
  }, [actionData, navigate, pushToast]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "min-h-dvh bg-secondary p-4 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grow flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md rounded-3xl border bg-white p-5 sm:p-8 shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-satoshi-bold", children: "Reset password" }, void 0, false, {
        fileName: "app/routes/resetpassword.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-sm font-medium text-primary underline", children: "Back to login" }, void 0, false, {
        fileName: "app/routes/resetpassword.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/resetpassword.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", className: "mt-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "token", value: token }, void 0, false, {
        fileName: "app/routes/resetpassword.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", labelText: "Email", type: "email", value: decodedEmail, readOnly: true, required: true }, void 0, false, {
        fileName: "app/routes/resetpassword.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "password", name: "password", labelText: "New password", type: "password", placeholder: "Enter new password", value: password, onChange: (event) => setPassword(event.currentTarget.value), required: true }, void 0, false, {
        fileName: "app/routes/resetpassword.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "confirm_password", name: "confirm_password", labelText: "Confirm password", type: "password", placeholder: "Confirm new password", value: confirmPassword, onChange: (event) => setConfirmPassword(event.currentTarget.value), required: true, error: confirmPassword && !passwordsMatch ? "Passwords do not match" : void 0 }, void 0, false, {
        fileName: "app/routes/resetpassword.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", disabled: !canSubmit || isSubmitting, className: "rounded-xl p-3 font-medium transition-transform duration-200 hover:scale-[1.01]", children: isSubmitting ? "Updating..." : "Reset password" }, void 0, false, {
        fileName: "app/routes/resetpassword.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/resetpassword.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/resetpassword.tsx",
    lineNumber: 110,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/resetpassword.tsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/resetpassword.tsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_s(ResetPassword, "TpgDuHEs+qwgHdlqAtwpt8c2N4A=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useNavigate, useToast];
});
_c = ResetPassword;
var _c;
$RefreshReg$(_c, "ResetPassword");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ResetPassword as default
};
//# sourceMappingURL=/build/routes/resetpassword-AS5E7XLW.js.map
