import {
  CategoryInputs,
  StageInputs
} from "/build/_shared/chunk-WOZ2LMC5.js";
import {
  useFilePreview
} from "/build/_shared/chunk-JRTD7IYB.js";
import {
  require_tournament
} from "/build/_shared/chunk-R3PEAKI3.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-4HHIBCKL.js";
import {
  Select
} from "/build/_shared/chunk-VR2MBONM.js";
import "/build/_shared/chunk-26B2YPIV.js";
import {
  Cta_default
} from "/build/_shared/chunk-UYUXJ2BI.js";
import {
  no_image_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import {
  FormControl
} from "/build/_shared/chunk-OZYT4FIK.js";
import "/build/_shared/chunk-LOUTNZN4.js";
import {
  require_contest
} from "/build/_shared/chunk-5XKVHEZW.js";
import {
  parseDateTimeForInput
} from "/build/_shared/chunk-577Q6RJD.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Form,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-MJSDHJ2L.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/admin.contests.$contestId._index.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_contest = __toESM(require_contest(), 1);
var import_tournament = __toESM(require_tournament(), 1);

// app/components/admin/tournament/EditContestForm.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/tournament/EditContestForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/tournament/EditContestForm.tsx"
  );
  import.meta.hot.lastModified = "1763317939837.4092";
}
function EditContestForm({
  tournaments,
  contest
}) {
  _s();
  const [fileList, setFileList] = (0, import_react2.useState)(null);
  const {
    filePreview,
    clearFilePreview,
    fileName
  } = useFilePreview(fileList);
  console.log(contest);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "max-w-[700px] mx-auto grid gap-6 sm:gap-12 text-sm", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-primary", children: "Contest Details" }, void 0, false, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-5", children: [
      filePreview ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "w-20 h-20 rounded-lg object-cover", src: filePreview, alt: "chosen image" }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 49,
        columnNumber: 32
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "w-20 h-20 rounded-lg object-cover", src: contest.image || no_image_default, alt: "Contest banner" }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 49,
        columnNumber: 125
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-start gap-2 max-xs:text-xs", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "image", className: "border-2 border-secondary text-primary cursor-pointer font-semibold py-2 px-4 rounded-lg", children: [
          "Change Photo",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "image", name: "image", type: "file", onChange: (e) => {
            setFileList(e.currentTarget.files);
          }, className: "hidden" }, void 0, false, {
            fileName: "app/components/admin/tournament/EditContestForm.tsx",
            lineNumber: 53,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/tournament/EditContestForm.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: fileName || "PNG, JPG (max. 1440x900px)" }, void 0, false, {
            fileName: "app/components/admin/tournament/EditContestForm.tsx",
            lineNumber: 58,
            columnNumber: 25
          }, this),
          fileName ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.closeIcon, onClick: clearFilePreview, className: "text-red-600 cursor-pointer" }, void 0, false, {
            fileName: "app/components/admin/tournament/EditContestForm.tsx",
            lineNumber: 59,
            columnNumber: 37
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/components/admin/tournament/EditContestForm.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "tournament", id: "tournament", label: "Tournament", className: "uppercase", defaultValue: contest.tournament_unique_id, required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select a tournament" }, void 0, false, {
          fileName: "app/components/admin/tournament/EditContestForm.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this),
        tournaments.map((tournament) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: tournament.id, children: tournament.id }, tournament.id, false, {
          fileName: "app/components/admin/tournament/EditContestForm.tsx",
          lineNumber: 66,
          columnNumber: 52
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Contest Name", placeholder: "Enter contest name", id: "name", name: "name", defaultValue: contest.name, required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 3, labelClassNames: "sm:col-span-2", labelText: "Contest Description", placeholder: "Enter contest description", id: "description", name: "description", defaultValue: contest.desc, required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Unique Contest ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", defaultValue: contest.id, required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "datetime-local", labelText: "Registration Deadline", id: "reg_deadline", name: "reg_deadline", defaultValue: parseDateTimeForInput(contest.reg_deadline), required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "datetime-local", labelText: "Contest Start Date", id: "start_date", name: "start_date", defaultValue: parseDateTimeForInput(contest.start_date), required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "datetime-local", labelText: "Contest End Date", id: "end_date", name: "end_date", defaultValue: parseDateTimeForInput(contest.end_date), required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 2, labelText: "Contest Prizes", labelClassNames: "sm:col-span-2", placeholder: "Enter contest prizes", id: "prizes", name: "prizes", defaultValue: contest.prizes, required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CategoryInputs, { categories: Object.values(contest.categories) }, void 0, false, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StageInputs, { stages: contest.stages }, contest.stages.length, false, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "grid gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "text-lg mb-4 font-bold", children: "Submission Guidelines" }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 4, labelText: "Submission Requirements", placeholder: "Enter text here...", id: "sub_req", name: "sub_req", defaultValue: contest.sub_req, required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 4, labelText: "Terms & Conditions", placeholder: "Enter text here...", id: "tnc", name: "tnc", defaultValue: contest.terms_cond, required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 4, labelText: "Additional Information", placeholder: "Enter text here...", id: "add_info", name: "add_info", defaultValue: contest.add_info, required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex max-sm:flex-col justify-end gap-3 sm:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "reset", onClick: clearFilePreview, className: "px-8 py-2 rounded-lg font-medium border-secondary hover:border-slate-400 text-primary", variant: "outline", children: "Reset Form" }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 88,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", name: "contestId", value: contest._id, className: "px-8 py-2 rounded-lg font-medium", children: "Edit Contest" }, void 0, false, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 89,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/tournament/EditContestForm.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(EditContestForm, "u4ZD8lZk0B6dTLv7YtrmcWQCT1w=", false, function() {
  return [useFilePreview];
});
_c = EditContestForm;
var _c;
$RefreshReg$(_c, "EditContestForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.contests.$contestId._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.contests.$contestId._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.contests.$contestId._index.tsx"
  );
  import.meta.hot.lastModified = "1760080481943.2832";
}
function EditContest() {
  _s2();
  const {
    tournaments,
    contest
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, false, {
        fileName: "app/routes/admin.contests.$contestId._index.tsx",
        lineNumber: 138,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-black text-primary", children: "Edit Contest" }, void 0, false, {
        fileName: "app/routes/admin.contests.$contestId._index.tsx",
        lineNumber: 139,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.contests.$contestId._index.tsx",
      lineNumber: 137,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EditContestForm, { contest, tournaments }, void 0, false, {
      fileName: "app/routes/admin.contests.$contestId._index.tsx",
      lineNumber: 141,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.contests.$contestId._index.tsx",
    lineNumber: 136,
    columnNumber: 10
  }, this);
}
_s2(EditContest, "R7ViDzdEuW+OALCbaFcslUjSWlM=", false, function() {
  return [useLoaderData, useNavigate];
});
_c2 = EditContest;
var _c2;
$RefreshReg$(_c2, "EditContest");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditContest as default
};
//# sourceMappingURL=/build/routes/admin.contests.$contestId._index-D3ZRV6TD.js.map
