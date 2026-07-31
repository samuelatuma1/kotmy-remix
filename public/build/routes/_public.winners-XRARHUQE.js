import {
  require_contest
} from "/build/_shared/chunk-7IGOFRJC.js";
import {
  Link2 as Link,
  useLoaderData
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
  import.meta.hot.lastModified = "1785097651387.3801";
}
var WinnerCard = ({
  image_url,
  contest_name,
  remark,
  full_name,
  id
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/winner/${id}`, className: "group block h-full overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_16px_45px_rgba(14,42,77,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(14,42,77,0.12)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "flex h-full flex-col", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative aspect-[3/4] overflow-hidden bg-secondary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image_url, alt: full_name, className: "h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur", children: "Winner" }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-3 p-5 sm:p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate", children: contest_name }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-black tracking-tight text-brand-navy", children: full_name }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "line-clamp-3 text-sm leading-6 text-brand-charcoal", children: remark }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto flex items-center justify-between border-t border-brand-grey pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand-slate", children: "View story" }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold text-brand-pink transition group-hover:translate-x-0.5", children: "Open profile" }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "app/routes/_public.winners.tsx",
  lineNumber: 44,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/_public.winners.tsx",
  lineNumber: 43,
  columnNumber: 7
}, this);
_c = WinnerCard;
var SearchIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
  fileName: "app/routes/_public.winners.tsx",
  lineNumber: 76,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/_public.winners.tsx",
  lineNumber: 75,
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
      lineNumber: 95,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "min-h-screen w-full overflow-x-hidden bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid min-w-0 gap-8 lg:grid-cols-[1.15fr_0.85fr]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-pink px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.28em] text-white/70", children: "Winners Gallery" }, void 0, false, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl", children: "Meet our talented contest winners" }, void 0, false, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base", children: "A clean showcase of the extraordinary creations that rose to the top across KidMonth contests." }, void 0, false, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-w-0 items-center p-6 sm:p-8 lg:p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 w-full rounded-[1.75rem] border border-brand-grey bg-secondary p-4 shadow-[0_10px_30px_rgba(14,42,77,0.05)] sm:p-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate", children: "Search winners" }, void 0, false, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search by keyword or name", value: searchWinners, onChange: (e) => setSearchWinners(e.target.value), className: "w-full rounded-2xl border border-brand-grey bg-white py-3.5 pl-5 pr-12 text-sm text-brand-navy outline-none transition placeholder:text-brand-slate focus:border-brand-pink sm:text-base" }, void 0, false, {
            fileName: "app/routes/_public.winners.tsx",
            lineNumber: 121,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchIcon, { className: "h-5 w-5 text-brand-slate" }, void 0, false, {
            fileName: "app/routes/_public.winners.tsx",
            lineNumber: 123,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_public.winners.tsx",
            lineNumber: 122,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 120,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 116,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 102,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-8 sm:py-10 lg:py-14", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6 flex min-w-0 items-center justify-between gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate", children: "Featured winners" }, void 0, false, {
            fileName: "app/routes/_public.winners.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-2xl font-black tracking-tight text-brand-navy", children: "Celebrating standout performances" }, void 0, false, {
            fileName: "app/routes/_public.winners.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden rounded-full border border-brand-grey bg-white px-4 py-2 text-sm font-semibold text-brand-charcoal sm:block", children: [
          winnersFiltered.length,
          " results"
        ] }, void 0, true, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8", children: winnersFiltered.map((winner, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WinnerCard, { image_url: winner.image_url, contest_name: winner.contest_name, remark: winner.remark, full_name: winner.full_name, id: winner._id }, winner.contestant_code || idx, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 148,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 flex justify-center sm:mt-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex items-center rounded-full border border-brand-grey bg-white px-8 py-3 text-sm font-semibold text-brand-navy shadow-[0_10px_30px_rgba(14,42,77,0.06)] transition hover:-translate-y-0.5 hover:border-brand-pink hover:text-brand-pink", children: "See more" }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 99,
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
//# sourceMappingURL=/build/routes/_public.winners-XRARHUQE.js.map
