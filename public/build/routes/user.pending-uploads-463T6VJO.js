import {
  contestantHelper
} from "/build/_shared/chunk-2OW4B2XZ.js";
import {
  no_image_default
} from "/build/_shared/chunk-7JPCB6PC.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
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

// app/routes/user.pending-uploads.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.pending-uploads.tsx"' + id);
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
    "app/routes/user.pending-uploads.tsx"
  );
  import.meta.hot.lastModified = "1785500561366.2698";
}
var PendingUploadCard = ({
  contestImageUrl,
  contest_name,
  stage,
  full_name,
  contestantId
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/user/contestant/${contestantId}`, className: "group block h-full transition-transform duration-300 hover:-translate-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-grey bg-white shadow-[0_16px_48px_rgba(14,42,77,0.08)]", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: contestImageUrl || no_image_default, alt: full_name, className: "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-navy/45 to-transparent" }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy shadow-[0_8px_24px_rgba(14,42,77,0.12)]", children: "Pending" }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-4 px-5 py-5 sm:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate", children: contest_name }, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-pink", children: [
        "Stage ",
        stage
      ] }, void 0, true, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto flex items-end justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-black tracking-tight text-brand-navy", children: full_name }, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-full border border-brand-grey bg-secondary px-3 py-2 text-xs font-semibold text-brand-navy transition-colors duration-200 group-hover:border-brand-pink group-hover:bg-white", children: "Review" }, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "app/routes/user.pending-uploads.tsx",
  lineNumber: 66,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/user.pending-uploads.tsx",
  lineNumber: 65,
  columnNumber: 7
}, this);
_c = PendingUploadCard;
function useUserPendingsUploadController() {
  _s();
  const {
    data,
    error,
    authRequired
  } = useLoaderData();
  const [pendingUploads, setPendingUploads] = (0, import_react.useState)([]);
  if (error) {
    toast({
      variant: "destructive",
      title: "An error occured",
      description: error?.detail.toString() ?? "Error occured"
    });
  }
  (0, import_react.useEffect)(() => {
    if (data) {
      let flattenedUploads = contestantHelper.enrichContestsContestantsData(data);
      setPendingUploads(flattenedUploads);
      console.log({
        flattenedUploads
      });
    }
  }, [data]);
  return {
    pendingUploads
  };
}
_s(useUserPendingsUploadController, "WuWmGlfItZezI0jeYn2ePlanIKo=", false, function() {
  return [useLoaderData];
});
function UserPendingsUpload() {
  _s2();
  const {
    pendingUploads
  } = useUserPendingsUploadController();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-white text-brand-navy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-0 lg:grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-brand-navy px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-white/70", children: "Upload center" }, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 138,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-3 max-w-xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl", children: "Pending uploads" }, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 141,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base", children: "Your next submissions are waiting here. Open a card to continue where you left off." }, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 144,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 137,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 135,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-8 sm:py-10 lg:py-12", children: pendingUploads.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3", children: pendingUploads.map((pendingUpload) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PendingUploadCard, { contestImageUrl: pendingUpload.contestImage, contest_name: pendingUpload.contestName, stage: pendingUpload.stage.toString(), full_name: pendingUpload.fullName, contestantId: pendingUpload.contestantId }, pendingUpload.contestantId, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 153,
      columnNumber: 52
    }, this)) }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 152,
      columnNumber: 40
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {}, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 154,
      columnNumber: 22
    }, this) }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 134,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 133,
    columnNumber: 10
  }, this);
}
_s2(UserPendingsUpload, "RgB25vrFsxklTZZEUqOxThDUD70=", false, function() {
  return [useUserPendingsUploadController];
});
_c2 = UserPendingsUpload;
function EmptyState() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-[2rem] border border-dashed border-brand-grey bg-secondary px-6 py-14 text-center sm:px-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-grey bg-white shadow-[0_10px_24px_rgba(14,42,77,0.06)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", className: "h-7 w-7 text-brand-pink", fill: "none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M7 7h10v10H7z", stroke: "currentColor", strokeWidth: "1.8" }, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M9 11.5h6M9 15h3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 168,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-2xl font-black tracking-tight text-brand-navy", children: "No pending uploads" }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-brand-slate", children: "You\u2019re all caught up right now. Once a contest stage needs attention, it will appear here." }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 164,
    columnNumber: 10
  }, this);
}
_c3 = EmptyState;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "PendingUploadCard");
$RefreshReg$(_c2, "UserPendingsUpload");
$RefreshReg$(_c3, "EmptyState");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UserPendingsUpload as default
};
//# sourceMappingURL=/build/routes/user.pending-uploads-463T6VJO.js.map
