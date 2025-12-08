import {
  toast
} from "/build/_shared/chunk-7OO7HPYD.js";
import {
  ContestGuidelines
} from "/build/_shared/chunk-7WHPCUR6.js";
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
import "/build/_shared/chunk-XDSNFUTZ.js";
import "/build/_shared/chunk-OU5XO7XO.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Form,
  useActionData,
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
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/user.contestant.$contestantId.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.contestant.$contestantId.tsx"' + id);
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
    "app/routes/user.contestant.$contestantId.tsx"
  );
  import.meta.hot.lastModified = "1762023375642.014";
}
function useRegistrationFormController() {
  _s();
  const {
    error,
    data
  } = useLoaderData();
  const actionData = useActionData();
  console.log({
    data
  });
  const [contest, setContest] = (0, import_react2.useState)();
  const [stage, setStage] = (0, import_react2.useState)();
  const [contestant, setContestant] = (0, import_react2.useState)();
  if (error) {
    toast({
      variant: "destructive",
      title: "An error occured",
      description: error?.detail.toString() ?? "Error occured"
    });
  }
  (0, import_react2.useEffect)(() => {
    if (actionData) {
      if (actionData.error) {
        console.error(actionData.error.detail);
        toast({
          variant: "destructive",
          title: "Update Failed",
          description: actionData.error?.detail?.toString() ?? "An error occurred while updating your details."
        });
      } else if (actionData.data) {
        toast({
          variant: "default",
          // Assuming you have a 'success' variant for your toast
          title: "Update Successful!",
          description: "Your contestant details have been updated."
        });
      }
    }
  }, [actionData]);
  (0, import_react2.useEffect)(() => {
    if (data) {
      setContest(data);
      const _stage = data.stages?.[0];
      setStage(_stage);
      setContestant(_stage.contestants?.[0]);
    } else {
      toast({
        variant: "destructive",
        title: "An error occured",
        description: error?.detail.toString() ?? "Error occured"
      });
    }
  }, []);
  console.log({
    contest
  });
  return {
    contest,
    error,
    stage,
    contestant,
    actionData
  };
}
_s(useRegistrationFormController, "5sXialPb3oGVYhxZaakmldOJvrU=", false, function() {
  return [useLoaderData, useActionData];
});
function RegistrationForm() {
  _s2();
  const {
    contest,
    stage,
    contestant,
    actionData
  } = useRegistrationFormController();
  return contest ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-around", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3", children: contest.name }, void 0, false, {
        fileName: "app/routes/user.contestant.$contestantId.tsx",
        lineNumber: 179,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-satoshi-medium", children: contest.desc }, void 0, false, {
        fileName: "app/routes/user.contestant.$contestantId.tsx",
        lineNumber: 180,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestant.$contestantId.tsx",
      lineNumber: 178,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/user.contestant.$contestantId.tsx",
      lineNumber: 177,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/user.contestant.$contestantId.tsx",
      lineNumber: 176,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "sm:wrapper my-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestGuidelines, { contest }, void 0, false, {
        fileName: "app/routes/user.contestant.$contestantId.tsx",
        lineNumber: 188,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", encType: "multipart/form-data", className: "bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-satoshi-bold", children: [
          "Welcome, ",
          contestant?.contestant_biodata.first_name,
          ". You can manage your profile for ",
          contest.name,
          " here"
        ] }, void 0, true, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 190,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: contestant?.image_url || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" }, void 0, false, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 193,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "First Name", id: "first_name", name: "first_name", defaultValue: contestant?.contestant_biodata?.first_name, placeholder: "Enter your first name", required: true }, void 0, false, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 195,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Last Name", id: "last_name", name: "last_name", defaultValue: contestant?.contestant_biodata?.last_name, placeholder: "Enter your last name", required: true }, void 0, false, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 196,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 194,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Email Address", id: "email", name: "email", defaultValue: contestant?.contestant_biodata?.email, placeholder: "Enter your email address", required: true }, void 0, false, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 199,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "date", labelText: "Date of Birth", id: "dob", name: "dob", defaultValue: contestant?.contestant_biodata?.dob, placeholder: "dd/mm/yyyy", max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], required: true }, void 0, false, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 200,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 198,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "gender", className: "font-bold flex flex-col", children: [
            "Gender",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "sex", required: true, defaultValue: contestant?.contestant_biodata?.sex, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Gender" }, void 0, false, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 206,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 205,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }, void 0, false, {
                  fileName: "app/routes/user.contestant.$contestantId.tsx",
                  lineNumber: 209,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" }, void 0, false, {
                  fileName: "app/routes/user.contestant.$contestantId.tsx",
                  lineNumber: 210,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 208,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 204,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 203,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "state_of_residence", className: "font-bold flex flex-col", children: [
            "State of Residence",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "state_of_residence", required: true, defaultValue: contestant?.contestant_biodata?.state_of_residence, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a state" }, void 0, false, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 217,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 216,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: Object.entries(nigerianStates).map(([key, val]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: val }, key, false, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 220,
                columnNumber: 93
              }, this)) }, void 0, false, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 219,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 215,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 214,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 202,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "tel", labelText: "Whatsapp Number", id: "whatsapp_no", name: "whatsapp_no", placeholder: "Enter your whatsapp number", required: true, defaultValue: contestant?.contestant_biodata?.whatsapp_no }, void 0, false, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 226,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "category", className: "font-bold flex flex-col", children: [
            "Category",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "category", required: !!contest.categories.length, defaultValue: contestant?.category, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a category" }, void 0, false, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 231,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 230,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: contest.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: category, className: "focus:bg-blue-700/25", children: category }, category, false, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 234,
                columnNumber: 77
              }, this)) }, void 0, false, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 233,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 229,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 228,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 225,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { labelText: "Upload Image", name: "media", multiple: true, required: false }, void 0, false, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 239,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "contestId", value: contest._id }, void 0, false, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 240,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "contestantId", value: contestant?._id }, void 0, false, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 241,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { element: "button", type: "submit", name: "intent", value: "register", className: "md:self-end", children: "Update contestant details" }, void 0, false, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 242,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.contestant.$contestantId.tsx",
        lineNumber: 189,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestant.$contestantId.tsx",
      lineNumber: 187,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/user.contestant.$contestantId.tsx",
      lineNumber: 186,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.contestant.$contestantId.tsx",
    lineNumber: 175,
    columnNumber: 20
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: " Not found" }, void 0, false, {
    fileName: "app/routes/user.contestant.$contestantId.tsx",
    lineNumber: 247,
    columnNumber: 22
  }, this);
}
_s2(RegistrationForm, "/NHm7CsNOUoQBBgHFAbI4QdxaME=", false, function() {
  return [useRegistrationFormController];
});
_c = RegistrationForm;
var _c;
$RefreshReg$(_c, "RegistrationForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RegistrationForm as default
};
//# sourceMappingURL=/build/routes/user.contestant.$contestantId-AKNHPARA.js.map
