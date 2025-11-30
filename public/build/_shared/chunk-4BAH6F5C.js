import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/hooks/useDuration.ts
var import_react = __toESM(require_react(), 1);

// app/lib/duration.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/duration.ts"
  );
  import.meta.hot.lastModified = "1757765166871.0632";
}
var DD = 24 * 60 * 60 * 1e3;
var HH = 60 * 60 * 1e3;
var MM = 60 * 1e3;
var SS = 1e3;
function getDuration(duration) {
  if (duration <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(duration / DD);
  const hours = Math.floor(duration % DD / HH);
  const minutes = Math.floor(duration % HH / MM);
  const seconds = Math.floor(duration % MM / SS);
  return { days, hours, minutes, seconds };
}

// app/hooks/useDuration.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useDuration.ts"
  );
  import.meta.hot.lastModified = "1757765166868.6184";
}
function useDuration(deadline) {
  const [duration, setDuration] = (0, import_react.useState)(deadline.getTime() - Date.now());
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setDuration((prev) => {
        if (prev - 1e3 <= 0) {
          clearInterval(interval);
        }
        return prev - 1e3;
      });
    }, 1e3);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return getDuration(duration);
}

// app/components/public/contests/ContestTimer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/ContestTimer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/ContestTimer.tsx"
  );
  import.meta.hot.lastModified = "1757765166862.7441";
}
function ContestTimer({
  deadline,
  title
}) {
  _s();
  const {
    days,
    hours,
    minutes,
    seconds
  } = useDuration(deadline);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-satoshi-bold uppercase mb-2 text-sm", children: title }, void 0, false, {
      fileName: "app/components/public/contests/ContestTimer.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: days }, void 0, false, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "DAYS" }, void 0, false, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestTimer.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      ":",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: hours }, void 0, false, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "HOURS" }, void 0, false, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 44,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestTimer.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      ":",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: minutes }, void 0, false, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "MINUTES" }, void 0, false, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 49,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestTimer.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      ":",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: seconds }, void 0, false, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "SECONDS" }, void 0, false, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/ContestTimer.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/ContestTimer.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/ContestTimer.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(ContestTimer, "jZ5Xftb3wolbCzYtKONRJpCgn3Q=", false, function() {
  return [useDuration];
});
_c = ContestTimer;
var _c;
$RefreshReg$(_c, "ContestTimer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ContestTimer
};
//# sourceMappingURL=/build/_shared/chunk-4BAH6F5C.js.map
