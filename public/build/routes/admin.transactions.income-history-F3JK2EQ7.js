import {
  DataTable,
  DataTableColumnHeader
} from "/build/_shared/chunk-JQFI7IQB.js";
import {
  Pagination
} from "/build/_shared/chunk-BDARQS7C.js";
import {
  numberFormatter
} from "/build/_shared/chunk-7G67FTYO.js";
import "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  useLoaderData
} from "/build/_shared/chunk-RJTUOXH3.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/admin.transactions.income-history.tsx
var import_node = __toESM(require_node(), 1);

// app/components/admin/transactions/IncomeHistoryTable.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/transactions/IncomeHistoryTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/transactions/IncomeHistoryTable.tsx"
  );
  import.meta.hot.lastModified = "1757765166861.3816";
}
var numberFormatterOptions = {
  style: "currency",
  currency: "NGN"
};
var columns = [{
  header: "S/N",
  cell: ({
    row
  }) => +row.id + 1
}, {
  accessorKey: "contest",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "contest" }, void 0, false, {
    fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "description",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "description" }, void 0, false, {
    fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "session",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "session" }, void 0, false, {
    fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "paystack",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "paystack" }, void 0, false, {
    fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => numberFormatter(getValue(), numberFormatterOptions)
}, {
  accessorKey: "bank",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "bank" }, void 0, false, {
    fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => numberFormatter(getValue(), numberFormatterOptions)
}];
function IncomeHistoryTable({
  data
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, { data, columns, className: "text-xs" }, void 0, false, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 }, void 0, false, {
          fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, {}, void 0, false, {
        fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
        lineNumber: 77,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_c = IncomeHistoryTable;
var _c;
$RefreshReg$(_c, "IncomeHistoryTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.transactions.income-history.tsx
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.transactions.income-history.tsx"
  );
  import.meta.hot.lastModified = "1757765166877.5754";
}
function IncomeHistory() {
  _s();
  const {
    tranasctions
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "flex justify-between items-center mb-8 sm:mb-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl xs:text-2xl font-black text-primary", children: "Income History Summary" }, void 0, false, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "my-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IncomeHistoryTable, { data: tranasctions }, void 0, false, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.transactions.income-history.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s(IncomeHistory, "f1h4WW2kfySKXwHcvuCsNHOIUmA=", false, function() {
  return [useLoaderData];
});
_c2 = IncomeHistory;
var _c2;
$RefreshReg$(_c2, "IncomeHistory");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  IncomeHistory as default
};
//# sourceMappingURL=/build/routes/admin.transactions.income-history-F3JK2EQ7.js.map
