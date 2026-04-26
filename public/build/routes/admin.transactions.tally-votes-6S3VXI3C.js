import {
  require_admin
} from "/build/_shared/chunk-R65623X7.js";
import {
  Checkbox
} from "/build/_shared/chunk-AD6AYDN6.js";
import {
  DataTable,
  DataTableColumnHeader
} from "/build/_shared/chunk-XUFDOKLY.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import {
  Select
} from "/build/_shared/chunk-O4R66NJX.js";
import {
  formatDate
} from "/build/_shared/chunk-FQHZK4DC.js";
import {
  require_contest
} from "/build/_shared/chunk-7IGOFRJC.js";
import {
  numberFormatter
} from "/build/_shared/chunk-7FCTUE5Q.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "/build/_shared/chunk-A53UP4AC.js";
import "/build/_shared/chunk-3BSRYLMA.js";
import "/build/_shared/chunk-CWOOXBW5.js";
import "/build/_shared/chunk-GJTSJNT7.js";
import {
  StatusTag
} from "/build/_shared/chunk-BDFN2BKX.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import "/build/_shared/chunk-4X4SKXSG.js";
import "/build/_shared/chunk-OUFOGEKV.js";
import "/build/_shared/chunk-LT4K6HQS.js";
import {
  cn
} from "/build/_shared/chunk-65Q6VMM7.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-6UGLJ4QU.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
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

// app/routes/admin.transactions.tally-votes.tsx
var import_node = __toESM(require_node(), 1);
var import_admin = __toESM(require_admin(), 1);
var import_react2 = __toESM(require_react(), 1);

// app/components/admin/transactions/VerifyTransactionDialog.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { disabled, title: "Verify transaction", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-green-500 bg-green-50 text-green-500`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.checkIcon, className: "w-3" }, void 0, false, {
      fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: "Verify this transaction" }, void 0, false, {
          fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: "This transaction will be marked as verified. Are you sure you want to proceed?" }, void 0, false, {
          fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
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
_c = VerifyTransactionDialog;
var _c;
$RefreshReg$(_c, "VerifyTransactionDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/transactions/RevokeTransactionDialog.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { disabled, title: "Revoke transaction", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.doubleArrowDiagonalIcon, className: "w-3" }, void 0, false, {
      fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { children: "Revoke this transaction" }, void 0, false, {
          fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogDescription, { children: "This transactoin will be marked as revoked. Are you sure you want to proceed?" }, void 0, false, {
          fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
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
_c2 = RevokeTransactionDialog;
var _c2;
$RefreshReg$(_c2, "RevokeTransactionDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/transactions/DeleteTransactionDialog.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTrigger, { disabled, title: "Delete transaction", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.trashIcon, className: "w-3" }, void 0, false, {
      fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTitle, { children: "Delete this transaction" }, void 0, false, {
          fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogDescription, { children: "This transactoin will be marked as deleted. Are you sure you want to proceed?" }, void 0, false, {
          fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
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
_c3 = DeleteTransactionDialog;
var _c3;
$RefreshReg$(_c3, "DeleteTransactionDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/transactions/TallyTableActions.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1771706445399.1663";
}
function TallyTableActions({
  table
}) {
  const rowsSelected = table.getFilteredSelectedRowModel().rows.length >= 1;
  const canVerify = rowsSelected && table.getSelectedRowModel().rows.every(({
    original
  }) => original.payment_status !== "verified");
  const canRevoke = rowsSelected && table.getSelectedRowModel().rows.every(({
    original
  }) => original.payment_status !== "revoked");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-4 items-center px-3 mb-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(VerifyTransactionDialog, { disabled: !canVerify }, void 0, false, {
      fileName: "app/components/admin/transactions/TallyTableActions.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RevokeTransactionDialog, { disabled: !canRevoke }, void 0, false, {
      fileName: "app/components/admin/transactions/TallyTableActions.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DeleteTransactionDialog, { disabled: !rowsSelected }, void 0, false, {
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
_c4 = TallyTableActions;
var _c4;
$RefreshReg$(_c4, "TallyTableActions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.transactions.tally-votes.tsx
var import_contest = __toESM(require_contest(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.transactions.tally-votes.tsx"
  );
  import.meta.hot.lastModified = "1775373308802.5432";
}
function AddTallyDialog({
  ongoingContests
}) {
  _s();
  const fetcher = useFetcher();
  const actionData = useActionData();
  const [open, setOpen] = (0, import_react2.useState)(false);
  const isSubmitting = fetcher.state === "submitting";
  const responseError = fetcher.data?.error ?? actionData?.error;
  const errorMessage = responseError?.detail?.toString?.() ?? responseError?.toString?.() ?? null;
  (0, import_react2.useEffect)(() => {
    const responseData = fetcher.data?.data ?? actionData?.data;
    const responseErrorLocal = fetcher.data?.error ?? actionData?.error;
    if (responseErrorLocal)
      return;
    if (responseData) {
      toast({
        variant: "default",
        title: "Tally created",
        description: "Successfully created tally transaction"
      });
      setOpen(false);
      setTimeout(() => window.location.reload(), 300);
    }
  }, [fetcher.data, actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogTrigger, { title: "add tally transaction", className: cn(`flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-accent text-secondary`), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
        fileName: "app/routes/admin.transactions.tally-votes.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      "Add Payment"
    ] }, void 0, true, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogContent, { className: "bg-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogTitle, { children: "Add Tally Transaction" }, void 0, false, {
        fileName: "app/routes/admin.transactions.tally-votes.tsx",
        lineNumber: 149,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogDescription, { children: [
        errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-3 p-3 rounded-md bg-red-50 text-red-700 text-sm", children: errorMessage }, void 0, false, {
          fileName: "app/routes/admin.transactions.tally-votes.tsx",
          lineNumber: 151,
          columnNumber: 38
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(fetcher.Form, { method: "POST", className: "text-primary text-xs flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("fieldset", { className: "py-4 grid sm:grid-cols-3 gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", labelText: "Sender Email (Optional)" }, void 0, false, {
              fileName: "app/routes/admin.transactions.tally-votes.tsx",
              lineNumber: 156,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "phone_number", name: "phone_number", labelText: "Sender Phone (Optional)" }, void 0, false, {
              fileName: "app/routes/admin.transactions.tally-votes.tsx",
              lineNumber: 157,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "name", name: "name", labelText: "Sender Name" }, void 0, false, {
              fileName: "app/routes/admin.transactions.tally-votes.tsx",
              lineNumber: 158,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { label: "Contest", name: "contest_id", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "", children: "Select a contest" }, void 0, false, {
                fileName: "app/routes/admin.transactions.tally-votes.tsx",
                lineNumber: 160,
                columnNumber: 33
              }, this),
              (ongoingContests ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: c._id, children: c.name }, void 0, false, {
                fileName: "app/routes/admin.transactions.tally-votes.tsx",
                lineNumber: 161,
                columnNumber: 67
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/admin.transactions.tally-votes.tsx",
              lineNumber: 159,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { label: "Bank Status", name: "gateway_status", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "successful", children: "Successful" }, void 0, false, {
                fileName: "app/routes/admin.transactions.tally-votes.tsx",
                lineNumber: 164,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "pending", children: "Pending" }, void 0, false, {
                fileName: "app/routes/admin.transactions.tally-votes.tsx",
                lineNumber: 165,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "failed", children: "Failed" }, void 0, false, {
                fileName: "app/routes/admin.transactions.tally-votes.tsx",
                lineNumber: 166,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.transactions.tally-votes.tsx",
              lineNumber: 163,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "contestant_code", name: "contestant_code", labelText: "Contestant Code" }, void 0, false, {
              fileName: "app/routes/admin.transactions.tally-votes.tsx",
              lineNumber: 168,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", type: "number", id: "amount", name: "amount", labelText: "Amount (NGN)", min: 0, defaultValue: 0 }, void 0, false, {
              fileName: "app/routes/admin.transactions.tally-votes.tsx",
              lineNumber: 170,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", type: "number", id: "fee", name: "fee", labelText: "Fee (NGN)", min: 0, defaultValue: 0 }, void 0, false, {
              fileName: "app/routes/admin.transactions.tally-votes.tsx",
              lineNumber: 171,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "bank_ref", name: "bank_ref", labelText: "Transaction Reference" }, void 0, false, {
              fileName: "app/routes/admin.transactions.tally-votes.tsx",
              lineNumber: 172,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.transactions.tally-votes.tsx",
            lineNumber: 155,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Cta_default, { element: "button", type: "submit", disabled: isSubmitting, className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", "aria-busy": isSubmitting, children: isSubmitting ? "Submitting..." : "Submit" }, void 0, false, {
            fileName: "app/routes/admin.transactions.tally-votes.tsx",
            lineNumber: 176,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.transactions.tally-votes.tsx",
            lineNumber: 175,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.transactions.tally-votes.tsx",
          lineNumber: 154,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.transactions.tally-votes.tsx",
        lineNumber: 150,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 148,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 147,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 142,
    columnNumber: 10
  }, this);
}
_s(AddTallyDialog, "knwKM3D0yvmupmxqcfBNcPlE+Yc=", false, function() {
  return [useFetcher, useActionData];
});
_c5 = AddTallyDialog;
function TallyVotes() {
  _s2();
  const {
    data,
    error,
    authRequired,
    ongoingContests
  } = useLoaderData();
  let transactions = data?.items ?? [];
  let lastKey = data?.last_key_id;
  let pageSize = data?.items_per_page ?? 10;
  let firstKey = data?.first_key_id;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "flex max-sm:flex-col gap-10 justify-between sm:items-center mb-6 sm:mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Tally Votes" }, void 0, false, {
        fileName: "app/routes/admin.transactions.tally-votes.tsx",
        lineNumber: 204,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AddTallyDialog, { ongoingContests }, void 0, false, {
        fileName: "app/routes/admin.transactions.tally-votes.tsx",
        lineNumber: 205,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 203,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "my-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TallyTransactionsTable, { data: transactions, lastKey: lastKey ?? "", pageSize, firstKey: firstKey ?? "" }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 208,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 207,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 202,
    columnNumber: 10
  }, this);
}
_s2(TallyVotes, "pqcT6CIbVLPJgvhhMSlj7FKN0Tk=", false, function() {
  return [useLoaderData];
});
_c22 = TallyVotes;
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
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Checkbox, { className: "h-4 w-4", "aria-label": "Select all", checked: table.getIsAllPageRowsSelected(), onCheckedChange: (value) => {
    table.toggleAllPageRowsSelected(!value);
  } }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 244,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 243,
    columnNumber: 9
  }, this),
  cell: ({
    row
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Checkbox, { className: "h-4 w-4", "aria-label": "Select row", checked: row.getIsSelected(), onCheckedChange: (value) => row.toggleSelected(!value) }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 251,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 250,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "reference",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableColumnHeader, { column, title: "trx ref" }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 257,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "customer",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableColumnHeader, { column, title: "sender" }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 262,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => {
    const customer = getValue();
    return customer.email;
  }
}, {
  accessorKey: "contestant_code",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableColumnHeader, { column, title: "code" }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 273,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "number_of_votes",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableColumnHeader, { column, title: "votes" }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 278,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "amount",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "amount" }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 283,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => numberFormatter(getValue(), numberFormatterOptions)
}, {
  accessorKey: "app_fee",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "fee" }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 291,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => numberFormatter(getValue(), numberFormatterOptions)
}, {
  accessorKey: "created_at",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableColumnHeader, { column, title: "date" }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 299,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "block", children: formatDate(new Date(getValue()), dateOptions) }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 303,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "block", children: formatDate(new Date(getValue()), timeOptions) }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 304,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 302,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "payment_status",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableColumnHeader, { column, title: "status" }, void 0, false, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 310,
    columnNumber: 9
  }, this),
  cell: ({
    getValue
  }) => {
    const status = getValue();
    const color = status === "PENDING" ? "yellow" : status === "SUCCESS" ? "green" : status === "REFUNDED" ? "red" : "gray";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StatusTag, { status, color }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 316,
      columnNumber: 12
    }, this);
  }
}];
function TallyTransactionsTable({
  data,
  lastKey,
  pageSize,
  firstKey
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTable, { data, columns, className: "text-xs", TableActions: TallyTableActions }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 327,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 326,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Pagination, { lastKey, pageSize, firstKey }, void 0, false, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 329,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 325,
    columnNumber: 10
  }, this);
}
_c32 = TallyTransactionsTable;
var _c5;
var _c22;
var _c32;
$RefreshReg$(_c5, "AddTallyDialog");
$RefreshReg$(_c22, "TallyVotes");
$RefreshReg$(_c32, "TallyTransactionsTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TallyVotes as default
};
//# sourceMappingURL=/build/routes/admin.transactions.tally-votes-6S3VXI3C.js.map
