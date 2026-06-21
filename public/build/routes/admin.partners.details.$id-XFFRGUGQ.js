import {
  RoundCta_default
} from "/build/_shared/chunk-YCGBPSTG.js";
import {
  require_partner
} from "/build/_shared/chunk-CTOGQ3KG.js";
import {
  Select
} from "/build/_shared/chunk-EQJRGTTT.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import {
  FormControl
} from "/build/_shared/chunk-P6IR6DKG.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  icons
} from "/build/_shared/chunk-ZTZJB4DO.js";
import {
  Cta_default
} from "/build/_shared/chunk-55Q66HLJ.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
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
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin.partners.details.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_partner = __toESM(require_partner(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.partners.details.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.partners.details.$id.tsx"
  );
  import.meta.hot.lastModified = "1781724959899.3394";
}
var statusColors = {
  Approved: "text-green-600 bg-green-50 border-green-200",
  Pending: "text-yellow-600 bg-yellow-50 border-yellow-200",
  PendingVerification: "text-blue-600 bg-blue-50 border-blue-200",
  Trial: "text-indigo-600 bg-indigo-50 border-indigo-200",
  Suspended: "text-red-600 bg-red-50 border-red-200",
  PendingSettlementDisbursement: "text-purple-600 bg-purple-50 border-purple-200",
  Rejected: "text-red-600 bg-red-50 border-red-200"
};
var statusOptions = ["Pending", "PendingVerification", "Trial", "Approved", "Suspended", "PendingSettlementDisbursement", "Rejected"];
function prettyStatus(status) {
  return status.replace(/([A-Z])/g, " $1").trim();
}
function DetailCard({
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-gray-100 bg-white shadow-sm p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: label }, void 0, false, {
      fileName: "app/routes/admin.partners.details.$id.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm font-semibold text-gray-900", children: value ?? "\u2014" }, void 0, false, {
      fileName: "app/routes/admin.partners.details.$id.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.details.$id.tsx",
    lineNumber: 182,
    columnNumber: 10
  }, this);
}
_c = DetailCard;
function PartnerDetailsPage() {
  _s();
  const {
    business
  } = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, false, {
        fileName: "app/routes/admin.partners.details.$id.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: business.legal_business_name }, void 0, false, {
          fileName: "app/routes/admin.partners.details.$id.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 mt-1", children: "Business details and admin controls" }, void 0, false, {
          fileName: "app/routes/admin.partners.details.$id.tsx",
          lineNumber: 201,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.details.$id.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.details.$id.tsx",
      lineNumber: 197,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grid gap-4 lg:grid-cols-[1.4fr_0.9fr]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-start justify-between gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Business status" }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 210,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `mt-2 inline-flex px-3 py-1.5 rounded-full border text-xs font-semibold ${statusColors[business.status] || "text-gray-600 bg-gray-100 border-gray-200"}`, children: prettyStatus(business.status) }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 211,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 209,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Business Email", value: business.business_email }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 238,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Phone", value: business.phone_number }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 239,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Industry", value: business.industry }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 240,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Country", value: business.country_of_incorporation }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 241,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Referral %", value: business.referral_percentage }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 242,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Owner ID", value: business.owner_id || "Not set" }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 243,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 237,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.details.$id.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-bold text-primary", children: "Business information" }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 248,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid sm:grid-cols-2 gap-4 mt-4 text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Legal Name", value: business.legal_business_name }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 250,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "ROC / CAC Number", value: business.roc_cac_number }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 251,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Tax ID", value: business.tax_id }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 252,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Website", value: business.website }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 253,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2 rounded-2xl border border-gray-100 bg-gray-50 p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Description" }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 255,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-gray-700 whitespace-pre-wrap", children: business.business_description || "\u2014" }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 256,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 254,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2 rounded-2xl border border-gray-100 bg-gray-50 p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Notes" }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 259,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex flex-wrap gap-2", children: business.notes?.length ? business.notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-700", children: note }, `${note}-${index}`, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 261,
                columnNumber: 81
              }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500", children: "No notes available" }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 263,
                columnNumber: 32
              }, this) }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 260,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 258,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 249,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.details.$id.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-bold text-primary", children: "Contact person" }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 270,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid sm:grid-cols-2 gap-3 mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Name", value: business.contact_person?.name }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 272,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Email", value: business.contact_person?.email }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 273,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Phone", value: business.contact_person?.phone }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 274,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailCard, { label: "Country", value: business.contact_person?.country }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 275,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 271,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.details.$id.tsx",
          lineNumber: 269,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-bold text-primary", children: "Business locations" }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 280,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3 mt-4", children: business.business_locations?.length ? business.business_locations.map((location, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-gray-900", children: location.street }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 283,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-600 mt-1", children: [
              location.city,
              ", ",
              location.state,
              ", ",
              location.country
            ] }, void 0, true, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 284,
              columnNumber: 19
            }, this)
          ] }, `${location.street}-${index}`, true, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 282,
            columnNumber: 107
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: "No business locations available" }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 287,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 281,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.details.$id.tsx",
          lineNumber: 279,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-bold text-primary", children: "Status history" }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 292,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid gap-3", children: business.status_history?.length ? business.status_history.map((entry, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-gray-100 p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-flex px-2.5 py-1 rounded-full border text-xs font-semibold ${statusColors[entry.status] || "text-gray-600 bg-gray-100 border-gray-200"}`, children: prettyStatus(entry.status) }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 296,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-400", children: new Date(entry.updated_on).toLocaleString() }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 299,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 295,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm text-gray-700", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Updated by:" }, void 0, false, {
                  fileName: "app/routes/admin.partners.details.$id.tsx",
                  lineNumber: 302,
                  columnNumber: 26
                }, this),
                " ",
                entry.updated_by || "\u2014"
              ] }, void 0, true, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 302,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Reason:" }, void 0, false, {
                  fileName: "app/routes/admin.partners.details.$id.tsx",
                  lineNumber: 303,
                  columnNumber: 26
                }, this),
                " ",
                entry.reason || "\u2014"
              ] }, void 0, true, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 303,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 301,
              columnNumber: 19
            }, this)
          ] }, `${entry.updated_on}-${index}`, true, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 294,
            columnNumber: 96
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: "No status history available" }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 305,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 293,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.details.$id.tsx",
          lineNumber: 291,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.details.$id.tsx",
        lineNumber: 206,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "grid gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-bold text-primary", children: "Update status" }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 312,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "grid gap-4 mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "update_status" }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 314,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "business_id", value: business._id }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 315,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "updated_by", value: "" }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 316,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Status", name: "status", defaultValue: business.status, required: true, children: statusOptions.map((status) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: status, children: prettyStatus(status) }, status, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 318,
              columnNumber: 46
            }, this)) }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 317,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Referral Percentage", name: "referral_percentage", type: "number", min: 0, max: 100, step: "0.01", placeholder: "Optional" }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 320,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", labelText: "Reason", name: "reason", placeholder: "Optional reason for change" }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 321,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", disabled: isSubmitting, className: "px-4 py-2 rounded-lg font-semibold", children: isSubmitting ? "Updating..." : "Update status" }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 322,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 313,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.details.$id.tsx",
          lineNumber: 311,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-bold text-primary", children: "Add business owner" }, void 0, false, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 329,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "grid gap-4 mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "add_owner" }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 331,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "business_id", value: business._id }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 332,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "First Name", name: "first_name", required: true, placeholder: "First name" }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 334,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Last Name", name: "last_name", required: true, placeholder: "Last name" }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 335,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Email", name: "email", type: "email", required: true, placeholder: "Owner email" }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 336,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Phone", name: "phone", type: "tel", required: true, placeholder: "Phone number" }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 337,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Alternate Phone", name: "alternate_phone", type: "tel", required: true, placeholder: "Alternate phone" }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 338,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Password", name: "password", type: "password", required: true, placeholder: "Temporary password" }, void 0, false, {
                fileName: "app/routes/admin.partners.details.$id.tsx",
                lineNumber: 339,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 333,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", disabled: isSubmitting, className: "px-4 py-2 rounded-lg font-semibold", children: isSubmitting ? "Saving..." : "Add owner" }, void 0, false, {
              fileName: "app/routes/admin.partners.details.$id.tsx",
              lineNumber: 341,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.partners.details.$id.tsx",
            lineNumber: 330,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.partners.details.$id.tsx",
          lineNumber: 328,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.partners.details.$id.tsx",
        lineNumber: 310,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.partners.details.$id.tsx",
      lineNumber: 205,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.partners.details.$id.tsx",
    lineNumber: 196,
    columnNumber: 10
  }, this);
}
_s(PartnerDetailsPage, "3QzpKEP5IaQQzp4eGH9XeNDtsa8=", false, function() {
  return [useLoaderData, useNavigation, useNavigate];
});
_c2 = PartnerDetailsPage;
var _c;
var _c2;
$RefreshReg$(_c, "DetailCard");
$RefreshReg$(_c2, "PartnerDetailsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerDetailsPage as default
};
//# sourceMappingURL=/build/routes/admin.partners.details.$id-XFFRGUGQ.js.map
