import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Select
} from "/build/_shared/chunk-EQJRGTTT.js";
import {
  DragnDrop
} from "/build/_shared/chunk-G62RSI5Z.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  FormControl
} from "/build/_shared/chunk-P6IR6DKG.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  toast
} from "/build/_shared/chunk-R6F4DP54.js";
import "/build/_shared/chunk-ZTZJB4DO.js";
import {
  Cta_default
} from "/build/_shared/chunk-55Q66HLJ.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation
} from "/build/_shared/chunk-QORMC3GD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/partners.add.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/partners.add.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/partners.add.tsx"
  );
  import.meta.hot.lastModified = "1778344797917.1501";
}
function AddPartnerProduct() {
  _s();
  const {
    locations
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const [tags, setTags] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      console.log(actionData.error);
      toast({
        variant: "destructive",
        title: "Add product failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not add partner product!"
      });
    }
    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Product added",
        description: "Partner product was successfully added!"
      });
      navigate("/partners/home");
    }
  }, [actionData, navigate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "button", onClick: () => navigate(-1), className: "hover:bg-[#F7F7F8] text-primary px-4 py-2 rounded-lg", variant: "outline", children: "Back" }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Add Partner Product" }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", className: "grid gap-4 text-sm bg-white p-6 rounded-xl border border-gray-100 shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Product Name", name: "name", id: "name", required: true, placeholder: "Enter product name" }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", labelText: "Description", name: "description", id: "description", required: true, placeholder: "Enter product description" }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Category", name: "category", id: "category", placeholder: "e.g. Shoes" }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Price Min", name: "price_min", id: "price_min", type: "number", min: 0, required: true, placeholder: "0" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Price Max", name: "price_max", id: "price_max", type: "number", min: 0, required: true, placeholder: "0" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Currency", id: "currency", name: "currency", defaultValue: "NGN", required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "NGN", children: "NGN" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "USD", children: "USD" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Status", id: "status", name: "status", defaultValue: "available", required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "available", children: "Available" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "out_of_stock", children: "Out of Stock" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "suspended", children: "Suspended" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "SKU", name: "sku", id: "sku", placeholder: "Stock Keeping Unit" }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Tags (comma separated)", name: "tags", id: "tags", value: tags, onChange: (e) => setTags(e.target.value), placeholder: "e.g. shoes, sports, men" }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block font-bold text-sm", children: [
        "Locations",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 rounded-lg border border-secondary bg-white p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "locations", id: "locations", multiple: true, className: "w-full min-h-36 rounded-md border border-gray-200 bg-transparent p-3 text-sm outline-none focus:border-accent", children: locations.length > 0 ? locations.map((location) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: location.str_id, children: location.name }, location.str_id, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 124,
          columnNumber: 65
        }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", disabled: true, children: "No locations available" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 126,
          columnNumber: 32
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mt-1 block text-xs font-normal text-gray-500", children: "Hold Ctrl or Cmd to select multiple locations." }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { name: "image", labelText: "Product Image", multiple: false, required: false }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end gap-4 mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "reset", className: "px-4 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { disabled: isSubmitting, element: "button", type: "submit", className: "px-4 py-2 rounded-lg font-medium", children: isSubmitting ? "Adding product..." : "Add Product" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.add.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_s(AddPartnerProduct, "B6vZK3UoT/Z9cC17LR6hnYaX2wc=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useNavigate];
});
_c = AddPartnerProduct;
var _c;
$RefreshReg$(_c, "AddPartnerProduct");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddPartnerProduct as default
};
//# sourceMappingURL=/build/routes/partners.add-3RKL6NLU.js.map
