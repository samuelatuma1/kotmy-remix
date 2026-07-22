import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link2 as Link,
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

// app/routes/user.givaah-credits.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.givaah-credits.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/user.givaah-credits.tsx"
  );
  import.meta.hot.lastModified = "1782038375041.8916";
}
function formatValue(value) {
  return new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(Number(value ?? 0));
}
function CreditsSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: Array.from({
    length: 3
  }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-20 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
      fileName: "app/routes/user.givaah-credits.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 h-8 w-32 animate-pulse rounded-xl bg-slate-200" }, void 0, false, {
      fileName: "app/routes/user.givaah-credits.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-full animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-5/6 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-4/6 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.givaah-credits.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this)
  ] }, index, true, {
    fileName: "app/routes/user.givaah-credits.tsx",
    lineNumber: 45,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/routes/user.givaah-credits.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c = CreditsSkeleton;
function GivaahCreditsPage() {
  _s();
  const {
    credits,
    query,
    error,
    validationError
  } = useLoaderData();
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  const pageCredits = credits?.credits ?? [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "min-h-full bg-slate-50 p-4 sm:p-6 lg:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto flex w-full max-w-6xl flex-col gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.28em] text-slate-500", children: "User Credits" }, void 0, false, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-black tracking-tight text-slate-950 sm:text-4xl", children: "Givaah Credits" }, void 0, false, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm leading-6 text-slate-600 sm:text-base", children: "Review your available voting credits and look up a specific credit record using the phone number and order code tied to the purchase." }, void 0, false, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 99,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Available Credit" }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-2xl font-black text-slate-950", children: isBusy && !credits ? "..." : formatValue(credits?.available_credit_value) }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Credit Records" }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-2xl font-black text-slate-950", children: isBusy && !credits ? "..." : pageCredits.length }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 111,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.givaah-credits.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/user.givaah-credits.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold text-slate-700", children: "Phone" }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "phone", type: "tel", defaultValue: query?.phone ?? "", placeholder: "08012345678", required: true, className: "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white" }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 123,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold text-slate-700", children: "Order Code" }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "order_code", type: "text", defaultValue: query?.order_code ?? "", placeholder: "ORD-12345", required: true, className: "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white" }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.01] hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60", disabled: isBusy, children: isBusy ? "Searching..." : "Search credits" }, void 0, false, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      validationError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: validationError }, void 0, false, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 133,
        columnNumber: 30
      }, this) : null,
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700", children: error }, void 0, false, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 134,
        columnNumber: 20
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/user.givaah-credits.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-black text-slate-950", children: "Credit Breakdown" }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-600", children: pageCredits.length > 0 ? "The list below shows the credit entries currently associated with your account." : "No credit records were returned for this search." }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-slate-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Get more credit to vote your favourite contestant by purchasing from our partners." }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1", children: [
            "Visit the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace", className: "font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950", children: "marketplace" }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 149,
              columnNumber: 17
            }, this),
            " ",
            "to explore available packages."
          ] }, void 0, true, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: isBusy && !credits ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreditsSkeleton, {}, void 0, false, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 158,
        columnNumber: 35
      }, this) : pageCredits.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: pageCredits.map((credit, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "flex h-full flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Order Code" }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 163,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-2 text-xl font-black text-slate-950", children: credit.order_code }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 164,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 162,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white", children: credit.order_currency }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 166,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 161,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "grid grid-cols-2 gap-3 text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-slate-500", children: "Available" }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 173,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-base font-bold text-slate-950", children: formatValue(credit.available_credit_value) }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 174,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 172,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-slate-500", children: "Used" }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 177,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-base font-bold text-slate-950", children: formatValue(credit.used_credit_value) }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 178,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 176,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-slate-500", children: "Redeemed" }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 181,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-base font-bold text-slate-950", children: formatValue(credit.redeemed_credit_value) }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 182,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 180,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-white px-4 py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-slate-500", children: "Original" }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 185,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-base font-bold text-slate-950", children: formatValue(credit.original_total_credit_value) }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 186,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 184,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 171,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1 text-sm text-slate-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-800", children: "Phone:" }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 192,
              columnNumber: 27
            }, this),
            " ",
            credit.delivery_details_phone || credits?.phone_number || "N/A"
          ] }, void 0, true, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 191,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-800", children: "User:" }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 195,
              columnNumber: 27
            }, this),
            " ",
            credits?.user_id ?? "N/A"
          ] }, void 0, true, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 194,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-800", children: "Credit Entries:" }, void 0, false, {
              fileName: "app/routes/user.givaah-credits.tsx",
              lineNumber: 198,
              columnNumber: 27
            }, this),
            " ",
            credit.redeemed_credit_value_break_down.length + credit.used_credit_value_break_down.length
          ] }, void 0, true, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 197,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 190,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 160,
        columnNumber: 21
      }, this) }, credit._id ?? `${credit.order_code}-${index}`, false, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 159,
        columnNumber: 53
      }, this)) }, void 0, false, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 158,
        columnNumber: 82
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base font-semibold text-slate-950", children: "No credit entries found." }, void 0, false, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 204,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-slate-600", children: [
          "Try a different phone number and order code, or purchase more credits from the",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/marketplace", className: "font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950", children: "marketplace" }, void 0, false, {
            fileName: "app/routes/user.givaah-credits.tsx",
            lineNumber: 207,
            columnNumber: 19
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/routes/user.givaah-credits.tsx",
          lineNumber: 205,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 203,
        columnNumber: 24
      }, this) }, void 0, false, {
        fileName: "app/routes/user.givaah-credits.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.givaah-credits.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.givaah-credits.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.givaah-credits.tsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
}
_s(GivaahCreditsPage, "qLk/yvRbOOaea/94OlQWQaE0sbs=", false, function() {
  return [useLoaderData, useNavigation];
});
_c2 = GivaahCreditsPage;
var _c;
var _c2;
$RefreshReg$(_c, "CreditsSkeleton");
$RefreshReg$(_c2, "GivaahCreditsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GivaahCreditsPage as default
};
//# sourceMappingURL=/build/routes/user.givaah-credits-LSQRNPLH.js.map
