import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import {
  useUserManager
} from "/build/_shared/chunk-IA4REYVC.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  require_wallet
} from "/build/_shared/chunk-ZOVZPUI6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link2 as Link,
  useActionData,
  useFetcher,
  useLoaderData
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

// app/routes/admin.transactions.income-history.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/admin.transactions.income-history.tsx"' + id);
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
    "app/routes/admin.transactions.income-history.tsx"
  );
  import.meta.hot.lastModified = "1785087491321.5742";
}
function useWalletController() {
  _s();
  const {
    wallets
  } = useLoaderData();
  const {
    setUserStoreManager,
    getUserStoreManager
  } = useUserManager();
  const [user, setUser] = (0, import_react2.useState)(null);
  console.log(wallets);
  const [activeWalletId, setActiveWalletId] = (0, import_react2.useState)(wallets.length > 0 ? wallets[0].wallet._id : null);
  (0, import_react2.useEffect)(() => {
    const _user = getUserStoreManager();
    if (_user) {
      setUser(_user);
    }
  }, [getUserStoreManager]);
  const activeData = (0, import_react2.useMemo)(() => {
    return wallets.find((w) => w.wallet._id === activeWalletId) || null;
  }, [activeWalletId, wallets]);
  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency
    }).format(amount);
  };
  const [searchOpen, setSearchOpen] = (0, import_react2.useState)(false);
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const actionData = useActionData();
  const [walletsState, setWalletsState] = (0, import_react2.useState)(wallets);
  (0, import_react2.useEffect)(() => {
    const latestFromFetcherOrAction = fetcher.data?.wallets ?? actionData?.wallets;
    if (!latestFromFetcherOrAction) {
      setWalletsState(wallets);
    }
  }, [wallets, fetcher.data, actionData]);
  (0, import_react2.useEffect)(() => {
    const fw = fetcher.data?.wallets ?? actionData?.wallets;
    if (fw && Array.isArray(fw)) {
      setWalletsState(fw);
    }
  }, [fetcher.data, actionData]);
  return {
    wallets,
    activeData,
    setActiveWalletId,
    formatCurrency,
    user,
    actionData,
    searchOpen,
    isSubmitting,
    walletsState,
    setSearchOpen,
    fetcher
  };
}
_s(useWalletController, "7BhpNRpv9gXeJZoXgcxXr4q7WAo=", false, function() {
  return [useLoaderData, useUserManager, useFetcher, useActionData];
});
function WalletPage() {
  _s2();
  const {
    wallets,
    activeData,
    setActiveWalletId,
    formatCurrency,
    user,
    searchOpen,
    isSubmitting,
    walletsState,
    setSearchOpen,
    fetcher
  } = useWalletController();
  if (!activeData)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8", children: "No wallets found." }, void 0, false, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 258,
      columnNumber: 27
    }, this);
  const activeDataLocal = walletsState.find((w) => w.wallet._id === activeData?.wallet._id) ?? activeData;
  const {
    wallet,
    pagedLedgers
  } = activeDataLocal;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 max-w-7xl mx-auto bg-[#F9FAFB] min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6", children: "Wallet" }, void 0, false, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 267,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: "Wallet balances" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 273,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "hover:bg-gray-100 p-1 rounded-full", children: "\u{1F441}\uFE0F" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 272,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "border rounded-full px-4 py-2 bg-gray-50 text-sm font-medium outline-none cursor-pointer", value: wallet._id, onChange: (e) => setActiveWalletId(e.target.value), children: walletsState.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: w.wallet._id, children: [
          w.wallet.wallet_currency,
          " - ",
          w.wallet.account_number
        ] }, w.wallet._id, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 279,
          columnNumber: 36
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 278,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 271,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl font-bold mb-1", children: formatCurrency(wallet.withdrawable_balance, wallet.wallet_currency) }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 287,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-400 text-sm", children: wallet.wallet_name }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 290,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 286,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 285,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-3 mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/user/withdraw/${wallet._id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-[#312E81] text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto", children: "\u2197 Withdraw" }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 296,
          columnNumber: 12
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, this),
        user?.withdrawal_pin_set ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/user/addwithdrawalaccount/${wallet._id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto", children: "Add withdrawal account" }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 302,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 301,
          columnNumber: 39
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/user/setwithdrawalpin", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto", children: "+ Set withdrawal PIN" }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 306,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 305,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto", children: "\u21C4 Transfer to another wallet" }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 309,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 294,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 270,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-700", children: "Search" }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 318,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setSearchOpen((s) => !s), className: "flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800", "aria-expanded": searchOpen, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: searchOpen ? "Hide" : "Show" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 320,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: `w-4 h-4 transition-transform ${searchOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 322,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 321,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 319,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 317,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `transition-all ${searchOpen ? "overflow-scroll max-h-96" : "overflow-hidden max-h-0"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", className: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "Transaction type" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 332,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "transaction_type", name: "transaction_type", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "All transaction types" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 334,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "credit", children: "Credit" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 335,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "debit", children: "Debit" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 336,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 333,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 331,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "Status" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 342,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "status", name: "status", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Any status" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 344,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pending", children: "Pending" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 345,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 346,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "void", children: "Void" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 347,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 343,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 341,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "Min amount" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 353,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "min_amount", name: "min_amount", type: "number", step: "0.01", placeholder: "Min amount", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 354,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 352,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "Max amount" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 359,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "max_amount", name: "max_amount", type: "number", step: "0.01", placeholder: "Max amount", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 360,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 358,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "From date" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 365,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "min_created_at", name: "min_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 366,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 364,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "To date" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 370,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "max_created_at", name: "max_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 371,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 369,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "Payment method" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 376,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "payment_method", name: "payment_method", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Any payment method" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 378,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "flutterwave", children: "Flutterwave" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 379,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "bank", children: "Bank" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 380,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "paystack", children: "Paystack" }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 381,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 377,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 375,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "Contest code" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 386,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "contest_code", name: "contest_code", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 387,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 385,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "wallet_id", value: wallet._id }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 391,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-3 flex justify-end mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "px-4 py-2 bg-[#312E81] text-white rounded-lg text-sm disabled:opacity-50", children: isSubmitting ? "Searching..." : "Search" }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 394,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 393,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 329,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 328,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 327,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 316,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-gray-600 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F4C1}" }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 406,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-medium", children: [
          "Recent wallet activity (",
          wallet.wallet_currency,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 407,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 405,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 mb-8 border-b border-gray-100 pb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MetricItem, { label: "Net change this month", value: formatCurrency(wallet.metrics.net_change_this_month, wallet.wallet_currency), tooltip: true }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 412,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MetricItem, { label: "Money in", value: formatCurrency(wallet.metrics.money_in, wallet.wallet_currency) }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 413,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MetricItem, { label: "Money out", value: formatCurrency(wallet.metrics.money_out, wallet.wallet_currency) }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 414,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 411,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full text-left text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "text-gray-400 border-b", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "pb-4 font-medium", children: "S/N" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 422,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "pb-4 font-medium", children: "Date" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 423,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "pb-4 font-medium", children: "Ref ID" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 424,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "pb-4 font-medium", children: "Narration" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 425,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "pb-4 font-medium", children: "Beneficiary name" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 426,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "pb-4 font-medium", children: "Type" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 427,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "pb-4 font-medium", children: "Amount" }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 428,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 421,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 420,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y", children: pagedLedgers.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50/50 transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-4 text-gray-500", children: idx + 1 }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 433,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-4 text-gray-900 leading-tight", children: [
            new Date(item.completed_at || "").toLocaleDateString(),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-400", children: new Date(item.completed_at || "").toLocaleTimeString() }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 436,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 434,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-4 text-gray-600 font-mono text-xs", children: item.payment_ref }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 438,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-4 text-gray-600 max-w-xs", children: item.description }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 439,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-4 text-gray-600  trunc_", children: item.wallet_name }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 440,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-4 uppercase text-xs font-semibold", children: item.entry_type }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 441,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `font-semibold ${item.entry_type === "credit" ? "text-green-600" : "text-gray-900"}`, children: formatCurrency(item.amount, item.currency) }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 444,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBadge, { status: item.status }, void 0, false, {
              fileName: "app/routes/admin.transactions.income-history.tsx",
              lineNumber: 447,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 443,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.transactions.income-history.tsx",
            lineNumber: 442,
            columnNumber: 19
          }, this)
        ] }, item._id, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 432,
          columnNumber: 54
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 431,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 419,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 418,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex justify-between items-center text-sm text-gray-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          "Showing ",
          pagedLedgers.items.length,
          " of ",
          pagedLedgers.total_items,
          " items"
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 457,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: pagedLedgers.last_key_id, pageSize: pagedLedgers.items_per_page, firstKey: pagedLedgers.first_key_id }, void 0, false, {
          fileName: "app/routes/admin.transactions.income-history.tsx",
          lineNumber: 460,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 456,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 404,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.transactions.income-history.tsx",
    lineNumber: 266,
    columnNumber: 10
  }, this);
}
_s2(WalletPage, "Imu67WnGzxssvnhBPx8UY+mCfvE=", false, function() {
  return [useWalletController];
});
_c = WalletPage;
function MetricItem({
  label,
  value,
  tooltip = false
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-400 flex items-center gap-1 mb-1", children: [
      label,
      " ",
      tooltip && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-gray-200 rounded-full w-3 h-3 text-[8px] flex items-center justify-center text-white", children: "i" }, void 0, false, {
        fileName: "app/routes/admin.transactions.income-history.tsx",
        lineNumber: 479,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 478,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-bold text-gray-800", children: value }, void 0, false, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 481,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.transactions.income-history.tsx",
    lineNumber: 477,
    columnNumber: 10
  }, this);
}
_c2 = MetricItem;
function StatusBadge({
  status
}) {
  const styles = {
    Pending: "bg-orange-50 text-orange-500 border-orange-100",
    Failed: "bg-red-50 text-red-500 border-red-100",
    Completed: "bg-green-50 text-green-500 border-green-100"
  };
  const icons = {
    Pending: "\u23F1",
    Failed: "\u26A0\uFE0F",
    Completed: "\u2713"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-medium border flex items-center gap-1 ${styles[status] || ""}`, children: [
    icons[status],
    " ",
    status
  ] }, void 0, true, {
    fileName: "app/routes/admin.transactions.income-history.tsx",
    lineNumber: 498,
    columnNumber: 10
  }, this);
}
_c3 = StatusBadge;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "WalletPage");
$RefreshReg$(_c2, "MetricItem");
$RefreshReg$(_c3, "StatusBadge");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WalletPage as default
};
//# sourceMappingURL=/build/routes/admin.transactions.income-history-Y4V24KJA.js.map
