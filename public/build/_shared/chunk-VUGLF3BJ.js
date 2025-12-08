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

// app/components/reusables/AutoplayCarousel.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/AutoplayCarousel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/AutoplayCarousel.tsx"
  );
  import.meta.hot.lastModified = "1765214106133.7615";
}
function AutoplayCarousel({
  children,
  containerClass = "",
  trackClass = "",
  slideDuration,
  reverse = false
}) {
  _s();
  const [fillAmount, setFillAmount] = (0, import_react.useState)(1);
  const container = (0, import_react.useRef)(null);
  const track = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const containerWidth = container.current?.offsetWidth ?? 0;
    const trackWidth = track.current?.offsetWidth ?? 0;
    const soln = Math.min(Math.ceil(containerWidth / trackWidth));
    container.current?.style.setProperty("--timing", `${slideDuration ?? soln * 3}s`);
    console.log({
      soln,
      containerWidth,
      trackWidth
    });
    setFillAmount(soln);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: container, className: `carousel-container ${containerClass}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: track, className: `carousel-track ${reverse ? "slide-reverse" : "slide"} ${trackClass}`, children: Array(fillAmount).fill(children) }, void 0, false, {
      fileName: "app/components/reusables/AutoplayCarousel.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `carousel-track ${reverse ? "slide-reverse" : "slide"} ${trackClass}`, children: Array(fillAmount).fill(children) }, void 0, false, {
      fileName: "app/components/reusables/AutoplayCarousel.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/reusables/AutoplayCarousel.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(AutoplayCarousel, "buDxJE2T/Rz/qiFCa4iu7IxtGyw=");
_c = AutoplayCarousel;
var _c;
$RefreshReg$(_c, "AutoplayCarousel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/reusables/CarouselItem.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/CarouselItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/CarouselItem.tsx"
  );
  import.meta.hot.lastModified = "1757765166865.9714";
}
function CarouselItem({
  children,
  className = "",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `carousel-card sm:mx-2 ${className}`, ...props, children }, void 0, false, {
    fileName: "app/components/reusables/CarouselItem.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = CarouselItem;
var _c2;
$RefreshReg$(_c2, "CarouselItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/ContestantSlider.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/ContestantSlider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/ContestantSlider.tsx"
  );
  import.meta.hot.lastModified = "1757765166862.1335";
}
function ContestantSlider({
  contestants
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AutoplayCarousel, { slideDuration: 30, children: contestants.map((contestant) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CarouselItem, { className: "h-24 md:h-72 aspect-square rounded-lg overflow-hidden mx-2 md:mx-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: contestant.image, alt: "person smiling", className: "h-full aspect-square object-cover" }, void 0, false, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 29,
      columnNumber: 25
    }, this) }, contestant.id, false, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 28,
      columnNumber: 48
    }, this)) }, void 0, false, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AutoplayCarousel, { slideDuration: 30, reverse: true, children: contestants.map((contestant) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CarouselItem, { className: "h-24 md:h-72 aspect-square rounded-lg overflow-hidden mx-2 md:mx-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: contestant.image, alt: "person smiling", className: "h-full aspect-square object-cover" }, void 0, false, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 34,
      columnNumber: 25
    }, this) }, contestant.id, false, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 33,
      columnNumber: 48
    }, this)) }, void 0, false, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/ContestantSlider.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c3 = ContestantSlider;
var _c3;
$RefreshReg$(_c3, "ContestantSlider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AutoplayCarousel,
  CarouselItem,
  ContestantSlider
};
//# sourceMappingURL=/build/_shared/chunk-VUGLF3BJ.js.map
