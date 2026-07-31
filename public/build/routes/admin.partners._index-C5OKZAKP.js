import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Pagination
} from "/build/_shared/chunk-QLSTRVVQ.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-XEN7NDCY.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-DM6GBINF.js";
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

// app/routes/admin.partners._index.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/admin.partners._index.tsx"' + id);
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
    "app/routes/admin.partners._index.tsx"
  );
  import.meta.hot.lastModified = "1781724923947.76";
}
var statusColors = {
  Approved: "text-green-600 bg-green-50 border-green-200",
  Pending: "text-yellow-600 bg-yellow-50 border-yellow-200",
  Rejected: "text-red-600 bg-red-50 border-red-200"
};
function PartnersIndex() {
  _s();
  const data = useLoaderData();
  const navigation = useNavigation();
  const [search, setSearch] = (0, import_react2.useState)(data.query?.legal_business_name || "");
  if ("redirect" in data && typeof window !== "undefined") {
    window.location.href = data.redirect;
    return null;
  }
  const {
    partnersRes,
    query
  } = data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Partners" }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-xs font-semibold mb-1", children: "Business Name" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "legal_business_name", className: "w-full border rounded-lg px-3 py-2", value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search by business name" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-1 flex gap-2 mt-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold", children: "Search" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 84,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:hidden grid gap-4 my-6", children: partnersRes.items && partnersRes.items.length > 0 ? partnersRes.items.map((partner) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-xl border border-gray-100 bg-white shadow-sm p-4 flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold text-base text-primary", children: partner.legal_business_name }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 94,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-block px-2 py-1 rounded-lg border text-xs font-semibold ${statusColors[partner.status] || "text-gray-600 bg-gray-100 border-gray-200"}`, children: partner.status }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 93,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: partner.industry }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 97,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-1 mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Country:" }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 99,
            columnNumber: 22
          }, this),
          " ",
          partner.country_of_incorporation
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Phone:" }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 100,
            columnNumber: 22
          }, this),
          " ",
          partner.phone_number
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 100,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Contact:" }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 101,
            columnNumber: 22
          }, this),
          " ",
          partner.contact_person?.name,
          " (",
          partner.contact_person?.email,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 101,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 98,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: `/admin/partners/details/${partner._id}`, variant: "outline", className: "bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex-1", children: "Details" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 104,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 103,
        columnNumber: 15
      }, this)
    ] }, partner._id, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 92,
      columnNumber: 95
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-8 text-gray-400", children: "No partners found." }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 110,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full table-auto border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-gray-50 text-xs text-gray-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Business Name" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 118,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Country" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Phone" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Industry" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Status" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Contact Person" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Actions" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: partnersRes.items && partnersRes.items.length > 0 ? partnersRes.items.map((partner) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b last:border-b-0 hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3 font-semibold", children: partner.legal_business_name }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 129,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: partner.country_of_incorporation }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 130,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: partner.phone_number }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 131,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: partner.industry }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 132,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-block px-2 py-1 rounded-lg border text-xs font-semibold ${statusColors[partner.status] || "text-gray-600 bg-gray-100 border-gray-200"}`, children: partner.status }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 134,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 133,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold", children: partner.contact_person?.name }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 138,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: partner.contact_person?.email }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 139,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: partner.contact_person?.phone }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 140,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 137,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 136,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: `/admin/partners/details/${partner._id}`, variant: "outline", className: "bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex-1", children: "Details" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 144,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 143,
          columnNumber: 19
        }, this)
      ] }, partner._id, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 128,
        columnNumber: 99
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { colSpan: 7, className: "text-center py-8 text-gray-400", children: "No partners found." }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 150,
        columnNumber: 30
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 150,
        columnNumber: 26
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:block w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: partnersRes?.last_key_id, pageSize: partnersRes?.items_per_page, firstKey: partnersRes?.first_key_id }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 155,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(PartnersIndex, "O+N+dt23Rrs4GYe1uchWBdAUtqs=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = PartnersIndex;
function _PartnersIndex() {
  _s2();
  const {
    partnersRes,
    query
  } = useLoaderData();
  const navigation = useNavigation();
  const [search, setSearch] = (0, import_react2.useState)(query.legal_business_name || "");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Partners" }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 173,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-xs font-semibold mb-1", children: "Business Name" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "legal_business_name", className: "w-full border rounded-lg px-3 py-2", value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search by business name" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-1 flex gap-2 mt-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold", children: "Search" }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 184,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 177,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 176,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full table-auto border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-gray-50 text-xs text-gray-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Business Name" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 193,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Country" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 194,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Phone" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 195,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Industry" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 196,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Status" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 197,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Contact Person" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 198,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-2 text-left", children: "Actions" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 199,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 192,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 191,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: partnersRes.items && partnersRes.items.length > 0 ? partnersRes.items.map((partner) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b last:border-b-0 hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3 font-semibold", children: partner.legal_business_name }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 204,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: partner.country_of_incorporation }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 205,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: partner.phone_number }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 206,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: partner.industry }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 207,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-block px-2 py-1 rounded-lg border text-xs font-semibold ${statusColors[partner.status] || "text-gray-600 bg-gray-100 border-gray-200"}`, children: partner.status }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 209,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 208,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold", children: partner.contact_person?.name }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 215,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: partner.contact_person?.email }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 216,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: partner.contact_person?.phone }, void 0, false, {
            fileName: "app/routes/admin.partners._index.tsx",
            lineNumber: 217,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 214,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 213,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: `/admin/partners/details/${partner._id}`, variant: "outline", className: "bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex-1", children: "Details" }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 222,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.partners._index.tsx",
          lineNumber: 220,
          columnNumber: 19
        }, this)
      ] }, partner._id, true, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 203,
        columnNumber: 99
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { colSpan: 7, className: "text-center py-8 text-gray-400", children: "No partners found." }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 228,
        columnNumber: 30
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 228,
        columnNumber: 26
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.partners._index.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 190,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:block w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: partnersRes?.last_key_id, pageSize: partnersRes?.items_per_page, firstKey: partnersRes?.first_key_id }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 233,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.partners._index.tsx",
      lineNumber: 232,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners._index.tsx",
    lineNumber: 171,
    columnNumber: 10
  }, this);
}
_s2(_PartnersIndex, "n4N84L9u1jY/89UMNmBMtsIGeEw=", false, function() {
  return [useLoaderData, useNavigation];
});
var _c;
$RefreshReg$(_c, "PartnersIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnersIndex as default
};
//# sourceMappingURL=/build/routes/admin.partners._index-C5OKZAKP.js.map
