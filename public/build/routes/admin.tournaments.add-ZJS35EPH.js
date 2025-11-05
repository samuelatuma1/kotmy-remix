import {
  RoundCta_default
} from "/build/_shared/chunk-B7QPMP4F.js";
import {
  DragnDrop
} from "/build/_shared/chunk-OZIKQQQN.js";
import "/build/_shared/chunk-WQFJ2CRD.js";
import {
  Cta_default
} from "/build/_shared/chunk-JSO2QJI7.js";
import {
  FormControl
} from "/build/_shared/chunk-VY7DZHMV.js";
import "/build/_shared/chunk-LOUTNZN4.js";
import {
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  require_tournament
} from "/build/_shared/chunk-R3PEAKI3.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Form,
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
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/admin.tournaments.add.tsx
var import_node = __toESM(require_node(), 1);

// app/components/admin/tournament/CreateTournamentForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/tournament/CreateTournamentForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/tournament/CreateTournamentForm.tsx"
  );
  import.meta.hot.lastModified = "1757765166859.988";
}
function CreateTournamentForm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "max-w-xl mx-auto grid gap-6 sm:gap-12", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl xs:text-2xl font-bold text-primary", children: "Create New Tournament" }, void 0, false, {
      fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3 sm:gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Tournament Name", placeholder: "Enter tournament name", id: "name", name: "name", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Tournament Unique ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", rows: 3, labelText: "Tournament Description", placeholder: "Enter tournament description", id: "description", name: "description", required: true }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { labelText: "Tournament Image", name: "image" }, void 0, false, {
        fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "px-8 py-2 rounded-lg font-medium max-sm:grow", children: "Create Tournament" }, void 0, false, {
      fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = CreateTournamentForm;
var _c;
$RefreshReg$(_c, "CreateTournamentForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.tournaments.add.tsx
var import_session = __toESM(require_session(), 1);
var import_tournament = __toESM(require_tournament(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.tournaments.add.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.tournaments.add.tsx"
  );
  import.meta.hot.lastModified = "1760080481943.3333";
}
function AddTournament() {
  _s();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, false, {
        fileName: "app/routes/admin.tournaments.add.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-black text-primary", children: "Create Tournament" }, void 0, false, {
        fileName: "app/routes/admin.tournaments.add.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tournaments.add.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CreateTournamentForm, {}, void 0, false, {
      fileName: "app/routes/admin.tournaments.add.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tournaments.add.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(AddTournament, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c2 = AddTournament;
var _c2;
$RefreshReg$(_c2, "AddTournament");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddTournament as default
};
//# sourceMappingURL=/build/routes/admin.tournaments.add-ZJS35EPH.js.map
