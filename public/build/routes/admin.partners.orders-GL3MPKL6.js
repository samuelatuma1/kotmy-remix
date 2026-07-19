import {
  PackageSearch,
  Search,
  ShieldCheck,
  ShieldX,
  ShoppingBag
} from "/build/_shared/chunk-JZYOZKIK.js";
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
  DialogTitle
} from "/build/_shared/chunk-A53UP4AC.js";
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
  useLocation,
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

// app/routes/admin.partners.orders.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/admin.partners.orders.tsx"' + id);
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
    "app/routes/admin.partners.orders.tsx"
  );
  import.meta.hot.lastModified = "1783926663586.3696";
}
var adminOrderStatusOptions = [{
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
var adminOrderItemStatusOptions = [{
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
  label: "Fulfillment confirmed by customer",
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
var adminResolveStatusOptions = [{
  label: "Returned and refunded",
  value: "ReturnedAndRefunded" /* ReturnedAndRefunded */
}, {
  label: "Fulfillment confirmed by admin",
  value: "FulfillmentConfirmedByAdmin" /* FulfillmentConfirmedByAdmin */
}];
var refundTypeOptions = [{
  label: "Wallet",
  value: "wallet" /* wallet */
}, {
  label: "Customer bank",
  value: "customer_bank" /* customer_bank */
}];
function formatMoney(currency, value) {
  return `${currency} ${new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(value)}`;
}
function formatDate(value) {
  try {
    return new Intl.DateTimeFormat("en-NG", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(value));
  } catch {
    return value;
  }
}
function formatLabel(value) {
  if (!value)
    return "N/A";
  return value.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/\s+/g, " ").trim();
}
function OrdersSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: Array.from({
    length: 3
  }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-32 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 196,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 h-6 w-2/3 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 197,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-full rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 198,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-5/6 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 199,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 h-28 rounded-2xl bg-slate-100" }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 200,
      columnNumber: 11
    }, this)
  ] }, index, true, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 195,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 192,
    columnNumber: 10
  }, this);
}
_c = OrdersSkeleton;
function DetailRow({
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500", children: label }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 210,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: value ?? "N/A" }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 211,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 209,
    columnNumber: 10
  }, this);
}
_c2 = DetailRow;
function OrderDetailsModal({
  row,
  open,
  onOpenChange
}) {
  if (!row)
    return null;
  const {
    order,
    item
  } = row;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "max-h-[90vh] max-w-5xl overflow-y-auto border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.16)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { className: "border-b border-slate-100 p-6 text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "text-2xl font-black text-slate-950", children: "Order details" }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "mt-2 text-sm leading-6 text-slate-600", children: "Review the order and item details before taking any admin action." }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 229,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 227,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6 p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-black uppercase tracking-[0.18em] text-slate-500", children: "Order summary" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 237,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order status", value: formatLabel(order.status) }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 239,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order code", value: order.order_code }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 240,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order id", value: order._id }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 241,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Currency", value: order.currency }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 242,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Customer name", value: order.delivery_name }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 243,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Delivery email", value: order.delivery_email }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 244,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Business", value: order.business_name }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 245,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Business email", value: order.business_email }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 246,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 238,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-black uppercase tracking-[0.18em] text-slate-500", children: "Item summary" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 251,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Item status", value: formatLabel(item.status) }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 253,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order item id", value: item.order_item_id }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 254,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Amount", value: formatMoney(item.currency, item.min_amount_total) }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 255,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Quantity", value: item.quantity }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 256,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Customer remark", value: item.customer_remark ?? "N/A" }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 257,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Partner remark", value: item.partner_remark ?? "N/A" }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 258,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Admin remark", value: item.admin_remark ?? "N/A" }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 259,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Fulfilled at", value: item.fulfilled_at ? formatDate(item.fulfilled_at) : "N/A" }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 260,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 252,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 250,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 235,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 lg:grid-cols-[1.1fr_0.9fr]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-black uppercase tracking-[0.18em] text-slate-500", children: "Delivery details" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 267,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Delivery name", value: order.delivery_name }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 269,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Delivery phone", value: order.delivery_phone_number }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 270,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Delivery street", value: order.delivery_street }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 271,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Delivery city", value: order.delivery_city }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 272,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Delivery state", value: order.delivery_state }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 273,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Delivery country", value: order.delivery_country }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 274,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 268,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 266,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-black uppercase tracking-[0.18em] text-slate-500", children: "Payment details" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 279,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Payment option", value: formatLabel(order.payment_details?.payment_option) }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 281,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Payment status", value: formatLabel(order.payment_details?.status) }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 282,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Reference", value: order.payment_details?.reference }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 283,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Payment amount", value: formatMoney(order.currency, order.payment_details?.amount ?? 0) }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 284,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order created", value: formatDate(order.created_at) }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 286,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 285,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 280,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 278,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-black uppercase tracking-[0.18em] text-slate-500", children: "Status history" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 293,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 space-y-3", children: item.status_history?.length ? item.status_history.map((entry, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-semibold text-slate-900", children: formatLabel(entry.status) }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 296,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-xs text-slate-500", children: formatDate(String(entry.updated_at)) }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 297,
            columnNumber: 21
          }, this)
        ] }, `${entry.status}-${index}`, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 295,
          columnNumber: 88
        }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-sm text-slate-500", children: "No status history available." }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 298,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 294,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 292,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 234,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 226,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 225,
    columnNumber: 10
  }, this);
}
_c3 = OrderDetailsModal;
function ResolveDisputeModal({
  row,
  open,
  onOpenChange
}) {
  _s();
  const fetcher = useFetcher();
  const revalidator = useRevalidator();
  const handledResponseRef = (0, import_react2.useRef)(false);
  const [updatedStatus, setUpdatedStatus] = (0, import_react2.useState)("FulfillmentConfirmedByAdmin" /* FulfillmentConfirmedByAdmin */);
  const [confirmationCode, setConfirmationCode] = (0, import_react2.useState)("");
  const isSubmitting = fetcher.state !== "idle";
  const errorMessage = fetcher.data && !fetcher.data.ok ? fetcher.data.error : null;
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
      toast({
        title: "Success",
        description: fetcher.data.message
      });
      onOpenChange(false);
      revalidator.revalidate();
      return;
    }
    toast({
      variant: "destructive",
      title: "Resolve dispute failed",
      description: fetcher.data.error
    });
  }, [fetcher.data, onOpenChange, revalidator]);
  (0, import_react2.useEffect)(() => {
    if (!open) {
      setUpdatedStatus("FulfillmentConfirmedByAdmin" /* FulfillmentConfirmedByAdmin */);
      setConfirmationCode("");
    }
  }, [open, row?.order.order_code]);
  const requiresRefund = updatedStatus === "ReturnedAndRefunded" /* ReturnedAndRefunded */;
  if (!row || row.item.status !== "Disputed" /* Disputed */)
    return null;
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    const submittedCode = String(formData.get("order_code") ?? "").trim();
    const expectedCode = String(formData.get("expected_order_code") ?? "").trim();
    if (!submittedCode || submittedCode !== expectedCode) {
      event.preventDefault();
      toast({
        variant: "destructive",
        title: "Order code mismatch",
        description: "Type the exact order code shown in the dialog before submitting."
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "max-h-[90vh] max-w-3xl overflow-y-auto border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.16)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { className: "border-b border-slate-100 p-6 text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "text-2xl font-black text-slate-950", children: "Resolve dispute" }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 368,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "mt-2 text-sm leading-6 text-slate-600", children: "Verify the order code, choose the final item status, and provide the admin note before submitting." }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 369,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 367,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", className: "space-y-5 p-6", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "resolve_dispute" }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 375,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "order_id", value: row.order._id }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 376,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "order_item_id", value: row.item.order_item_id }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 377,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "expected_order_code", value: row.order.order_code }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 378,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 rounded-[1.5rem] border border-rose-100 bg-rose-50 p-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order code", value: row.order.order_code }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 381,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order Amount", value: `${row.order.currency} ${row.item.min_amount_total}` }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 382,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Current item status", value: formatLabel(row.item.status) }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 383,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order Business Name", value: formatLabel(row.order.business_name) }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 384,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Customer Details", value: `${row.order.delivery_name} | ${row.order.delivery_email} | ${row.order.delivery_phone_number}` }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 385,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Partner Details", value: `Business Mail: ${row.order.business_contact_person_email} | Contact Mail:  ${row.order.business_contact_person_email} | Phone: Business ${row.order.business_contact_person_phone} | Contact Person ${row.order.business_contact_person_phone}` }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 386,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Customer Message", value: `${row.item.customer_remark}` }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 387,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Partner Message", value: `${row.item.partner_remark ?? ""}` }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 388,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order Fulfilled at", value: `${row.item.fulfilled_at}` }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 389,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 380,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Confirm order code" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 393,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "order_code", required: true, autoComplete: "off", value: confirmationCode, onChange: (event) => setConfirmationCode(event.target.value), placeholder: "Type the exact order code", className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 394,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 392,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Updated order item status" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 398,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "updated_order_item_status", required: true, value: updatedStatus, onChange: (event) => setUpdatedStatus(event.target.value), className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition focus:border-slate-950", children: adminResolveStatusOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.label }, option.value, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 402,
          columnNumber: 56
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 401,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 397,
        columnNumber: 11
      }, this),
      requiresRefund ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Refund amount" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 410,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "refund_amount", type: "number", min: "0", step: "0.01", required: true, placeholder: "Enter refund amount", className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 411,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 409,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Refund type" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 415,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "refund_type", required: true, className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition focus:border-slate-950", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select refund type" }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 417,
              columnNumber: 19
            }, this),
            refundTypeOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.label }, option.value, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 418,
              columnNumber: 52
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 416,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 414,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 408,
        columnNumber: 29
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Admin remark" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 426,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "remark", required: true, rows: 4, placeholder: "Explain the resolution decision", className: "rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 427,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 425,
        columnNumber: 11
      }, this),
      errorMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700", children: errorMessage }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 430,
        columnNumber: 27
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { className: "gap-3 border-t border-slate-100 pt-5 sm:justify-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Back" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 436,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 435,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70", children: isSubmitting ? "Submitting..." : "Resolve dispute" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 440,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 434,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 374,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 366,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 365,
    columnNumber: 10
  }, this);
}
_s(ResolveDisputeModal, "VpGtaGKq53fRnYeC/FeHjwqA+Wc=", false, function() {
  return [useFetcher, useRevalidator];
});
_c4 = ResolveDisputeModal;
function OrderItemCard({
  row,
  onShowDetails,
  onResolveDispute
}) {
  const {
    order,
    item
  } = row;
  const hasRange = item.min_amount_total !== item.max_amount_total;
  const isDisputed = item.status === "Disputed" /* Disputed */;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: order.order_code }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 467,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600", children: formatLabel(order.status) }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 470,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600", children: formatLabel(item.status) }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 473,
            columnNumber: 13
          }, this),
          isDisputed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700", children: "Disputed" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 476,
            columnNumber: 27
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 466,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-black text-slate-950", children: order.business_name }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 482,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-slate-500", children: [
            order.business_email,
            " \xB7 ",
            order.delivery_name
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 483,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 481,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 465,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3 sm:grid-cols-2 lg:text-right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Amount" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 491,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: hasRange ? `${formatMoney(item.currency, item.min_amount_total)} - ${formatMoney(item.currency, item.max_amount_total)}` : formatMoney(item.currency, item.min_amount_total) }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 492,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 490,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Order item id" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 497,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 break-all text-sm font-semibold text-slate-900", children: item.order_item_id }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 498,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 496,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 489,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 464,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Important details" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 505,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Customer name", value: order.delivery_name }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 507,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Customer phone", value: order.delivery_phone_number }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 508,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Business email", value: order.business_email }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 509,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order currency", value: order.currency }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 510,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Customer remark", value: item.customer_remark ?? "N/A" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 511,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailRow, { label: "Order id", value: order._id }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 512,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 506,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 504,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Actions" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 517,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row lg:flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => onShowDetails(row), className: "inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Details" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 519,
            columnNumber: 13
          }, this),
          isDisputed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => onResolveDispute(row), className: "inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldX, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 523,
              columnNumber: 17
            }, this),
            "Resolve dispute"
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 522,
            columnNumber: 27
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex h-11 items-center justify-center rounded-full bg-slate-50 px-5 text-sm font-semibold text-slate-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "mr-2 h-4 w-4" }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 526,
              columnNumber: 17
            }, this),
            "No dispute action"
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 525,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 518,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 516,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 503,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 463,
    columnNumber: 10
  }, this);
}
_c5 = OrderItemCard;
function OrderList({
  rows,
  onShowDetails,
  onResolveDispute
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderItemCard, { row, onShowDetails, onResolveDispute }, `${row.order._id}-${row.item.order_item_id}`, false, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 541,
    columnNumber: 24
  }, this)) }, void 0, false, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 540,
    columnNumber: 10
  }, this);
}
_c6 = OrderList;
function AdminPartnerOrdersPage() {
  _s2();
  const {
    orders,
    query,
    error
  } = useLoaderData();
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === "loading" && navigation.location?.pathname === location.pathname;
  const rows = (0, import_react2.useMemo)(() => orders.items.flatMap((order) => order.orders.map((item) => ({
    order,
    item
  }))), [orders.items]);
  const [detailsRow, setDetailsRow] = (0, import_react2.useState)(null);
  const [resolveRow, setResolveRow] = (0, import_react2.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Orders" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 732,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: "Search and resolve orders." }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 736,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: "Search all platform orders by order code, order id, item id, or status, then inspect disputed items and resolve them." }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 739,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 735,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 731,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Orders" }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 747,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: orders.total_items }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 748,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 746,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Items" }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 751,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: rows.length }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 752,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 750,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Page" }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 755,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: orders.current_page }, void 0, false, {
              fileName: "app/routes/admin.partners.orders.tsx",
              lineNumber: 756,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 754,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 745,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 730,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: error }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 761,
        columnNumber: 18
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 729,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "page_size", value: orders.items_per_page }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 768,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Order code" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 771,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "order_code", defaultValue: query.order_code ?? "", placeholder: "Search order code", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 772,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 770,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Order id" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 776,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "order_id", defaultValue: query.order_id ?? "", placeholder: "Search order id", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 777,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 775,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Item id" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 781,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "order_item_id", defaultValue: query.order_item_id ?? "", placeholder: "Search order item id", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 782,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 780,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Order status" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 786,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "order_status", defaultValue: query.order_status ?? "", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white", children: adminOrderStatusOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.label }, option.label, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 788,
          columnNumber: 54
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 787,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 785,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Item status" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 795,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "order_product_status", defaultValue: query.order_product_status ?? "", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white", children: adminOrderItemStatusOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.label }, option.label, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 797,
          columnNumber: 58
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 796,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 794,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 805,
            columnNumber: 15
          }, this),
          "Search"
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 804,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/partner/orders", className: "inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Reset" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 808,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 803,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 767,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 766,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-950", children: "Order items" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 818,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: rows.length > 0 ? `${rows.length} item${rows.length === 1 ? "" : "s"} shown` : "No orders found for the selected filters" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 819,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 817,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PackageSearch, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/admin.partners.orders.tsx",
            lineNumber: 824,
            columnNumber: 13
          }, this),
          "Page ",
          orders.current_page
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 823,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 816,
        columnNumber: 9
      }, this),
      isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersSkeleton, {}, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 829,
        columnNumber: 22
      }, this) : rows.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderList, { rows, onShowDetails: setDetailsRow, onResolveDispute: setResolveRow }, void 0, false, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 829,
        columnNumber: 61
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, { className: "mx-auto h-10 w-10 text-slate-300" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 830,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-xl font-black text-slate-950", children: "No orders found" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 831,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Try a different order code, item id, or status combination." }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 832,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/partner/orders", className: "mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Clear filters" }, void 0, false, {
          fileName: "app/routes/admin.partners.orders.tsx",
          lineNumber: 835,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.orders.tsx",
        lineNumber: 829,
        columnNumber: 152
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 815,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: orders.last_key_id, firstKey: orders.first_key_id, pageSize: orders.items_per_page }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 842,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 841,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderDetailsModal, { row: detailsRow, open: !!detailsRow, onOpenChange: (open) => !open && setDetailsRow(null) }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 845,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResolveDisputeModal, { row: resolveRow, open: !!resolveRow, onOpenChange: (open) => !open && setResolveRow(null) }, void 0, false, {
      fileName: "app/routes/admin.partners.orders.tsx",
      lineNumber: 846,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.orders.tsx",
    lineNumber: 728,
    columnNumber: 10
  }, this);
}
_s2(AdminPartnerOrdersPage, "HRA8KRunIw/nwMO7WxoirKER6FQ=", false, function() {
  return [useLoaderData, useNavigation, useLocation];
});
_c7 = AdminPartnerOrdersPage;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
$RefreshReg$(_c, "OrdersSkeleton");
$RefreshReg$(_c2, "DetailRow");
$RefreshReg$(_c3, "OrderDetailsModal");
$RefreshReg$(_c4, "ResolveDisputeModal");
$RefreshReg$(_c5, "OrderItemCard");
$RefreshReg$(_c6, "OrderList");
$RefreshReg$(_c7, "AdminPartnerOrdersPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminPartnerOrdersPage as default
};
//# sourceMappingURL=/build/routes/admin.partners.orders-GL3MPKL6.js.map
