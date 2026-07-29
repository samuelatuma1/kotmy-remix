const privacySections = [
  {
    id: "intro",
    title: "Introduction",
    body: [
      "KidMonth Tech Ltd is committed to protecting the privacy and personal data of everyone who uses the platform, with special care for children's information.",
      "This Privacy Policy explains how personal information is collected, used, stored, shared, and protected under applicable law.",
      "By using the platform, users agree to the practices described in this policy.",
    ],
	items: []
  },
  {
    id: "data",
    title: "Data We Collect",
    body: [
      "We collect information that users provide directly, including account details, child profile information, payment details, bank account details where needed, contest submissions, and support messages.",
      "We also collect technical and usage information automatically, such as device details, page visits, feature use, IP address, approximate location, logs, and error reports.",
      "We do not knowingly collect sensitive personal data unless it is explicitly provided in a context where it is necessary.",
    ],
    items: [
      "Account and contact details",
      "Child profile information",
      "Payment and payout details",
      "Contest entries and support messages",
      "Device, usage, and diagnostic data",
    ],
  },
  {
    id: "use",
    title: "How We Use Data",
    body: [
      "Personal data is processed to manage accounts, deliver services, administer contests, calculate earnings, send notices, improve the platform, meet legal obligations, and prevent fraud.",
      "Children's data is handled only through a Parent or Guardian and is not used for advertising profiling or sale to third parties.",
    ],
	items: []
  },
  {
    id: "sharing",
    title: "Sharing & Transfers",
    body: [
      "KidMonth does not sell personal data. We may share limited data with partners, payment processors, affiliates for earnings calculation, legal authorities, and trusted service providers.",
      "Where data is transferred outside Nigeria, safeguards are used to protect it in line with applicable data protection requirements.",
    ],
	items: []
  },
  {
    id: "rights",
    title: "Your Rights",
	items: [],
    body: [
      "Subject to applicable law, users may request access, correction, deletion, restriction, objection, portability, or withdrawal of consent.",
      "Requests can be sent to kidmonthyearltd@gmail.com and will be handled within a reasonable time frame.",
    ],
  },
  {
    id: "security",
    title: "Security, Cookies, and Changes",
	items: [],
    body: [
      "KidMonth uses reasonable technical and organisational safeguards to protect personal data, including encryption, access controls, and security reviews.",
      "The platform uses cookies and similar technologies to support functionality and improve the experience.",
      "This policy may be updated from time to time, and material changes will be communicated where appropriate.",
    ],
  },
  {
    id: "acceptance",
    title: "Acceptance",
	items: [],
    body: [
      "By using the platform, users acknowledge that they have read and understood this Privacy Policy.",
      "The effective date of this version is 29 July 2026.",
      "For enquiries, contact kidmonthyearltd@gmail.com.",
    ],
  },
] as const;

const quickFacts = [
  { label: "Effective", value: "29 July 2026" },
  { label: "Controller", value: "KidMonth Tech Ltd" },
  { label: "Contact", value: "kidmonthyearltd@gmail.com" },
  { label: "Jurisdiction", value: "Nigeria" },
] as const;

function PrivacyMark() {
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" fill="none" aria-hidden="true">
      <circle cx="120" cy="120" r="92" className="fill-primary/5" />
      <path d="M120 54c24 0 46 18 46 42 0 14-6 24-13 32-8 9-12 18-12 34h-42c0-16-4-25-12-34-7-8-13-18-13-32 0-24 22-42 46-42Z" className="fill-none stroke-primary/12" strokeWidth="2.5" />
      <path d="M100 136c3-10 11-18 20-18s17 8 20 18" className="stroke-accent" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M88 96h64" className="stroke-primary/12" strokeWidth="2" strokeLinecap="round" />
      <path d="M96 112h48" className="stroke-primary/12" strokeWidth="2" strokeLinecap="round" />
      <path d="M104 80h32" className="stroke-primary/12" strokeWidth="2" strokeLinecap="round" />
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
      <div className="mb-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">Section</p>
        <h2 className="text-2xl font-black tracking-tight text-primary sm:text-3xl">{title}</h2>
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

function PrivacySkeleton() {
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
  return <PrivacySkeleton />;
}

export default function PrivacyPolicy() {
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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Legal documentation</p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">Privacy Policy</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
                This page explains how KidMonth collects, uses, shares, stores, and protects personal information across the platform.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{fact.label}</span>
                    <span className="mt-2 block text-sm font-semibold text-primary">{fact.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/faq"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  View FAQ
                </a>
              </div>
            </header>

            {privacySections.map((section) => (
              <SectionCard key={section.id} id={section.id} title={section.title} body={section.body} items={section.items} />
            ))}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              <div className="border-b border-slate-200 px-6 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Document guide</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-primary">Quick navigation</h2>
              </div>

              <nav className="grid gap-2 p-3">
                {privacySections.map((section) => (
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
                  <PrivacyMark />
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
