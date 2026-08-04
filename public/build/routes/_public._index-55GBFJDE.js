import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "/build/_shared/chunk-CWFLC2QX.js";
import {
  ContestantSlider
} from "/build/_shared/chunk-ZBDUUSMF.js";
import "/build/_shared/chunk-3BSRYLMA.js";
import {
  Button
} from "/build/_shared/chunk-SWGHYM4G.js";
import "/build/_shared/chunk-QZFP5L6J.js";
import "/build/_shared/chunk-GJTSJNT7.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import {
  birthday_present_default,
  hero_1_default,
  hero_2_default,
  hero_3_default,
  hero_4_default,
  hero_5_default,
  underline_default
} from "/build/_shared/chunk-52GSXTRN.js";
import "/build/_shared/chunk-76VUSQVA.js";
import "/build/_shared/chunk-OUFOGEKV.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

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
  import.meta.hot.lastModified = "1785855325014.815";
}
var whyUsData = [
  {
    icon: icons.noteIcon,
    bg: "bg-[#12457A]",
    title: "Free Registration",
    subtext: "Register your child in minutes and gain access to exciting competitions, rewards and family experiences."
  },
  {
    icon: icons.galleryIcon,
    bg: "bg-[#EA5A47]",
    title: "Monthly Competitions",
    subtext: "Participate in exciting monthly competitions where children showcase their talents, creativity and confidence."
  },
  {
    icon: icons.cakeIcon,
    bg: "bg-[#CE8800]",
    title: "Talent Development",
    subtext: "Through the KidMonth Talent Academy, children learn, grow and develop skills that prepare them for future opportunities."
  },
  {
    icon: icons.trophyIcon,
    bg: "bg-[#09AD8A]",
    title: "Real Rewards",
    subtext: "Win cash prizes, gifts, recognition and exclusive opportunities while creating unforgettable family memories."
  }
];

// app/routes/_public._index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1785869033527.3972";
}
function LandingPage() {
  const trustBadges = ["Safe & Secure Platform", "Transparent Competition Process", "Verified Rewards", "Family-Focused Experience"];
  const faqItems = [{
    question: "Who can participate in KidMonth competitions?",
    answer: "Children and families looking to join KidMonth contests, talent experiences and related opportunities can participate through the platform."
  }, {
    question: "What age groups are eligible?",
    answer: "KidMonth is open to children aged 0-16 years."
  }, {
    question: "Is registration free?",
    answer: "Yes. Registration is free, making it easy for families to get started and explore opportunities on KidMonth."
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "snap-y", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "wrapper flex flex-col md:flex-row gap-16 xl:gap-24 md:items-center py-8 md:py-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-6 sm:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "font-black text-4xl sm:text-5xl xl:text-[64px] leading-tight sm:leading-snug", children: [
          "Discover. Celebrate. Reward.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 47,
            columnNumber: 25
          }, this),
          "Every Child Deserves Their ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-accent", children: "Moment." }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 48,
            columnNumber: 52
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xl", children: "KidMonth is Nigeria's leading platform celebrating children's talents, creativity and achievements through exciting competitions, rewarding experiences, talent development and our growing family marketplace. Open to children aged 0-16 years." }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 50,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-4 flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { element: "a", href: "/signup", className: "w-full sm:w-auto", children: "Register Free" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 52,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { element: "a", href: "/contests", className: "w-full sm:w-auto", variant: "outline", children: "Explore Competitions" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 53,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-3 gap-8 xl:gap-9 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-8 xl:gap-9", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "aspect-3/7 object-cover rounded-full outline-dashed outline-offset-4 w-full", src: hero_1_default, alt: "competition winner smiling" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 58,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "aspect-3/4 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_2_default, alt: "child receiving a prize" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 59,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-8 xl:gap-9 justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "aspect-square rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_3_default, alt: "talent academy participant" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 62,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "aspect-3/7 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_4_default, alt: "birthday celebration moment" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 63,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "aspect-3/7 rounded-full outline-dashed outline-offset-4 object-cover w-full", src: hero_5_default, alt: "family celebration photo" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 66,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "wrapper py-8 md:py-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "font-bold text-xl mb-4", children: "Why Parents Trust KidMonth" }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: trustBadges.map((badge) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-2xl border  bg-secondary px-5 py-6 font-semibold text-primary shadow-sm", children: badge }, badge, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 75,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "py-8 md:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sm:wrapper bg-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between items-center gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-black text-xl", children: "Our Vision" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 85,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "object-cover object-center", src: underline_default, alt: "underline", width: 100 }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 86,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 84,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl sm:text-3xl font-black mb-6 leading-snug", children: [
          "Creating ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-accent", children: "Opportunities" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 89,
            columnNumber: 38
          }, this),
          " Where Every Child Can Shine."
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 88,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-medium", children: "KidMonth exists to discover, celebrate and reward children by creating exciting opportunities that build confidence, encourage creativity and bring families together through competitions, talent development and memorable experiences." }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 91,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 83,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "object-cover object-center w-full", src: birthday_present_default, alt: "wrapped gift" }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 94,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 93,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 82,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "py-8 md:py-16 wrapper flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6 sm:mb-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "font-satoshi-black text-2xl", children: "Why Kidmonth?" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 114,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "object-fill w-[159px] h-5", src: underline_default, alt: "underline" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 115,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-6 lg:gap-12 sm:grid-cols-2 max-w-5xl", children: whyUsData.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WhyCard, { backgroundColor: item.bg, icon: item.icon, title: item.title, subtext: item.subtext }, item.title, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 118,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 117,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "py-8 md:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContestantSlider, { contestants: [{
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
      lineNumber: 123,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 122,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "pt-4 sm:py-8 md:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sm:wrapper bg-[#817EFB] bg-pattern bg-cover bg-left text-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between items-center gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl sm:text-[40px] font-satoshi-black mb-6 leading-snug", children: "Invite Families. Earn Rewards." }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 138,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-satoshi-medium mb-8", children: "Join the KidMonth Affiliate Program and earn commissions by referring parents, contestants and businesses to the KidMonth ecosystem. The more families you introduce, the more you earn." }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 141,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { element: "a", href: "/signup", variant: "none", useDefault: false, className: "bg-[#E7E7E7] text-primary py-4 px-8 text-lg rounded-md font-black whitespace-nowrap", children: "Become an Affiliate" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 145,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { element: "a", href: "/faq", variant: "none", useDefault: false, className: "whitespace-nowrap", children: "Learn More" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 146,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 144,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 137,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "wrapper bg-[#E7E7E7] rounded-3xl w-full aspect-square" }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 149,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 136,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 135,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "py-8 md:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6 sm:mb-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "font-satoshi-black text-2xl sm:text-[40px] mb-3", children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 157,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "object-fill w-[220px] h-5", src: underline_default, alt: "underline" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 158,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 156,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AccordionItem, { value: item.question, className: "border-b border-primary/10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AccordionTrigger, { className: "text-left py-5 text-lg font-semibold", children: item.question }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 163,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AccordionContent, { className: "pb-5 text-primary/80", children: item.answer }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 166,
          columnNumber: 37
        }, this)
      ] }, item.question, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 162,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 161,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 160,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 155,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 154,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { id: "contact", className: "sm:py-8 md:py-16 sm:-scroll-m-4 md:-scroll-m-8 snap-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sm:wrapper bg-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between gap-16 sm:rounded-3xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "wrapper flex flex-col gap-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl sm:text-[40px] font-satoshi-black leading-tight", children: "Do you want to know more about the way we work?" }, void 0, false, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 178,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col lg:flex-row gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block font-satoshi-black mb-3", children: "Phone Us" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 183,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-satoshi-medium whitespace-nowrap", children: "+234 703 515 9093" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 184,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 182,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block font-satoshi-black mb-3", children: "Email Us" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 187,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-satoshi-medium", children: "kidmonthyear@gmail.com" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 188,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 186,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 181,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block font-satoshi-black mb-3", children: "Follow Us" }, void 0, false, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 192,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.twitterXIcon, width: "24px", height: "24px" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 194,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.instagramIcon, width: "24px", height: "24px" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 195,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.facebookIcon, width: "24px", height: "24px" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 196,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.youtubeIcon, width: "24px", height: "24px" }, void 0, false, {
              fileName: "app/routes/_public._index.tsx",
              lineNumber: 197,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 193,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 191,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 177,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContactForm, {}, void 0, false, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 201,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 176,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 175,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c3 = LandingPage;
var _c3;
$RefreshReg$(_c3, "LandingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LandingPage as default
};
//# sourceMappingURL=/build/routes/_public._index-55GBFJDE.js.map
