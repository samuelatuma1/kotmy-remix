import {
  require_wallet
} from "/build/_shared/chunk-ZOVZPUI6.js";
import {
  Cta_default
} from "/build/_shared/chunk-XEN7NDCY.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link2 as Link,
  useNavigate,
  useParams
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

// app/routes/user.addwithdrawalaccount.$walletid.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_wallet = __toESM(require_wallet(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.addwithdrawalaccount.$walletid.tsx"' + id);
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
    "app/routes/user.addwithdrawalaccount.$walletid.tsx"
  );
  import.meta.hot.lastModified = "1771088134558.7158";
}
var UserIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4 h-4 bg-white rounded-full mt-[-4px]" }, void 0, false, {
  fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
  lineNumber: 61,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
  lineNumber: 60,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
  lineNumber: 59,
  columnNumber: 24
}, this);
_c = UserIcon;
var BriefcaseIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-8 bg-green-500 rounded-lg flex items-center justify-center relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4 h-2 border-2 border-white rounded-t-sm absolute -top-1" }, void 0, false, {
  fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
  lineNumber: 67,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
  lineNumber: 66,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
  lineNumber: 65,
  columnNumber: 29
}, this);
_c2 = BriefcaseIcon;
function useAccountTypePage() {
  _s();
  const params = useParams();
  const [selectedType, setSelectedType] = (0, import_react2.useState)(null);
  const [accountRedirectUrl, setAccountRedirectUrl] = (0, import_react2.useState)("");
  function updateSelectAccountType(accountType) {
    setSelectedType(accountType);
    setAccountRedirectUrl(`/user/addwithdrawalaccount/${accountType}/${params.walletid}`);
  }
  return {
    selectedType,
    setSelectedType,
    updateSelectAccountType,
    accountRedirectUrl
  };
}
_s(useAccountTypePage, "BeaG8c5bAlLcvcMfPg9nBxFx4H0=", false, function() {
  return [useParams];
});
function AccountTypePage() {
  _s2();
  const {
    selectedType,
    setSelectedType,
    updateSelectAccountType,
    accountRedirectUrl
  } = useAccountTypePage();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl w-full text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight", children: [
      "What type of account ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
        lineNumber: 103,
        columnNumber: 32
      }, this),
      " would you like to add?"
    ] }, void 0, true, {
      fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => updateSelectAccountType("personal"), className: `relative cursor-pointer transition-all duration-300 rounded-[40px] p-10 flex flex-col items-center text-center border-2 
                ${selectedType === "personal" ? "border-blue-500 ring-4 ring-blue-50" : "border-transparent bg-gray-50/50 hover:bg-gray-100"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8 scale-125", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserIcon, {}, void 0, false, {
            fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
            lineNumber: 113,
            columnNumber: 18
          }, this) }, void 0, false, {
            fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: "Personal account" }, void 0, false, {
            fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 leading-relaxed max-w-[280px]", children: "Add any bank account of you or your loved one. You would pay a one time fee that would be taken from your earnings" }, void 0, false, {
            fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "accountType", value: "personal", className: "hidden", checked: selectedType === "personal", readOnly: true }, void 0, false, {
            fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => updateSelectAccountType("partner"), className: `relative cursor-pointer transition-all duration-300 rounded-[40px] p-10 flex flex-col items-center text-center border-2 
                ${selectedType === "partner" ? "border-green-500 ring-4 ring-green-50" : "border-transparent bg-gray-50/50 hover:bg-gray-100"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8 scale-125", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BriefcaseIcon, {}, void 0, false, {
            fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: "Partner account" }, void 0, false, {
            fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 leading-relaxed max-w-[280px]", children: "Create an account with one of our partners. No creation fee charge attached" }, void 0, false, {
            fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "accountType", value: "partner", className: "hidden", checked: selectedType === "partner", readOnly: true }, void 0, false, {
            fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `${accountRedirectUrl}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", disabled: !selectedType, className: `w-full py-4 rounded-2xl text-lg font-semibold transition-colors`, children: "Continue" }, void 0, false, {
        fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
        lineNumber: 140,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.addwithdrawalaccount.$walletid.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s2(AccountTypePage, "aTmiqXb2qt8HaYDnEgX74TVfPQ4=", false, function() {
  return [useAccountTypePage, useNavigate];
});
_c3 = AccountTypePage;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "UserIcon");
$RefreshReg$(_c2, "BriefcaseIcon");
$RefreshReg$(_c3, "AccountTypePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AccountTypePage as default
};
//# sourceMappingURL=/build/routes/user.addwithdrawalaccount.$walletid-RKKWNLFO.js.map
