import {
  ArrowLeft,
  CircleCheck,
  CreditCard,
  LoaderCircle,
  MapPin,
  Package,
  Plus
} from "/build/_shared/chunk-F6TA6X6U.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import {
  no_image_default
} from "/build/_shared/chunk-7JPCB6PC.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link2 as Link,
  useActionData,
  useFetcher,
  useLoaderData,
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_public.marketplace.checkout.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/_public.marketplace.checkout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.marketplace.checkout.tsx"
  );
  import.meta.hot.lastModified = "1782017945086.9114";
}
function formatMoney(currency, value) {
  return `${currency} ${new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(value)}`;
}
function SkeletonCard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-24 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 182,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 h-5 w-2/3 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-full rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-5/6 rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.checkout.tsx",
    lineNumber: 181,
    columnNumber: 10
  }, this);
}
_c = SkeletonCard;
function CheckoutSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-40 rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 194,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-full max-w-2xl rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 195,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-full max-w-xl rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 193,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkeletonCard, {}, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkeletonCard, {}, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkeletonCard, {}, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 192,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkeletonCard, {}, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkeletonCard, {}, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 209,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkeletonCard, {}, void 0, false, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.checkout.tsx",
    lineNumber: 190,
    columnNumber: 10
  }, this);
}
_c2 = CheckoutSkeleton;
function SectionTitle({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: eyebrow }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black text-slate-950", children: title }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-sm leading-6 text-slate-600", children: description }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 226,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.checkout.tsx",
    lineNumber: 221,
    columnNumber: 10
  }, this);
}
_c3 = SectionTitle;
function CartItemCard({
  item
}) {
  const product = item.product;
  const imageSrc = product.main_image_url || product.image_urls?.[0] || no_image_default;
  const locationLabel = product.product_locations?.find((location) => location.str_id === item.product_location_id)?.name ?? product.product_locations?.find((location) => location.is_primary)?.name ?? product.product_locations?.[0]?.name ?? "Default location";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr] sm:p-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-hidden rounded-2xl bg-slate-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imageSrc, alt: product.name, className: "aspect-square h-full w-full object-cover", loading: "lazy" }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 238,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-black text-slate-950", children: product.name }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 243,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-slate-500 line-clamp-2", children: product.description }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 244,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 242,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: product.category || "Uncategorized" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 246,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 241,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-3 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold text-slate-900", children: product.price_min === 0 && product.price_max === 0 ? "Free" : product.price_min === product.price_max ? formatMoney(product.currency, product.price_min) : `${formatMoney(product.currency, product.price_min)} - ${formatMoney(product.currency, product.price_max)}` }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 252,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-400", children: "\u2022" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-500", children: locationLabel }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 251,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: (product.tags ?? []).slice(0, 4).map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600", children: tag.trim() }, `${product._id}-${tag}`, false, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 260,
        columnNumber: 56
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 240,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.checkout.tsx",
    lineNumber: 236,
    columnNumber: 10
  }, this);
}
_c4 = CartItemCard;
function DeliveryCard({
  deliveryDetails,
  checked,
  onSelect
}) {
  const location = deliveryDetails.location;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `cursor-pointer rounded-[1.5rem] border p-4 shadow-sm transition hover:-translate-y-0.5 ${checked ? "border-slate-950 bg-slate-50" : "border-slate-200 bg-white"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "delivery_details_id", value: deliveryDetails.str_id, checked, onChange: (e) => onSelect(e.target.value), className: "mt-1 h-4 w-4 border-slate-300 text-slate-950 focus:ring-slate-950", required: true }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 276,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base font-bold text-slate-950", children: deliveryDetails.name || "Saved delivery details" }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 280,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: deliveryDetails.phone_number }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 281,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 279,
          columnNumber: 13
        }, this),
        deliveryDetails.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600", children: deliveryDetails.email }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 283,
          columnNumber: 38
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 278,
        columnNumber: 11
      }, this),
      location ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-sm leading-6 text-slate-600", children: [
        location.street,
        ", ",
        location.city,
        ", ",
        location.state,
        ", ",
        location.country
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 286,
        columnNumber: 23
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 277,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.checkout.tsx",
    lineNumber: 275,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.marketplace.checkout.tsx",
    lineNumber: 274,
    columnNumber: 10
  }, this);
}
_c5 = DeliveryCard;
function PaymentOptionCard({
  paymentOption,
  checked,
  onSelect
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `cursor-pointer rounded-[1.5rem] border p-4 shadow-sm transition hover:-translate-y-0.5 ${checked ? "border-slate-950 bg-slate-50" : "border-slate-200 bg-white"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "payment_option", value: paymentOption.key, checked, onChange: (e) => onSelect(e.target.value), className: "mt-1 h-4 w-4 border-slate-300 text-slate-950 focus:ring-slate-950", required: true }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 301,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base font-bold text-slate-950", children: paymentOption.name }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 305,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: paymentOption.description }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 306,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 304,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: paymentOption.key === "prepay" /* prepay */ ? "Prepay" : "Pay in person" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 308,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 303,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 302,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.checkout.tsx",
    lineNumber: 300,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.marketplace.checkout.tsx",
    lineNumber: 299,
    columnNumber: 10
  }, this);
}
_c6 = PaymentOptionCard;
function DeliveryDetailsForm({
  fetcher,
  formRef
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { ref: formRef, method: "post", className: "grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "create-delivery-details" }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 322,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-sm font-bold text-slate-950", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 324,
        columnNumber: 9
      }, this),
      "Add delivery details"
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 323,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Name" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 330,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "name", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white", placeholder: "Full name" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 331,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 329,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Email" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 334,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "email", type: "email", className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white", placeholder: "email@example.com" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 335,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 333,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2 md:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Phone number" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 338,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "phone_number", type: "tel", required: true, className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white", placeholder: "+234..." }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 339,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 337,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2 md:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Street" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 342,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "location_street", required: true, className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white", placeholder: "Street address" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 343,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 341,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "City" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 346,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "location_city", required: true, className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white", placeholder: "City" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 347,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 345,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "State" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 350,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "location_state", required: true, className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white", placeholder: "State" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 351,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 349,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2 md:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Country" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 354,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "location_country", required: true, className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white", placeholder: "Country" }, void 0, false, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 355,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 353,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 328,
      columnNumber: 7
    }, this),
    fetcher.data?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800", children: fetcher.data.error }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 359,
      columnNumber: 30
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: fetcher.state !== "idle", className: "inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70", children: fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 365,
        columnNumber: 13
      }, this),
      "Saving..."
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 364,
      columnNumber: 37
    }, this) : "Save delivery details" }, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 363,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.checkout.tsx",
    lineNumber: 321,
    columnNumber: 10
  }, this);
}
_c7 = DeliveryDetailsForm;
function MarketplaceCheckout() {
  _s();
  const {
    cart,
    saved_delivery_details,
    payment_options,
    error
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const deliveryFetcher = useFetcher();
  const deliveryFormRef = (0, import_react2.useRef)(null);
  const [deliveryDetails, setDeliveryDetails] = (0, import_react2.useState)(saved_delivery_details);
  const [selectedDeliveryDetailsId, setSelectedDeliveryDetailsId] = (0, import_react2.useState)(saved_delivery_details[0]?.str_id ?? "");
  const [selectedPaymentOption, setSelectedPaymentOption] = (0, import_react2.useState)("");
  const cartItems = cart?.cart_items ?? [];
  const availablePaymentOptions = payment_options.filter((option) => option.is_available);
  const isPlacingOrder = navigation.state === "submitting" && navigation.formData?.get("intent") === "place-order";
  const canPlaceOrder = cartItems.length > 0 && Boolean(selectedDeliveryDetailsId) && Boolean(selectedPaymentOption);
  (0, import_react2.useEffect)(() => {
    if (saved_delivery_details.length > 0 && deliveryDetails.length === 0) {
      setDeliveryDetails(saved_delivery_details);
      setSelectedDeliveryDetailsId(saved_delivery_details[0]?.str_id ?? "");
    }
  }, [deliveryDetails.length, saved_delivery_details]);
  (0, import_react2.useEffect)(() => {
    if (deliveryFetcher.state === "idle" && deliveryFetcher.data?.delivery_details) {
      setDeliveryDetails((prev) => {
        const next = [deliveryFetcher.data.delivery_details, ...prev.filter((item) => item.str_id !== deliveryFetcher.data.delivery_details.str_id)];
        return next;
      });
      setSelectedDeliveryDetailsId(deliveryFetcher.data.delivery_details.str_id);
      deliveryFormRef.current?.reset();
    }
  }, [deliveryFetcher.data, deliveryFetcher.state]);
  if (!cart && !error && !saved_delivery_details.length && !payment_options.length && navigation.state === "loading") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckoutSkeleton, {}, void 0, false, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 408,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace/cart", className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 415,
              columnNumber: 15
            }, this),
            "Back to cart"
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 414,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Checkout" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 419,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: "Confirm delivery details and choose how you want to pay." }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 422,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: "Review your cart, select a saved delivery address, or create a new one before placing your order." }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 425,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 418,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 413,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Items" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 433,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: cartItems.reduce((total, item) => total + item.quantity, 0) }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 434,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 432,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Delivery options" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 437,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: deliveryDetails.length }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 438,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 436,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Payment options" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 441,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-3xl font-black text-slate-950", children: availablePaymentOptions.length }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 442,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 440,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 431,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 412,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: error }, void 0, false, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 447,
        columnNumber: 18
      }, this) : null,
      actionData?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800", children: actionData.error }, void 0, false, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 451,
        columnNumber: 30
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 411,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { eyebrow: "Cart", title: "Your items", description: "These are the products currently in your cart and ready to be ordered." }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 459,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 space-y-4", children: cartItems.length > 0 ? cartItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartItemCard, { item }, `${item.product_id}-${item.product_location_id ?? "default"}`, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 462,
            columnNumber: 61
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Package, { className: "mx-auto h-10 w-10 text-slate-300" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 463,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-4 text-xl font-black text-slate-950", children: "Your cart is empty" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 464,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Add products from the marketplace before continuing to checkout." }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 465,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace", className: "mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Browse products" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 468,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 462,
            columnNumber: 161
          }, this) }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 461,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 458,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { eyebrow: "Delivery", title: "Saved delivery details", description: "Select an existing delivery profile or add a new one for this order." }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 476,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 grid gap-4", children: deliveryDetails.length > 0 ? deliveryDetails.map((detail) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeliveryCard, { deliveryDetails: detail, checked: selectedDeliveryDetailsId === detail.str_id, onSelect: setSelectedDeliveryDetailsId }, detail.str_id, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 479,
            columnNumber: 75
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-sm text-slate-500", children: "No delivery details have been saved yet." }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 479,
            columnNumber: 234
          }, this) }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 478,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeliveryDetailsForm, { fetcher: deliveryFetcher, formRef: deliveryFormRef }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 485,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 484,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 475,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { eyebrow: "Payment", title: "Choose a payment option", description: "Only available payment options are shown here." }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 490,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 grid gap-4", children: availablePaymentOptions.length > 0 ? availablePaymentOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaymentOptionCard, { paymentOption: option, checked: selectedPaymentOption === option.key, onSelect: setSelectedPaymentOption }, option.key, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 493,
            columnNumber: 91
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-sm text-slate-500", children: "No payment options are currently available." }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 493,
            columnNumber: 239
          }, this) }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 492,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 489,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 457,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { eyebrow: "Summary", title: "Review and place order", description: "Final check before we submit your order to the backend." }, void 0, false, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 502,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.25rem] bg-slate-50 p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Delivery" }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 506,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm font-medium text-slate-900", children: selectedDeliveryDetailsId ? deliveryDetails.find((detail) => detail.str_id === selectedDeliveryDetailsId)?.name ?? "Selected delivery details" : "No delivery details selected" }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 507,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 505,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.25rem] bg-slate-50 p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Payment" }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 513,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm font-medium text-slate-900", children: selectedPaymentOption ? availablePaymentOptions.find((option) => option.key === selectedPaymentOption)?.name ?? "Selected payment option" : "No payment option selected" }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 514,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 512,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.25rem] bg-slate-950 p-4 text-white", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-300", children: "Estimated total" }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 520,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-2xl font-black", children: cart ? `${formatMoney(cart.currency, cart.minimum_total_amount)}${cart.maximum_total_amount !== cart.minimum_total_amount ? ` - ${formatMoney(cart.currency, cart.maximum_total_amount)}` : ""}` : "NGN 0" }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 521,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 519,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 504,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-6 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "place-order" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 528,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-sm font-bold text-slate-950", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "app/routes/_public.marketplace.checkout.tsx",
                  lineNumber: 532,
                  columnNumber: 19
                }, this),
                "Delivery selection"
              ] }, void 0, true, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 531,
                columnNumber: 17
              }, this),
              deliveryDetails.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3", children: deliveryDetails.map((detail) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `cursor-pointer rounded-2xl border p-3 transition hover:-translate-y-0.5 ${selectedDeliveryDetailsId === detail.str_id ? "border-slate-950 bg-slate-50" : "border-slate-200 bg-white"}`, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "delivery_details_id", value: detail.str_id, checked: selectedDeliveryDetailsId === detail.str_id, onChange: (e) => setSelectedDeliveryDetailsId(e.target.value), className: "sr-only", required: true }, void 0, false, {
                  fileName: "app/routes/_public.marketplace.checkout.tsx",
                  lineNumber: 537,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-semibold text-slate-950", children: detail.name || "Saved delivery details" }, void 0, false, {
                  fileName: "app/routes/_public.marketplace.checkout.tsx",
                  lineNumber: 538,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-slate-500", children: detail.phone_number }, void 0, false, {
                  fileName: "app/routes/_public.marketplace.checkout.tsx",
                  lineNumber: 539,
                  columnNumber: 25
                }, this)
              ] }, detail.str_id, true, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 536,
                columnNumber: 52
              }, this)) }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 535,
                columnNumber: 47
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: "Add a delivery profile before placing an order." }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 541,
                columnNumber: 28
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 530,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-sm font-bold text-slate-950", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreditCard, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "app/routes/_public.marketplace.checkout.tsx",
                  lineNumber: 546,
                  columnNumber: 19
                }, this),
                "Payment selection"
              ] }, void 0, true, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 545,
                columnNumber: 17
              }, this),
              availablePaymentOptions.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3", children: availablePaymentOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `cursor-pointer rounded-2xl border p-3 transition hover:-translate-y-0.5 ${selectedPaymentOption === option.key ? "border-slate-950 bg-slate-50" : "border-slate-200 bg-white"}`, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "payment_option", value: option.key, checked: selectedPaymentOption === option.key, onChange: (e) => setSelectedPaymentOption(e.target.value), className: "sr-only", required: true }, void 0, false, {
                  fileName: "app/routes/_public.marketplace.checkout.tsx",
                  lineNumber: 551,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-semibold text-slate-950", children: option.name }, void 0, false, {
                  fileName: "app/routes/_public.marketplace.checkout.tsx",
                  lineNumber: 552,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-slate-500", children: option.description }, void 0, false, {
                  fileName: "app/routes/_public.marketplace.checkout.tsx",
                  lineNumber: 553,
                  columnNumber: 25
                }, this)
              ] }, option.key, true, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 550,
                columnNumber: 60
              }, this)) }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 549,
                columnNumber: 55
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: "No available payment methods were returned." }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 555,
                columnNumber: 28
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 544,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: !canPlaceOrder || isPlacingOrder, className: "inline-flex w-full items-center justify-center rounded-full border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70", children: isPlacingOrder ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
                fileName: "app/routes/_public.marketplace.checkout.tsx",
                lineNumber: 560,
                columnNumber: 21
              }, this),
              "Placing order..."
            ] }, void 0, true, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 559,
              columnNumber: 35
            }, this) : "Place order" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 558,
              columnNumber: 15
            }, this),
            !canPlaceOrder ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: "Select a delivery detail and a payment option before placing your order." }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 565,
              columnNumber: 33
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 527,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 501,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-sm font-bold text-slate-950", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 573,
              columnNumber: 15
            }, this),
            "Checkout notes"
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 572,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mt-4 space-y-3 text-sm leading-6 text-slate-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Only payment options marked available are shown." }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 577,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "If you choose prepay, we will hand you off to the payment link returned by the backend." }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 578,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Delivery details saved here can be reused on future orders." }, void 0, false, {
              fileName: "app/routes/_public.marketplace.checkout.tsx",
              lineNumber: 579,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.marketplace.checkout.tsx",
            lineNumber: 576,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.marketplace.checkout.tsx",
          lineNumber: 571,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.marketplace.checkout.tsx",
        lineNumber: 500,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.marketplace.checkout.tsx",
      lineNumber: 456,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.marketplace.checkout.tsx",
    lineNumber: 410,
    columnNumber: 10
  }, this);
}
_s(MarketplaceCheckout, "6BBEQKY5wwsiX5gZAEGj+n77BqE=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useFetcher];
});
_c8 = MarketplaceCheckout;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
$RefreshReg$(_c, "SkeletonCard");
$RefreshReg$(_c2, "CheckoutSkeleton");
$RefreshReg$(_c3, "SectionTitle");
$RefreshReg$(_c4, "CartItemCard");
$RefreshReg$(_c5, "DeliveryCard");
$RefreshReg$(_c6, "PaymentOptionCard");
$RefreshReg$(_c7, "DeliveryDetailsForm");
$RefreshReg$(_c8, "MarketplaceCheckout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MarketplaceCheckout as default
};
//# sourceMappingURL=/build/routes/_public.marketplace.checkout-5C7RVL3X.js.map
