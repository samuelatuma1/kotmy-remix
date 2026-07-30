import {
  RolesFormControl
} from "/build/_shared/chunk-AQAJIFA7.js";
import {
  require_admin
} from "/build/_shared/chunk-R65623X7.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-EPD252AU.js";
import {
  Select
} from "/build/_shared/chunk-O4R66NJX.js";
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
} from "/build/_shared/chunk-VCQR46EC.js";
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

// app/routes/admin.accounts.add.tsx
var import_node = __toESM(require_node(), 1);
var import_admin = __toESM(require_admin(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.accounts.add.tsx"' + id);
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
    "app/routes/admin.accounts.add.tsx"
  );
  import.meta.hot.lastModified = "1773397666342.2979";
}
function useAddAdminUser() {
  _s();
  const {
    permissions,
    roles
  } = useLoaderData();
  const rolesNames = [];
  for (const roleName in roles) {
    rolesNames.push(roleName);
  }
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const actionData = useActionData();
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      console.log(actionData.error);
      toast({
        variant: "destructive",
        title: "Create action failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not create admin user!"
      });
    }
    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Create admin successful",
        description: "Admin account was successfully created!"
      });
    }
  }, [actionData]);
  return {
    permissions,
    rolesNames,
    isSubmitting
  };
}
_s(useAddAdminUser, "fQuHW45xDYt1ATIpUP9OQavT9DI=", false, function() {
  return [useLoaderData, useNavigation, useActionData];
});
function AddAdminUser() {
  _s2();
  const {
    permissions,
    rolesNames,
    isSubmitting
  } = useAddAdminUser();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, false, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Add User" }, void 0, false, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts.add.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "sm:wrapper grid sm:grid-cols-2 gap-3 sm:gap-6 text-sm", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "First Name", className: "", placeholder: "Enter first name", id: "firstName", name: "firstName", required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Last Name", className: "", placeholder: "Enter last name", id: "lastName", name: "lastName", required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Email Address", className: "", placeholder: "Enter email address", id: "email", name: "email", required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Username", className: "", placeholder: "Enter username", id: "username", name: "username", required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Password", className: "", placeholder: "Enter username", id: "password", name: "password", required: true }, void 0, false, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Assign Staff", id: "is_staff", name: "is_staff", defaultValue: "1", required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "0", children: "Disable" }, void 0, false, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "Enable" }, void 0, false, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Set Active", id: "is_active", name: "is_active", defaultValue: "1", required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "0", children: "De-activate" }, void 0, false, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "Activate" }, void 0, false, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Has Admin access", id: "has_admin_access", name: "has_admin_access", defaultValue: "1", required: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "0", children: "False" }, void 0, false, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "True" }, void 0, false, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RolesFormControl, { roles: rolesNames }, void 0, false, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 sm:flex justify-end gap-3 sm:gap-6 sm:col-span-2 mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "reset", className: "px-4 sm:px-8 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }, void 0, false, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { disabled: isSubmitting, element: "button", type: "submit", className: "px-4 sm:px-8 py-2 rounded-lg font-medium", children: isSubmitting ? "Creating admin user" : "Create admin user" }, void 0, false, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 153,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts.add.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.accounts.add.tsx",
    lineNumber: 121,
    columnNumber: 10
  }, this);
}
_s2(AddAdminUser, "kaFyX7d2XEdG00xS1Z4XNaHCFWg=", false, function() {
  return [useAddAdminUser, useNavigate];
});
_c = AddAdminUser;
var _c;
$RefreshReg$(_c, "AddAdminUser");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddAdminUser as default
};
//# sourceMappingURL=/build/routes/admin.accounts.add-TWOLKK3Y.js.map
