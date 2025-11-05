import {
  TallyVoteDialog,
  VoteLink_default
} from "/build/_shared/chunk-F6FB7YS7.js";
import "/build/_shared/chunk-26B2YPIV.js";
import "/build/_shared/chunk-VRCWIES3.js";
import "/build/_shared/chunk-X7MJWV53.js";
import "/build/_shared/chunk-JSO2QJI7.js";
import {
  ContestTimer
} from "/build/_shared/chunk-XFTUYEWW.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-5PMHMVT2.js";
import "/build/_shared/chunk-KWJHYQH5.js";
import "/build/_shared/chunk-NOEFVVE2.js";
import "/build/_shared/chunk-4PSCNRID.js";
import {
  FormControl
} from "/build/_shared/chunk-VY7DZHMV.js";
import "/build/_shared/chunk-2K2NFQ32.js";
import "/build/_shared/chunk-ULL45DVV.js";
import "/build/_shared/chunk-AV2RONJM.js";
import "/build/_shared/chunk-N5XOLCME.js";
import "/build/_shared/chunk-CMHVCBDB.js";
import {
  cn
} from "/build/_shared/chunk-LOUTNZN4.js";
import {
  require_actions
} from "/build/_shared/chunk-AUWIFI2P.js";
import {
  numberSlang
} from "/build/_shared/chunk-7G67FTYO.js";
import "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  no_image_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import {
  StatusTag
} from "/build/_shared/chunk-6BY4NF3F.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Link2 as Link,
  useFetcher,
  useRouteLoaderData,
  useSearchParams
} from "/build/_shared/chunk-RJTUOXH3.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx
var import_node = __toESM(require_node(), 1);
var import_actions = __toESM(require_actions(), 1);
var import_session = __toESM(require_session(), 1);

// app/components/public/contests/ProgressBar.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/ProgressBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/ProgressBar.tsx"
  );
  import.meta.hot.lastModified = "1757765166863.6272";
}
function ProgressBar({
  percentage
}) {
  _s();
  const progressBar = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    progressBar.current?.style.setProperty("--progress", `${percentage}%`);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: progressBar, className: "progressBar w-full sm:min-w-[70px] h-2 bg-[#EAEBF0] rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "progress h-full w-[--progress] bg-[#6246EA] rounded" }, void 0, false, {
      fileName: "app/components/public/contests/ProgressBar.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/ProgressBar.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-bold", children: [
      percentage.toFixed(1),
      "%"
    ] }, void 0, true, {
      fileName: "app/components/public/contests/ProgressBar.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/ProgressBar.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(ProgressBar, "JMvKhTGoA6/oHttBKwnhdY76p4o=");
_c = ProgressBar;
var _c;
$RefreshReg$(_c, "ProgressBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/Grade.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/Grade.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/Grade.tsx"
  );
  import.meta.hot.lastModified = "1757765166863.237";
}
function Grade({
  grade
}) {
  const cleanedGrade = grade ? grade.toUpperCase() : "F";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-6 rounded-md overflow-hidden text-white text-xs font-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("bg-grade-F h-full px-2 py-1 text-center"), children: cleanedGrade === "F" ? cleanedGrade : null }, void 0, false, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("h-full px-2 py-1 text-center", {
      "bg-grade-E": cleanedGrade <= "E",
      "bg-grade-Ea": cleanedGrade > "E"
    }), children: cleanedGrade === "E" ? cleanedGrade : null }, void 0, false, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("h-full px-2 py-1 text-center", {
      "bg-grade-D": cleanedGrade <= "D",
      "bg-grade-Da": cleanedGrade > "D"
    }), children: cleanedGrade === "D" ? cleanedGrade : null }, void 0, false, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("h-full px-2 py-1 text-center", {
      "bg-grade-C": cleanedGrade <= "C",
      "bg-grade-Ca": cleanedGrade > "C"
    }), children: cleanedGrade === "C" ? cleanedGrade : null }, void 0, false, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("h-full px-2 py-1 text-center", {
      "bg-grade-B": cleanedGrade <= "B",
      "bg-grade-Ba": cleanedGrade > "B"
    }), children: cleanedGrade === "B" ? cleanedGrade : null }, void 0, false, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("h-full px-2 py-1 text-center", {
      "bg-grade-A": cleanedGrade <= "A",
      "bg-grade-Aa": cleanedGrade > "A"
    }), children: cleanedGrade === "A" ? cleanedGrade : null }, void 0, false, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/Grade.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = Grade;
var _c2;
$RefreshReg$(_c2, "Grade");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/MobileScoreboard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/MobileScoreboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/MobileScoreboard.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.4568";
}
function MobileScoreboard({
  contestants,
  socialMediaType
}) {
  _s2();
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-6 sm:hidden", children: contestants.map((contestant) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("article", { className: "bg-secondary border border-primary rounded-xl p-3 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-4 mb-4 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-satoshi-bold", children: [
        contestant.result.position,
        "."
      ] }, void 0, true, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 38,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: contestant.image_url || no_image_default, alt: "person smiling", width: 90, height: 90, className: "rounded-full aspect-square object-cover" }, void 0, false, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 39,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-2 grow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "uppercase text-sm font-satoshi-medium text-ellipsis overflow-hidden", children: `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}` }, void 0, false, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 41,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProgressBar, { percentage: contestant.result.overall_vote_percentage }, void 0, false, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 44,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Grade, { grade: contestant.result.grade }, void 0, false, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 45,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/MobileScoreboard.tsx",
      lineNumber: 37,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mb-2 text-xs font-satoshi-bold text-[#5F6D7E]", children: "Vote for this contestant" }, void 0, false, {
      fileName: "app/components/public/contests/MobileScoreboard.tsx",
      lineNumber: 48,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-3 gap-3", children: [
      socialMediaType === "kotmy" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(fetcher.Form, { method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, false, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 51,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "stage_id", value: contestant.stage_id }, void 0, false, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 52,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "intent", value: "kotmy_vote" }, void 0, false, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 53,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(VoteLink_default, { className: "w-full", type: socialMediaType, url: contestant.social_media_url, count: numberSlang(contestant.vote.social_media) }, void 0, false, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 54,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 50,
        columnNumber: 56
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(VoteLink_default, { type: socialMediaType, url: contestant.social_media_url, count: numberSlang(contestant.vote.social_media) }, void 0, false, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 55,
        columnNumber: 47
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TallyVoteDialog, { contestant }, void 0, false, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/MobileScoreboard.tsx",
      lineNumber: 49,
      columnNumber: 21
    }, this)
  ] }, contestant._id, true, {
    fileName: "app/components/public/contests/MobileScoreboard.tsx",
    lineNumber: 36,
    columnNumber: 44
  }, this)) }, void 0, false, {
    fileName: "app/components/public/contests/MobileScoreboard.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s2(MobileScoreboard, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c3 = MobileScoreboard;
var _c3;
$RefreshReg$(_c3, "MobileScoreboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/ScoreboardTable.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/ScoreboardTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/ScoreboardTable.tsx"
  );
  import.meta.hot.lastModified = "1760080481941.7673";
}
function ScoreboardTable({
  contestants,
  socialMediaType
}) {
  _s3();
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("table", { className: "w-full table-auto hidden sm:table", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { className: "border-b border-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "position" }, void 0, false, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "name" }, void 0, false, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3 hidden lg:table-cell", children: "progress" }, void 0, false, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3  hidden xl:table-cell", children: "grade" }, void 0, false, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "votes (SM, tally, givaah)" }, void 0, false, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/ScoreboardTable.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/ScoreboardTable.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tbody", { children: contestants.map((contestant) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { className: "border-b border-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "px-6 py-3", children: contestant.result.position }, void 0, false, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 47,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "px-6 py-3 font-satoshi-medium max-w-[300px] truncate uppercase", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: contestant.image_url || no_image_default, alt: "person smiling", width: 48, className: "rounded-full aspect-square object-cover" }, void 0, false, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 50,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "truncate uppercase grow", children: [
          `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`,
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dl", { className: "lg:hidden", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { className: "sr-only", children: "progress" }, void 0, false, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 54,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProgressBar, { percentage: contestant.result.overall_vote_percentage }, void 0, false, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 55,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 55,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { className: "sr-only", children: "grade" }, void 0, false, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 56,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Grade, { grade: contestant.result.grade }, void 0, false, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 57,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 57,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 53,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 51,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 49,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 48,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "px-6 py-3 hidden lg:table-cell", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProgressBar, { percentage: contestant.result.overall_vote_percentage }, void 0, false, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 63,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dl", { className: "xl:hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { className: "sr-only", children: "grade" }, void 0, false, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 65,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Grade, { grade: contestant.result.grade }, void 0, false, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 66,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 66,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 64,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 62,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "px-6 py-3 hidden xl:table-cell", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Grade, { grade: contestant.result.grade }, void 0, false, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 69,
        columnNumber: 72
      }, this) }, void 0, false, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "px-6 py-3 grid grid-cols-2 gap-2", children: [
        socialMediaType === "kotmy" ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(fetcher.Form, { method: "POST", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, false, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 72,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "stage_id", value: contestant.stage_id }, void 0, false, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 73,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "intent", value: "kotmy_vote" }, void 0, false, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 74,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(VoteLink_default, { className: "w-full", type: socialMediaType, url: contestant.social_media_url, count: numberSlang(contestant.vote.social_media) }, void 0, false, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 75,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 71,
          columnNumber: 60
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(VoteLink_default, { type: socialMediaType, url: contestant.social_media_url, count: numberSlang(contestant.vote.social_media) }, void 0, false, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 76,
          columnNumber: 51
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TallyVoteDialog, { contestant }, void 0, false, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 77,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 70,
        columnNumber: 25
      }, this)
    ] }, contestant._id, true, {
      fileName: "app/components/public/contests/ScoreboardTable.tsx",
      lineNumber: 46,
      columnNumber: 48
    }, this)) }, void 0, false, {
      fileName: "app/components/public/contests/ScoreboardTable.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/ScoreboardTable.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s3(ScoreboardTable, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c4 = ScoreboardTable;
var _c4;
$RefreshReg$(_c4, "ScoreboardTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx"
  );
  import.meta.hot.lastModified = "1760080481947.1108";
}
function Scoreboard() {
  _s4();
  const stageContestants = useRouteLoaderData("routes/_public.contests.$tournamentId.$contestId");
  if (!stageContestants)
    throw new Error("Could not load stage contestants");
  const {
    contest,
    stage
  } = stageContestants;
  const [_, setUrlSearchParams] = useSearchParams();
  const color = contest.status === "registering" ? "yellow" : contest.status === "ongoing" ? "green" : contest.status === "completed" ? "red" : "gray";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3 uppercase", children: contest.name }, void 0, false, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 64,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-satoshi-medium", children: contest.desc }, void 0, false, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 65,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-6 grid grid-cols-2 gap-2 max-w-4xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Status" }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 69,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StatusTag, { status: contest.status, color }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 70,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 68,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 73,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-4 flex-wrap capitalize", children: contest.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: [
              "~ ",
              category
            ] }, category, true, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 75,
              columnNumber: 69
            }, this)) }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 74,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 72,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 79,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "block", children: contest.prizes }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 80,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 78,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 67,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContestTimer, { deadline: new Date(contest.end_date), title: "contest ends in" }, void 0, false, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 83,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: contest.image || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "sm:bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "wrapper my-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col sm:flex-row justify-between sm:items-center gap-y-4 gap-x-6 sm:gap-x-8 py-6 flex-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "font-satoshi-medium text-xl", children: [
          stage?.contestants.length ?? 0,
          " Contestants"
        ] }, void 0, true, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 90,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white", placeholder: "Search contestant by name" }, void 0, false, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 92,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { value: String(stage?.stage), onValueChange: (val) => setUrlSearchParams((prev) => {
            prev.set("stage", val);
            return prev;
          }), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectTrigger, { className: "sm:w-[180px] h-auto rounded-lg shadow-none bg-white hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectValue, { placeholder: "Stage 1" }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 98,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 97,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectContent, { children: contest.stages.map((stage2) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: String(stage2.stage), className: "focus:bg-blue-700/25", children: [
              "Stage ",
              stage2.stage
            ] }, stage2.stage, true, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 101,
              columnNumber: 66
            }, this)) }, void 0, false, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 100,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 93,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 91,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/results/${contest.id}`, className: "w-fit text-accent font-bold hover:underline underline-offset-4", children: "See result table" }, void 0, false, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 105,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
        lineNumber: 89,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScoreboardTable, { contestants: stage?.contestants ?? [], socialMediaType: stage?.rates.social_media.type ?? "kotmy" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
        lineNumber: 107,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MobileScoreboard, { contestants: stage?.contestants ?? [], socialMediaType: stage?.rates.social_media.type ?? "kotmy" }, void 0, false, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
        lineNumber: 108,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
      lineNumber: 88,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s4(Scoreboard, "wnZnD0xw+WONQ7izyF86NurSKPY=", false, function() {
  return [useRouteLoaderData, useSearchParams];
});
_c5 = Scoreboard;
var _c5;
$RefreshReg$(_c5, "Scoreboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Scoreboard as default
};
//# sourceMappingURL=/build/routes/_public.contests.$tournamentId.$contestId.scoreboard-GINAXD4C.js.map
