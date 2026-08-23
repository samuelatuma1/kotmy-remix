import {
  require_contestant
} from "/build/_shared/chunk-6DQOFBTV.js";
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

// app/routes/user.contestantprofiles.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/user.contestantprofiles.tsx"' + id);
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
    "app/routes/user.contestantprofiles.tsx"
  );
  import.meta.hot.lastModified = "1786803490147.476";
}
function useContestantProfilesController() {
  _s();
  const {
    data,
    error
  } = useLoaderData();
  const navigation = useNavigation();
  const [profiles, setProfiles] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    if (data) {
      setProfiles(data);
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
  const isLoading = navigation.state === "loading" && profiles.length === 0;
  return {
    profiles,
    isLoading
  };
}
_s(useContestantProfilesController, "XO3h495qVLL+vUhYo0EqXB2sSMI=", false, function() {
  return [useLoaderData, useNavigation];
});
function UserContestantProfiles() {
  _s2();
  const {
    profiles,
    isLoading
  } = useContestantProfilesController();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-white text-brand-navy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-brand-navy px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-white/70", children: "My account" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-3 max-w-xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl", children: "Contestant profiles" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base", children: "These are the profiles you have used to register for contests. Select a profile to view the contests it is participating in." }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-8 sm:py-10 lg:py-12", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfilesSkeleton, {}, void 0, false, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 101,
      columnNumber: 24
    }, this) : profiles.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3", children: profiles.map((profile) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContestantProfileCard, { profile }, profile._id, false, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 102,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 101,
      columnNumber: 69
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {}, void 0, false, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 103,
      columnNumber: 22
    }, this) }, void 0, false, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.contestantprofiles.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.contestantprofiles.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
}
_s2(UserContestantProfiles, "YKyexNtvlPDkSQWmzT2r4ignsNQ=", false, function() {
  return [useContestantProfilesController];
});
_c = UserContestantProfiles;
function ContestantProfileCard({
  profile
}) {
  const fullName = `${profile.first_name} ${profile.last_name}`.trim();
  const contests = profile.contest ?? [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/user/contestantprofilecontests/${profile._id}`, className: "group block h-full transition-transform duration-300 hover:-translate-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-grey bg-white shadow-[0_16px_48px_rgba(14,42,77,0.08)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-4 px-5 py-5 sm:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-pink/10 text-lg font-black text-brand-pink", children: fullName.charAt(0).toUpperCase() || "?" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full border border-brand-grey bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-pink transition-colors duration-200 group-hover:border-brand-pink group-hover:bg-white", children: "View contests" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 120,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-black tracking-tight text-brand-navy", children: fullName || "Unnamed profile" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this),
      profile.email && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-brand-slate", children: profile.email }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 133,
        columnNumber: 31
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 129,
      columnNumber: 11
    }, this),
    profile.info && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "line-clamp-2 text-sm leading-6 text-brand-charcoal", children: profile.info }, void 0, false, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 136,
      columnNumber: 28
    }, this),
    profile.whatsapp_no && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex items-center gap-2 text-sm text-brand-slate", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-brand-navy", children: "WhatsApp:" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 141,
        columnNumber: 15
      }, this),
      profile.whatsapp_no
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 140,
      columnNumber: 35
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto border-t border-brand-grey pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate", children: contests.length > 0 ? "Participating contests" : "No contests yet" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, this),
      contests.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: contests.map((contest) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-brand-navy", children: contest.name }, contest._id, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 150,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 149,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 145,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.contestantprofiles.tsx",
    lineNumber: 119,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/user.contestantprofiles.tsx",
    lineNumber: 118,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.contestantprofiles.tsx",
    lineNumber: 117,
    columnNumber: 10
  }, this);
}
_c2 = ContestantProfileCard;
function ProfilesSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3", children: Array.from({
    length: 6
  }).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse overflow-hidden rounded-[1.75rem] border border-brand-grey bg-white shadow-[0_16px_48px_rgba(14,42,77,0.08)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 px-5 py-5 sm:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 167,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-6 w-24 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 168,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 166,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-3/4 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 171,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-1/2 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 172,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 170,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-full rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 175,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-5/6 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 176,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 174,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto space-y-2 border-t border-brand-grey pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-32 rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 179,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-6 w-20 rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/user.contestantprofiles.tsx",
          lineNumber: 181,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-6 w-24 rounded-full bg-slate-200" }, void 0, false, {
          fileName: "app/routes/user.contestantprofiles.tsx",
          lineNumber: 182,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 180,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 178,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.contestantprofiles.tsx",
    lineNumber: 165,
    columnNumber: 11
  }, this) }, index, false, {
    fileName: "app/routes/user.contestantprofiles.tsx",
    lineNumber: 164,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/routes/user.contestantprofiles.tsx",
    lineNumber: 161,
    columnNumber: 10
  }, this);
}
_c3 = ProfilesSkeleton;
function EmptyState() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-dashed border-brand-grey bg-secondary px-6 py-14 text-center sm:px-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-grey bg-white shadow-[0_10px_24px_rgba(14,42,77,0.06)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", className: "h-7 w-7 text-brand-pink", fill: "none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 8v8M8 12h8", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "1.8" }, void 0, false, {
        fileName: "app/routes/user.contestantprofiles.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 193,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-2xl font-black tracking-tight text-brand-navy", children: "No contestant profiles" }, void 0, false, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-brand-slate", children: "You haven\u2019t registered for any contests yet. Once you register, your contestant profiles will appear here." }, void 0, false, {
      fileName: "app/routes/user.contestantprofiles.tsx",
      lineNumber: 201,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.contestantprofiles.tsx",
    lineNumber: 191,
    columnNumber: 10
  }, this);
}
_c4 = EmptyState;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "UserContestantProfiles");
$RefreshReg$(_c2, "ContestantProfileCard");
$RefreshReg$(_c3, "ProfilesSkeleton");
$RefreshReg$(_c4, "EmptyState");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UserContestantProfiles as default
};
//# sourceMappingURL=/build/routes/user.contestantprofiles-T3S2FGUH.js.map
