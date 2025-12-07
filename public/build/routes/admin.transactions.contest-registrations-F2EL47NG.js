import {
  DataTable,
  DataTableColumnHeader
} from "/build/_shared/chunk-KRCVZZ47.js";
import {
  formatDate
} from "/build/_shared/chunk-577Q6RJD.js";
import {
  Pagination
} from "/build/_shared/chunk-B65OOJCS.js";
import {
  numberFormatter
} from "/build/_shared/chunk-7G67FTYO.js";
import {
  StatusTag
} from "/build/_shared/chunk-XDSNFUTZ.js";
import "/build/_shared/chunk-OU5XO7XO.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
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
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/admin.transactions.contest-registrations.tsx
var import_node = __toESM(require_node(), 1);

// app/components/admin/transactions/ContestRegistrationsTable.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/transactions/ContestRegistrationsTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/transactions/ContestRegistrationsTable.tsx"
  );
  import.meta.hot.lastModified = "1757765166861.165";
}
var numberFormatterOptions = {
  style: "currency",
  currency: "NGN"
};
var dateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric"
};
var timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};
var columns = [{
  header: "S/N",
  cell: ({
    row
  }) => +row.id + 1
}, {
  accessorKey: "tx_ref",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "trx ref" }, void 0, false, {
    fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "contest",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "contest" }, void 0, false, {
    fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "contestant",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "contestant" }, void 0, false, {
    fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "sender",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "sender" }, void 0, false, {
    fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "amount",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "amount" }, void 0, false, {
    fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
    lineNumber: 70,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => numberFormatter(getValue(), numberFormatterOptions)
}, {
  accessorKey: "date",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "date" }, void 0, false, {
    fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
    lineNumber: 78,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: formatDate(new Date(getValue()), dateOptions) }, void 0, false, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 82,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: formatDate(new Date(getValue()), timeOptions) }, void 0, false, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 83,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "status",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "status" }, void 0, false, {
    fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
    lineNumber: 89,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => {
    const status = getValue();
    const color = status === "pending" ? "yellow" : status === "verified" ? "green" : status === "revoked" ? "red" : "gray";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusTag, { status, color }, void 0, false, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 95,
      columnNumber: 12
    }, this);
  }
}];
function ContestRegistrationsTable({
  data
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, { data, columns, className: "text-xs" }, void 0, false, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 103,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 102,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 }, void 0, false, {
          fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
          lineNumber: 107,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, {}, void 0, false, {
        fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 105,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_c = ContestRegistrationsTable;
var _c;
$RefreshReg$(_c, "ContestRegistrationsTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.transactions.contest-registrations.tsx
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.transactions.contest-registrations.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.transactions.contest-registrations.tsx"
  );
  import.meta.hot.lastModified = "1757765166877.477";
}
function ContestRegistrations() {
  _s();
  const {
    tranasctions
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "flex justify-between items-center mb-8 sm:mb-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl xs:text-2xl font-black text-primary", children: "Registration Transactions" }, void 0, false, {
      fileName: "app/routes/admin.transactions.contest-registrations.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.transactions.contest-registrations.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "my-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContestRegistrationsTable, { data: tranasctions }, void 0, false, {
      fileName: "app/routes/admin.transactions.contest-registrations.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.transactions.contest-registrations.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.transactions.contest-registrations.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_s(ContestRegistrations, "f1h4WW2kfySKXwHcvuCsNHOIUmA=", false, function() {
  return [useLoaderData];
});
_c2 = ContestRegistrations;
var _c2;
$RefreshReg$(_c2, "ContestRegistrations");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ContestRegistrations as default
};
//# sourceMappingURL=/build/routes/admin.transactions.contest-registrations-F2EL47NG.js.map
