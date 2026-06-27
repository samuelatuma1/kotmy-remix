import {
  PackageSearch,
  Search,
  ShoppingBag
} from "/build/_shared/chunk-F6TA6X6U.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-YZONELX2.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link2 as Link,
  useLoaderData,
  useLocation,
  useNavigation
} from "/build/_shared/chunk-QORMC3GD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/partners.orders._Index.tsx
var import_node = __toESM(require_node(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partners.orders._Index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/partners.orders._Index.tsx"
  );
  import.meta.hot.lastModified = "1782590701180.0686";
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-32 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 145,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 h-6 w-2/3 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 146,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-full rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 147,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-5/6 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 h-24 rounded-2xl bg-slate-100" }, void 0, false, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 149,
      columnNumber: 11
    }, this)
  ] }, index, true, {
    fileName: "app/routes/partners.orders._Index.tsx",
    lineNumber: 144,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/routes/partners.orders._Index.tsx",
    lineNumber: 141,
    columnNumber: 10
  }, this);
}
_c = OrdersSkeleton;
function OrderItemRow({
  item
}) {
  const hasRange = item.min_amount_total !== item.max_amount_total;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-bold text-slate-950", children: item.product_name }, void 0, false, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-slate-500", children: [
        "Qty ",
        item.quantity,
        " \xB7 ",
        hasRange ? `${formatMoney(item.currency, item.min_amount_total)} - ${formatMoney(item.currency, item.max_amount_total)}` : formatMoney(item.currency, item.min_amount_total)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-600", children: formatStatusLabel(item.status) }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this),
        item.location_name ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-600", children: item.location_name }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 169,
          columnNumber: 35
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 160,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/partners/orders/${item.order_item_id}`, className: "inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Open item" }, void 0, false, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 175,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders._Index.tsx",
    lineNumber: 159,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/partners.orders._Index.tsx",
    lineNumber: 158,
    columnNumber: 10
  }, this);
}
_c2 = OrderItemRow;
function OrderCard({
  order
}) {
  const paymentLink = order.payment_details?.payment_link;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: order.order_code }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 190,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600", children: formatStatusLabel(order.status) }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 193,
            columnNumber: 13
          }, this),
          order.is_prepaid ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700", children: "Prepaid" }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 196,
            columnNumber: 33
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-black text-slate-950", children: order.business_name }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-slate-500", children: [
            order.business_contact_person_name,
            " \xB7 ",
            order.delivery_phone_number
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 203,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 201,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3 sm:grid-cols-2 lg:text-right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Created" }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 211,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: formatDate(order.created_at) }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 212,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 210,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 px-4 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Total" }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 215,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-sm font-semibold text-slate-900", children: order.min_total_amount === order.max_total_amount ? formatMoney(order.currency, order.min_total_amount) : `${formatMoney(order.currency, order.min_total_amount)} - ${formatMoney(order.currency, order.max_total_amount)}` }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 216,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 214,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Order items" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: order.orders.length > 0 ? order.orders.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderItemRow, { item }, item.order_item_id, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 227,
          columnNumber: 65
        }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500", children: "No order items found." }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 227,
          columnNumber: 122
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Delivery & payment" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-slate-900", children: order.delivery_name || "Delivery details" }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 236,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: order.delivery_street }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 237,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            order.delivery_city,
            ", ",
            order.delivery_state,
            ", ",
            order.delivery_country
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 238,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
            "Payment option: ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: order.payment_details?.payment_option }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 242,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 241,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            "Payment status: ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: order.payment_details?.status }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 245,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 244,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            "Reference: ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: order.payment_details?.reference }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 248,
              columnNumber: 26
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 247,
            columnNumber: 13
          }, this),
          paymentLink ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: paymentLink, target: "_blank", rel: "noreferrer", className: "mt-3 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Open payment link" }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 250,
            columnNumber: 28
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders._Index.tsx",
    lineNumber: 186,
    columnNumber: 10
  }, this);
}
_c3 = OrderCard;
function PartnerOrdersPage() {
  _s();
  const {
    orders,
    query,
    error
  } = useLoaderData();
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === "loading" && navigation.location?.pathname === location.pathname;
  const hasOrders = orders.items.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Orders" }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 293,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: "Search and manage partner orders." }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 297,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: "Search by order code, delivery phone number, order status, or item status to find the exact order you need." }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 300,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 296,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 292,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Orders" }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 308,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: orders.total_items }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 309,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 307,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Page size" }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 312,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: orders.items_per_page }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 313,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 311,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Current page" }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 316,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: orders.current_page }, void 0, false, {
              fileName: "app/routes/partners.orders._Index.tsx",
              lineNumber: 317,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 315,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 306,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 291,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: error }, void 0, false, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 322,
        columnNumber: 18
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 290,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "page_size", value: orders.items_per_page }, void 0, false, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 329,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Order code" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 332,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "order_code", defaultValue: query.order_code ?? "", placeholder: "Search order code", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 333,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 331,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Delivery phone" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 337,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "delivery_phone_number", defaultValue: query.delivery_phone_number ?? "", placeholder: "Search delivery phone", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 338,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 336,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Order status" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 342,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "order_status", defaultValue: query.order_status ?? "", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white", children: orderStatusOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.label }, option.label, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 344,
          columnNumber: 49
        }, this)) }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 343,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 341,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Item status" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 351,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "order_product_status", defaultValue: query.order_product_status ?? "", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-950 focus:bg-white", children: orderProductStatusOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.label }, option.label, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 353,
          columnNumber: 56
        }, this)) }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 352,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 350,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 361,
            columnNumber: 15
          }, this),
          "Search"
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 360,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/partners/orders", className: "inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50", children: "Reset" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 364,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 359,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 328,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 327,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-950", children: "Orders" }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 374,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: orders.total_items > 0 ? `${orders.total_items} order${orders.total_items === 1 ? "" : "s"} found` : "No orders found for the selected filters" }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 375,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 373,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PackageSearch, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.orders._Index.tsx",
            lineNumber: 380,
            columnNumber: 13
          }, this),
          "Page ",
          orders.current_page
        ] }, void 0, true, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 379,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 372,
        columnNumber: 9
      }, this),
      isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersSkeleton, {}, void 0, false, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 385,
        columnNumber: 22
      }, this) : hasOrders ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: orders.items.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderCard, { order }, order._id, false, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 386,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 385,
        columnNumber: 55
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, { className: "mx-auto h-10 w-10 text-slate-300" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 388,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-xl font-black text-slate-950", children: "No orders found" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 389,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Try a different code, delivery phone number, or status combination." }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 390,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/partners/orders", className: "mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Clear filters" }, void 0, false, {
          fileName: "app/routes/partners.orders._Index.tsx",
          lineNumber: 393,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders._Index.tsx",
        lineNumber: 387,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 371,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: orders.last_key_id, firstKey: orders.first_key_id, pageSize: orders.items_per_page }, void 0, false, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 400,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders._Index.tsx",
      lineNumber: 399,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders._Index.tsx",
    lineNumber: 289,
    columnNumber: 10
  }, this);
}
_s(PartnerOrdersPage, "NpWRPR0nbi/cRbnE77ZjE9mjrfs=", false, function() {
  return [useLoaderData, useNavigation, useLocation];
});
_c4 = PartnerOrdersPage;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "OrdersSkeleton");
$RefreshReg$(_c2, "OrderItemRow");
$RefreshReg$(_c3, "OrderCard");
$RefreshReg$(_c4, "PartnerOrdersPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerOrdersPage as default
};
//# sourceMappingURL=/build/routes/partners.orders._Index-YS6CIH74.js.map
