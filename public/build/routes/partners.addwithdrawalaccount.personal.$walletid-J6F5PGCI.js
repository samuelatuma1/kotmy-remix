import {
  useToast
} from "/build/_shared/chunk-LRNROA4B.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  require_wallet
} from "/build/_shared/chunk-ZOVZPUI6.js";
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

// app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_wallet = __toESM(require_wallet(), 1);
var import_node2 = __toESM(require_node(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx"' + id);
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
    "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx"
  );
  import.meta.hot.lastModified = "1787377288605.645";
}
function useAddWithdrawalAccountPage() {
  _s();
  let navigate = useNavigate();
  const {
    error,
    walletAccount,
    walletCurrencyBanks,
    authRequired
  } = useLoaderData();
  const {
    toast
  } = useToast();
  const actionData = useActionData();
  const [banks, setBanks] = (0, import_react2.useState)([]);
  const [wallet, setWallet] = (0, import_react2.useState)();
  const [accountDetails, setAccountDetails] = (0, import_react2.useState)(null);
  (0, import_react4.useEffect)(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "An error occured",
        description: error?.detail.toString() ?? "Error occured"
      });
    }
  }, [error]);
  (0, import_react4.useEffect)(() => {
    if (actionData?.intent === "getAccountDetails" && actionData?.data) {
      setAccountDetails(actionData.data);
    }
    if (actionData?.intent === "addAccountDetails" && actionData?.data) {
      toast({
        title: "Success",
        description: "Recipient added successfully."
      });
      navigate("/partners/wallet");
      return;
    }
    if (actionData?.success) {
      toast({
        title: "Success",
        description: "Recipient added successfully."
      });
    }
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "An error occured",
        description: actionData?.error?.detail.toString() ?? "Error occured"
      });
    }
  }, [actionData, actionData?.data]);
  (0, import_react4.useEffect)(() => {
    if (walletCurrencyBanks) {
      setBanks(walletCurrencyBanks);
    }
    if (walletAccount) {
      setWallet(walletAccount);
    }
  }, [walletAccount, walletCurrencyBanks]);
  return {
    banks,
    wallet,
    accountDetails,
    setAccountDetails
  };
}
_s(useAddWithdrawalAccountPage, "Q5m6Bb4GND1G/v6fJ1fDD5tjEfo=", false, function() {
  return [useNavigate, useLoaderData, useToast, useActionData];
});
function AddWithdrawalAccountPage() {
  _s2();
  const {
    banks,
    wallet,
    accountDetails,
    setAccountDetails
  } = useAddWithdrawalAccountPage();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [searchTerm, setSearchTerm] = (0, import_react2.useState)("");
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const [selectedBank, setSelectedBank] = (0, import_react2.useState)(null);
  const dropdownRef = (0, import_react2.useRef)(null);
  const filteredBanks = (0, import_react2.useMemo)(() => {
    return banks.filter((bank) => bank.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [banks, searchTerm]);
  (0, import_react4.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const inputClasses = `
    w-full h-14 px-5 
    bg-white border border-gray-200 
    rounded-2xl text-gray-900 text-base
    outline-none transition-all duration-200
    hover:border-gray-400
    focus:border-slate-800 focus:ring-1 focus:ring-slate-800
  `;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-white flex flex-col items-center pt-16 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center mb-10 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.avatarIcon, className: "w-6 h-6 text-white" }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 234,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 233,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 232,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900", children: "Add personal account" }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 237,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 mt-1 text-sm", children: "Enter your banking details below" }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
      lineNumber: 231,
      columnNumber: 9
    }, this),
    !accountDetails ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "w-full flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "country", name: "country", required: true, className: `${inputClasses} bg-gray-50 cursor-not-allowed appearance-none`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "NG", children: "Nigeria" }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 246,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 245,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon, {}, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 249,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 248,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 244,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", ref: dropdownRef, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search or select bank", className: inputClasses, value: isOpen ? searchTerm : selectedBank?.name || "", onChange: (e) => {
          setSearchTerm(e.target.value);
          if (!isOpen)
            setIsOpen(true);
        }, onFocus: () => {
          setIsOpen(true);
          setSearchTerm("");
        } }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 255,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "bank", value: selectedBank?.code || "", required: true }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 264,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon, {}, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 267,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 266,
          columnNumber: 15
        }, this),
        isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden", children: filteredBanks.length > 0 ? filteredBanks.map((bank) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-5 py-4 hover:bg-slate-50 cursor-pointer text-gray-900 border-b border-gray-50 last:border-none transition-colors", onClick: () => {
          setSelectedBank(bank);
          setSearchTerm(bank.name);
          setIsOpen(false);
        }, children: bank.name }, bank.code, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 272,
          columnNumber: 73
        }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-5 py-4 text-gray-400 italic", children: "No banks found" }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 278,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 271,
          columnNumber: 26
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 254,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "accountNumber", name: "accountNumber", placeholder: "Account Number (10 digits)", required: true, className: inputClasses }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 284,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 283,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "getAccountDetails" }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 287,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "currency", value: `${wallet?.wallet_currency}` }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 288,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "wallet_id", value: `${wallet?._id}` }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 289,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", disabled: isSubmitting, className: "mt-6 w-full h-14 rounded-2xl brand-pink hover:bg-black text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]", children: isSubmitting ? "Getting details..." : "Get Account Details" }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 293,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
      lineNumber: 241,
      columnNumber: 28
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "w-full flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "country", name: "country", required: true, className: `${inputClasses} bg-gray-50 cursor-not-allowed appearance-none`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "NG", children: "Nigeria" }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 301,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 300,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon, {}, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 304,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 303,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 299,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { required: true, value: selectedBank?.name || "", readOnly: true, className: inputClasses }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 309,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 308,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "accountNumber", name: "accountNumber", placeholder: "Account Number (10 digits)", required: true, readOnly: true, className: inputClasses }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 314,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 313,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "pin", name: "pin", placeholder: "PIN (6 digits)", required: true, minLength: 6, maxLength: 6, type: "password", className: inputClasses }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 318,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 317,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "bank_code", value: selectedBank?.code || "", required: true }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 320,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "addAccountDetails" }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 321,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "currency", value: `${wallet?.wallet_currency}` }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 322,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "wallet_id", value: `${wallet?._id}` }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 323,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-5 py-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-medium text-gray-400 uppercase tracking-wider", children: "Account Name" }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 327,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold text-slate-800", children: accountDetails ? accountDetails.account_name : "Invalid Account" }, void 0, false, {
          fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
          lineNumber: 328,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 326,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", disabled: isSubmitting, className: "mt-6 w-full h-14 rounded-2xl bg-slate-900 hover:bg-black text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]", children: isSubmitting ? "Adding..." : "Add Account" }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 334,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setAccountDetails(null), className: "w-full h-14 rounded-2xl bg-white border border-gray-200 text-gray-500 font-medium hover:bg-gray-50 transition-colors", children: "Go back" }, void 0, false, {
        fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
        lineNumber: 338,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
      lineNumber: 296,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
    lineNumber: 228,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
    lineNumber: 227,
    columnNumber: 10
  }, this);
}
_s2(AddWithdrawalAccountPage, "MMqbOYBidppvNrZpdSg570QHD5w=", false, function() {
  return [useAddWithdrawalAccountPage, useNavigation];
});
_c = AddWithdrawalAccountPage;
var ChevronDownIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "m6 9 6 6 6-6" }, void 0, false, {
  fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
  lineNumber: 350,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/partners.addwithdrawalaccount.personal.$walletid.tsx",
  lineNumber: 349,
  columnNumber: 31
}, this);
_c2 = ChevronDownIcon;
var _c;
var _c2;
$RefreshReg$(_c, "AddWithdrawalAccountPage");
$RefreshReg$(_c2, "ChevronDownIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddWithdrawalAccountPage as default
};
//# sourceMappingURL=/build/routes/partners.addwithdrawalaccount.personal.$walletid-J6F5PGCI.js.map
