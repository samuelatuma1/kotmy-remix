import {
  no_image_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import {
  StatusTag
} from "/build/_shared/chunk-6BY4NF3F.js";
import {
  Link2 as Link
} from "/build/_shared/chunk-RJTUOXH3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/reusables/ContestCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/ContestCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/ContestCard.tsx"
  );
  import.meta.hot.lastModified = "1760080481941.8389";
}
function ContestCard({
  contest,
  to,
  withTag,
  withCategory
}) {
  const status = withTag ? contest.status : null;
  const color = status === "registering" ? "yellow" : status === "ongoing" ? "green" : status === "completed" ? "red" : "gray";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to, className: "flex flex-col gap-2 max-w-lg relative w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: contest.image || no_image_default, alt: "contest image", className: "rounded-3xl h-56 object-cover" }, void 0, false, {
      fileName: "app/components/reusables/ContestCard.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    withTag ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusTag, { status: contest.status, className: "absolute top-4 left-4", color }, void 0, false, {
      fileName: "app/components/reusables/ContestCard.tsx",
      lineNumber: 34,
      columnNumber: 24
    }, this) : null,
    withCategory ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: "Category" }, void 0, false, {
      fileName: "app/components/reusables/ContestCard.tsx",
      lineNumber: 35,
      columnNumber: 29
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold capitalize", children: contest.name }, void 0, false, {
      fileName: "app/components/reusables/ContestCard.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/reusables/ContestCard.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = ContestCard;
var _c;
$RefreshReg$(_c, "ContestCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ContestCard
};
//# sourceMappingURL=/build/_shared/chunk-37FD6ZTR.js.map
