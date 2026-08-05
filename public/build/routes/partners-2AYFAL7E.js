import {
  $1bf158f521e1b1b4$export$94e939b1f85bdd73,
  $1bf158f521e1b1b4$export$985b9a77379b54a0,
  $1bf158f521e1b1b4$export$a766cd26d0d69044,
  $1bf158f521e1b1b4$export$d99097c13d4dac9f,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "/build/_shared/chunk-CWFLC2QX.js";
import {
  Toggletip
} from "/build/_shared/chunk-GKPHRQRO.js";
import {
  useUserManager
} from "/build/_shared/chunk-DOOVVW3X.js";
import "/build/_shared/chunk-3BSRYLMA.js";
import "/build/_shared/chunk-QZFP5L6J.js";
import "/build/_shared/chunk-GJTSJNT7.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import {
  admin_avatar_default
} from "/build/_shared/chunk-52GSXTRN.js";
import "/build/_shared/chunk-76VUSQVA.js";
import "/build/_shared/chunk-OUFOGEKV.js";
import {
  cn
} from "/build/_shared/chunk-65Q6VMM7.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-VCQR46EC.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  Link2 as Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate
} from "/build/_shared/chunk-NO4YTAWP.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/partners.tsx
var import_react9 = __toESM(require_react(), 1);

// app/components/partner/PartnerToolBar.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/partner/PartnerToolBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/partner/PartnerToolBar.tsx"
  );
  import.meta.hot.lastModified = "1777177070496.9458";
}
function PartnerToolbar() {
  _s();
  const [user, setUser] = (0, import_react2.useState)(null);
  const {
    getUserStoreManager
  } = useUserManager();
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    const currentUser = getUserStoreManager();
    if (!currentUser)
      navigate("/login");
    setUser(currentUser);
  }, []);
  const mainComponent = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { tabIndex: 0, className: "relative p-2 rounded-full border flex items-center gap-4 cursor-pointer bg-tertiary hover:bg-[#EEF0FF]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }, void 0, false, {
        fileName: "app/components/partner/PartnerToolBar.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/partner/PartnerToolBar.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-sm font-satoshi-bold", children: user?.fullName }, void 0, false, {
          fileName: "app/components/partner/PartnerToolBar.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-xs font-satoshi-medium", children: user?.email }, void 0, false, {
          fileName: "app/components/partner/PartnerToolBar.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/partner/PartnerToolBar.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/partner/PartnerToolBar.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.arrowDownIcon }, void 0, false, {
      fileName: "app/components/partner/PartnerToolBar.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/partner/PartnerToolBar.tsx",
    lineNumber: 41,
    columnNumber: 25
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggletip, { mainComponent, childContainerClass: "top-[110%] right-0 bg-tertiary p-2 border  text-xs whitespace-nowrap", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/user/profile", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.profileIcon }, void 0, false, {
        fileName: "app/components/partner/PartnerToolBar.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      " Profile"
    ] }, void 0, true, {
      fileName: "app/components/partner/PartnerToolBar.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/logout", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.signoutIcon }, void 0, false, {
        fileName: "app/components/partner/PartnerToolBar.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      " Sign Out"
    ] }, void 0, true, {
      fileName: "app/components/partner/PartnerToolBar.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/partner/PartnerToolBar.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(PartnerToolbar, "ObOnkbmW+8fAFLHciJ7llJSysyg=", false, function() {
  return [useUserManager, useNavigate];
});
_c = PartnerToolbar;
var _c;
$RefreshReg$(_c, "PartnerToolbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/partner/PartnerPrimaryHeader.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/partner/PartnerPrimaryHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/partner/PartnerPrimaryHeader.tsx"
  );
  import.meta.hot.lastModified = "1785086376517.7827";
}
function PartnerPrimaryHeader({
  toggleNav
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "h-[85px] hidden sm:flex justify-between items-center gap-4 px-6 py-3 bg-white border-b border-brand-grey", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: toggleNav, title: "Toggle Menu", className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-brand-pink", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.adminHamburgerIcon, width: 40, height: 24 }, void 0, false, {
        fileName: "app/components/partner/PartnerPrimaryHeader.tsx",
        lineNumber: 32,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/partner/PartnerPrimaryHeader.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "text-brand-navy flex items-center gap-6 whitespace-nowrap font-satoshi-black", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.logoIcon, width: 37, height: 36 }, void 0, false, {
          fileName: "app/components/partner/PartnerPrimaryHeader.tsx",
          lineNumber: 35,
          columnNumber: 21
        }, this),
        "KOTMY-PARTNER"
      ] }, void 0, true, {
        fileName: "app/components/partner/PartnerPrimaryHeader.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/partner/PartnerPrimaryHeader.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white", placeholder: "Search..." }, void 0, false, {
      fileName: "app/components/partner/PartnerPrimaryHeader.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PartnerToolbar, {}, void 0, false, {
      fileName: "app/components/partner/PartnerPrimaryHeader.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/partner/PartnerPrimaryHeader.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c2 = PartnerPrimaryHeader;
var _c2;
$RefreshReg$(_c2, "PartnerPrimaryHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/partner/PartnerMobileHeader.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/partner/PartnerMobileHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/partner/PartnerMobileHeader.tsx"
  );
  import.meta.hot.lastModified = "1777177187912.9854";
}
function UserMobileHeader({
  toggleNav
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex sm:hidden items-center gap-4 p-4 border-b", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", className: "text-accent flex items-center gap-3 sm:gap-6 whitespace-nowrap font-satoshi-black", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.logoIcon, width: 37, height: 36 }, void 0, false, {
        fileName: "app/components/partner/PartnerMobileHeader.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      "KOTMY-PARTNER"
    ] }, void 0, true, {
      fileName: "app/components/partner/PartnerMobileHeader.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: toggleNav, title: "open Menu", className: "ml-auto flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.adminHamburgerIcon, width: 30, height: 24 }, void 0, false, {
      fileName: "app/components/partner/PartnerMobileHeader.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/partner/PartnerMobileHeader.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/partner/PartnerMobileHeader.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c3 = UserMobileHeader;
var _c3;
$RefreshReg$(_c3, "UserMobileHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/partner/PartnerMobileNavigation.tsx
var import_react6 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/partner/PartnerMobileNavigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/partner/PartnerMobileNavigation.tsx"
  );
  import.meta.hot.lastModified = "1785086048739.181";
}
var primaryNavs = [{
  label: "Manage Products",
  icon: icons.adminTournamentIcon,
  url: "/partners/home"
}, {
  label: "My Account",
  icon: icons.adminFinanceIcon,
  subitems: [{
    label: "Manage Products",
    icon: icons.adminTournamentIcon,
    url: "/partners/add"
  }, {
    label: "Manage Locations",
    icon: icons.adminTournamentIcon,
    url: "/partners/location"
  }, {
    label: "Manage Orders",
    icon: icons.adminTournamentIcon,
    url: "/partners/orders"
  }, {
    label: "Settlements",
    icon: icons.adminTournamentIcon,
    url: "/partners/settlements"
  }, {
    label: "Leaderboard",
    icon: icons.adminTournamentIcon,
    url: "/partners/orders/leaderboard"
  }]
}];
var secondaryNavs = [{
  label: "Profile",
  icon: icons.profileIcon,
  url: "/user/profile"
}, {
  label: "Sign Out",
  icon: icons.signoutIcon,
  url: "/logout"
}];
function PartnerMobileNavigation({
  show,
  onClose
}) {
  _s2();
  const mobileNav = (0, import_react6.useRef)(null);
  const [user, setUser] = (0, import_react6.useState)(null);
  const navigate = useNavigate();
  const {
    getUserStoreManager
  } = useUserManager();
  const location = useLocation();
  const path = `${location.pathname}${location.search}${location.hash}`;
  (0, import_react6.useEffect)(() => {
    const currentUser = getUserStoreManager();
    if (!currentUser)
      navigate(`/login?redirectTo=${encodeURIComponent(path)}`);
    setUser(currentUser);
    mobileNav.current?.style.setProperty("--left", `0%`);
  }, []);
  const {
    pathname
  } = useLocation();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  const mainComponent = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between items-center border rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.arrowDownIcon }, void 0, false, {
      fileName: "app/components/partner/PartnerMobileNavigation.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/partner/PartnerMobileNavigation.tsx",
    lineNumber: 95,
    columnNumber: 25
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { "data-show": show, ref: mobileNav, className: "mobileNav sm:hidden flex flex-col fixed w-full h-dvh top-0 z-10 data-[show=true]:animate-slide-in-left data-[show=false]:left-full data-[show=false]:animate-slide-out-left bg-secondary overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between items-center py-4 px-6 border-b", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-satoshi-bold", children: "NAVIGATION MENU" }, void 0, false, {
        fileName: "app/components/partner/PartnerMobileNavigation.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: onClose, title: "open Menu", className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.closeIcon }, void 0, false, {
        fileName: "app/components/partner/PartnerMobileNavigation.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/partner/PartnerMobileNavigation.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/partner/PartnerMobileNavigation.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col justify-between grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { "aria-label": "primary navigation", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-3 items-center bg-white px-6 py-2 border-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }, void 0, false, {
              fileName: "app/components/partner/PartnerMobileNavigation.tsx",
              lineNumber: 111,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/components/partner/PartnerMobileNavigation.tsx",
              lineNumber: 110,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "grid", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block text-sm font-satoshi-bold", children: user?.fullName }, void 0, false, {
                fileName: "app/components/partner/PartnerMobileNavigation.tsx",
                lineNumber: 114,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block text-xs font-satoshi-medium", children: user?.email }, void 0, false, {
                fileName: "app/components/partner/PartnerMobileNavigation.tsx",
                lineNumber: 115,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/partner/PartnerMobileNavigation.tsx",
              lineNumber: 113,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 109,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Accordion, { type: "single", collapsible: true, className: "w-full py-2 border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "grid gap-2 font-bold", children: primaryNavs.map((navItem) => !navItem.subitems ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavLink, { className: ({
            isActive
          }) => `flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] ${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"}`, to: navItem.url, onClick: onClose, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: navItem.icon }, void 0, false, {
              fileName: "app/components/partner/PartnerMobileNavigation.tsx",
              lineNumber: 123,
              columnNumber: 37
            }, this),
            navItem.label
          ] }, void 0, true, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 120,
            columnNumber: 101
          }, this) }, navItem.label, false, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 120,
            columnNumber: 77
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AccordionItem, { value: navItem.label, className: "group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AccordionTrigger, { className: cn("border-l-4 border-transparent px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
              "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(navItem.label)
            }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "flex gap-3 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: navItem.icon }, void 0, false, {
                fileName: "app/components/partner/PartnerMobileNavigation.tsx",
                lineNumber: 129,
                columnNumber: 45
              }, this),
              navItem.label
            ] }, void 0, true, {
              fileName: "app/components/partner/PartnerMobileNavigation.tsx",
              lineNumber: 128,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/partner/PartnerMobileNavigation.tsx",
              lineNumber: 125,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "list-disc list-inside p-3 font-normal", children: navItem.subitems.map((subitem) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavLink, { to: subitem.url, onClick: onClose, className: ({
              isActive
            }) => `${isActive ? "active" : ""}`, children: subitem.label }, void 0, false, {
              fileName: "app/components/partner/PartnerMobileNavigation.tsx",
              lineNumber: 136,
              columnNumber: 53
            }, this) }, subitem.label, false, {
              fileName: "app/components/partner/PartnerMobileNavigation.tsx",
              lineNumber: 135,
              columnNumber: 78
            }, this)) }, void 0, false, {
              fileName: "app/components/partner/PartnerMobileNavigation.tsx",
              lineNumber: 134,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/partner/PartnerMobileNavigation.tsx",
              lineNumber: 133,
              columnNumber: 37
            }, this)
          ] }, navItem.label, true, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 124,
            columnNumber: 51
          }, this)) }, void 0, false, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 119,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 118,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/partner/PartnerMobileNavigation.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "my-1", "aria-label": "secondary navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "grid font-bold", children: secondaryNavs.map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NavLink, { className: `flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] border-transparent`, to: navItem.url, onClick: onClose, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: navItem.icon }, void 0, false, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 151,
            columnNumber: 33
          }, this),
          navItem.label
        ] }, void 0, true, {
          fileName: "app/components/partner/PartnerMobileNavigation.tsx",
          lineNumber: 150,
          columnNumber: 79
        }, this) }, navItem.label, false, {
          fileName: "app/components/partner/PartnerMobileNavigation.tsx",
          lineNumber: 150,
          columnNumber: 55
        }, this)) }, void 0, false, {
          fileName: "app/components/partner/PartnerMobileNavigation.tsx",
          lineNumber: 149,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/partner/PartnerMobileNavigation.tsx",
          lineNumber: 148,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/partner/PartnerMobileNavigation.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("aside", { className: "border-t px-6 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "flex items-center gap-1 mb-4 font-satoshi-bold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.themeIcon }, void 0, false, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 158,
            columnNumber: 21
          }, this),
          "Theme"
        ] }, void 0, true, {
          fileName: "app/components/partner/PartnerMobileNavigation.tsx",
          lineNumber: 157,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Toggletip, { mainComponent, childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border text-sm whitespace-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }, void 0, false, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 162,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }, void 0, false, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 163,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" }, void 0, false, {
            fileName: "app/components/partner/PartnerMobileNavigation.tsx",
            lineNumber: 164,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/partner/PartnerMobileNavigation.tsx",
          lineNumber: 161,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/partner/PartnerMobileNavigation.tsx",
        lineNumber: 156,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/partner/PartnerMobileNavigation.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/partner/PartnerMobileNavigation.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s2(PartnerMobileNavigation, "ToiV66fgIzw1Z/jyRtcb/aMpwRU=", false, function() {
  return [useNavigate, useUserManager, useLocation, useLocation];
});
_c4 = PartnerMobileNavigation;
var _c4;
$RefreshReg$(_c4, "PartnerMobileNavigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/partner/PartnerNavigation.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/partner/PartnerNavigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/partner/PartnerNavigation.tsx"
  );
  import.meta.hot.lastModified = "1785086389419.7043";
}
var navs = [{
  label: "Manage Products",
  icon: icons.adminTournamentIcon,
  url: "/partners/home"
}];
var navsWSubs = [{
  label: "My Account",
  icon: icons.adminFinanceIcon,
  subitems: [{
    label: "Manage Products",
    icon: icons.adminTournamentIcon,
    url: "/partners/add"
  }, {
    label: "Manage Locations",
    icon: icons.adminTournamentIcon,
    url: "/partners/location"
  }, {
    label: "Manage Orders",
    icon: icons.adminTournamentIcon,
    url: "/partners/orders"
  }, {
    label: "Settlements",
    icon: icons.adminTournamentIcon,
    url: "/partners/settlements"
  }, {
    label: "Leaderboard",
    icon: icons.adminTournamentIcon,
    url: "/partners/orders/leaderboard"
  }]
}];
function PartnerNavigation({
  show
}) {
  _s3();
  const {
    pathname
  } = useLocation();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  const mainComponent = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between items-center border border-brand-grey rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-brand-pink", children: [
    "System default",
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Svg, { src: icons.arrowDownIcon }, void 0, false, {
      fileName: "app/components/partner/PartnerNavigation.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/partner/PartnerNavigation.tsx",
    lineNumber: 68,
    columnNumber: 25
  }, this);
  return show ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "bg-white border-r border-brand-grey hidden sm:flex flex-col justify-between min-w-[280px] h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { className: "py-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "inline-block mb-2 px-6 py-3 font-satoshi-bold", children: "Navigation Menu" }, void 0, false, {
        fileName: "app/components/partner/PartnerNavigation.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "grid gap-2 font-bold", children: navs.map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NavLink, { to: navItem.url, className: ({
        isActive
      }) => `${isActive ? "text-brand-pink bg-secondary border-brand-pink" : "border-transparent text-brand-charcoal"} flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-secondary`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Svg, { src: navItem.icon }, void 0, false, {
          fileName: "app/components/partner/PartnerNavigation.tsx",
          lineNumber: 79,
          columnNumber: 29
        }, this),
        navItem.label
      ] }, void 0, true, {
        fileName: "app/components/partner/PartnerNavigation.tsx",
        lineNumber: 76,
        columnNumber: 66
      }, this) }, navItem.label, false, {
        fileName: "app/components/partner/PartnerNavigation.tsx",
        lineNumber: 76,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/components/partner/PartnerNavigation.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($1bf158f521e1b1b4$export$a766cd26d0d69044, { type: "single", collapsible: true, className: "w-full mt-2", children: navsWSubs.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($1bf158f521e1b1b4$export$d99097c13d4dac9f, { value: item.label, className: "group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($1bf158f521e1b1b4$export$94e939b1f85bdd73, { className: cn("border-l-4 border-transparent group w-full flex gap-3 items-center justify-between px-6 py-3 font-semibold hover:bg-secondary", {
          "text-brand-pink bg-secondary border-brand-pink": isSublinkActive(item.label)
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "flex gap-3 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Svg, { src: item.icon }, void 0, false, {
              fileName: "app/components/partner/PartnerNavigation.tsx",
              lineNumber: 88,
              columnNumber: 37
            }, this),
            item.label
          ] }, void 0, true, {
            fileName: "app/components/partner/PartnerNavigation.tsx",
            lineNumber: 87,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Svg, { src: icons.arrowDownIcon, className: "group-[[data-state=open]]:rotate-180 transition-transform duration-200" }, void 0, false, {
            fileName: "app/components/partner/PartnerNavigation.tsx",
            lineNumber: 91,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/partner/PartnerNavigation.tsx",
          lineNumber: 84,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($1bf158f521e1b1b4$export$985b9a77379b54a0, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "list-disc list-inside p-3", children: item.subitems.map((subitem) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "py-2 px-6 hover:bg-secondary rounded-lg has-[.active]:font-semibold has-[.active]:bg-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NavLink, { to: subitem.url, className: ({
          isActive
        }) => `${isActive ? "active" : ""}`, children: subitem.label }, void 0, false, {
          fileName: "app/components/partner/PartnerNavigation.tsx",
          lineNumber: 96,
          columnNumber: 45
        }, this) }, subitem.label, false, {
          fileName: "app/components/partner/PartnerNavigation.tsx",
          lineNumber: 95,
          columnNumber: 67
        }, this)) }, void 0, false, {
          fileName: "app/components/partner/PartnerNavigation.tsx",
          lineNumber: 94,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/partner/PartnerNavigation.tsx",
          lineNumber: 93,
          columnNumber: 29
        }, this)
      ] }, item.label, true, {
        fileName: "app/components/partner/PartnerNavigation.tsx",
        lineNumber: 83,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/components/partner/PartnerNavigation.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/partner/PartnerNavigation.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("aside", { className: "border-t  px-6 py-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "flex items-center gap-1 mb-2 font-satoshi-bold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Svg, { src: icons.themeIcon }, void 0, false, {
          fileName: "app/components/partner/PartnerNavigation.tsx",
          lineNumber: 110,
          columnNumber: 21
        }, this),
        "Theme"
      ] }, void 0, true, {
        fileName: "app/components/partner/PartnerNavigation.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Toggletip, { mainComponent, childContainerClass: "bottom-[110%] left-0 bg-white p-2 border border-brand-grey text-xs whitespace-nowrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-secondary rounded-lg font-satoshi-medium", children: "System default" }, void 0, false, {
          fileName: "app/components/partner/PartnerNavigation.tsx",
          lineNumber: 114,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-secondary rounded-lg font-satoshi-medium", children: "Light" }, void 0, false, {
          fileName: "app/components/partner/PartnerNavigation.tsx",
          lineNumber: 115,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-secondary rounded-lg font-satoshi-medium", children: "Dark" }, void 0, false, {
          fileName: "app/components/partner/PartnerNavigation.tsx",
          lineNumber: 116,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/partner/PartnerNavigation.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/partner/PartnerNavigation.tsx",
      lineNumber: 108,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/partner/PartnerNavigation.tsx",
    lineNumber: 72,
    columnNumber: 17
  }, this) : null;
}
_s3(PartnerNavigation, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function() {
  return [useLocation];
});
_c5 = PartnerNavigation;
var _c5;
$RefreshReg$(_c5, "PartnerNavigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/partners.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partners.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/partners.tsx"
  );
  import.meta.hot.lastModified = "1777177250393.1963";
}
var meta = () => {
  return [{
    title: "KOTMY | Admin"
  }, {
    name: "description",
    content: "KOTMY Admin application"
  }];
};
function Layout({
  children
}) {
  _s4();
  const [showNav, setShowNav] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    setShowNav(window.innerWidth >= 640);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-tertiary text-admin-pry", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PartnerPrimaryHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }, void 0, false, {
      fileName: "app/routes/partners.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(UserMobileHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }, void 0, false, {
      fileName: "app/routes/partners.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PartnerMobileNavigation, { onClose: () => {
      setShowNav(false);
    }, show: showNav }, void 0, false, {
      fileName: "app/routes/partners.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "sm:flex sm:h-[calc(100vh-85px)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PartnerNavigation, { show: showNav }, void 0, false, {
        fileName: "app/routes/partners.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex-grow overflow-y-auto", children }, void 0, false, {
        fileName: "app/routes/partners.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/partners.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s4(Layout, "d6mkrMkELrbzjTknqXCbobR4vWU=");
_c6 = Layout;
function PartnerLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/partners.tsx",
    lineNumber: 71,
    columnNumber: 18
  }, this) }, void 0, false, {
    fileName: "app/routes/partners.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_c22 = PartnerLayout;
function ErrorBoundary() {
  _s22();
  const {
    pathname
  } = useLocation();
  let heading = "Something went wrong";
  let message = `Apologies, something went wrong on our end. Please try again.`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full max-sm:h-[calc(100dvh-73px)] p-5 m-auto lg:max-w-3xl grid place-content-center text-center gap-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-xl font-bold text-red-500", children: heading }, void 0, false, {
      fileName: "app/routes/partners.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: message }, void 0, false, {
      fileName: "app/routes/partners.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Cta_default, { element: "link", to: pathname, className: "px-4 py-1 rounded-md", children: "Reload page" }, void 0, false, {
      fileName: "app/routes/partners.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Cta_default, { element: "link", to: "/partner/overview", className: "px-4 py-1 rounded-md", children: "Back to Partner Home" }, void 0, false, {
      fileName: "app/routes/partners.tsx",
      lineNumber: 86,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/partners.tsx",
    lineNumber: 82,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/partners.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_s22(ErrorBoundary, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function() {
  return [useLocation];
});
_c32 = ErrorBoundary;
var _c6;
var _c22;
var _c32;
$RefreshReg$(_c6, "Layout");
$RefreshReg$(_c22, "PartnerLayout");
$RefreshReg$(_c32, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  PartnerLayout as default,
  meta
};
//# sourceMappingURL=/build/routes/partners-2AYFAL7E.js.map
