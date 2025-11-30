import {
  useToast
} from "/build/_shared/chunk-RZLOF3H4.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "/build/_shared/chunk-X7MJWV53.js";
import {
  Cta_default
} from "/build/_shared/chunk-UYUXJ2BI.js";
import {
  $ea1ef594cf570d83$export$439d29a4e110a164
} from "/build/_shared/chunk-2K2NFQ32.js";
import {
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2
} from "/build/_shared/chunk-ULL45DVV.js";
import {
  $5cb92bef7577960e$export$aecb2ddcb55c95be,
  $5cb92bef7577960e$export$be92b6f5f03c0fe9,
  $f1701beae083dbae$export$602eac185826482c
} from "/build/_shared/chunk-AV2RONJM.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  _extends
} from "/build/_shared/chunk-N5XOLCME.js";
import {
  Cross2Icon
} from "/build/_shared/chunk-CMHVCBDB.js";
import {
  cn
} from "/build/_shared/chunk-LOUTNZN4.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useNavigation,
  useRouteError
} from "/build/_shared/chunk-MJSDHJ2L.js";
import {
  require_react_dom
} from "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// empty-module:./lib/session.server
var require_session = __commonJS({
  "empty-module:./lib/session.server"(exports, module) {
    module.exports = {};
  }
});

// app/root.tsx
var import_react4 = __toESM(require_react(), 1);

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// app/root.tsx
var import_node = __toESM(require_node(), 1);

// app/global.css
var global_default = "/build/_assets/global-MKC4QHCR.css";

// app/autoplaycarousel.css
var autoplaycarousel_default = "/build/_assets/autoplaycarousel-WQPXPBOV.css";

// app/root.tsx
var import_session = __toESM(require_session(), 1);

// app/components/reusables/PageProgress.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/PageProgress.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/PageProgress.tsx"
  );
  import.meta.hot.lastModified = "1757765166866.9756";
}
function PageTransitionProgressBar() {
  _s();
  const ref = (0, import_react2.useRef)(null);
  const [hasAnimationCompleted, setHasAnimationCompleted] = (0, import_react2.useState)(true);
  const navigation = useNavigation();
  const isTransitioning = navigation.state !== "idle";
  (0, import_react2.useEffect)(() => {
    if (!isTransitioning) {
      return;
    }
    async function awaitAnimationCompletion() {
      if (!ref.current)
        return;
      const runningAnimations = ref.current.getAnimations();
      const animationPromises = runningAnimations.map((animation) => animation.finished);
      await Promise.allSettled(animationPromises);
      setHasAnimationCompleted(true);
    }
    setHasAnimationCompleted(false);
    awaitAnimationCompletion();
  }, [isTransitioning]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { role: "progressbar", "aria-hidden": !isTransitioning, "aria-valuetext": isTransitioning ? "Loading" : void 0, className: "fixed inset-x-0 top-0 left-0 z-50 h-1 animate-pulse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("h-full bg-gradient-to-r from-accent to-primary transition-all duration-500 ease-in-out", navigation.state === "idle" && hasAnimationCompleted && "w-0 opacity-0 transition-none", navigation.state === "submitting" && "w-4/12", navigation.state === "loading" && "w-10/12", navigation.state === "idle" && !hasAnimationCompleted && "w-full") }, void 0, false, {
    fileName: "app/components/reusables/PageProgress.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/reusables/PageProgress.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(PageTransitionProgressBar, "mNID4jmWTcZNoLXwTHlpwVOHuFE=", false, function() {
  return [useNavigation];
});
_c = PageTransitionProgressBar;
var _c;
$RefreshReg$(_c, "PageTransitionProgressBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/reusables/toast.tsx
var React = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-toast/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var $054eb8030ebde76e$var$PROVIDER_NAME = "ToastProvider";
var [$054eb8030ebde76e$var$Collection, $054eb8030ebde76e$var$useCollection, $054eb8030ebde76e$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2("Toast");
var [$054eb8030ebde76e$var$createToastContext, $054eb8030ebde76e$export$8a359da18fbc9073] = $c512c27ab02ef895$export$50c7b4e9d9f19c1("Toast", [
  $054eb8030ebde76e$var$createCollectionScope
]);
var [$054eb8030ebde76e$var$ToastProviderProvider, $054eb8030ebde76e$var$useToastProviderContext] = $054eb8030ebde76e$var$createToastContext($054eb8030ebde76e$var$PROVIDER_NAME);
var $054eb8030ebde76e$export$f5d03d415824e0e = (props) => {
  const { __scopeToast, label = "Notification", duration = 5e3, swipeDirection = "right", swipeThreshold = 50, children } = props;
  const [viewport, setViewport] = (0, import_react3.useState)(null);
  const [toastCount, setToastCount] = (0, import_react3.useState)(0);
  const isFocusedToastEscapeKeyDownRef = (0, import_react3.useRef)(false);
  const isClosePausedRef = (0, import_react3.useRef)(false);
  return /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$Collection.Provider, {
    scope: __scopeToast
  }, /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$ToastProviderProvider, {
    scope: __scopeToast,
    label,
    duration,
    swipeDirection,
    swipeThreshold,
    toastCount,
    viewport,
    onViewportChange: setViewport,
    onToastAdd: (0, import_react3.useCallback)(
      () => setToastCount(
        (prevCount) => prevCount + 1
      ),
      []
    ),
    onToastRemove: (0, import_react3.useCallback)(
      () => setToastCount(
        (prevCount) => prevCount - 1
      ),
      []
    ),
    isFocusedToastEscapeKeyDownRef,
    isClosePausedRef
  }, children));
};
$054eb8030ebde76e$export$f5d03d415824e0e.propTypes = {
  label(props) {
    if (props.label && typeof props.label === "string" && !props.label.trim()) {
      const error = `Invalid prop \`label\` supplied to \`${$054eb8030ebde76e$var$PROVIDER_NAME}\`. Expected non-empty \`string\`.`;
      return new Error(error);
    }
    return null;
  }
};
var $054eb8030ebde76e$var$VIEWPORT_NAME = "ToastViewport";
var $054eb8030ebde76e$var$VIEWPORT_DEFAULT_HOTKEY = [
  "F8"
];
var $054eb8030ebde76e$var$VIEWPORT_PAUSE = "toast.viewportPause";
var $054eb8030ebde76e$var$VIEWPORT_RESUME = "toast.viewportResume";
var $054eb8030ebde76e$export$6192c2425ecfd989 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeToast, hotkey = $054eb8030ebde76e$var$VIEWPORT_DEFAULT_HOTKEY, label = "Notifications ({hotkey})", ...viewportProps } = props;
  const context = $054eb8030ebde76e$var$useToastProviderContext($054eb8030ebde76e$var$VIEWPORT_NAME, __scopeToast);
  const getItems = $054eb8030ebde76e$var$useCollection(__scopeToast);
  const wrapperRef = (0, import_react3.useRef)(null);
  const headFocusProxyRef = (0, import_react3.useRef)(null);
  const tailFocusProxyRef = (0, import_react3.useRef)(null);
  const ref = (0, import_react3.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onViewportChange);
  const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
  const hasToasts = context.toastCount > 0;
  (0, import_react3.useEffect)(() => {
    const handleKeyDown = (event) => {
      var _ref$current;
      const isHotkeyPressed = hotkey.every(
        (key) => event[key] || event.code === key
      );
      if (isHotkeyPressed)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    hotkey
  ]);
  (0, import_react3.useEffect)(() => {
    const wrapper = wrapperRef.current;
    const viewport = ref.current;
    if (hasToasts && wrapper && viewport) {
      const handlePause = () => {
        if (!context.isClosePausedRef.current) {
          const pauseEvent = new CustomEvent($054eb8030ebde76e$var$VIEWPORT_PAUSE);
          viewport.dispatchEvent(pauseEvent);
          context.isClosePausedRef.current = true;
        }
      };
      const handleResume = () => {
        if (context.isClosePausedRef.current) {
          const resumeEvent = new CustomEvent($054eb8030ebde76e$var$VIEWPORT_RESUME);
          viewport.dispatchEvent(resumeEvent);
          context.isClosePausedRef.current = false;
        }
      };
      const handleFocusOutResume = (event) => {
        const isFocusMovingOutside = !wrapper.contains(event.relatedTarget);
        if (isFocusMovingOutside)
          handleResume();
      };
      const handlePointerLeaveResume = () => {
        const isFocusInside = wrapper.contains(document.activeElement);
        if (!isFocusInside)
          handleResume();
      };
      wrapper.addEventListener("focusin", handlePause);
      wrapper.addEventListener("focusout", handleFocusOutResume);
      wrapper.addEventListener("pointermove", handlePause);
      wrapper.addEventListener("pointerleave", handlePointerLeaveResume);
      window.addEventListener("blur", handlePause);
      window.addEventListener("focus", handleResume);
      return () => {
        wrapper.removeEventListener("focusin", handlePause);
        wrapper.removeEventListener("focusout", handleFocusOutResume);
        wrapper.removeEventListener("pointermove", handlePause);
        wrapper.removeEventListener("pointerleave", handlePointerLeaveResume);
        window.removeEventListener("blur", handlePause);
        window.removeEventListener("focus", handleResume);
      };
    }
  }, [
    hasToasts,
    context.isClosePausedRef
  ]);
  const getSortedTabbableCandidates = (0, import_react3.useCallback)(({ tabbingDirection }) => {
    const toastItems = getItems();
    const tabbableCandidates = toastItems.map((toastItem) => {
      const toastNode = toastItem.ref.current;
      const toastTabbableCandidates = [
        toastNode,
        ...$054eb8030ebde76e$var$getTabbableCandidates(toastNode)
      ];
      return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
    });
    return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
  }, [
    getItems
  ]);
  (0, import_react3.useEffect)(() => {
    const viewport = ref.current;
    if (viewport) {
      const handleKeyDown = (event) => {
        const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
        const isTabKey = event.key === "Tab" && !isMetaKey;
        if (isTabKey) {
          const focusedElement = document.activeElement;
          const isTabbingBackwards = event.shiftKey;
          const targetIsViewport = event.target === viewport;
          if (targetIsViewport && isTabbingBackwards) {
            var _headFocusProxyRef$cu;
            (_headFocusProxyRef$cu = headFocusProxyRef.current) === null || _headFocusProxyRef$cu === void 0 || _headFocusProxyRef$cu.focus();
            return;
          }
          const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
          const sortedCandidates = getSortedTabbableCandidates({
            tabbingDirection
          });
          const index = sortedCandidates.findIndex(
            (candidate) => candidate === focusedElement
          );
          if ($054eb8030ebde76e$var$focusFirst(sortedCandidates.slice(index + 1)))
            event.preventDefault();
          else {
            var _headFocusProxyRef$cu2, _tailFocusProxyRef$cu;
            isTabbingBackwards ? (_headFocusProxyRef$cu2 = headFocusProxyRef.current) === null || _headFocusProxyRef$cu2 === void 0 || _headFocusProxyRef$cu2.focus() : (_tailFocusProxyRef$cu = tailFocusProxyRef.current) === null || _tailFocusProxyRef$cu === void 0 || _tailFocusProxyRef$cu.focus();
          }
        }
      };
      viewport.addEventListener("keydown", handleKeyDown);
      return () => viewport.removeEventListener("keydown", handleKeyDown);
    }
  }, [
    getItems,
    getSortedTabbableCandidates
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($5cb92bef7577960e$export$aecb2ddcb55c95be, {
    ref: wrapperRef,
    role: "region",
    "aria-label": label.replace("{hotkey}", hotkeyLabel),
    tabIndex: -1,
    style: {
      pointerEvents: hasToasts ? void 0 : "none"
    }
  }, hasToasts && /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$FocusProxy, {
    ref: headFocusProxyRef,
    onFocusFromOutsideViewport: () => {
      const tabbableCandidates = getSortedTabbableCandidates({
        tabbingDirection: "forwards"
      });
      $054eb8030ebde76e$var$focusFirst(tabbableCandidates);
    }
  }), /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$Collection.Slot, {
    scope: __scopeToast
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.ol, _extends({
    tabIndex: -1
  }, viewportProps, {
    ref: composedRefs
  }))), hasToasts && /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$FocusProxy, {
    ref: tailFocusProxyRef,
    onFocusFromOutsideViewport: () => {
      const tabbableCandidates = getSortedTabbableCandidates({
        tabbingDirection: "backwards"
      });
      $054eb8030ebde76e$var$focusFirst(tabbableCandidates);
    }
  }));
});
var $054eb8030ebde76e$var$FOCUS_PROXY_NAME = "ToastFocusProxy";
var $054eb8030ebde76e$var$FocusProxy = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeToast, onFocusFromOutsideViewport, ...proxyProps } = props;
  const context = $054eb8030ebde76e$var$useToastProviderContext($054eb8030ebde76e$var$FOCUS_PROXY_NAME, __scopeToast);
  return /* @__PURE__ */ (0, import_react3.createElement)($ea1ef594cf570d83$export$439d29a4e110a164, _extends({
    "aria-hidden": true,
    tabIndex: 0
  }, proxyProps, {
    ref: forwardedRef,
    style: {
      position: "fixed"
    },
    onFocus: (event) => {
      var _context$viewport;
      const prevFocusedElement = event.relatedTarget;
      const isFocusFromOutsideViewport = !((_context$viewport = context.viewport) !== null && _context$viewport !== void 0 && _context$viewport.contains(prevFocusedElement));
      if (isFocusFromOutsideViewport)
        onFocusFromOutsideViewport();
    }
  }));
});
var $054eb8030ebde76e$var$TOAST_NAME = "Toast";
var $054eb8030ebde76e$var$TOAST_SWIPE_START = "toast.swipeStart";
var $054eb8030ebde76e$var$TOAST_SWIPE_MOVE = "toast.swipeMove";
var $054eb8030ebde76e$var$TOAST_SWIPE_CANCEL = "toast.swipeCancel";
var $054eb8030ebde76e$var$TOAST_SWIPE_END = "toast.swipeEnd";
var $054eb8030ebde76e$export$8d8dc7d5f743331b = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { forceMount, open: openProp, defaultOpen, onOpenChange, ...toastProps } = props;
  const [open = true, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react3.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$ToastImpl, _extends({
    open
  }, toastProps, {
    ref: forwardedRef,
    onClose: () => setOpen(false),
    onPause: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(props.onPause),
    onResume: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(props.onResume),
    onSwipeStart: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onSwipeStart, (event) => {
      event.currentTarget.setAttribute("data-swipe", "start");
    }),
    onSwipeMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onSwipeMove, (event) => {
      const { x, y } = event.detail.delta;
      event.currentTarget.setAttribute("data-swipe", "move");
      event.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x}px`);
      event.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`);
    }),
    onSwipeCancel: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onSwipeCancel, (event) => {
      event.currentTarget.setAttribute("data-swipe", "cancel");
      event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
      event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
      event.currentTarget.style.removeProperty("--radix-toast-swipe-end-x");
      event.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
    }),
    onSwipeEnd: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onSwipeEnd, (event) => {
      const { x, y } = event.detail.delta;
      event.currentTarget.setAttribute("data-swipe", "end");
      event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
      event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
      event.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x}px`);
      event.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`);
      setOpen(false);
    })
  })));
});
var [$054eb8030ebde76e$var$ToastInteractiveProvider, $054eb8030ebde76e$var$useToastInteractiveContext] = $054eb8030ebde76e$var$createToastContext($054eb8030ebde76e$var$TOAST_NAME, {
  onClose() {
  }
});
var $054eb8030ebde76e$var$ToastImpl = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeToast, type = "foreground", duration: durationProp, open, onClose, onEscapeKeyDown, onPause, onResume, onSwipeStart, onSwipeMove, onSwipeCancel, onSwipeEnd, ...toastProps } = props;
  const context = $054eb8030ebde76e$var$useToastProviderContext($054eb8030ebde76e$var$TOAST_NAME, __scopeToast);
  const [node1, setNode] = (0, import_react3.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const pointerStartRef = (0, import_react3.useRef)(null);
  const swipeDeltaRef = (0, import_react3.useRef)(null);
  const duration1 = durationProp || context.duration;
  const closeTimerStartTimeRef = (0, import_react3.useRef)(0);
  const closeTimerRemainingTimeRef = (0, import_react3.useRef)(duration1);
  const closeTimerRef = (0, import_react3.useRef)(0);
  const { onToastAdd, onToastRemove } = context;
  const handleClose = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(() => {
    var _context$viewport2;
    const isFocusInToast = node1 === null || node1 === void 0 ? void 0 : node1.contains(document.activeElement);
    if (isFocusInToast)
      (_context$viewport2 = context.viewport) === null || _context$viewport2 === void 0 || _context$viewport2.focus();
    onClose();
  });
  const startTimer = (0, import_react3.useCallback)((duration) => {
    if (!duration || duration === Infinity)
      return;
    window.clearTimeout(closeTimerRef.current);
    closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
    closeTimerRef.current = window.setTimeout(handleClose, duration);
  }, [
    handleClose
  ]);
  (0, import_react3.useEffect)(() => {
    const viewport = context.viewport;
    if (viewport) {
      const handleResume = () => {
        startTimer(closeTimerRemainingTimeRef.current);
        onResume === null || onResume === void 0 || onResume();
      };
      const handlePause = () => {
        const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
        closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
        window.clearTimeout(closeTimerRef.current);
        onPause === null || onPause === void 0 || onPause();
      };
      viewport.addEventListener($054eb8030ebde76e$var$VIEWPORT_PAUSE, handlePause);
      viewport.addEventListener($054eb8030ebde76e$var$VIEWPORT_RESUME, handleResume);
      return () => {
        viewport.removeEventListener($054eb8030ebde76e$var$VIEWPORT_PAUSE, handlePause);
        viewport.removeEventListener($054eb8030ebde76e$var$VIEWPORT_RESUME, handleResume);
      };
    }
  }, [
    context.viewport,
    duration1,
    onPause,
    onResume,
    startTimer
  ]);
  (0, import_react3.useEffect)(() => {
    if (open && !context.isClosePausedRef.current)
      startTimer(duration1);
  }, [
    open,
    duration1,
    context.isClosePausedRef,
    startTimer
  ]);
  (0, import_react3.useEffect)(() => {
    onToastAdd();
    return () => onToastRemove();
  }, [
    onToastAdd,
    onToastRemove
  ]);
  const announceTextContent = (0, import_react3.useMemo)(() => {
    return node1 ? $054eb8030ebde76e$var$getAnnounceTextContent(node1) : null;
  }, [
    node1
  ]);
  if (!context.viewport)
    return null;
  return /* @__PURE__ */ (0, import_react3.createElement)(import_react3.Fragment, null, announceTextContent && /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$ToastAnnounce, {
    __scopeToast,
    role: "status",
    "aria-live": type === "foreground" ? "assertive" : "polite",
    "aria-atomic": true
  }, announceTextContent), /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$ToastInteractiveProvider, {
    scope: __scopeToast,
    onClose: handleClose
  }, /* @__PURE__ */ (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$Collection.ItemSlot, {
    scope: __scopeToast
  }, /* @__PURE__ */ (0, import_react3.createElement)($5cb92bef7577960e$export$be92b6f5f03c0fe9, {
    asChild: true,
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onEscapeKeyDown, () => {
      if (!context.isFocusedToastEscapeKeyDownRef.current)
        handleClose();
      context.isFocusedToastEscapeKeyDownRef.current = false;
    })
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.li, _extends({
    // Ensure toasts are announced as status list or status when focused
    role: "status",
    "aria-live": "off",
    "aria-atomic": true,
    tabIndex: 0,
    "data-state": open ? "open" : "closed",
    "data-swipe-direction": context.swipeDirection
  }, toastProps, {
    ref: composedRefs,
    style: {
      userSelect: "none",
      touchAction: "none",
      ...props.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key !== "Escape")
        return;
      onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event.nativeEvent);
      if (!event.nativeEvent.defaultPrevented) {
        context.isFocusedToastEscapeKeyDownRef.current = true;
        handleClose();
      }
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      if (event.button !== 0)
        return;
      pointerStartRef.current = {
        x: event.clientX,
        y: event.clientY
      };
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, (event) => {
      if (!pointerStartRef.current)
        return;
      const x = event.clientX - pointerStartRef.current.x;
      const y = event.clientY - pointerStartRef.current.y;
      const hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
      const isHorizontalSwipe = [
        "left",
        "right"
      ].includes(context.swipeDirection);
      const clamp = [
        "left",
        "up"
      ].includes(context.swipeDirection) ? Math.min : Math.max;
      const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
      const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
      const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
      const delta = {
        x: clampedX,
        y: clampedY
      };
      const eventDetail = {
        originalEvent: event,
        delta
      };
      if (hasSwipeMoveStarted) {
        swipeDeltaRef.current = delta;
        $054eb8030ebde76e$var$handleAndDispatchCustomEvent($054eb8030ebde76e$var$TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, {
          discrete: false
        });
      } else if ($054eb8030ebde76e$var$isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
        swipeDeltaRef.current = delta;
        $054eb8030ebde76e$var$handleAndDispatchCustomEvent($054eb8030ebde76e$var$TOAST_SWIPE_START, onSwipeStart, eventDetail, {
          discrete: false
        });
        event.target.setPointerCapture(event.pointerId);
      } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer)
        pointerStartRef.current = null;
    }),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event1) => {
      const delta = swipeDeltaRef.current;
      const target = event1.target;
      if (target.hasPointerCapture(event1.pointerId))
        target.releasePointerCapture(event1.pointerId);
      swipeDeltaRef.current = null;
      pointerStartRef.current = null;
      if (delta) {
        const toast = event1.currentTarget;
        const eventDetail = {
          originalEvent: event1,
          delta
        };
        if ($054eb8030ebde76e$var$isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold))
          $054eb8030ebde76e$var$handleAndDispatchCustomEvent($054eb8030ebde76e$var$TOAST_SWIPE_END, onSwipeEnd, eventDetail, {
            discrete: true
          });
        else
          $054eb8030ebde76e$var$handleAndDispatchCustomEvent($054eb8030ebde76e$var$TOAST_SWIPE_CANCEL, onSwipeCancel, eventDetail, {
            discrete: true
          });
        toast.addEventListener(
          "click",
          (event) => event.preventDefault(),
          {
            once: true
          }
        );
      }
    })
  })))), context.viewport)));
});
$054eb8030ebde76e$var$ToastImpl.propTypes = {
  type(props) {
    if (props.type && ![
      "foreground",
      "background"
    ].includes(props.type)) {
      const error = `Invalid prop \`type\` supplied to \`${$054eb8030ebde76e$var$TOAST_NAME}\`. Expected \`foreground | background\`.`;
      return new Error(error);
    }
    return null;
  }
};
var $054eb8030ebde76e$var$ToastAnnounce = (props) => {
  const { __scopeToast, children, ...announceProps } = props;
  const context = $054eb8030ebde76e$var$useToastProviderContext($054eb8030ebde76e$var$TOAST_NAME, __scopeToast);
  const [renderAnnounceText, setRenderAnnounceText] = (0, import_react3.useState)(false);
  const [isAnnounced, setIsAnnounced] = (0, import_react3.useState)(false);
  $054eb8030ebde76e$var$useNextFrame(
    () => setRenderAnnounceText(true)
  );
  (0, import_react3.useEffect)(() => {
    const timer = window.setTimeout(
      () => setIsAnnounced(true),
      1e3
    );
    return () => window.clearTimeout(timer);
  }, []);
  return isAnnounced ? null : /* @__PURE__ */ (0, import_react3.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react3.createElement)($ea1ef594cf570d83$export$439d29a4e110a164, announceProps, renderAnnounceText && /* @__PURE__ */ (0, import_react3.createElement)(import_react3.Fragment, null, context.label, " ", children)));
};
var $054eb8030ebde76e$export$16d42d7c29b95a4 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeToast, ...titleProps } = props;
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, titleProps, {
    ref: forwardedRef
  }));
});
var $054eb8030ebde76e$export$ecddd96c53621d9a = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeToast, ...descriptionProps } = props;
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, descriptionProps, {
    ref: forwardedRef
  }));
});
var $054eb8030ebde76e$var$ACTION_NAME = "ToastAction";
var $054eb8030ebde76e$export$3019feecfda683d2 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { altText, ...actionProps } = props;
  if (!altText)
    return null;
  return /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$ToastAnnounceExclude, {
    altText,
    asChild: true
  }, /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$export$811e70f61c205839, _extends({}, actionProps, {
    ref: forwardedRef
  })));
});
$054eb8030ebde76e$export$3019feecfda683d2.propTypes = {
  altText(props) {
    if (!props.altText)
      return new Error(`Missing prop \`altText\` expected on \`${$054eb8030ebde76e$var$ACTION_NAME}\``);
    return null;
  }
};
var $054eb8030ebde76e$var$CLOSE_NAME = "ToastClose";
var $054eb8030ebde76e$export$811e70f61c205839 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeToast, ...closeProps } = props;
  const interactiveContext = $054eb8030ebde76e$var$useToastInteractiveContext($054eb8030ebde76e$var$CLOSE_NAME, __scopeToast);
  return /* @__PURE__ */ (0, import_react3.createElement)($054eb8030ebde76e$var$ToastAnnounceExclude, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button"
  }, closeProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, interactiveContext.onClose)
  })));
});
var $054eb8030ebde76e$var$ToastAnnounceExclude = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeToast, altText, ...announceExcludeProps } = props;
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": altText || void 0
  }, announceExcludeProps, {
    ref: forwardedRef
  }));
});
function $054eb8030ebde76e$var$getAnnounceTextContent(container) {
  const textContent = [];
  const childNodes = Array.from(container.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent)
      textContent.push(node.textContent);
    if ($054eb8030ebde76e$var$isHTMLElement(node)) {
      const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
      const isExcluded = node.dataset.radixToastAnnounceExclude === "";
      if (!isHidden) {
        if (isExcluded) {
          const altText = node.dataset.radixToastAnnounceAlt;
          if (altText)
            textContent.push(altText);
        } else
          textContent.push(...$054eb8030ebde76e$var$getAnnounceTextContent(node));
      }
    }
  });
  return textContent;
}
function $054eb8030ebde76e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const currentTarget = detail.originalEvent.currentTarget;
  const event = new CustomEvent(name, {
    bubbles: true,
    cancelable: true,
    detail
  });
  if (handler)
    currentTarget.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(currentTarget, event);
  else
    currentTarget.dispatchEvent(event);
}
var $054eb8030ebde76e$var$isDeltaInDirection = (delta, direction, threshold = 0) => {
  const deltaX = Math.abs(delta.x);
  const deltaY = Math.abs(delta.y);
  const isDeltaX = deltaX > deltaY;
  if (direction === "left" || direction === "right")
    return isDeltaX && deltaX > threshold;
  else
    return !isDeltaX && deltaY > threshold;
};
function $054eb8030ebde76e$var$useNextFrame(callback = () => {
}) {
  const fn = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let raf1 = 0;
    let raf2 = 0;
    raf1 = window.requestAnimationFrame(
      () => raf2 = window.requestAnimationFrame(fn)
    );
    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [
    fn
  ]);
}
function $054eb8030ebde76e$var$isHTMLElement(node) {
  return node.nodeType === node.ELEMENT_NODE;
}
function $054eb8030ebde76e$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $054eb8030ebde76e$var$focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
var $054eb8030ebde76e$export$2881499e37b75b9a = $054eb8030ebde76e$export$f5d03d415824e0e;
var $054eb8030ebde76e$export$d5c6c08dc2d3ca7 = $054eb8030ebde76e$export$6192c2425ecfd989;
var $054eb8030ebde76e$export$be92b6f5f03c0fe9 = $054eb8030ebde76e$export$8d8dc7d5f743331b;
var $054eb8030ebde76e$export$f99233281efd08a0 = $054eb8030ebde76e$export$16d42d7c29b95a4;
var $054eb8030ebde76e$export$393edc798c47379d = $054eb8030ebde76e$export$ecddd96c53621d9a;
var $054eb8030ebde76e$export$e19cd5f9376f8cee = $054eb8030ebde76e$export$3019feecfda683d2;
var $054eb8030ebde76e$export$f39c2d165cd861fe = $054eb8030ebde76e$export$811e70f61c205839;

// node_modules/class-variance-authority/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => {
  return (props) => {
    var ref;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null)
      return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null)
        return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param1;
      return Object.entries(compoundVariantOptions).every((param) => {
        let [key, value] = param;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
};

// app/components/reusables/toast.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/toast.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/toast.tsx"
  );
  import.meta.hot.lastModified = "1757765166867.9136";
}
var ToastProvider = $054eb8030ebde76e$export$2881499e37b75b9a;
var ToastViewport = React.forwardRef(_c2 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($054eb8030ebde76e$export$d5c6c08dc2d3ca7, { ref, className: cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className), ...props }, void 0, false, {
  fileName: "app/components/reusables/toast.tsx",
  lineNumber: 30,
  columnNumber: 12
}, this));
_c22 = ToastViewport;
ToastViewport.displayName = $054eb8030ebde76e$export$d5c6c08dc2d3ca7.displayName;
var toastVariants = cva("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
  variants: {
    variant: {
      default: "border bg-success-500 border-success-700 text-foreground",
      destructive: "group border-red-400 bg-red-50"
      // "destructive group border-destructive bg-destructive text-destructive-foreground",
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Toast = React.forwardRef(_c3 = ({
  className,
  variant,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($054eb8030ebde76e$export$be92b6f5f03c0fe9, { ref, className: cn(toastVariants({
    variant
  }), className), ...props }, void 0, false, {
    fileName: "app/components/reusables/toast.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
});
_c4 = Toast;
Toast.displayName = $054eb8030ebde76e$export$be92b6f5f03c0fe9.displayName;
var ToastAction = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($054eb8030ebde76e$export$e19cd5f9376f8cee, { ref, className: cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className), ...props }, void 0, false, {
  fileName: "app/components/reusables/toast.tsx",
  lineNumber: 59,
  columnNumber: 12
}, this));
_c6 = ToastAction;
ToastAction.displayName = $054eb8030ebde76e$export$e19cd5f9376f8cee.displayName;
var ToastClose = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($054eb8030ebde76e$export$f39c2d165cd861fe, { ref, className: cn("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className), "toast-close": "", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cross2Icon, { className: "h-4 w-4" }, void 0, false, {
  fileName: "app/components/reusables/toast.tsx",
  lineNumber: 66,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/reusables/toast.tsx",
  lineNumber: 65,
  columnNumber: 12
}, this));
_c8 = ToastClose;
ToastClose.displayName = $054eb8030ebde76e$export$f39c2d165cd861fe.displayName;
var ToastTitle = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($054eb8030ebde76e$export$f99233281efd08a0, { ref, className: cn("text-sm font-semibold [&+div]:text-xs", className), ...props }, void 0, false, {
  fileName: "app/components/reusables/toast.tsx",
  lineNumber: 73,
  columnNumber: 12
}, this));
_c10 = ToastTitle;
ToastTitle.displayName = $054eb8030ebde76e$export$f99233281efd08a0.displayName;
var ToastDescription = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($054eb8030ebde76e$export$393edc798c47379d, { ref, className: cn("text-sm opacity-90", className), ...props }, void 0, false, {
  fileName: "app/components/reusables/toast.tsx",
  lineNumber: 79,
  columnNumber: 12
}, this));
_c12 = ToastDescription;
ToastDescription.displayName = $054eb8030ebde76e$export$393edc798c47379d.displayName;
var _c2;
var _c22;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
$RefreshReg$(_c2, "ToastViewport$React.forwardRef");
$RefreshReg$(_c22, "ToastViewport");
$RefreshReg$(_c3, "Toast$React.forwardRef");
$RefreshReg$(_c4, "Toast");
$RefreshReg$(_c5, "ToastAction$React.forwardRef");
$RefreshReg$(_c6, "ToastAction");
$RefreshReg$(_c7, "ToastClose$React.forwardRef");
$RefreshReg$(_c8, "ToastClose");
$RefreshReg$(_c9, "ToastTitle$React.forwardRef");
$RefreshReg$(_c10, "ToastTitle");
$RefreshReg$(_c11, "ToastDescription$React.forwardRef");
$RefreshReg$(_c12, "ToastDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/reusables/toaster.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/toaster.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/toaster.tsx"
  );
  import.meta.hot.lastModified = "1757765166868.0103";
}
function Toaster() {
  _s2();
  const {
    toasts
  } = useToast();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ToastProvider, { children: [
    toasts.map(function({
      id,
      title,
      description,
      action,
      ...props
    }) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Toast, { ...props, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ToastTitle, { children: title }, void 0, false, {
            fileName: "app/components/reusables/toaster.tsx",
            lineNumber: 39,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ToastDescription, { children: description }, void 0, false, {
            fileName: "app/components/reusables/toaster.tsx",
            lineNumber: 40,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/reusables/toaster.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ToastClose, {}, void 0, false, {
          fileName: "app/components/reusables/toaster.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "app/components/reusables/toaster.tsx",
        lineNumber: 37,
        columnNumber: 14
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ToastViewport, {}, void 0, false, {
      fileName: "app/components/reusables/toaster.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/reusables/toaster.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s2(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
  return [useToast];
});
_c13 = Toaster;
var _c13;
$RefreshReg$(_c13, "Toaster");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : [], {
  rel: "stylesheet",
  href: global_default
}, {
  rel: "stylesheet",
  href: autoplaycarousel_default
}];
function Document({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", className: "scroll-smooth", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "font-satoshi text-primary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PageTransitionProgressBar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_c14 = Document;
function App() {
  _s3();
  const {
    toast: toastMsg
  } = useLoaderData();
  const {
    toast
  } = useToast();
  (0, import_react4.useEffect)(() => {
    if (toastMsg) {
      const [type, message] = toastMsg.split("::");
      toast({
        title: type === "success" ? "Success!" : "Oops! There seems to be a problem",
        variant: type === "success" ? "default" : "destructive",
        description: message
      });
    }
  }, [toastMsg]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Toaster, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_s3(App, "l+Rn1fzJqNBFv28CkMyifgPlB3Y=", false, function() {
  return [useLoaderData, useToast];
});
_c23 = App;
function ErrorBoundary() {
  _s22();
  const error = useRouteError();
  let heading = "Unexpected Error";
  let message = "We are very sorry. An unexpected error occurred. Please try again or contact us if the problem persists.";
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 401:
        heading = "401 Unauthorized";
        message = "Oops! Looks like you tried to visit a page that you do not have access to.";
        break;
      case 404:
        heading = "404 Not Found";
        message = "Oops! Looks like you tried to visit a page that does not exist.";
        break;
    }
  }
  const errorMessage = error instanceof Error ? error.message : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "h-dvh p-5 grid gap-5 place-content-center text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-xl font-bold text-red-500", children: heading }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: message }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "border-4 border-red-500 p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "Error message: ",
      errorMessage
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 128,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 127,
      columnNumber: 26
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Cta_default, { element: "link", to: "/", className: "px-4 py-1 rounded-md", children: "Back to homepage" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 130,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 124,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 123,
    columnNumber: 10
  }, this);
}
_s22(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c32 = ErrorBoundary;
var _c14;
var _c23;
var _c32;
$RefreshReg$(_c14, "Document");
$RefreshReg$(_c23, "App");
$RefreshReg$(_c32, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-BPBBWJJ3.js.map
