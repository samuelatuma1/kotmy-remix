import {
  ArrowLeft,
  ArrowRight,
  Package,
  Sparkles,
  Upload
} from "/build/_shared/chunk-3UWAUYI3.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Select
} from "/build/_shared/chunk-O4R66NJX.js";
import {
  DragnDrop
} from "/build/_shared/chunk-4KHNCWYH.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-VCQR46EC.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
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

// app/routes/partners.add.tsx
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
  import.meta.hot.lastModified = "1787352632067.1772";
}
function Banner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_16px_50px_rgba(14,42,77,0.15)] sm:px-8 sm:py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" }, void 0, false, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-white/5" }, void 0, false, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        "New Product"
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-black leading-tight sm:text-4xl", children: "Add a new product listing" }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-xl text-sm leading-6 text-white/70 sm:text-base", children: "Please fill the product details form below to add a new product to your catalog. Make sure to provide accurate information for better visibility and customer engagement." }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Package, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          "Product details"
        ] }, void 0, true, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          "Image upload"
        ] }, void 0, true, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.add.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_c = Banner;
function SectionHeading({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: eyebrow }, void 0, false, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-black text-slate-900", children: title }, void 0, false, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm leading-6 text-slate-500", children: description }, void 0, false, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.add.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_c2 = SectionHeading;
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full min-h-screen bg-tertiary p-4 sm:p-6 lg:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto flex w-full max-w-4xl flex-col gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, {}, void 0, false, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 162,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "button", onClick: () => navigate(-1), className: "inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold", variant: "outline", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this),
        "Back"
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm sm:inline-flex", children: "Ready to publish" }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 164,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", className: "grid gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { eyebrow: "Product basics", title: "Tell shoppers what this is", description: "Description of product goes here." }, void 0, false, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 176,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Product Name", name: "name", id: "name", required: true, placeholder: "Enter product name" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", labelText: "Description", name: "description", id: "description", required: true, placeholder: "Enter product description" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Category", name: "category", id: "category", placeholder: "e.g. Shoes" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 181,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Price Min", name: "price_min", id: "price_min", type: "number", min: 0, required: true, placeholder: "0" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 185,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Price Max", name: "price_max", id: "price_max", type: "number", min: 0, required: true, placeholder: "0" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 184,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Currency", id: "currency", name: "currency", defaultValue: "NGN", required: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "NGN", children: "NGN" }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 191,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "USD", children: "USD" }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 192,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 190,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Status", id: "status", name: "status", defaultValue: "available", required: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "available", children: "Available" }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 195,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "out_of_stock", children: "Out of Stock" }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 196,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "suspended", children: "Suspended" }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 197,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 194,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 189,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "SKU", name: "sku", id: "sku", placeholder: "Stock Keeping Unit" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 202,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Tags (comma separated)", name: "tags", id: "tags", value: tags, onChange: (e) => setTags(e.target.value), placeholder: "e.g. shoes, sports, men" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 203,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 201,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-white p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { eyebrow: "Store reach", title: "Choose where this product is available", description: "Use the locations list to assign the branches that should carry this product." }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 207,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mt-4 block font-bold text-sm", children: [
          "Locations",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 rounded-2xl border border-slate-200 bg-slate-50 p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "locations", id: "locations", multiple: true, className: "min-h-36 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm outline-none transition focus:border-brand-pink", children: locations.length > 0 ? locations.map((location) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: location.str_id, children: location.name }, location.str_id, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 213,
            columnNumber: 71
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", disabled: true, children: "No locations available" }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 215,
            columnNumber: 38
          }, this) }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 212,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mt-1 block text-xs font-normal text-slate-500", children: "Hold Ctrl or Cmd to select multiple locations." }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 220,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 209,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 206,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { eyebrow: "Visual asset", title: "Upload the product image", description: "A clean image gives the listing more presence and makes the catalog feel premium." }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { name: "image", labelText: "Product Image", multiple: false, required: false }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 229,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 228,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 226,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "reset", className: "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold", variant: "outline", children: "Reset" }, void 0, false, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 234,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { disabled: isSubmitting, element: "button", type: "submit", className: "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold", children: [
          isSubmitting ? "Adding product..." : "Add Product",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/partners.add.tsx",
            lineNumber: 239,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/partners.add.tsx",
          lineNumber: 237,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/partners.add.tsx",
        lineNumber: 233,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 175,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/partners.add.tsx",
      lineNumber: 174,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.add.tsx",
    lineNumber: 161,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/partners.add.tsx",
    lineNumber: 160,
    columnNumber: 10
  }, this);
}
_s(AddPartnerProduct, "B6vZK3UoT/Z9cC17LR6hnYaX2wc=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useNavigate];
});
_c3 = AddPartnerProduct;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Banner");
$RefreshReg$(_c2, "SectionHeading");
$RefreshReg$(_c3, "AddPartnerProduct");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddPartnerProduct as default
};
//# sourceMappingURL=/build/routes/partners.add-LICUUMNE.js.map
