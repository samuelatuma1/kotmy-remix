import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-5EVLNHFB.js";
import {
  no_image_default
} from "/build/_shared/chunk-7JPCB6PC.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-6UGLJ4QU.js";
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

// app/routes/partners.home.tsx
var import_node = __toESM(require_node(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partners.home.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/partners.home.tsx"
  );
  import.meta.hot.lastModified = "1781934552330.6455";
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
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "/partners/add", className: " gap-2 items-center rounded-lg px-3 py-2", children: "Add Product" }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-xs font-semibold mb-1", children: "Product Price" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 70,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "price,wildcard,status", className: "w-full border rounded-lg px-3 py-2", placeholder: "Price" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 71,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-xs font-semibold mb-1", children: "Name, Description or tag" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 74,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "wildcard", className: "w-full border rounded-lg px-3 py-2", placeholder: "other fields" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 75,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 73,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-xs font-semibold mb-1", children: "Status" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 78,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "status", className: "w-full border rounded-lg px-3 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "available", children: "Available" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 80,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "out_of_stock", children: "Out of Stock" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 81,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "suspended", children: "Suspended" }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 82,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 79,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 77,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-1 flex gap-2 mt-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold", children: "Search" }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 86,
        columnNumber: 27
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 85,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 68,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 67,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8", children: data?.items && data.items.length > 0 ? data.items.map((product) => {
      const imgSrc = product.main_image_url && product.main_image_url !== "" ? product.main_image_url : no_image_default;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden h-full min-h-[340px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-40 w-full bg-gray-100 flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imgSrc, alt: product.name, className: "object-cover w-full h-full", loading: "lazy" }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 p-4 gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold text-base text-primary line-clamp-1", children: product.name }, void 0, false, {
              fileName: "app/routes/partners.home.tsx",
              lineNumber: 102,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs px-2 py-1 rounded bg-gray-50 border border-gray-200 font-semibold capitalize", children: product.status.replace(/_/g, " ") }, void 0, false, {
              fileName: "app/routes/partners.home.tsx",
              lineNumber: 103,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500 line-clamp-2 mb-1", children: product.description }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-lg font-bold text-accent", children: [
            product.currency,
            " ",
            product.price_min,
            product.price_max && product.price_max !== product.price_min ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-400 font-normal text-base", children: [
              "- ",
              product.currency,
              " ",
              product.price_max
            ] }, void 0, true, {
              fileName: "app/routes/partners.home.tsx",
              lineNumber: 108,
              columnNumber: 79
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-1 mt-1", children: product.tags && product.tags.length > 0 && product.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-indigo-50 text-indigo-600 text-xs px-2 py-0.5 rounded-full", children: tag }, tag, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 111,
            columnNumber: 83
          }, this)) }, void 0, false, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto flex items-center justify-between pt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-400", children: product.category }, void 0, false, {
              fileName: "app/routes/partners.home.tsx",
              lineNumber: 114,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              product.sku && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-400", children: [
                "SKU: ",
                product.sku
              ] }, void 0, true, {
                fileName: "app/routes/partners.home.tsx",
                lineNumber: 116,
                columnNumber: 43
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: `/partners/product/update/${product._id}`, className: "px-3 py-1 rounded-md text-xs font-semibold border-secondary", variant: "outline", children: "Edit" }, void 0, false, {
                fileName: "app/routes/partners.home.tsx",
                lineNumber: 117,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/partners.home.tsx",
              lineNumber: 115,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/partners.home.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.home.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      ] }, product._id, true, {
        fileName: "app/routes/partners.home.tsx",
        lineNumber: 96,
        columnNumber: 16
      }, this);
    }) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full text-center text-gray-400 py-12", children: "No products found." }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 124,
      columnNumber: 12
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 92,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " sm:flex justify-between items-center my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: query?.last_key_id, pageSize: query?.items_per_page, firstKey: query?.first_key_id }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 128,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.home.tsx",
      lineNumber: 126,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.home.tsx",
    lineNumber: 58,
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
//# sourceMappingURL=/build/routes/partners.home-3WRCQER6.js.map
