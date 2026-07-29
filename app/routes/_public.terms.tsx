const termsSections = [
  {
    id: "overview",
    title: "Overview",
    body: [
      "KIDMONTH TECH LTD, trading as KidMonth, provides the platform covered by this document.",
      "This page brings together the Terms & Conditions, Partner Agreement, Affiliate Terms, and Contest & Voting Rules that apply to use of the platform.",
      "The governing jurisdiction is the Federal Republic of Nigeria.",
    ],
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    body: [
      "These terms govern access to and use of the KidMonth website, mobile applications, marketplace, contest tools, and related services.",
      "By using the platform, users agree to these terms and the Privacy Policy. If a user does not agree, they must not use the platform.",
      "KidMonth may update these terms from time to time. Continued use after changes take effect means the updated terms are accepted.",
    ],
    items: [
      "Users must provide accurate information, use the platform lawfully, and keep account credentials secure.",
      "The platform may include marketplace purchases, scheduled gift orders, vouchers, voting credits, contest participation, and value top-up services.",
      "User content may be licensed to KidMonth on a non-exclusive, royalty-free, worldwide basis for platform operation and promotion.",
      "Refund, dispute, delivery, and cancellation rules vary by service and are explained within the document.",
    ],
  },
  {
    id: "partner",
    title: "Partner Agreement",
    body: [
      "Partners are expected to keep listings accurate, compliant, and suitable for the platform’s audience.",
      "Partner fees and commission terms are set during onboarding and documented separately.",
      "KidMonth may suspend or terminate Partner access for fraud, repeated complaints, poor fulfilment, or legal violations.",
    ],
  },
  {
    id: "affiliate",
    title: "Affiliate Terms",
    body: [
      "Affiliates may earn sign-up earnings and ongoing activity-based commissions under the programme rules.",
      "Promotion must be honest, lawful, and directed at adults. Misleading claims, spam, or fake accounts are prohibited.",
      "KidMonth may suspend or terminate affiliate participation for fraud, inactivity, or reputational harm.",
    ],
  },
  {
    id: "acceptance",
    title: "Acceptance",
    body: [
      "By accessing or using the platform, users confirm they have read and agreed to the document in full.",
      "The effective date of this version is 29 July 2026.",
      "For enquiries, contact kidmonthyearltd@gmail.com.",
    ],
  },
] as const;

const quickFacts = [
  { label: "Effective", value: "29 July 2026" },
  { label: "Entity", value: "KidMonth Tech Ltd" },
  { label: "Contact", value: "kidmonthyearltd@gmail.com" },
  { label: "Jurisdiction", value: "Nigeria" },
] as const;

function LegalMark() {
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" fill="none" aria-hidden="true">
      <circle cx="120" cy="120" r="92" className="fill-primary/5" />
      <circle cx="120" cy="120" r="68" className="fill-none stroke-primary/10" strokeWidth="2" strokeDasharray="8 10" />
      <path d="M120 58v124" className="stroke-primary/15" strokeWidth="2" strokeLinecap="round" />
      <path d="M72 100h96" className="stroke-primary/15" strokeWidth="2" strokeLinecap="round" />
      <path d="M84 136c12-18 24-27 36-27s24 9 36 27" className="stroke-accent" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M100 84h40" className="stroke-primary/15" strokeWidth="2" strokeLinecap="round" />
      <path d="M94 156h52" className="stroke-primary/15" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SectionCard({
  id,
  title,
  body,
  items,
}: {
  id: string;
  title: string;
  body: readonly string[];
  items?: readonly string[];
}) {
  return (
    <section id={id} className="scroll-m-24 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">Section</p>
          <h2 className="text-2xl font-black tracking-tight text-primary sm:text-3xl">{title}</h2>
        </div>
      </div>

      <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {items ? (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function TermsSkeleton() {
  return (
    <main className="min-h-screen bg-[#F7F7F4]">
      <div className="wrapper py-8 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
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
  return <TermsSkeleton />;
}

export default function TermsAndConditions() {
  return (
    <main className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-5rem] h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute left-[-6rem] top-80 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="wrapper relative py-8 sm:py-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <article className="space-y-6">
            <header className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Legal documentation</p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">Terms, agreements, and rules</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
                This document explains how the KidMonth platform works, what users agree to, and the rules that apply across the marketplace, contests, partnerships, and affiliate participation.
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

            <SectionCard id={termsSections[0].id} title={termsSections[0].title} body={termsSections[0].body} />
            <SectionCard id={termsSections[1].id} title={termsSections[1].title} body={termsSections[1].body} items={termsSections[1].items} />
            <SectionCard id={termsSections[2].id} title={termsSections[2].title} body={termsSections[2].body} />
            <SectionCard id={termsSections[3].id} title={termsSections[3].title} body={termsSections[3].body} />
            <SectionCard id={termsSections[4].id} title={termsSections[4].title} body={termsSections[4].body} />
          </article>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              <div className="border-b border-slate-200 px-6 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Document guide</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-primary">Quick navigation</h2>
              </div>

              <nav className="grid gap-2 p-3">
                {termsSections.map((section) => (
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
                  <LegalMark />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Issued by</p>
                  <p className="mt-2 text-lg font-black text-primary">KidMonth Tech Ltd</p>
                  <p className="mt-1 text-sm text-slate-600">Trading as KidMonth</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-slate-50 px-4 py-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Contact</span>
                  <span className="mt-2 block text-sm font-semibold text-primary">kidmonthyearltd@gmail.com</span>
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Version</span>
                  <span className="mt-2 block text-sm font-semibold text-primary">1.0</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
