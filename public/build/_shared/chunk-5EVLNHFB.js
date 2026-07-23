import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  useLocation,
  useNavigate
} from "/build/_shared/chunk-NO4YTAWP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/reusables/Pagination.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/Pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/Pagination.tsx"
  );
  import.meta.hot.lastModified = "1773328911950.5693";
}
function Pagination({
  className = "",
  pageSize = 20,
  lastKey,
  firstKey
}) {
  _s();
  const navigate = useNavigate();
  const location = useLocation();
  const [rows, setRows] = (0, import_react2.useState)(pageSize);
  const updateSearch = (newParams) => {
    const url = new URL(window.location.href);
    Object.entries(newParams).forEach(([k, v]) => {
      if (v === null || v === "") {
        url.searchParams.delete(k);
      } else {
        url.searchParams.set(k, v);
      }
    });
    navigate(`${url.pathname}${url.search}`, {
      replace: false
    });
  };
  const onNext = () => {
    updateSearch({
      page_size: String(rows),
      last_key_id: lastKey ?? "",
      direction: "next"
    });
  };
  const onPrev = () => {
    updateSearch({
      first_key_id: firstKey ?? "",
      page_size: String(rows),
      direction: "previous"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex gap-2", children: [
      "Rows per page",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "rows", id: "rows", className: "w-12 rounded-md border", defaultValue: rows, onChange: (e) => setRows(parseInt(e.target.value)) }, void 0, false, {
        fileName: "app/components/reusables/Pagination.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/reusables/Pagination.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex gap-6 md:gap-8 justify-center items-center font-semibold ${className}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onPrev, className: "flex gap-1 items-center rounded py-1 px-2 hover:outline outline-primary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.arrowPrevIcon }, void 0, false, {
          fileName: "app/components/reusables/Pagination.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this),
        " Prev"
      ] }, void 0, true, {
        fileName: "app/components/reusables/Pagination.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "whitespace-nowrap", children: "Page controls" }, void 0, false, {
        fileName: "app/components/reusables/Pagination.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onNext, className: "flex gap-1 items-center rounded py-1 px-2 hover:outline outline-primary", children: [
        "Next ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.arrowNextIcon }, void 0, false, {
          fileName: "app/components/reusables/Pagination.tsx",
          lineNumber: 75,
          columnNumber: 26
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/reusables/Pagination.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/reusables/Pagination.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/reusables/Pagination.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_s(Pagination, "xCbFfjUJTjHU5ShmjJDfIO8t2uk=", false, function() {
  return [useNavigate, useLocation];
});
_c = Pagination;
var _c;
$RefreshReg$(_c, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Pagination
};
//# sourceMappingURL=/build/_shared/chunk-5EVLNHFB.js.map
