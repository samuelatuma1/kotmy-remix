import {
  contestantHelper
} from "/build/_shared/chunk-2OW4B2XZ.js";
import {
  require_contestant
} from "/build/_shared/chunk-6DQOFBTV.js";
import {
  ContestantCard,
  ContestantStatisticsCard
} from "/build/_shared/chunk-AVMXBI7T.js";
import "/build/_shared/chunk-ZBDUUSMF.js";
import "/build/_shared/chunk-K6GK42SM.js";
import "/build/_shared/chunk-6V2DDTBT.js";
import "/build/_shared/chunk-4KHNCWYH.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-XBJOPW4M.js";
import "/build/_shared/chunk-2ZTNKWGC.js";
import "/build/_shared/chunk-7FCTUE5Q.js";
import "/build/_shared/chunk-A53UP4AC.js";
import "/build/_shared/chunk-K77LE7VE.js";
import "/build/_shared/chunk-IA4REYVC.js";
import "/build/_shared/chunk-3BSRYLMA.js";
import "/build/_shared/chunk-FSE6OMSF.js";
import "/build/_shared/chunk-SWGHYM4G.js";
import "/build/_shared/chunk-NX2LVYUO.js";
import "/build/_shared/chunk-QZFP5L6J.js";
import "/build/_shared/chunk-CWOOXBW5.js";
import "/build/_shared/chunk-GJTSJNT7.js";
import "/build/_shared/chunk-6HD2VEKU.js";
import "/build/_shared/chunk-HDTHGJZ5.js";
import "/build/_shared/chunk-52GSXTRN.js";
import "/build/_shared/chunk-X2QOUWUY.js";
import "/build/_shared/chunk-76VUSQVA.js";
import "/build/_shared/chunk-4X4SKXSG.js";
import "/build/_shared/chunk-OUFOGEKV.js";
import "/build/_shared/chunk-LT4K6HQS.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
import "/build/_shared/chunk-WF5NNSAN.js";
import {
  require_wallet
} from "/build/_shared/chunk-ZOVZPUI6.js";
import "/build/_shared/chunk-VCQR46EC.js";
import "/build/_shared/chunk-EV32D4DT.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import "/build/_shared/chunk-G7CHZRZX.js";
import {
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

// app/routes/_public.contest.contestant.$contestantId._index.tsx
var import_react2 = __toESM(require_react(), 1);
var import_contestant2 = __toESM(require_contestant(), 1);
var import_wallet = __toESM(require_wallet(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.contest.contestant.$contestantId._index.tsx"' + id);
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
    "app/routes/_public.contest.contestant.$contestantId._index.tsx"
  );
  import.meta.hot.lastModified = "1785912014329.4458";
}
function useContestContestantController() {
  _s();
  const [enrichedContestants, setEnrichedcontestants] = (0, import_react2.useState)([]);
  const [contestantDetailsForActiveStage, setContestantDetailsForActiveStage] = (0, import_react2.useState)(null);
  const {
    data,
    error,
    url
  } = useLoaderData();
  const [isToastFired, setIsToastFired] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    if (error && !isToastFired) {
      toast({
        variant: "destructive",
        title: "An error occured",
        description: error?.detail.toString() ?? "Error occured"
      });
      setIsToastFired(true);
    }
  }, [error, isToastFired]);
  (0, import_react2.useEffect)(() => {
    if (data) {
      const _enrichedContestants = contestantHelper.enrichContestantsDataForContest(data);
      setEnrichedcontestants(_enrichedContestants);
      setContestantDetailsForActiveStage(_enrichedContestants.find((c) => c.stageStatus === "ongoing") ?? _enrichedContestants[0] ?? null);
    }
  }, [data]);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    toast({
      title: "Link Copied",
      description: "Contestant profile link copied to clipboard."
    });
  };
  let WhatsAppText = `Please vote for my profile in the contest! Check it out here: ${url}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(WhatsAppText)}`;
  return {
    enrichedContestants,
    contestantDetailsForActiveStage,
    handleCopy,
    whatsappUrl
  };
}
_s(useContestContestantController, "P/cDKXPq05YtQ2xjAoaBORdHbJA=", false, function() {
  return [useLoaderData];
});
function ContestContestant() {
  _s2();
  const {
    enrichedContestants,
    contestantDetailsForActiveStage,
    handleCopy,
    whatsappUrl
  } = useContestContestantController();
  const profileContestant = contestantDetailsForActiveStage || enrichedContestants[0];
  console.log({
    profileContestant,
    enrichedContestants,
    contestantDetailsForActiveStage
  });
  if (!profileContestant) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-500", children: "Loading or no contestant data found..." }, void 0, false, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 160,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 159,
      columnNumber: 12
    }, this);
  }
  console.log({
    profileContestant
  });
  const {
    originalContestantData,
    stageSocialMedia,
    fullName,
    info,
    stage,
    is_evicted
  } = profileContestant;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen text-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: " pt-24 pb-16 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:flex-row items-start lg:space-x-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full lg:w-96 flex-shrink-0 mb-8 lg:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestantCard, { contestant: originalContestantData, socialMedia: stageSocialMedia }, void 0, false, {
        fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
        lineNumber: 186,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-grow pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-extrabold text-gray-900", children: fullName }, void 0, false, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 194,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-4 inline-flex items-center px-4 py-1.5 rounded-full text-base font-semibold tracking-wide bg-indigo-50 text-indigo-800", children: is_evicted ? "EVICTED" : "ACTIVE" }, void 0, false, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 197,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 193,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600 mb-6 font-light", children: info }, void 0, false, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 201,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-700 mb-8 max-w-2xl", children: contestantDetailsForActiveStage?.info ?? "No stage-specific bio available. Displaying general contestant info." }, void 0, false, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 202,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4 mb-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleCopy(), className: "bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 transform hover:scale-[1.02]", children: "Share Link" }, void 0, false, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 206,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "bg-white border border-gray-300 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-150 transform hover:scale-[1.02]", children: "Share via WhatsApp" }, void 0, false, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 209,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 205,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 192,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 191,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 gap-8 pt-6 mt-6 border-t border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-5xl font-extrabold text-indigo-600", children: enrichedContestants.length }, void 0, false, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 221,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500 uppercase tracking-wider mt-1", children: "Total Stages" }, void 0, false, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 222,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 220,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-5xl font-extrabold text-gray-900", children: stage }, void 0, false, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 225,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500 uppercase tracking-wider mt-1", children: "Current Stage" }, void 0, false, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 226,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 224,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-5xl font-extrabold text-gray-900", children: is_evicted ? "No" : "Yes" }, void 0, false, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 229,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500 uppercase tracking-wider mt-1", children: "In Contest" }, void 0, false, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 230,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 228,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 219,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
        lineNumber: 190,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 180,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 178,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " z-10 border-b border-gray-200 mb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pt-4 pb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Contest Stages History" }, void 0, false, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex space-x-10 text-lg font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-indigo-600 border-b-2 border-indigo-600 pb-2 cursor-pointer", children: [
          "All Stages (",
          enrichedContestants.length,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 248,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 247,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3", children: enrichedContestants.map((contestant) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestantStatisticsCard, { contestant }, `${contestant.code}-${contestant.id}`, false, {
        fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
        lineNumber: 258,
        columnNumber: 50
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
        lineNumber: 257,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 240,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
    lineNumber: 174,
    columnNumber: 10
  }, this);
}
_s2(ContestContestant, "6KE1iuEWRikVey+TUTiotAA3eUI=", false, function() {
  return [useContestContestantController];
});
_c = ContestContestant;
var _c;
$RefreshReg$(_c, "ContestContestant");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ContestContestant as default
};
//# sourceMappingURL=/build/routes/_public.contest.contestant.$contestantId._index-OJ2JBTIT.js.map
