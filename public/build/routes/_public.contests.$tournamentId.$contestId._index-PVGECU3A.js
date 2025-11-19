import {
  ContestantSlider
} from "/build/_shared/chunk-3UH7XXBN.js";
import {
  ContestGuidelines
} from "/build/_shared/chunk-WV3BS4QP.js";
import {
  DragnDrop
} from "/build/_shared/chunk-OZIKQQQN.js";
import "/build/_shared/chunk-WQFJ2CRD.js";
import {
  nigerianStates
} from "/build/_shared/chunk-ZBCNQQYM.js";
import {
  TallyVoteDialog
} from "/build/_shared/chunk-F6FB7YS7.js";
import {
  socialIcons
} from "/build/_shared/chunk-26B2YPIV.js";
import "/build/_shared/chunk-VRCWIES3.js";
import "/build/_shared/chunk-X7MJWV53.js";
import {
  Cta_default
} from "/build/_shared/chunk-JSO2QJI7.js";
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
import "/build/_shared/chunk-7G67FTYO.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  Button
} from "/build/_shared/chunk-ZEGV464P.js";
import {
  hero_1_default,
  hero_2_default,
  hero_3_default,
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
  Form,
  Link,
  init_dist,
  useActionData,
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

// app/routes/_public.contests.$tournamentId.$contestId._index.tsx
var import_node = __toESM(require_node(), 1);
var import_actions = __toESM(require_actions(), 1);
var import_session = __toESM(require_session(), 1);

// app/components/public/contests/OngoingContest.tsx
init_dist();

// app/components/public/contests/SocialLink.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/SocialLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/SocialLink.tsx"
  );
  import.meta.hot.lastModified = "1757765166864.313";
}
var SocialLink_default = _c2 = _s(import_react.default.forwardRef(_c = _s(function SocialLink({
  type,
  url,
  className = "",
  ...rest
}, ref) {
  _s();
  const props = url ? {
    element: "link",
    to: url,
    ...rest
  } : {
    element: "button",
    ref,
    ...rest
  };
  const fetcher = useFetcher();
  return type === "kotmy" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "contestant_id", value: rest.contestantId }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "stage_id", value: rest.stageId }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", name: "intent", value: "kotmy_vote", variant: "outline", className: cn("p-2 flex items-center border rounded-full w-full", className), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("w-6 h-6 flex items-center justify-center rounded-full p-1"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: socialIcons[type] }, void 0, false, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grow text-xs font-bold text-center mr-2", children: [
        rest.voted ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "capitalize", children: type }, void 0, false, {
          fileName: "app/components/public/contests/SocialLink.tsx",
          lineNumber: 53,
          columnNumber: 42
        }, this),
        rest.voted ? "Voted" : " vote"
      ] }, void 0, true, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/SocialLink.tsx",
    lineNumber: 45,
    columnNumber: 29
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { ...props, variant: "outline", className: cn("p-2 flex items-center border rounded-full", {
    "border-facebook text-facebook bg-facebookBG hover:bg-facebook/15": type === "facebook",
    "border-instagram text-instagram bg-instagramBG hover:bg-instagram/15": type === "instagram",
    "border-twitter text-twitter bg-twitterBG hover:bg-twitter/15": type === "twitter",
    "border-tally text-tally bg-tallyBG hover:bg-tally/15": type === "tally",
    "border-givaah text-givaah bg-givaahBG hover:bg-givaah/15": type === "givaah"
  }, className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("w-6 h-6 flex items-center justify-center rounded-full p-1", {
      "bg-facebook": type === "facebook",
      "bg-instagram": type === "instagram",
      "bg-twitter": type === "twitter",
      "bg-tally": type === "tally",
      "bg-givaah": type === "givaah"
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: socialIcons[type] }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grow text-xs font-bold text-center mr-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "capitalize", children: type }, void 0, false, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 73,
        columnNumber: 71
      }, this),
      " vote"
    ] }, void 0, true, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/SocialLink.tsx",
    lineNumber: 57,
    columnNumber: 27
  }, this);
}, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
})), "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
var _c;
var _c2;
$RefreshReg$(_c, "%default%$React.forwardRef");
$RefreshReg$(_c2, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/ContestantCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/ContestantCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/ContestantCard.tsx"
  );
  import.meta.hot.lastModified = "1762606579540.5833";
}
function ContestantCard({
  contestant,
  socialMedia
}) {
  const fullName = `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { className: "border-2 border-primary rounded-3xl overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: contestant.image_url || no_image_default, alt: "person smiling", className: "w-full h-80 object-cover object-top" }, void 0, false, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: "Vote now for your favorite contestant" }, void 0, false, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block font-black uppercase mb-4", children: fullName }, void 0, false, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: contestant.category }, void 0, false, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        socialMedia === "kotmy" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocialLink_default, { type: socialMedia, url: contestant.social_media_url, voted: contestant.result.device_voted_for_contestant, contestantId: contestant._id, stageId: contestant.stage_id }, void 0, false, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 36,
          columnNumber: 48
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocialLink_default, { type: socialMedia, url: contestant.social_media_url, voted: contestant.result.device_voted_for_contestant }, void 0, false, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 36,
          columnNumber: 232
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TallyVoteDialog, { contestant, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocialLink_default, { type: "tally", className: "w-full" }, void 0, false, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 38,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/ContestantCard.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c3 = ContestantCard;
var _c3;
$RefreshReg$(_c3, "ContestantCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/OngoingContest.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/OngoingContest.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/OngoingContest.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.6953";
}
function OngoingContest({
  contest,
  stage
}) {
  _s2();
  const [searchParams, setUrlSearchParams] = useSearchParams();
  const status = contest.status;
  const color = status === "ongoing" ? "green" : status === "completed" ? "red" : "gray";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3 uppercase", children: contest.name }, void 0, false, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 42,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-satoshi-medium", children: contest.desc }, void 0, false, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 43,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/OngoingContest.tsx",
          lineNumber: 41,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6 grid grid-cols-2 gap-2 max-w-4xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Status" }, void 0, false, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 47,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StatusTag, { status, color }, void 0, false, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 48,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 46,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }, void 0, false, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 51,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-4 flex-wrap capitalize", children: contest.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
              "~ ",
              category
            ] }, category, true, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 53,
              columnNumber: 69
            }, this)) }, void 0, false, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 52,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 50,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }, void 0, false, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 57,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block", children: contest.prizes }, void 0, false, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 58,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 56,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/OngoingContest.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContestTimer, { deadline: new Date(contest.end_date), title: "contest ends in" }, void 0, false, {
          fileName: "app/components/public/contests/OngoingContest.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: contest.image || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" }, void 0, false, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/OngoingContest.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "wrapper my-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-accent text-lg lg:text-2xl font-satoshi-bold mb-3 sm:mb-6 uppercase", children: [
        contest.name,
        " contestants"
      ] }, void 0, true, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col sm:flex-row justify-between sm:items-end gap-6 sm:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white py-2 text-sm", placeholder: "Search contestant by name" }, void 0, false, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 69,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Select, { value: String(stage?.stage), onValueChange: (val) => setUrlSearchParams((prev) => {
            prev.set("stage", val);
            return prev;
          }), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectTrigger, { className: "sm:w-[180px] h-auto rounded-lg shadow-none bg-white hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectValue, { placeholder: "Stage 1" }, void 0, false, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 75,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 74,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectContent, { children: contest.stages.map((stage2) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: String(stage2.stage), className: "focus:bg-blue-700/25", children: [
              "Stage ",
              stage2.stage
            ] }, stage2.stage, true, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 78,
              columnNumber: 62
            }, this)) }, void 0, false, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 77,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 70,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/OngoingContest.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `scoreboard?${searchParams.toString()}`, className: "w-fit text-accent font-bold hover:underline underline-offset-4", children: "See scoreboard" }, void 0, false, {
          fileName: "app/components/public/contests/OngoingContest.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-16 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16", children: stage?.contestants.map((contestant) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContestantCard, { contestant, socialMedia: stage.rates.social_media.type }, contestant.code, false, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 85,
        columnNumber: 59
      }, this)) }, void 0, false, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/OngoingContest.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/OngoingContest.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s2(OngoingContest, "hcOu2v7Kh0sl/+285fVFvuU/iwg=", false, function() {
  return [useSearchParams];
});
_c4 = OngoingContest;
var _c4;
$RefreshReg$(_c4, "OngoingContest");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/RegistrationSuccess.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/RegistrationSuccess.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/RegistrationSuccess.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.7246";
}
function RegistrationSuccess({
  contestant,
  contest
}) {
  const fullName = `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`;
  const formattedDob = new Date(contestant.contestant_biodata.dob).toDateString();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-secondary p-10 sm:rounded-3xl flex flex-col max-w-xl gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("aside", { className: "border-2 border-success-700 bg-success-500 rounded-xl p-6 flex items-start gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: icons.alertCheckIcon, width: 30, height: 30, className: "mt-1" }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationSuccess.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block font-bold mb-2", children: "Dear Esteemed Contestant/Guardian" }, void 0, false, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-medium", children: [
          "Congratulations, ",
          fullName,
          "! Your submission to ",
          contest.name,
          " has been received successfully. Your code is ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-semibold", children: contestant.code }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 36,
            columnNumber: 38
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegistrationSuccess.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationSuccess.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid sm:grid-cols-2 justify-between gap-6 sm:gap-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: contestant.image_url, alt: "kid smiling", className: "rounded-3xl" }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationSuccess.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid gap-1 leading-tight", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block font-satoshi-bold", children: "Full Name" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 44,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block capitalize", children: fullName }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 45,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block font-satoshi-bold", children: "Date of Birth" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 48,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block", children: formattedDob }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 49,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block font-satoshi-bold", children: "Gender" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 52,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block capitalize", children: contestant.contestant_biodata.sex.toLowerCase() }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 53,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block font-satoshi-bold", children: "Email Address" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 56,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block truncate ...", children: contestant.contestant_biodata.email }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 57,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 55,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block font-satoshi-bold", children: "State of Residence" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 60,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block capitalize", children: contestant.contestant_biodata.state_of_residence }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 61,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 59,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegistrationSuccess.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationSuccess.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/RegistrationSuccess.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c5 = RegistrationSuccess;
var _c5;
$RefreshReg$(_c5, "RegistrationSuccess");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/RegistrationForm.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/RegistrationForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/RegistrationForm.tsx"
  );
  import.meta.hot.lastModified = "1763272329652.77";
}
function RegistrationForm({
  contest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "POST", encType: "multipart/form-data", className: "bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-2xl font-satoshi-bold", children: 'Participate by filling in your basic information below and clicking "Submit".' }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", labelText: "First Name", id: "first_name", name: "first_name", placeholder: "Enter your first name", required: true }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", labelText: "Last Name", id: "last_name", name: "last_name", placeholder: "Enter your last name", required: true }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", labelText: "Email Address", id: "email", name: "email", placeholder: "Enter your email address", required: true }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", type: "date", labelText: "Date of Birth", id: "dob", name: "dob", placeholder: "dd/mm/yyyy", max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], required: true }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "gender", className: "font-bold flex flex-col", children: [
        "Gender",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { name: "sex", required: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectValue, { placeholder: "Gender" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 46,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 45,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectContent, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }, void 0, false, {
              fileName: "app/components/public/contests/RegistrationForm.tsx",
              lineNumber: 49,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" }, void 0, false, {
              fileName: "app/components/public/contests/RegistrationForm.tsx",
              lineNumber: 50,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 48,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 44,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "state_of_residence", className: "font-bold flex flex-col", children: [
        "State of Residence",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { name: "state_of_residence", required: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectValue, { placeholder: "Select a state" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 57,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 56,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectContent, { children: Object.entries(nigerianStates).map(([key, val]) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: val }, key, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 60,
            columnNumber: 81
          }, this)) }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 59,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 55,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", type: "tel", labelText: "Whatsapp Number", id: "whatsapp_no", name: "whatsapp_no", placeholder: "Enter your whatsapp number", required: true }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "category", className: "font-bold flex flex-col", children: [
        "Category",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { name: "category", required: !!contest.categories.length, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectValue, { placeholder: "Select a category" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 70,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 69,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectContent, { children: contest.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: category, className: "focus:bg-blue-700/25", children: category }, category, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 73,
            columnNumber: 65
          }, this)) }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 72,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "textarea", labelClassNames: "col-span-2", labelText: "What would you like your voters to know?", id: "info", name: "info", placeholder: "" }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DragnDrop, { labelText: "Upload Image", name: "contestant_image", multiple: true, required: true }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "contestId", value: contest._id }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { element: "button", type: "submit", name: "intent", value: "register", className: "md:self-end", children: "Submit" }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/RegistrationForm.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c6 = RegistrationForm;
var _c6;
$RefreshReg$(_c6, "RegistrationForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/RegisteringContest.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/RegisteringContest.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/RegisteringContest.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.7979";
}
function RegisteringContest({
  contest
}) {
  _s3();
  const actionRes = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3", children: contest.name }, void 0, false, {
            fileName: "app/components/public/contests/RegisteringContest.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-satoshi-medium", children: contest.desc }, void 0, false, {
            fileName: "app/components/public/contests/RegisteringContest.tsx",
            lineNumber: 39,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegisteringContest.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContestTimer, { deadline: new Date(contest.reg_deadline), title: "registration ends in" }, void 0, false, {
          fileName: "app/components/public/contests/RegisteringContest.tsx",
          lineNumber: 41,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: contest.image || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" }, void 0, false, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegisteringContest.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "sm:wrapper my-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContestGuidelines, { contest }, void 0, false, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      actionRes?.data ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RegistrationSuccess, { contestant: actionRes.data, contest }, void 0, false, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RegistrationForm, { contest }, void 0, false, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 50,
        columnNumber: 83
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegisteringContest.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/RegisteringContest.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "my-8 md:my-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-2xl sm:text-[40px] leading-snug font-satoshi-black w-4/5 max-w-lg text-center mx-auto my-10", children: "Over 500 registered participants and counting" }, void 0, false, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContestantSlider, { contestants: [{
        id: "sdjc",
        image: hero_1_default
      }, {
        id: "adcn",
        image: hero_2_default
      }, {
        id: "kjsd",
        image: hero_3_default
      }] }, void 0, false, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegisteringContest.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/RegisteringContest.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s3(RegisteringContest, "KxkfxneqwepeuD+CNl/zGkqvmhQ=", false, function() {
  return [useActionData];
});
_c7 = RegisteringContest;
var _c7;
$RefreshReg$(_c7, "RegisteringContest");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_public.contests.$tournamentId.$contestId._index.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.contests.$tournamentId.$contestId._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.contests.$tournamentId.$contestId._index.tsx"
  );
  import.meta.hot.lastModified = "1762633232497.1028";
}
function ContestPage() {
  _s4();
  const stageContestants = useRouteLoaderData("routes/_public.contests.$tournamentId.$contestId");
  if (!stageContestants)
    throw new Error("Could not load stage contestants");
  const {
    contest,
    stage
  } = stageContestants;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "grow", children: contest.status === "registering" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(RegisteringContest, { contest }, void 0, false, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId._index.tsx",
    lineNumber: 55,
    columnNumber: 49
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(OngoingContest, { contest, stage }, void 0, false, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId._index.tsx",
    lineNumber: 55,
    columnNumber: 92
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId._index.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s4(ContestPage, "QoRvEnUre1OHJlLk9TVisF+NY90=", false, function() {
  return [useRouteLoaderData];
});
_c8 = ContestPage;
var _c8;
$RefreshReg$(_c8, "ContestPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ContestPage as default
};
//# sourceMappingURL=/build/routes/_public.contests.$tournamentId.$contestId._index-PVGECU3A.js.map
