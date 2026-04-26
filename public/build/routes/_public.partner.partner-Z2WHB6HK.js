import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  toast
} from "/build/_shared/chunk-R6F4DP54.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
  useNavigate,
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

// app/routes/_public.partner.partner.tsx
var import_node = __toESM(require_node(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.partner.partner.tsx"' + id);
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
    "app/routes/_public.partner.partner.tsx"
  );
  import.meta.hot.lastModified = "1777092099916.011";
}
function Stepper({
  currentStep
}) {
  const steps = ["Business info", "Business address", "Contact details"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs sm:text-sm font-medium text-gray-400 mb-8 sm:mb-12", children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-1 sm:gap-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `flex h-6 w-6 items-center justify-center rounded-full text-xs ${i === currentStep ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`, children: i + 1 }, void 0, false, {
      fileName: "app/routes/_public.partner.partner.tsx",
      lineNumber: 80,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: i === currentStep ? "text-black" : "", children: step }, void 0, false, {
      fileName: "app/routes/_public.partner.partner.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this),
    i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:inline", children: ">" }, void 0, false, {
      fileName: "app/routes/_public.partner.partner.tsx",
      lineNumber: 84,
      columnNumber: 36
    }, this)
  ] }, step, true, {
    fileName: "app/routes/_public.partner.partner.tsx",
    lineNumber: 79,
    columnNumber: 31
  }, this)) }, void 0, false, {
    fileName: "app/routes/_public.partner.partner.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
_c = Stepper;
var Label = ({
  children,
  required
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-semibold text-gray-700 mb-2 mt-5", children: [
  children,
  " ",
  required && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
    fileName: "app/routes/_public.partner.partner.tsx",
    lineNumber: 93,
    columnNumber: 29
  }, this)
] }, void 0, true, {
  fileName: "app/routes/_public.partner.partner.tsx",
  lineNumber: 92,
  columnNumber: 7
}, this);
_c2 = Label;
var inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-gray-400 bg-white";
function usePartnerOnboardingController() {
  _s();
  const navigation = useNavigation();
  const [section, setSection] = (0, import_react2.useState)(0);
  const [form, setForm] = (0, import_react2.useState)({
    estimated_weekly_volume_currency: "USD",
    referral_percentage: 0,
    country_of_incorporation: "Nigeria"
  });
  const actionData = useActionData();
  const isSuccess = !!actionData?.data && !actionData?.error;
  const businessName = form.legal_business_name ?? "Partner";
  const navigate = useNavigate();
  (0, import_react3.useEffect)(() => {
    if (actionData?.error) {
      console.log(actionData.error);
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not submit partnership request!"
      });
    }
    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Submission successful",
        description: "Your partnership request was successfully submitted!"
      });
    }
  }, [actionData]);
  const handleChange = (e) => {
    console.log(form);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  return {
    section,
    form,
    navigation,
    handleChange,
    setSection,
    businessName,
    isSuccess,
    navigate
  };
}
_s(usePartnerOnboardingController, "Kl2XT+BY30nSHeOmL0mUYR32qoA=", false, function() {
  return [useNavigation, useActionData, useNavigate];
});
function PartnerOnboarding() {
  _s2();
  const {
    section,
    form,
    navigation,
    handleChange,
    setSection,
    isSuccess,
    navigate,
    businessName
  } = usePartnerOnboardingController();
  if (isSuccess) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "min-h-screen bg-white font-sans text-slate-900 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-xl w-full mx-auto px-4 py-16 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "mx-auto mb-4 text-green-500", width: "48", height: "48", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "12", r: "12", fill: "#22C55E", opacity: "0.1" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 166,
            columnNumber: 115
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M7 13l3 3 7-7", stroke: "#22C55E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 166,
            columnNumber: 177
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl sm:text-3xl font-bold mb-2", children: [
          "Thank you, ",
          businessName,
          "!"
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-base sm:text-lg mb-6", children: [
          "We have received your request to partner with us.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 169,
            columnNumber: 66
          }, this),
          "A member of our team will contact you soon."
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.partner.partner.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "inline-block bg-[#4B4870] hover:bg-[#3d3a5c] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all text-base sm:text-lg", onClick: () => navigate("/"), children: "Go to Homepage" }, void 0, false, {
        fileName: "app/routes/_public.partner.partner.tsx",
        lineNumber: 173,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.partner.partner.tsx",
      lineNumber: 164,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.partner.partner.tsx",
      lineNumber: 163,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "min-h-screen bg-white font-sans text-slate-900 pb-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto px-2 sm:px-6 pt-8 sm:pt-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stepper, { currentStep: section }, void 0, false, {
      fileName: "app/routes/_public.partner.partner.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-8 sm:mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl sm:text-4xl font-bold tracking-tight text-gray-900", children: section === 0 ? "Tell us about your business" : section === 1 ? "Enter your business's legal address" : "Enter contact info details" }, void 0, false, {
      fileName: "app/routes/_public.partner.partner.tsx",
      lineNumber: 184,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.partner.partner.tsx",
      lineNumber: 183,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: section === 0 ? "" : "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4", children: "Company information" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 195,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 text-xs sm:text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between flex-wrap", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Company name:" }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 197,
                columnNumber: 57
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: [
                form.legal_business_name,
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-green-500", children: "\u25CF" }, void 0, false, {
                  fileName: "app/routes/_public.partner.partner.tsx",
                  lineNumber: 197,
                  columnNumber: 169
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 197,
                columnNumber: 110
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 197,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between flex-wrap", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Phone Number:" }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 198,
                columnNumber: 57
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: form.phone_number }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 198,
                columnNumber: 110
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 198,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between flex-wrap", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Status:" }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 200,
                columnNumber: 57
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-blue-600 font-semibold inline-flex items-center gap-1", children: "\u2713 Active" }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 200,
                columnNumber: 104
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 200,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 196,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 194,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Legal business name" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 204,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "legal_business_name", required: true, className: inputClass, value: form.legal_business_name || "", onChange: handleChange }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 205,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 203,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Country of incorporation" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 208,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "country_of_incorporation", className: inputClass, value: form.country_of_incorporation, onChange: handleChange, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Nigeria", children: "\u{1F1F3}\u{1F1EC} Nigeria" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 210,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Kenya", children: "\u{1F1F0}\u{1F1EA} Kenya" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 211,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 209,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 207,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Business Email" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 216,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "business_email", type: "email", className: inputClass, value: form.business_email || "", onChange: handleChange, required: true, placeholder: "Enter business email" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 217,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 215,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Phone number" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 221,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-2 items-stretch", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full sm:w-32", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "phone_country_code", className: "block w-full appearance-none px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base pr-8", defaultValue: "+234", style: {
                minWidth: "5.5rem"
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "+234", children: "\u{1F1F3}\u{1F1EC} +234" }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 227,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 224,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg", children: "\u25BC" }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 229,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 223,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "phone_number", required: true, className: inputClass + " flex-1", placeholder: "810 234 6879", value: form.phone_number || "", onChange: handleChange, type: "tel", autoComplete: "tel" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 231,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 222,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 220,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "ROC / CAC Number" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 235,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "roc_cac_number", required: true, className: inputClass, value: form.roc_cac_number || "", onChange: handleChange }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 236,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 234,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Tax ID (TIN)" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 239,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "tax_id", required: true, className: inputClass, value: form.tax_id || "", onChange: handleChange }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 240,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 238,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Estimated Weekly Volume Currency" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 247,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "estimated_weekly_volume_currency", className: inputClass, value: form.estimated_weekly_volume_currency || "", onChange: handleChange, required: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select currency" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 249,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "NGN", children: "NGN" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 250,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "USD", children: "USD" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 251,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 248,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 246,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Estimated weekly volume" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 256,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400", children: form.estimated_weekly_volume_currency }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 259,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "estimated_weekly_volume_min", type: "number", placeholder: "Min", className: `${inputClass} pl-16`, value: form.estimated_weekly_volume_min || "", onChange: handleChange }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 260,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 258,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400", children: form.estimated_weekly_volume_currency }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 263,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "estimated_weekly_volume_max", type: "number", placeholder: "Max", className: `${inputClass} pl-16`, value: form.estimated_weekly_volume_max || "", onChange: handleChange }, void 0, false, {
                fileName: "app/routes/_public.partner.partner.tsx",
                lineNumber: 264,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 262,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 257,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 255,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Business description" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 269,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "business_description", required: true, className: `${inputClass} h-32 resize-none`, value: form.business_description || "", onChange: handleChange }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 271,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute bottom-3 right-3 text-xs text-gray-400", children: "0/5000" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 272,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 270,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 268,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Website (Optional)" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 276,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "website", className: inputClass, placeholder: "https://www.acmetrading.com", value: form.website || "", onChange: handleChange }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 277,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 275,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Industry" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 282,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "industry", className: inputClass, value: form.industry || "", onChange: handleChange, required: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select industry" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 284,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Services", children: "Services" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 285,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Manufacturing", children: "Manufacturing" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 286,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Hospitality", children: "Hospitality" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 287,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Financial Industry", children: "Financial Industry" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 288,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Technology", children: "Technology" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 289,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Education", children: "Education" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 290,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Healthcare", children: "Healthcare" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 291,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Retail", children: "Retail" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 292,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Agriculture", children: "Agriculture" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 293,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Construction", children: "Construction" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 294,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Transportation", children: "Transportation" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 295,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Other", children: "Other" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 296,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 283,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 281,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "w-full bg-[#4B4870] hover:bg-[#3d3a5c] text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg transition-all mt-4 text-base sm:text-lg", onClick: () => setSection(1), children: "Next" }, void 0, false, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 301,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.partner.partner.tsx",
        lineNumber: 193,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: section === 1 ? "" : "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Country of territory" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 309,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "location_country", required: true, className: inputClass, value: form.location_country || "", onChange: handleChange, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select your country" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 311,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Nigeria", children: "Nigeria" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 312,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 310,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 308,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Street Address" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 316,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "location_street", required: true, placeholder: "123 Main Street", className: inputClass, value: form.location_street || "", onChange: handleChange }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 317,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 315,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "State" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 320,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "location_state", required: true, className: inputClass, value: form.location_state || "", onChange: handleChange, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select state" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 322,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Lagos", children: "Lagos" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 323,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 321,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 319,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "City" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 327,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "location_city", required: true, className: inputClass, value: form.location_city || "", onChange: handleChange }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 328,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 326,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Postal Code" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 331,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "location_postal", className: inputClass, value: form.location_postal || "", onChange: handleChange }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 332,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 330,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-3 pt-4 mt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "w-full sm:flex-1 bg-gray-100 text-gray-600 font-semibold py-3 sm:py-4 rounded-xl", onClick: () => setSection(0), children: "Back" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 335,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "w-full sm:flex-[2] bg-[#4B4870] text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg", onClick: () => setSection(2), children: "Next" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 336,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 334,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.partner.partner.tsx",
        lineNumber: 307,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: section === 2 ? "" : "hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Country of territory" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 346,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "contact_country", required: true, className: inputClass, value: form.contact_country || "", onChange: handleChange, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select your country" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 348,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Nigeria", children: "Nigeria" }, void 0, false, {
              fileName: "app/routes/_public.partner.partner.tsx",
              lineNumber: 349,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 347,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 345,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Contact Name" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 353,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "contact_name", required: true, placeholder: "John Doe", className: inputClass, value: form.contact_name || "", onChange: handleChange }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 354,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 352,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Contact Email" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 357,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "contact_email", required: true, className: inputClass, value: form.contact_email || "", onChange: handleChange }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 358,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 356,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { required: true, children: "Contact Phone" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 361,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "contact_phone", className: inputClass, value: form.contact_phone || "", onChange: handleChange }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 362,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 360,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-3 pt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "w-full sm:flex-1 bg-gray-100 text-gray-600 font-semibold py-3 sm:py-4 rounded-xl", onClick: () => setSection(1), children: "Back" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 365,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full sm:flex-[2] bg-[#4B4870] text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg", children: navigation.state === "submitting" ? "Submitting..." : "Submit" }, void 0, false, {
            fileName: "app/routes/_public.partner.partner.tsx",
            lineNumber: 366,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.partner.partner.tsx",
          lineNumber: 364,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.partner.partner.tsx",
        lineNumber: 344,
        columnNumber: 3
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.partner.partner.tsx",
      lineNumber: 191,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.partner.partner.tsx",
      lineNumber: 190,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.partner.partner.tsx",
    lineNumber: 180,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.partner.partner.tsx",
    lineNumber: 179,
    columnNumber: 10
  }, this);
}
_s2(PartnerOnboarding, "cJwmgu+tZ6mOiHfFbXCOtX22PRA=", false, function() {
  return [usePartnerOnboardingController];
});
_c3 = PartnerOnboarding;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Stepper");
$RefreshReg$(_c2, "Label");
$RefreshReg$(_c3, "PartnerOnboarding");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerOnboarding as default
};
//# sourceMappingURL=/build/routes/_public.partner.partner-Z2WHB6HK.js.map
