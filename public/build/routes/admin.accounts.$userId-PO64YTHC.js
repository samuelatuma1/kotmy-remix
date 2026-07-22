import {
  RolesFormControl
} from "/build/_shared/chunk-IFJWCZOM.js";
import {
  require_admin
} from "/build/_shared/chunk-R65623X7.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-ZKQLHDEW.js";
import {
  Select
} from "/build/_shared/chunk-O4R66NJX.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import "/build/_shared/chunk-LT4K6HQS.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
import {
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-6UGLJ4QU.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation
} from "/build/_shared/chunk-NO4YTAWP.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin.accounts.$userId.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_admin = __toESM(require_admin(), 1);
var import_react2 = __toESM(require_react(), 1);
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
  import.meta.hot.lastModified = "1773397650434.5247";
}
function EditAdminUser() {
  _s();
  const {
    permissions,
    user,
    roles
  } = useLoaderData();
  const rolesNames = [];
  for (const roleName in roles ?? []) {
    rolesNames.push(roleName);
  }
  const navigate = useNavigate();
  const actionData = useActionData();
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      console.log(actionData.error);
      toast({
        variant: "destructive",
        title: "Create action failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not update admin user!"
      });
    }
    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Create admin successful",
        description: "Admin account was successfully updated!"
      });
    }
  }, [actionData]);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Edit User" }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts.$userId.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "sm:wrapper grid sm:grid-cols-2 gap-3 sm:gap-6 text-sm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "First Name", className: "", placeholder: "Enter first name", id: "firstName", name: "firstName", defaultValue: user.full_name.split(" ")[0], required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Last Name", className: "", placeholder: "Enter last name", id: "lastName", name: "lastName", defaultValue: user.full_name.split(" ")[1], required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Email Address", className: "", placeholder: "Enter email address", id: "email", name: "email", defaultValue: user.email, required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Username", className: "", placeholder: "Enter username", id: "username", name: "username", defaultValue: user.username, required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Assigned as Staff", id: "is_staff", name: "is_staff", defaultValue: user.is_staff ? "1" : "0", required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "0", children: "False" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 135,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "True" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Set Active", id: "is_active", name: "is_active", defaultValue: user.is_active ? "1" : "0", required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "0", children: "De-activate" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 140,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "Activate" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 141,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 139,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Has Admin Access", id: "has_admin_access", name: "has_admin_access", defaultValue: user.has_admin_access ? "1" : "0", required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "0", children: "False" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 145,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "True" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 146,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 144,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RolesFormControl, { roles: rolesNames, defaultRoles: user.roles }, void 0, false, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 sm:flex justify-end gap-3 sm:gap-6 sm:col-span-2 mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "reset", className: "px-4 sm:px-8 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { disabled: isSubmitting, element: "button", type: "submit", className: "px-4 sm:px-8 py-2 rounded-lg font-medium", children: isSubmitting ? "Updating admin user" : "Update admin user" }, void 0, false, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 157,
          columnNumber: 12
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts.$userId.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.accounts.$userId.tsx",
    lineNumber: 123,
    columnNumber: 10
  }, this);
}
_s(EditAdminUser, "mn86x9MhB3bU9UjbwvZ7PnNffKs=", false, function() {
  return [useLoaderData, useNavigate, useActionData, useNavigation];
});
_c = EditAdminUser;
var _c;
$RefreshReg$(_c, "EditAdminUser");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditAdminUser as default
};
//# sourceMappingURL=/build/routes/admin.accounts.$userId-PO64YTHC.js.map
