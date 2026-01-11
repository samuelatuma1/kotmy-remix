import {
  Select
} from "/build/_shared/chunk-XYTHVHY4.js";
import {
  socials
} from "/build/_shared/chunk-HRBSV64D.js";
import {
  FormControl
} from "/build/_shared/chunk-LBAJGJUG.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-OU5XO7XO.js";
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

// app/components/admin/tournament/CategoryInputs.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/tournament/CategoryInputs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/tournament/CategoryInputs.tsx"
  );
  import.meta.hot.lastModified = "1757765166859.746";
}
function CategoryInputs({
  categories
}) {
  _s();
  const [newCategory, setNewCategory] = (0, import_react.useState)("");
  const [catogories, setCategories] = (0, import_react.useState)(categories ?? []);
  function addCategory() {
    if (!newCategory || catogories.includes(newCategory))
      return;
    setCategories((prev) => [...prev, newCategory]);
    setNewCategory("");
  }
  function removeCategory(category) {
    setCategories((prev) => prev.filter((cat) => cat !== category));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "Categories" }, void 0, false, {
      fileName: "app/components/admin/tournament/CategoryInputs.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-3 border border-secondary p-3 rounded-lg", children: [
      catogories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 rounded-lg border border-secondary flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "grow pointer-events-none bg-transparent", name: "category", defaultValue: category }, void 0, false, {
          fileName: "app/components/admin/tournament/CategoryInputs.tsx",
          lineNumber: 44,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.closeIcon, width: ".9em", className: "hover:text-red-400", onClick: () => removeCategory(category) }, void 0, false, {
          fileName: "app/components/admin/tournament/CategoryInputs.tsx",
          lineNumber: 46,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/admin/tournament/CategoryInputs.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this)
      ] }, category, true, {
        fileName: "app/components/admin/tournament/CategoryInputs.tsx",
        lineNumber: 43,
        columnNumber: 45
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex max-sm:flex-col gap-3 sm:gap-6 sm:items-end sm:col-span-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", placeholder: "Enter new category", id: "new_catogory", value: newCategory, onChange: (e) => setNewCategory(e.target.value) }, void 0, false, {
          fileName: "app/components/admin/tournament/CategoryInputs.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: addCategory, className: "flex gap-2 items-center whitespace-nowrap px-8 py-3 rounded-lg border border-secondary hover:border-slate-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
            fileName: "app/components/admin/tournament/CategoryInputs.tsx",
            lineNumber: 52,
            columnNumber: 25
          }, this),
          "Add Category"
        ] }, void 0, true, {
          fileName: "app/components/admin/tournament/CategoryInputs.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/CategoryInputs.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/CategoryInputs.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/tournament/CategoryInputs.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(CategoryInputs, "xZHsj7COvlNneiXgjQTrWK1rAUM=");
_c = CategoryInputs;
var _c;
$RefreshReg$(_c, "CategoryInputs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/tournament/StageInputs.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/tournament/StageInputs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/tournament/StageInputs.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.2407";
}
function reducer(stages, action) {
  if (action.type === "add") {
    return [...stages, {
      stage: (stages.at(-1)?.stage ?? 0) + 1,
      weight: 0,
      rates: {
        social_media: {
          type: "facebook",
          amount: 0
        },
        tally: 0,
        judge: 0,
        givaah: 0
      }
    }];
  } else if (action.type === "remove") {
    return stages.filter((stage) => stage.stage !== action.stageNumber || stage._id !== action.value);
  } else if (action.type === "edit_sm_type") {
    return stages.map((stage) => {
      if (stage.stage === action.stageNumber) {
        return {
          ...stage,
          rates: {
            ...stage.rates,
            social_media: {
              ...stage.rates.social_media,
              type: action.value
            }
          }
        };
      }
      return stage;
    });
  } else if (action.type === "edit_stage_number" && !stages.some((stage) => stage.stage === action.value)) {
    return stages.map((stage) => {
      if (stage.stage === action.stageNumber) {
        return {
          ...stage,
          stage: action.value
        };
      }
      return stage;
    });
  } else if (action.type === "edit_stage_weight") {
    return stages.map((stage) => {
      if (stage.stage === action.stageNumber) {
        return {
          ...stage,
          weight: action.value
        };
      }
      return stage;
    });
  }
  return stages;
}
function StageInputs({
  stages
}) {
  _s2();
  const [stagesState, dispatch] = (0, import_react2.useReducer)(reducer, stages ?? []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-bold", children: [
      "Stages ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-normal", children: "(weights must sum up to 100%)" }, void 0, false, {
        fileName: "app/components/admin/tournament/StageInputs.tsx",
        lineNumber: 90,
        columnNumber: 48
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/StageInputs.tsx",
      lineNumber: 90,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-4 border border-secondary p-3 rounded-lg", children: [
      stagesState.map((stage, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 items-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("fieldset", { className: "grow grid gap-3 sm:gap-6 sm:grid-cols-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "input", type: "number", labelText: `Stage`, id: `Stage_${index + 1}`, value: stage.stage, onChange: (e) => dispatch({
            type: "edit_stage_number",
            stageNumber: stage.stage,
            value: +e.target.value
          }) }, void 0, false, {
            fileName: "app/components/admin/tournament/StageInputs.tsx",
            lineNumber: 94,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "input", type: "number", labelText: "Stage Weight (%)", id: `weight_${index + 1}`, name: `weight_${index + 1}`, value: stage?.weight ?? 0, min: 0, onChange: (e) => dispatch({
            type: "edit_stage_weight",
            stageNumber: stage.stage,
            value: +e.target.value
          }) }, void 0, false, {
            fileName: "app/components/admin/tournament/StageInputs.tsx",
            lineNumber: 99,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { label: "Social Media", id: `social_media_${index + 1}`, name: `social_media_${index + 1}`, className: "capitalize", value: stage?.rates?.social_media.type ?? "", onChange: (e) => dispatch({
            type: "edit_sm_type",
            stageNumber: stage.stage,
            value: e.target.value
          }), children: socials.map((social) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: social, children: social }, social, false, {
            fileName: "app/components/admin/tournament/StageInputs.tsx",
            lineNumber: 109,
            columnNumber: 56
          }, this)) }, void 0, false, {
            fileName: "app/components/admin/tournament/StageInputs.tsx",
            lineNumber: 104,
            columnNumber: 29
          }, this),
          stage._id ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: `stage_${index + 1}_id`, value: stage._id }, void 0, false, {
            fileName: "app/components/admin/tournament/StageInputs.tsx",
            lineNumber: 111,
            columnNumber: 42
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 93,
          columnNumber: 25
        }, this),
        stage._id ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "m-4", title: "delete stage", name: "intent", value: stage._id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.closeIcon, width: ".9em", className: "hover:text-red-400" }, void 0, false, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 114,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 113,
          columnNumber: 38
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "m-4", value: stage._id, onClick: () => dispatch({
          type: "remove",
          stageNumber: stage.stage
        }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.closeIcon, width: ".9em", className: "hover:text-red-400" }, void 0, false, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 119,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 115,
          columnNumber: 41
        }, this)
      ] }, stage.stage, true, {
        fileName: "app/components/admin/tournament/StageInputs.tsx",
        lineNumber: 92,
        columnNumber: 52
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => dispatch({
        type: "add"
      }), className: "flex gap-2 place-self-start items-center whitespace-nowrap px-6 py-2 rounded-lg border border-secondary hover:border-slate-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 125,
          columnNumber: 21
        }, this),
        "Add Stage"
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/StageInputs.tsx",
        lineNumber: 122,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/StageInputs.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "no_of_stages", value: stagesState.length }, void 0, false, {
      fileName: "app/components/admin/tournament/StageInputs.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/tournament/StageInputs.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_s2(StageInputs, "CVYEob2oeLUW6GZHpMtENlH+a04=");
_c2 = StageInputs;
var _c2;
$RefreshReg$(_c2, "StageInputs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CategoryInputs,
  StageInputs
};
//# sourceMappingURL=/build/_shared/chunk-MK4L2E3C.js.map
