import {
  ArrowLeft,
  CreditCard,
  PackageSearch,
  Phone,
  ShieldCheck,
  SquarePen
} from "/build/_shared/chunk-3UWAUYI3.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
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
import {
  cn
} from "/build/_shared/chunk-65Q6VMM7.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
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

// app/routes/partners.orders.$orderId.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_session = __toESM(require_session(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partners.orders.$orderId.tsx"' + id);
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
    "app/routes/partners.orders.$orderId.tsx"
  );
  import.meta.hot.lastModified = "1786356408084.9602";
}
var actionableStatuses = ["Pending" /* Pending */, "Active" /* Active */];
function formatMoney(currency, value) {
  return `${currency} ${new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(value)}`;
}
function formatDateTime(value) {
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}
function formatStatusLabel(value) {
  return value.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/\s+/g, " ").trim();
}
function OrderPageSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-28 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-2/3 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-1/2 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: Array.from({
        length: 3
      }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse rounded-2xl border border-slate-200 bg-slate-50 p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-36 rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-full rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-5/6 rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this)
      ] }, index, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 68,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse rounded-2xl bg-slate-50 p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-24 rounded-full bg-slate-200" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-5 w-3/4 rounded-full bg-slate-200" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-5 w-2/3 rounded-full bg-slate-200" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse rounded-2xl bg-slate-50 p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-24 rounded-full bg-slate-200" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 81,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-5 w-3/4 rounded-full bg-slate-200" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-5 w-2/3 rounded-full bg-slate-200" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders.$orderId.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_c = OrderPageSkeleton;
function OrderMutationDialog({
  order,
  item,
  intent,
  title,
  description,
  triggerLabel,
  triggerClassName,
  actionLabel
}) {
  _s();
  const fetcher = useFetcher();
  const revalidator = useRevalidator();
  const [open, setOpen] = (0, import_react2.useState)(false);
  const handledSuccessRef = (0, import_react2.useRef)(false);
  const isSubmitting = fetcher.state !== "idle";
  (0, import_react2.useEffect)(() => {
    if (fetcher.state === "submitting") {
      handledSuccessRef.current = false;
    }
  }, [fetcher.state]);
  (0, import_react2.useEffect)(() => {
    const response = fetcher.data;
    if (!response || !response.ok || handledSuccessRef.current)
      return;
    handledSuccessRef.current = true;
    setOpen(false);
    revalidator.revalidate();
  }, [fetcher.data, revalidator]);
  const errorMessage = fetcher.data && !fetcher.data.ok ? fetcher.data.error : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: triggerClassName, children: triggerLabel }, void 0, false, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "max-w-xl border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.16)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { className: "border-b border-slate-100 p-6 text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "text-2xl font-black text-slate-950", children: title }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "mt-2 text-sm leading-6 text-slate-600", children: description }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", className: "space-y-5 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: intent }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "order_id", value: order._id }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "order_item_id", value: item.order_item_id }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Order code" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: order.order_code }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-slate-600", children: "Type the exact order code to confirm this action." }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Confirm order code" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 147,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "order_code", required: true, autoComplete: "off", placeholder: "Enter the order code", className: "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        errorMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700", children: errorMessage }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 151,
          columnNumber: 27
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { className: "gap-3 border-t border-slate-100 pt-5 sm:justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Back" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 157,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 156,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: cn("inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70", intent === "cancel" ? "bg-red-600 hover:bg-red-500" : "bg-slate-950 hover:bg-slate-800"), children: isSubmitting ? "Working..." : actionLabel }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 161,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 155,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders.$orderId.tsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}
_s(OrderMutationDialog, "omxYuAA95y+CoqpGwVnCnkD59Uc=", false, function() {
  return [useFetcher, useRevalidator];
});
_c2 = OrderMutationDialog;
function OrderItemCard({
  order,
  item
}) {
  const hasRange = item.min_amount_total !== item.max_amount_total;
  const canMutate = actionableStatuses.includes(item.status);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700", children: formatStatusLabel(item.status) }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white", children: [
          "Qty ",
          item.quantity
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-black text-slate-950", children: item.product_name }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-slate-600", children: hasRange ? `${formatMoney(item.currency, item.min_amount_total)} - ${formatMoney(item.currency, item.max_amount_total)}` : formatMoney(item.currency, item.min_amount_total) }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 191,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2 text-sm text-slate-600 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          "Location: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: item.location_name || "Not assigned" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 200,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          "Fulfilled by: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: item.fulfilled_by || "Not fulfilled" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 203,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 202,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          "Contact:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: item.location_contact_phone || order.business_phone_number }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          "Fulfilled at:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: item.fulfilled_at ? formatDateTime(item.fulfilled_at) : "Pending" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 211,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3", children: canMutate ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderMutationDialog, { order, item, intent: "fulfill", title: "Fulfill order item", description: "Confirm the order code before marking this item as fulfilled.", triggerLabel: "Fulfill order", actionLabel: "Fulfill order", triggerClassName: "inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800" }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 222,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderMutationDialog, { order, item, intent: "cancel", title: "Cancel order item", description: "Confirm the order code before cancelling this item.", triggerLabel: "Cancel order", actionLabel: "Cancel order", triggerClassName: "inline-flex h-11 items-center justify-center rounded-full border border-red-200 bg-white px-5 text-sm font-bold text-red-600 transition hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-50" }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 224,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 221,
      columnNumber: 24
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-500", children: item.status }, void 0, false, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 225,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 220,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders.$orderId.tsx",
    lineNumber: 180,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/partners.orders.$orderId.tsx",
    lineNumber: 179,
    columnNumber: 10
  }, this);
}
_c3 = OrderItemCard;
function PartnerOrderDetailPage() {
  _s2();
  const {
    order,
    error
  } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading && !order) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderPageSkeleton, {}, void 0, false, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 379,
      columnNumber: 12
    }, this);
  }
  if (error || !order) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PackageSearch, { className: "h-5 w-5" }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 386,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 385,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Order details" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 390,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-black text-slate-950", children: "We could not load this order." }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 391,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 389,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-sm leading-7 text-slate-600", children: error ?? "The requested order could not be found." }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 393,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/partners/orders", className: "inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Back to orders" }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 396,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 388,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 384,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 383,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 382,
      columnNumber: 12
    }, this);
  }
  const paymentLink = order.payment_details?.payment_link;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/partners/orders", className: "inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 410,
            columnNumber: 15
          }, this),
          "Back to orders"
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 409,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Order details" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 415,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: order.business_name }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 418,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: [
            "Order code ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: order.order_code }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 422,
              columnNumber: 28
            }, this),
            ", placed on",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: formatDateTime(order.created_at) }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 423,
              columnNumber: 17
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 421,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 414,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 408,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 lg:w-[420px] lg:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Status" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 430,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-2xl font-black text-slate-950", children: formatStatusLabel(order.status) }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 431,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 429,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Total" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 434,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-2xl font-black text-slate-950", children: order.min_total_amount === order.max_total_amount ? formatMoney(order.currency, order.min_total_amount) : `${formatMoney(order.currency, order.min_total_amount)} - ${formatMoney(order.currency, order.max_total_amount)}` }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 435,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 433,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 428,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 407,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 406,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-950", children: "Order items" }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 447,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: "Only pending and active items can be updated." }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 448,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 446,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SquarePen, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 451,
              columnNumber: 15
            }, this),
            order.orders.length,
            " items"
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 450,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 445,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: order.orders.length > 0 ? order.orders.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderItemCard, { order, item }, item.order_item_id, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 457,
          columnNumber: 65
        }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-5 py-8 text-sm text-slate-500", children: "No order items found." }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 457,
          columnNumber: 137
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 456,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 444,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreditCard, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 466,
              columnNumber: 15
            }, this),
            "Payment"
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 465,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 space-y-3 text-sm leading-6 text-slate-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Payment option" }, void 0, false, {
                fileName: "app/routes/partners.orders.$orderId.tsx",
                lineNumber: 471,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-950", children: order.payment_details?.payment_option }, void 0, false, {
                fileName: "app/routes/partners.orders.$orderId.tsx",
                lineNumber: 472,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 470,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Payment status" }, void 0, false, {
                fileName: "app/routes/partners.orders.$orderId.tsx",
                lineNumber: 475,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-950", children: order.payment_details?.status }, void 0, false, {
                fileName: "app/routes/partners.orders.$orderId.tsx",
                lineNumber: 476,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 474,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Reference" }, void 0, false, {
                fileName: "app/routes/partners.orders.$orderId.tsx",
                lineNumber: 479,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-950", children: order.payment_details?.reference }, void 0, false, {
                fileName: "app/routes/partners.orders.$orderId.tsx",
                lineNumber: 480,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 478,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Amount" }, void 0, false, {
                fileName: "app/routes/partners.orders.$orderId.tsx",
                lineNumber: 483,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-950", children: formatMoney(order.currency, order.payment_details?.amount ?? order.min_total_amount) }, void 0, false, {
                fileName: "app/routes/partners.orders.$orderId.tsx",
                lineNumber: 484,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 482,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 469,
            columnNumber: 13
          }, this),
          paymentLink ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: paymentLink, target: "_blank", rel: "noreferrer", className: "mt-5 inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Open payment link" }, void 0, false, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 488,
            columnNumber: 28
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 464,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 495,
              columnNumber: 15
            }, this),
            "Delivery"
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 494,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 space-y-2 text-sm leading-6 text-slate-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-slate-950", children: order.delivery_name || "Delivery details" }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 499,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: order.delivery_street }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 500,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              order.delivery_city,
              ", ",
              order.delivery_state,
              ", ",
              order.delivery_country
            ] }, void 0, true, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 501,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: [
              "Phone: ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-950", children: order.delivery_phone_number }, void 0, false, {
                fileName: "app/routes/partners.orders.$orderId.tsx",
                lineNumber: 505,
                columnNumber: 24
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 504,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 498,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 493,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 512,
              columnNumber: 15
            }, this),
            "Business contact"
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 511,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 space-y-2 text-sm leading-6 text-slate-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-slate-950", children: order.business_contact_person_name }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 516,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: order.business_contact_person_email }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 517,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: order.business_contact_person_phone }, void 0, false, {
              fileName: "app/routes/partners.orders.$orderId.tsx",
              lineNumber: 518,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders.$orderId.tsx",
            lineNumber: 515,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders.$orderId.tsx",
          lineNumber: 510,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderId.tsx",
        lineNumber: 463,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.$orderId.tsx",
      lineNumber: 443,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders.$orderId.tsx",
    lineNumber: 405,
    columnNumber: 10
  }, this);
}
_s2(PartnerOrderDetailPage, "NyiejM8XlY5H5iVMp70nVhj+ISc=", false, function() {
  return [useLoaderData, useNavigation];
});
_c4 = PartnerOrderDetailPage;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "OrderPageSkeleton");
$RefreshReg$(_c2, "OrderMutationDialog");
$RefreshReg$(_c3, "OrderItemCard");
$RefreshReg$(_c4, "PartnerOrderDetailPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerOrderDetailPage as default
};
//# sourceMappingURL=/build/routes/partners.orders.$orderId-NFNL7TYS.js.map
