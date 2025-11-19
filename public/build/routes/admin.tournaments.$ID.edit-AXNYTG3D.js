import {
  useFilePreview
} from "/build/_shared/chunk-ITNAOETV.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-B7QPMP4F.js";
import {
  Cta_default
} from "/build/_shared/chunk-JSO2QJI7.js";
import {
  FormControl
} from "/build/_shared/chunk-VY7DZHMV.js";
import "/build/_shared/chunk-LOUTNZN4.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  require_tournament
} from "/build/_shared/chunk-R3PEAKI3.js";
import {
  no_image_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Form,
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

// app/routes/admin.tournaments.$ID.edit.tsx
var import_node = __toESM(require_node(), 1);

// app/components/admin/tournament/EditTournamentForm.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/tournament/EditTournamentForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/tournament/EditTournamentForm.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.298";
}
function EditTournamentForm({
  tournament
}) {
  _s();
  const [fileList, setFileList] = (0, import_react2.useState)(null);
  const {
    filePreview,
    clearFilePreview,
    fileName
  } = useFilePreview(fileList);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "max-w-xl mx-auto grid gap-6 sm:gap-12 text-sm", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl xs:text-2xl font-bold text-primary", children: "Edit Tournament" }, void 0, false, {
      fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3 sm:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-5", children: [
        filePreview ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "w-20 h-20 rounded-lg object-cover", src: filePreview, alt: "chosen image" }, void 0, false, {
          fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
          lineNumber: 44,
          columnNumber: 36
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "w-20 h-20 rounded-lg object-cover", src: tournament.image || no_image_default, alt: "Tournament banner" }, void 0, false, {
          fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
          lineNumber: 44,
          columnNumber: 129
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-start gap-2 max-xs:text-xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "image", className: "border-2 border-secondary text-primary cursor-pointer font-semibold py-2 px-4 rounded-lg", children: [
            "Change Photo",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "image", name: "image", type: "file", onChange: (e) => {
              setFileList(e.currentTarget.files);
            }, className: "hidden" }, void 0, false, {
              fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
              lineNumber: 48,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
            lineNumber: 46,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: fileName || "PNG, JPG (max. 1440x900px)" }, void 0, false, {
              fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
              lineNumber: 53,
              columnNumber: 29
            }, this),
            fileName ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.closeIcon, onClick: clearFilePreview, className: "text-red-600 cursor-pointer" }, void 0, false, {
              fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
              lineNumber: 54,
              columnNumber: 41
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
            lineNumber: 52,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Tournament Name", placeholder: "Enter tournament name", id: "name", name: "name", defaultValue: tournament.name, required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Tournament Unique ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", defaultValue: tournament.id, required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 3, labelText: "Tournament Description", placeholder: "Enter tournament description", id: "description", name: "description", defaultValue: tournament.description, required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex max-sm:flex-col justify-end gap-3 sm:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", onClick: clearFilePreview, type: "reset", className: "px-8 py-2 rounded-lg font-medium border-secondary active:border-accent sm:hover:border-accent", variant: "outline", children: "Reset" }, void 0, false, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", name: "tournamentId", value: tournament._id, className: "px-8 py-2 rounded-lg font-medium", children: "Edit Tournament" }, void 0, false, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(EditTournamentForm, "u4ZD8lZk0B6dTLv7YtrmcWQCT1w=", false, function() {
  return [useFilePreview];
});
_c = EditTournamentForm;
var _c;
$RefreshReg$(_c, "EditTournamentForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.tournaments.$ID.edit.tsx
var import_session = __toESM(require_session(), 1);
var import_tournament = __toESM(require_tournament(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.tournaments.$ID.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.tournaments.$ID.edit.tsx"
  );
  import.meta.hot.lastModified = "1760080481961.0425";
}
function EditTournament() {
  _s2();
  const {
    tournament
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, false, {
        fileName: "app/routes/admin.tournaments.$ID.edit.tsx",
        lineNumber: 107,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-black text-primary", children: "Edit Tournament" }, void 0, false, {
        fileName: "app/routes/admin.tournaments.$ID.edit.tsx",
        lineNumber: 108,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tournaments.$ID.edit.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EditTournamentForm, { tournament }, void 0, false, {
      fileName: "app/routes/admin.tournaments.$ID.edit.tsx",
      lineNumber: 110,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tournaments.$ID.edit.tsx",
    lineNumber: 105,
    columnNumber: 10
  }, this);
}
_s2(EditTournament, "56RUMRPxx7YeA5Tb/JDYUJP9HPI=", false, function() {
  return [useLoaderData, useNavigate];
});
_c2 = EditTournament;
var _c2;
$RefreshReg$(_c2, "EditTournament");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditTournament as default
};
//# sourceMappingURL=/build/routes/admin.tournaments.$ID.edit-AXNYTG3D.js.map
