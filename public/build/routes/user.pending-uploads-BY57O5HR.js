import {
  toast
} from "/build/_shared/chunk-7OO7HPYD.js";
import {
  no_image_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Link2 as Link,
  useLoaderData
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
  import.meta.hot.lastModified = "1761973780275.819";
}
var UserHelper = class {
  flattenToContestantUpload(contestWStageWContetant) {
    const contestantsUpload = [];
    for (const stage of contestWStageWContetant.stages) {
      for (const contestant of stage.contestants) {
        const contestantUpload = {
          fullName: `${contestant.contestant_biodata?.first_name} ${contestant.contestant_biodata?.last_name}`,
          contestantCode: contestant.code,
          contestName: contestWStageWContetant.name,
          stage: stage.stage,
          status: stage.status,
          stageMediaType: stage.media_type ?? "image",
          contestImage: contestWStageWContetant.image_url ?? "",
          contestantId: contestant._id
        };
        contestantsUpload.push(contestantUpload);
      }
    }
    return contestantsUpload;
  }
  flattenToContestantsPendingUpload(contestsWStageWContetant) {
    let pendingUploads = [];
    for (const contest of contestsWStageWContetant) {
      const flattenedContest = this.flattenToContestantUpload(contest);
      pendingUploads.push(...flattenedContest);
    }
    return pendingUploads;
  }
};
var userHelper = new UserHelper();
var PendingUploadCard = ({
  contestImageUrl,
  contest_name,
  stage,
  full_name,
  contestantId
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/user/contestant/${contestantId}`, className: "block transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: contestImageUrl || no_image_default, alt: full_name, className: "w-full aspect-[3/4] rounded-lg object-cover" }, void 0, false, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: [
      contest_name,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      "stage ",
      stage
    ] }, void 0, true, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-1 text-lg font-bold text-gray-900", children: full_name }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/routes/user.pending-uploads.tsx",
  lineNumber: 95,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/routes/user.pending-uploads.tsx",
  lineNumber: 94,
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
      let flattenedUploads = userHelper.flattenToContestantsPendingUpload(data);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-[#817EFB] overflow-hidden rounded-3xl py-8 md:py-12 lg:py-16 px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: "Pending uploads" }, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 148,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-base md:text-lg text-purple-100", children: "Please, we are expecting your uploads for the following stages" }, void 0, false, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 147,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 146,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-12 md:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3", children: pendingUploads.map((pendingUpload, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PendingUploadCard, { contestImageUrl: pendingUpload.contestImage, contest_name: pendingUpload.contestName, stage: pendingUpload.stage.toString(), full_name: pendingUpload.fullName, contestantId: pendingUpload.contestantId }, pendingUpload.contestantId, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 170,
      columnNumber: 57
    }, this)) }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 169,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 168,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 145,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 144,
    columnNumber: 10
  }, this);
}
_s2(UserPendingsUpload, "RgB25vrFsxklTZZEUqOxThDUD70=", false, function() {
  return [useUserPendingsUploadController];
});
_c2 = UserPendingsUpload;
var _c;
var _c2;
$RefreshReg$(_c, "PendingUploadCard");
$RefreshReg$(_c2, "UserPendingsUpload");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UserPendingsUpload as default
};
//# sourceMappingURL=/build/routes/user.pending-uploads-BY57O5HR.js.map
