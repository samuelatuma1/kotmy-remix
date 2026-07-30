import React from "react";

const privacySections = [
  {
    id: "intro",
    title: "Introduction & Commitment",
    body: [
      <div className="space-y-6">
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          KidMonth Tech Ltd ("KidMonth", "we", "us", "our") is committed to protecting the privacy and personal data of all individuals who interact with our Platform, with particular care and diligence afforded to the personal data of children. This Privacy Policy explains how we collect, use, store, share, and protect personal information in compliance with the Nigeria Data Protection Regulation 2019 ("NDPR"), the General Data Protection Regulation (EU) 2016/679 ("GDPR") for users in the European Economic Area, and applicable international data protection principles.
        </p>
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          By using the Platform, you consent to the practices described in this Privacy Policy. If you do not agree, you must discontinue use of the Platform immediately.
        </p>
      </div>,
    ],
    items: null,
  },
  {
    id: "controller",
    title: "Data Controller Information",
    body: [
      <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
        <p><span className="font-semibold text-primary">Data Controller:</span> KidMonth Tech Ltd (KidMonth)</p>
        <p><span className="font-semibold text-primary">Contact Email:</span> kidmonthyearltd@gmail.com</p>
        <p><span className="font-semibold text-primary">Jurisdiction:</span> Federal Republic of Nigeria</p>
        <p>For data protection enquiries, contact us at the email address above, marking the subject line "Data Protection Enquiry".</p>
      </div>,
    ],
    items: null,
  },
  {
    id: "data",
    title: "What Data We Collect",
    body: [
      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-base font-bold text-primary">3.1 Data Provided by Users</h3>
          <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <li>Full name, email address, phone number, and physical address of the registering user, Partner, Parent or Guardian;</li>
            <li>Child's full name, date of birth, gender, photograph, and talents or interests (as submitted by the Parent or Guardian);</li>
            <li>Payment information (processed securely through third-party payment processors; we do not store raw card details);</li>
            <li>Bank account details where provided for Prizeback and platform earnings disbursement;</li>
            <li>Contest entry content, including photographs, videos, and written submissions;</li>
            <li>Communications with our support team.</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">3.2 Data Collected Automatically</h3>
          <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <li>Device information (device type, operating system, unique device identifiers);</li>
            <li>Usage data (pages visited, features used, time spent, click patterns);</li>
            <li>IP address and approximate geolocation;</li>
            <li>Log data and error reports.</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">3.3 Data We Do Not Collect</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            KidMonth does not knowingly collect sensitive personal data such as biometric data, religious beliefs, or health information unless expressly provided by the User in a context where it is clearly necessary.
          </p>
        </div>
      </div>,
    ],
    items: null,
  },
  {
    id: "use",
    title: "How We Use Your Data",
    body: [
      <div className="space-y-6">
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          We process personal data for the following lawful purposes:
        </p>
        <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          <li><span className="font-semibold text-primary">Account Registration & Authentication:</span> To verify identity and manage user accounts;</li>
          <li><span className="font-semibold text-primary">Service Delivery:</span> To process marketplace transactions, Scheduled Gift Orders, VTU requests, and voucher redemptions;</li>
          <li><span className="font-semibold text-primary">Contest Administration:</span> To manage contest entries, voting, results, and prize disbursements;</li>
          <li><span className="font-semibold text-primary">Prizeback Earnings:</span> To calculate and disburse earnings to children's bank accounts on behalf of Contestants who participate in Prizeback voting;</li>
          <li><span className="font-semibold text-primary">Communications:</span> To send transaction confirmations, contest updates, service notices, and promotional communications where consent has been given;</li>
          <li><span className="font-semibold text-primary">Platform Improvement:</span> To analyse usage patterns and improve the User experience;</li>
          <li><span className="font-semibold text-primary">Legal Compliance:</span> To fulfil obligations under Nigerian law and applicable international law;</li>
          <li><span className="font-semibold text-primary">Fraud Prevention & Security:</span> To detect, investigate, and prevent fraudulent or unlawful activity.</li>
        </ul>
      </div>,
    ],
    items: null,
  },
  {
    id: "children",
    title: "Children's Data — Special Protections",
    body: [
      <div className="space-y-6">
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          KidMonth is deeply committed to the safety and privacy of children. The following principles govern how we handle children's personal data:
        </p>
        <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          <li>All children's data on the Platform is registered and managed by a Parent or Guardian, who provides explicit consent on behalf of the child;</li>
          <li>Children's data is used solely for the purposes of contest participation, Platform engagement, and prize disbursement — never for advertising profiling or sale to third parties;</li>
          <li>Profile photographs, videos, and contest entries submitted for children may be displayed publicly on the Platform and in promotional materials where the Parent or Guardian has granted permission. Parents may withdraw this permission at any time by contacting kidmonthyearltd@gmail.com;</li>
          <li>KidMonth does not knowingly permit any third party to directly contact or solicit a child through the Platform;</li>
          <li>Parents and Guardians retain the right to review, correct, or delete their child's data at any time. Requests should be directed to kidmonthyearltd@gmail.com.</li>
        </ul>
      </div>,
    ],
    items: null,
  },
  {
    id: "sharing",
    title: "Data Sharing & Third Parties",
    body: [
      <div className="space-y-6">
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          KidMonth does not sell your personal data. We may share data in the following limited circumstances:
        </p>
        <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          <li><span className="font-semibold text-primary">Partners:</span> Where a transaction involves a Partner, relevant order details (name, delivery address, order specifications) are shared with that Partner for fulfilment purposes only;</li>
          <li><span className="font-semibold text-primary">Payment Processors:</span> Payment data is shared with authorised payment gateway providers for transaction processing;</li>
          <li><span className="font-semibold text-primary">Affiliates:</span> Affiliate tracking data (sign-up and purchase activity) is shared with Affiliates to calculate their earnings, without disclosing full personal details of referred Users;</li>
          <li><span className="font-semibold text-primary">Legal Authorities:</span> Where required by Nigerian law, court order, or other legally binding government request;</li>
          <li><span className="font-semibold text-primary">Service Providers:</span> Trusted technology and hosting providers who process data on our behalf under strict confidentiality obligations.</li>
        </ul>
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          Any third party receiving data from KidMonth is contractually obligated to handle it in accordance with applicable data protection law.
        </p>
      </div>,
    ],
    items: null,
  },
  {
    id: "transfers",
    title: "International Data Transfers",
    body: [
      <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
        KidMonth is based in Nigeria. Where data is transferred to countries outside Nigeria, we ensure that appropriate safeguards are in place in accordance with NDPR provisions and, for EEA users, the GDPR Standard Contractual Clauses or equivalent mechanisms. By using the Platform, you acknowledge that your data may be processed in jurisdictions outside your country of residence.
      </p>,
    ],
    items: null,
  },
  {
    id: "retention",
    title: "Data Retention",
    body: [
      <div className="space-y-6">
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          We retain personal data for as long as necessary to fulfil the purposes described in this Policy, or as required by applicable law. Specifically:
        </p>
        <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          <li>Active account data is retained for the duration of the account;</li>
          <li>Transaction and financial records are retained for a minimum of 6 years in accordance with Nigerian tax and financial regulations;</li>
          <li>Contest entry data and results are retained for 3 years for record-keeping purposes;</li>
          <li>Upon account deletion, personal data is anonymised or deleted within 90 days, except where retention is required by law.</li>
        </ul>
      </div>,
    ],
    items: null,
  },
  {
    id: "rights",
    title: "Your Data Rights",
    body: [
      <div className="space-y-6">
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          Subject to applicable law, you have the following rights in respect of your personal data:
        </p>
        <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          <li><span className="font-semibold text-primary">Right of Access:</span> To request a copy of the data we hold about you;</li>
          <li><span className="font-semibold text-primary">Right to Rectification:</span> To request correction of inaccurate or incomplete data;</li>
          <li><span className="font-semibold text-primary">Right to Erasure:</span> To request deletion of your data where there is no lawful basis for continued processing;</li>
          <li><span className="font-semibold text-primary">Right to Restriction:</span> To request that we limit the processing of your data in certain circumstances;</li>
          <li><span className="font-semibold text-primary">Right to Object:</span> To object to processing based on legitimate interests;</li>
          <li><span className="font-semibold text-primary">Right to Data Portability:</span> To receive your data in a structured, machine-readable format;</li>
          <li><span className="font-semibold text-primary">Right to Withdraw Consent:</span> Where processing is based on consent, to withdraw that consent at any time without affecting the lawfulness of prior processing.</li>
        </ul>
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          To exercise any of these rights, contact kidmonthyearltd@gmail.com. We will respond within 30 days of receipt of a valid request.
        </p>
      </div>,
    ],
    items: null,
  },
  {
    id: "security",
    title: "Security",
    body: [
      <div className="space-y-6">
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          KidMonth implements industry-standard technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These include encryption of data in transit, access controls, and regular security reviews.
        </p>
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          Notwithstanding the above, no method of electronic transmission or storage is entirely secure. KidMonth cannot guarantee absolute security and shall not be liable for breaches that occur despite reasonable security measures, provided we act promptly upon discovery.
        </p>
      </div>,
    ],
    items: null,
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    body: [
      <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
        The Platform uses cookies and similar tracking technologies to enhance user experience, analyse usage, and maintain session security. You may manage cookie preferences through your device or browser settings. Disabling certain cookies may affect Platform functionality.
      </p>,
    ],
    items: null,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: [
      <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
        KidMonth reserves the right to update this Privacy Policy at any time. Material changes will be communicated via email or in-app notification. Continued use of the Platform following such notification constitutes acceptance of the updated Policy.
      </p>,
    ],
    items: null,
  },
  {
    id: "acceptance",
    title: "Acceptance & Acknowledgement",
    body: [
      <div className="space-y-6">
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          By accessing, registering on, or using the KidMonth Platform, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, storage, disclosure, and processing of your personal data in accordance with this Policy and applicable law. Where you register a child on the Platform, you confirm that you are the child's legal Parent or Guardian and are authorised to provide consent on the child's behalf where required.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Effective date</p>
          <p className="mt-1 text-sm font-semibold text-primary">29 July 2026</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Document version</p>
          <p className="mt-1 text-sm font-semibold text-primary">1.0</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Issued by</p>
          <p className="mt-1 text-sm font-semibold text-primary">KidMonth Tech Ltd (KidMonth)</p>
        </div>
      </div>,
    ],
    items: null,
  },
];

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
  body: readonly React.ReactNode[];
  items?: readonly string[] | null;
}) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <section id={id} className="scroll-m-24 rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
      >
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">Section</p>
          <h2 className="text-2xl font-black tracking-tight text-primary sm:text-3xl">{title}</h2>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        id={`${id}-content`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[20000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="space-y-4 px-6 pb-6 text-sm leading-7 text-slate-700 sm:px-8 sm:pb-8">
          {body.map((item, index) =>
            typeof item === "string" ? (
              <p key={index}>{item}</p>
            ) : (
              <div key={index}>{item}</div>
            )
          )}
        </div>

        {items && items.length ? (
          <ul className="grid gap-3 px-6 pb-6 sm:grid-cols-2 sm:px-8 sm:pb-8">
            {items.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700 shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
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