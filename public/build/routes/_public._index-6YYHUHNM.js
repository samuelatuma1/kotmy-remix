import {
  AutoplayCarousel,
  CarouselItem,
  ContestantSlider
} from "/build/_shared/chunk-LE3DZPGU.js";
import {
  Button
} from "/build/_shared/chunk-ZEGV464P.js";
import {
  birthday_present_default,
  hero_1_default,
  hero_2_default,
  hero_3_default,
  hero_4_default,
  hero_5_default,
  sponsor_logo_default,
  underline_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import {
  FormControl
} from "/build/_shared/chunk-OZYT4FIK.js";
import "/build/_shared/chunk-LOUTNZN4.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-W4S7NLOA.js";
import "/build/_shared/chunk-ZE6ILQUM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/public/landingpage/ContactForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/landingpage/ContactForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/landingpage/ContactForm.tsx"
  );
  import.meta.hot.lastModified = "1757765166865.1838";
}
function ContactForm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "wrapper flex flex-col gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Full Name", id: "fullName", name: "fullName", placeholder: "Enter your full name" }, void 0, false, {
        fileName: "app/components/public/landingpage/ContactForm.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Email Address", id: "email", name: "email", placeholder: "Enter your email address" }, void 0, false, {
        fileName: "app/components/public/landingpage/ContactForm.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/public/landingpage/ContactForm.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", labelText: "Subject", id: "subject", name: "subject", placeholder: "Enter subject" }, void 0, false, {
      fileName: "app/components/public/landingpage/ContactForm.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "textarea", labelText: "Message", id: "message", name: "message", placeholder: "Enter your message here..." }, void 0, false, {
      fileName: "app/components/public/landingpage/ContactForm.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { element: "button", className: "md:self-end", children: "Submit" }, void 0, false, {
      fileName: "app/components/public/landingpage/ContactForm.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/landingpage/ContactForm.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = ContactForm;
var _c;
$RefreshReg$(_c, "ContactForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/public/landingpage/WhyCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/landingpage/WhyCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/landingpage/WhyCard.tsx"
  );
  import.meta.hot.lastModified = "1757765166865.4705";
}
function WhyCard(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { className: `block p-8 text-white rounded-3xl ${props.backgroundColor}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-6 mb-8 rounded-3xl bg-[#FFFFFF29] w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Svg, { src: props.icon, width: 24, height: 24 }, void 0, false, {
      fileName: "app/components/public/landingpage/WhyCard.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/public/landingpage/WhyCard.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "mb-4 text-2xl font-black", children: props.title }, void 0, false, {
      fileName: "app/components/public/landingpage/WhyCard.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-bold", children: props.subtext }, void 0, false, {
      fileName: "app/components/public/landingpage/WhyCard.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/public/landingpage/WhyCard.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = WhyCard;
var _c2;
$RefreshReg$(_c2, "WhyCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/lib/data/landingPage.data.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/data/landingPage.data.ts"
  );
  import.meta.hot.lastModified = "1757765166870.529";
}
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
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/public/landingpage/SponsorsSlider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/public/landingpage/SponsorsSlider.tsx"
  );
  import.meta.hot.lastModified = "1757765166865.3716";
}
function SponsorsSlider() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AutoplayCarousel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CarouselItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: sponsor_logo_default, alt: "Zendesk" }, void 0, false, {
    fileName: "app/components/public/landingpage/SponsorsSlider.tsx",
    lineNumber: 26,
    columnNumber: 27
  }, this) }, void 0, false, {
    fileName: "app/components/public/landingpage/SponsorsSlider.tsx",
    lineNumber: 26,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/public/landingpage/SponsorsSlider.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c3 = SponsorsSlider;
var _c3;
$RefreshReg$(_c3, "SponsorsSlider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_public._index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public._index.tsx"
  );
  import.meta.hot.lastModified = "1757765166873.9004";
}
function LandingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "snap-y", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "wrapper flex flex-col md:flex-row gap-16 xl:gap-24 md:items-center py-8 md:py-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-6 sm:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "font-black text-4xl sm:text-5xl xl:text-[64px] leading-tight sm:leading-snug whitespace-nowrap", children: [
          "Capturing Moments",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 36,
            columnNumber: 25
          }, this),
          "Creating ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-accent", children: "Memories." }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 37,
            columnNumber: 34
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 34,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xl", children: "Join our monthly/yearly photo contests open to kids, both male and female aged 0-14 years and discover a world of imagination and inspiration." }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-4 flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { element: "button", className: "w-full sm:w-auto", children: "Join Now" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 41,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { element: "a", href: "/contests", className: "w-full sm:w-auto", variant: "outline", children: "Explore Contests" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 42,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-3 gap-8 xl:gap-9 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-8 xl:gap-9", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "aspect-3/7 object-cover rounded-full outline-dashed outline-offset-4 w-full", src: hero_1_default, alt: "kid smiling" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 47,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "aspect-3/4 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_2_default, alt: "kid smiling" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 48,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 46,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-8 xl:gap-9 justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "aspect-square rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_3_default, alt: "kid smiling" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 51,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "aspect-3/7 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_4_default, alt: "kid smiling" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 52,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "aspect-3/7 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_5_default, alt: "kid smiling" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 55,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "wrapper py-8 md:py-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "font-bold text-xl mb-4", children: "Who supports us" }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SponsorsSlider, {}, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "py-8 md:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:wrapper bg-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between items-center gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-black text-xl", children: "Our Vision" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 69,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "object-cover object-center", src: underline_default, alt: "underline", width: 100 }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 70,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 68,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl sm:text-3xl font-black mb-6 leading-snug", children: [
          "Crafting ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-accent", children: "Unforgettable" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 73,
            columnNumber: 38
          }, this),
          " Moments for Every Child's Special Day."
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 72,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-medium", children: "To create uniquely memorable and exciting kid's birthdays, we strive to be entertaining, transparent, innovative, creative, exciting, efficient, and reliable in every aspect of our service." }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 75,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "object-cover object-center w-full", src: birthday_present_default, alt: "wrapped gift" }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 78,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 66,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "py-8 md:py-16 wrapper flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-6 sm:mb-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "font-satoshi-black text-2xl", children: "Why KOTMY?" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 98,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "object-fill w-[159px] h-5", src: underline_default, alt: "underline" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 99,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid gap-6 lg:gap-12 sm:grid-cols-2 max-w-5xl", children: whyUsData.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(WhyCard, { backgroundColor: item.bg, icon: item.icon, title: item.title, subtext: item.subtext }, item.title, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 102,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 101,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "py-8 md:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ContestantSlider, { contestants: [{
      id: "sdjc",
      image: hero_1_default
    }, {
      id: "adcn",
      image: hero_2_default
    }, {
      id: "kjsd",
      image: hero_3_default
    }] }, void 0, false, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 107,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "pt-4 sm:py-8 md:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:wrapper bg-[#817EFB] bg-pattern bg-cover bg-left text-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between items-center gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl sm:text-[40px] font-satoshi-black mb-6 leading-snug", children: "Refer A Friend And Earn Rewards" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 122,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-satoshi-medium mb-8", children: "Lorem ipsum dolor sit amet consectetur. Velit egestas auctor in amet dis sed sit egestas. Viverra morbi eget consectetur accumsan integer. Mi et etiam amet est egestas tellus quis." }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 125,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "inline-block bg-[#E7E7E7] text-primary py-4 px-8 text-lg rounded-md font-black whitespace-nowrap", children: "COMING SOON" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 131,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 121,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "wrapper bg-[#E7E7E7] rounded-3xl w-full aspect-square" }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 133,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 120,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { id: "contact", className: "sm:py-8 md:py-16 sm:-scroll-m-4 md:-scroll-m-8 snap-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:wrapper bg-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "wrapper flex flex-col gap-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl sm:text-[40px] font-satoshi-black leading-tight", children: "Do you want to know more about the way we work?" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 141,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col lg:flex-row gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block font-satoshi-black mb-3", children: "Phone Us" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 146,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-satoshi-medium whitespace-nowrap", children: "+234 703 515 9093" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 147,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 145,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block font-satoshi-black mb-3", children: "Email Us" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 150,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-satoshi-medium", children: "kidmonthyear@gmail.com" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 151,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 149,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 144,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block font-satoshi-black mb-3", children: "Follow Us" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 155,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "flex gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.twitterXIcon, width: "24px", height: "24px" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 157,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.instagramIcon, width: "24px", height: "24px" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 158,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.facebookIcon, width: "24px", height: "24px" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 159,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Svg, { src: icons.youtubeIcon, width: "24px", height: "24px" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 160,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 156,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 154,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 140,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ContactForm, {}, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 164,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 139,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 138,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c4 = LandingPage;
var _c4;
$RefreshReg$(_c4, "LandingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LandingPage as default
};
//# sourceMappingURL=/build/routes/_public._index-6YYHUHNM.js.map
