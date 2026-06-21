import {
  socialIcons
} from "/build/_shared/chunk-CKJP4F24.js";
import {
  numberSlang
} from "/build/_shared/chunk-7FCTUE5Q.js";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "/build/_shared/chunk-WQOLZOSP.js";
import {
  useUserManager
} from "/build/_shared/chunk-IHZBV5UE.js";
import {
  Button
} from "/build/_shared/chunk-TTYKYZUT.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-HNL7TC3S.js";
import {
  FormControl
} from "/build/_shared/chunk-P6IR6DKG.js";
import {
  cn
} from "/build/_shared/chunk-65Q6VMM7.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-ZTZJB4DO.js";
import {
  Cta_default
} from "/build/_shared/chunk-55Q66HLJ.js";
import {
  Form,
  useFetcher,
  useLocation,
  useNavigate,
  useRouteLoaderData
} from "/build/_shared/chunk-QORMC3GD.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/public/contests/VoteLink.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/VoteLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/VoteLink.tsx"
  );
  import.meta.hot.lastModified = "1774141773279.6038";
}
var VoteLink_default = _c2 = import_react.default.forwardRef(_c = function VoteLink({
  type,
  url,
  count,
  className = "",
  ...rest
}, ref) {
  const props = url ? {
    element: "link",
    to: url,
    ...rest
  } : {
    element: "button",
    ref,
    ...rest
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { ...props, variant: "outline", className: cn(`p-2 flex items-center border rounded-full`, {
    "border-facebook text-facebook bg-facebookBG hover:bg-facebook/15": type === "facebook",
    "border-instagram text-instagram bg-instagramBG hover:bg-instagram/15": type === "instagram",
    "border-twitter text-twitter bg-twitterBG hover:bg-twitter/15": type === "twitter",
    "border-tally text-tally bg-tallyBG hover:bg-tally/15": type === "tally",
    "border-givaah text-givaah bg-givaahBG hover:bg-givaah/15": type === "givaah"
  }, className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn(`w-6 h-6 flex items-center justify-center rounded-full p-1`, {
      "bg-facebook": type === "facebook",
      "bg-instagram": type === "instagram",
      "bg-twitter": type === "twitter",
      "bg-tally": type === "tally",
      "bg-givaah": type === "givaah"
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: socialIcons[type] }, void 0, false, {
      fileName: "app/components/public/contests/VoteLink.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/VoteLink.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grow text-xs font-bold text-center mr-2", children: count }, void 0, false, {
      fileName: "app/components/public/contests/VoteLink.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/VoteLink.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
});
var BonusLink = import_react.default.forwardRef(_c3 = function BonusLink2({
  type,
  url,
  count,
  className = "",
  ...rest
}, ref) {
  const props = url ? {
    element: "link",
    to: url,
    ...rest
  } : {
    element: "button",
    ref,
    ...rest
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { ...props, variant: "outline", className: cn(`p-2 flex items-center border rounded-full`, {
    "border-facebook text-facebook bg-facebookBG hover:bg-facebook/15": true
  }, className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `w-6 h-6 flex items-center justify-center rounded-full p-1`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: type }, void 0, false, {
      fileName: "app/components/public/contests/VoteLink.tsx",
      lineNumber: 81,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/VoteLink.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grow text-xs font-bold text-center mr-2", children: count }, void 0, false, {
      fileName: "app/components/public/contests/VoteLink.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/VoteLink.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
});
_c4 = BonusLink;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "%default%$React.forwardRef");
$RefreshReg$(_c2, "%default%");
$RefreshReg$(_c3, "BonusLink$React.forwardRef");
$RefreshReg$(_c4, "BonusLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/TallyVoteDialog.tsx
var import_react3 = __toESM(require_react(), 1);

// app/lib/data/payment.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/data/payment.ts"
  );
  import.meta.hot.lastModified = "1757765166870.6138";
}
var providers = [{ label: "Flutterwave", value: "flutterwave" }];

// app/components/public/contests/TallyVoteDialog.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/TallyVoteDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/TallyVoteDialog.tsx"
  );
  import.meta.hot.lastModified = "1760080481937.532";
}
function TallyVoteDialog({
  contestant,
  disabled,
  children
}) {
  _s();
  const stageContestants = useRouteLoaderData("routes/_public.contests.$tournamentId.$contestId");
  const formRef = (0, import_react3.useRef)(null);
  const {
    pathname,
    search
  } = useLocation();
  const redirectUrl = `${stageContestants?.baseUrl}${pathname}${search}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { modal: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { asChild: true, disabled, title: "Vote for contestant", className: cn(`rounded-full outline-none`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: children ?? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VoteLink_default, { type: "tally", count: numberSlang(contestant.vote.tally), className: "w-full" }, void 0, false, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 50,
      columnNumber: 30
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.questionIcon }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 56,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 55,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block", children: "Vote for contestant" }, void 0, false, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 59,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-normal text-base text-admin-pry", children: `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}` }, void 0, false, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 60,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 58,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogDescription, { asChild: true, className: "border-y p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { ref: formRef, method: "post", className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", labelText: "Email Address", labelClassNames: "text-left", required: true }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 65,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "input", id: "phone", name: "phone", labelText: "Phone Number", labelClassNames: "text-left" }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 66,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "input", id: "vote_quantity", name: "vote_quantity", labelText: "Vote Quantity", type: "number", labelClassNames: "text-left", defaultValue: 1, min: 1, required: true }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 67,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "provider", className: "font-bold flex flex-col text-left", children: [
            "Payment Provider",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { name: "provider", required: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectValue, { placeholder: "Select payment provider" }, void 0, false, {
                fileName: "app/components/public/contests/TallyVoteDialog.tsx",
                lineNumber: 71,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/components/public/contests/TallyVoteDialog.tsx",
                lineNumber: 70,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectContent, { children: providers.map(({
                label,
                value
              }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectItem, { value, className: "focus:bg-blue-700/25", children: label }, value, false, {
                fileName: "app/components/public/contests/TallyVoteDialog.tsx",
                lineNumber: 77,
                columnNumber: 25
              }, this)) }, void 0, false, {
                fileName: "app/components/public/contests/TallyVoteDialog.tsx",
                lineNumber: 73,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 69,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 68,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 81,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "redirect_url", value: redirectUrl }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 82,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "intent", value: "tally_vote" }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 83,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 64,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6 p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { type: "submit", name: "intent", value: "delete", className: "px-10 py-2 rounded-md font-bold min-w-[90px] outline outline-1", children: "Cancel" }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 88,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", onClick: () => formRef.current?.submit(), className: "bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 91,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/TallyVoteDialog.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(TallyVoteDialog, "+Wml9P+KbT24iOCCUyOCw422nzs=", false, function() {
  return [useRouteLoaderData, useLocation];
});
_c5 = TallyVoteDialog;
var _c5;
$RefreshReg$(_c5, "TallyVoteDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/SocialLink.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/SocialLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/SocialLink.tsx"
  );
  import.meta.hot.lastModified = "1774167759692.0852";
}
var SocialLink_default = _c22 = _s2(import_react4.default.forwardRef(_c6 = _s2(function SocialLink({
  type,
  url,
  className = "",
  ...rest
}, ref) {
  _s2();
  const props = url ? {
    element: "link",
    to: url,
    ...rest
  } : {
    element: "button",
    ref,
    ...rest
  };
  const fetcher = useFetcher();
  const [signInPrompt, setSignInPrompt] = (0, import_react4.useState)(false);
  const {
    getUserStoreManager
  } = useUserManager();
  const navigate = useNavigate();
  const location = useLocation();
  const path = `${location.pathname}${location.search}${location.hash}`;
  (0, import_react4.useEffect)(() => {
    console.log({
      d: fetcher?.data
    });
    if (fetcher.state === "idle" && fetcher.data && fetcher.data.errorCode === "LOGIN_REQUIRED") {
      setSignInPrompt(true);
    }
  }, [fetcher.state, fetcher.data]);
  return type === "kotmy" ? signInPrompt ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { role: "dialog", "aria-modal": "true", className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full max-w-xl bg-white border rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 py-10 px-6 sm:px-12 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { width: "64", height: "64", fill: "none", viewBox: "0 0 24 24", className: "mx-auto mb-2 text-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z", fill: "currentColor" }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 66,
      columnNumber: 122
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 66,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-satoshi-bold text-accent", children: "Sign In Required" }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 67,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-700 text-base max-w-md", children: "Voting for your favourite contestant requires you to sign in" }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 68,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-center mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { element: "button", onClick: () => setSignInPrompt(false), className: "w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition", children: "Go back" }, void 0, false, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 70,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { element: "button", onClick: () => navigate(`/login?redirectTo=${encodeURIComponent(path)}`), className: "w-full sm:inline-flex sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-accent text-white hover:bg-accent/90 transition", children: "Sign In" }, void 0, false, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 73,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 69,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-400 mt-2", children: [
      "Don't have an account? ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", className: "underline text-accent", onClick: () => navigate(`/signup?redirectTo=${encodeURIComponent(path)}`), children: "Sign up here" }, void 0, false, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 77,
        columnNumber: 90
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 77,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/SocialLink.tsx",
    lineNumber: 65,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/components/public/contests/SocialLink.tsx",
    lineNumber: 64,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(fetcher.Form, { method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "contestant_id", value: rest.contestantId }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "stage_id", value: rest.stageId }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "intent", value: "kotmy_vote" }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(VoteLink_default, { className: "w-full", type, onClick: () => {
      const user = getUserStoreManager();
      if (!user) {
        setSignInPrompt(true);
      }
    }, url: rest.contestant?.social_media_url ?? "", count: numberSlang(rest.contestant?.vote.social_media ?? 0) }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/SocialLink.tsx",
    lineNumber: 79,
    columnNumber: 26
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Cta_default, { ...props, variant: "outline", className: cn("p-2 flex items-center border rounded-full", {
    "border-facebook text-facebook bg-facebookBG hover:bg-facebook/15": type === "facebook",
    "border-instagram text-instagram bg-instagramBG hover:bg-instagram/15": type === "instagram",
    "border-twitter text-twitter bg-twitterBG hover:bg-twitter/15": type === "twitter",
    "border-tally text-tally bg-tallyBG hover:bg-tally/15": type === "tally",
    "border-givaah text-givaah bg-givaahBG hover:bg-givaah/15": type === "givaah"
  }, className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: cn("w-6 h-6 flex items-center justify-center rounded-full p-1", {
      "bg-facebook": type === "facebook",
      "bg-instagram": type === "instagram",
      "bg-twitter": type === "twitter",
      "bg-tally": type === "tally",
      "bg-givaah": type === "givaah"
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: socialIcons[type] }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 117,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 110,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "grow text-xs font-bold text-center mr-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "capitalize", children: type }, void 0, false, {
        fileName: "app/components/public/contests/SocialLink.tsx",
        lineNumber: 119,
        columnNumber: 71
      }, this),
      " vote"
    ] }, void 0, true, {
      fileName: "app/components/public/contests/SocialLink.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/SocialLink.tsx",
    lineNumber: 103,
    columnNumber: 27
  }, this);
}, "PUO0DZTa2u7pJStgXc1TJW7Jih8=", false, function() {
  return [useFetcher, useUserManager, useNavigate, useLocation];
})), "PUO0DZTa2u7pJStgXc1TJW7Jih8=", false, function() {
  return [useFetcher, useUserManager, useNavigate, useLocation];
});
var _c6;
var _c22;
$RefreshReg$(_c6, "%default%$React.forwardRef");
$RefreshReg$(_c22, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  VoteLink_default,
  TallyVoteDialog,
  SocialLink_default
};
//# sourceMappingURL=/build/_shared/chunk-FEKMGEQF.js.map
