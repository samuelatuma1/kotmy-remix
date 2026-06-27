import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link2 as Link,
  useLoaderData
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

// app/routes/partners.orders.$orderItemId.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partners.orders.$orderItemId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/partners.orders.$orderItemId.tsx"
  );
  import.meta.hot.lastModified = "1782588966630.9895";
}
function PartnerOrderItemPage() {
  _s();
  const {
    orderItemId
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Order item" }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderItemId.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: "Order item details" }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderItemId.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: "This route is ready for order-item level actions such as payment confirmation or fulfillment updates." }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderItemId.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.$orderItemId.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.orders.$orderItemId.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-slate-50 p-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Order item ID" }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderItemId.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 break-all text-lg font-black text-slate-950", children: orderItemId || "Missing order item id" }, void 0, false, {
          fileName: "app/routes/partners.orders.$orderItemId.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.orders.$orderItemId.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 flex flex-wrap gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/partner/orders", className: "inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800", children: "Back to orders" }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderItemId.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.orders.$orderItemId.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.orders.$orderItemId.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.orders.$orderItemId.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s(PartnerOrderItemPage, "9ETZj77WKLKGO4/+ahYi2qI9aXY=", false, function() {
  return [useLoaderData];
});
_c = PartnerOrderItemPage;
var _c;
$RefreshReg$(_c, "PartnerOrderItemPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerOrderItemPage as default
};
//# sourceMappingURL=/build/routes/partners.orders.$orderItemId-KEPDLHPW.js.map
