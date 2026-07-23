import {
  TournamentCard
} from "/build/_shared/chunk-6HXANJOX.js";
import {
  AdminUserCard
} from "/build/_shared/chunk-ZJ4FKRFV.js";
import {
  require_admin
} from "/build/_shared/chunk-R65623X7.js";
import {
  ContestTable
} from "/build/_shared/chunk-K3SOAORJ.js";
import "/build/_shared/chunk-GKPHRQRO.js";
import {
  require_tournament
} from "/build/_shared/chunk-RCMPT52E.js";
import "/build/_shared/chunk-ZKQLHDEW.js";
import "/build/_shared/chunk-XUFDOKLY.js";
import "/build/_shared/chunk-FQHZK4DC.js";
import {
  require_contest
} from "/build/_shared/chunk-7IGOFRJC.js";
import "/build/_shared/chunk-5EVLNHFB.js";
import "/build/_shared/chunk-A53UP4AC.js";
import "/build/_shared/chunk-3BSRYLMA.js";
import "/build/_shared/chunk-CWOOXBW5.js";
import "/build/_shared/chunk-GJTSJNT7.js";
import "/build/_shared/chunk-BDFN2BKX.js";
import "/build/_shared/chunk-HDTHGJZ5.js";
import "/build/_shared/chunk-7JPCB6PC.js";
import "/build/_shared/chunk-4X4SKXSG.js";
import "/build/_shared/chunk-OUFOGEKV.js";
import "/build/_shared/chunk-LT4K6HQS.js";
import {
  cn
} from "/build/_shared/chunk-65Q6VMM7.js";
import {
  Svg,
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
  useLoaderData
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

// app/routes/admin.overview.tsx
var import_node = __toESM(require_node(), 1);

// app/components/admin/AdminSummary.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/AdminSummary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/AdminSummary.tsx"
  );
  import.meta.hot.lastModified = "1773409990317.744";
}
function AdminSummary({
  users
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-xl overflow-hidden basis-3/5 max-w-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 xs:gap-4 justify-between items-center py-3 px-4 border-b", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-primary font-bold max-sm:text-xs", children: "Admin Accounts" }, void 0, false, {
        fileName: "app/components/admin/AdminSummary.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "link", to: "/admin/accounts", variant: "outline", className: "border-disabled rounded-lg text-inherit py-1.5 px-3 text-xs font-medium", children: "See All Users" }, void 0, false, {
        fileName: "app/components/admin/AdminSummary.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminSummary.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 grid", children: users.slice(0, 5).map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminUserCard, { user, className: "border-0 shadow-none rounded-none border-b last:border-b-0" }, user._id, false, {
      fileName: "app/components/admin/AdminSummary.tsx",
      lineNumber: 34,
      columnNumber: 48
    }, this)) }, void 0, false, {
      fileName: "app/components/admin/AdminSummary.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminSummary.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = AdminSummary;
var _c;
$RefreshReg$(_c, "AdminSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/ArticleSummary.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/ArticleSummary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/ArticleSummary.tsx"
  );
  import.meta.hot.lastModified = "1757765166857.1025";
}
function ArticleSummary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "basis-1/5 p-3" }, void 0, false, {
    fileName: "app/components/admin/ArticleSummary.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c2 = ArticleSummary;
var _c2;
$RefreshReg$(_c2, "ArticleSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/Aggregator.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/Aggregator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/Aggregator.tsx"
  );
  import.meta.hot.lastModified = "1757765166857.0117";
}
function Aggregator({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "@container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("aside", { ...props, className: cn("grid @sm:grid-cols-2 @xl:grid-cols-[repeat(auto-fit,_minmax(200px,auto))]", "gap-3 justify-items-center mx-auto p-3 border rounded-md bg-[#F6F8FA] text-sm overflow-hidden", className), children }, void 0, false, {
    fileName: "app/components/admin/Aggregator.tsx",
    lineNumber: 29,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/admin/Aggregator.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c3 = Aggregator;
function AggregatorItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: cn("flex gap-3 items-center text-nowrap min-w-48", className), ...props, children }, void 0, false, {
    fileName: "app/components/admin/Aggregator.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c22 = AggregatorItem;
var _c3;
var _c22;
$RefreshReg$(_c3, "Aggregator");
$RefreshReg$(_c22, "AggregatorItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/ContestSummary.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/ContestSummary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/ContestSummary.tsx"
  );
  import.meta.hot.lastModified = "1760080481935.6494";
}
function ContestSummary({
  contests
}) {
  const ongoingCount = contests.filter((contest) => contest.status === "ongoing").length;
  const yetToStartCount = contests.filter((contest) => contest.status === "yet_to_start").length;
  const closedCount = contests.filter((contest) => ["completed", "registering"].includes(contest.status)).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "border rounded-xl overflow-hidden grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-2 xs:gap-4 justify-between items-center py-3 px-4 border-b", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-primary font-bold max-sm:text-xs", children: "Contests" }, void 0, false, {
        fileName: "app/components/admin/ContestSummary.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Cta_default, { element: "link", to: "/admin/contests", variant: "outline", className: "border-disabled rounded-lg text-inherit py-1.5 px-3 text-xs font-medium", children: "See Contests" }, void 0, false, {
        fileName: "app/components/admin/ContestSummary.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/ContestSummary.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Aggregator, { className: "my-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AggregatorItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, false, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 43,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 42,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "grid", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-primary font-satoshi-black", children: contests.length }, void 0, false, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 46,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "", children: "Contests Created" }, void 0, false, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 47,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 45,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/ContestSummary.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, false, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 52,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 51,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "grid", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-primary font-satoshi-black", children: ongoingCount }, void 0, false, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 55,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "", children: "Ongoing Contests" }, void 0, false, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 56,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 54,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/ContestSummary.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, false, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 61,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 60,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "grid", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-primary font-satoshi-black", children: yetToStartCount }, void 0, false, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 64,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "", children: "Yet To Start Contests" }, void 0, false, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 65,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 63,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/ContestSummary.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, false, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 70,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 69,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "grid", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-primary font-satoshi-black", children: closedCount }, void 0, false, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 73,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "", children: "Closed Contests" }, void 0, false, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 74,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 72,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/ContestSummary.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/ContestSummary.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ContestTable, { data: contests.slice(0, 5) }, void 0, false, {
        fileName: "app/components/admin/ContestSummary.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/ContestSummary.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/ContestSummary.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c4 = ContestSummary;
var _c4;
$RefreshReg$(_c4, "ContestSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/TournamentSummary.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/TournamentSummary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/TournamentSummary.tsx"
  );
  import.meta.hot.lastModified = "1760080481936.56";
}
function TournamentSummary({
  tournaments
}) {
  const numberOfContests = tournaments.reduce((total, tournament) => total + tournament.contests.length, 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border rounded-xl overflow-hidden grow max-w-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-2 xs:gap-4 justify-between items-center py-3 px-4 border-b", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-primary font-bold max-sm:text-xs", children: "Tournaments" }, void 0, false, {
        fileName: "app/components/admin/TournamentSummary.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Cta_default, { element: "link", to: "/admin/tournaments", variant: "outline", className: "border-disabled rounded-lg text-inherit py-1.5 px-3 text-xs font-medium", children: "See Tournaments" }, void 0, false, {
        fileName: "app/components/admin/TournamentSummary.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TournamentSummary.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-4 grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Aggregator, { className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AggregatorItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Svg, { src: icons.adminTournamentIcon, className: "text-primary" }, void 0, false, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 41,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 40,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "grid", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-primary font-satoshi-black", children: tournaments.length }, void 0, false, {
              fileName: "app/components/admin/TournamentSummary.tsx",
              lineNumber: 44,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "", children: "Tournaments Created" }, void 0, false, {
              fileName: "app/components/admin/TournamentSummary.tsx",
              lineNumber: 45,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 43,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/TournamentSummary.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, false, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 50,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 49,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "grid", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-primary font-satoshi-black", children: numberOfContests }, void 0, false, {
              fileName: "app/components/admin/TournamentSummary.tsx",
              lineNumber: 53,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "", children: "Contests Created" }, void 0, false, {
              fileName: "app/components/admin/TournamentSummary.tsx",
              lineNumber: 54,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 52,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/TournamentSummary.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TournamentSummary.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      tournaments.slice(0, 2).map((tournament) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TournamentCard, { tournament, className: "border-0 shadow-none bg-transparent rounded-none border-b last:border-b-0" }, tournament.id, false, {
        fileName: "app/components/admin/TournamentSummary.tsx",
        lineNumber: 58,
        columnNumber: 56
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/admin/TournamentSummary.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/TournamentSummary.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c5 = TournamentSummary;
var _c5;
$RefreshReg$(_c5, "TournamentSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.overview.tsx
var import_admin = __toESM(require_admin(), 1);
var import_contest = __toESM(require_contest(), 1);
var import_tournament = __toESM(require_tournament(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.overview.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.overview.tsx"
  );
  import.meta.hot.lastModified = "1773410001091.3645";
}
function Home() {
  _s();
  const {
    adminUsers,
    tournaments,
    contests,
    transactions
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "grid font-medium text-primary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-xl sm:text-2xl font-satoshi-bold line-clamp-1", children: "Hello Admin" }, void 0, false, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "line-clamp-1", children: "Welcome back to KOTMY \u{1F44B}" }, void 0, false, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.overview.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "my-6 grid sm:flex flex-wrap items-start gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AdminSummary, { users: adminUsers }, void 0, false, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ArticleSummary, {}, void 0, false, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TournamentSummary, { tournaments }, void 0, false, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 86,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContestSummary, { contests }, void 0, false, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 88,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.overview.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.overview.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
_s(Home, "dF067yzD17Q5ayjXN33bnOUV+4g=", false, function() {
  return [useLoaderData];
});
_c6 = Home;
var _c6;
$RefreshReg$(_c6, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Home as default
};
//# sourceMappingURL=/build/routes/admin.overview-A4ZIVLKD.js.map
