import {
  require_contestant
} from "/build/_shared/chunk-2FDPDHFG.js";
import {
  DragnDrop
} from "/build/_shared/chunk-RLEHHFFO.js";
import "/build/_shared/chunk-WQFJ2CRD.js";
import {
  Button
} from "/build/_shared/chunk-FXW5HQF7.js";
import {
  nigerianStates
} from "/build/_shared/chunk-ZBCNQQYM.js";
import {
  ContestTimer
} from "/build/_shared/chunk-L77OA2DX.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-RG2STY4V.js";
import "/build/_shared/chunk-KWJHYQH5.js";
import {
  no_image_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import "/build/_shared/chunk-NOEFVVE2.js";
import "/build/_shared/chunk-4PSCNRID.js";
import {
  FormControl
} from "/build/_shared/chunk-LBAJGJUG.js";
import "/build/_shared/chunk-2K2NFQ32.js";
import "/build/_shared/chunk-ULL45DVV.js";
import "/build/_shared/chunk-AV2RONJM.js";
import "/build/_shared/chunk-N5XOLCME.js";
import "/build/_shared/chunk-CMHVCBDB.js";
import "/build/_shared/chunk-LOUTNZN4.js";
import {
  StatusTag
} from "/build/_shared/chunk-XDSNFUTZ.js";
import "/build/_shared/chunk-OU5XO7XO.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-RJTUOXH3.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx
var import_node = __toESM(require_node(), 1);
var import_contestant = __toESM(require_contestant(), 1);
var import_session = __toESM(require_session(), 1);

// app/components/public/contests/StageUploadForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/StageUploadForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/StageUploadForm.tsx"
  );
  import.meta.hot.lastModified = "1760080481943.2358";
}
function StageUploadForm({
  contest,
  contestant,
  hash
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", encType: "multipart/form-data", className: "bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-satoshi-bold", children: "Upload your photo for the next stage." }, void 0, false, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "First Name", id: "first_name", name: "first_name", disabled: !!contestant, placeholder: "Enter your first name", required: true, defaultValue: contestant?.contestant_biodata?.first_name }, void 0, false, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Last Name", id: "last_name", name: "last_name", disabled: !!contestant, placeholder: "Enter your last name", required: true, defaultValue: contestant?.contestant_biodata?.last_name }, void 0, false, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Email Address", id: "email", name: "email", disabled: !!contestant, placeholder: "Enter your email address", required: true, defaultValue: contestant?.contestant_biodata?.email }, void 0, false, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "date", labelText: "Date of Birth", id: "dob", name: "dob", disabled: !!contestant, placeholder: "dd/mm/yyyy", max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], required: true, defaultValue: contestant?.contestant_biodata?.dob?.split("T")[0] }, void 0, false, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "gender", className: "font-bold flex flex-col", children: [
        "Gender",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "sex", required: true, value: contestant?.contestant_biodata?.sex, disabled: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Gender" }, void 0, false, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 48,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 47,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }, void 0, false, {
              fileName: "app/components/public/contests/StageUploadForm.tsx",
              lineNumber: 51,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" }, void 0, false, {
              fileName: "app/components/public/contests/StageUploadForm.tsx",
              lineNumber: 52,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 50,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 46,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "state_of_residence", className: "font-bold flex flex-col", children: [
        "State of Residence",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "state_of_residence", required: true, value: contestant?.contestant_biodata?.state_of_residence, disabled: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a state" }, void 0, false, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 59,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 58,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: Object.entries(nigerianStates).map(([key, val]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: val }, key, false, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 62,
            columnNumber: 81
          }, this)) }, void 0, false, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 61,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "tel", labelText: "Whatsapp Number", id: "whatsapp_no", name: "whatsapp_no", disabled: true, placeholder: "Enter your whatsapp number", required: true, defaultValue: contestant?.contestant_biodata?.whatsapp_no }, void 0, false, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "category", className: "font-bold flex flex-col", children: [
        "Category",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "category", required: !!contest.categories.length, defaultValue: contestant?.category, disabled: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a category" }, void 0, false, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 72,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 71,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: contest.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: category, className: "focus:bg-blue-700/25", children: category }, category, false, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 75,
            columnNumber: 65
          }, this)) }, void 0, false, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 74,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { labelText: "Upload Image", name: "contestant_image", required: true }, void 0, false, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "hash", value: hash }, void 0, false, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { element: "button", type: "submit", name: "intent", value: "stage_upload", className: "md:self-end", children: "Submit" }, void 0, false, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/StageUploadForm.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = StageUploadForm;
var _c;
$RefreshReg$(_c, "StageUploadForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx"
  );
  import.meta.hot.lastModified = "1760080481943.923";
}
function StageMediaUpload() {
  _s();
  const contestFromCode = useLoaderData();
  const contest = contestFromCode?.contest;
  const stage = contestFromCode?.contest?.stages[0];
  const hash = contestFromCode?.hash ?? "";
  const color = contest?.status === "registering" ? "yellow" : contest?.status === "ongoing" ? "green" : contest?.status === "completed" ? "red" : "gray";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "grow", children: contest ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3 uppercase", children: contest.name }, void 0, false, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-satoshi-medium", children: contest.desc }, void 0, false, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 grid grid-cols-2 gap-2 max-w-4xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Status" }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 98,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StatusTag, { status: contest.status, color }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 99,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 102,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 flex-wrap capitalize", children: contest.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
              "~ ",
              category
            ] }, category, true, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 106,
              columnNumber: 57
            }, this)) }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 105,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 110,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block", children: contest.prizes }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 111,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContestTimer, { deadline: new Date(contest.end_date), title: "contest ends in" }, void 0, false, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: contest.image || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "my-10 flex flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "font-bold text-2xl textacc", children: [
        "Stage ",
        stage?.stage,
        " Form"
      ] }, void 0, true, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
        lineNumber: 120,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "wrapper flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StageUploadForm, { contest, contestant: contest.stages[0]?.contestants?.[0], hash }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
        lineNumber: 125,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
    lineNumber: 87,
    columnNumber: 18
  }, this) : null }, void 0, false, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
    lineNumber: 86,
    columnNumber: 10
  }, this);
}
_s(StageMediaUpload, "GmqUCjwehbejoxnmGv1BJgmwX5I=", false, function() {
  return [useLoaderData];
});
_c2 = StageMediaUpload;
var _c2;
$RefreshReg$(_c2, "StageMediaUpload");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StageMediaUpload as default
};
//# sourceMappingURL=/build/routes/_public.contests.$tournamentId.$contestId.stage_upload-EPKHFBK7.js.map
