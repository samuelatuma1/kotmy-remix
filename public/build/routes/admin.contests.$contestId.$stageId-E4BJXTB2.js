import {
  Checkbox
} from "/build/_shared/chunk-CLVEAIQ2.js";
import {
  useFilePreview
} from "/build/_shared/chunk-ITNAOETV.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-B7QPMP4F.js";
import {
  nigerianStates
} from "/build/_shared/chunk-ZBCNQQYM.js";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "/build/_shared/chunk-VRCWIES3.js";
import "/build/_shared/chunk-X7MJWV53.js";
import {
  Cta_default
} from "/build/_shared/chunk-JSO2QJI7.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-5PMHMVT2.js";
import "/build/_shared/chunk-KWJHYQH5.js";
import "/build/_shared/chunk-NOEFVVE2.js";
import "/build/_shared/chunk-4PSCNRID.js";
import {
  FormControl
} from "/build/_shared/chunk-VY7DZHMV.js";
import "/build/_shared/chunk-2K2NFQ32.js";
import "/build/_shared/chunk-ULL45DVV.js";
import "/build/_shared/chunk-AV2RONJM.js";
import "/build/_shared/chunk-N5XOLCME.js";
import "/build/_shared/chunk-CMHVCBDB.js";
import {
  cn
} from "/build/_shared/chunk-LOUTNZN4.js";
import {
  require_actions
} from "/build/_shared/chunk-AUWIFI2P.js";
import {
  DataTable,
  DataTableColumnHeader
} from "/build/_shared/chunk-JQFI7IQB.js";
import {
  formatDate,
  parseDateForInput
} from "/build/_shared/chunk-SICWZ67A.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  no_image_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import {
  require_contest
} from "/build/_shared/chunk-5XKVHEZW.js";
import {
  StatusTag
} from "/build/_shared/chunk-6BY4NF3F.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Form,
  useFetcher,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-RJTUOXH3.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/admin.contests.$contestId.$stageId.tsx
var import_node = __toESM(require_node(), 1);
var import_contest = __toESM(require_contest(), 1);
var import_session = __toESM(require_session(), 1);

// app/components/admin/contest/EditContestantDialog.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/EditContestantDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/EditContestantDialog.tsx"
  );
  import.meta.hot.lastModified = "1760080481936.6538";
}
function EditContestantDialog({
  disabled,
  contestant
}) {
  _s();
  const {
    stage
  } = useLoaderData();
  const isKotmy = stage.rates.social_media.type === "kotmy";
  const [files, setFiles] = (0, import_react2.useState)(null);
  const {
    filePreview,
    clearFilePreview
  } = useFilePreview(files);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { onOpenChange: (open) => {
    if (!open)
      clearFilePreview();
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { disabled, title: "Edit contestant", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-[#262626] bg-[#F7F7F8] text-primary`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.editIcon, className: "w-3" }, void 0, false, {
      fileName: "app/components/admin/contest/EditContestantDialog.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/contest/EditContestantDialog.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    !disabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "bg-secondary max-h-screen overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: "Edit Contestant Data" }, void 0, false, {
        fileName: "app/components/admin/contest/EditContestantDialog.tsx",
        lineNumber: 60,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "text-primary text-xs flex flex-col gap-4 mt-3", encType: "multipart/form-data", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "py-1 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "text-gray-400 font-medium", children: "Biodata" }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 64,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative max-sm:col-span-2 row-span-3 flex flex-col max-h-56 overflow-y-hidden rounded text-left font-semibold", children: [
            "Image",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: filePreview || contestant.image_url || no_image_default, alt: "contestant image", width: 300, height: 300, className: "bg-neutral-200 size-full object-cover rounded" }, void 0, false, {
              fileName: "app/components/admin/contest/EditContestantDialog.tsx",
              lineNumber: 66,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.closeIcon, element: "button", type: "button", onClick: () => clearFilePreview(), className: cn("absolute bottom-2 right-2 bg-white/80 p-2 rounded-full hover:bg-red-50 hover:text-red-400 transition-colors", {
              "hidden": !filePreview
            }) }, void 0, false, {
              fileName: "app/components/admin/contest/EditContestantDialog.tsx",
              lineNumber: 67,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "media", className: cn("absolute bottom-2 right-2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors cursor-pointer", {
              "hidden": filePreview
            }), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", name: "media", id: "media", hidden: true, onChange: (e) => setFiles(e.target.files) }, void 0, false, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 73,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.imageIcon }, void 0, false, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 74,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/admin/contest/EditContestantDialog.tsx",
              lineNumber: 70,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 65,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "first_name", name: "first_name", labelText: "First Name", labelClassNames: "text-left", defaultValue: contestant.contestant_biodata.first_name }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 77,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "last_name", name: "last_name", labelText: "Last Name", labelClassNames: "text-left", defaultValue: contestant.contestant_biodata.last_name }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 78,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", labelText: "Email Address", labelClassNames: "text-left", defaultValue: contestant.contestant_biodata.email }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 79,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "gender", className: "font-bold flex flex-col text-left", children: [
            "Gender",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "sex", required: true, defaultValue: contestant.contestant_biodata.sex, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Gender" }, void 0, false, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 83,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 82,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }, void 0, false, {
                  fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                  lineNumber: 86,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" }, void 0, false, {
                  fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                  lineNumber: 87,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 85,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/admin/contest/EditContestantDialog.tsx",
              lineNumber: 81,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 80,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "date", labelText: "Date of Birth", id: "dob", name: "dob", labelClassNames: "text-left", defaultValue: parseDateForInput(contestant.contestant_biodata.dob), max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 91,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "gender", className: "font-bold flex flex-col text-left", children: [
            "State of Residence",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "state", required: true, defaultValue: contestant.contestant_biodata.state_of_residence, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "State" }, void 0, false, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 95,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 94,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: Object.entries(nigerianStates).map(([key, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: label }, key, false, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 98,
                columnNumber: 103
              }, this)) }, void 0, false, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 97,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/admin/contest/EditContestantDialog.tsx",
              lineNumber: 93,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 92,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/contest/EditContestantDialog.tsx",
          lineNumber: 63,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "py-1 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "text-gray-400 font-medium", children: "Voting" }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 104,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "social_media_url", name: "social_media_url", labelText: "Social Media Link", labelClassNames: "text-left", defaultValue: contestant.social_media_url, disabled: isKotmy }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 105,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "social_media_vote", name: "social_media_vote", labelText: "Social Media Vote", labelClassNames: "text-left", type: "number", min: 0, defaultValue: contestant?.vote.social_media }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 106,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "stage_bonus", name: "stage_bonus", labelText: "Stage Bonus", type: "number", labelClassNames: "text-left", min: 0, defaultValue: contestant.vote.bonus }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 107,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "judge_vote", name: "judge_vote", labelText: "Judge Vote", type: "number", labelClassNames: "text-left", min: 0, defaultValue: contestant.vote.judge }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 108,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/contest/EditContestantDialog.tsx",
          lineNumber: 103,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 112,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "reset", variant: "outline", className: "px-3 py-2 rounded-md font-bold min-w-[90px] border-secondary hover:border-slate-400 text-primary", children: "Reset" }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 113,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { type: "submit", name: "intent", value: "edit", className: "bg-accent px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Submit" }, void 0, false, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 114,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/contest/EditContestantDialog.tsx",
          lineNumber: 111,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/EditContestantDialog.tsx",
        lineNumber: 62,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/admin/contest/EditContestantDialog.tsx",
        lineNumber: 61,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/EditContestantDialog.tsx",
      lineNumber: 59,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/admin/contest/EditContestantDialog.tsx",
      lineNumber: 58,
      columnNumber: 26
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/EditContestantDialog.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(EditContestantDialog, "sQwl1wpDFUpdrmuINViZ+MX9oag=", false, function() {
  return [useLoaderData, useFilePreview];
});
_c = EditContestantDialog;
var _c;
$RefreshReg$(_c, "EditContestantDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/contest/DeleteContestantDialog.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/DeleteContestantDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/DeleteContestantDialog.tsx"
  );
  import.meta.hot.lastModified = "1757765166858.9248";
}
function DeleteContestantDialog({
  disabled
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { disabled, title: "Delete contestant", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.trashIcon, className: "w-3" }, void 0, false, {
      fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { children: "Delete contestant" }, void 0, false, {
          fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogDescription, { children: "This contestant will be deleted from the records. Are you sure you want to proceed?" }, void 0, false, {
          fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
        fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
        lineNumber: 43,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c2 = DeleteContestantDialog;
var _c2;
$RefreshReg$(_c2, "DeleteContestantDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/contest/EvictContestantDialog.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/EvictContestantDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/EvictContestantDialog.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.2542";
}
function EvictContestantDialog({
  disabled,
  contestants
}) {
  _s2();
  const fetcher = useFetcher();
  const ids = contestants.map((contestant) => contestant._id).join("|");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTrigger, { disabled, title: "Evict contestant", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.downArrowIcon, className: "size-3.5" }, void 0, false, {
      fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
      lineNumber: 38,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.questionIcon }, void 0, false, {
            fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
            lineNumber: 44,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
            lineNumber: 43,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block", children: "Evict Contestants" }, void 0, false, {
              fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
              lineNumber: 47,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the eviction of these contestants" }, void 0, false, {
              fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
              lineNumber: 48,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
            lineNumber: 46,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogDescription, { className: "border-y p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-primary mb-2 block", children: "The selected contestants will not proceed to the next stage. Are you sure you want to proceed?" }, void 0, false, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 52,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "contestants_ids", value: ids }, void 0, false, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 57,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "stage_id", value: contestants[0]?.stage_id }, void 0, false, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogClose, { type: "submit", name: "intent", value: "evict", className: "bg-red-500 px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s2(EvictContestantDialog, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c3 = EvictContestantDialog;
var _c3;
$RefreshReg$(_c3, "EvictContestantDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/contest/AdmitContestantDialog.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/AdmitContestantDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/AdmitContestantDialog.tsx"
  );
  import.meta.hot.lastModified = "1760080481936.6162";
}
function AdmitContestantDialog({
  disabled,
  contestants
}) {
  _s3();
  const fetcher = useFetcher();
  const ids = contestants.map((contestant) => contestant._id).join("|");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogTrigger, { disabled, title: "Admit contestants", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-green-500 bg-green-50 text-green-500`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.upArrowIcon, className: "size-3.5" }, void 0, false, {
      fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
      lineNumber: 38,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.questionIcon }, void 0, false, {
            fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
            lineNumber: 44,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
            lineNumber: 43,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block", children: "Admit Contestants" }, void 0, false, {
              fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
              lineNumber: 47,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the promotion of these contestants" }, void 0, false, {
              fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
              lineNumber: 48,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
            lineNumber: 46,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogDescription, { className: "border-y p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-primary mb-2 block", children: "The selected contestants will be marked for promotion to the next stage." }, void 0, false, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 52,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "contestants_ids", value: ids }, void 0, false, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 57,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "stage_id", value: contestants[0]?.stage_id }, void 0, false, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogClose, { type: "submit", name: "intent", value: "admit", className: "bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s3(AdmitContestantDialog, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c4 = AdmitContestantDialog;
var _c4;
$RefreshReg$(_c4, "AdmitContestantDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/contest/ContestantTableActions.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/ContestantTableActions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/ContestantTableActions.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.187";
}
function ContestantTableActions({
  table
}) {
  const singleRowSelected = table.getFilteredSelectedRowModel().rows.length === 1;
  const rowsSelected = table.getFilteredSelectedRowModel().rows.length >= 1;
  const contestants = table.getSelectedRowModel().rows.map((row) => row.original);
  const contestant = contestants.at(0) ?? {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-4 items-center px-3 mb-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(EditContestantDialog, { disabled: !singleRowSelected, contestant }, void 0, false, {
      fileName: "app/components/admin/contest/ContestantTableActions.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DeleteContestantDialog, { disabled: !rowsSelected }, void 0, false, {
      fileName: "app/components/admin/contest/ContestantTableActions.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(EvictContestantDialog, { disabled: !rowsSelected, contestants }, void 0, false, {
      fileName: "app/components/admin/contest/ContestantTableActions.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AdmitContestantDialog, { disabled: !rowsSelected, contestants }, void 0, false, {
      fileName: "app/components/admin/contest/ContestantTableActions.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/ContestantTableActions.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c5 = ContestantTableActions;
var _c5;
$RefreshReg$(_c5, "ContestantTableActions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/contest/ContestantTable.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/ContestantTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/ContestantTable.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.2068";
}
var columns = [{
  id: "select",
  header: ({
    table
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Checkbox, { className: "h-4 w-4", checked: table.getIsAllPageRowsSelected(), onCheckedChange: (value) => {
    table.toggleAllPageRowsSelected(!value);
  }, "aria-label": "Select all" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 32,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this),
  cell: ({
    row
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex place-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Checkbox, { className: "h-4 w-4", checked: row.getIsSelected(), onCheckedChange: (value) => row.toggleSelected(!value), "aria-label": "Select row" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 39,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this),
  enableSorting: false,
  enableHiding: false
}, {
  id: "contestant",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "contestant" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this),
  accessorFn: (row) => `${row.contestant_biodata.first_name} ${row.contestant_biodata.last_name}`
}, {
  id: "dob",
  accessorFn: (row) => formatDate(new Date(row.contestant_biodata.dob))
}, {
  id: "state",
  accessorFn: (row) => row.contestant_biodata.state_of_residence
}, {
  accessorKey: "code",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "code" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 59,
    columnNumber: 9
  }, this)
}, {
  id: "s-media",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "s-media" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 64,
    columnNumber: 9
  }, this),
  accessorFn: (row) => row.vote.social_media
}, {
  id: "tally",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "tally" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 70,
    columnNumber: 9
  }, this),
  accessorFn: (row) => row.vote.tally
}, {
  id: "givaah",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "givaah" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this),
  accessorFn: (row) => row.vote.givaah
}, {
  accessorKey: "grade",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "grade" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 82,
    columnNumber: 9
  }, this),
  accessorFn: (row) => row.result.grade || "-"
}, {
  accessorKey: "is_evicted",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "status" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 88,
    columnNumber: 9
  }, this),
  cell: ({
    row
  }) => {
    const status = row.getValue("is_evicted");
    const color = status ? "red" : "green";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(StatusTag, { status: status ? "Evicted" : "Safe", color }, void 0, false, {
      fileName: "app/components/admin/contest/ContestantTable.tsx",
      lineNumber: 94,
      columnNumber: 12
    }, this);
  }
}];
function ContestantTable({
  data
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTable, { data, columns, className: "text-sm", TableActions: ContestantTableActions }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 102,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 101,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
}
_c6 = ContestantTable;
var _c6;
$RefreshReg$(_c6, "ContestantTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.contests.$contestId.$stageId.tsx
var import_actions = __toESM(require_actions(), 1);
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.contests.$contestId.$stageId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.contests.$contestId.$stageId.tsx"
  );
  import.meta.hot.lastModified = "1760080481936.6382";
}
function StageContestants() {
  _s4();
  const {
    contest,
    stage
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-start mb-16 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, false, {
        fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
        lineNumber: 121,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-lg xs:text-xl font-black text-primary capitalize", children: [
        contest.name,
        " - Stage ",
        stage.stage,
        " contestants"
      ] }, void 0, true, {
        fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
        lineNumber: 122,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
      lineNumber: 120,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "my-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ContestantTable, { data: stage.contestants }, void 0, false, {
      fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
      lineNumber: 125,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
      lineNumber: 124,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}
_s4(StageContestants, "dIH5jPv4M8JOMhJPxQhu8NoAV7o=", false, function() {
  return [useLoaderData, useNavigate];
});
_c7 = StageContestants;
var _c7;
$RefreshReg$(_c7, "StageContestants");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StageContestants as default
};
//# sourceMappingURL=/build/routes/admin.contests.$contestId.$stageId-E4BJXTB2.js.map
