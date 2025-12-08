import {
  CategoryInputs,
  StageInputs
} from "/build/_shared/chunk-MK4L2E3C.js";
import {
  require_tournament
} from "/build/_shared/chunk-R3PEAKI3.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-3ULBCPB3.js";
import {
  Select
} from "/build/_shared/chunk-XYTHVHY4.js";
import {
  DragnDrop
} from "/build/_shared/chunk-RLEHHFFO.js";
import "/build/_shared/chunk-WQFJ2CRD.js";
import "/build/_shared/chunk-HRBSV64D.js";
import {
  Cta_default
} from "/build/_shared/chunk-NKBOX2WC.js";
import {
  FormControl
} from "/build/_shared/chunk-LBAJGJUG.js";
import "/build/_shared/chunk-LOUTNZN4.js";
import {
  require_contest
} from "/build/_shared/chunk-5XKVHEZW.js";
import {
  icons
} from "/build/_shared/chunk-OU5XO7XO.js";
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
  useNavigate,
  useSearchParams
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

// app/routes/admin.contests.add.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_tournament = __toESM(require_tournament(), 1);
var import_contest = __toESM(require_contest(), 1);

// app/components/admin/tournament/CreateContestForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/tournament/CreateContestForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/tournament/CreateContestForm.tsx"
  );
  import.meta.hot.lastModified = "1763312887130.453";
}
function CreateContestForm({
  tournaments
}) {
  _s();
  const [searchParams] = useSearchParams();
  const defaultTournament = searchParams.get("tournament") ?? void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "max-w-[700px] mx-auto my-8 grid gap-6 sm:gap-12 text-sm", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-primary", children: "Contest Details" }, void 0, false, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "tournament", id: "tournament", label: "Tournament", className: "uppercase", defaultValue: defaultTournament, required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select a tournament" }, void 0, false, {
          fileName: "app/components/admin/tournament/CreateContestForm.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this),
        tournaments.map((tournament) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: tournament.id, children: tournament.id }, tournament.id, false, {
          fileName: "app/components/admin/tournament/CreateContestForm.tsx",
          lineNumber: 41,
          columnNumber: 52
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Contest Name", placeholder: "Enter contest name", id: "name", name: "name", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 3, labelClassNames: "sm:col-span-2", labelText: "Contest Description", placeholder: "Enter contest description", id: "description", name: "description", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Unique Contest ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "datetime-local", labelText: "Registration Deadline", id: "reg_deadline", name: "reg_deadline", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "datetime-local", labelText: "Contest Start Date", id: "start_date", name: "start_date", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "datetime-local", labelText: "Contest End Date", id: "end_date", name: "end_date", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 2, labelText: "Contest Prizes", labelClassNames: "sm:col-span-2", placeholder: "Enter contest prizes", id: "prizes", name: "prizes", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { className: "sm:col-span-2", name: "image", multiple: false }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CategoryInputs, {}, void 0, false, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StageInputs, {}, void 0, false, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "grid gap-3 sm:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "text-lg mb-4 font-bold", children: "Submission Guidelines" }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 4, labelText: "Submission Requirements", placeholder: "Enter text here...", id: "sub_req", name: "sub_req", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 4, labelText: "Terms & Conditions", placeholder: "Enter text here...", id: "tnc", name: "tnc", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 4, labelText: "Additional Information", placeholder: "Enter text here...", id: "add_info", name: "add_info", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "px-8 py-2 rounded-lg font-medium max-sm:grow", children: "Create Contest" }, void 0, false, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 64,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/tournament/CreateContestForm.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(CreateContestForm, "HWxNQEGJGSlsPJ3ubBB3081mtng=", false, function() {
  return [useSearchParams];
});
_c = CreateContestForm;
var _c;
$RefreshReg$(_c, "CreateContestForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.contests.add.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.contests.add.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.contests.add.tsx"
  );
  import.meta.hot.lastModified = "1760080481943.2932";
}
function AddContest() {
  _s2();
  const {
    tournaments
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, false, {
        fileName: "app/routes/admin.contests.add.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-black text-primary", children: "Create Contest" }, void 0, false, {
        fileName: "app/routes/admin.contests.add.tsx",
        lineNumber: 76,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.contests.add.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CreateContestForm, { tournaments }, void 0, false, {
      fileName: "app/routes/admin.contests.add.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.contests.add.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s2(AddContest, "tpuTslsoIU9/whXJbn1y1532TkY=", false, function() {
  return [useLoaderData, useNavigate];
});
_c2 = AddContest;
var _c2;
$RefreshReg$(_c2, "AddContest");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddContest as default
};
//# sourceMappingURL=/build/routes/admin.contests.add-O5UWO6VG.js.map
