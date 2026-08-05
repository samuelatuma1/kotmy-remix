import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import "/build/_shared/chunk-WF5NNSAN.js";
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
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-NO4YTAWP.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/user.affiliate.tsx
var import_node = __toESM(require_node(), 1);
var import_wallet = __toESM(require_wallet(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.affiliate.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/user.affiliate.tsx"
  );
  import.meta.hot.lastModified = "1785918112763.4873";
}
function AffilliateLeaderBoard() {
  _s();
  const {
    wallets,
    referralBoardRes,
    query
  } = useLoaderData();
  const navigation = useNavigation();
  console.log(referralBoardRes);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: "Affiliates leader board" }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 67,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", onSubmit: (e) => {
      try {
      } catch (err) {
      }
    }, className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "From" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 79,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "min_created_at", name: "min_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 80,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 78,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "To" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 84,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "max_created_at", name: "max_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 85,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 83,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-col text-xs text-gray-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mb-1", children: "Currency" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "wallet_id", name: "wallet_id", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: wallets.map((wallet) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: wallet.str_id, children: wallet.wallet_currency }, wallet.str_id, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 91,
          columnNumber: 56
        }, this)) }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 88,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: navigation.state === "submitting", className: "px-4 py-2 bg-[#312E81] text-white rounded-lg text-sm", children: navigation.state === "submitting" ? "Searching..." : "Search" }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 96,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 95,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 69,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:block w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full table-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-secondary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Contestant Name" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 120,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Contestant Code" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 121,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Contest Name" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 122,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Reward Earned" }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 123,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 115,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 114,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: referralBoardRes?.items.map((referrerBoard, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-secondary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: `${referrerBoard.contestant_biodata.first_name} ${referrerBoard.contestant_biodata.last_name}` }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 129,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: referrerBoard.contestant_deets[0]?.code }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 133,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: referrerBoard.current_contest.name }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 136,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: `${referralBoardRes.summary?.currency} ${referrerBoard.total_earning.toLocaleString()}` }, void 0, false, {
          fileName: "app/routes/user.affiliate.tsx",
          lineNumber: 139,
          columnNumber: 33
        }, this)
      ] }, index, true, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 128,
        columnNumber: 80
      }, this)) }, void 0, false, {
        fileName: "app/routes/user.affiliate.tsx",
        lineNumber: 127,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 113,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:flex justify-between items-center my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: referralBoardRes?.last_key_id, pageSize: referralBoardRes?.items_per_page, firstKey: referralBoardRes?.first_key_id }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 152,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/user.affiliate.tsx",
      lineNumber: 147,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.affiliate.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s(AffilliateLeaderBoard, "PDTh7l7cRJdSZTK2pfmbOeQRZhI=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = AffilliateLeaderBoard;
var _c;
$RefreshReg$(_c, "AffilliateLeaderBoard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AffilliateLeaderBoard as default
};
//# sourceMappingURL=/build/routes/user.affiliate-E6HPXE6P.js.map
