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

// app/routes/user.withdraw.$walletid.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/user.withdraw.$walletid.tsx"' + id);
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
    "app/routes/user.withdraw.$walletid.tsx"
  );
  import.meta.hot.lastModified = "1787350767928.1704";
}
function useAddWithdrawalAccountPage() {
  _s();
  let navigate = useNavigate();
  const {
    error,
    walletAccount,
    walletCurrencyBanks,
    withdrawalAccounts,
    authRequired
  } = useLoaderData();
  const {
    toast
  } = useToast();
  const actionData = useActionData();
  const [banks, setBanks] = (0, import_react2.useState)([]);
  const [wallet, setWallet] = (0, import_react2.useState)();
  const [accountDetails, setAccountDetails] = (0, import_react2.useState)(null);
  const [withdrawalCharges, setWithdrawalCharges] = (0, import_react2.useState)(null);
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
    if (actionData?.intent === "getCharge" && actionData?.data) {
      setWithdrawalCharges(actionData.data);
    }
    if (actionData?.intent === "addAccountDetails" && actionData?.data) {
      toast({
        title: "Success",
        description: "Recipient added successfully."
      });
      navigate("/user/wallet");
      return;
    }
    if (actionData?.intent === "requestWithdrawal" && actionData?.data) {
      const responseData = actionData.data;
      toast({
        title: "Success",
        description: `${responseData.message}. Ref: ${responseData.reference}`
      });
      navigate("/user/wallet");
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
    withdrawalAccounts,
    setAccountDetails,
    withdrawalCharges,
    setWithdrawalCharges
  };
}
_s(useAddWithdrawalAccountPage, "v70MYO4EeCAqCg5Mu1K0HWQSrt4=", false, function() {
  return [useNavigate, useLoaderData, useToast, useActionData];
});
function AddWithdrawalAccountPage() {
  _s2();
  const {
    banks,
    wallet,
    accountDetails,
    withdrawalAccounts,
    setAccountDetails,
    withdrawalCharges,
    setWithdrawalCharges
  } = useAddWithdrawalAccountPage();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [searchTerm, setSearchTerm] = (0, import_react2.useState)("");
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const [selectedBank, setSelectedBank] = (0, import_react2.useState)(null);
  const [withdrawalAccount, setWithdrawalAccount] = (0, import_react2.useState)(null);
  const [amount, setAmount] = (0, import_react2.useState)(0);
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
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 240,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 239,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900", children: "Withdraw " }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 243,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 mt-1 text-sm", children: "Enter details below" }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 244,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.withdraw.$walletid.tsx",
      lineNumber: 237,
      columnNumber: 9
    }, this),
    !withdrawalCharges ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "w-full flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", ref: dropdownRef, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "Select beneficiary",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-0.5 text-red-500", children: "*" }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 253,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 252,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Select account to transfer to", className: inputClasses, value: isOpen ? searchTerm : withdrawalAccount ? `${withdrawalAccount?.name ?? ""} ${withdrawalAccount?.acct_number ?? ""} - ${withdrawalAccount?.bankname ?? ""}` : `Select Beneficiary`, onChange: (e) => {
          setSearchTerm(e.target.value);
          if (!isOpen)
            setIsOpen(true);
        }, onFocus: () => {
          setIsOpen(true);
          setSearchTerm("");
        } }, void 0, false, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 255,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon, {}, void 0, false, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 266,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 265,
          columnNumber: 15
        }, this),
        isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden", children: withdrawalAccounts ?? [].length > 0 ? (withdrawalAccounts ?? []).map((acct) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-5 py-4 hover:bg-slate-50 cursor-pointer text-gray-900 border-b border-gray-50 last:border-none transition-colors", onClick: () => {
          setWithdrawalAccount(acct);
          setSearchTerm(`${withdrawalAccount?.name} ${withdrawalAccount?.acct_number} - ${withdrawalAccount?.bankname}`);
          setIsOpen(false);
        }, children: [
          acct.name ?? "",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 276,
            columnNumber: 42
          }, this),
          acct.acct_number ?? "",
          " - ",
          acct.bankname ?? ""
        ] }, acct._id, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 271,
          columnNumber: 97
        }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-5 py-4 text-gray-400 italic", children: "No withdrawal account. Please add a withdrawal account to conitnue" }, void 0, false, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 278,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 270,
          columnNumber: 26
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 250,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "amount", name: "amount", type: "number", min: 100, placeholder: "Amount", required: true, className: inputClasses, onChange: (e) => setAmount(parseFloat(e.target.value)) }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 284,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 283,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "getCharge" }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 287,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "withdrawal_account_id", value: withdrawalAccount?._id || "", required: true }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 288,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "wallet_id", value: `${wallet?._id}` }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 289,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", disabled: isSubmitting, className: "mt-6 w-full h-14 rounded-2xl bg-brand-pink hover:bg-brand-pink/90 text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]", children: isSubmitting ? "Continuing..." : "Continue" }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 293,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.withdraw.$walletid.tsx",
      lineNumber: 247,
      columnNumber: 31
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "w-full flex flex-col max-w-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-500 mb-2 block", children: "You withdraw exactly" }, void 0, false, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 300,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold text-gray-900", children: wallet?.wallet_currency || "USD" }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 303,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 302,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "amount", name: "amount", type: "number", min: 100, placeholder: "Amount", value: amount, required: true, readOnly: true, className: "text-right text-4xl font-bold bg-transparent outline-none w-full text-gray-900" }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 309,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 301,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-400 mt-2", children: [
          "Bal: ",
          wallet?.withdrawable_balance.toLocaleString() || "0.00"
        ] }, void 0, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 311,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 299,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#F8F9FB] rounded-3xl p-6 border border-gray-100 flex flex-col gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Processing Fee:" }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 317,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium text-gray-900", children: [
            "- ",
            wallet?.wallet_currency,
            " ",
            withdrawalCharges?.transaction_charge || "0.00"
          ] }, void 0, true, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 318,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 316,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Destination Account:" }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 324,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium text-gray-900 text-right", children: withdrawalAccount?.bankname }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 325,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 323,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-3 mt-1 border-t border-gray-200 flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500 font-medium", children: "Total:" }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 331,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-bold text-gray-900", children: [
            wallet?.wallet_currency,
            " ",
            ((withdrawalCharges?.total_charge ?? 0) + amount).toLocaleString()
          ] }, void 0, true, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 332,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 330,
          columnNumber: 9
        }, this),
        withdrawalCharges?.remark && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 bg-white/50 border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "opacity-60", children: "\u2139\uFE0F" }, void 0, false, {
              fileName: "app/routes/user.withdraw.$walletid.tsx",
              lineNumber: 340,
              columnNumber: 16
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: withdrawalCharges.remark }, void 0, false, {
              fileName: "app/routes/user.withdraw.$walletid.tsx",
              lineNumber: 341,
              columnNumber: 16
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon, {}, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 343,
            columnNumber: 13
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 338,
          columnNumber: 39
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 315,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-500 mb-2 block", children: "Recipient details" }, void 0, false, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 349,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-bold text-gray-900 uppercase", children: withdrawalAccount?.name }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 352,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500 text-sm", children: withdrawalAccount?.acct_number }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 355,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 351,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 350,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 348,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "Withdrawal PIN",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-0.5 text-red-500", children: "*" }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 365,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 364,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "withdrawal_pin", name: "withdrawal_pin", type: "password", maxLength: 6, minLength: 6, required: true, className: `${inputClasses} text-center tracking-[1em] font-bold` }, void 0, false, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 368,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 367,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", disabled: isSubmitting, className: "w-full h-14 rounded-2xl bg-brand-pink hover:bg-brand-pink/90 text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]", children: isSubmitting ? "Confirming..." : "Confirm Withdrawal" }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 372,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setWithdrawalCharges(null), className: "w-full h-14 rounded-2xl bg-white border border-gray-200 text-gray-500 font-medium hover:bg-gray-50 transition-colors", children: "Go back" }, void 0, false, {
            fileName: "app/routes/user.withdraw.$walletid.tsx",
            lineNumber: 376,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.withdraw.$walletid.tsx",
          lineNumber: 371,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 363,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "requestWithdrawal" }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 383,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "withdrawal_account_id", value: withdrawalAccount?._id || "" }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 384,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "wallet_id", value: `${wallet?._id}` }, void 0, false, {
        fileName: "app/routes/user.withdraw.$walletid.tsx",
        lineNumber: 385,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.withdraw.$walletid.tsx",
      lineNumber: 296,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.withdraw.$walletid.tsx",
    lineNumber: 234,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.withdraw.$walletid.tsx",
    lineNumber: 233,
    columnNumber: 10
  }, this);
}
_s2(AddWithdrawalAccountPage, "FKbkVtVOwtTDzylXqlL+5enLwNU=", false, function() {
  return [useAddWithdrawalAccountPage, useNavigation];
});
_c = AddWithdrawalAccountPage;
var ChevronDownIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "m6 9 6 6 6-6" }, void 0, false, {
  fileName: "app/routes/user.withdraw.$walletid.tsx",
  lineNumber: 395,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/user.withdraw.$walletid.tsx",
  lineNumber: 394,
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
//# sourceMappingURL=/build/routes/user.withdraw.$walletid-ZKWXEI7E.js.map
