import {
  require_contest
} from "/build/_shared/chunk-5XKVHEZW.js";
import {
  Link2 as Link,
  useLoaderData
} from "/build/_shared/chunk-MJSDHJ2L.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/_public.winners.tsx
var import_react2 = __toESM(require_react(), 1);
var import_contest = __toESM(require_contest(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.winners.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.winners.tsx"
  );
  import.meta.hot.lastModified = "1761624847550.4417";
}
var WinnerCard = ({
  image_url,
  contest_name,
  remark,
  full_name,
  id
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/winner/${id}`, className: "block transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image_url, alt: full_name, className: "w-full aspect-[3/4] rounded-lg object-cover" }, void 0, false, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: contest_name }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-1 text-lg font-bold text-gray-900", children: full_name }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/routes/_public.winners.tsx",
  lineNumber: 44,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/routes/_public.winners.tsx",
  lineNumber: 43,
  columnNumber: 7
}, this);
_c = WinnerCard;
var SearchIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
  fileName: "app/routes/_public.winners.tsx",
  lineNumber: 56,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/_public.winners.tsx",
  lineNumber: 55,
  columnNumber: 29
}, this);
_c2 = SearchIcon;
function Winners() {
  _s();
  const {
    winners,
    error
  } = useLoaderData();
  const [searchWinners, setSearchWinners] = (0, import_react2.useState)("");
  const [winnersFiltered, setWinnersFiltered] = (0, import_react2.useState)(winners ?? []);
  (0, import_react2.useEffect)(() => {
    setWinnersFiltered(winners ?? []);
  }, [winners]);
  (0, import_react2.useEffect)(() => {
    const updated = (winners ?? []).filter((winner) => winner.full_name.toLowerCase().includes(searchWinners.trim().toLowerCase()) || winner.contest_name.toLowerCase().includes(searchWinners.trim().toLowerCase()));
    setWinnersFiltered(updated);
  }, [searchWinners, winners]);
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-satoshi-bold text-4xl text-center", children: error.detail }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 75,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-[#817EFB] overflow-hidden rounded-3xl py-8 md:py-12 lg:py-16 px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: "Meet Our Talented Contest Winners" }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-base md:text-lg text-purple-100", children: "A Glimpse of the Extraordinary Creations That Stole the Show" }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 relative max-w-lg mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search by keyword or name", value: searchWinners, onChange: (e) => setSearchWinners(e.target.value), className: "w-full rounded-2xl py-3 px-6 pr-12 text-gray-900 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300" }, void 0, false, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchIcon, { className: "h-5 w-5 text-gray-400" }, void 0, false, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-12 md:py-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3", children: winnersFiltered.map((winner, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WinnerCard, { image_url: winner.image_url, contest_name: winner.contest_name, remark: winner.remark, full_name: winner.full_name, id: winner._id }, winner.contestant_code || idx, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 99,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 md:mt-16 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors", children: "See more" }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
}
_s(Winners, "elf1whF+aU0ReCqawOmgS10qoJc=", false, function() {
  return [useLoaderData];
});
_c3 = Winners;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "WinnerCard");
$RefreshReg$(_c2, "SearchIcon");
$RefreshReg$(_c3, "Winners");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Winners as default
};
//# sourceMappingURL=/build/routes/_public.winners-MFJEUMUV.js.map
