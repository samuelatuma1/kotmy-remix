import {
  require_contestant
} from "/build/_shared/chunk-6DQOFBTV.js";
import {
  toOrdinal
} from "/build/_shared/chunk-O2MGZLIP.js";
import {
  no_image_default
} from "/build/_shared/chunk-52GSXTRN.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link2 as Link,
  useLoaderData,
  useNavigation
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

// app/routes/user.contestantprofilecontests.$profileId.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_contestant = __toESM(require_contestant(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.contestantprofilecontests.$profileId.tsx"' + id);
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
    "app/routes/user.contestantprofilecontests.$profileId.tsx"
  );
  import.meta.hot.lastModified = "1786806183254.7405";
}
function useContestantProfileContestsController() {
  _s();
  const {
    data,
    error
  } = useLoaderData();
  const navigation = useNavigation();
  const [contests, setContests] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    if (data) {
      setContests(data);
    }
  }, [data]);
  (0, import_react.useEffect)(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: error?.detail?.toString() ?? "Error occurred"
      });
    }
  }, [error]);
  const isLoading = navigation.state === "loading" && contests.length === 0;
  return {
    contests,
    isLoading
  };
}
_s(useContestantProfileContestsController, "me1ENMlS52/1xbbBj9yVfMC5xf0=", false, function() {
  return [useLoaderData, useNavigation];
});
function UserContestantProfileContests() {
  _s2();
  const {
    contests,
    isLoading
  } = useContestantProfileContestsController();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-white text-brand-navy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-brand-navy px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-white/70", children: "Contestant profile" }, void 0, false, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-3 max-w-xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl", children: "Contests for profile" }, void 0, false, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base", children: "These are the contests this profile is participating in, along with the contestant\u2019s performance." }, void 0, false, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-8 sm:py-10 lg:py-12", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestsSkeleton, {}, void 0, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 108,
      columnNumber: 24
    }, this) : contests.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3", children: contests.map((contest) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestResultCard, { contest }, contest._id, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 109,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 108,
      columnNumber: 69
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {}, void 0, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 110,
      columnNumber: 22
    }, this) }, void 0, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s2(UserContestantProfileContests, "gM8NfMyOE3KXARKLniYbKTnlZq4=", false, function() {
  return [useContestantProfileContestsController];
});
_c = UserContestantProfileContests;
function ContestResultCard({
  contest
}) {
  const result = contest.final_result_scores?.[0];
  const fullName = result ? `${result.contestant_biodata.first_name} ${result.contestant_biodata.last_name}`.trim() : "";
  const image = result?.contestant_image_url || no_image_default;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-grey bg-white shadow-[0_16px_48px_rgba(14,42,77,0.08)] transition-transform duration-300 hover:-translate-y-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image, alt: fullName || contest.name, className: "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" }, void 0, false, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-navy/45 to-transparent" }, void 0, false, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      result && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy shadow-[0_8px_24px_rgba(14,42,77,0.12)]", children: [
        "Position ",
        result.position
      ] }, void 0, true, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 129,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-4 px-5 py-5 sm:px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate", children: contest.name }, void 0, false, {
          fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-2 text-xl font-black tracking-tight text-brand-navy", children: fullName || "Contestant" }, void 0, false, {
          fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        result?.contestant_biodata.email && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-brand-slate", children: result.contestant_biodata.email }, void 0, false, {
          fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
          lineNumber: 142,
          columnNumber: 48
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      result && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto grid grid-cols-2 gap-3 border-t border-brand-grey pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-secondary px-4 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-slate", children: "Position" }, void 0, false, {
            fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-lg font-black text-brand-navy", children: toOrdinal(result.position) }, void 0, false, {
            fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
          lineNumber: 146,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-secondary px-4 py-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-slate", children: "Total votes Percent" }, void 0, false, {
            fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-lg font-black text-brand-pink", children: [
            result.total_votes?.toFixed(2),
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 145,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
_c2 = ContestResultCard;
function ContestsSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3", children: Array.from({
    length: 6
  }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse overflow-hidden rounded-[1.75rem] border border-brand-grey bg-white shadow-[0_16px_48px_rgba(14,42,77,0.08)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-[4/5] bg-slate-200" }, void 0, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 168,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 px-5 py-5 sm:px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-1/2 rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
          lineNumber: 171,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-3/4 rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
          lineNumber: 172,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-1/2 rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
          lineNumber: 173,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 170,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto grid grid-cols-2 gap-3 border-t border-brand-grey pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-16 rounded-2xl bg-slate-200" }, void 0, false, {
          fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
          lineNumber: 176,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-16 rounded-2xl bg-slate-200" }, void 0, false, {
          fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 175,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 169,
      columnNumber: 11
    }, this)
  ] }, index, true, {
    fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
    lineNumber: 167,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
    lineNumber: 164,
    columnNumber: 10
  }, this);
}
_c3 = ContestsSkeleton;
function EmptyState() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-dashed border-brand-grey bg-secondary px-6 py-14 text-center sm:px-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-grey bg-white shadow-[0_10px_24px_rgba(14,42,77,0.06)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", className: "h-7 w-7 text-brand-pink", fill: "none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 8v8M8 12h8", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, void 0, false, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "1.8" }, void 0, false, {
        fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
        lineNumber: 189,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 187,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-2xl font-black tracking-tight text-brand-navy", children: "No contests for this profile" }, void 0, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-brand-slate", children: "This profile is not participating in any contests at the moment." }, void 0, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 195,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/user/contestantprofiles", className: "mt-6 inline-flex items-center rounded-full bg-brand-pink px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-pink/90", children: "Back to profiles" }, void 0, false, {
      fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.contestantprofilecontests.$profileId.tsx",
    lineNumber: 185,
    columnNumber: 10
  }, this);
}
_c4 = EmptyState;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "UserContestantProfileContests");
$RefreshReg$(_c2, "ContestResultCard");
$RefreshReg$(_c3, "ContestsSkeleton");
$RefreshReg$(_c4, "EmptyState");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UserContestantProfileContests as default
};
//# sourceMappingURL=/build/routes/user.contestantprofilecontests.$profileId-LLQOPPMX.js.map
