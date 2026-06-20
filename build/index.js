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
import { jsx } from "react/jsx-runtime";
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
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
var global_default = "/build/_assets/global-EFAKS5ZB.css";

// app/autoplaycarousel.css
var autoplaycarousel_default = "/build/_assets/autoplaycarousel-UE5MKUNL.css";

// app/toggle.css
var toggle_default = "/build/_assets/toggle-FAZVZQNV.css";

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
async function setToast({ request, headers = new Headers(), toast: toast5 }) {
  let cookies = headers.get("Set-Cookie") ?? request.headers.get("Cookie"), session = await getSession(cookies);
  return session.flash("alert", toast5), headers.append("Set-Cookie", await commitSession(session)), { headers };
}
async function nickToast({ request, headers = new Headers() }) {
  let session = await getSession(request.headers.get("Cookie")), toast5 = session.get("alert");
  return headers.append("Set-Cookie", await commitSession(session)), { headers, toast: toast5 };
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
import { jsx as jsx2 } from "react/jsx-runtime";
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
  }, [isTransitioning]), /* @__PURE__ */ jsx2(
    "div",
    {
      role: "progressbar",
      "aria-hidden": !isTransitioning,
      "aria-valuetext": isTransitioning ? "Loading" : void 0,
      className: "fixed inset-x-0 top-0 left-0 z-50 h-1 animate-pulse",
      children: /* @__PURE__ */ jsx2(
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
        }
      )
    }
  );
}

// app/components/reusables/Cta.tsx
import React from "react";
import { Link } from "@remix-run/react";
import cn2 from "classnames";
import { jsx as jsx3 } from "react/jsx-runtime";
var Cta_default = React.forwardRef(function({ variant = "solid", kind = "primary", ...props }, ref) {
  return "voted" in props && delete props.voted, props.element === "button" ? /* @__PURE__ */ jsx3("button", { ref, ...props, className: cn2("border whitespace-nowrap text-center", {
    "border-disabled text-inherit": props.disabled,
    "bg-accent border-accent hover:bg-accent/90 text-secondary": variant === "solid",
    "bg-red-600 border-red-600 hover:bg-red-400 text-secondary": variant === "solid" && kind === "danger",
    "bg-gray-300 border-disabled": variant === "solid" && props.disabled,
    "text-accent border-accent border-2": variant === "outline",
    "border-red-400 text-red-400": kind === "danger" && !props.disabled,
    "border-none": variant === "ghost"
  }, props.className), children: props.children }) : /* @__PURE__ */ jsx3(Link, { ...props, className: cn2("border whitespace-nowrap text-center", {
    "bg-accent border-accent hover:bg-accent/90 text-secondary": variant === "solid",
    "text-accent border-accent border-2": variant === "outline",
    "border-red-400": kind === "danger",
    "text-red-400": kind === "danger"
  }, props.className), children: props.children });
});

// app/components/reusables/toast.tsx
import * as React2 from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var ToastProvider = ToastPrimitives.Provider, ToastViewport = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
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
), Toast = React2.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx4(
  ToastPrimitives.Root,
  {
    ref,
    className: cn(toastVariants({ variant }), className),
    ...props
  }
));
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx4(Cross2Icon, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
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
}, reducer = (state, action30) => {
  switch (action30.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action30.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action30.toast.id ? { ...t, ...action30.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      let { toastId } = action30;
      return toastId ? addToRemoveQueue(toastId) : state.toasts.forEach((toast5) => {
        addToRemoveQueue(toast5.id);
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
      return action30.toastId === void 0 ? {
        ...state,
        toasts: []
      } : {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action30.toastId)
      };
  }
}, listeners = [], memoryState = { toasts: [] };
function dispatch(action30) {
  memoryState = reducer(memoryState, action30), listeners.forEach((listener) => {
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
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
function Toaster() {
  let { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action: action30, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx5(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx5(ToastDescription, { children: description })
        ] }),
        action30,
        /* @__PURE__ */ jsx5(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx5(ToastViewport, {})
  ] });
}

// app/root.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: autoplaycarousel_default },
  { rel: "stylesheet", href: toggle_default }
];
async function loader({ request }) {
  let { toast: toast5, headers } = await nickToast({ request });
  return json({ toast: toast5 }, { headers });
}
function Document({ children }) {
  return /* @__PURE__ */ jsxs2("html", { lang: "en", className: "scroll-smooth", children: [
    /* @__PURE__ */ jsxs2("head", { children: [
      /* @__PURE__ */ jsx6("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx6("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx6(Meta, {}),
      /* @__PURE__ */ jsx6(Links, {})
    ] }),
    /* @__PURE__ */ jsxs2("body", { className: "font-satoshi text-primary", children: [
      /* @__PURE__ */ jsx6(PageTransitionProgressBar, {}),
      children,
      /* @__PURE__ */ jsx6(ScrollRestoration, {}),
      /* @__PURE__ */ jsx6(Scripts, {}),
      /* @__PURE__ */ jsx6(LiveReload, {})
    ] })
  ] });
}
function App() {
  let { toast: toastMsg } = useLoaderData(), { toast: toast5 } = useToast();
  return useEffect3(() => {
    if (toastMsg) {
      let [type, message] = toastMsg.split("::");
      toast5({
        title: type === "success" ? "Success!" : "Oops! There seems to be a problem",
        variant: type === "success" ? "default" : "destructive",
        description: message
      });
    }
  }, [toastMsg]), /* @__PURE__ */ jsxs2(Document, { children: [
    /* @__PURE__ */ jsx6(Outlet, {}),
    /* @__PURE__ */ jsx6(Toaster, {})
  ] });
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
  return /* @__PURE__ */ jsx6(Document, { children: /* @__PURE__ */ jsxs2("section", { className: "h-dvh p-5 grid gap-5 place-content-center text-center", children: [
    /* @__PURE__ */ jsx6("h1", { className: "text-xl font-bold text-red-500", children: heading }),
    /* @__PURE__ */ jsx6("p", { children: message }),
    errorMessage && /* @__PURE__ */ jsx6("div", { className: "border-4 border-red-500 p-10", children: /* @__PURE__ */ jsxs2("p", { children: [
      "Error message: ",
      errorMessage
    ] }) }),
    /* @__PURE__ */ jsx6(Cta_default, { element: "link", to: "/", className: "px-4 py-1 rounded-md", children: "Back to homepage" })
  ] }) });
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
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
function ContestTimer({ deadline, title }) {
  let { days, hours, minutes, seconds } = useDuration(deadline);
  return /* @__PURE__ */ jsxs3("div", { className: "my-6", children: [
    /* @__PURE__ */ jsx7("p", { className: "font-satoshi-bold uppercase mb-2 text-sm", children: title }),
    /* @__PURE__ */ jsxs3("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxs3("div", { className: "grid text-center", children: [
        /* @__PURE__ */ jsx7("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: days }),
        /* @__PURE__ */ jsx7("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "DAYS" })
      ] }),
      ":",
      /* @__PURE__ */ jsxs3("div", { className: "grid text-center", children: [
        /* @__PURE__ */ jsx7("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: hours }),
        /* @__PURE__ */ jsx7("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "HOURS" })
      ] }),
      ":",
      /* @__PURE__ */ jsxs3("div", { className: "grid text-center", children: [
        /* @__PURE__ */ jsx7("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: minutes }),
        /* @__PURE__ */ jsx7("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "MINUTES" })
      ] }),
      ":",
      /* @__PURE__ */ jsxs3("div", { className: "grid text-center", children: [
        /* @__PURE__ */ jsx7("span", { className: "font-satoshi-black text-xl lg:text-2xl", children: seconds }),
        /* @__PURE__ */ jsx7("span", { className: "font-satoshi-bold text-xs lg:text-base", children: "SECONDS" })
      ] })
    ] })
  ] });
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
import { jsx as jsx8 } from "react/jsx-runtime";
function StatusTag({ status, className, color = "gray" }) {
  return /* @__PURE__ */ jsx8("span", { className: cn3(`w-fit px-4 pl-7 py-1.5 rounded-md text-sm capitalize font-satoshi-medium flex items-center ${className}`, {
    "bg-green-100 text-green-700": color === "green",
    "bg-yellow-100 text-yellow-700": color === "yellow",
    "bg-red-100 text-red-700": color === "red",
    "bg-gray-100 text-gray-700": color === "gray"
  }), children: /* @__PURE__ */ jsx8("span", { className: "before:content-['\u2022'] before:absolute relative before:-left-4 before:top-[10%] before:text-2xl before:leading-3 whitespace-nowrap", children: status }) });
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
  // increased timeout to 20 minutes (1200000 ms)
  timeout: 20 * 60 * 1e3,
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
    return "/v2/api/users/all_roles";
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
  static toggleEnableStageBonus() {
    return "/v2/api/contest/toggle_stage_bonus";
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
  static get signup() {
    return "/v2/api/users/signup";
  }
  static get me() {
    return "/v2/api/users/me";
  }
  static get updateProfile() {
    return "/v2/api/users/updateprofile/";
  }
  static get userWallets() {
    return "/v2/api/wallet/user_wallets";
  }
  static get organizationWallets() {
    return "/v2/api/wallet/organizations_wallets";
  }
  static get userLedgers() {
    return "/v2/api/wallet/ledgers";
  }
  static get organizationLedgers() {
    return "/v2/api/wallet/organization_ledgers";
  }
  static get walletMetrics() {
    return "/v2/api/wallet/wallet_metrics";
  }
  static get adminPayments() {
    return "/v2/api/admin/payment/payments";
  }
  static get createBankPayment() {
    return "/v2/api/admin/create_payment";
  }
  static get createWithdrawalPin() {
    return "/v2/api/wallet/create_withdrawal_pin";
  }
  static getPartnerProductById(productId) {
    return `/v2/api/partner/products/${productId}`;
  }
  static updatePartnerProduct(productId) {
    return `/v2/api/partner/products/${productId}`;
  }
  static get requestWithdrawalTokenForPinCreation() {
    return "/v2/api/wallet/request_create_withdrawal_token";
  }
  static get setWithdrawalPin() {
    return "/v2/api/wallet/create_withdrawal_pin";
  }
  static getWalletWithdrawalAccounts(walletId) {
    return `/v2/api/wallet/get_wallet_withdrawal_accounts/${walletId}`;
  }
  static getBanksForCurrency(currency) {
    return `/v2/api/wallet/get_banks_for_currency/${currency}`;
  }
  static get resolveAccountDetails() {
    return "/v2/api/wallet/resolve_account_details";
  }
  static get addACCountDetails() {
    return "/v2/api/wallet/save_personal_withdrawal_account";
  }
  static get getWithdrawalCharges() {
    return "/v2/api/wallet/get_withdrawal_charge_for_account";
  }
  static get requestWithdrawal() {
    return "/v2/api/wallet/request_withdrawal";
  }
  static get createAdminUser() {
    return "/v2/api/users/admin_create_user";
  }
  static getUserById(id) {
    return `/v2/api/admin/user/${id}`;
  }
  static updateUser(id) {
    return `/v2/api/users/update_user/${id}`;
  }
  static get pagedUsers() {
    return "/v2/api/users/get_paged_staff_accounts";
  }
  static get pagedReferralBoard() {
    return "/v2/api/wallet/affiliate_leaderboard";
  }
  static get adminAffiliateBoard() {
    return "/v2/api/admin/affiliate_leaderboard";
  }
  static get requestPartnership() {
    return "/v2/api/partner";
  }
  static get partnerSearch() {
    return "/v2/api/partner";
  }
  static get createPartnerProduct() {
    return "/v2/api/partner/products";
  }
  static get getMarketplaceProducts() {
    return "/v2/api/market_place/products";
  }
  static get getPartnerCartItems() {
    return "/v2/api/partner/cart/items";
  }
  static get getPartnerProducts() {
    return "/v2/api/partner/products";
  }
  static get getPartnerLocations() {
    return "/v2/api/partner/location";
  }
  static getPartnerBusinessDetails(businessId) {
    return `/v2/api/partner/business_details/${businessId}`;
  }
  static get updatePartnerBusinessStatus() {
    return "/v2/api/partner/status";
  }
  static get addBusinessOwner() {
    return "/v2/api/partner/add_business_owner";
  }
};

// app/services/contestant/contestant.server.ts
var ContestantRepository = class {
  async callTallyWebhook(dto) {
    let res = await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.callTallyWebhook,
      // headers: { "verif-hash": "FLWSECK_TESTfae195a81741" },
      data: dto
    });
    return console.log("Tally webhook called. Response:", JSON.stringify(res)), res;
  }
  async editContestantAdmin(payload, token) {
    return await ApiCall.call({
      method: "PUT" /* PUT */,
      url: ApiEndPoints.editContestant(payload.contestantId),
      headers: {
        // Authorization: `Bearer ${token}`, 
        "Content-Type": "multipart/form-data"
      },
      data: payload.dto
    }, token);
  }
  async getTallyLink(dto) {
    return await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.getTallyLink,
      data: dto
    });
  }
  async registerContestant(payload, cookies) {
    return console.log("Cookies2", cookies), await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.registerContestant(payload.contestId),
      headers: { "Content-Type": "multipart/form-data" },
      data: payload.dto
    }, cookies);
  }
  async toggleEvictContestants(dto, token) {
    return await ApiCall.call({
      method: "PATCH" /* PATCH */,
      url: ApiEndPoints.toggleEvictContestants,
      // headers: { Authorization: `Bearer ${token}` },
      data: dto
    }, token);
  }
  async voteContestant(payload, cookies) {
    return await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.voteContestant(payload.stageId),
      // headers: { device_fingerprint: payload.fingerprint },
      data: payload.dto
    }, cookies);
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
import { jsx as jsx9 } from "react/jsx-runtime";
function Svg({ src, width = "1.2em", height = "1.2em", use_width = "100%", className, onClick }) {
  return /* @__PURE__ */ jsx9(
    "svg",
    {
      onClick,
      className,
      width,
      height,
      children: /* @__PURE__ */ jsx9("use", { width: use_width, height: "100%", href: src })
    }
  );
}

// app/components/reusables/FormControl.tsx
import { Fragment, jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
function FormControl({ labelClassNames, labelText, error, ...props }) {
  let [showPassword, setShowPassword] = useState4(!1), formControlClasses = cn(
    "p-3 py-2 rounded-lg cursor-text w-full font-medium outline outline-1 outline-secondary hover:outline-accent focus-within:outline",
    "flex gap-2 items-center",
    { "outline-red-400 hover:outline-red-400": error },
    props.className
  ), errorElement = /* @__PURE__ */ jsxs4("span", { className: cn("mt-1 text-red-400 font-semibold leading-none flex gap-1.5 items-end", { hidden: !error }), children: [
    /* @__PURE__ */ jsx10(Svg, { src: icons.warningIcon }),
    error
  ] });
  return /* @__PURE__ */ jsxs4("label", { htmlFor: props.name, className: `block font-bold ${labelClassNames}`, children: [
    labelText,
    props.required ? /* @__PURE__ */ jsx10("span", { className: "text-red-400", children: "*" }) : "",
    props.as === "input" ? /* @__PURE__ */ jsxs4(Fragment, { children: [
      /* @__PURE__ */ jsxs4("div", { "aria-invalid": !!error, className: formControlClasses, children: [
        /* @__PURE__ */ jsx10(Svg, { src: props.icon ?? "", className: cn("basis-6", { hidden: !props.icon }) }),
        /* @__PURE__ */ jsx10(
          "input",
          {
            ...props,
            type: props.type === "password" && showPassword ? "text" : props.type,
            className: cn("bg-transparent autofill:bg-transparent outline-none grow shrink min-w-0 h-6")
          }
        ),
        /* @__PURE__ */ jsx10(
          Svg,
          {
            src: showPassword ? icons.hiddenIcon : icons.viewIcon,
            onClick: () => setShowPassword((prev) => !prev),
            className: cn("basis-6 cursor-pointer", { hidden: props.type !== "password" })
          }
        )
      ] }),
      errorElement
    ] }) : /* @__PURE__ */ jsxs4(Fragment, { children: [
      /* @__PURE__ */ jsx10("textarea", { cols: 30, rows: 6, ...props, className: `${formControlClasses} ${props.className}` }),
      errorElement
    ] })
  ] });
}

// app/components/reusables/Button.tsx
import cn4 from "classnames";
import { jsx as jsx11 } from "react/jsx-runtime";
function Button({
  children,
  element,
  className,
  variant = "solid",
  kind = "primary",
  ...props
}) {
  return /* @__PURE__ */ jsx11(element, { ...props, className: cn4(`py-4 px-8 text-lg border border-accent rounded-md font-black whitespace-nowrap leading-4 text-center ${className}`, {
    "bg-accent text-secondary": variant === "solid",
    "text-accent border-2": variant === "outline",
    "border-red-400": kind === "danger",
    "text-red-400": kind === "danger"
  }), children });
}

// app/components/public/contests/DragnDrop.tsx
import { useState as useState5 } from "react";
import { FileUploader } from "react-drag-drop-files";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var FILE_TYPES = ["JPG", "PNG"];
function DragnDrop({
  className = "",
  labelText = "Upload Images",
  name = "images",
  multiple = !1,
  required = !1,
  fileTypes = FILE_TYPES
}) {
  let [preview, setPreview] = useState5(null), handleChange = (file) => {
    let selectedFile = file instanceof FileList || Array.isArray(file) ? file[0] : file;
    selectedFile && selectedFile.type.startsWith("image/") ? setPreview(URL.createObjectURL(selectedFile)) : setPreview(null);
  };
  return /* @__PURE__ */ jsxs5("div", { className: `w-full max-w-full overflow-hidden ${className}`, children: [
    /* @__PURE__ */ jsxs5("span", { className: "font-bold", children: [
      labelText,
      required ? /* @__PURE__ */ jsx12("span", { className: "text-red-400", children: "*" }) : ""
    ] }),
    /* @__PURE__ */ jsx12(
      FileUploader,
      {
        name,
        types: fileTypes,
        multiple,
        required,
        handleChange,
        children: /* @__PURE__ */ jsxs5("div", { className: "flex flex-col gap-4 items-center p-6 border-2 hover:border-primary border-dashed rounded-lg", children: [
          /* @__PURE__ */ jsx12("div", { className: "border-2 border-black p-4 rounded-full w-fit", children: /* @__PURE__ */ jsx12(Svg, { src: icons.imageIcon }) }),
          /* @__PURE__ */ jsxs5("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxs5("p", { className: "text-center", children: [
              /* @__PURE__ */ jsx12("span", { className: "underline underline-offset-4 font-bold cursor-pointer", children: "Click here to upload" }),
              " ",
              /* @__PURE__ */ jsx12("span", { children: "or drag and drop" })
            ] }),
            /* @__PURE__ */ jsx12("span", { className: "font-bold text-gray-400", children: "JPG, PNG (max. 5mb)" })
          ] })
        ] })
      }
    ),
    preview && /* @__PURE__ */ jsxs5("div", { className: "mt-4 flex flex-col items-center", children: [
      /* @__PURE__ */ jsx12("span", { className: "text-xs text-gray-500 mb-1", children: "Image Preview:" }),
      /* @__PURE__ */ jsx12("img", { src: preview, alt: "Preview", className: "max-h-40 rounded shadow" })
    ] })
  ] });
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
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs6(
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
      /* @__PURE__ */ jsx13(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ jsx13(CaretSortIcon, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx13(ChevronUpIcon, {})
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx13(ChevronDownIcon, {})
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React4.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx13(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs6(
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
      /* @__PURE__ */ jsx13(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx13(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx13(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs6(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx13("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx13(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx13(CheckIcon, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx13(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
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
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
function StageUploadForm({ contest, contestant, hash }) {
  return /* @__PURE__ */ jsxs7(Form, { method: "POST", encType: "multipart/form-data", className: "bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6", children: [
    /* @__PURE__ */ jsx14("p", { className: "text-2xl font-satoshi-bold", children: "Upload your photo for the next stage." }),
    /* @__PURE__ */ jsxs7("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx14(
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
        }
      ),
      /* @__PURE__ */ jsx14(
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
        }
      )
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx14(
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
        }
      ),
      /* @__PURE__ */ jsx14(
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
        }
      )
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs7("label", { htmlFor: "gender", className: "font-bold flex flex-col", children: [
        "Gender",
        /* @__PURE__ */ jsxs7(Select, { name: "sex", required: !0, value: contestant?.contestant_biodata?.sex, disabled: !0, children: [
          /* @__PURE__ */ jsx14(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx14(SelectValue, { placeholder: "Gender" }) }),
          /* @__PURE__ */ jsxs7(SelectContent, { children: [
            /* @__PURE__ */ jsx14(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }),
            /* @__PURE__ */ jsx14(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs7("label", { htmlFor: "state_of_residence", className: "font-bold flex flex-col", children: [
        "State of Residence",
        /* @__PURE__ */ jsxs7(Select, { name: "state_of_residence", required: !0, value: contestant?.contestant_biodata?.state_of_residence, disabled: !0, children: [
          /* @__PURE__ */ jsx14(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx14(SelectValue, { placeholder: "Select a state" }) }),
          /* @__PURE__ */ jsx14(SelectContent, { children: Object.entries(nigerianStates).map(([key, val]) => /* @__PURE__ */ jsx14(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: val }, key)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx14(
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
        }
      ),
      /* @__PURE__ */ jsxs7("label", { htmlFor: "category", className: "font-bold flex flex-col", children: [
        "Category",
        /* @__PURE__ */ jsxs7(Select, { name: "category", required: !!contest.categories.length, defaultValue: contestant?.category, disabled: !0, children: [
          /* @__PURE__ */ jsx14(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx14(SelectValue, { placeholder: "Select a category" }) }),
          /* @__PURE__ */ jsx14(SelectContent, { children: contest.categories.map((category) => /* @__PURE__ */ jsx14(SelectItem, { value: category, className: "focus:bg-blue-700/25", children: category }, category)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx14(DragnDrop, { labelText: "Upload Image", name: "contestant_image", required: !0 }),
    /* @__PURE__ */ jsx14("input", { type: "hidden", name: "hash", value: hash }),
    /* @__PURE__ */ jsx14(Button, { element: "button", type: "submit", name: "intent", value: "stage_upload", className: "md:self-end", children: "Submit" })
  ] });
}

// app/routes/_public.contests.$tournamentId.$contestId.stage_upload.tsx
import { Fragment as Fragment2, jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx15("main", { className: "grow", children: contest ? /* @__PURE__ */ jsxs8(Fragment2, { children: [
    /* @__PURE__ */ jsxs8("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxs8("div", { className: "grid", children: [
        /* @__PURE__ */ jsxs8("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx15("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3 uppercase", children: contest.name }),
          /* @__PURE__ */ jsx15("p", { className: "font-satoshi-medium", children: contest.desc })
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "mt-6 grid grid-cols-2 gap-2 max-w-4xl", children: [
          /* @__PURE__ */ jsxs8("div", { className: "", children: [
            /* @__PURE__ */ jsx15("span", { className: "block font-satoshi-bold mb-1", children: "Status" }),
            /* @__PURE__ */ jsx15(StatusTag, { status: contest.status, color })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "", children: [
            /* @__PURE__ */ jsx15("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }),
            /* @__PURE__ */ jsx15("div", { className: "flex gap-4 flex-wrap capitalize", children: contest.categories.map((category) => /* @__PURE__ */ jsxs8("span", { children: [
              "~ ",
              category
            ] }, category)) })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx15("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }),
            /* @__PURE__ */ jsx15("span", { className: "block", children: contest.prizes })
          ] })
        ] }),
        /* @__PURE__ */ jsx15(
          ContestTimer,
          {
            deadline: new Date(contest.end_date),
            title: "contest ends in"
          }
        )
      ] }),
      /* @__PURE__ */ jsx15(
        "img",
        {
          src: contest.image || no_image_default,
          alt: "kid smiling",
          className: "w-full rounded-3xl h-[350px] object-cover"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs8("section", { className: "my-10 flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx15("div", { className: "wrapper", children: /* @__PURE__ */ jsxs8("h2", { className: "font-bold text-2xl textacc", children: [
        "Stage ",
        stage?.stage,
        " Form"
      ] }) }),
      /* @__PURE__ */ jsx15("div", { className: "wrapper flex", children: /* @__PURE__ */ jsx15(
        StageUploadForm,
        {
          contest,
          contestant: contest.stages[0]?.contestants?.[0],
          hash
        }
      ) })
    ] })
  ] }) : null });
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
  let dto = prepareContestantDTO(payload.dto), cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect("/login");
  let { data, error } = await contestantRepo.editContestantAdmin({ dto, contestantId: payload.contestantId }, cookieHeader);
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
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect("/login");
  let dto = {
    action: formData.get("intent"),
    stage_id: formData.get("stage_id"),
    contestants_ids: formData.get("contestants_ids").split("|")
  }, { error } = await contestantRepo.toggleEvictContestants(dto, cookieHeader);
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail ?? "Sorry, we could not update the contestants statuses at this time"}::${Date.now()}` });
    return json3(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::The contestants' statuses have been updated::${Date.now()}` });
  return json3(null, { headers });
}
async function registerContestant(formData, request, cookies) {
  let contestId = formData.get("contestId"), { data, error } = await contestantRepo.registerContestant({ contestId, dto: formData }, cookies);
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
  }, stageId = formData.get("stage_id"), cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) {
    let url = new URL(request.url);
    return { errorCode: "LOGIN_REQUIRED" };
  }
  let { fingerprint, headers: fingerprintHeaders } = await getFingerprint({ request }), { error, authRequired } = await contestantRepo.voteContestant({ dto, stageId }, cookieHeader);
  if (authRequired)
    return { errorCode: "LOGIN_REQUIRED" };
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
import { jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
function ProgressBar({ percentage }) {
  let progressBar = useRef2(null);
  return useEffect5(() => {
    progressBar.current?.style.setProperty("--progress", `${percentage}%`);
  }, []), /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx16("div", { ref: progressBar, className: "progressBar w-full sm:min-w-[70px] h-2 bg-[#EAEBF0] rounded", children: /* @__PURE__ */ jsx16("div", { className: "progress h-full w-[--progress] bg-[#6246EA] rounded" }) }),
    /* @__PURE__ */ jsxs9("span", { className: "text-sm font-bold", children: [
      percentage.toFixed(1),
      "%"
    ] })
  ] });
}

// app/components/public/contests/Grade.tsx
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
function Grade({ grade }) {
  let cleanedGrade = grade ? grade.toUpperCase() : "F";
  return /* @__PURE__ */ jsxs10("div", { className: "grid grid-cols-6 rounded-md overflow-hidden text-white text-xs font-black", children: [
    /* @__PURE__ */ jsx17("div", { className: cn("bg-grade-F h-full px-2 py-1 text-center"), children: cleanedGrade === "F" ? cleanedGrade : null }),
    /* @__PURE__ */ jsx17("div", { className: cn("h-full px-2 py-1 text-center", { "bg-grade-E": cleanedGrade <= "E", "bg-grade-Ea": cleanedGrade > "E" }), children: cleanedGrade === "E" ? cleanedGrade : null }),
    /* @__PURE__ */ jsx17("div", { className: cn("h-full px-2 py-1 text-center", { "bg-grade-D": cleanedGrade <= "D", "bg-grade-Da": cleanedGrade > "D" }), children: cleanedGrade === "D" ? cleanedGrade : null }),
    /* @__PURE__ */ jsx17("div", { className: cn("h-full px-2 py-1 text-center", { "bg-grade-C": cleanedGrade <= "C", "bg-grade-Ca": cleanedGrade > "C" }), children: cleanedGrade === "C" ? cleanedGrade : null }),
    /* @__PURE__ */ jsx17("div", { className: cn("h-full px-2 py-1 text-center", { "bg-grade-B": cleanedGrade <= "B", "bg-grade-Ba": cleanedGrade > "B" }), children: cleanedGrade === "B" ? cleanedGrade : null }),
    /* @__PURE__ */ jsx17("div", { className: cn("h-full px-2 py-1 text-center", { "bg-grade-A": cleanedGrade <= "A", "bg-grade-Aa": cleanedGrade > "A" }), children: cleanedGrade === "A" ? cleanedGrade : null })
  ] });
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
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
var VoteLink_default = React5.forwardRef(function({ type, url, count: count2, className = "", ...rest }, ref) {
  let props = url ? { element: "link", to: url, ...rest } : { element: "button", ref, ...rest };
  return /* @__PURE__ */ jsxs11(Cta_default, { ...props, variant: "outline", className: cn("p-2 flex items-center border rounded-full", {
    "border-facebook text-facebook bg-facebookBG hover:bg-facebook/15": type === "facebook",
    "border-instagram text-instagram bg-instagramBG hover:bg-instagram/15": type === "instagram",
    "border-twitter text-twitter bg-twitterBG hover:bg-twitter/15": type === "twitter",
    "border-tally text-tally bg-tallyBG hover:bg-tally/15": type === "tally",
    "border-givaah text-givaah bg-givaahBG hover:bg-givaah/15": type === "givaah"
  }, className), children: [
    /* @__PURE__ */ jsx18("span", { className: cn("w-6 h-6 flex items-center justify-center rounded-full p-1", {
      "bg-facebook": type === "facebook",
      "bg-instagram": type === "instagram",
      "bg-twitter": type === "twitter",
      "bg-tally": type === "tally",
      "bg-givaah": type === "givaah"
    }), children: /* @__PURE__ */ jsx18(Svg, { src: socialIcons[type] }) }),
    /* @__PURE__ */ jsx18("span", { className: "grow text-xs font-bold text-center mr-2", children: count2 })
  ] });
}), BonusLink = React5.forwardRef(function({ type, url, count: count2, className = "", ...rest }, ref) {
  let props = url ? { element: "link", to: url, ...rest } : { element: "button", ref, ...rest };
  return /* @__PURE__ */ jsxs11(Cta_default, { ...props, variant: "outline", className: cn("p-2 flex items-center border rounded-full", {
    "border-facebook text-facebook bg-facebookBG hover:bg-facebook/15": !0
  }, className), children: [
    /* @__PURE__ */ jsx18("span", { className: "w-6 h-6 flex items-center justify-center rounded-full p-1", children: /* @__PURE__ */ jsx18("span", { children: type }) }),
    /* @__PURE__ */ jsx18("span", { className: "grow text-xs font-bold text-center mr-2", children: count2 })
  ] });
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
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root, DialogTrigger = DialogPrimitive.Trigger, DialogPortal = DialogPrimitive.Portal, DialogClose = DialogPrimitive.Close, DialogOverlay = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React6.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs12(DialogPortal, { children: [
  /* @__PURE__ */ jsx19(DialogOverlay, {}),
  /* @__PURE__ */ jsxs12(
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
        /* @__PURE__ */ jsxs12(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx19(Cross2Icon2, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx19("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx19(
  "div",
  {
    className: cn(
      "flex flex-col text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx19(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// app/lib/data/payment.ts
var providers = [{ label: "Flutterwave", value: "flutterwave" }];

// app/components/public/contests/TallyVoteDialog.tsx
import { jsx as jsx20, jsxs as jsxs13 } from "react/jsx-runtime";
function TallyVoteDialog({ contestant, disabled, children }) {
  let stageContestants = useRouteLoaderData2("routes/_public.contests.$tournamentId.$contestId"), formRef = useRef3(null), { pathname, search } = useLocation(), redirectUrl = `${stageContestants?.baseUrl}${pathname}${search}`;
  return /* @__PURE__ */ jsxs13(Dialog, { modal: !0, children: [
    /* @__PURE__ */ jsx20(
      DialogTrigger,
      {
        asChild: !0,
        disabled,
        title: "Vote for contestant",
        className: cn("rounded-full outline-none", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: children ?? /* @__PURE__ */ jsx20(VoteLink_default, { type: "tally", count: numberSlang(contestant.vote.tally), className: "w-full" })
      }
    ),
    /* @__PURE__ */ jsxs13(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxs13(DialogHeader, { children: [
        /* @__PURE__ */ jsxs13(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsx20("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsx20(Svg, { src: icons.questionIcon }) }),
          /* @__PURE__ */ jsxs13("p", { children: [
            /* @__PURE__ */ jsx20("span", { className: "block", children: "Vote for contestant" }),
            /* @__PURE__ */ jsx20("span", { className: "font-normal text-base text-admin-pry", children: `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}` })
          ] })
        ] }),
        /* @__PURE__ */ jsx20(DialogDescription, { asChild: !0, className: "border-y p-4", children: /* @__PURE__ */ jsxs13(Form2, { ref: formRef, method: "post", className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx20(FormControl, { as: "input", id: "email", name: "email", labelText: "Email Address", labelClassNames: "text-left", required: !0 }),
          /* @__PURE__ */ jsx20(FormControl, { as: "input", id: "phone", name: "phone", labelText: "Phone Number", labelClassNames: "text-left" }),
          /* @__PURE__ */ jsx20(FormControl, { as: "input", id: "vote_quantity", name: "vote_quantity", labelText: "Vote Quantity", type: "number", labelClassNames: "text-left", defaultValue: 1, min: 1, required: !0 }),
          /* @__PURE__ */ jsxs13("label", { htmlFor: "provider", className: "font-bold flex flex-col text-left", children: [
            "Payment Provider",
            /* @__PURE__ */ jsxs13(Select, { name: "provider", required: !0, children: [
              /* @__PURE__ */ jsx20(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx20(SelectValue, { placeholder: "Select payment provider" }) }),
              /* @__PURE__ */ jsx20(SelectContent, { children: providers.map(({ label, value }) => /* @__PURE__ */ jsx20(SelectItem, { value, className: "focus:bg-blue-700/25", children: label }, value)) })
            ] })
          ] }),
          /* @__PURE__ */ jsx20("input", { type: "hidden", name: "contestant_id", value: contestant._id }),
          /* @__PURE__ */ jsx20("input", { type: "hidden", name: "redirect_url", value: redirectUrl }),
          /* @__PURE__ */ jsx20("input", { type: "hidden", name: "intent", value: "tally_vote" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs13(DialogFooter, { className: "flex justify-end gap-6 p-4", children: [
        /* @__PURE__ */ jsx20(DialogClose, { type: "submit", name: "intent", value: "delete", className: "px-10 py-2 rounded-md font-bold min-w-[90px] outline outline-1", children: "Cancel" }),
        /* @__PURE__ */ jsx20("button", { type: "submit", onClick: () => formRef.current?.submit(), className: "bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" })
      ] })
    ] })
  ] });
}

// app/components/public/contests/MobileScoreboard.tsx
import { useFetcher, useLocation as useLocation2, useNavigate } from "@remix-run/react";
import { useEffect as useEffect6, useState as useState6 } from "react";

// app/lib/store/store_managers/tokenManager.ts
import { useAtom } from "jotai";

// app/lib/store/atoms/token.ts
import { atom } from "jotai";
var tokenAtom = atom(null);
var userAtom = atom(null);

// app/lib/store/store_managers/tokenManager.ts
var rolesEnum = /* @__PURE__ */ ((rolesEnum2) => (rolesEnum2.admin = "admin", rolesEnum2["sales rep"] = "sales rep", rolesEnum2["content manager"] = "content manager", rolesEnum2["contestant manager"] = "contestant manager", rolesEnum2["manage user"] = "manage user", rolesEnum2))(rolesEnum || {}), useUserManager = () => {
  let [userStore, setUserStore] = useAtom(userAtom), setUserStoreManager = (newUser, persist) => (setUserStore(newUser), persist && newUser && (localStorage.setItem("atom_user", JSON.stringify(newUser)), console.log("persisted", newUser)), newUser), getUserStoreManager = () => {
    try {
      if (!userStore) {
        let storedUser = localStorage.getItem("atom_user");
        if (storedUser) {
          let newUser = JSON.parse(storedUser);
          return newUser.is_partner_account = newUser.business_id ? !0 : newUser.is_partner_account, setUserStore(newUser), newUser;
        }
      }
      return userStore;
    } catch {
      return null;
    }
  };
  return { setUserStoreManager, getUserStoreManager, deleteUserStoreManager: () => {
    setUserStore(null), localStorage.removeItem("atom_user");
  }, hasAcceptedRole: (user, acceptedRoles = []) => {
    let userRoles = getUserStoreManager()?.roles.map((r) => r.toLowerCase()) ?? [], userRolesSet = new Set(userRoles);
    if (console.log(userRolesSet), console.log(acceptedRoles), !user)
      return !1;
    if (acceptedRoles.length === 0)
      return !0;
    if (user.is_superuser)
      return console.log("Na super user be this o"), !0;
    for (let role of acceptedRoles)
      if (userRolesSet.has(role.toLowerCase()))
        return !0;
    return !1;
  }, rolesEnum };
};

// app/components/public/contests/MobileScoreboard.tsx
import { jsx as jsx21, jsxs as jsxs14 } from "react/jsx-runtime";
function MobileScoreboard({ contestants, socialMediaType }) {
  let fetcher = useFetcher(), [signInPrompt, setSignInPrompt] = useState6(!1), { getUserStoreManager } = useUserManager(), navigate = useNavigate(), location = useLocation2(), pathname = location.pathname, search = location.search, hash = location.hash, path = pathname + search + hash;
  return useEffect6(() => {
    console.log({ d: fetcher?.data }), fetcher.state === "idle" && fetcher.data && fetcher.data.errorCode === "LOGIN_REQUIRED" && setSignInPrompt(!0);
  }, [fetcher.state, fetcher.data]), signInPrompt ? /* @__PURE__ */ jsxs14("div", { className: "w-full max-w-xl bg-white border rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 py-12 px-6 sm:px-12 text-center", children: [
    /* @__PURE__ */ jsx21("svg", { width: "64", height: "64", fill: "none", viewBox: "0 0 24 24", className: "mx-auto mb-2 text-accent", children: /* @__PURE__ */ jsx21("path", { d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z", fill: "currentColor" }) }),
    /* @__PURE__ */ jsx21("h2", { className: "text-2xl font-satoshi-bold text-accent", children: "Sign In Required" }),
    /* @__PURE__ */ jsx21("p", { className: "text-gray-700 text-base max-w-md", children: "Voting for your favourite contestant requires you to sign in" }),
    /* @__PURE__ */ jsxs14("div", { className: "w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-center mt-2", children: [
      /* @__PURE__ */ jsx21(
        Button,
        {
          element: "button",
          onClick: () => navigate(`/login?redirectTo=${encodeURIComponent(path)}`),
          className: "w-full sm:inline-flex sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-accent text-white hover:bg-accent/90 transition",
          children: "Sign In"
        }
      ),
      /* @__PURE__ */ jsx21(
        Button,
        {
          element: "button",
          onClick: () => setSignInPrompt(!1),
          className: "w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition",
          children: "Go back"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs14("p", { className: "text-sm text-gray-400 mt-2", children: [
      "Don't have an account? ",
      /* @__PURE__ */ jsx21("span", { className: "underline text-accent cursor-pointer", onClick: () => navigate(`/signup?redirectTo=${encodeURIComponent(path)}`), children: "Sign up here" })
    ] })
  ] }) : /* @__PURE__ */ jsx21("div", { className: "grid gap-6 sm:hidden", children: contestants.map((contestant) => /* @__PURE__ */ jsxs14("article", { className: "bg-secondary border border-primary rounded-xl p-3 w-full", children: [
    /* @__PURE__ */ jsxs14("div", { className: "flex gap-4 mb-4 items-center", children: [
      /* @__PURE__ */ jsxs14("span", { className: "font-satoshi-bold", children: [
        contestant.result.position,
        "."
      ] }),
      /* @__PURE__ */ jsx21("img", { src: contestant.image_url || no_image_default, alt: "person smiling", width: 90, height: 90, className: "rounded-full aspect-square object-cover" }),
      /* @__PURE__ */ jsxs14("div", { className: "flex flex-col gap-2 grow", children: [
        /* @__PURE__ */ jsx21("p", { className: "uppercase text-sm font-satoshi-medium text-ellipsis overflow-hidden", children: `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}` }),
        /* @__PURE__ */ jsx21(ProgressBar, { percentage: contestant.result.overall_vote_percentage }),
        /* @__PURE__ */ jsx21(Grade, { grade: contestant.result.grade })
      ] })
    ] }),
    /* @__PURE__ */ jsx21("p", { className: "mb-2 text-xs font-satoshi-bold text-[#5F6D7E]", children: "Vote for this contestant" }),
    /* @__PURE__ */ jsxs14("div", { className: "grid grid-cols-3 gap-3", children: [
      socialMediaType === "kotmy" ? /* @__PURE__ */ jsxs14(fetcher.Form, { method: "POST", children: [
        /* @__PURE__ */ jsx21("input", { type: "hidden", name: "contestant_id", value: contestant._id }),
        /* @__PURE__ */ jsx21("input", { type: "hidden", name: "stage_id", value: contestant.stage_id }),
        /* @__PURE__ */ jsx21("input", { type: "hidden", name: "intent", value: "kotmy_vote" }),
        /* @__PURE__ */ jsx21(
          VoteLink_default,
          {
            className: "w-full",
            type: socialMediaType,
            onClick: () => {
              getUserStoreManager() || setSignInPrompt(!0);
            },
            url: contestant.social_media_url,
            count: numberSlang(contestant.vote.social_media)
          }
        )
      ] }) : /* @__PURE__ */ jsx21(
        VoteLink_default,
        {
          type: socialMediaType,
          url: contestant.social_media_url,
          count: numberSlang(contestant.vote.social_media)
        }
      ),
      /* @__PURE__ */ jsx21(TallyVoteDialog, { contestant })
    ] })
  ] }, contestant._id)) });
}

// app/components/public/contests/ScoreboardTable.tsx
import { useFetcher as useFetcher2, useNavigate as useNavigate2, useLocation as useLocation3 } from "@remix-run/react";
import { useEffect as useEffect7, useState as useState7 } from "react";
import { Fragment as Fragment3, jsx as jsx22, jsxs as jsxs15 } from "react/jsx-runtime";
function ScoreboardTable({ contestants, socialMediaType, show_bonus }) {
  let fetcher = useFetcher2(), [signInPrompt, setSignInPrompt] = useState7(!1), { getUserStoreManager } = useUserManager(), navigate = useNavigate2(), location = useLocation3(), path = `${location.pathname}${location.search}${location.hash}`;
  return useEffect7(() => {
    console.log({ d: fetcher?.data }), fetcher.state === "idle" && fetcher.data && fetcher.data.errorCode === "LOGIN_REQUIRED" && setSignInPrompt(!0);
  }, [fetcher.state, fetcher.data]), signInPrompt ? (
    // outer container centers the card horizontally and vertically within available space
    /* @__PURE__ */ jsx22("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ jsxs15("div", { className: "w-full max-w-xl bg-white border rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 py-10 px-6 sm:px-12 text-center", children: [
      /* @__PURE__ */ jsx22("svg", { width: "64", height: "64", fill: "none", viewBox: "0 0 24 24", className: "mx-auto mb-2 text-accent", children: /* @__PURE__ */ jsx22("path", { d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z", fill: "currentColor" }) }),
      /* @__PURE__ */ jsx22("h2", { className: "text-2xl font-satoshi-bold text-accent", children: "Sign In Required" }),
      /* @__PURE__ */ jsx22("p", { className: "text-gray-700 text-base max-w-md", children: "Voting for your favourite contestant requires you to sign in" }),
      /* @__PURE__ */ jsxs15("div", { className: "w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-center mt-2", children: [
        /* @__PURE__ */ jsx22(
          Button,
          {
            element: "button",
            onClick: () => setSignInPrompt(!1),
            className: "w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition",
            children: "Go back"
          }
        ),
        /* @__PURE__ */ jsx22(
          Button,
          {
            element: "button",
            onClick: () => navigate(`/login?redirectTo=${encodeURIComponent(path)}`),
            className: "w-full sm:inline-flex sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-accent text-white hover:bg-accent/90 transition",
            children: "Sign In"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs15("p", { className: "text-sm text-gray-400 mt-2", children: [
        "Don't have an account? ",
        /* @__PURE__ */ jsx22("button", { type: "button", className: "underline text-accent", onClick: () => navigate(`/signup?redirectTo=${encodeURIComponent(path)}`), children: "Sign up here" })
      ] })
    ] }) })
  ) : /* @__PURE__ */ jsxs15("table", { className: "w-full table-auto hidden sm:table", children: [
    /* @__PURE__ */ jsx22("thead", { children: /* @__PURE__ */ jsxs15("tr", { className: "border-b border-secondary", children: [
      /* @__PURE__ */ jsx22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "position" }),
      /* @__PURE__ */ jsx22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "name" }),
      /* @__PURE__ */ jsx22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3 hidden lg:table-cell", children: "progress" }),
      /* @__PURE__ */ jsx22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3  hidden xl:table-cell", children: "grade" }),
      /* @__PURE__ */ jsx22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "votes (SM, tally, givaah)" }),
      show_bonus && /* @__PURE__ */ jsxs15(Fragment3, { children: [
        /* @__PURE__ */ jsx22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "SMB" }),
        /* @__PURE__ */ jsx22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "TB" }),
        /* @__PURE__ */ jsx22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "GB" }),
        /* @__PURE__ */ jsx22("th", { className: "text-left uppercase text-sm font-satoshi-bold px-6 py-3", children: "JB" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx22("tbody", { children: contestants.map((contestant) => /* @__PURE__ */ jsxs15("tr", { className: "border-b border-secondary", children: [
      /* @__PURE__ */ jsx22("td", { className: "px-6 py-3", children: contestant.result.position }),
      /* @__PURE__ */ jsx22("td", { className: "px-6 py-3 font-satoshi-medium max-w-[300px] truncate uppercase", children: /* @__PURE__ */ jsxs15("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx22("img", { src: contestant.image_url || no_image_default, alt: "person smiling", width: 48, className: "rounded-full aspect-square object-cover" }),
        /* @__PURE__ */ jsxs15("div", { className: "truncate uppercase grow", children: [
          `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`,
          /* @__PURE__ */ jsxs15("dl", { className: "lg:hidden", children: [
            /* @__PURE__ */ jsx22("dt", { className: "sr-only", children: "progress" }),
            /* @__PURE__ */ jsx22("dd", { children: /* @__PURE__ */ jsx22(ProgressBar, { percentage: contestant.result.overall_vote_percentage }) }),
            /* @__PURE__ */ jsx22("dt", { className: "sr-only", children: "grade" }),
            /* @__PURE__ */ jsx22("dd", { children: /* @__PURE__ */ jsx22(Grade, { grade: contestant.result.grade }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs15("td", { className: "px-6 py-3 hidden lg:table-cell", children: [
        /* @__PURE__ */ jsx22(ProgressBar, { percentage: contestant.result.overall_vote_percentage }),
        /* @__PURE__ */ jsxs15("dl", { className: "xl:hidden", children: [
          /* @__PURE__ */ jsx22("dt", { className: "sr-only", children: "grade" }),
          /* @__PURE__ */ jsx22("dd", { children: /* @__PURE__ */ jsx22(Grade, { grade: contestant.result.grade }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx22("td", { className: "px-6 py-3 hidden xl:table-cell", children: /* @__PURE__ */ jsx22(Grade, { grade: contestant.result.grade }) }),
      /* @__PURE__ */ jsxs15("td", { className: "px-6 py-3 grid grid-cols-2 gap-2", children: [
        socialMediaType === "kotmy" ? /* @__PURE__ */ jsxs15(fetcher.Form, { method: "POST", children: [
          /* @__PURE__ */ jsx22("input", { type: "hidden", name: "contestant_id", value: contestant._id }),
          /* @__PURE__ */ jsx22("input", { type: "hidden", name: "stage_id", value: contestant.stage_id }),
          /* @__PURE__ */ jsx22("input", { type: "hidden", name: "intent", value: "kotmy_vote" }),
          /* @__PURE__ */ jsx22(
            VoteLink_default,
            {
              className: "w-full",
              type: socialMediaType,
              onClick: () => {
                getUserStoreManager() || setSignInPrompt(!0);
              },
              url: contestant.social_media_url,
              count: numberSlang(contestant.vote.social_media)
            }
          )
        ] }) : /* @__PURE__ */ jsx22(
          VoteLink_default,
          {
            type: socialMediaType,
            url: contestant.social_media_url,
            count: numberSlang(contestant.vote.social_media)
          }
        ),
        /* @__PURE__ */ jsx22(TallyVoteDialog, { contestant })
      ] }),
      show_bonus && /* @__PURE__ */ jsxs15(Fragment3, { children: [
        /* @__PURE__ */ jsx22("td", { className: "px-6 py-3", children: contestant.vote.social_media_bonus }),
        /* @__PURE__ */ jsx22("td", { className: "px-6 py-3", children: contestant.vote.tally_bonus }),
        /* @__PURE__ */ jsx22("td", { className: "px-6 py-3", children: contestant.vote.givaah_bonus }),
        /* @__PURE__ */ jsx22("td", { className: "px-6 py-3", children: contestant.vote.judge_bonus })
      ] })
    ] }, contestant._id)) })
  ] });
}

// app/routes/_public.contests.$tournamentId.$contestId.scoreboard.tsx
import { jsx as jsx23, jsxs as jsxs16 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs16("main", { className: "grow", children: [
    /* @__PURE__ */ jsxs16("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxs16("div", { className: "grid", children: [
        /* @__PURE__ */ jsxs16("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx23("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3 uppercase", children: contest.name }),
          /* @__PURE__ */ jsx23("p", { className: "font-satoshi-medium", children: contest.desc })
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: "mt-6 grid grid-cols-2 gap-2 max-w-4xl", children: [
          /* @__PURE__ */ jsxs16("div", { className: "", children: [
            /* @__PURE__ */ jsx23("span", { className: "block font-satoshi-bold mb-1", children: "Status" }),
            /* @__PURE__ */ jsx23(StatusTag, { status: contest.status, color })
          ] }),
          /* @__PURE__ */ jsxs16("div", { className: "", children: [
            /* @__PURE__ */ jsx23("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }),
            /* @__PURE__ */ jsx23("div", { className: "flex gap-4 flex-wrap capitalize", children: contest.categories.map((category) => /* @__PURE__ */ jsxs16("span", { children: [
              "~ ",
              category
            ] }, category)) })
          ] }),
          /* @__PURE__ */ jsxs16("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx23("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }),
            /* @__PURE__ */ jsx23("span", { className: "block", children: contest.prizes })
          ] })
        ] }),
        /* @__PURE__ */ jsx23(ContestTimer, { deadline: new Date(contest.end_date), title: "contest ends in" })
      ] }),
      /* @__PURE__ */ jsx23("img", { src: contest.image || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" })
    ] }),
    /* @__PURE__ */ jsx23("section", { className: "sm:bg-white", children: /* @__PURE__ */ jsxs16("div", { className: "wrapper my-16", children: [
      /* @__PURE__ */ jsxs16("div", { className: "flex flex-col sm:flex-row justify-between sm:items-center gap-y-4 gap-x-6 sm:gap-x-8 py-6 flex-wrap", children: [
        /* @__PURE__ */ jsxs16("span", { className: "font-satoshi-medium text-xl", children: [
          stage?.contestants.length ?? 0,
          " Contestants"
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsx23(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white", placeholder: "Search contestant by name" }),
          /* @__PURE__ */ jsxs16(Select, { value: String(stage?.stage), onValueChange: (val) => setUrlSearchParams((prev) => (prev.set("stage", val), prev)), children: [
            /* @__PURE__ */ jsx23(SelectTrigger, { className: "sm:w-[180px] h-auto rounded-lg shadow-none bg-white hover:border-accent", children: /* @__PURE__ */ jsx23(SelectValue, { placeholder: "Stage 1" }) }),
            /* @__PURE__ */ jsx23(SelectContent, { children: contest.stages.map((stage2) => /* @__PURE__ */ jsxs16(SelectItem, { value: String(stage2.stage), className: "focus:bg-blue-700/25", children: [
              "Stage ",
              stage2.stage
            ] }, stage2.stage)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx23(Link2, { to: `/results/${contest.id}`, className: "w-fit text-accent font-bold hover:underline underline-offset-4", children: "See result table" })
      ] }),
      /* @__PURE__ */ jsx23(ScoreboardTable, { contestants: stage?.contestants ?? [], socialMediaType: stage?.rates.social_media.type ?? "kotmy", show_bonus: stage?.enable_bonus ?? !1 }),
      /* @__PURE__ */ jsx23(MobileScoreboard, { contestants: stage?.contestants ?? [], socialMediaType: stage?.rates.social_media.type ?? "kotmy" })
    ] }) })
  ] });
}

// app/routes/_public.contests.$tournamentId.$contestId._index.tsx
var public_contests_tournamentId_contestId_index_exports = {};
__export(public_contests_tournamentId_contestId_index_exports, {
  action: () => action3,
  default: () => ContestPage
});
import { json as json5, redirect as redirect2 } from "@remix-run/node";
import { useRouteLoaderData as useRouteLoaderData4 } from "@remix-run/react";

// app/components/public/contests/OngoingContest.tsx
import { Link as Link4 } from "react-router-dom";
import { useSearchParams as useSearchParams2 } from "@remix-run/react";

// app/components/public/contests/SocialLink.tsx
import React7, { useEffect as useEffect8, useState as useState8 } from "react";
import { useFetcher as useFetcher3, useLocation as useLocation4, useNavigate as useNavigate3 } from "@remix-run/react";
import { jsx as jsx24, jsxs as jsxs17 } from "react/jsx-runtime";
var SocialLink_default = React7.forwardRef(function({ type, url, className = "", ...rest }, ref) {
  let props = url ? { element: "link", to: url, ...rest } : { element: "button", ref, ...rest }, fetcher = useFetcher3(), [signInPrompt, setSignInPrompt] = useState8(!1), { getUserStoreManager } = useUserManager(), navigate = useNavigate3(), location = useLocation4(), path = `${location.pathname}${location.search}${location.hash}`;
  return useEffect8(() => {
    console.log({ d: fetcher?.data }), fetcher.state === "idle" && fetcher.data && fetcher.data.errorCode === "LOGIN_REQUIRED" && setSignInPrompt(!0);
  }, [fetcher.state, fetcher.data]), type === "kotmy" ? signInPrompt ? /* @__PURE__ */ jsx24("div", { role: "dialog", "aria-modal": "true", className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: /* @__PURE__ */ jsxs17("div", { className: "w-full max-w-xl bg-white border rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 py-10 px-6 sm:px-12 text-center", children: [
    /* @__PURE__ */ jsx24("svg", { width: "64", height: "64", fill: "none", viewBox: "0 0 24 24", className: "mx-auto mb-2 text-accent", children: /* @__PURE__ */ jsx24("path", { d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z", fill: "currentColor" }) }),
    /* @__PURE__ */ jsx24("h2", { className: "text-2xl font-satoshi-bold text-accent", children: "Sign In Required" }),
    /* @__PURE__ */ jsx24("p", { className: "text-gray-700 text-base max-w-md", children: "Voting for your favourite contestant requires you to sign in" }),
    /* @__PURE__ */ jsxs17("div", { className: "w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-center mt-2", children: [
      /* @__PURE__ */ jsx24(
        Button,
        {
          element: "button",
          onClick: () => setSignInPrompt(!1),
          className: "w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition",
          children: "Go back"
        }
      ),
      /* @__PURE__ */ jsx24(
        Button,
        {
          element: "button",
          onClick: () => navigate(`/login?redirectTo=${encodeURIComponent(path)}`),
          className: "w-full sm:inline-flex sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-accent text-white hover:bg-accent/90 transition",
          children: "Sign In"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs17("p", { className: "text-sm text-gray-400 mt-2", children: [
      "Don't have an account? ",
      /* @__PURE__ */ jsx24("button", { type: "button", className: "underline text-accent", onClick: () => navigate(`/signup?redirectTo=${encodeURIComponent(path)}`), children: "Sign up here" })
    ] })
  ] }) }) : /* @__PURE__ */ jsxs17(fetcher.Form, { method: "POST", children: [
    /* @__PURE__ */ jsx24("input", { type: "hidden", name: "contestant_id", value: rest.contestantId }),
    /* @__PURE__ */ jsx24("input", { type: "hidden", name: "stage_id", value: rest.stageId }),
    /* @__PURE__ */ jsx24("input", { type: "hidden", name: "intent", value: "kotmy_vote" }),
    /* @__PURE__ */ jsx24(
      VoteLink_default,
      {
        className: "w-full",
        type,
        onClick: () => {
          getUserStoreManager() || setSignInPrompt(!0);
        },
        url: rest.contestant?.social_media_url ?? "",
        count: numberSlang(rest.contestant?.vote.social_media ?? 0)
      }
    )
  ] }) : /* @__PURE__ */ jsxs17(Cta_default, { ...props, variant: "outline", className: cn("p-2 flex items-center border rounded-full", {
    "border-facebook text-facebook bg-facebookBG hover:bg-facebook/15": type === "facebook",
    "border-instagram text-instagram bg-instagramBG hover:bg-instagram/15": type === "instagram",
    "border-twitter text-twitter bg-twitterBG hover:bg-twitter/15": type === "twitter",
    "border-tally text-tally bg-tallyBG hover:bg-tally/15": type === "tally",
    "border-givaah text-givaah bg-givaahBG hover:bg-givaah/15": type === "givaah"
  }, className), children: [
    /* @__PURE__ */ jsx24("span", { className: cn("w-6 h-6 flex items-center justify-center rounded-full p-1", {
      "bg-facebook": type === "facebook",
      "bg-instagram": type === "instagram",
      "bg-twitter": type === "twitter",
      "bg-tally": type === "tally",
      "bg-givaah": type === "givaah"
    }), children: /* @__PURE__ */ jsx24(Svg, { src: socialIcons[type] }) }),
    /* @__PURE__ */ jsxs17("span", { className: "grow text-xs font-bold text-center mr-2", children: [
      /* @__PURE__ */ jsx24("span", { className: "capitalize", children: type }),
      " vote"
    ] })
  ] });
});

// app/components/public/contests/ContestantCard.tsx
import { Link as Link3 } from "@remix-run/react";
import { useState as useState9 } from "react";
import { jsx as jsx25, jsxs as jsxs18 } from "react/jsx-runtime";
function ContestantStatisticsCard({ contestant }) {
  let [totalVotes, setTotalVotes] = useState9(getContestantTotalVotes(contestant));
  function getContestantTotalVotes(contestant2) {
    if (contestant2.originalContestantData?.result?.total_votes > 0)
      return contestant2.originalContestantData.result.total_votes;
    let computedTotalVotes = 0;
    return Object.entries(contestant2.originalContestantData.vote).forEach(([key, value]) => {
      typeof value == "number" && (computedTotalVotes += value);
    }), computedTotalVotes;
  }
  let { fullName, contestName, stage, stageStatus, contestImage, is_evicted, originalContestantData, stageSocialMedia } = contestant, vote = originalContestantData.vote, result = originalContestantData.result;
  return console.log(contestant), /* @__PURE__ */ jsxs18("article", { className: "border-2 border-primary rounded-3xl overflow-hidden", children: [
    /* @__PURE__ */ jsx25(Link3, { to: `/contest/contestant/${originalContestantData._id}?stageId=${originalContestantData.stage_id}&contestantCode=${originalContestantData.code}`, children: /* @__PURE__ */ jsx25("img", { src: originalContestantData.image_url || no_image_default, alt: fullName, className: "w-full h-80 object-cover object-top" }) }),
    /* @__PURE__ */ jsxs18("div", { className: "p-4 bg-secondary", children: [
      /* @__PURE__ */ jsx25("span", { className: "block font-black uppercase mb-2", children: fullName }),
      /* @__PURE__ */ jsx25("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: contestName }),
      /* @__PURE__ */ jsxs18("span", { className: "block text-[#5F6D7E] text-xs font-medium mb-2", children: [
        "Stage ",
        stage,
        " \u2022 ",
        stageStatus.replace(/_/g, " ")
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
        /* @__PURE__ */ jsxs18("div", { children: [
          /* @__PURE__ */ jsx25("span", { className: "text-xs text-gray-500", children: "Total Votes" }),
          /* @__PURE__ */ jsx25("div", { className: "text-xl font-bold text-indigo-700", children: totalVotes })
        ] }),
        /* @__PURE__ */ jsxs18("div", { children: [
          /* @__PURE__ */ jsx25("span", { className: "text-xs text-gray-500", children: "Rank" }),
          /* @__PURE__ */ jsx25("div", { className: "text-xl font-bold text-green-700", children: originalContestantData.rank ?? "N/A" })
        ] }),
        /* @__PURE__ */ jsxs18("div", { children: [
          /* @__PURE__ */ jsx25("span", { className: "text-xs text-gray-500", children: "Grade" }),
          /* @__PURE__ */ jsx25("div", { className: "text-lg font-semibold text-gray-800", children: result?.grade ?? "N/A" })
        ] }),
        /* @__PURE__ */ jsxs18("div", { children: [
          /* @__PURE__ */ jsx25("span", { className: "text-xs text-gray-500", children: "Vote %" }),
          /* @__PURE__ */ jsxs18("div", { className: "text-lg font-semibold text-blue-600", children: [
            result?.overall_vote_percentage ?? 0,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx25("span", { className: "block text-xs text-gray-500 mb-1", children: "Votes by Channel" }),
        /* @__PURE__ */ jsxs18("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx25("span", { className: "text-xs font-semibold capitalize", children: stageSocialMedia }),
            /* @__PURE__ */ jsx25("span", { className: "text-sm font-bold", children: vote.social_media })
          ] }),
          /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx25("span", { className: "text-xs font-semibold", children: "Tally" }),
            /* @__PURE__ */ jsx25("span", { className: "text-sm font-bold", children: vote.tally ?? result?.weighted_scores?.tally ?? 0 })
          ] }),
          /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx25("span", { className: "text-xs font-semibold", children: "Judge" }),
            /* @__PURE__ */ jsx25("span", { className: "text-sm font-bold", children: vote.judge ?? result?.weighted_scores?.judge ?? 0 })
          ] }),
          /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx25("span", { className: "text-xs font-semibold", children: "Givaah" }),
            /* @__PURE__ */ jsx25("span", { className: "text-sm font-bold", children: vote.givaah ?? result?.weighted_scores?.givaah ?? 0 })
          ] }),
          /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx25("span", { className: "text-xs font-semibold", children: "Bonus" }),
            /* @__PURE__ */ jsx25("span", { className: "text-sm font-bold", children: vote.bonus ?? result?.weighted_scores?.bonus ?? 0 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx25("span", { className: `inline-block px-3 py-1 rounded-full text-xs font-bold ${is_evicted ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`, children: is_evicted ? "Evicted" : "Active" })
    ] })
  ] });
}
function ContestantCard({ contestant, socialMedia }) {
  let fullName = `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`;
  return console.log({ contestant }), /* @__PURE__ */ jsxs18("article", { className: "border-2 border-primary rounded-3xl overflow-hidden", children: [
    /* @__PURE__ */ jsx25(Link3, { to: `/contest/contestant/${contestant._id}?stageId=${contestant.stage_id}&contestantCode=${contestant.code}`, children: /* @__PURE__ */ jsx25("img", { src: contestant.image_url || no_image_default, alt: "person smiling", className: "w-full h-80 object-cover object-top" }) }),
    /* @__PURE__ */ jsxs18("div", { className: "p-4 bg-secondary", children: [
      /* @__PURE__ */ jsx25("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: "Vote now for your favorite contestant" }),
      /* @__PURE__ */ jsx25("span", { className: "block font-black uppercase mb-4", children: fullName }),
      /* @__PURE__ */ jsx25("span", { className: "block text-[#5F6D7E] text-sm font-medium mb-2", children: contestant.category }),
      /* @__PURE__ */ jsxs18("div", { className: "grid grid-cols-2 gap-4", children: [
        socialMedia === "kotmy" ? /* @__PURE__ */ jsx25(
          SocialLink_default,
          {
            type: socialMedia,
            url: contestant.social_media_url,
            voted: contestant.result.device_voted_for_contestant,
            contestantId: contestant._id,
            stageId: contestant.stage_id,
            contestant
          }
        ) : /* @__PURE__ */ jsx25(
          SocialLink_default,
          {
            type: socialMedia,
            url: contestant.social_media_url,
            voted: contestant.result.device_voted_for_contestant,
            contestant
          }
        ),
        /* @__PURE__ */ jsx25(TallyVoteDialog, { contestant, children: /* @__PURE__ */ jsx25(SocialLink_default, { type: "tally", className: "w-full" }) })
      ] })
    ] })
  ] });
}

// app/components/public/contests/OngoingContest.tsx
import { Fragment as Fragment4, jsx as jsx26, jsxs as jsxs19 } from "react/jsx-runtime";
function OngoingContest({ contest, stage }) {
  let [searchParams, setUrlSearchParams] = useSearchParams2(), status = contest.status, color = status === "ongoing" ? "green" : status === "completed" ? "red" : "gray";
  return /* @__PURE__ */ jsxs19(Fragment4, { children: [
    /* @__PURE__ */ jsxs19("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxs19("div", { className: "grid", children: [
        /* @__PURE__ */ jsxs19("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx26("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3 uppercase", children: contest.name }),
          /* @__PURE__ */ jsx26("p", { className: "font-satoshi-medium", children: contest.desc })
        ] }),
        /* @__PURE__ */ jsxs19("div", { className: "mt-6 grid grid-cols-2 gap-2 max-w-4xl", children: [
          /* @__PURE__ */ jsxs19("div", { className: "", children: [
            /* @__PURE__ */ jsx26("span", { className: "block font-satoshi-bold mb-1", children: "Status" }),
            /* @__PURE__ */ jsx26(StatusTag, { status, color })
          ] }),
          /* @__PURE__ */ jsxs19("div", { className: "", children: [
            /* @__PURE__ */ jsx26("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }),
            /* @__PURE__ */ jsx26("div", { className: "flex gap-4 flex-wrap capitalize", children: contest.categories.map((category) => /* @__PURE__ */ jsxs19("span", { children: [
              "~ ",
              category
            ] }, category)) })
          ] }),
          /* @__PURE__ */ jsxs19("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx26("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }),
            /* @__PURE__ */ jsx26("span", { className: "block", children: contest.prizes })
          ] })
        ] }),
        /* @__PURE__ */ jsx26(ContestTimer, { deadline: new Date(contest.end_date), title: "contest ends in" })
      ] }),
      /* @__PURE__ */ jsx26("img", { src: contest.image || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" })
    ] }),
    /* @__PURE__ */ jsxs19("section", { className: "wrapper my-16", children: [
      /* @__PURE__ */ jsxs19("h2", { className: "text-accent text-lg lg:text-2xl font-satoshi-bold mb-3 sm:mb-6 uppercase", children: [
        contest.name,
        " contestants"
      ] }),
      /* @__PURE__ */ jsxs19("div", { className: "flex flex-col sm:flex-row justify-between sm:items-end gap-6 sm:gap-8", children: [
        /* @__PURE__ */ jsxs19("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsx26(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white py-2 text-sm", placeholder: "Search contestant by name" }),
          /* @__PURE__ */ jsxs19(Select, { value: String(stage?.stage), onValueChange: (val) => setUrlSearchParams((prev) => (prev.set("stage", val), prev)), children: [
            /* @__PURE__ */ jsx26(SelectTrigger, { className: "sm:w-[180px] h-auto rounded-lg shadow-none bg-white hover:border-accent", children: /* @__PURE__ */ jsx26(SelectValue, { placeholder: "Stage 1" }) }),
            /* @__PURE__ */ jsx26(SelectContent, { children: contest.stages.map((stage2) => /* @__PURE__ */ jsxs19(SelectItem, { value: String(stage2.stage), className: "focus:bg-blue-700/25", children: [
              "Stage ",
              stage2.stage
            ] }, stage2.stage)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx26(Link4, { to: `scoreboard?${searchParams.toString()}`, className: "w-fit text-accent font-bold hover:underline underline-offset-4", children: "See scoreboard" })
      ] }),
      /* @__PURE__ */ jsx26("div", { className: "my-16 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16", children: stage?.contestants.map((contestant) => /* @__PURE__ */ jsx26(ContestantCard, { contestant, socialMedia: stage.rates.social_media.type }, contestant.code)) })
    ] })
  ] });
}

// app/components/public/contests/RegisteringContest.tsx
import { useActionData } from "@remix-run/react";

// app/components/public/contests/ContestGuidelines.tsx
import { jsx as jsx27, jsxs as jsxs20 } from "react/jsx-runtime";
function ContestGuidelines({ contest }) {
  return /* @__PURE__ */ jsxs20("div", { className: "wrapper sm:max-w-lg sm:mx-0", children: [
    /* @__PURE__ */ jsxs20("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx27("span", { className: "block font-satoshi-bold mb-1", children: "Status" }),
      /* @__PURE__ */ jsx27(StatusTag, { status: "registering", color: "yellow" })
    ] }),
    /* @__PURE__ */ jsxs20("div", { className: "grid gap-4 sm:grid-cols-2 my-8", children: [
      /* @__PURE__ */ jsxs20("div", { className: "", children: [
        /* @__PURE__ */ jsx27("span", { className: "block font-satoshi-bold mb-1", children: "Age Categories" }),
        /* @__PURE__ */ jsx27("div", { className: "flex flex-wrap gap-x-4 capitalize", children: contest.categories.map((category) => /* @__PURE__ */ jsxs20("span", { children: [
          "~ ",
          category
        ] }, category)) })
      ] }),
      /* @__PURE__ */ jsxs20("div", { className: "", children: [
        /* @__PURE__ */ jsx27("span", { className: "block font-satoshi-bold mb-1", children: "Submission Guideline" }),
        /* @__PURE__ */ jsx27("span", { className: "block", children: contest.sub_req })
      ] }),
      /* @__PURE__ */ jsxs20("div", { className: "", children: [
        /* @__PURE__ */ jsx27("span", { className: "block font-satoshi-bold mb-1", children: "Submission Deadline" }),
        /* @__PURE__ */ jsxs20("span", { className: "block", children: [
          "All entries must be submitted by ",
          new Date(contest.reg_deadline).toLocaleString("en-US", { timeStyle: "short", dateStyle: "long" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs20("div", { className: "", children: [
        /* @__PURE__ */ jsx27("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }),
        /* @__PURE__ */ jsx27("span", { className: "block", children: contest.prizes })
      ] })
    ] }),
    /* @__PURE__ */ jsxs20("div", { className: "flex flex-col gap-2 my-8", children: [
      /* @__PURE__ */ jsx27("span", { className: "font-satoshi-bold", children: "Terms & Conditions" }),
      contest.terms_cond
    ] }),
    /* @__PURE__ */ jsxs20("div", { className: "flex flex-col gap-2 my-8", children: [
      /* @__PURE__ */ jsx27("span", { className: "font-satoshi-bold", children: "Additional Notes" }),
      contest.add_info
    ] })
  ] });
}

// app/components/public/contests/RegistrationSuccess.tsx
import { jsx as jsx28, jsxs as jsxs21 } from "react/jsx-runtime";
function RegistrationSuccess({ contestant, contest }) {
  let fullName = `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`, formattedDob = new Date(contestant.contestant_biodata.dob).toDateString();
  return /* @__PURE__ */ jsxs21("div", { className: "bg-secondary p-10 sm:rounded-3xl flex flex-col max-w-xl gap-10", children: [
    /* @__PURE__ */ jsxs21("aside", { className: "border-2 border-success-700 bg-success-500 rounded-xl p-6 flex items-start gap-4", children: [
      /* @__PURE__ */ jsx28("img", { src: icons.alertCheckIcon, width: 30, height: 30, className: "mt-1" }),
      /* @__PURE__ */ jsxs21("p", { children: [
        /* @__PURE__ */ jsx28("span", { className: "block font-bold mb-2", children: "Dear Esteemed Contestant/Guardian" }),
        /* @__PURE__ */ jsxs21("span", { className: "font-medium", children: [
          "Congratulations, ",
          fullName,
          "! Your submission to ",
          contest.name,
          " has been received successfully. Your code is ",
          /* @__PURE__ */ jsx28("span", { className: "font-semibold", children: contestant.code }),
          "."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs21("div", { className: "grid sm:grid-cols-2 justify-between gap-6 sm:gap-10", children: [
      /* @__PURE__ */ jsx28("img", { src: contestant.image_url, alt: "kid smiling", className: "rounded-3xl" }),
      /* @__PURE__ */ jsxs21("div", { className: "grid gap-1 leading-tight", children: [
        /* @__PURE__ */ jsxs21("p", { className: "", children: [
          /* @__PURE__ */ jsx28("span", { className: "block font-satoshi-bold", children: "Full Name" }),
          /* @__PURE__ */ jsx28("span", { className: "block capitalize", children: fullName })
        ] }),
        /* @__PURE__ */ jsxs21("p", { className: "", children: [
          /* @__PURE__ */ jsx28("span", { className: "block font-satoshi-bold", children: "Date of Birth" }),
          /* @__PURE__ */ jsx28("span", { className: "block", children: formattedDob })
        ] }),
        /* @__PURE__ */ jsxs21("p", { className: "", children: [
          /* @__PURE__ */ jsx28("span", { className: "block font-satoshi-bold", children: "Gender" }),
          /* @__PURE__ */ jsx28("span", { className: "block capitalize", children: contestant.contestant_biodata.sex.toLowerCase() })
        ] }),
        /* @__PURE__ */ jsxs21("p", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx28("span", { className: "block font-satoshi-bold", children: "Email Address" }),
          /* @__PURE__ */ jsx28("span", { className: "block truncate ...", children: contestant.contestant_biodata.email })
        ] }),
        /* @__PURE__ */ jsxs21("p", { className: "", children: [
          /* @__PURE__ */ jsx28("span", { className: "block font-satoshi-bold", children: "State of Residence" }),
          /* @__PURE__ */ jsx28("span", { className: "block capitalize", children: contestant.contestant_biodata.state_of_residence })
        ] })
      ] })
    ] })
  ] });
}

// app/components/public/contests/RegistrationForm.tsx
import { Form as Form3, useLocation as useLocation5, useNavigate as useNavigate4 } from "@remix-run/react";
import { useEffect as useEffect9, useState as useState10 } from "react";
import { jsx as jsx29, jsxs as jsxs22 } from "react/jsx-runtime";
function useRegistrationForm({ contest }) {
  let { getUserStoreManager } = useUserManager(), [user, setUser] = useState10(null), navigate = useNavigate4(), referralKey = "referral_code";
  useEffect9(() => {
    let user2 = getUserStoreManager();
    setUser(user2);
  }, []);
  let addQueryParams = (url, key, value) => {
    let fullURL = new URL(url);
    return fullURL.searchParams.set(key, value), fullURL.toString();
  }, getQueryParam = (key) => {
    let url = window.location.href;
    return new URL(url).searchParams.get(key) ?? "";
  }, copyReferalLink = async () => {
    let fullPath = `${window.location.origin}${path}`, urlWithReferralId = addQueryParams(fullPath, referralKey, user?.referral_code);
    await navigator.clipboard.writeText(urlWithReferralId), toast({
      title: "Link Copied",
      description: "Your referral link has been successfully copied, hurray."
    });
  }, location = useLocation5(), getReferalLinkForWhatsAppShare = () => {
    let fullPath = `${window.location.origin}${path}`, urlWithReferralId = addQueryParams(fullPath, "referral_code", user?.referral_code), WhatsAppText = `Please use my referal link to register for KOTMY's ${contest.name} contest. click on the link to register ${urlWithReferralId}`;
    return `https://wa.me/?text=${encodeURIComponent(WhatsAppText)}`;
  }, pathname = location.pathname, search = location.search, hash = location.hash, path = pathname + search + hash;
  return { user, navigate, copyReferalLink, getReferalLinkForWhatsAppShare, path, getQueryParam, referralKey };
}
function RegistrationForm({ contest }) {
  let { user, navigate, copyReferalLink, getReferalLinkForWhatsAppShare, path, getQueryParam, referralKey } = useRegistrationForm({ contest });
  return user ? /* @__PURE__ */ jsxs22(Form3, { method: "POST", encType: "multipart/form-data", className: "bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6", children: [
    /* @__PURE__ */ jsx29("p", { className: "text-2xl font-satoshi-bold", children: 'Participate by filling in your basic information below and clicking "Submit".' }),
    /* @__PURE__ */ jsxs22("div", { children: [
      "Refer your friends to this contest and win big prices. ",
      /* @__PURE__ */ jsx29("br", {}),
      "Click to copy referral link \xA0",
      /* @__PURE__ */ jsxs22(
        "button",
        {
          type: "button",
          onClick: copyReferalLink,
          className: "inline-flex items-center gap-2 px-3 py-1.5 max-h-10 rounded-md font-bold bg-accent text-white hover:bg-accent/90 transition shadow text-sm mt-2",
          children: [
            /* @__PURE__ */ jsxs22("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx29("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" }),
              /* @__PURE__ */ jsx29("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 8v8m0 0l-4-4m4 4l4-4" })
            ] }),
            "Refer"
          ]
        }
      ),
      /* @__PURE__ */ jsx29("br", {}),
      "Or Share on ",
      /* @__PURE__ */ jsx29(
        "a",
        {
          target: "_blank",
          rel: "noopener noreferrer",
          href: getReferalLinkForWhatsAppShare(),
          className: "inline-block px-3 py-1.5 rounded-md bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition",
          children: "WhatsApp"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx29(
        FormControl,
        {
          as: "input",
          labelText: "First Name",
          id: "first_name",
          name: "first_name",
          placeholder: "Enter your first name",
          required: !0
        }
      ),
      /* @__PURE__ */ jsx29(
        FormControl,
        {
          as: "input",
          labelText: "Last Name",
          id: "last_name",
          name: "last_name",
          placeholder: "Enter your last name",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx29(
        FormControl,
        {
          as: "input",
          labelText: "Email Address",
          id: "email",
          name: "email",
          value: `${user?.email}`,
          readOnly: !0,
          placeholder: "Enter your email address",
          required: !0
        }
      ),
      /* @__PURE__ */ jsx29(
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
        }
      )
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs22("label", { htmlFor: "gender", className: "font-bold flex flex-col", children: [
        /* @__PURE__ */ jsxs22("span", { children: [
          "Gender",
          /* @__PURE__ */ jsx29("span", { className: "text-red-400", children: "*" })
        ] }),
        /* @__PURE__ */ jsxs22(Select, { name: "sex", required: !0, children: [
          /* @__PURE__ */ jsx29(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx29(SelectValue, { placeholder: "Gender" }) }),
          /* @__PURE__ */ jsxs22(SelectContent, { children: [
            /* @__PURE__ */ jsx29(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }),
            /* @__PURE__ */ jsx29(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs22("label", { htmlFor: "state_of_residence", className: "font-bold flex flex-col", children: [
        /* @__PURE__ */ jsxs22("span", { children: [
          "State of Residence",
          /* @__PURE__ */ jsx29("span", { className: "text-red-400", children: "*" })
        ] }),
        /* @__PURE__ */ jsxs22(Select, { name: "state_of_residence", required: !0, children: [
          /* @__PURE__ */ jsx29(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx29(SelectValue, { placeholder: "Select a state" }) }),
          /* @__PURE__ */ jsx29(SelectContent, { children: Object.entries(nigerianStates).map(([key, val]) => /* @__PURE__ */ jsx29(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: val }, key)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx29(
        FormControl,
        {
          as: "input",
          type: "tel",
          labelText: "Whatsapp Number",
          id: "whatsapp_no",
          name: "whatsapp_no",
          placeholder: "Enter your whatsapp number",
          required: !0
        }
      ),
      /* @__PURE__ */ jsxs22("label", { htmlFor: "category", className: "font-bold flex flex-col", children: [
        /* @__PURE__ */ jsxs22("span", { children: [
          "Category",
          /* @__PURE__ */ jsx29("span", { className: "text-red-400", children: "*" })
        ] }),
        /* @__PURE__ */ jsxs22(Select, { name: "category", required: !!contest.categories.length, children: [
          /* @__PURE__ */ jsx29(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx29(SelectValue, { placeholder: "Select a category" }) }),
          /* @__PURE__ */ jsx29(SelectContent, { children: contest.categories.map((category) => /* @__PURE__ */ jsx29(SelectItem, { value: category, className: "focus:bg-blue-700/25", children: category }, category)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx29("div", { className: "grid gap-6 lg:grid-cols-2", children: /* @__PURE__ */ jsx29(
      FormControl,
      {
        as: "input",
        labelClassNames: "col-span-1 max-w-full text-gray-500",
        labelText: "Referral code (Optional)",
        id: "referral_code",
        name: "referral_code",
        placeholder: "",
        defaultValue: `${getQueryParam(referralKey)}`
      }
    ) }),
    /* @__PURE__ */ jsx29(
      FormControl,
      {
        as: "textarea",
        labelClassNames: "col-span-2 max-w-full",
        labelText: "What would you like your voters to know?",
        id: "info",
        name: "info",
        placeholder: ""
      }
    ),
    /* @__PURE__ */ jsx29(DragnDrop, { labelText: "Upload Image", name: "contestant_image", multiple: !0, required: !0 }),
    /* @__PURE__ */ jsx29("input", { type: "hidden", name: "contestId", value: contest._id }),
    /* @__PURE__ */ jsx29(Button, { element: "button", type: "submit", name: "intent", value: "register", className: "md:self-end", children: "Submit" })
  ] }) : /* @__PURE__ */ jsxs22("div", { className: "w-full max-w-xl bg-white border rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 py-12 px-6 sm:px-12 text-center", children: [
    /* @__PURE__ */ jsx29("svg", { width: "64", height: "64", fill: "none", viewBox: "0 0 24 24", className: "mx-auto mb-2 text-accent", children: /* @__PURE__ */ jsx29("path", { d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z", fill: "currentColor" }) }),
    /* @__PURE__ */ jsx29("h2", { className: "text-2xl font-satoshi-bold text-accent", children: "Sign In Required" }),
    /* @__PURE__ */ jsx29("p", { className: "text-gray-700 text-base max-w-md", children: "You must be signed in to register for this contest. Please sign in to continue and unlock the registration form or refer your friends and win great prices." }),
    /* @__PURE__ */ jsx29(Button, { element: "button", onClick: () => navigate(`/login?redirectTo=${encodeURIComponent(path)}`), className: "mt-2 px-8 py-3 text-lg rounded-lg font-bold bg-accent text-white hover:bg-accent/90 transition", children: "Sign In" }),
    /* @__PURE__ */ jsxs22("p", { className: "text-sm text-gray-400 mt-2", children: [
      "Don't have an account? ",
      /* @__PURE__ */ jsx29("span", { className: "underline text-accent cursor-pointer", onClick: () => navigate(`/signup?redirectTo=${encodeURIComponent(path)}`), children: "Sign up here" })
    ] })
  ] });
}

// app/components/reusables/AutoplayCarousel.tsx
import { useEffect as useEffect10, useRef as useRef4, useState as useState11 } from "react";
import { jsx as jsx30, jsxs as jsxs23 } from "react/jsx-runtime";
function AutoplayCarousel({ children, containerClass = "", trackClass = "", slideDuration, reverse = !1 }) {
  let [fillAmount, setFillAmount] = useState11(1), container = useRef4(null), track = useRef4(null);
  return useEffect10(() => {
    let containerWidth = container.current?.offsetWidth ?? 0, trackWidth = track.current?.offsetWidth ?? 0, soln = Math.min(Math.ceil(containerWidth / trackWidth));
    container.current?.style.setProperty("--timing", `${slideDuration ?? soln * 3}s`), console.log({ soln, containerWidth, trackWidth }), setFillAmount(soln);
  }, []), /* @__PURE__ */ jsxs23("div", { ref: container, className: `carousel-container ${containerClass}`, children: [
    /* @__PURE__ */ jsx30("div", { ref: track, className: `carousel-track ${reverse ? "slide-reverse" : "slide"} ${trackClass}`, children: Array(fillAmount).fill(children) }),
    /* @__PURE__ */ jsx30("div", { className: `carousel-track ${reverse ? "slide-reverse" : "slide"} ${trackClass}`, children: Array(fillAmount).fill(children) })
  ] });
}

// app/components/reusables/CarouselItem.tsx
import { jsx as jsx31 } from "react/jsx-runtime";
function CarouselItem({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx31("div", { className: `carousel-card sm:mx-2 ${className}`, ...props, children });
}

// app/components/public/ContestantSlider.tsx
import { Fragment as Fragment5, jsx as jsx32, jsxs as jsxs24 } from "react/jsx-runtime";
function ContestantSlider({ contestants }) {
  return /* @__PURE__ */ jsxs24(Fragment5, { children: [
    /* @__PURE__ */ jsx32(AutoplayCarousel, { slideDuration: 30, children: contestants.map((contestant) => /* @__PURE__ */ jsx32(CarouselItem, { className: "h-24 md:h-72 aspect-square rounded-lg overflow-hidden mx-2 md:mx-6", children: /* @__PURE__ */ jsx32("img", { src: contestant.image, alt: "person smiling", className: "h-full aspect-square object-cover" }) }, contestant.id)) }),
    /* @__PURE__ */ jsx32(AutoplayCarousel, { slideDuration: 30, reverse: !0, children: contestants.map((contestant) => /* @__PURE__ */ jsx32(CarouselItem, { className: "h-24 md:h-72 aspect-square rounded-lg overflow-hidden mx-2 md:mx-6", children: /* @__PURE__ */ jsx32("img", { src: contestant.image, alt: "person smiling", className: "h-full aspect-square object-cover" }) }, contestant.id)) })
  ] });
}

// app/components/public/contests/RegisteringContest.tsx
import { Fragment as Fragment6, jsx as jsx33, jsxs as jsxs25 } from "react/jsx-runtime";
function RegisteringContest({ contest }) {
  let actionRes = useActionData();
  return /* @__PURE__ */ jsxs25(Fragment6, { children: [
    /* @__PURE__ */ jsxs25("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxs25("div", { className: "flex flex-col justify-around", children: [
        /* @__PURE__ */ jsxs25("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx33("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3", children: contest.name }),
          /* @__PURE__ */ jsx33("p", { className: "font-satoshi-medium", children: contest.desc })
        ] }),
        /* @__PURE__ */ jsx33(ContestTimer, { deadline: new Date(contest.reg_deadline), title: "registration ends in" })
      ] }),
      /* @__PURE__ */ jsx33("img", { src: contest.image || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" })
    ] }),
    /* @__PURE__ */ jsx33("section", { className: "sm:wrapper my-16", children: /* @__PURE__ */ jsxs25("div", { className: "flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8", children: [
      /* @__PURE__ */ jsx33(ContestGuidelines, { contest }),
      actionRes?.data ? /* @__PURE__ */ jsx33(RegistrationSuccess, { contestant: actionRes.data, contest }) : /* @__PURE__ */ jsx33(RegistrationForm, { contest })
    ] }) }),
    /* @__PURE__ */ jsxs25("section", { className: "my-8 md:my-16", children: [
      /* @__PURE__ */ jsx33("h2", { className: "text-2xl sm:text-[40px] leading-snug font-satoshi-black w-4/5 max-w-lg text-center mx-auto my-10", children: "Over 500 registered participants and counting" }),
      /* @__PURE__ */ jsx33(ContestantSlider, { contestants: [{ id: "sdjc", image: hero_1_default }, { id: "adcn", image: hero_2_default }, { id: "kjsd", image: hero_3_default }] })
    ] })
  ] });
}

// app/routes/_public.contests.$tournamentId.$contestId._index.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
async function action3({ request }) {
  let formData = await request.formData(), intent = formData.get("intent");
  if (intent === "register") {
    let cookieHeader = request.headers.get("Cookie");
    if (console.log({ cookieHeader }), !cookieHeader) {
      let url = new URL(request.url);
      return redirect2(`/login?redirectTo=${url.pathname}`);
    }
    return await registerContestant(formData, request, cookieHeader);
  }
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
  return /* @__PURE__ */ jsx34("main", { className: "grow", children: contest.status === "registering" ? /* @__PURE__ */ jsx34(RegisteringContest, { contest }) : /* @__PURE__ */ jsx34(OngoingContest, { contest, stage }) });
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
import { useEffect as useEffect11, useState as useState12 } from "react";

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
import { jsx as jsx35, jsxs as jsxs26 } from "react/jsx-runtime";
async function loader3({ request }) {
  let url = new URL(request.url), { fingerprint } = await getFingerprint({ request }), contestantCode = url.searchParams.get("contestantCode") ?? "", stageId = url.searchParams.get("stageId") ?? "", { data, error } = await contestantRepo.getContestantDetailsForContest(contestantCode, stageId);
  return { data, error, url: request.url };
}
function useContestContestantController() {
  let [enrichedContestants, setEnrichedcontestants] = useState12([]), [contestantDetailsForActiveStage, setContestantDetailsForActiveStage] = useState12(null), { data, error, url } = useLoaderData3(), [isToastFired, setIsToastFired] = useState12(!1);
  useEffect11(() => {
    error && !isToastFired && (toast({
      variant: "destructive",
      title: "An error occured",
      description: error?.detail.toString() ?? "Error occured"
    }), setIsToastFired(!0));
  }, [error, isToastFired]), useEffect11(() => {
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
    return /* @__PURE__ */ jsx35("div", { className: "min-h-screen flex items-center justify-center ", children: /* @__PURE__ */ jsx35("p", { className: "text-xl text-gray-500", children: "Loading or no contestant data found..." }) });
  let { originalContestantData, stageSocialMedia, fullName, info, stage, is_evicted } = profileContestant;
  return /* @__PURE__ */ jsxs26("div", { className: "min-h-screen text-gray-900", children: [
    /* @__PURE__ */ jsx35("header", { className: " pt-24 pb-16 border-b border-gray-200", children: /* @__PURE__ */ jsx35("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs26("div", { className: "flex flex-col lg:flex-row items-start lg:space-x-12", children: [
      /* @__PURE__ */ jsx35("div", { className: "w-full lg:w-96 flex-shrink-0 mb-8 lg:mb-0", children: /* @__PURE__ */ jsx35(
        ContestantCard,
        {
          contestant: originalContestantData,
          socialMedia: stageSocialMedia
        }
      ) }),
      /* @__PURE__ */ jsxs26("div", { className: "flex-grow pt-4", children: [
        /* @__PURE__ */ jsx35("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ jsxs26("div", { children: [
          /* @__PURE__ */ jsxs26("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ jsx35("h1", { className: "text-5xl font-extrabold text-gray-900", children: fullName }),
            /* @__PURE__ */ jsx35("span", { className: "ml-4 inline-flex items-center px-4 py-1.5 rounded-full text-base font-semibold tracking-wide bg-indigo-50 text-indigo-800", children: is_evicted ? "EVICTED" : "ACTIVE" })
          ] }),
          /* @__PURE__ */ jsx35("p", { className: "text-xl text-gray-600 mb-6 font-light", children: info }),
          /* @__PURE__ */ jsx35("p", { className: "text-lg text-gray-700 mb-8 max-w-2xl", children: contestantDetailsForActiveStage?.info ?? "No stage-specific bio available. Displaying general contestant info." }),
          /* @__PURE__ */ jsxs26("div", { className: "flex space-x-4 mb-8", children: [
            /* @__PURE__ */ jsx35("button", { onClick: () => handleCopy(), className: "bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 transform hover:scale-[1.02]", children: "Share Link" }),
            /* @__PURE__ */ jsx35(
              "a",
              {
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-white border border-gray-300 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-150 transform hover:scale-[1.02]",
                children: "Share via WhatsApp"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs26("div", { className: "grid grid-cols-3 gap-8 pt-6 mt-6 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs26("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx35("span", { className: "text-5xl font-extrabold text-indigo-600", children: enrichedContestants.length }),
            /* @__PURE__ */ jsx35("span", { className: "text-sm text-gray-500 uppercase tracking-wider mt-1", children: "Total Stages" })
          ] }),
          /* @__PURE__ */ jsxs26("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx35("span", { className: "text-5xl font-extrabold text-gray-900", children: stage }),
            /* @__PURE__ */ jsx35("span", { className: "text-sm text-gray-500 uppercase tracking-wider mt-1", children: "Current Stage" })
          ] }),
          /* @__PURE__ */ jsxs26("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx35("span", { className: "text-5xl font-extrabold text-gray-900", children: is_evicted ? "No" : "Yes" }),
            /* @__PURE__ */ jsx35("span", { className: "text-sm text-gray-500 uppercase tracking-wider mt-1", children: "In Contest" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs26("main", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs26("div", { className: " z-10 border-b border-gray-200 mb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pt-4 pb-3", children: [
        /* @__PURE__ */ jsx35("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Contest Stages History" }),
        /* @__PURE__ */ jsx35("nav", { children: /* @__PURE__ */ jsx35("ul", { className: "flex space-x-10 text-lg font-medium", children: /* @__PURE__ */ jsxs26("li", { className: "text-indigo-600 border-b-2 border-indigo-600 pb-2 cursor-pointer", children: [
          "All Stages (",
          enrichedContestants.length,
          ")"
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx35("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3", children: enrichedContestants.map((contestant) => /* @__PURE__ */ jsx35(
        ContestantStatisticsCard,
        {
          contestant
        },
        `${contestant.code}-${contestant.id}`
      )) })
    ] })
  ] });
}

// app/routes/user.addwithdrawalaccount.personal.$walletid.tsx
var user_addwithdrawalaccount_personal_walletid_exports = {};
__export(user_addwithdrawalaccount_personal_walletid_exports, {
  action: () => action4,
  default: () => AddWithdrawalAccountPage,
  loader: () => loader4,
  useAddWithdrawalAccountPage: () => useAddWithdrawalAccountPage
});
import { redirect as redirect3 } from "@remix-run/node";
import { Form as Form4, useNavigate as useNavigate5, useNavigation as useNavigation2 } from "@remix-run/react";
import { useMemo, useRef as useRef5, useState as useState13 } from "react";

// app/services/wallet/wallet.server.ts
var WalletRepository = class {
  async getUserWallets(cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url: ApiEndPoints.userWallets
    }, cookies);
    return console.log({ data, error }), data ? { data } : { error, authRequired };
  }
  async getOrganizationWallets(cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url: ApiEndPoints.organizationWallets
    }, cookies);
    return console.log({ data, error }), data ? { data } : { error, authRequired };
  }
  async getUserWalletById(walletId, cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url: ApiEndPoints.userWallets
    }, cookies);
    return data ? { data: data.find((wallet) => wallet._id === walletId), error, authRequired } : { error, authRequired };
  }
  async getWalletWithdrawalAccounts(walletid, cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url: ApiEndPoints.getWalletWithdrawalAccounts(walletid)
    }, cookies);
    return console.log({ data, error }), data ? { data } : { error, authRequired };
  }
  async getBanksForCurrency(currency, cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url: ApiEndPoints.getBanksForCurrency(currency)
    }, cookies);
    return console.log({ data, error }), data ? { data } : { error, authRequired };
  }
  async getUserLedgersForWallet(cookies, query = null) {
    let url = ApiEndPoints.userLedgers;
    if (query) {
      let queryString = new URLSearchParams(Object.entries(query).reduce((acc, [key, value]) => (value != null && (acc[key] = String(value)), acc), {})).toString();
      queryString && (url = `${url}?${queryString}`);
    }
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url
    }, cookies);
    return console.log({ data, error }), data ? { data } : { error, authRequired };
  }
  // /v2/api/wallet/organization_ledgers
  async getOrganizationLedgersForWallet(cookies, query = null) {
    let url = ApiEndPoints.organizationLedgers;
    if (query) {
      let queryString = new URLSearchParams(Object.entries(query).reduce((acc, [key, value]) => (value != null && (acc[key] = String(value)), acc), {})).toString();
      queryString && (url = `${url}?${queryString}`);
    }
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url
    }, cookies);
    return console.log({ data, error }), data ? { data } : { error, authRequired };
  }
  async wallet_search(query, cookies) {
    let url = ApiEndPoints.walletMetrics, queryString = new URLSearchParams(Object.entries(query).reduce((acc, [key, value]) => (value != null && (acc[key] = String(value)), acc), {})).toString();
    queryString && (url = `${url}?${queryString}`);
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url
    }, cookies);
    return console.log("MY DATA", data), data ? { data } : { error, authRequired };
  }
  async requestWithdrawalToken(cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url: ApiEndPoints.requestWithdrawalTokenForPinCreation
    }, cookies);
    return console.log({ data, error }), data ? { data } : { error, authRequired };
  }
  async createWithdrawalPin(dto, cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "POST",
      url: ApiEndPoints.setWithdrawalPin,
      data: dto
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async resolveAccountDetails(dto, cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "POST",
      url: ApiEndPoints.resolveAccountDetails,
      data: dto
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async addAccountDetails(dto, cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "POST",
      url: ApiEndPoints.addACCountDetails,
      data: dto
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async getWithdrawalCharges(dto, cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "POST",
      url: ApiEndPoints.getWithdrawalCharges,
      data: dto
    }, cookies);
    return console.log("EERIE", dto, data, error), data ? { data } : { error, authRequired };
  }
  async requestWithdrawal(dto, cookies) {
    let { data, error, authRequired } = await ApiCall.call({
      method: "POST",
      url: ApiEndPoints.requestWithdrawal,
      data: dto
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async queryReferralBoard(cookies, query = null) {
    let url = ApiEndPoints.pagedReferralBoard;
    if (query) {
      let qs = new URLSearchParams(Object.entries(query).reduce((acc, [k, v]) => (v != null && (acc[k] = String(v)), acc), {})).toString();
      console.log({ qs }), qs && (url = `${url}?${qs}`);
    }
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async queryAdminAffiliateBoard(cookies, query = null) {
    let url = ApiEndPoints.adminAffiliateBoard;
    if (query) {
      let qs = new URLSearchParams(Object.entries(query).reduce((acc, [k, v]) => (v != null && (acc[k] = String(v)), acc), {})).toString();
      console.log({ qs }), qs && (url = `${url}?${qs}`);
    }
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
}, walletRepo = new WalletRepository();

// app/routes/user.addwithdrawalaccount.personal.$walletid.tsx
import { useLoaderData as useLoaderData4, useActionData as useActionData2 } from "@remix-run/react";
import { json as json6 } from "@remix-run/node";
import { useEffect as useEffect12 } from "react";
import { jsx as jsx36, jsxs as jsxs27 } from "react/jsx-runtime";
async function loader4({ request, params }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  console.log({ cookieHeader }), cookieHeader || redirect3("/login");
  let walletid = params.walletid;
  if (!walletid)
    return redirect3("/user/wallet");
  let { error, data, authRequired } = await walletRepo.getUserWalletById(walletid, cookieHeader);
  if (authRequired && redirect3("/login"), console.log("RIDE OR DIE", data), !data)
    return redirect3("/user/wallet");
  let walletAccount = data, walletCurrencyBanksResponse = await walletRepo.getBanksForCurrency(walletAccount.wallet_currency, cookieHeader);
  return console.log("User wallets", { walletAccount, walletCurrencyBanks: walletCurrencyBanksResponse }), { error, walletAccount, walletCurrencyBanks: walletCurrencyBanksResponse.data, authRequired };
}
async function action4({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "", formData = await request.formData(), intent = formData.get("intent");
  switch (intent) {
    case "getAccountDetails":
      console.log("getAccountDetails", formData.get("bank"));
      var dto = {
        currency: formData.get("currency"),
        account_number: formData.get("accountNumber"),
        bank_code: formData.get("bank"),
        wallet_id: formData.get("wallet_id")
      }, { data, error, authRequired } = await walletRepo.resolveAccountDetails(dto, cookieHeader);
      return console.log("DATA", error, data, authRequired), json6({ data, error, authRequired, intent });
    case "addAccountDetails":
      console.log("getAccountDetails", formData.get("bank"));
      var _dto = {
        currency: formData.get("currency"),
        account_number: formData.get("accountNumber"),
        bank_code: formData.get("bank_code"),
        wallet_id: formData.get("wallet_id"),
        pin: formData.get("pin")
      }, response = await walletRepo.addAccountDetails(_dto, cookieHeader);
      return console.log("ADD ACCOUNT DEETS", response?.error?.detail, response, _dto), json6({ ...response, intent });
      break;
  }
  return json6({ success: !0 });
}
function useAddWithdrawalAccountPage() {
  let navigate = useNavigate5(), { error, walletAccount, walletCurrencyBanks, authRequired } = useLoaderData4(), { toast: toast5 } = useToast(), actionData = useActionData2(), [banks, setBanks] = useState13([]), [wallet, setWallet] = useState13(), [accountDetails, setAccountDetails] = useState13(null);
  return useEffect12(() => {
    error && toast5({
      variant: "destructive",
      title: "An error occured",
      description: error?.detail.toString() ?? "Error occured"
    });
  }, [error]), useEffect12(() => {
    if (actionData?.intent === "getAccountDetails" && actionData?.data && setAccountDetails(actionData.data), actionData?.intent === "addAccountDetails" && actionData?.data) {
      toast5({ title: "Success", description: "Recipient added successfully." }), navigate("/user/wallet");
      return;
    }
    actionData?.success && toast5({ title: "Success", description: "Recipient added successfully." }), actionData?.error && toast5({
      variant: "destructive",
      title: "An error occured",
      description: actionData?.error?.detail.toString() ?? "Error occured"
    });
  }, [actionData, actionData?.data]), useEffect12(() => {
    walletCurrencyBanks && setBanks(walletCurrencyBanks), walletAccount && setWallet(walletAccount);
  }, [walletAccount, walletCurrencyBanks]), { banks, wallet, accountDetails, setAccountDetails };
}
function AddWithdrawalAccountPage() {
  let { banks, wallet, accountDetails, setAccountDetails } = useAddWithdrawalAccountPage(), isSubmitting = useNavigation2().state === "submitting", [searchTerm, setSearchTerm] = useState13(""), [isOpen, setIsOpen] = useState13(!1), [selectedBank, setSelectedBank] = useState13(null), dropdownRef = useRef5(null), filteredBanks = useMemo(() => banks.filter(
    (bank) => bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), [banks, searchTerm]);
  useEffect12(() => {
    let handleClickOutside = (event) => {
      dropdownRef.current && !dropdownRef.current.contains(event.target) && setIsOpen(!1);
    };
    return document.addEventListener("mousedown", handleClickOutside), () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  let inputClasses = `
    w-full h-14 px-5 
    bg-white border border-gray-200 
    rounded-2xl text-gray-900 text-base
    outline-none transition-all duration-200
    hover:border-gray-400
    focus:border-slate-800 focus:ring-1 focus:ring-slate-800
  `;
  return /* @__PURE__ */ jsx36("div", { className: "min-h-screen bg-white flex flex-col items-center pt-16 px-4", children: /* @__PURE__ */ jsxs27("div", { className: "max-w-md w-full flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs27("div", { className: "flex flex-col items-center mb-10 text-center", children: [
      /* @__PURE__ */ jsx36("div", { className: "w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100", children: /* @__PURE__ */ jsx36("div", { className: "w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx36(Svg, { src: icons.avatarIcon, className: "w-6 h-6 text-white" }) }) }),
      /* @__PURE__ */ jsx36("h1", { className: "text-2xl font-bold text-gray-900", children: "Add personal account" }),
      /* @__PURE__ */ jsx36("p", { className: "text-gray-500 mt-1 text-sm", children: "Enter your banking details below" })
    ] }),
    accountDetails ? /* @__PURE__ */ jsxs27(Form4, { method: "POST", className: "w-full flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs27("div", { className: "relative", children: [
        /* @__PURE__ */ jsx36("select", { id: "country", name: "country", required: !0, className: `${inputClasses} bg-gray-50 cursor-not-allowed appearance-none`, children: /* @__PURE__ */ jsx36("option", { value: "NG", children: "Nigeria" }) }),
        /* @__PURE__ */ jsx36("div", { className: "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400", children: /* @__PURE__ */ jsx36(ChevronDownIcon2, {}) })
      ] }),
      /* @__PURE__ */ jsx36("div", { className: "relative", children: /* @__PURE__ */ jsx36(
        "input",
        {
          required: !0,
          value: selectedBank?.name || "",
          readOnly: !0,
          className: inputClasses
        }
      ) }),
      /* @__PURE__ */ jsx36("div", { className: "relative", children: /* @__PURE__ */ jsx36(
        "input",
        {
          id: "accountNumber",
          name: "accountNumber",
          placeholder: "Account Number (10 digits)",
          required: !0,
          readOnly: !0,
          className: inputClasses
        }
      ) }),
      /* @__PURE__ */ jsx36("div", { className: "relative", children: /* @__PURE__ */ jsx36(
        "input",
        {
          id: "pin",
          name: "pin",
          placeholder: "PIN (6 digits)",
          required: !0,
          minLength: 6,
          maxLength: 6,
          type: "password",
          className: inputClasses
        }
      ) }),
      /* @__PURE__ */ jsx36("input", { type: "hidden", name: "bank_code", value: selectedBank?.code || "", required: !0 }),
      /* @__PURE__ */ jsx36("input", { type: "hidden", name: "intent", value: "addAccountDetails" }),
      /* @__PURE__ */ jsx36("input", { type: "hidden", name: "currency", value: `${wallet?.wallet_currency}` }),
      /* @__PURE__ */ jsx36("input", { type: "hidden", name: "wallet_id", value: `${wallet?._id}` }),
      /* @__PURE__ */ jsxs27("div", { className: "px-5 py-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex justify-between items-center", children: [
        /* @__PURE__ */ jsx36("span", { className: "text-xs font-medium text-gray-400 uppercase tracking-wider", children: "Account Name" }),
        /* @__PURE__ */ jsx36("p", { className: "text-sm font-bold text-slate-800", children: accountDetails ? accountDetails.account_name : "Invalid Account" })
      ] }),
      /* @__PURE__ */ jsx36(
        Cta_default,
        {
          element: "button",
          type: "submit",
          disabled: isSubmitting,
          className: "mt-6 w-full h-14 rounded-2xl bg-slate-900 hover:bg-black text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]",
          children: isSubmitting ? "Adding..." : "Add Account"
        }
      ),
      /* @__PURE__ */ jsx36(
        "button",
        {
          type: "button",
          onClick: () => setAccountDetails(null),
          className: "w-full h-14 rounded-2xl bg-white border border-gray-200 text-gray-500 font-medium hover:bg-gray-50 transition-colors",
          children: "Go back"
        }
      )
    ] }) : /* @__PURE__ */ jsxs27(Form4, { method: "POST", className: "w-full flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs27("div", { className: "relative", children: [
        /* @__PURE__ */ jsx36("select", { id: "country", name: "country", required: !0, className: `${inputClasses} bg-gray-50 cursor-not-allowed appearance-none`, children: /* @__PURE__ */ jsx36("option", { value: "NG", children: "Nigeria" }) }),
        /* @__PURE__ */ jsx36("div", { className: "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400", children: /* @__PURE__ */ jsx36(ChevronDownIcon2, {}) })
      ] }),
      /* @__PURE__ */ jsxs27("div", { className: "relative", ref: dropdownRef, children: [
        /* @__PURE__ */ jsx36(
          "input",
          {
            type: "text",
            placeholder: "Search or select bank",
            className: inputClasses,
            value: isOpen ? searchTerm : selectedBank?.name || "",
            onChange: (e) => {
              setSearchTerm(e.target.value), isOpen || setIsOpen(!0);
            },
            onFocus: () => {
              setIsOpen(!0), setSearchTerm("");
            }
          }
        ),
        /* @__PURE__ */ jsx36("input", { type: "hidden", name: "bank", value: selectedBank?.code || "", required: !0 }),
        /* @__PURE__ */ jsx36("div", { className: "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400", children: /* @__PURE__ */ jsx36(ChevronDownIcon2, {}) }),
        isOpen && /* @__PURE__ */ jsx36("div", { className: "absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden", children: filteredBanks.length > 0 ? filteredBanks.map((bank) => /* @__PURE__ */ jsx36(
          "div",
          {
            className: "px-5 py-4 hover:bg-slate-50 cursor-pointer text-gray-900 border-b border-gray-50 last:border-none transition-colors",
            onClick: () => {
              setSelectedBank(bank), setSearchTerm(bank.name), setIsOpen(!1);
            },
            children: bank.name
          },
          bank.code
        )) : /* @__PURE__ */ jsx36("div", { className: "px-5 py-4 text-gray-400 italic", children: "No banks found" }) })
      ] }),
      /* @__PURE__ */ jsx36("div", { className: "relative", children: /* @__PURE__ */ jsx36(
        "input",
        {
          id: "accountNumber",
          name: "accountNumber",
          placeholder: "Account Number (10 digits)",
          required: !0,
          className: inputClasses
        }
      ) }),
      /* @__PURE__ */ jsx36("input", { type: "hidden", name: "intent", value: "getAccountDetails" }),
      /* @__PURE__ */ jsx36("input", { type: "hidden", name: "currency", value: `${wallet?.wallet_currency}` }),
      /* @__PURE__ */ jsx36("input", { type: "hidden", name: "wallet_id", value: `${wallet?._id}` }),
      /* @__PURE__ */ jsx36(
        Cta_default,
        {
          element: "button",
          type: "submit",
          disabled: isSubmitting,
          className: "mt-6 w-full h-14 rounded-2xl bg-slate-900 hover:bg-black text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]",
          children: isSubmitting ? "Getting details..." : "Get Account Details"
        }
      )
    ] })
  ] }) });
}
var ChevronDownIcon2 = () => /* @__PURE__ */ jsx36("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx36("path", { d: "m6 9 6 6 6-6" }) });

// app/routes/user.addwithdrawalaccount.partner.$walletid.tsx
var user_addwithdrawalaccount_partner_walletid_exports = {};
__export(user_addwithdrawalaccount_partner_walletid_exports, {
  default: () => AccountTypePage,
  loader: () => loader5,
  useAccountTypePage: () => useAccountTypePage
});
import { redirect as redirect4 } from "@remix-run/node";
import { Form as Form5, Link as Link6, useNavigate as useNavigate6, useParams } from "@remix-run/react";
import { useState as useState14 } from "react";
import { jsx as jsx37, jsxs as jsxs28 } from "react/jsx-runtime";
async function loader5({ request, params }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  console.log({ cookieHeader }), cookieHeader || redirect4("/login");
  let walletid = params.walletid ?? "", { error, data, authRequired } = await walletRepo.getWalletWithdrawalAccounts(walletid, cookieHeader);
  return authRequired && redirect4("/login"), console.log("User wallets", data), { error, data, authRequired };
}
var BriefcaseIcon = () => /* @__PURE__ */ jsx37("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center", children: /* @__PURE__ */ jsx37("div", { className: "w-10 h-8 bg-green-500 rounded-lg flex items-center justify-center relative", children: /* @__PURE__ */ jsx37("div", { className: "w-4 h-2 border-2 border-white rounded-t-sm absolute -top-1" }) }) });
function useAccountTypePage() {
  let params = useParams(), [selectedType, setSelectedType] = useState14(null), [accountRedirectUrl, setAccountRedirectUrl] = useState14("");
  function updateSelectAccountType(accountType) {
    setSelectedType(accountType), setAccountRedirectUrl(`/user/addwithdrawalaccount/${accountType}/${params.walletid}`);
  }
  return { selectedType, setSelectedType, updateSelectAccountType, accountRedirectUrl };
}
function AccountTypePage() {
  let { selectedType, setSelectedType, updateSelectAccountType, accountRedirectUrl } = useAccountTypePage(), navigate = useNavigate6();
  return /* @__PURE__ */ jsx37("div", { className: "min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxs28("div", { className: "max-w-4xl w-full text-center", children: [
    /* @__PURE__ */ jsxs28("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight", children: [
      "What type of account ",
      /* @__PURE__ */ jsx37("br", {}),
      " would you like to add?"
    ] }),
    /* @__PURE__ */ jsxs28(Form5, { method: "post", className: "mt-16", children: [
      /* @__PURE__ */ jsx37("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: /* @__PURE__ */ jsxs28(
        "div",
        {
          onClick: () => updateSelectAccountType("partner"),
          className: `relative cursor-pointer transition-all duration-300 rounded-[40px] p-10 flex flex-col items-center text-center border-2 
                ${selectedType === "partner" ? "border-green-500 ring-4 ring-green-50" : "border-transparent bg-gray-50/50 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ jsx37("div", { className: "mb-8 scale-125", children: /* @__PURE__ */ jsx37(BriefcaseIcon, {}) }),
            /* @__PURE__ */ jsx37("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: "Partner account" }),
            /* @__PURE__ */ jsx37("p", { className: "text-gray-500 leading-relaxed max-w-[280px]", children: "Create an account with one of our partners. No creation fee charge attached" }),
            /* @__PURE__ */ jsx37("input", { type: "radio", name: "accountType", value: "partner", className: "hidden", checked: selectedType === "partner", readOnly: !0 })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx37("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsx37(Link6, { to: `${accountRedirectUrl}`, children: /* @__PURE__ */ jsx37(
        Cta_default,
        {
          element: "button",
          type: "submit",
          disabled: !selectedType,
          className: "w-full py-4 rounded-2xl text-lg font-semibold transition-colors",
          children: "Continue"
        }
      ) }) })
    ] })
  ] }) });
}

// app/routes/_public.contests.$tournamentId.$contestId.tsx
var public_contests_tournamentId_contestId_exports = {};
__export(public_contests_tournamentId_contestId_exports, {
  default: () => ContestLayout,
  loader: () => loader6
});
import { json as json8, redirect as redirect6 } from "@remix-run/node";
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
    no_of_winners: contest.no_of_winners,
    tally_vote_split_earnings: contest.tally_vote_split_earnings
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
import { json as json7, redirect as redirect5 } from "@remix-run/node";
var ContestRepository = class {
  /**
   *
   */
  constructor() {
  }
  async createContest(contest, token) {
    return console.log("Damn, that's interesting"), contest.entries().forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    }), await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.createContest,
      headers: {
        "Content-Type": "multipart/form-data"
        // Authorization: `Bearer ${token}`
      },
      data: contest
    }, token);
  }
  async deleteContest(contestId, cookie) {
    return await ApiCall.call({
      method: "DELETE" /* DELETE */,
      url: ApiEndPoints.deleteContest(contestId)
      // headers: { Authorization: `Bearer ${token}` },
    }, cookie);
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
  async adminGetContestsInTournament(tournamentUniqueId, token) {
    let { data: contests2, error } = await ApiCall.call({
      url: ApiEndPoints.adminGetContestsInTournament(tournamentUniqueId)
      // headers: { Authorization: `Bearer ${token}` },
    }, token);
    return contests2 ? { data: contests2.map((contest) => dtoToContest(contest)) } : { error };
  }
  async getContestsInTournament(tournamentUniqueId) {
    let { data: contests2, error } = await ApiCall.call({
      url: ApiEndPoints.getContestsInTournament(tournamentUniqueId)
    });
    return contests2 ? { data: contests2.map((contest) => dtoToContest(contest)) } : { error };
  }
  async updateContest({ contestId, dto }, cookie) {
    let { data: contest, error } = await ApiCall.call({
      url: ApiEndPoints.updateContest(contestId),
      method: "PUT" /* PUT */,
      headers: {
        "Content-Type": "multipart/form-data"
        // Authorization: `Bearer ${token}`
      },
      data: dto
    }, cookie);
    return error || !contest ? { error: error ?? { detail: "This contest no longer exists" } } : { data: dtoToContest(contest) };
  }
  async updateStage({ stageId, dto }, token) {
    let { data: stage, error } = await ApiCall.call({
      url: ApiEndPoints.updateStage(stageId),
      method: "PATCH" /* PATCH */,
      // headers: { Authorization: `Bearer ${token}` },
      data: dto
    }, token);
    return error || !stage ? { error: error ?? { detail: "The stage was not found" } } : { data: stage };
  }
  async toggleEnableBonus({ stageId, dto }, token) {
    let { data: stageBonus, error } = await ApiCall.call({
      url: ApiEndPoints.toggleEnableStageBonus(),
      method: "POST" /* POST */,
      // headers: { Authorization: `Bearer ${token}` },
      data: { stage_id: stageId, ...dto }
    }, token);
    return error || !stageBonus ? { error: error ?? { detail: "The stage was not found" } } : { data: stageBonus };
  }
  async deleteStage({ stageId }, token) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.deleteStage(stageId),
      method: "DELETE" /* DELETE */
      // headers: { Authorization: `Bearer ${token}` }
    }, token);
    return error ? { error } : { data };
  }
  async toggleRegistration({ contestId }, token) {
    let { data: contest, error } = await ApiCall.call({
      url: ApiEndPoints.toggleRegistration({ contestId }),
      method: "PATCH" /* PATCH */
      // headers: { Authorization: `Bearer ${token}` }
    }, token);
    return error || !contest ? { error: error ?? { detail: "The contest was not found" } } : { data: dtoToContest(contest) };
  }
  async getContestantsInStage(stageId, headers) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.getContestantsInStage(stageId),
      headers: { device_fingerprint: headers.fingerprint }
    });
    return error ? { error: error ?? { detail: "Could not fetch the stage data" } } : { data };
  }
  async migrateStage(payload, token) {
    return await ApiCall.call({
      url: ApiEndPoints.migrateStage,
      method: "POST" /* POST */,
      headers: {
        // Authorization: `Bearer ${token}` 
      },
      data: payload
    }, token);
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
  async query_contest(query = null, token) {
    let url = "/v2/api/admin/contest/query";
    if (query) {
      let queryString = new URLSearchParams(Object.entries(query).reduce((acc, [key, value]) => (value != null && value !== "" && (acc[key] = String(value)), acc), {})).toString();
      queryString && (url = `${url}?${queryString}`);
    }
    let { data, error, authRequired } = await ApiCall.call({
      url,
      method: "GET" /* GET */
      // headers: { Authorization: `Bearer ${token}` 
    }, token);
    return data ? { data: data.map((contest) => dtoToContest(contest)) } : { error, authRequired };
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
  let tally_split_earning = {
    contestant_share_percent: parseInt(formData.get("contestant_share_percent")),
    min_for_referral_earning: parseInt(formData.get("min_for_referral_earning")),
    referral_bonus_from_min: parseInt(formData.get("referral_bonus_from_min")),
    referral_percent_after_min: parseInt(formData.get("referral_percent_after_min"))
  }, payloadObj = {
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
    stages: JSON.stringify(stages),
    tally_vote_split_earnings: JSON.stringify(tally_split_earning)
  };
  console.log({ payloadObj }), console.log(payloadObj);
  let payload = new FormData();
  return Object.entries(payloadObj).forEach(([key, value]) => {
    (value !== null || value != null) && payload.append(key, value);
  }), payload;
}
async function deleteContest(formData, request) {
  let contestId = formData.get("contestId"), cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect5("/login");
  let { data, error } = await contestRepo.deleteContest(contestId, cookieHeader);
  if (data) {
    let { headers: headers2 } = await setToast({ request, toast: `success::The contest has been deleted::${Date.now()}` });
    return json7(null, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `error::Could not delete the contest::${Date.now()}` });
  return json7(error, { headers });
}
async function updateStage(formData, request) {
  let stageId = formData.get("stageId"), dto = prepareStageDto(formData), cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect5("/login");
  let { data, error } = await contestRepo.updateStage({ stageId, dto }, cookieHeader);
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail}::${Date.now()}` });
    return json7(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::The stage has been updated::${Date.now()}` });
  return json7(data, { headers });
}
async function toggleEnableStageBonus(formData, request) {
  let stage_id = formData.get("stage_id"), enable_bonus = formData.get("enable") === "true", hours = parseInt(formData.get("hours")), minutes = parseInt(formData.get("minutes")), cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect5("/login");
  let { data, error } = await contestRepo.toggleEnableBonus({ stageId: stage_id, dto: { enable: enable_bonus, hours, minutes } }, cookieHeader);
  if (console.log("ERROR!!"), console.log(error), error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail}::${Date.now()}` });
    return json7(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::The stage has been updated::${Date.now()}` });
  return json7(data, { headers });
}
async function toggleRegistration(formData, request) {
  let contestId = formData.get("contestId"), cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect5("/login");
  let { data, error } = await contestRepo.toggleRegistration({ contestId }, cookieHeader);
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail || "Could not perform the action"}::${Date.now()}` });
    return json7(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::The contest has been updated::${Date.now()}` });
  return json7(data, { headers });
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
      givaah: parseInt(formData.get("givaah_rate")),
      social_media_bonus: parseInt(formData.get("social_media_bonus_rate")),
      tally_bonus: parseInt(formData.get("tally_bonus_rate")),
      judge_bonus: parseInt(formData.get("judge_bonus_rate")),
      givaah_bonus: parseInt(formData.get("givaah_bonus_rate"))
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
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect5("/login");
  let payload = {
    current_stage_id: formData.get("from"),
    new_stage_id: formData.get("to")
  }, { data, error } = await contestRepo.migrateStage(payload, cookieHeader);
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail || "Could not perform the action"}::${Date.now()}` });
    return json7(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::Contestants have been migrated to the next stage::${Date.now()}` });
  return json7(data, { headers });
}
async function getFinalResultForContest(contestUniqueId) {
  let { data: contest, error } = await ApiCall.call({
    url: ApiEndPoints.finalResultForContest(contestUniqueId)
  });
  return contest ? { data: contest } : { error };
}

// app/routes/_public.contests.$tournamentId.$contestId.tsx
import { jsx as jsx38 } from "react/jsx-runtime";
async function loader6({ params, request }) {
  let { tournamentId, contestId } = params;
  if (!contestId)
    return redirect6(`/contests/${tournamentId}`);
  let url = new URL(request.url), tx_status = url.searchParams.get("status"), tx_ref = url.searchParams.get("tx_ref");
  if (tx_status && tx_ref) {
    await callTallyWebhook(tx_ref);
    let toast5 = tx_status === "completed" ? `success::Your payment has been received. Your vote will reflect shortly.::${Date.now()}` : `error::There seems to be an issue with your payment. Please try again later.::${Date.now()}`, { headers: headers2 } = await setToast({ request, toast: toast5 });
    throw url.searchParams.delete("status"), url.searchParams.delete("tx_ref"), url.searchParams.delete("transaction_id"), console.log("Redirecting to:", `${url.pathname}?${url.searchParams.toString()}`), redirect6(`${url.pathname}?${url.searchParams.toString()}`, { headers: headers2 });
  }
  let { data: contest, error } = await contestRepo.getContestById(contestId);
  if (error)
    return redirect6(`/contests/${tournamentId}`);
  if (contest.status === "registering")
    return json8({ contest, stage: null, baseUrl: process.env._BASE_URL });
  let stageQ = url.searchParams.get("stage"), stageId = (stageQ ? contest.stages.find((stage2) => stage2.stage == +stageQ)?._id : contest.stages.find((stage2) => stage2.active)?._id) ?? contest.stages.find((stage2) => stage2.stage == 1)?._id, { fingerprint, headers } = await getFingerprint({ request }), stage = stageId ? (await contestRepo.getContestantsInStage(stageId, { fingerprint })).data ?? null : null;
  return json8({ contest, stage, baseUrl: process.env._BASE_URL }, { headers });
}
function ContestLayout() {
  return /* @__PURE__ */ jsx38(Outlet2, {});
}

// app/routes/admin.transactions.contest-registrations.tsx
var admin_transactions_contest_registrations_exports = {};
__export(admin_transactions_contest_registrations_exports, {
  action: () => action5,
  default: () => ContestRegistrations,
  loader: () => loader7
});
import { json as json9 } from "@remix-run/node";
import { useLoaderData as useLoaderData5 } from "@remix-run/react";

// app/components/reusables/DataTable.tsx
import React10 from "react";
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { jsx as jsx39, jsxs as jsxs29 } from "react/jsx-runtime";
function DataTable({
  data,
  columns: columns5,
  className = "",
  TableActions,
  expandRows,
  getRowCanExpand,
  SubComponent
}) {
  let [sorting, setSorting] = React10.useState([]), expandOptions = expandRows ? { getRowCanExpand, getExpandedRowModel: getExpandedRowModel() } : {}, [rowSelection, setRowSelection] = React10.useState({}), table = useReactTable({
    data,
    columns: columns5,
    getCoreRowModel: getCoreRowModel(),
    state: { sorting, rowSelection },
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    ...expandOptions
  });
  return /* @__PURE__ */ jsxs29("div", { className: "", children: [
    TableActions ? /* @__PURE__ */ jsx39(TableActions, { table }) : null,
    /* @__PURE__ */ jsxs29("table", { className: `w-full ${className}`, children: [
      /* @__PURE__ */ jsx39("thead", { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx39("tr", { className: "border-b border-secondary", children: headerGroup.headers.map((header) => /* @__PURE__ */ jsx39("th", { className: "text-left uppercase font-satoshi-black p-3 [&:has([data-sortable=true])]:cursor-pointer [&:has([data-sortable=true])]:hover:bg-secondary", children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()) }, header.id)) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx39("tbody", { children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsxs29(React10.Fragment, { children: [
        /* @__PURE__ */ jsx39(
          "tr",
          {
            className: "border-b border-secondary hover:bg-secondary",
            "data-state": row.getIsSelected() && "selected",
            children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx39("td", { className: "p-3", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
          },
          row.id
        ),
        /* @__PURE__ */ jsx39("tr", { className: "hover:bg-secondary focus-within:bg-secondary", children: /* @__PURE__ */ jsx39("td", { colSpan: row.getVisibleCells().length, children: expandRows && row.getIsExpanded() && /* @__PURE__ */ jsx39(SubComponent, { row }) }) })
      ] }, row.id)) : /* @__PURE__ */ jsx39("tr", { className: "border-b border-secondary", children: /* @__PURE__ */ jsx39("td", { className: "p-3 text-center", colSpan: columns5.length, children: "No data to display" }) }) })
    ] })
  ] });
}

// app/components/reusables/DataTableColumnHeader.tsx
import { jsx as jsx40, jsxs as jsxs30 } from "react/jsx-runtime";
function DataTableColumnHeader({
  column,
  title,
  className
}) {
  return column.getCanSort() ? /* @__PURE__ */ jsxs30(
    "span",
    {
      "data-sortable": !0,
      className: `flex items-center ${className}`,
      onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
      children: [
        /* @__PURE__ */ jsx40("span", { children: title }),
        /* @__PURE__ */ jsx40(Svg, { src: icons.arrowUpDownIcon })
      ]
    }
  ) : title;
}

// app/components/reusables/Pagination.tsx
import { useLocation as useLocation6, useNavigate as useNavigate7 } from "@remix-run/react";
import { useState as useState15 } from "react";
import { jsx as jsx41, jsxs as jsxs31 } from "react/jsx-runtime";
function Pagination({ className = "", pageSize = 20, lastKey, firstKey }) {
  let navigate = useNavigate7(), location = useLocation6(), [rows, setRows] = useState15(pageSize), updateSearch = (newParams) => {
    let url = new URL(window.location.href);
    Object.entries(newParams).forEach(([k, v]) => {
      v === null || v === "" ? url.searchParams.delete(k) : url.searchParams.set(k, v);
    }), navigate(`${url.pathname}${url.search}`, { replace: !1 });
  }, onNext = () => {
    updateSearch({ page_size: String(rows), last_key_id: lastKey ?? "", direction: "next" });
  }, onPrev = () => {
    updateSearch({ first_key_id: firstKey ?? "", page_size: String(rows), direction: "previous" });
  };
  return /* @__PURE__ */ jsxs31("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
    /* @__PURE__ */ jsxs31("label", { className: "flex gap-2", children: [
      "Rows per page",
      /* @__PURE__ */ jsx41("input", { type: "number", name: "rows", id: "rows", className: "w-12 rounded-md border", defaultValue: rows, onChange: (e) => setRows(parseInt(e.target.value)) })
    ] }),
    /* @__PURE__ */ jsxs31("div", { className: `flex gap-6 md:gap-8 justify-center items-center font-semibold ${className}`, children: [
      /* @__PURE__ */ jsxs31("button", { onClick: onPrev, className: "flex gap-1 items-center rounded py-1 px-2 hover:outline outline-primary", children: [
        /* @__PURE__ */ jsx41(Svg, { src: icons.arrowPrevIcon }),
        " Prev"
      ] }),
      /* @__PURE__ */ jsx41("span", { className: "whitespace-nowrap", children: "Page controls" }),
      /* @__PURE__ */ jsxs31("button", { onClick: onNext, className: "flex gap-1 items-center rounded py-1 px-2 hover:outline outline-primary", children: [
        "Next ",
        /* @__PURE__ */ jsx41(Svg, { src: icons.arrowNextIcon })
      ] })
    ] })
  ] });
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
import { Fragment as Fragment7, jsx as jsx42, jsxs as jsxs32 } from "react/jsx-runtime";
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
    header: ({ column }) => /* @__PURE__ */ jsx42(DataTableColumnHeader, { column, title: "trx ref" })
  },
  {
    accessorKey: "contest",
    header: ({ column }) => /* @__PURE__ */ jsx42(DataTableColumnHeader, { column, title: "contest" })
  },
  {
    accessorKey: "contestant",
    header: ({ column }) => /* @__PURE__ */ jsx42(DataTableColumnHeader, { column, title: "contestant" })
  },
  {
    accessorKey: "sender",
    header: ({ column }) => /* @__PURE__ */ jsx42(DataTableColumnHeader, { column, title: "sender" })
  },
  {
    accessorKey: "amount",
    header: ({ column }) => /* @__PURE__ */ jsx42(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "amount" }),
    cell: ({ getValue }) => numberFormatter(getValue(), numberFormatterOptions)
  },
  {
    accessorKey: "date",
    header: ({ column }) => /* @__PURE__ */ jsx42(DataTableColumnHeader, { column, title: "date" }),
    cell: ({ getValue }) => /* @__PURE__ */ jsxs32("span", { children: [
      /* @__PURE__ */ jsx42("span", { className: "block", children: formatDate(new Date(getValue()), dateOptions) }),
      /* @__PURE__ */ jsx42("span", { className: "block", children: formatDate(new Date(getValue()), timeOptions) })
    ] })
  },
  {
    accessorKey: "status",
    header: ({ column }) => /* @__PURE__ */ jsx42(DataTableColumnHeader, { column, title: "status" }),
    cell: ({ getValue }) => {
      let status = getValue();
      return /* @__PURE__ */ jsx42(StatusTag, { status, color: status === "pending" ? "yellow" : status === "verified" ? "green" : status === "revoked" ? "red" : "gray" });
    }
  }
];
function ContestRegistrationsTable({ data }) {
  return /* @__PURE__ */ jsxs32(Fragment7, { children: [
    /* @__PURE__ */ jsx42("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsx42(DataTable, { data, columns, className: "text-xs" }) }),
    /* @__PURE__ */ jsxs32("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
      /* @__PURE__ */ jsxs32("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ jsx42("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 })
      ] }),
      /* @__PURE__ */ jsx42(Pagination, {})
    ] })
  ] });
}

// app/routes/admin.transactions.contest-registrations.tsx
import { jsx as jsx43, jsxs as jsxs33 } from "react/jsx-runtime";
async function loader7({}) {
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
  return json9({ tranasctions });
}
async function action5({ request }) {
  let formData = await request.formData();
  console.log(...formData);
  let { headers } = await setToast({ request, toast: `success::The transaction has been created::${Date.now()}` });
  return json9(null, { headers });
}
function ContestRegistrations() {
  let { tranasctions } = useLoaderData5();
  return /* @__PURE__ */ jsxs33("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsx43("section", { className: "flex justify-between items-center mb-8 sm:mb-16", children: /* @__PURE__ */ jsx43("h1", { className: "text-xl xs:text-2xl font-black text-primary", children: "Registration Transactions" }) }),
    /* @__PURE__ */ jsx43("section", { className: "my-12", children: /* @__PURE__ */ jsx43(ContestRegistrationsTable, { data: tranasctions }) })
  ] });
}

// app/routes/_public.contests.$tournamentId._index.tsx
var public_contests_tournamentId_index_exports = {};
__export(public_contests_tournamentId_index_exports, {
  default: () => TournamentPage,
  loader: () => loader8,
  useTournamentPageController: () => useTournamentPageController
});
import { json as json10, redirect as redirect7 } from "@remix-run/node";
import { useLoaderData as useLoaderData6 } from "@remix-run/react";
import { useState as useState16 } from "react";

// app/components/reusables/ContestCard.tsx
import { Link as Link7 } from "@remix-run/react";
import { jsx as jsx44, jsxs as jsxs34 } from "react/jsx-runtime";
function ContestCard({ contest, to, withTag, withCategory }) {
  let status = withTag ? contest.status : null, color = status === "registering" ? "yellow" : status === "ongoing" ? "green" : status === "completed" ? "red" : "gray";
  return /* @__PURE__ */ jsxs34(Link7, { to, className: "flex flex-col gap-2 max-w-lg relative w-full", children: [
    /* @__PURE__ */ jsx44("img", { src: contest.image || no_image_default, alt: "contest image", className: "rounded-3xl h-56 object-cover" }),
    withTag ? /* @__PURE__ */ jsx44(StatusTag, { status: contest.status, className: "absolute top-4 left-4", color }) : null,
    withCategory ? /* @__PURE__ */ jsx44("span", { className: "text-sm", children: "Category" }) : null,
    /* @__PURE__ */ jsx44("p", { className: "text-2xl font-bold capitalize", children: contest.name })
  ] });
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
var TournamentRepository = class {
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
  async createTournament(dto, token) {
    let { data: tournament, error } = await ApiCall.call({
      method: "POST" /* POST */,
      url: ApiEndPoints.createTournament,
      headers: {
        "Content-Type": "multipart/form-data"
        // Authorization: `Bearer ${token}`
      },
      data: dto
    }, token);
    return error ? { error } : { data: dtoToTournament(tournament) };
  }
  async updateTournament({ id, dto }, cookie) {
    let { data: tournament, error } = await ApiCall.call({
      url: ApiEndPoints.updateTournament(id),
      method: "PUT" /* PUT */,
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: dto
    }, cookie);
    return error || !tournament ? { error: error ?? { detail: "Tournament was not found" } } : { data: dtoToTournament(tournament) };
  }
  async deleteTournament(tournamentId, token) {
    return await ApiCall.call({
      url: ApiEndPoints.deleteTournament(tournamentId),
      method: "DELETE" /* DELETE */
      // headers: { Authorization: `Bearer ${token}` },
    }, token);
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
import { jsx as jsx45, jsxs as jsxs35 } from "react/jsx-runtime";
async function loader8({ params }) {
  let { tournamentId } = params;
  if (!tournamentId)
    return redirect7("/contests");
  let { data: tournament, error } = await tournamentRepo.getTournamentById(tournamentId), { data: contests2 } = await contestRepo.getContestsInTournament(tournamentId);
  return error ? redirect7("/contests") : json10({
    tournament: {
      ...tournament,
      contests: contests2?.toReversed() ?? tournament.contests.filter((contest) => contest.status !== "yet_to_start").toReversed()
    }
  });
}
function useTournamentPageController() {
  let { tournament } = useLoaderData6();
  return { tournament };
}
function TournamentPage() {
  let { tournament } = useTournamentPageController(), [filteredContests, setFilteredContests] = useState16(tournament.contests ?? []), [activeId, setActiveId] = useState16("all");
  function handleFilterStatus(e, status) {
    setActiveId(e.currentTarget.id), setFilteredContests(tournament.contests.filter((contest) => contest.status === status)), e.currentTarget.classList.add("bg-accent", "text-white");
  }
  function getAllContestsInTournament(e) {
    setActiveId(e.currentTarget.id), setFilteredContests(tournament.contests);
  }
  return /* @__PURE__ */ jsxs35("main", { className: "grow", children: [
    /* @__PURE__ */ jsx45("header", { className: "wrapper my-16", children: /* @__PURE__ */ jsx45("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-bold max-w-3xl", children: tournament.name }) }),
    /* @__PURE__ */ jsx45("section", { className: "wrapper", children: /* @__PURE__ */ jsxs35("div", { className: "p-2 rounded-full bg-secondary flex w-fit text-xs sm:text-base", children: [
      /* @__PURE__ */ jsx45("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "all" ? "bg-accent text-white" : ""}`, id: "all", onClick: (e) => getAllContestsInTournament(e), children: "All KOTM" }),
      /* @__PURE__ */ jsx45("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "ongoing" ? "bg-accent text-white" : ""}`, id: "ongoing", onClick: (e) => handleFilterStatus(e, "ongoing"), children: "Ongoing" }),
      /* @__PURE__ */ jsx45("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "registering" ? "bg-accent text-white" : ""}`, id: "registering", onClick: (e) => handleFilterStatus(e, "registering"), children: "Registering" }),
      /* @__PURE__ */ jsx45("span", { className: `cursor-pointer whitespace-nowrap p-2 sm:px-4 sm:py-3 rounded-full font-satoshi-medium ${activeId === "completed" ? "bg-accent text-white" : ""}`, id: "completed", onClick: (e) => handleFilterStatus(e, "completed"), children: "Completed" })
    ] }) }),
    /* @__PURE__ */ jsx45("section", { className: "wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center", children: filteredContests.map((contest) => /* @__PURE__ */ jsx45(ContestCard, { contest, to: contest.id, withTag: !0 }, contest.id)) }),
    /* @__PURE__ */ jsx45("div", { className: "wrapper my-20 flex justify-center", children: /* @__PURE__ */ jsx45(Button, { element: "button", variant: "outline", children: "See more contests" }) })
  ] });
}

// app/routes/user.addwithdrawalaccount.$walletid.tsx
var user_addwithdrawalaccount_walletid_exports = {};
__export(user_addwithdrawalaccount_walletid_exports, {
  default: () => AccountTypePage2,
  loader: () => loader9,
  useAccountTypePage: () => useAccountTypePage2
});
import { redirect as redirect8 } from "@remix-run/node";
import { Form as Form6, Link as Link8, useNavigate as useNavigate8, useParams as useParams2 } from "@remix-run/react";
import { useState as useState17 } from "react";
import { jsx as jsx46, jsxs as jsxs36 } from "react/jsx-runtime";
async function loader9({ request, params }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  console.log({ cookieHeader }), cookieHeader || redirect8("/login");
  let walletid = params.walletid ?? "", { error, data, authRequired } = await walletRepo.getWalletWithdrawalAccounts(walletid, cookieHeader);
  return authRequired && redirect8("/login"), console.log("User wallets", data), { error, data, authRequired };
}
var UserIcon = () => /* @__PURE__ */ jsx46("div", { className: "w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center", children: /* @__PURE__ */ jsx46("div", { className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx46("div", { className: "w-4 h-4 bg-white rounded-full mt-[-4px]" }) }) }), BriefcaseIcon2 = () => /* @__PURE__ */ jsx46("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center", children: /* @__PURE__ */ jsx46("div", { className: "w-10 h-8 bg-green-500 rounded-lg flex items-center justify-center relative", children: /* @__PURE__ */ jsx46("div", { className: "w-4 h-2 border-2 border-white rounded-t-sm absolute -top-1" }) }) });
function useAccountTypePage2() {
  let params = useParams2(), [selectedType, setSelectedType] = useState17(null), [accountRedirectUrl, setAccountRedirectUrl] = useState17("");
  function updateSelectAccountType(accountType) {
    setSelectedType(accountType), setAccountRedirectUrl(`/user/addwithdrawalaccount/${accountType}/${params.walletid}`);
  }
  return { selectedType, setSelectedType, updateSelectAccountType, accountRedirectUrl };
}
function AccountTypePage2() {
  let { selectedType, setSelectedType, updateSelectAccountType, accountRedirectUrl } = useAccountTypePage2(), navigate = useNavigate8();
  return /* @__PURE__ */ jsx46("div", { className: "min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsxs36("div", { className: "max-w-4xl w-full text-center", children: [
    /* @__PURE__ */ jsxs36("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight", children: [
      "What type of account ",
      /* @__PURE__ */ jsx46("br", {}),
      " would you like to add?"
    ] }),
    /* @__PURE__ */ jsxs36(Form6, { method: "post", className: "mt-16", children: [
      /* @__PURE__ */ jsxs36("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxs36(
          "div",
          {
            onClick: () => updateSelectAccountType("personal"),
            className: `relative cursor-pointer transition-all duration-300 rounded-[40px] p-10 flex flex-col items-center text-center border-2 
                ${selectedType === "personal" ? "border-blue-500 ring-4 ring-blue-50" : "border-transparent bg-gray-50/50 hover:bg-gray-100"}`,
            children: [
              /* @__PURE__ */ jsx46("div", { className: "mb-8 scale-125", children: /* @__PURE__ */ jsx46(UserIcon, {}) }),
              /* @__PURE__ */ jsx46("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: "Personal account" }),
              /* @__PURE__ */ jsx46("p", { className: "text-gray-500 leading-relaxed max-w-[280px]", children: "Add any bank account of you or your loved one. You would pay a one time fee that would be taken from your earnings" }),
              /* @__PURE__ */ jsx46("input", { type: "radio", name: "accountType", value: "personal", className: "hidden", checked: selectedType === "personal", readOnly: !0 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs36(
          "div",
          {
            onClick: () => updateSelectAccountType("partner"),
            className: `relative cursor-pointer transition-all duration-300 rounded-[40px] p-10 flex flex-col items-center text-center border-2 
                ${selectedType === "partner" ? "border-green-500 ring-4 ring-green-50" : "border-transparent bg-gray-50/50 hover:bg-gray-100"}`,
            children: [
              /* @__PURE__ */ jsx46("div", { className: "mb-8 scale-125", children: /* @__PURE__ */ jsx46(BriefcaseIcon2, {}) }),
              /* @__PURE__ */ jsx46("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: "Partner account" }),
              /* @__PURE__ */ jsx46("p", { className: "text-gray-500 leading-relaxed max-w-[280px]", children: "Create an account with one of our partners. No creation fee charge attached" }),
              /* @__PURE__ */ jsx46("input", { type: "radio", name: "accountType", value: "partner", className: "hidden", checked: selectedType === "partner", readOnly: !0 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx46("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsx46(Link8, { to: `${accountRedirectUrl}`, children: /* @__PURE__ */ jsx46(
        Cta_default,
        {
          element: "button",
          type: "submit",
          disabled: !selectedType,
          className: "w-full py-4 rounded-2xl text-lg font-semibold transition-colors",
          children: "Continue"
        }
      ) }) })
    ] })
  ] }) });
}

// app/routes/admin.contests.$contestId.$stageId.tsx
var admin_contests_contestId_stageId_exports = {};
__export(admin_contests_contestId_stageId_exports, {
  action: () => action6,
  default: () => StageContestants,
  loader: () => loader10
});
import { json as json11, redirect as redirect9 } from "@remix-run/node";
import { useLoaderData as useLoaderData8, useNavigate as useNavigate9 } from "@remix-run/react";

// app/components/reusables/Checkbox.tsx
import { jsx as jsx47 } from "react/jsx-runtime";
function Checkbox({ className, checked = !1, onCheckedChange = () => {
}, ...props }) {
  return /* @__PURE__ */ jsx47(
    "input",
    {
      type: "checkbox",
      checked,
      className: `cursor-pointer ${className}`,
      onChange: () => onCheckedChange(checked),
      ...props
    }
  );
}

// app/components/admin/contest/EditContestantDialog.tsx
import { Form as Form7, useLoaderData as useLoaderData7 } from "@remix-run/react";
import { useState as useState19 } from "react";

// app/components/reusables/RoundCta.tsx
import React11 from "react";
import { Link as Link9 } from "@remix-run/react";
import cn5 from "classnames";
import { jsx as jsx48 } from "react/jsx-runtime";
var RoundCta_default = React11.forwardRef(function({ icon, className = "", iconClass = "", ...props }, ref) {
  let disabled = props.element === "link" ? props["aria-disabled"] : props.disabled || props["aria-disabled"], classNames = cn5(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full ${className}`, {
    "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
  });
  return props.element === "link" ? /* @__PURE__ */ jsx48(Link9, { ...props, className: classNames, children: /* @__PURE__ */ jsx48(Svg, { src: icon, className: iconClass }) }) : /* @__PURE__ */ jsx48("button", { ref, ...props, className: classNames, children: /* @__PURE__ */ jsx48(Svg, { src: icon, className: iconClass }) });
});

// app/hooks/useFilePreview.ts
import { useEffect as useEffect13, useRef as useRef6, useState as useState18 } from "react";
function useFilePreview(fileList) {
  let [filePreview, setFilePreview] = useState18(null), fileName = useRef6("");
  useEffect13(() => {
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
import { jsx as jsx49, jsxs as jsxs37 } from "react/jsx-runtime";
function EditContestantDialog({ disabled, contestant }) {
  let { stage } = useLoaderData7(), isKotmy = stage.rates.social_media.type === "kotmy", [files, setFiles] = useState19(null), { filePreview, clearFilePreview } = useFilePreview(files);
  return /* @__PURE__ */ jsxs37(Dialog, { onOpenChange: (open) => {
    open || clearFilePreview();
  }, children: [
    /* @__PURE__ */ jsx49(
      DialogTrigger,
      {
        disabled,
        title: "Edit contestant",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-[#262626] bg-[#F7F7F8] text-primary", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsx49(Svg, { src: icons.editIcon, className: "w-3" })
      }
    ),
    disabled ? null : /* @__PURE__ */ jsx49(DialogContent, { className: "bg-secondary max-h-screen overflow-y-auto", children: /* @__PURE__ */ jsxs37(DialogHeader, { children: [
      /* @__PURE__ */ jsx49(DialogTitle, { children: "Edit Contestant Data" }),
      /* @__PURE__ */ jsx49(DialogDescription, { children: /* @__PURE__ */ jsxs37(Form7, { method: "POST", className: "text-primary text-xs flex flex-col gap-4 mt-3", encType: "multipart/form-data", children: [
        /* @__PURE__ */ jsxs37("fieldset", { className: "py-1 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx49("legend", { className: "text-gray-400 font-medium", children: "Biodata" }),
          /* @__PURE__ */ jsxs37("div", { className: "relative max-sm:col-span-2 row-span-3 flex flex-col max-h-56 overflow-y-hidden rounded text-left font-semibold", children: [
            "Image",
            /* @__PURE__ */ jsx49("img", { src: filePreview || contestant.image_url || no_image_default, alt: "contestant image", width: 300, height: 300, className: "bg-neutral-200 size-full object-cover rounded" }),
            /* @__PURE__ */ jsx49(
              RoundCta_default,
              {
                icon: icons.closeIcon,
                element: "button",
                type: "button",
                onClick: () => clearFilePreview(),
                className: cn("absolute bottom-2 right-2 bg-white/80 p-2 rounded-full hover:bg-red-50 hover:text-red-400 transition-colors", { hidden: !filePreview })
              }
            ),
            /* @__PURE__ */ jsxs37("label", { htmlFor: "media", className: cn("absolute bottom-2 right-2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors cursor-pointer", { hidden: filePreview }), children: [
              /* @__PURE__ */ jsx49("input", { type: "file", name: "media", id: "media", hidden: !0, onChange: (e) => setFiles(e.target.files) }),
              /* @__PURE__ */ jsx49(Svg, { src: icons.imageIcon })
            ] })
          ] }),
          /* @__PURE__ */ jsx49(FormControl, { as: "input", id: "first_name", name: "first_name", labelText: "First Name", labelClassNames: "text-left", defaultValue: contestant.contestant_biodata.first_name }),
          /* @__PURE__ */ jsx49(FormControl, { as: "input", id: "last_name", name: "last_name", labelText: "Last Name", labelClassNames: "text-left", defaultValue: contestant.contestant_biodata.last_name }),
          /* @__PURE__ */ jsx49(FormControl, { as: "input", id: "email", name: "email", labelText: "Email Address", labelClassNames: "text-left", defaultValue: contestant.contestant_biodata.email }),
          /* @__PURE__ */ jsxs37("label", { htmlFor: "gender", className: "font-bold flex flex-col text-left", children: [
            "Gender",
            /* @__PURE__ */ jsxs37(Select, { name: "sex", required: !0, defaultValue: contestant.contestant_biodata.sex, children: [
              /* @__PURE__ */ jsx49(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx49(SelectValue, { placeholder: "Gender" }) }),
              /* @__PURE__ */ jsxs37(SelectContent, { children: [
                /* @__PURE__ */ jsx49(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }),
                /* @__PURE__ */ jsx49(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx49(FormControl, { as: "input", type: "date", labelText: "Date of Birth", id: "dob", name: "dob", labelClassNames: "text-left", defaultValue: parseDateForInput(contestant.contestant_biodata.dob), max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] }),
          /* @__PURE__ */ jsxs37("label", { htmlFor: "gender", className: "font-bold flex flex-col text-left", children: [
            "State of Residence",
            /* @__PURE__ */ jsxs37(Select, { name: "state", required: !0, defaultValue: contestant.contestant_biodata.state_of_residence, children: [
              /* @__PURE__ */ jsx49(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx49(SelectValue, { placeholder: "State" }) }),
              /* @__PURE__ */ jsx49(SelectContent, { children: Object.entries(nigerianStates).map(([key, label]) => /* @__PURE__ */ jsx49(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: label }, key)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs37("fieldset", { className: "py-1 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx49("legend", { className: "text-gray-400 font-medium", children: "Voting" }),
          /* @__PURE__ */ jsx49(FormControl, { as: "input", id: "social_media_url", name: "social_media_url", labelText: "Social Media Link", labelClassNames: "text-left", defaultValue: contestant.social_media_url, disabled: isKotmy }),
          /* @__PURE__ */ jsx49(FormControl, { as: "input", id: "social_media_vote", name: "social_media_vote", labelText: "Social Media Vote", labelClassNames: "text-left", type: "number", min: 0, defaultValue: contestant?.vote.social_media }),
          /* @__PURE__ */ jsx49(FormControl, { as: "input", id: "stage_bonus", name: "stage_bonus", labelText: "Stage Bonus", type: "number", labelClassNames: "text-left", min: 0, defaultValue: contestant.vote.bonus }),
          /* @__PURE__ */ jsx49(FormControl, { as: "input", id: "judge_vote", name: "judge_vote", labelText: "Judge Vote", type: "number", labelClassNames: "text-left", min: 0, defaultValue: contestant.vote.judge })
        ] }),
        /* @__PURE__ */ jsxs37("div", { className: "flex justify-end gap-6", children: [
          /* @__PURE__ */ jsx49("input", { type: "hidden", name: "contestant_id", value: contestant._id }),
          /* @__PURE__ */ jsx49(
            Cta_default,
            {
              element: "button",
              type: "reset",
              variant: "outline",
              className: "px-3 py-2 rounded-md font-bold min-w-[90px] border-secondary hover:border-slate-400 text-primary",
              children: "Reset"
            }
          ),
          /* @__PURE__ */ jsx49(DialogClose, { type: "submit", name: "intent", value: "edit", className: "bg-accent px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Submit" })
        ] })
      ] }) })
    ] }) })
  ] });
}

// app/components/admin/contest/DeleteContestantDialog.tsx
import { jsx as jsx50, jsxs as jsxs38 } from "react/jsx-runtime";
function DeleteContestantDialog({ disabled }) {
  return /* @__PURE__ */ jsxs38(Dialog, { children: [
    /* @__PURE__ */ jsx50(
      DialogTrigger,
      {
        disabled,
        title: "Delete contestant",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsx50(Svg, { src: icons.trashIcon, className: "w-3" })
      }
    ),
    /* @__PURE__ */ jsxs38(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ jsxs38(DialogHeader, { children: [
        /* @__PURE__ */ jsx50(DialogTitle, { children: "Delete contestant" }),
        /* @__PURE__ */ jsx50(DialogDescription, { children: "This contestant will be deleted from the records. Are you sure you want to proceed?" })
      ] }),
      /* @__PURE__ */ jsx50(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsx50(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }) })
    ] })
  ] });
}

// app/components/admin/contest/EvictContestantDialog.tsx
import { useFetcher as useFetcher4 } from "@remix-run/react";
import { jsx as jsx51, jsxs as jsxs39 } from "react/jsx-runtime";
function EvictContestantDialog({ disabled, contestants }) {
  let fetcher = useFetcher4(), ids = contestants.map((contestant) => contestant._id).join("|");
  return /* @__PURE__ */ jsxs39(Dialog, { children: [
    /* @__PURE__ */ jsx51(
      DialogTrigger,
      {
        disabled,
        title: "Evict contestant",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsx51(Svg, { src: icons.downArrowIcon, className: "size-3.5" })
      }
    ),
    /* @__PURE__ */ jsxs39(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxs39(DialogHeader, { children: [
        /* @__PURE__ */ jsxs39(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsx51("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsx51(Svg, { src: icons.questionIcon }) }),
          /* @__PURE__ */ jsxs39("p", { children: [
            /* @__PURE__ */ jsx51("span", { className: "block", children: "Evict Contestants" }),
            /* @__PURE__ */ jsx51("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the eviction of these contestants" })
          ] })
        ] }),
        /* @__PURE__ */ jsx51(DialogDescription, { className: "border-y p-4", children: /* @__PURE__ */ jsx51("span", { className: "text-primary mb-2 block", children: "The selected contestants will not proceed to the next stage. Are you sure you want to proceed?" }) })
      ] }),
      /* @__PURE__ */ jsx51(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ jsxs39(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsx51("input", { type: "hidden", name: "contestants_ids", value: ids }),
        /* @__PURE__ */ jsx51("input", { type: "hidden", name: "stage_id", value: contestants[0]?.stage_id }),
        /* @__PURE__ */ jsx51(DialogClose, { type: "submit", name: "intent", value: "evict", className: "bg-red-500 px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" })
      ] }) })
    ] })
  ] });
}

// app/components/admin/contest/AdmitContestantDialog.tsx
import { useFetcher as useFetcher5 } from "@remix-run/react";
import { jsx as jsx52, jsxs as jsxs40 } from "react/jsx-runtime";
function AdmitContestantDialog({ disabled, contestants }) {
  let fetcher = useFetcher5(), ids = contestants.map((contestant) => contestant._id).join("|");
  return /* @__PURE__ */ jsxs40(Dialog, { children: [
    /* @__PURE__ */ jsx52(
      DialogTrigger,
      {
        disabled,
        title: "Admit contestants",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-green-500 bg-green-50 text-green-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsx52(Svg, { src: icons.upArrowIcon, className: "size-3.5" })
      }
    ),
    /* @__PURE__ */ jsxs40(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxs40(DialogHeader, { children: [
        /* @__PURE__ */ jsxs40(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsx52("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsx52(Svg, { src: icons.questionIcon }) }),
          /* @__PURE__ */ jsxs40("p", { children: [
            /* @__PURE__ */ jsx52("span", { className: "block", children: "Admit Contestants" }),
            /* @__PURE__ */ jsx52("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the promotion of these contestants" })
          ] })
        ] }),
        /* @__PURE__ */ jsx52(DialogDescription, { className: "border-y p-4", children: /* @__PURE__ */ jsx52("span", { className: "text-primary mb-2 block", children: "The selected contestants will be marked for promotion to the next stage." }) })
      ] }),
      /* @__PURE__ */ jsx52(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ jsxs40(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsx52("input", { type: "hidden", name: "contestants_ids", value: ids }),
        /* @__PURE__ */ jsx52("input", { type: "hidden", name: "stage_id", value: contestants[0]?.stage_id }),
        /* @__PURE__ */ jsx52(DialogClose, { type: "submit", name: "intent", value: "admit", className: "bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" })
      ] }) })
    ] })
  ] });
}

// app/components/admin/contest/ContestantTableActions.tsx
import { jsx as jsx53, jsxs as jsxs41 } from "react/jsx-runtime";
function ContestantTableActions({ table }) {
  let singleRowSelected = table.getFilteredSelectedRowModel().rows.length === 1, rowsSelected = table.getFilteredSelectedRowModel().rows.length >= 1, contestants = table.getSelectedRowModel().rows.map((row) => row.original), contestant = contestants.at(0) ?? {};
  return /* @__PURE__ */ jsxs41("div", { className: "flex gap-4 items-center px-3 mb-3", children: [
    /* @__PURE__ */ jsx53(EditContestantDialog, { disabled: !singleRowSelected, contestant }),
    /* @__PURE__ */ jsx53(DeleteContestantDialog, { disabled: !rowsSelected }),
    /* @__PURE__ */ jsx53(EvictContestantDialog, { disabled: !rowsSelected, contestants }),
    /* @__PURE__ */ jsx53(AdmitContestantDialog, { disabled: !rowsSelected, contestants })
  ] });
}

// app/components/admin/contest/ContestantTable.tsx
import { Fragment as Fragment8, jsx as jsx54 } from "react/jsx-runtime";
var columns2 = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ jsx54("div", { className: "flex place-content-center", children: /* @__PURE__ */ jsx54(
      Checkbox,
      {
        className: "h-4 w-4",
        checked: table.getIsAllPageRowsSelected(),
        onCheckedChange: (value) => {
          table.toggleAllPageRowsSelected(!value);
        },
        "aria-label": "Select all"
      }
    ) }),
    cell: ({ row }) => /* @__PURE__ */ jsx54("div", { className: "flex place-content-center", children: /* @__PURE__ */ jsx54(
      Checkbox,
      {
        className: "h-4 w-4",
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!value),
        "aria-label": "Select row"
      }
    ) }),
    enableSorting: !1,
    enableHiding: !1
  },
  {
    id: "contestant",
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "contestant" }),
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
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "code" })
  },
  {
    id: "s-media",
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "s-media" }),
    accessorFn: (row) => row.vote.social_media
  },
  {
    id: "tally",
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "tally" }),
    accessorFn: (row) => row.vote.tally
  },
  {
    id: "givaah",
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "givaah" }),
    accessorFn: (row) => row.vote.givaah
  },
  {
    accessorKey: "grade",
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "grade" }),
    accessorFn: (row) => row.result.grade || "-"
  },
  {
    accessorKey: "is_evicted",
    header: ({ column }) => /* @__PURE__ */ jsx54(DataTableColumnHeader, { column, title: "status" }),
    cell: ({ row }) => {
      let status = row.getValue("is_evicted");
      return /* @__PURE__ */ jsx54(StatusTag, { status: status ? "Evicted" : "Safe", color: status ? "red" : "green" });
    }
  }
];
function ContestantTable({ data }) {
  return /* @__PURE__ */ jsx54(Fragment8, { children: /* @__PURE__ */ jsx54("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsx54(DataTable, { data, columns: columns2, className: "text-sm", TableActions: ContestantTableActions }) }) });
}

// app/routes/admin.contests.$contestId.$stageId.tsx
import { jsx as jsx55, jsxs as jsxs42 } from "react/jsx-runtime";
async function loader10({ params, request }) {
  let { contestId, stageId } = params;
  if (!contestId || !stageId)
    throw new Response(null, {
      status: 404,
      statusText: "We're sorry, but the resource was not found."
    });
  let { data: contest, error } = await contestRepo.getContestById(contestId);
  if (error) {
    let { headers } = await setToast({ request, toast: `error::Error fetching the contest::${Date.now()}` });
    return redirect9("/admin/contests", { headers });
  }
  let { fingerprint } = await getFingerprint({ request }), { data: stage } = await contestRepo.getContestantsInStage(stageId, { fingerprint });
  if (!stage) {
    let { headers } = await setToast({ request, toast: `error::Error fetching the contestants::${Date.now()}` });
    return redirect9("/admin/contests", { headers });
  }
  return json11({ contest, stage });
}
async function action6({ params, request }) {
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
  return json11(null, { headers });
}
function StageContestants() {
  let { contest, stage } = useLoaderData8(), navigate = useNavigate9();
  return /* @__PURE__ */ jsxs42("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs42("div", { className: "flex items-start mb-16 gap-4", children: [
      /* @__PURE__ */ jsx55(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }),
      /* @__PURE__ */ jsxs42("h1", { className: "text-lg xs:text-xl font-black text-primary capitalize", children: [
        contest.name,
        " - Stage ",
        stage.stage,
        " contestants"
      ] })
    ] }),
    /* @__PURE__ */ jsx55("section", { className: "my-12", children: /* @__PURE__ */ jsx55(ContestantTable, { data: stage.contestants }) })
  ] });
}

// app/routes/admin.transactions.affiliate-board.tsx
var admin_transactions_affiliate_board_exports = {};
__export(admin_transactions_affiliate_board_exports, {
  default: () => AffilliateLeaderBoard,
  loader: () => loader11
});
import { json as json12, redirect as redirect10 } from "@remix-run/node";
import { useLoaderData as useLoaderData9, Form as Form8, useNavigation as useNavigation3 } from "@remix-run/react";
import { jsx as jsx56, jsxs as jsxs43 } from "react/jsx-runtime";
async function loader11({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect10("/login");
  let url = new URL(request.url), query = {};
  for (let [k, v] of url.searchParams.entries())
    v && (query[k] = v);
  let walletsResponse = await walletRepo.getOrganizationWallets(cookieHeader);
  if (!walletsResponse.data)
    return redirect10("/login");
  query.wallet_id || (query.currency = walletsResponse.data[0]?.wallet_currency);
  let referralBoardRes = await walletRepo.queryAdminAffiliateBoard(cookieHeader, query);
  return referralBoardRes.authRequired ? redirect10("/login") : json12({ wallets: walletsResponse.data, referralBoardRes: referralBoardRes.data, query });
}
function AffilliateLeaderBoard() {
  let { wallets, referralBoardRes, query } = useLoaderData9(), navigation = useNavigation3();
  return console.log(referralBoardRes), /* @__PURE__ */ jsxs43("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsx56("p", { className: "font-semibold", children: "Affiliates Leaderboard" }),
    /* @__PURE__ */ jsx56("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ jsx56(Form8, { method: "get", onSubmit: (e) => {
      try {
      } catch {
      }
    }, className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ jsxs43("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ jsxs43("label", { className: "flex flex-col text-xs text-gray-600", children: [
        /* @__PURE__ */ jsx56("span", { className: "mb-1", children: "From" }),
        /* @__PURE__ */ jsx56("input", { id: "min_created_at", name: "min_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
      ] }),
      /* @__PURE__ */ jsxs43("label", { className: "flex flex-col text-xs text-gray-600", children: [
        /* @__PURE__ */ jsx56("span", { className: "mb-1", children: "To" }),
        /* @__PURE__ */ jsx56("input", { id: "max_created_at", name: "max_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
      ] }),
      /* @__PURE__ */ jsxs43("label", { className: "flex flex-col text-xs text-gray-600", children: [
        /* @__PURE__ */ jsx56("span", { className: "mb-1", children: "Currency" }),
        /* @__PURE__ */ jsx56("select", { id: "wallet_id", name: "wallet_id", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: wallets.map((wallet) => /* @__PURE__ */ jsxs43("option", { value: wallet.str_id, children: [
          wallet.wallet_currency,
          " ",
          wallet.account_number
        ] }, wallet.str_id)) })
      ] }),
      /* @__PURE__ */ jsx56("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx56("button", { type: "submit", disabled: navigation.state === "submitting", className: "px-4 py-2 bg-[#312E81] text-white rounded-lg text-sm", children: navigation.state === "submitting" ? "Searching..." : "Search" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx56("div", { className: "sm:block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs43("table", { className: "w-full table-auto", children: [
      /* @__PURE__ */ jsx56("thead", { children: /* @__PURE__ */ jsxs43("tr", { className: "border-b border-secondary", children: [
        /* @__PURE__ */ jsx56("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Referrer Name" }),
        /* @__PURE__ */ jsx56("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Referree Email" }),
        /* @__PURE__ */ jsx56("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Number of transactions" }),
        /* @__PURE__ */ jsx56("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Reward Earned" })
      ] }) }),
      /* @__PURE__ */ jsx56("tbody", { children: referralBoardRes?.items.map((referrerBoard, index) => /* @__PURE__ */ jsxs43("tr", { className: "border-b border-secondary", children: [
        /* @__PURE__ */ jsx56("td", { className: "p-3", children: referrerBoard.referrer.fullName }),
        /* @__PURE__ */ jsx56("td", { className: "p-3", children: referrerBoard.referrer.email }),
        /* @__PURE__ */ jsx56("td", { className: "p-3", children: referrerBoard.referrer_earnings_ledgers.length }),
        /* @__PURE__ */ jsx56("td", { className: "p-3", children: `${referralBoardRes.summary?.currency} ${referrerBoard.total_earning.toLocaleString()}` })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx56("div", { className: "hidden sm:flex justify-between items-center my-4", children: /* @__PURE__ */ jsx56(Pagination, { lastKey: referralBoardRes?.last_key_id, pageSize: referralBoardRes?.items_per_page, firstKey: referralBoardRes?.first_key_id }) })
  ] });
}

// app/routes/partners.product.update.$productId.tsx
var partners_product_update_productId_exports = {};
__export(partners_product_update_productId_exports, {
  action: () => action7,
  default: () => UpdatePartnerProduct,
  loader: () => loader12
});
import { json as json13, redirect as redirect11 } from "@remix-run/node";
import { Form as Form9, useActionData as useActionData3, useLoaderData as useLoaderData10, useNavigate as useNavigate10, useNavigation as useNavigation4 } from "@remix-run/react";
import { useEffect as useEffect14, useState as useState20 } from "react";

// app/components/reusables/Select.tsx
import { jsx as jsx57, jsxs as jsxs44 } from "react/jsx-runtime";
function Select2({ children, containerClass, className, label, ...selectProps }) {
  return /* @__PURE__ */ jsxs44("label", { className: "font-bold", children: [
    label,
    /* @__PURE__ */ jsx57("div", { className: `border hover:border-primary rounded-lg font-normal overflow-hidden ${containerClass}`, children: /* @__PURE__ */ jsx57("select", { className: `bg-transparent focus:outline-none p-3 mr-2 cursor-pointer w-[98%] ${className}`, ...selectProps, children }) })
  ] });
}

// app/services/partner/partner.server.ts
var PartnerServer = class {
  appendIfPresent(formData, key, value) {
    value != null && value !== "" && formData.append(key, String(value));
  }
  appendMany(formData, key, values) {
    values && values.length > 0 && values.forEach((value) => formData.append(key, value));
  }
  async requestPartnership(dto) {
    console.log(dto);
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.requestPartnership,
      method: "POST",
      data: dto
    });
    return error ? { error, data: void 0 } : { data, error: void 0 };
  }
  async searchPartners(query, cookies) {
    let params = new URLSearchParams(
      Object.entries(query).reduce((acc, [k, v]) => (v != null && v !== "" && (acc[k] = String(v)), acc), {})
    ).toString(), url = `${ApiEndPoints.partnerSearch}?${params}`, { data, error } = await ApiCall.call({
      url,
      method: "GET"
    }, cookies);
    return error ? { error } : { data };
  }
  async getBusinessDetails(businessId, cookies) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.getPartnerBusinessDetails(businessId),
      method: "GET"
    }, cookies);
    return error ? { error } : { data };
  }
  async updateBusinessStatus(dto, cookies) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.updatePartnerBusinessStatus,
      method: "PATCH",
      data: {
        ...dto,
        updated_on: dto.updated_on ?? (/* @__PURE__ */ new Date()).toISOString()
      }
    }, cookies);
    return error ? { error } : { data };
  }
  async addBusinessOwner(dto, cookies) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.addBusinessOwner,
      method: "PATCH",
      data: dto
    }, cookies);
    return error ? { error } : { data };
  }
  async addPartnerProduct(dto, cookie) {
    let formData = new FormData();
    formData.append("name", dto.name), formData.append("description", dto.description), formData.append("price_min", String(dto.price_min ?? 0)), formData.append("price_max", String(dto.price_max ?? 0)), formData.append("category", dto.category ?? ""), formData.append("currency", dto.currency ?? "NGN"), formData.append("status", dto.status ?? "available"), this.appendIfPresent(formData, "business_id", dto.business_id), this.appendIfPresent(formData, "sku", dto.sku), this.appendMany(formData, "tags", dto.tags), this.appendMany(formData, "locations", dto.locations), this.appendIfPresent(formData, "created_by", dto.created_by), dto.image && formData.append("image", dto.image);
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.createPartnerProduct,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formData
    }, cookie);
    return error ? { error } : { data };
  }
  async getPartnerProductById(productId, cookies) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.getPartnerProductById(productId),
      method: "GET"
    }, cookies);
    return console.log(data), error ? { error } : { data };
  }
  async updatePartnerProduct(productId, dto, cookie) {
    let formData = new FormData();
    this.appendIfPresent(formData, "name", dto.name), this.appendIfPresent(formData, "description", dto.description), this.appendIfPresent(formData, "price_min", dto.price_min), this.appendIfPresent(formData, "price_max", dto.price_max), this.appendIfPresent(formData, "category", dto.category), this.appendIfPresent(formData, "currency", dto.currency), this.appendIfPresent(formData, "status", dto.status), this.appendIfPresent(formData, "business_id", dto.business_id), this.appendIfPresent(formData, "sku", dto.sku), this.appendMany(formData, "tags", dto.tags), this.appendIfPresent(formData, "created_by", dto.created_by), this.appendMany(formData, "locations", dto.locations), dto.image && formData.append("image", dto.image);
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.updatePartnerProduct(productId),
      method: "PATCH",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formData
    }, cookie);
    return error ? { error } : { data };
  }
  async getPartnerProducts(query, cookies) {
    let params = new URLSearchParams(
      Object.entries(query).reduce((acc, [k, v]) => (v != null && v !== "" && (acc[k] = String(v)), acc), {})
    ).toString(), url = `${ApiEndPoints.getPartnerProducts}?${params}`, { data, error } = await ApiCall.call({
      url,
      method: "GET"
    }, cookies);
    return error ? { error } : { data };
  }
  async getMarketplaceProducts(query, cookies) {
    let params = new URLSearchParams(
      Object.entries(query).reduce((acc, [k, v]) => (v != null && v !== "" && (acc[k] = String(v)), acc), {})
    ).toString(), url = `${ApiEndPoints.getMarketplaceProducts}?${params}`, { data, error } = await ApiCall.call({
      url,
      method: "GET"
    }, cookies);
    return error ? { error } : { data };
  }
  async getCart(cookies) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.getPartnerCartItems,
      method: "GET"
    }, cookies);
    return error ? typeof error.detail == "string" && error.detail === "No active cart found" ? { data: null } : { error } : { data };
  }
  async upsertCartItems(dto, cookies) {
    let { data, error } = await ApiCall.call({
      url: ApiEndPoints.getPartnerCartItems,
      method: "POST",
      data: dto
    }, cookies);
    return error ? { error } : { data };
  }
  async getPartnerLocations(query, cookies) {
    let params = new URLSearchParams(
      Object.entries(query).reduce((acc, [k, v]) => (v != null && v !== "" && (acc[k] = String(v)), acc), {})
    ).toString(), url = `${ApiEndPoints.getPartnerLocations}?${params}`, { data, error } = await ApiCall.call({
      url,
      method: "GET"
    }, cookies);
    return error ? { error } : { data };
  }
}, partnerServer = new PartnerServer();

// app/routes/partners.product.update.$productId.tsx
import { jsx as jsx58, jsxs as jsxs45 } from "react/jsx-runtime";
function parseOptionalNumber(value) {
  if (value === null)
    return;
  let trimmed = value.toString().trim();
  if (!trimmed)
    return;
  let parsed = Number(trimmed);
  return Number.isNaN(parsed) ? void 0 : parsed;
}
function parseCommaSeparatedValues(value) {
  if (value === null)
    return;
  let parsed = value.toString().split(",").map((item) => item.trim()).filter(Boolean);
  return parsed.length > 0 ? parsed : void 0;
}
function getImageSrc(product) {
  return product.main_image_url || product.image_url || no_image_default;
}
function buildUpdateProductDto(formData) {
  let dto = {}, name = formData.get("name")?.toString().trim(), description = formData.get("description")?.toString().trim(), category = formData.get("category")?.toString().trim(), currency = formData.get("currency")?.toString().trim(), status = formData.get("status")?.toString().trim(), sku = formData.get("sku")?.toString().trim(), businessId = formData.get("business_id")?.toString().trim(), createdBy = formData.get("created_by")?.toString().trim();
  name && (dto.name = name), description && (dto.description = description);
  let priceMin = parseOptionalNumber(formData.get("price_min")), priceMax = parseOptionalNumber(formData.get("price_max"));
  priceMin !== void 0 && (dto.price_min = priceMin), priceMax !== void 0 && (dto.price_max = priceMax), category && (dto.category = category), currency && (dto.currency = currency), status && (dto.status = status), businessId && (dto.business_id = businessId), sku && (dto.sku = sku);
  let tags = parseCommaSeparatedValues(formData.get("tags"));
  tags && (dto.tags = tags);
  let locations = formData.getAll("locations").map((location) => location.toString()).filter(Boolean);
  locations.length > 0 && (dto.locations = locations), createdBy && (dto.created_by = createdBy);
  let imageValue = formData.get("image");
  return imageValue instanceof File && imageValue.size > 0 && (dto.image = imageValue), dto;
}
async function loader12({ request, params }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect11("/login");
  let productId = params.productId;
  if (!productId)
    throw new Response("Product id is required", { status: 400 });
  let [productRes, locationsRes] = await Promise.all([
    partnerServer.getPartnerProductById(productId, cookieHeader),
    partnerServer.getPartnerLocations({ page_size: 1e3 }, cookieHeader)
  ]);
  if (productRes.authRequired || locationsRes.authRequired)
    return redirect11("/login");
  if (productRes.error)
    throw new Response(
      productRes.error.detail?.toString() || "Could not load partner product",
      { status: 500 }
    );
  if (locationsRes.error)
    throw new Response(
      locationsRes.error.detail?.toString() || "Could not load partner locations",
      { status: 500 }
    );
  console.log("proddduct"), console.log(productRes);
  let product = productRes.data;
  if (!product)
    throw new Response("Partner product was not found", { status: 404 });
  return json13({
    product,
    locations: locationsRes.data?.items ?? []
  });
}
async function action7({ request, params }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect11("/login");
  let productId = params.productId;
  if (!productId)
    throw new Response("Product id is required", { status: 400 });
  let formData = await request.formData(), dto = buildUpdateProductDto(formData);
  return await partnerServer.updatePartnerProduct(productId, dto, cookieHeader);
}
function UpdatePartnerProduct() {
  let { product, locations } = useLoaderData10();
  product = product, locations = locations;
  let actionData = useActionData3(), isSubmitting = useNavigation4().state === "submitting", navigate = useNavigate10(), [tags, setTags] = useState20(product.tags.join(", "));
  return useEffect14(() => {
    setTags(product.tags.join(", "));
  }, [product]), useEffect14(() => {
    actionData?.error && toast({
      variant: "destructive",
      title: "Update product failed",
      description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not update partner product!"
    }), actionData && toast({
      variant: "default",
      title: "Product updated",
      description: "Partner product was successfully updated!"
    });
  }, [actionData, navigate]), /* @__PURE__ */ jsxs45("main", { className: "w-full overflow-y-auto p-6 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxs45("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsx58(Cta_default, { element: "button", type: "button", onClick: () => navigate(-1), className: "hover:bg-[#F7F7F8] text-primary px-4 py-2 rounded-lg", variant: "outline", children: "Back" }),
      /* @__PURE__ */ jsx58("h1", { className: "text-2xl font-black text-primary", children: "Update Partner Product" })
    ] }),
    /* @__PURE__ */ jsxs45(Form9, { method: "post", encType: "multipart/form-data", onReset: () => setTags(product.tags.join(", ")), className: "grid gap-4 text-sm bg-white p-6 rounded-xl border border-gray-100 shadow-sm", children: [
      /* @__PURE__ */ jsx58(FormControl, { as: "input", labelText: "Product Name", name: "name", id: "name", defaultValue: product.name, placeholder: "Enter product name" }),
      /* @__PURE__ */ jsx58(FormControl, { as: "textarea", labelText: "Description", name: "description", id: "description", defaultValue: product.description, placeholder: "Enter product description" }),
      /* @__PURE__ */ jsx58(FormControl, { as: "input", labelText: "Category", name: "category", id: "category", defaultValue: product.category, placeholder: "e.g. Shoes" }),
      /* @__PURE__ */ jsxs45("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx58(FormControl, { as: "input", labelText: "Price Min", name: "price_min", id: "price_min", type: "number", min: 0, defaultValue: product.price_min, placeholder: "0" }),
        /* @__PURE__ */ jsx58(FormControl, { as: "input", labelText: "Price Max", name: "price_max", id: "price_max", type: "number", min: 0, defaultValue: product.price_max, placeholder: "0" })
      ] }),
      /* @__PURE__ */ jsxs45(Select2, { label: "Currency", id: "currency", name: "currency", defaultValue: product.currency, required: !0, children: [
        /* @__PURE__ */ jsx58("option", { value: "NGN", children: "NGN" }),
        /* @__PURE__ */ jsx58("option", { value: "USD", children: "USD" })
      ] }),
      /* @__PURE__ */ jsxs45(Select2, { label: "Status", id: "status", name: "status", defaultValue: product.status, required: !0, children: [
        /* @__PURE__ */ jsx58("option", { value: "available", children: "Available" }),
        /* @__PURE__ */ jsx58("option", { value: "out_of_stock", children: "Out of Stock" }),
        /* @__PURE__ */ jsx58("option", { value: "suspended", children: "Suspended" })
      ] }),
      /* @__PURE__ */ jsx58(FormControl, { as: "input", labelText: "SKU", name: "sku", id: "sku", defaultValue: product.sku, placeholder: "Stock Keeping Unit" }),
      /* @__PURE__ */ jsx58(FormControl, { as: "input", labelText: "Tags (comma separated)", name: "tags", id: "tags", value: tags, onChange: (e) => setTags(e.target.value), placeholder: "e.g. shoes, sports, men" }),
      /* @__PURE__ */ jsxs45("label", { className: "block font-bold text-sm", children: [
        "Locations",
        /* @__PURE__ */ jsx58("div", { className: "mt-2 rounded-lg border border-secondary bg-white p-3", children: /* @__PURE__ */ jsx58(
          "select",
          {
            name: "locations",
            id: "locations",
            multiple: !0,
            defaultValue: product.locations,
            className: "w-full min-h-36 rounded-md border border-gray-200 bg-transparent p-3 text-sm outline-none focus:border-accent",
            children: locations.length > 0 ? locations.map((location) => /* @__PURE__ */ jsx58("option", { value: location.str_id, children: location.name }, location.str_id)) : /* @__PURE__ */ jsx58("option", { value: "", disabled: !0, children: "No locations available" })
          }
        ) }),
        /* @__PURE__ */ jsx58("span", { className: "mt-1 block text-xs font-normal text-gray-500", children: "Hold Ctrl or Cmd to select multiple locations." })
      ] }),
      /* @__PURE__ */ jsxs45("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs45("div", { className: "rounded-xl border border-gray-100 bg-slate-50 p-4", children: [
          /* @__PURE__ */ jsx58("div", { className: "mb-3 text-sm font-semibold text-gray-700", children: "Current Image" }),
          /* @__PURE__ */ jsx58(
            "img",
            {
              src: getImageSrc(product),
              alt: product.name,
              className: "h-56 w-full rounded-lg object-cover bg-white"
            }
          )
        ] }),
        /* @__PURE__ */ jsx58(DragnDrop, { name: "image", labelText: "Replace Product Image", multiple: !1, required: !1 }),
        /* @__PURE__ */ jsx58("p", { className: "text-xs text-gray-500", children: "Leave this blank to keep the current image." })
      ] }),
      /* @__PURE__ */ jsxs45("div", { className: "flex justify-end gap-4 mt-4", children: [
        /* @__PURE__ */ jsx58(Cta_default, { element: "button", type: "reset", className: "px-4 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }),
        /* @__PURE__ */ jsx58(Cta_default, { disabled: isSubmitting, element: "button", type: "submit", className: "px-4 py-2 rounded-lg font-medium", children: isSubmitting ? "Updating product..." : "Update Product" })
      ] })
    ] })
  ] });
}

// app/routes/admin.transactions.income-history.tsx
var admin_transactions_income_history_exports = {};
__export(admin_transactions_income_history_exports, {
  action: () => action8,
  default: () => WalletPage,
  loader: () => loader13
});
import { json as json14, redirect as redirect12 } from "@remix-run/node";
import { Link as Link10, useActionData as useActionData4, useLoaderData as useLoaderData11, useFetcher as useFetcher6 } from "@remix-run/react";
import { useState as useState21, useMemo as useMemo2, useEffect as useEffect15 } from "react";
import { jsx as jsx59, jsxs as jsxs46 } from "react/jsx-runtime";
async function loader13({ request }) {
  let cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader)
    return redirect12("/login");
  let url = new URL(request.url), page_size = Number(url.searchParams.get("page_size") ?? "10"), last_key_id = url.searchParams.get("last_key_id"), first_key_id = url.searchParams.get("first_key_id"), wallet_id_param = url.searchParams.get("wallet_id"), walletsResponse = await walletRepo.getOrganizationWallets(cookieHeader);
  console.log("DD", walletsResponse);
  let wallets = [];
  if (walletsResponse.data?.length)
    for (let _wallet of walletsResponse.data) {
      if (wallet_id_param && wallet_id_param === _wallet._id) {
        let pagedLedgers2 = await walletRepo.getOrganizationLedgersForWallet(cookieHeader, {
          wallet_id: _wallet._id,
          page_size,
          last_key_id: last_key_id ?? void 0
          // first_key_id: first_key_id ?? undefined,
        });
        pagedLedgers2.data && wallets.push({ wallet: _wallet, pagedLedgers: pagedLedgers2.data });
        continue;
      }
      let pagedLedgers = await walletRepo.getOrganizationLedgersForWallet(cookieHeader, {
        wallet_id: _wallet._id,
        page_size: 10
      });
      pagedLedgers.data && wallets.push({ wallet: _wallet, pagedLedgers: pagedLedgers.data });
    }
  return console.log("CLOSER", wallets), json14({ wallets });
}
async function action8({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "", formData = await request.formData(), cleaned = {};
  formData.forEach((value, key) => {
    let v = (value ?? "").toString().trim();
    v !== "" && (cleaned[key] = v);
  });
  let query = {};
  cleaned.transaction_type && (query.transaction_type = cleaned.transaction_type), cleaned.status && (query.status = cleaned.status), cleaned.min_amount && (query.min_amount = Number(cleaned.min_amount)), cleaned.max_amount && (query.max_amount = Number(cleaned.max_amount)), cleaned.min_created_at && (query.min_created_at = cleaned.min_created_at), cleaned.max_created_at && (query.max_created_at = cleaned.max_created_at), cleaned.user_id && (query.user_id = cleaned.user_id), cleaned.wallet_id && (query.wallet_id = cleaned.wallet_id), cleaned.currency && (query.currency = cleaned.currency), cleaned.payment_method && (query.payment_method = cleaned.payment_method), cleaned.contest_code && (query.contest_code = cleaned.contest_code);
  let walletResp = await walletRepo.wallet_search(query, cookieHeader);
  if (console.log("_MYMY walletResp", walletResp), walletResp.error)
    return json14({ error: walletResp.error }, { status: 400 });
  let ledgersResp = await walletRepo.getOrganizationLedgersForWallet(cookieHeader, query);
  if (ledgersResp.error)
    return json14({ error: ledgersResp.error }, { status: 400 });
  let walletsResp = await walletRepo.getOrganizationWallets(cookieHeader), wallets = [];
  if (walletsResp.data?.length) {
    let cleanedWallets = [];
    for (let _wallet of walletsResp.data)
      if (_wallet._id === walletResp.data?._id) {
        var updatedWallet = { ..._wallet };
        updatedWallet.metrics.money_in = walletResp.data.metrics.money_in, updatedWallet.metrics.money_out = walletResp.data.metrics.money_out, updatedWallet.metrics.net_change_this_month = walletResp.data.metrics.net_change_this_month, updatedWallet.metrics.net_change = walletResp.data.metrics.net_change, cleanedWallets.push({ wallet: updatedWallet, pagedLedgers: ledgersResp.data });
      } else {
        let paged = await walletRepo.getOrganizationLedgersForWallet(cookieHeader, { wallet_id: _wallet._id, page_size: 10 });
        cleanedWallets.push({ wallet: _wallet, pagedLedgers: paged.data ?? { items: [], total_items: 0, items_per_page: 10 } });
      }
    cleanedWallets.length && (wallets = cleanedWallets);
  }
  return console.log("WALLET RESP", walletResp, wallets), json14({ wallets });
}
function useWalletController() {
  let { wallets } = useLoaderData11(), { setUserStoreManager, getUserStoreManager } = useUserManager(), [user, setUser] = useState21(null);
  console.log(wallets);
  let [activeWalletId, setActiveWalletId] = useState21(
    wallets.length > 0 ? wallets[0].wallet._id : null
  );
  useEffect15(() => {
    let _user = getUserStoreManager();
    _user && setUser(_user);
  }, [getUserStoreManager]);
  let activeData = useMemo2(() => wallets.find((w) => w.wallet._id === activeWalletId) || null, [activeWalletId, wallets]), formatCurrency = (amount, currency) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount), [searchOpen, setSearchOpen] = useState21(!1), fetcher = useFetcher6(), isSubmitting = fetcher.state === "submitting", actionData = useActionData4(), [walletsState, setWalletsState] = useState21(wallets);
  return useEffect15(() => {
    (fetcher.data?.wallets ?? actionData?.wallets) || setWalletsState(wallets);
  }, [wallets, fetcher.data, actionData]), useEffect15(() => {
    let fw = fetcher.data?.wallets ?? actionData?.wallets;
    fw && Array.isArray(fw) && setWalletsState(fw);
  }, [fetcher.data, actionData]), {
    wallets,
    activeData,
    setActiveWalletId,
    formatCurrency,
    user,
    actionData,
    searchOpen,
    isSubmitting,
    walletsState,
    setSearchOpen,
    fetcher
  };
}
function WalletPage() {
  let { wallets, activeData, setActiveWalletId, formatCurrency, user, searchOpen, isSubmitting, walletsState, setSearchOpen, fetcher } = useWalletController();
  if (!activeData)
    return /* @__PURE__ */ jsx59("div", { className: "p-8", children: "No wallets found." });
  let activeDataLocal = walletsState.find((w) => w.wallet._id === activeData?.wallet._id) ?? activeData, { wallet, pagedLedgers } = activeDataLocal;
  return /* @__PURE__ */ jsxs46("div", { className: "p-8 max-w-7xl mx-auto bg-[#F9FAFB] min-h-screen", children: [
    /* @__PURE__ */ jsx59("h1", { className: "text-2xl font-semibold mb-6", children: "Wallet" }),
    /* @__PURE__ */ jsxs46("div", { className: "bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8", children: [
      /* @__PURE__ */ jsxs46("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxs46("div", { className: "flex items-center gap-2 text-gray-500", children: [
          /* @__PURE__ */ jsx59("span", { className: "text-sm", children: "Wallet balances" }),
          /* @__PURE__ */ jsx59("button", { className: "hover:bg-gray-100 p-1 rounded-full", children: "\u{1F441}\uFE0F" })
        ] }),
        /* @__PURE__ */ jsx59(
          "select",
          {
            className: "border rounded-full px-4 py-2 bg-gray-50 text-sm font-medium outline-none cursor-pointer",
            value: wallet._id,
            onChange: (e) => setActiveWalletId(e.target.value),
            children: walletsState.map((w) => /* @__PURE__ */ jsxs46("option", { value: w.wallet._id, children: [
              w.wallet.wallet_currency,
              " - ",
              w.wallet.account_number
            ] }, w.wallet._id))
          }
        )
      ] }),
      /* @__PURE__ */ jsx59("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ jsxs46("div", { children: [
        /* @__PURE__ */ jsx59("div", { className: "text-4xl font-bold mb-1", children: formatCurrency(wallet.withdrawable_balance, wallet.wallet_currency) }),
        /* @__PURE__ */ jsx59("div", { className: "text-gray-400 text-sm", children: wallet.wallet_name })
      ] }) }),
      /* @__PURE__ */ jsxs46("div", { className: "flex flex-col sm:flex-row gap-3 mt-8", children: [
        /* @__PURE__ */ jsx59(Link10, { to: `/user/withdraw/${wallet._id}`, children: /* @__PURE__ */ jsx59("button", { className: "bg-[#312E81] text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto", children: "\u2197 Withdraw" }) }),
        user?.withdrawal_pin_set ? /* @__PURE__ */ jsx59(Link10, { to: `/user/addwithdrawalaccount/${wallet._id}`, children: /* @__PURE__ */ jsx59("button", { className: "bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto", children: "Add withdrawal account" }) }) : /* @__PURE__ */ jsx59(Link10, { to: "/user/setwithdrawalpin", children: /* @__PURE__ */ jsx59("button", { className: "bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto", children: "+ Set withdrawal PIN" }) }),
        /* @__PURE__ */ jsx59("button", { className: "bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto", children: "\u21C4 Transfer to another wallet" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs46("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs46("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsx59("h2", { className: "text-lg font-medium text-gray-700", children: "Search" }),
        /* @__PURE__ */ jsxs46(
          "button",
          {
            type: "button",
            onClick: () => setSearchOpen((s) => !s),
            className: "flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800",
            "aria-expanded": searchOpen,
            children: [
              /* @__PURE__ */ jsx59("span", { children: searchOpen ? "Hide" : "Show" }),
              /* @__PURE__ */ jsx59(
                "svg",
                {
                  className: `w-4 h-4 transition-transform ${searchOpen ? "rotate-180" : ""}`,
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx59("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx59("div", { className: `transition-all ${searchOpen ? "overflow-scroll max-h-96" : "overflow-hidden max-h-0"}`, children: /* @__PURE__ */ jsx59("div", { className: "bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ jsxs46(fetcher.Form, { method: "post", className: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm", children: [
        /* @__PURE__ */ jsxs46("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx59("span", { className: "mb-1", children: "Transaction type" }),
          /* @__PURE__ */ jsxs46("select", { id: "transaction_type", name: "transaction_type", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: [
            /* @__PURE__ */ jsx59("option", { value: "", children: "All transaction types" }),
            /* @__PURE__ */ jsx59("option", { value: "credit", children: "Credit" }),
            /* @__PURE__ */ jsx59("option", { value: "debit", children: "Debit" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs46("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx59("span", { className: "mb-1", children: "Status" }),
          /* @__PURE__ */ jsxs46("select", { id: "status", name: "status", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: [
            /* @__PURE__ */ jsx59("option", { value: "", children: "Any status" }),
            /* @__PURE__ */ jsx59("option", { value: "pending", children: "Pending" }),
            /* @__PURE__ */ jsx59("option", { value: "completed", children: "Completed" }),
            /* @__PURE__ */ jsx59("option", { value: "void", children: "Void" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs46("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx59("span", { className: "mb-1", children: "Min amount" }),
          /* @__PURE__ */ jsx59("input", { id: "min_amount", name: "min_amount", type: "number", step: "0.01", placeholder: "Min amount", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
        ] }),
        /* @__PURE__ */ jsxs46("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx59("span", { className: "mb-1", children: "Max amount" }),
          /* @__PURE__ */ jsx59("input", { id: "max_amount", name: "max_amount", type: "number", step: "0.01", placeholder: "Max amount", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
        ] }),
        /* @__PURE__ */ jsxs46("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx59("span", { className: "mb-1", children: "From date" }),
          /* @__PURE__ */ jsx59("input", { id: "min_created_at", name: "min_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
        ] }),
        /* @__PURE__ */ jsxs46("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx59("span", { className: "mb-1", children: "To date" }),
          /* @__PURE__ */ jsx59("input", { id: "max_created_at", name: "max_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
        ] }),
        /* @__PURE__ */ jsxs46("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx59("span", { className: "mb-1", children: "Payment method" }),
          /* @__PURE__ */ jsxs46("select", { id: "payment_method", name: "payment_method", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: [
            /* @__PURE__ */ jsx59("option", { value: "", children: "Any payment method" }),
            /* @__PURE__ */ jsx59("option", { value: "flutterwave", children: "Flutterwave" }),
            /* @__PURE__ */ jsx59("option", { value: "bank", children: "Bank" }),
            /* @__PURE__ */ jsx59("option", { value: "paystack", children: "Paystack" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs46("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx59("span", { className: "mb-1", children: "Contest code" }),
          /* @__PURE__ */ jsx59("input", { id: "contest_code", name: "contest_code", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
        ] }),
        /* @__PURE__ */ jsx59("input", { type: "hidden", name: "wallet_id", value: wallet._id }),
        /* @__PURE__ */ jsx59("div", { className: "sm:col-span-3 flex justify-end mt-2", children: /* @__PURE__ */ jsx59("button", { type: "submit", disabled: isSubmitting, className: "px-4 py-2 bg-[#312E81] text-white rounded-lg text-sm disabled:opacity-50", children: isSubmitting ? "Searching..." : "Search" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs46("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs46("div", { className: "flex items-center gap-2 text-gray-600 mb-4", children: [
        /* @__PURE__ */ jsx59("span", { children: "\u{1F4C1}" }),
        /* @__PURE__ */ jsxs46("h2", { className: "font-medium", children: [
          "Recent wallet activity (",
          wallet.wallet_currency,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxs46("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 mb-8 border-b border-gray-100 pb-6", children: [
        /* @__PURE__ */ jsx59(
          MetricItem,
          {
            label: "Net change this month",
            value: formatCurrency(wallet.metrics.net_change_this_month, wallet.wallet_currency),
            tooltip: !0
          }
        ),
        /* @__PURE__ */ jsx59(
          MetricItem,
          {
            label: "Money in",
            value: formatCurrency(wallet.metrics.money_in, wallet.wallet_currency)
          }
        ),
        /* @__PURE__ */ jsx59(
          MetricItem,
          {
            label: "Money out",
            value: formatCurrency(wallet.metrics.money_out, wallet.wallet_currency)
          }
        )
      ] }),
      /* @__PURE__ */ jsx59("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs46("table", { className: "w-full text-left text-sm", children: [
        /* @__PURE__ */ jsx59("thead", { children: /* @__PURE__ */ jsxs46("tr", { className: "text-gray-400 border-b", children: [
          /* @__PURE__ */ jsx59("th", { className: "pb-4 font-medium", children: "S/N" }),
          /* @__PURE__ */ jsx59("th", { className: "pb-4 font-medium", children: "Date" }),
          /* @__PURE__ */ jsx59("th", { className: "pb-4 font-medium", children: "Ref ID" }),
          /* @__PURE__ */ jsx59("th", { className: "pb-4 font-medium", children: "Narration" }),
          /* @__PURE__ */ jsx59("th", { className: "pb-4 font-medium", children: "Beneficiary name" }),
          /* @__PURE__ */ jsx59("th", { className: "pb-4 font-medium", children: "Type" }),
          /* @__PURE__ */ jsx59("th", { className: "pb-4 font-medium", children: "Amount" })
        ] }) }),
        /* @__PURE__ */ jsx59("tbody", { className: "divide-y", children: pagedLedgers.items.map((item, idx) => /* @__PURE__ */ jsxs46("tr", { className: "hover:bg-gray-50/50 transition-colors", children: [
          /* @__PURE__ */ jsx59("td", { className: "py-4 text-gray-500", children: idx + 1 }),
          /* @__PURE__ */ jsxs46("td", { className: "py-4 text-gray-900 leading-tight", children: [
            new Date(item.completed_at || "").toLocaleDateString(),
            /* @__PURE__ */ jsx59("div", { className: "text-xs text-gray-400", children: new Date(item.completed_at || "").toLocaleTimeString() })
          ] }),
          /* @__PURE__ */ jsx59("td", { className: "py-4 text-gray-600 font-mono text-xs", children: item.payment_ref }),
          /* @__PURE__ */ jsx59("td", { className: "py-4 text-gray-600 max-w-xs", children: item.description }),
          /* @__PURE__ */ jsx59("td", { className: "py-4 text-gray-600 truncate", children: item.wallet_name }),
          /* @__PURE__ */ jsx59("td", { className: "py-4 uppercase text-xs font-semibold", children: item.entry_type }),
          /* @__PURE__ */ jsx59("td", { className: "py-4", children: /* @__PURE__ */ jsxs46("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx59("span", { className: `font-semibold ${item.entry_type === "credit" ? "text-green-600" : "text-gray-900"}`, children: formatCurrency(item.amount, item.currency) }),
            /* @__PURE__ */ jsx59(StatusBadge, { status: item.status })
          ] }) })
        ] }, item._id)) })
      ] }) }),
      /* @__PURE__ */ jsxs46("div", { className: "mt-6 flex justify-between items-center text-sm text-gray-500", children: [
        /* @__PURE__ */ jsxs46("div", { children: [
          "Showing ",
          pagedLedgers.items.length,
          " of ",
          pagedLedgers.total_items,
          " items"
        ] }),
        /* @__PURE__ */ jsx59(Pagination, { lastKey: pagedLedgers.last_key_id, pageSize: pagedLedgers.items_per_page, firstKey: pagedLedgers.first_key_id })
      ] })
    ] })
  ] });
}
function MetricItem({ label, value, tooltip = !1 }) {
  return /* @__PURE__ */ jsxs46("div", { children: [
    /* @__PURE__ */ jsxs46("div", { className: "text-xs text-gray-400 flex items-center gap-1 mb-1", children: [
      label,
      " ",
      tooltip && /* @__PURE__ */ jsx59("span", { className: "bg-gray-200 rounded-full w-3 h-3 text-[8px] flex items-center justify-center text-white", children: "i" })
    ] }),
    /* @__PURE__ */ jsx59("div", { className: "text-lg font-bold text-gray-800", children: value })
  ] });
}
function StatusBadge({ status }) {
  let styles = {
    Pending: "bg-orange-50 text-orange-500 border-orange-100",
    Failed: "bg-red-50 text-red-500 border-red-100",
    Completed: "bg-green-50 text-green-500 border-green-100"
  }, icons2 = {
    Pending: "\u23F1",
    Failed: "\u26A0\uFE0F",
    Completed: "\u2713"
  };
  return /* @__PURE__ */ jsxs46("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-medium border flex items-center gap-1 ${styles[status] || ""}`, children: [
    icons2[status],
    " ",
    status
  ] });
}

// app/routes/admin.contests.$contestId._index.tsx
var admin_contests_contestId_index_exports = {};
__export(admin_contests_contestId_index_exports, {
  action: () => action9,
  default: () => EditContest,
  loader: () => loader14
});
import { json as json15, redirect as redirect13 } from "@remix-run/node";
import { useLoaderData as useLoaderData12, useNavigate as useNavigate11 } from "@remix-run/react";

// app/components/admin/tournament/EditContestForm.tsx
import { Form as Form11 } from "@remix-run/react";

// app/components/admin/tournament/CategoryInputs.tsx
import { useState as useState22 } from "react";
import { jsx as jsx60, jsxs as jsxs47 } from "react/jsx-runtime";
function CategoryInputs({ categories }) {
  let [newCategory, setNewCategory] = useState22(""), [catogories, setCategories] = useState22(categories ?? []);
  function addCategory() {
    !newCategory || catogories.includes(newCategory) || (setCategories((prev) => [...prev, newCategory]), setNewCategory(""));
  }
  function removeCategory(category) {
    setCategories((prev) => prev.filter((cat) => cat !== category));
  }
  return /* @__PURE__ */ jsxs47("div", { children: [
    /* @__PURE__ */ jsx60("span", { className: "font-bold", children: "Categories" }),
    /* @__PURE__ */ jsxs47("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-3 border border-secondary p-3 rounded-lg", children: [
      catogories.map((category) => /* @__PURE__ */ jsxs47("div", { className: "p-3 rounded-lg border border-secondary flex items-center", children: [
        /* @__PURE__ */ jsx60("input", { type: "text", className: "grow pointer-events-none bg-transparent", name: "category", defaultValue: category }),
        /* @__PURE__ */ jsx60("button", { type: "button", children: /* @__PURE__ */ jsx60(
          Svg,
          {
            src: icons.closeIcon,
            width: ".9em",
            className: "hover:text-red-400",
            onClick: () => removeCategory(category)
          }
        ) })
      ] }, category)),
      /* @__PURE__ */ jsxs47("div", { className: "flex max-sm:flex-col gap-3 sm:gap-6 sm:items-end sm:col-span-3", children: [
        /* @__PURE__ */ jsx60(FormControl, { as: "input", placeholder: "Enter new category", id: "new_catogory", value: newCategory, onChange: (e) => setNewCategory(e.target.value) }),
        /* @__PURE__ */ jsxs47(
          "button",
          {
            type: "button",
            onClick: addCategory,
            className: "flex gap-2 items-center whitespace-nowrap px-8 py-3 rounded-lg border border-secondary hover:border-slate-400",
            children: [
              /* @__PURE__ */ jsx60(Svg, { src: icons.addIcon, width: ".9em" }),
              "Add Category"
            ]
          }
        )
      ] })
    ] })
  ] });
}

// app/components/admin/tournament/StageInputs.tsx
import { useReducer } from "react";
import { jsx as jsx61, jsxs as jsxs48 } from "react/jsx-runtime";
function reducer2(stages, action30) {
  return action30.type === "add" ? [...stages, {
    stage: (stages.at(-1)?.stage ?? 0) + 1,
    weight: 0,
    rates: { social_media: { type: "facebook", amount: 0 }, tally: 0, judge: 0, givaah: 0 }
  }] : action30.type === "remove" ? stages.filter((stage) => stage.stage !== action30.stageNumber || stage._id !== action30.value) : action30.type === "edit_sm_type" ? stages.map((stage) => stage.stage === action30.stageNumber ? { ...stage, rates: { ...stage.rates, social_media: { ...stage.rates.social_media, type: action30.value } } } : stage) : action30.type === "edit_stage_number" && !stages.some((stage) => stage.stage === action30.value) ? stages.map((stage) => stage.stage === action30.stageNumber ? { ...stage, stage: action30.value } : stage) : action30.type === "edit_stage_weight" ? stages.map((stage) => stage.stage === action30.stageNumber ? { ...stage, weight: action30.value } : stage) : stages;
}
function StageInputs({ stages }) {
  let [stagesState, dispatch2] = useReducer(reducer2, stages ?? []);
  return /* @__PURE__ */ jsxs48("div", { children: [
    /* @__PURE__ */ jsxs48("span", { className: "font-bold", children: [
      "Stages ",
      /* @__PURE__ */ jsx61("span", { className: "font-normal", children: "(weights must sum up to 100%)" })
    ] }),
    /* @__PURE__ */ jsxs48("div", { className: "grid gap-4 border border-secondary p-3 rounded-lg", children: [
      stagesState.map((stage, index) => /* @__PURE__ */ jsxs48("div", { className: "flex gap-4 items-end", children: [
        /* @__PURE__ */ jsxs48("fieldset", { className: "grow grid gap-3 sm:gap-6 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsx61(FormControl, { as: "input", type: "number", labelText: "Stage", id: `Stage_${index + 1}`, value: stage.stage, onChange: (e) => dispatch2({ type: "edit_stage_number", stageNumber: stage.stage, value: +e.target.value }) }),
          /* @__PURE__ */ jsx61(FormControl, { as: "input", type: "number", labelText: "Stage Weight (%)", id: `weight_${index + 1}`, name: `weight_${index + 1}`, value: stage?.weight ?? 0, min: 0, onChange: (e) => dispatch2({ type: "edit_stage_weight", stageNumber: stage.stage, value: +e.target.value }) }),
          /* @__PURE__ */ jsx61(Select2, { label: "Social Media", id: `social_media_${index + 1}`, name: `social_media_${index + 1}`, className: "capitalize", value: stage?.rates?.social_media.type ?? "", onChange: (e) => dispatch2({ type: "edit_sm_type", stageNumber: stage.stage, value: e.target.value }), children: socials.map((social) => /* @__PURE__ */ jsx61("option", { value: social, children: social }, social)) }),
          stage._id ? /* @__PURE__ */ jsx61("input", { type: "hidden", name: `stage_${index + 1}_id`, value: stage._id }) : null
        ] }),
        stage._id ? /* @__PURE__ */ jsx61("button", { type: "submit", className: "m-4", title: "delete stage", name: "intent", value: stage._id, children: /* @__PURE__ */ jsx61(Svg, { src: icons.closeIcon, width: ".9em", className: "hover:text-red-400" }) }) : /* @__PURE__ */ jsx61("button", { type: "button", className: "m-4", value: stage._id, onClick: () => dispatch2({ type: "remove", stageNumber: stage.stage }), children: /* @__PURE__ */ jsx61(Svg, { src: icons.closeIcon, width: ".9em", className: "hover:text-red-400" }) })
      ] }, stage.stage)),
      /* @__PURE__ */ jsxs48(
        "button",
        {
          type: "button",
          onClick: () => dispatch2({ type: "add" }),
          className: "flex gap-2 place-self-start items-center whitespace-nowrap px-6 py-2 rounded-lg border border-secondary hover:border-slate-400",
          children: [
            /* @__PURE__ */ jsx61(Svg, { src: icons.addIcon, width: ".9em" }),
            "Add Stage"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx61("input", { type: "hidden", name: "no_of_stages", value: stagesState.length })
  ] });
}

// app/components/admin/tournament/EditContestForm.tsx
import { useState as useState23 } from "react";
import { jsx as jsx62, jsxs as jsxs49 } from "react/jsx-runtime";
function EditContestForm({ tournaments, contest }) {
  let [fileList, setFileList] = useState23(null), { filePreview, clearFilePreview, fileName } = useFilePreview(fileList);
  return console.log(contest), /* @__PURE__ */ jsxs49(Form11, { className: "max-w-[700px] mx-auto grid gap-6 sm:gap-12 text-sm", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsx62("h1", { className: "text-2xl font-bold text-primary", children: "Contest Details" }),
    /* @__PURE__ */ jsxs49("div", { className: "flex items-center gap-x-5", children: [
      filePreview ? /* @__PURE__ */ jsx62("img", { className: "w-20 h-20 rounded-lg object-cover", src: filePreview, alt: "chosen image" }) : /* @__PURE__ */ jsx62("img", { className: "w-20 h-20 rounded-lg object-cover", src: contest.image || no_image_default, alt: "Contest banner" }),
      /* @__PURE__ */ jsxs49("div", { className: "flex flex-col items-start gap-2 max-xs:text-xs", children: [
        /* @__PURE__ */ jsxs49("label", { htmlFor: "image", className: "border-2 border-secondary text-primary cursor-pointer font-semibold py-2 px-4 rounded-lg", children: [
          "Change Photo",
          /* @__PURE__ */ jsx62("input", { id: "image", name: "image", type: "file", onChange: (e) => {
            setFileList(e.currentTarget.files);
          }, className: "hidden" })
        ] }),
        /* @__PURE__ */ jsxs49("span", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx62("span", { children: fileName || "PNG, JPG (max. 1440x900px)" }),
          fileName ? /* @__PURE__ */ jsx62(Svg, { src: icons.closeIcon, onClick: clearFilePreview, className: "text-red-600 cursor-pointer" }) : null
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs49("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs49(Select2, { name: "tournament", id: "tournament", label: "Tournament", className: "uppercase", defaultValue: contest.tournament_unique_id, required: !0, children: [
        /* @__PURE__ */ jsx62("option", { value: "", children: "Select a tournament" }),
        tournaments.map((tournament) => /* @__PURE__ */ jsx62("option", { value: tournament.id, children: tournament.id }, tournament.id))
      ] }),
      /* @__PURE__ */ jsx62(FormControl, { as: "input", labelText: "Contest Name", placeholder: "Enter contest name", id: "name", name: "name", defaultValue: contest.name, required: !0 }),
      /* @__PURE__ */ jsx62(FormControl, { as: "textarea", rows: 3, labelClassNames: "sm:col-span-2", labelText: "Contest Description", placeholder: "Enter contest description", id: "description", name: "description", defaultValue: contest.desc, required: !0 }),
      /* @__PURE__ */ jsx62(FormControl, { as: "input", labelText: "Unique Contest ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", defaultValue: contest.id, required: !0 }),
      /* @__PURE__ */ jsx62(FormControl, { as: "input", type: "datetime-local", labelText: "Registration Deadline", id: "reg_deadline", name: "reg_deadline", defaultValue: parseDateTimeForInput(contest.reg_deadline), required: !0 }),
      /* @__PURE__ */ jsx62(FormControl, { as: "input", type: "datetime-local", labelText: "Contest Start Date", id: "start_date", name: "start_date", defaultValue: parseDateTimeForInput(contest.start_date), required: !0 }),
      /* @__PURE__ */ jsx62(FormControl, { as: "input", type: "datetime-local", labelText: "Contest End Date", id: "end_date", name: "end_date", defaultValue: parseDateTimeForInput(contest.end_date), required: !0 }),
      /* @__PURE__ */ jsx62(FormControl, { as: "textarea", rows: 2, labelText: "Contest Prizes", labelClassNames: "sm:col-span-2", placeholder: "Enter contest prizes", id: "prizes", name: "prizes", defaultValue: contest.prizes, required: !0 })
    ] }),
    /* @__PURE__ */ jsx62(CategoryInputs, { categories: Object.values(contest.categories) }),
    /* @__PURE__ */ jsx62(StageInputs, { stages: contest.stages }, contest.stages.length),
    /* @__PURE__ */ jsxs49("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx62("legend", { className: "text-lg mb-4 font-bold", children: "Contestants and Referrals Earnings (Can only be edited before contest starts)" }),
      /* @__PURE__ */ jsx62(FormControl, { as: "input", type: "number", step: 1, max: 100, min: 0, labelText: "Contestant Share Percentage", id: "contestant_share_percent", name: "contestant_share_percent", defaultValue: contest.tally_vote_split_earnings.contestant_share_percent, readOnly: contest.status !== "yet_to_start" }),
      /* @__PURE__ */ jsx62(FormControl, { as: "input", type: "number", labelText: "Minimum amount for affiliate to earn", id: "min_for_referral_earning", name: "min_for_referral_earning", defaultValue: contest.tally_vote_split_earnings.min_for_referral_earning, readOnly: contest.status !== "yet_to_start" }),
      /* @__PURE__ */ jsx62(FormControl, { as: "input", type: "number", labelText: "Amount affiliate would earn from minimum", id: "referral_bonus_from_min", name: "referral_bonus_from_min", defaultValue: contest.tally_vote_split_earnings.referral_bonus_from_min, readOnly: contest.status !== "yet_to_start" }),
      /* @__PURE__ */ jsx62(FormControl, { as: "input", type: "number", step: 1, max: 100, min: 0, labelText: "Affiliate percentage earnings after minimum", id: "referral_percent_after_min", name: "referral_percent_after_min", defaultValue: contest.tally_vote_split_earnings.referral_percent_after_min, readOnly: contest.status !== "yet_to_start" })
    ] }),
    /* @__PURE__ */ jsxs49("fieldset", { className: "grid gap-6", children: [
      /* @__PURE__ */ jsx62("legend", { className: "text-lg mb-4 font-bold", children: "Submission Guidelines" }),
      /* @__PURE__ */ jsx62(FormControl, { as: "textarea", rows: 4, labelText: "Submission Requirements", placeholder: "Enter text here...", id: "sub_req", name: "sub_req", defaultValue: contest.sub_req, required: !0 }),
      /* @__PURE__ */ jsx62(FormControl, { as: "textarea", rows: 4, labelText: "Terms & Conditions", placeholder: "Enter text here...", id: "tnc", name: "tnc", defaultValue: contest.terms_cond, required: !0 }),
      /* @__PURE__ */ jsx62(FormControl, { as: "textarea", rows: 4, labelText: "Additional Information", placeholder: "Enter text here...", id: "add_info", name: "add_info", defaultValue: contest.add_info, required: !0 })
    ] }),
    /* @__PURE__ */ jsxs49("div", { className: "flex max-sm:flex-col justify-end gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsx62(Cta_default, { element: "button", type: "reset", onClick: clearFilePreview, className: "px-8 py-2 rounded-lg font-medium border-secondary hover:border-slate-400 text-primary", variant: "outline", children: "Reset Form" }),
      /* @__PURE__ */ jsx62(Cta_default, { element: "button", type: "submit", name: "contestId", value: contest._id, className: "px-8 py-2 rounded-lg font-medium", children: "Edit Contest" })
    ] })
  ] });
}

// app/routes/admin.contests.$contestId._index.tsx
import { jsx as jsx63, jsxs as jsxs50 } from "react/jsx-runtime";
async function loader14({ params, request }) {
  let { data: tournaments = [] } = await tournamentRepo.getTournaments(), { data: contest, error } = await contestRepo.getContestById(params.contestId);
  if (error) {
    console.log(error);
    let { headers } = await setToast({ request, toast: `error::The contest was not found::${Date.now()}` });
    return redirect13("/admin/contests", { headers });
  }
  return json15({ tournaments, contest });
}
async function action9({ request }) {
  let formData = await request.formData(), intent = formData.get("intent"), cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect13("/login");
  if (intent) {
    let { error: error2 } = await contestRepo.deleteStage({ stageId: formData.get("intent") }, cookieHeader);
    if (error2) {
      console.log(JSON.stringify(error2));
      let { headers: headers2 } = await setToast({ request, toast: `error::${error2.detail}::${Date.now()}` });
      return json15({ error: error2 }, { headers: headers2 });
    }
    return json15({ data: "deleted" });
  }
  let payload = prepareContestPayload(formData), { data, error } = await contestRepo.updateContest({ contestId: formData.get("contestId"), dto: payload }, cookieHeader);
  if (data) {
    let { headers: headers2 } = await setToast({ request, toast: `success::The contest has been updated::${Date.now()}` });
    return redirect13("/admin/contests", { headers: headers2 });
  } else if (error) {
    console.log(JSON.stringify(error));
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail}::${Date.now()}` });
    return json15({ error }, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `error::Sorry, this contest no longer exists::${Date.now()}` });
  return redirect13("/admin/contests", { headers });
}
function EditContest() {
  let { tournaments, contest } = useLoaderData12(), navigate = useNavigate11();
  return /* @__PURE__ */ jsxs50("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs50("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsx63(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }),
      /* @__PURE__ */ jsx63("span", { className: "font-black text-primary", children: "Edit Contest" })
    ] }),
    /* @__PURE__ */ jsx63(EditContestForm, { contest, tournaments })
  ] });
}

// app/routes/admin.transactions.tally-votes.tsx
var admin_transactions_tally_votes_exports = {};
__export(admin_transactions_tally_votes_exports, {
  AddTallyDialog: () => AddTallyDialog,
  TallyTransactionsTable: () => TallyTransactionsTable,
  action: () => action10,
  default: () => TallyVotes,
  loader: () => loader15
});
import { json as json16, redirect as redirect14 } from "@remix-run/node";
import { useLoaderData as useLoaderData13, useFetcher as useFetcher7, useActionData as useActionData5 } from "@remix-run/react";

// app/services/admin/admin.server.ts
var AdminRepository = class {
  async getPayments(cookies, query = null) {
    let url = ApiEndPoints.adminPayments;
    if (query) {
      let qs = new URLSearchParams(Object.entries(query).reduce((acc, [k, v]) => (v != null && (acc[k] = String(v)), acc), {})).toString();
      qs && (url = `${url}?${qs}`);
    }
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async createBankTransaction(cookies, dto) {
    let url = ApiEndPoints.createBankPayment, { data, error, authRequired } = await ApiCall.call({
      method: "POST",
      url,
      data: dto
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async getAllRoles(cookies) {
    let url = ApiEndPoints.getAllRoles, { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async createAdminUser(cookies, dto) {
    let url = ApiEndPoints.createAdminUser, { data, error, authRequired } = await ApiCall.call({
      method: "POST",
      url,
      data: dto
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async updateAdminUser(cookies, userId, dto) {
    let url = ApiEndPoints.updateUser(userId), { data, error, authRequired } = await ApiCall.call({
      method: "PATCH",
      url,
      data: dto
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async getAdminUser(cookies, userId) {
    let url = ApiEndPoints.getUserById(userId), { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
  async queryUsers(cookies, query = null) {
    let url = ApiEndPoints.pagedUsers;
    if (query) {
      let qs = new URLSearchParams(Object.entries(query).reduce((acc, [k, v]) => (v != null && (acc[k] = String(v)), acc), {})).toString();
      qs && (url = `${url}?${qs}`);
    }
    let { data, error, authRequired } = await ApiCall.call({
      method: "GET",
      url
    }, cookies);
    return data ? { data } : { error, authRequired };
  }
}, adminRepo = new AdminRepository();

// app/routes/admin.transactions.tally-votes.tsx
import { useEffect as useEffect16, useState as useState24 } from "react";

// app/components/admin/transactions/VerifyTransactionDialog.tsx
import { jsx as jsx64, jsxs as jsxs51 } from "react/jsx-runtime";
function VerifyTransactionDialog({ disabled }) {
  return /* @__PURE__ */ jsxs51(Dialog, { children: [
    /* @__PURE__ */ jsx64(
      DialogTrigger,
      {
        disabled,
        title: "Verify transaction",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-green-500 bg-green-50 text-green-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsx64(Svg, { src: icons.checkIcon, className: "w-3" })
      }
    ),
    /* @__PURE__ */ jsxs51(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ jsxs51(DialogHeader, { children: [
        /* @__PURE__ */ jsx64(DialogTitle, { children: "Verify this transaction" }),
        /* @__PURE__ */ jsx64(DialogDescription, { children: "This transaction will be marked as verified. Are you sure you want to proceed?" })
      ] }),
      /* @__PURE__ */ jsx64(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsx64(Cta_default, { element: "button", type: "submit", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }) })
    ] })
  ] });
}

// app/components/admin/transactions/RevokeTransactionDialog.tsx
import { jsx as jsx65, jsxs as jsxs52 } from "react/jsx-runtime";
function RevokeTransactionDialog({ disabled }) {
  return /* @__PURE__ */ jsxs52(Dialog, { children: [
    /* @__PURE__ */ jsx65(
      DialogTrigger,
      {
        disabled,
        title: "Revoke transaction",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsx65(Svg, { src: icons.doubleArrowDiagonalIcon, className: "w-3" })
      }
    ),
    /* @__PURE__ */ jsxs52(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ jsxs52(DialogHeader, { children: [
        /* @__PURE__ */ jsx65(DialogTitle, { children: "Revoke this transaction" }),
        /* @__PURE__ */ jsx65(DialogDescription, { children: "This transactoin will be marked as revoked. Are you sure you want to proceed?" })
      ] }),
      /* @__PURE__ */ jsx65(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsx65(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }) })
    ] })
  ] });
}

// app/components/admin/transactions/DeleteTransactionDialog.tsx
import { jsx as jsx66, jsxs as jsxs53 } from "react/jsx-runtime";
function DeleteTransactionDialog({ disabled }) {
  return /* @__PURE__ */ jsxs53(Dialog, { children: [
    /* @__PURE__ */ jsx66(
      DialogTrigger,
      {
        disabled,
        title: "Delete transaction",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsx66(Svg, { src: icons.trashIcon, className: "w-3" })
      }
    ),
    /* @__PURE__ */ jsxs53(DialogContent, { className: "bg-secondary", children: [
      /* @__PURE__ */ jsxs53(DialogHeader, { children: [
        /* @__PURE__ */ jsx66(DialogTitle, { children: "Delete this transaction" }),
        /* @__PURE__ */ jsx66(DialogDescription, { children: "This transactoin will be marked as deleted. Are you sure you want to proceed?" })
      ] }),
      /* @__PURE__ */ jsx66(DialogFooter, { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsx66(Cta_default, { element: "button", type: "submit", kind: "danger", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }) })
    ] })
  ] });
}

// app/components/admin/transactions/TallyTableActions.tsx
import { jsx as jsx67, jsxs as jsxs54 } from "react/jsx-runtime";
function TallyTableActions({ table }) {
  let rowsSelected = table.getFilteredSelectedRowModel().rows.length >= 1, canVerify = rowsSelected && table.getSelectedRowModel().rows.every(({ original }) => original.payment_status !== "verified"), canRevoke = rowsSelected && table.getSelectedRowModel().rows.every(({ original }) => original.payment_status !== "revoked");
  return /* @__PURE__ */ jsxs54("div", { className: "flex gap-4 items-center px-3 mb-3", children: [
    /* @__PURE__ */ jsx67(VerifyTransactionDialog, { disabled: !canVerify }),
    /* @__PURE__ */ jsx67(RevokeTransactionDialog, { disabled: !canRevoke }),
    /* @__PURE__ */ jsx67(DeleteTransactionDialog, { disabled: !rowsSelected })
  ] });
}

// app/routes/admin.transactions.tally-votes.tsx
import { Fragment as Fragment9, jsx as jsx68, jsxs as jsxs55 } from "react/jsx-runtime";
async function loader15({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect14("/login");
  let url = new URL(request.url), query = {};
  for (let [k, v] of url.searchParams.entries())
    query[k] = v;
  let [res, ongoingContests] = await Promise.all([adminRepo.getPayments(cookieHeader, query), contestRepo.query_contest({ status: "ongoing" }, cookieHeader)]);
  return res.authRequired ? redirect14("/login") : { data: res.data, error: res.error, authRequired: res.authRequired, ongoingContests: ongoingContests.data ?? [] };
}
async function action10({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "", formData = await request.formData();
  if (!formData.get("contest_id"))
    return json16({ error: { detail: "Please use a valid contest" }, data: null });
  let payload = {
    email: formData.get("email") ?? "",
    phone_number: formData.get("phone_number") ?? "",
    name: formData.get("name") ?? "",
    contest_id: formData.get("contest_id") ?? "",
    contestant_code: formData.get("contestant_code") ?? "",
    amount: Number(formData.get("amount") ?? 0),
    currency: formData.get("currency") ?? "NGN",
    gateway_status: formData.get("gateway_status"),
    bank_ref: formData.get("bank_ref") ?? `BANKTXN_${Date.now()}`
  }, { data, error, authRequired } = await adminRepo.createBankTransaction(cookieHeader, payload);
  return json16({ error, data, authRequired });
}
function AddTallyDialog({ ongoingContests }) {
  let fetcher = useFetcher7(), actionData = useActionData5(), [open, setOpen] = useState24(!1), isSubmitting = fetcher.state === "submitting", responseError = fetcher.data?.error ?? actionData?.error, errorMessage = responseError?.detail?.toString?.() ?? responseError?.toString?.() ?? null;
  return useEffect16(() => {
    let responseData = fetcher.data?.data ?? actionData?.data;
    (fetcher.data?.error ?? actionData?.error) || responseData && (toast({ variant: "default", title: "Tally created", description: "Successfully created tally transaction" }), setOpen(!1), setTimeout(() => window.location.reload(), 300));
  }, [fetcher.data, actionData]), /* @__PURE__ */ jsxs55(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxs55(
      DialogTrigger,
      {
        title: "add tally transaction",
        className: cn("flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-accent text-secondary"),
        children: [
          /* @__PURE__ */ jsx68(Svg, { src: icons.addIcon, width: ".9em" }),
          "Add Payment"
        ]
      }
    ),
    /* @__PURE__ */ jsx68(DialogContent, { className: "bg-secondary", children: /* @__PURE__ */ jsxs55(DialogHeader, { children: [
      /* @__PURE__ */ jsx68(DialogTitle, { children: "Add Tally Transaction" }),
      /* @__PURE__ */ jsxs55(DialogDescription, { children: [
        errorMessage && /* @__PURE__ */ jsx68("div", { className: "mb-3 p-3 rounded-md bg-red-50 text-red-700 text-sm", children: errorMessage }),
        /* @__PURE__ */ jsxs55(fetcher.Form, { method: "POST", className: "text-primary text-xs flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs55("fieldset", { className: "py-4 grid sm:grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsx68(FormControl, { as: "input", id: "email", name: "email", labelText: "Sender Email (Optional)" }),
            /* @__PURE__ */ jsx68(FormControl, { as: "input", id: "phone_number", name: "phone_number", labelText: "Sender Phone (Optional)" }),
            /* @__PURE__ */ jsx68(FormControl, { as: "input", id: "name", name: "name", labelText: "Sender Name" }),
            /* @__PURE__ */ jsxs55(Select2, { label: "Contest", name: "contest_id", children: [
              /* @__PURE__ */ jsx68("option", { value: "", children: "Select a contest" }),
              (ongoingContests ?? []).map(
                (c) => /* @__PURE__ */ jsx68("option", { value: c._id, children: c.name })
              )
            ] }),
            /* @__PURE__ */ jsxs55(Select2, { label: "Bank Status", name: "gateway_status", children: [
              /* @__PURE__ */ jsx68("option", { value: "successful", children: "Successful" }),
              /* @__PURE__ */ jsx68("option", { value: "pending", children: "Pending" }),
              /* @__PURE__ */ jsx68("option", { value: "failed", children: "Failed" })
            ] }),
            /* @__PURE__ */ jsx68(FormControl, { as: "input", id: "contestant_code", name: "contestant_code", labelText: "Contestant Code" }),
            /* @__PURE__ */ jsx68(FormControl, { as: "input", type: "number", id: "amount", name: "amount", labelText: "Amount (NGN)", min: 0, defaultValue: 0 }),
            /* @__PURE__ */ jsx68(FormControl, { as: "input", type: "number", id: "fee", name: "fee", labelText: "Fee (NGN)", min: 0, defaultValue: 0 }),
            /* @__PURE__ */ jsx68(FormControl, { as: "input", id: "bank_ref", name: "bank_ref", labelText: "Transaction Reference" })
          ] }),
          /* @__PURE__ */ jsx68("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsx68(Cta_default, { element: "button", type: "submit", disabled: isSubmitting, className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", "aria-busy": isSubmitting, children: isSubmitting ? "Submitting..." : "Submit" }) })
        ] })
      ] })
    ] }) })
  ] });
}
function TallyVotes() {
  let { data, error, authRequired, ongoingContests } = useLoaderData13(), transactions = data?.items ?? [], lastKey = data?.last_key_id, pageSize = data?.items_per_page ?? 10, firstKey = data?.first_key_id;
  return /* @__PURE__ */ jsxs55("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs55("section", { className: "flex max-sm:flex-col gap-10 justify-between sm:items-center mb-6 sm:mb-16", children: [
      /* @__PURE__ */ jsx68("h1", { className: "text-2xl font-black text-primary", children: "Tally Votes" }),
      /* @__PURE__ */ jsx68(AddTallyDialog, { ongoingContests })
    ] }),
    /* @__PURE__ */ jsx68("section", { className: "my-12", children: /* @__PURE__ */ jsx68(TallyTransactionsTable, { data: transactions, lastKey: lastKey ?? "", pageSize, firstKey: firstKey ?? "" }) })
  ] });
}
var numberFormatterOptions2 = { style: "currency", currency: "NGN" }, dateOptions2 = {
  year: "numeric",
  month: "short",
  day: "numeric"
}, timeOptions2 = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}, columns3 = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ jsx68("div", { className: "flex place-content-center", children: /* @__PURE__ */ jsx68(
      Checkbox,
      {
        className: "h-4 w-4",
        "aria-label": "Select all",
        checked: table.getIsAllPageRowsSelected(),
        onCheckedChange: (value) => {
          table.toggleAllPageRowsSelected(!value);
        }
      }
    ) }),
    cell: ({ row }) => /* @__PURE__ */ jsx68("div", { className: "flex place-content-center", children: /* @__PURE__ */ jsx68(
      Checkbox,
      {
        className: "h-4 w-4",
        "aria-label": "Select row",
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!value)
      }
    ) })
  },
  {
    accessorKey: "reference",
    header: ({ column }) => /* @__PURE__ */ jsx68(DataTableColumnHeader, { column, title: "trx ref" })
  },
  {
    accessorKey: "customer",
    header: ({ column }) => /* @__PURE__ */ jsx68(DataTableColumnHeader, { column, title: "sender" }),
    cell: ({ getValue }) => getValue().email
  },
  {
    accessorKey: "contestant_code",
    header: ({ column }) => /* @__PURE__ */ jsx68(DataTableColumnHeader, { column, title: "code" })
  },
  {
    accessorKey: "number_of_votes",
    header: ({ column }) => /* @__PURE__ */ jsx68(DataTableColumnHeader, { column, title: "votes" })
  },
  {
    accessorKey: "amount",
    header: ({ column }) => /* @__PURE__ */ jsx68(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "amount" }),
    cell: ({ getValue }) => numberFormatter(getValue(), numberFormatterOptions2)
  },
  {
    accessorKey: "app_fee",
    header: ({ column }) => /* @__PURE__ */ jsx68(DataTableColumnHeader, { className: "whitespace-nowr", column, title: "fee" }),
    cell: ({ getValue }) => numberFormatter(getValue(), numberFormatterOptions2)
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => /* @__PURE__ */ jsx68(DataTableColumnHeader, { column, title: "date" }),
    cell: ({ getValue }) => /* @__PURE__ */ jsxs55("span", { children: [
      /* @__PURE__ */ jsx68("span", { className: "block", children: formatDate(new Date(getValue()), dateOptions2) }),
      /* @__PURE__ */ jsx68("span", { className: "block", children: formatDate(new Date(getValue()), timeOptions2) })
    ] })
  },
  {
    accessorKey: "payment_status",
    header: ({ column }) => /* @__PURE__ */ jsx68(DataTableColumnHeader, { column, title: "status" }),
    cell: ({ getValue }) => {
      let status = getValue();
      return /* @__PURE__ */ jsx68(StatusTag, { status, color: status === "PENDING" ? "yellow" : status === "SUCCESS" ? "green" : status === "REFUNDED" ? "red" : "gray" });
    }
  }
];
function TallyTransactionsTable({ data, lastKey, pageSize, firstKey }) {
  return /* @__PURE__ */ jsxs55(Fragment9, { children: [
    /* @__PURE__ */ jsx68("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsx68(DataTable, { data, columns: columns3, className: "text-xs", TableActions: TallyTableActions }) }),
    /* @__PURE__ */ jsx68(Pagination, { lastKey, pageSize, firstKey })
  ] });
}

// app/routes/user.contestant.$contestantId.tsx
var user_contestant_contestantId_exports = {};
__export(user_contestant_contestantId_exports, {
  action: () => action11,
  default: () => RegistrationForm2,
  loader: () => loader16,
  useRegistrationFormController: () => useRegistrationFormController
});
import { json as json17, redirect as redirect15 } from "@remix-run/node";
import { Form as Form12, useActionData as useActionData6, useLoaderData as useLoaderData14 } from "@remix-run/react";
import { useEffect as useEffect17, useState as useState25 } from "react";

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
    let { error, authRequired, data } = await this.contestantServer.updateUserContestant(payload, cookies);
    return { error, authRequired, data };
  }
}, userServer = new UserServer(contestantRepo);

// app/routes/user.contestant.$contestantId.tsx
import { jsx as jsx69, jsxs as jsxs56 } from "react/jsx-runtime";
async function loader16({ request, params }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  console.log({ cookieHeader }), cookieHeader || redirect15("/login");
  let contestantId = params.contestantId ?? "", { error, data, authRequired } = await userServer.getContestantDetails(contestantId, cookieHeader);
  return authRequired && redirect15("/login"), { error, data, authRequired };
}
async function action11({ request }) {
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
  return authRequired && redirect15("/login"), json17({ error, authRequired, data });
}
function useRegistrationFormController() {
  let { error, data } = useLoaderData14(), actionData = useActionData6();
  console.log({ data });
  let [contest, setContest] = useState25(), [stage, setStage] = useState25(), [contestant, setContestant] = useState25();
  return error && toast({
    variant: "destructive",
    title: "An error occured",
    description: error?.detail.toString() ?? "Error occured"
  }), useEffect17(() => {
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
  }, [actionData]), useEffect17(() => {
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
  return contest ? /* @__PURE__ */ jsxs56("section", { children: [
    /* @__PURE__ */ jsx69("header", { className: "wrapper my-16 grid md:grid-cols-2 justify-between gap-6 md:gap-8", children: /* @__PURE__ */ jsx69("div", { className: "flex flex-col justify-around", children: /* @__PURE__ */ jsxs56("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx69("h1", { className: "text-accent text-2xl lg:text-4xl font-satoshi-black max-w-3xl mb-3", children: contest.name }),
      /* @__PURE__ */ jsx69("p", { className: "font-satoshi-medium", children: contest.desc })
    ] }) }) }),
    /* @__PURE__ */ jsx69("section", { className: "sm:wrapper my-16", children: /* @__PURE__ */ jsxs56("div", { className: "flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8", children: [
      /* @__PURE__ */ jsx69(ContestGuidelines, { contest }),
      /* @__PURE__ */ jsxs56(Form12, { method: "POST", encType: "multipart/form-data", className: "bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6", children: [
        /* @__PURE__ */ jsxs56("p", { className: "text-2xl font-satoshi-bold", children: [
          "Welcome, ",
          contestant?.contestant_biodata.first_name,
          ". You can manage your profile for ",
          contest.name,
          " here"
        ] }),
        /* @__PURE__ */ jsx69("img", { src: contestant?.image_url || no_image_default, alt: "kid smiling", className: "w-full rounded-3xl h-[350px] object-cover" }),
        /* @__PURE__ */ jsxs56("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsx69(
            FormControl,
            {
              as: "input",
              labelText: "First Name",
              id: "first_name",
              name: "first_name",
              defaultValue: contestant?.contestant_biodata?.first_name,
              placeholder: "Enter your first name",
              required: !0
            }
          ),
          /* @__PURE__ */ jsx69(
            FormControl,
            {
              as: "input",
              labelText: "Last Name",
              id: "last_name",
              name: "last_name",
              defaultValue: contestant?.contestant_biodata?.last_name,
              placeholder: "Enter your last name",
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ jsxs56("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsx69(
            FormControl,
            {
              as: "input",
              labelText: "Email Address",
              id: "email",
              name: "email",
              defaultValue: contestant?.contestant_biodata?.email,
              placeholder: "Enter your email address",
              required: !0
            }
          ),
          /* @__PURE__ */ jsx69(
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
            }
          )
        ] }),
        /* @__PURE__ */ jsxs56("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxs56("label", { htmlFor: "gender", className: "font-bold flex flex-col", children: [
            "Gender",
            /* @__PURE__ */ jsxs56(Select, { name: "sex", required: !0, defaultValue: contestant?.contestant_biodata?.sex, children: [
              /* @__PURE__ */ jsx69(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx69(SelectValue, { placeholder: "Gender" }) }),
              /* @__PURE__ */ jsxs56(SelectContent, { children: [
                /* @__PURE__ */ jsx69(SelectItem, { value: "MALE", className: "focus:bg-blue-700/25", children: "Male" }),
                /* @__PURE__ */ jsx69(SelectItem, { value: "FEMALE", className: "focus:bg-blue-700/25", children: "Female" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs56("label", { htmlFor: "state_of_residence", className: "font-bold flex flex-col", children: [
            "State of Residence",
            /* @__PURE__ */ jsxs56(Select, { name: "state_of_residence", required: !0, defaultValue: contestant?.contestant_biodata?.state_of_residence, children: [
              /* @__PURE__ */ jsx69(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx69(SelectValue, { placeholder: "Select a state" }) }),
              /* @__PURE__ */ jsx69(SelectContent, { children: Object.entries(nigerianStates).map(([key, val]) => /* @__PURE__ */ jsx69(SelectItem, { value: key, className: "focus:bg-blue-700/25", children: val }, key)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs56("div", { className: "grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsx69(
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
            }
          ),
          /* @__PURE__ */ jsxs56("label", { htmlFor: "category", className: "font-bold flex flex-col", children: [
            "Category",
            /* @__PURE__ */ jsxs56(Select, { name: "category", required: !!contest.categories.length, defaultValue: contestant?.category, children: [
              /* @__PURE__ */ jsx69(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ jsx69(SelectValue, { placeholder: "Select a category" }) }),
              /* @__PURE__ */ jsx69(SelectContent, { children: contest.categories.map((category) => /* @__PURE__ */ jsx69(SelectItem, { value: category, className: "focus:bg-blue-700/25", children: category }, category)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx69(DragnDrop, { labelText: "Upload Image", name: "media", multiple: !0, required: !1 }),
        /* @__PURE__ */ jsx69("input", { type: "hidden", name: "contestId", value: contest._id }),
        /* @__PURE__ */ jsx69("input", { type: "hidden", name: "contestantId", value: contestant?._id }),
        /* @__PURE__ */ jsx69(Button, { element: "button", type: "submit", name: "intent", value: "register", className: "md:self-end", children: "Update contestant details" })
      ] })
    ] }) })
  ] }) : /* @__PURE__ */ jsx69("div", { children: " Not found" });
}

// app/routes/admin.tournaments.$ID._index.tsx
var admin_tournaments_ID_index_exports = {};
__export(admin_tournaments_ID_index_exports, {
  default: () => Tournament,
  loader: () => loader17
});
import { json as json18, redirect as redirect16 } from "@remix-run/node";
import { Link as Link12, useLoaderData as useLoaderData15, useNavigate as useNavigate12 } from "@remix-run/react";

// app/components/admin/contest/ContestTableActions.tsx
import { useFetcher as useFetcher10 } from "@remix-run/react";

// app/components/admin/contest/DeleteContestDialog.tsx
import { useFetcher as useFetcher8 } from "@remix-run/react";
import { jsx as jsx70, jsxs as jsxs57 } from "react/jsx-runtime";
function DeleteContestDialog({ contest, disabled }) {
  let fetcher = useFetcher8();
  return /* @__PURE__ */ jsxs57(Dialog, { children: [
    /* @__PURE__ */ jsx70(
      DialogTrigger,
      {
        disabled,
        title: "Delete contest",
        className: cn("flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500", {
          "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
        }),
        children: /* @__PURE__ */ jsx70(Svg, { src: icons.trashIcon, className: "w-3" })
      }
    ),
    /* @__PURE__ */ jsxs57(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxs57(DialogHeader, { children: [
        /* @__PURE__ */ jsxs57(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsx70("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsx70(Svg, { src: icons.questionIcon }) }),
          /* @__PURE__ */ jsxs57("p", { children: [
            /* @__PURE__ */ jsx70("span", { className: "block", children: "Delete contest" }),
            /* @__PURE__ */ jsx70("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the deletion of this contest" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs57(DialogDescription, { className: "border-y p-4", children: [
          /* @__PURE__ */ jsxs57("span", { className: "text-primary mb-2 block", children: [
            "Are you sure you want to delete ",
            contest.name,
            " contest?"
          ] }),
          /* @__PURE__ */ jsx70("span", { className: "text-admin-pry", children: "This action is irreversible and will permanently delete this contest." })
        ] })
      ] }),
      /* @__PURE__ */ jsx70(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ jsxs57(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsx70("input", { type: "hidden", name: "contestId", value: contest._id }),
        /* @__PURE__ */ jsx70(DialogClose, { type: "submit", name: "intent", value: "delete", className: "bg-red-500 px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" })
      ] }) })
    ] })
  ] });
}

// app/components/admin/contest/MigrateStageDialog.tsx
import { useFetcher as useFetcher9 } from "@remix-run/react";
import { jsx as jsx71, jsxs as jsxs58 } from "react/jsx-runtime";
function MigrateStageDialog({ contest, disabled }) {
  let fetcher = useFetcher9(), stages = contest.stages.toSorted((a, b) => a.stage - b.stage).reduce((res, stage, idx, arr) => (stage.active && !res[0] && (res[0] = stage, res[1] = arr.at(idx + 1) ?? null), res), [null, null]), activeStageIdx = contest.stages.findIndex((v) => v.active), activeStageNotTheLastStage = activeStageIdx !== -1 && activeStageIdx < contest.stages.length - 1, cannotMigrate = disabled || !stages.at(0) || !stages.at(1) || !activeStageNotTheLastStage;
  return /* @__PURE__ */ jsxs58(Dialog, { children: [
    /* @__PURE__ */ jsx71(DialogTrigger, { asChild: !0, children: /* @__PURE__ */ jsx71(RoundCta_default, { disabled: cannotMigrate, icon: icons.doubleArrowRightIcon, className: "border-indigo-700 bg-indigo-100 text-indigo-700", title: "Migrate stage" }) }),
    /* @__PURE__ */ jsxs58(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxs58(DialogHeader, { children: [
        /* @__PURE__ */ jsxs58(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsx71("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsx71(Svg, { src: icons.questionIcon }) }),
          /* @__PURE__ */ jsxs58("p", { children: [
            /* @__PURE__ */ jsx71("span", { className: "block", children: "Migrate stage" }),
            /* @__PURE__ */ jsx71("span", { className: "font-normal text-base text-admin-pry", children: "Confirm migration to the next stage" })
          ] })
        ] }),
        /* @__PURE__ */ jsx71(DialogDescription, { className: "border-y p-4", children: /* @__PURE__ */ jsxs58("span", { className: "text-primary block", children: [
          "This will migrate all safe contestants from stage ",
          stages[0]?.stage,
          " to stage ",
          stages[1]?.stage,
          ". Proceed?"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx71(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ jsxs58(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsx71("input", { type: "hidden", name: "from", value: stages[0]?._id }),
        /* @__PURE__ */ jsx71("input", { type: "hidden", name: "to", value: stages[1]?._id }),
        /* @__PURE__ */ jsx71(DialogClose, { type: "submit", name: "intent", value: "migrate", className: "bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" })
      ] }) })
    ] })
  ] });
}

// app/components/admin/contest/ContestTableActions.tsx
import { jsx as jsx72, jsxs as jsxs59 } from "react/jsx-runtime";
function ContestTableActions({ rowData }) {
  let activeStageId = rowData.stages.find((stage) => stage.active || stage.status === "ongoing")?._id ?? rowData.stages.toSorted((prev, next) => next.stage - prev.stage).find((stage) => stage.status === "completed")?._id ?? rowData.stages.toSorted((prev, next) => prev.stage - next.stage).at(0)?._id, linkToContestants = activeStageId ? `/admin/contests/${rowData.id}/${activeStageId}` : "", fetcher = useFetcher10();
  return /* @__PURE__ */ jsxs59("div", { className: "flex gap-4 items-center", children: [
    /* @__PURE__ */ jsx72(RoundCta_default, { icon: icons.contestantsIcon, element: "link", to: linkToContestants, "aria-disabled": !linkToContestants, className: "border-green-500 bg-green-50 text-green-500", title: "View current stage" }),
    /* @__PURE__ */ jsx72(RoundCta_default, { icon: icons.editIcon, element: "link", to: `/admin/contests/${rowData.id}`, className: "border-[#262626] bg-[#F7F7F8] text-primary", title: "Edit contest" }),
    /* @__PURE__ */ jsxs59(fetcher.Form, { method: "post", children: [
      /* @__PURE__ */ jsx72("input", { type: "hidden", name: "contestId", value: rowData._id }),
      /* @__PURE__ */ jsx72(RoundCta_default, { icon: icons.viewIcon, name: "intent", value: "toggle_registration", className: "border-yellow-700 bg-yellow-100 text-yellow-700", "aria-disabled": fetcher.state != "idle", title: "Open/Close registration" })
    ] }),
    /* @__PURE__ */ jsx72(MigrateStageDialog, { contest: rowData }),
    /* @__PURE__ */ jsx72(DeleteContestDialog, { contest: rowData })
  ] });
}

// app/components/admin/contest/EditStageForm.tsx
import { useState as useState26 } from "react";
import { Form as Form13, Link as Link11 } from "@remix-run/react";
import cn7 from "classnames";

// app/components/admin/contest/GradeInputs.tsx
import cn6 from "classnames";
import { jsx as jsx73, jsxs as jsxs60 } from "react/jsx-runtime";
function GradeInputs({ grade }) {
  let [grd, [min, max]] = grade;
  return /* @__PURE__ */ jsxs60("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsxs60("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx73("span", { className: "block font-bold", children: "Grade" }),
      /* @__PURE__ */ jsx73("span", { className: cn6(`h-full w-[40px] px-2 py-1 flex items-center justify-center bg-grade-${grd} rounded-md text-white font-black`), children: grd })
    ] }),
    /* @__PURE__ */ jsx73(FormControl, { as: "input", id: `min_${grd}`, name: `min_${grd}`, labelText: "Min. Score", type: "number", min: 0, defaultValue: min }),
    /* @__PURE__ */ jsx73(FormControl, { as: "input", id: `max_${grd}`, name: `max_${grd}`, labelText: "Max. Score", type: "number", min: 0, defaultValue: max })
  ] });
}

// app/components/admin/contest/EditStageForm.tsx
import { Fragment as Fragment10, jsx as jsx74, jsxs as jsxs61 } from "react/jsx-runtime";
function Stages({ row }) {
  let [selectedStage, setSelectedStage] = useState26(row.original.stages[0] ?? null);
  return /* @__PURE__ */ jsxs61("div", { className: "p-6", children: [
    /* @__PURE__ */ jsx74("div", { className: "p-3 flex gap-2 border border-disabled bg-[#F6F8FA] rounded-md", children: row.original.stages.length ? row.original.stages.map((stage) => /* @__PURE__ */ jsxs61(
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
      stage._id
    )) : /* @__PURE__ */ jsx74("span", { children: "There are no stages." }) }),
    selectedStage ? /* @__PURE__ */ jsxs61(Fragment10, { children: [
      /* @__PURE__ */ jsx74(EditStageForm, { stage: selectedStage, contestId: row.original.id, closeForm: row.getToggleExpandedHandler() }, selectedStage._id),
      /* @__PURE__ */ jsx74("hr", {}),
      /* @__PURE__ */ jsx74(ToggleStageBonus, { stage: selectedStage })
    ] }) : null
  ] });
}
function EditStageForm({ stage, contestId, closeForm }) {
  return /* @__PURE__ */ jsxs61(Form13, { method: "POST", className: "text-primary text-xs flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxs61("fieldset", { className: "py-4 grid grid-cols-4 gap-3 border-b", children: [
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "start_date", name: "start_date", labelText: "Stage Start Date", type: "datetime-local", defaultValue: parseDateTimeForInput(stage.start_date) }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "end_date", name: "end_date", labelText: "Stage End Date", type: "datetime-local", defaultValue: parseDateTimeForInput(stage.end_date) }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "weight", name: "weight", labelText: "Stage Weight (%)", type: "number", min: 0, defaultValue: stage.weight }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "success_count", name: "success_count", labelText: "Success Count", type: "number", min: 0, defaultValue: stage.success_count })
    ] }),
    /* @__PURE__ */ jsxs61("fieldset", { className: "pt-2 pb-4 grid grid-cols-4 gap-3 border-b", children: [
      /* @__PURE__ */ jsxs61("legend", { className: "font-bold text-sm text-admin-pry w-max", children: [
        "Stage Rates ",
        /* @__PURE__ */ jsx74("span", { className: "font-normal", children: "(must sum up to 100%)" })
      ] }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "social_media_rate", name: "social_media_rate", labelText: "Social Media Rate (%)", type: "number", min: 0, defaultValue: stage.rates.social_media.amount }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "tally_rate", name: "tally_rate", labelText: "Tally Rate (%)", type: "number", min: 0, defaultValue: stage.rates.tally }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "givaah_rate", name: "givaah_rate", labelText: "Givaah Rate (%)", type: "number", min: 0, defaultValue: stage.rates.givaah }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "judge_rate", name: "judge_rate", labelText: "Judge Rate (%)", type: "number", min: 0, defaultValue: stage.rates.judge }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "social_media_bonus_rate", name: "social_media_bonus_rate", labelText: "Social Media Bonus Rate (%)", type: "number", min: 0, defaultValue: stage.rates.social_media_bonus }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "tally_bonus_rate", name: "tally_bonus_rate", labelText: "Tally Bonus Rate (%)", type: "number", min: 0, defaultValue: stage.rates.tally_bonus }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "givaah_bonus_rate", name: "givaah_bonus_rate", labelText: "Givaah Bonus Rate (%)", type: "number", min: 0, defaultValue: stage.rates.givaah_bonus }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "judge_bonus_rate", name: "judge_bonus_rate", labelText: "Judge Bonus Rate (%)", type: "number", min: 0, defaultValue: stage.rates.judge_bonus })
    ] }),
    /* @__PURE__ */ jsxs61("fieldset", { className: "pt-2 py-4 grid grid-cols-2 gap-3 border-b", children: [
      /* @__PURE__ */ jsx74("legend", { className: "font-bold text-sm text-admin-pry", children: "Grades" }),
      Object.entries(stage.grade).map((grade) => /* @__PURE__ */ jsx74(GradeInputs, { grade }, grade[0]))
    ] }),
    /* @__PURE__ */ jsxs61("div", { className: "flex justify-between items-center gap-6", children: [
      /* @__PURE__ */ jsx74(Link11, { to: `${contestId}/${stage._id}`, className: "text-accent hover:text-accent/80 font-semibold", children: "View contestants" }),
      /* @__PURE__ */ jsxs61("div", { className: "flex justify-end gap-6", children: [
        /* @__PURE__ */ jsx74(
          Cta_default,
          {
            element: "button",
            type: "button",
            variant: "outline",
            onClick: closeForm,
            className: "px-3 py-2 rounded-md font-bold min-w-[90px] border-secondary hover:border-slate-400 text-primary",
            children: "Close Form"
          }
        ),
        /* @__PURE__ */ jsx74(Cta_default, { element: "button", type: "submit", name: "intent", value: "update_stage", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Submit" })
      ] })
    ] }),
    /* @__PURE__ */ jsx74("input", { type: "hidden", name: "social_media_type", value: stage.rates.social_media.type }),
    /* @__PURE__ */ jsx74("input", { type: "hidden", name: "stageId", value: stage._id })
  ] });
}
function ToggleStageBonus({ stage }) {
  let [enabled, setEnabled] = useState26(stage.enable_bonus), [time] = useState26(stage.bonus_reset_time || "00:00:00"), [hours, minutes] = time.split(":");
  return /* @__PURE__ */ jsxs61(Form13, { method: "POST", className: "text-primary text-xs flex flex-col gap-4 py-4", children: [
    /* @__PURE__ */ jsxs61("fieldset", { className: "py-4 grid grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsx74("legend", { className: "font-bold text-sm text-admin-pry w-max col-span-4", children: "Stage Bonus" }),
      /* @__PURE__ */ jsxs61("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx74("label", { htmlFor: "enable_bonus", className: "font-medium", children: "Enable Bonus" }),
        /* @__PURE__ */ jsx74(
          "input",
          {
            type: "checkbox",
            id: "enable",
            name: "enable",
            checked: enabled,
            onChange: (e) => setEnabled(e.target.checked),
            className: "h-5 w-5 rounded-md",
            value: "true"
          }
        )
      ] }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "hours", name: "hours", labelText: "Reset Time (Hours)", type: "number", min: 0, max: 23, defaultValue: hours }),
      /* @__PURE__ */ jsx74(FormControl, { as: "input", id: "minutes", name: "minutes", labelText: "Reset Time (Minutes)", type: "number", min: 0, max: 59, defaultValue: minutes })
    ] }),
    /* @__PURE__ */ jsx74("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsx74(Cta_default, { element: "button", type: "submit", name: "intent", value: "toggle_stage_bonus", className: "px-3 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Enable/Disable Bonus" }) }),
    /* @__PURE__ */ jsx74("input", { type: "hidden", name: "stage_id", value: stage._id })
  ] });
}

// app/components/admin/contest/ContestTable.tsx
import { Fragment as Fragment11, jsx as jsx75, jsxs as jsxs62 } from "react/jsx-runtime";
var columns4 = [
  {
    id: "expander",
    header: () => null,
    cell: ({ row }) => row.getCanExpand() ? /* @__PURE__ */ jsx75("button", { title: "expand row", onClick: row.getToggleExpandedHandler(), children: /* @__PURE__ */ jsx75(Svg, { src: icons.arrowDownIcon, className: row.getIsExpanded() ? "rotate-180" : "" }) }) : null
  },
  {
    accessorKey: "id",
    header: ({ column }) => /* @__PURE__ */ jsx75(DataTableColumnHeader, { column, title: "id" }),
    cell: ({ row }) => /* @__PURE__ */ jsx75("span", { className: "uppercase", children: row.getValue("id") })
  },
  {
    accessorKey: "name",
    header: ({ column }) => /* @__PURE__ */ jsx75(DataTableColumnHeader, { column, title: "contest" }),
    cell: ({ row }) => /* @__PURE__ */ jsx75("span", { className: "uppercase line-clamp-1", children: row.getValue("name") })
  },
  {
    accessorKey: "timeline",
    header: ({ column }) => /* @__PURE__ */ jsx75(DataTableColumnHeader, { column, title: "timeline" }),
    cell: ({ row }) => /* @__PURE__ */ jsxs62("p", { children: [
      /* @__PURE__ */ jsx75("span", { className: "block whitespace-nowrap", children: row.original.start_date.split(".")[0].replace("T", ", ") }),
      /* @__PURE__ */ jsx75("span", { className: "block whitespace-nowrap", children: row.original.end_date.split(".")[0].replace("T", ", ") })
    ] })
  },
  {
    accessorKey: "status",
    header: ({ column }) => /* @__PURE__ */ jsx75(DataTableColumnHeader, { column, title: "status" }),
    cell: ({ row }) => {
      let status = row.getValue("status").split("_").join(" ");
      return /* @__PURE__ */ jsx75(StatusTag, { status, color: status === "registering" ? "yellow" : status === "ongoing" ? "green" : status === "completed" ? "red" : "gray" });
    }
  },
  {
    id: "actions",
    header: "actions",
    cell: ({ row }) => /* @__PURE__ */ jsx75(ContestTableActions, { rowData: row.original })
  }
];
function ContestTable({ data, pagination }) {
  return /* @__PURE__ */ jsxs62(Fragment11, { children: [
    /* @__PURE__ */ jsx75("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsx75(
      DataTable,
      {
        data,
        columns: columns4,
        expandRows: !0,
        getRowCanExpand: () => !0,
        SubComponent: Stages,
        className: "max-xs:text-xs text-sm"
      }
    ) }),
    pagination ? /* @__PURE__ */ jsxs62("div", { className: "max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5", children: [
      /* @__PURE__ */ jsxs62("label", { className: "flex gap-2", children: [
        "Rows per page",
        /* @__PURE__ */ jsx75("input", { type: "number", name: "rows", id: "rows", className: "w-10 pl-2 rounded-md border", defaultValue: 10 })
      ] }),
      /* @__PURE__ */ jsx75(Pagination, {})
    ] }) : null
  ] });
}

// app/components/reusables/ToggleTip.tsx
import { useEffect as useEffect18, useRef as useRef7, useState as useState27 } from "react";
import { jsx as jsx76, jsxs as jsxs63 } from "react/jsx-runtime";
function Toggletip({ mainComponent, children, mainContainerClass = "", childContainerClass = "" }) {
  let [open, setOpen] = useState27(!1), toggletip = useRef7(null);
  function handleOutsideClick(e) {
    e.target !== toggletip.current && !toggletip.current?.contains(e.target) && setOpen(!1);
  }
  return useEffect18(() => (document.addEventListener("click", handleOutsideClick), () => document.removeEventListener("click", handleOutsideClick)), []), /* @__PURE__ */ jsxs63(
    "div",
    {
      ref: toggletip,
      onClick: () => {
        setOpen((prev) => !prev);
      },
      className: `relative cursor-pointer ${mainContainerClass}`,
      children: [
        mainComponent,
        /* @__PURE__ */ jsx76("div", { className: `absolute min-w-full rounded-2xl z-10 ${open ? "" : "hidden"} ${childContainerClass}`, children })
      ]
    }
  );
}

// app/routes/admin.tournaments.$ID._index.tsx
import { jsx as jsx77, jsxs as jsxs64 } from "react/jsx-runtime";
async function loader17({ params, request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect16("/login");
  let { data: tournament, error: tournamentError } = await tournamentRepo.getTournamentById(params.ID), { data: contests2, error: contestError } = await contestRepo.adminGetContestsInTournament(params.ID, cookieHeader);
  if (tournamentError || contestError) {
    let error = tournamentError?.detail ?? contestError?.detail ?? "An error occured while fetching the contests", { headers } = await setToast({ request, toast: `error::${error}::${Date.now()}` });
    return redirect16("/admin/tournaments", { headers });
  }
  return json18({ tournament, contests: contests2 });
}
function Tournament() {
  let { tournament, contests: contests2 } = useLoaderData15(), navigate = useNavigate12(), mainComponent = /* @__PURE__ */ jsx77(RoundCta_default, { icon: icons.optionsIcon, className: "border-disabled hover:border-primary" });
  return /* @__PURE__ */ jsxs64("main", { className: "w-full overflow-y-auto max-xs:p-3 p-6", children: [
    /* @__PURE__ */ jsx77("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: /* @__PURE__ */ jsx77(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }) }),
    /* @__PURE__ */ jsxs64("section", { className: "flex items-start gap-4 sm:gap-6 max-w-xl mx-auto max-xs:text-sm", children: [
      /* @__PURE__ */ jsx77("img", { src: tournament.image ?? "", alt: "tournament banner", className: "max-xs:w-20 w-24 sm:w-[120px] aspect-square object-cover rounded-lg" }),
      /* @__PURE__ */ jsxs64("div", { className: "flex flex-col gap-4 sm:gap-6 justify-between", children: [
        /* @__PURE__ */ jsxs64("div", { className: "", children: [
          /* @__PURE__ */ jsx77("h1", { className: "text-primary font-satoshi-black uppercase line-clamp-1", children: tournament.name }),
          /* @__PURE__ */ jsx77("p", { className: "font-medium text-xs line-clamp-2", children: tournament.description })
        ] }),
        /* @__PURE__ */ jsxs64("div", { className: "flex gap-4 sm:gap-6 items-center", children: [
          /* @__PURE__ */ jsxs64(
            Cta_default,
            {
              element: "link",
              to: `/admin/contests/add?tournament=${tournament.id}`,
              variant: "outline",
              className: "flex gap-2 items-center rounded-lg px-3 py-2 border-secondary text-primary font-medium hover:border-primary max-xs:text-xs",
              children: [
                /* @__PURE__ */ jsx77(Svg, { src: icons.addIcon, width: ".9em" }),
                "Add Contest"
              ]
            }
          ),
          /* @__PURE__ */ jsxs64(
            Toggletip,
            {
              mainComponent,
              childContainerClass: "top-[120%] max-sm:right-0 sm:left-0 bg-tertiary p-2 border border-disabled text-xs whitespace-nowrap",
              children: [
                /* @__PURE__ */ jsx77(
                  Link12,
                  {
                    to: "edit",
                    className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium",
                    children: "Edit Tournament"
                  }
                ),
                /* @__PURE__ */ jsx77(
                  "button",
                  {
                    className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium",
                    children: "Delete Tournament"
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx77("section", { className: "my-12", children: /* @__PURE__ */ jsx77(ContestTable, { data: contests2 }) })
  ] });
}

// app/routes/_public.marketplace._index.tsx
var public_marketplace_index_exports = {};
__export(public_marketplace_index_exports, {
  action: () => action12,
  default: () => MarketplaceHome,
  loader: () => loader18
});
import { json as json19 } from "@remix-run/node";
import { Form as Form14, Link as Link13, useFetcher as useFetcher11, useLoaderData as useLoaderData16, useNavigation as useNavigation5 } from "@remix-run/react";
import { ShoppingCart } from "lucide-react";
import { useEffect as useEffect19, useMemo as useMemo3, useState as useState28 } from "react";
import { jsx as jsx78, jsxs as jsxs65 } from "react/jsx-runtime";
function buildMarketplaceQuery(searchParams) {
  let query = {};
  for (let [key, value] of searchParams.entries())
    if (value) {
      if (key === "page_size") {
        query.page_size = Number(value);
        continue;
      }
      if (key === "direction") {
        query.direction = value === "previous" ? "previous" : "next";
        continue;
      }
      if (key === "last_key_id") {
        query.last_key_id = value;
        continue;
      }
      if (key === "first_key_id") {
        query.first_key_id = value;
        continue;
      }
      if (key === "wildcard") {
        query.wildcard = value;
        continue;
      }
      if (key === "location_wildcard") {
        query.location_wildcard = value;
        continue;
      }
      if (key === "business_id") {
        query.business_id = value;
        continue;
      }
      if (key === "category") {
        query.category = value;
        continue;
      }
      if (key === "status") {
        query.status = value;
        continue;
      }
      if (key === "sku") {
        query.sku = value;
        continue;
      }
      if (key === "name") {
        query.name = value;
        continue;
      }
      key === "description" && (query.description = value);
    }
  return query;
}
function emptyPaginatedProducts(pageSize = 20) {
  return {
    current_page: 1,
    total_pages: 0,
    total_items: 0,
    items_per_page: pageSize,
    items: [],
    last_key_id: null,
    first_key_id: null
  };
}
function parseCartItemPayload(formData) {
  let productId = String(formData.get("product_id") ?? "").trim(), quantity = Number(formData.get("quantity") ?? 0), productLocationIdRaw = String(formData.get("product_location_id") ?? "").trim();
  return {
    product_id: productId,
    quantity: Number.isFinite(quantity) ? quantity : 0,
    product_location_id: productLocationIdRaw || null
  };
}
function buildCartPayload(formData) {
  return {
    cart_items: [parseCartItemPayload(formData)]
  };
}
async function loader18({ request }) {
  let url = new URL(request.url), cookieHeader = request.headers.get("Cookie") ?? void 0;
  if (url.searchParams.get("intent") === "cart") {
    let cartRes = await partnerServer.getCart(cookieHeader);
    return cartRes.error ? json19({
      cart: null,
      cartError: typeof cartRes.error.detail == "string" ? cartRes.error.detail : "Unable to load cart"
    }) : json19({
      cart: cartRes.data ?? null
    });
  }
  let query = buildMarketplaceQuery(url.searchParams), productsRes = await partnerServer.getMarketplaceProducts(query);
  return productsRes.error ? json19({
    products: emptyPaginatedProducts(query.page_size ?? 20),
    query,
    productError: typeof productsRes.error.detail == "string" ? productsRes.error.detail : "Unable to load products"
  }) : json19({
    products: productsRes.data,
    query
  });
}
async function action12({ request }) {
  let formData = await request.formData();
  if (String(formData.get("intent") ?? "add-to-cart") !== "add-to-cart")
    return json19({ error: "Unsupported cart action" }, { status: 400 });
  let cookieHeader = request.headers.get("Cookie") ?? void 0, payload = buildCartPayload(formData), cartRes = await partnerServer.upsertCartItems(payload, cookieHeader);
  return cartRes.error ? json19(
    {
      error: typeof cartRes.error.detail == "string" ? cartRes.error.detail : "Unable to update cart"
    },
    { status: 400 }
  ) : json19({
    cart: cartRes.data
  });
}
function formatPrice(currency, price) {
  return `${currency} ${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(price)}`;
}
function getProductLocationId(product) {
  return product.product_locations?.find((location) => location.is_primary)?.str_id ?? product.product_locations?.[0]?.str_id ?? null;
}
function ProductCard({
  product,
  onAddToCart,
  isSubmitting
}) {
  let imageSrc = product.main_image_url || product.image_urls?.[0] || no_image_default, hasRange = product.price_max > product.price_min, priceLabel = product.price_min === 0 && product.price_max === 0 ? "Free" : hasRange ? `${formatPrice(product.currency, product.price_min)} - ${formatPrice(product.currency, product.price_max)}` : formatPrice(product.currency, product.price_min), locationCount = product.product_locations?.length ?? 0, buttonLabel = isSubmitting ? "Adding..." : "Add to cart";
  return /* @__PURE__ */ jsxs65("article", { className: "group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.1)]", children: [
    /* @__PURE__ */ jsxs65("div", { className: "relative aspect-[4/3] overflow-hidden bg-slate-100", children: [
      /* @__PURE__ */ jsx78(
        "img",
        {
          src: imageSrc,
          alt: product.name,
          className: "h-full w-full object-cover transition duration-500 group-hover:scale-105",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx78("div", { className: "absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur", children: product.status.replace(/_/g, " ") })
    ] }),
    /* @__PURE__ */ jsxs65("div", { className: "flex h-full flex-col gap-4 p-5", children: [
      /* @__PURE__ */ jsxs65("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs65("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxs65("div", { children: [
            /* @__PURE__ */ jsx78("h3", { className: "text-lg font-black text-slate-950 line-clamp-1", children: product.name }),
            /* @__PURE__ */ jsx78("p", { className: "text-sm font-medium leading-6 text-slate-500 line-clamp-2", children: product.description })
          ] }),
          /* @__PURE__ */ jsx78("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: product.category || "Uncategorized" })
        ] }),
        /* @__PURE__ */ jsxs65("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsx78("span", { className: "text-base font-black text-slate-950", children: priceLabel }),
          /* @__PURE__ */ jsx78("span", { className: "text-xs font-medium text-slate-400", children: locationCount > 0 ? `${locationCount} location${locationCount === 1 ? "" : "s"}` : "Online only" })
        ] })
      ] }),
      /* @__PURE__ */ jsx78("div", { className: "flex flex-wrap gap-2", children: (product.tags ?? []).slice(0, 4).map((tag) => /* @__PURE__ */ jsx78("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600", children: tag.trim() }, `${product._id}-${tag}`)) }),
      /* @__PURE__ */ jsxs65("div", { className: "mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4", children: [
        /* @__PURE__ */ jsx78("span", { className: "text-xs font-medium text-slate-400", children: product.accepts_prepayment ? "Prepayment supported" : "Pay on confirmation" }),
        /* @__PURE__ */ jsxs65(
          "button",
          {
            type: "button",
            onClick: () => onAddToCart(product),
            className: "inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70",
            disabled: isSubmitting,
            children: [
              /* @__PURE__ */ jsx78(ShoppingCart, { className: "h-4 w-4" }),
              buttonLabel
            ]
          }
        )
      ] })
    ] })
  ] });
}
function MarketplaceSkeleton() {
  return /* @__PURE__ */ jsx78("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: Array.from({ length: 6 }).map((_, index) => /* @__PURE__ */ jsxs65("div", { className: "animate-pulse overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]", children: [
    /* @__PURE__ */ jsx78("div", { className: "aspect-[4/3] bg-slate-200" }),
    /* @__PURE__ */ jsxs65("div", { className: "space-y-4 p-5", children: [
      /* @__PURE__ */ jsx78("div", { className: "h-5 w-2/3 rounded-full bg-slate-200" }),
      /* @__PURE__ */ jsx78("div", { className: "h-4 w-full rounded-full bg-slate-200" }),
      /* @__PURE__ */ jsx78("div", { className: "h-4 w-4/5 rounded-full bg-slate-200" }),
      /* @__PURE__ */ jsxs65("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx78("div", { className: "h-5 w-24 rounded-full bg-slate-200" }),
        /* @__PURE__ */ jsx78("div", { className: "h-9 w-32 rounded-full bg-slate-200" })
      ] })
    ] })
  ] }, index)) });
}
function MarketplaceHome() {
  let { products, query, productError } = useLoaderData16(), navigation = useNavigation5(), cartSummaryFetcher = useFetcher11(), cartMutationFetcher = useFetcher11(), [cartState, setCartState] = useState28(null), [cartHydrated, setCartHydrated] = useState28(!1);
  useEffect19(() => {
    cartSummaryFetcher.load("/marketplace?intent=cart");
  }, []), useEffect19(() => {
    cartSummaryFetcher.data && ("cart" in cartSummaryFetcher.data || "cartError" in cartSummaryFetcher.data) && (setCartState(cartSummaryFetcher.data.cart ?? null), setCartHydrated(!0));
  }, [cartSummaryFetcher.data]), useEffect19(() => {
    cartMutationFetcher.data?.cart !== void 0 && (setCartState(cartMutationFetcher.data.cart ?? null), setCartHydrated(!0), cartSummaryFetcher.load("/marketplace?intent=cart"));
  }, [cartMutationFetcher.data]);
  let cartItemCount = useMemo3(() => cartState?.cart_items?.length ?? 0, [cartState]), totalItems = products?.total_items ?? 0, totalPages = products?.total_pages ?? 0, pageSize = query?.page_size ?? products?.items_per_page ?? 20, showSkeleton = navigation.state === "loading" && navigation.formMethod === "get", pendingProductId = cartMutationFetcher.state === "submitting" ? String(cartMutationFetcher.formData?.get("product_id") ?? "") : "", cartError = cartSummaryFetcher.data?.cartError ?? null, mutationError = cartMutationFetcher.data?.error ?? null, handleAddToCart = (product) => {
    let formData = new FormData();
    formData.set("intent", "add-to-cart"), formData.set("product_id", product._id), formData.set("quantity", "1");
    let locationId = getProductLocationId(product);
    locationId && formData.set("product_location_id", locationId), cartMutationFetcher.submit(formData, { method: "post", action: "/marketplace" });
  };
  return /* @__PURE__ */ jsxs65("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxs65("section", { className: "relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: [
      /* @__PURE__ */ jsx78("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.04),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.06),transparent_28%)]" }),
      /* @__PURE__ */ jsx78("div", { className: "relative grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start", children: /* @__PURE__ */ jsxs65("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx78("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Marketplace" }),
        /* @__PURE__ */ jsxs65("div", { className: "max-w-3xl space-y-4", children: [
          /* @__PURE__ */ jsx78("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: "Discover products with a clean, calm shopping experience." }),
          /* @__PURE__ */ jsx78("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: "Search by keyword and location, then add items to a cart that stays friendly for guests and signed-in users alike." })
        ] }),
        /* @__PURE__ */ jsxs65("div", { className: "flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxs65(
            Link13,
            {
              to: "/marketplace/cart",
              className: "inline-flex items-center gap-3 rounded-full border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800",
              children: [
                /* @__PURE__ */ jsx78(ShoppingCart, { className: "h-4 w-4" }),
                "View Cart",
                /* @__PURE__ */ jsx78("span", { className: "rounded-full bg-white/15 px-2.5 py-1 text-xs font-black", children: cartHydrated ? cartItemCount : "\u2026" })
              ]
            }
          ),
          /* @__PURE__ */ jsx78(
            Link13,
            {
              to: "/marketplace",
              className: "inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50",
              children: "Refresh Catalog"
            }
          )
        ] }),
        productError || mutationError || cartError ? /* @__PURE__ */ jsx78("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: productError || mutationError || cartError }) : null
      ] }) }),
      /* @__PURE__ */ jsxs65(
        Link13,
        {
          to: "/marketplace/cart",
          "aria-label": "View cart",
          className: "absolute right-5 top-5 hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 sm:inline-flex",
          children: [
            /* @__PURE__ */ jsx78(ShoppingCart, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx78("span", { children: "Cart" }),
            /* @__PURE__ */ jsx78("span", { className: "rounded-full bg-slate-950 px-2.5 py-1 text-xs font-black text-white", children: cartHydrated ? cartItemCount : "\u2026" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx78("section", { className: "mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6", children: /* @__PURE__ */ jsxs65(Form14, { method: "get", className: "grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end", children: [
      /* @__PURE__ */ jsxs65("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx78("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Search products" }),
        /* @__PURE__ */ jsx78(
          "input",
          {
            type: "text",
            name: "wildcard",
            defaultValue: query?.wildcard ?? "",
            placeholder: "Try: shoes, watch, MacBook",
            className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs65("label", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx78("span", { className: "text-xs font-bold uppercase tracking-[0.18em] text-slate-500", children: "Location" }),
        /* @__PURE__ */ jsx78(
          "input",
          {
            type: "text",
            name: "location_wildcard",
            defaultValue: query?.location_wildcard ?? "",
            placeholder: "Try: lag, ikeja, abuja",
            className: "h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs65("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx78(
          "button",
          {
            type: "submit",
            className: "h-12 rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800",
            children: "Search"
          }
        ),
        /* @__PURE__ */ jsx78(
          Link13,
          {
            to: "/marketplace",
            className: "inline-flex h-12 items-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50",
            children: "Clear"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs65("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxs65("div", { className: "mb-4 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ jsxs65("div", { children: [
          /* @__PURE__ */ jsx78("h2", { className: "text-2xl font-black text-slate-950", children: "Catalog" }),
          /* @__PURE__ */ jsx78("p", { className: "text-sm text-slate-500", children: totalItems > 0 ? `${totalItems} product${totalItems === 1 ? "" : "s"} found` : "No products found for this search" })
        ] }),
        /* @__PURE__ */ jsxs65("div", { className: "rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: [
          "Page ",
          products?.current_page ?? 1
        ] })
      ] }),
      showSkeleton ? /* @__PURE__ */ jsx78(MarketplaceSkeleton, {}) : products?.items?.length ? /* @__PURE__ */ jsx78("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: products.items.map((product) => /* @__PURE__ */ jsx78(
        ProductCard,
        {
          product,
          onAddToCart: handleAddToCart,
          isSubmitting: pendingProductId === product._id
        },
        product._id
      )) }) : /* @__PURE__ */ jsxs65("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
        /* @__PURE__ */ jsx78("h3", { className: "text-xl font-black text-slate-950", children: "No matching products" }),
        /* @__PURE__ */ jsx78("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Try a broader keyword or location to expand the catalog results." })
      ] })
    ] }),
    /* @__PURE__ */ jsx78("section", { className: "mt-8", children: /* @__PURE__ */ jsx78(
      Pagination,
      {
        lastKey: products?.last_key_id,
        firstKey: products?.first_key_id,
        pageSize
      }
    ) })
  ] });
}

// app/routes/_public.results.$contestId.tsx
var public_results_contestId_exports = {};
__export(public_results_contestId_exports, {
  default: () => ContestResult,
  loader: () => loader19
});
import { redirect as redirect17 } from "@remix-run/node";
import { useLoaderData as useLoaderData17 } from "@remix-run/react";
import { jsx as jsx79, jsxs as jsxs66 } from "react/jsx-runtime";
async function loader19({ params }) {
  let { contestId } = params;
  if (!contestId)
    return redirect17("/results");
  let { data: contest, error } = await getFinalResultForContest(contestId);
  return error && redirect17("/results"), { contest };
}
function ContestResult() {
  let { contest } = useLoaderData17();
  if (!contest)
    throw redirect17("/results");
  console.log(contest);
  let color = contest.status === "registering" ? "yellow" : contest.status === "ongoing" ? "green" : contest.status === "completed" ? "red" : "gray", headings = [], table_results = [];
  return contest?.final_result_scores && (headings = contest.final_result_headings, table_results = contest.final_result_scores.map((res) => res.table_data)), /* @__PURE__ */ jsxs66("main", { className: "grow", children: [
    /* @__PURE__ */ jsxs66("header", { className: "wrapper my-16", children: [
      /* @__PURE__ */ jsxs66("h1", { className: "text-accent text-2xl lg:text-4xl lg:leading-snug font-satoshi-bold max-w-3xl uppercase mb-10", children: [
        contest.name,
        " Result Table"
      ] }),
      /* @__PURE__ */ jsxs66("div", { className: "grid gap-6 max-w-2xl", children: [
        /* @__PURE__ */ jsxs66("div", { className: "", children: [
          /* @__PURE__ */ jsx79("span", { className: "block font-satoshi-bold mb-1", children: "Status" }),
          /* @__PURE__ */ jsx79(StatusTag, { status: contest.status, color })
        ] }),
        /* @__PURE__ */ jsxs66("div", { className: "grid grid-cols-2 gap-14", children: [
          /* @__PURE__ */ jsxs66("div", { className: "", children: [
            /* @__PURE__ */ jsx79("span", { className: "block font-satoshi-bold mb-1", children: "Categories" }),
            /* @__PURE__ */ jsx79("span", { className: "block", children: contest.categories.join(", ") })
          ] }),
          /* @__PURE__ */ jsxs66("div", { className: "", children: [
            /* @__PURE__ */ jsx79("span", { className: "block font-satoshi-bold mb-1", children: "Stages" }),
            /* @__PURE__ */ jsx79("span", { className: "block", children: contest.no_of_stages ?? 0 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs66("div", { className: "grid grid-cols-2 gap-14", children: [
          /* @__PURE__ */ jsxs66("div", { className: "", children: [
            /* @__PURE__ */ jsx79("span", { className: "block font-satoshi-bold mb-1", children: "Duration" }),
            /* @__PURE__ */ jsx79("span", { className: "block", children: "From May 23 to June 20" })
          ] }),
          /* @__PURE__ */ jsxs66("div", { className: "", children: [
            /* @__PURE__ */ jsx79("span", { className: "block font-satoshi-bold mb-1", children: "Prizes" }),
            /* @__PURE__ */ jsx79("span", { className: "block", children: contest.prizes })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx79("section", { className: "bg-white my-16", children: /* @__PURE__ */ jsxs66("div", { className: "wrapper py-6", children: [
      /* @__PURE__ */ jsxs66("div", { className: "flex flex-col md:flex-row-reverse gap-6 md:gap-8 justify-between md:items-center py-6", children: [
        /* @__PURE__ */ jsxs66("fieldset", { className: "flex gap-4 flex-wrap sm:justify-end", children: [
          /* @__PURE__ */ jsx79(Select2, { name: "stage", id: "stage", containerClass: "bg-secondary", children: /* @__PURE__ */ jsxs66("option", { value: "1", children: [
            contest.name.toUpperCase(),
            " - ",
            "FINAL RESULT TABLE"
          ] }) }),
          /* @__PURE__ */ jsx79(Select2, { name: "category", id: "category", containerClass: "bg-secondary", children: /* @__PURE__ */ jsx79("option", { value: "", children: "Sort by category" }) })
        ] }),
        /* @__PURE__ */ jsx79("span", { className: "whitespace-nowrap font-satoshi-bold", children: "SMV: SOCIAL MEDIA VOTES" })
      ] }),
      /* @__PURE__ */ jsx79("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxs66("table", { className: "w-full table-auto border border-secondary", children: [
        /* @__PURE__ */ jsx79("thead", { children: /* @__PURE__ */ jsxs66("tr", { children: [
          /* @__PURE__ */ jsx79("th", { className: "text-left uppercase font-satoshi-black border border-secondary px-6 py-4", children: "S/N" }),
          headings.map((heading) => /* @__PURE__ */ jsx79("th", { className: "text-left uppercase font-satoshi-black border border-secondary px-6 py-4", children: heading }, heading))
        ] }) }),
        /* @__PURE__ */ jsx79("tbody", { children: table_results.map((contestant, index) => /* @__PURE__ */ jsxs66("tr", { children: [
          /* @__PURE__ */ jsx79("td", { className: "border border-secondary px-6 py-4", children: index + 1 }),
          headings.map((heading) => /* @__PURE__ */ jsx79("td", { className: "border border-secondary px-6 py-4", children: contestant[heading] }, heading))
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsx79(Pagination, { className: "p-6" })
    ] }) })
  ] });
}

// app/routes/admin.partners.details.$id.tsx
var admin_partners_details_id_exports = {};
__export(admin_partners_details_id_exports, {
  action: () => action13,
  default: () => PartnerDetailsPage,
  loader: () => loader20
});
import { json as json21, redirect as redirect18 } from "@remix-run/node";
import { Form as Form15, useLoaderData as useLoaderData18, useNavigation as useNavigation6, useNavigate as useNavigate13 } from "@remix-run/react";
import { jsx as jsx80, jsxs as jsxs67 } from "react/jsx-runtime";
var statusColors = {
  Approved: "text-green-600 bg-green-50 border-green-200",
  Pending: "text-yellow-600 bg-yellow-50 border-yellow-200",
  PendingVerification: "text-blue-600 bg-blue-50 border-blue-200",
  Trial: "text-indigo-600 bg-indigo-50 border-indigo-200",
  Suspended: "text-red-600 bg-red-50 border-red-200",
  PendingSettlementDisbursement: "text-purple-600 bg-purple-50 border-purple-200",
  Rejected: "text-red-600 bg-red-50 border-red-200"
}, statusOptions = [
  "Pending",
  "PendingVerification",
  "Trial",
  "Approved",
  "Suspended",
  "PendingSettlementDisbursement",
  "Rejected"
];
function prettyStatus(status) {
  return status.replace(/([A-Z])/g, " $1").trim();
}
function parseReferralPercentage(value) {
  if (!value)
    return null;
  let parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}
async function loader20({ params, request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect18("/login");
  let id = params.id ?? "";
  if (!id) {
    let { headers } = await setToast({ request, toast: `error::Missing partner id::${Date.now()}` });
    return redirect18("/admin/partners", { headers });
  }
  let response = await partnerServer.getBusinessDetails(id, cookieHeader);
  if (response.authRequired)
    return redirect18("/login");
  if (response.error || !response.data) {
    let { headers } = await setToast({
      request,
      toast: `error::${response.error?.detail?.toString() ?? "Could not load business details"}::${Date.now()}`
    });
    return redirect18("/admin/partners", { headers });
  }
  return json21({ business: response.data });
}
async function action13({ params, request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect18("/login");
  let id = params.id ?? "", formData = await request.formData(), intent = formData.get("intent")?.toString();
  if (!id || !intent) {
    let { headers } = await setToast({ request, toast: `error::Invalid business request::${Date.now()}` });
    return redirect18(`/admin/partners/details/${id}`, { headers });
  }
  if (intent === "update_status") {
    let dto = {
      business_id: formData.get("business_id")?.toString() || id,
      status: formData.get("status")?.toString() || void 0,
      updated_by: formData.get("updated_by")?.toString() || "",
      reason: formData.get("reason")?.toString() || void 0,
      referral_percentage: parseReferralPercentage(formData.get("referral_percentage"))
    }, response = await partnerServer.updateBusinessStatus(dto, cookieHeader);
    if (response.authRequired)
      return redirect18("/login");
    if (response.error) {
      let { headers: headers2 } = await setToast({
        request,
        toast: `error::${response.error.detail?.toString() ?? "Could not update business"}::${Date.now()}`
      });
      return redirect18(`/admin/partners/details/${id}`, { headers: headers2 });
    }
    let { headers } = await setToast({
      request,
      toast: `success::Business updated successfully::${Date.now()}`
    });
    return redirect18(`/admin/partners/details/${id}`, { headers });
  } else if (intent === "add_owner") {
    let dto = {
      business_id: formData.get("business_id")?.toString() || id,
      first_name: formData.get("first_name")?.toString() ?? "",
      last_name: formData.get("last_name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      alternate_phone: formData.get("alternate_phone")?.toString() ?? "",
      password: formData.get("password")?.toString() ?? ""
    }, response = await partnerServer.addBusinessOwner(dto, cookieHeader);
    if (response.authRequired)
      return redirect18("/login");
    if (response.error) {
      let { headers: headers2 } = await setToast({
        request,
        toast: `error::${response.error.detail?.toString() ?? "Could not update business"}::${Date.now()}`
      });
      return redirect18(`/admin/partners/details/${id}`, { headers: headers2 });
    }
    let { headers } = await setToast({
      request,
      toast: `success::Business updated successfully::${Date.now()}`
    });
    return redirect18(`/admin/partners/details/${id}`, { headers });
  } else {
    let { headers } = await setToast({ request, toast: `error::Unsupported action::${Date.now()}` });
    return redirect18(`/admin/partners/details/${id}`, { headers });
  }
}
function DetailCard({ label, value }) {
  return /* @__PURE__ */ jsxs67("div", { className: "rounded-2xl border border-gray-100 bg-white shadow-sm p-4", children: [
    /* @__PURE__ */ jsx80("div", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: label }),
    /* @__PURE__ */ jsx80("div", { className: "mt-2 text-sm font-semibold text-gray-900", children: value ?? "\u2014" })
  ] });
}
function PartnerDetailsPage() {
  let { business } = useLoaderData18(), navigation = useNavigation6(), navigate = useNavigate13(), isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ jsxs67("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs67("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx80(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }),
      /* @__PURE__ */ jsxs67("div", { children: [
        /* @__PURE__ */ jsx80("h1", { className: "text-2xl font-black text-primary", children: business.legal_business_name }),
        /* @__PURE__ */ jsx80("p", { className: "text-sm text-gray-500 mt-1", children: "Business details and admin controls" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs67("section", { className: "grid gap-4 lg:grid-cols-[1.4fr_0.9fr]", children: [
      /* @__PURE__ */ jsxs67("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ jsxs67("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ jsx80("div", { className: "flex flex-wrap items-start justify-between gap-4", children: /* @__PURE__ */ jsxs67("div", { children: [
            /* @__PURE__ */ jsx80("div", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Business status" }),
            /* @__PURE__ */ jsx80("span", { className: `mt-2 inline-flex px-3 py-1.5 rounded-full border text-xs font-semibold ${statusColors[business.status] || "text-gray-600 bg-gray-100 border-gray-200"}`, children: prettyStatus(business.status) })
          ] }) }),
          /* @__PURE__ */ jsxs67("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6", children: [
            /* @__PURE__ */ jsx80(DetailCard, { label: "Business Email", value: business.business_email }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "Phone", value: business.phone_number }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "Industry", value: business.industry }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "Country", value: business.country_of_incorporation }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "Referral %", value: business.referral_percentage }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "Owner ID", value: business.owner_id || "Not set" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs67("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ jsx80("h2", { className: "text-lg font-bold text-primary", children: "Business information" }),
          /* @__PURE__ */ jsxs67("div", { className: "grid sm:grid-cols-2 gap-4 mt-4 text-sm", children: [
            /* @__PURE__ */ jsx80(DetailCard, { label: "Legal Name", value: business.legal_business_name }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "ROC / CAC Number", value: business.roc_cac_number }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "Tax ID", value: business.tax_id }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "Website", value: business.website }),
            /* @__PURE__ */ jsxs67("div", { className: "sm:col-span-2 rounded-2xl border border-gray-100 bg-gray-50 p-4", children: [
              /* @__PURE__ */ jsx80("div", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Description" }),
              /* @__PURE__ */ jsx80("p", { className: "mt-2 text-sm leading-6 text-gray-700 whitespace-pre-wrap", children: business.business_description || "\u2014" })
            ] }),
            /* @__PURE__ */ jsxs67("div", { className: "sm:col-span-2 rounded-2xl border border-gray-100 bg-gray-50 p-4", children: [
              /* @__PURE__ */ jsx80("div", { className: "text-xs font-semibold uppercase tracking-wide text-gray-400", children: "Notes" }),
              /* @__PURE__ */ jsx80("div", { className: "mt-2 flex flex-wrap gap-2", children: business.notes?.length ? business.notes.map((note, index) => /* @__PURE__ */ jsx80("span", { className: "px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-700", children: note }, `${note}-${index}`)) : /* @__PURE__ */ jsx80("span", { className: "text-sm text-gray-500", children: "No notes available" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs67("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ jsx80("h2", { className: "text-lg font-bold text-primary", children: "Contact person" }),
          /* @__PURE__ */ jsxs67("div", { className: "grid sm:grid-cols-2 gap-3 mt-4", children: [
            /* @__PURE__ */ jsx80(DetailCard, { label: "Name", value: business.contact_person?.name }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "Email", value: business.contact_person?.email }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "Phone", value: business.contact_person?.phone }),
            /* @__PURE__ */ jsx80(DetailCard, { label: "Country", value: business.contact_person?.country })
          ] })
        ] }),
        /* @__PURE__ */ jsxs67("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ jsx80("h2", { className: "text-lg font-bold text-primary", children: "Business locations" }),
          /* @__PURE__ */ jsx80("div", { className: "grid gap-3 mt-4", children: business.business_locations?.length ? business.business_locations.map((location, index) => /* @__PURE__ */ jsxs67("div", { className: "rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm", children: [
            /* @__PURE__ */ jsx80("div", { className: "font-semibold text-gray-900", children: location.street }),
            /* @__PURE__ */ jsxs67("div", { className: "text-gray-600 mt-1", children: [
              location.city,
              ", ",
              location.state,
              ", ",
              location.country
            ] })
          ] }, `${location.street}-${index}`)) : /* @__PURE__ */ jsx80("div", { className: "text-sm text-gray-500", children: "No business locations available" }) })
        ] }),
        /* @__PURE__ */ jsxs67("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ jsx80("h2", { className: "text-lg font-bold text-primary", children: "Status history" }),
          /* @__PURE__ */ jsx80("div", { className: "mt-4 grid gap-3", children: business.status_history?.length ? business.status_history.map((entry2, index) => /* @__PURE__ */ jsxs67("div", { className: "rounded-2xl border border-gray-100 p-4", children: [
            /* @__PURE__ */ jsxs67("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsx80("span", { className: `inline-flex px-2.5 py-1 rounded-full border text-xs font-semibold ${statusColors[entry2.status] || "text-gray-600 bg-gray-100 border-gray-200"}`, children: prettyStatus(entry2.status) }),
              /* @__PURE__ */ jsx80("span", { className: "text-xs text-gray-400", children: new Date(entry2.updated_on).toLocaleString() })
            ] }),
            /* @__PURE__ */ jsxs67("div", { className: "mt-2 text-sm text-gray-700", children: [
              /* @__PURE__ */ jsxs67("div", { children: [
                /* @__PURE__ */ jsx80("span", { className: "font-semibold", children: "Updated by:" }),
                " ",
                entry2.updated_by || "\u2014"
              ] }),
              /* @__PURE__ */ jsxs67("div", { children: [
                /* @__PURE__ */ jsx80("span", { className: "font-semibold", children: "Reason:" }),
                " ",
                entry2.reason || "\u2014"
              ] })
            ] })
          ] }, `${entry2.updated_on}-${index}`)) : /* @__PURE__ */ jsx80("div", { className: "text-sm text-gray-500", children: "No status history available" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs67("aside", { className: "grid gap-4", children: [
        /* @__PURE__ */ jsxs67("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ jsx80("h2", { className: "text-lg font-bold text-primary", children: "Update status" }),
          /* @__PURE__ */ jsxs67(Form15, { method: "post", className: "grid gap-4 mt-4", children: [
            /* @__PURE__ */ jsx80("input", { type: "hidden", name: "intent", value: "update_status" }),
            /* @__PURE__ */ jsx80("input", { type: "hidden", name: "business_id", value: business._id }),
            /* @__PURE__ */ jsx80("input", { type: "hidden", name: "updated_by", value: "" }),
            /* @__PURE__ */ jsx80(Select2, { label: "Status", name: "status", defaultValue: business.status, required: !0, children: statusOptions.map((status) => /* @__PURE__ */ jsx80("option", { value: status, children: prettyStatus(status) }, status)) }),
            /* @__PURE__ */ jsx80(FormControl, { as: "input", labelText: "Referral Percentage", name: "referral_percentage", type: "number", min: 0, max: 100, step: "0.01", placeholder: "Optional" }),
            /* @__PURE__ */ jsx80(FormControl, { as: "textarea", labelText: "Reason", name: "reason", placeholder: "Optional reason for change" }),
            /* @__PURE__ */ jsx80(Cta_default, { element: "button", type: "submit", disabled: isSubmitting, className: "px-4 py-2 rounded-lg font-semibold", children: isSubmitting ? "Updating..." : "Update status" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs67("div", { className: "rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6", children: [
          /* @__PURE__ */ jsx80("h2", { className: "text-lg font-bold text-primary", children: "Add business owner" }),
          /* @__PURE__ */ jsxs67(Form15, { method: "post", className: "grid gap-4 mt-4", children: [
            /* @__PURE__ */ jsx80("input", { type: "hidden", name: "intent", value: "add_owner" }),
            /* @__PURE__ */ jsx80("input", { type: "hidden", name: "business_id", value: business._id }),
            /* @__PURE__ */ jsxs67("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsx80(FormControl, { as: "input", labelText: "First Name", name: "first_name", required: !0, placeholder: "First name" }),
              /* @__PURE__ */ jsx80(FormControl, { as: "input", labelText: "Last Name", name: "last_name", required: !0, placeholder: "Last name" }),
              /* @__PURE__ */ jsx80(FormControl, { as: "input", labelText: "Email", name: "email", type: "email", required: !0, placeholder: "Owner email" }),
              /* @__PURE__ */ jsx80(FormControl, { as: "input", labelText: "Phone", name: "phone", type: "tel", required: !0, placeholder: "Phone number" }),
              /* @__PURE__ */ jsx80(FormControl, { as: "input", labelText: "Alternate Phone", name: "alternate_phone", type: "tel", required: !0, placeholder: "Alternate phone" }),
              /* @__PURE__ */ jsx80(FormControl, { as: "input", labelText: "Password", name: "password", type: "password", required: !0, placeholder: "Temporary password" })
            ] }),
            /* @__PURE__ */ jsx80(Cta_default, { element: "button", type: "submit", disabled: isSubmitting, className: "px-4 py-2 rounded-lg font-semibold", children: isSubmitting ? "Saving..." : "Add owner" })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/admin.tournaments.$ID.edit.tsx
var admin_tournaments_ID_edit_exports = {};
__export(admin_tournaments_ID_edit_exports, {
  action: () => action14,
  default: () => EditTournament,
  loader: () => loader21
});
import { json as json22, redirect as redirect19 } from "@remix-run/node";
import { useLoaderData as useLoaderData19, useNavigate as useNavigate14 } from "@remix-run/react";

// app/components/admin/tournament/EditTournamentForm.tsx
import { Form as Form16 } from "@remix-run/react";
import { useState as useState29 } from "react";
import { jsx as jsx81, jsxs as jsxs68 } from "react/jsx-runtime";
function EditTournamentForm({ tournament }) {
  let [fileList, setFileList] = useState29(null), { filePreview, clearFilePreview, fileName } = useFilePreview(fileList);
  return /* @__PURE__ */ jsxs68(Form16, { className: "max-w-xl mx-auto grid gap-6 sm:gap-12 text-sm", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsx81("h1", { className: "text-xl xs:text-2xl font-bold text-primary", children: "Edit Tournament" }),
    /* @__PURE__ */ jsxs68("div", { className: "grid gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsxs68("div", { className: "flex items-center gap-x-5", children: [
        filePreview ? /* @__PURE__ */ jsx81("img", { className: "w-20 h-20 rounded-lg object-cover", src: filePreview, alt: "chosen image" }) : /* @__PURE__ */ jsx81("img", { className: "w-20 h-20 rounded-lg object-cover", src: tournament.image || no_image_default, alt: "Tournament banner" }),
        /* @__PURE__ */ jsxs68("div", { className: "flex flex-col items-start gap-2 max-xs:text-xs", children: [
          /* @__PURE__ */ jsxs68("label", { htmlFor: "image", className: "border-2 border-secondary text-primary cursor-pointer font-semibold py-2 px-4 rounded-lg", children: [
            "Change Photo",
            /* @__PURE__ */ jsx81("input", { id: "image", name: "image", type: "file", onChange: (e) => {
              setFileList(e.currentTarget.files);
            }, className: "hidden" })
          ] }),
          /* @__PURE__ */ jsxs68("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx81("span", { children: fileName || "PNG, JPG (max. 1440x900px)" }),
            fileName ? /* @__PURE__ */ jsx81(Svg, { src: icons.closeIcon, onClick: clearFilePreview, className: "text-red-600 cursor-pointer" }) : null
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx81(FormControl, { as: "input", labelText: "Tournament Name", placeholder: "Enter tournament name", id: "name", name: "name", defaultValue: tournament.name, required: !0 }),
      /* @__PURE__ */ jsx81(FormControl, { as: "input", labelText: "Tournament Unique ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", defaultValue: tournament.id, required: !0 }),
      /* @__PURE__ */ jsx81(FormControl, { as: "textarea", rows: 3, labelText: "Tournament Description", placeholder: "Enter tournament description", id: "description", name: "description", defaultValue: tournament.description, required: !0 })
    ] }),
    /* @__PURE__ */ jsxs68("div", { className: "flex max-sm:flex-col justify-end gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsx81(Cta_default, { element: "button", onClick: clearFilePreview, type: "reset", className: "px-8 py-2 rounded-lg font-medium border-secondary active:border-accent sm:hover:border-accent", variant: "outline", children: "Reset" }),
      /* @__PURE__ */ jsx81(Cta_default, { element: "button", type: "submit", name: "tournamentId", value: tournament._id, className: "px-8 py-2 rounded-lg font-medium", children: "Edit Tournament" })
    ] })
  ] });
}

// app/routes/admin.tournaments.$ID.edit.tsx
import { jsx as jsx82, jsxs as jsxs69 } from "react/jsx-runtime";
async function loader21({ params, request }) {
  let { data: tournament, error } = await tournamentRepo.getTournamentById(params.ID);
  if (!tournament) {
    let { headers } = await setToast({ request, toast: `error::${error?.detail}::${Date.now()}` });
    return redirect19("/admin/tournaments", { headers });
  }
  return json22({ tournament });
}
async function action14({ request }) {
  let formData = await request.formData(), payload = prepareTournamentDto(formData);
  console.log("###############"), console.log(Object.fromEntries(payload.entries()));
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect19("/login");
  let { data, error } = await tournamentRepo.updateTournament({ id: formData.get("tournamentId"), dto: payload }, cookieHeader);
  if (data) {
    let { headers: headers2 } = await setToast({ request, toast: `success::The tournament has been updated::${Date.now()}` });
    return redirect19("/admin/tournaments", { headers: headers2 });
  } else if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error.detail}::${Date.now()}` });
    return json22(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `error::Sorry, this tournament no longer exists::${Date.now()}` });
  return redirect19("/admin/tournaments", { headers });
}
function EditTournament() {
  let { tournament } = useLoaderData19(), navigate = useNavigate14();
  return /* @__PURE__ */ jsxs69("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs69("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsx82(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }),
      /* @__PURE__ */ jsx82("span", { className: "font-black text-primary", children: "Edit Tournament" })
    ] }),
    /* @__PURE__ */ jsx82(EditTournamentForm, { tournament })
  ] });
}

// app/routes/_public.marketplace.cart.tsx
var public_marketplace_cart_exports = {};
__export(public_marketplace_cart_exports, {
  action: () => action15,
  default: () => MarketplaceCart,
  loader: () => loader22
});
import { json as json23 } from "@remix-run/node";
import { Link as Link14, useFetcher as useFetcher12, useLoaderData as useLoaderData20, useNavigation as useNavigation7 } from "@remix-run/react";
import { ArrowLeft, Minus, Plus, ShoppingCart as ShoppingCart2, Trash2 } from "lucide-react";
import { jsx as jsx83, jsxs as jsxs70 } from "react/jsx-runtime";
function formatMoney(currency, value) {
  return `${currency} ${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(value)}`;
}
function parseCartItemPayload2(formData) {
  let productId = String(formData.get("product_id") ?? "").trim(), quantity = Number(formData.get("quantity") ?? 0), productLocationIdRaw = String(formData.get("product_location_id") ?? "").trim();
  return {
    product_id: productId,
    quantity: Number.isFinite(quantity) ? quantity : 0,
    product_location_id: productLocationIdRaw || null
  };
}
function buildCartPayload2(formData) {
  return {
    cart_items: [parseCartItemPayload2(formData)]
  };
}
async function loader22({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? void 0, cartRes = await partnerServer.getCart(cookieHeader);
  return cartRes.error ? json23({
    cart: null,
    cartError: typeof cartRes.error.detail == "string" ? cartRes.error.detail : "Unable to load cart"
  }) : json23({
    cart: cartRes.data ?? null
  });
}
async function action15({ request }) {
  let formData = await request.formData(), cookieHeader = request.headers.get("Cookie") ?? void 0, payload = buildCartPayload2(formData), cartRes = await partnerServer.upsertCartItems(payload, cookieHeader);
  return cartRes.error ? json23(
    {
      error: typeof cartRes.error.detail == "string" ? cartRes.error.detail : "Unable to update cart"
    },
    { status: 400 }
  ) : json23({
    cart: cartRes.data
  });
}
function CartLineItem({
  item
}) {
  let fetcher = useFetcher12(), product = item.product, imageSrc = product.main_image_url || product.image_urls?.[0] || no_image_default, locationLabel = product.product_locations?.find((location) => location.str_id === item.product_location_id)?.name ?? product.product_locations?.find((location) => location.is_primary)?.name ?? product.product_locations?.[0]?.name ?? "Default location", isSubmitting = fetcher.state !== "idle", submitQuantity = (quantity) => {
    let formData = new FormData();
    formData.set("product_id", item.product_id), formData.set("quantity", String(Math.max(0, quantity))), item.product_location_id && formData.set("product_location_id", item.product_location_id), fetcher.submit(formData, { method: "post", action: "/marketplace/cart" });
  };
  return /* @__PURE__ */ jsxs70("article", { className: "grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr_auto] sm:p-5", children: [
    /* @__PURE__ */ jsx83("div", { className: "overflow-hidden rounded-2xl bg-slate-100", children: /* @__PURE__ */ jsx83("img", { src: imageSrc, alt: product.name, className: "aspect-square h-full w-full object-cover", loading: "lazy" }) }),
    /* @__PURE__ */ jsxs70("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs70("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxs70("div", { children: [
          /* @__PURE__ */ jsx83("h3", { className: "text-lg font-black text-slate-950", children: product.name }),
          /* @__PURE__ */ jsx83("p", { className: "mt-1 text-sm leading-6 text-slate-500 line-clamp-2", children: product.description })
        ] }),
        /* @__PURE__ */ jsx83("span", { className: "rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent", children: product.category || "Uncategorized" })
      ] }),
      /* @__PURE__ */ jsxs70("div", { className: "flex flex-wrap items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsx83("span", { className: "font-bold text-slate-900", children: product.price_min === 0 && product.price_max === 0 ? "Free" : product.price_min === product.price_max ? formatMoney(product.currency, product.price_min) : `${formatMoney(product.currency, product.price_min)} - ${formatMoney(product.currency, product.price_max)}` }),
        /* @__PURE__ */ jsx83("span", { className: "text-slate-400", children: "\u2022" }),
        /* @__PURE__ */ jsx83("span", { className: "text-slate-500", children: locationLabel })
      ] }),
      /* @__PURE__ */ jsx83("div", { className: "flex flex-wrap gap-2", children: (product.tags ?? []).slice(0, 4).map((tag) => /* @__PURE__ */ jsx83("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600", children: tag.trim() }, `${product._id}-${tag}`)) })
    ] }),
    /* @__PURE__ */ jsxs70("div", { className: "flex flex-col items-stretch justify-between gap-3 sm:items-end", children: [
      /* @__PURE__ */ jsxs70("div", { className: "flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1", children: [
        /* @__PURE__ */ jsx83(
          "button",
          {
            type: "button",
            onClick: () => submitQuantity(item.quantity - 1),
            disabled: isSubmitting || item.quantity <= 0,
            className: "grid h-9 w-9 place-items-center rounded-full border border-transparent text-slate-600 transition hover:border-slate-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",
            "aria-label": `Decrease quantity for ${product.name}`,
            children: /* @__PURE__ */ jsx83(Minus, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx83("span", { className: "min-w-10 px-2 text-center text-sm font-black text-slate-950", children: item.quantity }),
        /* @__PURE__ */ jsx83(
          "button",
          {
            type: "button",
            onClick: () => submitQuantity(item.quantity + 1),
            disabled: isSubmitting,
            className: "grid h-9 w-9 place-items-center rounded-full border border-transparent text-slate-600 transition hover:border-slate-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",
            "aria-label": `Increase quantity for ${product.name}`,
            children: /* @__PURE__ */ jsx83(Plus, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs70(
        "button",
        {
          type: "button",
          onClick: () => submitQuantity(0),
          disabled: isSubmitting,
          className: "inline-flex items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-700 transition hover:-translate-y-0.5 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50",
          children: [
            /* @__PURE__ */ jsx83(Trash2, { className: "h-4 w-4" }),
            "Remove"
          ]
        }
      )
    ] })
  ] });
}
function CartSkeleton() {
  return /* @__PURE__ */ jsx83("div", { className: "space-y-4", children: Array.from({ length: 3 }).map((_, index) => /* @__PURE__ */ jsxs70("div", { className: "animate-pulse grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr_auto] sm:p-5", children: [
    /* @__PURE__ */ jsx83("div", { className: "aspect-square rounded-2xl bg-slate-200" }),
    /* @__PURE__ */ jsxs70("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx83("div", { className: "h-5 w-2/3 rounded-full bg-slate-200" }),
      /* @__PURE__ */ jsx83("div", { className: "h-4 w-full rounded-full bg-slate-200" }),
      /* @__PURE__ */ jsx83("div", { className: "h-4 w-4/5 rounded-full bg-slate-200" })
    ] }),
    /* @__PURE__ */ jsxs70("div", { className: "space-y-3 sm:items-end", children: [
      /* @__PURE__ */ jsx83("div", { className: "h-11 w-32 rounded-full bg-slate-200" }),
      /* @__PURE__ */ jsx83("div", { className: "h-10 w-28 rounded-full bg-slate-200" })
    ] })
  ] }, index)) });
}
function MarketplaceCart() {
  let { cart, cartError } = useLoaderData20(), isLoading = useNavigation7().state === "loading", cartItems = cart?.cart_items ?? [], itemCount = cartItems.reduce((total, item) => total + item.quantity, 0), distinctItems = cartItems.length, minimumTotal = cart?.minimum_total_amount ?? 0, maximumTotal = cart?.maximum_total_amount ?? 0, currency = cart?.currency ?? "NGN";
  return /* @__PURE__ */ jsxs70("main", { className: "w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxs70("section", { className: "rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10", children: [
      /* @__PURE__ */ jsxs70("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", children: [
        /* @__PURE__ */ jsxs70("div", { className: "max-w-3xl space-y-4", children: [
          /* @__PURE__ */ jsxs70(
            Link14,
            {
              to: "/marketplace",
              className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white",
              children: [
                /* @__PURE__ */ jsx83(ArrowLeft, { className: "h-4 w-4" }),
                "Back to marketplace"
              ]
            }
          ),
          /* @__PURE__ */ jsxs70("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx83("div", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500", children: "Cart" }),
            /* @__PURE__ */ jsx83("h1", { className: "text-4xl font-black leading-tight text-slate-950 sm:text-5xl", children: "Review items and adjust quantities before checkout." }),
            /* @__PURE__ */ jsx83("p", { className: "max-w-2xl text-base leading-7 text-slate-600 sm:text-lg", children: "This cart stays guest-friendly and can be updated from the marketplace or directly here." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs70("div", { className: "grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3", children: [
          /* @__PURE__ */ jsxs70("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ jsx83("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Items" }),
            /* @__PURE__ */ jsx83("div", { className: "mt-2 text-3xl font-black text-slate-950", children: itemCount })
          ] }),
          /* @__PURE__ */ jsxs70("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ jsx83("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Products" }),
            /* @__PURE__ */ jsx83("div", { className: "mt-2 text-3xl font-black text-slate-950", children: distinctItems })
          ] }),
          /* @__PURE__ */ jsxs70("div", { className: "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5", children: [
            /* @__PURE__ */ jsx83("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Total" }),
            /* @__PURE__ */ jsx83("div", { className: "mt-2 text-2xl font-black text-slate-950", children: minimumTotal || maximumTotal ? `${formatMoney(currency, minimumTotal)}${maximumTotal !== minimumTotal ? ` - ${formatMoney(currency, maximumTotal)}` : ""}` : `${currency} 0` })
          ] })
        ] })
      ] }),
      cartError ? /* @__PURE__ */ jsx83("div", { className: "mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: cartError }) : null
    ] }),
    /* @__PURE__ */ jsxs70("section", { className: "mt-6", children: [
      /* @__PURE__ */ jsxs70("div", { className: "mb-4 flex items-end justify-between gap-3", children: [
        /* @__PURE__ */ jsxs70("div", { children: [
          /* @__PURE__ */ jsx83("h2", { className: "text-2xl font-black text-slate-950", children: "Your cart" }),
          /* @__PURE__ */ jsx83("p", { className: "text-sm text-slate-500", children: cartItems.length > 0 ? `${cartItems.length} line item${cartItems.length === 1 ? "" : "s"}` : "No items in cart yet" })
        ] }),
        /* @__PURE__ */ jsx83(Link14, { to: "/marketplace", className: "text-sm font-bold text-accent", children: "Continue shopping" })
      ] }),
      isLoading ? /* @__PURE__ */ jsx83(CartSkeleton, {}) : cartItems.length > 0 ? /* @__PURE__ */ jsx83("div", { className: "space-y-4", children: cartItems.map((item) => /* @__PURE__ */ jsx83(CartLineItem, { item }, `${item.product_id}-${item.product_location_id ?? "default"}`)) }) : /* @__PURE__ */ jsxs70("div", { className: "rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm", children: [
        /* @__PURE__ */ jsx83(ShoppingCart2, { className: "mx-auto h-10 w-10 text-slate-300" }),
        /* @__PURE__ */ jsx83("h3", { className: "mt-4 text-xl font-black text-slate-950", children: "Your cart is empty" }),
        /* @__PURE__ */ jsx83("p", { className: "mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500", children: "Add products from the marketplace and they will appear here." }),
        /* @__PURE__ */ jsx83(
          Link14,
          {
            to: "/marketplace",
            className: "mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800",
            children: "Browse products"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx83("section", { className: "mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm", children: /* @__PURE__ */ jsxs70("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs70("div", { children: [
        /* @__PURE__ */ jsx83("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: "Checkout" }),
        /* @__PURE__ */ jsx83("p", { className: "mt-2 text-sm leading-6 text-slate-600", children: "Checkout is intentionally stubbed for now and will be wired up later." })
      ] }),
      /* @__PURE__ */ jsx83(
        "button",
        {
          type: "button",
          disabled: !0,
          className: "inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-400",
          children: "Checkout coming soon"
        }
      )
    ] }) })
  ] });
}

// app/routes/_public.winner.$winnerId.tsx
var public_winner_winnerId_exports = {};
__export(public_winner_winnerId_exports, {
  default: () => WinnerDetailsPage,
  loader: () => loader23
});
import { useLoaderData as useLoaderData21 } from "@remix-run/react";
import { jsx as jsx84, jsxs as jsxs71 } from "react/jsx-runtime";
async function loader23({ params }) {
  let winnerId = params.winnerId, { data: winner, error } = await contestRepo.getWinnerById(winnerId);
  return { winner, error };
}
function WinnerDetailsPage() {
  let { winner, error } = useLoaderData21(), description = `We Are Thrilled To Announce The Triumphant Winner Of Our Recent '${winner?.contest_name}'! Let's Take A Moment To Applaud The Outstanding Creativity And Talent That Graced Our Contest.`;
  return /* @__PURE__ */ jsx84("div", { className: "min-h-screen bg-[#EFEFFF] flex items-center justify-center p-4 sm:p-6 lg:p-8", children: /* @__PURE__ */ jsx84("div", { className: "max-w-6xl mx-auto bg-transparent", children: /* @__PURE__ */ jsxs71("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16", children: [
    /* @__PURE__ */ jsx84("div", { className: "w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-xl order-2 md:order-1", children: /* @__PURE__ */ jsx84(
      "img",
      {
        src: winner?.image_url,
        alt: winner?.full_name,
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs71("div", { className: "space-y-4 md:space-y-6 order-1 md:order-2", children: [
      /* @__PURE__ */ jsxs71("h1", { className: "text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#5B50FB] leading-tight", children: [
        winner?.contest_name,
        " Winner"
      ] }),
      /* @__PURE__ */ jsx84("p", { className: "text-base sm:text-lg text-gray-700 leading-relaxed", children: description }),
      /* @__PURE__ */ jsxs71("p", { className: "text-lg sm:text-xl font-bold text-gray-900", children: [
        "Grand Winner:",
        " ",
        /* @__PURE__ */ jsx84("span", { className: "text-gray-900", children: winner?.full_name }),
        " (",
        winner?.contest_name,
        ")"
      ] }),
      /* @__PURE__ */ jsxs71("p", { className: "text-sm italic text-gray-600 pt-2", children: [
        `Winner's Note: "`,
        winner?.remark,
        '"'
      ] })
    ] })
  ] }) }) });
}

// app/routes/admin.tournaments._index.tsx
var admin_tournaments_index_exports = {};
__export(admin_tournaments_index_exports, {
  action: () => action16,
  default: () => Tournaments,
  loader: () => loader24
});
import { json as json24, redirect as redirect20 } from "@remix-run/node";
import { useLoaderData as useLoaderData22 } from "@remix-run/react";

// app/components/admin/tournament/TournamentCard.tsx
import { Link as Link15 } from "@remix-run/react";

// app/components/admin/tournament/DeleteTournamentDialog.tsx
import { useFetcher as useFetcher13 } from "@remix-run/react";
import { jsx as jsx85, jsxs as jsxs72 } from "react/jsx-runtime";
function DeleteTournamentDialog({ tournament, disabled }) {
  let fetcher = useFetcher13();
  return /* @__PURE__ */ jsxs72(Dialog, { children: [
    /* @__PURE__ */ jsx85(
      DialogTrigger,
      {
        disabled,
        title: "Delete tournament",
        className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium",
        children: "Delete Tournament"
      }
    ),
    /* @__PURE__ */ jsxs72(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ jsxs72(DialogHeader, { children: [
        /* @__PURE__ */ jsxs72(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ jsx85("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsx85(Svg, { src: icons.questionIcon }) }),
          /* @__PURE__ */ jsxs72("p", { children: [
            /* @__PURE__ */ jsx85("span", { className: "block", children: "Delete tournament" }),
            /* @__PURE__ */ jsx85("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the deletion of this tournament" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs72(DialogDescription, { className: "border-y p-4", children: [
          /* @__PURE__ */ jsxs72("span", { className: "text-primary mb-2 block", children: [
            "Are you sure you want to delete ",
            tournament.name,
            " tournament?"
          ] }),
          /* @__PURE__ */ jsx85("span", { className: "text-admin-pry", children: "This action is irreversible and will permanently delete this tournament." })
        ] })
      ] }),
      /* @__PURE__ */ jsx85(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ jsxs72(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ jsx85("input", { type: "hidden", name: "tournamentId", value: tournament._id }),
        /* @__PURE__ */ jsx85(DialogClose, { type: "submit", name: "intent", value: "delete", className: "bg-red-500 px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" })
      ] }) })
    ] })
  ] });
}

// app/components/reusables/LayeredImages.tsx
import { jsx as jsx86, jsxs as jsxs73 } from "react/jsx-runtime";
function LayeredImages({ images, length = 5 }) {
  let remaining = images.length - length, lastLayer = remaining > 0 ? /* @__PURE__ */ jsxs73("div", { className: "w-8 aspect-square inline-flex justify-center items-center -ml-2 rounded-full ring-2 ring-white bg-tertiary text-accent font-semibold text-sm", children: [
    "+",
    remaining
  ] }) : null;
  return /* @__PURE__ */ jsxs73("div", { children: [
    images.slice(0, length).map((image, index) => typeof image == "string" ? /* @__PURE__ */ jsx86("img", { src: image || no_image_default, alt: "people smiling", className: "w-8 aspect-square inline-block -ml-2 first:ml-0 rounded-full object-cover ring-2 ring-white" }, index) : /* @__PURE__ */ jsx86("img", { src: image?.image || no_image_default, alt: "people smiling", className: "w-8 aspect-square inline-block -ml-2 first:ml-0 rounded-full object-cover ring-2 ring-white" }, index)),
    lastLayer
  ] });
}

// app/components/admin/tournament/TournamentCard.tsx
import { jsx as jsx87, jsxs as jsxs74 } from "react/jsx-runtime";
function TournamentCard({ tournament, className }) {
  let mainComponent = /* @__PURE__ */ jsx87(RoundCta_default, { icon: icons.optionsIcon, className: "border-transparent hover:border-disabled" });
  return /* @__PURE__ */ jsxs74("aside", { className: cn("p-6 border border-disabled rounded-xl bg-white shadow overflow-hidden", className), children: [
    /* @__PURE__ */ jsxs74("div", { className: "flex gap-3 items-start justify-between max-xs:flex-wrap", children: [
      /* @__PURE__ */ jsx87("img", { src: tournament.image || no_image_default, alt: "children smiling", className: "w-24 aspect-square rounded-md object-cover" }),
      /* @__PURE__ */ jsxs74("div", { className: "self-center grow max-xs:order-1", children: [
        /* @__PURE__ */ jsx87("h3", { className: "text-primary font-satoshi-black uppercase line-clamp-1", children: tournament.name }),
        /* @__PURE__ */ jsx87("p", { className: "font-medium text-xs line-clamp-2", children: tournament.description })
      ] }),
      /* @__PURE__ */ jsxs74(
        Toggletip,
        {
          mainComponent,
          childContainerClass: "top-[110%] right-0 bg-tertiary p-2 border border-disabled text-xs whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsx87(
              Link15,
              {
                to: `/admin/tournaments/${tournament.id}/edit`,
                className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium",
                children: "Edit Tournament"
              }
            ),
            /* @__PURE__ */ jsx87(DeleteTournamentDialog, { tournament })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx87("hr", { className: "mt-4 mb-1" }),
    /* @__PURE__ */ jsxs74("span", { className: "text-primary text-sm font-satoshi-bold mb-3", children: [
      tournament.contests.length,
      " contests created"
    ] }),
    /* @__PURE__ */ jsxs74("div", { className: "grid gap-2 xs:flex justify-between items-center", children: [
      /* @__PURE__ */ jsx87(LayeredImages, { images: tournament.contests }),
      /* @__PURE__ */ jsxs74(Link15, { to: `/admin/tournaments/${tournament.id}`, className: "flex gap-2 items-center font-semibold hover:text-accent", children: [
        "View Contests ",
        /* @__PURE__ */ jsx87(Svg, { src: icons.arrowNextIcon })
      ] })
    ] })
  ] });
}

// app/routes/admin.tournaments._index.tsx
import { jsx as jsx88, jsxs as jsxs75 } from "react/jsx-runtime";
async function loader24({}) {
  let { data: tournaments, error } = await tournamentRepo.getTournaments();
  if (error)
    throw new Error(error.detail);
  return json24({ tournaments });
}
async function action16({ request }) {
  let formData = await request.formData(), intent = formData.get("intent"), cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect20("/login");
  if (intent === "delete") {
    let tournamentId = formData.get("tournamentId"), { data, error } = await tournamentRepo.deleteTournament(tournamentId, cookieHeader);
    if (error) {
      let { headers: headers2 } = await setToast({ request, toast: `error::Could not delete the tournament::${Date.now()}` });
      return json24(error, { headers: headers2 });
    }
    let { headers } = await setToast({ request, toast: `success::The tournament has been deleted::${Date.now()}` });
    return json24(data, { headers });
  }
  return json24(null);
}
function Tournaments() {
  let { tournaments } = useLoaderData22(), numberOfContests = tournaments.reduce((total, tournament) => total + tournament.contests.length, 0);
  return /* @__PURE__ */ jsxs75("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs75("section", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ jsx88("h1", { className: "text-2xl font-black text-primary", children: "Tournaments" }),
      /* @__PURE__ */ jsxs75(Cta_default, { element: "link", to: "add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsx88(Svg, { src: icons.addIcon, width: ".9em" }),
        "Create Tournament"
      ] })
    ] }),
    /* @__PURE__ */ jsxs75("aside", { className: "sm:flex justify-evenly max-w-xl mx-auto gap-2 p-3 border rounded-md my-4 bg-[#F6F8FA] text-sm", children: [
      /* @__PURE__ */ jsxs75("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ jsx88("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsx88(Svg, { src: icons.adminTournamentIcon, className: "text-primary" }) }),
        /* @__PURE__ */ jsxs75("span", { className: "grid", children: [
          /* @__PURE__ */ jsx88("span", { className: "text-primary font-satoshi-black", children: tournaments.length }),
          /* @__PURE__ */ jsx88("span", { className: "", children: "Tournaments Created" })
        ] })
      ] }),
      /* @__PURE__ */ jsx88("div", { className: "max-sm:my-2 max-sm:border-t sm:border-r sm:h-10" }),
      /* @__PURE__ */ jsxs75("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ jsx88("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsx88(Svg, { src: icons.adminContestIcon, className: "text-primary" }) }),
        /* @__PURE__ */ jsxs75("span", { className: "grid", children: [
          /* @__PURE__ */ jsx88("span", { className: "text-primary font-satoshi-black", children: numberOfContests }),
          /* @__PURE__ */ jsx88("span", { className: "", children: "Contests Created" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs75(Cta_default, { element: "link", to: "add", className: "flex sm:hidden gap-2 justify-center items-center rounded-lg px-3 py-2", children: [
      /* @__PURE__ */ jsx88(Svg, { src: icons.addIcon, width: ".9em" }),
      "Create Tournament"
    ] }),
    /* @__PURE__ */ jsx88("section", { className: "my-8 grid sm:grid-cols-2 gap-6", children: tournaments.map((tournament) => /* @__PURE__ */ jsx88(TournamentCard, { tournament }, tournament.id)) })
  ] });
}

// app/routes/_public.contests._index.tsx
var public_contests_index_exports = {};
__export(public_contests_index_exports, {
  default: () => Contests,
  loader: () => loader25
});
import { json as json25 } from "@remix-run/node";
import { useLoaderData as useLoaderData23 } from "@remix-run/react";
import { jsx as jsx89, jsxs as jsxs76 } from "react/jsx-runtime";
async function loader25() {
  let { data: tournaments, error } = await tournamentRepo.getTournaments();
  if (error)
    throw new Error(error.detail);
  return json25({ tournaments });
}
function Contests() {
  let { tournaments } = useLoaderData23();
  return /* @__PURE__ */ jsxs76("main", { className: "grow", children: [
    /* @__PURE__ */ jsx89("header", { className: "wrapper my-16", children: /* @__PURE__ */ jsx89("h1", { className: "text-2xl lg:text-4xl font-satoshi-medium max-w-3xl", children: "From Artistic Marvels to Captivating Moments. Unleash Your Talent and Win Big in Our Monthly and Yearly Contests!" }) }),
    /* @__PURE__ */ jsx89("section", { className: "wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center", children: tournaments.map((tournament) => /* @__PURE__ */ jsx89(ContestCard, { contest: tournament, to: `/contests/${tournament.id}` }, tournament.id)) })
  ] });
}

// app/routes/admin.accounts.allusers.tsx
var admin_accounts_allusers_exports = {};
__export(admin_accounts_allusers_exports, {
  default: () => Accounts,
  loader: () => loader26
});
import { json as json26, redirect as redirect21 } from "@remix-run/node";
import { useLoaderData as useLoaderData24, Form as Form17, useNavigation as useNavigation8 } from "@remix-run/react";

// app/components/reusables/ToggleBtn.tsx
import cn8 from "classnames";
import { jsx as jsx90 } from "react/jsx-runtime";
function ToggleBtn({ onClick, on }) {
  return /* @__PURE__ */ jsx90("button", { onClick, className: cn8("rounded-xl p-0.5 w-[34px] flex items-center", {
    "bg-accent justify-end": on,
    "bg-[#DAE0E6]": !on
  }), children: /* @__PURE__ */ jsx90("div", { className: "bg-secondary w-4 h-4 rounded-full" }) });
}

// app/components/admin/accounts/AdminUserCard.tsx
import { jsx as jsx91, jsxs as jsxs77 } from "react/jsx-runtime";
function AdminUserCard({ user, className }) {
  let mainComponent = /* @__PURE__ */ jsx91("span", { className: "", children: /* @__PURE__ */ jsx91(Svg, { src: icons.optionsIcon }) });
  return /* @__PURE__ */ jsxs77("article", { className: cn("border rounded-lg shadow-sm p-3 text-xs font-satoshi-medium", className), children: [
    /* @__PURE__ */ jsxs77("div", { className: "flex gap-4 mb-3", children: [
      /* @__PURE__ */ jsxs77("p", { children: [
        /* @__PURE__ */ jsx91("span", { children: user.roles?.join(", ") }),
        " | ",
        /* @__PURE__ */ jsx91("span", { children: user.username })
      ] }),
      /* @__PURE__ */ jsxs77(
        Toggletip,
        {
          mainComponent,
          mainContainerClass: "ml-auto",
          childContainerClass: "top-[110%] right-0 bg-tertiary p-3 border border-disabled text-xs flex gap-4",
          children: [
            /* @__PURE__ */ jsx91(RoundCta_default, { icon: icons.editIcon, element: "link", to: `/admin/accounts/${user._id}`, className: "border-[#262626] bg-[#F7F7F8] text-primary" }),
            /* @__PURE__ */ jsx91(RoundCta_default, { icon: icons.trashIcon, className: "border-red-500 bg-red-50 text-red-500" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs77("div", { className: "flex gap-4 justify-between", children: [
      /* @__PURE__ */ jsxs77("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ jsx91("span", { className: "p-1.5 border border-disabled rounded-full", children: /* @__PURE__ */ jsx91("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }) }),
        /* @__PURE__ */ jsxs77("span", { className: "grid", children: [
          /* @__PURE__ */ jsx91("span", { className: "text-primary line-clamp-1", children: user.full_name }),
          /* @__PURE__ */ jsx91("span", { className: "line-clamp-1", children: user.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxs77("span", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ jsx91("span", { className: "max-xs:hidden", children: user.is_active ? "Enabled" : "Disabled" }),
        /* @__PURE__ */ jsx91(ToggleBtn, { on: user.is_active })
      ] })
    ] })
  ] });
}

// app/lib/data/admin.ts
var role3 = ["edit_blog"], role2 = [...role3, "edit_content"], role1 = [...role2, "manage_users"], adminUsers = [
  {
    id: "69349d2351f327ce4e90de6d",
    _id: "69349d2351f327ce4e90de6d",
    full_name: "Admin",
    email: "admin@gmail.com",
    username: "admin",
    role: "Role 1",
    access: !0,
    password: "a12345A!",
    permissions: role1,
    roles: role1
  },
  {
    id: "abcde",
    _id: "2",
    full_name: "Nicole Clems",
    email: "nicole@gmail.com",
    username: "nicole",
    role: "Role 2",
    access: !1,
    password: "a12345A!",
    permissions: role2,
    roles: role1
  },
  {
    id: "abcde",
    _id: "3",
    full_name: "Favour Wagor",
    email: "favour@gmail.com",
    username: "favour",
    role: "Role 2",
    access: !0,
    password: "a12345A!",
    permissions: role2,
    roles: role1
  },
  {
    id: "abcde",
    _id: "4",
    full_name: "Oluchi Chinedu",
    email: "chinedu@gmail.com",
    username: "Oluchi",
    role: "Role 3",
    access: !1,
    password: "a12345A!",
    permissions: role3,
    roles: role1
  },
  {
    id: "abcde",
    _id: "5",
    full_name: "Augustine Best",
    email: "lilklara@gmail.com",
    username: "lilklara",
    role: "Role 3",
    access: !0,
    password: "a12345A!",
    permissions: role3,
    roles: role1
  },
  {
    id: "69349d2351f327ce4e90de6d",
    _id: "69349d2351f327ce4e90de6d",
    full_name: "Davidking Blossom",
    email: "blossomdavid@gmail.com",
    username: "davidking",
    role: "Role 3",
    access: !1,
    password: "a12345A!",
    permissions: role3,
    roles: role1
  }
], permissions = ["manage_users", "edit_content", "edit_blog"];

// app/routes/admin.accounts.allusers.tsx
import { jsx as jsx92, jsxs as jsxs78 } from "react/jsx-runtime";
async function loader26({ request }) {
  let headings = ["full_name", "email", "username", "roles", "access"], cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect21("/login");
  let url = new URL(request.url), query = {};
  for (let [k, v] of url.searchParams.entries())
    query[k] = v;
  Object.keys(query).length;
  let pagedUsersRes = await adminRepo.queryUsers(cookieHeader, query);
  return pagedUsersRes.authRequired ? redirect21("/login") : json26({ headings, tableData: adminUsers, pagedUserData: pagedUsersRes.data, query });
}
function Accounts() {
  let { headings, tableData, pagedUserData, query } = useLoaderData24(), navigation = useNavigation8();
  return console.log(pagedUserData), /* @__PURE__ */ jsxs78("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs78("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ jsx92("h1", { className: "text-2xl font-black text-primary", children: "Admin Accounts" }),
      /* @__PURE__ */ jsxs78(Cta_default, { element: "link", to: "/admin/accounts/add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsx92(Svg, { src: icons.addIcon, width: ".9em" }),
        "Add User"
      ] })
    ] }),
    /* @__PURE__ */ jsxs78("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: [
      /* @__PURE__ */ jsx92("p", { className: "font-semibold", children: "Registered Admin Users" }),
      /* @__PURE__ */ jsxs78(Form17, { method: "get", className: "flex items-center gap-3", onSubmit: (e) => {
        try {
          let form = e.currentTarget, searchInput = form.elements.namedItem("searchUser"), hidden = form.elements.namedItem("wild_card");
          searchInput && hidden && (hidden.value = searchInput.value || "");
        } catch {
        }
      }, children: [
        /* @__PURE__ */ jsx92(FormControl, { as: "input", name: "searchUser", type: "search", placeholder: "Search user...", className: "text-sm xs:min-w-[280px]", defaultValue: query?.wild_card ?? "" }),
        /* @__PURE__ */ jsx92("input", { type: "hidden", name: "wild_card", defaultValue: query?.wild_card ?? "" }),
        /* @__PURE__ */ jsx92("button", { type: "submit", disabled: navigation.state === "submitting", className: "px-3 py-2 bg-[#312E81] text-white rounded-md text-sm", children: navigation.state === "submitting" ? "Searching..." : "Search" })
      ] }),
      /* @__PURE__ */ jsxs78(Cta_default, { element: "link", to: "add", className: "sm:hidden flex gap-2 items-center justify-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsx92(Svg, { src: icons.addIcon, width: ".9em" }),
        "Add User"
      ] })
    ] }),
    /* @__PURE__ */ jsxs78("div", { className: "sm:hidden grid gap-4 my-6", children: [
      pagedUserData?.items.map((user) => /* @__PURE__ */ jsx92(AdminUserCard, { user }, user._id)),
      /* @__PURE__ */ jsx92(Pagination, { lastKey: pagedUserData?.last_key_id, pageSize: pagedUserData?.items_per_page, firstKey: pagedUserData?.first_key_id })
    ] }),
    /* @__PURE__ */ jsx92("div", { className: "hidden sm:block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs78("table", { className: "w-full table-auto", children: [
      /* @__PURE__ */ jsx92("thead", { children: /* @__PURE__ */ jsxs78("tr", { className: "border-b border-secondary", children: [
        headings.map((heading) => /* @__PURE__ */ jsx92("th", { className: "text-left capitalize font-satoshi-black p-3", children: heading }, heading)),
        /* @__PURE__ */ jsx92("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx92("tbody", { children: pagedUserData?.items.map((user, index) => /* @__PURE__ */ jsxs78("tr", { className: "border-b border-secondary", children: [
        headings.map((heading) => heading === "access" ? /* @__PURE__ */ jsx92("td", { className: "p-3", children: /* @__PURE__ */ jsxs78("span", { className: "grid grid-cols-[76px_36px] items-center w-min", children: [
          user.is_active ? "Enabled" : "Disabled",
          /* @__PURE__ */ jsx92(ToggleBtn, { on: user.is_active })
        ] }) }, heading) : /* @__PURE__ */ jsx92("td", { className: "p-3", children: Array.isArray(user[heading]) ? user[heading].join(", ") : user[heading] }, heading)),
        /* @__PURE__ */ jsx92("td", { className: "p-3", children: /* @__PURE__ */ jsxs78("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ jsx92(RoundCta_default, { icon: icons.editIcon, element: "link", to: user._id, className: "border-[#262626] bg-[#F7F7F8] text-primary" }),
          /* @__PURE__ */ jsx92(RoundCta_default, { icon: icons.trashIcon, className: "border-red-500 bg-red-50 text-red-500" })
        ] }) })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx92("div", { className: "hidden sm:flex justify-between items-center my-4", children: /* @__PURE__ */ jsx92(Pagination, { lastKey: pagedUserData?.last_key_id, pageSize: pagedUserData?.items_per_page, firstKey: pagedUserData?.first_key_id }) })
  ] });
}

// app/routes/user.withdraw.$walletid.tsx
var user_withdraw_walletid_exports = {};
__export(user_withdraw_walletid_exports, {
  action: () => action17,
  default: () => AddWithdrawalAccountPage2,
  loader: () => loader27,
  useAddWithdrawalAccountPage: () => useAddWithdrawalAccountPage2
});
import { redirect as redirect22 } from "@remix-run/node";
import { Form as Form18, useNavigate as useNavigate15, useNavigation as useNavigation9 } from "@remix-run/react";
import { useMemo as useMemo4, useRef as useRef8, useState as useState30 } from "react";
import { useLoaderData as useLoaderData25, useActionData as useActionData7 } from "@remix-run/react";
import { json as json27 } from "@remix-run/node";
import { useEffect as useEffect20 } from "react";
import { jsx as jsx93, jsxs as jsxs79 } from "react/jsx-runtime";
async function loader27({ request, params }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  console.log({ cookieHeader }), cookieHeader || redirect22("/login");
  let walletid = params.walletid;
  if (!walletid)
    return redirect22("/user/wallet");
  let [wallet, withdrawalAccounts] = await Promise.all([walletRepo.getUserWalletById(walletid, cookieHeader), walletRepo.getWalletWithdrawalAccounts(walletid, cookieHeader)]);
  if (wallet.authRequired && redirect22("/login"), !wallet.data)
    return redirect22("/user/wallet");
  let walletAccount = wallet.data, walletCurrencyBanksResponse = await walletRepo.getBanksForCurrency(walletAccount.wallet_currency, cookieHeader);
  return console.log("User wallets", { walletAccount, walletCurrencyBanks: walletCurrencyBanksResponse }), { error: wallet.error, walletAccount, walletCurrencyBanks: walletCurrencyBanksResponse.data, withdrawalAccounts: withdrawalAccounts.data, authRequired: wallet.authRequired };
}
async function action17({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "", formData = await request.formData(), intent = formData.get("intent");
  switch (intent) {
    case "getCharge":
      console.log("getCharge", formData.get("bank"));
      var chargeDTO = {
        wallet_id: formData.get("wallet_id"),
        withdrawal_account_id: formData.get("withdrawal_account_id"),
        amount: parseFloat(formData.get("amount")),
        withdrawal_pin: "",
        accepted_charges: 1
      }, withdrawalChargesResponse = await walletRepo.getWithdrawalCharges(chargeDTO, cookieHeader);
      return json27({ ...withdrawalChargesResponse, intent });
    case "requestWithdrawal":
      var withdrawalDTO = {
        wallet_id: formData.get("wallet_id"),
        amount: parseFloat(formData.get("amount")),
        withdrawal_account_id: formData.get("withdrawal_account_id"),
        withdrawal_pin: formData.get("withdrawal_pin"),
        narration: formData.get("narration") || "Withdrawal",
        accepted_charges: 1
      }, withdrawalResponse = await walletRepo.requestWithdrawal(withdrawalDTO, cookieHeader);
      return json27({ ...withdrawalResponse, intent });
  }
  return json27({ success: !0 });
}
function useAddWithdrawalAccountPage2() {
  let navigate = useNavigate15(), { error, walletAccount, walletCurrencyBanks, withdrawalAccounts, authRequired } = useLoaderData25(), { toast: toast5 } = useToast(), actionData = useActionData7(), [banks, setBanks] = useState30([]), [wallet, setWallet] = useState30(), [accountDetails, setAccountDetails] = useState30(null), [withdrawalCharges, setWithdrawalCharges] = useState30(null);
  return useEffect20(() => {
    error && toast5({
      variant: "destructive",
      title: "An error occured",
      description: error?.detail.toString() ?? "Error occured"
    });
  }, [error]), useEffect20(() => {
    if (actionData?.intent === "getCharge" && actionData?.data && setWithdrawalCharges(actionData.data), actionData?.intent === "addAccountDetails" && actionData?.data) {
      toast5({ title: "Success", description: "Recipient added successfully." }), navigate("/user/wallet");
      return;
    }
    if (actionData?.intent === "requestWithdrawal" && actionData?.data) {
      let responseData = actionData.data;
      toast5({ title: "Success", description: `${responseData.message}. Ref: ${responseData.reference}` }), navigate("/user/wallet");
    }
    actionData?.success && toast5({ title: "Success", description: "Recipient added successfully." }), actionData?.error && toast5({
      variant: "destructive",
      title: "An error occured",
      description: actionData?.error?.detail.toString() ?? "Error occured"
    });
  }, [actionData, actionData?.data]), useEffect20(() => {
    walletCurrencyBanks && setBanks(walletCurrencyBanks), walletAccount && setWallet(walletAccount);
  }, [walletAccount, walletCurrencyBanks]), { banks, wallet, accountDetails, withdrawalAccounts, setAccountDetails, withdrawalCharges, setWithdrawalCharges };
}
function AddWithdrawalAccountPage2() {
  let { banks, wallet, accountDetails, withdrawalAccounts, setAccountDetails, withdrawalCharges, setWithdrawalCharges } = useAddWithdrawalAccountPage2(), isSubmitting = useNavigation9().state === "submitting", [searchTerm, setSearchTerm] = useState30(""), [isOpen, setIsOpen] = useState30(!1), [selectedBank, setSelectedBank] = useState30(null), [withdrawalAccount, setWithdrawalAccount] = useState30(null), [amount, setAmount] = useState30(0), dropdownRef = useRef8(null), filteredBanks = useMemo4(() => banks.filter(
    (bank) => bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), [banks, searchTerm]);
  useEffect20(() => {
    let handleClickOutside = (event) => {
      dropdownRef.current && !dropdownRef.current.contains(event.target) && setIsOpen(!1);
    };
    return document.addEventListener("mousedown", handleClickOutside), () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  let inputClasses = `
    w-full h-14 px-5 
    bg-white border border-gray-200 
    rounded-2xl text-gray-900 text-base
    outline-none transition-all duration-200
    hover:border-gray-400
    focus:border-slate-800 focus:ring-1 focus:ring-slate-800
  `;
  return /* @__PURE__ */ jsx93("div", { className: "min-h-screen bg-white flex flex-col items-center pt-16 px-4", children: /* @__PURE__ */ jsxs79("div", { className: "max-w-md w-full flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs79("div", { className: "flex flex-col items-center mb-10 text-center", children: [
      /* @__PURE__ */ jsx93("div", { className: "w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100", children: /* @__PURE__ */ jsx93("div", { className: "w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx93(Svg, { src: icons.avatarIcon, className: "w-6 h-6 text-white" }) }) }),
      /* @__PURE__ */ jsx93("h1", { className: "text-2xl font-bold text-gray-900", children: "Withdraw " }),
      /* @__PURE__ */ jsx93("p", { className: "text-gray-500 mt-1 text-sm", children: "Enter details below" })
    ] }),
    withdrawalCharges ? /* @__PURE__ */ jsxs79(Form18, { method: "POST", className: "w-full flex flex-col max-w-md mx-auto", children: [
      /* @__PURE__ */ jsxs79("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx93("label", { className: "text-sm font-medium text-gray-500 mb-2 block", children: "You withdraw exactly" }),
        /* @__PURE__ */ jsxs79("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx93("div", { className: "flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full", children: /* @__PURE__ */ jsx93("span", { className: "font-bold text-gray-900", children: wallet?.wallet_currency || "USD" }) }),
          /* @__PURE__ */ jsx93(
            "input",
            {
              id: "amount",
              name: "amount",
              type: "number",
              min: 100,
              placeholder: "Amount",
              value: amount,
              required: !0,
              readOnly: !0,
              className: "text-right text-4xl font-bold bg-transparent outline-none w-full text-gray-900"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs79("p", { className: "text-sm text-gray-400 mt-2", children: [
          "Bal: ",
          wallet?.withdrawable_balance.toLocaleString() || "0.00"
        ] })
      ] }),
      /* @__PURE__ */ jsxs79("div", { className: "bg-[#F8F9FB] rounded-3xl p-6 border border-gray-100 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxs79("div", { className: "flex justify-between items-center text-sm", children: [
          /* @__PURE__ */ jsx93("span", { className: "text-gray-500", children: "Processing Fee:" }),
          /* @__PURE__ */ jsxs79("span", { className: "font-medium text-gray-900", children: [
            "- ",
            wallet?.wallet_currency,
            " ",
            withdrawalCharges?.transaction_charge || "0.00"
          ] })
        ] }),
        /* @__PURE__ */ jsxs79("div", { className: "flex justify-between items-center text-sm", children: [
          /* @__PURE__ */ jsx93("span", { className: "text-gray-500", children: "Destination Account:" }),
          /* @__PURE__ */ jsx93("span", { className: "font-medium text-gray-900 text-right", children: withdrawalAccount?.bankname })
        ] }),
        /* @__PURE__ */ jsxs79("div", { className: "pt-3 mt-1 border-t border-gray-200 flex justify-between items-center", children: [
          /* @__PURE__ */ jsx93("span", { className: "text-sm text-gray-500 font-medium", children: "Total:" }),
          /* @__PURE__ */ jsxs79("span", { className: "text-lg font-bold text-gray-900", children: [
            wallet?.wallet_currency,
            " ",
            ((withdrawalCharges?.total_charge ?? 0) + amount).toLocaleString()
          ] })
        ] }),
        withdrawalCharges?.remark && /* @__PURE__ */ jsxs79("div", { className: "mt-2 bg-white/50 border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs79("div", { className: "flex items-center gap-2 text-xs text-gray-500", children: [
            /* @__PURE__ */ jsx93("span", { className: "opacity-60", children: "\u2139\uFE0F" }),
            /* @__PURE__ */ jsx93("span", { children: withdrawalCharges.remark })
          ] }),
          /* @__PURE__ */ jsx93(ChevronDownIcon3, {}),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs79("div", { className: "mt-8 mb-6", children: [
        /* @__PURE__ */ jsx93("label", { className: "text-sm font-medium text-gray-500 mb-2 block", children: "Recipient details" }),
        /* @__PURE__ */ jsx93("div", { className: "flex justify-between items-end", children: /* @__PURE__ */ jsxs79("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx93("span", { className: "text-lg font-bold text-gray-900 uppercase", children: withdrawalAccount?.name }),
          /* @__PURE__ */ jsx93("span", { className: "text-gray-500 text-sm", children: withdrawalAccount?.acct_number })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs79("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs79("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "Withdrawal PIN",
          /* @__PURE__ */ jsx93("span", { className: "ml-0.5 text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx93("div", { className: "relative", children: /* @__PURE__ */ jsx93(
          "input",
          {
            id: "withdrawal_pin",
            name: "withdrawal_pin",
            type: "password",
            maxLength: 6,
            minLength: 6,
            required: !0,
            className: `${inputClasses} text-center tracking-[1em] font-bold`
          }
        ) }),
        /* @__PURE__ */ jsxs79("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx93(
            Cta_default,
            {
              element: "button",
              type: "submit",
              disabled: isSubmitting,
              className: "w-full h-14 rounded-2xl bg-slate-900 hover:bg-black text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]",
              children: isSubmitting ? "Confirming..." : "Confirm Withdrawal"
            }
          ),
          /* @__PURE__ */ jsx93(
            "button",
            {
              type: "button",
              onClick: () => setWithdrawalCharges(null),
              className: "w-full h-14 rounded-2xl bg-white border border-gray-200 text-gray-500 font-medium hover:bg-gray-50 transition-colors",
              children: "Go back"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx93("input", { type: "hidden", name: "intent", value: "requestWithdrawal" }),
      /* @__PURE__ */ jsx93("input", { type: "hidden", name: "withdrawal_account_id", value: withdrawalAccount?._id || "" }),
      /* @__PURE__ */ jsx93("input", { type: "hidden", name: "wallet_id", value: `${wallet?._id}` })
    ] }) : /* @__PURE__ */ jsxs79(Form18, { method: "POST", className: "w-full flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs79("div", { className: "relative", ref: dropdownRef, children: [
        /* @__PURE__ */ jsxs79("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "Select beneficiary",
          /* @__PURE__ */ jsx93("span", { className: "ml-0.5 text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx93(
          "input",
          {
            type: "text",
            placeholder: "Select account to transfer to",
            className: inputClasses,
            value: isOpen ? searchTerm : withdrawalAccount ? `${withdrawalAccount?.name ?? ""} ${withdrawalAccount?.acct_number ?? ""} - ${withdrawalAccount?.bankname ?? ""}` : "Select Beneficiary",
            onChange: (e) => {
              setSearchTerm(e.target.value), isOpen || setIsOpen(!0);
            },
            onFocus: () => {
              setIsOpen(!0), setSearchTerm("");
            }
          }
        ),
        /* @__PURE__ */ jsx93("div", { className: "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400", children: /* @__PURE__ */ jsx93(ChevronDownIcon3, {}) }),
        isOpen && /* @__PURE__ */ jsx93("div", { className: "absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden", children: withdrawalAccounts ?? [].length > 0 ? (withdrawalAccounts ?? []).map((acct) => /* @__PURE__ */ jsxs79(
          "div",
          {
            className: "px-5 py-4 hover:bg-slate-50 cursor-pointer text-gray-900 border-b border-gray-50 last:border-none transition-colors",
            onClick: () => {
              setWithdrawalAccount(acct), setSearchTerm(`${withdrawalAccount?.name} ${withdrawalAccount?.acct_number} - ${withdrawalAccount?.bankname}`), setIsOpen(!1);
            },
            children: [
              acct.name ?? "",
              /* @__PURE__ */ jsx93("br", {}),
              acct.acct_number ?? "",
              " - ",
              acct.bankname ?? ""
            ]
          },
          acct._id
        )) : /* @__PURE__ */ jsx93("div", { className: "px-5 py-4 text-gray-400 italic", children: "No withdrawal account. Please add a withdrawal account to conitnue" }) })
      ] }),
      /* @__PURE__ */ jsx93("div", { className: "relative", children: /* @__PURE__ */ jsx93(
        "input",
        {
          id: "amount",
          name: "amount",
          type: "number",
          min: 100,
          placeholder: "Amount",
          required: !0,
          className: inputClasses,
          onChange: (e) => setAmount(parseFloat(e.target.value))
        }
      ) }),
      /* @__PURE__ */ jsx93("input", { type: "hidden", name: "intent", value: "getCharge" }),
      /* @__PURE__ */ jsx93("input", { type: "hidden", name: "withdrawal_account_id", value: withdrawalAccount?._id || "", required: !0 }),
      /* @__PURE__ */ jsx93("input", { type: "hidden", name: "wallet_id", value: `${wallet?._id}` }),
      /* @__PURE__ */ jsx93(
        Cta_default,
        {
          element: "button",
          type: "submit",
          disabled: isSubmitting,
          className: "mt-6 w-full h-14 rounded-2xl bg-slate-900 hover:bg-black text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]",
          children: isSubmitting ? "Continuing..." : "Continue"
        }
      )
    ] })
  ] }) });
}
var ChevronDownIcon3 = () => /* @__PURE__ */ jsx93("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx93("path", { d: "m6 9 6 6 6-6" }) });

// app/routes/_public.results._index.tsx
var public_results_index_exports = {};
__export(public_results_index_exports, {
  default: () => Results,
  loader: () => loader28
});
import { json as json28 } from "@remix-run/node";
import { useLoaderData as useLoaderData26 } from "@remix-run/react";

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
import { jsx as jsx94, jsxs as jsxs80 } from "react/jsx-runtime";
async function loader28() {
  let contests2 = await getContests({ where: { status: "completed" } });
  return json28({ contests: contests2 });
}
function Results() {
  let { contests: contests2 } = useLoaderData26();
  return /* @__PURE__ */ jsxs80("main", { className: "grow", children: [
    /* @__PURE__ */ jsx94("header", { className: "wrapper my-16", children: /* @__PURE__ */ jsx94("h1", { className: "text-accent text-2xl lg:text-4xl lg:leading-snug font-satoshi-bold max-w-3xl", children: "Congratulating the Extraordinary Talents That Stole the Spotlight!" }) }),
    /* @__PURE__ */ jsx94("section", { className: "wrapper", children: /* @__PURE__ */ jsxs80("div", { className: "p-2 rounded-full bg-secondary flex w-fit", children: [
      /* @__PURE__ */ jsx94("span", { className: "whitespace-nowrap text-xs sm:text-base p-3 sm:px-6 sm:py-4 rounded-full font-satoshi-medium bg-accent text-white", children: "All Contests" }),
      /* @__PURE__ */ jsx94("span", { className: "whitespace-nowrap text-xs sm:text-base p-3 sm:px-6 sm:py-4 rounded-full font-satoshi-medium", children: "Ongoing Contests" }),
      /* @__PURE__ */ jsx94("span", { className: "whitespace-nowrap text-xs sm:text-base p-3 sm:px-6 sm:py-4 rounded-full font-satoshi-medium", children: "Completed Contests" })
    ] }) }),
    /* @__PURE__ */ jsx94("section", { className: "wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center", children: contests2.map((contest) => /* @__PURE__ */ jsx94(ContestCard, { contest, to: `/results/${contest.id}`, withTag: !0, withCategory: !0 }, contest.id)) }),
    /* @__PURE__ */ jsx94("div", { className: "wrapper my-20 flex justify-center", children: /* @__PURE__ */ jsx94(Button, { element: "button", variant: "outline", children: "See more results" }) })
  ] });
}

// app/routes/admin.accounts.$userId.tsx
var admin_accounts_userId_exports = {};
__export(admin_accounts_userId_exports, {
  action: () => action18,
  default: () => EditAdminUser,
  loader: () => loader29
});
import { Form as Form19, useActionData as useActionData8, useLoaderData as useLoaderData27, useNavigate as useNavigate16, useNavigation as useNavigation10 } from "@remix-run/react";
import { redirect as redirect23 } from "@remix-run/node";

// app/components/admin/RolesFormControl.tsx
import { useRef as useRef9, useState as useState31 } from "react";
import cn9 from "classnames";
import { CounterClockwiseClockIcon as Restore } from "@radix-ui/react-icons";
import { jsx as jsx95, jsxs as jsxs81 } from "react/jsx-runtime";
function RolesFormControl({ roles, defaultRoles, ...props }) {
  let [open, setOpen] = useState31(!1), fieldset = useRef9(null);
  function resetFieldset(e) {
    e.currentTarget.form?.roles.forEach((item) => {
      item.checked = item.defaultChecked;
    });
  }
  function labelize(_role) {
    return _role.split("_").join(" ");
  }
  return /* @__PURE__ */ jsxs81("fieldset", { ref: fieldset, ...props, className: "p-2 sm:p-4 rounded-lg bg-transparent border hover:border-primary sm:col-span-2", children: [
    /* @__PURE__ */ jsxs81("div", { "data-open": open, className: "flex justify-between data-[open=true]:pb-2 sm:data-[open=true]:pb-3 data-[open=true]:border-b", children: [
      /* @__PURE__ */ jsxs81("span", { className: "flex gap-2 items-center font-bold cursor-pointer grow", onClick: () => setOpen((prev) => !prev), children: [
        /* @__PURE__ */ jsx95(Svg, { src: icons.arrowDownIcon, className: open ? "" : "-rotate-90" }),
        "Roles"
      ] }),
      /* @__PURE__ */ jsxs81(
        Cta_default,
        {
          element: "button",
          type: "button",
          variant: "outline",
          "aria-label": "restore defaults",
          className: "p-2 sm:px-8 sm:py-2 rounded-lg font-medium text-red-500 border-secondary active:border-red-300 sm:hover:border-red-300",
          onClick: resetFieldset,
          children: [
            /* @__PURE__ */ jsx95(Restore, { className: "text-inherit sm:hidden" }),
            /* @__PURE__ */ jsx95("span", { className: "hidden sm:inline", children: "Restore defaults" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx95("div", { className: cn9("grid sm:grid-cols-3 gap-6 mt-4 sm:mx-3", { hidden: !open }), children: roles.map((role) => /* @__PURE__ */ jsx95(
      FormControl,
      {
        as: "input",
        type: "checkbox",
        name: "role",
        value: role,
        className: "w-min",
        defaultChecked: defaultRoles?.includes(role),
        labelText: labelize(role),
        labelClassNames: "flex capitalize whitespace-nowrap items-center justify-between px-4"
      },
      role
    )) })
  ] });
}

// app/routes/admin.accounts.$userId.tsx
import { useEffect as useEffect21 } from "react";
import { jsx as jsx96, jsxs as jsxs82 } from "react/jsx-runtime";
async function loader29({ params, request }) {
  let cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader)
    return redirect23("/login");
  let rolesResponse = await adminRepo.getAllRoles(cookieHeader);
  if (rolesResponse.authRequired)
    return redirect23("/login");
  let userId = params.userId ?? "", user = await adminRepo.getAdminUser(cookieHeader, userId);
  if (!user || !user.data) {
    let { headers } = await setToast({ request, toast: `error::Admin user not found::${Date.now()}` });
    return redirect23("/admin/accounts", { headers });
  }
  return { permissions, user: user.data, roles: rolesResponse.data };
}
async function action18({ params, request }) {
  let cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader)
    return redirect23("/login");
  let formData = await request.formData(), userId = params.userId ?? "", dto = {
    fullName: `${formData.get("firstName")} ${formData.get("lastName")}`,
    email: formData.get("email"),
    // password:formData.get("password") as string,
    has_admin_access: formData.get("has_admin_access") == "1",
    is_superuser: !1,
    is_staff: formData.get("is_staff") == "1",
    is_active: formData.get("is_active") == "1",
    username: formData.get("username"),
    roles: formData.getAll("role") ?? []
  }, response = await adminRepo.updateAdminUser(cookieHeader, userId, dto);
  return console.log(...formData, dto), console.log(formData.getAll("permission")), response;
}
function EditAdminUser() {
  let { permissions: permissions2, user, roles } = useLoaderData27(), rolesNames = [];
  for (let roleName in roles ?? [])
    rolesNames.push(roleName);
  let navigate = useNavigate16(), actionData = useActionData8();
  useEffect21(() => {
    actionData?.error && (console.log(actionData.error), toast({
      variant: "destructive",
      title: "Create action failed",
      description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not update admin user!"
    })), actionData?.data && toast({
      variant: "default",
      title: "Create admin successful",
      description: "Admin account was successfully updated!"
    });
  }, [actionData]);
  let isSubmitting = useNavigation10().state === "submitting";
  return /* @__PURE__ */ jsxs82("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs82("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsx96(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }),
      /* @__PURE__ */ jsx96("h1", { className: "text-2xl font-black text-primary", children: "Edit User" })
    ] }),
    /* @__PURE__ */ jsxs82(Form19, { className: "sm:wrapper grid sm:grid-cols-2 gap-3 sm:gap-6 text-sm", method: "post", children: [
      /* @__PURE__ */ jsx96(FormControl, { as: "input", labelText: "First Name", className: "", placeholder: "Enter first name", id: "firstName", name: "firstName", defaultValue: user.full_name.split(" ")[0], required: !0 }),
      /* @__PURE__ */ jsx96(FormControl, { as: "input", labelText: "Last Name", className: "", placeholder: "Enter last name", id: "lastName", name: "lastName", defaultValue: user.full_name.split(" ")[1], required: !0 }),
      /* @__PURE__ */ jsx96(FormControl, { as: "input", labelText: "Email Address", className: "", placeholder: "Enter email address", id: "email", name: "email", defaultValue: user.email, required: !0 }),
      /* @__PURE__ */ jsx96(FormControl, { as: "input", labelText: "Username", className: "", placeholder: "Enter username", id: "username", name: "username", defaultValue: user.username, required: !0 }),
      /* @__PURE__ */ jsxs82(Select2, { label: "Assigned as Staff", id: "is_staff", name: "is_staff", defaultValue: user.is_staff ? "1" : "0", required: !0, children: [
        /* @__PURE__ */ jsx96("option", { value: "0", children: "False" }),
        /* @__PURE__ */ jsx96("option", { value: "1", children: "True" })
      ] }),
      /* @__PURE__ */ jsxs82(Select2, { label: "Set Active", id: "is_active", name: "is_active", defaultValue: user.is_active ? "1" : "0", required: !0, children: [
        /* @__PURE__ */ jsx96("option", { value: "0", children: "De-activate" }),
        /* @__PURE__ */ jsx96("option", { value: "1", children: "Activate" })
      ] }),
      /* @__PURE__ */ jsxs82(Select2, { label: "Has Admin Access", id: "has_admin_access", name: "has_admin_access", defaultValue: user.has_admin_access ? "1" : "0", required: !0, children: [
        /* @__PURE__ */ jsx96("option", { value: "0", children: "False" }),
        /* @__PURE__ */ jsx96("option", { value: "1", children: "True" })
      ] }),
      /* @__PURE__ */ jsx96(RolesFormControl, { roles: rolesNames, defaultRoles: user.roles }),
      /* @__PURE__ */ jsxs82("div", { className: "grid grid-cols-2 sm:flex justify-end gap-3 sm:gap-6 sm:col-span-2 mt-4", children: [
        /* @__PURE__ */ jsx96(Cta_default, { element: "button", type: "reset", className: "px-4 sm:px-8 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }),
        /* @__PURE__ */ jsx96(Cta_default, { disabled: isSubmitting, element: "button", type: "submit", className: "px-4 sm:px-8 py-2 rounded-lg font-medium", children: isSubmitting ? "Updating admin user" : "Update admin user" })
      ] })
    ] })
  ] });
}

// app/routes/admin.accounts._index.tsx
var admin_accounts_index_exports = {};
__export(admin_accounts_index_exports, {
  default: () => Accounts2,
  loader: () => loader30
});
import { json as json29, redirect as redirect24 } from "@remix-run/node";
import { useLoaderData as useLoaderData28, Form as Form20, useNavigation as useNavigation11 } from "@remix-run/react";
import { jsx as jsx97, jsxs as jsxs83 } from "react/jsx-runtime";
async function loader30({ request }) {
  let headings = ["full_name", "email", "username", "roles", "access"], cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect24("/login");
  let url = new URL(request.url), query = {};
  for (let [k, v] of url.searchParams.entries())
    query[k] = v;
  query.has_admin_access = "1";
  let pagedUsersRes = await adminRepo.queryUsers(cookieHeader, query);
  return pagedUsersRes.authRequired ? redirect24("/login") : json29({ headings, tableData: adminUsers, pagedUserData: pagedUsersRes.data, query });
}
function Accounts2() {
  let { headings, tableData, pagedUserData, query } = useLoaderData28(), navigation = useNavigation11();
  return console.log(pagedUserData), /* @__PURE__ */ jsxs83("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs83("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ jsx97("h1", { className: "text-2xl font-black text-primary", children: "Admin Accounts" }),
      /* @__PURE__ */ jsxs83(Cta_default, { element: "link", to: "add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsx97(Svg, { src: icons.addIcon, width: ".9em" }),
        "Add User"
      ] })
    ] }),
    /* @__PURE__ */ jsxs83("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: [
      /* @__PURE__ */ jsx97("p", { className: "font-semibold", children: "Registered Admin Users" }),
      /* @__PURE__ */ jsxs83(Form20, { method: "get", className: "flex items-center gap-3", onSubmit: (e) => {
        try {
          let form = e.currentTarget, searchInput = form.elements.namedItem("searchUser"), hidden = form.elements.namedItem("wild_card");
          searchInput && hidden && (hidden.value = searchInput.value || "");
        } catch {
        }
      }, children: [
        /* @__PURE__ */ jsx97(FormControl, { as: "input", name: "searchUser", type: "search", placeholder: "Search user...", className: "text-sm xs:min-w-[280px]", defaultValue: query?.wild_card ?? "" }),
        /* @__PURE__ */ jsx97("input", { type: "hidden", name: "wild_card", defaultValue: query?.wild_card ?? "" }),
        /* @__PURE__ */ jsx97("button", { type: "submit", disabled: navigation.state === "submitting", className: "px-3 py-2 bg-[#312E81] text-white rounded-md text-sm", children: navigation.state === "submitting" ? "Searching..." : "Search" })
      ] }),
      /* @__PURE__ */ jsxs83(Cta_default, { element: "link", to: "add", className: "sm:hidden flex gap-2 items-center justify-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsx97(Svg, { src: icons.addIcon, width: ".9em" }),
        "Add User"
      ] })
    ] }),
    /* @__PURE__ */ jsxs83("div", { className: "sm:hidden grid gap-4 my-6", children: [
      pagedUserData?.items.map((user) => /* @__PURE__ */ jsx97(AdminUserCard, { user }, user._id)),
      /* @__PURE__ */ jsx97(Pagination, { lastKey: pagedUserData?.last_key_id, pageSize: pagedUserData?.items_per_page, firstKey: pagedUserData?.first_key_id })
    ] }),
    /* @__PURE__ */ jsx97("div", { className: "hidden sm:block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs83("table", { className: "w-full table-auto", children: [
      /* @__PURE__ */ jsx97("thead", { children: /* @__PURE__ */ jsxs83("tr", { className: "border-b border-secondary", children: [
        headings.map((heading) => /* @__PURE__ */ jsx97("th", { className: "text-left capitalize font-satoshi-black p-3", children: heading }, heading)),
        /* @__PURE__ */ jsx97("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx97("tbody", { children: pagedUserData?.items.map((user, index) => /* @__PURE__ */ jsxs83("tr", { className: "border-b border-secondary", children: [
        headings.map((heading) => heading === "access" ? /* @__PURE__ */ jsx97("td", { className: "p-3", children: /* @__PURE__ */ jsxs83("span", { className: "grid grid-cols-[76px_36px] items-center w-min", children: [
          user.is_active ? "Enabled" : "Disabled",
          /* @__PURE__ */ jsx97(ToggleBtn, { on: user.is_active })
        ] }) }, heading) : /* @__PURE__ */ jsx97("td", { className: "p-3", children: Array.isArray(user[heading]) ? user[heading].join(", ") : user[heading] }, heading)),
        /* @__PURE__ */ jsx97("td", { className: "p-3", children: /* @__PURE__ */ jsxs83("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ jsx97(RoundCta_default, { icon: icons.editIcon, element: "link", to: user._id, className: "border-[#262626] bg-[#F7F7F8] text-primary" }),
          /* @__PURE__ */ jsx97(RoundCta_default, { icon: icons.trashIcon, className: "border-red-500 bg-red-50 text-red-500" })
        ] }) })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx97("div", { className: "hidden sm:flex justify-between items-center my-4", children: /* @__PURE__ */ jsx97(Pagination, { lastKey: pagedUserData?.last_key_id, pageSize: pagedUserData?.items_per_page, firstKey: pagedUserData?.first_key_id }) })
  ] });
}

// app/routes/admin.contests._index.tsx
var admin_contests_index_exports = {};
__export(admin_contests_index_exports, {
  action: () => action19,
  default: () => Contests2,
  loader: () => loader31
});
import { json as json30 } from "@remix-run/node";
import { useLoaderData as useLoaderData29 } from "@remix-run/react";
import { jsx as jsx98, jsxs as jsxs84 } from "react/jsx-runtime";
async function loader31({}) {
  let { data: contests2, error } = await contestRepo.getContests();
  if (error)
    throw new Error(error.detail);
  return json30({ contests: contests2 });
}
async function action19({ request }) {
  let formData = await request.formData(), intent = formData.get("intent");
  if (intent === "delete")
    return await deleteContest(formData, request);
  if (intent === "update_stage")
    return await updateStage(formData, request);
  if (intent === "toggle_stage_bonus")
    return await toggleEnableStageBonus(formData, request);
  if (intent === "toggle_registration")
    return await toggleRegistration(formData, request);
  if (intent === "migrate")
    return await migrateStage(formData, request);
  console.log(...formData);
  let { headers } = await setToast({ request, toast: `error::This action is not yet supported::${Date.now()}` });
  return json30(null, { headers });
}
function Contests2() {
  let { contests: contests2 } = useLoaderData29();
  return /* @__PURE__ */ jsxs84("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs84("section", { className: "flex max-sm:flex-col gap-10 justify-between sm:items-center mb-6 sm:mb-16", children: [
      /* @__PURE__ */ jsx98("h1", { className: "text-2xl font-black text-primary", children: "Contests" }),
      /* @__PURE__ */ jsxs84(Cta_default, { element: "link", to: "add", className: "flex gap-2 items-center justify-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsx98(Svg, { src: icons.addIcon, width: ".9em" }),
        "Create Contest"
      ] })
    ] }),
    /* @__PURE__ */ jsx98("section", { className: "my-6 sm:my-12", children: /* @__PURE__ */ jsx98(ContestTable, { data: contests2 }) })
  ] });
}

// app/routes/admin.partners._index.tsx
var admin_partners_index_exports = {};
__export(admin_partners_index_exports, {
  _PartnersIndex: () => _PartnersIndex,
  default: () => PartnersIndex,
  loader: () => loader32
});
import { json as json31 } from "@remix-run/node";
import { useLoaderData as useLoaderData30, useNavigation as useNavigation12, Form as Form21 } from "@remix-run/react";
import { useState as useState32 } from "react";
import { jsx as jsx99, jsxs as jsxs85 } from "react/jsx-runtime";
var statusColors2 = {
  Approved: "text-green-600 bg-green-50 border-green-200",
  Pending: "text-yellow-600 bg-yellow-50 border-yellow-200",
  Rejected: "text-red-600 bg-red-50 border-red-200"
};
async function loader32({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return json31({ redirect: "/login" }, { status: 302 });
  let url = new URL(request.url), query = {};
  for (let [k, v] of url.searchParams.entries())
    v && (query[k] = v);
  let partnersRes = await partnerServer.searchPartners(query, cookieHeader);
  return json31({ partnersRes: partnersRes.data ?? { items: [], items_per_page: 20 }, query });
}
function PartnersIndex() {
  let data = useLoaderData30(), navigation = useNavigation12(), [search, setSearch] = useState32(data.query?.legal_business_name || "");
  if ("redirect" in data && typeof window < "u")
    return window.location.href = data.redirect, null;
  let { partnersRes, query } = data;
  return /* @__PURE__ */ jsxs85("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsx99("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: /* @__PURE__ */ jsx99("h1", { className: "text-2xl font-black text-primary", children: "Partners" }) }),
    /* @__PURE__ */ jsx99("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ jsx99(Form21, { method: "get", className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ jsxs85("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ jsxs85("div", { children: [
        /* @__PURE__ */ jsx99("label", { className: "block text-xs font-semibold mb-1", children: "Business Name" }),
        /* @__PURE__ */ jsx99(
          "input",
          {
            type: "text",
            name: "legal_business_name",
            className: "w-full border rounded-lg px-3 py-2",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search by business name"
          }
        )
      ] }),
      /* @__PURE__ */ jsx99("div", { className: "sm:col-span-1 flex gap-2 mt-2 sm:mt-0", children: /* @__PURE__ */ jsx99("button", { type: "submit", className: "bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold", children: "Search" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx99("div", { className: "sm:hidden grid gap-4 my-6", children: partnersRes.items && partnersRes.items.length > 0 ? partnersRes.items.map((partner) => /* @__PURE__ */ jsxs85("div", { className: "rounded-xl border border-gray-100 bg-white shadow-sm p-4 flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxs85("div", { className: "flex justify-between items-center mb-1", children: [
        /* @__PURE__ */ jsx99("span", { className: "font-bold text-base text-primary", children: partner.legal_business_name }),
        /* @__PURE__ */ jsx99("span", { className: `inline-block px-2 py-1 rounded-lg border text-xs font-semibold ${statusColors2[partner.status] || "text-gray-600 bg-gray-100 border-gray-200"}`, children: partner.status })
      ] }),
      /* @__PURE__ */ jsx99("div", { className: "text-xs text-gray-500", children: partner.industry }),
      /* @__PURE__ */ jsxs85("div", { className: "flex flex-col gap-1 mt-2", children: [
        /* @__PURE__ */ jsxs85("div", { children: [
          /* @__PURE__ */ jsx99("span", { className: "font-semibold", children: "Country:" }),
          " ",
          partner.country_of_incorporation
        ] }),
        /* @__PURE__ */ jsxs85("div", { children: [
          /* @__PURE__ */ jsx99("span", { className: "font-semibold", children: "Phone:" }),
          " ",
          partner.phone_number
        ] }),
        /* @__PURE__ */ jsxs85("div", { children: [
          /* @__PURE__ */ jsx99("span", { className: "font-semibold", children: "Contact:" }),
          " ",
          partner.contact_person?.name,
          " (",
          partner.contact_person?.email,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsx99("div", { className: "flex gap-2 mt-3", children: /* @__PURE__ */ jsx99(Cta_default, { element: "link", to: `/admin/partners/details/${partner._id}`, variant: "outline", className: "bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex-1", children: "Details" }) })
    ] }, partner._id)) : /* @__PURE__ */ jsx99("div", { className: "text-center py-8 text-gray-400", children: "No partners found." }) }),
    /* @__PURE__ */ jsx99("div", { className: "hidden sm:block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs85("table", { className: "w-full table-auto border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsx99("thead", { children: /* @__PURE__ */ jsxs85("tr", { className: "bg-gray-50 text-xs text-gray-500", children: [
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Business Name" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Country" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Phone" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Industry" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Status" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Contact Person" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx99("tbody", { children: partnersRes.items && partnersRes.items.length > 0 ? partnersRes.items.map((partner) => /* @__PURE__ */ jsxs85("tr", { className: "border-b last:border-b-0 hover:bg-gray-50", children: [
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3 font-semibold", children: partner.legal_business_name }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: partner.country_of_incorporation }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: partner.phone_number }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: partner.industry }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsx99("span", { className: `inline-block px-2 py-1 rounded-lg border text-xs font-semibold ${statusColors2[partner.status] || "text-gray-600 bg-gray-100 border-gray-200"}`, children: partner.status }) }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxs85("div", { className: "text-xs", children: [
          /* @__PURE__ */ jsx99("div", { className: "font-semibold", children: partner.contact_person?.name }),
          /* @__PURE__ */ jsx99("div", { children: partner.contact_person?.email }),
          /* @__PURE__ */ jsx99("div", { children: partner.contact_person?.phone })
        ] }) }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsx99(Cta_default, { element: "link", to: `/admin/partners/details/${partner._id}`, variant: "outline", className: "bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex-1", children: "Details" }) })
      ] }, partner._id)) : /* @__PURE__ */ jsx99("tr", { children: /* @__PURE__ */ jsx99("td", { colSpan: 7, className: "text-center py-8 text-gray-400", children: "No partners found." }) }) })
    ] }) }),
    /* @__PURE__ */ jsx99("div", { className: "sm:block w-full", children: /* @__PURE__ */ jsx99(Pagination, { lastKey: partnersRes?.last_key_id, pageSize: partnersRes?.items_per_page, firstKey: partnersRes?.first_key_id }) })
  ] });
}
function _PartnersIndex() {
  let { partnersRes, query } = useLoaderData30(), navigation = useNavigation12(), [search, setSearch] = useState32(query.legal_business_name || "");
  return /* @__PURE__ */ jsxs85("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsx99("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: /* @__PURE__ */ jsx99("h1", { className: "text-2xl font-black text-primary", children: "Partners" }) }),
    /* @__PURE__ */ jsx99("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ jsx99(Form21, { method: "get", className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ jsxs85("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ jsxs85("div", { children: [
        /* @__PURE__ */ jsx99("label", { className: "block text-xs font-semibold mb-1", children: "Business Name" }),
        /* @__PURE__ */ jsx99(
          "input",
          {
            type: "text",
            name: "legal_business_name",
            className: "w-full border rounded-lg px-3 py-2",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search by business name"
          }
        )
      ] }),
      /* @__PURE__ */ jsx99("div", { className: "sm:col-span-1 flex gap-2 mt-2 sm:mt-0", children: /* @__PURE__ */ jsx99("button", { type: "submit", className: "bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold", children: "Search" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx99("div", { className: "hidden sm:block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs85("table", { className: "w-full table-auto border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsx99("thead", { children: /* @__PURE__ */ jsxs85("tr", { className: "bg-gray-50 text-xs text-gray-500", children: [
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Business Name" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Country" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Phone" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Industry" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Status" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Contact Person" }),
        /* @__PURE__ */ jsx99("th", { className: "px-4 py-2 text-left", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx99("tbody", { children: partnersRes.items && partnersRes.items.length > 0 ? partnersRes.items.map((partner) => /* @__PURE__ */ jsxs85("tr", { className: "border-b last:border-b-0 hover:bg-gray-50", children: [
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3 font-semibold", children: partner.legal_business_name }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: partner.country_of_incorporation }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: partner.phone_number }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: partner.industry }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsx99("span", { className: `inline-block px-2 py-1 rounded-lg border text-xs font-semibold ${statusColors2[partner.status] || "text-gray-600 bg-gray-100 border-gray-200"}`, children: partner.status }) }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxs85("div", { className: "text-xs", children: [
          /* @__PURE__ */ jsx99("div", { className: "font-semibold", children: partner.contact_person?.name }),
          /* @__PURE__ */ jsx99("div", { children: partner.contact_person?.email }),
          /* @__PURE__ */ jsx99("div", { children: partner.contact_person?.phone })
        ] }) }),
        /* @__PURE__ */ jsx99("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsx99(Cta_default, { element: "link", to: `/admin/partners/details/${partner._id}`, variant: "outline", className: "bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold flex-1", children: "Details" }) })
      ] }, partner._id)) : /* @__PURE__ */ jsx99("tr", { children: /* @__PURE__ */ jsx99("td", { colSpan: 7, className: "text-center py-8 text-gray-400", children: "No partners found." }) }) })
    ] }) }),
    /* @__PURE__ */ jsx99("div", { className: "sm:block w-full", children: /* @__PURE__ */ jsx99(Pagination, { lastKey: partnersRes?.last_key_id, pageSize: partnersRes?.items_per_page, firstKey: partnersRes?.first_key_id }) })
  ] });
}

// app/routes/admin.tournaments.add.tsx
var admin_tournaments_add_exports = {};
__export(admin_tournaments_add_exports, {
  action: () => action20,
  default: () => AddTournament
});
import { json as json32, redirect as redirect25 } from "@remix-run/node";
import { useNavigate as useNavigate17 } from "@remix-run/react";

// app/components/admin/tournament/CreateTournamentForm.tsx
import { Form as Form22 } from "@remix-run/react";
import { jsx as jsx100, jsxs as jsxs86 } from "react/jsx-runtime";
function CreateTournamentForm() {
  return /* @__PURE__ */ jsxs86(Form22, { className: "max-w-xl mx-auto grid gap-6 sm:gap-12", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsx100("h1", { className: "text-xl xs:text-2xl font-bold text-primary", children: "Create New Tournament" }),
    /* @__PURE__ */ jsxs86("div", { className: "grid gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsx100(FormControl, { as: "input", labelText: "Tournament Name", placeholder: "Enter tournament name", id: "name", name: "name", required: !0 }),
      /* @__PURE__ */ jsx100(FormControl, { as: "input", labelText: "Tournament Unique ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", required: !0 }),
      /* @__PURE__ */ jsx100(FormControl, { as: "textarea", rows: 3, labelText: "Tournament Description", placeholder: "Enter tournament description", id: "description", name: "description", required: !0 }),
      /* @__PURE__ */ jsx100(DragnDrop, { labelText: "Tournament Image", name: "image" })
    ] }),
    /* @__PURE__ */ jsx100("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsx100(Cta_default, { element: "button", type: "submit", className: "px-8 py-2 rounded-lg font-medium max-sm:grow", children: "Create Tournament" }) })
  ] });
}

// app/routes/admin.tournaments.add.tsx
import { jsx as jsx101, jsxs as jsxs87 } from "react/jsx-runtime";
async function action20({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect25("/login");
  let formData = await request.formData(), payload = prepareTournamentDto(formData), { error } = await tournamentRepo.createTournament(payload, cookieHeader);
  if (error) {
    let { headers: headers2 } = await setToast({ request, toast: `error::${error?.detail}::${Date.now()}` });
    return json32(error, { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `success::A new tournament has been created::${Date.now()}` });
  return redirect25("/admin/tournaments", { headers });
}
function AddTournament() {
  let navigate = useNavigate17();
  return /* @__PURE__ */ jsxs87("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs87("div", { className: "flex items-center mb-8 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsx101(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }),
      /* @__PURE__ */ jsx101("span", { className: "font-black text-primary", children: "Create Tournament" })
    ] }),
    /* @__PURE__ */ jsx101(CreateTournamentForm, {})
  ] });
}

// app/routes/user.setwithdrawalpin.tsx
var user_setwithdrawalpin_exports = {};
__export(user_setwithdrawalpin_exports, {
  action: () => action21,
  default: () => SetWithdrawalPin,
  loader: () => loader33
});
import { json as json33, redirect as redirect26 } from "@remix-run/node";
import { Form as Form23, Link as Link17, useActionData as useActionData9, useLoaderData as useLoaderData31 } from "@remix-run/react";
import { useState as useState33, useEffect as useEffect22 } from "react";
import { User, X } from "lucide-react";

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
  async signup(formData) {
    let { data, error, headers } = await ApiCall.call({
      url: ApiEndPoints.signup,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData
    });
    return error ? { error, data: null, headers } : (headers || (headers = { "Set-Cookie": data?.token ?? "" }), { data, error: null, headers });
  }
  async getMe(cookie) {
    console.log({ cookie, d: "updating profile" });
    let { data, error, headers, authRequired } = await ApiCall.call({
      url: ApiEndPoints.me,
      method: "GET"
    }, cookie);
    return { data, error, headers, authRequired };
  }
  async updateProfile(formData, cookie) {
    for (var pair of formData.entries())
      console.log(pair[0] + ", " + pair[1]);
    let { data, error, headers } = await ApiCall.call({
      url: ApiEndPoints.updateProfile,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData
    }, cookie);
    return { data, error, headers };
  }
  prepareUserSignupPayload(formData) {
    let signupData = new FormData();
    signupData.append("first_name", formData.get("first_name")), signupData.append("last_name", formData.get("last_name")), signupData.append("email", formData.get("email")), signupData.append("password", formData.get("password")), formData.get("status") && signupData.append("status", formData.get("status"));
    let imageFile = formData.get("image");
    return imageFile instanceof File && imageFile.size === 0 || signupData.append("image", formData.get("image")), signupData;
  }
  prepareUpdateUserPayload(formData) {
    let updateData = new FormData();
    updateData.append("email", formData.get("email")), formData.get("first_name") && updateData.append("first_name", formData.get("first_name")), formData.get("last_name") && updateData.append("last_name", formData.get("last_name")), formData.get("status") && updateData.append("status", formData.get("status"));
    let imageFile = formData.get("image");
    return imageFile instanceof File && imageFile.size === 0 || updateData.append("image", formData.get("image")), updateData;
  }
}, authServer = new AuthServer();

// app/routes/user.setwithdrawalpin.tsx
import { jsx as jsx102, jsxs as jsxs88 } from "react/jsx-runtime";
var tokenRequested = !1;
async function action21({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "", formData = await request.formData(), withdrawalPinDto = {
    token: formData.get("token"),
    withdrawal_pin: formData.get("withdrawal_pin"),
    confirm_withdrawal_pin: formData.get("confirm_withdrawal_pin")
  };
  console.log({ _DATA_: withdrawalPinDto });
  let { data, error, authRequired } = await walletRepo.createWithdrawalPin(withdrawalPinDto, cookieHeader);
  return console.log({ data, error, authRequired }), json33({ data, error, authRequired });
}
async function loader33({ request }) {
  console.log("SEtting");
  let cookieHeader = request.headers.get("Cookie"), { data, error, authRequired } = await authServer.getMe(cookieHeader || "");
  if (authRequired)
    return redirect26("/login");
  if (data) {
    if (data.withdrawal_pin_set)
      return redirect26("/user/wallet");
    if (!tokenRequested) {
      if (!(await walletRepo.requestWithdrawalToken(cookieHeader ?? "")).data)
        return redirect26("/user/wallet");
      tokenRequested = !0;
    }
  }
  return json33({ data, error });
}
function useSetWithdrawalPinController() {
  let { setUserStoreManager, getUserStoreManager } = useUserManager(), [user, setUser] = useState33(null), actionData = useActionData9(), loader_ = useLoaderData31();
  return useEffect22(() => {
    let _user = getUserStoreManager();
  }, [getUserStoreManager]), {
    user,
    actionData,
    setUserStoreManager,
    loader_
  };
}
function SetWithdrawalPin() {
  let { loader_, actionData, setUserStoreManager } = useSetWithdrawalPinController();
  return useEffect22(() => {
    console.log({ actionData }), actionData?.error && toast({
      variant: "destructive",
      title: "Set Withdrawal Pin Failed",
      description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Withdrawal Pin Creation failed"
    }), actionData?.data && (toast({
      variant: "default",
      title: "Withdrawal PIN updated successfully",
      description: "Withdrawal PIN created successfully"
    }), setUserStoreManager(actionData.data, !0));
  }, [actionData]), /* @__PURE__ */ jsxs88("div", { className: "flex min-h-screen items-center justify-center bg-white p-6 font-sans relative", children: [
    /* @__PURE__ */ jsx102(Link17, { to: "/user/wallet", className: "absolute top-4 right-4 text-gray-500 hover:text-gray-800", children: /* @__PURE__ */ jsx102(X, { size: 24 }) }),
    /* @__PURE__ */ jsxs88(Form23, { className: "w-full max-w-lg text-center", method: "POST", children: [
      /* @__PURE__ */ jsx102("input", { type: "hidden", name: "intent", value: "create-withdrawal-pin" }),
      /* @__PURE__ */ jsx102("div", { className: "mb-8 flex justify-center", children: /* @__PURE__ */ jsxs88("div", { className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-[#E5E5EF]", children: [
        /* @__PURE__ */ jsx102("div", { className: "absolute h-24 w-24 rounded-full border border-slate-100" }),
        /* @__PURE__ */ jsx102("div", { className: "absolute h-32 w-32 rounded-full border border-slate-50/50" }),
        /* @__PURE__ */ jsx102(User, { className: "h-8 w-8 text-[#1A1A1A]", fill: "currentColor" })
      ] }) }),
      /* @__PURE__ */ jsx102("h1", { className: "mb-2 text-2xl font-bold tracking-tight text-[#1A1A1A]", children: "Set withdrawal PIN" }),
      /* @__PURE__ */ jsx102("p", { className: "mb-10 text-[15px] text-gray-500", children: "We sent a token to your email address. Please enter it below along with your desired withdrawal PIN." }),
      /* @__PURE__ */ jsxs88("div", { className: "text-left", children: [
        /* @__PURE__ */ jsxs88("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "token",
          /* @__PURE__ */ jsx102("span", { className: "ml-0.5 text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx102("div", { className: "relative", children: /* @__PURE__ */ jsx102(
          "input",
          {
            type: "text",
            maxLength: 4,
            minLength: 4,
            pattern: "[0-9]*",
            name: "token",
            placeholder: "4 digit token sent to your email",
            className: "w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-[#4D4966]"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs88("div", { className: "text-left", children: [
        /* @__PURE__ */ jsxs88("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "Withdrawal PIN",
          /* @__PURE__ */ jsx102("span", { className: "ml-0.5 text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx102("div", { className: "relative", children: /* @__PURE__ */ jsx102(
          "input",
          {
            type: "text",
            maxLength: 6,
            minLength: 6,
            pattern: "[0-9]*",
            name: "withdrawal_pin",
            placeholder: "Enter your desired 6-digit PIN",
            className: "w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-[#4D4966]"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs88("div", { className: "text-left", children: [
        /* @__PURE__ */ jsxs88("label", { className: "mb-2 block text-[15px] font-medium text-[#1A1A1A]", children: [
          "Confirm Withdrawal PIN",
          /* @__PURE__ */ jsx102("span", { className: "ml-0.5 text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx102("div", { className: "relative", children: /* @__PURE__ */ jsx102(
          "input",
          {
            type: "text",
            maxLength: 6,
            minLength: 6,
            pattern: "[0-9]*",
            name: "confirm_withdrawal_pin",
            placeholder: "Confirm your 6-digit PIN",
            className: "w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-[#4D4966]"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx102(
        "button",
        {
          type: "submit",
          className: "mt-10 w-full rounded-2xl bg-[#4D4966] py-4 text-lg font-semibold text-white transition-all hover:bg-[#3f3b55] active:scale-[0.99]",
          children: "Create Withdrawal PIN"
        }
      )
    ] })
  ] });
}

// app/routes/user.all-tournaments.tsx
var user_all_tournaments_exports = {};
__export(user_all_tournaments_exports, {
  default: () => AllTournaments,
  loader: () => loader34
});
import { json as json34 } from "@remix-run/node";
import { useLoaderData as useLoaderData32 } from "@remix-run/react";
import { jsx as jsx103, jsxs as jsxs89 } from "react/jsx-runtime";
async function loader34() {
  let { data: tournaments, error } = await tournamentRepo.getTournaments();
  if (error)
    throw new Error(error.detail);
  return json34({ tournaments });
}
function AllTournaments() {
  let { tournaments } = useLoaderData32();
  return /* @__PURE__ */ jsxs89("main", { className: "grow", children: [
    /* @__PURE__ */ jsx103("header", { className: "wrapper my-16", children: /* @__PURE__ */ jsx103("h1", { className: "text-2xl lg:text-4xl font-satoshi-medium max-w-3xl", children: "From Artistic Marvels to Captivating Moments. Unleash Your Talent and Win Big in Our Monthly and Yearly Contests!" }) }),
    /* @__PURE__ */ jsx103("section", { className: "wrapper my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center", children: tournaments.map((tournament) => /* @__PURE__ */ jsx103(ContestCard, { contest: tournament, to: `/contests/${tournament.id}` }, tournament.id)) })
  ] });
}

// app/routes/user.pending-uploads.tsx
var user_pending_uploads_exports = {};
__export(user_pending_uploads_exports, {
  default: () => UserPendingsUpload,
  loader: () => loader35,
  useUserPendingsUploadController: () => useUserPendingsUploadController
});
import { useEffect as useEffect23, useState as useState34 } from "react";
import { Link as Link18, useLoaderData as useLoaderData33 } from "@remix-run/react";
import { json as json35, redirect as redirect27 } from "@remix-run/node";
import { jsx as jsx104, jsxs as jsxs90 } from "react/jsx-runtime";
async function loader35({ request }) {
  let cookieHeader = request.headers.get("Cookie");
  if (console.log({ cookieHeader }), !cookieHeader)
    return redirect27("/login");
  let { data, error, authRequired } = await userServer.getPendingUploads(cookieHeader);
  return console.log({ data, error }), authRequired ? redirect27("/login") : json35({ data, error, authRequired });
}
var PendingUploadCard = ({
  contestImageUrl,
  contest_name,
  stage,
  full_name,
  contestantId
}) => /* @__PURE__ */ jsx104(Link18, { to: `/user/contestant/${contestantId}`, className: "block transition-shadow", children: /* @__PURE__ */ jsxs90("article", { children: [
  /* @__PURE__ */ jsx104(
    "img",
    {
      src: contestImageUrl || no_image_default,
      alt: full_name,
      className: "w-full aspect-[3/4] rounded-lg object-cover"
    }
  ),
  /* @__PURE__ */ jsxs90("div", { className: "pt-4", children: [
    /* @__PURE__ */ jsxs90("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: [
      contest_name,
      /* @__PURE__ */ jsx104("br", {}),
      "stage ",
      stage
    ] }),
    /* @__PURE__ */ jsx104("h3", { className: "mt-1 text-lg font-bold text-gray-900", children: full_name })
  ] })
] }) });
function useUserPendingsUploadController() {
  let { data, error, authRequired } = useLoaderData33(), [pendingUploads, setPendingUploads] = useState34([]);
  return error && toast({
    variant: "destructive",
    title: "An error occured",
    description: error?.detail.toString() ?? "Error occured"
  }), useEffect23(() => {
    if (data) {
      let flattenedUploads = contestantHelper.enrichContestsContestantsData(data);
      setPendingUploads(flattenedUploads), console.log({ flattenedUploads });
    }
  }, [data]), { pendingUploads };
}
function UserPendingsUpload() {
  let { pendingUploads } = useUserPendingsUploadController();
  return /* @__PURE__ */ jsx104("div", { className: "min-h-screen", children: /* @__PURE__ */ jsxs90("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8", children: [
    /* @__PURE__ */ jsx104("header", { className: "bg-[#817EFB] overflow-hidden rounded-3xl py-8 md:py-12 lg:py-16 px-5", children: /* @__PURE__ */ jsxs90("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx104("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: "Pending uploads" }),
      /* @__PURE__ */ jsx104("p", { className: "mt-4 text-base md:text-lg text-purple-100", children: "Please, we are expecting your uploads for the following stages" })
    ] }) }),
    /* @__PURE__ */ jsx104("main", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsx104("div", { className: "grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3", children: pendingUploads.map((pendingUpload, idx) => /* @__PURE__ */ jsx104(
      PendingUploadCard,
      {
        contestImageUrl: pendingUpload.contestImage,
        contest_name: pendingUpload.contestName,
        stage: pendingUpload.stage.toString(),
        full_name: pendingUpload.fullName,
        contestantId: pendingUpload.contestantId
      },
      pendingUpload.contestantId
    )) }) })
  ] }) });
}

// app/routes/admin.accounts.add.tsx
var admin_accounts_add_exports = {};
__export(admin_accounts_add_exports, {
  action: () => action22,
  default: () => AddAdminUser,
  loader: () => loader36,
  useAddAdminUser: () => useAddAdminUser
});
import { Form as Form24, useActionData as useActionData10, useLoaderData as useLoaderData34, useNavigate as useNavigate19, useNavigation as useNavigation13 } from "@remix-run/react";
import { redirect as redirect28 } from "@remix-run/node";
import { useEffect as useEffect24 } from "react";
import { jsx as jsx105, jsxs as jsxs91 } from "react/jsx-runtime";
async function loader36({ request }) {
  let cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader)
    return redirect28("/login");
  let rolesResponse = await adminRepo.getAllRoles(cookieHeader);
  return rolesResponse.authRequired ? redirect28("/login") : { roles: rolesResponse.data, permissions };
}
async function action22({ request }) {
  let formData = await request.formData(), cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader)
    return redirect28("/login");
  let dto = {
    fullName: `${formData.get("firstName")} ${formData.get("lastName")}`,
    email: formData.get("email"),
    password: formData.get("password"),
    has_admin_access: formData.get("has_admin_access") == "1",
    is_superuser: !1,
    is_staff: formData.get("is_staff") == "1",
    is_active: formData.get("is_active") == "1",
    username: formData.get("username"),
    roles: formData.getAll("role") ?? []
  };
  return await adminRepo.createAdminUser(cookieHeader, dto);
}
function useAddAdminUser() {
  let { permissions: permissions2, roles } = useLoaderData34(), rolesNames = [];
  for (let roleName in roles)
    rolesNames.push(roleName);
  let isSubmitting = useNavigation13().state === "submitting", actionData = useActionData10();
  return useEffect24(() => {
    actionData?.error && (console.log(actionData.error), toast({
      variant: "destructive",
      title: "Create action failed",
      description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not create admin user!"
    })), actionData?.data && toast({
      variant: "default",
      title: "Create admin successful",
      description: "Admin account was successfully created!"
    });
  }, [actionData]), { permissions: permissions2, rolesNames, isSubmitting };
}
function AddAdminUser() {
  let { permissions: permissions2, rolesNames, isSubmitting } = useAddAdminUser(), navigate = useNavigate19();
  return /* @__PURE__ */ jsxs91("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs91("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsx105(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }),
      /* @__PURE__ */ jsx105("h1", { className: "text-2xl font-black text-primary", children: "Add User" })
    ] }),
    /* @__PURE__ */ jsxs91(Form24, { className: "sm:wrapper grid sm:grid-cols-2 gap-3 sm:gap-6 text-sm", method: "post", children: [
      /* @__PURE__ */ jsx105(FormControl, { as: "input", labelText: "First Name", className: "", placeholder: "Enter first name", id: "firstName", name: "firstName", required: !0 }),
      /* @__PURE__ */ jsx105(FormControl, { as: "input", labelText: "Last Name", className: "", placeholder: "Enter last name", id: "lastName", name: "lastName", required: !0 }),
      /* @__PURE__ */ jsx105(FormControl, { as: "input", labelText: "Email Address", className: "", placeholder: "Enter email address", id: "email", name: "email", required: !0 }),
      /* @__PURE__ */ jsx105(FormControl, { as: "input", labelText: "Username", className: "", placeholder: "Enter username", id: "username", name: "username", required: !0 }),
      /* @__PURE__ */ jsx105(FormControl, { as: "input", labelText: "Password", className: "", placeholder: "Enter username", id: "password", name: "password", required: !0 }),
      /* @__PURE__ */ jsxs91(Select2, { label: "Assign Staff", id: "is_staff", name: "is_staff", defaultValue: "1", required: !0, children: [
        /* @__PURE__ */ jsx105("option", { value: "0", children: "Disable" }),
        /* @__PURE__ */ jsx105("option", { value: "1", children: "Enable" })
      ] }),
      /* @__PURE__ */ jsxs91(Select2, { label: "Set Active", id: "is_active", name: "is_active", defaultValue: "1", required: !0, children: [
        /* @__PURE__ */ jsx105("option", { value: "0", children: "De-activate" }),
        /* @__PURE__ */ jsx105("option", { value: "1", children: "Activate" })
      ] }),
      /* @__PURE__ */ jsxs91(Select2, { label: "Has Admin access", id: "has_admin_access", name: "has_admin_access", defaultValue: "1", required: !0, children: [
        /* @__PURE__ */ jsx105("option", { value: "0", children: "False" }),
        /* @__PURE__ */ jsx105("option", { value: "1", children: "True" })
      ] }),
      /* @__PURE__ */ jsx105(RolesFormControl, { roles: rolesNames }),
      /* @__PURE__ */ jsxs91("div", { className: "grid grid-cols-2 sm:flex justify-end gap-3 sm:gap-6 sm:col-span-2 mt-4", children: [
        /* @__PURE__ */ jsx105(Cta_default, { element: "button", type: "reset", className: "px-4 sm:px-8 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }),
        /* @__PURE__ */ jsx105(Cta_default, { disabled: isSubmitting, element: "button", type: "submit", className: "px-4 sm:px-8 py-2 rounded-lg font-medium", children: isSubmitting ? "Creating admin user" : "Create admin user" })
      ] })
    ] })
  ] });
}

// app/routes/admin.contests.add.tsx
var admin_contests_add_exports = {};
__export(admin_contests_add_exports, {
  action: () => action23,
  default: () => AddContest,
  loader: () => loader37
});
import { json as json36, redirect as redirect29 } from "@remix-run/node";
import { useLoaderData as useLoaderData35, useNavigate as useNavigate20 } from "@remix-run/react";

// app/components/admin/tournament/CreateContestForm.tsx
import { Form as Form25, useSearchParams as useSearchParams3 } from "@remix-run/react";
import { jsx as jsx106, jsxs as jsxs92 } from "react/jsx-runtime";
function CreateContestForm({ tournaments }) {
  let [searchParams] = useSearchParams3(), defaultTournament = searchParams.get("tournament") ?? void 0;
  return /* @__PURE__ */ jsxs92(Form25, { className: "max-w-[700px] mx-auto my-8 grid gap-6 sm:gap-12 text-sm", method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsx106("h1", { className: "text-2xl font-bold text-primary", children: "Contest Details" }),
    /* @__PURE__ */ jsxs92("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs92(Select2, { name: "tournament", id: "tournament", label: "Tournament", className: "uppercase", defaultValue: defaultTournament, required: !0, children: [
        /* @__PURE__ */ jsx106("option", { value: "", children: "Select a tournament" }),
        tournaments.map((tournament) => /* @__PURE__ */ jsx106("option", { value: tournament.id, children: tournament.id }, tournament.id))
      ] }),
      /* @__PURE__ */ jsx106(FormControl, { as: "input", labelText: "Contest Name", placeholder: "Enter contest name", id: "name", name: "name", required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "textarea", rows: 3, labelClassNames: "sm:col-span-2", labelText: "Contest Description", placeholder: "Enter contest description", id: "description", name: "description", required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "input", labelText: "Unique Contest ID", placeholder: "Enter unique ID", id: "uniqueId", name: "uniqueId", required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "input", type: "datetime-local", labelText: "Registration Deadline", id: "reg_deadline", name: "reg_deadline", required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "input", type: "datetime-local", labelText: "Contest Start Date", id: "start_date", name: "start_date", required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "input", type: "datetime-local", labelText: "Contest End Date", id: "end_date", name: "end_date", required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "textarea", rows: 2, labelText: "Contest Prizes", labelClassNames: "sm:col-span-2", placeholder: "Enter contest prizes", id: "prizes", name: "prizes", required: !0 }),
      /* @__PURE__ */ jsx106(DragnDrop, { className: "sm:col-span-2", name: "image", multiple: !1 })
    ] }),
    /* @__PURE__ */ jsx106(CategoryInputs, {}),
    /* @__PURE__ */ jsx106(StageInputs, {}),
    /* @__PURE__ */ jsxs92("fieldset", { className: "grid gap-3 sm:gap-6 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx106("legend", { className: "text-lg mb-4 font-bold", children: "Contestants and Referrals Earnings" }),
      /* @__PURE__ */ jsx106(FormControl, { as: "input", type: "number", step: 1, max: 100, min: 0, labelText: "Contestant Share Percentage", id: "contestant_share_percent", name: "contestant_share_percent", defaultValue: 50, required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "input", type: "number", labelText: "Minimum amount for affiliate to earn", id: "min_for_referral_earning", name: "min_for_referral_earning", defaultValue: 3e3, required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "input", type: "number", labelText: "Amount affiliate would earn from minimum", id: "referral_bonus_from_min", name: "referral_bonus_from_min", defaultValue: 500, required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "input", type: "number", step: 1, max: 100, min: 0, labelText: "Affiliate percentage earnings after minimum", id: "referral_percent_after_min", name: "referral_percent_after_min", defaultValue: 1, required: !0 })
    ] }),
    /* @__PURE__ */ jsxs92("fieldset", { className: "grid gap-3 sm:gap-6", children: [
      /* @__PURE__ */ jsx106("legend", { className: "text-lg mb-4 font-bold", children: "Submission Guidelines" }),
      /* @__PURE__ */ jsx106(FormControl, { as: "textarea", rows: 4, labelText: "Submission Requirements", placeholder: "Enter text here...", id: "sub_req", name: "sub_req", required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "textarea", rows: 4, labelText: "Terms & Conditions", placeholder: "Enter text here...", id: "tnc", name: "tnc", required: !0 }),
      /* @__PURE__ */ jsx106(FormControl, { as: "textarea", rows: 4, labelText: "Additional Information", placeholder: "Enter text here...", id: "add_info", name: "add_info", required: !0 })
    ] }),
    /* @__PURE__ */ jsx106("div", { className: "flex justify-end gap-6", children: /* @__PURE__ */ jsx106(Cta_default, { element: "button", type: "submit", className: "px-8 py-2 rounded-lg font-medium max-sm:grow", children: "Create Contest" }) })
  ] });
}

// app/routes/admin.contests.add.tsx
import { jsx as jsx107, jsxs as jsxs93 } from "react/jsx-runtime";
async function loader37({}) {
  let { data: tournaments = [] } = await tournamentRepo.getTournaments();
  return json36({ tournaments });
}
async function action23({ request }) {
  let payload = prepareContestPayload(await request.formData()), cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect29("/login");
  let { data, error } = await contestRepo.createContest(payload, cookieHeader);
  if (data) {
    let { headers: headers2 } = await setToast({ request, toast: `success::A new contest has been created::${Date.now()}` });
    return redirect29("/admin/contests", { headers: headers2 });
  }
  let { headers } = await setToast({ request, toast: `error::${error.detail}::${Date.now()}` });
  return json36(null, { headers });
}
function AddContest() {
  let { tournaments } = useLoaderData35(), navigate = useNavigate20();
  return /* @__PURE__ */ jsxs93("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs93("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsx107(RoundCta_default, { icon: icons.arrowPrevIcon, className: "hover:bg-[#F7F7F8] text-primary", onClick: () => navigate(-1) }),
      /* @__PURE__ */ jsx107("span", { className: "font-black text-primary", children: "Create Contest" })
    ] }),
    /* @__PURE__ */ jsx107(CreateContestForm, { tournaments })
  ] });
}

// app/routes/partners.location.tsx
var partners_location_exports = {};
__export(partners_location_exports, {
  default: () => PartnerProducts,
  loader: () => loader38
});
import { json as json37, redirect as redirect30 } from "@remix-run/node";
import { useLoaderData as useLoaderData36, Form as Form26, useNavigation as useNavigation14 } from "@remix-run/react";
import { jsx as jsx108, jsxs as jsxs94 } from "react/jsx-runtime";
async function loader38({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect30("/login");
  let url = new URL(request.url), query = {};
  for (let [k, v] of url.searchParams.entries())
    query[k] = v;
  let pagedUsersRes = await partnerServer.getPartnerLocations(query, cookieHeader);
  return pagedUsersRes.authRequired ? redirect30("/login") : (console.log(pagedUsersRes), json37({ data: pagedUsersRes.data, query }));
}
function PartnerProducts() {
  let { data, query } = useLoaderData36(), navigation = useNavigation14();
  return console.log(data), /* @__PURE__ */ jsxs94("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs94("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ jsx108("h1", { className: "text-2xl font-black text-primary", children: "Products" }),
      /* @__PURE__ */ jsxs94(Cta_default, { element: "link", to: "/partners/add", className: "hidden sm:flex gap-2 items-center rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsx108(Svg, { src: icons.addIcon, width: ".9em" }),
        "Add Product"
      ] })
    ] }),
    /* @__PURE__ */ jsx108("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ jsx108(Form26, { method: "get", className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ jsxs94("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ jsxs94("div", { children: [
        /* @__PURE__ */ jsx108("label", { className: "block text-xs font-semibold mb-1", children: "Product Price" }),
        /* @__PURE__ */ jsx108(
          "input",
          {
            type: "number",
            name: "price,wildcard,status",
            className: "w-full border rounded-lg px-3 py-2",
            placeholder: "Price"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs94("div", { children: [
        /* @__PURE__ */ jsx108("label", { className: "block text-xs font-semibold mb-1", children: "Name, Description or tag" }),
        /* @__PURE__ */ jsx108(
          "input",
          {
            type: "text",
            name: "wildcard",
            className: "w-full border rounded-lg px-3 py-2",
            placeholder: "other fields"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs94("div", { children: [
        /* @__PURE__ */ jsx108("label", { className: "block text-xs font-semibold mb-1", children: "Status" }),
        /* @__PURE__ */ jsxs94(
          "select",
          {
            name: "status",
            className: "w-full border rounded-lg px-3 py-2",
            children: [
              /* @__PURE__ */ jsx108("option", { value: "available", children: "Available" }),
              /* @__PURE__ */ jsx108("option", { value: "out_of_stock", children: "Out of Stock" }),
              /* @__PURE__ */ jsx108("option", { value: "suspended", children: "Suspended" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx108("div", { className: "sm:col-span-1 flex gap-2 mt-2 sm:mt-0", children: /* @__PURE__ */ jsx108("button", { type: "submit", className: "bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold", children: "Search" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx108("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8", children: data?.items && data.items.length > 0 ? data.items.map((product) => {
      let imgSrc = no_image_default;
      return /* @__PURE__ */ jsxs94("div", { className: "my-2 p-2 bg-slate-50 rounded-lg border border-slate-100", children: [
        /* @__PURE__ */ jsxs94("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx108("div", { className: "mt-1 text-indigo-500", children: /* @__PURE__ */ jsxs94("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
            /* @__PURE__ */ jsx108("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
            /* @__PURE__ */ jsx108("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
          ] }) }),
          /* @__PURE__ */ jsxs94("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx108("span", { className: "text-xs font-bold text-gray-700", children: product.name }),
            /* @__PURE__ */ jsxs94("span", { className: "text-[11px] text-gray-500", children: [
              product.city,
              ", ",
              product.state_name
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx108(
          "a",
          {
            href: `https://www.google.com/maps/dir/?api=1&destination=${product.latitude},${product.longitude}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-2 flex items-center justify-center gap-1 w-full py-1.5 bg-white border border-indigo-100 text-indigo-600 text-xs font-bold rounded-md hover:bg-indigo-50 transition-colors",
            children: "Get Directions"
          }
        )
      ] });
    }) : /* @__PURE__ */ jsx108("div", { className: "col-span-full text-center text-gray-400 py-12", children: "No products found." }) }),
    /* @__PURE__ */ jsx108("div", { className: " sm:flex justify-between items-center my-4", children: /* @__PURE__ */ jsx108(Pagination, { lastKey: query?.last_key_id, pageSize: query?.items_per_page, firstKey: query?.first_key_id }) })
  ] });
}

// app/routes/_public.winners.tsx
var public_winners_exports = {};
__export(public_winners_exports, {
  default: () => Winners,
  loader: () => loader39
});
import { Link as Link19, useLoaderData as useLoaderData37 } from "@remix-run/react";
import { useEffect as useEffect25, useState as useState35 } from "react";
import { jsx as jsx109, jsxs as jsxs95 } from "react/jsx-runtime";
async function loader39({ params }) {
  let { data: winners, error } = await contestRepo.getWinners();
  return { winners, error };
}
var WinnerCard = ({
  image_url,
  contest_name,
  remark,
  full_name,
  id
}) => /* @__PURE__ */ jsx109(Link19, { to: `/winner/${id}`, className: "block transition-shadow", children: /* @__PURE__ */ jsxs95("article", { children: [
  /* @__PURE__ */ jsx109(
    "img",
    {
      src: image_url,
      alt: full_name,
      className: "w-full aspect-[3/4] rounded-lg object-cover"
    }
  ),
  /* @__PURE__ */ jsxs95("div", { className: "pt-4", children: [
    /* @__PURE__ */ jsx109("p", { className: "text-xs font-semibold uppercase tracking-wide text-gray-500", children: contest_name }),
    /* @__PURE__ */ jsx109("h3", { className: "mt-1 text-lg font-bold text-gray-900", children: full_name })
  ] })
] }) }), SearchIcon = (props) => /* @__PURE__ */ jsx109(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...props,
    children: /* @__PURE__ */ jsx109(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      }
    )
  }
);
function Winners() {
  let { winners, error } = useLoaderData37(), [searchWinners, setSearchWinners] = useState35(""), [winnersFiltered, setWinnersFiltered] = useState35(winners ?? []);
  return useEffect25(() => {
    setWinnersFiltered(winners ?? []);
  }, [winners]), useEffect25(() => {
    let updated = (winners ?? []).filter(
      (winner) => winner.full_name.toLowerCase().includes(searchWinners.trim().toLowerCase()) || winner.contest_name.toLowerCase().includes(searchWinners.trim().toLowerCase())
    );
    setWinnersFiltered(updated);
  }, [searchWinners, winners]), error ? /* @__PURE__ */ jsx109("h1", { className: "font-satoshi-bold text-4xl text-center", children: error.detail }) : /* @__PURE__ */ jsx109("div", { className: "min-h-screen", children: /* @__PURE__ */ jsxs95("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8", children: [
    /* @__PURE__ */ jsx109("header", { className: "bg-[#817EFB] overflow-hidden rounded-3xl py-8 md:py-12 lg:py-16 px-5", children: /* @__PURE__ */ jsxs95("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx109("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: "Meet Our Talented Contest Winners" }),
      /* @__PURE__ */ jsx109("p", { className: "mt-4 text-base md:text-lg text-purple-100", children: "A Glimpse of the Extraordinary Creations That Stole the Show" }),
      /* @__PURE__ */ jsxs95("div", { className: "mt-8 relative max-w-lg mx-auto", children: [
        /* @__PURE__ */ jsx109(
          "input",
          {
            type: "text",
            placeholder: "Search by keyword or name",
            value: searchWinners,
            onChange: (e) => setSearchWinners(e.target.value),
            className: "w-full rounded-2xl py-3 px-6 pr-12 text-gray-900 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
          }
        ),
        /* @__PURE__ */ jsx109("div", { className: "absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-auto", children: /* @__PURE__ */ jsx109(SearchIcon, { className: "h-5 w-5 text-gray-400" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs95("main", { className: "py-12 md:py-16", children: [
      /* @__PURE__ */ jsx109("div", { className: "grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3", children: winnersFiltered.map((winner, idx) => /* @__PURE__ */ jsx109(
        WinnerCard,
        {
          image_url: winner.image_url,
          contest_name: winner.contest_name,
          remark: winner.remark,
          full_name: winner.full_name,
          id: winner._id
        },
        winner.contestant_code || idx
      )) }),
      /* @__PURE__ */ jsx109("div", { className: "mt-12 md:mt-16 text-center", children: /* @__PURE__ */ jsx109(
        "button",
        {
          type: "button",
          className: "inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors",
          children: "See more"
        }
      ) })
    ] })
  ] }) });
}

// app/routes/partner.account.tsx
var partner_account_exports = {};
__export(partner_account_exports, {
  default: () => PartnerLoginOrRequestPartnerShip
});
import { Link as Link20, useLocation as useLocation7 } from "@remix-run/react";
import { useEffect as useEffect26 } from "react";
import { jsx as jsx110, jsxs as jsxs96 } from "react/jsx-runtime";
function PartnerLoginOrRequestPartnerShip() {
  let { setUserStoreManager, getUserStoreManager } = useUserManager();
  var user = getUserStoreManager();
  let location = useLocation7();
  if (!user || !user.is_partner_account)
    return /* @__PURE__ */ jsxs96("main", { className: "h-dvh bg-secondary p-4 flex flex-col", children: [
      /* @__PURE__ */ jsx110(Link20, { to: "/", "aria-label": "home", children: /* @__PURE__ */ jsx110(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16" }) }),
      /* @__PURE__ */ jsxs96("div", { className: "flex flex-col md:flex-row gap-6 p-8  rounded-2xl border border-gray-100", children: [
        /* @__PURE__ */ jsxs96("div", { className: "flex-1 flex flex-col items-start gap-4", children: [
          /* @__PURE__ */ jsx110("div", { className: "p-3 rounded-lg shadow-sm" }),
          /* @__PURE__ */ jsxs96("div", { children: [
            /* @__PURE__ */ jsx110("h3", { className: "font-satoshi-black text-xl text-gray-900", children: "Welcome Back" }),
            /* @__PURE__ */ jsx110("p", { className: "text-gray-500 text-sm mt-1", children: "Access your partner dashboard and manage your account." })
          ] }),
          /* @__PURE__ */ jsx110(
            Link20,
            {
              to: "/login?redirectTo=/partners/home?&requireNewLogin=1",
              className: "text-accent font-satoshi-black flex items-center gap-2 hover:underline transition-all",
              children: "Login to Dashboard \u2192"
            }
          )
        ] }),
        /* @__PURE__ */ jsx110("div", { className: "w-px bg-gray-200 hidden md:block" }),
        /* @__PURE__ */ jsxs96("div", { className: "flex-1 flex flex-col items-start gap-4", children: [
          /* @__PURE__ */ jsx110("div", { className: "bg-accent/10 p-3 rounded-lg" }),
          /* @__PURE__ */ jsxs96("div", { children: [
            /* @__PURE__ */ jsx110("h3", { className: "font-satoshi-black text-xl text-gray-900", children: "New Here?" }),
            /* @__PURE__ */ jsx110("p", { className: "text-gray-500 text-sm mt-1", children: "Join our network and start growing your business with us." })
          ] }),
          /* @__PURE__ */ jsx110(
            Link20,
            {
              to: "/partner/partner",
              className: "bg-accent text-white px-6 py-2 rounded-full font-satoshi-black hover:opacity-90 transition-all",
              children: "Become a Partner"
            }
          )
        ] })
      ] })
    ] });
  useEffect26(() => {
    window.location.replace("/partners/home");
  }, []);
}

// app/routes/partner.partner.tsx
var partner_partner_exports = {};
__export(partner_partner_exports, {
  action: () => action24,
  default: () => PartnerOnboarding,
  loader: () => loader40
});
import { json as json38 } from "@remix-run/node";
import { useActionData as useActionData12, Form as Form28, useNavigate as useNavigate22, useNavigation as useNavigation15 } from "@remix-run/react";
import { useState as useState37 } from "react";
import { useEffect as useEffect27 } from "react";
import { jsx as jsx111, jsxs as jsxs97 } from "react/jsx-runtime";
async function loader40({}) {
  return json38({});
}
async function action24({ request }) {
  let formData = await request.formData();
  console.log("d");
  for (let [key, value] of formData.entries())
    console.log(`${key}: ${value}`);
  console.log(formData.values());
  let business_locations = [
    {
      street: formData.get("location_street"),
      city: formData.get("location_city"),
      state: formData.get("location_state"),
      country: formData.get("location_country")
    }
  ], contact_person = {
    name: formData.get("contact_name"),
    email: formData.get("contact_email"),
    country: formData.get("contact_country"),
    phone: formData.get("contact_phone")
  }, dto = {
    legal_business_name: formData.get("legal_business_name"),
    country_of_incorporation: formData.get("country_of_incorporation"),
    phone_number: formData.get("phone_number"),
    roc_cac_number: formData.get("roc_cac_number"),
    tax_id: formData.get("tax_id"),
    industry: formData.get("industry"),
    estimated_weekly_volume_min: Number(formData.get("estimated_weekly_volume_min")),
    estimated_weekly_volume_max: Number(formData.get("estimated_weekly_volume_max")),
    estimated_weekly_volume_currency: formData.get("estimated_weekly_volume_currency"),
    business_description: formData.get("business_description"),
    website: formData.get("website"),
    referral_percentage: Number(formData.get("referral_percentage")),
    business_email: formData.get("business_email"),
    notes: formData.get("notes")?.split(`
`) ?? [],
    contact_person,
    business_locations
  };
  return await partnerServer.requestPartnership(dto);
}
function Stepper({ currentStep }) {
  let steps = ["Business info", "Business address", "Contact details"];
  return /* @__PURE__ */ jsx111("div", { className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs sm:text-sm font-medium text-gray-400 mb-8 sm:mb-12", children: steps.map((step, i) => /* @__PURE__ */ jsxs97("div", { className: "flex items-center gap-x-1 sm:gap-x-2", children: [
    /* @__PURE__ */ jsx111("span", { className: `flex h-6 w-6 items-center justify-center rounded-full text-xs ${i === currentStep ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`, children: i + 1 }),
    /* @__PURE__ */ jsx111("span", { className: i === currentStep ? "text-black" : "", children: step }),
    i < steps.length - 1 && /* @__PURE__ */ jsx111("span", { className: "hidden sm:inline", children: ">" })
  ] }, step)) });
}
var Label2 = ({ children, required }) => /* @__PURE__ */ jsxs97("label", { className: "block text-sm font-semibold text-gray-700 mb-2 mt-5", children: [
  children,
  " ",
  required && /* @__PURE__ */ jsx111("span", { className: "text-red-500", children: "*" })
] }), inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-gray-400 bg-white";
function usePartnerOnboardingController() {
  let navigation = useNavigation15(), [section, setSection] = useState37(0), [form, setForm] = useState37({
    estimated_weekly_volume_currency: "USD",
    referral_percentage: 10,
    country_of_incorporation: "Nigeria"
  }), actionData = useActionData12(), isSuccess = !!actionData?.data && !actionData?.error, businessName = form.legal_business_name ?? "Partner", navigate = useNavigate22();
  return useEffect27(() => {
    actionData?.error && (console.log(actionData.error), toast({
      variant: "destructive",
      title: "Submission failed",
      description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not submit partnership request!"
    })), actionData?.data && toast({
      variant: "default",
      title: "Submission successful",
      description: "Your partnership request was successfully submitted!"
    });
  }, [actionData]), { section, form, navigation, handleChange: (e) => {
    console.log(form), setForm({ ...form, [e.target.name]: e.target.value });
  }, setSection, businessName, isSuccess, navigate };
}
function PartnerOnboarding() {
  let { section, form, navigation, handleChange, setSection, isSuccess, navigate, businessName } = usePartnerOnboardingController();
  return isSuccess ? /* @__PURE__ */ jsx111("main", { className: "min-h-screen bg-white font-sans text-slate-900 flex items-center justify-center", children: /* @__PURE__ */ jsxs97("div", { className: "max-w-xl w-full mx-auto px-4 py-16 text-center", children: [
    /* @__PURE__ */ jsxs97("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs97("svg", { className: "mx-auto mb-4 text-green-500", width: "48", height: "48", fill: "none", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsx111("circle", { cx: "12", cy: "12", r: "12", fill: "#22C55E", opacity: "0.1" }),
        /* @__PURE__ */ jsx111("path", { d: "M7 13l3 3 7-7", stroke: "#22C55E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
      ] }),
      /* @__PURE__ */ jsxs97("h1", { className: "text-2xl sm:text-3xl font-bold mb-2", children: [
        "Thank you, ",
        businessName,
        "!"
      ] }),
      /* @__PURE__ */ jsxs97("p", { className: "text-gray-700 text-base sm:text-lg mb-6", children: [
        "We have received your request to partner with us.",
        /* @__PURE__ */ jsx111("br", {}),
        "A member of our team will contact you soon."
      ] })
    ] }),
    /* @__PURE__ */ jsx111(
      "button",
      {
        className: "inline-block bg-[#4B4870] hover:bg-[#3d3a5c] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all text-base sm:text-lg",
        onClick: () => navigate("/"),
        children: "Go to Homepage"
      }
    )
  ] }) }) : /* @__PURE__ */ jsx111("main", { className: "min-h-screen bg-white font-sans text-slate-900 pb-20", children: /* @__PURE__ */ jsxs97("div", { className: "max-w-3xl mx-auto px-2 sm:px-6 pt-8 sm:pt-12", children: [
    /* @__PURE__ */ jsx111(Stepper, { currentStep: section }),
    /* @__PURE__ */ jsx111("div", { className: "text-center mb-8 sm:mb-10", children: /* @__PURE__ */ jsx111("h1", { className: "text-2xl sm:text-4xl font-bold tracking-tight text-gray-900", children: section === 0 ? "Tell us about your business" : section === 1 ? "Enter your business's legal address" : "Enter contact info details" }) }),
    /* @__PURE__ */ jsx111("div", { className: "w-full max-w-xl mx-auto", children: /* @__PURE__ */ jsxs97(Form28, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ jsxs97("div", { className: section === 0 ? "" : "hidden", children: [
        /* @__PURE__ */ jsxs97("div", { className: "bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100", children: [
          /* @__PURE__ */ jsx111("h3", { className: "text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4", children: "Company information" }),
          /* @__PURE__ */ jsxs97("div", { className: "space-y-2 text-xs sm:text-sm", children: [
            /* @__PURE__ */ jsxs97("div", { className: "flex justify-between flex-wrap", children: [
              /* @__PURE__ */ jsx111("span", { className: "text-gray-500", children: "Company name:" }),
              " ",
              /* @__PURE__ */ jsxs97("span", { className: "font-semibold", children: [
                form.legal_business_name,
                " ",
                /* @__PURE__ */ jsx111("span", { className: "text-green-500", children: "\u25CF" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs97("div", { className: "flex justify-between flex-wrap", children: [
              /* @__PURE__ */ jsx111("span", { className: "text-gray-500", children: "Phone Number:" }),
              " ",
              /* @__PURE__ */ jsx111("span", { className: "font-semibold", children: form.phone_number })
            ] }),
            /* @__PURE__ */ jsxs97("div", { className: "flex justify-between flex-wrap", children: [
              /* @__PURE__ */ jsx111("span", { className: "text-gray-500", children: "Status:" }),
              " ",
              /* @__PURE__ */ jsx111("span", { className: "text-blue-600 font-semibold inline-flex items-center gap-1", children: "\u2713 Active" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Legal business name" }),
          /* @__PURE__ */ jsx111("input", { name: "legal_business_name", required: !0, className: inputClass, value: form.legal_business_name || "", onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Country of incorporation" }),
          /* @__PURE__ */ jsxs97("select", { name: "country_of_incorporation", className: inputClass, value: form.country_of_incorporation, onChange: handleChange, children: [
            /* @__PURE__ */ jsx111("option", { value: "Nigeria", children: "\u{1F1F3}\u{1F1EC} Nigeria" }),
            /* @__PURE__ */ jsx111("option", { value: "Kenya", children: "\u{1F1F0}\u{1F1EA} Kenya" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Business Email" }),
          /* @__PURE__ */ jsx111(
            "input",
            {
              name: "business_email",
              type: "email",
              className: inputClass,
              value: form.business_email || "",
              onChange: handleChange,
              required: !0,
              placeholder: "Enter business email"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Partner commision support (%)" }),
          /* @__PURE__ */ jsx111("p", { className: "text-xs sm:text-sm  text-gray-500  tracking-wider mb-3 sm:mb-1", children: "We connect you to paying customers. What percentage of each sale are you willing to contribute as a partnership commission?" }),
          /* @__PURE__ */ jsx111(
            "input",
            {
              name: "referral_percentage",
              type: "number",
              min: 5,
              className: inputClass,
              value: form.referral_percentage || 10,
              onChange: handleChange,
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Phone number" }),
          /* @__PURE__ */ jsxs97("div", { className: "flex flex-col sm:flex-row gap-2 items-stretch", children: [
            /* @__PURE__ */ jsxs97("div", { className: "relative w-full sm:w-32", children: [
              /* @__PURE__ */ jsx111(
                "select",
                {
                  name: "phone_country_code",
                  className: "block w-full appearance-none px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base pr-8",
                  defaultValue: "+234",
                  style: { minWidth: "5.5rem" },
                  children: /* @__PURE__ */ jsx111("option", { value: "+234", children: "\u{1F1F3}\u{1F1EC} +234" })
                }
              ),
              /* @__PURE__ */ jsx111("span", { className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg", children: "\u25BC" })
            ] }),
            /* @__PURE__ */ jsx111(
              "input",
              {
                name: "phone_number",
                required: !0,
                className: inputClass + " flex-1",
                placeholder: "810 234 6879",
                value: form.phone_number || "",
                onChange: handleChange,
                type: "tel",
                autoComplete: "tel"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { children: "ROC / CAC Number" }),
          /* @__PURE__ */ jsx111("input", { name: "roc_cac_number", className: inputClass, value: form.roc_cac_number || "", onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { children: "Tax ID (TIN)" }),
          /* @__PURE__ */ jsx111("input", { name: "tax_id", className: inputClass, value: form.tax_id || "", onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Estimated Weekly Volume Currency" }),
          /* @__PURE__ */ jsxs97(
            "select",
            {
              name: "estimated_weekly_volume_currency",
              className: inputClass,
              value: form.estimated_weekly_volume_currency || "",
              onChange: handleChange,
              required: !0,
              children: [
                /* @__PURE__ */ jsx111("option", { value: "", children: "Select currency" }),
                /* @__PURE__ */ jsx111("option", { value: "NGN", children: "NGN" }),
                /* @__PURE__ */ jsx111("option", { value: "USD", children: "USD" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Estimated weekly volume" }),
          /* @__PURE__ */ jsxs97("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-4", children: [
            /* @__PURE__ */ jsxs97("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsx111("span", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400", children: form.estimated_weekly_volume_currency }),
              /* @__PURE__ */ jsx111("input", { name: "estimated_weekly_volume_min", type: "number", placeholder: "Min", className: `${inputClass} pl-16`, value: form.estimated_weekly_volume_min || "", onChange: handleChange })
            ] }),
            /* @__PURE__ */ jsxs97("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsx111("span", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400", children: form.estimated_weekly_volume_currency }),
              /* @__PURE__ */ jsx111("input", { name: "estimated_weekly_volume_max", type: "number", placeholder: "Max", className: `${inputClass} pl-16`, value: form.estimated_weekly_volume_max || "", onChange: handleChange })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Business description" }),
          /* @__PURE__ */ jsxs97("div", { className: "relative", children: [
            /* @__PURE__ */ jsx111("textarea", { name: "business_description", required: !0, className: `${inputClass} h-32 resize-none`, value: form.business_description || "", onChange: handleChange }),
            /* @__PURE__ */ jsx111("span", { className: "absolute bottom-3 right-3 text-xs text-gray-400", children: "0/5000" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { children: "Website (Optional)" }),
          /* @__PURE__ */ jsx111("input", { name: "website", className: inputClass, placeholder: "https://www.acmetrading.com", value: form.website || "", onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Industry" }),
          /* @__PURE__ */ jsxs97(
            "select",
            {
              name: "industry",
              className: inputClass,
              value: form.industry || "",
              onChange: handleChange,
              required: !0,
              children: [
                /* @__PURE__ */ jsx111("option", { value: "", children: "Select industry" }),
                /* @__PURE__ */ jsx111("option", { value: "Services", children: "Services" }),
                /* @__PURE__ */ jsx111("option", { value: "Manufacturing", children: "Manufacturing" }),
                /* @__PURE__ */ jsx111("option", { value: "Hospitality", children: "Hospitality" }),
                /* @__PURE__ */ jsx111("option", { value: "Financial Industry", children: "Financial Industry" }),
                /* @__PURE__ */ jsx111("option", { value: "Technology", children: "Technology" }),
                /* @__PURE__ */ jsx111("option", { value: "Education", children: "Education" }),
                /* @__PURE__ */ jsx111("option", { value: "Healthcare", children: "Healthcare" }),
                /* @__PURE__ */ jsx111("option", { value: "Retail", children: "Retail" }),
                /* @__PURE__ */ jsx111("option", { value: "Agriculture", children: "Agriculture" }),
                /* @__PURE__ */ jsx111("option", { value: "Construction", children: "Construction" }),
                /* @__PURE__ */ jsx111("option", { value: "Transportation", children: "Transportation" }),
                /* @__PURE__ */ jsx111("option", { value: "Other", children: "Other" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx111("button", { type: "button", className: "w-full bg-[#4B4870] hover:bg-[#3d3a5c] text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg transition-all mt-4 text-base sm:text-lg", onClick: () => setSection(1), children: "Next" })
      ] }),
      /* @__PURE__ */ jsxs97("div", { className: section === 1 ? "" : "hidden", children: [
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Country of territory" }),
          /* @__PURE__ */ jsxs97("select", { name: "location_country", required: !0, className: inputClass, value: form.location_country || "", onChange: handleChange, children: [
            /* @__PURE__ */ jsx111("option", { value: "", children: "Select your country" }),
            /* @__PURE__ */ jsx111("option", { value: "Nigeria", children: "Nigeria" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Street Address" }),
          /* @__PURE__ */ jsx111("input", { name: "location_street", required: !0, placeholder: "123 Main Street", className: inputClass, value: form.location_street || "", onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "State" }),
          /* @__PURE__ */ jsxs97("select", { name: "location_state", required: !0, className: inputClass, value: form.location_state || "", onChange: handleChange, children: [
            /* @__PURE__ */ jsx111("option", { value: "", children: "Select state" }),
            /* @__PURE__ */ jsx111("option", { value: "Lagos", children: "Lagos" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "City" }),
          /* @__PURE__ */ jsx111("input", { name: "location_city", required: !0, className: inputClass, value: form.location_city || "", onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Postal Code" }),
          /* @__PURE__ */ jsx111("input", { name: "location_postal", className: inputClass, value: form.location_postal || "", onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs97("div", { className: "flex flex-col sm:flex-row gap-3 pt-4 mt-5", children: [
          /* @__PURE__ */ jsx111("button", { type: "button", className: "w-full sm:flex-1 bg-gray-100 text-gray-600 font-semibold py-3 sm:py-4 rounded-xl", onClick: () => setSection(0), children: "Back" }),
          /* @__PURE__ */ jsx111("button", { type: "button", className: "w-full sm:flex-[2] bg-[#4B4870] text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg", onClick: () => setSection(2), children: "Next" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs97("div", { className: section === 2 ? "" : "hidden", children: [
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Country of territory" }),
          /* @__PURE__ */ jsxs97("select", { name: "contact_country", required: !0, className: inputClass, value: form.contact_country || "", onChange: handleChange, children: [
            /* @__PURE__ */ jsx111("option", { value: "", children: "Select your country" }),
            /* @__PURE__ */ jsx111("option", { value: "Nigeria", children: "Nigeria" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Contact Name" }),
          /* @__PURE__ */ jsx111("input", { name: "contact_name", required: !0, placeholder: "John Doe", className: inputClass, value: form.contact_name || "", onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Contact Email" }),
          /* @__PURE__ */ jsx111("input", { name: "contact_email", required: !0, className: inputClass, value: form.contact_email || "", onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs97("div", { children: [
          /* @__PURE__ */ jsx111(Label2, { required: !0, children: "Contact Phone" }),
          /* @__PURE__ */ jsx111("input", { name: "contact_phone", className: inputClass, value: form.contact_phone || "", onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs97("div", { className: "flex flex-col sm:flex-row gap-3 pt-4", children: [
          /* @__PURE__ */ jsx111("button", { type: "button", className: "w-full sm:flex-1 bg-gray-100 text-gray-600 font-semibold py-3 sm:py-4 rounded-xl", onClick: () => setSection(1), children: "Back" }),
          /* @__PURE__ */ jsx111("button", { type: "submit", className: "w-full sm:flex-[2] bg-[#4B4870] text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg", children: navigation.state === "submitting" ? "Submitting..." : "Submit" })
        ] })
      ] })
    ] }) })
  ] }) });
}

// app/routes/_public._index.tsx
var public_index_exports = {};
__export(public_index_exports, {
  default: () => LandingPage
});

// app/components/public/landingpage/ContactForm.tsx
import { jsx as jsx112, jsxs as jsxs98 } from "react/jsx-runtime";
function ContactForm() {
  return /* @__PURE__ */ jsxs98("form", { className: "wrapper flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxs98("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx112(
        FormControl,
        {
          as: "input",
          labelText: "Full Name",
          id: "fullName",
          name: "fullName",
          placeholder: "Enter your full name"
        }
      ),
      /* @__PURE__ */ jsx112(
        FormControl,
        {
          as: "input",
          labelText: "Email Address",
          id: "email",
          name: "email",
          placeholder: "Enter your email address"
        }
      )
    ] }),
    /* @__PURE__ */ jsx112(
      FormControl,
      {
        as: "input",
        labelText: "Subject",
        id: "subject",
        name: "subject",
        placeholder: "Enter subject"
      }
    ),
    /* @__PURE__ */ jsx112(
      FormControl,
      {
        as: "textarea",
        labelText: "Message",
        id: "message",
        name: "message",
        placeholder: "Enter your message here..."
      }
    ),
    /* @__PURE__ */ jsx112(Button, { element: "button", className: "md:self-end", children: "Submit" })
  ] });
}

// app/components/public/landingpage/WhyCard.tsx
import { jsx as jsx113, jsxs as jsxs99 } from "react/jsx-runtime";
function WhyCard(props) {
  return /* @__PURE__ */ jsxs99("article", { className: `block p-8 text-white rounded-3xl ${props.backgroundColor}`, children: [
    /* @__PURE__ */ jsx113("div", { className: "p-6 mb-8 rounded-3xl bg-[#FFFFFF29] w-fit", children: /* @__PURE__ */ jsx113(Svg, { src: props.icon, width: 24, height: 24 }) }),
    /* @__PURE__ */ jsx113("h3", { className: "mb-4 text-2xl font-black", children: props.title }),
    /* @__PURE__ */ jsx113("p", { className: "font-bold", children: props.subtext })
  ] });
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
import { jsx as jsx114 } from "react/jsx-runtime";
function SponsorsSlider() {
  return /* @__PURE__ */ jsx114(AutoplayCarousel, { children: /* @__PURE__ */ jsx114(CarouselItem, { children: /* @__PURE__ */ jsx114("img", { src: sponsor_logo_default, alt: "Zendesk" }) }) });
}

// app/routes/_public._index.tsx
import { jsx as jsx115, jsxs as jsxs100 } from "react/jsx-runtime";
function LandingPage() {
  return /* @__PURE__ */ jsxs100("main", { className: "snap-y", children: [
    /* @__PURE__ */ jsxs100("section", { className: "wrapper flex flex-col md:flex-row gap-16 xl:gap-24 md:items-center py-8 md:py-16", children: [
      /* @__PURE__ */ jsxs100("div", { className: "flex flex-col gap-6 sm:gap-8", children: [
        /* @__PURE__ */ jsxs100("h1", { className: "font-black text-4xl sm:text-5xl xl:text-[64px] leading-tight sm:leading-snug whitespace-nowrap", children: [
          "Capturing Moments",
          /* @__PURE__ */ jsx115("br", {}),
          "Creating ",
          /* @__PURE__ */ jsx115("span", { className: "text-accent", children: "Memories." })
        ] }),
        /* @__PURE__ */ jsx115("p", { className: "text-xl", children: "Join our monthly/yearly photo contests open to kids, both male and female aged 0-14 years and discover a world of imagination and inspiration." }),
        /* @__PURE__ */ jsxs100("div", { className: "flex gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsx115(Button, { element: "button", className: "w-full sm:w-auto", children: "Join Now" }),
          /* @__PURE__ */ jsx115(Button, { element: "a", href: "/contests", className: "w-full sm:w-auto", variant: "outline", children: "Explore Contests" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs100("div", { className: "grid grid-cols-3 gap-8 xl:gap-9 w-full", children: [
        /* @__PURE__ */ jsxs100("div", { className: "flex flex-col gap-8 xl:gap-9", children: [
          /* @__PURE__ */ jsx115("img", { className: "aspect-3/7 object-cover rounded-full outline-dashed outline-offset-4 w-full", src: hero_1_default, alt: "kid smiling" }),
          /* @__PURE__ */ jsx115("img", { className: "aspect-3/4 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_2_default, alt: "kid smiling" })
        ] }),
        /* @__PURE__ */ jsxs100("div", { className: "flex flex-col gap-8 xl:gap-9 justify-center", children: [
          /* @__PURE__ */ jsx115("img", { className: "aspect-square rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_3_default, alt: "kid smiling" }),
          /* @__PURE__ */ jsx115("img", { className: "aspect-3/7 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_4_default, alt: "kid smiling" })
        ] }),
        /* @__PURE__ */ jsx115("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx115("img", { className: "aspect-3/7 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_5_default, alt: "kid smiling" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs100("section", { className: "wrapper py-8 md:py-16", children: [
      /* @__PURE__ */ jsx115("h2", { className: "font-bold text-xl mb-4", children: "Who supports us" }),
      /* @__PURE__ */ jsx115(SponsorsSlider, {})
    ] }),
    /* @__PURE__ */ jsx115("section", { className: "py-8 md:py-16", children: /* @__PURE__ */ jsxs100("div", { className: "sm:wrapper bg-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between items-center gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ jsxs100("div", { className: "wrapper", children: [
        /* @__PURE__ */ jsxs100("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx115("p", { className: "font-black text-xl", children: "Our Vision" }),
          /* @__PURE__ */ jsx115("img", { className: "object-cover object-center", src: underline_default, alt: "underline", width: 100 })
        ] }),
        /* @__PURE__ */ jsxs100("h2", { className: "text-2xl sm:text-3xl font-black mb-6 leading-snug", children: [
          "Crafting ",
          /* @__PURE__ */ jsx115("span", { className: "text-accent", children: "Unforgettable" }),
          " Moments for Every Child's Special Day."
        ] }),
        /* @__PURE__ */ jsx115("p", { className: "font-medium", children: "To create uniquely memorable and exciting kid's birthdays, we strive to be entertaining, transparent, innovative, creative, exciting, efficient, and reliable in every aspect of our service." })
      ] }),
      /* @__PURE__ */ jsx115("div", { className: "wrapper", children: /* @__PURE__ */ jsx115("img", { className: "object-cover object-center w-full", src: birthday_present_default, alt: "wrapped gift" }) })
    ] }) }),
    /* @__PURE__ */ jsxs100("section", { className: "py-8 md:py-16 wrapper flex flex-col items-center", children: [
      /* @__PURE__ */ jsxs100("div", { className: "mb-6 sm:mb-16", children: [
        /* @__PURE__ */ jsx115("h2", { className: "font-satoshi-black text-2xl", children: "Why KOTMY?" }),
        /* @__PURE__ */ jsx115("img", { className: "object-fill w-[159px] h-5", src: underline_default, alt: "underline" })
      ] }),
      /* @__PURE__ */ jsx115("div", { className: "grid gap-6 lg:gap-12 sm:grid-cols-2 max-w-5xl", children: whyUsData.map((item) => /* @__PURE__ */ jsx115(WhyCard, { backgroundColor: item.bg, icon: item.icon, title: item.title, subtext: item.subtext }, item.title)) })
    ] }),
    /* @__PURE__ */ jsx115("section", { className: "py-8 md:py-16", children: /* @__PURE__ */ jsx115(ContestantSlider, { contestants: [{ id: "sdjc", image: hero_1_default }, { id: "adcn", image: hero_2_default }, { id: "kjsd", image: hero_3_default }] }) }),
    /* @__PURE__ */ jsx115("section", { className: "pt-4 sm:py-8 md:py-16", children: /* @__PURE__ */ jsxs100("div", { className: "sm:wrapper bg-[#817EFB] bg-pattern bg-cover bg-left text-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between items-center gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ jsxs100("div", { className: "wrapper", children: [
        /* @__PURE__ */ jsx115("h2", { className: "text-2xl sm:text-[40px] font-satoshi-black mb-6 leading-snug", children: "Refer A Friend And Earn Rewards" }),
        /* @__PURE__ */ jsx115("p", { className: "font-satoshi-medium mb-8", children: "Lorem ipsum dolor sit amet consectetur. Velit egestas auctor in amet dis sed sit egestas. Viverra morbi eget consectetur accumsan integer. Mi et etiam amet est egestas tellus quis." }),
        /* @__PURE__ */ jsx115("span", { className: "inline-block bg-[#E7E7E7] text-primary py-4 px-8 text-lg rounded-md font-black whitespace-nowrap", children: "COMING SOON" })
      ] }),
      /* @__PURE__ */ jsx115("div", { className: "wrapper bg-[#E7E7E7] rounded-3xl w-full aspect-square" })
    ] }) }),
    /* @__PURE__ */ jsx115("section", { id: "contact", className: "sm:py-8 md:py-16 sm:-scroll-m-4 md:-scroll-m-8 snap-start", children: /* @__PURE__ */ jsxs100("div", { className: "sm:wrapper bg-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ jsxs100("div", { className: "wrapper flex flex-col gap-12", children: [
        /* @__PURE__ */ jsx115("h2", { className: "text-2xl sm:text-[40px] font-satoshi-black leading-tight", children: "Do you want to know more about the way we work?" }),
        /* @__PURE__ */ jsxs100("div", { className: "flex flex-col lg:flex-row gap-6", children: [
          /* @__PURE__ */ jsxs100("p", { children: [
            /* @__PURE__ */ jsx115("span", { className: "block font-satoshi-black mb-3", children: "Phone Us" }),
            /* @__PURE__ */ jsx115("span", { className: "font-satoshi-medium whitespace-nowrap", children: "+234 703 515 9093" })
          ] }),
          /* @__PURE__ */ jsxs100("p", { children: [
            /* @__PURE__ */ jsx115("span", { className: "block font-satoshi-black mb-3", children: "Email Us" }),
            /* @__PURE__ */ jsx115("span", { className: "font-satoshi-medium", children: "kidmonthyear@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs100("div", { children: [
          /* @__PURE__ */ jsx115("span", { className: "block font-satoshi-black mb-3", children: "Follow Us" }),
          /* @__PURE__ */ jsxs100("span", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx115(Svg, { src: icons.twitterXIcon, width: "24px", height: "24px" }),
            /* @__PURE__ */ jsx115(Svg, { src: icons.instagramIcon, width: "24px", height: "24px" }),
            /* @__PURE__ */ jsx115(Svg, { src: icons.facebookIcon, width: "24px", height: "24px" }),
            /* @__PURE__ */ jsx115(Svg, { src: icons.youtubeIcon, width: "24px", height: "24px" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx115(ContactForm, {})
    ] }) })
  ] });
}

// app/routes/admin.overview.tsx
var admin_overview_exports = {};
__export(admin_overview_exports, {
  default: () => Home,
  loader: () => loader41
});
import { json as json39, redirect as redirect31 } from "@remix-run/node";
import { useLoaderData as useLoaderData40 } from "@remix-run/react";

// app/components/admin/AdminSummary.tsx
import { jsx as jsx116, jsxs as jsxs101 } from "react/jsx-runtime";
function AdminSummary({ users }) {
  return /* @__PURE__ */ jsxs101("div", { className: "border rounded-xl overflow-hidden basis-3/5 max-w-xl", children: [
    /* @__PURE__ */ jsxs101("div", { className: "flex gap-2 xs:gap-4 justify-between items-center py-3 px-4 border-b", children: [
      /* @__PURE__ */ jsx116("h3", { className: "text-primary font-bold max-sm:text-xs", children: "Admin Accounts" }),
      /* @__PURE__ */ jsx116(
        Cta_default,
        {
          element: "link",
          to: "/admin/accounts",
          variant: "outline",
          className: "border-disabled rounded-lg text-inherit py-1.5 px-3 text-xs font-medium",
          children: "See All Users"
        }
      )
    ] }),
    /* @__PURE__ */ jsx116("div", { className: "px-4 grid", children: users.slice(0, 5).map((user) => /* @__PURE__ */ jsx116(AdminUserCard, { user, className: "border-0 shadow-none rounded-none border-b last:border-b-0" }, user._id)) })
  ] });
}

// app/components/admin/ArticleSummary.tsx
import { jsx as jsx117 } from "react/jsx-runtime";
function ArticleSummary() {
  return /* @__PURE__ */ jsx117("div", { className: "basis-1/5 p-3" });
}

// app/components/admin/Aggregator.tsx
import { jsx as jsx118 } from "react/jsx-runtime";
function Aggregator({ className, children, ...props }) {
  return /* @__PURE__ */ jsx118("div", { className: "@container", children: /* @__PURE__ */ jsx118(
    "aside",
    {
      ...props,
      className: cn(
        "grid @sm:grid-cols-2 @xl:grid-cols-[repeat(auto-fit,_minmax(200px,auto))]",
        "gap-3 justify-items-center mx-auto p-3 border rounded-md bg-[#F6F8FA] text-sm overflow-hidden",
        className
      ),
      children
    }
  ) });
}
function AggregatorItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsx118("div", { className: cn("flex gap-3 items-center text-nowrap min-w-48", className), ...props, children });
}

// app/components/admin/ContestSummary.tsx
import { jsx as jsx119, jsxs as jsxs102 } from "react/jsx-runtime";
function ContestSummary({ contests: contests2 }) {
  let ongoingCount = contests2.filter((contest) => contest.status === "ongoing").length, yetToStartCount = contests2.filter((contest) => contest.status === "yet_to_start").length, closedCount = contests2.filter((contest) => ["completed", "registering"].includes(contest.status)).length;
  return /* @__PURE__ */ jsxs102("div", { className: "border rounded-xl overflow-hidden grow", children: [
    /* @__PURE__ */ jsxs102("div", { className: "flex gap-2 xs:gap-4 justify-between items-center py-3 px-4 border-b", children: [
      /* @__PURE__ */ jsx119("h3", { className: "text-primary font-bold max-sm:text-xs", children: "Contests" }),
      /* @__PURE__ */ jsx119(
        Cta_default,
        {
          element: "link",
          to: "/admin/contests",
          variant: "outline",
          className: "border-disabled rounded-lg text-inherit py-1.5 px-3 text-xs font-medium",
          children: "See Contests"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs102("div", { className: "px-4", children: [
      /* @__PURE__ */ jsxs102(Aggregator, { className: "my-4", children: [
        /* @__PURE__ */ jsxs102(AggregatorItem, { children: [
          /* @__PURE__ */ jsx119("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsx119(Svg, { src: icons.adminContestIcon, className: "text-primary" }) }),
          /* @__PURE__ */ jsxs102("span", { className: "grid", children: [
            /* @__PURE__ */ jsx119("span", { className: "text-primary font-satoshi-black", children: contests2.length }),
            /* @__PURE__ */ jsx119("span", { className: "", children: "Contests Created" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs102(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsx119("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsx119(Svg, { src: icons.adminContestIcon, className: "text-primary" }) }),
          /* @__PURE__ */ jsxs102("span", { className: "grid", children: [
            /* @__PURE__ */ jsx119("span", { className: "text-primary font-satoshi-black", children: ongoingCount }),
            /* @__PURE__ */ jsx119("span", { className: "", children: "Ongoing Contests" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs102(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsx119("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsx119(Svg, { src: icons.adminContestIcon, className: "text-primary" }) }),
          /* @__PURE__ */ jsxs102("span", { className: "grid", children: [
            /* @__PURE__ */ jsx119("span", { className: "text-primary font-satoshi-black", children: yetToStartCount }),
            /* @__PURE__ */ jsx119("span", { className: "", children: "Yet To Start Contests" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs102(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsx119("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsx119(Svg, { src: icons.adminContestIcon, className: "text-primary" }) }),
          /* @__PURE__ */ jsxs102("span", { className: "grid", children: [
            /* @__PURE__ */ jsx119("span", { className: "text-primary font-satoshi-black", children: closedCount }),
            /* @__PURE__ */ jsx119("span", { className: "", children: "Closed Contests" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx119(ContestTable, { data: contests2.slice(0, 5) })
    ] })
  ] });
}

// app/components/admin/TournamentSummary.tsx
import { jsx as jsx120, jsxs as jsxs103 } from "react/jsx-runtime";
function TournamentSummary({ tournaments }) {
  let numberOfContests = tournaments.reduce((total, tournament) => total + tournament.contests.length, 0);
  return /* @__PURE__ */ jsxs103("div", { className: "border rounded-xl overflow-hidden grow max-w-2xl", children: [
    /* @__PURE__ */ jsxs103("div", { className: "flex gap-2 xs:gap-4 justify-between items-center py-3 px-4 border-b", children: [
      /* @__PURE__ */ jsx120("h3", { className: "text-primary font-bold max-sm:text-xs", children: "Tournaments" }),
      /* @__PURE__ */ jsx120(
        Cta_default,
        {
          element: "link",
          to: "/admin/tournaments",
          variant: "outline",
          className: "border-disabled rounded-lg text-inherit py-1.5 px-3 text-xs font-medium",
          children: "See Tournaments"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs103("div", { className: "px-4 grid", children: [
      /* @__PURE__ */ jsxs103(Aggregator, { className: "mt-4", children: [
        /* @__PURE__ */ jsxs103(AggregatorItem, { children: [
          /* @__PURE__ */ jsx120("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsx120(Svg, { src: icons.adminTournamentIcon, className: "text-primary" }) }),
          /* @__PURE__ */ jsxs103("span", { className: "grid", children: [
            /* @__PURE__ */ jsx120("span", { className: "text-primary font-satoshi-black", children: tournaments.length }),
            /* @__PURE__ */ jsx120("span", { className: "", children: "Tournaments Created" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs103(AggregatorItem, { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsx120("span", { className: "bg-tertiary p-2 rounded-full border", children: /* @__PURE__ */ jsx120(Svg, { src: icons.adminContestIcon, className: "text-primary" }) }),
          /* @__PURE__ */ jsxs103("span", { className: "grid", children: [
            /* @__PURE__ */ jsx120("span", { className: "text-primary font-satoshi-black", children: numberOfContests }),
            /* @__PURE__ */ jsx120("span", { className: "", children: "Contests Created" })
          ] })
        ] })
      ] }),
      tournaments.slice(0, 2).map((tournament) => /* @__PURE__ */ jsx120(TournamentCard, { tournament, className: "border-0 shadow-none bg-transparent rounded-none border-b last:border-b-0" }, tournament.id))
    ] })
  ] });
}

// app/routes/admin.overview.tsx
import { jsx as jsx121, jsxs as jsxs104 } from "react/jsx-runtime";
async function loader41({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect31("/login");
  let { data: contests2 } = await contestRepo.getContests(), adminUsersquery = {
    has_admin_access: !0
  }, adminUsers3 = (await adminRepo.queryUsers(cookieHeader, adminUsersquery)).data?.items ?? [], { data: tournaments } = await tournamentRepo.getTournaments();
  return json39({
    adminUsers: adminUsers3,
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
  let { adminUsers: adminUsers3, tournaments, contests: contests2, transactions } = useLoaderData40();
  return /* @__PURE__ */ jsxs104("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs104("h1", { className: "grid font-medium text-primary", children: [
      /* @__PURE__ */ jsx121("span", { className: "text-xl sm:text-2xl font-satoshi-bold line-clamp-1", children: "Hello Admin" }),
      /* @__PURE__ */ jsx121("span", { className: "line-clamp-1", children: "Welcome back to KOTMY \u{1F44B}" })
    ] }),
    /* @__PURE__ */ jsxs104("section", { className: "my-6 grid sm:flex flex-wrap items-start gap-6", children: [
      /* @__PURE__ */ jsx121(AdminSummary, { users: adminUsers3 }),
      /* @__PURE__ */ jsx121(ArticleSummary, {}),
      /* @__PURE__ */ jsx121(TournamentSummary, { tournaments }),
      /* @__PURE__ */ jsx121(ContestSummary, { contests: contests2 })
    ] })
  ] });
}

// app/routes/user.affiliate.tsx
var user_affiliate_exports = {};
__export(user_affiliate_exports, {
  default: () => AffilliateLeaderBoard2,
  loader: () => loader42
});
import { json as json40, redirect as redirect32 } from "@remix-run/node";
import { useLoaderData as useLoaderData41, Form as Form29, useNavigation as useNavigation16 } from "@remix-run/react";
import { jsx as jsx122, jsxs as jsxs105 } from "react/jsx-runtime";
async function loader42({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect32("/login");
  let url = new URL(request.url), query = {};
  for (let [k, v] of url.searchParams.entries())
    v && (query[k] = v);
  let walletsResponse = await walletRepo.getUserWallets(cookieHeader);
  if (!walletsResponse.data)
    return redirect32("/login");
  query.wallet_id || (query.wallet_id = walletsResponse.data[0]?.str_id);
  let referralBoardRes = await walletRepo.queryReferralBoard(cookieHeader, query);
  return referralBoardRes.authRequired ? redirect32("/login") : json40({ wallets: walletsResponse.data, referralBoardRes: referralBoardRes.data, query });
}
function AffilliateLeaderBoard2() {
  let { wallets, referralBoardRes, query } = useLoaderData41(), navigation = useNavigation16();
  return console.log(referralBoardRes), /* @__PURE__ */ jsxs105("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsx122("p", { className: "font-semibold", children: "Affiliates leader board" }),
    /* @__PURE__ */ jsx122("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ jsx122(Form29, { method: "get", onSubmit: (e) => {
      try {
      } catch {
      }
    }, className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ jsxs105("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ jsxs105("label", { className: "flex flex-col text-xs text-gray-600", children: [
        /* @__PURE__ */ jsx122("span", { className: "mb-1", children: "From" }),
        /* @__PURE__ */ jsx122("input", { id: "min_created_at", name: "min_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
      ] }),
      /* @__PURE__ */ jsxs105("label", { className: "flex flex-col text-xs text-gray-600", children: [
        /* @__PURE__ */ jsx122("span", { className: "mb-1", children: "To" }),
        /* @__PURE__ */ jsx122("input", { id: "max_created_at", name: "max_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
      ] }),
      /* @__PURE__ */ jsxs105("label", { className: "flex flex-col text-xs text-gray-600", children: [
        /* @__PURE__ */ jsx122("span", { className: "mb-1", children: "Currency" }),
        /* @__PURE__ */ jsx122("select", { id: "wallet_id", name: "wallet_id", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: wallets.map((wallet) => /* @__PURE__ */ jsx122("option", { value: wallet.str_id, children: wallet.wallet_currency }, wallet.str_id)) })
      ] }),
      /* @__PURE__ */ jsx122("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx122("button", { type: "submit", disabled: navigation.state === "submitting", className: "px-4 py-2 bg-[#312E81] text-white rounded-lg text-sm", children: navigation.state === "submitting" ? "Searching..." : "Search" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx122("div", { className: "sm:block w-full overflow-x-auto", children: /* @__PURE__ */ jsxs105("table", { className: "w-full table-auto", children: [
      /* @__PURE__ */ jsx122("thead", { children: /* @__PURE__ */ jsxs105("tr", { className: "border-b border-secondary", children: [
        /* @__PURE__ */ jsx122("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Contestant Name" }),
        /* @__PURE__ */ jsx122("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Contestant Code" }),
        /* @__PURE__ */ jsx122("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Contest Name" }),
        /* @__PURE__ */ jsx122("th", { className: "text-left capitalize font-satoshi-black p-3", children: "Reward Earned" })
      ] }) }),
      /* @__PURE__ */ jsx122("tbody", { children: referralBoardRes?.items.map((referrerBoard, index) => /* @__PURE__ */ jsxs105("tr", { className: "border-b border-secondary", children: [
        /* @__PURE__ */ jsx122("td", { className: "p-3", children: `${referrerBoard.contestant_biodata.first_name} ${referrerBoard.contestant_biodata.last_name}` }),
        /* @__PURE__ */ jsx122("td", { className: "p-3", children: referrerBoard.contestant_deets[0]?.code }),
        /* @__PURE__ */ jsx122("td", { className: "p-3", children: referrerBoard.current_contest.name }),
        /* @__PURE__ */ jsx122("td", { className: "p-3", children: `${referralBoardRes.summary?.currency} ${referrerBoard.total_earning.toLocaleString()}` })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx122("div", { className: "hidden sm:flex justify-between items-center my-4", children: /* @__PURE__ */ jsx122(Pagination, { lastKey: referralBoardRes?.last_key_id, pageSize: referralBoardRes?.items_per_page, firstKey: referralBoardRes?.first_key_id }) })
  ] });
}

// app/routes/partners.home.tsx
var partners_home_exports = {};
__export(partners_home_exports, {
  default: () => PartnerProducts2,
  loader: () => loader43
});
import { json as json41, redirect as redirect33 } from "@remix-run/node";
import { useLoaderData as useLoaderData42, Form as Form30, useNavigation as useNavigation17 } from "@remix-run/react";
import { jsx as jsx123, jsxs as jsxs106 } from "react/jsx-runtime";
async function loader43({ request }) {
  let headings = ["full_name", "email", "username", "roles", "access"], cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect33("/login");
  let url = new URL(request.url), query = {};
  for (let [k, v] of url.searchParams.entries())
    query[k] = v;
  let pagedUsersRes = await partnerServer.getPartnerProducts(query, cookieHeader);
  return pagedUsersRes.authRequired ? redirect33("/login") : (console.log(pagedUsersRes), json41({ data: pagedUsersRes.data, query }));
}
function PartnerProducts2() {
  let { data, query } = useLoaderData42(), navigation = useNavigation17();
  return console.log(data), /* @__PURE__ */ jsxs106("main", { className: "w-full overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxs106("div", { className: "flex justify-between items-center mb-8 sm:mb-16", children: [
      /* @__PURE__ */ jsx123("h1", { className: "text-2xl font-black text-primary", children: "Products" }),
      /* @__PURE__ */ jsx123(Cta_default, { element: "link", to: "/partners/add", className: " gap-2 items-center rounded-lg px-3 py-2", children: "Add Product" })
    ] }),
    /* @__PURE__ */ jsx123("div", { className: "flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8", children: /* @__PURE__ */ jsx123(Form30, { method: "get", className: "w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ jsxs106("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3 items-end", children: [
      /* @__PURE__ */ jsxs106("div", { children: [
        /* @__PURE__ */ jsx123("label", { className: "block text-xs font-semibold mb-1", children: "Product Price" }),
        /* @__PURE__ */ jsx123(
          "input",
          {
            type: "number",
            name: "price,wildcard,status",
            className: "w-full border rounded-lg px-3 py-2",
            placeholder: "Price"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs106("div", { children: [
        /* @__PURE__ */ jsx123("label", { className: "block text-xs font-semibold mb-1", children: "Name, Description or tag" }),
        /* @__PURE__ */ jsx123(
          "input",
          {
            type: "text",
            name: "wildcard",
            className: "w-full border rounded-lg px-3 py-2",
            placeholder: "other fields"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs106("div", { children: [
        /* @__PURE__ */ jsx123("label", { className: "block text-xs font-semibold mb-1", children: "Status" }),
        /* @__PURE__ */ jsxs106(
          "select",
          {
            name: "status",
            className: "w-full border rounded-lg px-3 py-2",
            children: [
              /* @__PURE__ */ jsx123("option", { value: "available", children: "Available" }),
              /* @__PURE__ */ jsx123("option", { value: "out_of_stock", children: "Out of Stock" }),
              /* @__PURE__ */ jsx123("option", { value: "suspended", children: "Suspended" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx123("div", { className: "sm:col-span-1 flex gap-2 mt-2 sm:mt-0", children: /* @__PURE__ */ jsx123("button", { type: "submit", className: "bg-[#4B4870] text-white px-4 py-2 rounded-lg font-semibold", children: "Search" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx123("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8", children: data?.items && data.items.length > 0 ? data.items.map((product) => {
      let imgSrc = product.main_image_url && product.main_image_url !== "" ? product.main_image_url : no_image_default;
      return /* @__PURE__ */ jsxs106(
        "div",
        {
          className: "flex flex-col bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden h-full min-h-[340px]",
          children: [
            /* @__PURE__ */ jsx123("div", { className: "h-40 w-full bg-gray-100 flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx123(
              "img",
              {
                src: imgSrc,
                alt: product.name,
                className: "object-cover w-full h-full",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxs106("div", { className: "flex flex-col flex-1 p-4 gap-2", children: [
              /* @__PURE__ */ jsxs106("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsx123("span", { className: "font-bold text-base text-primary line-clamp-1", children: product.name }),
                /* @__PURE__ */ jsx123("span", { className: "text-xs px-2 py-1 rounded bg-gray-50 border border-gray-200 font-semibold capitalize", children: product.status.replace(/_/g, " ") })
              ] }),
              /* @__PURE__ */ jsx123("div", { className: "text-sm text-gray-500 line-clamp-2 mb-1", children: product.description }),
              /* @__PURE__ */ jsxs106("div", { className: "flex items-center gap-2 text-lg font-bold text-accent", children: [
                product.currency,
                " ",
                product.price_min,
                product.price_max && product.price_max !== product.price_min ? /* @__PURE__ */ jsxs106("span", { className: "text-gray-400 font-normal text-base", children: [
                  "- ",
                  product.currency,
                  " ",
                  product.price_max
                ] }) : null
              ] }),
              /* @__PURE__ */ jsx123("div", { className: "flex flex-wrap gap-1 mt-1", children: product.tags && product.tags.length > 0 && product.tags.map((tag) => /* @__PURE__ */ jsx123("span", { className: "bg-indigo-50 text-indigo-600 text-xs px-2 py-0.5 rounded-full", children: tag }, tag)) }),
              /* @__PURE__ */ jsxs106("div", { className: "mt-auto flex items-center justify-between pt-2", children: [
                /* @__PURE__ */ jsx123("span", { className: "text-xs text-gray-400", children: product.category }),
                /* @__PURE__ */ jsxs106("div", { className: "flex items-center gap-2", children: [
                  product.sku && /* @__PURE__ */ jsxs106("span", { className: "text-xs text-gray-400", children: [
                    "SKU: ",
                    product.sku
                  ] }),
                  /* @__PURE__ */ jsx123(Cta_default, { element: "link", to: `/partners/product/update/${product._id}`, className: "px-3 py-1 rounded-md text-xs font-semibold border-secondary", variant: "outline", children: "Edit" })
                ] })
              ] })
            ] })
          ]
        },
        product._id
      );
    }) : /* @__PURE__ */ jsx123("div", { className: "col-span-full text-center text-gray-400 py-12", children: "No products found." }) }),
    /* @__PURE__ */ jsx123("div", { className: " sm:flex justify-between items-center my-4", children: /* @__PURE__ */ jsx123(Pagination, { lastKey: query?.last_key_id, pageSize: query?.items_per_page, firstKey: query?.first_key_id }) })
  ] });
}

// app/routes/admin._index.tsx
var admin_index_exports = {};
__export(admin_index_exports, {
  loader: () => loader44
});
import { redirect as redirect34 } from "@remix-run/node";
function loader44() {
  return redirect34("/admin/overview");
}

// app/routes/partners.add.tsx
var partners_add_exports = {};
__export(partners_add_exports, {
  action: () => action25,
  default: () => AddPartnerProduct,
  loader: () => loader45
});
import { json as json42, redirect as redirect35 } from "@remix-run/node";
import { Form as Form31, useActionData as useActionData13, useLoaderData as useLoaderData43, useNavigate as useNavigate23, useNavigation as useNavigation18 } from "@remix-run/react";
import { useEffect as useEffect28, useState as useState38 } from "react";
import { jsx as jsx124, jsxs as jsxs107 } from "react/jsx-runtime";
async function loader45({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect35("/login");
  let locationsRes = await partnerServer.getPartnerLocations({ page_size: 1e3 }, cookieHeader);
  return locationsRes.authRequired ? redirect35("/login") : json42({
    locations: locationsRes.data?.items ?? []
  });
}
async function action25({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader)
    return redirect35("/login");
  let formData = await request.formData(), dto = {
    name: formData.get("name"),
    description: formData.get("description"),
    price_min: Number(formData.get("price_min")) || 0,
    price_max: Number(formData.get("price_max")) || 0,
    category: formData.get("category"),
    currency: formData.get("currency"),
    status: formData.get("status"),
    sku: formData.get("sku"),
    tags: formData.getAll("tags").map((t) => t.toString()),
    locations: formData.getAll("locations").map((location) => location.toString()),
    image: formData.get("image") ? formData.get("image").size === 0 ? null : formData.get("image") : null
  };
  return await partnerServer.addPartnerProduct(dto, cookieHeader);
}
function AddPartnerProduct() {
  let { locations } = useLoaderData43(), actionData = useActionData13(), isSubmitting = useNavigation18().state === "submitting", navigate = useNavigate23(), [tags, setTags] = useState38("");
  return useEffect28(() => {
    actionData?.error && (console.log(actionData.error), toast({
      variant: "destructive",
      title: "Add product failed",
      description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not add partner product!"
    })), actionData?.data && (toast({
      variant: "default",
      title: "Product added",
      description: "Partner product was successfully added!"
    }), navigate("/partners/home"));
  }, [actionData, navigate]), /* @__PURE__ */ jsxs107("main", { className: "w-full overflow-y-auto p-6 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxs107("div", { className: "flex items-center mb-10 sm:mb-16 gap-4", children: [
      /* @__PURE__ */ jsx124(Cta_default, { element: "button", type: "button", onClick: () => navigate(-1), className: "hover:bg-[#F7F7F8] text-primary px-4 py-2 rounded-lg", variant: "outline", children: "Back" }),
      /* @__PURE__ */ jsx124("h1", { className: "text-2xl font-black text-primary", children: "Add Partner Product" })
    ] }),
    /* @__PURE__ */ jsxs107(Form31, { method: "post", encType: "multipart/form-data", className: "grid gap-4 text-sm bg-white p-6 rounded-xl border border-gray-100 shadow-sm", children: [
      /* @__PURE__ */ jsx124(FormControl, { as: "input", labelText: "Product Name", name: "name", id: "name", required: !0, placeholder: "Enter product name" }),
      /* @__PURE__ */ jsx124(FormControl, { as: "textarea", labelText: "Description", name: "description", id: "description", required: !0, placeholder: "Enter product description" }),
      /* @__PURE__ */ jsx124(FormControl, { as: "input", labelText: "Category", name: "category", id: "category", placeholder: "e.g. Shoes" }),
      /* @__PURE__ */ jsxs107("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx124(FormControl, { as: "input", labelText: "Price Min", name: "price_min", id: "price_min", type: "number", min: 0, required: !0, placeholder: "0" }),
        /* @__PURE__ */ jsx124(FormControl, { as: "input", labelText: "Price Max", name: "price_max", id: "price_max", type: "number", min: 0, required: !0, placeholder: "0" })
      ] }),
      /* @__PURE__ */ jsxs107(Select2, { label: "Currency", id: "currency", name: "currency", defaultValue: "NGN", required: !0, children: [
        /* @__PURE__ */ jsx124("option", { value: "NGN", children: "NGN" }),
        /* @__PURE__ */ jsx124("option", { value: "USD", children: "USD" })
      ] }),
      /* @__PURE__ */ jsxs107(Select2, { label: "Status", id: "status", name: "status", defaultValue: "available", required: !0, children: [
        /* @__PURE__ */ jsx124("option", { value: "available", children: "Available" }),
        /* @__PURE__ */ jsx124("option", { value: "out_of_stock", children: "Out of Stock" }),
        /* @__PURE__ */ jsx124("option", { value: "suspended", children: "Suspended" })
      ] }),
      /* @__PURE__ */ jsx124(FormControl, { as: "input", labelText: "SKU", name: "sku", id: "sku", placeholder: "Stock Keeping Unit" }),
      /* @__PURE__ */ jsx124(FormControl, { as: "input", labelText: "Tags (comma separated)", name: "tags", id: "tags", value: tags, onChange: (e) => setTags(e.target.value), placeholder: "e.g. shoes, sports, men" }),
      /* @__PURE__ */ jsxs107("label", { className: "block font-bold text-sm", children: [
        "Locations",
        /* @__PURE__ */ jsx124("div", { className: "mt-2 rounded-lg border border-secondary bg-white p-3", children: /* @__PURE__ */ jsx124(
          "select",
          {
            name: "locations",
            id: "locations",
            multiple: !0,
            className: "w-full min-h-36 rounded-md border border-gray-200 bg-transparent p-3 text-sm outline-none focus:border-accent",
            children: locations.length > 0 ? locations.map((location) => /* @__PURE__ */ jsx124("option", { value: location.str_id, children: location.name }, location.str_id)) : /* @__PURE__ */ jsx124("option", { value: "", disabled: !0, children: "No locations available" })
          }
        ) }),
        /* @__PURE__ */ jsx124("span", { className: "mt-1 block text-xs font-normal text-gray-500", children: "Hold Ctrl or Cmd to select multiple locations." })
      ] }),
      /* @__PURE__ */ jsx124("div", { children: /* @__PURE__ */ jsx124(DragnDrop, { name: "image", labelText: "Product Image", multiple: !1, required: !1 }) }),
      /* @__PURE__ */ jsxs107("div", { className: "flex justify-end gap-4 mt-4", children: [
        /* @__PURE__ */ jsx124(Cta_default, { element: "button", type: "reset", className: "px-4 py-2 rounded-lg font-medium border-secondary active:border-accent", variant: "outline", children: "Reset" }),
        /* @__PURE__ */ jsx124(Cta_default, { disabled: isSubmitting, element: "button", type: "submit", className: "px-4 py-2 rounded-lg font-medium", children: isSubmitting ? "Adding product..." : "Add Product" })
      ] })
    ] })
  ] });
}

// app/routes/user.profile.tsx
var user_profile_exports = {};
__export(user_profile_exports, {
  action: () => action26,
  default: () => UserProfilePage,
  loader: () => loader46
});
import { Form as Form32, useLoaderData as useLoaderData44, useActionData as useActionData14, useNavigate as useNavigate24 } from "@remix-run/react";
import { json as json43, redirect as redirect36 } from "@remix-run/node";
import { useEffect as useEffect29, useRef as useRef11, useState as useState39 } from "react";
import { Fragment as Fragment12, jsx as jsx125, jsxs as jsxs108 } from "react/jsx-runtime";
async function loader46({ request }) {
  let cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader)
    return redirect36("/login");
  let { data, error, authRequired } = await authServer.getMe(cookieHeader || "");
  return authRequired ? redirect36("/login") : json43({ data, error });
}
async function action26({ request }) {
  let cookieHeader = request.headers.get("Cookie"), formData = await request.formData(), updateData = authServer.prepareUpdateUserPayload(formData), { data, error } = await authServer.updateProfile(updateData, cookieHeader || "");
  return json43({ data, error });
}
function useUserProfileController() {
  let { toast: toast5 } = useToast(), loaderData = useLoaderData44(), actionData = useActionData14(), navigate = useNavigate24(), [profile, setProfile] = useState39(loaderData?.data?.user_profile || null), [email, setEmail] = useState39(loaderData?.data?.email || ""), [referralCode, setReferralCode] = useState39(loaderData?.data?.referral_code || ""), [imagePreview, setImagePreview] = useState39(profile?.image_url), fileInputRef = useRef11(null);
  return useEffect29(() => {
    actionData?.error && toast5({
      variant: "destructive",
      title: "Update Failed",
      description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not update profile."
    }), actionData?.data && (toast5({
      variant: "default",
      title: "Profile Updated",
      description: "Your profile has been updated successfully."
    }), setProfile(actionData.data.user_profile || null), setEmail(actionData.data.email || ""), setReferralCode(actionData.data.referral_code || ""), setImagePreview(actionData.data.user_profile?.image_url));
  }, [actionData]), { profile, email, imagePreview, fileInputRef, handleImageChange: (e) => {
    let file = e.target.files?.[0];
    file && setImagePreview(URL.createObjectURL(file));
  }, referralCode };
}
function UserProfilePage() {
  let { profile, email, imagePreview, fileInputRef, handleImageChange, referralCode } = useUserProfileController(), isLoading = !profile && !email;
  return /* @__PURE__ */ jsx125("div", { className: "min-h-screen text-gray-900 bg-secondary flex flex-col items-center pt-24 pb-16", children: /* @__PURE__ */ jsxs108("div", { className: "max-w-2xl w-full px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs108("div", { className: "flex flex-col items-center mb-8", children: [
      /* @__PURE__ */ jsx125("div", { className: "w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-200 mb-4", children: isLoading ? /* @__PURE__ */ jsx125("div", { className: "w-full h-full bg-gray-200 animate-pulse" }) : imagePreview ? /* @__PURE__ */ jsx125("img", { src: imagePreview, alt: "Profile", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsx125(Svg, { src: icons.avatarIcon, className: "w-full h-full" }) }),
      isLoading ? /* @__PURE__ */ jsxs108(Fragment12, { children: [
        /* @__PURE__ */ jsx125("div", { className: "h-8 w-40 bg-gray-200 rounded animate-pulse mb-2" }),
        /* @__PURE__ */ jsx125("div", { className: "h-5 w-56 bg-gray-200 rounded animate-pulse" })
      ] }) : /* @__PURE__ */ jsxs108(Fragment12, { children: [
        /* @__PURE__ */ jsxs108("h1", { className: "text-3xl font-bold text-gray-900", children: [
          profile?.first_name,
          " ",
          profile?.last_name
        ] }),
        /* @__PURE__ */ jsx125("p", { className: "text-lg text-gray-600", children: email })
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxs108("div", { className: "bg-white border rounded-3xl p-8 flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx125("div", { className: "h-10 bg-gray-200 rounded animate-pulse" }),
      /* @__PURE__ */ jsx125("div", { className: "h-10 bg-gray-200 rounded animate-pulse" }),
      /* @__PURE__ */ jsx125("div", { className: "h-10 bg-gray-200 rounded animate-pulse" }),
      /* @__PURE__ */ jsx125("div", { className: "h-10 bg-gray-200 rounded animate-pulse" }),
      /* @__PURE__ */ jsx125("div", { className: "h-10 bg-gray-200 rounded animate-pulse" }),
      /* @__PURE__ */ jsx125("div", { className: "h-12 bg-gray-200 rounded animate-pulse" })
    ] }) : /* @__PURE__ */ jsxs108(Form32, { method: "POST", encType: "multipart/form-data", className: "bg-white border rounded-3xl p-8 flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx125(FormControl, { as: "input", id: "first_name", name: "first_name", labelText: "First Name", defaultValue: profile?.first_name, icon: icons.avatarIcon, required: !0 }),
      /* @__PURE__ */ jsx125(FormControl, { as: "input", id: "last_name", name: "last_name", labelText: "Last Name", defaultValue: profile?.last_name, icon: icons.avatarIcon, required: !0 }),
      /* @__PURE__ */ jsx125(FormControl, { as: "input", id: "email", name: "email", labelText: "Email", defaultValue: email, icon: icons.avatarIcon, required: !0, readOnly: !0 }),
      /* @__PURE__ */ jsx125(FormControl, { as: "input", id: "status", name: "status", labelText: "Status", defaultValue: profile?.status, icon: icons.avatarIcon }),
      /* @__PURE__ */ jsx125(FormControl, { as: "input", id: "", name: "", labelText: "Referral code", defaultValue: referralCode, icon: icons.lockIcon, required: !0, readOnly: !0 }),
      /* @__PURE__ */ jsxs108("label", { htmlFor: "image", className: "flex items-center gap-2 text-sm font-medium text-gray-700", children: [
        /* @__PURE__ */ jsx125(Svg, { src: icons.avatarIcon, className: "w-4 h-4" }),
        "Profile Image"
      ] }),
      /* @__PURE__ */ jsx125(DragnDrop, { name: "image", labelText: "Upload Image", multiple: !1, required: !1 }),
      /* @__PURE__ */ jsx125(Cta_default, { element: "button", type: "submit", className: "rounded-lg p-3", children: "Update Profile" })
    ] })
  ] }) });
}

// app/routes/user.wallet.tsx
var user_wallet_exports = {};
__export(user_wallet_exports, {
  action: () => action27,
  default: () => WalletPage2,
  loader: () => loader47
});
import { json as json44, redirect as redirect37 } from "@remix-run/node";
import { Link as Link21, useActionData as useActionData15, useLoaderData as useLoaderData45, useFetcher as useFetcher14 } from "@remix-run/react";
import { useState as useState40, useMemo as useMemo6, useEffect as useEffect30 } from "react";
import { jsx as jsx126, jsxs as jsxs109 } from "react/jsx-runtime";
async function loader47({ request }) {
  let cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader)
    return redirect37("/login");
  let url = new URL(request.url), page_size = Number(url.searchParams.get("page_size") ?? "10"), last_key_id = url.searchParams.get("last_key_id"), first_key_id = url.searchParams.get("first_key_id"), wallet_id_param = url.searchParams.get("wallet_id"), walletsResponse = await walletRepo.getUserWallets(cookieHeader), wallets = [];
  if (walletsResponse.data?.length)
    for (let _wallet of walletsResponse.data) {
      if (wallet_id_param && wallet_id_param === _wallet._id) {
        let pagedLedgers2 = await walletRepo.getUserLedgersForWallet(cookieHeader, {
          wallet_id: _wallet._id,
          page_size,
          last_key_id: last_key_id ?? void 0
          // first_key_id: first_key_id ?? undefined,
        });
        pagedLedgers2.data && wallets.push({ wallet: _wallet, pagedLedgers: pagedLedgers2.data });
        continue;
      }
      let pagedLedgers = await walletRepo.getUserLedgersForWallet(cookieHeader, {
        wallet_id: _wallet._id,
        page_size: 10
      });
      pagedLedgers.data && wallets.push({ wallet: _wallet, pagedLedgers: pagedLedgers.data });
    }
  return json44({ wallets });
}
async function action27({ request }) {
  let cookieHeader = request.headers.get("Cookie") ?? "", formData = await request.formData(), cleaned = {};
  formData.forEach((value, key) => {
    let v = (value ?? "").toString().trim();
    v !== "" && (cleaned[key] = v);
  });
  let query = {};
  cleaned.transaction_type && (query.transaction_type = cleaned.transaction_type), cleaned.status && (query.status = cleaned.status), cleaned.min_amount && (query.min_amount = Number(cleaned.min_amount)), cleaned.max_amount && (query.max_amount = Number(cleaned.max_amount)), cleaned.min_created_at && (query.min_created_at = cleaned.min_created_at), cleaned.max_created_at && (query.max_created_at = cleaned.max_created_at), cleaned.user_id && (query.user_id = cleaned.user_id), cleaned.wallet_id && (query.wallet_id = cleaned.wallet_id), cleaned.currency && (query.currency = cleaned.currency), cleaned.payment_method && (query.payment_method = cleaned.payment_method), cleaned.contest_code && (query.contest_code = cleaned.contest_code);
  let walletResp = await walletRepo.wallet_search(query, cookieHeader);
  if (walletResp.error)
    return json44({ error: walletResp.error }, { status: 400 });
  let ledgersResp = await walletRepo.getUserLedgersForWallet(cookieHeader, query);
  if (ledgersResp.error)
    return json44({ error: ledgersResp.error }, { status: 400 });
  let walletsResp = await walletRepo.getUserWallets(cookieHeader), wallets = [];
  if (walletsResp.data?.length) {
    let cleanedWallets = [];
    for (let _wallet of walletsResp.data)
      if (_wallet._id === walletResp.data?._id) {
        var updatedWallet = { ..._wallet };
        updatedWallet.metrics.money_in = walletResp.data.metrics.money_in, updatedWallet.metrics.money_out = walletResp.data.metrics.money_out, updatedWallet.metrics.net_change_this_month = walletResp.data.metrics.net_change_this_month, updatedWallet.metrics.net_change = walletResp.data.metrics.net_change, cleanedWallets.push({ wallet: updatedWallet, pagedLedgers: ledgersResp.data });
      } else {
        let paged = await walletRepo.getUserLedgersForWallet(cookieHeader, { wallet_id: _wallet._id, page_size: 10 });
        cleanedWallets.push({ wallet: _wallet, pagedLedgers: paged.data ?? { items: [], total_items: 0, items_per_page: 10 } });
      }
    cleanedWallets.length && (wallets = cleanedWallets);
  }
  return console.log("WALLET RESP", walletResp, wallets), json44({ wallets });
}
function useWalletController2() {
  let { wallets } = useLoaderData45(), { setUserStoreManager, getUserStoreManager } = useUserManager(), [user, setUser] = useState40(null), [activeWalletId, setActiveWalletId] = useState40(
    wallets.length > 0 ? wallets[0].wallet._id : null
  );
  useEffect30(() => {
    let _user = getUserStoreManager();
    _user && setUser(_user);
  }, [getUserStoreManager]);
  let activeData = useMemo6(() => wallets.find((w) => w.wallet._id === activeWalletId) || null, [activeWalletId, wallets]), formatCurrency = (amount, currency) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount), [searchOpen, setSearchOpen] = useState40(!1), fetcher = useFetcher14(), isSubmitting = fetcher.state === "submitting", actionData = useActionData15(), [walletsState, setWalletsState] = useState40(wallets);
  return useEffect30(() => {
    (fetcher.data?.wallets ?? actionData?.wallets) || setWalletsState(wallets);
  }, [wallets, fetcher.data, actionData]), useEffect30(() => {
    let fw = fetcher.data?.wallets ?? actionData?.wallets;
    fw && Array.isArray(fw) && setWalletsState(fw);
  }, [fetcher.data, actionData]), {
    wallets,
    activeData,
    setActiveWalletId,
    formatCurrency,
    user,
    actionData,
    searchOpen,
    isSubmitting,
    walletsState,
    setSearchOpen,
    fetcher
  };
}
function WalletPage2() {
  let { wallets, activeData, setActiveWalletId, formatCurrency, user, searchOpen, isSubmitting, walletsState, setSearchOpen, fetcher } = useWalletController2();
  if (!activeData)
    return /* @__PURE__ */ jsx126("div", { className: "p-8", children: "No wallets found." });
  let activeDataLocal = walletsState.find((w) => w.wallet._id === activeData?.wallet._id) ?? activeData, { wallet, pagedLedgers } = activeDataLocal;
  return /* @__PURE__ */ jsxs109("div", { className: "p-8 max-w-7xl mx-auto bg-[#F9FAFB] min-h-screen", children: [
    /* @__PURE__ */ jsx126("h1", { className: "text-2xl font-semibold mb-6", children: "Wallet" }),
    /* @__PURE__ */ jsxs109("div", { className: "bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8", children: [
      /* @__PURE__ */ jsxs109("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxs109("div", { className: "flex items-center gap-2 text-gray-500", children: [
          /* @__PURE__ */ jsx126("span", { className: "text-sm", children: "Wallet balances" }),
          /* @__PURE__ */ jsx126("button", { className: "hover:bg-gray-100 p-1 rounded-full", children: "\u{1F441}\uFE0F" })
        ] }),
        /* @__PURE__ */ jsx126(
          "select",
          {
            className: "border rounded-full px-4 py-2 bg-gray-50 text-sm font-medium outline-none cursor-pointer",
            value: wallet._id,
            onChange: (e) => setActiveWalletId(e.target.value),
            children: walletsState.map((w) => /* @__PURE__ */ jsxs109("option", { value: w.wallet._id, children: [
              w.wallet.wallet_currency,
              " - ",
              w.wallet.account_number
            ] }, w.wallet._id))
          }
        )
      ] }),
      /* @__PURE__ */ jsx126("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ jsxs109("div", { children: [
        /* @__PURE__ */ jsx126("div", { className: "text-4xl font-bold mb-1", children: formatCurrency(wallet.withdrawable_balance, wallet.wallet_currency) }),
        /* @__PURE__ */ jsx126("div", { className: "text-gray-400 text-sm", children: wallet.wallet_name })
      ] }) }),
      /* @__PURE__ */ jsxs109("div", { className: "flex flex-col sm:flex-row gap-3 mt-8", children: [
        /* @__PURE__ */ jsx126(Link21, { to: `/user/withdraw/${wallet._id}`, children: /* @__PURE__ */ jsx126("button", { className: "bg-[#312E81] text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto", children: "\u2197 Withdraw" }) }),
        user?.withdrawal_pin_set ? /* @__PURE__ */ jsx126(Link21, { to: `/user/addwithdrawalaccount/${wallet._id}`, children: /* @__PURE__ */ jsx126("button", { className: "bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto", children: "Add withdrawal account" }) }) : /* @__PURE__ */ jsx126(Link21, { to: "/user/setwithdrawalpin", children: /* @__PURE__ */ jsx126("button", { className: "bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto", children: "+ Set withdrawal PIN" }) }),
        /* @__PURE__ */ jsx126("button", { className: "bg-white border text-gray-700 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 w-full sm:w-auto", children: "\u21C4 Transfer to another wallet" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs109("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs109("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsx126("h2", { className: "text-lg font-medium text-gray-700", children: "Search" }),
        /* @__PURE__ */ jsxs109(
          "button",
          {
            type: "button",
            onClick: () => setSearchOpen((s) => !s),
            className: "flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800",
            "aria-expanded": searchOpen,
            children: [
              /* @__PURE__ */ jsx126("span", { children: searchOpen ? "Hide" : "Show" }),
              /* @__PURE__ */ jsx126(
                "svg",
                {
                  className: `w-4 h-4 transition-transform ${searchOpen ? "rotate-180" : ""}`,
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx126("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx126("div", { className: `transition-all ${searchOpen ? "overflow-scroll max-h-96" : "overflow-hidden max-h-0"}`, children: /* @__PURE__ */ jsx126("div", { className: "bg-white border border-gray-100 rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ jsxs109(fetcher.Form, { method: "post", className: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm", children: [
        /* @__PURE__ */ jsxs109("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx126("span", { className: "mb-1", children: "Transaction type" }),
          /* @__PURE__ */ jsxs109("select", { id: "transaction_type", name: "transaction_type", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: [
            /* @__PURE__ */ jsx126("option", { value: "", children: "All transaction types" }),
            /* @__PURE__ */ jsx126("option", { value: "credit", children: "Credit" }),
            /* @__PURE__ */ jsx126("option", { value: "debit", children: "Debit" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs109("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx126("span", { className: "mb-1", children: "Status" }),
          /* @__PURE__ */ jsxs109("select", { id: "status", name: "status", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: [
            /* @__PURE__ */ jsx126("option", { value: "", children: "Any status" }),
            /* @__PURE__ */ jsx126("option", { value: "pending", children: "Pending" }),
            /* @__PURE__ */ jsx126("option", { value: "completed", children: "Completed" }),
            /* @__PURE__ */ jsx126("option", { value: "void", children: "Void" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs109("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx126("span", { className: "mb-1", children: "Min amount" }),
          /* @__PURE__ */ jsx126("input", { id: "min_amount", name: "min_amount", type: "number", step: "0.01", placeholder: "Min amount", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
        ] }),
        /* @__PURE__ */ jsxs109("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx126("span", { className: "mb-1", children: "Max amount" }),
          /* @__PURE__ */ jsx126("input", { id: "max_amount", name: "max_amount", type: "number", step: "0.01", placeholder: "Max amount", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
        ] }),
        /* @__PURE__ */ jsxs109("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx126("span", { className: "mb-1", children: "From date" }),
          /* @__PURE__ */ jsx126("input", { id: "min_created_at", name: "min_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
        ] }),
        /* @__PURE__ */ jsxs109("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx126("span", { className: "mb-1", children: "To date" }),
          /* @__PURE__ */ jsx126("input", { id: "max_created_at", name: "max_created_at", type: "date", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
        ] }),
        /* @__PURE__ */ jsxs109("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx126("span", { className: "mb-1", children: "Payment method" }),
          /* @__PURE__ */ jsxs109("select", { id: "payment_method", name: "payment_method", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none", children: [
            /* @__PURE__ */ jsx126("option", { value: "", children: "Any payment method" }),
            /* @__PURE__ */ jsx126("option", { value: "flutterwave", children: "Flutterwave" }),
            /* @__PURE__ */ jsx126("option", { value: "bank", children: "Bank" }),
            /* @__PURE__ */ jsx126("option", { value: "paystack", children: "Paystack" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs109("label", { className: "flex flex-col text-xs text-gray-600", children: [
          /* @__PURE__ */ jsx126("span", { className: "mb-1", children: "Contest code" }),
          /* @__PURE__ */ jsx126("input", { id: "contest_code", name: "contest_code", className: "border rounded-md px-3 py-2 bg-gray-50 outline-none" })
        ] }),
        /* @__PURE__ */ jsx126("input", { type: "hidden", name: "wallet_id", value: wallet._id }),
        /* @__PURE__ */ jsx126("div", { className: "sm:col-span-3 flex justify-end mt-2", children: /* @__PURE__ */ jsx126("button", { type: "submit", disabled: isSubmitting, className: "px-4 py-2 bg-[#312E81] text-white rounded-lg text-sm disabled:opacity-50", children: isSubmitting ? "Searching..." : "Search" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs109("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs109("div", { className: "flex items-center gap-2 text-gray-600 mb-4", children: [
        /* @__PURE__ */ jsx126("span", { children: "\u{1F4C1}" }),
        /* @__PURE__ */ jsxs109("h2", { className: "font-medium", children: [
          "Recent wallet activity (",
          wallet.wallet_currency,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxs109("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 mb-8 border-b border-gray-100 pb-6", children: [
        /* @__PURE__ */ jsx126(
          MetricItem2,
          {
            label: "Net change this month",
            value: formatCurrency(wallet.metrics.net_change_this_month, wallet.wallet_currency),
            tooltip: !0
          }
        ),
        /* @__PURE__ */ jsx126(
          MetricItem2,
          {
            label: "Money in",
            value: formatCurrency(wallet.metrics.money_in, wallet.wallet_currency)
          }
        ),
        /* @__PURE__ */ jsx126(
          MetricItem2,
          {
            label: "Money out",
            value: formatCurrency(wallet.metrics.money_out, wallet.wallet_currency)
          }
        )
      ] }),
      /* @__PURE__ */ jsx126("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs109("table", { className: "w-full text-left text-sm", children: [
        /* @__PURE__ */ jsx126("thead", { children: /* @__PURE__ */ jsxs109("tr", { className: "text-gray-400 border-b", children: [
          /* @__PURE__ */ jsx126("th", { className: "pb-4 font-medium", children: "S/N" }),
          /* @__PURE__ */ jsx126("th", { className: "pb-4 font-medium", children: "Date" }),
          /* @__PURE__ */ jsx126("th", { className: "pb-4 font-medium", children: "Ref ID" }),
          /* @__PURE__ */ jsx126("th", { className: "pb-4 font-medium", children: "Narration" }),
          /* @__PURE__ */ jsx126("th", { className: "pb-4 font-medium", children: "Beneficiary name" }),
          /* @__PURE__ */ jsx126("th", { className: "pb-4 font-medium", children: "Type" }),
          /* @__PURE__ */ jsx126("th", { className: "pb-4 font-medium", children: "Amount" })
        ] }) }),
        /* @__PURE__ */ jsx126("tbody", { className: "divide-y", children: pagedLedgers.items.map((item, idx) => /* @__PURE__ */ jsxs109("tr", { className: "hover:bg-gray-50/50 transition-colors", children: [
          /* @__PURE__ */ jsx126("td", { className: "py-4 text-gray-500", children: idx + 1 }),
          /* @__PURE__ */ jsxs109("td", { className: "py-4 text-gray-900 leading-tight", children: [
            new Date(item.completed_at || "").toLocaleDateString(),
            /* @__PURE__ */ jsx126("div", { className: "text-xs text-gray-400", children: new Date(item.completed_at || "").toLocaleTimeString() })
          ] }),
          /* @__PURE__ */ jsx126("td", { className: "py-4 text-gray-600 font-mono text-xs", children: item.payment_ref }),
          /* @__PURE__ */ jsx126("td", { className: "py-4 text-gray-600 max-w-xs", children: item.description }),
          /* @__PURE__ */ jsx126("td", { className: "py-4 text-gray-600 truncate", children: item.wallet_name }),
          /* @__PURE__ */ jsx126("td", { className: "py-4 uppercase text-xs font-semibold", children: item.entry_type }),
          /* @__PURE__ */ jsx126("td", { className: "py-4", children: /* @__PURE__ */ jsxs109("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx126("span", { className: `font-semibold ${item.entry_type === "credit" ? "text-green-600" : "text-gray-900"}`, children: formatCurrency(item.amount, item.currency) }),
            /* @__PURE__ */ jsx126(StatusBadge2, { status: item.status })
          ] }) })
        ] }, item._id)) })
      ] }) }),
      /* @__PURE__ */ jsxs109("div", { className: "mt-6 flex justify-between items-center text-sm text-gray-500", children: [
        /* @__PURE__ */ jsxs109("div", { children: [
          "Showing ",
          pagedLedgers.items.length,
          " of ",
          pagedLedgers.total_items,
          " items"
        ] }),
        /* @__PURE__ */ jsx126(Pagination, { lastKey: pagedLedgers.last_key_id, pageSize: pagedLedgers.items_per_page, firstKey: pagedLedgers.first_key_id })
      ] })
    ] })
  ] });
}
function MetricItem2({ label, value, tooltip = !1 }) {
  return /* @__PURE__ */ jsxs109("div", { children: [
    /* @__PURE__ */ jsxs109("div", { className: "text-xs text-gray-400 flex items-center gap-1 mb-1", children: [
      label,
      " ",
      tooltip && /* @__PURE__ */ jsx126("span", { className: "bg-gray-200 rounded-full w-3 h-3 text-[8px] flex items-center justify-center text-white", children: "i" })
    ] }),
    /* @__PURE__ */ jsx126("div", { className: "text-lg font-bold text-gray-800", children: value })
  ] });
}
function StatusBadge2({ status }) {
  let styles = {
    Pending: "bg-orange-50 text-orange-500 border-orange-100",
    Failed: "bg-red-50 text-red-500 border-red-100",
    Completed: "bg-green-50 text-green-500 border-green-100"
  }, icons2 = {
    Pending: "\u23F1",
    Failed: "\u26A0\uFE0F",
    Completed: "\u2713"
  };
  return /* @__PURE__ */ jsxs109("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-medium border flex items-center gap-1 ${styles[status] || ""}`, children: [
    icons2[status],
    " ",
    status
  ] });
}

// app/routes/partners.tsx
var partners_exports = {};
__export(partners_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => PartnerLayout,
  meta: () => meta
});
import { Outlet as Outlet3, useLocation as useLocation10 } from "@remix-run/react";
import { useEffect as useEffect33, useState as useState43 } from "react";

// app/components/partner/PartnerPrimaryHeader.tsx
import { Link as Link23 } from "@remix-run/react";

// app/components/partner/PartnerToolBar.tsx
import { Link as Link22, useNavigate as useNavigate25 } from "@remix-run/react";
import { useEffect as useEffect31, useState as useState41 } from "react";
import { jsx as jsx127, jsxs as jsxs110 } from "react/jsx-runtime";
function PartnerToolbar() {
  let [user, setUser] = useState41(null), { getUserStoreManager } = useUserManager(), navigate = useNavigate25();
  useEffect31(() => {
    let currentUser = getUserStoreManager();
    currentUser || navigate("/login"), setUser(currentUser);
  }, []);
  let mainComponent = /* @__PURE__ */ jsxs110(
    "div",
    {
      tabIndex: 0,
      className: "relative p-2 rounded-full border flex items-center gap-4 cursor-pointer bg-tertiary hover:bg-[#EEF0FF]",
      children: [
        /* @__PURE__ */ jsxs110("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsx127("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ jsx127("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }) }),
          /* @__PURE__ */ jsxs110("span", { className: "grid", children: [
            /* @__PURE__ */ jsx127("span", { className: "block text-sm font-satoshi-bold", children: user?.fullName }),
            /* @__PURE__ */ jsx127("span", { className: "block text-xs font-satoshi-medium", children: user?.email })
          ] })
        ] }),
        /* @__PURE__ */ jsx127(Svg, { src: icons.arrowDownIcon })
      ]
    }
  );
  return /* @__PURE__ */ jsxs110(
    Toggletip,
    {
      mainComponent,
      childContainerClass: "top-[110%] right-0 bg-tertiary p-2 border  text-xs whitespace-nowrap",
      children: [
        /* @__PURE__ */ jsxs110(Link22, { to: "/user/profile", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
          /* @__PURE__ */ jsx127(Svg, { src: icons.profileIcon }),
          " Profile"
        ] }),
        /* @__PURE__ */ jsxs110(Link22, { to: "/logout", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
          /* @__PURE__ */ jsx127(Svg, { src: icons.signoutIcon }),
          " Sign Out"
        ] })
      ]
    }
  );
}

// app/components/partner/PartnerPrimaryHeader.tsx
import { jsx as jsx128, jsxs as jsxs111 } from "react/jsx-runtime";
function PartnerPrimaryHeader({ toggleNav }) {
  return /* @__PURE__ */ jsxs111("header", { className: "h-[85px] hidden sm:flex justify-between items-center gap-4 px-6 py-3 bg-secondary border-b", children: [
    /* @__PURE__ */ jsxs111("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsx128(
        "button",
        {
          onClick: toggleNav,
          title: "Toggle Menu",
          className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
          children: /* @__PURE__ */ jsx128(Svg, { src: icons.adminHamburgerIcon, width: 40, height: 24 })
        }
      ),
      /* @__PURE__ */ jsxs111(Link23, { to: "/", className: "text-accent flex items-center gap-6 whitespace-nowrap font-satoshi-black", children: [
        /* @__PURE__ */ jsx128(Svg, { src: icons.logoIcon, width: 37, height: 36 }),
        "KOTMY-PARTNER"
      ] })
    ] }),
    /* @__PURE__ */ jsx128(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white", placeholder: "Search..." }),
    /* @__PURE__ */ jsx128(PartnerToolbar, {})
  ] });
}

// app/components/partner/PartnerMobileHeader.tsx
import { Link as Link24 } from "@remix-run/react";
import { jsx as jsx129, jsxs as jsxs112 } from "react/jsx-runtime";
function UserMobileHeader({ toggleNav }) {
  return /* @__PURE__ */ jsxs112("div", { className: "flex sm:hidden items-center gap-4 p-4 border-b", children: [
    /* @__PURE__ */ jsxs112(Link24, { to: "/", className: "text-accent flex items-center gap-3 sm:gap-6 whitespace-nowrap font-satoshi-black", children: [
      /* @__PURE__ */ jsx129(Svg, { src: icons.logoIcon, width: 37, height: 36 }),
      "KOTMY-PARTNER"
    ] }),
    /* @__PURE__ */ jsx129(
      "button",
      {
        onClick: toggleNav,
        title: "open Menu",
        className: "ml-auto flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
        children: /* @__PURE__ */ jsx129(Svg, { src: icons.adminHamburgerIcon, width: 30, height: 24 })
      }
    )
  ] });
}

// app/components/partner/PartnerMobileNavigation.tsx
import { NavLink, useLocation as useLocation8, useNavigate as useNavigate26 } from "@remix-run/react";

// app/components/reusables/Accordion.tsx
import * as React13 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { jsx as jsx130, jsxs as jsxs113 } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root, AccordionItem = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx130(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx130(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs113(
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
      /* @__PURE__ */ jsx130(Svg, { src: icons.arrowDownIcon, className: "shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx130(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx130("div", { className: cn("", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// app/components/partner/PartnerMobileNavigation.tsx
import { useEffect as useEffect32, useRef as useRef12, useState as useState42 } from "react";
import { jsx as jsx131, jsxs as jsxs114 } from "react/jsx-runtime";
var primaryNavs = [
  { label: "Manage Products", icon: icons.adminTournamentIcon, url: "/partners/home" },
  {
    label: "My Account",
    icon: icons.adminFinanceIcon,
    subitems: [
      { label: "Manage Products", icon: icons.adminTournamentIcon, url: "/partners/add" },
      { label: "Manage Locations", icon: icons.adminTournamentIcon, url: "/partners/location" }
    ]
  }
], secondaryNavs = [
  { label: "Profile", icon: icons.profileIcon, url: "/user/profile" },
  { label: "Sign Out", icon: icons.signoutIcon, url: "/logout" }
];
function PartnerMobileNavigation({ show, onClose }) {
  let mobileNav = useRef12(null), [user, setUser] = useState42(null), navigate = useNavigate26(), { getUserStoreManager } = useUserManager(), location = useLocation8(), path = `${location.pathname}${location.search}${location.hash}`;
  useEffect32(() => {
    let currentUser = getUserStoreManager();
    currentUser || navigate(`/login?redirectTo=${encodeURIComponent(path)}`), setUser(currentUser), mobileNav.current?.style.setProperty("--left", "0%");
  }, []);
  let { pathname } = useLocation8();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  let mainComponent = /* @__PURE__ */ jsxs114("div", { className: "flex justify-between items-center border rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ jsx131(Svg, { src: icons.arrowDownIcon })
  ] });
  return /* @__PURE__ */ jsxs114(
    "div",
    {
      "data-show": show,
      ref: mobileNav,
      className: "mobileNav sm:hidden flex flex-col fixed w-full h-dvh top-0 z-10 data-[show=true]:animate-slide-in-left data-[show=false]:left-full data-[show=false]:animate-slide-out-left bg-secondary overflow-y-auto",
      children: [
        /* @__PURE__ */ jsxs114("div", { className: "flex justify-between items-center py-4 px-6 border-b", children: [
          /* @__PURE__ */ jsx131("span", { className: "font-satoshi-bold", children: "NAVIGATION MENU" }),
          /* @__PURE__ */ jsx131(
            "button",
            {
              onClick: onClose,
              title: "open Menu",
              className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
              children: /* @__PURE__ */ jsx131(Svg, { src: icons.closeIcon })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs114("div", { className: "flex flex-col justify-between grow", children: [
          /* @__PURE__ */ jsxs114("header", { children: [
            /* @__PURE__ */ jsxs114("nav", { "aria-label": "primary navigation", children: [
              /* @__PURE__ */ jsxs114("div", { className: "flex gap-3 items-center bg-white px-6 py-2 border-b", children: [
                /* @__PURE__ */ jsx131("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ jsx131("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs114("span", { className: "grid", children: [
                  /* @__PURE__ */ jsx131("span", { className: "block text-sm font-satoshi-bold", children: user?.fullName }),
                  /* @__PURE__ */ jsx131("span", { className: "block text-xs font-satoshi-medium", children: user?.email })
                ] })
              ] }),
              /* @__PURE__ */ jsx131(Accordion, { type: "single", collapsible: !0, className: "w-full py-2 border-b", children: /* @__PURE__ */ jsx131("ul", { className: "grid gap-2 font-bold", children: primaryNavs.map((navItem) => navItem.subitems ? /* @__PURE__ */ jsxs114(AccordionItem, { value: navItem.label, className: "group", children: [
                /* @__PURE__ */ jsx131(
                  AccordionTrigger,
                  {
                    className: cn("border-l-4 border-transparent px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
                      "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(navItem.label)
                    }),
                    children: /* @__PURE__ */ jsxs114("span", { className: "flex gap-3 items-center", children: [
                      /* @__PURE__ */ jsx131(Svg, { src: navItem.icon }),
                      navItem.label
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx131(AccordionContent, { children: /* @__PURE__ */ jsx131("ul", { className: "list-disc list-inside p-3 font-normal", children: navItem.subitems.map((subitem) => /* @__PURE__ */ jsx131("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ jsx131(
                  NavLink,
                  {
                    to: subitem.url,
                    onClick: onClose,
                    className: ({ isActive }) => `${isActive ? "active" : ""}`,
                    children: subitem.label
                  }
                ) }, subitem.label)) }) })
              ] }, navItem.label) : /* @__PURE__ */ jsx131("li", { children: /* @__PURE__ */ jsxs114(
                NavLink,
                {
                  className: ({ isActive }) => `flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] ${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"}`,
                  to: navItem.url,
                  onClick: onClose,
                  children: [
                    /* @__PURE__ */ jsx131(Svg, { src: navItem.icon }),
                    navItem.label
                  ]
                }
              ) }, navItem.label)) }) })
            ] }),
            /* @__PURE__ */ jsx131("nav", { className: "my-1", "aria-label": "secondary navigation", children: /* @__PURE__ */ jsx131("ul", { className: "grid font-bold", children: secondaryNavs.map((navItem) => /* @__PURE__ */ jsx131("li", { children: /* @__PURE__ */ jsxs114(
              NavLink,
              {
                className: "flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] border-transparent",
                to: navItem.url,
                onClick: onClose,
                children: [
                  /* @__PURE__ */ jsx131(Svg, { src: navItem.icon }),
                  navItem.label
                ]
              }
            ) }, navItem.label)) }) })
          ] }),
          /* @__PURE__ */ jsxs114("aside", { className: "border-t px-6 py-4", children: [
            /* @__PURE__ */ jsxs114("span", { className: "flex items-center gap-1 mb-4 font-satoshi-bold", children: [
              /* @__PURE__ */ jsx131(Svg, { src: icons.themeIcon }),
              "Theme"
            ] }),
            /* @__PURE__ */ jsxs114(
              Toggletip,
              {
                mainComponent,
                childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border text-sm whitespace-nowrap",
                children: [
                  /* @__PURE__ */ jsx131("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }),
                  /* @__PURE__ */ jsx131("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }),
                  /* @__PURE__ */ jsx131("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}

// app/components/partner/PartnerNavigation.tsx
import { NavLink as NavLink2, useLocation as useLocation9 } from "@remix-run/react";
import { Accordion as Accordion2, AccordionContent as AccordionContent2, AccordionItem as AccordionItem2, AccordionTrigger as AccordionTrigger2 } from "@radix-ui/react-accordion";
import { jsx as jsx132, jsxs as jsxs115 } from "react/jsx-runtime";
var navs = [
  { label: "Manage Products", icon: icons.adminTournamentIcon, url: "/partners/home" }
], navsWSubs = [
  {
    label: "My Account",
    icon: icons.adminFinanceIcon,
    subitems: [
      { label: "Manage Products", icon: icons.adminTournamentIcon, url: "/partners/add" },
      { label: "Manage Locations", icon: icons.adminTournamentIcon, url: "/partners/location" }
    ]
  }
];
function PartnerNavigation({ show }) {
  let { pathname } = useLocation9();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  let mainComponent = /* @__PURE__ */ jsxs115("div", { className: "flex justify-between items-center border  rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ jsx132(Svg, { src: icons.arrowDownIcon })
  ] });
  return show ? /* @__PURE__ */ jsxs115("header", { className: "bg-secondary border-r hidden sm:flex flex-col justify-between min-w-[280px] h-full", children: [
    /* @__PURE__ */ jsxs115("nav", { className: "py-6", children: [
      /* @__PURE__ */ jsx132("span", { className: "inline-block mb-2 px-6 py-3 font-satoshi-bold", children: "Navigation Menu" }),
      /* @__PURE__ */ jsx132("ul", { className: "grid gap-2 font-bold", children: navs.map((navItem) => /* @__PURE__ */ jsx132("li", { children: /* @__PURE__ */ jsxs115(
        NavLink2,
        {
          to: navItem.url,
          className: ({ isActive }) => `${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"} flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF]`,
          children: [
            /* @__PURE__ */ jsx132(Svg, { src: navItem.icon }),
            navItem.label
          ]
        }
      ) }, navItem.label)) }),
      /* @__PURE__ */ jsx132(Accordion2, { type: "single", collapsible: !0, className: "w-full mt-2", children: navsWSubs.map((item) => /* @__PURE__ */ jsxs115(AccordionItem2, { value: item.label, className: "group", children: [
        /* @__PURE__ */ jsxs115(
          AccordionTrigger2,
          {
            className: cn("border-l-4 border-transparent group w-full flex gap-3 items-center justify-between px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
              "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(item.label)
            }),
            children: [
              /* @__PURE__ */ jsxs115("span", { className: "flex gap-3 items-center", children: [
                /* @__PURE__ */ jsx132(Svg, { src: item.icon }),
                item.label
              ] }),
              /* @__PURE__ */ jsx132(Svg, { src: icons.arrowDownIcon, className: "group-[[data-state=open]]:rotate-180 transition-transform duration-200" })
            ]
          }
        ),
        /* @__PURE__ */ jsx132(AccordionContent2, { children: /* @__PURE__ */ jsx132("ul", { className: "list-disc list-inside p-3", children: item.subitems.map((subitem) => /* @__PURE__ */ jsx132("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ jsx132(
          NavLink2,
          {
            to: subitem.url,
            className: ({ isActive }) => `${isActive ? "active" : ""}`,
            children: subitem.label
          }
        ) }, subitem.label)) }) })
      ] }, item.label)) })
    ] }),
    /* @__PURE__ */ jsxs115("aside", { className: "border-t  px-6 py-3", children: [
      /* @__PURE__ */ jsxs115("span", { className: "flex items-center gap-1 mb-2 font-satoshi-bold", children: [
        /* @__PURE__ */ jsx132(Svg, { src: icons.themeIcon }),
        "Theme"
      ] }),
      /* @__PURE__ */ jsxs115(
        Toggletip,
        {
          mainComponent,
          childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border  text-xs whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsx132("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }),
            /* @__PURE__ */ jsx132("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }),
            /* @__PURE__ */ jsx132("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" })
          ]
        }
      )
    ] })
  ] }) : null;
}

// app/routes/partners.tsx
import { jsx as jsx133, jsxs as jsxs116 } from "react/jsx-runtime";
var meta = () => [
  { title: "KOTMY | Admin" },
  { name: "description", content: "KOTMY Admin application" }
];
function Layout({ children }) {
  let [showNav, setShowNav] = useState43(!1);
  return useEffect33(() => {
    setShowNav(window.innerWidth >= 640);
  }, []), /* @__PURE__ */ jsxs116("div", { className: "bg-tertiary text-admin-pry", children: [
    /* @__PURE__ */ jsx133(PartnerPrimaryHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }),
    /* @__PURE__ */ jsx133(UserMobileHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }),
    /* @__PURE__ */ jsx133(PartnerMobileNavigation, { onClose: () => {
      setShowNav(!1);
    }, show: showNav }),
    /* @__PURE__ */ jsxs116("div", { className: "sm:flex sm:h-[calc(100vh-85px)]", children: [
      /* @__PURE__ */ jsx133(PartnerNavigation, { show: showNav }),
      /* @__PURE__ */ jsx133("div", { className: "flex-grow overflow-y-auto", children })
    ] })
  ] });
}
function PartnerLayout() {
  return /* @__PURE__ */ jsx133(Layout, { children: /* @__PURE__ */ jsx133(Outlet3, {}) });
}
function ErrorBoundary2() {
  let { pathname } = useLocation10();
  return /* @__PURE__ */ jsx133(Layout, { children: /* @__PURE__ */ jsxs116("div", { className: "w-full max-sm:h-[calc(100dvh-73px)] p-5 m-auto lg:max-w-3xl grid place-content-center text-center gap-5", children: [
    /* @__PURE__ */ jsx133("h2", { className: "text-xl font-bold text-red-500", children: "Something went wrong" }),
    /* @__PURE__ */ jsx133("p", { children: "Apologies, something went wrong on our end. Please try again." }),
    /* @__PURE__ */ jsx133(Cta_default, { element: "link", to: pathname, className: "px-4 py-1 rounded-md", children: "Reload page" }),
    /* @__PURE__ */ jsx133(Cta_default, { element: "link", to: "/partner/overview", className: "px-4 py-1 rounded-md", children: "Back to Partner Home" })
  ] }) });
}

// app/routes/_public.tsx
var public_exports = {};
__export(public_exports, {
  default: () => Index,
  meta: () => meta2
});
import { Outlet as Outlet4 } from "@remix-run/react";

// app/components/public/Footer.tsx
import { Link as Link25 } from "@remix-run/react";
import { jsx as jsx134, jsxs as jsxs117 } from "react/jsx-runtime";
function Footer() {
  return /* @__PURE__ */ jsx134("footer", { className: "border-t border-primary py-8", children: /* @__PURE__ */ jsxs117("div", { className: "wrapper flex flex-wrap gap-6 gap-x-12 justify-between font-bold", children: [
    /* @__PURE__ */ jsx134("nav", { className: "flex gap-6 items-center", children: /* @__PURE__ */ jsxs117("ul", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsx134("li", { children: /* @__PURE__ */ jsx134(Link25, { to: "/contests", children: "Contests" }) }),
      /* @__PURE__ */ jsx134("li", { children: /* @__PURE__ */ jsx134(Link25, { to: "/#contact", children: "Contact" }) }),
      /* @__PURE__ */ jsx134("li", { children: /* @__PURE__ */ jsx134(Link25, { to: "/winners", children: "Winners" }) }),
      /* @__PURE__ */ jsx134("li", { children: /* @__PURE__ */ jsx134(Link25, { to: "/results", children: "Results" }) })
    ] }) }),
    /* @__PURE__ */ jsx134("span", { children: "Privacy Policy" }),
    /* @__PURE__ */ jsx134("span", { className: "md:order-first", children: "KOTMY \xA9 2023  All rights reserved" })
  ] }) });
}

// app/components/public/Navigation.tsx
import { useEffect as useEffect35, useState as useState45 } from "react";
import { Link as Link27, NavLink as NavLink4, useLocation as useLocation12 } from "@remix-run/react";

// app/components/public/MobileNavigation.tsx
import { Link as Link26, NavLink as NavLink3, useLocation as useLocation11 } from "@remix-run/react";
import { useEffect as useEffect34, useRef as useRef13, useState as useState44 } from "react";
import { jsx as jsx135, jsxs as jsxs118 } from "react/jsx-runtime";
function MobileNavigation({ show, onClose }) {
  let { pathname } = useLocation11(), [user, setUser] = useState44(null), mobileNav = useRef13(null);
  mobileNav.current?.style.setProperty("--left", "0%");
  let { getUserStoreManager } = useUserManager();
  return useEffect34(() => {
    let user2 = getUserStoreManager();
    setUser(user2);
  }, []), /* @__PURE__ */ jsxs118(
    "div",
    {
      "data-show": show,
      ref: mobileNav,
      className: "sm:hidden fixed top-0 left-0 bg-primary w-full h-dvh z-10 flex flex-col justify-between mobileNav data-[show=true]:animate-slide-in-left data-[show=false]:left-full data-[show=false]:animate-slide-out-left",
      children: [
        /* @__PURE__ */ jsxs118("header", { className: "wrapper py-5", children: [
          /* @__PURE__ */ jsxs118("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx135(Link26, { to: "/", onClick: onClose, "aria-label": "home", children: /* @__PURE__ */ jsx135(Svg, { src: icons.logoIcon, width: 37, height: 36 }) }),
            /* @__PURE__ */ jsx135("button", { onClick: onClose, title: "close menu", className: "flex gap-1 items-center rounded p-2 hover:outline outline-primary", children: /* @__PURE__ */ jsx135(Svg, { src: icons.closeIcon, width: 24, height: 24, className: "sm:hidden" }) })
          ] }),
          /* @__PURE__ */ jsxs118("nav", { className: "", children: [
            /* @__PURE__ */ jsxs118("ul", { className: "grid gap-6 my-12 text-xl font-bold", children: [
              /* @__PURE__ */ jsx135("li", { children: /* @__PURE__ */ jsxs118(NavLink3, { onClick: onClose, to: "/partner/account", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
                pathname.includes("/partner/account") ? /* @__PURE__ */ jsx135(Svg, { src: icons.activeDotIcon, width: ".5em" }) : null,
                " Partner"
              ] }) }),
              /* @__PURE__ */ jsx135("li", { children: /* @__PURE__ */ jsxs118(NavLink3, { onClick: onClose, to: "/contests", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
                pathname.includes("/contests") ? /* @__PURE__ */ jsx135(Svg, { src: icons.activeDotIcon, width: ".5em" }) : null,
                " Contests"
              ] }) }),
              /* @__PURE__ */ jsx135("li", { children: /* @__PURE__ */ jsxs118(NavLink3, { onClick: onClose, to: "/winners", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
                pathname.includes("/winners") ? /* @__PURE__ */ jsx135(Svg, { src: icons.activeDotIcon, width: ".5em" }) : null,
                " Winners"
              ] }) }),
              /* @__PURE__ */ jsx135("li", { children: /* @__PURE__ */ jsxs118(NavLink3, { onClick: onClose, to: "/results", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
                pathname.includes("/results") ? /* @__PURE__ */ jsx135(Svg, { src: icons.activeDotIcon, width: ".5em" }) : null,
                " Results"
              ] }) }),
              /* @__PURE__ */ jsx135("li", { children: /* @__PURE__ */ jsxs118(NavLink3, { onClick: onClose, to: "/marketplace", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
                pathname.includes("/marketplace") ? /* @__PURE__ */ jsx135(Svg, { src: icons.activeDotIcon, width: ".5em" }) : null,
                " Shop"
              ] }) }),
              /* @__PURE__ */ jsx135("li", { children: /* @__PURE__ */ jsx135(NavLink3, { onClick: onClose, to: "/login", className: "", children: user ? "My Profile" : "Sign In" }) })
            ] }),
            /* @__PURE__ */ jsx135(Button, { element: "a", onClick: onClose, href: "/signup", className: "block w-full sm:w-auto", children: "Join Now" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs118("aside", { className: "wrapper py-5", children: [
          /* @__PURE__ */ jsxs118("div", { className: "mb-12", children: [
            /* @__PURE__ */ jsx135("span", { className: "block font-satoshi-black mb-2", children: "Follow Us" }),
            /* @__PURE__ */ jsxs118("span", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx135(Svg, { src: icons.twitterXIcon, width: "24px", height: "24px" }),
              /* @__PURE__ */ jsx135(Svg, { src: icons.instagramIcon, width: "24px", height: "24px" }),
              /* @__PURE__ */ jsx135(Svg, { src: icons.facebookIcon, width: "24px", height: "24px" }),
              /* @__PURE__ */ jsx135(Svg, { src: icons.youtubeIcon, width: "24px", height: "24px" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs118("div", { className: "flex gap-6 justify-between items-end font-satoshi-bold", children: [
            /* @__PURE__ */ jsx135("span", { className: "text-sm whitespace-nowrap", children: "KOTMY \xA9 2023  All rights reserved" }),
            /* @__PURE__ */ jsx135("span", { className: "text-xs whitespace-nowrap", children: "Privacy Policy" })
          ] })
        ] })
      ]
    }
  );
}

// app/components/public/Navigation.tsx
import { jsx as jsx136, jsxs as jsxs119 } from "react/jsx-runtime";
function Navigation() {
  let { getUserStoreManager } = useUserManager(), [showNav, setShowNav] = useState45(!1), { pathname } = useLocation12(), [user, setUser] = useState45(null);
  return useEffect35(() => {
    let user2 = getUserStoreManager();
    setUser(user2);
  }, []), /* @__PURE__ */ jsxs119("header", { className: "flex justify-between items-center wrapper py-5", children: [
    /* @__PURE__ */ jsx136(Link27, { to: "/", "aria-label": "home", children: /* @__PURE__ */ jsx136(Svg, { src: icons.logoIcon, className: "w-9 h-9 sm:w-16 sm:h-16" }) }),
    /* @__PURE__ */ jsxs119("nav", { className: "hidden md:flex gap-16 items-center", children: [
      /* @__PURE__ */ jsxs119("ul", { className: "flex gap-6 text-xl font-bold", children: [
        /* @__PURE__ */ jsx136("li", { children: /* @__PURE__ */ jsxs119(NavLink4, { to: "/partner/account", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
          pathname.includes("/partner/account") ? /* @__PURE__ */ jsx136(Svg, { src: icons.activeDotIcon, width: ".5em" }) : null,
          " Partner"
        ] }) }),
        /* @__PURE__ */ jsx136("li", { children: /* @__PURE__ */ jsxs119(NavLink4, { to: "/contests", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
          pathname.includes("/contests") ? /* @__PURE__ */ jsx136(Svg, { src: icons.activeDotIcon, width: ".5em" }) : null,
          " Contests"
        ] }) }),
        /* @__PURE__ */ jsx136("li", { children: /* @__PURE__ */ jsxs119(NavLink4, { to: "/winners", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
          pathname.includes("/winners") ? /* @__PURE__ */ jsx136(Svg, { src: icons.activeDotIcon, width: ".5em" }) : null,
          " Winners"
        ] }) }),
        /* @__PURE__ */ jsx136("li", { children: /* @__PURE__ */ jsxs119(NavLink4, { to: "/results", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
          pathname.includes("/results") ? /* @__PURE__ */ jsx136(Svg, { src: icons.activeDotIcon, width: ".5em" }) : null,
          " Results"
        ] }) }),
        /* @__PURE__ */ jsx136("li", { children: /* @__PURE__ */ jsxs119(NavLink4, { to: "/marketplace", className: ({ isActive }) => isActive ? "text-accent flex gap-2 items-center" : "", children: [
          pathname.includes("/marketplace") ? /* @__PURE__ */ jsx136(Svg, { src: icons.activeDotIcon, width: ".5em" }) : null,
          " Shop"
        ] }) }),
        /* @__PURE__ */ jsx136("li", { children: /* @__PURE__ */ jsx136(NavLink4, { to: "/login", className: "", children: user ? "My Profile" : "Sign In" }) })
      ] }),
      /* @__PURE__ */ jsx136(Button, { element: "a", href: "/signup", children: "Join Now" })
    ] }),
    /* @__PURE__ */ jsx136(
      "button",
      {
        onClick: () => {
          setShowNav(!0);
        },
        title: "hamburger",
        className: "sm:hidden flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
        children: /* @__PURE__ */ jsx136(Svg, { src: icons.hamburgerIcon, width: 40, height: 24 })
      }
    ),
    /* @__PURE__ */ jsx136(MobileNavigation, { onClose: () => {
      setShowNav(!1);
    }, show: showNav })
  ] });
}

// app/routes/_public.tsx
import { jsx as jsx137, jsxs as jsxs120 } from "react/jsx-runtime";
var meta2 = () => [
  { title: "Kid of the Month & Year" },
  { name: "description", content: "Welcome to the best contest platform for children of all ages!" }
];
function Index() {
  return /* @__PURE__ */ jsxs120("div", { className: "min-h-screen bg-primary flex flex-col", children: [
    /* @__PURE__ */ jsx137(Navigation, {}),
    /* @__PURE__ */ jsx137(Outlet4, {}),
    /* @__PURE__ */ jsx137(Footer, {})
  ] });
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  default: () => Logout
});
import { Link as Link28, useSearchParams as useSearchParams4 } from "@remix-run/react";
import { useEffect as useEffect36 } from "react";
import { jsx as jsx138, jsxs as jsxs121 } from "react/jsx-runtime";
function useLogoutController() {
  let [searchQuery] = useSearchParams4(), { deleteUserStoreManager } = useUserManager();
  useEffect36(() => {
    deleteUserStoreManager();
  }, []);
}
function Logout() {
  return useLogoutController(), /* @__PURE__ */ jsxs121("main", { className: "h-dvh bg-secondary p-4 flex flex-col", children: [
    /* @__PURE__ */ jsx138(Link28, { to: "/", "aria-label": "home", children: /* @__PURE__ */ jsx138(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16 cursor-pointer" }) }),
    /* @__PURE__ */ jsxs121("main", { className: "h-dvh bg-secondary p-4 flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsx138("h1", { className: "text-2xl font-satoshi-bold text-center", children: "You have been logged out" }),
      /* @__PURE__ */ jsx138(Link28, { to: "/login", className: "mt-4 text-center underline", children: "Login again" })
    ] })
  ] });
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action28,
  default: () => Signup,
  loader: () => loader48
});
import { Form as Form34, Link as Link29, useActionData as useActionData16, useNavigate as useNavigate27, useSearchParams as useSearchParams5 } from "@remix-run/react";
import { json as json45 } from "@remix-run/node";
import { useEffect as useEffect37 } from "react";
import { jsx as jsx139, jsxs as jsxs122 } from "react/jsx-runtime";
async function loader48({ request }) {
  return null;
}
async function action28({ request }) {
  let formData = await request.formData(), signupData = authServer.prepareUserSignupPayload(formData), { error, data, headers } = await authServer.signup(signupData), responseHeaders = {};
  return error ? { error: error.detail?.toString() || "An error occurred during login.", data: null } : headers?.["Set-Cookie"] ? (responseHeaders = { "Set-Cookie": headers?.["Set-Cookie"] }, json45({ data, error: null }, {
    headers: responseHeaders
  })) : json45({ error, data, headers });
}
function useSignupController() {
  let actionData = useActionData16(), [searchQuery] = useSearchParams5(), { setUserStoreManager } = useUserManager(), { toast: toast5 } = useToast(), navigate = useNavigate27();
  return useEffect37(() => {
    actionData?.error && (toast5({
      variant: "destructive",
      title: "Sign Up Failed",
      description: actionData.error
    }), actionData.error = "");
  }, [actionData?.error]), useEffect37(() => {
    if (actionData?.data) {
      setUserStoreManager(actionData.data, !0), navigate(searchQuery.get("redirectTo") || "/user/profile");
      return;
    }
  }, [actionData?.data]), { actionData };
}
function Signup() {
  let { actionData } = useSignupController();
  return /* @__PURE__ */ jsxs122("main", { className: "bg-secondary p-4 flex flex-col", children: [
    /* @__PURE__ */ jsx139(Link29, { to: "/", "aria-label": "home", children: /* @__PURE__ */ jsx139(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16" }) }),
    /* @__PURE__ */ jsx139("section", { className: "grow flex flex-col justify-center items-center", children: /* @__PURE__ */ jsxs122(Form34, { method: "POST", encType: "multipart/form-data", className: "w-full max-w-md p-4 sm:p-8 bg-white border rounded-3xl flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx139("div", { className: "w-max mx-auto p-4 border border-disabled rounded-full bg-gradient-to-b from-slate-200 to-white", children: /* @__PURE__ */ jsx139("div", { className: "w-max p-4 border border-disabled rounded-full bg-white", children: /* @__PURE__ */ jsx139("img", { src: admin_avatar_default, alt: "person silhouette", width: 24, height: 24 }) }) }),
      /* @__PURE__ */ jsx139("h1", { className: "text-2xl font-satoshi-bold text-center", children: "Create your account" }),
      /* @__PURE__ */ jsx139("hr", {}),
      /* @__PURE__ */ jsxs122("p", { className: "text-center text-sm mt-2", children: [
        "Already have an account? ",
        /* @__PURE__ */ jsx139(Link29, { to: "/login", className: "text-primary underline", children: "Login" })
      ] }),
      /* @__PURE__ */ jsxs122("div", { className: "my-2 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx139(FormControl, { as: "input", id: "first_name", name: "first_name", placeholder: "First Name", labelText: "First Name", icon: icons.avatarIcon, required: !0 }),
        /* @__PURE__ */ jsx139(FormControl, { as: "input", id: "last_name", name: "last_name", placeholder: "Last Name", labelText: "Last Name", icon: icons.avatarIcon, required: !0 }),
        /* @__PURE__ */ jsx139(FormControl, { as: "input", id: "email", name: "email", placeholder: "Enter your email address", labelText: "Email", icon: icons.avatarIcon, required: !0 }),
        /* @__PURE__ */ jsx139(FormControl, { as: "input", id: "password", name: "password", placeholder: "Enter your password", labelText: "Password", type: "password", icon: icons.lockIcon, required: !0 }),
        /* @__PURE__ */ jsx139(FormControl, { as: "input", id: "status", name: "status", placeholder: "Status (optional)", labelText: "Status", icon: icons.avatarIcon }),
        /* @__PURE__ */ jsxs122("label", { htmlFor: "image", className: "flex items-center gap-2 text-sm font-medium text-gray-700", children: [
          /* @__PURE__ */ jsx139(Svg, { src: icons.avatarIcon, className: "w-4 h-4" }),
          "Profile Image"
        ] }),
        /* @__PURE__ */ jsx139(DragnDrop, { className: "sm:col-span-2", name: "image", multiple: !1, labelText: "Upload profile photo" })
      ] }),
      /* @__PURE__ */ jsx139(Cta_default, { element: "button", type: "submit", className: "rounded-lg p-3", children: "Sign Up" })
    ] }) })
  ] });
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => AdminLayout,
  meta: () => meta3
});
import { Outlet as Outlet5, useLocation as useLocation15 } from "@remix-run/react";
import { useEffect as useEffect40, useState as useState48 } from "react";

// app/components/admin/AdminMobileNavigation.tsx
import { NavLink as NavLink5, useLocation as useLocation13 } from "@remix-run/react";
import { useEffect as useEffect38, useRef as useRef14, useState as useState46 } from "react";
import { jsx as jsx140, jsxs as jsxs123 } from "react/jsx-runtime";
var primaryNavs2 = [
  { label: "Home", icon: icons.adminHomeIcon, url: "/admin/overview", acceptedRoles: [] },
  { label: "Admin Accounts", icon: icons.adminUsersIcon, url: "/admin/accounts", acceptedRoles: ["manage user" /* manage user */] },
  { label: "User Accounts", icon: icons.adminUsersIcon, url: "/admin/accounts/allusers", acceptedRoles: ["manage user" /* manage user */] },
  { label: "Tournaments", icon: icons.adminTournamentIcon, url: "/admin/tournaments", acceptedRoles: [] },
  { label: "Contests", icon: icons.adminContestIcon, url: "/admin/contests", acceptedRoles: [] },
  {
    label: "Transactions",
    icon: icons.adminFinanceIcon,
    acceptedRoles: [],
    subitems: [
      { label: "Tally Votes", url: "transactions/tally-votes", acceptedRoles: [] },
      { label: "Contest Registrations", url: "transactions/contest-registrations", acceptedRoles: [] },
      { label: "Income History", url: "transactions/income-history", acceptedRoles: [] },
      { label: "Affiliate Leaderboard", url: "transactions/affiliate-board", acceptedRoles: [] }
    ]
  },
  {
    label: "Partners",
    icon: icons.adminFinanceIcon,
    acceptedRoles: [],
    subitems: [
      { label: "Show Partners", url: "partners", acceptedRoles: [] }
    ]
  }
], secondaryNavs2 = [
  { label: "Profile", icon: icons.profileIcon, url: "/user/profile" },
  { label: "Sign Out", icon: icons.signoutIcon, url: "/logout" }
];
function AdminMobileNavigation({ show, onClose }) {
  let mobileNav = useRef14(null);
  useEffect38(() => {
    mobileNav.current?.style.setProperty("--left", "0%");
  }, []);
  let { pathname } = useLocation13();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  let { getUserStoreManager, hasAcceptedRole } = useUserManager(), userRoles = getUserStoreManager()?.roles.map((r) => r.toLowerCase()) ?? [], [user, setUser] = useState46(null);
  useEffect38(() => {
    setUser(getUserStoreManager());
  }, [getUserStoreManager]);
  let mainComponent = /* @__PURE__ */ jsxs123("div", { className: "flex justify-between items-center border rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ jsx140(Svg, { src: icons.arrowDownIcon })
  ] });
  return /* @__PURE__ */ jsxs123(
    "div",
    {
      "data-show": show,
      ref: mobileNav,
      className: "mobileNav sm:hidden flex flex-col fixed w-full h-dvh top-0 z-10 data-[show=true]:animate-slide-in-left data-[show=false]:left-full data-[show=false]:animate-slide-out-left bg-secondary overflow-y-auto",
      children: [
        /* @__PURE__ */ jsxs123("div", { className: "flex justify-between items-center py-4 px-6 border-b", children: [
          /* @__PURE__ */ jsx140("span", { className: "font-satoshi-bold", children: "NAVIGATION MENU" }),
          /* @__PURE__ */ jsx140(
            "button",
            {
              onClick: onClose,
              title: "open Menu",
              className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
              children: /* @__PURE__ */ jsx140(Svg, { src: icons.closeIcon })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs123("div", { className: "flex flex-col justify-between grow", children: [
          /* @__PURE__ */ jsxs123("header", { children: [
            /* @__PURE__ */ jsxs123("nav", { "aria-label": "primary navigation", children: [
              /* @__PURE__ */ jsxs123("div", { className: "flex gap-3 items-center bg-white px-6 py-2 border-b", children: [
                /* @__PURE__ */ jsx140("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ jsx140("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs123("span", { className: "grid", children: [
                  /* @__PURE__ */ jsx140("span", { className: "block text-sm font-satoshi-bold", children: user?.fullName }),
                  /* @__PURE__ */ jsx140("span", { className: "block text-xs font-satoshi-medium", children: user?.email })
                ] })
              ] }),
              /* @__PURE__ */ jsx140(Accordion, { type: "single", collapsible: !0, className: "w-full py-2 border-b", children: /* @__PURE__ */ jsx140("ul", { className: "grid gap-2 font-bold", children: primaryNavs2.map((navItem) => navItem.subitems ? /* @__PURE__ */ jsxs123(AccordionItem, { value: navItem.label, className: "group", children: [
                /* @__PURE__ */ jsx140(
                  AccordionTrigger,
                  {
                    className: cn("border-l-4 border-transparent px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
                      "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(navItem.label)
                    }),
                    children: /* @__PURE__ */ jsxs123("span", { className: "flex gap-3 items-center", children: [
                      /* @__PURE__ */ jsx140(Svg, { src: navItem.icon }),
                      navItem.label
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx140(AccordionContent, { children: /* @__PURE__ */ jsx140("ul", { className: "list-disc list-inside p-3 font-normal", children: navItem.subitems.map((subitem) => /* @__PURE__ */ jsx140("li", { className: `py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]${hasAcceptedRole(user, subitem.acceptedRoles ?? []) ? "" : " hidden "}`, children: /* @__PURE__ */ jsx140(
                  NavLink5,
                  {
                    to: subitem.url,
                    onClick: onClose,
                    className: ({ isActive }) => `${isActive ? "active" : ""}`,
                    children: subitem.label
                  }
                ) }, subitem.label)) }) })
              ] }, navItem.label) : /* @__PURE__ */ jsx140("li", { children: /* @__PURE__ */ jsxs123(
                NavLink5,
                {
                  className: ({ isActive }) => `flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] ${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"}${hasAcceptedRole(user, navItem.acceptedRoles ?? []) ? "" : " hidden "}`,
                  to: navItem.url,
                  onClick: onClose,
                  children: [
                    /* @__PURE__ */ jsx140(Svg, { src: navItem.icon }),
                    navItem.label
                  ]
                }
              ) }, navItem.label)) }) })
            ] }),
            /* @__PURE__ */ jsx140("nav", { className: "my-1", "aria-label": "secondary navigation", children: /* @__PURE__ */ jsx140("ul", { className: "grid font-bold", children: secondaryNavs2.map((navItem) => /* @__PURE__ */ jsx140("li", { children: /* @__PURE__ */ jsxs123(
              NavLink5,
              {
                className: "flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] border-transparent",
                to: navItem.url,
                onClick: onClose,
                children: [
                  /* @__PURE__ */ jsx140(Svg, { src: navItem.icon }),
                  navItem.label
                ]
              }
            ) }, navItem.label)) }) })
          ] }),
          /* @__PURE__ */ jsxs123("aside", { className: "border-t px-6 py-4", children: [
            /* @__PURE__ */ jsxs123("span", { className: "flex items-center gap-1 mb-4 font-satoshi-bold", children: [
              /* @__PURE__ */ jsx140(Svg, { src: icons.themeIcon }),
              "Theme"
            ] }),
            /* @__PURE__ */ jsxs123(
              Toggletip,
              {
                mainComponent,
                childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border text-sm whitespace-nowrap",
                children: [
                  /* @__PURE__ */ jsx140("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }),
                  /* @__PURE__ */ jsx140("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }),
                  /* @__PURE__ */ jsx140("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}

// app/components/admin/MobileHeader.tsx
import { Link as Link30 } from "@remix-run/react";
import { jsx as jsx141, jsxs as jsxs124 } from "react/jsx-runtime";
function MobileHeader({ toggleNav }) {
  return /* @__PURE__ */ jsxs124("div", { className: "flex sm:hidden items-center gap-4 p-4 border-b", children: [
    /* @__PURE__ */ jsxs124(Link30, { to: "/", className: "text-accent flex items-center gap-3 sm:gap-6 whitespace-nowrap font-satoshi-black", children: [
      /* @__PURE__ */ jsx141(Svg, { src: icons.logoIcon, width: 37, height: 36 }),
      "KOTMY-ADMIN"
    ] }),
    /* @__PURE__ */ jsx141(
      "button",
      {
        onClick: toggleNav,
        title: "open Menu",
        className: "ml-auto flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
        children: /* @__PURE__ */ jsx141(Svg, { src: icons.adminHamburgerIcon, width: 30, height: 24 })
      }
    )
  ] });
}

// app/components/admin/AdminNav.tsx
import { NavLink as NavLink6, useLocation as useLocation14 } from "@remix-run/react";
import { Accordion as Accordion3, AccordionContent as AccordionContent3, AccordionItem as AccordionItem3, AccordionTrigger as AccordionTrigger3 } from "@radix-ui/react-accordion";
import { useEffect as useEffect39, useState as useState47 } from "react";
import { jsx as jsx142, jsxs as jsxs125 } from "react/jsx-runtime";
var navs2 = [
  { label: "Home", icon: icons.adminHomeIcon, url: "/admin/overview", acceptedRoles: [] },
  { label: "Admin Accounts", icon: icons.adminUsersIcon, url: "/admin/accounts", acceptedRoles: ["manage user" /* manage user */] },
  { label: "User Accounts", icon: icons.adminUsersIcon, url: "/admin/accounts/allusers", acceptedRoles: ["manage user" /* manage user */] },
  { label: "Tournaments", icon: icons.adminTournamentIcon, url: "/admin/tournaments", acceptedRoles: [] },
  { label: "Contests", icon: icons.adminContestIcon, url: "/admin/contests", acceptedRoles: [] }
], navsWSubs2 = [
  {
    label: "Transactions",
    icon: icons.adminFinanceIcon,
    subitems: [
      { label: "Tally Votes", url: "transactions/tally-votes", acceptedRoles: [] },
      { label: "Contest Registrations", url: "transactions/contest-registrations", acceptedRoles: [] },
      { label: "Income History", url: "transactions/income-history", acceptedRoles: [] },
      { label: "Affiliate Leaderboard", url: "transactions/affiliate-board", acceptedRoles: [] }
    ]
  },
  {
    label: "Partners",
    icon: icons.adminFinanceIcon,
    acceptedRoles: [],
    subitems: [
      { label: "Show Partners", url: "partners", acceptedRoles: [] }
    ]
  }
];
function AdminNavigation({ show }) {
  let { getUserStoreManager, hasAcceptedRole } = useUserManager(), userRoles = getUserStoreManager()?.roles.map((r) => r.toLowerCase()) ?? [], [user, setUser] = useState47(null), userRolesSet = new Set(userRoles);
  useEffect39(() => {
    setUser(getUserStoreManager());
  }, [getUserStoreManager]);
  let { pathname } = useLocation14();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  let mainComponent = /* @__PURE__ */ jsxs125("div", { className: "flex justify-between items-center border  rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ jsx142(Svg, { src: icons.arrowDownIcon })
  ] });
  return show ? /* @__PURE__ */ jsxs125("header", { className: "bg-secondary border-r hidden sm:flex flex-col justify-between min-w-[280px]", children: [
    /* @__PURE__ */ jsxs125("nav", { className: "py-6", children: [
      /* @__PURE__ */ jsx142("span", { className: "inline-block mb-2 px-6 py-3 font-satoshi-bold", children: "Navigation Menu" }),
      /* @__PURE__ */ jsx142("ul", { className: "grid gap-2 font-bold", children: navs2.map((navItem) => /* @__PURE__ */ jsx142("li", { children: /* @__PURE__ */ jsxs125(
        NavLink6,
        {
          to: navItem.url,
          className: ({ isActive }) => `${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"} flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] ${hasAcceptedRole(user, navItem.acceptedRoles ?? []) ? "" : " hidden "}`,
          children: [
            /* @__PURE__ */ jsx142(Svg, { src: navItem.icon }),
            navItem.label
          ]
        }
      ) }, navItem.label)) }),
      /* @__PURE__ */ jsx142(Accordion3, { type: "single", collapsible: !0, className: "w-full mt-2", children: navsWSubs2.map((item) => /* @__PURE__ */ jsxs125(AccordionItem3, { value: item.label, className: "group", children: [
        /* @__PURE__ */ jsxs125(
          AccordionTrigger3,
          {
            className: cn("border-l-4 border-transparent group w-full flex gap-3 items-center justify-between px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
              "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(item.label)
            }),
            children: [
              /* @__PURE__ */ jsxs125("span", { className: "flex gap-3 items-center", children: [
                /* @__PURE__ */ jsx142(Svg, { src: item.icon }),
                item.label
              ] }),
              /* @__PURE__ */ jsx142(Svg, { src: icons.arrowDownIcon, className: "group-[[data-state=open]]:rotate-180 transition-transform duration-200" })
            ]
          }
        ),
        /* @__PURE__ */ jsx142(AccordionContent3, { children: /* @__PURE__ */ jsx142("ul", { className: "list-disc list-inside p-3", children: item.subitems.map((subitem) => /* @__PURE__ */ jsx142("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ jsx142(
          NavLink6,
          {
            to: subitem.url,
            className: ({ isActive }) => `${isActive ? "active" : ""}${hasAcceptedRole(user, subitem.acceptedRoles ?? []) ? "" : " hidden "}`,
            children: subitem.label
          }
        ) }, subitem.label)) }) })
      ] }, item.label)) })
    ] }),
    /* @__PURE__ */ jsxs125("aside", { className: "border-t  px-6 py-3", children: [
      /* @__PURE__ */ jsxs125("span", { className: "flex items-center gap-1 mb-2 font-satoshi-bold", children: [
        /* @__PURE__ */ jsx142(Svg, { src: icons.themeIcon }),
        "Theme"
      ] }),
      /* @__PURE__ */ jsxs125(
        Toggletip,
        {
          mainComponent,
          childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border  text-xs whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsx142("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }),
            /* @__PURE__ */ jsx142("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }),
            /* @__PURE__ */ jsx142("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" })
          ]
        }
      )
    ] })
  ] }) : null;
}

// app/components/admin/PrimaryHeader.tsx
import { Link as Link32 } from "@remix-run/react";

// app/components/admin/AdminToolbar.tsx
import { Link as Link31 } from "@remix-run/react";
import { jsx as jsx143, jsxs as jsxs126 } from "react/jsx-runtime";
function AdminToolbar() {
  let mainComponent = /* @__PURE__ */ jsxs126(
    "div",
    {
      tabIndex: 0,
      className: "relative p-2 rounded-full border flex items-center gap-4 cursor-pointer bg-tertiary hover:bg-[#EEF0FF]",
      children: [
        /* @__PURE__ */ jsxs126("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsx143("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ jsx143("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }) }),
          /* @__PURE__ */ jsxs126("span", { className: "grid", children: [
            /* @__PURE__ */ jsx143("span", { className: "block text-sm font-satoshi-bold", children: "Admin" }),
            /* @__PURE__ */ jsx143("span", { className: "block text-xs font-satoshi-medium", children: "admin@kotmy.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsx143(Svg, { src: icons.arrowDownIcon })
      ]
    }
  );
  return /* @__PURE__ */ jsxs126(
    Toggletip,
    {
      mainComponent,
      childContainerClass: "top-[110%] right-0 bg-tertiary p-2 border  text-xs whitespace-nowrap",
      children: [
        /* @__PURE__ */ jsxs126(Link31, { to: "/user/profile", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
          /* @__PURE__ */ jsx143(Svg, { src: icons.profileIcon }),
          " Profile"
        ] }),
        /* @__PURE__ */ jsxs126(Link31, { to: "/logout", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
          /* @__PURE__ */ jsx143(Svg, { src: icons.signoutIcon }),
          " Sign Out"
        ] })
      ]
    }
  );
}

// app/components/admin/PrimaryHeader.tsx
import { jsx as jsx144, jsxs as jsxs127 } from "react/jsx-runtime";
function PrimaryHeader({ toggleNav }) {
  return /* @__PURE__ */ jsxs127("header", { className: "h-[85px] hidden sm:flex justify-between items-center gap-4 px-6 py-3 bg-secondary border-b", children: [
    /* @__PURE__ */ jsxs127("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsx144(
        "button",
        {
          onClick: toggleNav,
          title: "Toggle Menu",
          className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
          children: /* @__PURE__ */ jsx144(Svg, { src: icons.adminHamburgerIcon, width: 40, height: 24 })
        }
      ),
      /* @__PURE__ */ jsxs127(Link32, { to: "/", className: "text-accent flex items-center gap-6 whitespace-nowrap font-satoshi-black", children: [
        /* @__PURE__ */ jsx144(Svg, { src: icons.logoIcon, width: 37, height: 36 }),
        "KOTMY-ADMIN"
      ] })
    ] }),
    /* @__PURE__ */ jsx144(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white", placeholder: "Search..." }),
    /* @__PURE__ */ jsx144(AdminToolbar, {})
  ] });
}

// app/routes/admin.tsx
import { jsx as jsx145, jsxs as jsxs128 } from "react/jsx-runtime";
var meta3 = () => [
  { title: "KOTMY | Admin" },
  { name: "description", content: "KOTMY Admin application" }
];
function Layout2({ children }) {
  let [showNav, setShowNav] = useState48(!1);
  return useEffect40(() => {
    setShowNav(window.innerWidth >= 640);
  }, []), /* @__PURE__ */ jsxs128("div", { className: "bg-tertiary text-admin-pry", children: [
    /* @__PURE__ */ jsx145(PrimaryHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }),
    /* @__PURE__ */ jsx145(MobileHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }),
    /* @__PURE__ */ jsx145(AdminMobileNavigation, { onClose: () => {
      setShowNav(!1);
    }, show: showNav }),
    /* @__PURE__ */ jsxs128("div", { className: "sm:flex sm:h-[calc(100vh-85px)]", children: [
      /* @__PURE__ */ jsx145(AdminNavigation, { show: showNav }),
      children
    ] })
  ] });
}
function AdminLayout() {
  return /* @__PURE__ */ jsx145(Layout2, { children: /* @__PURE__ */ jsx145(Outlet5, {}) });
}
function ErrorBoundary3() {
  let { pathname } = useLocation15();
  return /* @__PURE__ */ jsx145(Layout2, { children: /* @__PURE__ */ jsxs128("div", { className: "w-full max-sm:h-[calc(100dvh-73px)] p-5 m-auto lg:max-w-3xl grid place-content-center text-center gap-5", children: [
    /* @__PURE__ */ jsx145("h2", { className: "text-xl font-bold text-red-500", children: "Something went wrong" }),
    /* @__PURE__ */ jsx145("p", { children: "Apologies, something went wrong on our end. Please try again." }),
    /* @__PURE__ */ jsx145(Cta_default, { element: "link", to: pathname, className: "px-4 py-1 rounded-md", children: "Reload page" }),
    /* @__PURE__ */ jsx145(Cta_default, { element: "link", to: "/admin/overview", className: "px-4 py-1 rounded-md", children: "Back to Admin Home" })
  ] }) });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action29,
  default: () => Login,
  loader: () => loader49
});
import { Form as Form35, Link as Link33, useActionData as useActionData17, useNavigate as useNavigate28, useSearchParams as useSearchParams6 } from "@remix-run/react";
import { json as json46 } from "@remix-run/node";
import { useEffect as useEffect41 } from "react";
import { jsx as jsx146, jsxs as jsxs129 } from "react/jsx-runtime";
async function loader49({ request }) {
  return null;
}
async function action29({ request }) {
  let searchQuery = new URL(request.url).searchParams, formData = await request.formData(), loginDto = {
    email: formData.get("email"),
    password: formData.get("password")
  }, { error, data, headers } = await authServer.login(loginDto);
  if (error)
    return { error: error.detail?.toString() || "An error occurred during login.", data: null };
  let responseHeaders = {};
  return headers?.["Set-Cookie"] ? (responseHeaders = { "Set-Cookie": headers?.["Set-Cookie"] }, json46({ data, error: null }, {
    headers: responseHeaders
  })) : json46({ data, error: null });
}
function useLoginController() {
  let actionData = useActionData17(), [searchQuery] = useSearchParams6(), { setUserStoreManager, getUserStoreManager } = useUserManager(), { toast: toast5 } = useToast(), navigate = useNavigate28();
  return useEffect41(() => {
    let user = getUserStoreManager(), requireNewLogin = searchQuery.get("requireNewLogin") || null;
    user && !requireNewLogin && navigate(searchQuery.get("redirectTo") || "/user/profile");
  }, []), useEffect41(() => {
    actionData?.error && (toast5({
      variant: "destructive",
      title: "Login Failed",
      description: actionData.error
    }), actionData.error = "");
  }, [actionData?.error]), useEffect41(() => {
    if (actionData?.data) {
      setUserStoreManager(actionData.data, !0), navigate(searchQuery.get("redirectTo") || "/user/profile");
      return;
    }
  }, [actionData?.data]), { actionData };
}
function Login() {
  let { actionData } = useLoginController();
  return /* @__PURE__ */ jsxs129("main", { className: "h-dvh bg-secondary p-4 flex flex-col", children: [
    /* @__PURE__ */ jsx146(Link33, { to: "/", "aria-label": "home", children: /* @__PURE__ */ jsx146(Svg, { src: icons.logoIcon, className: "w-14 h-14 sm:w-16 sm:h-16" }) }),
    /* @__PURE__ */ jsx146("section", { className: "grow flex flex-col justify-center items-center", children: /* @__PURE__ */ jsxs129(Form35, { method: "POST", className: "w-full max-w-md p-4 sm:p-8 bg-white border rounded-3xl flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx146("div", { className: "w-max mx-auto p-4 border border-disabled rounded-full bg-gradient-to-b from-slate-200 to-white", children: /* @__PURE__ */ jsx146("div", { className: "w-max p-4 border border-disabled rounded-full bg-white", children: /* @__PURE__ */ jsx146("img", { src: admin_avatar_default, alt: "person silhouette", width: 24, height: 24 }) }) }),
      /* @__PURE__ */ jsx146("h1", { className: "text-2xl font-satoshi-bold text-center", children: "Enter your details to login" }),
      /* @__PURE__ */ jsx146("hr", {}),
      /* @__PURE__ */ jsxs129("p", { className: "text-center text-sm mt-2", children: [
        "Don't have an account yet? ",
        /* @__PURE__ */ jsx146(Link33, { to: "/signup", className: "text-primary underline", children: "Register" })
      ] }),
      /* @__PURE__ */ jsxs129("div", { className: "my-2 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx146(
          FormControl,
          {
            as: "input",
            id: "email",
            name: "email",
            placeholder: "Enter your email address",
            labelText: "email",
            icon: icons.avatarIcon,
            required: !0
          }
        ),
        /* @__PURE__ */ jsx146(
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
          }
        )
      ] }),
      /* @__PURE__ */ jsx146(Cta_default, { element: "button", type: "submit", className: "rounded-lg p-3", children: "Login" })
    ] }) })
  ] });
}

// app/routes/user.tsx
var user_exports = {};
__export(user_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => UserLayout,
  meta: () => meta4
});
import { Outlet as Outlet6, useLocation as useLocation18 } from "@remix-run/react";
import { useEffect as useEffect44, useState as useState51 } from "react";

// app/components/user/UserPrimaryHeader.tsx
import { Link as Link35 } from "@remix-run/react";

// app/components/user/UserToolBar.tsx
import { Link as Link34, useNavigate as useNavigate29 } from "@remix-run/react";
import { useEffect as useEffect42, useState as useState49 } from "react";
import { jsx as jsx147, jsxs as jsxs130 } from "react/jsx-runtime";
function UserToolbar() {
  let [user, setUser] = useState49(null), { getUserStoreManager } = useUserManager(), navigate = useNavigate29();
  useEffect42(() => {
    let currentUser = getUserStoreManager();
    currentUser || navigate("/login"), setUser(currentUser);
  }, []);
  let mainComponent = /* @__PURE__ */ jsxs130(
    "div",
    {
      tabIndex: 0,
      className: "relative p-2 rounded-full border flex items-center gap-4 cursor-pointer bg-tertiary hover:bg-[#EEF0FF]",
      children: [
        /* @__PURE__ */ jsxs130("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsx147("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ jsx147("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }) }),
          /* @__PURE__ */ jsxs130("span", { className: "grid", children: [
            /* @__PURE__ */ jsx147("span", { className: "block text-sm font-satoshi-bold", children: user?.fullName }),
            /* @__PURE__ */ jsx147("span", { className: "block text-xs font-satoshi-medium", children: user?.email })
          ] })
        ] }),
        /* @__PURE__ */ jsx147(Svg, { src: icons.arrowDownIcon })
      ]
    }
  );
  return /* @__PURE__ */ jsxs130(
    Toggletip,
    {
      mainComponent,
      childContainerClass: "top-[110%] right-0 bg-tertiary p-2 border  text-xs whitespace-nowrap",
      children: [
        /* @__PURE__ */ jsxs130(Link34, { to: "/user/profile", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
          /* @__PURE__ */ jsx147(Svg, { src: icons.profileIcon }),
          " Profile"
        ] }),
        /* @__PURE__ */ jsxs130(Link34, { to: "/logout", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
          /* @__PURE__ */ jsx147(Svg, { src: icons.signoutIcon }),
          " Sign Out"
        ] })
      ]
    }
  );
}

// app/components/user/UserPrimaryHeader.tsx
import { jsx as jsx148, jsxs as jsxs131 } from "react/jsx-runtime";
function UserPrimaryHeader({ toggleNav }) {
  return /* @__PURE__ */ jsxs131("header", { className: "h-[85px] hidden sm:flex justify-between items-center gap-4 px-6 py-3 bg-secondary border-b", children: [
    /* @__PURE__ */ jsxs131("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsx148(
        "button",
        {
          onClick: toggleNav,
          title: "Toggle Menu",
          className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
          children: /* @__PURE__ */ jsx148(Svg, { src: icons.adminHamburgerIcon, width: 40, height: 24 })
        }
      ),
      /* @__PURE__ */ jsxs131(Link35, { to: "/", className: "text-accent flex items-center gap-6 whitespace-nowrap font-satoshi-black", children: [
        /* @__PURE__ */ jsx148(Svg, { src: icons.logoIcon, width: 37, height: 36 }),
        "KOTMY-USER"
      ] })
    ] }),
    /* @__PURE__ */ jsx148(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white", placeholder: "Search..." }),
    /* @__PURE__ */ jsx148(UserToolbar, {})
  ] });
}

// app/components/user/UserMobileHeader.tsx
import { Link as Link36 } from "@remix-run/react";
import { jsx as jsx149, jsxs as jsxs132 } from "react/jsx-runtime";
function UserMobileHeader2({ toggleNav }) {
  return /* @__PURE__ */ jsxs132("div", { className: "flex sm:hidden items-center gap-4 p-4 border-b", children: [
    /* @__PURE__ */ jsxs132(Link36, { to: "/", className: "text-accent flex items-center gap-3 sm:gap-6 whitespace-nowrap font-satoshi-black", children: [
      /* @__PURE__ */ jsx149(Svg, { src: icons.logoIcon, width: 37, height: 36 }),
      "KOTMY-USER"
    ] }),
    /* @__PURE__ */ jsx149(
      "button",
      {
        onClick: toggleNav,
        title: "open Menu",
        className: "ml-auto flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
        children: /* @__PURE__ */ jsx149(Svg, { src: icons.adminHamburgerIcon, width: 30, height: 24 })
      }
    )
  ] });
}

// app/components/user/UserMobileNavigation.tsx
import { NavLink as NavLink7, useLocation as useLocation16, useNavigate as useNavigate30 } from "@remix-run/react";
import { useEffect as useEffect43, useRef as useRef15, useState as useState50 } from "react";
import { jsx as jsx150, jsxs as jsxs133 } from "react/jsx-runtime";
var primaryNavs3 = [
  { label: "Contests", icon: icons.adminHomeIcon, url: "/user/all-tournaments" },
  { label: "Winners", icon: icons.adminContestIcon, url: "/winners" },
  { label: "Results", icon: icons.adminUsersIcon, url: "/results" },
  {
    label: "My Account",
    icon: icons.adminFinanceIcon,
    subitems: [
      { label: "Pending Uploads", icon: icons.adminTournamentIcon, url: "/user/pending-uploads" },
      { label: "Contest Registrations", url: "transactions/contest-registrations" },
      { label: "Your Profile", url: "/user/profile" },
      { label: "Affiliate Leaderboard", url: "/user/affiliate" },
      { label: "Wallet", url: "/user/wallet" }
    ]
  }
], secondaryNavs3 = [
  { label: "Profile", icon: icons.profileIcon, url: "/user/profile" },
  { label: "Sign Out", icon: icons.signoutIcon, url: "/logout" }
];
function UserMobileNavigation({ show, onClose }) {
  let mobileNav = useRef15(null), [user, setUser] = useState50(null), navigate = useNavigate30(), { getUserStoreManager } = useUserManager();
  useEffect43(() => {
    let currentUser = getUserStoreManager();
    currentUser || navigate("/login"), setUser(currentUser), mobileNav.current?.style.setProperty("--left", "0%");
  }, []);
  let { pathname } = useLocation16();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  let mainComponent = /* @__PURE__ */ jsxs133("div", { className: "flex justify-between items-center border rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ jsx150(Svg, { src: icons.arrowDownIcon })
  ] });
  return /* @__PURE__ */ jsxs133(
    "div",
    {
      "data-show": show,
      ref: mobileNav,
      className: "mobileNav sm:hidden flex flex-col fixed w-full h-dvh top-0 z-10 data-[show=true]:animate-slide-in-left data-[show=false]:left-full data-[show=false]:animate-slide-out-left bg-secondary overflow-y-auto",
      children: [
        /* @__PURE__ */ jsxs133("div", { className: "flex justify-between items-center py-4 px-6 border-b", children: [
          /* @__PURE__ */ jsx150("span", { className: "font-satoshi-bold", children: "NAVIGATION MENU" }),
          /* @__PURE__ */ jsx150(
            "button",
            {
              onClick: onClose,
              title: "open Menu",
              className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary",
              children: /* @__PURE__ */ jsx150(Svg, { src: icons.closeIcon })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs133("div", { className: "flex flex-col justify-between grow", children: [
          /* @__PURE__ */ jsxs133("header", { children: [
            /* @__PURE__ */ jsxs133("nav", { "aria-label": "primary navigation", children: [
              /* @__PURE__ */ jsxs133("div", { className: "flex gap-3 items-center bg-white px-6 py-2 border-b", children: [
                /* @__PURE__ */ jsx150("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ jsx150("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs133("span", { className: "grid", children: [
                  /* @__PURE__ */ jsx150("span", { className: "block text-sm font-satoshi-bold", children: user?.fullName }),
                  /* @__PURE__ */ jsx150("span", { className: "block text-xs font-satoshi-medium", children: user?.email })
                ] })
              ] }),
              /* @__PURE__ */ jsx150(Accordion, { type: "single", collapsible: !0, className: "w-full py-2 border-b", children: /* @__PURE__ */ jsx150("ul", { className: "grid gap-2 font-bold", children: primaryNavs3.map((navItem) => navItem.subitems ? /* @__PURE__ */ jsxs133(AccordionItem, { value: navItem.label, className: "group", children: [
                /* @__PURE__ */ jsx150(
                  AccordionTrigger,
                  {
                    className: cn("border-l-4 border-transparent px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
                      "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(navItem.label)
                    }),
                    children: /* @__PURE__ */ jsxs133("span", { className: "flex gap-3 items-center", children: [
                      /* @__PURE__ */ jsx150(Svg, { src: navItem.icon }),
                      navItem.label
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx150(AccordionContent, { children: /* @__PURE__ */ jsx150("ul", { className: "list-disc list-inside p-3 font-normal", children: navItem.subitems.map((subitem) => /* @__PURE__ */ jsx150("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ jsx150(
                  NavLink7,
                  {
                    to: subitem.url,
                    onClick: onClose,
                    className: ({ isActive }) => `${isActive ? "active" : ""}`,
                    children: subitem.label
                  }
                ) }, subitem.label)) }) })
              ] }, navItem.label) : /* @__PURE__ */ jsx150("li", { children: /* @__PURE__ */ jsxs133(
                NavLink7,
                {
                  className: ({ isActive }) => `flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] ${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"}`,
                  to: navItem.url,
                  onClick: onClose,
                  children: [
                    /* @__PURE__ */ jsx150(Svg, { src: navItem.icon }),
                    navItem.label
                  ]
                }
              ) }, navItem.label)) }) })
            ] }),
            /* @__PURE__ */ jsx150("nav", { className: "my-1", "aria-label": "secondary navigation", children: /* @__PURE__ */ jsx150("ul", { className: "grid font-bold", children: secondaryNavs3.map((navItem) => /* @__PURE__ */ jsx150("li", { children: /* @__PURE__ */ jsxs133(
              NavLink7,
              {
                className: "flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] border-transparent",
                to: navItem.url,
                onClick: onClose,
                children: [
                  /* @__PURE__ */ jsx150(Svg, { src: navItem.icon }),
                  navItem.label
                ]
              }
            ) }, navItem.label)) }) })
          ] }),
          /* @__PURE__ */ jsxs133("aside", { className: "border-t px-6 py-4", children: [
            /* @__PURE__ */ jsxs133("span", { className: "flex items-center gap-1 mb-4 font-satoshi-bold", children: [
              /* @__PURE__ */ jsx150(Svg, { src: icons.themeIcon }),
              "Theme"
            ] }),
            /* @__PURE__ */ jsxs133(
              Toggletip,
              {
                mainComponent,
                childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border text-sm whitespace-nowrap",
                children: [
                  /* @__PURE__ */ jsx150("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }),
                  /* @__PURE__ */ jsx150("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }),
                  /* @__PURE__ */ jsx150("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}

// app/components/user/UserNavigation.tsx
import { NavLink as NavLink8, useLocation as useLocation17 } from "@remix-run/react";
import { Accordion as Accordion4, AccordionContent as AccordionContent4, AccordionItem as AccordionItem4, AccordionTrigger as AccordionTrigger4 } from "@radix-ui/react-accordion";
import { jsx as jsx151, jsxs as jsxs134 } from "react/jsx-runtime";
var navs3 = [
  { label: "Home", icon: icons.adminHomeIcon, url: "/user/all-tournaments" },
  { label: "Winners", icon: icons.adminContestIcon, url: "/winners" },
  { label: "Results", icon: icons.adminUsersIcon, url: "/results" }
], navsWSubs3 = [
  {
    label: "My Account",
    icon: icons.adminFinanceIcon,
    subitems: [
      { label: "Pending Uploads", icon: icons.adminTournamentIcon, url: "/user/pending-uploads" },
      { label: "Contest Registrations", url: "transactions/contest-registrations" },
      { label: "Your Profile", url: "/user/profile" },
      { label: "Affiliate Leaderboard", url: "/user/affiliate" },
      { label: "Wallet", url: "/user/wallet" }
    ]
  }
];
function UserNavigation({ show }) {
  let { pathname } = useLocation17();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  let mainComponent = /* @__PURE__ */ jsxs134("div", { className: "flex justify-between items-center border  rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ jsx151(Svg, { src: icons.arrowDownIcon })
  ] });
  return show ? /* @__PURE__ */ jsxs134("header", { className: "bg-secondary border-r hidden sm:flex flex-col justify-between min-w-[280px] h-full", children: [
    /* @__PURE__ */ jsxs134("nav", { className: "py-6", children: [
      /* @__PURE__ */ jsx151("span", { className: "inline-block mb-2 px-6 py-3 font-satoshi-bold", children: "Navigation Menu" }),
      /* @__PURE__ */ jsx151("ul", { className: "grid gap-2 font-bold", children: navs3.map((navItem) => /* @__PURE__ */ jsx151("li", { children: /* @__PURE__ */ jsxs134(
        NavLink8,
        {
          to: navItem.url,
          className: ({ isActive }) => `${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"} flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF]`,
          children: [
            /* @__PURE__ */ jsx151(Svg, { src: navItem.icon }),
            navItem.label
          ]
        }
      ) }, navItem.label)) }),
      /* @__PURE__ */ jsx151(Accordion4, { type: "single", collapsible: !0, className: "w-full mt-2", children: navsWSubs3.map((item) => /* @__PURE__ */ jsxs134(AccordionItem4, { value: item.label, className: "group", children: [
        /* @__PURE__ */ jsxs134(
          AccordionTrigger4,
          {
            className: cn("border-l-4 border-transparent group w-full flex gap-3 items-center justify-between px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
              "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(item.label)
            }),
            children: [
              /* @__PURE__ */ jsxs134("span", { className: "flex gap-3 items-center", children: [
                /* @__PURE__ */ jsx151(Svg, { src: item.icon }),
                item.label
              ] }),
              /* @__PURE__ */ jsx151(Svg, { src: icons.arrowDownIcon, className: "group-[[data-state=open]]:rotate-180 transition-transform duration-200" })
            ]
          }
        ),
        /* @__PURE__ */ jsx151(AccordionContent4, { children: /* @__PURE__ */ jsx151("ul", { className: "list-disc list-inside p-3", children: item.subitems.map((subitem) => /* @__PURE__ */ jsx151("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ jsx151(
          NavLink8,
          {
            to: subitem.url,
            className: ({ isActive }) => `${isActive ? "active" : ""}`,
            children: subitem.label
          }
        ) }, subitem.label)) }) })
      ] }, item.label)) })
    ] }),
    /* @__PURE__ */ jsxs134("aside", { className: "border-t  px-6 py-3", children: [
      /* @__PURE__ */ jsxs134("span", { className: "flex items-center gap-1 mb-2 font-satoshi-bold", children: [
        /* @__PURE__ */ jsx151(Svg, { src: icons.themeIcon }),
        "Theme"
      ] }),
      /* @__PURE__ */ jsxs134(
        Toggletip,
        {
          mainComponent,
          childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border  text-xs whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsx151("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }),
            /* @__PURE__ */ jsx151("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }),
            /* @__PURE__ */ jsx151("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" })
          ]
        }
      )
    ] })
  ] }) : null;
}

// app/routes/user.tsx
import { jsx as jsx152, jsxs as jsxs135 } from "react/jsx-runtime";
var meta4 = () => [
  { title: "KOTMY | Admin" },
  { name: "description", content: "KOTMY Admin application" }
];
function Layout3({ children }) {
  let [showNav, setShowNav] = useState51(!1);
  return useEffect44(() => {
    setShowNav(window.innerWidth >= 640);
  }, []), /* @__PURE__ */ jsxs135("div", { className: "bg-tertiary text-admin-pry", children: [
    /* @__PURE__ */ jsx152(UserPrimaryHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }),
    /* @__PURE__ */ jsx152(UserMobileHeader2, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }),
    /* @__PURE__ */ jsx152(UserMobileNavigation, { onClose: () => {
      setShowNav(!1);
    }, show: showNav }),
    /* @__PURE__ */ jsxs135("div", { className: "sm:flex sm:h-[calc(100vh-85px)]", children: [
      /* @__PURE__ */ jsx152(UserNavigation, { show: showNav }),
      /* @__PURE__ */ jsx152("div", { className: "flex-grow overflow-y-auto", children })
    ] })
  ] });
}
function UserLayout() {
  return /* @__PURE__ */ jsx152(Layout3, { children: /* @__PURE__ */ jsx152(Outlet6, {}) });
}
function ErrorBoundary4() {
  let { pathname } = useLocation18();
  return /* @__PURE__ */ jsx152(Layout3, { children: /* @__PURE__ */ jsxs135("div", { className: "w-full max-sm:h-[calc(100dvh-73px)] p-5 m-auto lg:max-w-3xl grid place-content-center text-center gap-5", children: [
    /* @__PURE__ */ jsx152("h2", { className: "text-xl font-bold text-red-500", children: "Something went wrong" }),
    /* @__PURE__ */ jsx152("p", { children: "Apologies, something went wrong on our end. Please try again." }),
    /* @__PURE__ */ jsx152(Cta_default, { element: "link", to: pathname, className: "px-4 py-1 rounded-md", children: "Reload page" }),
    /* @__PURE__ */ jsx152(Cta_default, { element: "link", to: "/user/overview", className: "px-4 py-1 rounded-md", children: "Back to User Home" })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-5WIG2JSN.js", imports: ["/build/_shared/chunk-5BPS7M3R.js", "/build/_shared/chunk-GDLBX7ER.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FTAPPADA.js", imports: ["/build/_shared/chunk-VKF5GDGK.js", "/build/_shared/chunk-QUWV6VHE.js", "/build/_shared/chunk-TAKBEXVE.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_public": { id: "routes/_public", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_public-TOC6YGYQ.js", imports: ["/build/_shared/chunk-QX2A73K4.js", "/build/_shared/chunk-ZAXASDEZ.js", "/build/_shared/chunk-L3BZDK2M.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public._index": { id: "routes/_public._index", parentId: "routes/_public", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_public._index-LOXYQBEG.js", imports: ["/build/_shared/chunk-AVP2ZDAJ.js", "/build/_shared/chunk-4TZ2OPOB.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-UDB6AWW5.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contest.contestant.$contestantId._index": { id: "routes/_public.contest.contestant.$contestantId._index", parentId: "routes/_public", path: "contest/contestant/:contestantId", index: !0, caseSensitive: void 0, module: "/build/routes/_public.contest.contestant.$contestantId._index-NYRLSEUJ.js", imports: ["/build/_shared/chunk-APURLEBB.js", "/build/_shared/chunk-NM3XR3ZJ.js", "/build/_shared/chunk-NCNYMVQ3.js", "/build/_shared/chunk-AVP2ZDAJ.js", "/build/_shared/chunk-JE5WQPN4.js", "/build/_shared/chunk-MPFSB7BL.js", "/build/_shared/chunk-WJF7FR4I.js", "/build/_shared/chunk-WJWNORSC.js", "/build/_shared/chunk-TZO6O53N.js", "/build/_shared/chunk-XVMOG6SQ.js", "/build/_shared/chunk-BWLSVGBU.js", "/build/_shared/chunk-QXBKJAER.js", "/build/_shared/chunk-VKF5GDGK.js", "/build/_shared/chunk-DNVIPFFN.js", "/build/_shared/chunk-P3PTKQXW.js", "/build/_shared/chunk-XJ3VUE35.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-U6WAFJHN.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-4TZ2OPOB.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-QUWV6VHE.js", "/build/_shared/chunk-TAKBEXVE.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests.$tournamentId.$contestId": { id: "routes/_public.contests.$tournamentId.$contestId", parentId: "routes/_public", path: "contests/:tournamentId/:contestId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.contests.$tournamentId.$contestId-CZGYRDTF.js", imports: ["/build/_shared/chunk-KGORBVOA.js", "/build/_shared/chunk-QXBKJAER.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests.$tournamentId.$contestId._index": { id: "routes/_public.contests.$tournamentId.$contestId._index", parentId: "routes/_public.contests.$tournamentId.$contestId", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_public.contests.$tournamentId.$contestId._index-6R47GWKD.js", imports: ["/build/_shared/chunk-NCNYMVQ3.js", "/build/_shared/chunk-AVP2ZDAJ.js", "/build/_shared/chunk-JE5WQPN4.js", "/build/_shared/chunk-MPFSB7BL.js", "/build/_shared/chunk-WJF7FR4I.js", "/build/_shared/chunk-WJWNORSC.js", "/build/_shared/chunk-TZO6O53N.js", "/build/_shared/chunk-XVMOG6SQ.js", "/build/_shared/chunk-BWLSVGBU.js", "/build/_shared/chunk-QX2A73K4.js", "/build/_shared/chunk-VKF5GDGK.js", "/build/_shared/chunk-DNVIPFFN.js", "/build/_shared/chunk-ZAXASDEZ.js", "/build/_shared/chunk-P3PTKQXW.js", "/build/_shared/chunk-XJ3VUE35.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-U6WAFJHN.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-4TZ2OPOB.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-QUWV6VHE.js", "/build/_shared/chunk-TAKBEXVE.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-L3BZDK2M.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests.$tournamentId.$contestId.scoreboard": { id: "routes/_public.contests.$tournamentId.$contestId.scoreboard", parentId: "routes/_public.contests.$tournamentId.$contestId", path: "scoreboard", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.contests.$tournamentId.$contestId.scoreboard-C4BPWUY7.js", imports: ["/build/_shared/chunk-WJWNORSC.js", "/build/_shared/chunk-TZO6O53N.js", "/build/_shared/chunk-XVMOG6SQ.js", "/build/_shared/chunk-BWLSVGBU.js", "/build/_shared/chunk-QX2A73K4.js", "/build/_shared/chunk-VKF5GDGK.js", "/build/_shared/chunk-DNVIPFFN.js", "/build/_shared/chunk-ZAXASDEZ.js", "/build/_shared/chunk-P3PTKQXW.js", "/build/_shared/chunk-XJ3VUE35.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-U6WAFJHN.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-4TZ2OPOB.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-QUWV6VHE.js", "/build/_shared/chunk-TAKBEXVE.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-L3BZDK2M.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests.$tournamentId.$contestId.stage_upload": { id: "routes/_public.contests.$tournamentId.$contestId.stage_upload", parentId: "routes/_public.contests.$tournamentId.$contestId", path: "stage_upload", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.contests.$tournamentId.$contestId.stage_upload-A5IHO42A.js", imports: ["/build/_shared/chunk-NM3XR3ZJ.js", "/build/_shared/chunk-MPFSB7BL.js", "/build/_shared/chunk-WJF7FR4I.js", "/build/_shared/chunk-DNVIPFFN.js", "/build/_shared/chunk-ZAXASDEZ.js", "/build/_shared/chunk-P3PTKQXW.js", "/build/_shared/chunk-XJ3VUE35.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-U6WAFJHN.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-4TZ2OPOB.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-QUWV6VHE.js", "/build/_shared/chunk-TAKBEXVE.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-L3BZDK2M.js", "/build/_shared/chunk-UDB6AWW5.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests.$tournamentId._index": { id: "routes/_public.contests.$tournamentId._index", parentId: "routes/_public", path: "contests/:tournamentId", index: !0, caseSensitive: void 0, module: "/build/routes/_public.contests.$tournamentId._index-5SPIXV2Q.js", imports: ["/build/_shared/chunk-MQIPNU5N.js", "/build/_shared/chunk-4CUT6I4Y.js", "/build/_shared/chunk-KGORBVOA.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.contests._index": { id: "routes/_public.contests._index", parentId: "routes/_public", path: "contests", index: !0, caseSensitive: void 0, module: "/build/routes/_public.contests._index-OG6AHPUW.js", imports: ["/build/_shared/chunk-MQIPNU5N.js", "/build/_shared/chunk-4CUT6I4Y.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.marketplace._index": { id: "routes/_public.marketplace._index", parentId: "routes/_public", path: "marketplace", index: !0, caseSensitive: void 0, module: "/build/routes/_public.marketplace._index-2S4PMHSH.js", imports: ["/build/_shared/chunk-PZHF5S7R.js", "/build/_shared/chunk-MVMPD6CV.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.marketplace.cart": { id: "routes/_public.marketplace.cart", parentId: "routes/_public", path: "marketplace/cart", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.marketplace.cart-LDYW6LDT.js", imports: ["/build/_shared/chunk-PZHF5S7R.js", "/build/_shared/chunk-MVMPD6CV.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.results.$contestId": { id: "routes/_public.results.$contestId", parentId: "routes/_public", path: "results/:contestId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.results.$contestId-TP7R6ZS7.js", imports: ["/build/_shared/chunk-KGORBVOA.js", "/build/_shared/chunk-PHWTQ2OR.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.results._index": { id: "routes/_public.results._index", parentId: "routes/_public", path: "results", index: !0, caseSensitive: void 0, module: "/build/routes/_public.results._index-U37IMNTD.js", imports: ["/build/_shared/chunk-MQIPNU5N.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.winner.$winnerId": { id: "routes/_public.winner.$winnerId", parentId: "routes/_public", path: "winner/:winnerId", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.winner.$winnerId-6BKMGRP4.js", imports: ["/build/_shared/chunk-KGORBVOA.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_public.winners": { id: "routes/_public.winners", parentId: "routes/_public", path: "winners", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.winners-JRPD3XVU.js", imports: ["/build/_shared/chunk-KGORBVOA.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-L6PEGW6Y.js", imports: ["/build/_shared/chunk-QXJMULPB.js", "/build/_shared/chunk-VXBDZZJG.js", "/build/_shared/chunk-QX2A73K4.js", "/build/_shared/chunk-XJ3VUE35.js", "/build/_shared/chunk-U6WAFJHN.js", "/build/_shared/chunk-4TZ2OPOB.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-L3BZDK2M.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/admin._index": { id: "routes/admin._index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin._index-Y7JJIBA2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.accounts.$userId": { id: "routes/admin.accounts.$userId", parentId: "routes/admin", path: "accounts/:userId", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.accounts.$userId-NUU5JRNW.js", imports: ["/build/_shared/chunk-HWXCYYMG.js", "/build/_shared/chunk-AG3C6J77.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-PHWTQ2OR.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.accounts._index": { id: "routes/admin.accounts._index", parentId: "routes/admin", path: "accounts", index: !0, caseSensitive: void 0, module: "/build/routes/admin.accounts._index-G24Q2Q34.js", imports: ["/build/_shared/chunk-VNKG7ZDP.js", "/build/_shared/chunk-AG3C6J77.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.accounts.add": { id: "routes/admin.accounts.add", parentId: "routes/admin", path: "accounts/add", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.accounts.add-WWBC5GFK.js", imports: ["/build/_shared/chunk-HWXCYYMG.js", "/build/_shared/chunk-AG3C6J77.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-PHWTQ2OR.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.accounts.allusers": { id: "routes/admin.accounts.allusers", parentId: "routes/admin", path: "accounts/allusers", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.accounts.allusers-QF3C6ARC.js", imports: ["/build/_shared/chunk-VNKG7ZDP.js", "/build/_shared/chunk-AG3C6J77.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.contests.$contestId.$stageId": { id: "routes/admin.contests.$contestId.$stageId", parentId: "routes/admin", path: "contests/:contestId/:stageId", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.contests.$contestId.$stageId-H3WGH5I5.js", imports: ["/build/_shared/chunk-YEQSMFD2.js", "/build/_shared/chunk-6RBS4LE2.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-J5RDGROX.js", "/build/_shared/chunk-EHYIQE7U.js", "/build/_shared/chunk-KGORBVOA.js", "/build/_shared/chunk-MPFSB7BL.js", "/build/_shared/chunk-BWLSVGBU.js", "/build/_shared/chunk-QXBKJAER.js", "/build/_shared/chunk-VKF5GDGK.js", "/build/_shared/chunk-P3PTKQXW.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-QUWV6VHE.js", "/build/_shared/chunk-TAKBEXVE.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.contests.$contestId._index": { id: "routes/admin.contests.$contestId._index", parentId: "routes/admin", path: "contests/:contestId", index: !0, caseSensitive: void 0, module: "/build/routes/admin.contests.$contestId._index-ENPUAART.js", imports: ["/build/_shared/chunk-4U2X6FWV.js", "/build/_shared/chunk-4CUT6I4Y.js", "/build/_shared/chunk-6RBS4LE2.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-EHYIQE7U.js", "/build/_shared/chunk-KGORBVOA.js", "/build/_shared/chunk-PHWTQ2OR.js", "/build/_shared/chunk-TZO6O53N.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.contests._index": { id: "routes/admin.contests._index", parentId: "routes/admin", path: "contests", index: !0, caseSensitive: void 0, module: "/build/routes/admin.contests._index-HBLOHG74.js", imports: ["/build/_shared/chunk-XL2EVAQ2.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-J5RDGROX.js", "/build/_shared/chunk-EHYIQE7U.js", "/build/_shared/chunk-KGORBVOA.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-BWLSVGBU.js", "/build/_shared/chunk-VKF5GDGK.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.contests.add": { id: "routes/admin.contests.add", parentId: "routes/admin", path: "contests/add", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.contests.add-M37NJY2O.js", imports: ["/build/_shared/chunk-4U2X6FWV.js", "/build/_shared/chunk-4CUT6I4Y.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-KGORBVOA.js", "/build/_shared/chunk-PHWTQ2OR.js", "/build/_shared/chunk-WJF7FR4I.js", "/build/_shared/chunk-TZO6O53N.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.overview": { id: "routes/admin.overview", parentId: "routes/admin", path: "overview", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.overview-CCCRE2AW.js", imports: ["/build/_shared/chunk-TWJKBWKS.js", "/build/_shared/chunk-VNKG7ZDP.js", "/build/_shared/chunk-AG3C6J77.js", "/build/_shared/chunk-XL2EVAQ2.js", "/build/_shared/chunk-4CUT6I4Y.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-J5RDGROX.js", "/build/_shared/chunk-EHYIQE7U.js", "/build/_shared/chunk-KGORBVOA.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-BWLSVGBU.js", "/build/_shared/chunk-VKF5GDGK.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.partners._index": { id: "routes/admin.partners._index", parentId: "routes/admin", path: "partners", index: !0, caseSensitive: void 0, module: "/build/routes/admin.partners._index-DXNBCTSA.js", imports: ["/build/_shared/chunk-MVMPD6CV.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.partners.details.$id": { id: "routes/admin.partners.details.$id", parentId: "routes/admin", path: "partners/details/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.partners.details.$id-LRPB2ET6.js", imports: ["/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-MVMPD6CV.js", "/build/_shared/chunk-PHWTQ2OR.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.tournaments.$ID._index": { id: "routes/admin.tournaments.$ID._index", parentId: "routes/admin", path: "tournaments/:ID", index: !0, caseSensitive: void 0, module: "/build/routes/admin.tournaments.$ID._index-DIF2LBSY.js", imports: ["/build/_shared/chunk-XL2EVAQ2.js", "/build/_shared/chunk-4CUT6I4Y.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-J5RDGROX.js", "/build/_shared/chunk-EHYIQE7U.js", "/build/_shared/chunk-KGORBVOA.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-BWLSVGBU.js", "/build/_shared/chunk-VKF5GDGK.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.tournaments.$ID.edit": { id: "routes/admin.tournaments.$ID.edit", parentId: "routes/admin", path: "tournaments/:ID/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.tournaments.$ID.edit-JA2KULB4.js", imports: ["/build/_shared/chunk-4CUT6I4Y.js", "/build/_shared/chunk-6RBS4LE2.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.tournaments._index": { id: "routes/admin.tournaments._index", parentId: "routes/admin", path: "tournaments", index: !0, caseSensitive: void 0, module: "/build/routes/admin.tournaments._index-K2O6XJ5J.js", imports: ["/build/_shared/chunk-TWJKBWKS.js", "/build/_shared/chunk-4CUT6I4Y.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-BWLSVGBU.js", "/build/_shared/chunk-VKF5GDGK.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.tournaments.add": { id: "routes/admin.tournaments.add", parentId: "routes/admin", path: "tournaments/add", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.tournaments.add-6MROKTSW.js", imports: ["/build/_shared/chunk-4CUT6I4Y.js", "/build/_shared/chunk-7I6ZOQIA.js", "/build/_shared/chunk-WJF7FR4I.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.transactions.affiliate-board": { id: "routes/admin.transactions.affiliate-board", parentId: "routes/admin", path: "transactions/affiliate-board", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.transactions.affiliate-board-EINSHL57.js", imports: ["/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-CXJHSFWB.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.transactions.contest-registrations": { id: "routes/admin.transactions.contest-registrations", parentId: "routes/admin", path: "transactions/contest-registrations", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.transactions.contest-registrations-NSUEXULL.js", imports: ["/build/_shared/chunk-J5RDGROX.js", "/build/_shared/chunk-EHYIQE7U.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-XVMOG6SQ.js", "/build/_shared/chunk-OWHGGQXZ.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.transactions.income-history": { id: "routes/admin.transactions.income-history", parentId: "routes/admin", path: "transactions/income-history", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.transactions.income-history-57WCSPB7.js", imports: ["/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-CXJHSFWB.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.transactions.tally-votes": { id: "routes/admin.transactions.tally-votes", parentId: "routes/admin", path: "transactions/tally-votes", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.transactions.tally-votes-FE2NO5GD.js", imports: ["/build/_shared/chunk-AG3C6J77.js", "/build/_shared/chunk-YEQSMFD2.js", "/build/_shared/chunk-J5RDGROX.js", "/build/_shared/chunk-EHYIQE7U.js", "/build/_shared/chunk-KGORBVOA.js", "/build/_shared/chunk-PHWTQ2OR.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-XVMOG6SQ.js", "/build/_shared/chunk-BWLSVGBU.js", "/build/_shared/chunk-VKF5GDGK.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-567HJA6G.js", imports: ["/build/_shared/chunk-ZYO3LTNC.js", "/build/_shared/chunk-QX2A73K4.js", "/build/_shared/chunk-4TZ2OPOB.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-L3BZDK2M.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-2X6KKPSI.js", imports: ["/build/_shared/chunk-QX2A73K4.js", "/build/_shared/chunk-L3BZDK2M.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/partner.account": { id: "routes/partner.account", parentId: "root", path: "partner/account", index: void 0, caseSensitive: void 0, module: "/build/routes/partner.account-V7CIF6ZS.js", imports: ["/build/_shared/chunk-QX2A73K4.js", "/build/_shared/chunk-L3BZDK2M.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/partner.partner": { id: "routes/partner.partner", parentId: "root", path: "partner/partner", index: void 0, caseSensitive: void 0, module: "/build/routes/partner.partner-3HOYQK4X.js", imports: ["/build/_shared/chunk-MVMPD6CV.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/partners": { id: "routes/partners", parentId: "root", path: "partners", index: void 0, caseSensitive: void 0, module: "/build/routes/partners-POKFVPZZ.js", imports: ["/build/_shared/chunk-QXJMULPB.js", "/build/_shared/chunk-VXBDZZJG.js", "/build/_shared/chunk-QX2A73K4.js", "/build/_shared/chunk-XJ3VUE35.js", "/build/_shared/chunk-U6WAFJHN.js", "/build/_shared/chunk-4TZ2OPOB.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-L3BZDK2M.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/partners.add": { id: "routes/partners.add", parentId: "routes/partners", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/partners.add-TNIJANUO.js", imports: ["/build/_shared/chunk-MVMPD6CV.js", "/build/_shared/chunk-PHWTQ2OR.js", "/build/_shared/chunk-WJF7FR4I.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/partners.home": { id: "routes/partners.home", parentId: "routes/partners", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/partners.home-HSLUOGGK.js", imports: ["/build/_shared/chunk-MVMPD6CV.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/partners.location": { id: "routes/partners.location", parentId: "routes/partners", path: "location", index: void 0, caseSensitive: void 0, module: "/build/routes/partners.location-5KXJ3RBG.js", imports: ["/build/_shared/chunk-MVMPD6CV.js", "/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/partners.product.update.$productId": { id: "routes/partners.product.update.$productId", parentId: "routes/partners", path: "product/update/:productId", index: void 0, caseSensitive: void 0, module: "/build/routes/partners.product.update.$productId-BFUMLC26.js", imports: ["/build/_shared/chunk-MVMPD6CV.js", "/build/_shared/chunk-PHWTQ2OR.js", "/build/_shared/chunk-WJF7FR4I.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-E2ZJJA3L.js", imports: ["/build/_shared/chunk-ZYO3LTNC.js", "/build/_shared/chunk-WJF7FR4I.js", "/build/_shared/chunk-QX2A73K4.js", "/build/_shared/chunk-4TZ2OPOB.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-L3BZDK2M.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user": { id: "routes/user", parentId: "root", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/user-TI37MCIB.js", imports: ["/build/_shared/chunk-QXJMULPB.js", "/build/_shared/chunk-VXBDZZJG.js", "/build/_shared/chunk-QX2A73K4.js", "/build/_shared/chunk-XJ3VUE35.js", "/build/_shared/chunk-U6WAFJHN.js", "/build/_shared/chunk-4TZ2OPOB.js", "/build/_shared/chunk-NNNROOR6.js", "/build/_shared/chunk-L3BZDK2M.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/user.addwithdrawalaccount.$walletid": { id: "routes/user.addwithdrawalaccount.$walletid", parentId: "routes/user", path: "addwithdrawalaccount/:walletid", index: void 0, caseSensitive: void 0, module: "/build/routes/user.addwithdrawalaccount.$walletid-U4QJYGMW.js", imports: ["/build/_shared/chunk-CXJHSFWB.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.addwithdrawalaccount.partner.$walletid": { id: "routes/user.addwithdrawalaccount.partner.$walletid", parentId: "routes/user", path: "addwithdrawalaccount/partner/:walletid", index: void 0, caseSensitive: void 0, module: "/build/routes/user.addwithdrawalaccount.partner.$walletid-OUDMFW2Z.js", imports: ["/build/_shared/chunk-CXJHSFWB.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.addwithdrawalaccount.personal.$walletid": { id: "routes/user.addwithdrawalaccount.personal.$walletid", parentId: "routes/user", path: "addwithdrawalaccount/personal/:walletid", index: void 0, caseSensitive: void 0, module: "/build/routes/user.addwithdrawalaccount.personal.$walletid-NRSAALY3.js", imports: ["/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-CXJHSFWB.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.affiliate": { id: "routes/user.affiliate", parentId: "routes/user", path: "affiliate", index: void 0, caseSensitive: void 0, module: "/build/routes/user.affiliate-44MCPNNI.js", imports: ["/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-CXJHSFWB.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.all-tournaments": { id: "routes/user.all-tournaments", parentId: "routes/user", path: "all-tournaments", index: void 0, caseSensitive: void 0, module: "/build/routes/user.all-tournaments-5X6NRYGQ.js", imports: ["/build/_shared/chunk-MQIPNU5N.js", "/build/_shared/chunk-4CUT6I4Y.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.contestant.$contestantId": { id: "routes/user.contestant.$contestantId", parentId: "routes/user", path: "contestant/:contestantId", index: void 0, caseSensitive: void 0, module: "/build/routes/user.contestant.$contestantId-DZRQPBBO.js", imports: ["/build/_shared/chunk-JE5WQPN4.js", "/build/_shared/chunk-MPFSB7BL.js", "/build/_shared/chunk-WJF7FR4I.js", "/build/_shared/chunk-ZAXASDEZ.js", "/build/_shared/chunk-P3PTKQXW.js", "/build/_shared/chunk-XPOBNDP7.js", "/build/_shared/chunk-7CX53PJY.js", "/build/_shared/chunk-QUWV6VHE.js", "/build/_shared/chunk-TAKBEXVE.js", "/build/_shared/chunk-7Q37C4VZ.js", "/build/_shared/chunk-PIEH4G2H.js", "/build/_shared/chunk-F5AM2ERS.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.pending-uploads": { id: "routes/user.pending-uploads", parentId: "routes/user", path: "pending-uploads", index: void 0, caseSensitive: void 0, module: "/build/routes/user.pending-uploads-VCXDK6SS.js", imports: ["/build/_shared/chunk-APURLEBB.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.profile": { id: "routes/user.profile", parentId: "routes/user", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/user.profile-PBZ2L6WT.js", imports: ["/build/_shared/chunk-ZYO3LTNC.js", "/build/_shared/chunk-WJF7FR4I.js", "/build/_shared/chunk-EQOSR4CK.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.setwithdrawalpin": { id: "routes/user.setwithdrawalpin", parentId: "routes/user", path: "setwithdrawalpin", index: void 0, caseSensitive: void 0, module: "/build/routes/user.setwithdrawalpin-DYGIOV7K.js", imports: ["/build/_shared/chunk-ZYO3LTNC.js", "/build/_shared/chunk-PZHF5S7R.js", "/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-CXJHSFWB.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.wallet": { id: "routes/user.wallet", parentId: "routes/user", path: "wallet", index: void 0, caseSensitive: void 0, module: "/build/routes/user.wallet-LFQ2H7CM.js", imports: ["/build/_shared/chunk-BR26SAED.js", "/build/_shared/chunk-CXJHSFWB.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.withdraw.$walletid": { id: "routes/user.withdraw.$walletid", parentId: "routes/user", path: "withdraw/:walletid", index: void 0, caseSensitive: void 0, module: "/build/routes/user.withdraw.$walletid-O7GX3Q2R.js", imports: ["/build/_shared/chunk-ZYWVDPL2.js", "/build/_shared/chunk-CXJHSFWB.js", "/build/_shared/chunk-N6N6QOCJ.js", "/build/_shared/chunk-UDB6AWW5.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "65bc32e6", hmr: void 0, url: "/build/manifest-65BC32E6.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
  "routes/user.addwithdrawalaccount.personal.$walletid": {
    id: "routes/user.addwithdrawalaccount.personal.$walletid",
    parentId: "routes/user",
    path: "addwithdrawalaccount/personal/:walletid",
    index: void 0,
    caseSensitive: void 0,
    module: user_addwithdrawalaccount_personal_walletid_exports
  },
  "routes/user.addwithdrawalaccount.partner.$walletid": {
    id: "routes/user.addwithdrawalaccount.partner.$walletid",
    parentId: "routes/user",
    path: "addwithdrawalaccount/partner/:walletid",
    index: void 0,
    caseSensitive: void 0,
    module: user_addwithdrawalaccount_partner_walletid_exports
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
  "routes/user.addwithdrawalaccount.$walletid": {
    id: "routes/user.addwithdrawalaccount.$walletid",
    parentId: "routes/user",
    path: "addwithdrawalaccount/:walletid",
    index: void 0,
    caseSensitive: void 0,
    module: user_addwithdrawalaccount_walletid_exports
  },
  "routes/admin.contests.$contestId.$stageId": {
    id: "routes/admin.contests.$contestId.$stageId",
    parentId: "routes/admin",
    path: "contests/:contestId/:stageId",
    index: void 0,
    caseSensitive: void 0,
    module: admin_contests_contestId_stageId_exports
  },
  "routes/admin.transactions.affiliate-board": {
    id: "routes/admin.transactions.affiliate-board",
    parentId: "routes/admin",
    path: "transactions/affiliate-board",
    index: void 0,
    caseSensitive: void 0,
    module: admin_transactions_affiliate_board_exports
  },
  "routes/partners.product.update.$productId": {
    id: "routes/partners.product.update.$productId",
    parentId: "routes/partners",
    path: "product/update/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: partners_product_update_productId_exports
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
  "routes/_public.marketplace._index": {
    id: "routes/_public.marketplace._index",
    parentId: "routes/_public",
    path: "marketplace",
    index: !0,
    caseSensitive: void 0,
    module: public_marketplace_index_exports
  },
  "routes/_public.results.$contestId": {
    id: "routes/_public.results.$contestId",
    parentId: "routes/_public",
    path: "results/:contestId",
    index: void 0,
    caseSensitive: void 0,
    module: public_results_contestId_exports
  },
  "routes/admin.partners.details.$id": {
    id: "routes/admin.partners.details.$id",
    parentId: "routes/admin",
    path: "partners/details/:id",
    index: void 0,
    caseSensitive: void 0,
    module: admin_partners_details_id_exports
  },
  "routes/admin.tournaments.$ID.edit": {
    id: "routes/admin.tournaments.$ID.edit",
    parentId: "routes/admin",
    path: "tournaments/:ID/edit",
    index: void 0,
    caseSensitive: void 0,
    module: admin_tournaments_ID_edit_exports
  },
  "routes/_public.marketplace.cart": {
    id: "routes/_public.marketplace.cart",
    parentId: "routes/_public",
    path: "marketplace/cart",
    index: void 0,
    caseSensitive: void 0,
    module: public_marketplace_cart_exports
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
  "routes/admin.accounts.allusers": {
    id: "routes/admin.accounts.allusers",
    parentId: "routes/admin",
    path: "accounts/allusers",
    index: void 0,
    caseSensitive: void 0,
    module: admin_accounts_allusers_exports
  },
  "routes/user.withdraw.$walletid": {
    id: "routes/user.withdraw.$walletid",
    parentId: "routes/user",
    path: "withdraw/:walletid",
    index: void 0,
    caseSensitive: void 0,
    module: user_withdraw_walletid_exports
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
  "routes/admin.partners._index": {
    id: "routes/admin.partners._index",
    parentId: "routes/admin",
    path: "partners",
    index: !0,
    caseSensitive: void 0,
    module: admin_partners_index_exports
  },
  "routes/admin.tournaments.add": {
    id: "routes/admin.tournaments.add",
    parentId: "routes/admin",
    path: "tournaments/add",
    index: void 0,
    caseSensitive: void 0,
    module: admin_tournaments_add_exports
  },
  "routes/user.setwithdrawalpin": {
    id: "routes/user.setwithdrawalpin",
    parentId: "routes/user",
    path: "setwithdrawalpin",
    index: void 0,
    caseSensitive: void 0,
    module: user_setwithdrawalpin_exports
  },
  "routes/user.all-tournaments": {
    id: "routes/user.all-tournaments",
    parentId: "routes/user",
    path: "all-tournaments",
    index: void 0,
    caseSensitive: void 0,
    module: user_all_tournaments_exports
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
  "routes/partners.location": {
    id: "routes/partners.location",
    parentId: "routes/partners",
    path: "location",
    index: void 0,
    caseSensitive: void 0,
    module: partners_location_exports
  },
  "routes/_public.winners": {
    id: "routes/_public.winners",
    parentId: "routes/_public",
    path: "winners",
    index: void 0,
    caseSensitive: void 0,
    module: public_winners_exports
  },
  "routes/partner.account": {
    id: "routes/partner.account",
    parentId: "root",
    path: "partner/account",
    index: void 0,
    caseSensitive: void 0,
    module: partner_account_exports
  },
  "routes/partner.partner": {
    id: "routes/partner.partner",
    parentId: "root",
    path: "partner/partner",
    index: void 0,
    caseSensitive: void 0,
    module: partner_partner_exports
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
  "routes/user.affiliate": {
    id: "routes/user.affiliate",
    parentId: "routes/user",
    path: "affiliate",
    index: void 0,
    caseSensitive: void 0,
    module: user_affiliate_exports
  },
  "routes/partners.home": {
    id: "routes/partners.home",
    parentId: "routes/partners",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: partners_home_exports
  },
  "routes/admin._index": {
    id: "routes/admin._index",
    parentId: "routes/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_index_exports
  },
  "routes/partners.add": {
    id: "routes/partners.add",
    parentId: "routes/partners",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: partners_add_exports
  },
  "routes/user.profile": {
    id: "routes/user.profile",
    parentId: "routes/user",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: user_profile_exports
  },
  "routes/user.wallet": {
    id: "routes/user.wallet",
    parentId: "routes/user",
    path: "wallet",
    index: void 0,
    caseSensitive: void 0,
    module: user_wallet_exports
  },
  "routes/partners": {
    id: "routes/partners",
    parentId: "root",
    path: "partners",
    index: void 0,
    caseSensitive: void 0,
    module: partners_exports
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
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
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
