import {
  useUserManager
} from "/build/_shared/chunk-TJ4GXEDN.js";
import {
  ContestantSlider
} from "/build/_shared/chunk-VUGLF3BJ.js";
import {
  ContestGuidelines
} from "/build/_shared/chunk-7WHPCUR6.js";
import {
  toast
} from "/build/_shared/chunk-7OO7HPYD.js";
import {
  DragnDrop
} from "/build/_shared/chunk-C6IZ72CC.js";
import {
  Button
} from "/build/_shared/chunk-FXW5HQF7.js";
import {
  nigerianStates
} from "/build/_shared/chunk-ZBCNQQYM.js";
import {
  TallyVoteDialog
} from "/build/_shared/chunk-SUCR4XNV.js";
import {
  socialIcons
} from "/build/_shared/chunk-HRBSV64D.js";
import {
  Cta_default
} from "/build/_shared/chunk-NKBOX2WC.js";
import {
  ContestTimer
} from "/build/_shared/chunk-L77OA2DX.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-RG2STY4V.js";
import {
  hero_1_default,
  hero_2_default,
  hero_3_default,
  no_image_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import {
  FormControl
} from "/build/_shared/chunk-LBAJGJUG.js";
import {
  cn
} from "/build/_shared/chunk-LOUTNZN4.js";
import {
  require_actions
} from "/build/_shared/chunk-AUWIFI2P.js";
import {
  StatusTag
} from "/build/_shared/chunk-XDSNFUTZ.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-OU5XO7XO.js";
import {
  require_session
} from "/build/_shared/chunk-UNSNIDNJ.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Form,
  Link,
  Link2,
  init_dist,
  useActionData,
  useFetcher,
  useLocation,
  useNavigate,
  useRouteLoaderData,
  useSearchParams
} from "/build/_shared/chunk-RJTUOXH3.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
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
  import.meta.hot.lastModified = "1763971795140.513";
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
var import_react4 = __toESM(require_react(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/ContestantCard.tsx"
  );
  import.meta.hot.lastModified = "1764481021035.9512";
}
function ContestantStatisticsCard({
  contestant
}) {
  _s2();
  const [totalVotes, setTotalVotes] = (0, import_react4.useState)(getContestantTotalVotes(contestant));
  function getContestantTotalVotes(contestant2) {
    if (contestant2.originalContestantData?.result?.total_votes > 0) {
      return contestant2.originalContestantData.result.total_votes;
    }
    let computedTotalVotes = 0;
    Object.entries(contestant2.originalContestantData.vote).forEach(([key, value]) => {
      if (typeof value === "number")
        computedTotalVotes += value;
    });
    return computedTotalVotes;
  }
  const {
    fullName,
    contestName,
    stage,
    stageStatus,
    contestImage,
    is_evicted,
    originalContestantData,
    stageSocialMedia
  } = contestant;
  const vote = originalContestantData.vote;
  const result = originalContestantData.result;
  console.log(contestant);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { className: "border-2 border-primary rounded-3xl overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link2, { to: `/contest/contestant/${originalContestantData._id}?stageId=${originalContestantData.stage_id}&contestantCode=${originalContestantData.code}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: originalContestantData.image_url || no_image_default, alt: fullName, className: "w-full h-80 object-cover object-top" }, void 0, false, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block font-black uppercase mb-2", children: fullName }, void 0, false, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: contestName }, void 0, false, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block text-[#5F6D7E] text-xs font-medium mb-2", children: [
        "Stage ",
        stage,
        " \u2022 ",
        stageStatus.replace(/_/g, " ")
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs text-gray-500", children: "Total Votes" }, void 0, false, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xl font-bold text-indigo-700", children: totalVotes }, void 0, false, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs text-gray-500", children: "Rank" }, void 0, false, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xl font-bold text-green-700", children: originalContestantData.rank ?? "N/A" }, void 0, false, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs text-gray-500", children: "Grade" }, void 0, false, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-lg font-semibold text-gray-800", children: result?.grade ?? "N/A" }, void 0, false, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs text-gray-500", children: "Vote %" }, void 0, false, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-lg font-semibold text-blue-600", children: [
            result?.overall_vote_percentage ?? 0,
            "%"
          ] }, void 0, true, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block text-xs text-gray-500 mb-1", children: "Votes by Channel" }, void 0, false, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-semibold capitalize", children: stageSocialMedia }, void 0, false, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 86,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-bold", children: vote.social_media }, void 0, false, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 87,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-semibold", children: "Tally" }, void 0, false, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 92,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-bold", children: vote.tally ?? result?.weighted_scores?.tally ?? 0 }, void 0, false, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-semibold", children: "Judge" }, void 0, false, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 96,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-bold", children: vote.judge ?? result?.weighted_scores?.judge ?? 0 }, void 0, false, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 97,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 95,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-semibold", children: "Givaah" }, void 0, false, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 100,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-bold", children: vote.givaah ?? result?.weighted_scores?.givaah ?? 0 }, void 0, false, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-semibold", children: "Bonus" }, void 0, false, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 104,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-bold", children: vote.bonus ?? result?.weighted_scores?.bonus ?? 0 }, void 0, false, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `inline-block px-3 py-1 rounded-full text-xs font-bold ${is_evicted ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`, children: is_evicted ? "Evicted" : "Active" }, void 0, false, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/ContestantCard.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s2(ContestantStatisticsCard, "fKCvANNASSgeJ34p6UWU3uhAqw8=");
_c3 = ContestantStatisticsCard;
function ContestantCard({
  contestant,
  socialMedia
}) {
  const fullName = `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`;
  console.log({
    contestant
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { className: "border-2 border-primary rounded-3xl overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link2, { to: `/contest/contestant/${contestant._id}?stageId=${contestant.stage_id}&contestantCode=${contestant.code}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: contestant.image_url || no_image_default, alt: "person smiling", className: "w-full h-80 object-cover object-top" }, void 0, false, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 127,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 126,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: "Vote now for your favorite contestant" }, void 0, false, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 130,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block font-black uppercase mb-4", children: fullName }, void 0, false, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 131,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: contestant.category }, void 0, false, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 132,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        socialMedia === "kotmy" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocialLink_default, { type: socialMedia, url: contestant.social_media_url, voted: contestant.result.device_voted_for_contestant, contestantId: contestant._id, stageId: contestant.stage_id }, void 0, false, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 134,
          columnNumber: 48
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocialLink_default, { type: socialMedia, url: contestant.social_media_url, voted: contestant.result.device_voted_for_contestant }, void 0, false, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 134,
          columnNumber: 232
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TallyVoteDialog, { contestant, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocialLink_default, { type: "tally", className: "w-full" }, void 0, false, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 136,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 135,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 133,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/ContestantCard.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
_c22 = ContestantCard;
var _c3;
var _c22;
$RefreshReg$(_c3, "ContestantStatisticsCard");
$RefreshReg$(_c22, "ContestantCard");
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
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/OngoingContest.tsx"
  );
  import.meta.hot.lastModified = "1763919392497.1965";
}
function OngoingContest({
  contest,
  stage
}) {
  _s3();
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
_s3(OngoingContest, "hcOu2v7Kh0sl/+285fVFvuU/iwg=", false, function() {
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
var import_react7 = __toESM(require_react(), 1);
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
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/RegistrationForm.tsx"
  );
  import.meta.hot.lastModified = "1768061296113.8809";
}
function useRegistrationForm({
  contest
}) {
  _s4();
  const {
    getUserStoreManager
  } = useUserManager();
  const [user, setUser] = (0, import_react7.useState)(null);
  const navigate = useNavigate();
  const referralKey = "referral_code";
  (0, import_react7.useEffect)(() => {
    const user2 = getUserStoreManager();
    setUser(user2);
  }, []);
  const addQueryParams = (url, key, value) => {
    const fullURL = new URL(url);
    fullURL.searchParams.set(key, value);
    return fullURL.toString();
  };
  const getQueryParam = (key) => {
    let url = window.location.href;
    const fullURL = new URL(url);
    return fullURL.searchParams.get(key) ?? "";
  };
  const copyReferalLink = async () => {
    const origin = window.location.origin;
    const fullPath = `${origin}${path}`;
    const urlWithReferralId = addQueryParams(fullPath, referralKey, user?.referral_code);
    await navigator.clipboard.writeText(urlWithReferralId);
    toast({
      title: "Link Copied",
      description: "Your referral link has been successfully copied, hurray."
    });
  };
  const location = useLocation();
  const getReferalLinkForWhatsAppShare = () => {
    const origin = window.location.origin;
    const fullPath = `${origin}${path}`;
    const urlWithReferralId = addQueryParams(fullPath, "referral_code", user?.referral_code);
    let WhatsAppText = `Please use my referal link to register for KOTMY's ${contest.name} contest. click on the link to register ${urlWithReferralId}`;
    return `https://wa.me/?text=${encodeURIComponent(WhatsAppText)}`;
  };
  const pathname = location.pathname;
  const search = location.search;
  const hash = location.hash;
  const path = pathname + search + hash;
  return {
    user,
    navigate,
    copyReferalLink,
    getReferalLinkForWhatsAppShare,
    path,
    getQueryParam,
    referralKey
  };
}
_s4(useRegistrationForm, "cRHMWtsx7rI5Zb7yN0TA92eC4nE=", false, function() {
  return [useUserManager, useNavigate, useLocation];
});
function RegistrationForm({
  contest
}) {
  _s22();
  const {
    user,
    navigate,
    copyReferalLink,
    getReferalLinkForWhatsAppShare,
    path,
    getQueryParam,
    referralKey
  } = useRegistrationForm({
    contest
  });
  if (!user) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full max-w-xl bg-white border rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 py-12 px-6 sm:px-12 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { width: "64", height: "64", fill: "none", viewBox: "0 0 24 24", className: "mx-auto mb-2 text-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z", fill: "currentColor" }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 111,
        columnNumber: 114
      }, this) }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-2xl font-satoshi-bold text-accent", children: "Sign In Required" }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 112,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-700 text-base max-w-md", children: "You must be signed in to register for this contest. Please sign in to continue and unlock the registration form or refer your friends and win great prices." }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { element: "button", onClick: () => navigate(`/login?redirectTo=${encodeURIComponent(path)}`), className: "mt-2 px-8 py-3 text-lg rounded-lg font-bold bg-accent text-white hover:bg-accent/90 transition", children: "Sign In" }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 115,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm text-gray-400 mt-2", children: [
        "Don't have an account? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "underline text-accent cursor-pointer", onClick: () => navigate(`/signup?redirectTo=${encodeURIComponent(path)}`), children: "Sign up here" }, void 0, false, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 116,
          columnNumber: 82
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 116,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 110,
      columnNumber: 12
    }, this);
  }
  ;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "POST", encType: "multipart/form-data", className: "bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-2xl font-satoshi-bold", children: 'Participate by filling in your basic information below and clicking "Submit".' }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 121,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      "Refer your friends to this contest and win big prices. ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 126,
        columnNumber: 72
      }, this),
      "Click to copy referral link \xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: copyReferalLink, className: "inline-flex items-center gap-2 px-3 py-1.5 max-h-10 rounded-md font-bold bg-accent text-white hover:bg-accent/90 transition shadow text-sm mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 130,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 8v8m0 0l-4-4m4 4l4-4" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 131,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 129,
          columnNumber: 21
        }, this),
        "Refer"
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 128,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 135,
        columnNumber: 17
      }, this),
      "Or Share on ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { target: "_blank", rel: "noopener noreferrer", href: getReferalLinkForWhatsAppShare(), className: "inline-block px-3 py-1.5 rounded-md bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition", children: "WhatsApp" }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 136,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 125,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", labelText: "First Name", id: "first_name", name: "first_name", placeholder: "Enter your first name", required: true }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 141,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", labelText: "Last Name", id: "last_name", name: "last_name", placeholder: "Enter your last name", required: true }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 142,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 140,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", labelText: "Email Address", id: "email", name: "email", value: `${user?.email}`, readOnly: true, placeholder: "Enter your email address", required: true }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 145,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", type: "date", labelText: "Date of Birth", id: "dob", name: "dob", placeholder: "dd/mm/yyyy", max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], required: true }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 146,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 144,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "gender", className: "font-bold flex flex-col", children: [
        "Gender",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { name: "sex", required: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectValue, { placeholder: "Gender" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 152,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 151,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectContent, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }, void 0, false, {
              fileName: "app/components/public/contests/RegistrationForm.tsx",
              lineNumber: 155,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" }, void 0, false, {
              fileName: "app/components/public/contests/RegistrationForm.tsx",
              lineNumber: 156,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 154,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 150,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 149,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "state_of_residence", className: "font-bold flex flex-col", children: [
        "State of Residence",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { name: "state_of_residence", required: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectValue, { placeholder: "Select a state" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 163,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 162,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectContent, { children: Object.entries(nigerianStates).map(([key, val]) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: val }, key, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 166,
            columnNumber: 81
          }, this)) }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 165,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 161,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 160,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 148,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", type: "tel", labelText: "Whatsapp Number", id: "whatsapp_no", name: "whatsapp_no", placeholder: "Enter your whatsapp number", required: true }, void 0, false, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 174,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "category", className: "font-bold flex flex-col", children: [
        "Category",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { name: "category", required: !!contest.categories.length, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectValue, { placeholder: "Select a category" }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 178,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 177,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectContent, { children: contest.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: category, className: "focus:bg-blue-700/25", children: category }, category, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 181,
            columnNumber: 65
          }, this)) }, void 0, false, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 180,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 176,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 175,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 173,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", labelClassNames: "col-span-1 max-w-full", labelText: "Referral code", id: "referral_code", name: "referral_code", placeholder: "", defaultValue: `${getQueryParam(referralKey)}` }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 190,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 189,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "textarea", labelClassNames: "col-span-2 max-w-full", labelText: "What would you like your voters to know?", id: "info", name: "info", placeholder: "" }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 193,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DragnDrop, { labelText: "Upload Image", name: "contestant_image", multiple: true, required: true }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 198,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "contestId", value: contest._id }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 199,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { element: "button", type: "submit", name: "intent", value: "register", className: "md:self-end", children: "Submit" }, void 0, false, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 200,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/RegistrationForm.tsx",
    lineNumber: 120,
    columnNumber: 10
  }, this);
}
_s22(RegistrationForm, "QBGJSYYRWA0/HCqjyHIca2aCRFw=", false, function() {
  return [useRegistrationForm];
});
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
var _s5 = $RefreshSig$();
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
  _s5();
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
_s5(RegisteringContest, "KxkfxneqwepeuD+CNl/zGkqvmhQ=", false, function() {
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
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.contests.$tournamentId.$contestId._index.tsx"
  );
  import.meta.hot.lastModified = "1768068725825.4275";
}
function ContestPage() {
  _s6();
  const stageContestants = useRouteLoaderData("routes/_public.contests.$tournamentId.$contestId");
  if (!stageContestants)
    throw new Error("Could not load stage contestants");
  const {
    contest,
    stage
  } = stageContestants;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "grow", children: contest.status === "registering" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(RegisteringContest, { contest }, void 0, false, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId._index.tsx",
    lineNumber: 67,
    columnNumber: 49
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(OngoingContest, { contest, stage }, void 0, false, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId._index.tsx",
    lineNumber: 67,
    columnNumber: 92
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId._index.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s6(ContestPage, "QoRvEnUre1OHJlLk9TVisF+NY90=", false, function() {
  return [useRouteLoaderData];
});
_c8 = ContestPage;
var _c8;
$RefreshReg$(_c8, "ContestPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ContestantStatisticsCard,
  ContestantCard,
  ContestPage
};
//# sourceMappingURL=/build/_shared/chunk-FZQ4VFXL.js.map
