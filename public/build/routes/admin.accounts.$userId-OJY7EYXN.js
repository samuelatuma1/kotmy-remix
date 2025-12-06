import {
  PermissionsFormControl
} from "/build/_shared/chunk-PZIH43UG.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-3ULBCPB3.js";
import {
  Select
} from "/build/_shared/chunk-XYTHVHY4.js";
import {
  Cta_default
} from "/build/_shared/chunk-NKBOX2WC.js";
import {
  FormControl
} from "/build/_shared/chunk-LBAJGJUG.js";
import "/build/_shared/chunk-CMHVCBDB.js";
import "/build/_shared/chunk-LOUTNZN4.js";
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
  useNavigate
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

// app/routes/admin.accounts.$userId.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.accounts.$userId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.accounts.$userId.tsx"
  );
  import.meta.hot.lastModified = "1757765166876.0244";
}
function EditAdminUser() {
  _s();
  const {
    permissions,
    user
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Edit User" }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts.$userId.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "sm:wrapper grid sm:grid-cols-2 gap-3 sm:gap-6 text-sm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "First Name", className: "", placeholder: "Enter first name", id: "firstName", name: "firstName", defaultValue: user.full_name.split(" ")[0], required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Last Name", className: "", placeholder: "Enter last name", id: "lastName", name: "lastName", defaultValue: user.full_name.split(" ")[1], required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Email Address", className: "", placeholder: "Enter email address", id: "email", name: "email", defaultValue: user.email, required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Username", className: "", placeholder: "Enter username", id: "username", name: "username", defaultValue: user.username, required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "password", labelText: "Password", className: "", placeholder: "Create password", id: "password", name: "password", defaultValue: user.password, required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Assign Role", id: "role", name: "role", defaultValue: user.role, required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Role 1", children: "Role 1" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Role 2", children: "Role 2" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Role 3", children: "Role 3" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PermissionsFormControl, { permissions, defaultPermissions: user.permissions }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 sm:flex justify-end gap-3 sm:gap-6 sm:col-span-2 mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "reset", className: "px-4 sm:px-8 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "px-4 sm:px-8 py-2 rounded-lg font-medium", children: "Submit" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts.$userId.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.accounts.$userId.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_s(EditAdminUser, "21dUu/J1ICvrJuiLxAD7Mu/e0uY=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = EditAdminUser;
var _c;
$RefreshReg$(_c, "EditAdminUser");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditAdminUser as default
};
//# sourceMappingURL=/build/routes/admin.accounts.$userId-OJY7EYXN.js.map
