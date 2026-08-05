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

// app/routes/_public.faq.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_public.faq.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_public.faq.tsx"
  );
  import.meta.hot.lastModified = "1785402020615.996";
}
var faqSections = [{
  id: "account",
  title: "Account & Getting Started",
  items: [{
    question: "How do I create an account?",
    answer: "Visit kidmonth.com or Download the KidMonth app, register as a Parent/Guardian, Partner and/or Affiliate, verify your details."
  }, {
    question: "Can my child create their own account?",
    answer: "No. Only a Parent or Guardian can create and manage a child's account."
  }, {
    question: "Can I register more than one child?",
    answer: "Yes. Multiple children can be managed under one Parent/Guardian account. Click on contest and register for the contest you are interested in."
  }, {
    question: "I forgot my password. What should I do?",
    answer: "Tap Forgot Password on the login page and follow the instructions to reset your password."
  }, {
    question: "How do I change my phone number or email address?",
    answer: "Go to Account Settings and update your information. Some changes may require verification."
  }, {
    question: "How do I update my child's details?",
    answer: "Go to the child's profile and select Edit Profile. Certain changes may require additional verification."
  }, {
    question: "Is there an age limit?",
    answer: "Yes. Children must be between 0 and 16 years old to participate in KidMonth contests unless a specific contest states otherwise."
  }, {
    question: "Why do I need to verify my account?",
    answer: "Verification helps protect children, prevent fraud, and ensure contest fairness."
  }]
}, {
  id: "givaah",
  title: "Givaah Shop",
  items: [{
    question: "What is Givaah?",
    answer: "Givaah is KidMonth's marketplace where families can purchase products from approved Partner Vendors while earning voting credits."
  }, {
    question: "How do I place an order?",
    answer: "Click on Givaah Shop, browse products, add them to your cart, complete checkout, and track your order from the Orders page."
  }, {
    question: "My order hasn't arrived. What should I do?",
    answer: "Check your order status first. If delivery is overdue, contact the vendor through the app. If the issue remains unresolved, contact KidMonth Support."
  }, {
    question: "Can I cancel an order?",
    answer: "Regular orders may not be cancelled once voting credits has been assigned. Once a Scheduled Gift Order is confirmed, it cannot be cancelled."
  }, {
    question: "Can I get a refund?",
    answer: "Refunds are subject to the applicable Refund Policy. Scheduled Gift Orders are non-refundable once confirmed."
  }, {
    question: "I accidentally scheduled a gift order. Can it be reversed?",
    answer: "No. Scheduled Gift Orders are final because associated voting credits are issued immediately."
  }, {
    question: "What is a voucher?",
    answer: "A voucher is store credit that can be used on Givaah. Vouchers expire 90 days after issuance unless otherwise stated."
  }, {
    question: "Can expired vouchers be restored?",
    answer: "No. Expired vouchers cannot be renewed or refunded."
  }, {
    question: "Can I pay vendors outside KidMonth?",
    answer: "Yes. Payments can be made through the KidMonth platform or physically to the Partner. However, confirm you have gotten the voting credits when making physical payments once you have received your order, confirm it."
  }]
}, {
  id: "contests",
  title: "Contests & Talent Discovery",
  items: [{
    question: "How do I enter my child into a contest?",
    answer: "Open your child's profile, tap Enter Contest, select an available contest, and complete the submission process."
  }, {
    question: "Can my child join multiple contests?",
    answer: "Yes, where permitted by the contest rules."
  }, {
    question: "How are winners selected?",
    answer: "Contest winners are determined using a weighted leaderboard based on each contest's published voting formula."
  }, {
    question: "Where can I see my child's ranking?",
    answer: "Live rankings are available on the contestant dashboard."
  }, {
    question: "Why was my child evicted despite having votes?",
    answer: "Each stage has a minimum progression requirement. Contestants who fail to meet that requirement may be eliminated."
  }, {
    question: "How can I improve my child's position on the leaderboard?",
    answer: "Encourage supporters to vote consistently throughout the contest rather than waiting until the deadline."
  }, {
    question: "Can contest decisions be appealed?",
    answer: "Yes. If you believe an error occurred, contact Support. All reviews are conducted using the official Contest Rules."
  }]
}, {
  id: "voting",
  title: "Voting",
  items: [{
    question: "How can I vote?",
    answer: "KidMonth currently supports: Free Voting, Givaah Voting Credits, and Prizeback Voting."
  }, {
    question: "Do all votes carry the same value?",
    answer: "No. Each contest specifies how different vote types contribute to the final leaderboard."
  }, {
    question: "Can I vote more than once?",
    answer: "Yes, subject to the rules and limits of each voting method."
  }, {
    question: "Can I vote for my own child?",
    answer: "Yes."
  }, {
    question: "Can I change or remove my vote?",
    answer: "No. Votes cannot be reversed once submitted."
  }, {
    question: "Can I get a refund for paid votes?",
    answer: "No. Paid votes are final."
  }]
}, {
  id: "wallet",
  title: "Wallet, Payments & VTU",
  items: [{
    question: "Does KidMonth have a wallet?",
    answer: "Yes. Every account includes a wallet for supported transactions."
  }, {
    question: "How do I fund my wallet?",
    answer: "Open the Wallet section and select Fund Wallet."
  }, {
    question: "Can I withdraw money?",
    answer: "Yes. Withdrawal only applies to earnings and not the funded transaction in your wallet."
  }, {
    question: "Can I buy airtime and data?",
    answer: "Yes. KidMonth supports VTU services for major Nigerian networks."
  }, {
    question: "My wallet payment failed. What should I do?",
    answer: "Check your transaction history first. If the issue persists, contact Support with your transaction reference."
  }, {
    question: "My airtime or data purchase failed but I was charged.",
    answer: "Most failed transactions are automatically reversed. If no reversal occurs within the expected period, contact Support."
  }]
}, {
  id: "prizeback",
  title: "Prizeback Earnings",
  items: [{
    question: "What is Prizeback?",
    answer: "Prizeback allows supporters to cast paid votes while 50% of the payment becomes earnings for the contestant."
  }, {
    question: "When are Prizeback earnings paid?",
    answer: "Eligible earnings are paid weekly once the minimum payout threshold of NGN 10,000 has been reached."
  }, {
    question: "What happens if I have less than NGN 10,000?",
    answer: "Your earnings remain in your balance and roll over until you reach the minimum payout amount."
  }]
}, {
  id: "affiliates",
  title: "Affiliates & Referrals",
  items: [{
    question: "Who can become a KidMonth Affiliate?",
    answer: "Anyone can become a KidMonth Affiliate. Every registered user receives a unique Affiliate referral code that can be shared with others."
  }, {
    question: "Do I have to use an Affiliate referral code when signing up?",
    answer: "No. Adding a referral code during registration is optional. However, if someone referred you to KidMonth, you should enter their referral code during sign-up so they receive credit for your registration."
  }, {
    question: "How do I refer people?",
    answer: "Simply share your unique referral code with new Users and Partners and encourage them to enter your referral code when creating their account."
  }, {
    question: "How do Affiliates earn?",
    answer: "Affiliates earn: NGN 500 for every referred User who reaches NGN 10,000 in qualifying purchases (excluding VTU); NGN 1,000 for every referred Partner who reaches NGN 20,000 in qualifying sales; 0.5% ongoing commission on qualifying purchases made by referred Users (excluding VTU); and 0.5% ongoing commission on qualifying sales generated by referred Partners."
  }, {
    question: "Is there a limit to how much I can earn?",
    answer: "No. There is no limit to your Affiliate earnings. The more active your referral network becomes, the more you can earn."
  }, {
    question: "What is the Affiliate Ladder?",
    answer: "The Affiliate Ladder is KidMonth's performance and rewards program for Affiliates, offering additional recognition and incentives as you grow."
  }, {
    question: "Why haven't I received my commission yet?",
    answer: "Commissions are paid only after your referred User or Partner meets the required qualifying purchase or sales threshold in accordance with the Affiliate Policy."
  }]
}, {
  id: "vendors",
  title: "Vendors & Business Partners",
  items: [{
    question: "How do I become a Partner Vendor?",
    answer: "Complete the Partner Vendor application within the app or on the KidMonth website."
  }, {
    question: "How do vendors receive payments?",
    answer: "Payments are processed according to the Vendor Agreement after successful order completion."
  }, {
    question: "Can businesses advertise on KidMonth?",
    answer: "Yes. Businesses may advertise subject to KidMonth's Advertising Policy."
  }]
}, {
  id: "badges",
  title: "Badges & Achievements",
  items: [{
    question: "How do I earn badges?",
    answer: "Badges are earned through platform participation, achievements, subscriptions, and special activities."
  }, {
    question: "Can badges expire?",
    answer: "Some promotional badges may expire, while achievement badges remain permanently."
  }]
}, {
  id: "notifications",
  title: "Notifications",
  items: [{
    question: "Why am I not receiving notifications?",
    answer: "Ensure notifications are enabled in both your phone settings and the KidMonth app."
  }, {
    question: "Can I choose which notifications I receive?",
    answer: "Yes. Notification preferences can be managed in Settings."
  }]
}, {
  id: "technical",
  title: "Technical Support",
  items: [{
    question: "The app keeps crashing. What should I do?",
    answer: "Update to the latest version, restart your device, and try again."
  }, {
    question: "The app is slow or not loading.",
    answer: "Check your internet connection and ensure you're using the latest version."
  }, {
    question: "Why can't I upload photos or videos?",
    answer: "Check your internet connection, file size, and supported formats."
  }]
}, {
  id: "subscriptions",
  title: "Subscriptions",
  items: [{
    question: "Does KidMonth offer subscriptions?",
    answer: "Yes. Certain premium features, badges, or services may require an active subscription."
  }, {
    question: "Can I cancel my subscription?",
    answer: "Yes. Subscription management follows the rules of your payment platform."
  }]
}, {
  id: "safety",
  title: "Safety & Privacy",
  items: [{
    question: "Is my child's information safe?",
    answer: "Yes. KidMonth follows the Nigeria Data Protection Act (NDPA), applicable international privacy standards, and industry security practices to protect user information."
  }, {
    question: "Who can see my child's profile?",
    answer: "Only information necessary for participation is publicly displayed. Sensitive personal information remains protected."
  }, {
    question: "Can I delete my child's account?",
    answer: "Yes. Contact Support to request account deletion in accordance with applicable data protection laws."
  }, {
    question: "How do I report abuse or inappropriate behaviour?",
    answer: "Contact Support immediately via email - kidmonthyearltd@gmail.com."
  }, {
    question: "Does KidMonth verify contestants?",
    answer: "Where necessary, KidMonth may request identity or age verification to maintain platform integrity."
  }]
}, {
  id: "policies",
  title: "Policies & Legal",
  items: [{
    question: "Where can I read the Terms & Conditions?",
    answer: "The latest Terms & Conditions are available in the app and on the KidMonth website."
  }, {
    question: "Where can I read the Privacy Policy?",
    answer: "The Privacy Policy is available within the app and on the website."
  }, {
    question: "Which document takes priority if information differs?",
    answer: "The official Terms & Conditions, Privacy Policy, Contest Rules, and other legal policies always take precedence over this FAQ."
  }]
}, {
  id: "contact",
  title: "Contact Support",
  items: [{
    question: "How do I contact KidMonth Support?",
    answer: "You can reach us through: Email: kidmonthyearltd@gmail.com; WhatsApp: +234 813 583 7259."
  }, {
    question: "What information should I include when contacting Support?",
    answer: "When contacting Support, please include: your registered email and phone number, Contest ID (if applicable), Order number (if applicable), Transaction reference (if applicable), and a brief description of the issue. This helps us resolve your request more quickly."
  }]
}, {
  id: "disclaimer",
  title: "Disclaimer",
  items: [{
    question: "What is the status of this FAQ?",
    answer: "This FAQ is intended as a general guide to using KidMonth. In the event of any inconsistency between this document and KidMonth's official Terms & Conditions, Privacy Policy, Contest Rules, Vendor Policy, Affiliate Policy, or any other official legal document, the official legal documents shall prevail."
  }]
}];
var quickFacts = [{
  label: "Help topics",
  value: "Accounts, payments, contests"
}, {
  label: "Contact",
  value: "kidmonthyearltd@gmail.com"
}, {
  label: "Platform",
  value: "KidMonth"
}, {
  label: "Support",
  value: "Public help page"
}];
function FaqMark() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 240 240", className: "h-full w-full", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "120", cy: "120", r: "92", className: "fill-primary/5" }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 310,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M82 92c0-22 17-38 38-38s38 16 38 36c0 16-10 26-23 34-11 7-15 12-15 24", className: "stroke-primary/12", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 311,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M120 164h.5", className: "stroke-accent", strokeWidth: "8", strokeLinecap: "round" }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 312,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M80 136c8 13 22 22 40 22s32-9 40-22", className: "stroke-primary/12", strokeWidth: "2.5", strokeLinecap: "round" }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 313,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M90 88h60", className: "stroke-primary/12", strokeWidth: "2", strokeLinecap: "round" }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 314,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M96 108h48", className: "stroke-primary/12", strokeWidth: "2", strokeLinecap: "round" }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 315,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.faq.tsx",
    lineNumber: 309,
    columnNumber: 10
  }, this);
}
_c = FaqMark;
function SectionCard({
  id,
  title,
  items
}) {
  _s();
  const [isOpen, setIsOpen] = import_react.default.useState(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { id, className: "scroll-m-24 rounded-[1.75rem] border border-slate-200 bg-white shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsOpen((prev) => !prev), className: "flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8", "aria-expanded": isOpen, "aria-controls": `${id}-content`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent", children: "Section" }, void 0, false, {
          fileName: "app/routes/_public.faq.tsx",
          lineNumber: 329,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black tracking-tight text-primary sm:text-3xl", children: title }, void 0, false, {
          fileName: "app/routes/_public.faq.tsx",
          lineNumber: 330,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 328,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: `h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "6 9 12 15 18 9" }, void 0, false, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 333,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 332,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 327,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: `${id}-content`, className: `overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[20000px] opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 px-6 pb-6 sm:px-8 sm:pb-8", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-bold text-primary sm:text-base", children: item.question }, void 0, false, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 340,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm leading-7 text-slate-700", children: item.answer }, void 0, false, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 341,
        columnNumber: 15
      }, this)
    ] }, item.question, true, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 339,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 338,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 337,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.faq.tsx",
    lineNumber: 326,
    columnNumber: 10
  }, this);
}
_s(SectionCard, "mEi83NlPXQzy/XIDfTYWzOSvaHw=");
_c2 = SectionCard;
function FaqSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "min-h-screen bg-[#F7F7F4]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper py-8 sm:py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-[1.15fr_0.85fr]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-32 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 354,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 h-12 w-3/4 animate-pulse rounded-2xl bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 355,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-5 w-full animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 356,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-5 w-5/6 animate-pulse rounded-full bg-slate-200" }, void 0, false, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 357,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-24 animate-pulse rounded-2xl bg-slate-200" }, void 0, false, {
          fileName: "app/routes/_public.faq.tsx",
          lineNumber: 359,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-24 animate-pulse rounded-2xl bg-slate-200" }, void 0, false, {
          fileName: "app/routes/_public.faq.tsx",
          lineNumber: 360,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-24 animate-pulse rounded-2xl bg-slate-200" }, void 0, false, {
          fileName: "app/routes/_public.faq.tsx",
          lineNumber: 361,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-24 animate-pulse rounded-2xl bg-slate-200" }, void 0, false, {
          fileName: "app/routes/_public.faq.tsx",
          lineNumber: 362,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 358,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 353,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-64 animate-pulse rounded-[1.5rem] bg-slate-200" }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 366,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 365,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.faq.tsx",
    lineNumber: 352,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.faq.tsx",
    lineNumber: 351,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_public.faq.tsx",
    lineNumber: 350,
    columnNumber: 10
  }, this);
}
_c3 = FaqSkeleton;
function HydrateFallback() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaqSkeleton, {}, void 0, false, {
    fileName: "app/routes/_public.faq.tsx",
    lineNumber: 374,
    columnNumber: 10
  }, this);
}
_c4 = HydrateFallback;
function FaqPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "relative overflow-hidden bg-[linear-gradient(180deg,#F9F7F2_0%,#FFFFFF_55%,#F6F7F8_100%)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-24 right-[-5rem] h-72 w-72 rounded-full bg-accent/5 blur-3xl" }, void 0, false, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 380,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-[-6rem] top-80 h-64 w-64 rounded-full bg-primary/5 blur-3xl" }, void 0, false, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 381,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 379,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "wrapper relative py-8 sm:py-12 lg:py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "space-y-6 lg:sticky lg:top-6 lg:self-start lg:order-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-slate-200 px-6 py-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-slate-500", children: "Document guide" }, void 0, false, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 389,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-2xl font-black tracking-tight text-primary", children: "Quick navigation" }, void 0, false, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 390,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.faq.tsx",
            lineNumber: 388,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "grid gap-2 p-3", children: faqSections.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `#${section.id}`, onClick: (e) => {
            e.preventDefault();
            const el = document.getElementById(section.id);
            if (el) {
              el.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              window.history.pushState(null, "", `#${section.id}`);
            }
          }, className: "group flex items-center justify-between rounded-2xl border border-transparent bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: section.title }, void 0, false, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 405,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-accent", children: "\u2192" }, void 0, false, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 406,
              columnNumber: 21
            }, this)
          ] }, section.id, true, {
            fileName: "app/routes/_public.faq.tsx",
            lineNumber: 394,
            columnNumber: 45
          }, this)) }, void 0, false, {
            fileName: "app/routes/_public.faq.tsx",
            lineNumber: 393,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.faq.tsx",
          lineNumber: 387,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-24 w-24 shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaqMark, {}, void 0, false, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 414,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 413,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.26em] text-slate-500", children: "Need more help" }, void 0, false, {
                fileName: "app/routes/_public.faq.tsx",
                lineNumber: 417,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-lg font-black text-primary", children: "KidMonth Support" }, void 0, false, {
                fileName: "app/routes/_public.faq.tsx",
                lineNumber: 418,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-slate-600", children: "kidmonthyearltd@gmail.com" }, void 0, false, {
                fileName: "app/routes/_public.faq.tsx",
                lineNumber: 419,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 416,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.faq.tsx",
            lineNumber: 412,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 rounded-2xl bg-slate-50 px-4 py-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500", children: "Related pages" }, void 0, false, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 424,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/privacy", className: "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-sm", children: "Privacy Policy" }, void 0, false, {
                fileName: "app/routes/_public.faq.tsx",
                lineNumber: 426,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/terms", className: "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-sm", children: "Terms & Conditions" }, void 0, false, {
                fileName: "app/routes/_public.faq.tsx",
                lineNumber: 429,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 425,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_public.faq.tsx",
            lineNumber: 423,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.faq.tsx",
          lineNumber: 411,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 386,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "space-y-6 lg:order-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-accent", children: "Help centre" }, void 0, false, {
            fileName: "app/routes/_public.faq.tsx",
            lineNumber: 439,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl", children: "Frequently Asked Questions" }, void 0, false, {
            fileName: "app/routes/_public.faq.tsx",
            lineNumber: 440,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base", children: "Find quick answers below. Use Ctrl + F (or your browser's search feature) to quickly locate your topic." }, void 0, false, {
            fileName: "app/routes/_public.faq.tsx",
            lineNumber: 441,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4", children: quickFacts.map((fact) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500", children: fact.label }, void 0, false, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 447,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mt-2 block text-sm font-semibold text-primary", children: fact.value }, void 0, false, {
              fileName: "app/routes/_public.faq.tsx",
              lineNumber: 448,
              columnNumber: 21
            }, this)
          ] }, fact.label, true, {
            fileName: "app/routes/_public.faq.tsx",
            lineNumber: 446,
            columnNumber: 41
          }, this)) }, void 0, false, {
            fileName: "app/routes/_public.faq.tsx",
            lineNumber: 445,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_public.faq.tsx",
          lineNumber: 438,
          columnNumber: 13
        }, this),
        faqSections.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionCard, { id: section.id, title: section.title, items: section.items }, section.id, false, {
          fileName: "app/routes/_public.faq.tsx",
          lineNumber: 453,
          columnNumber: 41
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/_public.faq.tsx",
        lineNumber: 437,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 385,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_public.faq.tsx",
      lineNumber: 384,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_public.faq.tsx",
    lineNumber: 378,
    columnNumber: 10
  }, this);
}
_c5 = FaqPage;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "FaqMark");
$RefreshReg$(_c2, "SectionCard");
$RefreshReg$(_c3, "FaqSkeleton");
$RefreshReg$(_c4, "HydrateFallback");
$RefreshReg$(_c5, "FaqPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  HydrateFallback,
  FaqPage as default
};
//# sourceMappingURL=/build/routes/_public.faq-DTNZKCK3.js.map
