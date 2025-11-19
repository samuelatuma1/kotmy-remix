import {
  AdminUserCard,
  ToggleBtn
} from "/build/_shared/chunk-L3H6I4SY.js";
import "/build/_shared/chunk-XGVXYWCS.js";
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
  Pagination
} from "/build/_shared/chunk-BDARQS7C.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
import "/build/_shared/chunk-DGIR3IGL.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  useLoaderData
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

// app/routes/admin.accounts._index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.accounts._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.accounts._index.tsx"
  );
  import.meta.hot.lastModified = "1757765166876.1902";
}
function Accounts() {
  _s();
  const {
    headings,
    tableData
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-black text-primary", children: "Admin Accounts" }, void 0, false, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this),
        "Add User"
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: "Registered Admin Users" }, void 0, false, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", type: "search", placeholder: "Search user...", className: "text-sm xs:min-w-[280px]" }, void 0, false, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "add", className: "sm:hidden flex gap-2 items-center justify-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 58,
          columnNumber: 21
        }, this),
        "Add User"
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:hidden grid gap-4 my-6", children: tableData.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminUserCard, { user }, user.id, false, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 65,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full table-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-secondary", children: [
        headings.map((heading) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left capitalize font-satoshi-black p-3", children: heading }, heading, false, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 73,
          columnNumber: 54
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Actions" }, void 0, false, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 74,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 72,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: tableData.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-secondary", children: [
        headings.map((heading) => {
          return heading === "access" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grid grid-cols-[76px_36px] items-center w-min", children: [
            user[heading] ? "Enabled" : "Disabled",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleBtn, { on: user[heading] }, void 0, false, {
              fileName: "app/routes/admin.accounts._index.tsx",
              lineNumber: 83,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.accounts._index.tsx",
            lineNumber: 81,
            columnNumber: 45
          }, this) }, heading, false, {
            fileName: "app/routes/admin.accounts._index.tsx",
            lineNumber: 80,
            columnNumber: 45
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: user[heading] }, heading, false, {
            fileName: "app/routes/admin.accounts._index.tsx",
            lineNumber: 85,
            columnNumber: 49
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.editIcon, element: "link", to: user.id, className: "border-[#262626] bg-[#F7F7F8] text-primary" }, void 0, false, {
            fileName: "app/routes/admin.accounts._index.tsx",
            lineNumber: 89,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.trashIcon, className: "border-red-500 bg-red-50 text-red-500" }, void 0, false, {
            fileName: "app/routes/admin.accounts._index.tsx",
            lineNumber: 90,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 88,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 87,
          columnNumber: 33
        }, this)
      ] }, index, true, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 78,
        columnNumber: 57
      }, this)) }, void 0, false, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:flex justify-between items-center my-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 }, void 0, false, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 99,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, {}, void 0, false, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 101,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.accounts._index.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(Accounts, "FM5yD9bpUgtpl2xl+2525VZ6JMc=", false, function() {
  return [useLoaderData];
});
_c = Accounts;
var _c;
$RefreshReg$(_c, "Accounts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Accounts as default
};
//# sourceMappingURL=/build/routes/admin.accounts._index-5QBI2OWD.js.map
