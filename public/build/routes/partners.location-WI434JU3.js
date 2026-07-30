import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import {
  no_image_default
} from "/build/_shared/chunk-7JPCB6PC.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-VCQR46EC.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
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

// app/routes/partners.location.tsx
var import_node = __toESM(require_node(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partners.location.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/partners.location.tsx"
  );
  import.meta.hot.lastModified = "1777824633883.1982";
}
function PartnerProducts() {
  _s();
  const {
    data,
    query
  } = useLoaderData();
  const navigation = useNavigation();
  console.log(data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Products" }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "/partners/add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this),
        "Add Product"
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-xs font-semibold mb-1", children: "Product Price" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 71,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "price,wildcard,status", className: "w-full border rounded-lg px-3 py-2", placeholder: "Price" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 72,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 70,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-xs font-semibold mb-1", children: "Name, Description or tag" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 75,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "wildcard", className: "w-full border rounded-lg px-3 py-2", placeholder: "other fields" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 76,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 74,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-xs font-semibold mb-1", children: "Status" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 79,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "status", className: "w-full border rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "available", children: "Available" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 81,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "out_of_stock", children: "Out of Stock" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 82,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "suspended", children: "Suspended" }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 83,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 80,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 78,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-1 flex gap-2 mt-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold", children: "Search" }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 87,
        columnNumber: 27
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 86,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 69,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 68,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8", children: data?.items && data.items.length > 0 ? data.items.map((product) => {
      const imgSrc = no_image_default;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-2 p-2 bg-slate-50 rounded-lg border border-slate-100", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-indigo-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }, void 0, false, {
              fileName: "app/routes/partners.location.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, false, {
              fileName: "app/routes/partners.location.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold text-gray-700", children: product.name }, void 0, false, {
              fileName: "app/routes/partners.location.tsx",
              lineNumber: 106,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[11px] text-gray-500", children: [
              product.city,
              ", ",
              product.state_name
            ] }, void 0, true, {
              fileName: "app/routes/partners.location.tsx",
              lineNumber: 107,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.location.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 98,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://www.google.com/maps/dir/?api=1&destination=${product.latitude},${product.longitude}`, target: "_blank", rel: "noopener noreferrer", className: "mt-2 flex items-center justify-center gap-1 w-full py-1.5 bg-white border border-indigo-100 text-indigo-600 text-xs font-bold rounded-md hover:bg-indigo-50 transition-colors", children: "Get Directions" }, void 0, false, {
          fileName: "app/routes/partners.location.tsx",
          lineNumber: 112,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.location.tsx",
        lineNumber: 97,
        columnNumber: 16
      }, this);
    }) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full text-center text-gray-400 py-12", children: "No products found." }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 116,
      columnNumber: 12
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 93,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " sm:flex justify-between items-center my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: query?.last_key_id, pageSize: query?.items_per_page, firstKey: query?.first_key_id }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 120,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.location.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.location.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(PartnerProducts, "NtZayoL+39y7vRFsPQPOSGGsxMY=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = PartnerProducts;
var _c;
$RefreshReg$(_c, "PartnerProducts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerProducts as default
};
//# sourceMappingURL=/build/routes/partners.location-WI434JU3.js.map
