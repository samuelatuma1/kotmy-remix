const faqSections = [
  {
    id: "general",
    title: "General Questions",
    items: [
      {
        question: "What is KidMonth?",
        answer:
          "KidMonth is a platform for contests, marketplace services, scheduled gift orders, voting, and related child-focused features.",
      },
      {
        question: "Who can use the platform?",
        answer:
          "Adults may register and manage accounts for themselves or on behalf of a child where they are a parent or guardian.",
      },
      {
        question: "How do I get started?",
        answer:
          "Create an account, complete your details, and follow the prompts for the service you want to use.",
      },
    ],
  },
  {
    id: "accounts",
    title: "Accounts & Access",
    items: [
      {
        question: "Can I edit my account details later?",
        answer:
          "Yes. You can update supported profile details from your account settings when those options are available.",
      },
      {
        question: "What if I cannot access my account?",
        answer:
          "Use the login and account recovery options provided in the app or contact support for help.",
      },
      {
        question: "Can one adult manage a child account?",
        answer:
          "Yes. A parent or guardian can create and manage a child profile and is responsible for the account activity.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Orders",
    items: [
      {
        question: "Are purchases refundable?",
        answer:
          "Refunds depend on the service and the rules that apply to that service. Some purchases are final once confirmed.",
      },
      {
        question: "How do scheduled gift orders work?",
        answer:
          "Scheduled gift orders let you place an order ahead of time, with the relevant pricing and order terms set at confirmation.",
      },
      {
        question: "How are vouchers used?",
        answer:
          "Vouchers can be redeemed according to the platform rules and the redemption window stated at purchase or issue time.",
      },
    ],
  },
  {
    id: "contests",
    title: "Contests & Voting",
    items: [
      {
        question: "How do contests work?",
        answer:
          "Contests are hosted on the platform and may include registration, voting, judging, and prize stages depending on the event.",
      },
      {
        question: "Can I vote for a contestant?",
        answer:
          "Yes. Voting options depend on the active contest and the credits or payment options available at the time.",
      },
      {
        question: "Where can I find contest rules?",
        answer:
          "Contest rules are provided on the contest page and in the platform terms where applicable.",
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    items: [
      {
        question: "How do I get help?",
        answer:
          "You can contact support through the email address shown on the legal pages or the contact details provided in the app.",
      },
      {
        question: "Where can I read the legal pages?",
        answer:
          "The Terms and Conditions and Privacy Policy are available from the public legal pages and footer links.",
      },
      {
        question: "Is my information protected?",
        answer:
          "KidMonth uses technical and organisational safeguards to protect user information and follows the stated privacy policy.",
      },
    ],
  },
] as const;

const quickFacts = [
  { label: "Help topics", value: "Accounts, payments, contests" },
  { label: "Contact", value: "kidmonthyearltd@gmail.com" },
  { label: "Platform", value: "KidMonth" },
  { label: "Support", value: "Public help page" },
] as const;

function FaqMark() {
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" fill="none" aria-hidden="true">
      <circle cx="120" cy="120" r="92" className="fill-primary/5" />
      <path d="M82 92c0-22 17-38 38-38s38 16 38 36c0 16-10 26-23 34-11 7-15 12-15 24" className="stroke-primary/12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M120 164h.5" className="stroke-accent" strokeWidth="8" strokeLinecap="round" />
      <path d="M80 136c8 13 22 22 40 22s32-9 40-22" className="stroke-primary/12" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M90 88h60" className="stroke-primary/12" strokeWidth="2" strokeLinecap="round" />
      <path d="M96 108h48" className="stroke-primary/12" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SectionCard({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <section id={id} className="scroll-m-24 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">Section</p>
        <h2 className="text-2xl font-black tracking-tight text-primary sm:text-3xl">{title}</h2>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5">
            <h3 className="text-sm font-bold text-primary sm:text-base">{item.question}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqSkeleton() {
  return (
    <main className="min-h-screen bg-[#F7F7F4]">
      <div className="wrapper py-8 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="h-4 w-32 animate-pulse rounded-full bg-slate-200" />
            <div className="mt-4 h-12 w-3/4 animate-pulse rounded-2xl bg-slate-200" />
            <div className="mt-3 h-5 w-full animate-pulse rounded-full bg-slate-200" />
            <div className="mt-3 h-5 w-5/6 animate-pulse rounded-full bg-slate-200" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="h-24 animate-pulse rounded-2xl bg-slate-200" />
              <div className="h-24 animate-pulse rounded-2xl bg-slate-200" />
              <div className="h-24 animate-pulse rounded-2xl bg-slate-200" />
              <div className="h-24 animate-pulse rounded-2xl bg-slate-200" />
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="h-64 animate-pulse rounded-[1.5rem] bg-slate-200" />
          </div>
        </div>
      </div>
    </main>
  );
}

export function HydrateFallback() {
  return <FaqSkeleton />;
}

export default function FaqPage() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#F9F7F2_0%,#FFFFFF_55%,#F6F7F8_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-5rem] h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute left-[-6rem] top-80 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="wrapper relative py-8 sm:py-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <article className="space-y-6">
            <header className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Help centre</p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">Frequently Asked Questions</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
                Find quick answers to common questions about accounts, payments, contests, and support on KidMonth.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{fact.label}</span>
                    <span className="mt-2 block text-sm font-semibold text-primary">{fact.value}</span>
                  </div>
                ))}
              </div>
            </header>

            {faqSections.map((section) => (
              <SectionCard key={section.id} id={section.id} title={section.title} items={section.items} />
            ))}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              <div className="border-b border-slate-200 px-6 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Document guide</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-primary">Quick navigation</h2>
              </div>

              <nav className="grid gap-2 p-3">
                {faqSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center justify-between rounded-2xl border border-transparent bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-sm"
                  >
                    <span>{section.title}</span>
                    <span className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-accent">→</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-4">
                <div className="h-24 w-24 shrink-0">
                  <FaqMark />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Need more help</p>
                  <p className="mt-2 text-lg font-black text-primary">KidMonth Support</p>
                  <p className="mt-1 text-sm text-slate-600">kidmonthyearltd@gmail.com</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-4">
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Related pages</span>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a href="/privacy" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-sm">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-sm">
                    Terms & Conditions
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
