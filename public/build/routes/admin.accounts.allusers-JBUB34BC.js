import {
  AdminUserCard,
  ToggleBtn
} from "/build/_shared/chunk-BTA53AVH.js";
import {
  require_admin
} from "/build/_shared/chunk-R65623X7.js";
import "/build/_shared/chunk-NA74LC2K.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-YCGBPSTG.js";
import {
  Pagination
} from "/build/_shared/chunk-Q2XUNJQ4.js";
import {
  FormControl
} from "/build/_shared/chunk-P6IR6DKG.js";
import "/build/_shared/chunk-7JPCB6PC.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-ZTZJB4DO.js";
import {
  Cta_default
} from "/build/_shared/chunk-55Q66HLJ.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-QORMC3GD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin.accounts.allusers.tsx
var import_node = __toESM(require_node(), 1);
var import_admin = __toESM(require_admin(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.accounts.allusers.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.accounts.allusers.tsx"
  );
  import.meta.hot.lastModified = "1775297705991.3064";
}
function Accounts() {
  _s();
  const {
    headings,
    tableData,
    pagedUserData,
    query
  } = useLoaderData();
  const navigation = useNavigation();
  console.log(pagedUserData);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Admin Accounts" }, void 0, false, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "/admin/accounts/add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
          fileName: "app/routes/admin.accounts.allusers.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this),
        "Add User"
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts.allusers.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: "Registered Admin Users" }, void 0, false, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 77,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "flex items-center gap-3", onSubmit: (e) => {
        try {
          const form = e.currentTarget;
          const searchInput = form.elements.namedItem("searchUser");
          const hidden = form.elements.namedItem("wild_card");
          if (searchInput && hidden)
            hidden.value = searchInput.value || "";
        } catch (err) {
        }
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", name: "searchUser", type: "search", placeholder: "Search user...", className: "text-sm xs:min-w-[280px]", defaultValue: query?.wild_card ?? "" }, void 0, false, {
          fileName: "app/routes/admin.accounts.allusers.tsx",
          lineNumber: 89,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "wild_card", defaultValue: query?.wild_card ?? "" }, void 0, false, {
          fileName: "app/routes/admin.accounts.allusers.tsx",
          lineNumber: 90,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: navigation.state === "submitting", className: "px-3 py-2 bg-[#312E81] text-white rounded-md text-sm", children: navigation.state === "submitting" ? "Searching..." : "Search" }, void 0, false, {
          fileName: "app/routes/admin.accounts.allusers.tsx",
          lineNumber: 91,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "add", className: "sm:hidden flex gap-2 items-center justify-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
          fileName: "app/routes/admin.accounts.allusers.tsx",
          lineNumber: 94,
          columnNumber: 21
        }, this),
        "Add User"
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 93,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts.allusers.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:hidden grid gap-4 my-6", children: [
      pagedUserData?.items.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminUserCard, { user }, user._id, false, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 101,
        columnNumber: 51
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: pagedUserData?.last_key_id, pageSize: pagedUserData?.items_per_page, firstKey: pagedUserData?.first_key_id }, void 0, false, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 102,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts.allusers.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full table-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-secondary", children: [
        headings.map((heading) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left capitalize font-satoshi-black p-3", children: heading }, heading, false, {
          fileName: "app/routes/admin.accounts.allusers.tsx",
          lineNumber: 110,
          columnNumber: 54
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Actions" }, void 0, false, {
          fileName: "app/routes/admin.accounts.allusers.tsx",
          lineNumber: 111,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 109,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 108,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: pagedUserData?.items.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-secondary", children: [
        headings.map((heading) => {
          return heading === "access" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grid grid-cols-[76px_36px] items-center w-min", children: [
            user.is_active ? "Enabled" : "Disabled",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleBtn, { on: user.is_active }, void 0, false, {
              fileName: "app/routes/admin.accounts.allusers.tsx",
              lineNumber: 120,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.accounts.allusers.tsx",
            lineNumber: 118,
            columnNumber: 45
          }, this) }, heading, false, {
            fileName: "app/routes/admin.accounts.allusers.tsx",
            lineNumber: 117,
            columnNumber: 45
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: Array.isArray(user[heading]) ? user[heading].join(", ") : user[heading] }, heading, false, {
            fileName: "app/routes/admin.accounts.allusers.tsx",
            lineNumber: 122,
            columnNumber: 49
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.editIcon, element: "link", to: user._id, className: "border-[#262626] bg-[#F7F7F8] text-primary" }, void 0, false, {
            fileName: "app/routes/admin.accounts.allusers.tsx",
            lineNumber: 129,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.trashIcon, className: "border-red-500 bg-red-50 text-red-500" }, void 0, false, {
            fileName: "app/routes/admin.accounts.allusers.tsx",
            lineNumber: 130,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.accounts.allusers.tsx",
          lineNumber: 128,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.accounts.allusers.tsx",
          lineNumber: 127,
          columnNumber: 33
        }, this)
      ] }, index, true, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 115,
        columnNumber: 68
      }, this)) }, void 0, false, {
        fileName: "app/routes/admin.accounts.allusers.tsx",
        lineNumber: 114,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts.allusers.tsx",
      lineNumber: 107,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.accounts.allusers.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:flex justify-between items-center my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { lastKey: pagedUserData?.last_key_id, pageSize: pagedUserData?.items_per_page, firstKey: pagedUserData?.first_key_id }, void 0, false, {
      fileName: "app/routes/admin.accounts.allusers.tsx",
      lineNumber: 142,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.accounts.allusers.tsx",
      lineNumber: 137,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.accounts.allusers.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(Accounts, "GfidBhOEpMhkWU9FQs78h89zMAw=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = Accounts;
var _c;
$RefreshReg$(_c, "Accounts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Accounts as default
};
//# sourceMappingURL=/build/routes/admin.accounts.allusers-JBUB34BC.js.map
