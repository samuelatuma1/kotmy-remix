import {
  socialIcons
} from "/build/_shared/chunk-2ZTNKWGC.js";
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
} from "/build/_shared/chunk-A53UP4AC.js";
import {
  useUserManager
} from "/build/_shared/chunk-IA4REYVC.js";
import {
  Button
} from "/build/_shared/chunk-SWGHYM4G.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-NX2LVYUO.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import {
  cn
} from "/build/_shared/chunk-65Q6VMM7.js";
import {
  toast
} from "/build/_shared/chunk-LRNROA4B.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-VCQR46EC.js";
import {
  Form,
  Link2 as Link,
  useFetcher,
  useLocation,
  useMatches,
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
  import.meta.hot.lastModified = "1784816477228.0247";
}
function hasWalletVoteContext(data) {
  return Boolean(data) && typeof data === "object" && data !== null && "walletVoteContext" in data;
}
function hasBaseUrl(data) {
  return Boolean(data) && typeof data === "object" && data !== null && "baseUrl" in data;
}
function formatAmount(value) {
  return new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(value);
}
function TallyVoteDialog({
  contestant,
  disabled,
  children
}) {
  _s();
  const matches = useMatches();
  const formRef = (0, import_react3.useRef)(null);
  const walletFetcher = useFetcher();
  const {
    getUserStoreManager
  } = useUserManager();
  const navigate = useNavigate();
  const {
    pathname,
    search,
    hash
  } = useLocation();
  const [open, setOpen] = (0, import_react3.useState)(false);
  const [mode, setMode] = (0, import_react3.useState)("start");
  const [user, setUser] = (0, import_react3.useState)(null);
  const [voteQuantity, setVoteQuantity] = (0, import_react3.useState)("1");
  const [remark, setRemark] = (0, import_react3.useState)("");
  const walletVoteContext = matches.reduce((currentContext, match) => {
    if (currentContext) {
      return currentContext;
    }
    if (!hasWalletVoteContext(match.data)) {
      return null;
    }
    return match.data.walletVoteContext ?? null;
  }, null);
  const baseUrl = matches.reduce((currentBaseUrl, match) => {
    if (currentBaseUrl) {
      return currentBaseUrl;
    }
    if (!hasBaseUrl(match.data)) {
      return null;
    }
    return match.data.baseUrl ?? null;
  }, null);
  const redirectUrl = `${baseUrl ?? ""}${pathname}${search}`;
  const currentPageUrl = `${pathname}${search}${hash}`;
  const stageCurrency = walletVoteContext?.stageCurrency ?? null;
  const pricePerVote = walletVoteContext?.pricePerVote ?? 0;
  const parsedVotes = Number(voteQuantity);
  const validVoteQuantity = Number.isFinite(parsedVotes) ? Math.trunc(parsedVotes) : 0;
  const payableAmount = validVoteQuantity > 0 ? pricePerVote * validVoteQuantity : 0;
  const wallet = walletVoteContext?.wallet ?? null;
  const walletId = wallet?._id ?? "";
  const availableBalance = wallet?.withdrawable_balance ?? 0;
  const hasWallet = Boolean(wallet);
  const hasSufficientBalance = hasWallet && payableAmount <= availableBalance;
  const isWalletSubmitting = walletFetcher.state !== "idle";
  const isWalletSubmitDisabled = !user || !hasWallet || validVoteQuantity < 1 || payableAmount < 1 || !hasSufficientBalance || isWalletSubmitting;
  (0, import_react3.useEffect)(() => {
    setUser(getUserStoreManager());
  }, []);
  (0, import_react3.useEffect)(() => {
    if (!open) {
      setMode("start");
      setVoteQuantity("1");
      setRemark("");
    }
  }, [open]);
  (0, import_react3.useEffect)(() => {
    if (walletFetcher.data?.data) {
      setOpen(false);
      setMode("start");
      setVoteQuantity("1");
      setRemark("");
    }
  }, [walletFetcher.data]);
  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setMode("start");
    }
  };
  const renderStartMenu = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-5 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Contestant" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 127,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-xl font-black text-slate-950", children: [
        contestant.contestant_biodata.first_name,
        " ",
        contestant.contestant_biodata.last_name
      ] }, void 0, true, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 128,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 text-sm text-slate-600", children: "Choose how you would like to fund this vote." }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 131,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 126,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { element: "button", type: "button", onClick: () => setMode("wallet"), className: "rounded-2xl px-6 py-4 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5", children: "Vote from Wallet" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 137,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { element: "button", type: "button", variant: "outline", onClick: () => setMode("provider"), className: "rounded-2xl px-6 py-4 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5", children: "Vote from Provider" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 140,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 136,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/TallyVoteDialog.tsx",
    lineNumber: 125,
    columnNumber: 33
  }, this);
  const renderProviderFlow = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { className: "p-4 flex gap-3 text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.questionIcon }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 149,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 148,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block", children: "Vote for contestant" }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 152,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-normal text-base text-admin-pry", children: `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}` }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 153,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 151,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 147,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogDescription, { asChild: true, className: "border-y p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { ref: formRef, method: "post", className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", labelText: "Email Address", labelClassNames: "text-left", required: true }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 158,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "input", id: "phone", name: "phone", labelText: "Phone Number", labelClassNames: "text-left" }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 159,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "input", id: "vote_quantity", name: "vote_quantity", labelText: "Vote Quantity", type: "number", labelClassNames: "text-left", defaultValue: 1, min: 1, required: true }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 160,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "provider", className: "font-bold flex flex-col text-left", children: [
          "Payment Provider",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { name: "provider", required: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectTrigger, { className: "h-10 font-normal rounded-lg shadow-none hover:border-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectValue, { placeholder: "Select payment provider" }, void 0, false, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 164,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 163,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectContent, { children: providers.map(({
              label,
              value
            }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectItem, { value, className: "focus:bg-blue-700/25", children: label }, value, false, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 170,
              columnNumber: 23
            }, this)) }, void 0, false, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 166,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 162,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 161,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 174,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "redirect_url", value: redirectUrl }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 175,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "intent", value: "tally_vote" }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 176,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 157,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 156,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 146,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogClose, { type: "submit", name: "intent", value: "delete", className: "px-10 py-2 rounded-md font-bold min-w-[90px] outline outline-1", children: "Cancel" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 181,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", onClick: () => formRef.current?.submit(), className: "bg-accent px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 184,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 180,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/TallyVoteDialog.tsx",
    lineNumber: 145,
    columnNumber: 36
  }, this);
  const renderUnauthenticatedWalletView = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-5 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xl font-black text-slate-950", children: "Sign In Required" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 191,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-slate-600", children: "You need to be signed in to vote from your wallet." }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 192,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 190,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row sm:justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { element: "button", type: "button", variant: "outline", onClick: () => setMode("start"), className: "rounded-2xl px-6 py-3 text-sm font-semibold", children: "Cancel" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 198,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { element: "button", type: "button", onClick: () => navigate(`/login?redirectTo=${encodeURIComponent(currentPageUrl)}`), className: "rounded-2xl px-6 py-3 text-sm font-semibold", children: "Sign In" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 201,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 197,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/TallyVoteDialog.tsx",
    lineNumber: 189,
    columnNumber: 49
  }, this);
  const renderWalletFlow = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-h-[calc(100dvh-2rem)] overflow-y-auto space-y-5 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Contestant" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 208,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-xl font-black text-slate-950", children: [
        contestant.contestant_biodata.first_name,
        " ",
        contestant.contestant_biodata.last_name
      ] }, void 0, true, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 209,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 text-sm text-slate-600", children: "Pay from your wallet using the current stage currency." }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 212,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 207,
      columnNumber: 13
    }, this),
    !user ? renderUnauthenticatedWalletView() : !hasWallet ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-2xl border border-amber-200 bg-amber-50 p-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-black text-amber-950", children: "Wallet not available" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 218,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-amber-900", children: walletVoteContext?.error ?? `We could not find a wallet in ${stageCurrency ?? "the required currency"} for this vote.` }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 219,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { element: "button", type: "button", variant: "outline", onClick: () => setMode("start"), className: "rounded-2xl px-6 py-3 text-sm font-semibold", children: "Back" }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 223,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 222,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 217,
      columnNumber: 71
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Available Balance" }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 230,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-2xl font-black text-slate-950", children: [
            formatAmount(availableBalance),
            " ",
            wallet?.wallet_currency
          ] }, void 0, true, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 231,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 229,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Vote Currency" }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 236,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-2xl font-black text-slate-950", children: wallet?.wallet_currency }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 237,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 235,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 228,
        columnNumber: 21
      }, this),
      walletVoteContext?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900", children: walletVoteContext.error }, void 0, false, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 243,
        columnNumber: 49
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(walletFetcher.Form, { method: "post", className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "intent", value: "wallet_vote" }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 248,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 249,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "wallet_id", value: walletId }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 250,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "input", id: "number_of_votes", name: "number_of_votes", labelText: "Number of Votes", type: "number", min: 1, required: true, value: voteQuantity, onChange: (event) => setVoteQuantity(event.currentTarget.value), labelClassNames: "text-left" }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 253,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Total Payable" }, void 0, false, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 255,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-2xl font-black text-slate-950", children: [
              formatAmount(payableAmount),
              " ",
              wallet?.wallet_currency
            ] }, void 0, true, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 256,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 text-xs text-slate-500", children: [
              "Calculated as ",
              formatAmount(pricePerVote),
              " ",
              wallet?.wallet_currency,
              " per vote."
            ] }, void 0, true, {
              fileName: "app/components/public/contests/TallyVoteDialog.tsx",
              lineNumber: 259,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 254,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 252,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "textarea", id: "remark", name: "remark", labelText: "Remark", labelClassNames: "text-left", value: remark, onChange: (event) => setRemark(event.currentTarget.value), placeholder: "Tell us why you're voting" }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 265,
          columnNumber: 25
        }, this),
        !hasSufficientBalance ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700", children: "Your wallet balance is not enough for this vote total." }, void 0, false, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 267,
          columnNumber: 50
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { className: "pt-2 sm:justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { element: "button", type: "button", variant: "outline", onClick: () => setMode("start"), className: "rounded-2xl px-6 py-3 text-sm font-semibold", children: "Cancel" }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 272,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", disabled: isWalletSubmitDisabled, className: "inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60", children: isWalletSubmitting ? "Processing..." : "Vote from Wallet" }, void 0, false, {
            fileName: "app/components/public/contests/TallyVoteDialog.tsx",
            lineNumber: 275,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/TallyVoteDialog.tsx",
          lineNumber: 271,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/TallyVoteDialog.tsx",
        lineNumber: 247,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 227,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/TallyVoteDialog.tsx",
    lineNumber: 206,
    columnNumber: 34
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { modal: true, open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { asChild: true, disabled, title: "Vote for contestant", className: cn(`rounded-full outline-none`, {
      "bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed": disabled
    }), children: children ?? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VoteLink_default, { type: "tally", count: numberSlang(contestant.vote.tally), className: "w-full" }, void 0, false, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 286,
      columnNumber: 30
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 283,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { className: "bg-secondary p-0 gap-0", children: mode === "provider" ? renderProviderFlow() : mode === "wallet" ? renderWalletFlow() : renderStartMenu() }, void 0, false, {
      fileName: "app/components/public/contests/TallyVoteDialog.tsx",
      lineNumber: 288,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/TallyVoteDialog.tsx",
    lineNumber: 282,
    columnNumber: 10
  }, this);
}
_s(TallyVoteDialog, "KLcJ6xBdeCJz32LrxinX1hdUBpA=", false, function() {
  return [useMatches, useFetcher, useUserManager, useNavigate, useLocation];
});
_c5 = TallyVoteDialog;
var _c5;
$RefreshReg$(_c5, "TallyVoteDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/contests/GivaahVoteDialog.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/contests/GivaahVoteDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/contests/GivaahVoteDialog.tsx"
  );
  import.meta.hot.lastModified = "1784807170179.51";
}
function formatCreditValue(value) {
  return new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0
  }).format(value);
}
function buildRedirectPath(pathname, search, hash) {
  return `${pathname}${search}${hash}`;
}
function GivaahVoteDialog({
  contestant,
  children
}) {
  _s2();
  const creditsFetcher = useFetcher();
  const voteFetcher = useFetcher();
  const {
    getUserStoreManager
  } = useUserManager();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = (0, import_react5.useState)(false);
  const [user, setUser] = (0, import_react5.useState)(null);
  const [givaahCreditsToUse, setGivaahCreditsToUse] = (0, import_react5.useState)("1");
  const hasLoadedCreditsRef = (0, import_react5.useRef)(false);
  const path = (0, import_react5.useMemo)(() => buildRedirectPath(location.pathname, location.search, location.hash), [location.pathname, location.search, location.hash]);
  (0, import_react5.useEffect)(() => {
    setUser(getUserStoreManager());
  }, []);
  (0, import_react5.useEffect)(() => {
    if (!open) {
      hasLoadedCreditsRef.current = false;
      return;
    }
    setGivaahCreditsToUse("1");
    if (user && !hasLoadedCreditsRef.current) {
      hasLoadedCreditsRef.current = true;
      creditsFetcher.load("/givaah-credits");
    }
  }, [open, user, creditsFetcher]);
  (0, import_react5.useEffect)(() => {
    if (!voteFetcher.data) {
      return;
    }
    if ("errorCode" in voteFetcher.data && voteFetcher.data.errorCode === "LOGIN_REQUIRED") {
      toast({
        variant: "destructive",
        title: "Sign In Required",
        description: "Please sign in to vote with Givaah credits."
      });
      setOpen(false);
      return;
    }
    if ("error" in voteFetcher.data && voteFetcher.data.error) {
      toast({
        variant: "destructive",
        title: "Vote Failed",
        description: voteFetcher.data.error
      });
      return;
    }
    const usedCredits = "givaah_credits_to_use" in voteFetcher.data && typeof voteFetcher.data.givaah_credits_to_use === "number" ? voteFetcher.data.givaah_credits_to_use : Number(givaahCreditsToUse);
    const timer = window.setTimeout(() => {
      setOpen(false);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [voteFetcher.data, givaahCreditsToUse, contestant.contestant_biodata.first_name, contestant.contestant_biodata.last_name]);
  const availableCredits = creditsFetcher.data?.credits?.available_credit_value ?? 0;
  const parsedCredits = Number(givaahCreditsToUse);
  const isCreditsLoading = open && user ? creditsFetcher.state !== "idle" && !creditsFetcher.data : false;
  const isSubmitting = voteFetcher.state !== "idle";
  const hasSessionExpired = Boolean(user) && creditsFetcher.data?.authRequired;
  const showSignInPrompt = !user || hasSessionExpired;
  const submitDisabled = !user || hasSessionExpired || isSubmitting || creditsFetcher.state !== "idle" || !Number.isInteger(parsedCredits) || parsedCredits < 1 || parsedCredits > availableCredits;
  const contestantName = `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTrigger, { asChild: true, title: "Vote with Givaah credits", children: children ?? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(VoteLink_default, { type: "givaah", count: numberSlang(contestant.vote.givaah), className: "w-full" }, void 0, false, {
      fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
      lineNumber: 111,
      columnNumber: 22
    }, this) }, void 0, false, {
      fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogContent, { className: "max-w-2xl border-slate-200 bg-white p-0 shadow-[0_24px_70px_rgba(15,23,42,0.16)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogHeader, { className: "border-b border-slate-100 p-6 text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTitle, { className: "text-2xl font-black text-slate-950", children: "Vote with Givaah credits" }, void 0, false, {
          fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogDescription, { className: "mt-2 text-sm leading-6 text-slate-600", children: "Support your favourite contestant using your available Givaah credits." }, void 0, false, {
          fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-h-[calc(100dvh-2rem)] overflow-y-auto space-y-5 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Contestant" }, void 0, false, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-lg font-black text-slate-950", children: contestantName }, void 0, false, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-1 text-sm text-slate-600", children: [
            "Code: ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-semibold text-slate-900", children: contestant.code }, void 0, false, {
              fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
              lineNumber: 125,
              columnNumber: 62
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-white p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Get Givaah Credits" }, void 0, false, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 129,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-slate-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/marketplace", className: "font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950", children: "Visit market place to get Givaah credits to vote your favorite contestant" }, void 0, false, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 130,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        showSignInPrompt ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-black text-slate-950", children: "Sign In Required" }, void 0, false, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-slate-600", children: "You are not signed in. Please sign in to vote with Givaah credits, or close this modal and continue browsing." }, void 0, false, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { element: "button", type: "button", variant: "outline", onClick: () => setOpen(false), className: "rounded-2xl px-6 py-3 text-sm font-semibold", children: "Close" }, void 0, false, {
              fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
              lineNumber: 143,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { element: "button", type: "button", onClick: () => navigate(`/login?redirectTo=${encodeURIComponent(path)}`), className: "rounded-2xl px-6 py-3 text-sm font-semibold", children: "Sign In" }, void 0, false, {
              fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
              lineNumber: 146,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
          lineNumber: 137,
          columnNumber: 31
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Available Credits" }, void 0, false, {
                fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
                lineNumber: 153,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-2xl font-black text-slate-950", children: isCreditsLoading ? "Loading..." : formatCreditValue(availableCredits) }, void 0, false, {
                fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
                lineNumber: 154,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
              lineNumber: 152,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500", children: "Vote Count" }, void 0, false, {
                fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
                lineNumber: 159,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-2xl font-black text-slate-950", children: numberSlang(contestant.vote.givaah) }, void 0, false, {
                fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
                lineNumber: 160,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this),
          creditsFetcher.data?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700", children: creditsFetcher.data.error }, void 0, false, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 164,
            columnNumber: 45
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(voteFetcher.Form, { method: "post", className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "intent", value: "givaah_vote" }, void 0, false, {
              fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
              lineNumber: 169,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "contestant_id", value: contestant._id }, void 0, false, {
              fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
              lineNumber: 170,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "grid gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm font-semibold text-slate-700", children: "Givaah credits to use" }, void 0, false, {
                fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
                lineNumber: 173,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { name: "givaah_credits_to_use", type: "number", className: "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white", placeholder: "Enter credits to use" }, void 0, false, {
                fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
                lineNumber: 174,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-xs text-slate-500", children: [
                "Enter votes from 1 to ",
                formatCreditValue(availableCredits),
                "."
              ] }, void 0, true, {
                fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
                lineNumber: 175,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
              lineNumber: 172,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogFooter, { className: "pt-2 sm:justify-end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { element: "button", type: "button", variant: "outline", className: "rounded-2xl px-6 py-3 text-sm font-semibold", children: "Cancel" }, void 0, false, {
                fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
                lineNumber: 182,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
                lineNumber: 181,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", disabled: submitDisabled, className: "inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60", children: isSubmitting ? "Submitting..." : "Vote now" }, void 0, false, {
                fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
                lineNumber: 186,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
              lineNumber: 180,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
          lineNumber: 150,
          columnNumber: 22
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/contests/GivaahVoteDialog.tsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s2(GivaahVoteDialog, "xAL6lPz1pczmi4HXYH3O56ScOp8=", false, function() {
  return [useFetcher, useFetcher, useUserManager, useNavigate, useLocation];
});
_c6 = GivaahVoteDialog;
var _c6;
$RefreshReg$(_c6, "GivaahVoteDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  VoteLink_default,
  TallyVoteDialog,
  GivaahVoteDialog
};
//# sourceMappingURL=/build/_shared/chunk-XBJOPW4M.js.map
