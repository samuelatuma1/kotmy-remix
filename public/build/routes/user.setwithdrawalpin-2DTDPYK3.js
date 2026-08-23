import {
  require_auth
} from "/build/_shared/chunk-YG2WIZWF.js";
import {
  Mail,
  User,
  X
} from "/build/_shared/chunk-3UWAUYI3.js";
import {
  useUserManager
} from "/build/_shared/chunk-DOOVVW3X.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "/build/_shared/chunk-6GJEKC65.js";
import "/build/_shared/chunk-3BSRYLMA.js";
import "/build/_shared/chunk-CWOOXBW5.js";
import "/build/_shared/chunk-GJTSJNT7.js";
import "/build/_shared/chunk-4X4SKXSG.js";
import "/build/_shared/chunk-OUFOGEKV.js";
import "/build/_shared/chunk-LT4K6HQS.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
import {
  require_wallet
} from "/build/_shared/chunk-ZOVZPUI6.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
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

// app/routes/user.setwithdrawalpin.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_wallet = __toESM(require_wallet(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.setwithdrawalpin.tsx"' + id);
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
    "app/routes/user.setwithdrawalpin.tsx"
  );
  import.meta.hot.lastModified = "1787231634185.0247";
}
function useSetWithdrawalPinController() {
  _s();
  const {
    setUserStoreManager,
    getUserStoreManager
  } = useUserManager();
  const [user, setUser] = (0, import_react2.useState)(null);
  const [showTokenModal, setShowTokenModal] = (0, import_react2.useState)(true);
  const actionData = useActionData();
  const loader_ = useLoaderData();
  const navigation = useNavigation();
  const isRequestingToken = navigation.state === "submitting" && navigation.formData?.get("intent") === "request-token";
  (0, import_react2.useEffect)(() => {
    const _user = getUserStoreManager();
  }, [getUserStoreManager]);
  return {
    user,
    actionData,
    setUserStoreManager,
    loader_,
    showTokenModal,
    setShowTokenModal,
    isRequestingToken
  };
}
_s(useSetWithdrawalPinController, "NUilkAGZWabBBc5m7ApMw+wmGxU=", false, function() {
  return [useUserManager, useActionData, useLoaderData, useNavigation];
});
function SetWithdrawalPin() {
  _s2();
  const {
    loader_,
    actionData,
    setUserStoreManager,
    showTokenModal,
    setShowTokenModal,
    isRequestingToken
  } = useSetWithdrawalPinController();
  (0, import_react2.useEffect)(() => {
    console.log({
      actionData
    });
    if (actionData?.intent === "request-token") {
      if (actionData?.error) {
        toast({
          variant: "destructive",
          title: "Token Request Failed",
          description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Failed to send token"
        });
      }
      if (actionData?.data) {
        setShowTokenModal(false);
        toast({
          variant: "default",
          title: "Token sent",
          description: "We've sent a token to your email address."
        });
      }
      return;
    }
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Set Withdrawal Pin Failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Withdrawal Pin Creation failed"
      });
    }
    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Withdrawal PIN updated successfully",
        description: "Withdrawal PIN created successfully"
      });
      setUserStoreManager(actionData.data, true);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-screen items-center justify-center bg-white p-6 font-sans relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/user/wallet", className: "absolute top-4 right-4 text-gray-500 hover:text-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { size: 24 }, void 0, false, {
      fileName: "app/routes/user.setwithdrawalpin.tsx",
      lineNumber: 181,
      columnNumber: 100
    }, this) }, void 0, false, {
      fileName: "app/routes/user.setwithdrawalpin.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "w-full max-w-lg text-center", method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "create-withdrawal-pin" }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-[#E5E5EF]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute h-24 w-24 rounded-full border border-slate-100" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute h-32 w-32 rounded-full border border-slate-50/50" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-8 w-8 text-[#1A1A1A]", fill: "currentColor" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mb-2 text-2xl font-bold tracking-tight text-[#1A1A1A]", children: "Set withdrawal PIN" }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-10 text-[15px] text-gray-500", children: "We sent a token to your email address. Please enter it below along with your desired withdrawal PIN." }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "token",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-0.5 text-red-500", children: "*" }, void 0, false, {
            fileName: "app/routes/user.setwithdrawalpin.tsx",
            lineNumber: 208,
            columnNumber: 18
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", maxLength: 4, minLength: 4, pattern: "[0-9]*", name: "token", placeholder: "4 digit token sent to your email", className: "w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-brand-pink" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 206,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "Withdrawal PIN",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-0.5 text-red-500", children: "*" }, void 0, false, {
            fileName: "app/routes/user.setwithdrawalpin.tsx",
            lineNumber: 224,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 223,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", maxLength: 6, minLength: 6, pattern: "[0-9]*", name: "withdrawal_pin", placeholder: "Enter your desired 6-digit PIN", className: "w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-brand-pink" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 228,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 222,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "Confirm Withdrawal PIN",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-0.5 text-red-500", children: "*" }, void 0, false, {
            fileName: "app/routes/user.setwithdrawalpin.tsx",
            lineNumber: 240,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 239,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", maxLength: 6, minLength: 6, pattern: "[0-9]*", name: "confirm_withdrawal_pin", placeholder: "Confirm your 6-digit PIN", className: "w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-brand-pink" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 238,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "mt-10 w-full rounded-2xl bg-brand-pink py-4 text-lg font-semibold text-white transition-all hover:bg-brand-pink/90 active:scale-[0.99]", children: "Create Withdrawal PIN" }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.setwithdrawalpin.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { open: showTokenModal, onOpenChange: setShowTokenModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "max-w-md rounded-2xl p-8 bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-pink/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-6 w-6 text-brand-pink" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 266,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 265,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "text-xl font-bold tracking-tight text-[#1A1A1A]", children: "Set your withdrawal pin" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 268,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "mt-2 text-[15px] text-gray-500", children: "Choose how we should send token to set withdrawal pin." }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 271,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 264,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex cursor-pointer items-center gap-3 rounded-xl border border-brand-pink bg-brand-pink/5 p-4 transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "token_delivery", value: "email", defaultChecked: true, className: "h-4 w-4 accent-brand-pink" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 278,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-5 w-5 text-brand-pink" }, void 0, false, {
            fileName: "app/routes/user.setwithdrawalpin.tsx",
            lineNumber: 280,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[15px] font-medium text-[#1A1A1A]", children: "Send to email" }, void 0, false, {
            fileName: "app/routes/user.setwithdrawalpin.tsx",
            lineNumber: 281,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 279,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 277,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 276,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "request-token" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 287,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isRequestingToken, className: "w-full rounded-2xl bg-brand-pink py-4 text-lg font-semibold text-white transition-all hover:bg-brand-pink/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60", children: isRequestingToken ? "Sending token..." : "Send token" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 288,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 286,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.setwithdrawalpin.tsx",
      lineNumber: 263,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.setwithdrawalpin.tsx",
      lineNumber: 262,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.setwithdrawalpin.tsx",
    lineNumber: 180,
    columnNumber: 10
  }, this);
}
_s2(SetWithdrawalPin, "CgVwMLhMTsskJ0y2EwCsI+jTI+8=", false, function() {
  return [useSetWithdrawalPinController];
});
_c = SetWithdrawalPin;
var _c;
$RefreshReg$(_c, "SetWithdrawalPin");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SetWithdrawalPin as default
};
//# sourceMappingURL=/build/routes/user.setwithdrawalpin-2DTDPYK3.js.map
