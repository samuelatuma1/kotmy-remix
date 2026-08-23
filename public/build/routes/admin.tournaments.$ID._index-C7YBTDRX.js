import {
  ContestTable
} from "/build/_shared/chunk-DGINLOPS.js";
import {
  Toggletip
} from "/build/_shared/chunk-GKPHRQRO.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-EPD252AU.js";
import "/build/_shared/chunk-YOJDGFJM.js";
import "/build/_shared/chunk-5EVLNHFB.js";
import "/build/_shared/chunk-FQHZK4DC.js";
import {
  require_tournament
} from "/build/_shared/chunk-RCMPT52E.js";
import {
  require_contest
} from "/build/_shared/chunk-7IGOFRJC.js";
import "/build/_shared/chunk-6GJEKC65.js";
import "/build/_shared/chunk-3BSRYLMA.js";
import "/build/_shared/chunk-CWOOXBW5.js";
import "/build/_shared/chunk-GJTSJNT7.js";
import "/build/_shared/chunk-HDTHGJZ5.js";
import "/build/_shared/chunk-6HD2VEKU.js";
import "/build/_shared/chunk-4X4SKXSG.js";
import "/build/_shared/chunk-OUFOGEKV.js";
import "/build/_shared/chunk-LT4K6HQS.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-VCQR46EC.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link2 as Link,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-NO4YTAWP.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin.tournaments.$ID._index.tsx
var import_node = __toESM(require_node(), 1);
var import_tournament = __toESM(require_tournament(), 1);
var import_contest = __toESM(require_contest(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.tournaments.$ID._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.tournaments.$ID._index.tsx"
  );
  import.meta.hot.lastModified = "1785918306813.0767";
}
function Tournament() {
  _s();
  const {
    tournament,
    contests
  } = useLoaderData();
  const navigate = useNavigate();
  const mainComponent = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.optionsIcon, className: "border-disabled hover:border-primary" }, void 0, false, {
    fileName: "app/routes/admin.tournaments.$ID._index.tsx",
    lineNumber: 72,
    columnNumber: 25
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full overflow-y-auto max-xs:p-3 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, false, {
      fileName: "app/routes/admin.tournaments.$ID._index.tsx",
      lineNumber: 75,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tournaments.$ID._index.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex items-start gap-4 sm:gap-6 max-w-xl mx-auto max-xs:text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: tournament.image ?? "", alt: "tournament banner", className: "max-xs:w-20 w-24 sm:w-[120px] aspect-square object-cover rounded-lg" }, void 0, false, {
        fileName: "app/routes/admin.tournaments.$ID._index.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:gap-6 justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-primary font-satoshi-black uppercase line-clamp-1", children: tournament.name }, void 0, false, {
            fileName: "app/routes/admin.tournaments.$ID._index.tsx",
            lineNumber: 81,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium text-xs line-clamp-2", children: tournament.description }, void 0, false, {
            fileName: "app/routes/admin.tournaments.$ID._index.tsx",
            lineNumber: 82,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tournaments.$ID._index.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 sm:gap-6 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: `/admin/contests/add?tournament=${tournament.id}`, variant: "outline", className: "flex gap-2 items-center rounded-lg px-3 py-2 border-secondary text-primary font-medium hover:border-primary max-xs:text-xs", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.addIcon, width: ".9em" }, void 0, false, {
              fileName: "app/routes/admin.tournaments.$ID._index.tsx",
              lineNumber: 86,
              columnNumber: 29
            }, this),
            "Add Contest"
          ] }, void 0, true, {
            fileName: "app/routes/admin.tournaments.$ID._index.tsx",
            lineNumber: 85,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggletip, { mainComponent, childContainerClass: "top-[120%] max-sm:right-0 sm:left-0 bg-tertiary p-2 border border-disabled text-xs whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `edit`, className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Edit Tournament" }, void 0, false, {
              fileName: "app/routes/admin.tournaments.$ID._index.tsx",
              lineNumber: 90,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Delete Tournament" }, void 0, false, {
              fileName: "app/routes/admin.tournaments.$ID._index.tsx",
              lineNumber: 91,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.tournaments.$ID._index.tsx",
            lineNumber: 89,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tournaments.$ID._index.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tournaments.$ID._index.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tournaments.$ID._index.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "my-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestTable, { data: contests }, void 0, false, {
      fileName: "app/routes/admin.tournaments.$ID._index.tsx",
      lineNumber: 97,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tournaments.$ID._index.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tournaments.$ID._index.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(Tournament, "5AxzJDa3dYOl1vx+jb88n/1NPUI=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = Tournament;
var _c;
$RefreshReg$(_c, "Tournament");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Tournament as default
};
//# sourceMappingURL=/build/routes/admin.tournaments.$ID._index-C7YBTDRX.js.map
