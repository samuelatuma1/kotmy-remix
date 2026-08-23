import {
  require_auth
} from "/build/_shared/chunk-YG2WIZWF.js";
import {
  useUserManager
} from "/build/_shared/chunk-DOOVVW3X.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import {
  admin_avatar_default
} from "/build/_shared/chunk-52GSXTRN.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  useToast
} from "/build/_shared/chunk-LRNROA4B.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-VCQR46EC.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link2 as Link,
  useActionData,
  useNavigate,
  useNavigation,
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

// app/routes/completeregistration.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/completeregistration.tsx"' + id);
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
    "app/routes/completeregistration.tsx"
  );
  import.meta.hot.lastModified = "1786288683373.5835";
}
var RESEND_LOCK_KEY = "kotmy_resend_lock";
var RESEND_LOCK_DURATION = 60;
function getResendLockRemaining() {
  if (typeof window === "undefined")
    return 0;
  const stored = localStorage.getItem(RESEND_LOCK_KEY);
  if (!stored)
    return 0;
  const lockUntil = parseInt(stored, 10);
  const remaining = Math.max(0, Math.ceil((lockUntil - Date.now()) / 1e3));
  if (remaining === 0)
    localStorage.removeItem(RESEND_LOCK_KEY);
  return remaining;
}
function useCompleteRegistrationController() {
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
  const user_id = searchQuery.get("user_id") ?? "";
  const email = searchQuery.get("email") ?? "";
  const prefilledToken = searchQuery.get("token") ?? "";
  const [resendCountdown, setResendCountdown] = (0, import_react2.useState)(0);
  const countdownRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    const remaining = getResendLockRemaining();
    if (remaining > 0) {
      setResendCountdown(remaining);
    }
  }, []);
  (0, import_react2.useEffect)(() => {
    if (resendCountdown <= 0) {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
      localStorage.removeItem(RESEND_LOCK_KEY);
      return;
    }
    if (!countdownRef.current) {
      countdownRef.current = setInterval(() => {
        setResendCountdown((prev) => {
          const next = Math.max(0, prev - 1);
          if (next === 0) {
            localStorage.removeItem(RESEND_LOCK_KEY);
          }
          return next;
        });
      }, 1e3);
    }
    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
    };
  }, [resendCountdown]);
  (0, import_react2.useEffect)(() => {
    if (!actionData)
      return;
    if (actionData.error) {
      toast({
        variant: "destructive",
        title: actionData.intent === "resend" ? "Resend Failed" : "Verification Failed",
        description: actionData.error
      });
      return;
    }
    if (actionData.intent === "resend" && actionData.data) {
      toast({
        variant: "default",
        title: "Token Resent",
        description: "A verification token has been sent to your email."
      });
      const lockUntil = Date.now() + RESEND_LOCK_DURATION * 1e3;
      localStorage.setItem(RESEND_LOCK_KEY, String(lockUntil));
      setResendCountdown(RESEND_LOCK_DURATION);
      return;
    }
    if (actionData.intent === "verify" && actionData.data && "token" in actionData.data) {
      toast({
        variant: "default",
        title: "Account Verified",
        description: "Your account has been verified successfully. Welcome!"
      });
      setUserStoreManager(actionData.data, true);
      navigate(searchQuery.get("redirectTo") || "/user/profile");
    }
  }, [actionData]);
  return {
    user_id,
    email,
    prefilledToken,
    resendCountdown
  };
}
_s(useCompleteRegistrationController, "hO+7itj04xh0GptBWKU8yxq+qrU=", false, function() {
  return [useActionData, useSearchParams, useUserManager, useToast, useNavigate];
});
function CompleteRegistration() {
  _s2();
  const {
    user_id,
    email,
    prefilledToken,
    resendCountdown
  } = useCompleteRegistrationController();
  const [searchQuery] = useSearchParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const hasToken = Boolean(searchQuery.get("token"));
  if (!user_id) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "bg-secondary p-4 flex flex-col min-h-dvh", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", "aria-label": "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16" }, void 0, false, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 231,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grow flex flex-col justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md p-4 sm:p-8 bg-white border rounded-3xl flex flex-col gap-3 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-satoshi-bold", children: "Invalid Link" }, void 0, false, {
          fileName: "app/routes/completeregistration.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "This verification link is invalid or incomplete. Please sign up again to receive a new verification token." }, void 0, false, {
          fileName: "app/routes/completeregistration.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "/signup", className: "rounded-lg p-3", children: "Go to Sign Up" }, void 0, false, {
          fileName: "app/routes/completeregistration.tsx",
          lineNumber: 239,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/completeregistration.tsx",
      lineNumber: 229,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "bg-secondary p-4 flex flex-col min-h-dvh", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", "aria-label": "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16" }, void 0, false, {
      fileName: "app/routes/completeregistration.tsx",
      lineNumber: 246,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/completeregistration.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grow flex flex-col justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "w-full max-w-md p-4 sm:p-8 bg-white border rounded-3xl flex flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-max mx-auto p-4 border border-disabled rounded-full bg-gradient-to-b from-slate-200 to-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-max p-4 border border-disabled rounded-full bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: admin_avatar_default, alt: "person silhouette", width: 24, height: 24 }, void 0, false, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 252,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 251,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-satoshi-bold text-center", children: "Complete your registration" }, void 0, false, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 255,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 256,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-sm text-gray-600", children: hasToken ? "Enter the 6-digit verification token sent to your email to activate your account." : `We've sent a 6-digit verification token to ${email || "your email"}. Enter it below to activate your account.` }, void 0, false, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 257,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-2 flex flex-col gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "user_id", value: user_id }, void 0, false, {
          fileName: "app/routes/completeregistration.tsx",
          lineNumber: 261,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "email", value: email }, void 0, false, {
          fileName: "app/routes/completeregistration.tsx",
          lineNumber: 262,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "token", name: "token", placeholder: "Enter 6-digit token", labelText: "Verification Token", icon: icons.lockIcon, defaultValue: prefilledToken, maxLength: 6, inputMode: "numeric", autoComplete: "one-time-code", autoFocus: !hasToken }, void 0, false, {
          fileName: "app/routes/completeregistration.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 260,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", name: "intent", value: "verify", disabled: isSubmitting, className: "rounded-lg p-3", children: isSubmitting ? "Verifying..." : "Verify Account" }, void 0, false, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center gap-2 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Didn't receive the token?" }, void 0, false, {
          fileName: "app/routes/completeregistration.tsx",
          lineNumber: 269,
          columnNumber: 13
        }, this),
        resendCountdown > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary font-medium tabular-nums", children: [
          "Resend in ",
          resendCountdown,
          "s"
        ] }, void 0, true, {
          fileName: "app/routes/completeregistration.tsx",
          lineNumber: 270,
          columnNumber: 36
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "intent", value: "resend", disabled: isSubmitting, className: "text-primary underline font-medium disabled:opacity-50", children: "Resend Token" }, void 0, false, {
          fileName: "app/routes/completeregistration.tsx",
          lineNumber: 272,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/completeregistration.tsx",
        lineNumber: 268,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/completeregistration.tsx",
      lineNumber: 249,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/completeregistration.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/completeregistration.tsx",
    lineNumber: 244,
    columnNumber: 10
  }, this);
}
_s2(CompleteRegistration, "z7U0OU/rXH49vrWWAITMkCD+rdU=", false, function() {
  return [useCompleteRegistrationController, useSearchParams, useNavigation];
});
_c = CompleteRegistration;
var _c;
$RefreshReg$(_c, "CompleteRegistration");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CompleteRegistration as default
};
//# sourceMappingURL=/build/routes/completeregistration-MV34NGC7.js.map
