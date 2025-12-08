import {
  StatusTag
} from "/build/_shared/chunk-XDSNFUTZ.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/public/contests/ContestGuidelines.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/ContestGuidelines.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/ContestGuidelines.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.43";
}
function ContestGuidelines({
  contest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper sm:max-w-lg sm:mx-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Status" }, void 0, false, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusTag, { status: "registering", color: "yellow" }, void 0, false, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/ContestGuidelines.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 my-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Age Categories" }, void 0, false, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-x-4 capitalize", children: contest.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          "~ ",
          category
        ] }, category, true, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 34,
          columnNumber: 61
        }, this)) }, void 0, false, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Submission Guideline" }, void 0, false, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: contest.sub_req }, void 0, false, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Submission Deadline" }, void 0, false, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: [
          "All entries must be submitted by ",
          new Date(contest.reg_deadline).toLocaleString("en-US", {
            timeStyle: "short",
            dateStyle: "long"
          }),
          "."
        ] }, void 0, true, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }, void 0, false, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 49,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: contest.prizes }, void 0, false, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/ContestGuidelines.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-2 my-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-bold", children: "Terms & Conditions" }, void 0, false, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      contest.terms_cond
    ] }, void 0, true, {
      fileName: "app/components/public/contests/ContestGuidelines.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-2 my-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-bold", children: "Additional Notes" }, void 0, false, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      contest.add_info
    ] }, void 0, true, {
      fileName: "app/components/public/contests/ContestGuidelines.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/ContestGuidelines.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = ContestGuidelines;
var _c;
$RefreshReg$(_c, "ContestGuidelines");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ContestGuidelines
};
//# sourceMappingURL=/build/_shared/chunk-7WHPCUR6.js.map
