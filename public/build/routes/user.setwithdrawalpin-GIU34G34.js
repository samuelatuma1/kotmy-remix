import {
  require_auth
} from "/build/_shared/chunk-YG2WIZWF.js";
import {
  User,
  X
} from "/build/_shared/chunk-JCJAKJPK.js";
import {
  useUserManager
} from "/build/_shared/chunk-IA4REYVC.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
import {
  require_wallet
} from "/build/_shared/chunk-ZOVZPUI6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link2 as Link,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-DM6GBINF.js";
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
  import.meta.hot.lastModified = "1771776923963.084";
}
function useSetWithdrawalPinController() {
  _s();
  const {
    setUserStoreManager,
    getUserStoreManager
  } = useUserManager();
  const [user, setUser] = (0, import_react2.useState)(null);
  const actionData = useActionData();
  const loader_ = useLoaderData();
  (0, import_react2.useEffect)(() => {
    const _user = getUserStoreManager();
  }, [getUserStoreManager]);
  return {
    user,
    actionData,
    setUserStoreManager,
    loader_
  };
}
_s(useSetWithdrawalPinController, "5RAr7flLchk2b2K2AkRWG3vAHGM=", false, function() {
  return [useUserManager, useActionData, useLoaderData];
});
function SetWithdrawalPin() {
  _s2();
  const {
    loader_,
    actionData,
    setUserStoreManager
  } = useSetWithdrawalPinController();
  (0, import_react2.useEffect)(() => {
    console.log({
      actionData
    });
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
      lineNumber: 144,
      columnNumber: 100
    }, this) }, void 0, false, {
      fileName: "app/routes/user.setwithdrawalpin.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "w-full max-w-lg text-center", method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "create-withdrawal-pin" }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-[#E5E5EF]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute h-24 w-24 rounded-full border border-slate-100" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute h-32 w-32 rounded-full border border-slate-50/50" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-8 w-8 text-[#1A1A1A]", fill: "currentColor" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mb-2 text-2xl font-bold tracking-tight text-[#1A1A1A]", children: "Set withdrawal PIN" }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-10 text-[15px] text-gray-500", children: "We sent a token to your email address. Please enter it below along with your desired withdrawal PIN." }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "token",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-0.5 text-red-500", children: "*" }, void 0, false, {
            fileName: "app/routes/user.setwithdrawalpin.tsx",
            lineNumber: 171,
            columnNumber: 18
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", maxLength: 4, minLength: 4, pattern: "[0-9]*", name: "token", placeholder: "4 digit token sent to your email", className: "w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-[#4D4966]" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 174,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "Withdrawal PIN",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-0.5 text-red-500", children: "*" }, void 0, false, {
            fileName: "app/routes/user.setwithdrawalpin.tsx",
            lineNumber: 187,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 186,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", maxLength: 6, minLength: 6, pattern: "[0-9]*", name: "withdrawal_pin", placeholder: "Enter your desired 6-digit PIN", className: "w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-[#4D4966]" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "Confirm Withdrawal PIN",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-0.5 text-red-500", children: "*" }, void 0, false, {
            fileName: "app/routes/user.setwithdrawalpin.tsx",
            lineNumber: 203,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", maxLength: 6, minLength: 6, pattern: "[0-9]*", name: "confirm_withdrawal_pin", placeholder: "Confirm your 6-digit PIN", className: "w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-[#4D4966]" }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/user.setwithdrawalpin.tsx",
          lineNumber: 206,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "mt-10 w-full rounded-2xl bg-[#4D4966] py-4 text-lg font-semibold text-white transition-all hover:bg-[#3f3b55] active:scale-[0.99]", children: "Create Withdrawal PIN" }, void 0, false, {
        fileName: "app/routes/user.setwithdrawalpin.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.setwithdrawalpin.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.setwithdrawalpin.tsx",
    lineNumber: 143,
    columnNumber: 10
  }, this);
}
_s2(SetWithdrawalPin, "zvTp/Oh9lkHNnvF+2B6EGJdqqoo=", false, function() {
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
//# sourceMappingURL=/build/routes/user.setwithdrawalpin-GIU34G34.js.map
