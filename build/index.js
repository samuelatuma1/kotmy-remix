var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
import { useEffect as useEffect3 } from "react";
import { json } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError
} from "@remix-run/react";

// app/global.css
var global_default = "/build/_assets/global-MKC4QHCR.css";

// app/autoplaycarousel.css
var autoplaycarousel_default = "/build/_assets/autoplaycarousel-WQPXPBOV.css";

// app/lib/session.server.ts
import { randomUUID } from "crypto";
import { createCookieSessionStorage } from "@remix-run/node";
var { getSession, commitSession, destroySession } = createCookieSessionStorage({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "kotmy__session",
    // all of these are optional
    // domain: process.env.BASE_URL,
    httpOnly: !0,
    maxAge: 60 * 60 * 24 * 365,
    // 1 year
    path: "/",
    sameSite: !0,
    secrets: ["s3cret1"]
    // secure: true,
  }
});
async function setToast({ request, headers = new Headers(), toast: toast3 }) {
  let cookies = headers.get("Set-Cookie") ?? request.headers.get("Cookie"), session = await getSession(cookies);
  return session.flash("alert", toast3), headers.append("Set-Cookie", await commitSession(session)), { headers };
}
async function nickToast({ request, headers = new Headers() }) {
  let session = await getSession(request.headers.get("Cookie")), toast3 = session.get("alert");
  return headers.append("Set-Cookie", await commitSession(session)), { headers, toast: toast3 };
}
function createFingerprint() {
  return randomUUID();
}
async function getFingerprint({ request, headers = new Headers() }) {
  let session = await getSession(request.headers.get("Cookie")), fingerprint = session.get("fingerprint");
  return fingerprint || (fingerprint = createFingerprint(), session.set("fingerprint", fingerprint), headers.append("Set-Cookie", await commitSession(session))), { fingerprint, headers };
}

// app/components/reusables/PageProgress.tsx
import { useNavigation } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

// app/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// app/components/reusables/PageProgress.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function PageTransitionProgressBar() {
  let ref = useRef(null), [hasAnimationCompleted, setHasAnimationCompleted] = useState(!0), navigation = useNavigation(), isTransitioning = navigation.state !== "idle";
  return useEffect(() => {
    if (!isTransitioning)
      return;
    async function awaitAnimationCompletion() {
      if (!ref.current)
        return;
      let animationPromises = ref.current.getAnimations().map((animation) => animation.finished);
      await Promise.allSettled(animationPromises), setHasAnimationCompleted(!0);
    }
    setHasAnimationCompleted(!1), awaitAnimationCompletion();
  }, [isTransitioning]), /* @__PURE__ */ jsxDEV2(
    "div",
    {
      role: "progressbar",
      "aria-hidden": !isTransitioning,
      "aria-valuetext": isTransitioning ? "Loading" : void 0,
      className: "fixed inset-x-0 top-0 left-0 z-50 h-1 animate-pulse",
      children: /* @__PURE__ */ jsxDEV2(
        "div",
        {
          ref,
          className: cn(
            "h-full bg-gradient-to-r from-accent to-primary transition-all duration-500 ease-in-out",
            navigation.state === "idle" && hasAnimationCompleted && "w-0 opacity-0 transition-none",
            navigation.state === "submitting" && "w-4/12",
            navigation.state === "loading" && "w-10/12",
            navigation.state === "idle" && !hasAnimationCompleted && "w-full"
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/reusables/PageProgress.tsx",
          lineNumber: 36,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/reusables/PageProgress.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
}

// app/components/reusables/Cta.tsx
import React from "react";
import { Link } from "@remix-run/react";
import cn2 from "classnames";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Cta_default = React.forwardRef(function({ variant = "solid", kind = "primary", ...props }, ref) {
  return "voted" in props && delete props.voted, props.element === "button" ? /* @__PURE__ */ jsxDEV3("button", { ref, ...props, className: cn2("border whitespace-nowrap text-center", {
    "border-disabled text-inherit": props.disabled,
    "bg-accent border-accent hover:bg-accent/90 text-secondary": variant === "solid",
    "bg-red-600 border-red-600 hover:bg-red-400 text-secondary": variant === "solid" && kind === "danger",
    "bg-gray-300 border-disabled": variant === "solid" && props.disabled,
    "text-accent border-accent border-2": variant === "outline",
    "border-red-400 text-red-400": kind === "danger" && !props.disabled,
    "border-none": variant === "ghost"
  }, props.className), children: props.children }, void 0, !1, {
    fileName: "app/components/reusables/Cta.tsx",
    lineNumber: 20,
    columnNumber: 16
  }, this) : /* @__PURE__ */ jsxDEV3(Link, { ...props, className: cn2("border whitespace-nowrap text-center", {
    "bg-accent border-accent hover:bg-accent/90 text-secondary": variant === "solid",
    "text-accent border-accent border-2": variant === "outline",
    "border-red-400": kind === "danger",
    "text-red-400": kind === "danger"
  }, props.className), children: props.children }, void 0, !1, {
    fileName: "app/components/reusables/Cta.tsx",
    lineNumber: 30,
    columnNumber: 12
  }, this);
});

// app/components/reusables/toast.tsx
import * as React2 from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var ToastProvider = ToastPrimitives.Provider, ToastViewport = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  this
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
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
  }
), Toast = React2.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  ToastPrimitives.Root,
  {
    ref,
    className: cn(toastVariants({ variant }), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/toast.tsx",
    lineNumber: 48,
    columnNumber: 5
  },
  this
));
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/toast.tsx",
    lineNumber: 61,
    columnNumber: 3
  },
  this
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxDEV4(Cross2Icon, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/reusables/toast.tsx",
      lineNumber: 85,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/toast.tsx",
    lineNumber: 76,
    columnNumber: 3
  },
  this
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/toast.tsx",
    lineNumber: 94,
    columnNumber: 3
  },
  this
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/toast.tsx",
    lineNumber: 106,
    columnNumber: 3
  },
  this
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// app/components/reusables/use-toast.tsx
import * as React3 from "react";
var TOAST_LIMIT = 1, TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  return count = (count + 1) % Number.MAX_SAFE_INTEGER, count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map(), addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId))
    return;
  let timeout = setTimeout(() => {
    toastTimeouts.delete(toastId), dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, reducer = (state, action18) => {
  switch (action18.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action18.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action18.toast.id ? { ...t, ...action18.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      let { toastId } = action18;
      return toastId ? addToRemoveQueue(toastId) : state.toasts.forEach((toast3) => {
        addToRemoveQueue(toast3.id);
      }), {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: !1
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      return action18.toastId === void 0 ? {
        ...state,
        toasts: []
      } : {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action18.toastId)
      };
  }
}, listeners = [], memoryState = { toasts: [] };
function dispatch(action18) {
  memoryState = reducer(memoryState, action18), listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  let id = genId(), update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  }), dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  return dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: !0,
      onOpenChange: (open) => {
        open || dismiss();
      }
    }
  }), {
    id,
    dismiss,
    update
  };
}
function useToast() {
  let [state, setState] = React3.useState(memoryState);
  return React3.useEffect(() => (listeners.push(setState), () => {
    let index = listeners.indexOf(setState);
    index > -1 && listeners.splice(index, 1);
  }), [state]), {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// app/components/reusables/toaster.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Toaster() {
  let { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV5(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action: action18, ...props }) {
      return /* @__PURE__ */ jsxDEV5(Toast, { ...props, children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV5(ToastTitle, { children: title }, void 0, !1, {
            fileName: "app/components/reusables/toaster.tsx",
            lineNumber: 20,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV5(ToastDescription, { children: description }, void 0, !1, {
            fileName: "app/components/reusables/toaster.tsx",
            lineNumber: 22,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/reusables/toaster.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        action18,
        /* @__PURE__ */ jsxDEV5(ToastClose, {}, void 0, !1, {
          fileName: "app/components/reusables/toaster.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, id, !0, {
        fileName: "app/components/reusables/toaster.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV5(ToastViewport, {}, void 0, !1, {
      fileName: "app/components/reusables/toaster.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/reusables/toaster.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/root.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: autoplaycarousel_default }
];
async function loader({ request }) {
  let { toast: toast3, headers } = await nickToast({ request });
  return json({ toast: toast3 }, { headers });
}
function Document({ children }) {
  return /* @__PURE__ */ jsxDEV6("html", { lang: "en", className: "scroll-smooth", children: [
    /* @__PURE__ */ jsxDEV6("head", { children: [
      /* @__PURE__ */ jsxDEV6("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("body", { className: "font-satoshi text-primary", children: [
      /* @__PURE__ */ jsxDEV6(PageTransitionProgressBar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      children,
      /* @__PURE__ */ jsxDEV6(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function App() {
  let { toast: toastMsg } = useLoaderData(), { toast: toast3 } = useToast();
  return useEffect3(() => {
    if (toastMsg) {
      let [type, message] = toastMsg.split("::");
      toast3({
        title: type === "success" ? "Success!" : "Oops! There seems to be a problem",
        variant: type === "success" ? "default" : "destructive",
        description: message
      });
    }
  }, [toastMsg]), /* @__PURE__ */ jsxDEV6(Document, { children: [
    /* @__PURE__ */ jsxDEV6(Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(Toaster, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = useRouteError(), heading = "Unexpected Error", message = "We are very sorry. An unexpected error occurred. Please try again or contact us if the problem persists.";
  if (isRouteErrorResponse(error))
    switch (error.status) {
      case 401:
        heading = "401 Unauthorized", message = "Oops! Looks like you tried to visit a page that you do not have access to.";
        break;
      case 404:
        heading = "404 Not Found", message = "Oops! Looks like you tried to visit a page that does not exist.";
        break;
    }
  let errorMessage = error instanceof Error ? error.message : null;
  return /* @__PURE__ */ jsxDEV6(Document, { children: /* @__PURE__ */ jsxDEV6("section", { className: "h-dvh p-5 grid gap-5 place-content-center text-center", children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-xl font-bold text-red-500", children: heading }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("p", { children: message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    errorMessage && /* @__PURE__ */ jsxDEV6("div", { className: "border-4 border-red-500 p-10", children: /* @__PURE__ */ jsxDEV6("p", { children: [
      "Error message: ",
      errorMessage
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 103,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6(Cta_default, { element: "link", to: "/", className: "px-4 py-1 rounded-md", children: "Back to homepage" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}

// app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx
var public_contests_tournamentId_contestId_stage_upload_exports = {};
__export(public_contests_tournamentId_contestId_stage_upload_exports, {
  action: () => action,
  default: () => StageMediaUpload,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/hooks/useDuration.ts
import { useEffect as useEffect4, useState as useState3 } from "react";

// app/lib/duration.ts
function getDuration(duration) {
  if (duration <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  let days = Math.floor(duration / 864e5), hours = Math.floor(duration % 864e5 / 36e5), minutes = Math.floor(duration % 36e5 / 6e4), seconds = Math.floor(duration % 6e4 / 1e3);
  return { days, hours, minutes, seconds };
}

// app/hooks/useDuration.ts
function useDuration(deadline) {
  let [duration, setDuration] = useState3(deadline.getTime() - Date.now());
  return useEffect4(() => {
    let interval = setInterval(() => {
      setDuration((prev) => (prev - 1e3 <= 0 && clearInterval(interval), prev - 1e3));
    }, 1e3);
    return () => {
      clearInterval(interval);
    };
  }, []), getDuration(duration);
}

// app/components/public/contests/ContestTimer.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function ContestTimer({ deadline, title }) {
  let { days, hours, minutes, seconds } = useDuration(deadline);
  return /* @__PURE__ */ jsxDEV7("div", { className: "my-6", children: [
    /* @__PURE__ */ jsxDEV7("p", { className: "font-satoshi-bold uppercase mb-2 text-sm", children: title }, void 0, !1, {
      fileName: "app/components/public/contests/ContestTimer.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "grid text-center", children: [
        /* @__PURE__ */ jsxDEV7("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: days }, void 0, !1, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 10,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV7("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "DAYS" }, void 0, !1, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 11,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestTimer.tsx",
        lineNumber: 9,
        columnNumber: 17
      }, this),
      ":",
      /* @__PURE__ */ jsxDEV7("div", { className: "grid text-center", children: [
        /* @__PURE__ */ jsxDEV7("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: hours }, void 0, !1, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 15,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV7("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "HOURS" }, void 0, !1, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 16,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestTimer.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this),
      ":",
      /* @__PURE__ */ jsxDEV7("div", { className: "grid text-center", children: [
        /* @__PURE__ */ jsxDEV7("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: minutes }, void 0, !1, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV7("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "MINUTES" }, void 0, !1, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 21,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestTimer.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      ":",
      /* @__PURE__ */ jsxDEV7("div", { className: "grid text-center", children: [
        /* @__PURE__ */ jsxDEV7("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: seconds }, void 0, !1, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 25,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV7("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "SECONDS" }, void 0, !1, {
          fileName: "app/components/public/contests/ContestTimer.tsx",
          lineNumber: 26,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestTimer.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/ContestTimer.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/ContestTimer.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/assets/images/birthday_present.png
var birthday_present_default = "/build/_assets/birthday_present-FVFLHG5Q.png";

// app/assets/images/contest_image_1.png
var contest_image_1_default = "/build/_assets/contest_image_1-2RBESM3E.png";

// app/assets/images/contest_image_2.png
var contest_image_2_default = "/build/_assets/contest_image_2-GSWNCIXH.png";

// app/assets/images/hero-1.jpg
var hero_1_default = "/build/_assets/hero-1-2K55SJE7.jpg";

// app/assets/images/hero-2.jpg
var hero_2_default = "/build/_assets/hero-2-4DM5IID4.jpg";

// app/assets/images/hero-3.jpg
var hero_3_default = "/build/_assets/hero-3-EC7HKXJB.jpg";

// app/assets/images/hero-4.jpg
var hero_4_default = "/build/_assets/hero-4-FA42WWJ6.jpg";

// app/assets/images/hero-5.jpg
var hero_5_default = "/build/_assets/hero-5-Q63UCUZ5.jpg";

// app/assets/images/sponsor_logo.png
var sponsor_logo_default = "/build/_assets/sponsor_logo-PFUGYHAB.png";

// app/assets/images/underline.png
var underline_default = "/build/_assets/underline-YN4TOKJD.png";

// app/assets/images/admin-avatar.svg
var admin_avatar_default = "/build/_assets/admin-avatar-EWMVT4T5.svg";

// app/assets/images/no-image.webp
var no_image_default = "/build/_assets/no-image-EJT7WJZ2.webp";

// app/components/reusables/StatusTag.tsx
import cn3 from "classnames";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function StatusTag({ status, className, color = "gray" }) {
  return /* @__PURE__ */ jsxDEV8("span", { className: cn3(`w-fit px-4 pl-7 py-1.5 rounded-md text-sm capitalize font-satoshi-medium flex items-center ${className}`, {
    "bg-green-100 text-green-700": color === "green",
    "bg-yellow-100 text-yellow-700": color === "yellow",
    "bg-red-100 text-red-700": color === "red",
    "bg-gray-100 text-gray-700": color === "gray"
  }), children: /* @__PURE__ */ jsxDEV8("span", { className: "before:content-['\u2022'] before:absolute relative before:-left-4 before:top-[10%] before:text-2xl before:leading-3 whitespace-nowrap", children: status }, void 0, !1, {
    fileName: "app/components/reusables/StatusTag.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/reusables/StatusTag.tsx",
    lineNumber: 6,
    columnNumber: 12
  }, this);
}

// app/lib/api/fetcher.ts
import axios from "axios";
var _ApiCall = class {
  static convertObjToQueryString(params) {
    return new URLSearchParams(
      Object.entries(params ?? {}).filter(([_, value]) => value != null).map(([key, value]) => [key, String(value)])
    ).toString();
  }
  static async call(callConfig, cookieHeader) {
    try {
      let configWithCookies = { ...callConfig, headers: { ...callConfig.headers ?? {} } };
      cookieHeader && (configWithCookies.headers.Cookie = cookieHeader), console.log("--------------------------------"), console.log("API CALL: ", this._instance.getUri(callConfig), callConfig.method, configWithCookies.headers), console.log("+++++++++++++++++++++++++++++++++");
      let { data, headers } = await this._instance.request(configWithCookies), responseHeaders = {}, cookieValue = headers["set-cookie"], cookieString = Array.isArray(cookieValue) ? cookieValue.join(", ") : cookieValue ?? "";
      return cookieString && (responseHeaders["Set-Cookie"] = cookieString), { data, headers: responseHeaders, authRequired: !1 };
    } catch (err) {
      let error = err, errorMessage = "An Error Occurred";
      if (error.response) {
        let authRequired = error.response.status === 403;
        if (error.response.data && typeof error.response.data != "string")
          for (let key in error.response.data)
            console.log(key);
        return console.log({ _error: error.response.data }), error.status, { error: error.response.data, authRequired };
      } else
        return console.log(JSON.stringify(error.message)), { error: { detail: errorMessage }, authRequired: !1 };
    }
  }
}, ApiCall = _ApiCall;
__publicField(ApiCall, "_proxy", process.env._API_URL), __publicField(ApiCall, "_instance", axios.create({
  baseURL: _ApiCall._proxy,
  timeout: 2e4,
  withCredentials: !0
}));

// app/lib/api/endpoints.ts
var ApiEndPoints = class {
  // GENERAL
  static get getTournaments() {
    return "/v2/api/tournament";
  }
  static getTournamentById(uniqueId) {
    return `/v2/api/tournament/${uniqueId}`;
  }
  static getContestsInTournament(tournamentUniqueId) {
    return `/v2/api/contest/tournament/${tournamentUniqueId}`;
  }
  static finalResultForContest(contestUniqueId) {
    return `/v2/api/contest/final_result/${contestUniqueId}`;
  }
  static getTournamentsPaged(page) {
    return `/v2/api/tournament_paged?page=${page}`;
  }
  static registerContestant(contestId) {
    return `/v2/api/contestant/register_for_contest/${contestId}`;
  }
  static getContestantsInStage(stageId) {
    return `/v2/api/contestant/${stageId}`;
  }
  static get getTallyLink() {
    return "/v2/api/payment";
  }
  static get callTallyWebhook() {
    return "/v2/api/flutterwave-payment-status";
  }
  static voteContestant(stageId) {
    return `/v2/api/contestant/sm_vote/${stageId}`;
  }
  static getContestantViaHash(contestantLink) {
    return `/v2/api/contestant/link_details/${contestantLink}`;
  }
  static contestantUploadStageMedia() {
    return "/v2/api/contestant/upload_media";
  }
  // ADMIN
  static get createAdminAccount() {
    return "/users/admin_create_user";
  }
  static get getAdminAccounts() {
    return "/users/get_admin_accounts";
  }
  static get getAllRoles() {
    return "/users/all_roles";
  }
  static get createTournament() {
    return "v2/api/admin/tournament";
  }
  static updateTournament(id) {
    return `v2/api/admin/tournament/${id}`;
  }
  static deleteTournament(id) {
    return `v2/api/admin/tournament/${id}`;
  }
  static get createContest() {
    return "v2/api/admin/contest";
  }
  static get getContests() {
    return "v2/api/admin/contest";
  }
  static adminGetContestsInTournament(tournamentUniqueId) {
    return `v2/api/admin/contest/tournament/${tournamentUniqueId}`;
  }
  static getContestById(id) {
    return `/v2/api/contest/${id}`;
  }
  static updateContest(id) {
    return `/v2/api/admin/contest/${id}`;
  }
  static deleteContest(id) {
    return `/v2/api/admin/contest/${id}`;
  }
  static updateStage(id) {
    return `/v2/api/admin/stage/${id}`;
  }
  static deleteStage(id) {
    return `/v2/api/admin/stage/${id}`;
  }
  static get migrateStage() {
    return "/v2/api/admin/contest/migration";
  }
  static toggleRegistration({ contestId }) {
    return `/v2/api/admin/contest/can_register/${contestId}`;
  }
  static editContestant(contestantId) {
    return `/v2/api/admin/contestant/with_image/${contestantId}`;
  }
  static editUserContestant(contestantId) {
    return `/v2/api/contestant/user/${contestantId}`;
  }
  static get toggleEvictContestants() {
    return "/v2/api/admin/contestant/toggle_evict_multiple";
  }
  static get getWinners() {
    return "/v2/api/contest/winners";
  }
  static getWinner(winnerId) {
    return `/v2/api/contest/winners/${winnerId}`;
  }
  static get login() {
    return "/v2/api/users/signin";
  }
  static get userPendingUploads() {
    return "v2/api/contestant/pending_uploads";
  }
  static userContestantDeets(contestantId) {
    return `/v2/api/contestant/stage/details/${contestantId}`;
  }
  static getContestantDetailsForContest(contestant_code, stage_id) {
    return `v2/api/contestant/contest/details/?contestant_code=${contestant_code}&stage_id=${stage_id}`;
  }
};

// app/services/contestant/contestant.server.ts
var TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjFkYTc3MTU1MzE3NzdjMDMwZWI2NCIsImVtYWlsIjoiYXR1bWFzYW11ZWxva3BhcmEzQGdtYWlsLmNvbSIsImlzX3N0YWZmIjp0cnVlLCJpc19zdXBlcnVzZXIiOnRydWUsInJvbGVzIjpbXSwicGVybWlzc2lvbnMiOltdLCJleHAiOjE3NzExNzM0NDJ9.sHAuj-OTgwKuSpgrsY0vjPeHHnOJNzENSxmYIFo414k", ContestantRepository = class {
  async callTallyWebhook(dto) {
    let res = await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.callTallyWebhook,
      // headers: { "verif-hash": "FLWSECK_TESTfae195a81741" },
      data: dto
    });
    return console.log("Tally webhook called. Response:", JSON.stringify(res)), res;
  }
  async editContestantAdmin(payload, token = TOKEN) {
    return await ApiCall.call({
      method: "PUT" /* PUT */,
      url: ApiEndPoints.editContestant(payload.contestantId),
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      data: payload.dto
    });
  }
  async getTallyLink(dto) {
    return await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.getTallyLink,
      data: dto
    });
  }
  async registerContestant(payload) {
    return await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.registerContestant(payload.contestId),
      headers: { "Content-Type": "multipart/form-data" },
      data: payload.dto
    });
  }
  async toggleEvictContestants(dto, token = TOKEN) {
    return await ApiCall.call({
      method: "PATCH" /* PATCH */,
      url: ApiEndPoints.toggleEvictContestants,
      headers: { Authorization: `Bearer ${token}` },
      data: dto
    });
  }
  async voteContestant(payload) {
    return await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.voteContestant(payload.stageId),
      headers: { device_fingerprint: payload.fingerprint },
      data: payload.dto
    });
  }
  async getContestantViaHash(hash) {
    return await ApiCall.call({
      method: "GET" /* GET */,
      url: ApiEndPoints.getContestantViaHash(hash)
    });
  }
  async getPendingUploads(cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url: ApiEndPoints.userPendingUploads
    }, cookies);
    return console.log({ data, error }), data ? { data } : { error, authRequired };
  }
  async getContestantDetailsWithContest(contestantId, cookies) {
    if (!contestantId)
      return { error: { detail: "Please input a valid contestant id" } };
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url: ApiEndPoints.userContestantDeets(contestantId)
    }, cookies);
    return console.log({ data, error }), data ? { data } : { error, authRequired };
  }
  async updateUserContestant(payload, cookies) {
    let media = payload.formData.get("media");
    (!(media instanceof File) || media.size === 0) && payload.formData.delete("media"), payload.editContestantDTO && payload.formData.set("details", JSON.stringify(payload.editContestantDTO));
    let { data, error, authRequired } = await ApiCall.call({
      method: "PUT" /* PUT */,
      url: ApiEndPoints.editUserContestant(payload.contestantId),
      headers: { "Content-Type": "multipart/form-data" },
      data: payload.formData
    }, cookies);
    return { data, error, authRequired };
  }
  async getContestantDetailsForContest(contestant_code, stage_id) {
    let { data, error } = await ApiCall.call({
      method: "GET" /* GET */,
      url: ApiEndPoints.getContestantDetailsForContest(contestant_code, stage_id)
    });
    return { data, error };
  }
}, contestantRepo = new ContestantRepository();

// app/components/public/contests/StageUploadForm.tsx
import { Form } from "@remix-run/react";

// app/components/reusables/FormControl.tsx
import { useState as useState4 } from "react";

// app/assets/icons/add.svg
var add_default = "/build/_assets/add-WBIJN5SI.svg";

// app/assets/icons/hamburger.svg
var hamburger_default = "/build/_assets/hamburger-I7UA4NUZ.svg";

// app/assets/icons/admin-hamburger.svg
var admin_hamburger_default = "/build/_assets/admin-hamburger-VGA4UKPI.svg";

// app/assets/icons/facebook.svg
var facebook_default = "/build/_assets/facebook-V322COOP.svg";

// app/assets/icons/instagram.svg
var instagram_default = "/build/_assets/instagram-EPP4SFZK.svg";

// app/assets/icons/twitter-x.svg
var twitter_x_default = "/build/_assets/twitter-x-6NIDU53D.svg";

// app/assets/icons/facebook-solid.svg
var facebook_solid_default = "/build/_assets/facebook-solid-ZZQNVQIN.svg";

// app/assets/icons/instagram-solid.svg
var instagram_solid_default = "/build/_assets/instagram-solid-MR2LAS6E.svg";

// app/assets/icons/twitter-solid.svg
var twitter_solid_default = "/build/_assets/twitter-solid-ISFEMGL7.svg";

// app/assets/icons/youtube.svg
var youtube_default = "/build/_assets/youtube-7TJNTUUC.svg";

// app/assets/icons/givaah.svg
var givaah_default = "/build/_assets/givaah-OO25SA76.svg";

// app/assets/icons/tally.svg
var tally_default = "/build/_assets/tally-DAIM3KFB.svg";

// app/assets/icons/cake.svg
var cake_default = "/build/_assets/cake-I5APN765.svg";

// app/assets/icons/gallery.svg
var gallery_default = "/build/_assets/gallery-JRAU3TID.svg";

// app/assets/icons/note.svg
var note_default = "/build/_assets/note-VJMPNT2Z.svg";

// app/assets/icons/trophy.svg
var trophy_default = "/build/_assets/trophy-TT2TFJML.svg";

// app/assets/icons/arrow-left.svg
var arrow_left_default = "/build/_assets/arrow-left-WV5Y7E7F.svg";

// app/assets/icons/arrow-right.svg
var arrow_right_default = "/build/_assets/arrow-right-OVLPK73U.svg";

// app/assets/icons/arrow-down.svg
var arrow_down_default = "/build/_assets/arrow-down-G7DFMEF6.svg";

// app/assets/icons/arrow-prev.svg
var arrow_prev_default = "/build/_assets/arrow-prev-7FM4Q5UK.svg";

// app/assets/icons/arrow-next.svg
var arrow_next_default = "/build/_assets/arrow-next-UJP722Y6.svg";

// app/assets/icons/active-dot.svg
var active_dot_default = "/build/_assets/active-dot-27XXU6FQ.svg";

// app/assets/icons/clock.svg
var clock_default = "/build/_assets/clock-HTKJMUYD.svg";

// app/assets/icons/close.svg
var close_default = "/build/_assets/close-RNB72HA3.svg";

// app/assets/icons/down-arrow.svg
var down_arrow_default = "/build/_assets/down-arrow-ISLCJ7A3.svg";

// app/assets/icons/up-arrow.svg
var up_arrow_default = "/build/_assets/up-arrow-KIIXJ3XB.svg";

// app/assets/icons/image.svg
var image_default = "/build/_assets/image-XFH62RWO.svg";

// app/assets/icons/alert-check.svg
var alert_check_default = "/build/_assets/alert-check-JL5IVAGJ.svg";

// app/assets/icons/admin-home.svg
var admin_home_default = "/build/_assets/admin-home-CBMI3GE3.svg";

// app/assets/icons/admin-users.svg
var admin_users_default = "/build/_assets/admin-users-JUZM22CZ.svg";

// app/assets/icons/admin-contest.svg
var admin_contest_default = "/build/_assets/admin-contest-5SF4XUEI.svg";

// app/assets/icons/admin-tournament.svg
var admin_tournament_default = "/build/_assets/admin-tournament-64OGSDSK.svg";

// app/assets/icons/admin-finance.svg
var admin_finance_default = "/build/_assets/admin-finance-4EGT3CE3.svg";

// app/assets/icons/theme.svg
var theme_default = "/build/_assets/theme-PPNH5TIW.svg";

// app/assets/icons/profile.svg
var profile_default = "/build/_assets/profile-NYGF5VNS.svg";

// app/assets/icons/signout.svg
var signout_default = "/build/_assets/signout-NI2VXRGZ.svg";

// app/assets/icons/edit.svg
var edit_default = "/build/_assets/edit-RI3HRYFH.svg";

// app/assets/icons/trash.svg
var trash_default = "/build/_assets/trash-JA34LSCV.svg";

// app/assets/icons/options.svg
var options_default = "/build/_assets/options-7HG5X3OT.svg";

// app/assets/icons/contestants.svg
var contestants_default = "/build/_assets/contestants-VGX3JIKQ.svg";

// app/assets/icons/view.svg
var view_default = "/build/_assets/view-CECH6XIG.svg";

// app/assets/icons/double-arrow-right.svg
var double_arrow_right_default = "/build/_assets/double-arrow-right-GM4N32PS.svg";

// app/assets/icons/arrow-up-down.svg
var arrow_up_down_default = "/build/_assets/arrow-up-down-T2DKGZHF.svg";

// app/assets/icons/check.svg
var check_default = "/build/_assets/check-MBXHYL6W.svg";

// app/assets/icons/double-arrow-diagonal.svg
var double_arrow_diagonal_default = "/build/_assets/double-arrow-diagonal-562IECMG.svg";

// app/assets/icons/logo.svg
var logo_default = "/build/_assets/logo-E3MDWVB7.svg";

// app/assets/icons/warning.svg
var warning_default = "/build/_assets/warning-W2NXXHSM.svg";

// app/assets/icons/admin-avatar.svg
var admin_avatar_default2 = "/build/_assets/admin-avatar-CLG5XP6B.svg";

// app/assets/icons/hidden.svg
var hidden_default = "/build/_assets/hidden-HFFKDRAW.svg";

// app/assets/icons/lock.svg
var lock_default = "/build/_assets/lock-CPJTHWYN.svg";

// app/assets/icons/question.svg
var question_default = "/build/_assets/question-LMD2NCVX.svg";

// app/assets/icons/index.ts
var icons = {
  addIcon: `${add_default}#img`,
  hamburgerIcon: `${hamburger_default}#img`,
  adminHamburgerIcon: `${admin_hamburger_default}#img`,
  facebookIcon: `${facebook_default}#img`,
  instagramIcon: `${instagram_default}#img`,
  youtubeIcon: `${youtube_default}#img`,
  facebookSolidIcon: `${facebook_solid_default}#img`,
  instagramSolidIcon: `${instagram_solid_default}#img`,
  twitterSolidIcon: `${twitter_solid_default}#img`,
  twitterXIcon: `${twitter_x_default}#img`,
  givaahIcon: `${givaah_default}#img`,
  tallyIcon: `${tally_default}#img`,
  cakeIcon: `${cake_default}#img`,
  galleryIcon: `${gallery_default}#img`,
  noteIcon: `${note_default}#img`,
  trophyIcon: `${trophy_default}#img`,
  arrowLeftIcon: `${arrow_left_default}#img`,
  arrowRightIcon: `${arrow_right_default}#img`,
  arrowDownIcon: `${arrow_down_default}#img`,
  arrowPrevIcon: `${arrow_prev_default}#img`,
  arrowNextIcon: `${arrow_next_default}#img`,
  activeDotIcon: `${active_dot_default}#img`,
  clockIcon: `${clock_default}#img`,
  closeIcon: `${close_default}#img`,
  downArrowIcon: `${down_arrow_default}#img`,
  upArrowIcon: `${up_arrow_default}#img`,
  imageIcon: `${image_default}#img`,
  alertCheckIcon: `${alert_check_default}#img`,
  adminHomeIcon: `${admin_home_default}#img`,
  adminUsersIcon: `${admin_users_default}#img`,
  adminContestIcon: `${admin_contest_default}#img`,
  adminTournamentIcon: `${admin_tournament_default}#img`,
  adminFinanceIcon: `${admin_finance_default}#img`,
  themeIcon: `${theme_default}#img`,
  profileIcon: `${profile_default}#img`,
  signoutIcon: `${signout_default}#img`,
  editIcon: `${edit_default}#img`,
  trashIcon: `${trash_default}#img`,
  optionsIcon: `${options_default}#img`,
  contestantsIcon: `${contestants_default}#img`,
  viewIcon: `${view_default}#img`,
  doubleArrowRightIcon: `${double_arrow_right_default}#img`,
  arrowUpDownIcon: `${arrow_up_down_default}#img`,
  checkIcon: `${check_default}#img`,
  doubleArrowDiagonalIcon: `${double_arrow_diagonal_default}#img`,
  logoIcon: `${logo_default}#img`,
  warningIcon: `${warning_default}#img`,
  avatarIcon: `${admin_avatar_default2}#img`,
  hiddenIcon: `${hidden_default}#img`,
  lockIcon: `${lock_default}#img`,
  questionIcon: `${question_default}#img`
};

// app/components/reusables/Svg.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Svg({ src, width = "1.2em", height = "1.2em", use_width = "100%", className, onClick }) {
  return /* @__PURE__ */ jsxDEV9(
    "svg",
    {
      onClick,
      className,
      width,
      height,
      children: /* @__PURE__ */ jsxDEV9("use", { width: use_width, height: "100%", href: src }, void 0, !1, {
        fileName: "app/components/reusables/Svg.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/reusables/Svg.tsx",
      lineNumber: 10,
      columnNumber: 9
    },
    this
  );
}

// app/components/reusables/FormControl.tsx
import { Fragment, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function FormControl({ labelClassNames, labelText, error, ...props }) {
  let [showPassword, setShowPassword] = useState4(!1), formControlClasses = cn(
    "p-3 py-2 rounded-lg cursor-text w-full font-medium outline outline-1 outline-secondary hover:outline-accent focus-within:outline",
    "flex gap-2 items-center",
    { "outline-red-400 hover:outline-red-400": error },
    props.className
  ), errorElement = /* @__PURE__ */ jsxDEV10("span", { className: cn("mt-1 text-red-400 font-semibold leading-none flex gap-1.5 items-end", { hidden: !error }), children: [
    /* @__PURE__ */ jsxDEV10(Svg, { src: icons.warningIcon }, void 0, !1, {
      fileName: "app/components/reusables/FormControl.tsx",
      lineNumber: 27,
      columnNumber: 5
    }, this),
    error
  ] }, void 0, !0, {
    fileName: "app/components/reusables/FormControl.tsx",
    lineNumber: 26,
    columnNumber: 24
  }, this);
  return /* @__PURE__ */ jsxDEV10("label", { htmlFor: props.id, className: `block font-bold ${labelClassNames}`, children: [
    labelText,
    props.as === "input" ? /* @__PURE__ */ jsxDEV10(Fragment, { children: [
      /* @__PURE__ */ jsxDEV10("div", { "aria-invalid": !!error, className: formControlClasses, children: [
        /* @__PURE__ */ jsxDEV10(Svg, { src: props.icon ?? "", className: cn("basis-6", { hidden: !props.icon }) }, void 0, !1, {
          fileName: "app/components/reusables/FormControl.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10(
          "input",
          {
            ...props,
            type: props.type === "password" && showPassword ? "text" : props.type,
            className: cn("bg-transparent autofill:bg-transparent outline-none grow shrink min-w-0 h-6")
          },
          void 0,
          !1,
          {
            fileName: "app/components/reusables/FormControl.tsx",
            lineNumber: 35,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10(
          Svg,
          {
            src: showPassword ? icons.hiddenIcon : icons.viewIcon,
            onClick: () => setShowPassword((prev) => !prev),
            className: cn("basis-6 cursor-pointer", { hidden: props.type !== "password" })
          },
          void 0,
          !1,
          {
            fileName: "app/components/reusables/FormControl.tsx",
            lineNumber: 37,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/reusables/FormControl.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      errorElement
    ] }, void 0, !0, {
      fileName: "app/components/reusables/FormControl.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDEV10(Fragment, { children: [
      /* @__PURE__ */ jsxDEV10("textarea", { cols: 30, rows: 6, ...props, className: `${formControlClasses} ${props.className}` }, void 0, !1, {
        fileName: "app/components/reusables/FormControl.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      errorElement
    ] }, void 0, !0, {
      fileName: "app/components/reusables/FormControl.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/reusables/FormControl.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/components/reusables/Button.tsx
import cn4 from "classnames";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Button({
  children,
  element,
  className,
  variant = "solid",
  kind = "primary",
  ...props
}) {
  return /* @__PURE__ */ jsxDEV11(element, { ...props, className: cn4(`py-4 px-8 text-lg border border-accent rounded-md font-black whitespace-nowrap leading-4 text-center ${className}`, {
    "bg-accent text-secondary": variant === "solid",
    "text-accent border-2": variant === "outline",
    "border-red-400": kind === "danger",
    "text-red-400": kind === "danger"
  }), children }, void 0, !1, {
    fileName: "app/components/reusables/Button.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/components/public/contests/DragnDrop.tsx
import { FileUploader } from "react-drag-drop-files";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var FILE_TYPES = ["JPG", "PNG"];
function DragnDrop({
  className = "",
  labelText = "Upload Images",
  name = "images",
  multiple = !1,
  required = !1,
  fileTypes = FILE_TYPES
}) {
  return /* @__PURE__ */ jsxDEV12("div", { className: `w-full max-w-full overflow-hidden ${className}`, children: [
    /* @__PURE__ */ jsxDEV12("span", { className: "font-bold", children: labelText }, void 0, !1, {
      fileName: "app/components/public/contests/DragnDrop.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12(
      FileUploader,
      {
        name,
        types: fileTypes,
        multiple,
        required,
        children: /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-col gap-4 items-center p-6 border-2 hover:border-primary border-dashed rounded-lg", children: [
          /* @__PURE__ */ jsxDEV12("div", { className: "border-2 border-black p-4 rounded-full w-fit", children: /* @__PURE__ */ jsxDEV12(Svg, { src: icons.imageIcon }, void 0, !1, {
            fileName: "app/components/public/contests/DragnDrop.tsx",
            lineNumber: 26,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/public/contests/DragnDrop.tsx",
            lineNumber: 25,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxDEV12("p", { className: "text-center", children: [
              /* @__PURE__ */ jsxDEV12("span", { className: "underline underline-offset-4 font-bold cursor-pointer", children: "Click here to upload" }, void 0, !1, {
                fileName: "app/components/public/contests/DragnDrop.tsx",
                lineNumber: 30,
                columnNumber: 29
              }, this),
              " ",
              /* @__PURE__ */ jsxDEV12("span", { children: "or drag and drop" }, void 0, !1, {
                fileName: "app/components/public/contests/DragnDrop.tsx",
                lineNumber: 30,
                columnNumber: 129
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/public/contests/DragnDrop.tsx",
              lineNumber: 29,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV12("span", { className: "font-bold text-gray-400", children: "JPG, PNG (max. 5mb)" }, void 0, !1, {
              fileName: "app/components/public/contests/DragnDrop.tsx",
              lineNumber: 32,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/DragnDrop.tsx",
            lineNumber: 28,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/DragnDrop.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/public/contests/DragnDrop.tsx",
        lineNumber: 17,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/DragnDrop.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/components/reusables/select-shad.tsx
import * as React4 from "react";
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV13(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV13(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ jsxDEV13(CaretSortIcon, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
        fileName: "app/components/reusables/select-shad.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/reusables/select-shad.tsx",
        lineNumber: 31,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/reusables/select-shad.tsx",
    lineNumber: 22,
    columnNumber: 3
  },
  this
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV13(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV13(ChevronUpIcon, {}, void 0, !1, {
      fileName: "app/components/reusables/select-shad.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/select-shad.tsx",
    lineNumber: 42,
    columnNumber: 3
  },
  this
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV13(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV13(ChevronDownIcon, {}, void 0, !1, {
      fileName: "app/components/reusables/select-shad.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/select-shad.tsx",
    lineNumber: 59,
    columnNumber: 3
  },
  this
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React4.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxDEV13(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV13(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV13(SelectScrollUpButton, {}, void 0, !1, {
        fileName: "app/components/reusables/select-shad.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV13(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        },
        void 0,
        !1,
        {
          fileName: "app/components/reusables/select-shad.tsx",
          lineNumber: 90,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13(SelectScrollDownButton, {}, void 0, !1, {
        fileName: "app/components/reusables/select-shad.tsx",
        lineNumber: 99,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/reusables/select-shad.tsx",
    lineNumber: 78,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/reusables/select-shad.tsx",
  lineNumber: 77,
  columnNumber: 3
}, this));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV13(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/select-shad.tsx",
    lineNumber: 109,
    columnNumber: 3
  },
  this
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV13(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV13("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV13(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV13(CheckIcon, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/reusables/select-shad.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/reusables/select-shad.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/reusables/select-shad.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV13(SelectPrimitive.ItemText, { children }, void 0, !1, {
        fileName: "app/components/reusables/select-shad.tsx",
        lineNumber: 134,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/reusables/select-shad.tsx",
    lineNumber: 121,
    columnNumber: 3
  },
  this
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV13(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/select-shad.tsx",
    lineNumber: 143,
    columnNumber: 3
  },
  this
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// app/lib/data/states.ts
var nigerianStates = {
  Abia: "Abia",
  Adamawa: "Adamawa",
  "Akwa Ibom": "Akwa Ibom",
  Anambra: "Anambra",
  Bauchi: "Bauchi",
  Bayelsa: "Bayelsa",
  Benue: "Benue",
  Borno: "Borno",
  "Cross River": "Cross River",
  Delta: "Delta",
  Ebonyi: "Ebonyi",
  Edo: "Edo",
  Ekiti: "Ekiti",
  Enugu: "Enugu",
  Gombe: "Gombe",
  Imo: "Imo",
  Jigawa: "Jigawa",
  Kaduna: "Kaduna",
  Kano: "Kano",
  Katsina: "Katsina",
  Kebbi: "Kebbi",
  Kogi: "Kogi",
  Kwara: "Kwara",
  Lagos: "Lagos",
  Nasarawa: "Nasarawa",
  Niger: "Niger",
  Ogun: "Ogun",
  Ondo: "Ondo",
  Osun: "Osun",
  Oyo: "Oyo",
  Plateau: "Plateau",
  Rivers: "Rivers",
  Sokoto: "Sokoto",
  Taraba: "Taraba",
  Yobe: "Yobe",
  Zamfara: "Zamfara",
  FCT: "FCT (Federal Capital Territory)"
};

// app/components/public/contests/StageUploadForm.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function StageUploadForm({ contest, contestant, hash }) {
  return /* @__PURE__ */ jsxDEV14(Form, { method: "POST", encType: "multipart/form-data", className: "bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6", children: [
    /* @__PURE__ */ jsxDEV14("p", { className: "text-2xl font-satoshi-bold", children: "Upload your photo for the next stage." }, void 0, !1, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV14(
        FormControl,
        {
          as: "input",
          labelText: "First Name",
          id: "first_name",
          name: "first_name",
          disabled: !!contestant,
          placeholder: "Enter your first name",
          required: !0,
          defaultValue: contestant?.contestant_biodata?.first_name
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 18,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV14(
        FormControl,
        {
          as: "input",
          labelText: "Last Name",
          id: "last_name",
          name: "last_name",
          disabled: !!contestant,
          placeholder: "Enter your last name",
          required: !0,
          defaultValue: contestant?.contestant_biodata?.last_name
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 21,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV14(
        FormControl,
        {
          as: "input",
          labelText: "Email Address",
          id: "email",
          name: "email",
          disabled: !!contestant,
          placeholder: "Enter your email address",
          required: !0,
          defaultValue: contestant?.contestant_biodata?.email
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 26,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV14(
        FormControl,
        {
          as: "input",
          type: "date",
          labelText: "Date of Birth",
          id: "dob",
          name: "dob",
          disabled: !!contestant,
          placeholder: "dd/mm/yyyy",
          max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          required: !0,
          defaultValue: contestant?.contestant_biodata?.dob?.split("T")[0]
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 29,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV14("label", { htmlFor: "gender", className: "font-bold flex flex-col", children: [
        "Gender",
        /* @__PURE__ */ jsxDEV14(Select, { name: "sex", required: !0, value: contestant?.contestant_biodata?.sex, disabled: !0, children: [
          /* @__PURE__ */ jsxDEV14(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV14(SelectValue, { placeholder: "Gender" }, void 0, !1, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 37,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 36,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV14(SelectContent, { children: [
            /* @__PURE__ */ jsxDEV14(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }, void 0, !1, {
              fileName: "app/components/public/contests/StageUploadForm.tsx",
              lineNumber: 40,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV14(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" }, void 0, !1, {
              fileName: "app/components/public/contests/StageUploadForm.tsx",
              lineNumber: 41,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 39,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 35,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV14("label", { htmlFor: "state_of_residence", className: "font-bold flex flex-col", children: [
        "State of Residence",
        /* @__PURE__ */ jsxDEV14(Select, { name: "state_of_residence", required: !0, value: contestant?.contestant_biodata?.state_of_residence, disabled: !0, children: [
          /* @__PURE__ */ jsxDEV14(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV14(SelectValue, { placeholder: "Select a state" }, void 0, !1, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 48,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 47,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV14(SelectContent, { children: Object.entries(nigerianStates).map(([key, val]) => /* @__PURE__ */ jsxDEV14(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: val }, key, !1, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 52,
            columnNumber: 33
          }, this)) }, void 0, !1, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 50,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 46,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV14(
        FormControl,
        {
          as: "input",
          type: "tel",
          labelText: "Whatsapp Number",
          id: "whatsapp_no",
          name: "whatsapp_no",
          disabled: !0,
          placeholder: "Enter your whatsapp number",
          required: !0,
          defaultValue: contestant?.contestant_biodata?.whatsapp_no
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 59,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV14("label", { htmlFor: "category", className: "font-bold flex flex-col", children: [
        "Category",
        /* @__PURE__ */ jsxDEV14(Select, { name: "category", required: !!contest.categories.length, defaultValue: contestant?.category, disabled: !0, children: [
          /* @__PURE__ */ jsxDEV14(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV14(SelectValue, { placeholder: "Select a category" }, void 0, !1, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 65,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 64,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV14(SelectContent, { children: contest.categories.map((category) => /* @__PURE__ */ jsxDEV14(SelectItem, { value: category, className: "focus:bg-blue-700/25", children: category }, category, !1, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 69,
            columnNumber: 33
          }, this)) }, void 0, !1, {
            fileName: "app/components/public/contests/StageUploadForm.tsx",
            lineNumber: 67,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/StageUploadForm.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/StageUploadForm.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV14(DragnDrop, { labelText: "Upload Image", name: "contestant_image", required: !0 }, void 0, !1, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV14("input", { type: "hidden", name: "hash", value: hash }, void 0, !1, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV14(Button, { element: "button", type: "submit", name: "intent", value: "stage_upload", className: "md:self-end", children: "Submit" }, void 0, !1, {
      fileName: "app/components/public/contests/StageUploadForm.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/StageUploadForm.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
async function loader2({ request }) {
  let hash = new URL(request.url).searchParams.get("hash");
  if (!hash)
    return null;
  let { data, error } = await contestantRepo.getContestantViaHash(hash);
  if (error) {
    let { headers } = await setToast({
      request,
      toast: `error::An error occurred while fetching your data. Please try again.::${Date.now()}`
    });
    return json2(null, { headers });
  }
  return json2({ contest: data, hash });
}
async function action({ request }) {
  let formData = await request.formData();
  if (formData.get("intent") === "stage_upload")
    return console.log(...formData), json2(null);
  let { headers } = await setToast({
    request,
    toast: `error::This action is not yet supported::${Date.now()}`
  });
  return json2(null, { headers });
}
function StageMediaUpload() {
  let contestFromCode = useLoaderData2(), contest = contestFromCode?.contest, stage = contestFromCode?.contest?.stages[0], hash = contestFromCode?.hash ?? "", color = contest?.status === "registering" ? "yellow" : contest?.status === "ongoing" ? "green" : contest?.status === "completed" ? "red" : "gray";
  return /* @__PURE__ */ jsxDEV15("main", { className: "grow", children: contest ? /* @__PURE__ */ jsxDEV15(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV15("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxDEV15("div", { className: "grid", children: [
        /* @__PURE__ */ jsxDEV15("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxDEV15("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3 uppercase", children: contest.name }, void 0, !1, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "font-satoshi-medium", children: contest.desc }, void 0, !1, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "mt-6 grid grid-cols-2 gap-2 max-w-4xl", children: [
          /* @__PURE__ */ jsxDEV15("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV15("span", { className: "block font-satoshi-bold mb-1", children: "Status" }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 72,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV15(StatusTag, { status: contest.status, color }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV15("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV15("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV15("div", { className: "flex gap-4 flex-wrap capitalize", children: contest.categories.map((category) => /* @__PURE__ */ jsxDEV15("span", { children: [
              "~ ",
              category
            ] }, category, !0, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 81,
              columnNumber: 23
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV15("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsxDEV15("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV15("span", { className: "block", children: contest.prizes }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
              lineNumber: 87,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV15(
          ContestTimer,
          {
            deadline: new Date(contest.end_date),
            title: "contest ends in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
            lineNumber: 90,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15(
        "img",
        {
          src: contest.image || no_image_default,
          alt: "kid smiling",
          className: "w-full rounded-3xl h-[350px] object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
          lineNumber: 95,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV15("section", { className: "my-10 flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxDEV15("div", { className: "wrapper", children: /* @__PURE__ */ jsxDEV15("h2", { className: "font-bold text-2xl textacc", children: [
        "Stage ",
        stage?.stage,
        " Form"
      ] }, void 0, !0, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
        lineNumber: 103,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "wrapper flex", children: /* @__PURE__ */ jsxDEV15(
        StageUploadForm,
        {
          contest,
          contestant: contest.stages[0]?.contestants?.[0],
          hash
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
          lineNumber: 108,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this) : null }, void 0, !1, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx
var public_contests_tournamentId_contestId_scoreboard_exports = {};
__export(public_contests_tournamentId_contestId_scoreboard_exports, {
  action: () => action2,
  default: () => Scoreboard
});
import { json as json4 } from "@remix-run/node";
import { Link as Link2, useRouteLoaderData as useRouteLoaderData3, useSearchParams } from "@remix-run/react";

// app/services/contestant/actions.server.ts
import { json as json3, redirect } from "@remix-run/node";
async function editContestant(payload, request) {
  let dto = prepareContestantDTO(payload.dto), { data, error } = await contestantRepo.editContestantAdmin({ dto, contestantId: payload.contestantId });
  if (data) {
    let { headers: headers2 } = await setToast({ request, toast: `success::The contestant info has been updated::${Date.now()}` });
    return json3(null, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `error::${error.detail ?? "Could not update the contestant"}::${Date.now()}` });
  return dto.entries().forEach((entry2) => {
    console.log(entry2);
  }), json3(error, { headers });
}
async function toggleEvictContestants(formData, request) {
  let dto = {
    action: formData.get("intent"),
    stage_id: formData.get("stage_id"),
    contestants_ids: formData.get("contestants_ids").split("|")
  }, { error } = await contestantRepo.toggleEvictContestants(dto);
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail ?? "Sorry, we could not update the contestants statuses at this time"}::${Date.now()}` });
    return json3(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::The contestants' statuses have been updated::${Date.now()}` });
  return json3(null, { headers });
}
async function registerContestant(formData, request) {
  let contestId = formData.get("contestId"), { data, error } = await contestantRepo.registerContestant({ contestId, dto: formData });
  if (error) {
    let { headers } = await setToast({ request, toast: `error::${error.detail ?? "Error registering the contestant"}::${Date.now()}` });
    return json3({ data: null }, { headers });
  }
  return json3({ data });
}
async function getTallyLink(formData, request) {
  let dto = {
    contestant_id: formData.get("contestant_id"),
    email: formData.get("email"),
    number_of_votes: +formData.get("vote_quantity"),
    phone_number: formData.get("phone"),
    provider: formData.get("provider"),
    redirect_url: formData.get("redirect_url")
  }, { data, error } = await contestantRepo.getTallyLink(dto);
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail ?? "We're sorry, but there seems to be an issue with this action. Please try again later."}::${Date.now()}` });
    return json3(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::You will be redirected to make the payment::${Date.now()}` });
  return redirect(data.payment_link, { headers });
}
async function voteContestant(formData, request) {
  let dto = {
    contestant_id: formData.get("contestant_id")
  }, stageId = formData.get("stage_id"), { fingerprint, headers: fingerprintHeaders } = await getFingerprint({ request }), { error } = await contestantRepo.voteContestant({ dto, stageId, fingerprint });
  if (error) {
    let { headers: headers2 } = await setToast({ request, headers: fingerprintHeaders, toast: `error::${error.detail ?? "We're sorry, but there seems to be an issue with this action. Please try again later."}::${Date.now()}` });
    return json3(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, headers: fingerprintHeaders, toast: `success::Your vote has been registered::${Date.now()}` });
  return json3(null, { headers });
}
async function callTallyWebhook(tx_ref) {
  let dto = { tx_ref };
  return await contestantRepo.callTallyWebhook(dto);
}
function prepareContestantDTO(formData) {
  let payloadObj = {
    biodata: {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      dob: formData.get("dob"),
      sex: formData.get("sex"),
      email: formData.get("email"),
      state_of_residence: formData.get("state")
      // "whatsapp_no": formData.get("whatsapp_no") as string
    },
    // "social_media_url": formData.get("name") as string ,
    social_media_url: formData.get("social_media_url"),
    vote: {
      social_media: +formData.get("social_media_vote"),
      judge: +formData.get("judge_vote"),
      bonus: +formData.get("stage_bonus")
    }
  }, dto = new FormData();
  return formData.get("media") && formData.get("media").size > 0 && dto.append("media", formData.get("media")), dto.append("details", JSON.stringify(payloadObj)), dto;
}

// app/components/public/contests/ProgressBar.tsx
import { useEffect as useEffect5, useRef as useRef2 } from "react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function ProgressBar({ percentage }) {
  let progressBar = useRef2(null);
  return useEffect5(() => {
    progressBar.current?.style.setProperty("--progress", `${percentage}%`);
  }, []), /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxDEV16("div", { ref: progressBar, className: "progressBar w-full sm:min-w-[70px] h-2 bg-[#EAEBF0] rounded", children: /* @__PURE__ */ jsxDEV16("div", { className: "progress h-full w-[--progress] bg-[#6246EA] rounded" }, void 0, !1, {
      fileName: "app/components/public/contests/ProgressBar.tsx",
      lineNumber: 11,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/public/contests/ProgressBar.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV16("span", { className: "text-sm font-bold", children: [
      percentage.toFixed(1),
      "%"
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/ProgressBar.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/ProgressBar.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/components/public/contests/Grade.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function Grade({ grade }) {
  let cleanedGrade = grade ? grade.toUpperCase() : "F";
  return /* @__PURE__ */ jsxDEV17("div", { className: "grid grid-cols-6 rounded-md overflow-hidden text-white text-xs font-black", children: [
    /* @__PURE__ */ jsxDEV17("div", { className: cn("bg-grade-F h-full px-2 py-1 text-center"), children: cleanedGrade === "F" ? cleanedGrade : null }, void 0, !1, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: cn("h-full px-2 py-1 text-center", { "bg-grade-E": cleanedGrade <= "E", "bg-grade-Ea": cleanedGrade > "E" }), children: cleanedGrade === "E" ? cleanedGrade : null }, void 0, !1, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: cn("h-full px-2 py-1 text-center", { "bg-grade-D": cleanedGrade <= "D", "bg-grade-Da": cleanedGrade > "D" }), children: cleanedGrade === "D" ? cleanedGrade : null }, void 0, !1, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: cn("h-full px-2 py-1 text-center", { "bg-grade-C": cleanedGrade <= "C", "bg-grade-Ca": cleanedGrade > "C" }), children: cleanedGrade === "C" ? cleanedGrade : null }, void 0, !1, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: cn("h-full px-2 py-1 text-center", { "bg-grade-B": cleanedGrade <= "B", "bg-grade-Ba": cleanedGrade > "B" }), children: cleanedGrade === "B" ? cleanedGrade : null }, void 0, !1, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: cn("h-full px-2 py-1 text-center", { "bg-grade-A": cleanedGrade <= "A", "bg-grade-Aa": cleanedGrade > "A" }), children: cleanedGrade === "A" ? cleanedGrade : null }, void 0, !1, {
      fileName: "app/components/public/contests/Grade.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/Grade.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/components/public/contests/VoteLink.tsx
import React5 from "react";

// app/lib/data/socials.ts
var socials = ["kotmy", "facebook", "instagram", "twitter"], socialIcons = {
  kotmy: icons.logoIcon,
  facebook: icons.facebookSolidIcon,
  instagram: icons.instagramSolidIcon,
  twitter: icons.twitterSolidIcon,
  tally: icons.tallyIcon,
  givaah: icons.givaahIcon
};

// app/components/public/contests/VoteLink.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var VoteLink_default = React5.forwardRef(function({ type, url, count: count2, className = "", ...rest }, ref) {
  let props = url ? { element: "link", to: url, ...rest } : { element: "button", ref, ...rest };
  return /* @__PURE__ */ jsxDEV18(Cta_default, { ...props, variant: "outline", className: cn("p-2 flex items-center border rounded-full", {
    "border-facebook text-facebook bg-facebookBG hover:bg-facebook/15": type === "facebook",
    "border-instagram text-instagram bg-instagramBG hover:bg-instagram/15": type === "instagram",
    "border-twitter text-twitter bg-twitterBG hover:bg-twitter/15": type === "twitter",
    "border-tally text-tally bg-tallyBG hover:bg-tally/15": type === "tally",
    "border-givaah text-givaah bg-givaahBG hover:bg-givaah/15": type === "givaah"
  }, className), children: [
    /* @__PURE__ */ jsxDEV18("span", { className: cn("w-6 h-6 flex items-center justify-center rounded-full p-1", {
      "bg-facebook": type === "facebook",
      "bg-instagram": type === "instagram",
      "bg-twitter": type === "twitter",
      "bg-tally": type === "tally",
      "bg-givaah": type === "givaah"
    }), children: /* @__PURE__ */ jsxDEV18(Svg, { src: socialIcons[type] }, void 0, !1, {
      fileName: "app/components/public/contests/VoteLink.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/public/contests/VoteLink.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18("span", { className: "grow text-xs font-bold text-center mr-2", children: count2 }, void 0, !1, {
      fileName: "app/components/public/contests/VoteLink.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/VoteLink.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this);
});

// app/lib/numbers.utils.ts
function numberSlang(value) {
  return value >= 1e9 ? `${value / 1e9}b` : value >= 1e6 ? `${value / 1e6}m` : value >= 1e3 ? `${value / 1e3}k` : value;
}
function numberFormatter(number, options = {}) {
  return new Intl.NumberFormat("en-NG", options).format(number);
}

// app/components/public/contests/TallyVoteDialog.tsx
import { Form as Form2, useLocation, useRouteLoaderData as useRouteLoaderData2 } from "@remix-run/react";
import { useRef as useRef3 } from "react";

// app/components/reusables/Dialog.tsx
import * as React6 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon as Cross2Icon2 } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var Dialog = DialogPrimitive.Root, DialogTrigger = DialogPrimitive.Trigger, DialogPortal = DialogPrimitive.Portal, DialogClose = DialogPrimitive.Close, DialogOverlay = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV19(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/Dialog.tsx",
    lineNumber: 19,
    columnNumber: 3
  },
  this
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React6.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV19(DialogPortal, { children: [
  /* @__PURE__ */ jsxDEV19(DialogOverlay, {}, void 0, !1, {
    fileName: "app/components/reusables/Dialog.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV19(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV19(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxDEV19(Cross2Icon2, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/components/reusables/Dialog.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV19("span", { className: "sr-only", children: "Close" }, void 0, !1, {
            fileName: "app/components/reusables/Dialog.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/reusables/Dialog.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/reusables/Dialog.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/reusables/Dialog.tsx",
  lineNumber: 34,
  columnNumber: 3
}, this));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV19(
  "div",
  {
    className: cn(
      "flex flex-col text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/Dialog.tsx",
    lineNumber: 58,
    columnNumber: 3
  },
  this
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV19(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/Dialog.tsx",
    lineNumber: 72,
    columnNumber: 3
  },
  this
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV19(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/Dialog.tsx",
    lineNumber: 86,
    columnNumber: 3
  },
  this
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV19(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/Dialog.tsx",
    lineNumber: 101,
    columnNumber: 3
  },
  this
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// app/lib/data/payment.ts
var providers = [{ label: "Flutterwave", value: "flutterwave" }];

// app/components/public/contests/TallyVoteDialog.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function TallyVoteDialog({ contestant, disabled, children }) {
  let stageContestants = useRouteLoaderData2("routes/_public.contests.$tournamentId.$contestId"), formRef = useRef3(null), { pathname, search } = useLocation(), redirectUrl = `${stageContestants?.baseUrl}${pathname}${search}`;
  return /* @__PURE__ */ jsxDEV20(Dialog, { modal: !0, children: [
    /* @__PURE__ */ jsxDEV20(
      DialogTrigger,
      {
        asChild: !0,
        disabled,
        title: "Vote for contestant",
        className: cn("rounded-full outline-none", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: children ?? /* @__PURE__ */ jsxDEV20(VoteLink_default, { type: "tally", count: numberSlang(contestant.vote.tally), className: "w-full" }, void 0, !1, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 34,
          columnNumber: 30
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 30,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV20(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxDEV20(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV20(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsxDEV20("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV20(Svg, { src: icons.questionIcon }, void 0, !1, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 40,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 39,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV20("p", { children: [
            /* @__PURE__ */ jsxDEV20("span", { className: "block", children: "Vote for contestant" }, void 0, !1, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 43,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV20("span", { className: "font-normal text-base text-admin-pry", children: `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}` }, void 0, !1, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 44,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 42,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV20(DialogDescription, { asChild: !0, className: "border-y p-4", children: /* @__PURE__ */ jsxDEV20(Form2, { ref: formRef, method: "post", className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDEV20(FormControl, { as: "input", id: "email", name: "email", labelText: "Email Address", labelClassNames: "text-left", required: !0 }, void 0, !1, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 49,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV20(FormControl, { as: "input", id: "phone", name: "phone", labelText: "Phone Number", labelClassNames: "text-left" }, void 0, !1, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 50,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV20(FormControl, { as: "input", id: "vote_quantity", name: "vote_quantity", labelText: "Vote Quantity", type: "number", labelClassNames: "text-left", defaultValue: 1, min: 1, required: !0 }, void 0, !1, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 51,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV20("label", { htmlFor: "provider", className: "font-bold flex flex-col text-left", children: [
            "Payment Provider",
            /* @__PURE__ */ jsxDEV20(Select, { name: "provider", required: !0, children: [
              /* @__PURE__ */ jsxDEV20(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV20(SelectValue, { placeholder: "Select payment provider" }, void 0, !1, {
                fileName: "app/components/public/contests/TallyVoteDialog.tsx",
                lineNumber: 55,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/components/public/contests/TallyVoteDialog.tsx",
                lineNumber: 54,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV20(SelectContent, { children: providers.map(({ label, value }) => /* @__PURE__ */ jsxDEV20(SelectItem, { value, className: "focus:bg-blue-700/25", children: label }, value, !1, {
                fileName: "app/components/public/contests/TallyVoteDialog.tsx",
                lineNumber: 59,
                columnNumber: 45
              }, this)) }, void 0, !1, {
                fileName: "app/components/public/contests/TallyVoteDialog.tsx",
                lineNumber: 57,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 53,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 52,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV20("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, !1, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 64,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV20("input", { type: "hidden", name: "redirect_url", value: redirectUrl }, void 0, !1, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 65,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV20("input", { type: "hidden", name: "intent", value: "tally_vote" }, void 0, !1, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 66,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV20(DialogFooter, { className: "flex justify-end gap-6 p-4", children: [
        /* @__PURE__ */ jsxDEV20(DialogClose, { type: "submit", name: "intent", value: "delete", className: "px-10 py-2 rounded-md font-bold min-w-[90px] outline outline-1", children: "Cancel" }, void 0, !1, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV20("button", { type: "submit", onClick: () => formRef.current?.submit(), className: "bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, !1, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/TallyVoteDialog.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

// app/components/public/contests/MobileScoreboard.tsx
import { useFetcher } from "@remix-run/react";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function MobileScoreboard({ contestants, socialMediaType }) {
  let fetcher = useFetcher();
  return /* @__PURE__ */ jsxDEV21("div", { className: "grid gap-6 sm:hidden", children: contestants.map((contestant) => /* @__PURE__ */ jsxDEV21("article", { className: "bg-secondary border border-primary rounded-xl p-3 w-full", children: [
    /* @__PURE__ */ jsxDEV21("div", { className: "flex gap-4 mb-4 items-center", children: [
      /* @__PURE__ */ jsxDEV21("span", { className: "font-satoshi-bold", children: [
        contestant.result.position,
        "."
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 18,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV21("img", { src: contestant.image_url || no_image_default, alt: "person smiling", width: 90, height: 90, className: "rounded-full aspect-square object-cover" }, void 0, !1, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 19,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "flex flex-col gap-2 grow", children: [
        /* @__PURE__ */ jsxDEV21("p", { className: "uppercase text-sm font-satoshi-medium text-ellipsis overflow-hidden", children: `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}` }, void 0, !1, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 21,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV21(ProgressBar, { percentage: contestant.result.overall_vote_percentage }, void 0, !1, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 24,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV21(Grade, { grade: contestant.result.grade }, void 0, !1, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 25,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 20,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/MobileScoreboard.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV21("p", { className: "mb-2 text-xs font-satoshi-bold text-[#5F6D7E]", children: "Vote for this contestant" }, void 0, !1, {
      fileName: "app/components/public/contests/MobileScoreboard.tsx",
      lineNumber: 28,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "grid grid-cols-3 gap-3", children: [
      socialMediaType === "kotmy" ? /* @__PURE__ */ jsxDEV21(fetcher.Form, { method: "POST", children: [
        /* @__PURE__ */ jsxDEV21("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, !1, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 32,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV21("input", { type: "hidden", name: "stage_id", value: contestant.stage_id }, void 0, !1, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 33,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV21("input", { type: "hidden", name: "intent", value: "kotmy_vote" }, void 0, !1, {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 34,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV21(
          VoteLink_default,
          {
            className: "w-full",
            type: socialMediaType,
            url: contestant.social_media_url,
            count: numberSlang(contestant.vote.social_media)
          },
          void 0,
          !1,
          {
            fileName: "app/components/public/contests/MobileScoreboard.tsx",
            lineNumber: 35,
            columnNumber: 33
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 31,
        columnNumber: 29
      }, this) : /* @__PURE__ */ jsxDEV21(
        VoteLink_default,
        {
          type: socialMediaType,
          url: contestant.social_media_url,
          count: numberSlang(contestant.vote.social_media)
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/MobileScoreboard.tsx",
          lineNumber: 41,
          columnNumber: 29
        },
        this
      ),
      /* @__PURE__ */ jsxDEV21(TallyVoteDialog, { contestant }, void 0, !1, {
        fileName: "app/components/public/contests/MobileScoreboard.tsx",
        lineNumber: 46,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/MobileScoreboard.tsx",
      lineNumber: 29,
      columnNumber: 21
    }, this)
  ] }, contestant._id, !0, {
    fileName: "app/components/public/contests/MobileScoreboard.tsx",
    lineNumber: 16,
    columnNumber: 17
  }, this)) }, void 0, !1, {
    fileName: "app/components/public/contests/MobileScoreboard.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/components/public/contests/ScoreboardTable.tsx
import { useFetcher as useFetcher2 } from "@remix-run/react";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function ScoreboardTable({ contestants, socialMediaType }) {
  let fetcher = useFetcher2();
  return /* @__PURE__ */ jsxDEV22("table", { className: "w-full table-auto hidden sm:table", children: [
    /* @__PURE__ */ jsxDEV22("thead", { children: /* @__PURE__ */ jsxDEV22("tr", { className: "border-b border-secondary", children: [
      /* @__PURE__ */ jsxDEV22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "position" }, void 0, !1, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "name" }, void 0, !1, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 18,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3 hidden lg:table-cell", children: "progress" }, void 0, !1, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 19,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3  hidden xl:table-cell", children: "grade" }, void 0, !1, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 20,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "votes (SM, tally, givaah)" }, void 0, !1, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 21,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/ScoreboardTable.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/public/contests/ScoreboardTable.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("tbody", { children: contestants.map((contestant) => /* @__PURE__ */ jsxDEV22("tr", { className: "border-b border-secondary", children: [
      /* @__PURE__ */ jsxDEV22("td", { className: "px-6 py-3", children: contestant.result.position }, void 0, !1, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 27,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV22("td", { className: "px-6 py-3 font-satoshi-medium max-w-[300px] truncate uppercase", children: /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV22("img", { src: contestant.image_url || no_image_default, alt: "person smiling", width: 48, className: "rounded-full aspect-square object-cover" }, void 0, !1, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 30,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "truncate uppercase grow", children: [
          `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`,
          /* @__PURE__ */ jsxDEV22("dl", { className: "lg:hidden", children: [
            /* @__PURE__ */ jsxDEV22("dt", { className: "sr-only", children: "progress" }, void 0, !1, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 34,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ jsxDEV22("dd", { children: /* @__PURE__ */ jsxDEV22(ProgressBar, { percentage: contestant.result.overall_vote_percentage }, void 0, !1, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 35,
              columnNumber: 45
            }, this) }, void 0, !1, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 35,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ jsxDEV22("dt", { className: "sr-only", children: "grade" }, void 0, !1, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 36,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ jsxDEV22("dd", { children: /* @__PURE__ */ jsxDEV22(Grade, { grade: contestant.result.grade }, void 0, !1, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 37,
              columnNumber: 45
            }, this) }, void 0, !1, {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 37,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 33,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 31,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 29,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 28,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV22("td", { className: "px-6 py-3 hidden lg:table-cell", children: [
        /* @__PURE__ */ jsxDEV22(ProgressBar, { percentage: contestant.result.overall_vote_percentage }, void 0, !1, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 43,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV22("dl", { className: "xl:hidden", children: [
          /* @__PURE__ */ jsxDEV22("dt", { className: "sr-only", children: "grade" }, void 0, !1, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 45,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV22("dd", { children: /* @__PURE__ */ jsxDEV22(Grade, { grade: contestant.result.grade }, void 0, !1, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 46,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 46,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 44,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV22("td", { className: "px-6 py-3 hidden xl:table-cell", children: /* @__PURE__ */ jsxDEV22(Grade, { grade: contestant.result.grade }, void 0, !1, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 49,
        columnNumber: 72
      }, this) }, void 0, !1, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 49,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV22("td", { className: "px-6 py-3 grid grid-cols-2 gap-2", children: [
        socialMediaType === "kotmy" ? /* @__PURE__ */ jsxDEV22(fetcher.Form, { method: "POST", children: [
          /* @__PURE__ */ jsxDEV22("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, !1, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 53,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV22("input", { type: "hidden", name: "stage_id", value: contestant.stage_id }, void 0, !1, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 54,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV22("input", { type: "hidden", name: "intent", value: "kotmy_vote" }, void 0, !1, {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 55,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV22(
            VoteLink_default,
            {
              className: "w-full",
              type: socialMediaType,
              url: contestant.social_media_url,
              count: numberSlang(contestant.vote.social_media)
            },
            void 0,
            !1,
            {
              fileName: "app/components/public/contests/ScoreboardTable.tsx",
              lineNumber: 56,
              columnNumber: 37
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 52,
          columnNumber: 33
        }, this) : /* @__PURE__ */ jsxDEV22(
          VoteLink_default,
          {
            type: socialMediaType,
            url: contestant.social_media_url,
            count: numberSlang(contestant.vote.social_media)
          },
          void 0,
          !1,
          {
            fileName: "app/components/public/contests/ScoreboardTable.tsx",
            lineNumber: 62,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV22(TallyVoteDialog, { contestant }, void 0, !1, {
          fileName: "app/components/public/contests/ScoreboardTable.tsx",
          lineNumber: 67,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ScoreboardTable.tsx",
        lineNumber: 50,
        columnNumber: 25
      }, this)
    ] }, contestant._id, !0, {
      fileName: "app/components/public/contests/ScoreboardTable.tsx",
      lineNumber: 26,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/components/public/contests/ScoreboardTable.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/ScoreboardTable.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
async function action2({ request }) {
  let formData = await request.formData(), intent = formData.get("intent");
  if (intent === "tally_vote")
    return await getTallyLink(formData, request);
  if (intent === "kotmy_vote")
    return await voteContestant(formData, request);
  let { headers } = await setToast({ request, toast: `error::This action is not yet supported::${Date.now()}` });
  return json4(null, { headers });
}
function Scoreboard() {
  let stageContestants = useRouteLoaderData3("routes/_public.contests.$tournamentId.$contestId");
  if (!stageContestants)
    throw new Error("Could not load stage contestants");
  let { contest, stage } = stageContestants, [_, setUrlSearchParams] = useSearchParams(), color = contest.status === "registering" ? "yellow" : contest.status === "ongoing" ? "green" : contest.status === "completed" ? "red" : "gray";
  return /* @__PURE__ */ jsxDEV23("main", { className: "grow", children: [
    /* @__PURE__ */ jsxDEV23("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxDEV23("div", { className: "grid", children: [
        /* @__PURE__ */ jsxDEV23("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxDEV23("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3 uppercase", children: contest.name }, void 0, !1, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV23("p", { className: "font-satoshi-medium", children: contest.desc }, void 0, !1, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 39,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV23("div", { className: "mt-6 grid grid-cols-2 gap-2 max-w-4xl", children: [
          /* @__PURE__ */ jsxDEV23("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV23("span", { className: "block font-satoshi-bold mb-1", children: "Status" }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 43,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV23(StatusTag, { status: contest.status, color }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 44,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 42,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV23("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV23("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 47,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV23("div", { className: "flex gap-4 flex-wrap capitalize", children: contest.categories.map((category) => /* @__PURE__ */ jsxDEV23("span", { children: [
              "~ ",
              category
            ] }, category, !0, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 49,
              columnNumber: 71
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 48,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 46,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV23("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsxDEV23("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 53,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV23("span", { className: "block", children: contest.prizes }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 54,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 52,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 41,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV23(ContestTimer, { deadline: new Date(contest.end_date), title: "contest ends in" }, void 0, !1, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV23("img", { src: contest.image || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" }, void 0, !1, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV23("section", { className: "sm:bg-white", children: /* @__PURE__ */ jsxDEV23("div", { className: "wrapper my-16", children: [
      /* @__PURE__ */ jsxDEV23("div", { className: "flex flex-col sm:flex-row justify-between sm:items-center gap-y-4 gap-x-6 sm:gap-x-8 py-6 flex-wrap", children: [
        /* @__PURE__ */ jsxDEV23("span", { className: "font-satoshi-medium text-xl", children: [
          stage?.contestants.length ?? 0,
          " Contestants"
        ] }, void 0, !0, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 64,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV23("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxDEV23(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white", placeholder: "Search contestant by name" }, void 0, !1, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 66,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV23(Select, { value: String(stage?.stage), onValueChange: (val) => setUrlSearchParams((prev) => (prev.set("stage", val), prev)), children: [
            /* @__PURE__ */ jsxDEV23(SelectTrigger, { className: "sm:w-[180px] h-auto rounded-lg shadow-none bg-white hover:border-accent", children: /* @__PURE__ */ jsxDEV23(SelectValue, { placeholder: "Stage 1" }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 69,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 68,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV23(SelectContent, { children: contest.stages.map((stage2) => /* @__PURE__ */ jsxDEV23(SelectItem, { value: String(stage2.stage), className: "focus:bg-blue-700/25", children: [
              "Stage ",
              stage2.stage
            ] }, stage2.stage, !0, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 73,
              columnNumber: 41
            }, this)) }, void 0, !1, {
              fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
              lineNumber: 71,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
            lineNumber: 67,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 65,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV23(Link2, { to: `/results/${contest.id}`, className: "w-fit text-accent font-bold hover:underline underline-offset-4", children: "See result table" }, void 0, !1, {
          fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
          lineNumber: 78,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV23(ScoreboardTable, { contestants: stage?.contestants ?? [], socialMediaType: stage?.rates.social_media.type ?? "kotmy" }, void 0, !1, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
        lineNumber: 80,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV23(MobileScoreboard, { contestants: stage?.contestants ?? [], socialMediaType: stage?.rates.social_media.type ?? "kotmy" }, void 0, !1, {
        fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
        lineNumber: 81,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
      lineNumber: 62,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

// app/routes/_public.contests.$tournamentId.$contestId._index.tsx
var public_contests_tournamentId_contestId_index_exports = {};
__export(public_contests_tournamentId_contestId_index_exports, {
  action: () => action3,
  default: () => ContestPage
});
import { json as json5 } from "@remix-run/node";
import { useRouteLoaderData as useRouteLoaderData4 } from "@remix-run/react";

// app/components/public/contests/OngoingContest.tsx
import { Link as Link4 } from "react-router-dom";
import { useSearchParams as useSearchParams2 } from "@remix-run/react";

// app/components/public/contests/SocialLink.tsx
import React7 from "react";
import { useFetcher as useFetcher3 } from "@remix-run/react";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var SocialLink_default = React7.forwardRef(function({ type, url, className = "", ...rest }, ref) {
  let props = url ? { element: "link", to: url, ...rest } : { element: "button", ref, ...rest }, fetcher = useFetcher3();
  return type === "kotmy" ? /* @__PURE__ */ jsxDEV24(fetcher.Form, { method: "POST", children: [
    /* @__PURE__ */ jsxDEV24("input", { type: "hidden", name: "contestant_id", value: rest.contestantId }, void 0, !1, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV24("input", { type: "hidden", name: "stage_id", value: rest.stageId }, void 0, !1, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV24(Cta_default, { element: "button", name: "intent", value: "kotmy_vote", variant: "outline", className: cn("p-2 flex items-center border rounded-full w-full", className), children: [
      /* @__PURE__ */ jsxDEV24("span", { className: cn("w-6 h-6 flex items-center justify-center rounded-full p-1"), children: /* @__PURE__ */ jsxDEV24(Svg, { src: socialIcons[type] }, void 0, !1, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV24("span", { className: "grow text-xs font-bold text-center mr-2", children: [
        rest.voted ? null : /* @__PURE__ */ jsxDEV24("span", { className: "capitalize", children: type }, void 0, !1, {
          fileName: "app/components/public/contests/SocialLink.tsx",
          lineNumber: 42,
          columnNumber: 42
        }, this),
        rest.voted ? "Voted" : " vote"
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/SocialLink.tsx",
    lineNumber: 34,
    columnNumber: 11
  }, this) : /* @__PURE__ */ jsxDEV24(Cta_default, { ...props, variant: "outline", className: cn("p-2 flex items-center border rounded-full", {
    "border-facebook text-facebook bg-facebookBG hover:bg-facebook/15": type === "facebook",
    "border-instagram text-instagram bg-instagramBG hover:bg-instagram/15": type === "instagram",
    "border-twitter text-twitter bg-twitterBG hover:bg-twitter/15": type === "twitter",
    "border-tally text-tally bg-tallyBG hover:bg-tally/15": type === "tally",
    "border-givaah text-givaah bg-givaahBG hover:bg-givaah/15": type === "givaah"
  }, className), children: [
    /* @__PURE__ */ jsxDEV24("span", { className: cn("w-6 h-6 flex items-center justify-center rounded-full p-1", {
      "bg-facebook": type === "facebook",
      "bg-instagram": type === "instagram",
      "bg-twitter": type === "twitter",
      "bg-tally": type === "tally",
      "bg-givaah": type === "givaah"
    }), children: /* @__PURE__ */ jsxDEV24(Svg, { src: socialIcons[type] }, void 0, !1, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV24("span", { className: "grow text-xs font-bold text-center mr-2", children: [
      /* @__PURE__ */ jsxDEV24("span", { className: "capitalize", children: type }, void 0, !1, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 63,
        columnNumber: 71
      }, this),
      " vote"
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/SocialLink.tsx",
    lineNumber: 47,
    columnNumber: 11
  }, this);
});

// app/components/public/contests/ContestantCard.tsx
import { Link as Link3 } from "@remix-run/react";
import { useState as useState5 } from "react";
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function ContestantStatisticsCard({ contestant }) {
  let [totalVotes, setTotalVotes] = useState5(getContestantTotalVotes(contestant));
  function getContestantTotalVotes(contestant2) {
    if (contestant2.originalContestantData?.result?.total_votes > 0)
      return contestant2.originalContestantData.result.total_votes;
    let computedTotalVotes = 0;
    return Object.entries(contestant2.originalContestantData.vote).forEach(([key, value]) => {
      typeof value == "number" && (computedTotalVotes += value);
    }), computedTotalVotes;
  }
  let { fullName, contestName, stage, stageStatus, contestImage, is_evicted, originalContestantData, stageSocialMedia } = contestant, vote = originalContestantData.vote, result = originalContestantData.result;
  return console.log(contestant), /* @__PURE__ */ jsxDEV25("article", { className: "border-2 border-primary rounded-3xl overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV25(Link3, { to: `/contest/contestant/${originalContestantData._id}?stageId=${originalContestantData.stage_id}&contestantCode=${originalContestantData.code}`, children: /* @__PURE__ */ jsxDEV25("img", { src: originalContestantData.image_url || no_image_default, alt: fullName, className: "w-full h-80 object-cover object-top" }, void 0, !1, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { className: "p-4 bg-secondary", children: [
      /* @__PURE__ */ jsxDEV25("span", { className: "block font-black uppercase mb-2", children: fullName }, void 0, !1, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: contestName }, void 0, !1, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25("span", { className: "block text-[#5F6D7E] text-xs font-medium mb-2", children: [
        "Stage ",
        stage,
        " \u2022 ",
        stageStatus.replace(/_/g, " ")
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
        /* @__PURE__ */ jsxDEV25("div", { children: [
          /* @__PURE__ */ jsxDEV25("span", { className: "text-xs text-gray-500", children: "Total Votes" }, void 0, !1, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25("div", { className: "text-xl font-bold text-indigo-700", children: totalVotes }, void 0, !1, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV25("div", { children: [
          /* @__PURE__ */ jsxDEV25("span", { className: "text-xs text-gray-500", children: "Rank" }, void 0, !1, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25("div", { className: "text-xl font-bold text-green-700", children: originalContestantData.rank ?? "N/A" }, void 0, !1, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV25("div", { children: [
          /* @__PURE__ */ jsxDEV25("span", { className: "text-xs text-gray-500", children: "Grade" }, void 0, !1, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25("div", { className: "text-lg font-semibold text-gray-800", children: result?.grade ?? "N/A" }, void 0, !1, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV25("div", { children: [
          /* @__PURE__ */ jsxDEV25("span", { className: "text-xs text-gray-500", children: "Vote %" }, void 0, !1, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25("div", { className: "text-lg font-semibold text-blue-600", children: [
            result?.overall_vote_percentage ?? 0,
            "%"
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV25("span", { className: "block text-xs text-gray-500 mb-1", children: "Votes by Channel" }, void 0, !1, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV25("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxDEV25("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV25("span", { className: "text-xs font-semibold capitalize", children: stageSocialMedia }, void 0, !1, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV25("span", { className: "text-sm font-bold", children: vote.social_media }, void 0, !1, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV25("span", { className: "text-xs font-semibold", children: "Tally" }, void 0, !1, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV25("span", { className: "text-sm font-bold", children: vote.tally ?? result?.weighted_scores?.tally ?? 0 }, void 0, !1, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV25("span", { className: "text-xs font-semibold", children: "Judge" }, void 0, !1, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV25("span", { className: "text-sm font-bold", children: vote.judge ?? result?.weighted_scores?.judge ?? 0 }, void 0, !1, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV25("span", { className: "text-xs font-semibold", children: "Givaah" }, void 0, !1, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV25("span", { className: "text-sm font-bold", children: vote.givaah ?? result?.weighted_scores?.givaah ?? 0 }, void 0, !1, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV25("span", { className: "text-xs font-semibold", children: "Bonus" }, void 0, !1, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV25("span", { className: "text-sm font-bold", children: vote.bonus ?? result?.weighted_scores?.bonus ?? 0 }, void 0, !1, {
              fileName: "app/components/public/contests/ContestantCard.tsx",
              lineNumber: 85,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25("span", { className: `inline-block px-3 py-1 rounded-full text-xs font-bold ${is_evicted ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`, children: is_evicted ? "Evicted" : "Active" }, void 0, !1, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/ContestantCard.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
function ContestantCard({ contestant, socialMedia }) {
  let fullName = `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`;
  return console.log({ contestant }), /* @__PURE__ */ jsxDEV25("article", { className: "border-2 border-primary rounded-3xl overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV25(Link3, { to: `/contest/contestant/${contestant._id}?stageId=${contestant.stage_id}&contestantCode=${contestant.code}`, children: /* @__PURE__ */ jsxDEV25("img", { src: contestant.image_url || no_image_default, alt: "person smiling", className: "w-full h-80 object-cover object-top" }, void 0, !1, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 104,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 103,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { className: "p-4 bg-secondary", children: [
      /* @__PURE__ */ jsxDEV25("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: "Vote now for your favorite contestant" }, void 0, !1, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 107,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV25("span", { className: "block font-black uppercase mb-4", children: fullName }, void 0, !1, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 108,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV25("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: contestant.category }, void 0, !1, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV25("div", { className: "grid grid-cols-2 gap-4", children: [
        socialMedia === "kotmy" ? /* @__PURE__ */ jsxDEV25(
          SocialLink_default,
          {
            type: socialMedia,
            url: contestant.social_media_url,
            voted: contestant.result.device_voted_for_contestant,
            contestantId: contestant._id,
            stageId: contestant.stage_id
          },
          void 0,
          !1,
          {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 112,
            columnNumber: 27
          },
          this
        ) : /* @__PURE__ */ jsxDEV25(
          SocialLink_default,
          {
            type: socialMedia,
            url: contestant.social_media_url,
            voted: contestant.result.device_voted_for_contestant
          },
          void 0,
          !1,
          {
            fileName: "app/components/public/contests/ContestantCard.tsx",
            lineNumber: 119,
            columnNumber: 27
          },
          this
        ),
        /* @__PURE__ */ jsxDEV25(TallyVoteDialog, { contestant, children: /* @__PURE__ */ jsxDEV25(SocialLink_default, { type: "tally", className: "w-full" }, void 0, !1, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 126,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/public/contests/ContestantCard.tsx",
          lineNumber: 125,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestantCard.tsx",
        lineNumber: 110,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/ContestantCard.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/ContestantCard.tsx",
    lineNumber: 102,
    columnNumber: 9
  }, this);
}

// app/components/public/contests/OngoingContest.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function OngoingContest({ contest, stage }) {
  let [searchParams, setUrlSearchParams] = useSearchParams2(), status = contest.status, color = status === "ongoing" ? "green" : status === "completed" ? "red" : "gray";
  return /* @__PURE__ */ jsxDEV26(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV26("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxDEV26("div", { className: "grid", children: [
        /* @__PURE__ */ jsxDEV26("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxDEV26("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3 uppercase", children: contest.name }, void 0, !1, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 24,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV26("p", { className: "font-satoshi-medium", children: contest.desc }, void 0, !1, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 25,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/OngoingContest.tsx",
          lineNumber: 23,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV26("div", { className: "mt-6 grid grid-cols-2 gap-2 max-w-4xl", children: [
          /* @__PURE__ */ jsxDEV26("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV26("span", { className: "block font-satoshi-bold mb-1", children: "Status" }, void 0, !1, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 29,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV26(StatusTag, { status, color }, void 0, !1, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 30,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 28,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV26("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV26("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }, void 0, !1, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 33,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV26("div", { className: "flex gap-4 flex-wrap capitalize", children: contest.categories.map((category) => /* @__PURE__ */ jsxDEV26("span", { children: [
              "~ ",
              category
            ] }, category, !0, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 35,
              columnNumber: 70
            }, this)) }, void 0, !1, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 34,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 32,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV26("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsxDEV26("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }, void 0, !1, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 39,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV26("span", { className: "block", children: contest.prizes }, void 0, !1, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 40,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/OngoingContest.tsx",
          lineNumber: 27,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV26(ContestTimer, { deadline: new Date(contest.end_date), title: "contest ends in" }, void 0, !1, {
          fileName: "app/components/public/contests/OngoingContest.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV26("img", { src: contest.image || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" }, void 0, !1, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/OngoingContest.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV26("section", { className: "wrapper my-16", children: [
      /* @__PURE__ */ jsxDEV26("h2", { className: "text-accent text-lg lg:text-2xl font-satoshi-bold mb-3 sm:mb-6 uppercase", children: [
        contest.name,
        " contestants"
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV26("div", { className: "flex flex-col sm:flex-row justify-between sm:items-end gap-6 sm:gap-8", children: [
        /* @__PURE__ */ jsxDEV26("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxDEV26(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white py-2 text-sm", placeholder: "Search contestant by name" }, void 0, !1, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 51,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV26(Select, { value: String(stage?.stage), onValueChange: (val) => setUrlSearchParams((prev) => (prev.set("stage", val), prev)), children: [
            /* @__PURE__ */ jsxDEV26(SelectTrigger, { className: "sm:w-[180px] h-auto rounded-lg shadow-none bg-white hover:border-accent", children: /* @__PURE__ */ jsxDEV26(SelectValue, { placeholder: "Stage 1" }, void 0, !1, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 54,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 53,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV26(SelectContent, { children: contest.stages.map((stage2) => /* @__PURE__ */ jsxDEV26(SelectItem, { value: String(stage2.stage), className: "focus:bg-blue-700/25", children: [
              "Stage ",
              stage2.stage
            ] }, stage2.stage, !0, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 58,
              columnNumber: 37
            }, this)) }, void 0, !1, {
              fileName: "app/components/public/contests/OngoingContest.tsx",
              lineNumber: 56,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/OngoingContest.tsx",
            lineNumber: 52,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/OngoingContest.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV26(Link4, { to: `scoreboard?${searchParams.toString()}`, className: "w-fit text-accent font-bold hover:underline underline-offset-4", children: "See scoreboard" }, void 0, !1, {
          fileName: "app/components/public/contests/OngoingContest.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV26("div", { className: "my-16 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16", children: stage?.contestants.map((contestant) => /* @__PURE__ */ jsxDEV26(ContestantCard, { contestant, socialMedia: stage.rates.social_media.type }, contestant.code, !1, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 67,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/components/public/contests/OngoingContest.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/OngoingContest.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/OngoingContest.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

// app/components/public/contests/RegisteringContest.tsx
import { useActionData } from "@remix-run/react";

// app/components/public/contests/ContestGuidelines.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
function ContestGuidelines({ contest }) {
  return /* @__PURE__ */ jsxDEV27("div", { className: "wrapper sm:max-w-lg sm:mx-0", children: [
    /* @__PURE__ */ jsxDEV27("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxDEV27("span", { className: "block font-satoshi-bold mb-1", children: "Status" }, void 0, !1, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 8,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV27(StatusTag, { status: "registering", color: "yellow" }, void 0, !1, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 9,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/ContestGuidelines.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV27("div", { className: "grid gap-4 sm:grid-cols-2 my-8", children: [
      /* @__PURE__ */ jsxDEV27("div", { className: "", children: [
        /* @__PURE__ */ jsxDEV27("span", { className: "block font-satoshi-bold mb-1", children: "Age Categories" }, void 0, !1, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 13,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV27("div", { className: "flex flex-wrap gap-x-4 capitalize", children: contest.categories.map((category) => /* @__PURE__ */ jsxDEV27("span", { children: [
          "~ ",
          category
        ] }, category, !0, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 15,
          columnNumber: 62
        }, this)) }, void 0, !1, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 14,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV27("div", { className: "", children: [
        /* @__PURE__ */ jsxDEV27("span", { className: "block font-satoshi-bold mb-1", children: "Submission Guideline" }, void 0, !1, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 19,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV27("span", { className: "block", children: contest.sub_req }, void 0, !1, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV27("div", { className: "", children: [
        /* @__PURE__ */ jsxDEV27("span", { className: "block font-satoshi-bold mb-1", children: "Submission Deadline" }, void 0, !1, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 23,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV27("span", { className: "block", children: [
          "All entries must be submitted by ",
          new Date(contest.reg_deadline).toLocaleString("en-US", { timeStyle: "short", dateStyle: "long" }),
          "."
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 24,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV27("div", { className: "", children: [
        /* @__PURE__ */ jsxDEV27("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }, void 0, !1, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 29,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV27("span", { className: "block", children: contest.prizes }, void 0, !1, {
          fileName: "app/components/public/contests/ContestGuidelines.tsx",
          lineNumber: 30,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/ContestGuidelines.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV27("div", { className: "flex flex-col gap-2 my-8", children: [
      /* @__PURE__ */ jsxDEV27("span", { className: "font-satoshi-bold", children: "Terms & Conditions" }, void 0, !1, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      contest.terms_cond
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/ContestGuidelines.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV27("div", { className: "flex flex-col gap-2 my-8", children: [
      /* @__PURE__ */ jsxDEV27("span", { className: "font-satoshi-bold", children: "Additional Notes" }, void 0, !1, {
        fileName: "app/components/public/contests/ContestGuidelines.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      contest.add_info
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/ContestGuidelines.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/ContestGuidelines.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/components/public/contests/RegistrationSuccess.tsx
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
function RegistrationSuccess({ contestant, contest }) {
  let fullName = `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`, formattedDob = new Date(contestant.contestant_biodata.dob).toDateString();
  return /* @__PURE__ */ jsxDEV28("div", { className: "bg-secondary p-10 sm:rounded-3xl flex flex-col max-w-xl gap-10", children: [
    /* @__PURE__ */ jsxDEV28("aside", { className: "border-2 border-success-700 bg-success-500 rounded-xl p-6 flex items-start gap-4", children: [
      /* @__PURE__ */ jsxDEV28("img", { src: icons.alertCheckIcon, width: 30, height: 30, className: "mt-1" }, void 0, !1, {
        fileName: "app/components/public/contests/RegistrationSuccess.tsx",
        lineNumber: 11,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV28("p", { children: [
        /* @__PURE__ */ jsxDEV28("span", { className: "block font-bold mb-2", children: "Dear Esteemed Contestant/Guardian" }, void 0, !1, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 13,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV28("span", { className: "font-medium", children: [
          "Congratulations, ",
          fullName,
          "! Your submission to ",
          contest.name,
          " has been received successfully. Your code is ",
          /* @__PURE__ */ jsxDEV28("span", { className: "font-semibold", children: contestant.code }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 17,
            columnNumber: 38
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 14,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/RegistrationSuccess.tsx",
        lineNumber: 12,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/RegistrationSuccess.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV28("div", { className: "grid sm:grid-cols-2 justify-between gap-6 sm:gap-10", children: [
      /* @__PURE__ */ jsxDEV28("img", { src: contestant.image_url, alt: "kid smiling", className: "rounded-3xl" }, void 0, !1, {
        fileName: "app/components/public/contests/RegistrationSuccess.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV28("div", { className: "grid gap-1 leading-tight", children: [
        /* @__PURE__ */ jsxDEV28("p", { className: "", children: [
          /* @__PURE__ */ jsxDEV28("span", { className: "block font-satoshi-bold", children: "Full Name" }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 25,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV28("span", { className: "block capitalize", children: fullName }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 26,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 24,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV28("p", { className: "", children: [
          /* @__PURE__ */ jsxDEV28("span", { className: "block font-satoshi-bold", children: "Date of Birth" }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 29,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV28("span", { className: "block", children: formattedDob }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 30,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 28,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV28("p", { className: "", children: [
          /* @__PURE__ */ jsxDEV28("span", { className: "block font-satoshi-bold", children: "Gender" }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 33,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV28("span", { className: "block capitalize", children: contestant.contestant_biodata.sex.toLowerCase() }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 34,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV28("p", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxDEV28("span", { className: "block font-satoshi-bold", children: "Email Address" }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 37,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV28("span", { className: "block truncate ...", children: contestant.contestant_biodata.email }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 36,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV28("p", { className: "", children: [
          /* @__PURE__ */ jsxDEV28("span", { className: "block font-satoshi-bold", children: "State of Residence" }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 41,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV28("span", { className: "block capitalize", children: contestant.contestant_biodata.state_of_residence }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationSuccess.tsx",
            lineNumber: 42,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/RegistrationSuccess.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/RegistrationSuccess.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/RegistrationSuccess.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/RegistrationSuccess.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/components/public/contests/RegistrationForm.tsx
import { Form as Form3 } from "@remix-run/react";
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
function RegistrationForm({ contest }) {
  return /* @__PURE__ */ jsxDEV29(Form3, { method: "POST", encType: "multipart/form-data", className: "bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6", children: [
    /* @__PURE__ */ jsxDEV29("p", { className: "text-2xl font-satoshi-bold", children: 'Participate by filling in your basic information below and clicking "Submit".' }, void 0, !1, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV29("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV29(
        FormControl,
        {
          as: "input",
          labelText: "First Name",
          id: "first_name",
          name: "first_name",
          placeholder: "Enter your first name",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 17,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV29(
        FormControl,
        {
          as: "input",
          labelText: "Last Name",
          id: "last_name",
          name: "last_name",
          placeholder: "Enter your last name",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 20,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV29("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV29(
        FormControl,
        {
          as: "input",
          labelText: "Email Address",
          id: "email",
          name: "email",
          placeholder: "Enter your email address",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 25,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV29(
        FormControl,
        {
          as: "input",
          type: "date",
          labelText: "Date of Birth",
          id: "dob",
          name: "dob",
          placeholder: "dd/mm/yyyy",
          max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 28,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV29("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV29("label", { htmlFor: "gender", className: "font-bold flex flex-col", children: [
        "Gender",
        /* @__PURE__ */ jsxDEV29(Select, { name: "sex", required: !0, children: [
          /* @__PURE__ */ jsxDEV29(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV29(SelectValue, { placeholder: "Gender" }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 36,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 35,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV29(SelectContent, { children: [
            /* @__PURE__ */ jsxDEV29(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }, void 0, !1, {
              fileName: "app/components/public/contests/RegistrationForm.tsx",
              lineNumber: 39,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV29(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" }, void 0, !1, {
              fileName: "app/components/public/contests/RegistrationForm.tsx",
              lineNumber: 40,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 34,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV29("label", { htmlFor: "state_of_residence", className: "font-bold flex flex-col", children: [
        "State of Residence",
        /* @__PURE__ */ jsxDEV29(Select, { name: "state_of_residence", required: !0, children: [
          /* @__PURE__ */ jsxDEV29(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV29(SelectValue, { placeholder: "Select a state" }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 47,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 46,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV29(SelectContent, { children: Object.entries(nigerianStates).map(([key, val]) => /* @__PURE__ */ jsxDEV29(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: val }, key, !1, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 51,
            columnNumber: 33
          }, this)) }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 49,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV29("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV29(
        FormControl,
        {
          as: "input",
          type: "tel",
          labelText: "Whatsapp Number",
          id: "whatsapp_no",
          name: "whatsapp_no",
          placeholder: "Enter your whatsapp number",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 58,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV29("label", { htmlFor: "category", className: "font-bold flex flex-col", children: [
        "Category",
        /* @__PURE__ */ jsxDEV29(Select, { name: "category", required: !!contest.categories.length, children: [
          /* @__PURE__ */ jsxDEV29(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV29(SelectValue, { placeholder: "Select a category" }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 64,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 63,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV29(SelectContent, { children: contest.categories.map((category) => /* @__PURE__ */ jsxDEV29(SelectItem, { value: category, className: "focus:bg-blue-700/25", children: category }, category, !1, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 68,
            columnNumber: 33
          }, this)) }, void 0, !1, {
            fileName: "app/components/public/contests/RegistrationForm.tsx",
            lineNumber: 66,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 62,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/RegistrationForm.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV29(
        FormControl,
        {
          as: "textarea",
          labelClassNames: "col-span-2",
          labelText: "What would you like your voters to know?",
          id: "info",
          name: "info",
          placeholder: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/contests/RegistrationForm.tsx",
          lineNumber: 74,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV29(DragnDrop, { labelText: "Upload Image", name: "contestant_image", multiple: !0, required: !0 }, void 0, !1, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "contestId", value: contest._id }, void 0, !1, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV29(Button, { element: "button", type: "submit", name: "intent", value: "register", className: "md:self-end", children: "Submit" }, void 0, !1, {
      fileName: "app/components/public/contests/RegistrationForm.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/RegistrationForm.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

// app/components/reusables/AutoplayCarousel.tsx
import { useEffect as useEffect6, useRef as useRef4, useState as useState6 } from "react";
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
function AutoplayCarousel({ children, containerClass = "", trackClass = "", slideDuration, reverse = !1 }) {
  let [fillAmount, setFillAmount] = useState6(1), container = useRef4(null), track = useRef4(null);
  return useEffect6(() => {
    let containerWidth = container.current?.offsetWidth ?? 0, trackWidth = track.current?.offsetWidth ?? 0, soln = Math.min(Math.ceil(containerWidth / trackWidth));
    container.current?.style.setProperty("--timing", `${slideDuration ?? soln * 3}s`), setFillAmount(soln);
  }, []), /* @__PURE__ */ jsxDEV30("div", { ref: container, className: `carousel-container ${containerClass}`, children: [
    /* @__PURE__ */ jsxDEV30("div", { ref: track, className: `carousel-track ${reverse ? "slide-reverse" : "slide"} ${trackClass}`, children: Array(fillAmount).fill(children) }, void 0, !1, {
      fileName: "app/components/reusables/AutoplayCarousel.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV30("div", { className: `carousel-track ${reverse ? "slide-reverse" : "slide"} ${trackClass}`, children: Array(fillAmount).fill(children) }, void 0, !1, {
      fileName: "app/components/reusables/AutoplayCarousel.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/reusables/AutoplayCarousel.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/components/reusables/CarouselItem.tsx
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
function CarouselItem({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsxDEV31("div", { className: `carousel-card sm:mx-2 ${className}`, ...props, children }, void 0, !1, {
    fileName: "app/components/reusables/CarouselItem.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/public/ContestantSlider.tsx
import { Fragment as Fragment4, jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
function ContestantSlider({ contestants }) {
  return /* @__PURE__ */ jsxDEV32(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV32(AutoplayCarousel, { slideDuration: 30, children: contestants.map((contestant) => /* @__PURE__ */ jsxDEV32(CarouselItem, { className: "h-24 md:h-72 aspect-square rounded-lg overflow-hidden mx-2 md:mx-6", children: /* @__PURE__ */ jsxDEV32("img", { src: contestant.image, alt: "person smiling", className: "h-full aspect-square object-cover" }, void 0, !1, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 10,
      columnNumber: 25
    }, this) }, contestant.id, !1, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 9,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV32(AutoplayCarousel, { slideDuration: 30, reverse: !0, children: contestants.map((contestant) => /* @__PURE__ */ jsxDEV32(CarouselItem, { className: "h-24 md:h-72 aspect-square rounded-lg overflow-hidden mx-2 md:mx-6", children: /* @__PURE__ */ jsxDEV32("img", { src: contestant.image, alt: "person smiling", className: "h-full aspect-square object-cover" }, void 0, !1, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 17,
      columnNumber: 25
    }, this) }, contestant.id, !1, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 16,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/components/public/ContestantSlider.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/ContestantSlider.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/components/public/contests/RegisteringContest.tsx
import { Fragment as Fragment5, jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
function RegisteringContest({ contest }) {
  let actionRes = useActionData();
  return /* @__PURE__ */ jsxDEV33(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV33("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxDEV33("div", { className: "flex flex-col justify-around", children: [
        /* @__PURE__ */ jsxDEV33("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxDEV33("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3", children: contest.name }, void 0, !1, {
            fileName: "app/components/public/contests/RegisteringContest.tsx",
            lineNumber: 19,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV33("p", { className: "font-satoshi-medium", children: contest.desc }, void 0, !1, {
            fileName: "app/components/public/contests/RegisteringContest.tsx",
            lineNumber: 20,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/contests/RegisteringContest.tsx",
          lineNumber: 18,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV33(ContestTimer, { deadline: new Date(contest.reg_deadline), title: "registration ends in" }, void 0, !1, {
          fileName: "app/components/public/contests/RegisteringContest.tsx",
          lineNumber: 22,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV33("img", { src: contest.image || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" }, void 0, !1, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/RegisteringContest.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV33("section", { className: "sm:wrapper my-16", children: /* @__PURE__ */ jsxDEV33("div", { className: "flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8", children: [
      /* @__PURE__ */ jsxDEV33(ContestGuidelines, { contest }, void 0, !1, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 28,
        columnNumber: 21
      }, this),
      actionRes?.data ? /* @__PURE__ */ jsxDEV33(RegistrationSuccess, { contestant: actionRes.data, contest }, void 0, !1, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 31,
        columnNumber: 27
      }, this) : /* @__PURE__ */ jsxDEV33(RegistrationForm, { contest }, void 0, !1, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 32,
        columnNumber: 27
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/RegisteringContest.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/public/contests/RegisteringContest.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV33("section", { className: "my-8 md:my-16", children: [
      /* @__PURE__ */ jsxDEV33("h2", { className: "text-2xl sm:text-[40px] leading-snug font-satoshi-black w-4/5 max-w-lg text-center mx-auto my-10", children: "Over 500 registered participants and counting" }, void 0, !1, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV33(ContestantSlider, { contestants: [{ id: "sdjc", image: hero_1_default }, { id: "adcn", image: hero_2_default }, { id: "kjsd", image: hero_3_default }] }, void 0, !1, {
        fileName: "app/components/public/contests/RegisteringContest.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/contests/RegisteringContest.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/contests/RegisteringContest.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/routes/_public.contests.$tournamentId.$contestId._index.tsx
import { jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
async function action3({ request }) {
  let formData = await request.formData(), intent = formData.get("intent");
  if (intent === "register")
    return await registerContestant(formData, request);
  if (intent === "tally_vote")
    return await getTallyLink(formData, request);
  if (intent === "kotmy_vote")
    return await voteContestant(formData, request);
  let { headers } = await setToast({ request, toast: `error::This action is not yet supported::${Date.now()}` });
  return json5(null, { headers });
}
function ContestPage() {
  let stageContestants = useRouteLoaderData4("routes/_public.contests.$tournamentId.$contestId");
  if (!stageContestants)
    throw new Error("Could not load stage contestants");
  let { contest, stage } = stageContestants;
  return /* @__PURE__ */ jsxDEV34("main", { className: "grow", children: contest.status === "registering" ? /* @__PURE__ */ jsxDEV34(RegisteringContest, { contest }, void 0, !1, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId._index.tsx",
    lineNumber: 29,
    columnNumber: 19
  }, this) : /* @__PURE__ */ jsxDEV34(OngoingContest, { contest, stage }, void 0, !1, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId._index.tsx",
    lineNumber: 30,
    columnNumber: 19
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId._index.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

// app/routes/_public.contest.contestant.$contestantId._index.tsx
var public_contest_contestant_contestantId_index_exports = {};
__export(public_contest_contestant_contestantId_index_exports, {
  action: () => action3,
  default: () => ContestContestant,
  loader: () => loader3,
  useContestContestantController: () => useContestContestantController
});
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { useEffect as useEffect7, useState as useState7 } from "react";

// app/lib/helpers/contestant.helper.ts
var ContestantHelper = class {
  enrichContestantsDataForContest(contestWStageWContetant) {
    let contestantsUpload = [];
    for (let stage of contestWStageWContetant.stages)
      for (let contestant of stage.contestants) {
        let contestantUpload = {
          id: contestant._id,
          fullName: `${contestant.contestant_biodata?.first_name} ${contestant.contestant_biodata?.last_name}`,
          contestantCode: contestant.code,
          contestName: contestWStageWContetant.name,
          stage: stage.stage,
          stageStatus: stage.status,
          stageMediaType: stage.media_type ?? "image",
          contestImage: contestWStageWContetant.image_url ?? "",
          contestantId: contestant._id,
          contestantImage: contestant.image_url,
          originalContestantData: contestant,
          code: contestant.code,
          stageSocialMedia: stage.rates.social_media.type,
          info: contestant.info ?? "Abeg, vote for me",
          is_evicted: contestant.is_evicted
        };
        contestantsUpload.push(contestantUpload);
      }
    return console.log({ contestantsUpload }), contestantsUpload;
  }
  enrichContestsContestantsData(contestsWStageWContetant) {
    let pendingUploads = [];
    for (let contest of contestsWStageWContetant) {
      let flattenedContest = this.enrichContestantsDataForContest(contest);
      pendingUploads.push(...flattenedContest);
    }
    return pendingUploads;
  }
}, contestantHelper = new ContestantHelper();

// app/routes/_public.contest.contestant.$contestantId._index.tsx
import { useLocation as useLocation2 } from "@remix-run/react";
import { jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
async function loader3({ request }) {
  let url = new URL(request.url), { fingerprint } = await getFingerprint({ request }), contestantCode = url.searchParams.get("contestantCode") ?? "", stageId = url.searchParams.get("stageId") ?? "", { data, error } = await contestantRepo.getContestantDetailsForContest(contestantCode, stageId);
  return { data, error, url: request.url };
}
function useContestContestantController() {
  let [enrichedContestants, setEnrichedcontestants] = useState7([]), [contestantDetailsForActiveStage, setContestantDetailsForActiveStage] = useState7(null), { data, error, url } = useLoaderData3(), location = useLocation2(), [isToastFired, setIsToastFired] = useState7(!1);
  useEffect7(() => {
    error && !isToastFired && (toast({
      variant: "destructive",
      title: "An error occured",
      description: error?.detail.toString() ?? "Error occured"
    }), setIsToastFired(!0));
  }, [error, isToastFired]), useEffect7(() => {
    if (data) {
      let _enrichedContestants = contestantHelper.enrichContestantsDataForContest(data);
      setEnrichedcontestants(_enrichedContestants), setContestantDetailsForActiveStage(_enrichedContestants.find((c) => c.stageStatus === "ongoing") ?? _enrichedContestants[0] ?? null);
    }
  }, [data]);
  let handleCopy = async () => {
    await navigator.clipboard.writeText(url), toast({
      title: "Link Copied",
      description: "Contestant profile link copied to clipboard."
    });
  }, WhatsAppText = `Please vote for my profile in the contest! Check it out here: ${url}`, whatsappUrl = `https://wa.me/?text=${encodeURIComponent(WhatsAppText)}`;
  return { enrichedContestants, contestantDetailsForActiveStage, handleCopy, whatsappUrl };
}
function ContestContestant() {
  let { enrichedContestants, contestantDetailsForActiveStage, handleCopy, whatsappUrl } = useContestContestantController(), profileContestant = contestantDetailsForActiveStage || enrichedContestants[0];
  if (!profileContestant)
    return /* @__PURE__ */ jsxDEV35("div", { className: "min-h-screen flex items-center justify-center ", children: /* @__PURE__ */ jsxDEV35("p", { className: "text-xl text-gray-500", children: "Loading or no contestant data found..." }, void 0, !1, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this);
  let { originalContestantData, stageSocialMedia, fullName, info, stage, is_evicted } = profileContestant;
  return /* @__PURE__ */ jsxDEV35("div", { className: "min-h-screen text-gray-900", children: [
    /* @__PURE__ */ jsxDEV35("header", { className: " pt-24 pb-16 border-b border-gray-200", children: /* @__PURE__ */ jsxDEV35("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV35("div", { className: "flex flex-col lg:flex-row items-start lg:space-x-12", children: [
      /* @__PURE__ */ jsxDEV35("div", { className: "w-full lg:w-96 flex-shrink-0 mb-8 lg:mb-0", children: /* @__PURE__ */ jsxDEV35(
        ContestantCard,
        {
          contestant: originalContestantData,
          socialMedia: stageSocialMedia
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 102,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV35("div", { className: "flex-grow pt-4", children: [
        /* @__PURE__ */ jsxDEV35("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ jsxDEV35("div", { children: [
          /* @__PURE__ */ jsxDEV35("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ jsxDEV35("h1", { className: "text-5xl font-extrabold text-gray-900", children: fullName }, void 0, !1, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 113,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV35("span", { className: "ml-4 inline-flex items-center px-4 py-1.5 rounded-full text-base font-semibold tracking-wide bg-indigo-50 text-indigo-800", children: is_evicted ? "EVICTED" : "ACTIVE" }, void 0, !1, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 116,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 112,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV35("p", { className: "text-xl text-gray-600 mb-6 font-light", children: info }, void 0, !1, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 120,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV35("p", { className: "text-lg text-gray-700 mb-8 max-w-2xl", children: contestantDetailsForActiveStage?.info ?? "No stage-specific bio available. Displaying general contestant info." }, void 0, !1, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 121,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV35("div", { className: "flex space-x-4 mb-8", children: [
            /* @__PURE__ */ jsxDEV35("button", { onClick: () => handleCopy(), className: "bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 transform hover:scale-[1.02]", children: "Share Link" }, void 0, !1, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 125,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV35(
              "a",
              {
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-white border border-gray-300 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-150 transform hover:scale-[1.02]",
                children: "Share via WhatsApp"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
                lineNumber: 128,
                columnNumber: 27
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 124,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 111,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV35("div", { className: "grid grid-cols-3 gap-8 pt-6 mt-6 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxDEV35("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxDEV35("span", { className: "text-5xl font-extrabold text-indigo-600", children: enrichedContestants.length }, void 0, !1, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV35("span", { className: "text-sm text-gray-500 uppercase tracking-wider mt-1", children: "Total Stages" }, void 0, !1, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 145,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV35("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxDEV35("span", { className: "text-5xl font-extrabold text-gray-900", children: stage }, void 0, !1, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 148,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV35("span", { className: "text-sm text-gray-500 uppercase tracking-wider mt-1", children: "Current Stage" }, void 0, !1, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 149,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV35("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxDEV35("span", { className: "text-5xl font-extrabold text-gray-900", children: is_evicted ? "No" : "Yes" }, void 0, !1, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV35("span", { className: "text-sm text-gray-500 uppercase tracking-wider mt-1", children: "In Contest" }, void 0, !1, {
              fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
              lineNumber: 153,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
            lineNumber: 151,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 142,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV35("main", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV35("div", { className: " z-10 border-b border-gray-200 mb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pt-4 pb-3", children: [
        /* @__PURE__ */ jsxDEV35("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Contest Stages History" }, void 0, !1, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV35("nav", { children: /* @__PURE__ */ jsxDEV35("ul", { className: "flex space-x-10 text-lg font-medium", children: /* @__PURE__ */ jsxDEV35("li", { className: "text-indigo-600 border-b-2 border-indigo-600 pb-2 cursor-pointer", children: [
          "All Stages (",
          enrichedContestants.length,
          ")"
        ] }, void 0, !0, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 171,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 170,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV35("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3", children: enrichedContestants.map((contestant) => /* @__PURE__ */ jsxDEV35(
        ContestantStatisticsCard,
        {
          contestant
        },
        `${contestant.code}-${contestant.id}`,
        !1,
        {
          fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
          lineNumber: 182,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.contest.contestant.$contestantId._index.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

// app/routes/_public.contests.$tournamentId.$contestId.tsx
var public_contests_tournamentId_contestId_exports = {};
__export(public_contests_tournamentId_contestId_exports, {
  default: () => ContestLayout,
  loader: () => loader4
});
import { json as json7, redirect as redirect2 } from "@remix-run/node";
import { Outlet as Outlet2 } from "@remix-run/react";

// app/services/contest/types/contest.interface.ts
function dtoToContest(contest) {
  return contest && {
    _id: contest._id,
    id: contest.contest_unique_id,
    name: contest.name,
    desc: contest.desc,
    tournament_unique_id: contest.tournament_unique_id,
    image: contest.image_url,
    status: contest.status,
    start_date: contest.start_date,
    end_date: contest.end_date,
    reg_deadline: contest.reg_deadline,
    prizes: contest.prizes,
    sub_req: contest.sub_req,
    terms_cond: contest.terms_cond,
    add_info: contest.add_info,
    categories: contest.categories,
    stages: contest.stages,
    no_of_stages: contest.no_of_stages,
    no_of_winners: contest.no_of_winners
  };
}
function dtoToContestInTournament(contest) {
  return {
    id: contest.contest_unique_id,
    image: contest.image_url,
    name: contest.name,
    status: contest.status
  };
}

// app/services/contest/contest.server.ts
import { json as json6 } from "@remix-run/node";
var TOKEN2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjFkYTc3MTU1MzE3NzdjMDMwZWI2NCIsImVtYWlsIjoiYXR1bWFzYW11ZWxva3BhcmEzQGdtYWlsLmNvbSIsImlzX3N0YWZmIjp0cnVlLCJpc19zdXBlcnVzZXIiOnRydWUsInJvbGVzIjpbXSwicGVybWlzc2lvbnMiOltdLCJleHAiOjE3NzExNzM0NDJ9.sHAuj-OTgwKuSpgrsY0vjPeHHnOJNzENSxmYIFo414k", ContestRepository = class {
  /**
   *
   */
  constructor() {
  }
  async createContest(contest, token = TOKEN2) {
    return console.log("Damn, that's interesting"), contest.entries().forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    }), await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.createContest,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
      data: contest
    });
  }
  async deleteContest(contestId, token = TOKEN2) {
    return await ApiCall.call({
      method: "DELETE" /* DELETE */,
      url: ApiEndPoints.deleteContest(contestId),
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  async getContests() {
    let { data: contests2, error } = await ApiCall.call({
      url: ApiEndPoints.getContests
    });
    return contests2 ? { data: contests2.map((contest) => dtoToContest(contest)) } : { error };
  }
  async getContestById(contestId) {
    let { data: contest, error } = await ApiCall.call({
      url: ApiEndPoints.getContestById(contestId)
    });
    return error || !contest ? { error: error ?? { detail: "The contest was not found" } } : { data: dtoToContest(contest) };
  }
  async adminGetContestsInTournament(tournamentUniqueId, token = TOKEN2) {
    let { data: contests2, error } = await ApiCall.call({
      url: ApiEndPoints.adminGetContestsInTournament(tournamentUniqueId),
      headers: { Authorization: `Bearer ${token}` }
    });
    return contests2 ? { data: contests2.map((contest) => dtoToContest(contest)) } : { error };
  }
  async getContestsInTournament(tournamentUniqueId) {
    let { data: contests2, error } = await ApiCall.call({
      url: ApiEndPoints.getContestsInTournament(tournamentUniqueId)
    });
    return contests2 ? { data: contests2.map((contest) => dtoToContest(contest)) } : { error };
  }
  async updateContest({ contestId, dto, token = TOKEN2 }) {
    let { data: contest, error } = await ApiCall.call({
      url: ApiEndPoints.updateContest(contestId),
      method: "PUT" /* PUT */,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
      data: dto
    });
    return error || !contest ? { error: error ?? { detail: "This contest no longer exists" } } : { data: dtoToContest(contest) };
  }
  async updateStage({ stageId, dto, token = TOKEN2 }) {
    let { data: stage, error } = await ApiCall.call({
      url: ApiEndPoints.updateStage(stageId),
      method: "PATCH" /* PATCH */,
      headers: { Authorization: `Bearer ${token}` },
      data: dto
    });
    return error || !stage ? { error: error ?? { detail: "The stage was not found" } } : { data: stage };
  }
  async deleteStage({ stageId, token = TOKEN2 }) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.deleteStage(stageId),
      method: "DELETE" /* DELETE */,
      headers: { Authorization: `Bearer ${token}` }
    });
    return error ? { error } : { data };
  }
  async toggleRegistration({ contestId, token = TOKEN2 }) {
    let { data: contest, error } = await ApiCall.call({
      url: ApiEndPoints.toggleRegistration({ contestId }),
      method: "PATCH" /* PATCH */,
      headers: { Authorization: `Bearer ${token}` }
    });
    return error || !contest ? { error: error ?? { detail: "The contest was not found" } } : { data: dtoToContest(contest) };
  }
  async getContestantsInStage(stageId, headers) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.getContestantsInStage(stageId),
      headers: { device_fingerprint: headers.fingerprint }
    });
    return error ? { error: error ?? { detail: "Could not fetch the stage data" } } : { data };
  }
  async migrateStage(payload, token = TOKEN2) {
    return await ApiCall.call({
      url: ApiEndPoints.migrateStage,
      method: "POST" /* POST */,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: payload
    });
  }
  async getWinners(query) {
    let queryString = ApiCall.convertObjToQueryString(query || {}), { data, error } = await ApiCall.call({
      url: ApiEndPoints.getWinners + "?" + queryString.toString(),
      method: "POST" /* POST */
    });
    return error ? { error: error ?? { detail: "Could not fetch the winners data" } } : { data };
  }
  async getWinnerById(winnerId) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.getWinner(winnerId),
      method: "GET" /* GET */
    });
    return error ? { error: error ?? { detail: "Could not fetch the winner's data" } } : { data };
  }
}, contestRepo = new ContestRepository();
function prepareContestPayload(formData) {
  let no_of_stages = parseInt(formData.get("no_of_stages")), stages = [];
  for (let i = 1; i <= no_of_stages; i++)
    stages.push({
      _id: formData.get(`stage_${i}_id`),
      stage: i,
      weight: formData.get(`weight_${i}`),
      rates: {
        social_media: { type: formData.get(`social_media_${i}`), amount: 0 },
        tally: 0,
        judge: 0,
        givaah: 0
      }
    });
  let payloadObj = {
    name: formData.get("name"),
    contest_unique_id: formData.get("uniqueId"),
    tournament_unique_id: formData.get("tournament"),
    desc: formData.get("description"),
    reg_deadline: new Date(formData.get("reg_deadline")).toISOString(),
    start_date: new Date(formData.get("start_date")).toISOString(),
    end_date: new Date(formData.get("end_date")).toISOString(),
    prizes: formData.get("prizes"),
    add_info: formData.get("add_info"),
    sub_req: formData.get("sub_req"),
    terms_cond: formData.get("tnc"),
    image: formData.get("image") ? formData.get("image").size === 0 ? null : formData.get("image") : null,
    categories: JSON.stringify(formData.getAll("category")),
    no_of_stages,
    stages: JSON.stringify(stages)
  };
  console.log(payloadObj);
  let payload = new FormData();
  return Object.entries(payloadObj).forEach(([key, value]) => {
    (value !== null || value != null) && payload.append(key, value);
  }), payload;
}
async function deleteContest(formData, request) {
  let contestId = formData.get("contestId"), { data, error } = await contestRepo.deleteContest(contestId);
  if (data) {
    let { headers: headers2 } = await setToast({ request, toast: `success::The contest has been deleted::${Date.now()}` });
    return json6(null, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `error::Could not delete the contest::${Date.now()}` });
  return json6(error, { headers });
}
async function updateStage(formData, request) {
  let stageId = formData.get("stageId"), dto = prepareStageDto(formData), { data, error } = await contestRepo.updateStage({ stageId, dto });
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail}::${Date.now()}` });
    return json6(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::The stage has been updated::${Date.now()}` });
  return json6(data, { headers });
}
async function toggleRegistration(formData, request) {
  let contestId = formData.get("contestId"), { data, error } = await contestRepo.toggleRegistration({ contestId });
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail || "Could not perform the action"}::${Date.now()}` });
    return json6(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::The contest has been updated::${Date.now()}` });
  return json6(data, { headers });
}
function prepareStageDto(formData) {
  return {
    weight: parseInt(formData.get("weight")),
    start_date: new Date(formData.get("start_date")).toISOString(),
    end_date: new Date(formData.get("end_date")).toISOString(),
    rates: {
      social_media: {
        type: formData.get("social_media_type"),
        amount: parseInt(formData.get("social_media_rate"))
      },
      tally: parseInt(formData.get("tally_rate")),
      judge: parseInt(formData.get("judge_rate")),
      givaah: parseInt(formData.get("givaah_rate"))
    },
    success_count: parseInt(formData.get("success_count")),
    grade: {
      A: [parseInt(formData.get("min_A")), parseInt(formData.get("max_A"))],
      B: [parseInt(formData.get("min_B")), parseInt(formData.get("max_B"))],
      C: [parseInt(formData.get("min_C")), parseInt(formData.get("max_C"))],
      D: [parseInt(formData.get("min_D")), parseInt(formData.get("max_D"))],
      E: [parseInt(formData.get("min_E")), parseInt(formData.get("max_E"))],
      F: [parseInt(formData.get("min_F")), parseInt(formData.get("max_F"))]
    }
  };
}
async function migrateStage(formData, request) {
  let payload = {
    current_stage_id: formData.get("from"),
    new_stage_id: formData.get("to")
  }, { data, error } = await contestRepo.migrateStage(payload);
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail || "Could not perform the action"}::${Date.now()}` });
    return json6(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::Contestants have been migrated to the next stage::${Date.now()}` });
  return json6(data, { headers });
}
async function getFinalResultForContest(contestUniqueId) {
  let { data: contest, error } = await ApiCall.call({
    url: ApiEndPoints.finalResultForContest(contestUniqueId)
  });
  return contest ? { data: contest } : { error };
}

// app/routes/_public.contests.$tournamentId.$contestId.tsx
import { jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
async function loader4({ params, request }) {
  let { tournamentId, contestId } = params;
  if (!contestId)
    return redirect2(`/contests/${tournamentId}`);
  let url = new URL(request.url), tx_status = url.searchParams.get("status"), tx_ref = url.searchParams.get("tx_ref");
  if (tx_status && tx_ref) {
    await callTallyWebhook(tx_ref);
    let toast3 = tx_status === "completed" ? `success::Your payment has been received. Your vote will reflect shortly.::${Date.now()}` : `error::There seems to be an issue with your payment. Please try again later.::${Date.now()}`, { headers: headers2 } = await setToast({ request, toast: toast3 });
    throw url.searchParams.delete("status"), url.searchParams.delete("tx_ref"), url.searchParams.delete("transaction_id"), console.log("Redirecting to:", `${url.pathname}?${url.searchParams.toString()}`), redirect2(`${url.pathname}?${url.searchParams.toString()}`, { headers: headers2 });
  }
  let { data: contest, error } = await contestRepo.getContestById(contestId);
  if (error)
    return redirect2(`/contests/${tournamentId}`);
  if (contest.status === "registering")
    return json7({ contest, stage: null, baseUrl: process.env._BASE_URL });
  let stageQ = url.searchParams.get("stage"), stageId = (stageQ ? contest.stages.find((stage2) => stage2.stage == +stageQ)?._id : contest.stages.find((stage2) => stage2.active)?._id) ?? contest.stages.find((stage2) => stage2.stage == 1)?._id, { fingerprint, headers } = await getFingerprint({ request }), stage = stageId ? (await contestRepo.getContestantsInStage(stageId, { fingerprint })).data ?? null : null;
  return json7({ contest, stage, baseUrl: process.env._BASE_URL }, { headers });
}
function ContestLayout() {
  return /* @__PURE__ */ jsxDEV36(Outlet2, {}, void 0, !1, {
    fileName: "app/routes/_public.contests.$tournamentId.$contestId.tsx",
    lineNumber: 50,
    columnNumber: 13
  }, this);
}

// app/routes/admin.transactions.contest-registrations.tsx
var admin_transactions_contest_registrations_exports = {};
__export(admin_transactions_contest_registrations_exports, {
  action: () => action4,
  default: () => ContestRegistrations,
  loader: () => loader5
});
import { json as json8 } from "@remix-run/node";
import { useLoaderData as useLoaderData4 } from "@remix-run/react";

// app/components/reusables/DataTable.tsx
import React10 from "react";
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { jsxDEV as jsxDEV37 } from "react/jsx-dev-runtime";
function DataTable({
  data,
  columns: columns6,
  className = "",
  TableActions,
  expandRows,
  getRowCanExpand,
  SubComponent
}) {
  let [sorting, setSorting] = React10.useState([]), expandOptions = expandRows ? { getRowCanExpand, getExpandedRowModel: getExpandedRowModel() } : {}, [rowSelection, setRowSelection] = React10.useState({}), table = useReactTable({
    data,
    columns: columns6,
    getCoreRowModel: getCoreRowModel(),
    state: { sorting, rowSelection },
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    ...expandOptions
  });
  return /* @__PURE__ */ jsxDEV37("div", { className: "", children: [
    TableActions ? /* @__PURE__ */ jsxDEV37(TableActions, { table }, void 0, !1, {
      fileName: "app/components/reusables/DataTable.tsx",
      lineNumber: 42,
      columnNumber: 29
    }, this) : null,
    /* @__PURE__ */ jsxDEV37("table", { className: `w-full ${className}`, children: [
      /* @__PURE__ */ jsxDEV37("thead", { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsxDEV37("tr", { className: "border-b border-secondary", children: headerGroup.headers.map((header) => /* @__PURE__ */ jsxDEV37("th", { className: "text-left uppercase font-satoshi-black p-3 [&:has([data-sortable=true])]:cursor-pointer [&:has([data-sortable=true])]:hover:bg-secondary", children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()) }, header.id, !1, {
        fileName: "app/components/reusables/DataTable.tsx",
        lineNumber: 48,
        columnNumber: 33
      }, this)) }, headerGroup.id, !1, {
        fileName: "app/components/reusables/DataTable.tsx",
        lineNumber: 46,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/components/reusables/DataTable.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV37("tbody", { children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsxDEV37(React10.Fragment, { children: [
        /* @__PURE__ */ jsxDEV37(
          "tr",
          {
            className: "border-b border-secondary hover:bg-secondary",
            "data-state": row.getIsSelected() && "selected",
            children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsxDEV37("td", { className: "p-3", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id, !1, {
              fileName: "app/components/reusables/DataTable.tsx",
              lineNumber: 65,
              columnNumber: 48
            }, this))
          },
          row.id,
          !1,
          {
            fileName: "app/components/reusables/DataTable.tsx",
            lineNumber: 60,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV37("tr", { className: "hover:bg-secondary focus-within:bg-secondary", children: /* @__PURE__ */ jsxDEV37("td", { colSpan: row.getVisibleCells().length, children: expandRows && row.getIsExpanded() && /* @__PURE__ */ jsxDEV37(SubComponent, { row }, void 0, !1, {
          fileName: "app/components/reusables/DataTable.tsx",
          lineNumber: 73,
          columnNumber: 79
        }, this) }, void 0, !1, {
          fileName: "app/components/reusables/DataTable.tsx",
          lineNumber: 72,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/components/reusables/DataTable.tsx",
          lineNumber: 70,
          columnNumber: 33
        }, this)
      ] }, row.id, !0, {
        fileName: "app/components/reusables/DataTable.tsx",
        lineNumber: 58,
        columnNumber: 29
      }, this)) : /* @__PURE__ */ jsxDEV37("tr", { className: "border-b border-secondary", children: /* @__PURE__ */ jsxDEV37("td", { className: "p-3 text-center", colSpan: columns6.length, children: "No data to display" }, void 0, !1, {
        fileName: "app/components/reusables/DataTable.tsx",
        lineNumber: 79,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/reusables/DataTable.tsx",
        lineNumber: 78,
        columnNumber: 27
      }, this) }, void 0, !1, {
        fileName: "app/components/reusables/DataTable.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/reusables/DataTable.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/reusables/DataTable.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this);
}

// app/components/reusables/DataTableColumnHeader.tsx
import { jsxDEV as jsxDEV38 } from "react/jsx-dev-runtime";
function DataTableColumnHeader({
  column,
  title,
  className
}) {
  return column.getCanSort() ? /* @__PURE__ */ jsxDEV38(
    "span",
    {
      "data-sortable": !0,
      className: `flex items-center ${className}`,
      onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
      children: [
        /* @__PURE__ */ jsxDEV38("span", { children: title }, void 0, !1, {
          fileName: "app/components/reusables/DataTableColumnHeader.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV38(Svg, { src: icons.arrowUpDownIcon }, void 0, !1, {
          fileName: "app/components/reusables/DataTableColumnHeader.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/reusables/DataTableColumnHeader.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  ) : title;
}

// app/components/reusables/Pagination.tsx
import { jsxDEV as jsxDEV39 } from "react/jsx-dev-runtime";
function Pagination({ className = "" }) {
  return /* @__PURE__ */ jsxDEV39("div", { className: `flex gap-6 md:gap-8 justify-center items-center font-semibold ${className}`, children: [
    /* @__PURE__ */ jsxDEV39("button", { className: "flex gap-1 items-center rounded py-1 px-2 hover:outline outline-primary", children: [
      /* @__PURE__ */ jsxDEV39(Svg, { src: icons.arrowPrevIcon }, void 0, !1, {
        fileName: "app/components/reusables/Pagination.tsx",
        lineNumber: 8,
        columnNumber: 17
      }, this),
      " Prev"
    ] }, void 0, !0, {
      fileName: "app/components/reusables/Pagination.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV39("span", { className: "whitespace-nowrap", children: "1 of 20" }, void 0, !1, {
      fileName: "app/components/reusables/Pagination.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV39("button", { className: "flex gap-1 items-center rounded py-1 px-2 hover:outline outline-primary", children: [
      "Next ",
      /* @__PURE__ */ jsxDEV39(Svg, { src: icons.arrowNextIcon }, void 0, !1, {
        fileName: "app/components/reusables/Pagination.tsx",
        lineNumber: 12,
        columnNumber: 22
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/reusables/Pagination.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/reusables/Pagination.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/lib/dates.utils.ts
function parseDateForInput(date = (/* @__PURE__ */ new Date()).toISOString()) {
  return date.split("T")[0];
}
function parseDateTimeForInput(_date = (/* @__PURE__ */ new Date()).toISOString()) {
  let date = new Date(_date), year = date.getFullYear(), month = String(date.getMonth() + 1).padStart(2, "0"), day = String(date.getDate()).padStart(2, "0"), hours = String(date.getHours()).padStart(2, "0"), minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
function formatDate(date, options = {}) {
  return new Intl.DateTimeFormat("en-NG", options).format(date);
}

// app/components/admin/transactions/ContestRegistrationsTable.tsx
import { Fragment as Fragment6, jsxDEV as jsxDEV40 } from "react/jsx-dev-runtime";
var numberFormatterOptions = { style: "currency", currency: "NGN" }, dateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric"
}, timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}, columns = [
  {
    header: "S/N",
    cell: ({ row }) => +row.id + 1
  },
  {
    accessorKey: "tx_ref",
    header: ({ column }) => /* @__PURE__ */ jsxDEV40(DataTableColumnHeader, { column, title: "trx ref" }, void 0, !1, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "contest",
    header: ({ column }) => /* @__PURE__ */ jsxDEV40(DataTableColumnHeader, { column, title: "contest" }, void 0, !1, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "contestant",
    header: ({ column }) => /* @__PURE__ */ jsxDEV40(DataTableColumnHeader, { column, title: "contestant" }, void 0, !1, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "sender",
    header: ({ column }) => /* @__PURE__ */ jsxDEV40(DataTableColumnHeader, { column, title: "sender" }, void 0, !1, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "amount",
    header: ({ column }) => /* @__PURE__ */ jsxDEV40(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "amount" }, void 0, !1, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    cell: ({ getValue }) => numberFormatter(getValue(), numberFormatterOptions)
  },
  {
    accessorKey: "date",
    header: ({ column }) => /* @__PURE__ */ jsxDEV40(DataTableColumnHeader, { column, title: "date" }, void 0, !1, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    cell: ({ getValue }) => /* @__PURE__ */ jsxDEV40("span", { children: [
      /* @__PURE__ */ jsxDEV40("span", { className: "block", children: formatDate(new Date(getValue()), dateOptions) }, void 0, !1, {
        fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV40("span", { className: "block", children: formatDate(new Date(getValue()), timeOptions) }, void 0, !1, {
        fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "status",
    header: ({ column }) => /* @__PURE__ */ jsxDEV40(DataTableColumnHeader, { column, title: "status" }, void 0, !1, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    cell: ({ getValue }) => {
      let status = getValue();
      return /* @__PURE__ */ jsxDEV40(StatusTag, { status, color: status === "pending" ? "yellow" : status === "verified" ? "green" : status === "revoked" ? "red" : "gray" }, void 0, !1, {
        fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
        lineNumber: 76,
        columnNumber: 20
      }, this);
    }
  }
];
function ContestRegistrationsTable({ data }) {
  return /* @__PURE__ */ jsxDEV40(Fragment6, { children: [
    /* @__PURE__ */ jsxDEV40("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxDEV40(DataTable, { data, columns, className: "text-xs" }, void 0, !1, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV40("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
      /* @__PURE__ */ jsxDEV40("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ jsxDEV40("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 }, void 0, !1, {
          fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
          lineNumber: 89,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
        lineNumber: 88,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV40(Pagination, {}, void 0, !1, {
        fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
        lineNumber: 91,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/transactions/ContestRegistrationsTable.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this);
}

// app/routes/admin.transactions.contest-registrations.tsx
import { jsxDEV as jsxDEV41 } from "react/jsx-dev-runtime";
async function loader5({}) {
  let tranasctions = [{
    tx_ref: "KCRUSHIP4HIYGM72VL",
    sender: "payments@nefworld.com",
    contest: "My Kid Crush of December",
    contestant: "John Wick",
    amount: 53e3,
    date: (/* @__PURE__ */ new Date()).toISOString(),
    status: "verified"
  }, {
    tx_ref: "KCRUSHIP4HIYGM72VL",
    sender: "payments@nefworld.com",
    contest: "My Kid Crush of December",
    contestant: "John Wick",
    amount: 1e3,
    date: (/* @__PURE__ */ new Date()).toISOString(),
    status: "pending"
  }, {
    tx_ref: "KCRUSHIP4HIYGM72VL",
    sender: "payments@nefworld.com",
    contest: "My Kid Crush of December",
    contestant: "John Wick",
    amount: 2e3,
    date: (/* @__PURE__ */ new Date()).toISOString(),
    status: "revoked"
  }];
  return json8({ tranasctions });
}
async function action4({ request }) {
  let formData = await request.formData();
  console.log(...formData);
  let { headers } = await setToast({ request, toast: `success::The transaction has been created::${Date.now()}` });
  return json8(null, { headers });
}
function ContestRegistrations() {
  let { tranasctions } = useLoaderData4();
  return /* @__PURE__ */ jsxDEV41("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV41("section", { className: "flex justify-between items-center mb-8 sm:mb-16", children: /* @__PURE__ */ jsxDEV41("h1", { className: "text-xl xs:text-2xl font-black text-primary", children: "Registration Transactions" }, void 0, !1, {
      fileName: "app/routes/admin.transactions.contest-registrations.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.transactions.contest-registrations.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV41("section", { className: "my-12", children: /* @__PURE__ */ jsxDEV41(ContestRegistrationsTable, { data: tranasctions }, void 0, !1, {
      fileName: "app/routes/admin.transactions.contest-registrations.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.transactions.contest-registrations.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.transactions.contest-registrations.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/_public.contests.$tournamentId._index.tsx
var public_contests_tournamentId_index_exports = {};
__export(public_contests_tournamentId_index_exports, {
  default: () => TournamentPage,
  loader: () => loader6,
  useTournamentPageController: () => useTournamentPageController
});
import { json as json9, redirect as redirect3 } from "@remix-run/node";
import { useLoaderData as useLoaderData5 } from "@remix-run/react";
import { useState as useState8 } from "react";

// app/components/reusables/ContestCard.tsx
import { Link as Link5 } from "@remix-run/react";
import { jsxDEV as jsxDEV42 } from "react/jsx-dev-runtime";
function ContestCard({ contest, to, withTag, withCategory }) {
  let status = withTag ? contest.status : null, color = status === "registering" ? "yellow" : status === "ongoing" ? "green" : status === "completed" ? "red" : "gray";
  return /* @__PURE__ */ jsxDEV42(Link5, { to, className: "flex flex-col gap-2 max-w-lg relative w-full", children: [
    /* @__PURE__ */ jsxDEV42("img", { src: contest.image || no_image_default, alt: "contest image", className: "rounded-3xl h-56 object-cover" }, void 0, !1, {
      fileName: "app/components/reusables/ContestCard.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    withTag ? /* @__PURE__ */ jsxDEV42(StatusTag, { status: contest.status, className: "absolute top-4 left-4", color }, void 0, !1, {
      fileName: "app/components/reusables/ContestCard.tsx",
      lineNumber: 24,
      columnNumber: 24
    }, this) : null,
    withCategory ? /* @__PURE__ */ jsxDEV42("span", { className: "text-sm", children: "Category" }, void 0, !1, {
      fileName: "app/components/reusables/ContestCard.tsx",
      lineNumber: 25,
      columnNumber: 29
    }, this) : null,
    /* @__PURE__ */ jsxDEV42("p", { className: "text-2xl font-bold capitalize", children: contest.name }, void 0, !1, {
      fileName: "app/components/reusables/ContestCard.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/reusables/ContestCard.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

// app/services/tournament/types/tournament.interface.ts
function dtoToTournament(tournament) {
  return {
    _id: tournament._id,
    id: tournament.unique_id,
    name: tournament.name,
    description: tournament.desc,
    image: tournament.image_url,
    contests: tournament.contests?.map((contest) => dtoToContestInTournament(contest))
  };
}

// app/services/tournament/tournament.server.ts
var TOKEN3 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjFkYTc3MTU1MzE3NzdjMDMwZWI2NCIsImVtYWlsIjoiYXR1bWFzYW11ZWxva3BhcmEzQGdtYWlsLmNvbSIsImlzX3N0YWZmIjp0cnVlLCJpc19zdXBlcnVzZXIiOnRydWUsInJvbGVzIjpbXSwicGVybWlzc2lvbnMiOltdLCJleHAiOjE3NzExNzM0NDJ9.sHAuj-OTgwKuSpgrsY0vjPeHHnOJNzENSxmYIFo414k", TournamentRepository = class {
  async getTournaments() {
    let { data: tournaments, error } = await ApiCall.call({
      url: ApiEndPoints.getTournaments
    });
    return error ? { error } : { data: tournaments.map((tournament) => dtoToTournament(tournament)) };
  }
  async getTournamentById(tournamentId) {
    let { data: tournament, error } = await ApiCall.call({
      method: "GET" /* GET */,
      url: ApiEndPoints.getTournamentById(tournamentId)
    });
    return error || !tournament ? { error: error ?? { detail: "Tournament was not found" } } : { data: dtoToTournament(tournament) };
  }
  async createTournament(dto, token = TOKEN3) {
    let { data: tournament, error } = await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.createTournament,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
      data: dto
    });
    return error ? { error } : { data: dtoToTournament(tournament) };
  }
  async updateTournament({ id, dto, token = TOKEN3 }) {
    let { data: tournament, error } = await ApiCall.call({
      url: ApiEndPoints.updateTournament(id),
      method: "PUT" /* PUT */,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
      data: dto
    });
    return error || !tournament ? { error: error ?? { detail: "Tournament was not found" } } : { data: dtoToTournament(tournament) };
  }
  async deleteTournament(tournamentId, token = TOKEN3) {
    return await ApiCall.call({
      url: ApiEndPoints.deleteTournament(tournamentId),
      method: "DELETE" /* DELETE */,
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}, tournamentRepo = new TournamentRepository();
function prepareTournamentDto(formData) {
  let payloadObj = {
    name: formData.get("name"),
    unique_id: formData.get("uniqueId"),
    desc: formData.get("description"),
    image: formData.get("image") ? formData.get("image").size === 0 ? null : formData.get("image") : null
  }, payload = new FormData();
  return Object.entries(payloadObj).forEach(([key, value]) => {
    value !== null && value != null && payload.append(key, value);
  }), payload;
}

// app/routes/_public.contests.$tournamentId._index.tsx
import { jsxDEV as jsxDEV43 } from "react/jsx-dev-runtime";
async function loader6({ params }) {
  let { tournamentId } = params;
  if (!tournamentId)
    return redirect3("/contests");
  let { data: tournament, error } = await tournamentRepo.getTournamentById(tournamentId), { data: contests2 } = await contestRepo.getContestsInTournament(tournamentId);
  return error ? redirect3("/contests") : json9({
    tournament: {
      ...tournament,
      contests: contests2?.toReversed() ?? tournament.contests.filter((contest) => contest.status !== "yet_to_start").toReversed()
    }
  });
}
function useTournamentPageController() {
  let { tournament } = useLoaderData5();
  return { tournament };
}
function TournamentPage() {
  let { tournament } = useTournamentPageController(), [filteredContests, setFilteredContests] = useState8(tournament.contests ?? []), [activeId, setActiveId] = useState8("all");
  function handleFilterStatus(e, status) {
    setActiveId(e.currentTarget.id), setFilteredContests(tournament.contests.filter((contest) => contest.status === status)), e.currentTarget.classList.add("bg-accent", "text-white");
  }
  function getAllContestsInTournament(e) {
    setActiveId(e.currentTarget.id), setFilteredContests(tournament.contests);
  }
  return /* @__PURE__ */ jsxDEV43("main", { className: "grow", children: [
    /* @__PURE__ */ jsxDEV43("header", { className: "wrapper my-16", children: /* @__PURE__ */ jsxDEV43("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-bold max-w-3xl", children: tournament.name }, void 0, !1, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV43("section", { className: "wrapper", children: /* @__PURE__ */ jsxDEV43("div", { className: "p-2 rounded-full bg-secondary flex w-fit text-xs sm:text-base", children: [
      /* @__PURE__ */ jsxDEV43("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "all" ? "bg-accent text-white" : ""}`, id: "all", onClick: (e) => getAllContestsInTournament(e), children: "All KOTM" }, void 0, !1, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV43("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "ongoing" ? "bg-accent text-white" : ""}`, id: "ongoing", onClick: (e) => handleFilterStatus(e, "ongoing"), children: "Ongoing" }, void 0, !1, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 54,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV43("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "registering" ? "bg-accent text-white" : ""}`, id: "registering", onClick: (e) => handleFilterStatus(e, "registering"), children: "Registering" }, void 0, !1, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV43("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "completed" ? "bg-accent text-white" : ""}`, id: "completed", onClick: (e) => handleFilterStatus(e, "completed"), children: "Completed" }, void 0, !1, {
        fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV43("section", { className: "wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center", children: filteredContests.map((contest) => /* @__PURE__ */ jsxDEV43(ContestCard, { contest, to: contest.id, withTag: !0 }, contest.id, !1, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 61,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV43("div", { className: "wrapper my-20 flex justify-center", children: /* @__PURE__ */ jsxDEV43(Button, { element: "button", variant: "outline", children: "See more contests" }, void 0, !1, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 65,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.contests.$tournamentId._index.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this);
}

// app/routes/admin.contests.$contestId.$stageId.tsx
var admin_contests_contestId_stageId_exports = {};
__export(admin_contests_contestId_stageId_exports, {
  action: () => action5,
  default: () => StageContestants,
  loader: () => loader7
});
import { json as json10, redirect as redirect4 } from "@remix-run/node";
import { useLoaderData as useLoaderData7, useNavigate } from "@remix-run/react";

// app/components/reusables/Checkbox.tsx
import { jsxDEV as jsxDEV44 } from "react/jsx-dev-runtime";
function Checkbox({ className, checked = !1, onCheckedChange = () => {
}, ...props }) {
  return /* @__PURE__ */ jsxDEV44(
    "input",
    {
      type: "checkbox",
      checked,
      className: `cursor-pointer ${className}`,
      onChange: () => onCheckedChange(checked),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/reusables/Checkbox.tsx",
      lineNumber: 8,
      columnNumber: 9
    },
    this
  );
}

// app/components/admin/contest/EditContestantDialog.tsx
import { Form as Form4, useLoaderData as useLoaderData6 } from "@remix-run/react";
import { useState as useState10 } from "react";

// app/components/reusables/RoundCta.tsx
import React11 from "react";
import { Link as Link6 } from "@remix-run/react";
import cn5 from "classnames";
import { jsxDEV as jsxDEV45 } from "react/jsx-dev-runtime";
var RoundCta_default = React11.forwardRef(function({ icon, className = "", iconClass = "", ...props }, ref) {
  let disabled = props.element === "link" ? props["aria-disabled"] : props.disabled || props["aria-disabled"], classNames = cn5(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full ${className}`, {
    "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
  });
  return props.element === "link" ? /* @__PURE__ */ jsxDEV45(Link6, { ...props, className: classNames, children: /* @__PURE__ */ jsxDEV45(Svg, { src: icon, className: iconClass }, void 0, !1, {
    fileName: "app/components/reusables/RoundCta.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/reusables/RoundCta.tsx",
    lineNumber: 18,
    columnNumber: 16
  }, this) : /* @__PURE__ */ jsxDEV45("button", { ref, ...props, className: classNames, children: /* @__PURE__ */ jsxDEV45(Svg, { src: icon, className: iconClass }, void 0, !1, {
    fileName: "app/components/reusables/RoundCta.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/reusables/RoundCta.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
});

// app/hooks/useFilePreview.ts
import { useEffect as useEffect8, useRef as useRef5, useState as useState9 } from "react";
function useFilePreview(fileList) {
  let [filePreview, setFilePreview] = useState9(null), fileName = useRef5("");
  useEffect8(() => {
    if (fileList && fileList[0]) {
      fileName.current = fileList[0].name;
      let newUrl = URL.createObjectURL(fileList[0]);
      newUrl !== filePreview && setFilePreview(newUrl);
    }
  }, [fileList]);
  function clearFilePreview() {
    setFilePreview(null), fileName.current = "";
  }
  return { filePreview, clearFilePreview, fileName: fileName.current };
}

// app/components/admin/contest/EditContestantDialog.tsx
import { jsxDEV as jsxDEV46 } from "react/jsx-dev-runtime";
function EditContestantDialog({ disabled, contestant }) {
  let { stage } = useLoaderData6(), isKotmy = stage.rates.social_media.type === "kotmy", [files, setFiles] = useState10(null), { filePreview, clearFilePreview } = useFilePreview(files);
  return /* @__PURE__ */ jsxDEV46(Dialog, { onOpenChange: (open) => {
    open || clearFilePreview();
  }, children: [
    /* @__PURE__ */ jsxDEV46(
      DialogTrigger,
      {
        disabled,
        title: "Edit contestant",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-[#262626] bg-[#F7F7F8] text-primary", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsxDEV46(Svg, { src: icons.editIcon, className: "w-3" }, void 0, !1, {
          fileName: "app/components/admin/contest/EditContestantDialog.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/contest/EditContestantDialog.tsx",
        lineNumber: 32,
        columnNumber: 13
      },
      this
    ),
    disabled ? null : /* @__PURE__ */ jsxDEV46(DialogContent, { className: "bg-secondary max-h-screen overflow-y-auto", children: /* @__PURE__ */ jsxDEV46(DialogHeader, { children: [
      /* @__PURE__ */ jsxDEV46(DialogTitle, { children: "Edit Contestant Data" }, void 0, !1, {
        fileName: "app/components/admin/contest/EditContestantDialog.tsx",
        lineNumber: 41,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV46(DialogDescription, { children: /* @__PURE__ */ jsxDEV46(Form4, { method: "POST", className: "text-primary text-xs flex flex-col gap-4 mt-3", encType: "multipart/form-data", children: [
        /* @__PURE__ */ jsxDEV46("fieldset", { className: "py-1 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxDEV46("legend", { className: "text-gray-400 font-medium", children: "Biodata" }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 45,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46("div", { className: "relative max-sm:col-span-2 row-span-3 flex flex-col max-h-56 overflow-y-hidden rounded text-left font-semibold", children: [
            "Image",
            /* @__PURE__ */ jsxDEV46("img", { src: filePreview || contestant.image_url || no_image_default, alt: "contestant image", width: 300, height: 300, className: "bg-neutral-200 size-full object-cover rounded" }, void 0, !1, {
              fileName: "app/components/admin/contest/EditContestantDialog.tsx",
              lineNumber: 47,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ jsxDEV46(
              RoundCta_default,
              {
                icon: icons.closeIcon,
                element: "button",
                type: "button",
                onClick: () => clearFilePreview(),
                className: cn("absolute bottom-2 right-2 bg-white/80 p-2 rounded-full hover:bg-red-50 hover:text-red-400 transition-colors", { hidden: !filePreview })
              },
              void 0,
              !1,
              {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 48,
                columnNumber: 41
              },
              this
            ),
            /* @__PURE__ */ jsxDEV46("label", { htmlFor: "media", className: cn("absolute bottom-2 right-2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors cursor-pointer", { hidden: filePreview }), children: [
              /* @__PURE__ */ jsxDEV46("input", { type: "file", name: "media", id: "media", hidden: !0, onChange: (e) => setFiles(e.target.files) }, void 0, !1, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 52,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ jsxDEV46(Svg, { src: icons.imageIcon }, void 0, !1, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 53,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/admin/contest/EditContestantDialog.tsx",
              lineNumber: 51,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 46,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46(FormControl, { as: "input", id: "first_name", name: "first_name", labelText: "First Name", labelClassNames: "text-left", defaultValue: contestant.contestant_biodata.first_name }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 56,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46(FormControl, { as: "input", id: "last_name", name: "last_name", labelText: "Last Name", labelClassNames: "text-left", defaultValue: contestant.contestant_biodata.last_name }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 57,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46(FormControl, { as: "input", id: "email", name: "email", labelText: "Email Address", labelClassNames: "text-left", defaultValue: contestant.contestant_biodata.email }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 58,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46("label", { htmlFor: "gender", className: "font-bold flex flex-col text-left", children: [
            "Gender",
            /* @__PURE__ */ jsxDEV46(Select, { name: "sex", required: !0, defaultValue: contestant.contestant_biodata.sex, children: [
              /* @__PURE__ */ jsxDEV46(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV46(SelectValue, { placeholder: "Gender" }, void 0, !1, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 62,
                columnNumber: 49
              }, this) }, void 0, !1, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 61,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ jsxDEV46(SelectContent, { children: [
                /* @__PURE__ */ jsxDEV46(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }, void 0, !1, {
                  fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                  lineNumber: 65,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ jsxDEV46(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" }, void 0, !1, {
                  fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                  lineNumber: 66,
                  columnNumber: 49
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 64,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/admin/contest/EditContestantDialog.tsx",
              lineNumber: 60,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 59,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46(FormControl, { as: "input", type: "date", labelText: "Date of Birth", id: "dob", name: "dob", labelClassNames: "text-left", defaultValue: parseDateForInput(contestant.contestant_biodata.dob), max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 70,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46("label", { htmlFor: "gender", className: "font-bold flex flex-col text-left", children: [
            "State of Residence",
            /* @__PURE__ */ jsxDEV46(Select, { name: "state", required: !0, defaultValue: contestant.contestant_biodata.state_of_residence, children: [
              /* @__PURE__ */ jsxDEV46(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV46(SelectValue, { placeholder: "State" }, void 0, !1, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 74,
                columnNumber: 49
              }, this) }, void 0, !1, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 73,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ jsxDEV46(SelectContent, { children: Object.entries(nigerianStates).map(([key, label]) => /* @__PURE__ */ jsxDEV46(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: label }, key, !1, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 78,
                columnNumber: 53
              }, this)) }, void 0, !1, {
                fileName: "app/components/admin/contest/EditContestantDialog.tsx",
                lineNumber: 76,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/admin/contest/EditContestantDialog.tsx",
              lineNumber: 72,
              columnNumber: 41
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 71,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/contest/EditContestantDialog.tsx",
          lineNumber: 44,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV46("fieldset", { className: "py-1 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxDEV46("legend", { className: "text-gray-400 font-medium", children: "Voting" }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 85,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46(FormControl, { as: "input", id: "social_media_url", name: "social_media_url", labelText: "Social Media Link", labelClassNames: "text-left", defaultValue: contestant.social_media_url, disabled: isKotmy }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 86,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46(FormControl, { as: "input", id: "social_media_vote", name: "social_media_vote", labelText: "Social Media Vote", labelClassNames: "text-left", type: "number", min: 0, defaultValue: contestant?.vote.social_media }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 87,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46(FormControl, { as: "input", id: "stage_bonus", name: "stage_bonus", labelText: "Stage Bonus", type: "number", labelClassNames: "text-left", min: 0, defaultValue: contestant.vote.bonus }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 88,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46(FormControl, { as: "input", id: "judge_vote", name: "judge_vote", labelText: "Judge Vote", type: "number", labelClassNames: "text-left", min: 0, defaultValue: contestant.vote.judge }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 89,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/contest/EditContestantDialog.tsx",
          lineNumber: 84,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV46("div", { className: "flex justify-end gap-6", children: [
          /* @__PURE__ */ jsxDEV46("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 93,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV46(
            Cta_default,
            {
              element: "button",
              type: "reset",
              variant: "outline",
              className: "px-3 py-2 rounded-md font-bold min-w-[90px] border-secondary hover:border-slate-400 text-primary",
              children: "Reset"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/contest/EditContestantDialog.tsx",
              lineNumber: 94,
              columnNumber: 37
            },
            this
          ),
          /* @__PURE__ */ jsxDEV46(DialogClose, { type: "submit", name: "intent", value: "edit", className: "bg-accent px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Submit" }, void 0, !1, {
            fileName: "app/components/admin/contest/EditContestantDialog.tsx",
            lineNumber: 96,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/contest/EditContestantDialog.tsx",
          lineNumber: 92,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/EditContestantDialog.tsx",
        lineNumber: 43,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/contest/EditContestantDialog.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/EditContestantDialog.tsx",
      lineNumber: 40,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/contest/EditContestantDialog.tsx",
      lineNumber: 39,
      columnNumber: 19
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/EditContestantDialog.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

// app/components/admin/contest/DeleteContestantDialog.tsx
import { jsxDEV as jsxDEV47 } from "react/jsx-dev-runtime";
function DeleteContestantDialog({ disabled }) {
  return /* @__PURE__ */ jsxDEV47(Dialog, { children: [
    /* @__PURE__ */ jsxDEV47(
      DialogTrigger,
      {
        disabled,
        title: "Delete contestant",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsxDEV47(Svg, { src: icons.trashIcon, className: "w-3" }, void 0, !1, {
          fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
        lineNumber: 18,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV47(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ jsxDEV47(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV47(DialogTitle, { children: "Delete contestant" }, void 0, !1, {
          fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
          lineNumber: 26,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV47(DialogDescription, { children: "This contestant will be deleted from the records. Are you sure you want to proceed?" }, void 0, !1, {
          fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
          lineNumber: 27,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV47(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsxDEV47(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, !1, {
        fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
        lineNumber: 32,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/DeleteContestantDialog.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/components/admin/contest/EvictContestantDialog.tsx
import { useFetcher as useFetcher4 } from "@remix-run/react";
import { jsxDEV as jsxDEV48 } from "react/jsx-dev-runtime";
function EvictContestantDialog({ disabled, contestants }) {
  let fetcher = useFetcher4(), ids = contestants.map((contestant) => contestant._id).join("|");
  return /* @__PURE__ */ jsxDEV48(Dialog, { children: [
    /* @__PURE__ */ jsxDEV48(
      DialogTrigger,
      {
        disabled,
        title: "Evict contestant",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsxDEV48(Svg, { src: icons.downArrowIcon, className: "size-3.5" }, void 0, !1, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 26,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
        lineNumber: 22,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV48(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxDEV48(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV48(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsxDEV48("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV48(Svg, { src: icons.questionIcon }, void 0, !1, {
            fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
            lineNumber: 32,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
            lineNumber: 31,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV48("p", { children: [
            /* @__PURE__ */ jsxDEV48("span", { className: "block", children: "Evict Contestants" }, void 0, !1, {
              fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
              lineNumber: 35,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV48("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the eviction of these contestants" }, void 0, !1, {
              fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
              lineNumber: 36,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
            lineNumber: 34,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 30,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV48(DialogDescription, { className: "border-y p-4", children: /* @__PURE__ */ jsxDEV48("span", { className: "text-primary mb-2 block", children: "The selected contestants will not proceed to the next stage. Are you sure you want to proceed?" }, void 0, !1, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV48(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ jsxDEV48(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsxDEV48("input", { type: "hidden", name: "contestants_ids", value: ids }, void 0, !1, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV48("input", { type: "hidden", name: "stage_id", value: contestants[0]?.stage_id }, void 0, !1, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV48(DialogClose, { type: "submit", name: "intent", value: "evict", className: "bg-red-500 px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, !1, {
          fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/EvictContestantDialog.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/components/admin/contest/AdmitContestantDialog.tsx
import { useFetcher as useFetcher5 } from "@remix-run/react";
import { jsxDEV as jsxDEV49 } from "react/jsx-dev-runtime";
function AdmitContestantDialog({ disabled, contestants }) {
  let fetcher = useFetcher5(), ids = contestants.map((contestant) => contestant._id).join("|");
  return /* @__PURE__ */ jsxDEV49(Dialog, { children: [
    /* @__PURE__ */ jsxDEV49(
      DialogTrigger,
      {
        disabled,
        title: "Admit contestants",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-green-500 bg-green-50 text-green-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsxDEV49(Svg, { src: icons.upArrowIcon, className: "size-3.5" }, void 0, !1, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 26,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
        lineNumber: 22,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV49(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxDEV49(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV49(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsxDEV49("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV49(Svg, { src: icons.questionIcon }, void 0, !1, {
            fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
            lineNumber: 32,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
            lineNumber: 31,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV49("p", { children: [
            /* @__PURE__ */ jsxDEV49("span", { className: "block", children: "Admit Contestants" }, void 0, !1, {
              fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
              lineNumber: 35,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV49("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the promotion of these contestants" }, void 0, !1, {
              fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
              lineNumber: 36,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
            lineNumber: 34,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 30,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV49(DialogDescription, { className: "border-y p-4", children: /* @__PURE__ */ jsxDEV49("span", { className: "text-primary mb-2 block", children: "The selected contestants will be marked for promotion to the next stage." }, void 0, !1, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV49(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ jsxDEV49(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "contestants_ids", value: ids }, void 0, !1, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "stage_id", value: contestants[0]?.stage_id }, void 0, !1, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV49(DialogClose, { type: "submit", name: "intent", value: "admit", className: "bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, !1, {
          fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/AdmitContestantDialog.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/components/admin/contest/ContestantTableActions.tsx
import { jsxDEV as jsxDEV50 } from "react/jsx-dev-runtime";
function ContestantTableActions({ table }) {
  let singleRowSelected = table.getFilteredSelectedRowModel().rows.length === 1, rowsSelected = table.getFilteredSelectedRowModel().rows.length >= 1, contestants = table.getSelectedRowModel().rows.map((row) => row.original), contestant = contestants.at(0) ?? {};
  return /* @__PURE__ */ jsxDEV50("div", { className: "flex gap-4 items-center px-3 mb-3", children: [
    /* @__PURE__ */ jsxDEV50(EditContestantDialog, { disabled: !singleRowSelected, contestant }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTableActions.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV50(DeleteContestantDialog, { disabled: !rowsSelected }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTableActions.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV50(EvictContestantDialog, { disabled: !rowsSelected, contestants }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTableActions.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV50(AdmitContestantDialog, { disabled: !rowsSelected, contestants }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTableActions.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/ContestantTableActions.tsx",
    lineNumber: 14,
    columnNumber: 12
  }, this);
}

// app/components/admin/contest/ContestantTable.tsx
import { Fragment as Fragment7, jsxDEV as jsxDEV51 } from "react/jsx-dev-runtime";
var columns2 = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ jsxDEV51("div", { className: "flex place-content-center", children: /* @__PURE__ */ jsxDEV51(
      Checkbox,
      {
        className: "h-4 w-4",
        checked: table.getIsAllPageRowsSelected(),
        onCheckedChange: (value) => {
          table.toggleAllPageRowsSelected(!value);
        },
        "aria-label": "Select all"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/contest/ContestantTable.tsx",
        lineNumber: 16,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTable.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    cell: ({ row }) => /* @__PURE__ */ jsxDEV51("div", { className: "flex place-content-center", children: /* @__PURE__ */ jsxDEV51(
      Checkbox,
      {
        className: "h-4 w-4",
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!value),
        "aria-label": "Select row"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/contest/ContestantTable.tsx",
        lineNumber: 26,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTable.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    enableSorting: !1,
    enableHiding: !1
  },
  {
    id: "contestant",
    header: ({ column }) => /* @__PURE__ */ jsxDEV51(DataTableColumnHeader, { column, title: "contestant" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTable.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    accessorFn: (row) => `${row.contestant_biodata.first_name} ${row.contestant_biodata.last_name}`
  },
  {
    id: "dob",
    accessorFn: (row) => formatDate(new Date(row.contestant_biodata.dob))
  },
  {
    id: "state",
    accessorFn: (row) => row.contestant_biodata.state_of_residence
  },
  {
    accessorKey: "code",
    header: ({ column }) => /* @__PURE__ */ jsxDEV51(DataTableColumnHeader, { column, title: "code" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTable.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this)
  },
  {
    id: "s-media",
    header: ({ column }) => /* @__PURE__ */ jsxDEV51(DataTableColumnHeader, { column, title: "s-media" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTable.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    accessorFn: (row) => row.vote.social_media
  },
  {
    id: "tally",
    header: ({ column }) => /* @__PURE__ */ jsxDEV51(DataTableColumnHeader, { column, title: "tally" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTable.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    accessorFn: (row) => row.vote.tally
  },
  {
    id: "givaah",
    header: ({ column }) => /* @__PURE__ */ jsxDEV51(DataTableColumnHeader, { column, title: "givaah" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTable.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    accessorFn: (row) => row.vote.givaah
  },
  {
    accessorKey: "grade",
    header: ({ column }) => /* @__PURE__ */ jsxDEV51(DataTableColumnHeader, { column, title: "grade" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTable.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this),
    accessorFn: (row) => row.result.grade || "-"
  },
  {
    accessorKey: "is_evicted",
    header: ({ column }) => /* @__PURE__ */ jsxDEV51(DataTableColumnHeader, { column, title: "status" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestantTable.tsx",
      lineNumber: 88,
      columnNumber: 13
    }, this),
    cell: ({ row }) => {
      let status = row.getValue("is_evicted");
      return /* @__PURE__ */ jsxDEV51(StatusTag, { status: status ? "Evicted" : "Safe", color: status ? "red" : "green" }, void 0, !1, {
        fileName: "app/components/admin/contest/ContestantTable.tsx",
        lineNumber: 93,
        columnNumber: 20
      }, this);
    }
  }
];
function ContestantTable({ data }) {
  return /* @__PURE__ */ jsxDEV51(Fragment7, { children: /* @__PURE__ */ jsxDEV51("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxDEV51(DataTable, { data, columns: columns2, className: "text-sm", TableActions: ContestantTableActions }, void 0, !1, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 102,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 101,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/admin/contest/ContestantTable.tsx",
    lineNumber: 100,
    columnNumber: 9
  }, this);
}

// app/routes/admin.contests.$contestId.$stageId.tsx
import { jsxDEV as jsxDEV52 } from "react/jsx-dev-runtime";
async function loader7({ params, request }) {
  let { contestId, stageId } = params;
  if (!contestId || !stageId)
    throw new Response(null, {
      status: 404,
      statusText: "We're sorry, but the resource was not found."
    });
  let { data: contest, error } = await contestRepo.getContestById(contestId);
  if (error) {
    let { headers } = await setToast({ request, toast: `error::Error fetching the contest::${Date.now()}` });
    return redirect4("/admin/contests", { headers });
  }
  let { fingerprint } = await getFingerprint({ request }), { data: stage } = await contestRepo.getContestantsInStage(stageId, { fingerprint });
  if (!stage) {
    let { headers } = await setToast({ request, toast: `error::Error fetching the contestants::${Date.now()}` });
    return redirect4("/admin/contests", { headers });
  }
  return json10({ contest, stage });
}
async function action5({ params, request }) {
  let { contestId, stageId } = params, formData = await request.formData(), intent = formData.get("intent");
  if (intent === "edit")
    return await editContestant({
      dto: formData,
      contestantId: formData.get("contestant_id")
    }, request);
  if (intent === "admit" || intent === "evict")
    return await toggleEvictContestants(formData, request);
  console.log(...formData);
  let { headers } = await setToast({ request, toast: `error::This action is not yet supported::${Date.now()}` });
  return json10(null, { headers });
}
function StageContestants() {
  let { contest, stage } = useLoaderData7(), navigate = useNavigate();
  return /* @__PURE__ */ jsxDEV52("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV52("div", { className: "flex items-start mb-16 gap-4", children: [
      /* @__PURE__ */ jsxDEV52(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, !1, {
        fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV52("h1", { className: "text-lg xs:text-xl font-black text-primary capitalize", children: [
        contest.name,
        " - Stage ",
        stage.stage,
        " contestants"
      ] }, void 0, !0, {
        fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV52("section", { className: "my-12", children: /* @__PURE__ */ jsxDEV52(ContestantTable, { data: stage.contestants }, void 0, !1, {
      fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.contests.$contestId.$stageId.tsx",
    lineNumber: 54,
    columnNumber: 9
  }, this);
}

// app/routes/admin.transactions.income-history.tsx
var admin_transactions_income_history_exports = {};
__export(admin_transactions_income_history_exports, {
  action: () => action6,
  default: () => IncomeHistory,
  loader: () => loader8
});
import { json as json11 } from "@remix-run/node";
import { useLoaderData as useLoaderData8 } from "@remix-run/react";

// app/components/admin/transactions/IncomeHistoryTable.tsx
import { Fragment as Fragment8, jsxDEV as jsxDEV53 } from "react/jsx-dev-runtime";
var numberFormatterOptions2 = { style: "currency", currency: "NGN" }, columns3 = [
  {
    header: "S/N",
    cell: ({ row }) => +row.id + 1
  },
  {
    accessorKey: "contest",
    header: ({ column }) => /* @__PURE__ */ jsxDEV53(DataTableColumnHeader, { column, title: "contest" }, void 0, !1, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "description",
    header: ({ column }) => /* @__PURE__ */ jsxDEV53(DataTableColumnHeader, { column, title: "description" }, void 0, !1, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "session",
    header: ({ column }) => /* @__PURE__ */ jsxDEV53(DataTableColumnHeader, { column, title: "session" }, void 0, !1, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "paystack",
    header: ({ column }) => /* @__PURE__ */ jsxDEV53(DataTableColumnHeader, { column, title: "paystack" }, void 0, !1, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    cell: ({ getValue }) => numberFormatter(getValue(), numberFormatterOptions2)
  },
  {
    accessorKey: "bank",
    header: ({ column }) => /* @__PURE__ */ jsxDEV53(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "bank" }, void 0, !1, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    cell: ({ getValue }) => numberFormatter(getValue(), numberFormatterOptions2)
  }
];
function IncomeHistoryTable({ data }) {
  return /* @__PURE__ */ jsxDEV53(Fragment8, { children: [
    /* @__PURE__ */ jsxDEV53("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxDEV53(DataTable, { data, columns: columns3, className: "text-xs" }, void 0, !1, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV53("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
      /* @__PURE__ */ jsxDEV53("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ jsxDEV53("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 }, void 0, !1, {
          fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV53(Pagination, {}, void 0, !1, {
        fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/transactions/IncomeHistoryTable.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
}

// app/routes/admin.transactions.income-history.tsx
import { jsxDEV as jsxDEV54 } from "react/jsx-dev-runtime";
async function loader8({}) {
  return json11({ tranasctions: [{
    contest: "kotm01",
    description: "Kid of the Month - Stage 1",
    session: "September 2021",
    paystack: 7574060,
    bank: 592800
  }, {
    contest: "kotm01",
    description: "Kid of the Month - Stage 1",
    session: "September 2021",
    paystack: 7574060,
    bank: 592800
  }, {
    contest: "kotm01",
    description: "Kid of the Month - Stage 1",
    session: "September 2021",
    paystack: 7574060,
    bank: 592800
  }] });
}
async function action6({ request }) {
  let formData = await request.formData();
  console.log(...formData);
  let { headers } = await setToast({ request, toast: `success::The transaction has been created::${Date.now()}` });
  return json11(null, { headers });
}
function IncomeHistory() {
  let { tranasctions } = useLoaderData8();
  return /* @__PURE__ */ jsxDEV54("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV54("section", { className: "flex justify-between items-center mb-8 sm:mb-16", children: /* @__PURE__ */ jsxDEV54("h1", { className: "text-xl xs:text-2xl font-black text-primary", children: "Income History Summary" }, void 0, !1, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV54("section", { className: "my-12", children: /* @__PURE__ */ jsxDEV54(IncomeHistoryTable, { data: tranasctions }, void 0, !1, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.transactions.income-history.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.transactions.income-history.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/admin.contests.$contestId._index.tsx
var admin_contests_contestId_index_exports = {};
__export(admin_contests_contestId_index_exports, {
  action: () => action7,
  default: () => EditContest,
  loader: () => loader9
});
import { json as json12, redirect as redirect5 } from "@remix-run/node";
import { useLoaderData as useLoaderData9, useNavigate as useNavigate2 } from "@remix-run/react";

// app/components/admin/tournament/EditContestForm.tsx
import { Form as Form5 } from "@remix-run/react";

// app/components/reusables/Select.tsx
import { jsxDEV as jsxDEV55 } from "react/jsx-dev-runtime";
function Select2({ children, containerClass, className, label, ...selectProps }) {
  return /* @__PURE__ */ jsxDEV55("label", { className: "font-bold", children: [
    label,
    /* @__PURE__ */ jsxDEV55("div", { className: `border hover:border-primary rounded-lg font-normal overflow-hidden ${containerClass}`, children: /* @__PURE__ */ jsxDEV55("select", { className: `bg-transparent focus:outline-none p-3 mr-2 cursor-pointer w-[98%] ${className}`, ...selectProps, children }, void 0, !1, {
      fileName: "app/components/reusables/Select.tsx",
      lineNumber: 7,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/reusables/Select.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/reusables/Select.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/admin/tournament/CategoryInputs.tsx
import { useState as useState11 } from "react";
import { jsxDEV as jsxDEV56 } from "react/jsx-dev-runtime";
function CategoryInputs({ categories }) {
  let [newCategory, setNewCategory] = useState11(""), [catogories, setCategories] = useState11(categories ?? []);
  function addCategory() {
    !newCategory || catogories.includes(newCategory) || (setCategories((prev) => [...prev, newCategory]), setNewCategory(""));
  }
  function removeCategory(category) {
    setCategories((prev) => prev.filter((cat) => cat !== category));
  }
  return /* @__PURE__ */ jsxDEV56("div", { children: [
    /* @__PURE__ */ jsxDEV56("span", { className: "font-bold", children: "Categories" }, void 0, !1, {
      fileName: "app/components/admin/tournament/CategoryInputs.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV56("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-3 border border-secondary p-3 rounded-lg", children: [
      catogories.map((category) => /* @__PURE__ */ jsxDEV56("div", { className: "p-3 rounded-lg border border-secondary flex items-center", children: [
        /* @__PURE__ */ jsxDEV56("input", { type: "text", className: "grow pointer-events-none bg-transparent", name: "category", defaultValue: category }, void 0, !1, {
          fileName: "app/components/admin/tournament/CategoryInputs.tsx",
          lineNumber: 23,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV56("button", { type: "button", children: /* @__PURE__ */ jsxDEV56(
          Svg,
          {
            src: icons.closeIcon,
            width: ".9em",
            className: "hover:text-red-400",
            onClick: () => removeCategory(category)
          },
          void 0,
          !1,
          {
            fileName: "app/components/admin/tournament/CategoryInputs.tsx",
            lineNumber: 25,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/admin/tournament/CategoryInputs.tsx",
          lineNumber: 24,
          columnNumber: 25
        }, this)
      ] }, category, !0, {
        fileName: "app/components/admin/tournament/CategoryInputs.tsx",
        lineNumber: 22,
        columnNumber: 21
      }, this)),
      /* @__PURE__ */ jsxDEV56("div", { className: "flex max-sm:flex-col gap-3 sm:gap-6 sm:items-end sm:col-span-3", children: [
        /* @__PURE__ */ jsxDEV56(FormControl, { as: "input", placeholder: "Enter new category", id: "new_catogory", value: newCategory, onChange: (e) => setNewCategory(e.target.value) }, void 0, !1, {
          fileName: "app/components/admin/tournament/CategoryInputs.tsx",
          lineNumber: 31,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV56(
          "button",
          {
            type: "button",
            onClick: addCategory,
            className: "flex gap-2 items-center whitespace-nowrap px-8 py-3 rounded-lg border border-secondary hover:border-slate-400",
            children: [
              /* @__PURE__ */ jsxDEV56(Svg, { src: icons.addIcon, width: ".9em" }, void 0, !1, {
                fileName: "app/components/admin/tournament/CategoryInputs.tsx",
                lineNumber: 34,
                columnNumber: 25
              }, this),
              "Add Category"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/tournament/CategoryInputs.tsx",
            lineNumber: 32,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/admin/tournament/CategoryInputs.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/CategoryInputs.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/tournament/CategoryInputs.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/components/admin/tournament/StageInputs.tsx
import { useReducer } from "react";
import { jsxDEV as jsxDEV57 } from "react/jsx-dev-runtime";
function reducer2(stages, action18) {
  return action18.type === "add" ? [...stages, {
    stage: (stages.at(-1)?.stage ?? 0) + 1,
    weight: 0,
    rates: { social_media: { type: "facebook", amount: 0 }, tally: 0, judge: 0, givaah: 0 }
  }] : action18.type === "remove" ? stages.filter((stage) => stage.stage !== action18.stageNumber || stage._id !== action18.value) : action18.type === "edit_sm_type" ? stages.map((stage) => stage.stage === action18.stageNumber ? { ...stage, rates: { ...stage.rates, social_media: { ...stage.rates.social_media, type: action18.value } } } : stage) : action18.type === "edit_stage_number" && !stages.some((stage) => stage.stage === action18.value) ? stages.map((stage) => stage.stage === action18.stageNumber ? { ...stage, stage: action18.value } : stage) : action18.type === "edit_stage_weight" ? stages.map((stage) => stage.stage === action18.stageNumber ? { ...stage, weight: action18.value } : stage) : stages;
}
function StageInputs({ stages }) {
  let [stagesState, dispatch2] = useReducer(reducer2, stages ?? []);
  return /* @__PURE__ */ jsxDEV57("div", { children: [
    /* @__PURE__ */ jsxDEV57("span", { className: "font-bold", children: [
      "Stages ",
      /* @__PURE__ */ jsxDEV57("span", { className: "font-normal", children: "(weights must sum up to 100%)" }, void 0, !1, {
        fileName: "app/components/admin/tournament/StageInputs.tsx",
        lineNumber: 45,
        columnNumber: 48
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/StageInputs.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV57("div", { className: "grid gap-4 border border-secondary p-3 rounded-lg", children: [
      stagesState.map((stage, index) => /* @__PURE__ */ jsxDEV57("div", { className: "flex gap-4 items-end", children: [
        /* @__PURE__ */ jsxDEV57("fieldset", { className: "grow grid gap-3 sm:gap-6 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxDEV57(FormControl, { as: "input", type: "number", labelText: "Stage", id: `Stage_${index + 1}`, value: stage.stage, onChange: (e) => dispatch2({ type: "edit_stage_number", stageNumber: stage.stage, value: +e.target.value }) }, void 0, !1, {
            fileName: "app/components/admin/tournament/StageInputs.tsx",
            lineNumber: 50,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV57(FormControl, { as: "input", type: "number", labelText: "Stage Weight (%)", id: `weight_${index + 1}`, name: `weight_${index + 1}`, value: stage?.weight ?? 0, min: 0, onChange: (e) => dispatch2({ type: "edit_stage_weight", stageNumber: stage.stage, value: +e.target.value }) }, void 0, !1, {
            fileName: "app/components/admin/tournament/StageInputs.tsx",
            lineNumber: 51,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV57(Select2, { label: "Social Media", id: `social_media_${index + 1}`, name: `social_media_${index + 1}`, className: "capitalize", value: stage?.rates?.social_media.type ?? "", onChange: (e) => dispatch2({ type: "edit_sm_type", stageNumber: stage.stage, value: e.target.value }), children: socials.map((social) => /* @__PURE__ */ jsxDEV57("option", { value: social, children: social }, social, !1, {
            fileName: "app/components/admin/tournament/StageInputs.tsx",
            lineNumber: 54,
            columnNumber: 37
          }, this)) }, void 0, !1, {
            fileName: "app/components/admin/tournament/StageInputs.tsx",
            lineNumber: 52,
            columnNumber: 29
          }, this),
          stage._id ? /* @__PURE__ */ jsxDEV57("input", { type: "hidden", name: `stage_${index + 1}_id`, value: stage._id }, void 0, !1, {
            fileName: "app/components/admin/tournament/StageInputs.tsx",
            lineNumber: 57,
            columnNumber: 42
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 49,
          columnNumber: 25
        }, this),
        stage._id ? /* @__PURE__ */ jsxDEV57("button", { type: "submit", className: "m-4", title: "delete stage", name: "intent", value: stage._id, children: /* @__PURE__ */ jsxDEV57(Svg, { src: icons.closeIcon, width: ".9em", className: "hover:text-red-400" }, void 0, !1, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 61,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 60,
          columnNumber: 31
        }, this) : /* @__PURE__ */ jsxDEV57("button", { type: "button", className: "m-4", value: stage._id, onClick: () => dispatch2({ type: "remove", stageNumber: stage.stage }), children: /* @__PURE__ */ jsxDEV57(Svg, { src: icons.closeIcon, width: ".9em", className: "hover:text-red-400" }, void 0, !1, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 64,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 63,
          columnNumber: 31
        }, this)
      ] }, stage.stage, !0, {
        fileName: "app/components/admin/tournament/StageInputs.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this)),
      /* @__PURE__ */ jsxDEV57(
        "button",
        {
          type: "button",
          onClick: () => dispatch2({ type: "add" }),
          className: "flex gap-2 place-self-start items-center whitespace-nowrap px-6 py-2 rounded-lg border border-secondary hover:border-slate-400",
          children: [
            /* @__PURE__ */ jsxDEV57(Svg, { src: icons.addIcon, width: ".9em" }, void 0, !1, {
              fileName: "app/components/admin/tournament/StageInputs.tsx",
              lineNumber: 70,
              columnNumber: 21
            }, this),
            "Add Stage"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/admin/tournament/StageInputs.tsx",
          lineNumber: 68,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/StageInputs.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV57("input", { type: "hidden", name: "no_of_stages", value: stagesState.length }, void 0, !1, {
      fileName: "app/components/admin/tournament/StageInputs.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/tournament/StageInputs.tsx",
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

// app/components/admin/tournament/EditContestForm.tsx
import { useState as useState12 } from "react";
import { jsxDEV as jsxDEV58 } from "react/jsx-dev-runtime";
function EditContestForm({ tournaments, contest }) {
  let [fileList, setFileList] = useState12(null), { filePreview, clearFilePreview, fileName } = useFilePreview(fileList);
  return console.log(contest), /* @__PURE__ */ jsxDEV58(Form5, { className: "max-w-[700px] mx-auto grid gap-6 sm:gap-12 text-sm", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsxDEV58("h1", { className: "text-2xl font-bold text-primary", children: "Contest Details" }, void 0, !1, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV58("div", { className: "flex items-center gap-x-5", children: [
      filePreview ? /* @__PURE__ */ jsxDEV58("img", { className: "w-20 h-20 rounded-lg object-cover", src: filePreview, alt: "chosen image" }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 25,
        columnNumber: 23
      }, this) : /* @__PURE__ */ jsxDEV58("img", { className: "w-20 h-20 rounded-lg object-cover", src: contest.image || no_image_default, alt: "Contest banner" }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 26,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ jsxDEV58("div", { className: "flex flex-col items-start gap-2 max-xs:text-xs", children: [
        /* @__PURE__ */ jsxDEV58("label", { htmlFor: "image", className: "border-2 border-secondary text-primary cursor-pointer font-semibold py-2 px-4 rounded-lg", children: [
          "Change Photo",
          /* @__PURE__ */ jsxDEV58("input", { id: "image", name: "image", type: "file", onChange: (e) => {
            setFileList(e.currentTarget.files);
          }, className: "hidden" }, void 0, !1, {
            fileName: "app/components/admin/tournament/EditContestForm.tsx",
            lineNumber: 31,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/tournament/EditContestForm.tsx",
          lineNumber: 29,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV58("span", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV58("span", { children: fileName || "PNG, JPG (max. 1440x900px)" }, void 0, !1, {
            fileName: "app/components/admin/tournament/EditContestForm.tsx",
            lineNumber: 34,
            columnNumber: 25
          }, this),
          fileName ? /* @__PURE__ */ jsxDEV58(Svg, { src: icons.closeIcon, onClick: clearFilePreview, className: "text-red-600 cursor-pointer" }, void 0, !1, {
            fileName: "app/components/admin/tournament/EditContestForm.tsx",
            lineNumber: 36,
            columnNumber: 31
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/admin/tournament/EditContestForm.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV58("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV58(Select2, { name: "tournament", id: "tournament", label: "Tournament", className: "uppercase", defaultValue: contest.tournament_unique_id, required: !0, children: [
        /* @__PURE__ */ jsxDEV58("option", { value: "", children: "Select a tournament" }, void 0, !1, {
          fileName: "app/components/admin/tournament/EditContestForm.tsx",
          lineNumber: 44,
          columnNumber: 21
        }, this),
        tournaments.map((tournament) => /* @__PURE__ */ jsxDEV58("option", { value: tournament.id, children: tournament.id }, tournament.id, !1, {
          fileName: "app/components/admin/tournament/EditContestForm.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(FormControl, { as: "input", labelText: "Contest Name", placeholder: "Enter contest name", id: "name", name: "name", defaultValue: contest.name, required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(FormControl, { as: "textarea", rows: 3, labelClassNames: "sm:col-span-2", labelText: "Contest Description", placeholder: "Enter contest description", id: "description", name: "description", defaultValue: contest.desc, required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(FormControl, { as: "input", labelText: "Unique Contest ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", defaultValue: contest.id, required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(FormControl, { as: "input", type: "datetime-local", labelText: "Registration Deadline", id: "reg_deadline", name: "reg_deadline", defaultValue: parseDateTimeForInput(contest.reg_deadline), required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(FormControl, { as: "input", type: "datetime-local", labelText: "Contest Start Date", id: "start_date", name: "start_date", defaultValue: parseDateTimeForInput(contest.start_date), required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(FormControl, { as: "input", type: "datetime-local", labelText: "Contest End Date", id: "end_date", name: "end_date", defaultValue: parseDateTimeForInput(contest.end_date), required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(FormControl, { as: "textarea", rows: 2, labelText: "Contest Prizes", labelClassNames: "sm:col-span-2", placeholder: "Enter contest prizes", id: "prizes", name: "prizes", defaultValue: contest.prizes, required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV58(CategoryInputs, { categories: Object.values(contest.categories) }, void 0, !1, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV58(StageInputs, { stages: contest.stages }, contest.stages.length, !1, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV58("fieldset", { className: "grid gap-6", children: [
      /* @__PURE__ */ jsxDEV58("legend", { className: "text-lg mb-4 font-bold", children: "Submission Guidelines" }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(FormControl, { as: "textarea", rows: 4, labelText: "Submission Requirements", placeholder: "Enter text here...", id: "sub_req", name: "sub_req", defaultValue: contest.sub_req, required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(FormControl, { as: "textarea", rows: 4, labelText: "Terms & Conditions", placeholder: "Enter text here...", id: "tnc", name: "tnc", defaultValue: contest.terms_cond, required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(FormControl, { as: "textarea", rows: 4, labelText: "Additional Information", placeholder: "Enter text here...", id: "add_info", name: "add_info", defaultValue: contest.add_info, required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV58("div", { className: "flex max-sm:flex-col justify-end gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxDEV58(Cta_default, { element: "button", type: "reset", onClick: clearFilePreview, className: "px-8 py-2 rounded-lg font-medium border-secondary hover:border-slate-400 text-primary", variant: "outline", children: "Reset Form" }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV58(Cta_default, { element: "button", type: "submit", name: "contestId", value: contest._id, className: "px-8 py-2 rounded-lg font-medium", children: "Edit Contest" }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditContestForm.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/EditContestForm.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/tournament/EditContestForm.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/routes/admin.contests.$contestId._index.tsx
import { jsxDEV as jsxDEV59 } from "react/jsx-dev-runtime";
async function loader9({ params, request }) {
  let { data: tournaments = [] } = await tournamentRepo.getTournaments(), { data: contest, error } = await contestRepo.getContestById(params.contestId);
  if (error) {
    console.log(error);
    let { headers } = await setToast({ request, toast: `error::The contest was not found::${Date.now()}` });
    return redirect5("/admin/contests", { headers });
  }
  return json12({ tournaments, contest });
}
async function action7({ request }) {
  let formData = await request.formData();
  if (formData.get("intent")) {
    let { error: error2 } = await contestRepo.deleteStage({ stageId: formData.get("intent") });
    if (error2) {
      console.log(JSON.stringify(error2));
      let { headers: headers2 } = await setToast({ request, toast: `error::${error2.detail}::${Date.now()}` });
      return json12({ error: error2 }, { headers: headers2 });
    }
    return json12({ data: "deleted" });
  }
  let payload = prepareContestPayload(formData), { data, error } = await contestRepo.updateContest({ contestId: formData.get("contestId"), dto: payload });
  if (data) {
    let { headers: headers2 } = await setToast({ request, toast: `success::The contest has been updated::${Date.now()}` });
    return redirect5("/admin/contests", { headers: headers2 });
  } else if (error) {
    console.log(JSON.stringify(error));
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail}::${Date.now()}` });
    return json12({ error }, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `error::Sorry, this contest no longer exists::${Date.now()}` });
  return redirect5("/admin/contests", { headers });
}
function EditContest() {
  let { tournaments, contest } = useLoaderData9(), navigate = useNavigate2();
  return /* @__PURE__ */ jsxDEV59("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV59("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsxDEV59(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, !1, {
        fileName: "app/routes/admin.contests.$contestId._index.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV59("span", { className: "font-black text-primary", children: "Edit Contest" }, void 0, !1, {
        fileName: "app/routes/admin.contests.$contestId._index.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.contests.$contestId._index.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV59(EditContestForm, { contest, tournaments }, void 0, !1, {
      fileName: "app/routes/admin.contests.$contestId._index.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.contests.$contestId._index.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

// app/routes/admin.transactions.tally-votes.tsx
var admin_transactions_tally_votes_exports = {};
__export(admin_transactions_tally_votes_exports, {
  action: () => action8,
  default: () => TallyVotes,
  loader: () => loader10
});
import { json as json13 } from "@remix-run/node";
import { useLoaderData as useLoaderData10 } from "@remix-run/react";

// app/components/admin/transactions/AddTallyDialog.tsx
import { Form as Form6 } from "@remix-run/react";
import { jsxDEV as jsxDEV60 } from "react/jsx-dev-runtime";
function AddTallyDialog() {
  return /* @__PURE__ */ jsxDEV60(Dialog, { children: [
    /* @__PURE__ */ jsxDEV60(
      DialogTrigger,
      {
        title: "add tally transaction",
        className: cn("flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-accent text-secondary"),
        children: [
          /* @__PURE__ */ jsxDEV60(Svg, { src: icons.addIcon, width: ".9em" }, void 0, !1, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          "Add Payment"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
        lineNumber: 19,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV60(DialogContent, { className: "bg-secondary", children: /* @__PURE__ */ jsxDEV60(DialogHeader, { children: [
      /* @__PURE__ */ jsxDEV60(DialogTitle, { children: "Add Tally Transaction" }, void 0, !1, {
        fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV60(DialogDescription, { children: /* @__PURE__ */ jsxDEV60(Form6, { method: "POST", className: "text-primary text-xs flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxDEV60("fieldset", { className: "py-4 grid sm:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxDEV60(FormControl, { as: "input", id: "sender", name: "sender", labelText: "Sender" }, void 0, !1, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 30,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV60(Select2, { label: "Contest", name: "contest", children: [
            /* @__PURE__ */ jsxDEV60("option", { value: "", children: "Select a contest" }, void 0, !1, {
              fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
              lineNumber: 32,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV60("option", { value: "KOTM01", children: "Kotm01" }, void 0, !1, {
              fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
              lineNumber: 33,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 31,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV60(FormControl, { as: "input", id: "code", name: "code", labelText: "Code" }, void 0, !1, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 35,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV60(FormControl, { as: "input", type: "number", id: "vote", name: "vote", labelText: "Vote", min: 0, defaultValue: 0 }, void 0, !1, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 36,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV60(FormControl, { as: "input", type: "number", id: "amount", name: "amount", labelText: "Amount (NGN)", min: 0, defaultValue: 0 }, void 0, !1, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 37,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV60(FormControl, { as: "input", type: "number", id: "fee", name: "fee", labelText: "Fee (NGN)", min: 0, defaultValue: 0 }, void 0, !1, {
            fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
            lineNumber: 38,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
          lineNumber: 29,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV60("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsxDEV60(Cta_default, { element: "button", type: "submit", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Submit" }, void 0, !1, {
          fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
          lineNumber: 41,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
        lineNumber: 28,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/transactions/AddTallyDialog.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
}

// app/components/admin/transactions/VerifyTransactionDialog.tsx
import { jsxDEV as jsxDEV61 } from "react/jsx-dev-runtime";
function VerifyTransactionDialog({ disabled }) {
  return /* @__PURE__ */ jsxDEV61(Dialog, { children: [
    /* @__PURE__ */ jsxDEV61(
      DialogTrigger,
      {
        disabled,
        title: "Verify transaction",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-green-500 bg-green-50 text-green-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsxDEV61(Svg, { src: icons.checkIcon, className: "w-3" }, void 0, !1, {
          fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ jsxDEV61(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ jsxDEV61(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV61(DialogTitle, { children: "Verify this transaction" }, void 0, !1, {
          fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV61(DialogDescription, { children: "This transaction will be marked as verified. Are you sure you want to proceed?" }, void 0, !1, {
          fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV61(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsxDEV61(Cta_default, { element: "button", type: "submit", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, !1, {
        fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/transactions/VerifyTransactionDialog.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// app/components/admin/transactions/RevokeTransactionDialog.tsx
import { jsxDEV as jsxDEV62 } from "react/jsx-dev-runtime";
function RevokeTransactionDialog({ disabled }) {
  return /* @__PURE__ */ jsxDEV62(Dialog, { children: [
    /* @__PURE__ */ jsxDEV62(
      DialogTrigger,
      {
        disabled,
        title: "Revoke transaction",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsxDEV62(Svg, { src: icons.doubleArrowDiagonalIcon, className: "w-3" }, void 0, !1, {
          fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV62(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ jsxDEV62(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV62(DialogTitle, { children: "Revoke this transaction" }, void 0, !1, {
          fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
          lineNumber: 18,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV62(DialogDescription, { children: "This transactoin will be marked as revoked. Are you sure you want to proceed?" }, void 0, !1, {
          fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV62(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsxDEV62(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, !1, {
        fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/transactions/RevokeTransactionDialog.tsx",
    lineNumber: 9,
    columnNumber: 12
  }, this);
}

// app/components/admin/transactions/DeleteTransactionDialog.tsx
import { jsxDEV as jsxDEV63 } from "react/jsx-dev-runtime";
function DeleteTransactionDialog({ disabled }) {
  return /* @__PURE__ */ jsxDEV63(Dialog, { children: [
    /* @__PURE__ */ jsxDEV63(
      DialogTrigger,
      {
        disabled,
        title: "Delete transaction",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsxDEV63(Svg, { src: icons.trashIcon, className: "w-3" }, void 0, !1, {
          fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV63(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ jsxDEV63(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV63(DialogTitle, { children: "Delete this transaction" }, void 0, !1, {
          fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
          lineNumber: 18,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV63(DialogDescription, { children: "This transactoin will be marked as deleted. Are you sure you want to proceed?" }, void 0, !1, {
          fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV63(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsxDEV63(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, !1, {
        fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/transactions/DeleteTransactionDialog.tsx",
    lineNumber: 9,
    columnNumber: 12
  }, this);
}

// app/components/admin/transactions/TallyTableActions.tsx
import { jsxDEV as jsxDEV64 } from "react/jsx-dev-runtime";
function TallyTableActions({ table }) {
  let rowsSelected = table.getFilteredSelectedRowModel().rows.length >= 1, canVerify = rowsSelected && table.getSelectedRowModel().rows.every(({ original }) => original.status !== "verified"), canRevoke = rowsSelected && table.getSelectedRowModel().rows.every(({ original }) => original.status !== "revoked");
  return /* @__PURE__ */ jsxDEV64("div", { className: "flex gap-4 items-center px-3 mb-3", children: [
    /* @__PURE__ */ jsxDEV64(VerifyTransactionDialog, { disabled: !canVerify }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTableActions.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV64(RevokeTransactionDialog, { disabled: !canRevoke }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTableActions.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV64(DeleteTransactionDialog, { disabled: !rowsSelected }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTableActions.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/transactions/TallyTableActions.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this);
}

// app/components/admin/transactions/TallyTransactionsTable.tsx
import { Fragment as Fragment9, jsxDEV as jsxDEV65 } from "react/jsx-dev-runtime";
var numberFormatterOptions3 = { style: "currency", currency: "NGN" }, dateOptions2 = {
  year: "numeric",
  month: "short",
  day: "numeric"
}, timeOptions2 = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}, columns4 = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ jsxDEV65("div", { className: "flex place-content-center", children: /* @__PURE__ */ jsxDEV65(
      Checkbox,
      {
        className: "h-4 w-4",
        "aria-label": "Select all",
        checked: table.getIsAllPageRowsSelected(),
        onCheckedChange: (value) => {
          table.toggleAllPageRowsSelected(!value);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
        lineNumber: 28,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 27,
      columnNumber: 33
    }, this),
    cell: ({ row }) => /* @__PURE__ */ jsxDEV65("div", { className: "flex place-content-center", children: /* @__PURE__ */ jsxDEV65(
      Checkbox,
      {
        className: "h-4 w-4",
        "aria-label": "Select row",
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!value)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
        lineNumber: 34,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 33,
      columnNumber: 29
    }, this)
  },
  {
    accessorKey: "tx_ref",
    header: ({ column }) => /* @__PURE__ */ jsxDEV65(DataTableColumnHeader, { column, title: "trx ref" }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "sender",
    header: ({ column }) => /* @__PURE__ */ jsxDEV65(DataTableColumnHeader, { column, title: "sender" }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "code",
    header: ({ column }) => /* @__PURE__ */ jsxDEV65(DataTableColumnHeader, { column, title: "code" }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "votes",
    header: ({ column }) => /* @__PURE__ */ jsxDEV65(DataTableColumnHeader, { column, title: "votes" }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "amount",
    header: ({ column }) => /* @__PURE__ */ jsxDEV65(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "amount" }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    cell: ({ getValue }) => numberFormatter(getValue(), numberFormatterOptions3)
  },
  {
    accessorKey: "fee",
    header: ({ column }) => /* @__PURE__ */ jsxDEV65(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "fee" }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    cell: ({ getValue }) => numberFormatter(getValue(), numberFormatterOptions3)
  },
  {
    accessorKey: "date",
    header: ({ column }) => /* @__PURE__ */ jsxDEV65(DataTableColumnHeader, { column, title: "date" }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    cell: ({ getValue }) => /* @__PURE__ */ jsxDEV65("span", { children: [
      /* @__PURE__ */ jsxDEV65("span", { className: "block", children: formatDate(new Date(getValue()), dateOptions2) }, void 0, !1, {
        fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV65("span", { className: "block", children: formatDate(new Date(getValue()), timeOptions2) }, void 0, !1, {
        fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "status",
    header: ({ column }) => /* @__PURE__ */ jsxDEV65(DataTableColumnHeader, { column, title: "status" }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 86,
      columnNumber: 13
    }, this),
    cell: ({ getValue }) => {
      let status = getValue();
      return /* @__PURE__ */ jsxDEV65(StatusTag, { status, color: status === "pending" ? "yellow" : status === "verified" ? "green" : status === "revoked" ? "red" : "gray" }, void 0, !1, {
        fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
        lineNumber: 94,
        columnNumber: 20
      }, this);
    }
  }
];
function TallyTransactionsTable({ data }) {
  return /* @__PURE__ */ jsxDEV65(Fragment9, { children: [
    /* @__PURE__ */ jsxDEV65("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxDEV65(DataTable, { data, columns: columns4, className: "text-xs", TableActions: TallyTableActions }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 103,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 102,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV65("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
      /* @__PURE__ */ jsxDEV65("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ jsxDEV65("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 }, void 0, !1, {
          fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
          lineNumber: 107,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV65(Pagination, {}, void 0, !1, {
        fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
      lineNumber: 105,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/transactions/TallyTransactionsTable.tsx",
    lineNumber: 101,
    columnNumber: 9
  }, this);
}

// app/routes/admin.transactions.tally-votes.tsx
import { jsxDEV as jsxDEV66 } from "react/jsx-dev-runtime";
async function loader10({}) {
  let tranasctions = [{
    tx_ref: "KCRUSHIP4HIYGM72VL",
    sender: "payments@nefworld.com",
    code: "CD203005",
    votes: 530,
    amount: 53e3,
    fee: 0,
    date: (/* @__PURE__ */ new Date()).toISOString(),
    status: "verified"
  }, {
    tx_ref: "KCRUSHIP4HIYGM72VL",
    sender: "payments@nefworld.com",
    code: "CD203024",
    votes: 10,
    amount: 1e3,
    fee: 0,
    date: (/* @__PURE__ */ new Date()).toISOString(),
    status: "pending"
  }, {
    tx_ref: "KCRUSHIP4HIYGM72VL",
    sender: "payments@nefworld.com",
    code: "CD203010",
    votes: 20,
    amount: 2e3,
    fee: 0,
    date: (/* @__PURE__ */ new Date()).toISOString(),
    status: "revoked"
  }];
  return json13({ tranasctions });
}
async function action8({ request }) {
  let formData = await request.formData();
  console.log(...formData);
  let { headers } = await setToast({ request, toast: `success::The transaction has been created::${Date.now()}` });
  return json13(null, { headers });
}
function TallyVotes() {
  let { tranasctions } = useLoaderData10();
  return /* @__PURE__ */ jsxDEV66("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV66("section", { className: "flex max-sm:flex-col gap-10 justify-between sm:items-center mb-6 sm:mb-16", children: [
      /* @__PURE__ */ jsxDEV66("h1", { className: "text-2xl font-black text-primary", children: "Tally Votes" }, void 0, !1, {
        fileName: "app/routes/admin.transactions.tally-votes.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV66(AddTallyDialog, {}, void 0, !1, {
        fileName: "app/routes/admin.transactions.tally-votes.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV66("section", { className: "my-12", children: /* @__PURE__ */ jsxDEV66(TallyTransactionsTable, { data: tranasctions }, void 0, !1, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.transactions.tally-votes.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.transactions.tally-votes.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this);
}

// app/routes/user.contestant.$contestantId.tsx
var user_contestant_contestantId_exports = {};
__export(user_contestant_contestantId_exports, {
  action: () => action9,
  default: () => RegistrationForm2,
  loader: () => loader11,
  useRegistrationFormController: () => useRegistrationFormController
});
import { json as json14, redirect as redirect7 } from "@remix-run/node";
import { Form as Form7, useActionData as useActionData2, useLoaderData as useLoaderData11 } from "@remix-run/react";
import { useEffect as useEffect9, useState as useState13 } from "react";

// app/services/user/userserver.ts
var UserServer = class {
  contestantServer;
  constructor(_contestServer) {
    this.contestantServer = _contestServer;
  }
  async getPendingUploads(cookies) {
    return await this.contestantServer.getPendingUploads(cookies);
  }
  async getContestantDetails(contestantId, cookies) {
    return await this.contestantServer.getContestantDetailsWithContest(contestantId, cookies);
  }
  async updateUserContestant(payload, cookies) {
    let { error, authRequired, data } = await contestantRepo.updateUserContestant(payload, cookies);
    return { error, authRequired, data };
  }
}, userServer = new UserServer(contestantRepo);

// app/routes/user.contestant.$contestantId.tsx
import { jsxDEV as jsxDEV67 } from "react/jsx-dev-runtime";
async function loader11({ request, params }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  console.log({ cookieHeader }), cookieHeader || redirect7("/login");
  let contestantId = params.contestantId ?? "", { error, data, authRequired } = await userServer.getContestantDetails(contestantId, cookieHeader);
  return authRequired && redirect7("/login"), { error, data, authRequired };
}
async function action9({ request }) {
  let formData = await request.formData(), cookieHeader = request.headers.get("Cookie") ?? "", editContestantDTO = {
    biodata: {
      first_name: formData.get("first_name")?.toString(),
      last_name: formData.get("first_name")?.toString(),
      dob: formData.get("dob")?.toString(),
      sex: formData.get("sex")?.toString(),
      email: formData.get("email")?.toString(),
      state_of_residence: formData.get("state_of_residence")?.toString(),
      whatsapp_no: formData.get("state_of_residence")?.toString()
    }
  }, contestantId = formData.get("contestantId")?.toString() ?? "", { error, authRequired, data } = await userServer.updateUserContestant({ contestantId, formData, editContestantDTO }, cookieHeader);
  return authRequired && redirect7("/login"), json14({ error, authRequired, data });
}
function useRegistrationFormController() {
  let { error, data } = useLoaderData11(), actionData = useActionData2();
  console.log({ data });
  let [contest, setContest] = useState13(), [stage, setStage] = useState13(), [contestant, setContestant] = useState13();
  return error && toast({
    variant: "destructive",
    title: "An error occured",
    description: error?.detail.toString() ?? "Error occured"
  }), useEffect9(() => {
    actionData && (actionData.error ? (console.error(actionData.error.detail), toast({
      variant: "destructive",
      title: "Update Failed",
      description: actionData.error?.detail?.toString() ?? "An error occurred while updating your details."
    })) : actionData.data && toast({
      variant: "default",
      // Assuming you have a 'success' variant for your toast
      title: "Update Successful!",
      description: "Your contestant details have been updated."
    }));
  }, [actionData]), useEffect9(() => {
    if (data) {
      setContest(data);
      let _stage = data.stages?.[0];
      setStage(_stage), setContestant(_stage.contestants?.[0]);
    } else
      toast({
        variant: "destructive",
        title: "An error occured",
        description: error?.detail.toString() ?? "Error occured"
      });
  }, []), console.log({ contest }), { contest, error, stage, contestant, actionData };
}
function RegistrationForm2() {
  let { contest, stage, contestant, actionData } = useRegistrationFormController();
  return contest ? /* @__PURE__ */ jsxDEV67("section", { children: [
    /* @__PURE__ */ jsxDEV67("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: /* @__PURE__ */ jsxDEV67("div", { className: "flex flex-col justify-around", children: /* @__PURE__ */ jsxDEV67("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxDEV67("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3", children: contest.name }, void 0, !1, {
        fileName: "app/routes/user.contestant.$contestantId.tsx",
        lineNumber: 130,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV67("p", { className: "font-satoshi-medium", children: contest.desc }, void 0, !1, {
        fileName: "app/routes/user.contestant.$contestantId.tsx",
        lineNumber: 131,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/user.contestant.$contestantId.tsx",
      lineNumber: 129,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/user.contestant.$contestantId.tsx",
      lineNumber: 128,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/user.contestant.$contestantId.tsx",
      lineNumber: 127,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV67("section", { className: "sm:wrapper my-16", children: /* @__PURE__ */ jsxDEV67("div", { className: "flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8", children: [
      /* @__PURE__ */ jsxDEV67(ContestGuidelines, { contest }, void 0, !1, {
        fileName: "app/routes/user.contestant.$contestantId.tsx",
        lineNumber: 139,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV67(Form7, { method: "POST", encType: "multipart/form-data", className: "bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6", children: [
        /* @__PURE__ */ jsxDEV67("p", { className: "text-2xl font-satoshi-bold", children: [
          "Welcome, ",
          contestant?.contestant_biodata.first_name,
          ". You can manage your profile for ",
          contest.name,
          " here"
        ] }, void 0, !0, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 141,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV67("img", { src: contestant?.image_url || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" }, void 0, !1, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 144,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV67("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxDEV67(
            FormControl,
            {
              as: "input",
              labelText: "First Name",
              id: "first_name",
              name: "first_name",
              defaultValue: contestant?.contestant_biodata?.first_name,
              placeholder: "Enter your first name",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 146,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ jsxDEV67(
            FormControl,
            {
              as: "input",
              labelText: "Last Name",
              id: "last_name",
              name: "last_name",
              defaultValue: contestant?.contestant_biodata?.last_name,
              placeholder: "Enter your last name",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 149,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 145,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV67("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxDEV67(
            FormControl,
            {
              as: "input",
              labelText: "Email Address",
              id: "email",
              name: "email",
              defaultValue: contestant?.contestant_biodata?.email,
              placeholder: "Enter your email address",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 154,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ jsxDEV67(
            FormControl,
            {
              as: "input",
              type: "date",
              labelText: "Date of Birth",
              id: "dob",
              name: "dob",
              defaultValue: contestant?.contestant_biodata?.dob,
              placeholder: "dd/mm/yyyy",
              max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 157,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 153,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV67("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxDEV67("label", { htmlFor: "gender", className: "font-bold flex flex-col", children: [
            "Gender",
            /* @__PURE__ */ jsxDEV67(Select, { name: "sex", required: !0, defaultValue: contestant?.contestant_biodata?.sex, children: [
              /* @__PURE__ */ jsxDEV67(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV67(SelectValue, { placeholder: "Gender" }, void 0, !1, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 165,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 164,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV67(SelectContent, { children: [
                /* @__PURE__ */ jsxDEV67(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }, void 0, !1, {
                  fileName: "app/routes/user.contestant.$contestantId.tsx",
                  lineNumber: 168,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ jsxDEV67(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" }, void 0, !1, {
                  fileName: "app/routes/user.contestant.$contestantId.tsx",
                  lineNumber: 169,
                  columnNumber: 41
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 167,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 163,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 162,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV67("label", { htmlFor: "state_of_residence", className: "font-bold flex flex-col", children: [
            "State of Residence",
            /* @__PURE__ */ jsxDEV67(Select, { name: "state_of_residence", required: !0, defaultValue: contestant?.contestant_biodata?.state_of_residence, children: [
              /* @__PURE__ */ jsxDEV67(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV67(SelectValue, { placeholder: "Select a state" }, void 0, !1, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 176,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 175,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV67(SelectContent, { children: Object.entries(nigerianStates).map(([key, val]) => /* @__PURE__ */ jsxDEV67(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: val }, key, !1, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 180,
                columnNumber: 45
              }, this)) }, void 0, !1, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 178,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 174,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 173,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 161,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV67("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxDEV67(
            FormControl,
            {
              as: "input",
              type: "tel",
              labelText: "Whatsapp Number",
              id: "whatsapp_no",
              name: "whatsapp_no",
              placeholder: "Enter your whatsapp number",
              required: !0,
              defaultValue: contestant?.contestant_biodata?.whatsapp_no
            },
            void 0,
            !1,
            {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 187,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ jsxDEV67("label", { htmlFor: "category", className: "font-bold flex flex-col", children: [
            "Category",
            /* @__PURE__ */ jsxDEV67(Select, { name: "category", required: !!contest.categories.length, defaultValue: contestant?.category, children: [
              /* @__PURE__ */ jsxDEV67(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsxDEV67(SelectValue, { placeholder: "Select a category" }, void 0, !1, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 194,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 193,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV67(SelectContent, { children: contest.categories.map((category) => /* @__PURE__ */ jsxDEV67(SelectItem, { value: category, className: "focus:bg-blue-700/25", children: category }, category, !1, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 198,
                columnNumber: 45
              }, this)) }, void 0, !1, {
                fileName: "app/routes/user.contestant.$contestantId.tsx",
                lineNumber: 196,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/user.contestant.$contestantId.tsx",
              lineNumber: 192,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/user.contestant.$contestantId.tsx",
            lineNumber: 191,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 186,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV67(DragnDrop, { labelText: "Upload Image", name: "media", multiple: !0, required: !1 }, void 0, !1, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 204,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV67("input", { type: "hidden", name: "contestId", value: contest._id }, void 0, !1, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 205,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV67("input", { type: "hidden", name: "contestantId", value: contestant?._id }, void 0, !1, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 206,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV67(Button, { element: "button", type: "submit", name: "intent", value: "register", className: "md:self-end", children: "Update contestant details" }, void 0, !1, {
          fileName: "app/routes/user.contestant.$contestantId.tsx",
          lineNumber: 207,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/user.contestant.$contestantId.tsx",
        lineNumber: 140,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/user.contestant.$contestantId.tsx",
      lineNumber: 138,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/user.contestant.$contestantId.tsx",
      lineNumber: 137,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user.contestant.$contestantId.tsx",
    lineNumber: 126,
    columnNumber: 9
  }, this) : /* @__PURE__ */ jsxDEV67("div", { children: " Not found" }, void 0, !1, {
    fileName: "app/routes/user.contestant.$contestantId.tsx",
    lineNumber: 213,
    columnNumber: 13
  }, this);
}

// app/routes/admin.tournaments.$ID._index.tsx
var admin_tournaments_ID_index_exports = {};
__export(admin_tournaments_ID_index_exports, {
  default: () => Tournament,
  loader: () => loader12
});
import { json as json15, redirect as redirect8 } from "@remix-run/node";
import { Link as Link8, useLoaderData as useLoaderData12, useNavigate as useNavigate3 } from "@remix-run/react";

// app/components/admin/contest/ContestTableActions.tsx
import { useFetcher as useFetcher8 } from "@remix-run/react";

// app/components/admin/contest/DeleteContestDialog.tsx
import { useFetcher as useFetcher6 } from "@remix-run/react";
import { jsxDEV as jsxDEV68 } from "react/jsx-dev-runtime";
function DeleteContestDialog({ contest, disabled }) {
  let fetcher = useFetcher6();
  return /* @__PURE__ */ jsxDEV68(Dialog, { children: [
    /* @__PURE__ */ jsxDEV68(
      DialogTrigger,
      {
        disabled,
        title: "Delete contest",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsxDEV68(Svg, { src: icons.trashIcon, className: "w-3" }, void 0, !1, {
          fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
          lineNumber: 16,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
        lineNumber: 12,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV68(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxDEV68(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV68(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsxDEV68("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV68(Svg, { src: icons.questionIcon }, void 0, !1, {
            fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
            lineNumber: 22,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
            lineNumber: 21,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV68("p", { children: [
            /* @__PURE__ */ jsxDEV68("span", { className: "block", children: "Delete contest" }, void 0, !1, {
              fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
              lineNumber: 25,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV68("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the deletion of this contest" }, void 0, !1, {
              fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
              lineNumber: 26,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
            lineNumber: 24,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV68(DialogDescription, { className: "border-y p-4", children: [
          /* @__PURE__ */ jsxDEV68("span", { className: "text-primary mb-2 block", children: [
            "Are you sure you want to delete ",
            contest.name,
            " contest?"
          ] }, void 0, !0, {
            fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
            lineNumber: 30,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV68("span", { className: "text-admin-pry", children: "This action is irreversible and will permanently delete this contest." }, void 0, !1, {
            fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
            lineNumber: 31,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
          lineNumber: 29,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV68(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ jsxDEV68(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsxDEV68("input", { type: "hidden", name: "contestId", value: contest._id }, void 0, !1, {
          fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
          lineNumber: 36,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV68(DialogClose, { type: "submit", name: "intent", value: "delete", className: "bg-red-500 px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, !1, {
          fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
          lineNumber: 37,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/DeleteContestDialog.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/components/admin/contest/MigrateStageDialog.tsx
import { useFetcher as useFetcher7 } from "@remix-run/react";
import { jsxDEV as jsxDEV69 } from "react/jsx-dev-runtime";
function MigrateStageDialog({ contest, disabled }) {
  let fetcher = useFetcher7(), stages = contest.stages.toSorted((a, b) => a.stage - b.stage).reduce((res, stage, idx, arr) => (stage.active && !res[0] && (res[0] = stage, res[1] = arr.at(idx + 1) ?? null), res), [null, null]), activeStageIdx = contest.stages.findIndex((v) => v.active), activeStageNotTheLastStage = activeStageIdx !== -1 && activeStageIdx < contest.stages.length - 1, cannotMigrate = disabled || !stages.at(0) || !stages.at(1) || !activeStageNotTheLastStage;
  return /* @__PURE__ */ jsxDEV69(Dialog, { children: [
    /* @__PURE__ */ jsxDEV69(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV69(RoundCta_default, { disabled: cannotMigrate, icon: icons.doubleArrowRightIcon, className: "border-indigo-700 bg-indigo-100 text-indigo-700", title: "Migrate stage" }, void 0, !1, {
      fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV69(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxDEV69(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV69(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsxDEV69("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV69(Svg, { src: icons.questionIcon }, void 0, !1, {
            fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
            lineNumber: 35,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
            lineNumber: 34,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV69("p", { children: [
            /* @__PURE__ */ jsxDEV69("span", { className: "block", children: "Migrate stage" }, void 0, !1, {
              fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
              lineNumber: 38,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV69("span", { className: "font-normal text-base text-admin-pry", children: "Confirm migration to the next stage" }, void 0, !1, {
              fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
              lineNumber: 39,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
            lineNumber: 37,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV69(DialogDescription, { className: "border-y p-4", children: /* @__PURE__ */ jsxDEV69("span", { className: "text-primary block", children: [
          "This will migrate all safe contestants from stage ",
          stages[0]?.stage,
          " to stage ",
          stages[1]?.stage,
          ". Proceed?"
        ] }, void 0, !0, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 43,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV69(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ jsxDEV69(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsxDEV69("input", { type: "hidden", name: "from", value: stages[0]?._id }, void 0, !1, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 50,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV69("input", { type: "hidden", name: "to", value: stages[1]?._id }, void 0, !1, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV69(DialogClose, { type: "submit", name: "intent", value: "migrate", className: "bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, !1, {
          fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
          lineNumber: 52,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
        lineNumber: 49,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/MigrateStageDialog.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

// app/components/admin/contest/ContestTableActions.tsx
import { jsxDEV as jsxDEV70 } from "react/jsx-dev-runtime";
function ContestTableActions({ rowData }) {
  let activeStageId = rowData.stages.find((stage) => stage.active || stage.status === "ongoing")?._id ?? rowData.stages.toSorted((prev, next) => next.stage - prev.stage).find((stage) => stage.status === "completed")?._id ?? rowData.stages.toSorted((prev, next) => prev.stage - next.stage).at(0)?._id, linkToContestants = activeStageId ? `/admin/contests/${rowData.id}/${activeStageId}` : "", fetcher = useFetcher8();
  return /* @__PURE__ */ jsxDEV70("div", { className: "flex gap-4 items-center", children: [
    /* @__PURE__ */ jsxDEV70(RoundCta_default, { icon: icons.contestantsIcon, element: "link", to: linkToContestants, "aria-disabled": !linkToContestants, className: "border-green-500 bg-green-50 text-green-500", title: "View current stage" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTableActions.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV70(RoundCta_default, { icon: icons.editIcon, element: "link", to: `/admin/contests/${rowData.id}`, className: "border-[#262626] bg-[#F7F7F8] text-primary", title: "Edit contest" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTableActions.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV70(fetcher.Form, { method: "post", children: [
      /* @__PURE__ */ jsxDEV70("input", { type: "hidden", name: "contestId", value: rowData._id }, void 0, !1, {
        fileName: "app/components/admin/contest/ContestTableActions.tsx",
        lineNumber: 20,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV70(RoundCta_default, { icon: icons.viewIcon, name: "intent", value: "toggle_registration", className: "border-yellow-700 bg-yellow-100 text-yellow-700", "aria-disabled": fetcher.state != "idle", title: "Open/Close registration" }, void 0, !1, {
        fileName: "app/components/admin/contest/ContestTableActions.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/ContestTableActions.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV70(MigrateStageDialog, { contest: rowData }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTableActions.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV70(DeleteContestDialog, { contest: rowData }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTableActions.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/ContestTableActions.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/components/admin/contest/EditStageForm.tsx
import { useState as useState14 } from "react";
import { Form as Form8, Link as Link7 } from "@remix-run/react";
import cn7 from "classnames";

// app/components/admin/contest/GradeInputs.tsx
import cn6 from "classnames";
import { jsxDEV as jsxDEV71 } from "react/jsx-dev-runtime";
function GradeInputs({ grade }) {
  let [grd, [min, max]] = grade;
  return /* @__PURE__ */ jsxDEV71("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsxDEV71("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxDEV71("span", { className: "block font-bold", children: "Grade" }, void 0, !1, {
        fileName: "app/components/admin/contest/GradeInputs.tsx",
        lineNumber: 10,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV71("span", { className: cn6(`h-full w-[40px] px-2 py-1 flex items-center justify-center bg-grade-${grd} rounded-md text-white font-black`), children: grd }, void 0, !1, {
        fileName: "app/components/admin/contest/GradeInputs.tsx",
        lineNumber: 11,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/GradeInputs.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV71(FormControl, { as: "input", id: `min_${grd}`, name: `min_${grd}`, labelText: "Min. Score", type: "number", min: 0, defaultValue: min }, void 0, !1, {
      fileName: "app/components/admin/contest/GradeInputs.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV71(FormControl, { as: "input", id: `max_${grd}`, name: `max_${grd}`, labelText: "Max. Score", type: "number", min: 0, defaultValue: max }, void 0, !1, {
      fileName: "app/components/admin/contest/GradeInputs.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/GradeInputs.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/components/admin/contest/EditStageForm.tsx
import { jsxDEV as jsxDEV72 } from "react/jsx-dev-runtime";
function Stages({ row }) {
  let [selectedStage, setSelectedStage] = useState14(row.original.stages[0] ?? null);
  return /* @__PURE__ */ jsxDEV72("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxDEV72("div", { className: "p-3 flex gap-2 border border-disabled bg-[#F6F8FA] rounded-md", children: row.original.stages.length ? row.original.stages.map((stage) => /* @__PURE__ */ jsxDEV72(
      Cta_default,
      {
        element: "button",
        variant: "outline",
        onClick: () => setSelectedStage(stage),
        className: cn7("px-5 py-1 text-xs text-admin-pry rounded-md", {
          "border-secondary bg-white": selectedStage?.stage === stage.stage,
          "border-transparent": selectedStage?.stage !== stage.stage
        }),
        children: [
          "Stage ",
          stage.stage
        ]
      },
      stage._id,
      !0,
      {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 19,
        columnNumber: 13
      },
      this
    )) : /* @__PURE__ */ jsxDEV72("span", { children: "There are no stages." }, void 0, !1, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    selectedStage ? /* @__PURE__ */ jsxDEV72(EditStageForm, { stage: selectedStage, contestId: row.original.id, closeForm: row.getToggleExpandedHandler() }, selectedStage._id, !1, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/EditStageForm.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
function EditStageForm({ stage, contestId, closeForm }) {
  return /* @__PURE__ */ jsxDEV72(Form8, { method: "POST", className: "text-primary text-xs flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxDEV72("fieldset", { className: "py-4 grid grid-cols-4 gap-3 border-b", children: [
      /* @__PURE__ */ jsxDEV72(FormControl, { as: "input", id: "start_date", name: "start_date", labelText: "Stage Start Date", type: "datetime-local", defaultValue: parseDateTimeForInput(stage.start_date) }, void 0, !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV72(FormControl, { as: "input", id: "end_date", name: "end_date", labelText: "Stage End Date", type: "datetime-local", defaultValue: parseDateTimeForInput(stage.end_date) }, void 0, !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV72(FormControl, { as: "input", id: "weight", name: "weight", labelText: "Stage Weight (%)", type: "number", min: 0, defaultValue: stage.weight }, void 0, !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV72(FormControl, { as: "input", id: "success_count", name: "success_count", labelText: "Success Count", type: "number", min: 0, defaultValue: stage.success_count }, void 0, !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV72("fieldset", { className: "pt-2 pb-4 grid grid-cols-4 gap-3 border-b", children: [
      /* @__PURE__ */ jsxDEV72("legend", { className: "font-bold text-sm text-admin-pry w-max", children: [
        "Stage Rates ",
        /* @__PURE__ */ jsxDEV72("span", { className: "font-normal", children: "(must sum up to 100%)" }, void 0, !1, {
          fileName: "app/components/admin/contest/EditStageForm.tsx",
          lineNumber: 48,
          columnNumber: 80
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV72(FormControl, { as: "input", id: "social_media_rate", name: "social_media_rate", labelText: "Social Media Rate (%)", type: "number", min: 0, defaultValue: stage.rates.social_media.amount }, void 0, !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV72(FormControl, { as: "input", id: "tally_rate", name: "tally_rate", labelText: "Tally Rate (%)", type: "number", min: 0, defaultValue: stage.rates.tally }, void 0, !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV72(FormControl, { as: "input", id: "givaah_rate", name: "givaah_rate", labelText: "Givaah Rate (%)", type: "number", min: 0, defaultValue: stage.rates.givaah }, void 0, !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV72(FormControl, { as: "input", id: "judge_rate", name: "judge_rate", labelText: "Judge Rate (%)", type: "number", min: 0, defaultValue: stage.rates.judge }, void 0, !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV72("fieldset", { className: "pt-2 py-4 grid grid-cols-2 gap-3 border-b", children: [
      /* @__PURE__ */ jsxDEV72("legend", { className: "font-bold text-sm text-admin-pry", children: "Grades" }, void 0, !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      Object.entries(stage.grade).map((grade) => /* @__PURE__ */ jsxDEV72(GradeInputs, { grade }, grade[0], !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this))
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV72("div", { className: "flex justify-between items-center gap-6", children: [
      /* @__PURE__ */ jsxDEV72(Link7, { to: `${contestId}/${stage._id}`, className: "text-accent hover:text-accent/80 font-semibold", children: "View contestants" }, void 0, !1, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV72("div", { className: "flex justify-end gap-6", children: [
        /* @__PURE__ */ jsxDEV72(
          Cta_default,
          {
            element: "button",
            type: "button",
            variant: "outline",
            onClick: closeForm,
            className: "px-3 py-2 rounded-md font-bold min-w-[90px] border-secondary hover:border-slate-400 text-primary",
            children: "Close Form"
          },
          void 0,
          !1,
          {
            fileName: "app/components/admin/contest/EditStageForm.tsx",
            lineNumber: 64,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV72(Cta_default, { element: "button", type: "submit", name: "intent", value: "update_stage", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Submit" }, void 0, !1, {
          fileName: "app/components/admin/contest/EditStageForm.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/EditStageForm.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV72("input", { type: "hidden", name: "social_media_type", value: stage.rates.social_media.type }, void 0, !1, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV72("input", { type: "hidden", name: "stageId", value: stage._id }, void 0, !1, {
      fileName: "app/components/admin/contest/EditStageForm.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/EditStageForm.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/components/admin/contest/ContestTable.tsx
import { Fragment as Fragment10, jsxDEV as jsxDEV73 } from "react/jsx-dev-runtime";
var columns5 = [
  {
    id: "expander",
    header: () => null,
    cell: ({ row }) => row.getCanExpand() ? /* @__PURE__ */ jsxDEV73("button", { title: "expand row", onClick: row.getToggleExpandedHandler(), children: /* @__PURE__ */ jsxDEV73(Svg, { src: icons.arrowDownIcon, className: row.getIsExpanded() ? "rotate-180" : "" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 17,
      columnNumber: 15
    }, this) : null
  },
  {
    accessorKey: "id",
    header: ({ column }) => /* @__PURE__ */ jsxDEV73(DataTableColumnHeader, { column, title: "id" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    cell: ({ row }) => /* @__PURE__ */ jsxDEV73("span", { className: "uppercase", children: row.getValue("id") }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 28,
      columnNumber: 29
    }, this)
  },
  {
    accessorKey: "name",
    header: ({ column }) => /* @__PURE__ */ jsxDEV73(DataTableColumnHeader, { column, title: "contest" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    cell: ({ row }) => /* @__PURE__ */ jsxDEV73("span", { className: "uppercase line-clamp-1", children: row.getValue("name") }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 34,
      columnNumber: 29
    }, this)
  },
  {
    accessorKey: "timeline",
    header: ({ column }) => /* @__PURE__ */ jsxDEV73(DataTableColumnHeader, { column, title: "timeline" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    cell: ({ row }) => /* @__PURE__ */ jsxDEV73("p", { children: [
      /* @__PURE__ */ jsxDEV73("span", { className: "block whitespace-nowrap", children: row.original.start_date.split(".")[0].replace("T", ", ") }, void 0, !1, {
        fileName: "app/components/admin/contest/ContestTable.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV73("span", { className: "block whitespace-nowrap", children: row.original.end_date.split(".")[0].replace("T", ", ") }, void 0, !1, {
        fileName: "app/components/admin/contest/ContestTable.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  },
  {
    accessorKey: "status",
    header: ({ column }) => /* @__PURE__ */ jsxDEV73(DataTableColumnHeader, { column, title: "status" }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    cell: ({ row }) => {
      let status = row.getValue("status").split("_").join(" ");
      return /* @__PURE__ */ jsxDEV73(StatusTag, { status, color: status === "registering" ? "yellow" : status === "ongoing" ? "green" : status === "completed" ? "red" : "gray" }, void 0, !1, {
        fileName: "app/components/admin/contest/ContestTable.tsx",
        lineNumber: 57,
        columnNumber: 20
      }, this);
    }
  },
  {
    id: "actions",
    header: "actions",
    cell: ({ row }) => /* @__PURE__ */ jsxDEV73(ContestTableActions, { rowData: row.original }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 62,
      columnNumber: 29
    }, this)
  }
];
function ContestTable({ data, pagination }) {
  return /* @__PURE__ */ jsxDEV73(Fragment10, { children: [
    /* @__PURE__ */ jsxDEV73("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxDEV73(
      DataTable,
      {
        data,
        columns: columns5,
        expandRows: !0,
        getRowCanExpand: () => !0,
        SubComponent: Stages,
        className: "max-xs:text-xs text-sm"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/contest/ContestTable.tsx",
        lineNumber: 70,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    pagination ? /* @__PURE__ */ jsxDEV73("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
      /* @__PURE__ */ jsxDEV73("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ jsxDEV73("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 }, void 0, !1, {
          fileName: "app/components/admin/contest/ContestTable.tsx",
          lineNumber: 77,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/contest/ContestTable.tsx",
        lineNumber: 76,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV73(Pagination, {}, void 0, !1, {
        fileName: "app/components/admin/contest/ContestTable.tsx",
        lineNumber: 79,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/contest/ContestTable.tsx",
      lineNumber: 75,
      columnNumber: 19
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/admin/contest/ContestTable.tsx",
    lineNumber: 68,
    columnNumber: 9
  }, this);
}

// app/components/reusables/ToggleTip.tsx
import { useEffect as useEffect10, useRef as useRef6, useState as useState15 } from "react";
import { jsxDEV as jsxDEV74 } from "react/jsx-dev-runtime";
function Toggletip({ mainComponent, children, mainContainerClass = "", childContainerClass = "" }) {
  let [open, setOpen] = useState15(!1), toggletip = useRef6(null);
  function handleOutsideClick(e) {
    e.target !== toggletip.current && !toggletip.current?.contains(e.target) && setOpen(!1);
  }
  return useEffect10(() => (document.addEventListener("click", handleOutsideClick), () => document.removeEventListener("click", handleOutsideClick)), []), /* @__PURE__ */ jsxDEV74(
    "div",
    {
      ref: toggletip,
      onClick: () => {
        setOpen((prev) => !prev);
      },
      className: `relative cursor-pointer ${mainContainerClass}`,
      children: [
        mainComponent,
        /* @__PURE__ */ jsxDEV74("div", { className: `absolute min-w-full rounded-2xl z-10 ${open ? "" : "hidden"} ${childContainerClass}`, children }, void 0, !1, {
          fileName: "app/components/reusables/ToggleTip.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/reusables/ToggleTip.tsx",
      lineNumber: 23,
      columnNumber: 9
    },
    this
  );
}

// app/routes/admin.tournaments.$ID._index.tsx
import { jsxDEV as jsxDEV75 } from "react/jsx-dev-runtime";
async function loader12({ params, request }) {
  let { data: tournament, error: tournamentError } = await tournamentRepo.getTournamentById(params.ID), { data: contests2, error: contestError } = await contestRepo.adminGetContestsInTournament(params.ID);
  if (tournamentError || contestError) {
    let error = tournamentError?.detail ?? contestError?.detail ?? "An error occured while fetching the contests", { headers } = await setToast({ request, toast: `error::${error}::${Date.now()}` });
    return redirect8("/admin/tournaments", { headers });
  }
  return json15({ tournament, contests: contests2 });
}
function Tournament() {
  let { tournament, contests: contests2 } = useLoaderData12(), navigate = useNavigate3(), mainComponent = /* @__PURE__ */ jsxDEV75(RoundCta_default, { icon: icons.optionsIcon, className: "border-disabled hover:border-primary" }, void 0, !1, {
    fileName: "app/routes/admin.tournaments.$ID._index.tsx",
    lineNumber: 28,
    columnNumber: 27
  }, this);
  return /* @__PURE__ */ jsxDEV75("main", { className: "w-full overflow-y-auto max-xs:p-3 p-6", children: [
    /* @__PURE__ */ jsxDEV75("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: /* @__PURE__ */ jsxDEV75(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, !1, {
      fileName: "app/routes/admin.tournaments.$ID._index.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.tournaments.$ID._index.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV75("section", { className: "flex items-start gap-4 sm:gap-6 max-w-xl mx-auto max-xs:text-sm", children: [
      /* @__PURE__ */ jsxDEV75("img", { src: tournament.image ?? "", alt: "tournament banner", className: "max-xs:w-20 w-24 sm:w-[120px] aspect-square object-cover rounded-lg" }, void 0, !1, {
        fileName: "app/routes/admin.tournaments.$ID._index.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV75("div", { className: "flex flex-col gap-4 sm:gap-6 justify-between", children: [
        /* @__PURE__ */ jsxDEV75("div", { className: "", children: [
          /* @__PURE__ */ jsxDEV75("h1", { className: "text-primary font-satoshi-black uppercase line-clamp-1", children: tournament.name }, void 0, !1, {
            fileName: "app/routes/admin.tournaments.$ID._index.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV75("p", { className: "font-medium text-xs line-clamp-2", children: tournament.description }, void 0, !1, {
            fileName: "app/routes/admin.tournaments.$ID._index.tsx",
            lineNumber: 39,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.tournaments.$ID._index.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV75("div", { className: "flex gap-4 sm:gap-6 items-center", children: [
          /* @__PURE__ */ jsxDEV75(
            Cta_default,
            {
              element: "link",
              to: `/admin/contests/add?tournament=${tournament.id}`,
              variant: "outline",
              className: "flex gap-2 items-center rounded-lg px-3 py-2 border-secondary text-primary font-medium hover:border-primary max-xs:text-xs",
              children: [
                /* @__PURE__ */ jsxDEV75(Svg, { src: icons.addIcon, width: ".9em" }, void 0, !1, {
                  fileName: "app/routes/admin.tournaments.$ID._index.tsx",
                  lineNumber: 44,
                  columnNumber: 29
                }, this),
                "Add Contest"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/admin.tournaments.$ID._index.tsx",
              lineNumber: 42,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ jsxDEV75(
            Toggletip,
            {
              mainComponent,
              childContainerClass: "top-[120%] max-sm:right-0 sm:left-0 bg-tertiary p-2 border border-disabled text-xs whitespace-nowrap",
              children: [
                /* @__PURE__ */ jsxDEV75(
                  Link8,
                  {
                    to: "edit",
                    className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium",
                    children: "Edit Tournament"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/admin.tournaments.$ID._index.tsx",
                    lineNumber: 50,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV75(
                  "button",
                  {
                    className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium",
                    children: "Delete Tournament"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/admin.tournaments.$ID._index.tsx",
                    lineNumber: 53,
                    columnNumber: 29
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/admin.tournaments.$ID._index.tsx",
              lineNumber: 47,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin.tournaments.$ID._index.tsx",
          lineNumber: 41,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tournaments.$ID._index.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tournaments.$ID._index.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV75("section", { className: "my-12", children: /* @__PURE__ */ jsxDEV75(ContestTable, { data: contests2 }, void 0, !1, {
      fileName: "app/routes/admin.tournaments.$ID._index.tsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.tournaments.$ID._index.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tournaments.$ID._index.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

// app/routes/_public.results.$contestId.tsx
var public_results_contestId_exports = {};
__export(public_results_contestId_exports, {
  default: () => ContestResult,
  loader: () => loader13
});
import { redirect as redirect9 } from "@remix-run/node";
import { useLoaderData as useLoaderData13 } from "@remix-run/react";
import { jsxDEV as jsxDEV76 } from "react/jsx-dev-runtime";
async function loader13({ params }) {
  let { contestId } = params;
  if (!contestId)
    return redirect9("/results");
  let { data: contest, error } = await getFinalResultForContest(contestId);
  return error && redirect9("/results"), { contest };
}
function ContestResult() {
  let { contest } = useLoaderData13();
  if (!contest)
    throw redirect9("/results");
  console.log(contest);
  let color = contest.status === "registering" ? "yellow" : contest.status === "ongoing" ? "green" : contest.status === "completed" ? "red" : "gray", headings = [], table_results = [];
  return contest?.final_result_scores && (headings = contest.final_result_headings, table_results = contest.final_result_scores.map((res) => res.table_data)), /* @__PURE__ */ jsxDEV76("main", { className: "grow", children: [
    /* @__PURE__ */ jsxDEV76("header", { className: "wrapper my-16", children: [
      /* @__PURE__ */ jsxDEV76("h1", { className: "text-accent text-2xl lg:text-4xl lg:leading-snug font-satoshi-bold max-w-3xl uppercase mb-10", children: [
        contest.name,
        " Result Table"
      ] }, void 0, !0, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV76("div", { className: "grid gap-6 max-w-2xl", children: [
        /* @__PURE__ */ jsxDEV76("div", { className: "", children: [
          /* @__PURE__ */ jsxDEV76("span", { className: "block font-satoshi-bold mb-1", children: "Status" }, void 0, !1, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 42,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV76(StatusTag, { status: contest.status, color }, void 0, !1, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 43,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 41,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV76("div", { className: "grid grid-cols-2 gap-14", children: [
          /* @__PURE__ */ jsxDEV76("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV76("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }, void 0, !1, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 47,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV76("span", { className: "block", children: contest.categories.join(", ") }, void 0, !1, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 48,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 46,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV76("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV76("span", { className: "block font-satoshi-bold mb-1", children: "Stages" }, void 0, !1, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 51,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV76("span", { className: "block", children: contest.no_of_stages ?? 0 }, void 0, !1, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 52,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 50,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV76("div", { className: "grid grid-cols-2 gap-14", children: [
          /* @__PURE__ */ jsxDEV76("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV76("span", { className: "block font-satoshi-bold mb-1", children: "Duration" }, void 0, !1, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 57,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV76("span", { className: "block", children: "From May 23 to June 20" }, void 0, !1, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 58,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 56,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV76("div", { className: "", children: [
            /* @__PURE__ */ jsxDEV76("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }, void 0, !1, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 61,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV76("span", { className: "block", children: contest.prizes }, void 0, !1, {
              fileName: "app/routes/_public.results.$contestId.tsx",
              lineNumber: 62,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 60,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 55,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.results.$contestId.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV76("section", { className: "bg-white my-16", children: /* @__PURE__ */ jsxDEV76("div", { className: "wrapper py-6", children: [
      /* @__PURE__ */ jsxDEV76("div", { className: "flex flex-col md:flex-row-reverse gap-6 md:gap-8 justify-between md:items-center py-6", children: [
        /* @__PURE__ */ jsxDEV76("fieldset", { className: "flex gap-4 flex-wrap sm:justify-end", children: [
          /* @__PURE__ */ jsxDEV76(Select2, { name: "stage", id: "stage", containerClass: "bg-secondary", children: /* @__PURE__ */ jsxDEV76("option", { value: "1", children: [
            contest.name.toUpperCase(),
            " - ",
            "FINAL RESULT TABLE"
          ] }, void 0, !0, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 72,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 71,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV76(Select2, { name: "category", id: "category", containerClass: "bg-secondary", children: /* @__PURE__ */ jsxDEV76("option", { value: "", children: "Sort by category" }, void 0, !1, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 75,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 74,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 70,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV76("span", { className: "whitespace-nowrap font-satoshi-bold", children: "SMV: SOCIAL MEDIA VOTES" }, void 0, !1, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 78,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV76("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxDEV76("table", { className: "w-full table-auto border border-secondary", children: [
        /* @__PURE__ */ jsxDEV76("thead", { children: /* @__PURE__ */ jsxDEV76("tr", { children: [
          /* @__PURE__ */ jsxDEV76("th", { className: "text-left uppercase font-satoshi-black border border-secondary px-6 py-4", children: "S/N" }, void 0, !1, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 84,
            columnNumber: 37
          }, this),
          headings.map((heading) => /* @__PURE__ */ jsxDEV76("th", { className: "text-left uppercase font-satoshi-black border border-secondary px-6 py-4", children: heading }, heading, !1, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 86,
            columnNumber: 41
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 83,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 82,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV76("tbody", { children: table_results.map((contestant, index) => /* @__PURE__ */ jsxDEV76("tr", { children: [
          /* @__PURE__ */ jsxDEV76("td", { className: "border border-secondary px-6 py-4", children: index + 1 }, void 0, !1, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 95,
            columnNumber: 41
          }, this),
          headings.map((heading) => /* @__PURE__ */ jsxDEV76("td", { className: "border border-secondary px-6 py-4", children: contestant[heading] }, heading, !1, {
            fileName: "app/routes/_public.results.$contestId.tsx",
            lineNumber: 97,
            columnNumber: 45
          }, this))
        ] }, index, !0, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 94,
          columnNumber: 37
        }, this)) }, void 0, !1, {
          fileName: "app/routes/_public.results.$contestId.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 81,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 80,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV76(Pagination, { className: "p-6" }, void 0, !1, {
        fileName: "app/routes/_public.results.$contestId.tsx",
        lineNumber: 104,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.results.$contestId.tsx",
      lineNumber: 68,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.results.$contestId.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.results.$contestId.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

// app/routes/admin.tournaments.$ID.edit.tsx
var admin_tournaments_ID_edit_exports = {};
__export(admin_tournaments_ID_edit_exports, {
  action: () => action10,
  default: () => EditTournament,
  loader: () => loader14
});
import { json as json17, redirect as redirect10 } from "@remix-run/node";
import { useLoaderData as useLoaderData14, useNavigate as useNavigate4 } from "@remix-run/react";

// app/components/admin/tournament/EditTournamentForm.tsx
import { Form as Form9 } from "@remix-run/react";
import { useState as useState16 } from "react";
import { jsxDEV as jsxDEV77 } from "react/jsx-dev-runtime";
function EditTournamentForm({ tournament }) {
  let [fileList, setFileList] = useState16(null), { filePreview, clearFilePreview, fileName } = useFilePreview(fileList);
  return /* @__PURE__ */ jsxDEV77(Form9, { className: "max-w-xl mx-auto grid gap-6 sm:gap-12 text-sm", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsxDEV77("h1", { className: "text-xl xs:text-2xl font-bold text-primary", children: "Edit Tournament" }, void 0, !1, {
      fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV77("div", { className: "grid gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxDEV77("div", { className: "flex items-center gap-x-5", children: [
        filePreview ? /* @__PURE__ */ jsxDEV77("img", { className: "w-20 h-20 rounded-lg object-cover", src: filePreview, alt: "chosen image" }, void 0, !1, {
          fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
          lineNumber: 20,
          columnNumber: 27
        }, this) : /* @__PURE__ */ jsxDEV77("img", { className: "w-20 h-20 rounded-lg object-cover", src: tournament.image || no_image_default, alt: "Tournament banner" }, void 0, !1, {
          fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
          lineNumber: 21,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ jsxDEV77("div", { className: "flex flex-col items-start gap-2 max-xs:text-xs", children: [
          /* @__PURE__ */ jsxDEV77("label", { htmlFor: "image", className: "border-2 border-secondary text-primary cursor-pointer font-semibold py-2 px-4 rounded-lg", children: [
            "Change Photo",
            /* @__PURE__ */ jsxDEV77("input", { id: "image", name: "image", type: "file", onChange: (e) => {
              setFileList(e.currentTarget.files);
            }, className: "hidden" }, void 0, !1, {
              fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
              lineNumber: 26,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
            lineNumber: 24,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV77("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV77("span", { children: fileName || "PNG, JPG (max. 1440x900px)" }, void 0, !1, {
              fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
              lineNumber: 29,
              columnNumber: 29
            }, this),
            fileName ? /* @__PURE__ */ jsxDEV77(Svg, { src: icons.closeIcon, onClick: clearFilePreview, className: "text-red-600 cursor-pointer" }, void 0, !1, {
              fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
              lineNumber: 31,
              columnNumber: 35
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
            lineNumber: 28,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
          lineNumber: 23,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV77(FormControl, { as: "input", labelText: "Tournament Name", placeholder: "Enter tournament name", id: "name", name: "name", defaultValue: tournament.name, required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV77(FormControl, { as: "input", labelText: "Tournament Unique ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", defaultValue: tournament.id, required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV77(FormControl, { as: "textarea", rows: 3, labelText: "Tournament Description", placeholder: "Enter tournament description", id: "description", name: "description", defaultValue: tournament.description, required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV77("div", { className: "flex max-sm:flex-col justify-end gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxDEV77(Cta_default, { element: "button", onClick: clearFilePreview, type: "reset", className: "px-8 py-2 rounded-lg font-medium border-secondary active:border-accent sm:hover:border-accent", variant: "outline", children: "Reset" }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV77(Cta_default, { element: "button", type: "submit", name: "tournamentId", value: tournament._id, className: "px-8 py-2 rounded-lg font-medium", children: "Edit Tournament" }, void 0, !1, {
        fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/tournament/EditTournamentForm.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/routes/admin.tournaments.$ID.edit.tsx
import { jsxDEV as jsxDEV78 } from "react/jsx-dev-runtime";
async function loader14({ params, request }) {
  let { data: tournament, error } = await tournamentRepo.getTournamentById(params.ID);
  if (!tournament) {
    let { headers } = await setToast({ request, toast: `error::${error?.detail}::${Date.now()}` });
    return redirect10("/admin/tournaments", { headers });
  }
  return json17({ tournament });
}
async function action10({ request }) {
  let formData = await request.formData(), payload = prepareTournamentDto(formData);
  console.log("###############"), console.log(Object.fromEntries(payload.entries()));
  let { data, error } = await tournamentRepo.updateTournament({ id: formData.get("tournamentId"), dto: payload });
  if (data) {
    let { headers: headers2 } = await setToast({ request, toast: `success::The tournament has been updated::${Date.now()}` });
    return redirect10("/admin/tournaments", { headers: headers2 });
  } else if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail}::${Date.now()}` });
    return json17(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `error::Sorry, this tournament no longer exists::${Date.now()}` });
  return redirect10("/admin/tournaments", { headers });
}
function EditTournament() {
  let { tournament } = useLoaderData14(), navigate = useNavigate4();
  return /* @__PURE__ */ jsxDEV78("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV78("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsxDEV78(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, !1, {
        fileName: "app/routes/admin.tournaments.$ID.edit.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV78("span", { className: "font-black text-primary", children: "Edit Tournament" }, void 0, !1, {
        fileName: "app/routes/admin.tournaments.$ID.edit.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tournaments.$ID.edit.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV78(EditTournamentForm, { tournament }, void 0, !1, {
      fileName: "app/routes/admin.tournaments.$ID.edit.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tournaments.$ID.edit.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this);
}

// app/routes/_public.winner.$winnerId.tsx
var public_winner_winnerId_exports = {};
__export(public_winner_winnerId_exports, {
  default: () => WinnerDetailsPage,
  loader: () => loader15
});
import { useLoaderData as useLoaderData15 } from "@remix-run/react";
import { jsxDEV as jsxDEV79 } from "react/jsx-dev-runtime";
async function loader15({ params }) {
  let winnerId = params.winnerId, { data: winner, error } = await contestRepo.getWinnerById(winnerId);
  return { winner, error };
}
function WinnerDetailsPage() {
  let { winner, error } = useLoaderData15(), description = `We Are Thrilled To Announce The Triumphant Winner Of Our Recent '${winner?.contest_name}'! Let's Take A Moment To Applaud The Outstanding Creativity And Talent That Graced Our Contest.`;
  return /* @__PURE__ */ jsxDEV79("div", { className: "min-h-screen bg-[#EFEFFF] flex items-center justify-center p-4 sm:p-6 lg:p-8", children: /* @__PURE__ */ jsxDEV79("div", { className: "max-w-6xl mx-auto bg-transparent", children: /* @__PURE__ */ jsxDEV79("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16", children: [
    /* @__PURE__ */ jsxDEV79("div", { className: "w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-xl order-2 md:order-1", children: /* @__PURE__ */ jsxDEV79(
      "img",
      {
        src: winner?.image_url,
        alt: winner?.full_name,
        className: "w-full h-full object-cover"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV79("div", { className: "space-y-4 md:space-y-6 order-1 md:order-2", children: [
      /* @__PURE__ */ jsxDEV79("h1", { className: "text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#5B50FB] leading-tight", children: [
        winner?.contest_name,
        " Winner"
      ] }, void 0, !0, {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV79("p", { className: "text-base sm:text-lg text-gray-700 leading-relaxed", children: description }, void 0, !1, {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV79("p", { className: "text-lg sm:text-xl font-bold text-gray-900", children: [
        "Grand Winner:",
        " ",
        /* @__PURE__ */ jsxDEV79("span", { className: "text-gray-900", children: winner?.full_name }, void 0, !1, {
          fileName: "app/routes/_public.winner.$winnerId.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        " (",
        winner?.contest_name,
        ")"
      ] }, void 0, !0, {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV79("p", { className: "text-sm italic text-gray-600 pt-2", children: [
        `Winner's Note: "`,
        winner?.remark,
        '"'
      ] }, void 0, !0, {
        fileName: "app/routes/_public.winner.$winnerId.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.winner.$winnerId.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.winner.$winnerId.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.winner.$winnerId.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.winner.$winnerId.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/admin.tournaments._index.tsx
var admin_tournaments_index_exports = {};
__export(admin_tournaments_index_exports, {
  action: () => action11,
  default: () => Tournaments,
  loader: () => loader16
});
import { json as json18 } from "@remix-run/node";
import { useLoaderData as useLoaderData16 } from "@remix-run/react";

// app/components/admin/tournament/TournamentCard.tsx
import { Link as Link9 } from "@remix-run/react";

// app/components/admin/tournament/DeleteTournamentDialog.tsx
import { useFetcher as useFetcher9 } from "@remix-run/react";
import { jsxDEV as jsxDEV80 } from "react/jsx-dev-runtime";
function DeleteTournamentDialog({ tournament, disabled }) {
  let fetcher = useFetcher9();
  return /* @__PURE__ */ jsxDEV80(Dialog, { children: [
    /* @__PURE__ */ jsxDEV80(
      DialogTrigger,
      {
        disabled,
        title: "Delete tournament",
        className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium",
        children: "Delete Tournament"
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
        lineNumber: 11,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV80(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxDEV80(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV80(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsxDEV80("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV80(Svg, { src: icons.questionIcon }, void 0, !1, {
            fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
            lineNumber: 19,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
            lineNumber: 18,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV80("p", { children: [
            /* @__PURE__ */ jsxDEV80("span", { className: "block", children: "Delete tournament" }, void 0, !1, {
              fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
              lineNumber: 22,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV80("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the deletion of this tournament" }, void 0, !1, {
              fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
              lineNumber: 23,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
            lineNumber: 21,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
          lineNumber: 17,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV80(DialogDescription, { className: "border-y p-4", children: [
          /* @__PURE__ */ jsxDEV80("span", { className: "text-primary mb-2 block", children: [
            "Are you sure you want to delete ",
            tournament.name,
            " tournament?"
          ] }, void 0, !0, {
            fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
            lineNumber: 27,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV80("span", { className: "text-admin-pry", children: "This action is irreversible and will permanently delete this tournament." }, void 0, !1, {
            fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
            lineNumber: 28,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
          lineNumber: 26,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV80(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ jsxDEV80(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsxDEV80("input", { type: "hidden", name: "tournamentId", value: tournament._id }, void 0, !1, {
          fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
          lineNumber: 33,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV80(DialogClose, { type: "submit", name: "intent", value: "delete", className: "bg-red-500 px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, !1, {
          fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
          lineNumber: 34,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
        lineNumber: 32,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/components/reusables/LayeredImages.tsx
import { jsxDEV as jsxDEV81 } from "react/jsx-dev-runtime";
function LayeredImages({ images, length = 5 }) {
  let remaining = images.length - length, lastLayer = remaining > 0 ? /* @__PURE__ */ jsxDEV81("div", { className: "w-8 aspect-square inline-flex justify-center items-center -ml-2 rounded-full ring-2 ring-white bg-tertiary text-accent font-semibold text-sm", children: [
    "+",
    remaining
  ] }, void 0, !0, {
    fileName: "app/components/reusables/LayeredImages.tsx",
    lineNumber: 6,
    columnNumber: 11
  }, this) : null;
  return /* @__PURE__ */ jsxDEV81("div", { children: [
    images.slice(0, length).map((image, index) => typeof image == "string" ? /* @__PURE__ */ jsxDEV81("img", { src: image || no_image_default, alt: "people smiling", className: "w-8 aspect-square inline-block -ml-2 first:ml-0 rounded-full object-cover ring-2 ring-white" }, index, !1, {
      fileName: "app/components/reusables/LayeredImages.tsx",
      lineNumber: 12,
      columnNumber: 28
    }, this) : /* @__PURE__ */ jsxDEV81("img", { src: image?.image || no_image_default, alt: "people smiling", className: "w-8 aspect-square inline-block -ml-2 first:ml-0 rounded-full object-cover ring-2 ring-white" }, index, !1, {
      fileName: "app/components/reusables/LayeredImages.tsx",
      lineNumber: 14,
      columnNumber: 24
    }, this)),
    lastLayer
  ] }, void 0, !0, {
    fileName: "app/components/reusables/LayeredImages.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/components/admin/tournament/TournamentCard.tsx
import { jsxDEV as jsxDEV82 } from "react/jsx-dev-runtime";
function TournamentCard({ tournament, className }) {
  let mainComponent = /* @__PURE__ */ jsxDEV82(RoundCta_default, { icon: icons.optionsIcon, className: "border-transparent hover:border-disabled" }, void 0, !1, {
    fileName: "app/components/admin/tournament/TournamentCard.tsx",
    lineNumber: 14,
    columnNumber: 27
  }, this);
  return /* @__PURE__ */ jsxDEV82("aside", { className: cn("p-6 border border-disabled rounded-xl bg-white shadow overflow-hidden", className), children: [
    /* @__PURE__ */ jsxDEV82("div", { className: "flex gap-3 items-start justify-between max-xs:flex-wrap", children: [
      /* @__PURE__ */ jsxDEV82("img", { src: tournament.image || no_image_default, alt: "children smiling", className: "w-24 aspect-square rounded-md object-cover" }, void 0, !1, {
        fileName: "app/components/admin/tournament/TournamentCard.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV82("div", { className: "self-center grow max-xs:order-1", children: [
        /* @__PURE__ */ jsxDEV82("h3", { className: "text-primary font-satoshi-black uppercase line-clamp-1", children: tournament.name }, void 0, !1, {
          fileName: "app/components/admin/tournament/TournamentCard.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV82("p", { className: "font-medium text-xs line-clamp-2", children: tournament.description }, void 0, !1, {
          fileName: "app/components/admin/tournament/TournamentCard.tsx",
          lineNumber: 21,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/tournament/TournamentCard.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV82(
        Toggletip,
        {
          mainComponent,
          childContainerClass: "top-[110%] right-0 bg-tertiary p-2 border border-disabled text-xs whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsxDEV82(
              Link9,
              {
                to: `/admin/tournaments/${tournament.id}/edit`,
                className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium",
                children: "Edit Tournament"
              },
              void 0,
              !1,
              {
                fileName: "app/components/admin/tournament/TournamentCard.tsx",
                lineNumber: 26,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV82(DeleteTournamentDialog, { tournament }, void 0, !1, {
              fileName: "app/components/admin/tournament/TournamentCard.tsx",
              lineNumber: 29,
              columnNumber: 21
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/admin/tournament/TournamentCard.tsx",
          lineNumber: 23,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/TournamentCard.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV82("hr", { className: "mt-4 mb-1" }, void 0, !1, {
      fileName: "app/components/admin/tournament/TournamentCard.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV82("span", { className: "text-primary text-sm font-satoshi-bold mb-3", children: [
      tournament.contests.length,
      " contests created"
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/TournamentCard.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV82("div", { className: "grid gap-2 xs:flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV82(LayeredImages, { images: tournament.contests }, void 0, !1, {
        fileName: "app/components/admin/tournament/TournamentCard.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV82(Link9, { to: `/admin/tournaments/${tournament.id}`, className: "flex gap-2 items-center font-semibold hover:text-accent", children: [
        "View Contests ",
        /* @__PURE__ */ jsxDEV82(Svg, { src: icons.arrowNextIcon }, void 0, !1, {
          fileName: "app/components/admin/tournament/TournamentCard.tsx",
          lineNumber: 36,
          columnNumber: 148
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/tournament/TournamentCard.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/TournamentCard.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/tournament/TournamentCard.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/routes/admin.tournaments._index.tsx
import { jsxDEV as jsxDEV83 } from "react/jsx-dev-runtime";
async function loader16({}) {
  let { data: tournaments, error } = await tournamentRepo.getTournaments();
  if (error)
    throw new Error(error.detail);
  return json18({ tournaments });
}
async function action11({ request }) {
  let formData = await request.formData();
  if (formData.get("intent") === "delete") {
    let tournamentId = formData.get("tournamentId"), { data, error } = await tournamentRepo.deleteTournament(tournamentId);
    if (error) {
      let { headers: headers2 } = await setToast({ request, toast: `error::Could not delete the tournament::${Date.now()}` });
      return json18(error, { headers: headers2 });
    }
    let { headers } = await setToast({ request, toast: `success::The tournament has been deleted::${Date.now()}` });
    return json18(data, { headers });
  }
  return json18(null);
}
function Tournaments() {
  let { tournaments } = useLoaderData16(), numberOfContests = tournaments.reduce((total, tournament) => total + tournament.contests.length, 0);
  return /* @__PURE__ */ jsxDEV83("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV83("section", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ jsxDEV83("h1", { className: "text-2xl font-black text-primary", children: "Tournaments" }, void 0, !1, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV83(Cta_default, { element: "link", to: "add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsxDEV83(Svg, { src: icons.addIcon, width: ".9em" }, void 0, !1, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this),
        "Create Tournament"
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV83("aside", { className: "sm:flex justify-evenly max-w-xl mx-auto gap-2 p-3 border rounded-md my-4 bg-[#F6F8FA] text-sm", children: [
      /* @__PURE__ */ jsxDEV83("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ jsxDEV83("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsxDEV83(Svg, { src: icons.adminTournamentIcon, className: "text-primary" }, void 0, !1, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 57,
          columnNumber: 75
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV83("span", { className: "grid", children: [
          /* @__PURE__ */ jsxDEV83("span", { className: "text-primary font-satoshi-black", children: tournaments.length }, void 0, !1, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 59,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV83("span", { className: "", children: "Tournaments Created" }, void 0, !1, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 60,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 58,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV83("div", { className: "max-sm:my-2 max-sm:border-t sm:border-r sm:h-10" }, void 0, !1, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV83("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ jsxDEV83("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsxDEV83(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, !1, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 65,
          columnNumber: 75
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV83("span", { className: "grid", children: [
          /* @__PURE__ */ jsxDEV83("span", { className: "text-primary font-satoshi-black", children: numberOfContests }, void 0, !1, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 67,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV83("span", { className: "", children: "Contests Created" }, void 0, !1, {
            fileName: "app/routes/admin.tournaments._index.tsx",
            lineNumber: 68,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.tournaments._index.tsx",
          lineNumber: 66,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV83(Cta_default, { element: "link", to: "add", className: "flex sm:hidden gap-2 justify-center items-center rounded-lg px-3 py-2", children: [
      /* @__PURE__ */ jsxDEV83(Svg, { src: icons.addIcon, width: ".9em" }, void 0, !1, {
        fileName: "app/routes/admin.tournaments._index.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this),
      "Create Tournament"
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV83("section", { className: "my-8 grid sm:grid-cols-2 gap-6", children: tournaments.map((tournament) => /* @__PURE__ */ jsxDEV83(TournamentCard, { tournament }, tournament.id, !1, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 78,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/routes/admin.tournaments._index.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tournaments._index.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
}

// app/routes/_public.contests._index.tsx
var public_contests_index_exports = {};
__export(public_contests_index_exports, {
  default: () => Contests,
  loader: () => loader17
});
import { json as json19 } from "@remix-run/node";
import { useLoaderData as useLoaderData17 } from "@remix-run/react";
import { jsxDEV as jsxDEV84 } from "react/jsx-dev-runtime";
async function loader17() {
  let { data: tournaments, error } = await tournamentRepo.getTournaments();
  if (error)
    throw new Error(error.detail);
  return json19({ tournaments });
}
function Contests() {
  let { tournaments } = useLoaderData17();
  return /* @__PURE__ */ jsxDEV84("main", { className: "grow", children: [
    /* @__PURE__ */ jsxDEV84("header", { className: "wrapper my-16", children: /* @__PURE__ */ jsxDEV84("h1", { className: "text-2xl lg:text-4xl font-satoshi-medium max-w-3xl", children: "From Artistic Marvels to Captivating Moments. Unleash Your Talent and Win Big in Our Monthly and Yearly Contests!" }, void 0, !1, {
      fileName: "app/routes/_public.contests._index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.contests._index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV84("section", { className: "wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center", children: tournaments.map((tournament) => /* @__PURE__ */ jsxDEV84(ContestCard, { contest: tournament, to: `/contests/${tournament.id}` }, tournament.id, !1, {
      fileName: "app/routes/_public.contests._index.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_public.contests._index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.contests._index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/_public.results._index.tsx
var public_results_index_exports = {};
__export(public_results_index_exports, {
  default: () => Results,
  loader: () => loader18
});
import { json as json20 } from "@remix-run/node";
import { useLoaderData as useLoaderData18 } from "@remix-run/react";

// app/lib/data/contest.server.ts
var contests = [
  {
    _id: "kotm1",
    id: "kotm1",
    image: contest_image_1_default,
    name: "Kid of February 2024",
    tournament_unique_id: "kotm",
    desc: "A monthly photo contest for kids of various age ranges",
    status: "registering",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: (/* @__PURE__ */ new Date()).toISOString(),
    reg_deadline: (/* @__PURE__ */ new Date()).toISOString(),
    categories: ["infant", "newborn"],
    prizes: "3 million naira worth of prizes",
    sub_req: "Some requirements",
    terms_cond: "Terms and contitions",
    add_info: "Some additional information"
  },
  {
    _id: "kotm2",
    id: "kotm2",
    image: contest_image_2_default,
    name: "Kid of January 2024",
    desc: "A monthly photo contest for kids of various age ranges",
    tournament_unique_id: "kotm",
    status: "ongoing",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: (/* @__PURE__ */ new Date()).toISOString(),
    reg_deadline: (/* @__PURE__ */ new Date()).toISOString(),
    categories: ["infant", "newborn"],
    prizes: "3 million naira worth of prizes",
    sub_req: "Some requirements",
    terms_cond: "Terms and contitions",
    add_info: "Some additional information"
  },
  {
    _id: "kotm3",
    id: "kotm3",
    image: contest_image_1_default,
    name: "Kid of December 2023",
    desc: "A monthly photo contest for kids of various age ranges",
    tournament_unique_id: "kotm",
    status: "completed",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: (/* @__PURE__ */ new Date()).toISOString(),
    reg_deadline: (/* @__PURE__ */ new Date()).toISOString(),
    categories: ["infant", "newborn"],
    prizes: "3 million naira worth of prizes",
    sub_req: "Some requirements",
    terms_cond: "Terms and contitions",
    add_info: "Some additional information"
  },
  {
    _id: "koty4",
    id: "koty4",
    image: contest_image_2_default,
    name: "Kid of the Year 2025",
    desc: "A monthly photo contest for kids of various age ranges",
    tournament_unique_id: "koty",
    status: "registering",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: (/* @__PURE__ */ new Date()).toISOString(),
    reg_deadline: (/* @__PURE__ */ new Date()).toISOString(),
    categories: ["infant", "newborn"],
    prizes: "3 million naira worth of prizes",
    sub_req: "Some requirements",
    terms_cond: "Terms and contitions",
    add_info: "Some additional information"
  },
  {
    _id: "koty5",
    id: "koty5",
    image: contest_image_1_default,
    name: "Kid of the Year 2024",
    desc: "A monthly photo contest for kids of various age ranges",
    tournament_unique_id: "koty",
    status: "ongoing",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: (/* @__PURE__ */ new Date()).toISOString(),
    reg_deadline: (/* @__PURE__ */ new Date()).toISOString(),
    categories: ["infant", "newborn"],
    prizes: "3 million naira worth of prizes",
    sub_req: "Some requirements",
    terms_cond: "Terms and contitions",
    add_info: "Some additional information"
  },
  {
    _id: "koty6",
    id: "koty6",
    image: contest_image_2_default,
    name: "Kid of the Year 2023",
    desc: "A monthly photo contest for kids of various age ranges",
    tournament_unique_id: "koty",
    status: "completed",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: (/* @__PURE__ */ new Date()).toISOString(),
    reg_deadline: (/* @__PURE__ */ new Date()).toISOString(),
    categories: ["infant", "newborn"],
    prizes: "3 million naira worth of prizes",
    sub_req: "Some requirements",
    terms_cond: "Terms and contitions",
    add_info: "Some additional information"
  },
  {
    _id: "mbds7",
    id: "mbds7",
    image: contest_image_2_default,
    name: "My Birthday Splash February 2024",
    desc: "A monthly photo contest for kids celebrrating their birthdays in the contest month",
    tournament_unique_id: "mbds",
    status: "registering",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: (/* @__PURE__ */ new Date()).toISOString(),
    reg_deadline: (/* @__PURE__ */ new Date()).toISOString(),
    categories: ["infant", "newborn"],
    prizes: "3 million naira worth of prizes",
    sub_req: "Some requirements",
    terms_cond: "Terms and contitions",
    add_info: "Some additional information"
  },
  {
    _id: "mbds8",
    id: "mbds8",
    image: contest_image_1_default,
    name: "My Birthday Splash January 2024",
    desc: "A monthly photo contest for kids celebrrating their birthdays in the contest month",
    tournament_unique_id: "mbds",
    status: "ongoing",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: (/* @__PURE__ */ new Date()).toISOString(),
    reg_deadline: (/* @__PURE__ */ new Date()).toISOString(),
    categories: ["infant", "newborn"],
    prizes: "3 million naira worth of prizes",
    sub_req: "Some requirements",
    terms_cond: "Terms and contitions",
    add_info: "Some additional information"
  },
  {
    _id: "mbds9",
    id: "mbds9",
    image: contest_image_2_default,
    name: "My Birthday Splash December 2023",
    desc: "A monthly photo contest for kids celebrrating their birthdays in the contest month",
    tournament_unique_id: "mbds",
    status: "completed",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: (/* @__PURE__ */ new Date()).toISOString(),
    reg_deadline: (/* @__PURE__ */ new Date()).toISOString(),
    categories: ["infant", "newborn"],
    prizes: "3 million naira worth of prizes",
    sub_req: "Some requirements",
    terms_cond: "Terms and contitions",
    add_info: "Some additional information"
  }
];
async function getContests(options) {
  if (!options)
    return contests;
  let { where } = options;
  return contests.filter((contest) => {
    for (let key in where)
      if (contest[key] !== where[key])
        return !1;
    return !0;
  }) ?? null;
}

// app/routes/_public.results._index.tsx
import { jsxDEV as jsxDEV85 } from "react/jsx-dev-runtime";
async function loader18() {
  let contests2 = await getContests({ where: { status: "completed" } });
  return json20({ contests: contests2 });
}
function Results() {
  let { contests: contests2 } = useLoaderData18();
  return /* @__PURE__ */ jsxDEV85("main", { className: "grow", children: [
    /* @__PURE__ */ jsxDEV85("header", { className: "wrapper my-16", children: /* @__PURE__ */ jsxDEV85("h1", { className: "text-accent text-2xl lg:text-4xl lg:leading-snug font-satoshi-bold max-w-3xl", children: "Congratulating the Extraordinary Talents That Stole the Spotlight!" }, void 0, !1, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV85("section", { className: "wrapper", children: /* @__PURE__ */ jsxDEV85("div", { className: "p-2 rounded-full bg-secondary flex w-fit", children: [
      /* @__PURE__ */ jsxDEV85("span", { className: "whitespace-nowrap text-xs sm:text-base p-3 sm:px-6 sm:py-4 rounded-full font-satoshi-medium bg-accent text-white", children: "All Contests" }, void 0, !1, {
        fileName: "app/routes/_public.results._index.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV85("span", { className: "whitespace-nowrap text-xs sm:text-base p-3 sm:px-6 sm:py-4 rounded-full font-satoshi-medium", children: "Ongoing Contests" }, void 0, !1, {
        fileName: "app/routes/_public.results._index.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV85("span", { className: "whitespace-nowrap text-xs sm:text-base p-3 sm:px-6 sm:py-4 rounded-full font-satoshi-medium", children: "Completed Contests" }, void 0, !1, {
        fileName: "app/routes/_public.results._index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV85("section", { className: "wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center", children: contests2.map((contest) => /* @__PURE__ */ jsxDEV85(ContestCard, { contest, to: `/results/${contest.id}`, withTag: !0, withCategory: !0 }, contest.id, !1, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV85("div", { className: "wrapper my-20 flex justify-center", children: /* @__PURE__ */ jsxDEV85(Button, { element: "button", variant: "outline", children: "See more results" }, void 0, !1, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.results._index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.results._index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/admin.accounts.$userId.tsx
var admin_accounts_userId_exports = {};
__export(admin_accounts_userId_exports, {
  action: () => action12,
  default: () => EditAdminUser,
  loader: () => loader19
});
import { Form as Form10, useLoaderData as useLoaderData19, useNavigate as useNavigate5 } from "@remix-run/react";

// app/components/admin/PermissionsFormControl.tsx
import { useRef as useRef7, useState as useState17 } from "react";
import cn8 from "classnames";
import { CounterClockwiseClockIcon as Restore } from "@radix-ui/react-icons";
import { jsxDEV as jsxDEV86 } from "react/jsx-dev-runtime";
function PermissionsFormControl({ permissions: permissions2, defaultPermissions, ...props }) {
  let [open, setOpen] = useState17(!1), fieldset = useRef7(null);
  function resetFieldset(e) {
    e.currentTarget.form?.permission.forEach((item) => {
      item.checked = item.defaultChecked;
    });
  }
  function labelize(persission) {
    return persission.split("_").join(" ");
  }
  return /* @__PURE__ */ jsxDEV86("fieldset", { ref: fieldset, ...props, className: "p-2 sm:p-4 rounded-lg bg-transparent border hover:border-primary sm:col-span-2", children: [
    /* @__PURE__ */ jsxDEV86("div", { "data-open": open, className: "flex justify-between data-[open=true]:pb-2 sm:data-[open=true]:pb-3 data-[open=true]:border-b", children: [
      /* @__PURE__ */ jsxDEV86("span", { className: "flex gap-2 items-center font-bold cursor-pointer grow", onClick: () => setOpen((prev) => !prev), children: [
        /* @__PURE__ */ jsxDEV86(Svg, { src: icons.arrowDownIcon, className: open ? "" : "-rotate-90" }, void 0, !1, {
          fileName: "app/components/admin/PermissionsFormControl.tsx",
          lineNumber: 24,
          columnNumber: 21
        }, this),
        "Permissions"
      ] }, void 0, !0, {
        fileName: "app/components/admin/PermissionsFormControl.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV86(
        Cta_default,
        {
          element: "button",
          type: "button",
          variant: "outline",
          "aria-label": "restore defaults",
          className: "p-2 sm:px-8 sm:py-2 rounded-lg font-medium text-red-500 border-secondary active:border-red-300 sm:hover:border-red-300",
          onClick: resetFieldset,
          children: [
            /* @__PURE__ */ jsxDEV86(Restore, { className: "text-inherit sm:hidden" }, void 0, !1, {
              fileName: "app/components/admin/PermissionsFormControl.tsx",
              lineNumber: 31,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV86("span", { className: "hidden sm:inline", children: "Restore defaults" }, void 0, !1, {
              fileName: "app/components/admin/PermissionsFormControl.tsx",
              lineNumber: 32,
              columnNumber: 21
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/admin/PermissionsFormControl.tsx",
          lineNumber: 27,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/PermissionsFormControl.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV86("div", { className: cn8("grid sm:grid-cols-3 gap-6 mt-4 sm:mx-3", { hidden: !open }), children: permissions2.map((permission) => /* @__PURE__ */ jsxDEV86(
      FormControl,
      {
        as: "input",
        type: "checkbox",
        name: "permission",
        value: permission,
        className: "w-min",
        defaultChecked: defaultPermissions?.includes(permission),
        labelText: labelize(permission),
        labelClassNames: "flex capitalize whitespace-nowrap items-center justify-between px-4"
      },
      permission,
      !1,
      {
        fileName: "app/components/admin/PermissionsFormControl.tsx",
        lineNumber: 37,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/admin/PermissionsFormControl.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/PermissionsFormControl.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/routes/admin.accounts.$userId.tsx
import { redirect as redirect11 } from "@remix-run/node";

// app/lib/data/admin.ts
var role3 = ["edit_blog"], role2 = [...role3, "edit_content"], role1 = [...role2, "manage_users"], adminUsers = [
  {
    id: "1",
    full_name: "Admin",
    email: "admin@gmail.com",
    username: "admin",
    role: "Role 1",
    access: !0,
    password: "a12345A!",
    permissions: role1
  },
  {
    id: "2",
    full_name: "Nicole Clems",
    email: "nicole@gmail.com",
    username: "nicole",
    role: "Role 2",
    access: !1,
    password: "a12345A!",
    permissions: role2
  },
  {
    id: "3",
    full_name: "Favour Wagor",
    email: "favour@gmail.com",
    username: "favour",
    role: "Role 2",
    access: !0,
    password: "a12345A!",
    permissions: role2
  },
  {
    id: "4",
    full_name: "Oluchi Chinedu",
    email: "chinedu@gmail.com",
    username: "Oluchi",
    role: "Role 3",
    access: !1,
    password: "a12345A!",
    permissions: role3
  },
  {
    id: "5",
    full_name: "Augustine Best",
    email: "lilklara@gmail.com",
    username: "lilklara",
    role: "Role 3",
    access: !0,
    password: "a12345A!",
    permissions: role3
  },
  {
    id: "6",
    full_name: "Davidking Blossom",
    email: "blossomdavid@gmail.com",
    username: "davidking",
    role: "Role 3",
    access: !1,
    password: "a12345A!",
    permissions: role3
  }
], permissions = ["manage_users", "edit_content", "edit_blog"];

// app/routes/admin.accounts.$userId.tsx
import { jsxDEV as jsxDEV87 } from "react/jsx-dev-runtime";
async function loader19({ params, request }) {
  let user = adminUsers.find((user2) => user2.id == params.userId);
  if (!user) {
    let { headers } = await setToast({ request, toast: `error::Admin user not found::${Date.now()}` });
    return redirect11("/admin/accounts", { headers });
  }
  return { permissions, user };
}
async function action12({ request }) {
  let formData = await request.formData();
  console.log(...formData), console.log(formData.getAll("permission"));
  let { headers } = await setToast({ request, toast: `success::User updated  successfully::${Date.now()}` });
  return redirect11("/admin/accounts", { headers });
}
function EditAdminUser() {
  let { permissions: permissions2, user } = useLoaderData19(), navigate = useNavigate5();
  return /* @__PURE__ */ jsxDEV87("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV87("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsxDEV87(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, !1, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87("h1", { className: "text-2xl font-black text-primary", children: "Edit User" }, void 0, !1, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.accounts.$userId.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV87(Form10, { className: "sm:wrapper grid sm:grid-cols-2 gap-3 sm:gap-6 text-sm", method: "post", children: [
      /* @__PURE__ */ jsxDEV87(FormControl, { as: "input", labelText: "First Name", className: "", placeholder: "Enter first name", id: "firstName", name: "firstName", defaultValue: user.full_name.split(" ")[0], required: !0 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87(FormControl, { as: "input", labelText: "Last Name", className: "", placeholder: "Enter last name", id: "lastName", name: "lastName", defaultValue: user.full_name.split(" ")[1], required: !0 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87(FormControl, { as: "input", labelText: "Email Address", className: "", placeholder: "Enter email address", id: "email", name: "email", defaultValue: user.email, required: !0 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87(FormControl, { as: "input", labelText: "Username", className: "", placeholder: "Enter username", id: "username", name: "username", defaultValue: user.username, required: !0 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87(FormControl, { as: "input", type: "password", labelText: "Password", className: "", placeholder: "Create password", id: "password", name: "password", defaultValue: user.password, required: !0 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87(Select2, { label: "Assign Role", id: "role", name: "role", defaultValue: user.role, required: !0, children: [
        /* @__PURE__ */ jsxDEV87("option", { value: "Role 1", children: "Role 1" }, void 0, !1, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV87("option", { value: "Role 2", children: "Role 2" }, void 0, !1, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV87("option", { value: "Role 3", children: "Role 3" }, void 0, !1, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87(PermissionsFormControl, { permissions: permissions2, defaultPermissions: user.permissions }, void 0, !1, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV87("div", { className: "grid grid-cols-2 sm:flex justify-end gap-3 sm:gap-6 sm:col-span-2 mt-4", children: [
        /* @__PURE__ */ jsxDEV87(Cta_default, { element: "button", type: "reset", className: "px-4 sm:px-8 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }, void 0, !1, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV87(Cta_default, { element: "button", type: "submit", className: "px-4 sm:px-8 py-2 rounded-lg font-medium", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/admin.accounts.$userId.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.accounts.$userId.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.accounts.$userId.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.accounts.$userId.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/admin.accounts._index.tsx
var admin_accounts_index_exports = {};
__export(admin_accounts_index_exports, {
  default: () => Accounts,
  loader: () => loader20
});
import { json as json21 } from "@remix-run/node";
import { useLoaderData as useLoaderData20 } from "@remix-run/react";

// app/components/reusables/ToggleBtn.tsx
import cn9 from "classnames";
import { jsxDEV as jsxDEV88 } from "react/jsx-dev-runtime";
function ToggleBtn({ onClick, on }) {
  return /* @__PURE__ */ jsxDEV88("button", { onClick, className: cn9("rounded-xl p-0.5 w-[34px] flex items-center", {
    "bg-accent justify-end": on,
    "bg-[#DAE0E6]": !on
  }), children: /* @__PURE__ */ jsxDEV88("div", { className: "bg-secondary w-4 h-4 rounded-full" }, void 0, !1, {
    fileName: "app/components/reusables/ToggleBtn.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/reusables/ToggleBtn.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/admin/accounts/AdminUserCard.tsx
import { jsxDEV as jsxDEV89 } from "react/jsx-dev-runtime";
function AdminUserCard({ user, className }) {
  let mainComponent = /* @__PURE__ */ jsxDEV89("span", { className: "", children: /* @__PURE__ */ jsxDEV89(Svg, { src: icons.optionsIcon }, void 0, !1, {
    fileName: "app/components/admin/accounts/AdminUserCard.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/admin/accounts/AdminUserCard.tsx",
    lineNumber: 11,
    columnNumber: 27
  }, this);
  return /* @__PURE__ */ jsxDEV89("article", { className: cn("border rounded-lg shadow-sm p-3 text-xs font-satoshi-medium", className), children: [
    /* @__PURE__ */ jsxDEV89("div", { className: "flex gap-4 mb-3", children: [
      /* @__PURE__ */ jsxDEV89("p", { children: [
        /* @__PURE__ */ jsxDEV89("span", { children: user.role }, void 0, !1, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 17,
          columnNumber: 20
        }, this),
        " | ",
        /* @__PURE__ */ jsxDEV89("span", { children: user.username }, void 0, !1, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 17,
          columnNumber: 47
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/accounts/AdminUserCard.tsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV89(
        Toggletip,
        {
          mainComponent,
          mainContainerClass: "ml-auto",
          childContainerClass: "top-[110%] right-0 bg-tertiary p-3 border border-disabled text-xs flex gap-4",
          children: [
            /* @__PURE__ */ jsxDEV89(RoundCta_default, { icon: icons.editIcon, element: "link", to: `/admin/accounts/${user.id}`, className: "border-[#262626] bg-[#F7F7F8] text-primary" }, void 0, !1, {
              fileName: "app/components/admin/accounts/AdminUserCard.tsx",
              lineNumber: 21,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV89(RoundCta_default, { icon: icons.trashIcon, className: "border-red-500 bg-red-50 text-red-500" }, void 0, !1, {
              fileName: "app/components/admin/accounts/AdminUserCard.tsx",
              lineNumber: 22,
              columnNumber: 21
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 18,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/accounts/AdminUserCard.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV89("div", { className: "flex gap-4 justify-between", children: [
      /* @__PURE__ */ jsxDEV89("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ jsxDEV89("span", { className: "p-1.5 border border-disabled rounded-full", children: /* @__PURE__ */ jsxDEV89("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }, void 0, !1, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 28,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 27,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV89("span", { className: "grid", children: [
          /* @__PURE__ */ jsxDEV89("span", { className: "text-primary line-clamp-1", children: user.full_name }, void 0, !1, {
            fileName: "app/components/admin/accounts/AdminUserCard.tsx",
            lineNumber: 31,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV89("span", { className: "line-clamp-1", children: user.email }, void 0, !1, {
            fileName: "app/components/admin/accounts/AdminUserCard.tsx",
            lineNumber: 32,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 30,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/accounts/AdminUserCard.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV89("span", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ jsxDEV89("span", { className: "max-xs:hidden", children: user.access ? "Enabled" : "Disabled" }, void 0, !1, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 36,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV89(ToggleBtn, { on: user.access }, void 0, !1, {
          fileName: "app/components/admin/accounts/AdminUserCard.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/accounts/AdminUserCard.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/accounts/AdminUserCard.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/accounts/AdminUserCard.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/routes/admin.accounts._index.tsx
import { jsxDEV as jsxDEV90 } from "react/jsx-dev-runtime";
async function loader20({}) {
  return json21({ headings: ["full_name", "email", "username", "role", "access"], tableData: adminUsers });
}
function Accounts() {
  let { headings, tableData } = useLoaderData20();
  return /* @__PURE__ */ jsxDEV90("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV90("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ jsxDEV90("h1", { className: "text-2xl font-black text-primary", children: "Admin Accounts" }, void 0, !1, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV90(Cta_default, { element: "link", to: "add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsxDEV90(Svg, { src: icons.addIcon, width: ".9em" }, void 0, !1, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 25,
          columnNumber: 21
        }, this),
        "Add User"
      ] }, void 0, !0, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV90("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: [
      /* @__PURE__ */ jsxDEV90("p", { className: "font-semibold", children: "Registered Admin Users" }, void 0, !1, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV90(FormControl, { as: "input", type: "search", placeholder: "Search user...", className: "text-sm xs:min-w-[280px]" }, void 0, !1, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV90(Cta_default, { element: "link", to: "add", className: "sm:hidden flex gap-2 items-center justify-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsxDEV90(Svg, { src: icons.addIcon, width: ".9em" }, void 0, !1, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this),
        "Add User"
      ] }, void 0, !0, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV90("div", { className: "sm:hidden grid gap-4 my-6", children: tableData.map((user) => /* @__PURE__ */ jsxDEV90(AdminUserCard, { user }, user.id, !1, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 40,
      columnNumber: 41
    }, this)) }, void 0, !1, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV90("div", { className: "hidden sm:block w-full overflow-x-auto", children: /* @__PURE__ */ jsxDEV90("table", { className: "w-full table-auto", children: [
      /* @__PURE__ */ jsxDEV90("thead", { children: /* @__PURE__ */ jsxDEV90("tr", { className: "border-b border-secondary", children: [
        headings.map((heading) => /* @__PURE__ */ jsxDEV90("th", { className: "text-left capitalize font-satoshi-black p-3", children: heading }, heading, !1, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 49,
          columnNumber: 33
        }, this)),
        /* @__PURE__ */ jsxDEV90("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Actions" }, void 0, !1, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 51,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 47,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV90("tbody", { children: tableData.map((user, index) => /* @__PURE__ */ jsxDEV90("tr", { className: "border-b border-secondary", children: [
        headings.map((heading) => heading === "access" ? /* @__PURE__ */ jsxDEV90("td", { className: "p-3", children: /* @__PURE__ */ jsxDEV90("span", { className: "grid grid-cols-[76px_36px] items-center w-min", children: [
          user[heading] ? "Enabled" : "Disabled",
          /* @__PURE__ */ jsxDEV90(ToggleBtn, { on: user[heading] }, void 0, !1, {
            fileName: "app/routes/admin.accounts._index.tsx",
            lineNumber: 62,
            columnNumber: 49
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 60,
          columnNumber: 45
        }, this) }, heading, !1, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 59,
          columnNumber: 43
        }, this) : /* @__PURE__ */ jsxDEV90("td", { className: "p-3", children: user[heading] }, heading, !1, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 65,
          columnNumber: 43
        }, this)),
        /* @__PURE__ */ jsxDEV90("td", { className: "p-3", children: /* @__PURE__ */ jsxDEV90("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ jsxDEV90(RoundCta_default, { icon: icons.editIcon, element: "link", to: user.id, className: "border-[#262626] bg-[#F7F7F8] text-primary" }, void 0, !1, {
            fileName: "app/routes/admin.accounts._index.tsx",
            lineNumber: 69,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV90(RoundCta_default, { icon: icons.trashIcon, className: "border-red-500 bg-red-50 text-red-500" }, void 0, !1, {
            fileName: "app/routes/admin.accounts._index.tsx",
            lineNumber: 70,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 68,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 67,
          columnNumber: 33
        }, this)
      ] }, index, !0, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 56,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 54,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV90("div", { className: "hidden sm:flex justify-between items-center my-4", children: [
      /* @__PURE__ */ jsxDEV90("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ jsxDEV90("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 }, void 0, !1, {
          fileName: "app/routes/admin.accounts._index.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV90(Pagination, {}, void 0, !1, {
        fileName: "app/routes/admin.accounts._index.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.accounts._index.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.accounts._index.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/routes/admin.contests._index.tsx
var admin_contests_index_exports = {};
__export(admin_contests_index_exports, {
  action: () => action13,
  default: () => Contests2,
  loader: () => loader21
});
import { json as json22 } from "@remix-run/node";
import { useLoaderData as useLoaderData21 } from "@remix-run/react";
import { jsxDEV as jsxDEV91 } from "react/jsx-dev-runtime";
async function loader21({}) {
  let { data: contests2, error } = await contestRepo.getContests();
  if (error)
    throw new Error(error.detail);
  return json22({ contests: contests2 });
}
async function action13({ request }) {
  let formData = await request.formData(), intent = formData.get("intent");
  if (intent === "delete")
    return await deleteContest(formData, request);
  if (intent === "update_stage")
    return await updateStage(formData, request);
  if (intent === "toggle_registration")
    return await toggleRegistration(formData, request);
  if (intent === "migrate")
    return await migrateStage(formData, request);
  console.log(...formData);
  let { headers } = await setToast({ request, toast: `error::This action is not yet supported::${Date.now()}` });
  return json22(null, { headers });
}
function Contests2() {
  let { contests: contests2 } = useLoaderData21();
  return /* @__PURE__ */ jsxDEV91("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV91("section", { className: "flex max-sm:flex-col gap-10 justify-between sm:items-center mb-6 sm:mb-16", children: [
      /* @__PURE__ */ jsxDEV91("h1", { className: "text-2xl font-black text-primary", children: "Contests" }, void 0, !1, {
        fileName: "app/routes/admin.contests._index.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV91(Cta_default, { element: "link", to: "add", className: "flex gap-2 items-center justify-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsxDEV91(Svg, { src: icons.addIcon, width: ".9em" }, void 0, !1, {
          fileName: "app/routes/admin.contests._index.tsx",
          lineNumber: 35,
          columnNumber: 21
        }, this),
        "Create Contest"
      ] }, void 0, !0, {
        fileName: "app/routes/admin.contests._index.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.contests._index.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV91("section", { className: "my-6 sm:my-12", children: /* @__PURE__ */ jsxDEV91(ContestTable, { data: contests2 }, void 0, !1, {
      fileName: "app/routes/admin.contests._index.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.contests._index.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.contests._index.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

// app/routes/admin.tournaments.add.tsx
var admin_tournaments_add_exports = {};
__export(admin_tournaments_add_exports, {
  action: () => action14,
  default: () => AddTournament
});
import { json as json23, redirect as redirect12 } from "@remix-run/node";
import { useNavigate as useNavigate6 } from "@remix-run/react";

// app/components/admin/tournament/CreateTournamentForm.tsx
import { Form as Form11 } from "@remix-run/react";
import { jsxDEV as jsxDEV92 } from "react/jsx-dev-runtime";
function CreateTournamentForm() {
  return /* @__PURE__ */ jsxDEV92(Form11, { className: "max-w-xl mx-auto grid gap-6 sm:gap-12", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsxDEV92("h1", { className: "text-xl xs:text-2xl font-bold text-primary", children: "Create New Tournament" }, void 0, !1, {
      fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV92("div", { className: "grid gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxDEV92(FormControl, { as: "input", labelText: "Tournament Name", placeholder: "Enter tournament name", id: "name", name: "name", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV92(FormControl, { as: "input", labelText: "Tournament Unique ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV92(FormControl, { as: "textarea", rows: 3, labelText: "Tournament Description", placeholder: "Enter tournament description", id: "description", name: "description", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV92(DragnDrop, { labelText: "Tournament Image", name: "image" }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
        lineNumber: 15,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV92("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsxDEV92(Cta_default, { element: "button", type: "submit", className: "px-8 py-2 rounded-lg font-medium max-sm:grow", children: "Create Tournament" }, void 0, !1, {
      fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
      lineNumber: 19,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/tournament/CreateTournamentForm.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/routes/admin.tournaments.add.tsx
import { jsxDEV as jsxDEV93 } from "react/jsx-dev-runtime";
async function action14({ request }) {
  let formData = await request.formData(), payload = prepareTournamentDto(formData), { error } = await tournamentRepo.createTournament(payload);
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error?.detail}::${Date.now()}` });
    return json23(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::A new tournament has been created::${Date.now()}` });
  return redirect12("/admin/tournaments", { headers });
}
function AddTournament() {
  let navigate = useNavigate6();
  return /* @__PURE__ */ jsxDEV93("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV93("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsxDEV93(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, !1, {
        fileName: "app/routes/admin.tournaments.add.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV93("span", { className: "font-black text-primary", children: "Create Tournament" }, void 0, !1, {
        fileName: "app/routes/admin.tournaments.add.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tournaments.add.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV93(CreateTournamentForm, {}, void 0, !1, {
      fileName: "app/routes/admin.tournaments.add.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tournaments.add.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

// app/routes/user.pending-uploads.tsx
var user_pending_uploads_exports = {};
__export(user_pending_uploads_exports, {
  default: () => UserPendingsUpload,
  loader: () => loader22,
  useUserPendingsUploadController: () => useUserPendingsUploadController
});
import { useEffect as useEffect11, useState as useState18 } from "react";
import { Link as Link10, useLoaderData as useLoaderData22 } from "@remix-run/react";
import { json as json24, redirect as redirect13 } from "@remix-run/node";
import { jsxDEV as jsxDEV94 } from "react/jsx-dev-runtime";
async function loader22({ request }) {
  let cookieHeader = request.headers.get("Cookie");
  if (console.log({ cookieHeader }), !cookieHeader)
    return redirect13("/login");
  let { data, error, authRequired } = await userServer.getPendingUploads(cookieHeader);
  return console.log({ data, error }), authRequired ? redirect13("/login") : json24({ data, error, authRequired });
}
var PendingUploadCard = ({
  contestImageUrl,
  contest_name,
  stage,
  full_name,
  contestantId
}) => /* @__PURE__ */ jsxDEV94(Link10, { to: `/user/contestant/${contestantId}`, className: "block transition-shadow", children: /* @__PURE__ */ jsxDEV94("article", { children: [
  /* @__PURE__ */ jsxDEV94(
    "img",
    {
      src: contestImageUrl || no_image_default,
      alt: full_name,
      className: "w-full aspect-[3/4] rounded-lg object-cover"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 55,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV94("div", { className: "pt-4", children: [
    /* @__PURE__ */ jsxDEV94("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: [
      contest_name,
      /* @__PURE__ */ jsxDEV94("br", {}, void 0, !1, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      "stage ",
      stage
    ] }, void 0, !0, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV94("h3", { className: "mt-1 text-lg font-bold text-gray-900", children: full_name }, void 0, !1, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/user.pending-uploads.tsx",
  lineNumber: 54,
  columnNumber: 3
}, this) }, void 0, !1, {
  fileName: "app/routes/user.pending-uploads.tsx",
  lineNumber: 53,
  columnNumber: 3
}, this);
function useUserPendingsUploadController() {
  let { data, error, authRequired } = useLoaderData22(), [pendingUploads, setPendingUploads] = useState18([]);
  return error && toast({
    variant: "destructive",
    title: "An error occured",
    description: error?.detail.toString() ?? "Error occured"
  }), useEffect11(() => {
    if (data) {
      let flattenedUploads = contestantHelper.enrichContestsContestantsData(data);
      setPendingUploads(flattenedUploads), console.log({ flattenedUploads });
    }
  }, [data]), { pendingUploads };
}
function UserPendingsUpload() {
  let { pendingUploads } = useUserPendingsUploadController();
  return /* @__PURE__ */ jsxDEV94("div", { className: "min-h-screen", children: /* @__PURE__ */ jsxDEV94("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8", children: [
    /* @__PURE__ */ jsxDEV94("header", { className: "bg-[#817EFB] overflow-hidden rounded-3xl py-8 md:py-12 lg:py-16 px-5", children: /* @__PURE__ */ jsxDEV94("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxDEV94("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: "Pending uploads" }, void 0, !1, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV94("p", { className: "mt-4 text-base md:text-lg text-purple-100", children: "Please, we are expecting your uploads for the following stages" }, void 0, !1, {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV94("main", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsxDEV94("div", { className: "grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3", children: pendingUploads.map((pendingUpload, idx) => /* @__PURE__ */ jsxDEV94(
      PendingUploadCard,
      {
        contestImageUrl: pendingUpload.contestImage,
        contest_name: pendingUpload.contestName,
        stage: pendingUpload.stage.toString(),
        full_name: pendingUpload.fullName,
        contestantId: pendingUpload.contestantId
      },
      pendingUpload.contestantId,
      !1,
      {
        fileName: "app/routes/user.pending-uploads.tsx",
        lineNumber: 127,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 125,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/user.pending-uploads.tsx",
      lineNumber: 124,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 101,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/user.pending-uploads.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/routes/admin.accounts.add.tsx
var admin_accounts_add_exports = {};
__export(admin_accounts_add_exports, {
  action: () => action15,
  default: () => AddAdminUser,
  loader: () => loader23
});
import { Form as Form12, useLoaderData as useLoaderData23, useNavigate as useNavigate8 } from "@remix-run/react";
import { jsxDEV as jsxDEV95 } from "react/jsx-dev-runtime";
async function loader23({}) {
  return { permissions };
}
async function action15({ request }) {
  let formData = await request.formData();
  return console.log(...formData), console.log(formData.getAll("permission")), null;
}
function AddAdminUser() {
  let { permissions: permissions2 } = useLoaderData23(), navigate = useNavigate8();
  return /* @__PURE__ */ jsxDEV95("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV95("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsxDEV95(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, !1, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV95("h1", { className: "text-2xl font-black text-primary", children: "Add User" }, void 0, !1, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.accounts.add.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV95(Form12, { className: "sm:wrapper grid sm:grid-cols-2 gap-3 sm:gap-6 text-sm", method: "post", children: [
      /* @__PURE__ */ jsxDEV95(FormControl, { as: "input", labelText: "First Name", className: "", placeholder: "Enter first name", id: "firstName", name: "firstName", required: !0 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV95(FormControl, { as: "input", labelText: "Last Name", className: "", placeholder: "Enter last name", id: "lastName", name: "lastName", required: !0 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV95(FormControl, { as: "input", labelText: "Email Address", className: "", placeholder: "Enter email address", id: "email", name: "email", required: !0 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV95(FormControl, { as: "input", labelText: "Username", className: "", placeholder: "Enter username", id: "username", name: "username", required: !0 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV95(FormControl, { as: "input", type: "password", labelText: "Password", className: "", placeholder: "Create password", id: "password", name: "password", required: !0 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV95(Select2, { label: "Assign Role", id: "role", name: "role", required: !0, children: [
        /* @__PURE__ */ jsxDEV95("option", { value: "1", children: "Role 1" }, void 0, !1, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV95("option", { value: "2", children: "Role 2" }, void 0, !1, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV95("option", { value: "3", children: "Role 3" }, void 0, !1, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV95(PermissionsFormControl, { permissions: permissions2 }, void 0, !1, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV95("div", { className: "grid grid-cols-2 sm:flex justify-end gap-3 sm:gap-6 sm:col-span-2 mt-4", children: [
        /* @__PURE__ */ jsxDEV95(Cta_default, { element: "button", type: "reset", className: "px-4 sm:px-8 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }, void 0, !1, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV95(Cta_default, { element: "button", type: "submit", className: "px-4 sm:px-8 py-2 rounded-lg font-medium", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/admin.accounts.add.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin.accounts.add.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.accounts.add.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.accounts.add.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/admin.contests.add.tsx
var admin_contests_add_exports = {};
__export(admin_contests_add_exports, {
  action: () => action16,
  default: () => AddContest,
  loader: () => loader24
});
import { json as json25, redirect as redirect14 } from "@remix-run/node";
import { useLoaderData as useLoaderData24, useNavigate as useNavigate9 } from "@remix-run/react";

// app/components/admin/tournament/CreateContestForm.tsx
import { Form as Form13, useSearchParams as useSearchParams3 } from "@remix-run/react";
import { jsxDEV as jsxDEV96 } from "react/jsx-dev-runtime";
function CreateContestForm({ tournaments }) {
  let [searchParams] = useSearchParams3(), defaultTournament = searchParams.get("tournament") ?? void 0;
  return /* @__PURE__ */ jsxDEV96(Form13, { className: "max-w-[700px] mx-auto my-8 grid gap-6 sm:gap-12 text-sm", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsxDEV96("h1", { className: "text-2xl font-bold text-primary", children: "Contest Details" }, void 0, !1, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV96("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV96(Select2, { name: "tournament", id: "tournament", label: "Tournament", className: "uppercase", defaultValue: defaultTournament, required: !0, children: [
        /* @__PURE__ */ jsxDEV96("option", { value: "", children: "Select a tournament" }, void 0, !1, {
          fileName: "app/components/admin/tournament/CreateContestForm.tsx",
          lineNumber: 19,
          columnNumber: 21
        }, this),
        tournaments.map((tournament) => /* @__PURE__ */ jsxDEV96("option", { value: tournament.id, children: tournament.id }, tournament.id, !1, {
          fileName: "app/components/admin/tournament/CreateContestForm.tsx",
          lineNumber: 21,
          columnNumber: 25
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(FormControl, { as: "input", labelText: "Contest Name", placeholder: "Enter contest name", id: "name", name: "name", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(FormControl, { as: "textarea", rows: 3, labelClassNames: "sm:col-span-2", labelText: "Contest Description", placeholder: "Enter contest description", id: "description", name: "description", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(FormControl, { as: "input", labelText: "Unique Contest ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(FormControl, { as: "input", type: "datetime-local", labelText: "Registration Deadline", id: "reg_deadline", name: "reg_deadline", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(FormControl, { as: "input", type: "datetime-local", labelText: "Contest Start Date", id: "start_date", name: "start_date", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(FormControl, { as: "input", type: "datetime-local", labelText: "Contest End Date", id: "end_date", name: "end_date", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(FormControl, { as: "textarea", rows: 2, labelText: "Contest Prizes", labelClassNames: "sm:col-span-2", placeholder: "Enter contest prizes", id: "prizes", name: "prizes", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(DragnDrop, { className: "sm:col-span-2", name: "image", multiple: !1 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV96(CategoryInputs, {}, void 0, !1, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV96(StageInputs, {}, void 0, !1, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV96("fieldset", { className: "grid gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxDEV96("legend", { className: "text-lg mb-4 font-bold", children: "Submission Guidelines" }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(FormControl, { as: "textarea", rows: 4, labelText: "Submission Requirements", placeholder: "Enter text here...", id: "sub_req", name: "sub_req", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(FormControl, { as: "textarea", rows: 4, labelText: "Terms & Conditions", placeholder: "Enter text here...", id: "tnc", name: "tnc", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV96(FormControl, { as: "textarea", rows: 4, labelText: "Additional Information", placeholder: "Enter text here...", id: "add_info", name: "add_info", required: !0 }, void 0, !1, {
        fileName: "app/components/admin/tournament/CreateContestForm.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV96("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsxDEV96(Cta_default, { element: "button", type: "submit", className: "px-8 py-2 rounded-lg font-medium max-sm:grow", children: "Create Contest" }, void 0, !1, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/tournament/CreateContestForm.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/tournament/CreateContestForm.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/routes/admin.contests.add.tsx
import { jsxDEV as jsxDEV97 } from "react/jsx-dev-runtime";
async function loader24({}) {
  let { data: tournaments = [] } = await tournamentRepo.getTournaments();
  return json25({ tournaments });
}
async function action16({ request }) {
  let payload = prepareContestPayload(await request.formData()), { data, error } = await contestRepo.createContest(payload);
  if (data) {
    let { headers: headers2 } = await setToast({ request, toast: `success::A new contest has been created::${Date.now()}` });
    return redirect14("/admin/contests", { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `error::${error.detail}::${Date.now()}` });
  return json25(null, { headers });
}
function AddContest() {
  let { tournaments } = useLoaderData24(), navigate = useNavigate9();
  return /* @__PURE__ */ jsxDEV97("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV97("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsxDEV97(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }, void 0, !1, {
        fileName: "app/routes/admin.contests.add.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV97("span", { className: "font-black text-primary", children: "Create Contest" }, void 0, !1, {
        fileName: "app/routes/admin.contests.add.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.contests.add.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV97(CreateContestForm, { tournaments }, void 0, !1, {
      fileName: "app/routes/admin.contests.add.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.contests.add.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

// app/routes/_public.winners.tsx
var public_winners_exports = {};
__export(public_winners_exports, {
  default: () => Winners,
  loader: () => loader25
});
import { Link as Link11, useLoaderData as useLoaderData25 } from "@remix-run/react";
import { useEffect as useEffect12, useState as useState19 } from "react";
import { jsxDEV as jsxDEV98 } from "react/jsx-dev-runtime";
async function loader25({ params }) {
  let { data: winners, error } = await contestRepo.getWinners();
  return { winners, error };
}
var WinnerCard = ({
  image_url,
  contest_name,
  remark,
  full_name,
  id
}) => /* @__PURE__ */ jsxDEV98(Link11, { to: `/winner/${id}`, className: "block transition-shadow", children: /* @__PURE__ */ jsxDEV98("article", { children: [
  /* @__PURE__ */ jsxDEV98(
    "img",
    {
      src: image_url,
      alt: full_name,
      className: "w-full aspect-[3/4] rounded-lg object-cover"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV98("div", { className: "pt-4", children: [
    /* @__PURE__ */ jsxDEV98("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: contest_name }, void 0, !1, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV98("h3", { className: "mt-1 text-lg font-bold text-gray-900", children: full_name }, void 0, !1, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/_public.winners.tsx",
  lineNumber: 27,
  columnNumber: 3
}, this) }, void 0, !1, {
  fileName: "app/routes/_public.winners.tsx",
  lineNumber: 26,
  columnNumber: 3
}, this), SearchIcon = (props) => /* @__PURE__ */ jsxDEV98(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...props,
    children: /* @__PURE__ */ jsxDEV98(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 52,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 44,
    columnNumber: 3
  },
  this
);
function Winners() {
  let { winners, error } = useLoaderData25(), [searchWinners, setSearchWinners] = useState19(""), [winnersFiltered, setWinnersFiltered] = useState19(winners ?? []);
  return useEffect12(() => {
    setWinnersFiltered(winners ?? []);
  }, [winners]), useEffect12(() => {
    let updated = (winners ?? []).filter(
      (winner) => winner.full_name.toLowerCase().includes(searchWinners.trim().toLowerCase()) || winner.contest_name.toLowerCase().includes(searchWinners.trim().toLowerCase())
    );
    setWinnersFiltered(updated);
  }, [searchWinners, winners]), error ? /* @__PURE__ */ jsxDEV98("h1", { className: "font-satoshi-bold text-4xl text-center", children: error.detail }, void 0, !1, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV98("div", { className: "min-h-screen", children: /* @__PURE__ */ jsxDEV98("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8", children: [
    /* @__PURE__ */ jsxDEV98("header", { className: "bg-[#817EFB] overflow-hidden rounded-3xl py-8 md:py-12 lg:py-16 px-5", children: /* @__PURE__ */ jsxDEV98("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxDEV98("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: "Meet Our Talented Contest Winners" }, void 0, !1, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV98("p", { className: "mt-4 text-base md:text-lg text-purple-100", children: "A Glimpse of the Extraordinary Creations That Stole the Show" }, void 0, !1, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV98("div", { className: "mt-8 relative max-w-lg mx-auto", children: [
        /* @__PURE__ */ jsxDEV98(
          "input",
          {
            type: "text",
            placeholder: "Search by keyword or name",
            value: searchWinners,
            onChange: (e) => setSearchWinners(e.target.value),
            className: "w-full rounded-2xl py-3 px-6 pr-12 text-gray-900 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_public.winners.tsx",
            lineNumber: 97,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV98("div", { className: "absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-auto", children: /* @__PURE__ */ jsxDEV98(SearchIcon, { className: "h-5 w-5 text-gray-400" }, void 0, !1, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 105,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV98("main", { className: "py-12 md:py-16", children: [
      /* @__PURE__ */ jsxDEV98("div", { className: "grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3", children: winnersFiltered.map((winner, idx) => /* @__PURE__ */ jsxDEV98(
        WinnerCard,
        {
          image_url: winner.image_url,
          contest_name: winner.contest_name,
          remark: winner.remark,
          full_name: winner.full_name,
          id: winner._id
        },
        winner.contestant_code || idx,
        !1,
        {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 113,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV98("div", { className: "mt-12 md:mt-16 text-center", children: /* @__PURE__ */ jsxDEV98(
        "button",
        {
          type: "button",
          className: "inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors",
          children: "See more"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_public.winners.tsx",
          lineNumber: 124,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_public.winners.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.winners.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 87,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.winners.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

// app/routes/_public._index.tsx
var public_index_exports = {};
__export(public_index_exports, {
  default: () => LandingPage
});

// app/components/public/landingpage/ContactForm.tsx
import { jsxDEV as jsxDEV99 } from "react/jsx-dev-runtime";
function ContactForm() {
  return /* @__PURE__ */ jsxDEV99("form", { className: "wrapper flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxDEV99("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV99(
        FormControl,
        {
          as: "input",
          labelText: "Full Name",
          id: "fullName",
          name: "fullName",
          placeholder: "Enter your full name"
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/landingpage/ContactForm.tsx",
          lineNumber: 8,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV99(
        FormControl,
        {
          as: "input",
          labelText: "Email Address",
          id: "email",
          name: "email",
          placeholder: "Enter your email address"
        },
        void 0,
        !1,
        {
          fileName: "app/components/public/landingpage/ContactForm.tsx",
          lineNumber: 11,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/public/landingpage/ContactForm.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV99(
      FormControl,
      {
        as: "input",
        labelText: "Subject",
        id: "subject",
        name: "subject",
        placeholder: "Enter subject"
      },
      void 0,
      !1,
      {
        fileName: "app/components/public/landingpage/ContactForm.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV99(
      FormControl,
      {
        as: "textarea",
        labelText: "Message",
        id: "message",
        name: "message",
        placeholder: "Enter your message here..."
      },
      void 0,
      !1,
      {
        fileName: "app/components/public/landingpage/ContactForm.tsx",
        lineNumber: 18,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV99(Button, { element: "button", className: "md:self-end", children: "Submit" }, void 0, !1, {
      fileName: "app/components/public/landingpage/ContactForm.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/landingpage/ContactForm.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/components/public/landingpage/WhyCard.tsx
import { jsxDEV as jsxDEV100 } from "react/jsx-dev-runtime";
function WhyCard(props) {
  return /* @__PURE__ */ jsxDEV100("article", { className: `block p-8 text-white rounded-3xl ${props.backgroundColor}`, children: [
    /* @__PURE__ */ jsxDEV100("div", { className: "p-6 mb-8 rounded-3xl bg-[#FFFFFF29] w-fit", children: /* @__PURE__ */ jsxDEV100(Svg, { src: props.icon, width: 24, height: 24 }, void 0, !1, {
      fileName: "app/components/public/landingpage/WhyCard.tsx",
      lineNumber: 7,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/public/landingpage/WhyCard.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV100("h3", { className: "mb-4 text-2xl font-black", children: props.title }, void 0, !1, {
      fileName: "app/components/public/landingpage/WhyCard.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV100("p", { className: "font-bold", children: props.subtext }, void 0, !1, {
      fileName: "app/components/public/landingpage/WhyCard.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/landingpage/WhyCard.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/lib/data/landingPage.data.ts
var whyUsData = [
  {
    icon: icons.noteIcon,
    bg: "bg-[#12457A]",
    title: "Free Registration",
    subtext: "Unlock the thrill of creative expression by registering for our exclusive yearly and monthly contests."
  },
  {
    icon: icons.galleryIcon,
    bg: "bg-[#EA5A47]",
    title: "Monthly Campaigns",
    subtext: "Successfully organized two annual and twenty-five monthly campaigns."
  },
  {
    icon: icons.cakeIcon,
    bg: "bg-[#CE8800]",
    title: "Memorable Birthdays",
    subtext: "To make kids' birthdays unique, memorable, exciting and entertaining."
  },
  {
    icon: icons.trophyIcon,
    bg: "bg-[#09AD8A]",
    title: "Exciting Contests",
    subtext: "To be entertaining, transparent, innovative, creative, exciting, effective and reliable."
  }
];

// app/components/public/landingpage/SponsorsSlider.tsx
import { jsxDEV as jsxDEV101 } from "react/jsx-dev-runtime";
function SponsorsSlider() {
  return /* @__PURE__ */ jsxDEV101(AutoplayCarousel, { children: /* @__PURE__ */ jsxDEV101(CarouselItem, { children: /* @__PURE__ */ jsxDEV101("img", { src: sponsor_logo_default, alt: "Zendesk" }, void 0, !1, {
    fileName: "app/components/public/landingpage/SponsorsSlider.tsx",
    lineNumber: 9,
    columnNumber: 27
  }, this) }, void 0, !1, {
    fileName: "app/components/public/landingpage/SponsorsSlider.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/public/landingpage/SponsorsSlider.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/routes/_public._index.tsx
import { jsxDEV as jsxDEV102 } from "react/jsx-dev-runtime";
function LandingPage() {
  return /* @__PURE__ */ jsxDEV102("main", { className: "snap-y", children: [
    /* @__PURE__ */ jsxDEV102("section", { className: "wrapper flex flex-col md:flex-row gap-16 xl:gap-24 md:items-center py-8 md:py-16", children: [
      /* @__PURE__ */ jsxDEV102("div", { className: "flex flex-col gap-6 sm:gap-8", children: [
        /* @__PURE__ */ jsxDEV102("h1", { className: "font-black text-4xl sm:text-5xl xl:text-[64px] leading-tight sm:leading-snug whitespace-nowrap", children: [
          "Capturing Moments",
          /* @__PURE__ */ jsxDEV102("br", {}, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 22,
            columnNumber: 25
          }, this),
          "Creating ",
          /* @__PURE__ */ jsxDEV102("span", { className: "text-accent", children: "Memories." }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 23,
            columnNumber: 34
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV102("p", { className: "text-xl", children: "Join our monthly/yearly photo contests open to kids, both male and female aged 0-14 years and discover a world of imagination and inspiration." }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 25,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV102("div", { className: "flex gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxDEV102(Button, { element: "button", className: "w-full sm:w-auto", children: "Join Now" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 27,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV102(Button, { element: "a", href: "/contests", className: "w-full sm:w-auto", variant: "outline", children: "Explore Contests" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 28,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 26,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV102("div", { className: "grid grid-cols-3 gap-8 xl:gap-9 w-full", children: [
        /* @__PURE__ */ jsxDEV102("div", { className: "flex flex-col gap-8 xl:gap-9", children: [
          /* @__PURE__ */ jsxDEV102("img", { className: "aspect-3/7 object-cover rounded-full outline-dashed outline-offset-4 w-full", src: hero_1_default, alt: "kid smiling" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 33,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV102("img", { className: "aspect-3/4 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_2_default, alt: "kid smiling" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 34,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV102("div", { className: "flex flex-col gap-8 xl:gap-9 justify-center", children: [
          /* @__PURE__ */ jsxDEV102("img", { className: "aspect-square rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_3_default, alt: "kid smiling" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 37,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV102("img", { className: "aspect-3/7 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_4_default, alt: "kid smiling" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 36,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV102("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsxDEV102("img", { className: "aspect-3/7 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_5_default, alt: "kid smiling" }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 41,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV102("section", { className: "wrapper py-8 md:py-16", children: [
      /* @__PURE__ */ jsxDEV102("h2", { className: "font-bold text-xl mb-4", children: "Who supports us" }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV102(SponsorsSlider, {}, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV102("section", { className: "py-8 md:py-16", children: /* @__PURE__ */ jsxDEV102("div", { className: "sm:wrapper bg-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between items-center gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ jsxDEV102("div", { className: "wrapper", children: [
        /* @__PURE__ */ jsxDEV102("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxDEV102("p", { className: "font-black text-xl", children: "Our Vision" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 55,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV102("img", { className: "object-cover object-center", src: underline_default, alt: "underline", width: 100 }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 56,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 54,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV102("h2", { className: "text-2xl sm:text-3xl font-black mb-6 leading-snug", children: [
          "Crafting ",
          /* @__PURE__ */ jsxDEV102("span", { className: "text-accent", children: "Unforgettable" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 59,
            columnNumber: 38
          }, this),
          " Moments for Every Child's Special Day."
        ] }, void 0, !0, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV102("p", { className: "font-medium", children: "To create uniquely memorable and exciting kid's birthdays, we strive to be entertaining, transparent, innovative, creative, exciting, efficient, and reliable in every aspect of our service." }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 61,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV102("div", { className: "wrapper", children: /* @__PURE__ */ jsxDEV102("img", { className: "object-cover object-center w-full", src: birthday_present_default, alt: "wrapped gift" }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 64,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV102("section", { className: "py-8 md:py-16 wrapper flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV102("div", { className: "mb-6 sm:mb-16", children: [
        /* @__PURE__ */ jsxDEV102("h2", { className: "font-satoshi-black text-2xl", children: "Why KOTMY?" }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV102("img", { className: "object-fill w-[159px] h-5", src: underline_default, alt: "underline" }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 85,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV102("div", { className: "grid gap-6 lg:gap-12 sm:grid-cols-2 max-w-5xl", children: whyUsData.map((item) => /* @__PURE__ */ jsxDEV102(WhyCard, { backgroundColor: item.bg, icon: item.icon, title: item.title, subtext: item.subtext }, item.title, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 89,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV102("section", { className: "py-8 md:py-16", children: /* @__PURE__ */ jsxDEV102(ContestantSlider, { contestants: [{ id: "sdjc", image: hero_1_default }, { id: "adcn", image: hero_2_default }, { id: "kjsd", image: hero_3_default }] }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 95,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV102("section", { className: "pt-4 sm:py-8 md:py-16", children: /* @__PURE__ */ jsxDEV102("div", { className: "sm:wrapper bg-[#817EFB] bg-pattern bg-cover bg-left text-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between items-center gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ jsxDEV102("div", { className: "wrapper", children: [
        /* @__PURE__ */ jsxDEV102("h2", { className: "text-2xl sm:text-[40px] font-satoshi-black mb-6 leading-snug", children: "Refer A Friend And Earn Rewards" }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 101,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV102("p", { className: "font-satoshi-medium mb-8", children: "Lorem ipsum dolor sit amet consectetur. Velit egestas auctor in amet dis sed sit egestas. Viverra morbi eget consectetur accumsan integer. Mi et etiam amet est egestas tellus quis." }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 104,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV102("span", { className: "inline-block bg-[#E7E7E7] text-primary py-4 px-8 text-lg rounded-md font-black whitespace-nowrap", children: "COMING SOON" }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 110,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 100,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV102("div", { className: "wrapper bg-[#E7E7E7] rounded-3xl w-full aspect-square" }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 112,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 99,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 98,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV102("section", { id: "contact", className: "sm:py-8 md:py-16 sm:-scroll-m-4 md:-scroll-m-8 snap-start", children: /* @__PURE__ */ jsxDEV102("div", { className: "sm:wrapper bg-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ jsxDEV102("div", { className: "wrapper flex flex-col gap-12", children: [
        /* @__PURE__ */ jsxDEV102("h2", { className: "text-2xl sm:text-[40px] font-satoshi-black leading-tight", children: "Do you want to know more about the way we work?" }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 120,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV102("div", { className: "flex flex-col lg:flex-row gap-6", children: [
          /* @__PURE__ */ jsxDEV102("p", { children: [
            /* @__PURE__ */ jsxDEV102("span", { className: "block font-satoshi-black mb-3", children: "Phone Us" }, void 0, !1, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 125,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV102("span", { className: "font-satoshi-medium whitespace-nowrap", children: "+234 703 515 9093" }, void 0, !1, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 126,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 124,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV102("p", { children: [
            /* @__PURE__ */ jsxDEV102("span", { className: "block font-satoshi-black mb-3", children: "Email Us" }, void 0, !1, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 129,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV102("span", { className: "font-satoshi-medium", children: "kidmonthyear@gmail.com" }, void 0, !1, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 130,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 128,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 123,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV102("div", { children: [
          /* @__PURE__ */ jsxDEV102("span", { className: "block font-satoshi-black mb-3", children: "Follow Us" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 134,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV102("span", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxDEV102(Svg, { src: icons.twitterXIcon, width: "24px", height: "24px" }, void 0, !1, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 136,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV102(Svg, { src: icons.instagramIcon, width: "24px", height: "24px" }, void 0, !1, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 137,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV102(Svg, { src: icons.facebookIcon, width: "24px", height: "24px" }, void 0, !1, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 138,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV102(Svg, { src: icons.youtubeIcon, width: "24px", height: "24px" }, void 0, !1, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 139,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 135,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 133,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 119,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV102(ContactForm, {}, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 143,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 118,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 117,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/routes/admin.overview.tsx
var admin_overview_exports = {};
__export(admin_overview_exports, {
  default: () => Home,
  loader: () => loader26
});
import { json as json26 } from "@remix-run/node";
import { useLoaderData as useLoaderData26 } from "@remix-run/react";

// app/components/admin/AdminSummary.tsx
import { jsxDEV as jsxDEV103 } from "react/jsx-dev-runtime";
function AdminSummary({ users }) {
  return /* @__PURE__ */ jsxDEV103("div", { className: "border rounded-xl overflow-hidden basis-3/5 max-w-xl", children: [
    /* @__PURE__ */ jsxDEV103("div", { className: "flex gap-2 xs:gap-4 justify-between items-center py-3 px-4 border-b", children: [
      /* @__PURE__ */ jsxDEV103("h3", { className: "text-primary font-bold max-sm:text-xs", children: "Admin Accounts" }, void 0, !1, {
        fileName: "app/components/admin/AdminSummary.tsx",
        lineNumber: 9,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV103(
        Cta_default,
        {
          element: "link",
          to: "/admin/accounts",
          variant: "outline",
          className: "border-disabled rounded-lg text-inherit py-1.5 px-3 text-xs font-medium",
          children: "See All Users"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminSummary.tsx",
          lineNumber: 10,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/AdminSummary.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV103("div", { className: "px-4 grid", children: users.slice(0, 5).map((user) => /* @__PURE__ */ jsxDEV103(AdminUserCard, { user, className: "border-0 shadow-none rounded-none border-b last:border-b-0" }, user.id, !1, {
      fileName: "app/components/admin/AdminSummary.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/components/admin/AdminSummary.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AdminSummary.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/components/admin/ArticleSummary.tsx
import { jsxDEV as jsxDEV104 } from "react/jsx-dev-runtime";
function ArticleSummary() {
  return /* @__PURE__ */ jsxDEV104("div", { className: "basis-1/5 p-3" }, void 0, !1, {
    fileName: "app/components/admin/ArticleSummary.tsx",
    lineNumber: 2,
    columnNumber: 13
  }, this);
}

// app/components/admin/Aggregator.tsx
import { jsxDEV as jsxDEV105 } from "react/jsx-dev-runtime";
function Aggregator({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV105("div", { className: "@container", children: /* @__PURE__ */ jsxDEV105(
    "aside",
    {
      ...props,
      className: cn(
        "grid @sm:grid-cols-2 @xl:grid-cols-[repeat(auto-fit,_minmax(200px,auto))]",
        "gap-3 justify-items-center mx-auto p-3 border rounded-md bg-[#F6F8FA] text-sm overflow-hidden",
        className
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/admin/Aggregator.tsx",
      lineNumber: 8,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/admin/Aggregator.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
function AggregatorItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV105("div", { className: cn("flex gap-3 items-center text-nowrap min-w-48", className), ...props, children }, void 0, !1, {
    fileName: "app/components/admin/Aggregator.tsx",
    lineNumber: 20,
    columnNumber: 12
  }, this);
}

// app/components/admin/ContestSummary.tsx
import { jsxDEV as jsxDEV106 } from "react/jsx-dev-runtime";
function ContestSummary({ contests: contests2 }) {
  let ongoingCount = contests2.filter((contest) => contest.status === "ongoing").length, yetToStartCount = contests2.filter((contest) => contest.status === "yet_to_start").length, closedCount = contests2.filter((contest) => ["completed", "registering"].includes(contest.status)).length;
  return /* @__PURE__ */ jsxDEV106("div", { className: "border rounded-xl overflow-hidden grow", children: [
    /* @__PURE__ */ jsxDEV106("div", { className: "flex gap-2 xs:gap-4 justify-between items-center py-3 px-4 border-b", children: [
      /* @__PURE__ */ jsxDEV106("h3", { className: "text-primary font-bold max-sm:text-xs", children: "Contests" }, void 0, !1, {
        fileName: "app/components/admin/ContestSummary.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV106(
        Cta_default,
        {
          element: "link",
          to: "/admin/contests",
          variant: "outline",
          className: "border-disabled rounded-lg text-inherit py-1.5 px-3 text-xs font-medium",
          children: "See Contests"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/ContestSummary.tsx",
          lineNumber: 15,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/ContestSummary.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV106("div", { className: "px-4", children: [
      /* @__PURE__ */ jsxDEV106(Aggregator, { className: "my-4", children: [
        /* @__PURE__ */ jsxDEV106(AggregatorItem, { children: [
          /* @__PURE__ */ jsxDEV106("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsxDEV106(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, !1, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 24,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 23,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV106("span", { className: "grid", children: [
            /* @__PURE__ */ jsxDEV106("span", { className: "text-primary font-satoshi-black", children: contests2.length }, void 0, !1, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 27,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV106("span", { className: "", children: "Contests Created" }, void 0, !1, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 28,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/ContestSummary.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV106(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxDEV106("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsxDEV106(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, !1, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 33,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 32,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV106("span", { className: "grid", children: [
            /* @__PURE__ */ jsxDEV106("span", { className: "text-primary font-satoshi-black", children: ongoingCount }, void 0, !1, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 36,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV106("span", { className: "", children: "Ongoing Contests" }, void 0, !1, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 37,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 35,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/ContestSummary.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV106(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxDEV106("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsxDEV106(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, !1, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 42,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 41,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV106("span", { className: "grid", children: [
            /* @__PURE__ */ jsxDEV106("span", { className: "text-primary font-satoshi-black", children: yetToStartCount }, void 0, !1, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 45,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV106("span", { className: "", children: "Yet To Start Contests" }, void 0, !1, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 46,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 44,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/ContestSummary.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV106(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxDEV106("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsxDEV106(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, !1, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 51,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 50,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV106("span", { className: "grid", children: [
            /* @__PURE__ */ jsxDEV106("span", { className: "text-primary font-satoshi-black", children: closedCount }, void 0, !1, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 54,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV106("span", { className: "", children: "Closed Contests" }, void 0, !1, {
              fileName: "app/components/admin/ContestSummary.tsx",
              lineNumber: 55,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/ContestSummary.tsx",
            lineNumber: 53,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/ContestSummary.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/ContestSummary.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV106(ContestTable, { data: contests2.slice(0, 5) }, void 0, !1, {
        fileName: "app/components/admin/ContestSummary.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/ContestSummary.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/ContestSummary.tsx",
    lineNumber: 12,
    columnNumber: 12
  }, this);
}

// app/components/admin/TournamentSummary.tsx
import { jsxDEV as jsxDEV107 } from "react/jsx-dev-runtime";
function TournamentSummary({ tournaments }) {
  let numberOfContests = tournaments.reduce((total, tournament) => total + tournament.contests.length, 0);
  return /* @__PURE__ */ jsxDEV107("div", { className: "border rounded-xl overflow-hidden grow max-w-2xl", children: [
    /* @__PURE__ */ jsxDEV107("div", { className: "flex gap-2 xs:gap-4 justify-between items-center py-3 px-4 border-b", children: [
      /* @__PURE__ */ jsxDEV107("h3", { className: "text-primary font-bold max-sm:text-xs", children: "Tournaments" }, void 0, !1, {
        fileName: "app/components/admin/TournamentSummary.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV107(
        Cta_default,
        {
          element: "link",
          to: "/admin/tournaments",
          variant: "outline",
          className: "border-disabled rounded-lg text-inherit py-1.5 px-3 text-xs font-medium",
          children: "See Tournaments"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/TournamentSummary.tsx",
          lineNumber: 13,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/TournamentSummary.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV107("div", { className: "px-4 grid", children: [
      /* @__PURE__ */ jsxDEV107(Aggregator, { className: "mt-4", children: [
        /* @__PURE__ */ jsxDEV107(AggregatorItem, { children: [
          /* @__PURE__ */ jsxDEV107("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsxDEV107(Svg, { src: icons.adminTournamentIcon, className: "text-primary" }, void 0, !1, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 22,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 21,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV107("span", { className: "grid", children: [
            /* @__PURE__ */ jsxDEV107("span", { className: "text-primary font-satoshi-black", children: tournaments.length }, void 0, !1, {
              fileName: "app/components/admin/TournamentSummary.tsx",
              lineNumber: 25,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV107("span", { className: "", children: "Tournaments Created" }, void 0, !1, {
              fileName: "app/components/admin/TournamentSummary.tsx",
              lineNumber: 26,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 24,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/TournamentSummary.tsx",
          lineNumber: 20,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV107(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxDEV107("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsxDEV107(Svg, { src: icons.adminContestIcon, className: "text-primary" }, void 0, !1, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 31,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 30,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV107("span", { className: "grid", children: [
            /* @__PURE__ */ jsxDEV107("span", { className: "text-primary font-satoshi-black", children: numberOfContests }, void 0, !1, {
              fileName: "app/components/admin/TournamentSummary.tsx",
              lineNumber: 34,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV107("span", { className: "", children: "Contests Created" }, void 0, !1, {
              fileName: "app/components/admin/TournamentSummary.tsx",
              lineNumber: 35,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/TournamentSummary.tsx",
            lineNumber: 33,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/TournamentSummary.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/TournamentSummary.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this),
      tournaments.slice(0, 2).map((tournament) => /* @__PURE__ */ jsxDEV107(TournamentCard, { tournament, className: "border-0 shadow-none bg-transparent rounded-none border-b last:border-b-0" }, tournament.id, !1, {
        fileName: "app/components/admin/TournamentSummary.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this))
    ] }, void 0, !0, {
      fileName: "app/components/admin/TournamentSummary.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/TournamentSummary.tsx",
    lineNumber: 10,
    columnNumber: 12
  }, this);
}

// app/components/admin/TransactionSummary.tsx
import { useState as useState20 } from "react";

// app/components/reusables/Doughnut.tsx
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { jsxDEV as jsxDEV108 } from "react/jsx-dev-runtime";
ChartJS.register(ArcElement, Tooltip, Legend);
var DoughnutChart = (props) => /* @__PURE__ */ jsxDEV108(Doughnut, { ...props }, void 0, !1, {
  fileName: "app/components/reusables/Doughnut.tsx",
  lineNumber: 8,
  columnNumber: 12
}, this), Doughnut_default = DoughnutChart;

// app/components/admin/TransactionSummary.tsx
import { jsxDEV as jsxDEV109 } from "react/jsx-dev-runtime";
var numberFormatterOptions4 = { style: "currency", currency: "NGN", currencyDisplay: "code" };
function TransactionSummary({ data }) {
  let years = Object.keys(data).reverse(), [selectedYear, setSelectedYear] = useState20(years[0]), yearData = data[selectedYear], colors = ["#6246EA", "#817EFB", "#A3A8FE"], doughnutData = {
    datasets: [{
      label: "Income",
      data: Object.values(yearData),
      backgroundColor: colors,
      hoverOffset: 10
    }]
  };
  return /* @__PURE__ */ jsxDEV109("div", { className: "border rounded-xl overflow-hidden basis-1/3 grow max-w-xl", children: [
    /* @__PURE__ */ jsxDEV109("div", { className: "flex gap-2 xs:gap-4 justify-between items-center py-3 px-4 border-b", children: [
      /* @__PURE__ */ jsxDEV109("h3", { className: "text-primary font-bold max-sm:text-xs", children: "Transactions" }, void 0, !1, {
        fileName: "app/components/admin/TransactionSummary.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV109(Select, { onValueChange: (year) => setSelectedYear(year), children: [
        /* @__PURE__ */ jsxDEV109(SelectTrigger, { className: "w-max", children: /* @__PURE__ */ jsxDEV109(SelectValue, { placeholder: years[0], defaultValue: years[0] }, void 0, !1, {
          fileName: "app/components/admin/TransactionSummary.tsx",
          lineNumber: 31,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/TransactionSummary.tsx",
          lineNumber: 30,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV109(SelectContent, { children: years.map((year) => /* @__PURE__ */ jsxDEV109(SelectItem, { value: year, children: year }, year, !1, {
          fileName: "app/components/admin/TransactionSummary.tsx",
          lineNumber: 34,
          columnNumber: 45
        }, this)) }, void 0, !1, {
          fileName: "app/components/admin/TransactionSummary.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/TransactionSummary.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/TransactionSummary.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV109("div", { className: "p-4 grid max-sm:text-sm", children: [
      /* @__PURE__ */ jsxDEV109(Doughnut_default, { data: doughnutData, className: "max-w-sm max-h-[384px] place-self-center" }, void 0, !1, {
        fileName: "app/components/admin/TransactionSummary.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      Object.entries(yearData).map(([transaction, amount], idx) => /* @__PURE__ */ jsxDEV109("span", { className: "flex justify-between py-3 border-b last:border-b-0 text-primary font-medium", children: [
        /* @__PURE__ */ jsxDEV109("span", { className: "flex items-center gap-2 capitalize", children: [
          /* @__PURE__ */ jsxDEV109("div", { className: cn("w-3 h-3 rounded-[4px] bg-[#A3A8FE]", `bg-[${colors[idx]}]`) }, void 0, !1, {
            fileName: "app/components/admin/TransactionSummary.tsx",
            lineNumber: 43,
            columnNumber: 29
          }, this),
          transaction
        ] }, void 0, !0, {
          fileName: "app/components/admin/TransactionSummary.tsx",
          lineNumber: 42,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV109("span", { children: numberFormatter(amount, numberFormatterOptions4) }, void 0, !1, {
          fileName: "app/components/admin/TransactionSummary.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this)
      ] }, transaction, !0, {
        fileName: "app/components/admin/TransactionSummary.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this)),
      /* @__PURE__ */ jsxDEV109("span", { className: "flex justify-between py-3 border-b last:border-b-0 text-primary font-bold", children: [
        /* @__PURE__ */ jsxDEV109("span", { className: "flex items-center gap-2 uppercase", children: "TOTAL" }, void 0, !1, {
          fileName: "app/components/admin/TransactionSummary.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV109("span", { children: numberFormatter(Object.values(yearData).reduce((sum, curr) => sum + curr, 0), numberFormatterOptions4) }, void 0, !1, {
          fileName: "app/components/admin/TransactionSummary.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/TransactionSummary.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/TransactionSummary.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/TransactionSummary.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/routes/admin.overview.tsx
import { jsxDEV as jsxDEV110 } from "react/jsx-dev-runtime";
async function loader26({}) {
  let { data: contests2 } = await contestRepo.getContests(), { data: tournaments } = await tournamentRepo.getTournaments();
  return json26({
    adminUsers,
    tournaments: tournaments ?? [],
    contests: contests2 ?? [],
    transactions: {
      2024: { product: 23e3, registration: 1e4, tally: 42094 },
      2023: { product: 2e4, registration: 9e3, tally: 30500 },
      2022: { product: 17e3, registration: 2e3, tally: 12e3 }
    }
  });
}
function Home() {
  let { adminUsers: adminUsers2, tournaments, contests: contests2, transactions } = useLoaderData26();
  return /* @__PURE__ */ jsxDEV110("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxDEV110("h1", { className: "grid font-medium text-primary", children: [
      /* @__PURE__ */ jsxDEV110("span", { className: "text-xl sm:text-2xl font-satoshi-bold line-clamp-1", children: "Hello Admin" }, void 0, !1, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV110("span", { className: "line-clamp-1", children: "Welcome back to KOTMY \u{1F44B}" }, void 0, !1, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.overview.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV110("section", { className: "my-6 grid sm:flex flex-wrap items-start gap-6", children: [
      /* @__PURE__ */ jsxDEV110(AdminSummary, { users: adminUsers2 }, void 0, !1, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV110(ArticleSummary, {}, void 0, !1, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV110(TournamentSummary, { tournaments }, void 0, !1, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV110(TransactionSummary, { data: transactions }, void 0, !1, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV110(ContestSummary, { contests: contests2 }, void 0, !1, {
        fileName: "app/routes/admin.overview.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.overview.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.overview.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

// app/routes/admin._index.tsx
var admin_index_exports = {};
__export(admin_index_exports, {
  loader: () => loader27
});
import { redirect as redirect15 } from "@remix-run/node";
function loader27() {
  return redirect15("/admin/overview");
}

// app/routes/_public.tsx
var public_exports = {};
__export(public_exports, {
  default: () => Index,
  meta: () => meta
});
import { Outlet as Outlet3 } from "@remix-run/react";

// app/components/public/Footer.tsx
import { Link as Link12 } from "@remix-run/react";
import { jsxDEV as jsxDEV111 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV111("footer", { className: "border-t border-primary py-8", children: /* @__PURE__ */ jsxDEV111("div", { className: "wrapper flex flex-wrap gap-6 gap-x-12 justify-between font-bold", children: [
    /* @__PURE__ */ jsxDEV111("nav", { className: "flex gap-6 items-center", children: /* @__PURE__ */ jsxDEV111("ul", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsxDEV111("li", { children: /* @__PURE__ */ jsxDEV111(Link12, { to: "/contests", children: "Contests" }, void 0, !1, {
        fileName: "app/components/public/Footer.tsx",
        lineNumber: 9,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/public/Footer.tsx",
        lineNumber: 9,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV111("li", { children: /* @__PURE__ */ jsxDEV111(Link12, { to: "/#contact", children: "Contact" }, void 0, !1, {
        fileName: "app/components/public/Footer.tsx",
        lineNumber: 10,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/public/Footer.tsx",
        lineNumber: 10,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV111("li", { children: /* @__PURE__ */ jsxDEV111(Link12, { to: "/winners", children: "Winners" }, void 0, !1, {
        fileName: "app/components/public/Footer.tsx",
        lineNumber: 11,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/public/Footer.tsx",
        lineNumber: 11,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV111("li", { children: /* @__PURE__ */ jsxDEV111(Link12, { to: "/results", children: "Results" }, void 0, !1, {
        fileName: "app/components/public/Footer.tsx",
        lineNumber: 12,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/public/Footer.tsx",
        lineNumber: 12,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/Footer.tsx",
      lineNumber: 8,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/public/Footer.tsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV111("span", { children: "Privacy Policy" }, void 0, !1, {
      fileName: "app/components/public/Footer.tsx",
      lineNumber: 15,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV111("span", { className: "md:order-first", children: "KOTMY \xA9 2023  All rights reserved" }, void 0, !1, {
      fileName: "app/components/public/Footer.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/Footer.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/public/Footer.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/public/Navigation.tsx
import { useState as useState21 } from "react";
import { Link as Link14, NavLink as NavLink2, useLocation as useLocation4 } from "@remix-run/react";

// app/components/public/MobileNavigation.tsx
import { Link as Link13, NavLink, useLocation as useLocation3 } from "@remix-run/react";
import { useRef as useRef8 } from "react";
import { jsxDEV as jsxDEV112 } from "react/jsx-dev-runtime";
function MobileNavigation({ show, onClose }) {
  let { pathname } = useLocation3(), mobileNav = useRef8(null);
  return mobileNav.current?.style.setProperty("--left", "0%"), /* @__PURE__ */ jsxDEV112(
    "div",
    {
      "data-show": show,
      ref: mobileNav,
      className: "sm:hidden fixed top-0 left-0 bg-primary w-full h-dvh z-10 flex flex-col justify-between mobileNav data-[show=true]:animate-slide-in-left data-[show=false]:left-full data-[show=false]:animate-slide-out-left",
      children: [
        /* @__PURE__ */ jsxDEV112("header", { className: "wrapper py-5", children: [
          /* @__PURE__ */ jsxDEV112("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxDEV112(Link13, { to: "/", onClick: onClose, "aria-label": "home", children: /* @__PURE__ */ jsxDEV112(Svg, { src: icons.logoIcon, width: 37, height: 36 }, void 0, !1, {
              fileName: "app/components/public/MobileNavigation.tsx",
              lineNumber: 15,
              columnNumber: 68
            }, this) }, void 0, !1, {
              fileName: "app/components/public/MobileNavigation.tsx",
              lineNumber: 15,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV112("button", { onClick: onClose, title: "close menu", className: "flex gap-1 items-center rounded p-2 hover:outline outline-primary", children: /* @__PURE__ */ jsxDEV112(Svg, { src: icons.closeIcon, width: 24, height: 24, className: "sm:hidden" }, void 0, !1, {
              fileName: "app/components/public/MobileNavigation.tsx",
              lineNumber: 17,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/public/MobileNavigation.tsx",
              lineNumber: 16,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/MobileNavigation.tsx",
            lineNumber: 14,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV112("nav", { className: "", children: [
            /* @__PURE__ */ jsxDEV112("ul", { className: "grid gap-6 my-12 text-xl font-bold", children: [
              /* @__PURE__ */ jsxDEV112("li", { children: /* @__PURE__ */ jsxDEV112(NavLink, { onClick: onClose, to: "/contests", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
                pathname.includes("/contests") ? /* @__PURE__ */ jsxDEV112(Svg, { src: icons.activeDotIcon, width: ".5em" }, void 0, !1, {
                  fileName: "app/components/public/MobileNavigation.tsx",
                  lineNumber: 23,
                  columnNumber: 59
                }, this) : null,
                " Contests"
              ] }, void 0, !0, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 22,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 22,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV112("li", { children: /* @__PURE__ */ jsxDEV112(NavLink, { onClick: onClose, to: "/winners", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
                pathname.includes("/winners") ? /* @__PURE__ */ jsxDEV112(Svg, { src: icons.activeDotIcon, width: ".5em" }, void 0, !1, {
                  fileName: "app/components/public/MobileNavigation.tsx",
                  lineNumber: 26,
                  columnNumber: 58
                }, this) : null,
                " Winners"
              ] }, void 0, !0, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 25,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 25,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV112("li", { children: /* @__PURE__ */ jsxDEV112(NavLink, { onClick: onClose, to: "/results", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
                pathname.includes("/results") ? /* @__PURE__ */ jsxDEV112(Svg, { src: icons.activeDotIcon, width: ".5em" }, void 0, !1, {
                  fileName: "app/components/public/MobileNavigation.tsx",
                  lineNumber: 29,
                  columnNumber: 58
                }, this) : null,
                " Results"
              ] }, void 0, !0, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 28,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 28,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV112("li", { children: /* @__PURE__ */ jsxDEV112(NavLink, { onClick: onClose, to: "/#contact", className: "", children: "Contact" }, void 0, !1, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 31,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 31,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/public/MobileNavigation.tsx",
              lineNumber: 21,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV112(Button, { element: "a", onClick: onClose, href: "/contests", className: "block w-full sm:w-auto", children: "Join Now" }, void 0, !1, {
              fileName: "app/components/public/MobileNavigation.tsx",
              lineNumber: 33,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/MobileNavigation.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/MobileNavigation.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV112("aside", { className: "wrapper py-5", children: [
          /* @__PURE__ */ jsxDEV112("div", { className: "mb-12", children: [
            /* @__PURE__ */ jsxDEV112("span", { className: "block font-satoshi-black mb-2", children: "Follow Us" }, void 0, !1, {
              fileName: "app/components/public/MobileNavigation.tsx",
              lineNumber: 38,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV112("span", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxDEV112(Svg, { src: icons.twitterXIcon, width: "24px", height: "24px" }, void 0, !1, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 40,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV112(Svg, { src: icons.instagramIcon, width: "24px", height: "24px" }, void 0, !1, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 41,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV112(Svg, { src: icons.facebookIcon, width: "24px", height: "24px" }, void 0, !1, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 42,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV112(Svg, { src: icons.youtubeIcon, width: "24px", height: "24px" }, void 0, !1, {
                fileName: "app/components/public/MobileNavigation.tsx",
                lineNumber: 43,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/public/MobileNavigation.tsx",
              lineNumber: 39,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/MobileNavigation.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV112("div", { className: "flex gap-6 justify-between items-end font-satoshi-bold", children: [
            /* @__PURE__ */ jsxDEV112("span", { className: "text-sm whitespace-nowrap", children: "KOTMY \xA9 2023  All rights reserved" }, void 0, !1, {
              fileName: "app/components/public/MobileNavigation.tsx",
              lineNumber: 47,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV112("span", { className: "text-xs whitespace-nowrap", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/components/public/MobileNavigation.tsx",
              lineNumber: 48,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/public/MobileNavigation.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/public/MobileNavigation.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/public/MobileNavigation.tsx",
      lineNumber: 11,
      columnNumber: 13
    },
    this
  );
}

// app/components/public/Navigation.tsx
import { jsxDEV as jsxDEV113 } from "react/jsx-dev-runtime";
function Navigation() {
  let [showNav, setShowNav] = useState21(!1), { pathname } = useLocation4();
  return /* @__PURE__ */ jsxDEV113("header", { className: "flex justify-between items-center wrapper py-5", children: [
    /* @__PURE__ */ jsxDEV113(Link14, { to: "/", "aria-label": "home", children: /* @__PURE__ */ jsxDEV113(Svg, { src: icons.logoIcon, className: "w-9 h-9 sm:w-16 sm:h-16" }, void 0, !1, {
      fileName: "app/components/public/Navigation.tsx",
      lineNumber: 14,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/public/Navigation.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV113("nav", { className: "hidden md:flex gap-16 items-center", children: [
      /* @__PURE__ */ jsxDEV113("ul", { className: "flex gap-6 text-xl font-bold", children: [
        /* @__PURE__ */ jsxDEV113("li", { children: /* @__PURE__ */ jsxDEV113(NavLink2, { to: "/contests", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
          pathname.includes("/contests") ? /* @__PURE__ */ jsxDEV113(Svg, { src: icons.activeDotIcon, width: ".5em" }, void 0, !1, {
            fileName: "app/components/public/Navigation.tsx",
            lineNumber: 19,
            columnNumber: 59
          }, this) : null,
          " Contests"
        ] }, void 0, !0, {
          fileName: "app/components/public/Navigation.tsx",
          lineNumber: 18,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/public/Navigation.tsx",
          lineNumber: 18,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV113("li", { children: /* @__PURE__ */ jsxDEV113(NavLink2, { to: "/winners", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
          pathname.includes("/winners") ? /* @__PURE__ */ jsxDEV113(Svg, { src: icons.activeDotIcon, width: ".5em" }, void 0, !1, {
            fileName: "app/components/public/Navigation.tsx",
            lineNumber: 22,
            columnNumber: 58
          }, this) : null,
          " Winners"
        ] }, void 0, !0, {
          fileName: "app/components/public/Navigation.tsx",
          lineNumber: 21,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/public/Navigation.tsx",
          lineNumber: 21,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV113("li", { children: /* @__PURE__ */ jsxDEV113(NavLink2, { to: "/results", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
          pathname.includes("/results") ? /* @__PURE__ */ jsxDEV113(Svg, { src: icons.activeDotIcon, width: ".5em" }, void 0, !1, {
            fileName: "app/components/public/Navigation.tsx",
            lineNumber: 25,
            columnNumber: 58
          }, this) : null,
          " Results"
        ] }, void 0, !0, {
          fileName: "app/components/public/Navigation.tsx",
          lineNumber: 24,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/public/Navigation.tsx",
          lineNumber: 24,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV113("li", { children: /* @__PURE__ */ jsxDEV113(NavLink2, { to: "/#contact", className: "", children: "Contact" }, void 0, !1, {
          fileName: "app/components/public/Navigation.tsx",
          lineNumber: 27,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/components/public/Navigation.tsx",
          lineNumber: 27,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/public/Navigation.tsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV113(Button, { element: "a", href: "/login", children: "Join Now" }, void 0, !1, {
        fileName: "app/components/public/Navigation.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/public/Navigation.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV113(
      "button",
      {
        onClick: () => {
          setShowNav(!0);
        },
        title: "hamburger",
        className: "sm:hidden flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
        children: /* @__PURE__ */ jsxDEV113(Svg, { src: icons.hamburgerIcon, width: 40, height: 24 }, void 0, !1, {
          fileName: "app/components/public/Navigation.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/public/Navigation.tsx",
        lineNumber: 31,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV113(MobileNavigation, { onClose: () => {
      setShowNav(!1);
    }, show: showNav }, void 0, !1, {
      fileName: "app/components/public/Navigation.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/public/Navigation.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

// app/routes/_public.tsx
import { jsxDEV as jsxDEV114 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Kid of the Month & Year" },
  { name: "description", content: "Welcome to the best contest platform for children of all ages!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV114("div", { className: "min-h-screen bg-primary flex flex-col", children: [
    /* @__PURE__ */ jsxDEV114(Navigation, {}, void 0, !1, {
      fileName: "app/routes/_public.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV114(Outlet3, {}, void 0, !1, {
      fileName: "app/routes/_public.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV114(Footer, {}, void 0, !1, {
      fileName: "app/routes/_public.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  default: () => Logout
});
import { Link as Link15, useSearchParams as useSearchParams4 } from "@remix-run/react";
import { useEffect as useEffect13 } from "react";

// app/lib/store/store_managers/tokenManager.ts
import { useAtom } from "jotai";

// app/lib/store/atoms/token.ts
import { atom } from "jotai";
var tokenAtom = atom(null);
var userAtom = atom(null);

// app/lib/store/store_managers/tokenManager.ts
var useUserManager = () => {
  let [userStore, setUserStore] = useAtom(userAtom);
  return { setUserStoreManager: (newUser, persist) => (setUserStore(newUser), persist && newUser && (localStorage.setItem("atom_user", JSON.stringify(newUser)), console.log("persisted", newUser)), newUser), getUserStoreManager: () => {
    if (!userStore) {
      let storedUser = localStorage.getItem("atom_user");
      if (storedUser) {
        let newUser = JSON.parse(storedUser);
        return setUserStore(newUser), newUser;
      }
    }
    return userStore;
  }, deleteUserStoreManager: () => {
    setUserStore(null), localStorage.removeItem("atom_user");
  } };
};

// app/routes/logout.tsx
import { jsxDEV as jsxDEV115 } from "react/jsx-dev-runtime";
function useLogoutController() {
  let [searchQuery] = useSearchParams4(), { deleteUserStoreManager } = useUserManager();
  useEffect13(() => {
    deleteUserStoreManager();
  }, []);
}
function Logout() {
  return useLogoutController(), /* @__PURE__ */ jsxDEV115("main", { className: "h-dvh bg-secondary p-4 flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsxDEV115("h1", { className: "text-2xl font-satoshi-bold text-center", children: "You have been logged out" }, void 0, !1, {
      fileName: "app/routes/logout.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV115(Link15, { to: "/login", className: "mt-4 text-center underline", children: "Login again" }, void 0, !1, {
      fileName: "app/routes/logout.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/logout.tsx",
    lineNumber: 24,
    columnNumber: 12
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => AdminLayout,
  meta: () => meta2
});
import { Outlet as Outlet4, useLocation as useLocation7 } from "@remix-run/react";
import { useEffect as useEffect15, useState as useState22 } from "react";

// app/components/admin/AdminMobileNavigation.tsx
import { NavLink as NavLink3, useLocation as useLocation5 } from "@remix-run/react";

// app/components/reusables/Accordion.tsx
import * as React13 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { jsxDEV as jsxDEV116 } from "react/jsx-dev-runtime";
var Accordion = AccordionPrimitive.Root, AccordionItem = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV116(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/Accordion.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  this
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV116(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxDEV116(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV116(Svg, { src: icons.arrowDownIcon, className: "shrink-0 transition-transform duration-200" }, void 0, !1, {
        fileName: "app/components/reusables/Accordion.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/reusables/Accordion.tsx",
    lineNumber: 27,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/reusables/Accordion.tsx",
  lineNumber: 26,
  columnNumber: 3
}, this));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV116(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxDEV116("div", { className: cn("", className), children }, void 0, !1, {
      fileName: "app/components/reusables/Accordion.tsx",
      lineNumber: 51,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/reusables/Accordion.tsx",
    lineNumber: 46,
    columnNumber: 3
  },
  this
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// app/components/admin/AdminMobileNavigation.tsx
import { useEffect as useEffect14, useRef as useRef9 } from "react";
import { jsxDEV as jsxDEV117 } from "react/jsx-dev-runtime";
var primaryNavs = [
  { label: "Home", icon: icons.adminHomeIcon, url: "/admin/overview" },
  { label: "Admin Accounts", icon: icons.adminUsersIcon, url: "/admin/accounts" },
  { label: "Tournaments", icon: icons.adminTournamentIcon, url: "/admin/tournaments" },
  { label: "Contests", icon: icons.adminContestIcon, url: "/admin/contests" },
  {
    label: "Transactions",
    icon: icons.adminFinanceIcon,
    subitems: [
      { label: "Tally Votes", url: "transactions/tally-votes" },
      { label: "Contest Registrations", url: "transactions/contest-registrations" },
      { label: "Income History", url: "transactions/income-history" }
    ]
  }
], secondaryNavs = [
  { label: "Profile", icon: icons.profileIcon, url: "." },
  { label: "Sign Out", icon: icons.signoutIcon, url: "/logout" }
];
function AdminMobileNavigation({ show, onClose }) {
  let mobileNav = useRef9(null);
  useEffect14(() => {
    mobileNav.current?.style.setProperty("--left", "0%");
  }, []);
  let { pathname } = useLocation5();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  let mainComponent = /* @__PURE__ */ jsxDEV117("div", { className: "flex justify-between items-center border rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ jsxDEV117(Svg, { src: icons.arrowDownIcon }, void 0, !1, {
      fileName: "app/components/admin/AdminMobileNavigation.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AdminMobileNavigation.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this);
  return /* @__PURE__ */ jsxDEV117(
    "div",
    {
      "data-show": show,
      ref: mobileNav,
      className: "mobileNav sm:hidden flex flex-col fixed w-full h-dvh top-0 z-10 data-[show=true]:animate-slide-in-left data-[show=false]:left-full data-[show=false]:animate-slide-out-left bg-secondary overflow-y-auto",
      children: [
        /* @__PURE__ */ jsxDEV117("div", { className: "flex justify-between items-center py-4 px-6 border-b", children: [
          /* @__PURE__ */ jsxDEV117("span", { className: "font-satoshi-bold", children: "NAVIGATION MENU" }, void 0, !1, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV117(
            "button",
            {
              onClick: onClose,
              title: "open Menu",
              className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
              children: /* @__PURE__ */ jsxDEV117(Svg, { src: icons.closeIcon }, void 0, !1, {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 49,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 44,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/admin/AdminMobileNavigation.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV117("div", { className: "flex flex-col justify-between grow", children: [
          /* @__PURE__ */ jsxDEV117("header", { children: [
            /* @__PURE__ */ jsxDEV117("nav", { "aria-label": "primary navigation", children: [
              /* @__PURE__ */ jsxDEV117("div", { className: "flex gap-3 items-center bg-white px-6 py-2 border-b", children: [
                /* @__PURE__ */ jsxDEV117("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ jsxDEV117("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }, void 0, !1, {
                  fileName: "app/components/admin/AdminMobileNavigation.tsx",
                  lineNumber: 57,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/components/admin/AdminMobileNavigation.tsx",
                  lineNumber: 56,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV117("span", { className: "grid", children: [
                  /* @__PURE__ */ jsxDEV117("span", { className: "block text-sm font-satoshi-bold", children: "Admin" }, void 0, !1, {
                    fileName: "app/components/admin/AdminMobileNavigation.tsx",
                    lineNumber: 60,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ jsxDEV117("span", { className: "block text-xs font-satoshi-medium", children: "admin@kotmy.com" }, void 0, !1, {
                    fileName: "app/components/admin/AdminMobileNavigation.tsx",
                    lineNumber: 61,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/admin/AdminMobileNavigation.tsx",
                  lineNumber: 59,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 55,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV117(Accordion, { type: "single", collapsible: !0, className: "w-full py-2 border-b", children: /* @__PURE__ */ jsxDEV117("ul", { className: "grid gap-2 font-bold", children: primaryNavs.map((navItem) => navItem.subitems ? /* @__PURE__ */ jsxDEV117(AccordionItem, { value: navItem.label, className: "group", children: [
                /* @__PURE__ */ jsxDEV117(
                  AccordionTrigger,
                  {
                    className: cn("border-l-4 border-transparent px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
                      "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(navItem.label)
                    }),
                    children: /* @__PURE__ */ jsxDEV117("span", { className: "flex gap-3 items-center", children: [
                      /* @__PURE__ */ jsxDEV117(Svg, { src: navItem.icon }, void 0, !1, {
                        fileName: "app/components/admin/AdminMobileNavigation.tsx",
                        lineNumber: 80,
                        columnNumber: 45
                      }, this),
                      navItem.label
                    ] }, void 0, !0, {
                      fileName: "app/components/admin/AdminMobileNavigation.tsx",
                      lineNumber: 79,
                      columnNumber: 41
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/AdminMobileNavigation.tsx",
                    lineNumber: 75,
                    columnNumber: 37
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV117(AccordionContent, { children: /* @__PURE__ */ jsxDEV117("ul", { className: "list-disc list-inside p-3 font-normal", children: navItem.subitems.map((subitem) => /* @__PURE__ */ jsxDEV117("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ jsxDEV117(
                  NavLink3,
                  {
                    to: subitem.url,
                    onClick: onClose,
                    className: ({ isActive }) => `${isActive ? "active" : ""}`,
                    children: subitem.label
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/admin/AdminMobileNavigation.tsx",
                    lineNumber: 88,
                    columnNumber: 53
                  },
                  this
                ) }, subitem.label, !1, {
                  fileName: "app/components/admin/AdminMobileNavigation.tsx",
                  lineNumber: 87,
                  columnNumber: 49
                }, this)) }, void 0, !1, {
                  fileName: "app/components/admin/AdminMobileNavigation.tsx",
                  lineNumber: 85,
                  columnNumber: 41
                }, this) }, void 0, !1, {
                  fileName: "app/components/admin/AdminMobileNavigation.tsx",
                  lineNumber: 84,
                  columnNumber: 37
                }, this)
              ] }, navItem.label, !0, {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 74,
                columnNumber: 35
              }, this) : /* @__PURE__ */ jsxDEV117("li", { children: /* @__PURE__ */ jsxDEV117(
                NavLink3,
                {
                  className: ({ isActive }) => `flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] ${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"}`,
                  to: navItem.url,
                  onClick: onClose,
                  children: [
                    /* @__PURE__ */ jsxDEV117(Svg, { src: navItem.icon }, void 0, !1, {
                      fileName: "app/components/admin/AdminMobileNavigation.tsx",
                      lineNumber: 72,
                      columnNumber: 37
                    }, this),
                    navItem.label
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/admin/AdminMobileNavigation.tsx",
                  lineNumber: 67,
                  columnNumber: 59
                },
                this
              ) }, navItem.label, !1, {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 67,
                columnNumber: 35
              }, this)) }, void 0, !1, {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 65,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 64,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 54,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV117("nav", { className: "my-1", "aria-label": "secondary navigation", children: /* @__PURE__ */ jsxDEV117("ul", { className: "grid font-bold", children: secondaryNavs.map((navItem) => /* @__PURE__ */ jsxDEV117("li", { children: /* @__PURE__ */ jsxDEV117(
              NavLink3,
              {
                className: "flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] border-transparent",
                to: navItem.url,
                onClick: onClose,
                children: [
                  /* @__PURE__ */ jsxDEV117(Svg, { src: navItem.icon }, void 0, !1, {
                    fileName: "app/components/admin/AdminMobileNavigation.tsx",
                    lineNumber: 107,
                    columnNumber: 33
                  }, this),
                  navItem.label
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 104,
                columnNumber: 53
              },
              this
            ) }, navItem.label, !1, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 104,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 102,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV117("aside", { className: "border-t px-6 py-4", children: [
            /* @__PURE__ */ jsxDEV117("span", { className: "flex items-center gap-1 mb-4 font-satoshi-bold", children: [
              /* @__PURE__ */ jsxDEV117(Svg, { src: icons.themeIcon }, void 0, !1, {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 115,
                columnNumber: 21
              }, this),
              "Theme"
            ] }, void 0, !0, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 114,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV117(
              Toggletip,
              {
                mainComponent,
                childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border text-sm whitespace-nowrap",
                children: [
                  /* @__PURE__ */ jsxDEV117("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }, void 0, !1, {
                    fileName: "app/components/admin/AdminMobileNavigation.tsx",
                    lineNumber: 120,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV117("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }, void 0, !1, {
                    fileName: "app/components/admin/AdminMobileNavigation.tsx",
                    lineNumber: 121,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV117("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" }, void 0, !1, {
                    fileName: "app/components/admin/AdminMobileNavigation.tsx",
                    lineNumber: 122,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 118,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/AdminMobileNavigation.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/admin/AdminMobileNavigation.tsx",
      lineNumber: 40,
      columnNumber: 13
    },
    this
  );
}

// app/components/admin/MobileHeader.tsx
import { Link as Link16 } from "@remix-run/react";
import { jsxDEV as jsxDEV118 } from "react/jsx-dev-runtime";
function MobileHeader({ toggleNav }) {
  return /* @__PURE__ */ jsxDEV118("div", { className: "flex sm:hidden items-center gap-4 p-4 border-b", children: [
    /* @__PURE__ */ jsxDEV118(Link16, { to: "/", className: "text-accent flex items-center gap-3 sm:gap-6 whitespace-nowrap font-satoshi-black", children: [
      /* @__PURE__ */ jsxDEV118(Svg, { src: icons.logoIcon, width: 37, height: 36 }, void 0, !1, {
        fileName: "app/components/admin/MobileHeader.tsx",
        lineNumber: 9,
        columnNumber: 17
      }, this),
      "KOTMY-ADMIN"
    ] }, void 0, !0, {
      fileName: "app/components/admin/MobileHeader.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV118(
      "button",
      {
        onClick: toggleNav,
        title: "open Menu",
        className: "ml-auto flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
        children: /* @__PURE__ */ jsxDEV118(Svg, { src: icons.adminHamburgerIcon, width: 30, height: 24 }, void 0, !1, {
          fileName: "app/components/admin/MobileHeader.tsx",
          lineNumber: 17,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/admin/MobileHeader.tsx",
        lineNumber: 12,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/admin/MobileHeader.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/components/admin/AdminNav.tsx
import { NavLink as NavLink4, useLocation as useLocation6 } from "@remix-run/react";
import { Accordion as Accordion2, AccordionContent as AccordionContent2, AccordionItem as AccordionItem2, AccordionTrigger as AccordionTrigger2 } from "@radix-ui/react-accordion";
import { jsxDEV as jsxDEV119 } from "react/jsx-dev-runtime";
var navs = [
  { label: "Home", icon: icons.adminHomeIcon, url: "/admin/overview" },
  { label: "Admin Accounts", icon: icons.adminUsersIcon, url: "/admin/accounts" },
  { label: "Tournaments", icon: icons.adminTournamentIcon, url: "/admin/tournaments" },
  { label: "Contests", icon: icons.adminContestIcon, url: "/admin/contests" }
], navsWSubs = [
  {
    label: "Transactions",
    icon: icons.adminFinanceIcon,
    subitems: [
      { label: "Tally Votes", url: "transactions/tally-votes" },
      { label: "Contest Registrations", url: "transactions/contest-registrations" },
      { label: "Income History", url: "transactions/income-history" }
    ]
  }
];
function AdminNavigation({ show }) {
  let { pathname } = useLocation6();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  let mainComponent = /* @__PURE__ */ jsxDEV119("div", { className: "flex justify-between items-center border  rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ jsxDEV119(Svg, { src: icons.arrowDownIcon }, void 0, !1, {
      fileName: "app/components/admin/AdminNav.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AdminNav.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this);
  return show ? /* @__PURE__ */ jsxDEV119("header", { className: "bg-secondary border-r hidden sm:flex flex-col justify-between min-w-[280px]", children: [
    /* @__PURE__ */ jsxDEV119("nav", { className: "py-6", children: [
      /* @__PURE__ */ jsxDEV119("span", { className: "inline-block mb-2 px-6 py-3 font-satoshi-bold", children: "Navigation Menu" }, void 0, !1, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV119("ul", { className: "grid gap-2 font-bold", children: navs.map((navItem) => /* @__PURE__ */ jsxDEV119("li", { children: /* @__PURE__ */ jsxDEV119(
        NavLink4,
        {
          to: navItem.url,
          className: ({ isActive }) => `${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"} flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF]`,
          children: [
            /* @__PURE__ */ jsxDEV119(Svg, { src: navItem.icon }, void 0, !1, {
              fileName: "app/components/admin/AdminNav.tsx",
              lineNumber: 42,
              columnNumber: 29
            }, this),
            navItem.label
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 39,
          columnNumber: 49
        },
        this
      ) }, navItem.label, !1, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 39,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV119(Accordion2, { type: "single", collapsible: !0, className: "w-full mt-2", children: navsWSubs.map((item) => /* @__PURE__ */ jsxDEV119(AccordionItem2, { value: item.label, className: "group", children: [
        /* @__PURE__ */ jsxDEV119(
          AccordionTrigger2,
          {
            className: cn("border-l-4 border-transparent group w-full flex gap-3 items-center justify-between px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
              "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(item.label)
            }),
            children: [
              /* @__PURE__ */ jsxDEV119("span", { className: "flex gap-3 items-center", children: [
                /* @__PURE__ */ jsxDEV119(Svg, { src: item.icon }, void 0, !1, {
                  fileName: "app/components/admin/AdminNav.tsx",
                  lineNumber: 54,
                  columnNumber: 37
                }, this),
                item.label
              ] }, void 0, !0, {
                fileName: "app/components/admin/AdminNav.tsx",
                lineNumber: 53,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV119(Svg, { src: icons.arrowDownIcon, className: "group-[[data-state=open]]:rotate-180 transition-transform duration-200" }, void 0, !1, {
                fileName: "app/components/admin/AdminNav.tsx",
                lineNumber: 57,
                columnNumber: 33
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/admin/AdminNav.tsx",
            lineNumber: 49,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ jsxDEV119(AccordionContent2, { children: /* @__PURE__ */ jsxDEV119("ul", { className: "list-disc list-inside p-3", children: item.subitems.map((subitem) => /* @__PURE__ */ jsxDEV119("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ jsxDEV119(
          NavLink4,
          {
            to: subitem.url,
            className: ({ isActive }) => `${isActive ? "active" : ""}`,
            children: subitem.label
          },
          void 0,
          !1,
          {
            fileName: "app/components/admin/AdminNav.tsx",
            lineNumber: 63,
            columnNumber: 45
          },
          this
        ) }, subitem.label, !1, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 62,
          columnNumber: 41
        }, this)) }, void 0, !1, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 60,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 59,
          columnNumber: 29
        }, this)
      ] }, item.label, !0, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 48,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AdminNav.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV119("aside", { className: "border-t  px-6 py-3", children: [
      /* @__PURE__ */ jsxDEV119("span", { className: "flex items-center gap-1 mb-2 font-satoshi-bold", children: [
        /* @__PURE__ */ jsxDEV119(Svg, { src: icons.themeIcon }, void 0, !1, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this),
        "Theme"
      ] }, void 0, !0, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 77,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV119(
        Toggletip,
        {
          mainComponent,
          childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border  text-xs whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsxDEV119("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }, void 0, !1, {
              fileName: "app/components/admin/AdminNav.tsx",
              lineNumber: 83,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV119("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }, void 0, !1, {
              fileName: "app/components/admin/AdminNav.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV119("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" }, void 0, !1, {
              fileName: "app/components/admin/AdminNav.tsx",
              lineNumber: 85,
              columnNumber: 21
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 81,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/AdminNav.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AdminNav.tsx",
    lineNumber: 34,
    columnNumber: 11
  }, this) : null;
}

// app/components/admin/PrimaryHeader.tsx
import { Link as Link18 } from "@remix-run/react";

// app/components/admin/AdminToolbar.tsx
import { Link as Link17 } from "@remix-run/react";
import { jsxDEV as jsxDEV120 } from "react/jsx-dev-runtime";
function AdminToolbar() {
  let mainComponent = /* @__PURE__ */ jsxDEV120(
    "div",
    {
      tabIndex: 0,
      className: "relative p-2 rounded-full border flex items-center gap-4 cursor-pointer bg-tertiary hover:bg-[#EEF0FF]",
      children: [
        /* @__PURE__ */ jsxDEV120("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxDEV120("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ jsxDEV120("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }, void 0, !1, {
            fileName: "app/components/admin/AdminToolbar.tsx",
            lineNumber: 13,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/AdminToolbar.tsx",
            lineNumber: 12,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV120("span", { className: "grid", children: [
            /* @__PURE__ */ jsxDEV120("span", { className: "block text-sm font-satoshi-bold", children: "Admin" }, void 0, !1, {
              fileName: "app/components/admin/AdminToolbar.tsx",
              lineNumber: 16,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV120("span", { className: "block text-xs font-satoshi-medium", children: "admin@kotmy.com" }, void 0, !1, {
              fileName: "app/components/admin/AdminToolbar.tsx",
              lineNumber: 17,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/admin/AdminToolbar.tsx",
            lineNumber: 15,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/AdminToolbar.tsx",
          lineNumber: 11,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV120(Svg, { src: icons.arrowDownIcon }, void 0, !1, {
          fileName: "app/components/admin/AdminToolbar.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/admin/AdminToolbar.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  );
  return /* @__PURE__ */ jsxDEV120(
    Toggletip,
    {
      mainComponent,
      childContainerClass: "top-[110%] right-0 bg-tertiary p-2 border  text-xs whitespace-nowrap",
      children: [
        /* @__PURE__ */ jsxDEV120(Link17, { to: ".", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
          /* @__PURE__ */ jsxDEV120(Svg, { src: icons.profileIcon }, void 0, !1, {
            fileName: "app/components/admin/AdminToolbar.tsx",
            lineNumber: 27,
            columnNumber: 17
          }, this),
          " Profile"
        ] }, void 0, !0, {
          fileName: "app/components/admin/AdminToolbar.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV120(Link17, { to: "/logout", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
          /* @__PURE__ */ jsxDEV120(Svg, { src: icons.signoutIcon }, void 0, !1, {
            fileName: "app/components/admin/AdminToolbar.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this),
          " Sign Out"
        ] }, void 0, !0, {
          fileName: "app/components/admin/AdminToolbar.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/admin/AdminToolbar.tsx",
      lineNumber: 24,
      columnNumber: 9
    },
    this
  );
}

// app/components/admin/PrimaryHeader.tsx
import { jsxDEV as jsxDEV121 } from "react/jsx-dev-runtime";
function PrimaryHeader({ toggleNav }) {
  return /* @__PURE__ */ jsxDEV121("header", { className: "h-[85px] hidden sm:flex justify-between items-center gap-4 px-6 py-3 bg-secondary border-b", children: [
    /* @__PURE__ */ jsxDEV121("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsxDEV121(
        "button",
        {
          onClick: toggleNav,
          title: "Toggle Menu",
          className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
          children: /* @__PURE__ */ jsxDEV121(Svg, { src: icons.adminHamburgerIcon, width: 40, height: 24 }, void 0, !1, {
            fileName: "app/components/admin/PrimaryHeader.tsx",
            lineNumber: 16,
            columnNumber: 21
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/PrimaryHeader.tsx",
          lineNumber: 11,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV121(Link18, { to: "/", className: "text-accent flex items-center gap-6 whitespace-nowrap font-satoshi-black", children: [
        /* @__PURE__ */ jsxDEV121(Svg, { src: icons.logoIcon, width: 37, height: 36 }, void 0, !1, {
          fileName: "app/components/admin/PrimaryHeader.tsx",
          lineNumber: 19,
          columnNumber: 21
        }, this),
        "KOTMY-ADMIN"
      ] }, void 0, !0, {
        fileName: "app/components/admin/PrimaryHeader.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/PrimaryHeader.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV121(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white", placeholder: "Search..." }, void 0, !1, {
      fileName: "app/components/admin/PrimaryHeader.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV121(AdminToolbar, {}, void 0, !1, {
      fileName: "app/components/admin/PrimaryHeader.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/PrimaryHeader.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/routes/admin.tsx
import { jsxDEV as jsxDEV122 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "KOTMY | Admin" },
  { name: "description", content: "KOTMY Admin application" }
];
function Layout({ children }) {
  let [showNav, setShowNav] = useState22(!1);
  return useEffect15(() => {
    setShowNav(window.innerWidth >= 640);
  }, []), /* @__PURE__ */ jsxDEV122("div", { className: "bg-tertiary text-admin-pry", children: [
    /* @__PURE__ */ jsxDEV122(PrimaryHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV122(MobileHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV122(AdminMobileNavigation, { onClose: () => {
      setShowNav(!1);
    }, show: showNav }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV122("div", { className: "sm:flex sm:h-[calc(100vh-85px)]", children: [
      /* @__PURE__ */ jsxDEV122(AdminNavigation, { show: showNav }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      children
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 22,
    columnNumber: 13
  }, this);
}
function AdminLayout() {
  return /* @__PURE__ */ jsxDEV122(Layout, { children: /* @__PURE__ */ jsxDEV122(Outlet4, {}, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 34,
    columnNumber: 20
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 34,
    columnNumber: 12
  }, this);
}
function ErrorBoundary2() {
  let { pathname } = useLocation7();
  return /* @__PURE__ */ jsxDEV122(Layout, { children: /* @__PURE__ */ jsxDEV122("div", { className: "w-full max-sm:h-[calc(100dvh-73px)] p-5 m-auto lg:max-w-3xl grid place-content-center text-center gap-5", children: [
    /* @__PURE__ */ jsxDEV122("h2", { className: "text-xl font-bold text-red-500", children: "Something went wrong" }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV122("p", { children: "Apologies, something went wrong on our end. Please try again." }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV122(Cta_default, { element: "link", to: pathname, className: "px-4 py-1 rounded-md", children: "Reload page" }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV122(Cta_default, { element: "link", to: "/admin/overview", className: "px-4 py-1 rounded-md", children: "Back to Admin Home" }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 41,
    columnNumber: 12
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action17,
  default: () => Login,
  loader: () => loader28
});
import { Form as Form14, Link as Link19, useActionData as useActionData3, useNavigate as useNavigate10, useSearchParams as useSearchParams5 } from "@remix-run/react";
import { json as json27 } from "@remix-run/node";

// app/services/auth/auth.server.ts
var AuthServer = class {
  async login(loginDto) {
    let { data, error, headers } = await ApiCall.call({
      url: ApiEndPoints.login,
      method: "POST",
      data: loginDto
    });
    return error ? { error, data: null, headers } : (headers || (headers = { "Set-Cookie": data?.token ?? "" }), { data, error: null, headers });
  }
}, authServer = new AuthServer();

// app/routes/login.tsx
import { useEffect as useEffect16 } from "react";
import { jsxDEV as jsxDEV123 } from "react/jsx-dev-runtime";
async function loader28({ request }) {
  return null;
}
async function action17({ request }) {
  let searchQuery = new URL(request.url).searchParams, formData = await request.formData(), loginDto = {
    email: formData.get("email"),
    password: formData.get("password")
  }, { error, data, headers } = await authServer.login(loginDto);
  if (error)
    return { error: error.detail?.toString() || "An error occurred during login.", data: null };
  console.log(data), console.log("God abeg o, HEADERS", headers);
  let responseHeaders = {};
  return headers?.["Set-Cookie"] ? (responseHeaders = { "Set-Cookie": headers?.["Set-Cookie"] }, json27({ data, error: null }, {
    headers: responseHeaders
  })) : json27({ data, error: null });
}
function useLoginController() {
  let actionData = useActionData3(), [searchQuery] = useSearchParams5(), { setUserStoreManager, getUserStoreManager } = useUserManager(), { toast: toast3 } = useToast(), navigate = useNavigate10();
  return useEffect16(() => {
    getUserStoreManager() && navigate(searchQuery.get("redirectTo") || "/user");
  }, []), useEffect16(() => {
    actionData?.error && (toast3({
      variant: "destructive",
      title: "Login Failed",
      description: actionData.error
    }), actionData.error = "");
  }, [actionData?.error]), useEffect16(() => {
    if (actionData?.data) {
      setUserStoreManager(actionData.data, !0), navigate(searchQuery.get("redirectTo") || "/user");
      return;
    }
  }, [actionData?.data]), { actionData };
}
function Login() {
  let { actionData } = useLoginController();
  return /* @__PURE__ */ jsxDEV123("main", { className: "h-dvh bg-secondary p-4 flex flex-col", children: [
    /* @__PURE__ */ jsxDEV123(Link19, { to: "/", "aria-label": "home", children: /* @__PURE__ */ jsxDEV123(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV123("section", { className: "grow flex flex-col justify-center items-center", children: /* @__PURE__ */ jsxDEV123(Form14, { method: "POST", className: "w-full max-w-md p-4 sm:p-8 bg-white border rounded-3xl flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxDEV123("div", { className: "w-max mx-auto p-4 border border-disabled rounded-full bg-gradient-to-b from-slate-200 to-white", children: /* @__PURE__ */ jsxDEV123("div", { className: "w-max p-4 border border-disabled rounded-full bg-white", children: /* @__PURE__ */ jsxDEV123("img", { src: admin_avatar_default, alt: "person silhouette", width: 24, height: 24 }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 100,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 99,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV123("h1", { className: "text-2xl font-satoshi-bold text-center", children: "Enter your details to login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV123("hr", {}, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 104,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV123("div", { className: "my-2 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxDEV123(
          FormControl,
          {
            as: "input",
            id: "email",
            name: "email",
            placeholder: "Enter your email address",
            labelText: "email",
            icon: icons.avatarIcon,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 106,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV123(
          FormControl,
          {
            as: "input",
            id: "password",
            name: "password",
            placeholder: "Enter your password",
            labelText: "Password",
            type: "password",
            icon: icons.lockIcon,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 109,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 105,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV123(Cta_default, { element: "button", type: "submit", className: "rounded-lg p-3", children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 112,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 92,
    columnNumber: 12
  }, this);
}

// app/routes/user.tsx
var user_exports = {};
__export(user_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => UserLayout,
  meta: () => meta3
});
import { Outlet as Outlet5, useLocation as useLocation10 } from "@remix-run/react";
import { useEffect as useEffect19, useState as useState25 } from "react";

// app/components/user/UserPrimaryHeader.tsx
import { Link as Link21 } from "@remix-run/react";

// app/components/user/UserToolBar.tsx
import { Link as Link20, useNavigate as useNavigate11 } from "@remix-run/react";
import { useEffect as useEffect17, useState as useState23 } from "react";
import { jsxDEV as jsxDEV124 } from "react/jsx-dev-runtime";
function UserToolbar() {
  let [user, setUser] = useState23(null), { getUserStoreManager } = useUserManager(), navigate = useNavigate11();
  useEffect17(() => {
    let currentUser = getUserStoreManager();
    currentUser || navigate("/login"), setUser(currentUser);
  }, []);
  let mainComponent = /* @__PURE__ */ jsxDEV124(
    "div",
    {
      tabIndex: 0,
      className: "relative p-2 rounded-full border flex items-center gap-4 cursor-pointer bg-tertiary hover:bg-[#EEF0FF]",
      children: [
        /* @__PURE__ */ jsxDEV124("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxDEV124("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ jsxDEV124("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }, void 0, !1, {
            fileName: "app/components/user/UserToolBar.tsx",
            lineNumber: 27,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/user/UserToolBar.tsx",
            lineNumber: 26,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV124("span", { className: "grid", children: [
            /* @__PURE__ */ jsxDEV124("span", { className: "block text-sm font-satoshi-bold", children: user?.fullName }, void 0, !1, {
              fileName: "app/components/user/UserToolBar.tsx",
              lineNumber: 30,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV124("span", { className: "block text-xs font-satoshi-medium", children: user?.email }, void 0, !1, {
              fileName: "app/components/user/UserToolBar.tsx",
              lineNumber: 31,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/user/UserToolBar.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/user/UserToolBar.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV124(Svg, { src: icons.arrowDownIcon }, void 0, !1, {
          fileName: "app/components/user/UserToolBar.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/user/UserToolBar.tsx",
      lineNumber: 23,
      columnNumber: 9
    },
    this
  );
  return /* @__PURE__ */ jsxDEV124(
    Toggletip,
    {
      mainComponent,
      childContainerClass: "top-[110%] right-0 bg-tertiary p-2 border  text-xs whitespace-nowrap",
      children: [
        /* @__PURE__ */ jsxDEV124(Link20, { to: ".", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
          /* @__PURE__ */ jsxDEV124(Svg, { src: icons.profileIcon }, void 0, !1, {
            fileName: "app/components/user/UserToolBar.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, this),
          " Profile"
        ] }, void 0, !0, {
          fileName: "app/components/user/UserToolBar.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV124(Link20, { to: "/logout", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
          /* @__PURE__ */ jsxDEV124(Svg, { src: icons.signoutIcon }, void 0, !1, {
            fileName: "app/components/user/UserToolBar.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this),
          " Sign Out"
        ] }, void 0, !0, {
          fileName: "app/components/user/UserToolBar.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/user/UserToolBar.tsx",
      lineNumber: 38,
      columnNumber: 9
    },
    this
  );
}

// app/components/user/UserPrimaryHeader.tsx
import { jsxDEV as jsxDEV125 } from "react/jsx-dev-runtime";
function UserPrimaryHeader({ toggleNav }) {
  return /* @__PURE__ */ jsxDEV125("header", { className: "h-[85px] hidden sm:flex justify-between items-center gap-4 px-6 py-3 bg-secondary border-b", children: [
    /* @__PURE__ */ jsxDEV125("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsxDEV125(
        "button",
        {
          onClick: toggleNav,
          title: "Toggle Menu",
          className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
          children: /* @__PURE__ */ jsxDEV125(Svg, { src: icons.adminHamburgerIcon, width: 40, height: 24 }, void 0, !1, {
            fileName: "app/components/user/UserPrimaryHeader.tsx",
            lineNumber: 16,
            columnNumber: 21
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/user/UserPrimaryHeader.tsx",
          lineNumber: 11,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV125(Link21, { to: "/", className: "text-accent flex items-center gap-6 whitespace-nowrap font-satoshi-black", children: [
        /* @__PURE__ */ jsxDEV125(Svg, { src: icons.logoIcon, width: 37, height: 36 }, void 0, !1, {
          fileName: "app/components/user/UserPrimaryHeader.tsx",
          lineNumber: 19,
          columnNumber: 21
        }, this),
        "KOTMY-USER"
      ] }, void 0, !0, {
        fileName: "app/components/user/UserPrimaryHeader.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/user/UserPrimaryHeader.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV125(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white", placeholder: "Search..." }, void 0, !1, {
      fileName: "app/components/user/UserPrimaryHeader.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV125(UserToolbar, {}, void 0, !1, {
      fileName: "app/components/user/UserPrimaryHeader.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/user/UserPrimaryHeader.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/components/user/UserMobileHeader.tsx
import { Link as Link22 } from "@remix-run/react";
import { jsxDEV as jsxDEV126 } from "react/jsx-dev-runtime";
function UserMobileHeader({ toggleNav }) {
  return /* @__PURE__ */ jsxDEV126("div", { className: "flex sm:hidden items-center gap-4 p-4 border-b", children: [
    /* @__PURE__ */ jsxDEV126(Link22, { to: "/", className: "text-accent flex items-center gap-3 sm:gap-6 whitespace-nowrap font-satoshi-black", children: [
      /* @__PURE__ */ jsxDEV126(Svg, { src: icons.logoIcon, width: 37, height: 36 }, void 0, !1, {
        fileName: "app/components/user/UserMobileHeader.tsx",
        lineNumber: 9,
        columnNumber: 17
      }, this),
      "KOTMY-USER"
    ] }, void 0, !0, {
      fileName: "app/components/user/UserMobileHeader.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV126(
      "button",
      {
        onClick: toggleNav,
        title: "open Menu",
        className: "ml-auto flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
        children: /* @__PURE__ */ jsxDEV126(Svg, { src: icons.adminHamburgerIcon, width: 30, height: 24 }, void 0, !1, {
          fileName: "app/components/user/UserMobileHeader.tsx",
          lineNumber: 17,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/user/UserMobileHeader.tsx",
        lineNumber: 12,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/user/UserMobileHeader.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/components/user/UserMobileNavigation.tsx
import { NavLink as NavLink5, useLocation as useLocation8, useNavigate as useNavigate12 } from "@remix-run/react";
import { useEffect as useEffect18, useRef as useRef10, useState as useState24 } from "react";
import { jsxDEV as jsxDEV127 } from "react/jsx-dev-runtime";
var primaryNavs2 = [
  { label: "Home", icon: icons.adminHomeIcon, url: "/admin/overview" },
  { label: "User Accounts", icon: icons.adminUsersIcon, url: "/admin/accounts" },
  { label: "Pending Uploads", icon: icons.adminTournamentIcon, url: "/user/pending-uploads" },
  { label: "Contests", icon: icons.adminContestIcon, url: "/admin/contests" },
  {
    label: "Transactions",
    icon: icons.adminFinanceIcon,
    subitems: [
      { label: "Tally Votes", url: "transactions/tally-votes" },
      { label: "Contest Registrations", url: "transactions/contest-registrations" },
      { label: "Income History", url: "transactions/income-history" }
    ]
  }
], secondaryNavs2 = [
  { label: "Profile", icon: icons.profileIcon, url: "." },
  { label: "Sign Out", icon: icons.signoutIcon, url: "/logout" }
];
function UserMobileNavigation({ show, onClose }) {
  let mobileNav = useRef10(null), [user, setUser] = useState24(null), navigate = useNavigate12(), { getUserStoreManager } = useUserManager();
  useEffect18(() => {
    let currentUser = getUserStoreManager();
    currentUser || navigate("/login"), setUser(currentUser), mobileNav.current?.style.setProperty("--left", "0%");
  }, []);
  let { pathname } = useLocation8();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  let mainComponent = /* @__PURE__ */ jsxDEV127("div", { className: "flex justify-between items-center border rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ jsxDEV127(Svg, { src: icons.arrowDownIcon }, void 0, !1, {
      fileName: "app/components/user/UserMobileNavigation.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/user/UserMobileNavigation.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
  return /* @__PURE__ */ jsxDEV127(
    "div",
    {
      "data-show": show,
      ref: mobileNav,
      className: "mobileNav sm:hidden flex flex-col fixed w-full h-dvh top-0 z-10 data-[show=true]:animate-slide-in-left data-[show=false]:left-full data-[show=false]:animate-slide-out-left bg-secondary overflow-y-auto",
      children: [
        /* @__PURE__ */ jsxDEV127("div", { className: "flex justify-between items-center py-4 px-6 border-b", children: [
          /* @__PURE__ */ jsxDEV127("span", { className: "font-satoshi-bold", children: "NAVIGATION MENU" }, void 0, !1, {
            fileName: "app/components/user/UserMobileNavigation.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV127(
            "button",
            {
              onClick: onClose,
              title: "open Menu",
              className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
              children: /* @__PURE__ */ jsxDEV127(Svg, { src: icons.closeIcon }, void 0, !1, {
                fileName: "app/components/user/UserMobileNavigation.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/user/UserMobileNavigation.tsx",
              lineNumber: 55,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/user/UserMobileNavigation.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV127("div", { className: "flex flex-col justify-between grow", children: [
          /* @__PURE__ */ jsxDEV127("header", { children: [
            /* @__PURE__ */ jsxDEV127("nav", { "aria-label": "primary navigation", children: [
              /* @__PURE__ */ jsxDEV127("div", { className: "flex gap-3 items-center bg-white px-6 py-2 border-b", children: [
                /* @__PURE__ */ jsxDEV127("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ jsxDEV127("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }, void 0, !1, {
                  fileName: "app/components/user/UserMobileNavigation.tsx",
                  lineNumber: 68,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/components/user/UserMobileNavigation.tsx",
                  lineNumber: 67,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV127("span", { className: "grid", children: [
                  /* @__PURE__ */ jsxDEV127("span", { className: "block text-sm font-satoshi-bold", children: user?.fullName }, void 0, !1, {
                    fileName: "app/components/user/UserMobileNavigation.tsx",
                    lineNumber: 71,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ jsxDEV127("span", { className: "block text-xs font-satoshi-medium", children: user?.email }, void 0, !1, {
                    fileName: "app/components/user/UserMobileNavigation.tsx",
                    lineNumber: 72,
                    columnNumber: 29
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/user/UserMobileNavigation.tsx",
                  lineNumber: 70,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/user/UserMobileNavigation.tsx",
                lineNumber: 66,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV127(Accordion, { type: "single", collapsible: !0, className: "w-full py-2 border-b", children: /* @__PURE__ */ jsxDEV127("ul", { className: "grid gap-2 font-bold", children: primaryNavs2.map((navItem) => navItem.subitems ? /* @__PURE__ */ jsxDEV127(AccordionItem, { value: navItem.label, className: "group", children: [
                /* @__PURE__ */ jsxDEV127(
                  AccordionTrigger,
                  {
                    className: cn("border-l-4 border-transparent px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
                      "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(navItem.label)
                    }),
                    children: /* @__PURE__ */ jsxDEV127("span", { className: "flex gap-3 items-center", children: [
                      /* @__PURE__ */ jsxDEV127(Svg, { src: navItem.icon }, void 0, !1, {
                        fileName: "app/components/user/UserMobileNavigation.tsx",
                        lineNumber: 91,
                        columnNumber: 45
                      }, this),
                      navItem.label
                    ] }, void 0, !0, {
                      fileName: "app/components/user/UserMobileNavigation.tsx",
                      lineNumber: 90,
                      columnNumber: 41
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/user/UserMobileNavigation.tsx",
                    lineNumber: 86,
                    columnNumber: 37
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV127(AccordionContent, { children: /* @__PURE__ */ jsxDEV127("ul", { className: "list-disc list-inside p-3 font-normal", children: navItem.subitems.map((subitem) => /* @__PURE__ */ jsxDEV127("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ jsxDEV127(
                  NavLink5,
                  {
                    to: subitem.url,
                    onClick: onClose,
                    className: ({ isActive }) => `${isActive ? "active" : ""}`,
                    children: subitem.label
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/user/UserMobileNavigation.tsx",
                    lineNumber: 99,
                    columnNumber: 53
                  },
                  this
                ) }, subitem.label, !1, {
                  fileName: "app/components/user/UserMobileNavigation.tsx",
                  lineNumber: 98,
                  columnNumber: 49
                }, this)) }, void 0, !1, {
                  fileName: "app/components/user/UserMobileNavigation.tsx",
                  lineNumber: 96,
                  columnNumber: 41
                }, this) }, void 0, !1, {
                  fileName: "app/components/user/UserMobileNavigation.tsx",
                  lineNumber: 95,
                  columnNumber: 37
                }, this)
              ] }, navItem.label, !0, {
                fileName: "app/components/user/UserMobileNavigation.tsx",
                lineNumber: 85,
                columnNumber: 35
              }, this) : /* @__PURE__ */ jsxDEV127("li", { children: /* @__PURE__ */ jsxDEV127(
                NavLink5,
                {
                  className: ({ isActive }) => `flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] ${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"}`,
                  to: navItem.url,
                  onClick: onClose,
                  children: [
                    /* @__PURE__ */ jsxDEV127(Svg, { src: navItem.icon }, void 0, !1, {
                      fileName: "app/components/user/UserMobileNavigation.tsx",
                      lineNumber: 83,
                      columnNumber: 37
                    }, this),
                    navItem.label
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/user/UserMobileNavigation.tsx",
                  lineNumber: 78,
                  columnNumber: 59
                },
                this
              ) }, navItem.label, !1, {
                fileName: "app/components/user/UserMobileNavigation.tsx",
                lineNumber: 78,
                columnNumber: 35
              }, this)) }, void 0, !1, {
                fileName: "app/components/user/UserMobileNavigation.tsx",
                lineNumber: 76,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/components/user/UserMobileNavigation.tsx",
                lineNumber: 75,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/user/UserMobileNavigation.tsx",
              lineNumber: 65,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV127("nav", { className: "my-1", "aria-label": "secondary navigation", children: /* @__PURE__ */ jsxDEV127("ul", { className: "grid font-bold", children: secondaryNavs2.map((navItem) => /* @__PURE__ */ jsxDEV127("li", { children: /* @__PURE__ */ jsxDEV127(
              NavLink5,
              {
                className: "flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] border-transparent",
                to: navItem.url,
                onClick: onClose,
                children: [
                  /* @__PURE__ */ jsxDEV127(Svg, { src: navItem.icon }, void 0, !1, {
                    fileName: "app/components/user/UserMobileNavigation.tsx",
                    lineNumber: 118,
                    columnNumber: 33
                  }, this),
                  navItem.label
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/user/UserMobileNavigation.tsx",
                lineNumber: 115,
                columnNumber: 53
              },
              this
            ) }, navItem.label, !1, {
              fileName: "app/components/user/UserMobileNavigation.tsx",
              lineNumber: 115,
              columnNumber: 29
            }, this)) }, void 0, !1, {
              fileName: "app/components/user/UserMobileNavigation.tsx",
              lineNumber: 113,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/user/UserMobileNavigation.tsx",
              lineNumber: 112,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/user/UserMobileNavigation.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV127("aside", { className: "border-t px-6 py-4", children: [
            /* @__PURE__ */ jsxDEV127("span", { className: "flex items-center gap-1 mb-4 font-satoshi-bold", children: [
              /* @__PURE__ */ jsxDEV127(Svg, { src: icons.themeIcon }, void 0, !1, {
                fileName: "app/components/user/UserMobileNavigation.tsx",
                lineNumber: 126,
                columnNumber: 21
              }, this),
              "Theme"
            ] }, void 0, !0, {
              fileName: "app/components/user/UserMobileNavigation.tsx",
              lineNumber: 125,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV127(
              Toggletip,
              {
                mainComponent,
                childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border text-sm whitespace-nowrap",
                children: [
                  /* @__PURE__ */ jsxDEV127("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }, void 0, !1, {
                    fileName: "app/components/user/UserMobileNavigation.tsx",
                    lineNumber: 131,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV127("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }, void 0, !1, {
                    fileName: "app/components/user/UserMobileNavigation.tsx",
                    lineNumber: 132,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV127("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" }, void 0, !1, {
                    fileName: "app/components/user/UserMobileNavigation.tsx",
                    lineNumber: 133,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/user/UserMobileNavigation.tsx",
                lineNumber: 129,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/user/UserMobileNavigation.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/user/UserMobileNavigation.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/user/UserMobileNavigation.tsx",
      lineNumber: 51,
      columnNumber: 13
    },
    this
  );
}

// app/components/user/UserNavigation.tsx
import { NavLink as NavLink6, useLocation as useLocation9 } from "@remix-run/react";
import { Accordion as Accordion3, AccordionContent as AccordionContent3, AccordionItem as AccordionItem3, AccordionTrigger as AccordionTrigger3 } from "@radix-ui/react-accordion";
import { jsxDEV as jsxDEV128 } from "react/jsx-dev-runtime";
var navs2 = [
  { label: "Home", icon: icons.adminHomeIcon, url: "/" },
  { label: "Unused 1", icon: icons.adminUsersIcon, url: "/" },
  { label: "Pending Uploads", icon: icons.adminTournamentIcon, url: "/user/pending-uploads" },
  { label: "Unused 2", icon: icons.adminTournamentIcon, url: "/" },
  { label: "Unused 3", icon: icons.adminContestIcon, url: "/" }
], navsWSubs2 = [
  {
    label: "Unused 4",
    icon: icons.adminFinanceIcon,
    subitems: [
      { label: "Tally Votes", url: "transactions/tally-votes" },
      { label: "Contest Registrations", url: "transactions/contest-registrations" },
      { label: "Income History", url: "transactions/income-history" }
    ]
  }
];
function UserNavigation({ show }) {
  let { pathname } = useLocation9();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  let mainComponent = /* @__PURE__ */ jsxDEV128("div", { className: "flex justify-between items-center border  rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ jsxDEV128(Svg, { src: icons.arrowDownIcon }, void 0, !1, {
      fileName: "app/components/user/UserNavigation.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/user/UserNavigation.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this);
  return show ? /* @__PURE__ */ jsxDEV128("header", { className: "bg-secondary border-r hidden sm:flex flex-col justify-between min-w-[280px] h-full", children: [
    /* @__PURE__ */ jsxDEV128("nav", { className: "py-6", children: [
      /* @__PURE__ */ jsxDEV128("span", { className: "inline-block mb-2 px-6 py-3 font-satoshi-bold", children: "Navigation Menu" }, void 0, !1, {
        fileName: "app/components/user/UserNavigation.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV128("ul", { className: "grid gap-2 font-bold", children: navs2.map((navItem) => /* @__PURE__ */ jsxDEV128("li", { children: /* @__PURE__ */ jsxDEV128(
        NavLink6,
        {
          to: navItem.url,
          className: ({ isActive }) => `${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"} flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF]`,
          children: [
            /* @__PURE__ */ jsxDEV128(Svg, { src: navItem.icon }, void 0, !1, {
              fileName: "app/components/user/UserNavigation.tsx",
              lineNumber: 43,
              columnNumber: 29
            }, this),
            navItem.label
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/user/UserNavigation.tsx",
          lineNumber: 40,
          columnNumber: 49
        },
        this
      ) }, navItem.label, !1, {
        fileName: "app/components/user/UserNavigation.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/components/user/UserNavigation.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV128(Accordion3, { type: "single", collapsible: !0, className: "w-full mt-2", children: navsWSubs2.map((item) => /* @__PURE__ */ jsxDEV128(AccordionItem3, { value: item.label, className: "group", children: [
        /* @__PURE__ */ jsxDEV128(
          AccordionTrigger3,
          {
            className: cn("border-l-4 border-transparent group w-full flex gap-3 items-center justify-between px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
              "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(item.label)
            }),
            children: [
              /* @__PURE__ */ jsxDEV128("span", { className: "flex gap-3 items-center", children: [
                /* @__PURE__ */ jsxDEV128(Svg, { src: item.icon }, void 0, !1, {
                  fileName: "app/components/user/UserNavigation.tsx",
                  lineNumber: 55,
                  columnNumber: 37
                }, this),
                item.label
              ] }, void 0, !0, {
                fileName: "app/components/user/UserNavigation.tsx",
                lineNumber: 54,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV128(Svg, { src: icons.arrowDownIcon, className: "group-[[data-state=open]]:rotate-180 transition-transform duration-200" }, void 0, !1, {
                fileName: "app/components/user/UserNavigation.tsx",
                lineNumber: 58,
                columnNumber: 33
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/user/UserNavigation.tsx",
            lineNumber: 50,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ jsxDEV128(AccordionContent3, { children: /* @__PURE__ */ jsxDEV128("ul", { className: "list-disc list-inside p-3", children: item.subitems.map((subitem) => /* @__PURE__ */ jsxDEV128("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ jsxDEV128(
          NavLink6,
          {
            to: subitem.url,
            className: ({ isActive }) => `${isActive ? "active" : ""}`,
            children: subitem.label
          },
          void 0,
          !1,
          {
            fileName: "app/components/user/UserNavigation.tsx",
            lineNumber: 64,
            columnNumber: 45
          },
          this
        ) }, subitem.label, !1, {
          fileName: "app/components/user/UserNavigation.tsx",
          lineNumber: 63,
          columnNumber: 41
        }, this)) }, void 0, !1, {
          fileName: "app/components/user/UserNavigation.tsx",
          lineNumber: 61,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/user/UserNavigation.tsx",
          lineNumber: 60,
          columnNumber: 29
        }, this)
      ] }, item.label, !0, {
        fileName: "app/components/user/UserNavigation.tsx",
        lineNumber: 49,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/components/user/UserNavigation.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/user/UserNavigation.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV128("aside", { className: "border-t  px-6 py-3", children: [
      /* @__PURE__ */ jsxDEV128("span", { className: "flex items-center gap-1 mb-2 font-satoshi-bold", children: [
        /* @__PURE__ */ jsxDEV128(Svg, { src: icons.themeIcon }, void 0, !1, {
          fileName: "app/components/user/UserNavigation.tsx",
          lineNumber: 79,
          columnNumber: 21
        }, this),
        "Theme"
      ] }, void 0, !0, {
        fileName: "app/components/user/UserNavigation.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV128(
        Toggletip,
        {
          mainComponent,
          childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border  text-xs whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsxDEV128("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }, void 0, !1, {
              fileName: "app/components/user/UserNavigation.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV128("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }, void 0, !1, {
              fileName: "app/components/user/UserNavigation.tsx",
              lineNumber: 85,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV128("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" }, void 0, !1, {
              fileName: "app/components/user/UserNavigation.tsx",
              lineNumber: 86,
              columnNumber: 21
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/user/UserNavigation.tsx",
          lineNumber: 82,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/user/UserNavigation.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/user/UserNavigation.tsx",
    lineNumber: 35,
    columnNumber: 11
  }, this) : null;
}

// app/routes/user.tsx
import { jsxDEV as jsxDEV129 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "KOTMY | Admin" },
  { name: "description", content: "KOTMY Admin application" }
];
function Layout2({ children }) {
  let [showNav, setShowNav] = useState25(!1);
  return useEffect19(() => {
    setShowNav(window.innerWidth >= 640);
  }, []), /* @__PURE__ */ jsxDEV129("div", { className: "bg-tertiary text-admin-pry", children: [
    /* @__PURE__ */ jsxDEV129(UserPrimaryHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }, void 0, !1, {
      fileName: "app/routes/user.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV129(UserMobileHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }, void 0, !1, {
      fileName: "app/routes/user.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV129(UserMobileNavigation, { onClose: () => {
      setShowNav(!1);
    }, show: showNav }, void 0, !1, {
      fileName: "app/routes/user.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV129("div", { className: "sm:flex sm:h-[calc(100vh-85px)]", children: [
      /* @__PURE__ */ jsxDEV129(UserNavigation, { show: showNav }, void 0, !1, {
        fileName: "app/routes/user.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV129("div", { className: "flex-grow overflow-y-auto", children }, void 0, !1, {
        fileName: "app/routes/user.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/user.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user.tsx",
    lineNumber: 22,
    columnNumber: 13
  }, this);
}
function UserLayout() {
  return /* @__PURE__ */ jsxDEV129(Layout2, { children: /* @__PURE__ */ jsxDEV129(Outlet5, {}, void 0, !1, {
    fileName: "app/routes/user.tsx",
    lineNumber: 40,
    columnNumber: 20
  }, this) }, void 0, !1, {
    fileName: "app/routes/user.tsx",
    lineNumber: 40,
    columnNumber: 12
  }, this);
}
function ErrorBoundary3() {
  let { pathname } = useLocation10();
  return /* @__PURE__ */ jsxDEV129(Layout2, { children: /* @__PURE__ */ jsxDEV129("div", { className: "w-full max-sm:h-[calc(100dvh-73px)] p-5 m-auto lg:max-w-3xl grid place-content-center text-center gap-5", children: [
    /* @__PURE__ */ jsxDEV129("h2", { className: "text-xl font-bold text-red-500", children: "Something went wrong" }, void 0, !1, {
      fileName: "app/routes/user.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV129("p", { children: "Apologies, something went wrong on our end. Please try again." }, void 0, !1, {
      fileName: "app/routes/user.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV129(Cta_default, { element: "link", to: pathname, className: "px-4 py-1 rounded-md", children: "Reload page" }, void 0, !1, {
      fileName: "app/routes/user.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV129(Cta_default, { element: "link", to: "/user/overview", className: "px-4 py-1 rounded-md", children: "Back to User Home" }, void 0, !1, {
      fileName: "app/routes/user.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/user.tsx",
    lineNumber: 47,
    columnNumber: 12
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-BN57ME24.js", imports: ["/build/_shared/chunk-JXHNNPNR.js", "/build/_shared/chunk-MJSDHJ2L.js", "/build/_shared/chunk-H36SQQE5.js", "/build/_shared/chunk-JKUASME7.js", "/build/_shared/chunk-TVZC3ZTX.js", "/build/_shared/chunk-JAFVEBEK.js", "/build/_shared/chunk-N4FG5RPV.js", "/build/_shared/chunk-RODUX5XG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BPBBWJJ3.js", imports: ["/build/_shared/chunk-RZLOF3H4.js", "/build/_shared/chunk-X7MJWV53.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-2K2NFQ32.js", "/build/_shared/chunk-ULL45DVV.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_public": { id: "routes/_public", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_public-7ZZWGJRC.js", imports: ["/build/_shared/chunk-ZEGV464P.js", "/build/_shared/chunk-W4S7NLOA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public._index": { id: "routes/_public._index", parentId: "routes/_public", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_public._index-6YYHUHNM.js", imports: ["/build/_shared/chunk-LE3DZPGU.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-OZYT4FIK.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-ZE6ILQUM.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contest.contestant.$contestantId._index": { id: "routes/_public.contest.contestant.$contestantId._index", parentId: "routes/_public", path: "contest/contestant/:contestantId", index: !0, caseSensitive: void 0, module: "/build/routes/_public.contest.contestant.$contestantId._index-UMOHORKC.js", imports: ["/build/_shared/chunk-R5FEMUPW.js", "/build/_shared/chunk-RZLOF3H4.js", "/build/_shared/chunk-2FDPDHFG.js", "/build/_shared/chunk-YCFVPMRR.js", "/build/_shared/chunk-LE3DZPGU.js", "/build/_shared/chunk-WV3BS4QP.js", "/build/_shared/chunk-32JRU3E3.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-ZBCNQQYM.js", "/build/_shared/chunk-GQAGWWKM.js", "/build/_shared/chunk-26B2YPIV.js", "/build/_shared/chunk-QZKD4IBF.js", "/build/_shared/chunk-X7MJWV53.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-4BAH6F5C.js", "/build/_shared/chunk-I4GHAMQS.js", "/build/_shared/chunk-KWJHYQH5.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-4PSCNRID.js", "/build/_shared/chunk-OZYT4FIK.js", "/build/_shared/chunk-2K2NFQ32.js", "/build/_shared/chunk-ULL45DVV.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-AUWIFI2P.js", "/build/_shared/chunk-7G67FTYO.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests.$tournamentId.$contestId": { id: "routes/_public.contests.$tournamentId.$contestId", parentId: "routes/_public", path: "contests/:tournamentId/:contestId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.contests.$tournamentId.$contestId-PEIUA7ND.js", imports: ["/build/_shared/chunk-5XKVHEZW.js", "/build/_shared/chunk-AUWIFI2P.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests.$tournamentId.$contestId._index": { id: "routes/_public.contests.$tournamentId.$contestId._index", parentId: "routes/_public.contests.$tournamentId.$contestId", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_public.contests.$tournamentId.$contestId._index-X3JDNYK5.js", imports: ["/build/_shared/chunk-YCFVPMRR.js", "/build/_shared/chunk-LE3DZPGU.js", "/build/_shared/chunk-WV3BS4QP.js", "/build/_shared/chunk-32JRU3E3.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-ZEGV464P.js", "/build/_shared/chunk-ZBCNQQYM.js", "/build/_shared/chunk-GQAGWWKM.js", "/build/_shared/chunk-26B2YPIV.js", "/build/_shared/chunk-QZKD4IBF.js", "/build/_shared/chunk-X7MJWV53.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-4BAH6F5C.js", "/build/_shared/chunk-I4GHAMQS.js", "/build/_shared/chunk-KWJHYQH5.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-4PSCNRID.js", "/build/_shared/chunk-OZYT4FIK.js", "/build/_shared/chunk-2K2NFQ32.js", "/build/_shared/chunk-ULL45DVV.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-7G67FTYO.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-W4S7NLOA.js", "/build/_shared/chunk-ZE6ILQUM.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests.$tournamentId.$contestId.scoreboard": { id: "routes/_public.contests.$tournamentId.$contestId.scoreboard", parentId: "routes/_public.contests.$tournamentId.$contestId", path: "scoreboard", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.contests.$tournamentId.$contestId.scoreboard-LXJRBG7G.js", imports: ["/build/_shared/chunk-GQAGWWKM.js", "/build/_shared/chunk-26B2YPIV.js", "/build/_shared/chunk-QZKD4IBF.js", "/build/_shared/chunk-X7MJWV53.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-4BAH6F5C.js", "/build/_shared/chunk-I4GHAMQS.js", "/build/_shared/chunk-KWJHYQH5.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-4PSCNRID.js", "/build/_shared/chunk-OZYT4FIK.js", "/build/_shared/chunk-2K2NFQ32.js", "/build/_shared/chunk-ULL45DVV.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-7G67FTYO.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-W4S7NLOA.js", "/build/_shared/chunk-ZE6ILQUM.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests.$tournamentId.$contestId.stage_upload": { id: "routes/_public.contests.$tournamentId.$contestId.stage_upload", parentId: "routes/_public.contests.$tournamentId.$contestId", path: "stage_upload", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.contests.$tournamentId.$contestId.stage_upload-PKYAKKPH.js", imports: ["/build/_shared/chunk-2FDPDHFG.js", "/build/_shared/chunk-32JRU3E3.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-ZEGV464P.js", "/build/_shared/chunk-ZBCNQQYM.js", "/build/_shared/chunk-4BAH6F5C.js", "/build/_shared/chunk-I4GHAMQS.js", "/build/_shared/chunk-KWJHYQH5.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-4PSCNRID.js", "/build/_shared/chunk-OZYT4FIK.js", "/build/_shared/chunk-2K2NFQ32.js", "/build/_shared/chunk-ULL45DVV.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-W4S7NLOA.js", "/build/_shared/chunk-ZE6ILQUM.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests.$tournamentId._index": { id: "routes/_public.contests.$tournamentId._index", parentId: "routes/_public", path: "contests/:tournamentId", index: !0, caseSensitive: void 0, module: "/build/routes/_public.contests.$tournamentId._index-CNFGCEKD.js", imports: ["/build/_shared/chunk-X2M6HMVF.js", "/build/_shared/chunk-R3PEAKI3.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-5XKVHEZW.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests._index": { id: "routes/_public.contests._index", parentId: "routes/_public", path: "contests", index: !0, caseSensitive: void 0, module: "/build/routes/_public.contests._index-4HNUAMSO.js", imports: ["/build/_shared/chunk-X2M6HMVF.js", "/build/_shared/chunk-R3PEAKI3.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.results.$contestId": { id: "routes/_public.results.$contestId", parentId: "routes/_public", path: "results/:contestId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.results.$contestId-BXZKPKJW.js", imports: ["/build/_shared/chunk-VR2MBONM.js", "/build/_shared/chunk-5XKVHEZW.js", "/build/_shared/chunk-BDARQS7C.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.results._index": { id: "routes/_public.results._index", parentId: "routes/_public", path: "results", index: !0, caseSensitive: void 0, module: "/build/routes/_public.results._index-GWWWOPOI.js", imports: ["/build/_shared/chunk-X2M6HMVF.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.winner.$winnerId": { id: "routes/_public.winner.$winnerId", parentId: "routes/_public", path: "winner/:winnerId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.winner.$winnerId-7XTWOPZZ.js", imports: ["/build/_shared/chunk-5XKVHEZW.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.winners": { id: "routes/_public.winners", parentId: "routes/_public", path: "winners", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.winners-MFJEUMUV.js", imports: ["/build/_shared/chunk-5XKVHEZW.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-Q3GKEDHQ.js", imports: ["/build/_shared/chunk-EFI4VCMW.js", "/build/_shared/chunk-EIXTGZCZ.js", "/build/_shared/chunk-KWJHYQH5.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-4PSCNRID.js", "/build/_shared/chunk-OZYT4FIK.js", "/build/_shared/chunk-W4S7NLOA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/admin._index": { id: "routes/admin._index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin._index-M2RJKA64.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.accounts.$userId": { id: "routes/admin.accounts.$userId", parentId: "routes/admin", path: "accounts/:userId", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.accounts.$userId-5BJUA43T.js", imports: ["/build/_shared/chunk-3BBQ6F3G.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-VR2MBONM.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.accounts._index": { id: "routes/admin.accounts._index", parentId: "routes/admin", path: "accounts", index: !0, caseSensitive: void 0, module: "/build/routes/admin.accounts._index-MHHJ57NG.js", imports: ["/build/_shared/chunk-46VE3STF.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-BDARQS7C.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.accounts.add": { id: "routes/admin.accounts.add", parentId: "routes/admin", path: "accounts/add", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.accounts.add-3ZIGHREO.js", imports: ["/build/_shared/chunk-3BBQ6F3G.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-VR2MBONM.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-ZE6ILQUM.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.contests.$contestId.$stageId": { id: "routes/admin.contests.$contestId.$stageId", parentId: "routes/admin", path: "contests/:contestId/:stageId", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.contests.$contestId.$stageId-OSJPZIVK.js", imports: ["/build/_shared/chunk-JRTD7IYB.js", "/build/_shared/chunk-CLVEAIQ2.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-ZBCNQQYM.js", "/build/_shared/chunk-QZKD4IBF.js", "/build/_shared/chunk-X7MJWV53.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-I4GHAMQS.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-2K2NFQ32.js", "/build/_shared/chunk-ULL45DVV.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-5XKVHEZW.js", "/build/_shared/chunk-AUWIFI2P.js", "/build/_shared/chunk-XSBHZULL.js", "/build/_shared/chunk-577Q6RJD.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.contests.$contestId._index": { id: "routes/admin.contests.$contestId._index", parentId: "routes/admin", path: "contests/:contestId", index: !0, caseSensitive: void 0, module: "/build/routes/admin.contests.$contestId._index-D3ZRV6TD.js", imports: ["/build/_shared/chunk-WOZ2LMC5.js", "/build/_shared/chunk-JRTD7IYB.js", "/build/_shared/chunk-R3PEAKI3.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-VR2MBONM.js", "/build/_shared/chunk-26B2YPIV.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-5XKVHEZW.js", "/build/_shared/chunk-577Q6RJD.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.contests._index": { id: "routes/admin.contests._index", parentId: "routes/admin", path: "contests", index: !0, caseSensitive: void 0, module: "/build/routes/admin.contests._index-7AHMN6ML.js", imports: ["/build/_shared/chunk-QKAZY5H4.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-QZKD4IBF.js", "/build/_shared/chunk-X7MJWV53.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-5XKVHEZW.js", "/build/_shared/chunk-XSBHZULL.js", "/build/_shared/chunk-577Q6RJD.js", "/build/_shared/chunk-BDARQS7C.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.contests.add": { id: "routes/admin.contests.add", parentId: "routes/admin", path: "contests/add", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.contests.add-IUFZMEPP.js", imports: ["/build/_shared/chunk-WOZ2LMC5.js", "/build/_shared/chunk-R3PEAKI3.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-VR2MBONM.js", "/build/_shared/chunk-32JRU3E3.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-26B2YPIV.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-5XKVHEZW.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.overview": { id: "routes/admin.overview", parentId: "routes/admin", path: "overview", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.overview-BLNJS4JU.js", imports: ["/build/_shared/chunk-SUZBMRMM.js", "/build/_shared/chunk-46VE3STF.js", "/build/_shared/chunk-QKAZY5H4.js", "/build/_shared/chunk-R3PEAKI3.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-QZKD4IBF.js", "/build/_shared/chunk-X7MJWV53.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-I4GHAMQS.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-2K2NFQ32.js", "/build/_shared/chunk-ULL45DVV.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-5XKVHEZW.js", "/build/_shared/chunk-XSBHZULL.js", "/build/_shared/chunk-577Q6RJD.js", "/build/_shared/chunk-BDARQS7C.js", "/build/_shared/chunk-7G67FTYO.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.tournaments.$ID._index": { id: "routes/admin.tournaments.$ID._index", parentId: "routes/admin", path: "tournaments/:ID", index: !0, caseSensitive: void 0, module: "/build/routes/admin.tournaments.$ID._index-Z6Z5XPO6.js", imports: ["/build/_shared/chunk-QKAZY5H4.js", "/build/_shared/chunk-R3PEAKI3.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-QZKD4IBF.js", "/build/_shared/chunk-X7MJWV53.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-5XKVHEZW.js", "/build/_shared/chunk-XSBHZULL.js", "/build/_shared/chunk-577Q6RJD.js", "/build/_shared/chunk-BDARQS7C.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.tournaments.$ID.edit": { id: "routes/admin.tournaments.$ID.edit", parentId: "routes/admin", path: "tournaments/:ID/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.tournaments.$ID.edit-L5QTWW4P.js", imports: ["/build/_shared/chunk-JRTD7IYB.js", "/build/_shared/chunk-R3PEAKI3.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.tournaments._index": { id: "routes/admin.tournaments._index", parentId: "routes/admin", path: "tournaments", index: !0, caseSensitive: void 0, module: "/build/routes/admin.tournaments._index-AO2OSHK6.js", imports: ["/build/_shared/chunk-SUZBMRMM.js", "/build/_shared/chunk-R3PEAKI3.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-QZKD4IBF.js", "/build/_shared/chunk-X7MJWV53.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.tournaments.add": { id: "routes/admin.tournaments.add", parentId: "routes/admin", path: "tournaments/add", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.tournaments.add-KQ6G6D66.js", imports: ["/build/_shared/chunk-R3PEAKI3.js", "/build/_shared/chunk-4HHIBCKL.js", "/build/_shared/chunk-32JRU3E3.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.transactions.contest-registrations": { id: "routes/admin.transactions.contest-registrations", parentId: "routes/admin", path: "transactions/contest-registrations", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.transactions.contest-registrations-DOMI2V3N.js", imports: ["/build/_shared/chunk-XSBHZULL.js", "/build/_shared/chunk-577Q6RJD.js", "/build/_shared/chunk-BDARQS7C.js", "/build/_shared/chunk-7G67FTYO.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.transactions.income-history": { id: "routes/admin.transactions.income-history", parentId: "routes/admin", path: "transactions/income-history", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.transactions.income-history-XM6ZCPG6.js", imports: ["/build/_shared/chunk-XSBHZULL.js", "/build/_shared/chunk-BDARQS7C.js", "/build/_shared/chunk-7G67FTYO.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.transactions.tally-votes": { id: "routes/admin.transactions.tally-votes", parentId: "routes/admin", path: "transactions/tally-votes", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.transactions.tally-votes-TYSLXBIB.js", imports: ["/build/_shared/chunk-CLVEAIQ2.js", "/build/_shared/chunk-VR2MBONM.js", "/build/_shared/chunk-QZKD4IBF.js", "/build/_shared/chunk-X7MJWV53.js", "/build/_shared/chunk-UYUXJ2BI.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-XSBHZULL.js", "/build/_shared/chunk-577Q6RJD.js", "/build/_shared/chunk-BDARQS7C.js", "/build/_shared/chunk-7G67FTYO.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-UNSNIDNJ.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-BWV654RK.js", imports: ["/build/_shared/chunk-6B4B2FMH.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-OZYT4FIK.js", "/build/_shared/chunk-W4S7NLOA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-33ZZJC3L.js", imports: ["/build/_shared/chunk-6B4B2FMH.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user": { id: "routes/user", parentId: "root", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/user-EAARXBPS.js", imports: ["/build/_shared/chunk-EFI4VCMW.js", "/build/_shared/chunk-6B4B2FMH.js", "/build/_shared/chunk-EIXTGZCZ.js", "/build/_shared/chunk-KWJHYQH5.js", "/build/_shared/chunk-DGIR3IGL.js", "/build/_shared/chunk-4PSCNRID.js", "/build/_shared/chunk-OZYT4FIK.js", "/build/_shared/chunk-W4S7NLOA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/user.contestant.$contestantId": { id: "routes/user.contestant.$contestantId", parentId: "routes/user", path: "contestant/:contestantId", index: void 0, caseSensitive: void 0, module: "/build/routes/user.contestant.$contestantId-GTYUSPUQ.js", imports: ["/build/_shared/chunk-RZLOF3H4.js", "/build/_shared/chunk-WV3BS4QP.js", "/build/_shared/chunk-32JRU3E3.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-ZEGV464P.js", "/build/_shared/chunk-ZBCNQQYM.js", "/build/_shared/chunk-I4GHAMQS.js", "/build/_shared/chunk-NOEFVVE2.js", "/build/_shared/chunk-2K2NFQ32.js", "/build/_shared/chunk-ULL45DVV.js", "/build/_shared/chunk-AV2RONJM.js", "/build/_shared/chunk-N5XOLCME.js", "/build/_shared/chunk-CMHVCBDB.js", "/build/_shared/chunk-LOUTNZN4.js", "/build/_shared/chunk-6BY4NF3F.js", "/build/_shared/chunk-ZE6ILQUM.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.pending-uploads": { id: "routes/user.pending-uploads", parentId: "routes/user", path: "pending-uploads", index: void 0, caseSensitive: void 0, module: "/build/routes/user.pending-uploads-IIZEZ6LP.js", imports: ["/build/_shared/chunk-R5FEMUPW.js", "/build/_shared/chunk-RZLOF3H4.js", "/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "a7f3fac0", hmr: { runtime: "/build/_shared/chunk-JAFVEBEK.js", timestamp: 1764481022032 }, url: "/build/manifest-A7F3FAC0.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_public.contests.$tournamentId.$contestId.stage_upload": {
    id: "routes/_public.contests.$tournamentId.$contestId.stage_upload",
    parentId: "routes/_public.contests.$tournamentId.$contestId",
    path: "stage_upload",
    index: void 0,
    caseSensitive: void 0,
    module: public_contests_tournamentId_contestId_stage_upload_exports
  },
  "routes/_public.contests.$tournamentId.$contestId.scoreboard": {
    id: "routes/_public.contests.$tournamentId.$contestId.scoreboard",
    parentId: "routes/_public.contests.$tournamentId.$contestId",
    path: "scoreboard",
    index: void 0,
    caseSensitive: void 0,
    module: public_contests_tournamentId_contestId_scoreboard_exports
  },
  "routes/_public.contests.$tournamentId.$contestId._index": {
    id: "routes/_public.contests.$tournamentId.$contestId._index",
    parentId: "routes/_public.contests.$tournamentId.$contestId",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: public_contests_tournamentId_contestId_index_exports
  },
  "routes/_public.contest.contestant.$contestantId._index": {
    id: "routes/_public.contest.contestant.$contestantId._index",
    parentId: "routes/_public",
    path: "contest/contestant/:contestantId",
    index: !0,
    caseSensitive: void 0,
    module: public_contest_contestant_contestantId_index_exports
  },
  "routes/_public.contests.$tournamentId.$contestId": {
    id: "routes/_public.contests.$tournamentId.$contestId",
    parentId: "routes/_public",
    path: "contests/:tournamentId/:contestId",
    index: void 0,
    caseSensitive: void 0,
    module: public_contests_tournamentId_contestId_exports
  },
  "routes/admin.transactions.contest-registrations": {
    id: "routes/admin.transactions.contest-registrations",
    parentId: "routes/admin",
    path: "transactions/contest-registrations",
    index: void 0,
    caseSensitive: void 0,
    module: admin_transactions_contest_registrations_exports
  },
  "routes/_public.contests.$tournamentId._index": {
    id: "routes/_public.contests.$tournamentId._index",
    parentId: "routes/_public",
    path: "contests/:tournamentId",
    index: !0,
    caseSensitive: void 0,
    module: public_contests_tournamentId_index_exports
  },
  "routes/admin.contests.$contestId.$stageId": {
    id: "routes/admin.contests.$contestId.$stageId",
    parentId: "routes/admin",
    path: "contests/:contestId/:stageId",
    index: void 0,
    caseSensitive: void 0,
    module: admin_contests_contestId_stageId_exports
  },
  "routes/admin.transactions.income-history": {
    id: "routes/admin.transactions.income-history",
    parentId: "routes/admin",
    path: "transactions/income-history",
    index: void 0,
    caseSensitive: void 0,
    module: admin_transactions_income_history_exports
  },
  "routes/admin.contests.$contestId._index": {
    id: "routes/admin.contests.$contestId._index",
    parentId: "routes/admin",
    path: "contests/:contestId",
    index: !0,
    caseSensitive: void 0,
    module: admin_contests_contestId_index_exports
  },
  "routes/admin.transactions.tally-votes": {
    id: "routes/admin.transactions.tally-votes",
    parentId: "routes/admin",
    path: "transactions/tally-votes",
    index: void 0,
    caseSensitive: void 0,
    module: admin_transactions_tally_votes_exports
  },
  "routes/user.contestant.$contestantId": {
    id: "routes/user.contestant.$contestantId",
    parentId: "routes/user",
    path: "contestant/:contestantId",
    index: void 0,
    caseSensitive: void 0,
    module: user_contestant_contestantId_exports
  },
  "routes/admin.tournaments.$ID._index": {
    id: "routes/admin.tournaments.$ID._index",
    parentId: "routes/admin",
    path: "tournaments/:ID",
    index: !0,
    caseSensitive: void 0,
    module: admin_tournaments_ID_index_exports
  },
  "routes/_public.results.$contestId": {
    id: "routes/_public.results.$contestId",
    parentId: "routes/_public",
    path: "results/:contestId",
    index: void 0,
    caseSensitive: void 0,
    module: public_results_contestId_exports
  },
  "routes/admin.tournaments.$ID.edit": {
    id: "routes/admin.tournaments.$ID.edit",
    parentId: "routes/admin",
    path: "tournaments/:ID/edit",
    index: void 0,
    caseSensitive: void 0,
    module: admin_tournaments_ID_edit_exports
  },
  "routes/_public.winner.$winnerId": {
    id: "routes/_public.winner.$winnerId",
    parentId: "routes/_public",
    path: "winner/:winnerId",
    index: void 0,
    caseSensitive: void 0,
    module: public_winner_winnerId_exports
  },
  "routes/admin.tournaments._index": {
    id: "routes/admin.tournaments._index",
    parentId: "routes/admin",
    path: "tournaments",
    index: !0,
    caseSensitive: void 0,
    module: admin_tournaments_index_exports
  },
  "routes/_public.contests._index": {
    id: "routes/_public.contests._index",
    parentId: "routes/_public",
    path: "contests",
    index: !0,
    caseSensitive: void 0,
    module: public_contests_index_exports
  },
  "routes/_public.results._index": {
    id: "routes/_public.results._index",
    parentId: "routes/_public",
    path: "results",
    index: !0,
    caseSensitive: void 0,
    module: public_results_index_exports
  },
  "routes/admin.accounts.$userId": {
    id: "routes/admin.accounts.$userId",
    parentId: "routes/admin",
    path: "accounts/:userId",
    index: void 0,
    caseSensitive: void 0,
    module: admin_accounts_userId_exports
  },
  "routes/admin.accounts._index": {
    id: "routes/admin.accounts._index",
    parentId: "routes/admin",
    path: "accounts",
    index: !0,
    caseSensitive: void 0,
    module: admin_accounts_index_exports
  },
  "routes/admin.contests._index": {
    id: "routes/admin.contests._index",
    parentId: "routes/admin",
    path: "contests",
    index: !0,
    caseSensitive: void 0,
    module: admin_contests_index_exports
  },
  "routes/admin.tournaments.add": {
    id: "routes/admin.tournaments.add",
    parentId: "routes/admin",
    path: "tournaments/add",
    index: void 0,
    caseSensitive: void 0,
    module: admin_tournaments_add_exports
  },
  "routes/user.pending-uploads": {
    id: "routes/user.pending-uploads",
    parentId: "routes/user",
    path: "pending-uploads",
    index: void 0,
    caseSensitive: void 0,
    module: user_pending_uploads_exports
  },
  "routes/admin.accounts.add": {
    id: "routes/admin.accounts.add",
    parentId: "routes/admin",
    path: "accounts/add",
    index: void 0,
    caseSensitive: void 0,
    module: admin_accounts_add_exports
  },
  "routes/admin.contests.add": {
    id: "routes/admin.contests.add",
    parentId: "routes/admin",
    path: "contests/add",
    index: void 0,
    caseSensitive: void 0,
    module: admin_contests_add_exports
  },
  "routes/_public.winners": {
    id: "routes/_public.winners",
    parentId: "routes/_public",
    path: "winners",
    index: void 0,
    caseSensitive: void 0,
    module: public_winners_exports
  },
  "routes/_public._index": {
    id: "routes/_public._index",
    parentId: "routes/_public",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: public_index_exports
  },
  "routes/admin.overview": {
    id: "routes/admin.overview",
    parentId: "routes/admin",
    path: "overview",
    index: void 0,
    caseSensitive: void 0,
    module: admin_overview_exports
  },
  "routes/admin._index": {
    id: "routes/admin._index",
    parentId: "routes/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_index_exports
  },
  "routes/_public": {
    id: "routes/_public",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: public_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/user": {
    id: "routes/user",
    parentId: "root",
    path: "user",
    index: void 0,
    caseSensitive: void 0,
    module: user_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
