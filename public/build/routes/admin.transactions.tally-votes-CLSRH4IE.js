import {
  Checkbox
} from "/build/_shared/chunk-CLVEAIQ2.js";
import {
  Select
} from "/build/_shared/chunk-VR2MBONM.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "/build/_shared/chunk-VRCWIES3.js";
import "/build/_shared/chunk-X7MJWV53.js";
import {
  Cta_default
} from "/build/_shared/chunk-JSO2QJI7.js";
import "/build/_shared/chunk-NOEFVVE2.js";
import "/build/_shared/chunk-4PSCNRID.js";
import {
  FormControl
} from "/build/_shared/chunk-VY7DZHMV.js";
import "/build/_shared/chunk-AV2RONJM.js";
import "/build/_shared/chunk-N5XOLCME.js";
import "/build/_shared/chunk-CMHVCBDB.js";
import {
  cn
} from "/build/_shared/chunk-LOUTNZN4.js";
import {
  DataTable,
  DataTableColumnHeader
} from "/build/_shared/chunk-JQFI7IQB.js";
import {
  formatDate
} from "/build/_shared/chunk-577Q6RJD.js";
import {
  Pagination
} from "/build/_shared/chunk-BDARQS7C.js";
import {
  numberFormatter
} from "/build/_shared/chunk-7G67FTYO.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  StatusTag
} from "/build/_shared/chunk-6BY4NF3F.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Form,
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

// app/routes/admin.transactions.tally-votes.tsx
var import_node = __toESM(require_node(), 1);

// app/components/admin/transactions/AddTallyDialog.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/transactions/AddTallyDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/transactions/AddTallyDialog.tsx"
  );
  import.meta.hot.lastModified = "1757765166861.0518";
}
function AddTallyDialog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { title: "add tally transaction", className: cn(`flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-accent text-secondary`), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
        fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      "Add Payment"
    ] }, void 0, true, {
      fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "bg-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: "Add Tally Transaction" }, void 0, false, {
        fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "text-primary text-xs flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "py-4 grid sm:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "sender", name: "sender", labelText: "Sender" }, void 0, false, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 41,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Contest", name: "contest", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select a contest" }, void 0, false, {
              fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
              lineNumber: 43,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "KOTM01", children: "Kotm01" }, void 0, false, {
              fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
              lineNumber: 44,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 42,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "code", name: "code", labelText: "Code" }, void 0, false, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 46,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "number", id: "vote", name: "vote", labelText: "Vote", min: 0, defaultValue: 0 }, void 0, false, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 47,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "number", id: "amount", name: "amount", labelText: "Amount (NGN)", min: 0, defaultValue: 0 }, void 0, false, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 48,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "number", id: "fee", name: "fee", labelText: "Fee (NGN)", min: 0, defaultValue: 0 }, void 0, false, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 49,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Submit" }, void 0, false, {
          fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
          lineNumber: 52,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c = AddTallyDialog;
var _c;
$RefreshReg$(_c, "AddTallyDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/transactions/VerifyTransactionDialog.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/transactions/VerifyTransactionDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/transactions/VerifyTransactionDialog.tsx"
  );
  import.meta.hot.lastModified = "1757765166861.955";
}
function VerifyTransactionDialog({
  disabled
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { disabled, title: "Verify transaction", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-green-500 bg-green-50 text-green-500`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.checkIcon, className: "w-3" }, void 0, false, {
      fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { children: "Verify this transaction" }, void 0, false, {
          fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogDescription, { children: "This transaction will be marked as verified. Are you sure you want to proceed?" }, void 0, false, {
          fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
        fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
      lineNumber: 36,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c2 = VerifyTransactionDialog;
var _c2;
$RefreshReg$(_c2, "VerifyTransactionDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/transactions/RevokeTransactionDialog.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/transactions/RevokeTransactionDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/transactions/RevokeTransactionDialog.tsx"
  );
  import.meta.hot.lastModified = "1757765166861.551";
}
function RevokeTransactionDialog({
  disabled
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTrigger, { disabled, title: "Revoke transaction", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.doubleArrowDiagonalIcon, className: "w-3" }, void 0, false, {
      fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTitle, { children: "Revoke this transaction" }, void 0, false, {
          fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogDescription, { children: "This transactoin will be marked as revoked. Are you sure you want to proceed?" }, void 0, false, {
          fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
        fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c3 = RevokeTransactionDialog;
var _c3;
$RefreshReg$(_c3, "RevokeTransactionDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/transactions/DeleteTransactionDialog.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/transactions/DeleteTransactionDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/transactions/DeleteTransactionDialog.tsx"
  );
  import.meta.hot.lastModified = "1757765166861.2783";
}
function DeleteTransactionDialog({
  disabled
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogTrigger, { disabled, title: "Delete transaction", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.trashIcon, className: "w-3" }, void 0, false, {
      fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogTitle, { children: "Delete this transaction" }, void 0, false, {
          fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogDescription, { children: "This transactoin will be marked as deleted. Are you sure you want to proceed?" }, void 0, false, {
          fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
        fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c4 = DeleteTransactionDialog;
var _c4;
$RefreshReg$(_c4, "DeleteTransactionDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/transactions/TallyTableActions.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/transactions/TallyTableActions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/transactions/TallyTableActions.tsx"
  );
  import.meta.hot.lastModified = "1757765166861.666";
}
function TallyTableActions({
  table
}) {
  const rowsSelected = table.getFilteredSelectedRowModel().rows.length >= 1;
  const canVerify = rowsSelected && table.getSelectedRowModel().rows.every(({
    original
  }) => original.status !== "verified");
  const canRevoke = rowsSelected && table.getSelectedRowModel().rows.every(({
    original
  }) => original.status !== "revoked");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-4 items-center px-3 mb-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VerifyTransactionDialog, { disabled: !canVerify }, void 0, false, {
      fileName: "app/components/admin/transactions/TallyTableActions.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(RevokeTransactionDialog, { disabled: !canRevoke }, void 0, false, {
      fileName: "app/components/admin/transactions/TallyTableActions.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DeleteTransactionDialog, { disabled: !rowsSelected }, void 0, false, {
      fileName: "app/components/admin/transactions/TallyTableActions.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/transactions/TallyTableActions.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c5 = TallyTableActions;
var _c5;
$RefreshReg$(_c5, "TallyTableActions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/transactions/TallyTransactionsTable.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/transactions/TallyTransactionsTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/transactions/TallyTransactionsTable.tsx"
  );
  import.meta.hot.lastModified = "1757765166861.845";
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
  id: "select",
  header: ({
    table
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Checkbox, { className: "h-4 w-4", "aria-label": "Select all", checked: table.getIsAllPageRowsSelected(), onCheckedChange: (value) => {
    table.toggleAllPageRowsSelected(!value);
  } }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this),
  cell: ({
    row
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Checkbox, { className: "h-4 w-4", "aria-label": "Select row", checked: row.getIsSelected(), onCheckedChange: (value) => row.toggleSelected(!value) }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 55,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 54,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "tx_ref",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "trx ref" }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "sender",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "sender" }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 66,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "code",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "code" }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 71,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "votes",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "votes" }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "amount",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "amount" }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => numberFormatter(getValue(), numberFormatterOptions)
}, {
  accessorKey: "fee",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "fee" }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 89,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => numberFormatter(getValue(), numberFormatterOptions)
}, {
  accessorKey: "date",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "date" }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 97,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "block", children: formatDate(new Date(getValue()), dateOptions) }, void 0, false, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 101,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "block", children: formatDate(new Date(getValue()), timeOptions) }, void 0, false, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 102,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 100,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "status",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "status" }, void 0, false, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 108,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => {
    const status = getValue();
    const color = status === "pending" ? "yellow" : status === "verified" ? "green" : status === "revoked" ? "red" : "gray";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(StatusTag, { status, color }, void 0, false, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 114,
      columnNumber: 12
    }, this);
  }
}];
function TallyTransactionsTable({
  data
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTable, { data, columns, className: "text-xs", TableActions: TallyTableActions }, void 0, false, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 122,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 121,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 }, void 0, false, {
          fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
          lineNumber: 126,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
        lineNumber: 125,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Pagination, {}, void 0, false, {
        fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
        lineNumber: 128,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 124,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 120,
    columnNumber: 10
  }, this);
}
_c6 = TallyTransactionsTable;
var _c6;
$RefreshReg$(_c6, "TallyTransactionsTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.transactions.tally-votes.tsx
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.transactions.tally-votes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.transactions.tally-votes.tsx"
  );
  import.meta.hot.lastModified = "1757765166877.6882";
}
function TallyVotes() {
  _s();
  const {
    tranasctions
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "flex max-sm:flex-col gap-10 justify-between sm:items-center mb-6 sm:mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Tally Votes" }, void 0, false, {
        fileName: "app/routes/admin.transactions.tally-votes.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AddTallyDialog, {}, void 0, false, {
        fileName: "app/routes/admin.transactions.tally-votes.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "my-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TallyTransactionsTable, { data: tranasctions }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 86,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(TallyVotes, "f1h4WW2kfySKXwHcvuCsNHOIUmA=", false, function() {
  return [useLoaderData];
});
_c7 = TallyVotes;
var _c7;
$RefreshReg$(_c7, "TallyVotes");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TallyVotes as default
};
//# sourceMappingURL=/build/routes/admin.transactions.tally-votes-CLSRH4IE.js.map
