import {
  ArrowLeft,
  PackageSearch,
  ShoppingBag,
  Star
} from "/build/_shared/chunk-3UWAUYI3.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "/build/_shared/chunk-6GJEKC65.js";
import "/build/_shared/chunk-3BSRYLMA.js";
import "/build/_shared/chunk-CWOOXBW5.js";
import "/build/_shared/chunk-GJTSJNT7.js";
import "/build/_shared/chunk-4X4SKXSG.js";
import "/build/_shared/chunk-OUFOGEKV.js";
import "/build/_shared/chunk-LT4K6HQS.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link2 as Link,
  useFetcher,
  useLoaderData,
  useNavigation,
  useRevalidator
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

// app/routes/user.orders.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.orders.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/user.orders.tsx"
  );
  import.meta.hot.lastModified = "1786336875702.1147";
}
var orderStatusOptions = [{
  label: "All statuses",
  value: ""
}, {
  label: "Pending pre-payment",
  value: "PendingPrePayment"
}, {
  label: "Pending",
  value: "Pending"
}, {
  label: "Processing",
  value: "Processing"
}, {
  label: "Paid pending fulfillment",
  value: "PaidPendingFulfillment"
}, {
  label: "Partially fulfilled",
  value: "PartiallyFulfilled"
}, {
  label: "Fully fulfilled",
  value: "FullyFulfilled"
}, {
  label: "Completed",
  value: "Completed"
}, {
  label: "Cancelled",
  value: "Cancelled"
}, {
  label: "Disputed",
  value: "IsDisputed"
}];
var orderProductStatusOptions = [{
  label: "All item statuses",
  value: ""
}, {
  label: "Pending",
  value: "Pending"
}, {
  label: "Active",
  value: "Active"
}, {
  label: "Cancelled",
  value: "Cancelled"
}, {
  label: "Fulfilled",
  value: "Fulfilled"
}, {
  label: "Returned",
  value: "Returned"
}, {
  label: "Fulfillment confirmed",
  value: "FulfillmentConfirmedByCustomer"
}, {
  label: "Disputed",
  value: "Disputed"
}, {
  label: "Refund triggered",
  value: "RefundTriggered"
}, {
  label: "Returned and refunded",
  value: "ReturnedAndRefunded"
}, {
  label: "Fulfillment confirmed by admin",
  value: "FulfillmentConfirmedByAdmin"
}];
function formatMoney(currency, value) {
  return `${currency} ${new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(value)}`;
}
function formatDate(value) {
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}
function formatStatusLabel(value) {
  return value.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/\s+/g, " ").trim();
}
function OrdersSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: Array.from({
    length: 3
  }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-28 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 220,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 h-6 w-2/3 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 221,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-full rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 222,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-5/6 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 223,
      columnNumber: 11
    }, this)
  ] }, index, true, {
    fileName: "app/routes/user.orders.tsx",
    lineNumber: 219,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/routes/user.orders.tsx",
    lineNumber: 216,
    columnNumber: 10
  }, this);
}
_c = OrdersSkeleton;
function FulfillmentConfirmDialog({
  order,
  item
}) {
  _s();
  const fetcher = useFetcher();
  const revalidator = useRevalidator();
  const [open, setOpen] = (0, import_react2.useState)(false);
  const handledSuccessRef = (0, import_react2.useRef)(false);
  const isSubmitting = fetcher.state !== "idle";
  const errorMessage = fetcher.data && !fetcher.data.ok ? fetcher.data.error : null;
  (0, import_react2.useEffect)(() => {
    if (fetcher.state === "submitting") {
      handledSuccessRef.current = false;
    }
  }, [fetcher.state]);
  (0, import_react2.useEffect)(() => {
    if (!fetcher.data || !fetcher.data.ok || handledSuccessRef.current)
      return;
    handledSuccessRef.current = true;
    setOpen(false);
    revalidator.revalidate();
    toast({
      title: "Success",
      description: fetcher.data.message
    });
  }, [fetcher.data, revalidator]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Confirm Fulfillment" }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 256,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 255,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "max-w-xl border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.16)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { className: "border-b border-slate-100 p-6 text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "text-2xl font-black text-slate-950", children: "Confirm order receipt" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 262,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "mt-2 text-sm leading-6 text-slate-600", children: "Type the order code below to confirm you have received this item. You can also leave an optional rating and remark." }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 263,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", className: "space-y-5 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "confirm_fulfillment" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 269,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "order_id", value: order._id }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 270,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "order_item_id", value: item.order_item_id }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 271,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Order code" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: order.order_code }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 275,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Confirm order code" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 279,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "order_code", required: true, autoComplete: "off", placeholder: "Type the displayed order code", className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 280,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 278,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 285,
              columnNumber: 15
            }, this),
            "Rating"
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 284,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "rating", defaultValue: "", className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition focus:border-slate-950", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Optional rating" }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 289,
              columnNumber: 15
            }, this),
            Array.from({
              length: 5
            }).map((_, index) => {
              const rating = index + 1;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: rating, children: [
                rating,
                " star",
                rating > 1 ? "s" : ""
              ] }, rating, true, {
                fileName: "app/routes/user.orders.tsx",
                lineNumber: 294,
                columnNumber: 22
              }, this);
            })
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 288,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 283,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Remark" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 302,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "remark", rows: 4, placeholder: "Optional remark about the product or delivery", className: "rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 303,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 301,
          columnNumber: 11
        }, this),
        errorMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700", children: errorMessage }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 306,
          columnNumber: 27
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { className: "gap-3 border-t border-slate-100 pt-5 sm:justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Back" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 312,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 311,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70", children: isSubmitting ? "Working..." : "Confirm fulfillment" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 316,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 310,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 268,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 260,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.orders.tsx",
    lineNumber: 254,
    columnNumber: 10
  }, this);
}
_s(FulfillmentConfirmDialog, "omxYuAA95y+CoqpGwVnCnkD59Uc=", false, function() {
  return [useFetcher, useRevalidator];
});
_c2 = FulfillmentConfirmDialog;
function DisputeFulfillmentDialog({
  order,
  item
}) {
  _s2();
  const fetcher = useFetcher();
  const revalidator = useRevalidator();
  const [open, setOpen] = (0, import_react2.useState)(false);
  const handledResponseRef = (0, import_react2.useRef)(false);
  const isSubmitting = fetcher.state !== "idle";
  const errorMessage = fetcher.data && !fetcher.data.ok ? fetcher.data.error : null;
  const isPrepaid = order.payment_details?.payment_option === "prepay";
  (0, import_react2.useEffect)(() => {
    if (fetcher.state === "submitting") {
      handledResponseRef.current = false;
    }
  }, [fetcher.state]);
  (0, import_react2.useEffect)(() => {
    if (!fetcher.data || handledResponseRef.current)
      return;
    handledResponseRef.current = true;
    if (fetcher.data.ok) {
      setOpen(false);
      revalidator.revalidate();
      toast({
        title: "Success",
        description: fetcher.data.message
      });
      return;
    }
    toast({
      variant: "destructive",
      title: "Dispute failed",
      description: fetcher.data.error
    });
  }, [fetcher.data, revalidator]);
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    const submittedCode = String(formData.get("order_code") ?? "").trim();
    if (submittedCode !== order.order_code) {
      event.preventDefault();
      toast({
        variant: "destructive",
        title: "Order code mismatch",
        description: "The order code you entered does not match this order."
      });
    }
  };
  if (!isPrepaid) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex h-11 items-center justify-center rounded-full border border-rose-200 bg-white px-4 text-sm font-bold text-rose-700 transition hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50", children: "Dispute Order" }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 380,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 379,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "max-w-xl border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.16)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { className: "border-b border-slate-100 p-6 text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "text-2xl font-black text-slate-950", children: "Dispute order fulfillment" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 386,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "mt-2 text-sm leading-6 text-slate-600", children: "Use this if the order was not fulfilled as expected. Your report will be sent for admin review." }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 387,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 385,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", className: "space-y-5 p-6", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "dispute_fulfillment" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 393,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "order_id", value: order._id }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 394,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "order_item_id", value: item.order_item_id }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 395,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-rose-100 bg-rose-50 p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-rose-500", children: "Order code" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 398,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: order.order_code }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 399,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-slate-600", children: "Type the exact order code to confirm this dispute request." }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 400,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 397,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Confirm order code" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 406,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "order_code", required: true, autoComplete: "off", placeholder: "Enter the order code", className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 407,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 405,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Remark" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 411,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "remark", required: true, rows: 4, placeholder: "Explain what was not fulfilled as expected", className: "rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 412,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 410,
          columnNumber: 11
        }, this),
        errorMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700", children: errorMessage }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 415,
          columnNumber: 27
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { className: "gap-3 border-t border-slate-100 pt-5 sm:justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Back" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 421,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 420,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "inline-flex h-11 items-center justify-center rounded-full bg-rose-600 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-70", children: isSubmitting ? "Working..." : "Submit dispute" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 425,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 419,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 392,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 384,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.orders.tsx",
    lineNumber: 378,
    columnNumber: 10
  }, this);
}
_s2(DisputeFulfillmentDialog, "6YzFmOy9h1OcOFkyqHxHcF38w9o=", false, function() {
  return [useFetcher, useRevalidator];
});
_c3 = DisputeFulfillmentDialog;
function OrderItemRow({
  order,
  item
}) {
  const hasRange = item.min_amount_total !== item.max_amount_total;
  const isFulfilled = item.status === "Fulfilled" /* Fulfilled */;
  const isPrepaid = order.payment_details?.payment_option === "prepay";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-bold text-slate-950", children: item.product_name }, void 0, false, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 447,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-xs text-slate-500", children: [
        "Qty ",
        item.quantity,
        " \xB7",
        " ",
        hasRange ? `${formatMoney(item.currency, item.min_amount_total)} - ${formatMoney(item.currency, item.max_amount_total)}` : formatMoney(item.currency, item.min_amount_total)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 448,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 446,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600", children: formatStatusLabel(item.status) }, void 0, false, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 455,
        columnNumber: 11
      }, this),
      isFulfilled ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FulfillmentConfirmDialog, { order, item }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 460,
          columnNumber: 15
        }, this),
        isPrepaid ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DisputeFulfillmentDialog, { order, item }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 461,
          columnNumber: 28
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 459,
        columnNumber: 26
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 454,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.orders.tsx",
    lineNumber: 445,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.orders.tsx",
    lineNumber: 444,
    columnNumber: 10
  }, this);
}
_c4 = OrderItemRow;
function OrderCard({
  order
}) {
  const paymentLink = order.payment_details?.payment_link;
  const isPrepaid = order.payment_details?.payment_option === "prepay";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.1)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: order.order_code }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 477,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600", children: formatStatusLabel(order.status) }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 478,
            columnNumber: 13
          }, this),
          isPrepaid ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700", children: "Prepaid" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 481,
            columnNumber: 26
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 476,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-black text-slate-950", children: order.business_name }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 487,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-slate-500", children: [
            order.business_contact_person_name,
            " \xB7 ",
            order.delivery_phone_number
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 488,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 486,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 475,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3 sm:grid-cols-2 lg:text-right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Created" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 496,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: formatDate(order.created_at) }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 497,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 495,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Total" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 500,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: order.min_total_amount === order.max_total_amount ? formatMoney(order.currency, order.min_total_amount) : `${formatMoney(order.currency, order.min_total_amount)} - ${formatMoney(order.currency, order.max_total_amount)}` }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 501,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 499,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 494,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 474,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Order items" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 510,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: order.orders.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderItemRow, { order, item }, item.order_item_id, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 512,
          columnNumber: 39
        }, this)) }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 511,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 509,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Delivery & payment" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 517,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-slate-900", children: order.delivery_name || "Delivery details" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 519,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: order.delivery_street }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 520,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            order.delivery_city,
            ", ",
            order.delivery_state,
            ", ",
            order.delivery_country
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 521,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
            "Payment option: ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: order.payment_details?.payment_option }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 525,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 524,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            "Payment status: ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: order.payment_details?.status }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 528,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 527,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            "Reference: ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900 break-all", children: order.payment_details?.reference }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 531,
              columnNumber: 26
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 530,
            columnNumber: 13
          }, this),
          paymentLink ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: paymentLink, target: "_blank", rel: "noreferrer", className: "mt-3 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Open payment link" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 533,
            columnNumber: 28
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 518,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 516,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 508,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.orders.tsx",
    lineNumber: 473,
    columnNumber: 10
  }, this);
}
_c5 = OrderCard;
function MarketplaceOrders() {
  _s3();
  const {
    orders,
    query,
    error
  } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const hasOrders = orders.items.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace", className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 688,
              columnNumber: 15
            }, this),
            "Back to marketplace"
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 687,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Orders" }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 692,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: "Track and search your marketplace orders." }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 695,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: "Use the filters below to narrow results by order status or item status." }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 698,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 691,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 686,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Orders" }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 706,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: orders.total_items }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 707,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 705,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Page size" }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 710,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: orders.items_per_page }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 711,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 709,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Current page" }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 714,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: orders.current_page }, void 0, false, {
              fileName: "app/routes/user.orders.tsx",
              lineNumber: 715,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 713,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 704,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 685,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: error }, void 0, false, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 720,
        columnNumber: 18
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 684,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Order status" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 728,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "order_status", defaultValue: query.order_status ?? "", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white", children: orderStatusOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.label }, option.label, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 730,
          columnNumber: 49
        }, this)) }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 729,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 727,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Item status" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 737,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "order_product_status", defaultValue: query.order_product_status ?? "", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white", children: orderProductStatusOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.label }, option.label, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 739,
          columnNumber: 56
        }, this)) }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 738,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 736,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Search" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 746,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace/orders", className: "inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Reset" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 749,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 745,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 726,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 725,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-950", children: "Orders" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 759,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: orders.total_items > 0 ? `${orders.total_items} order${orders.total_items === 1 ? "" : "s"} found` : "No orders found for the selected filters" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 760,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 758,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PackageSearch, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/user.orders.tsx",
            lineNumber: 765,
            columnNumber: 13
          }, this),
          "Page ",
          orders.current_page
        ] }, void 0, true, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 764,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 757,
        columnNumber: 9
      }, this),
      isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersSkeleton, {}, void 0, false, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 770,
        columnNumber: 22
      }, this) : hasOrders ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: orders.items.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderCard, { order }, order._id, false, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 771,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 770,
        columnNumber: 55
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, { className: "mx-auto h-10 w-10 text-slate-300" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 773,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-xl font-black text-slate-950", children: "No orders yet" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 774,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Once you place an order, it will appear here for tracking and payment follow-up." }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 775,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace", className: "mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Browse products" }, void 0, false, {
          fileName: "app/routes/user.orders.tsx",
          lineNumber: 778,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.orders.tsx",
        lineNumber: 772,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 756,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: orders.last_key_id, firstKey: orders.first_key_id, pageSize: orders.items_per_page }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 785,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.orders.tsx",
      lineNumber: 784,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.orders.tsx",
    lineNumber: 683,
    columnNumber: 10
  }, this);
}
_s3(MarketplaceOrders, "WVh0C4pgTnO9aEQK9YfoWhotTZM=", false, function() {
  return [useLoaderData, useNavigation];
});
_c6 = MarketplaceOrders;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "OrdersSkeleton");
$RefreshReg$(_c2, "FulfillmentConfirmDialog");
$RefreshReg$(_c3, "DisputeFulfillmentDialog");
$RefreshReg$(_c4, "OrderItemRow");
$RefreshReg$(_c5, "OrderCard");
$RefreshReg$(_c6, "MarketplaceOrders");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MarketplaceOrders as default
};
//# sourceMappingURL=/build/routes/user.orders-QAMFTEKJ.js.map
