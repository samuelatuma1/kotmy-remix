import {
  RoundCta_default
} from "/build/_shared/chunk-3ULBCPB3.js";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "/build/_shared/chunk-PFWQNT33.js";
import {
  Cta_default
} from "/build/_shared/chunk-NKBOX2WC.js";
import {
  FormControl
} from "/build/_shared/chunk-LBAJGJUG.js";
import {
  cn
} from "/build/_shared/chunk-LOUTNZN4.js";
import {
  DataTable,
  DataTableColumnHeader
} from "/build/_shared/chunk-KRCVZZ47.js";
import {
  parseDateTimeForInput
} from "/build/_shared/chunk-577Q6RJD.js";
import {
  Pagination
} from "/build/_shared/chunk-B65OOJCS.js";
import {
  StatusTag
} from "/build/_shared/chunk-XDSNFUTZ.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-OU5XO7XO.js";
import {
  require_classnames
} from "/build/_shared/chunk-ZE6ILQUM.js";
import {
  Form,
  Link2 as Link,
  useFetcher
} from "/build/_shared/chunk-RJTUOXH3.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/admin/contest/DeleteContestDialog.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/DeleteContestDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/DeleteContestDialog.tsx"
  );
  import.meta.hot.lastModified = "1760080481926.9026";
}
function DeleteContestDialog({
  contest,
  disabled
}) {
  _s();
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { disabled, title: "Delete contest", className: cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.trashIcon, className: "w-3" }, void 0, false, {
      fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.questionIcon }, void 0, false, {
            fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
            lineNumber: 43,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
            lineNumber: 42,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: "Delete contest" }, void 0, false, {
              fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
              lineNumber: 46,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the deletion of this contest" }, void 0, false, {
              fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
              lineNumber: 47,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
            lineNumber: 45,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
          lineNumber: 41,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "border-y p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary mb-2 block", children: [
            "Are you sure you want to delete ",
            contest.name,
            " contest?"
          ] }, void 0, true, {
            fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
            lineNumber: 51,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-admin-pry", children: "This action is irreversible and will permanently delete this contest." }, void 0, false, {
            fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
            lineNumber: 52,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "contestId", value: contest._id }, void 0, false, {
          fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
          lineNumber: 57,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { type: "submit", name: "intent", value: "delete", className: "bg-red-500 px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
          fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(DeleteContestDialog, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c = DeleteContestDialog;
var _c;
$RefreshReg$(_c, "DeleteContestDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/contest/MigrateStageDialog.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/MigrateStageDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/MigrateStageDialog.tsx"
  );
  import.meta.hot.lastModified = "1760080481926.8135";
}
function MigrateStageDialog({
  contest,
  disabled
}) {
  _s2();
  const fetcher = useFetcher();
  const stages = contest.stages.toSorted((a, b) => a.stage - b.stage).reduce((res, stage, idx, arr) => {
    if (stage.active && !res[0]) {
      res[0] = stage;
      res[1] = arr.at(idx + 1) ?? null;
    }
    return res;
  }, [null, null]);
  let activeStageIdx = contest.stages.findIndex((v) => v.active);
  let activeStageNotTheLastStage = activeStageIdx !== -1 && activeStageIdx < contest.stages.length - 1;
  const cannotMigrate = disabled || !stages.at(0) || !stages.at(1) || !activeStageNotTheLastStage;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RoundCta_default, { disabled: cannotMigrate, icon: icons.doubleArrowRightIcon, className: "border-indigo-700 bg-indigo-100 text-indigo-700", title: "Migrate stage" }, void 0, false, {
      fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.questionIcon }, void 0, false, {
            fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
            lineNumber: 51,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
            lineNumber: 50,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block", children: "Migrate stage" }, void 0, false, {
              fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
              lineNumber: 54,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-normal text-base text-admin-pry", children: "Confirm migration to the next stage" }, void 0, false, {
              fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
              lineNumber: 55,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
            lineNumber: 53,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 49,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogDescription, { className: "border-y p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-primary block", children: [
          "This will migrate all safe contestants from stage ",
          stages[0]?.stage,
          " to stage ",
          stages[1]?.stage,
          ". Proceed?"
        ] }, void 0, true, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 58,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "from", value: stages[0]?._id }, void 0, false, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 66,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "to", value: stages[1]?._id }, void 0, false, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 67,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { type: "submit", name: "intent", value: "migrate", className: "bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 68,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s2(MigrateStageDialog, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c2 = MigrateStageDialog;
var _c2;
$RefreshReg$(_c2, "MigrateStageDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/contest/ContestTableActions.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/ContestTableActions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/ContestTableActions.tsx"
  );
  import.meta.hot.lastModified = "1760080481935.6133";
}
function ContestTableActions({
  rowData
}) {
  _s3();
  const activeStageId = rowData.stages.find((stage) => stage.active || stage.status === "ongoing")?._id ?? rowData.stages.toSorted((prev, next) => next.stage - prev.stage).find((stage) => stage.status === "completed")?._id ?? rowData.stages.toSorted((prev, next) => prev.stage - next.stage).at(0)?._id;
  const linkToContestants = activeStageId ? `/admin/contests/${rowData.id}/${activeStageId}` : "";
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RoundCta_default, { icon: icons.contestantsIcon, element: "link", to: linkToContestants, "aria-disabled": !linkToContestants, className: "border-green-500 bg-green-50 text-green-500", title: "View current stage" }, void 0, false, {
      fileName: "app/components/admin/contest/ContestTableActions.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RoundCta_default, { icon: icons.editIcon, element: "link", to: `/admin/contests/${rowData.id}`, className: "border-[#262626] bg-[#F7F7F8] text-primary", title: "Edit contest" }, void 0, false, {
      fileName: "app/components/admin/contest/ContestTableActions.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(fetcher.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "contestId", value: rowData._id }, void 0, false, {
        fileName: "app/components/admin/contest/ContestTableActions.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RoundCta_default, { icon: icons.viewIcon, name: "intent", value: "toggle_registration", className: "border-yellow-700 bg-yellow-100 text-yellow-700", "aria-disabled": fetcher.state != "idle", title: "Open/Close registration" }, void 0, false, {
        fileName: "app/components/admin/contest/ContestTableActions.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/ContestTableActions.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MigrateStageDialog, { contest: rowData }, void 0, false, {
      fileName: "app/components/admin/contest/ContestTableActions.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DeleteContestDialog, { contest: rowData }, void 0, false, {
      fileName: "app/components/admin/contest/ContestTableActions.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/ContestTableActions.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s3(ContestTableActions, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c3 = ContestTableActions;
var _c3;
$RefreshReg$(_c3, "ContestTableActions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/contest/EditStageForm.tsx
var import_react4 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/components/admin/contest/GradeInputs.tsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/GradeInputs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/GradeInputs.tsx"
  );
  import.meta.hot.lastModified = "1757765166859.471";
}
function GradeInputs({
  grade
}) {
  const [grd, [min, max]] = grade;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block font-bold", children: "Grade" }, void 0, false, {
        fileName: "app/components/admin/contest/GradeInputs.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: (0, import_classnames.default)(`h-full w-[40px] px-2 py-1 flex items-center justify-center bg-grade-${grd} rounded-md text-white font-black`), children: grd }, void 0, false, {
        fileName: "app/components/admin/contest/GradeInputs.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/GradeInputs.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FormControl, { as: "input", id: `min_${grd}`, name: `min_${grd}`, labelText: "Min. Score", type: "number", min: 0, defaultValue: min }, void 0, false, {
      fileName: "app/components/admin/contest/GradeInputs.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FormControl, { as: "input", id: `max_${grd}`, name: `max_${grd}`, labelText: "Max. Score", type: "number", min: 0, defaultValue: max }, void 0, false, {
      fileName: "app/components/admin/contest/GradeInputs.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/GradeInputs.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c4 = GradeInputs;
var _c4;
$RefreshReg$(_c4, "GradeInputs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/contest/EditStageForm.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/EditStageForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/EditStageForm.tsx"
  );
  import.meta.hot.lastModified = "1766126389374.5903";
}
function Stages({
  row
}) {
  _s4();
  const [selectedStage, setSelectedStage] = (0, import_react4.useState)(row.original.stages[0] ?? null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-3 flex gap-2 border border-disabled bg-[#F6F8FA] rounded-md", children: row.original.stages.length ? row.original.stages.map((stage) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Cta_default, { element: "button", variant: "outline", onClick: () => setSelectedStage(stage), className: (0, import_classnames2.default)("px-5 py-1 text-xs text-admin-pry rounded-md", {
      "border-secondary bg-white": selectedStage?.stage === stage.stage,
      "border-transparent": selectedStage?.stage !== stage.stage
    }), children: [
      "Stage ",
      stage.stage
    ] }, stage._id, true, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 37,
      columnNumber: 72
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "There are no stages." }, void 0, false, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 40,
      columnNumber: 40
    }, this) }, void 0, false, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    selectedStage ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(EditStageForm, { stage: selectedStage, contestId: row.original.id, closeForm: row.getToggleExpandedHandler() }, selectedStage._id, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ToggleStageBonus, { stage: selectedStage }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 42,
      columnNumber: 24
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/EditStageForm.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s4(Stages, "CL29nRPY5ULkXHP7cc+M1LFBZx4=");
_c5 = Stages;
function EditStageForm({
  stage,
  contestId,
  closeForm
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "POST", className: "text-primary text-xs flex flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("fieldset", { className: "py-4 grid grid-cols-4 gap-3 border-b", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "start_date", name: "start_date", labelText: "Stage Start Date", type: "datetime-local", defaultValue: parseDateTimeForInput(stage.start_date) }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "end_date", name: "end_date", labelText: "Stage End Date", type: "datetime-local", defaultValue: parseDateTimeForInput(stage.end_date) }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "weight", name: "weight", labelText: "Stage Weight (%)", type: "number", min: 0, defaultValue: stage.weight }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "success_count", name: "success_count", labelText: "Success Count", type: "number", min: 0, defaultValue: stage.success_count }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("fieldset", { className: "pt-2 pb-4 grid grid-cols-4 gap-3 border-b", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("legend", { className: "font-bold text-sm text-admin-pry w-max", children: [
        "Stage Rates ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "font-normal", children: "(must sum up to 100%)" }, void 0, false, {
          fileName: "app/components/admin/contest/EditStageForm.tsx",
          lineNumber: 64,
          columnNumber: 80
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "social_media_rate", name: "social_media_rate", labelText: "Social Media Rate (%)", type: "number", min: 0, defaultValue: stage.rates.social_media.amount }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "tally_rate", name: "tally_rate", labelText: "Tally Rate (%)", type: "number", min: 0, defaultValue: stage.rates.tally }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "givaah_rate", name: "givaah_rate", labelText: "Givaah Rate (%)", type: "number", min: 0, defaultValue: stage.rates.givaah }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "judge_rate", name: "judge_rate", labelText: "Judge Rate (%)", type: "number", min: 0, defaultValue: stage.rates.judge }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "social_media_bonus_rate", name: "social_media_bonus_rate", labelText: "Social Media Bonus Rate (%)", type: "number", min: 0, defaultValue: stage.rates.social_media_bonus }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "tally_bonus_rate", name: "tally_bonus_rate", labelText: "Tally Bonus Rate (%)", type: "number", min: 0, defaultValue: stage.rates.tally_bonus }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "givaah_bonus_rate", name: "givaah_bonus_rate", labelText: "Givaah Bonus Rate (%)", type: "number", min: 0, defaultValue: stage.rates.givaah_bonus }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "judge_bonus_rate", name: "judge_bonus_rate", labelText: "Judge Bonus Rate (%)", type: "number", min: 0, defaultValue: stage.rates.judge_bonus }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("fieldset", { className: "pt-2 py-4 grid grid-cols-2 gap-3 border-b", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("legend", { className: "font-bold text-sm text-admin-pry", children: "Grades" }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      Object.entries(stage.grade).map((grade) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GradeInputs, { grade }, grade[0], false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 77,
        columnNumber: 51
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between items-center gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `${contestId}/${stage._id}`, className: "text-accent hover:text-accent/80 font-semibold", children: "View contestants" }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-end gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Cta_default, { element: "button", type: "button", variant: "outline", onClick: closeForm, className: "px-3 py-2 rounded-md font-bold min-w-[90px] border-secondary hover:border-slate-400 text-primary", children: "Close Form" }, void 0, false, {
          fileName: "app/components/admin/contest/EditStageForm.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Cta_default, { element: "button", type: "submit", name: "intent", value: "update_stage", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Submit" }, void 0, false, {
          fileName: "app/components/admin/contest/EditStageForm.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "social_media_type", value: stage.rates.social_media.type }, void 0, false, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "stageId", value: stage._id }, void 0, false, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/EditStageForm.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_c22 = EditStageForm;
function ToggleStageBonus({
  stage
}) {
  _s22();
  const [enabled, setEnabled] = (0, import_react4.useState)(stage.enable_bonus);
  const [time] = (0, import_react4.useState)(stage.bonus_reset_time || "00:00:00");
  const [hours, minutes] = time.split(":");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "POST", className: "text-primary text-xs flex flex-col gap-4 py-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("fieldset", { className: "py-4 grid grid-cols-4 gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("legend", { className: "font-bold text-sm text-admin-pry w-max col-span-4", children: "Stage Bonus" }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 101,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "enable_bonus", className: "font-medium", children: "Enable Bonus" }, void 0, false, {
          fileName: "app/components/admin/contest/EditStageForm.tsx",
          lineNumber: 103,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "checkbox", id: "enable", name: "enable", checked: enabled, onChange: (e) => setEnabled(e.target.checked), className: "h-5 w-5 rounded-md", value: "true" }, void 0, false, {
          fileName: "app/components/admin/contest/EditStageForm.tsx",
          lineNumber: 104,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "hours", name: "hours", labelText: "Reset Time (Hours)", type: "number", min: 0, max: 23, defaultValue: hours }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", id: "minutes", name: "minutes", labelText: "Reset Time (Minutes)", type: "number", min: 0, max: 59, defaultValue: minutes }, void 0, false, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 107,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Cta_default, { element: "button", type: "submit", name: "intent", value: "toggle_stage_bonus", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Enable/Disable Bonus" }, void 0, false, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 111,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 110,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "stage_id", value: stage._id }, void 0, false, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 113,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/EditStageForm.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s22(ToggleStageBonus, "mQiBxoJk3+7mPgWV0wql/JgrnAw=");
_c32 = ToggleStageBonus;
var _c5;
var _c22;
var _c32;
$RefreshReg$(_c5, "Stages");
$RefreshReg$(_c22, "EditStageForm");
$RefreshReg$(_c32, "ToggleStageBonus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/contest/ContestTable.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/contest/ContestTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/contest/ContestTable.tsx"
  );
  import.meta.hot.lastModified = "1760080481935.5989";
}
var columns = [{
  id: "expander",
  header: () => null,
  cell: ({
    row
  }) => row.getCanExpand() ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { title: "expand row", onClick: row.getToggleExpandedHandler(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Svg, { src: icons.arrowDownIcon, className: row.getIsExpanded() ? "rotate-180" : "" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 35,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 34,
    columnNumber: 30
  }, this) : null
}, {
  accessorKey: "id",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "id" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this),
  cell: ({
    row
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "uppercase", children: row.getValue("id") }, void 0, false, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 44,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "name",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "contest" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 49,
    columnNumber: 9
  }, this),
  cell: ({
    row
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "uppercase line-clamp-1", children: row.getValue("name") }, void 0, false, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "timeline",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "timeline" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this),
  cell: ({
    row
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "block whitespace-nowrap", children: row.original.start_date.split(".")[0].replace("T", ", ") }, void 0, false, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "block whitespace-nowrap", children: row.original.end_date.split(".")[0].replace("T", ", ") }, void 0, false, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 62,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this)
}, {
  accessorKey: "status",
  header: ({
    column
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTableColumnHeader, { column, title: "status" }, void 0, false, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 68,
    columnNumber: 9
  }, this),
  cell: ({
    row
  }) => {
    const status = row.getValue("status").split("_").join(" ");
    const color = status === "registering" ? "yellow" : status === "ongoing" ? "green" : status === "completed" ? "red" : "gray";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(StatusTag, { status, color }, void 0, false, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 74,
      columnNumber: 12
    }, this);
  }
}, {
  id: "actions",
  header: "actions",
  cell: ({
    row
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContestTableActions, { rowData: row.original }, void 0, false, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this)
}];
function ContestTable({
  data,
  pagination
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataTable, { data, columns, expandRows: true, getRowCanExpand: () => true, SubComponent: Stages, className: "max-xs:text-xs text-sm" }, void 0, false, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 89,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 88,
      columnNumber: 13
    }, this),
    pagination ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 }, void 0, false, {
          fileName: "app/components/admin/contest/ContestTable.tsx",
          lineNumber: 93,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/contest/ContestTable.tsx",
        lineNumber: 92,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Pagination, {}, void 0, false, {
        fileName: "app/components/admin/contest/ContestTable.tsx",
        lineNumber: 95,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 91,
      columnNumber: 27
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 87,
    columnNumber: 10
  }, this);
}
_c6 = ContestTable;
var _c6;
$RefreshReg$(_c6, "ContestTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ContestTable
};
//# sourceMappingURL=/build/_shared/chunk-6YFFW2HY.js.map
