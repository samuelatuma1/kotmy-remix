import {
  Select
} from "/build/_shared/chunk-O4R66NJX.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  DragnDrop
} from "/build/_shared/chunk-4KHNCWYH.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import {
  no_image_default
} from "/build/_shared/chunk-7JPCB6PC.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
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
  useActionData,
  useLoaderData,
  useNavigate,
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

// app/routes/partners.product.update.$productId.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/partners.product.update.$productId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/partners.product.update.$productId.tsx"
  );
  import.meta.hot.lastModified = "1778388073960.2344";
}
function getImageSrc(product) {
  return product.main_image_url || product.image_url || no_image_default;
}
function UpdatePartnerProduct() {
  _s();
  let {
    product,
    locations
  } = useLoaderData();
  product = product;
  locations = locations;
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const [tags, setTags] = (0, import_react2.useState)(product.tags.join(", "));
  (0, import_react2.useEffect)(() => {
    setTags(product.tags.join(", "));
  }, [product]);
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Update product failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not update partner product!"
      });
    }
    if (actionData) {
      toast({
        variant: "default",
        title: "Product updated",
        description: "Partner product was successfully updated!"
      });
    }
  }, [actionData, navigate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "button", onClick: () => navigate(-1), className: "hover:bg-[#F7F7F8] text-primary px-4 py-2 rounded-lg", variant: "outline", children: "Back" }, void 0, false, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Update Partner Product" }, void 0, false, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.product.update.$productId.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", onReset: () => setTags(product.tags.join(", ")), className: "grid gap-4 text-sm bg-white p-6 rounded-xl border border-gray-100 shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Product Name", name: "name", id: "name", defaultValue: product.name, placeholder: "Enter product name" }, void 0, false, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", labelText: "Description", name: "description", id: "description", defaultValue: product.description, placeholder: "Enter product description" }, void 0, false, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Category", name: "category", id: "category", defaultValue: product.category, placeholder: "e.g. Shoes" }, void 0, false, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Price Min", name: "price_min", id: "price_min", type: "number", min: 0, defaultValue: product.price_min, placeholder: "0" }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 182,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Price Max", name: "price_max", id: "price_max", type: "number", min: 0, defaultValue: product.price_max, placeholder: "0" }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Currency", id: "currency", name: "currency", defaultValue: product.currency, required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "NGN", children: "NGN" }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 186,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "USD", children: "USD" }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 187,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Status", id: "status", name: "status", defaultValue: product.status, required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "available", children: "Available" }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "out_of_stock", children: "Out of Stock" }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "suspended", children: "Suspended" }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "SKU", name: "sku", id: "sku", defaultValue: product.sku, placeholder: "Stock Keeping Unit" }, void 0, false, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Tags (comma separated)", name: "tags", id: "tags", value: tags, onChange: (e) => setTags(e.target.value), placeholder: "e.g. shoes, sports, men" }, void 0, false, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block font-bold text-sm", children: [
        "Locations",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 rounded-lg border border-secondary bg-white p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "locations", id: "locations", multiple: true, defaultValue: product.locations, className: "w-full min-h-36 rounded-md border border-gray-200 bg-transparent p-3 text-sm outline-none focus:border-accent", children: locations.length > 0 ? locations.map((location) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: location.str_id, children: location.name }, location.str_id, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 201,
          columnNumber: 65
        }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", disabled: true, children: "No locations available" }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 203,
          columnNumber: 32
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 199,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mt-1 block text-xs font-normal text-gray-500", children: "Hold Ctrl or Cmd to select multiple locations." }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-xl border border-gray-100 bg-slate-50 p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3 text-sm font-semibold text-gray-700", children: "Current Image" }, void 0, false, {
            fileName: "app/routes/partners.product.update.$productId.tsx",
            lineNumber: 215,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getImageSrc(product), alt: product.name, className: "h-56 w-full rounded-lg object-cover bg-white" }, void 0, false, {
            fileName: "app/routes/partners.product.update.$productId.tsx",
            lineNumber: 216,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 214,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { name: "image", labelText: "Replace Product Image", multiple: false, required: false }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: "Leave this blank to keep the current image." }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 219,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 213,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end gap-4 mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "reset", className: "px-4 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { disabled: isSubmitting, element: "button", type: "submit", className: "px-4 py-2 rounded-lg font-medium", children: isSubmitting ? "Updating product..." : "Update Product" }, void 0, false, {
          fileName: "app/routes/partners.product.update.$productId.tsx",
          lineNumber: 228,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.product.update.$productId.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.product.update.$productId.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.product.update.$productId.tsx",
    lineNumber: 169,
    columnNumber: 10
  }, this);
}
_s(UpdatePartnerProduct, "lLQHWjIwd9A6xleaG8kSaqjMdbE=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useNavigate];
});
_c = UpdatePartnerProduct;
var _c;
$RefreshReg$(_c, "UpdatePartnerProduct");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UpdatePartnerProduct as default
};
//# sourceMappingURL=/build/routes/partners.product.update.$productId-HUYVWH2Q.js.map
