import {
  $1bf158f521e1b1b4$export$94e939b1f85bdd73,
  $1bf158f521e1b1b4$export$985b9a77379b54a0,
  $1bf158f521e1b1b4$export$a766cd26d0d69044,
  $1bf158f521e1b1b4$export$d99097c13d4dac9f,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "/build/_shared/chunk-U2QQD6HE.js";
import {
  Toggletip
} from "/build/_shared/chunk-GKPHRQRO.js";
import {
  useUserManager
} from "/build/_shared/chunk-IA4REYVC.js";
import "/build/_shared/chunk-3BSRYLMA.js";
import "/build/_shared/chunk-QZFP5L6J.js";
import "/build/_shared/chunk-GJTSJNT7.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import {
  admin_avatar_default
} from "/build/_shared/chunk-7JPCB6PC.js";
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
} from "/build/_shared/chunk-6UGLJ4QU.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  Link2 as Link,
  NavLink,
  Outlet,
  useLocation
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

// app/routes/admin.tsx
var import_react9 = __toESM(require_react(), 1);

// app/components/admin/AdminMobileNavigation.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/AdminMobileNavigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/AdminMobileNavigation.tsx"
  );
  import.meta.hot.lastModified = "1783925622319.3015";
}
var primaryNavs = [{
  label: "Home",
  icon: icons.adminHomeIcon,
  url: "/admin/overview",
  acceptedRoles: []
}, {
  label: "Admin Accounts",
  icon: icons.adminUsersIcon,
  url: "/admin/accounts",
  acceptedRoles: ["manage user" /* manage user */]
}, {
  label: "User Accounts",
  icon: icons.adminUsersIcon,
  url: "/admin/accounts/allusers",
  acceptedRoles: ["manage user" /* manage user */]
}, {
  label: "Tournaments",
  icon: icons.adminTournamentIcon,
  url: "/admin/tournaments",
  acceptedRoles: []
}, {
  label: "Contests",
  icon: icons.adminContestIcon,
  url: "/admin/contests",
  acceptedRoles: []
}, {
  label: "Transactions",
  icon: icons.adminFinanceIcon,
  acceptedRoles: [],
  subitems: [{
    label: "Tally Votes",
    url: "transactions/tally-votes",
    acceptedRoles: []
  }, {
    label: "Contest Registrations",
    url: "transactions/contest-registrations",
    acceptedRoles: []
  }, {
    label: "Income History",
    url: "transactions/income-history",
    acceptedRoles: []
  }, {
    label: "Affiliate Leaderboard",
    url: "transactions/affiliate-board",
    acceptedRoles: []
  }]
}, {
  label: "Partners",
  icon: icons.adminFinanceIcon,
  acceptedRoles: [],
  subitems: [{
    label: "Show Partners",
    url: "partners",
    acceptedRoles: []
  }, {
    label: "Partners Settlements",
    url: "partners/settlements",
    acceptedRoles: []
  }, {
    label: "Partners Orders",
    url: "partners/orders",
    acceptedRoles: []
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
function AdminMobileNavigation({
  show,
  onClose
}) {
  _s();
  const mobileNav = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    mobileNav.current?.style.setProperty("--left", `0%`);
  }, []);
  const {
    pathname
  } = useLocation();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  const {
    getUserStoreManager,
    hasAcceptedRole
  } = useUserManager();
  const userRoles = getUserStoreManager()?.roles.map((r) => r.toLowerCase()) ?? [];
  const [user, setUser] = (0, import_react2.useState)(null);
  (0, import_react2.useEffect)(() => {
    setUser(getUserStoreManager());
  }, [getUserStoreManager]);
  const mainComponent = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center border rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.arrowDownIcon }, void 0, false, {
      fileName: "app/components/admin/AdminMobileNavigation.tsx",
      lineNumber: 130,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminMobileNavigation.tsx",
    lineNumber: 128,
    columnNumber: 25
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-show": show, ref: mobileNav, className: "mobileNav sm:hidden flex flex-col fixed w-full h-dvh top-0 z-10 data-[show=true]:animate-slide-in-left data-[show=false]:left-full data-[show=false]:animate-slide-out-left bg-secondary overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center py-4 px-6 border-b", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-satoshi-bold", children: "NAVIGATION MENU" }, void 0, false, {
        fileName: "app/components/admin/AdminMobileNavigation.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onClose, title: "open Menu", className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.closeIcon }, void 0, false, {
        fileName: "app/components/admin/AdminMobileNavigation.tsx",
        lineNumber: 136,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/admin/AdminMobileNavigation.tsx",
        lineNumber: 135,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminMobileNavigation.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-between grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { "aria-label": "primary navigation", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 items-center bg-white px-6 py-2 border-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }, void 0, false, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 144,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 143,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "grid", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-sm font-satoshi-bold", children: user?.fullName }, void 0, false, {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 147,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-xs font-satoshi-medium", children: user?.email }, void 0, false, {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 148,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 146,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 142,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion, { type: "single", collapsible: true, className: "w-full py-2 border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid gap-2 font-bold", children: primaryNavs.map((navItem) => !navItem.subitems ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: ({
            isActive
          }) => `flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] ${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"}${!hasAcceptedRole(user, navItem.acceptedRoles ?? []) ? " hidden " : ""}`, to: navItem.url, onClick: onClose, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: navItem.icon }, void 0, false, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 156,
              columnNumber: 37
            }, this),
            navItem.label
          ] }, void 0, true, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 153,
            columnNumber: 101
          }, this) }, navItem.label, false, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 153,
            columnNumber: 77
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, { value: navItem.label, className: "group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, { className: cn("border-l-4 border-transparent px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
              "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(navItem.label)
            }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex gap-3 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: navItem.icon }, void 0, false, {
                fileName: "app/components/admin/AdminMobileNavigation.tsx",
                lineNumber: 162,
                columnNumber: 45
              }, this),
              navItem.label
            ] }, void 0, true, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 161,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 158,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc list-inside p-3 font-normal", children: navItem.subitems.map((subitem) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: `py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]${!hasAcceptedRole(user, subitem.acceptedRoles ?? []) ? " hidden " : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: subitem.url, onClick: onClose, className: ({
              isActive
            }) => `${isActive ? "active" : ""}`, children: subitem.label }, void 0, false, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 169,
              columnNumber: 53
            }, this) }, subitem.label, false, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 168,
              columnNumber: 78
            }, this)) }, void 0, false, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 167,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/admin/AdminMobileNavigation.tsx",
              lineNumber: 166,
              columnNumber: 37
            }, this)
          ] }, navItem.label, true, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 157,
            columnNumber: 51
          }, this)) }, void 0, false, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 152,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 151,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminMobileNavigation.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "my-1", "aria-label": "secondary navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid font-bold", children: secondaryNavs.map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: `flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] border-transparent`, to: navItem.url, onClick: onClose, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: navItem.icon }, void 0, false, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 184,
            columnNumber: 33
          }, this),
          navItem.label
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminMobileNavigation.tsx",
          lineNumber: 183,
          columnNumber: 79
        }, this) }, navItem.label, false, {
          fileName: "app/components/admin/AdminMobileNavigation.tsx",
          lineNumber: 183,
          columnNumber: 55
        }, this)) }, void 0, false, {
          fileName: "app/components/admin/AdminMobileNavigation.tsx",
          lineNumber: 182,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminMobileNavigation.tsx",
          lineNumber: 181,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminMobileNavigation.tsx",
        lineNumber: 140,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "border-t px-6 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-1 mb-4 font-satoshi-bold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.themeIcon }, void 0, false, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 191,
            columnNumber: 21
          }, this),
          "Theme"
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminMobileNavigation.tsx",
          lineNumber: 190,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggletip, { mainComponent, childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border text-sm whitespace-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }, void 0, false, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 195,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }, void 0, false, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 196,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" }, void 0, false, {
            fileName: "app/components/admin/AdminMobileNavigation.tsx",
            lineNumber: 197,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminMobileNavigation.tsx",
          lineNumber: 194,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminMobileNavigation.tsx",
        lineNumber: 189,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminMobileNavigation.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminMobileNavigation.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s(AdminMobileNavigation, "nM4Lup4FGRzczNs4v9nxGiUpcio=", false, function() {
  return [useLocation, useUserManager];
});
_c = AdminMobileNavigation;
var _c;
$RefreshReg$(_c, "AdminMobileNavigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/MobileHeader.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/MobileHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/MobileHeader.tsx"
  );
  import.meta.hot.lastModified = "1757765166857.3313";
}
function MobileHeader({
  toggleNav
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex sm:hidden items-center gap-4 p-4 border-b", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "text-accent flex items-center gap-3 sm:gap-6 whitespace-nowrap font-satoshi-black", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.logoIcon, width: 37, height: 36 }, void 0, false, {
        fileName: "app/components/admin/MobileHeader.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      "KOTMY-ADMIN"
    ] }, void 0, true, {
      fileName: "app/components/admin/MobileHeader.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: toggleNav, title: "open Menu", className: "ml-auto flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: icons.adminHamburgerIcon, width: 30, height: 24 }, void 0, false, {
      fileName: "app/components/admin/MobileHeader.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/MobileHeader.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/MobileHeader.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c2 = MobileHeader;
var _c2;
$RefreshReg$(_c2, "MobileHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/AdminNav.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/AdminNav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/AdminNav.tsx"
  );
  import.meta.hot.lastModified = "1783925626859.565";
}
var navs = [{
  label: "Home",
  icon: icons.adminHomeIcon,
  url: "/admin/overview",
  acceptedRoles: []
}, {
  label: "Admin Accounts",
  icon: icons.adminUsersIcon,
  url: "/admin/accounts",
  acceptedRoles: ["manage user" /* manage user */]
}, {
  label: "User Accounts",
  icon: icons.adminUsersIcon,
  url: "/admin/accounts/allusers",
  acceptedRoles: ["manage user" /* manage user */]
}, {
  label: "Tournaments",
  icon: icons.adminTournamentIcon,
  url: "/admin/tournaments",
  acceptedRoles: []
}, {
  label: "Contests",
  icon: icons.adminContestIcon,
  url: "/admin/contests",
  acceptedRoles: []
}];
var navsWSubs = [{
  label: "Transactions",
  icon: icons.adminFinanceIcon,
  subitems: [{
    label: "Tally Votes",
    url: "transactions/tally-votes",
    acceptedRoles: []
  }, {
    label: "Contest Registrations",
    url: "transactions/contest-registrations",
    acceptedRoles: []
  }, {
    label: "Income History",
    url: "transactions/income-history",
    acceptedRoles: []
  }, {
    label: "Affiliate Leaderboard",
    url: "transactions/affiliate-board",
    acceptedRoles: []
  }]
}, {
  label: "Partners",
  icon: icons.adminFinanceIcon,
  acceptedRoles: [],
  subitems: [{
    label: "Show Partners",
    url: "partners",
    acceptedRoles: []
  }, {
    label: "Partners Settlements",
    url: "partners/settlements",
    acceptedRoles: []
  }, {
    label: "Partners Orders",
    url: "partners/orders",
    acceptedRoles: []
  }]
}];
function AdminNavigation({
  show
}) {
  _s2();
  const {
    getUserStoreManager,
    hasAcceptedRole
  } = useUserManager();
  const userRoles = getUserStoreManager()?.roles.map((r) => r.toLowerCase()) ?? [];
  const [user, setUser] = (0, import_react5.useState)(null);
  const userRolesSet = new Set(userRoles);
  (0, import_react5.useEffect)(() => {
    setUser(getUserStoreManager());
  }, [getUserStoreManager]);
  const {
    pathname
  } = useLocation();
  function isSublinkActive(url) {
    return new RegExp(url, "i").test(pathname);
  }
  const mainComponent = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center border  rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-primary", children: [
    "System default",
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.arrowDownIcon }, void 0, false, {
      fileName: "app/components/admin/AdminNav.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminNav.tsx",
    lineNumber: 114,
    columnNumber: 25
  }, this);
  return show ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "bg-secondary border-r hidden sm:flex flex-col justify-between min-w-[280px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "py-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "inline-block mb-2 px-6 py-3 font-satoshi-bold", children: "Navigation Menu" }, void 0, false, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 120,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "grid gap-2 font-bold", children: navs.map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: navItem.url, className: ({
        isActive
      }) => `${isActive ? "text-accent bg-[#EEF0FF] border-accent" : "border-transparent"} flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-[#EEF0FF] ${!hasAcceptedRole(user, navItem.acceptedRoles ?? []) ? " hidden " : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: navItem.icon }, void 0, false, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 125,
          columnNumber: 29
        }, this),
        navItem.label
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 122,
        columnNumber: 66
      }, this) }, navItem.label, false, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 122,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 121,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($1bf158f521e1b1b4$export$a766cd26d0d69044, { type: "single", collapsible: true, className: "w-full mt-2", children: navsWSubs.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($1bf158f521e1b1b4$export$d99097c13d4dac9f, { value: item.label, className: "group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($1bf158f521e1b1b4$export$94e939b1f85bdd73, { className: cn("border-l-4 border-transparent group w-full flex gap-3 items-center justify-between px-6 py-3 font-semibold hover:bg-[#EEF0FF]", {
          "text-accent bg-[#EEF0FF] border-accent": isSublinkActive(item.label)
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex gap-3 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: item.icon }, void 0, false, {
              fileName: "app/components/admin/AdminNav.tsx",
              lineNumber: 134,
              columnNumber: 37
            }, this),
            item.label
          ] }, void 0, true, {
            fileName: "app/components/admin/AdminNav.tsx",
            lineNumber: 133,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.arrowDownIcon, className: "group-[[data-state=open]]:rotate-180 transition-transform duration-200" }, void 0, false, {
            fileName: "app/components/admin/AdminNav.tsx",
            lineNumber: 137,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 130,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($1bf158f521e1b1b4$export$985b9a77379b54a0, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "list-disc list-inside p-3", children: item.subitems.map((subitem) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "py-2 px-6 hover:bg-[#EEF0FF] rounded-lg has-[.active]:font-semibold has-[.active]:bg-[#EEF0FF]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: subitem.url, className: ({
          isActive
        }) => `${isActive ? "active" : ""}${!hasAcceptedRole(user, subitem.acceptedRoles ?? []) ? " hidden " : ""}`, children: subitem.label }, void 0, false, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 142,
          columnNumber: 45
        }, this) }, subitem.label, false, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 141,
          columnNumber: 67
        }, this)) }, void 0, false, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 140,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 139,
          columnNumber: 29
        }, this)
      ] }, item.label, true, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 129,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 128,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminNav.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("aside", { className: "border-t  px-6 py-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex items-center gap-1 mb-2 font-satoshi-bold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.themeIcon }, void 0, false, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 156,
          columnNumber: 21
        }, this),
        "Theme"
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 155,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Toggletip, { mainComponent, childContainerClass: "bottom-[110%] left-0 bg-tertiary p-2 border  text-xs whitespace-nowrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "System default" }, void 0, false, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 160,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Light" }, void 0, false, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 161,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Dark" }, void 0, false, {
          fileName: "app/components/admin/AdminNav.tsx",
          lineNumber: 162,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNav.tsx",
        lineNumber: 159,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminNav.tsx",
      lineNumber: 154,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminNav.tsx",
    lineNumber: 118,
    columnNumber: 17
  }, this) : null;
}
_s2(AdminNavigation, "yMdWC2nH2uFeTWKx1xwd4IjPHCA=", false, function() {
  return [useUserManager, useLocation];
});
_c3 = AdminNavigation;
var _c3;
$RefreshReg$(_c3, "AdminNavigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/AdminToolbar.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/AdminToolbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/AdminToolbar.tsx"
  );
  import.meta.hot.lastModified = "1765080390677.352";
}
function AdminToolbar() {
  const mainComponent = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { tabIndex: 0, className: "relative p-2 rounded-full border flex items-center gap-4 cursor-pointer bg-tertiary hover:bg-[#EEF0FF]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "p-2 border border-disabled rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: admin_avatar_default, alt: "cartoon head", width: 24, height: 24 }, void 0, false, {
        fileName: "app/components/admin/AdminToolbar.tsx",
        lineNumber: 30,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/admin/AdminToolbar.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "grid", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block text-sm font-satoshi-bold", children: "Admin" }, void 0, false, {
          fileName: "app/components/admin/AdminToolbar.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block text-xs font-satoshi-medium", children: "admin@kotmy.com" }, void 0, false, {
          fileName: "app/components/admin/AdminToolbar.tsx",
          lineNumber: 34,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminToolbar.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminToolbar.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.arrowDownIcon }, void 0, false, {
      fileName: "app/components/admin/AdminToolbar.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminToolbar.tsx",
    lineNumber: 27,
    columnNumber: 25
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Toggletip, { mainComponent, childContainerClass: "top-[110%] right-0 bg-tertiary p-2 border  text-xs whitespace-nowrap", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/user/profile", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.profileIcon }, void 0, false, {
        fileName: "app/components/admin/AdminToolbar.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      " Profile"
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminToolbar.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/logout", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.signoutIcon }, void 0, false, {
        fileName: "app/components/admin/AdminToolbar.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      " Sign Out"
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminToolbar.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminToolbar.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c4 = AdminToolbar;
var _c4;
$RefreshReg$(_c4, "AdminToolbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/PrimaryHeader.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/PrimaryHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/PrimaryHeader.tsx"
  );
  import.meta.hot.lastModified = "1757765166857.535";
}
function PrimaryHeader({
  toggleNav
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "h-[85px] hidden sm:flex justify-between items-center gap-4 px-6 py-3 bg-secondary border-b", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { onClick: toggleNav, title: "Toggle Menu", className: "flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Svg, { src: icons.adminHamburgerIcon, width: 40, height: 24 }, void 0, false, {
        fileName: "app/components/admin/PrimaryHeader.tsx",
        lineNumber: 32,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/admin/PrimaryHeader.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/", className: "text-accent flex items-center gap-6 whitespace-nowrap font-satoshi-black", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Svg, { src: icons.logoIcon, width: 37, height: 36 }, void 0, false, {
          fileName: "app/components/admin/PrimaryHeader.tsx",
          lineNumber: 35,
          columnNumber: 21
        }, this),
        "KOTMY-ADMIN"
      ] }, void 0, true, {
        fileName: "app/components/admin/PrimaryHeader.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/PrimaryHeader.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormControl, { as: "input", type: "search", className: "min-w-[280px] bg-white", placeholder: "Search..." }, void 0, false, {
      fileName: "app/components/admin/PrimaryHeader.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AdminToolbar, {}, void 0, false, {
      fileName: "app/components/admin/PrimaryHeader.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/PrimaryHeader.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c5 = PrimaryHeader;
var _c5;
$RefreshReg$(_c5, "PrimaryHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.tsx"' + id);
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
    "app/routes/admin.tsx"
  );
  import.meta.hot.lastModified = "1757765166877.7861";
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
  _s3();
  const [showNav, setShowNav] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    setShowNav(window.innerWidth >= 640);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-tertiary text-admin-pry", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PrimaryHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MobileHeader, { toggleNav: () => {
      setShowNav((prev) => !prev);
    } }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AdminMobileNavigation, { onClose: () => {
      setShowNav(false);
    }, show: showNav }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "sm:flex sm:h-[calc(100vh-85px)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AdminNavigation, { show: showNav }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this),
      children
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s3(Layout, "d6mkrMkELrbzjTknqXCbobR4vWU=");
_c6 = Layout;
function AdminLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 65,
    columnNumber: 18
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_c22 = AdminLayout;
function ErrorBoundary() {
  _s22();
  const {
    pathname
  } = useLocation();
  let heading = "Something went wrong";
  let message = `Apologies, something went wrong on our end. Please try again.`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full max-sm:h-[calc(100dvh-73px)] p-5 m-auto lg:max-w-3xl grid place-content-center text-center gap-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-xl font-bold text-red-500", children: heading }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: message }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Cta_default, { element: "link", to: pathname, className: "px-4 py-1 rounded-md", children: "Reload page" }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Cta_default, { element: "link", to: "/admin/overview", className: "px-4 py-1 rounded-md", children: "Back to Admin Home" }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 75,
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
$RefreshReg$(_c22, "AdminLayout");
$RefreshReg$(_c32, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  AdminLayout as default,
  meta
};
//# sourceMappingURL=/build/routes/admin-MXRXZQGE.js.map
