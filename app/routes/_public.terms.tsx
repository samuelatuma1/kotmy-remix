import React from "react";

const termsSections = [
  {
    id: "overview",
    title: "Overview",
    body: [
      "KIDMONTH TECH LTD, trading as KidMonth, provides the platform covered by this document.",
      "This page brings together the Terms & Conditions, Contest & Voting Rules, Affiliate Terms, and Partner Agreement that apply to use of the platform.",
      "The governing jurisdiction is the Federal Republic of Nigeria.",
    ],
    items: null
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    body: [
      <div className="space-y-8">
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          These Terms and Conditions ("Terms") govern your access to and use of the KidMonth website, mobile applications, and all related services (collectively, the "Platform"). By accessing, registering for, or using the Platform, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use the Platform. We may update these Terms from time to time, and your continued use of the Platform after any changes take effect constitutes your acceptance of the updated Terms.
        </p>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">1. Introduction</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Welcome to KidMonth, a platform owned and operated by KidMonth Tech Ltd ("KidMonth," "we," "us," or "our"). These Terms govern your access to and use of the KidMonth website, mobile applications, and all related services. By accessing, registering for, or using the Platform, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use the Platform. We may update these Terms from time to time, and your continued use of the Platform after any changes take effect constitutes your acceptance of the updated Terms.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">2. Definitions</h3>
          <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <li><span className="font-semibold text-primary">Platform</span> – the KidMonth mobile app, website, marketplace, and associated services.</li>
            <li><span className="font-semibold text-primary">User</span> – any individual accessing or registering on the Platform, including Parents, Guardians, Partners, and Affiliates.</li>
            <li><span className="font-semibold text-primary">Parent/Guardian</span> – a legally responsible adult registering on behalf of a Child.</li>
            <li><span className="font-semibold text-primary">Child/Contestant</span> – a person aged 0–16 registered by a Parent or Guardian.</li>
            <li><span className="font-semibold text-primary">Partner</span> – a business or individual approved to list products or services on Givaah.</li>
            <li><span className="font-semibold text-primary">Affiliate</span> – an individual who promotes the Platform and earns commission under the KidMonth Affiliate Programme.</li>
            <li><span className="font-semibold text-primary">Givaah</span> – the KidMonth marketplace for goods, vouchers, and Scheduled Gift Orders.</li>
            <li><span className="font-semibold text-primary">Scheduled Gift Orders</span> – pre-ordered gifts placed on behalf of a child, per Clause 9.</li>
            <li><span className="font-semibold text-primary">Voucher</span> – a purchasable digital value token redeemable on Givaah.</li>
            <li><span className="font-semibold text-primary">Voting Credits</span> – credits earned or purchased for voting in KidMonth Contests.</li>
            <li><span className="font-semibold text-primary">Prizeback</span> – a voting mechanic returning a share of a Contestant's votes as earnings.</li>
            <li><span className="font-semibold text-primary">Contest</span> – any talent, recognition, savings, or e-commerce competition hosted on the Platform.</li>
            <li><span className="font-semibold text-primary">NDPR/GDPR</span> – the Nigeria Data Protection Regulation 2019 and, for EEA Users, EU Regulation 2016/679.</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">3. Eligibility & Account Registration</h3>
          <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <p><span className="font-semibold text-primary">3.1</span> The Platform is for use by adults (18+) on behalf of children; by registering you warrant you are 18 or a legally emancipated minor acting per applicable law.</p>
            <p><span className="font-semibold text-primary">3.2</span> A Parent/Guardian registering a Child confirms legal guardianship, provides informed consent for the Child's participation (including in Contests), accepts full responsibility for the Child's account activity, and agrees that transactions run through the registered account – except Prizeback earnings paid to a child's own bank account under Clause 12.</p>
            <p><span className="font-semibold text-primary">3.3</span> Partners and Affiliates register with a valid email and accept the terms in Parts Three/Four; Partners must be registered businesses/sole traders in good standing; KidMonth may verify credentials and approve or reject applications at its discretion.</p>
            <p><span className="font-semibold text-primary">3.4</span> Users are responsible for account credential security; KidMonth is not liable for losses arising from inadequate protection of your account.</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">4. Platform Services</h3>
          <p className="mb-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            KidMonth's core services, which may expand or change over time, include:
          </p>
          <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <li><span className="font-semibold text-primary">Givaah Marketplace</span> – browsing, purchasing, and ordering gifts, products, and vouchers from approved Partners.</li>
            <li><span className="font-semibold text-primary">Scheduled Gift Orders</span> – advance gift scheduling with price locking and Voting Credit allocation.</li>
            <li><span className="font-semibold text-primary">Vouchers</span> – digital value tokens redeemable at any Givaah Partner.</li>
            <li><span className="font-semibold text-primary">Contest & Voting</span> – talent/recognition contests using free, Givaah Voting Credit, and Prizeback voting.</li>
            <li><span className="font-semibold text-primary">Child Financial Literacy & Savings</span> – educational and savings tools.</li>
            <li><span className="font-semibold text-primary">VTU Services</span> – airtime/data top-up, subject to Partner availability.</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Not all services are always available; availability is communicated via the Platform.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">5. User Obligations</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Users agree to: provide accurate, current, complete information; use the Platform only lawfully and per these Terms; not impersonate any person/entity or misrepresent affiliation; not transmit harmful, abusive, harassing, defamatory, or obscene content; not seek unauthorised access to the Platform or its systems; not disrupt or impair the Platform; and comply with applicable law, including Nigerian law, NDPR, and (where applicable) GDPR.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">6. Intellectual Property</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            All Platform content (text, graphics, logos, images, audio, software, etc.) belongs to KidMonth Tech Ltd or its suppliers and is protected under Nigerian and international IP law. Users receive a limited, non-exclusive, non-transferable licence for personal, non-commercial use only; no reproduction, distribution, or transmission is permitted without KidMonth's prior written consent. Content you submit (child profiles, contest entries, reviews) is licensed to KidMonth on a non-exclusive, royalty-free, worldwide basis to operate and promote the Platform, subject to your privacy preferences.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">7. Marketplace – Givaah</h3>
          <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <p><span className="font-semibold text-primary">7.1 Purchase & Payment:</span> Purchases are at the price listed at transaction time; product/service availability is not guaranteed. Full payment is required unless the Post Paid or Scheduled Gift Order feature is used; accepted payment methods are communicated on the Platform.</p>
            <p><span className="font-semibold text-primary">7.2 Partner Responsibility:</span> Partners independently supply Givaah products/services. KidMonth facilitates the marketplace but is not liable for the quality, accuracy, legality, or delivery of Partner listings, except where KidMonth has given an explicit guarantee.</p>
            <p><span className="font-semibold text-primary">7.3 Refunds & Disputes:</span> Refund requests must be raised within 7 days of the expected delivery date. KidMonth mediates in good faith but cannot guarantee refunds for services already rendered; eligibility is assessed case-by-case. KidMonth may suspend or terminate Partners with persistent complaints, delays, or poor quality.</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">8. Vouchers</h3>
          <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <p><span className="font-semibold text-primary">8.1 Purchase & Use:</span> Vouchers may be purchased by Parents, family, or friends. Voting Credits equal to the voucher value are automatically allocated to the purchasing account at purchase, usable to vote for any Contestant in an active Contest. Vouchers (including contest-prize vouchers) are redeemable at any approved Partner within 90 days of issuance/award.</p>
            <p><span className="font-semibold text-primary">8.2 Non-Refundable & Non-Transferable:</span> All voucher purchases are final and non-refundable, and vouchers are non-transferable (no cash exchange except where required by law). Vouchers unredeemed after the 90-day window are forfeited without compensation.</p>
            <p><span className="font-semibold text-primary">8.3 Voting Credits from Vouchers:</span> Credits issued at purchase are automatic and can never be reversed, refunded, or recalled, as they form part of the contest participation framework.</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">9. Scheduled Gift Orders</h3>
          <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <p><span className="font-semibold text-primary">9.1 How They Work:</span> Parents/Guardians may pre-order gifts for children, family, friends, or acquaintances ahead of a target delivery date; on placement, the Platform locks the price and allocates Voting Credits to the purchasing account.</p>
            <p><span className="font-semibold text-primary">9.2 Non-Cancellable & Non-Refundable:</span> Once confirmed, Scheduled Gift Orders cannot be cancelled or refunded, because Voting Credits are immediately allocated and form part of the active contest ecosystem; placing an order is acceptance of this condition.</p>
            <p><span className="font-semibold text-primary">9.3 Price Lock:</span> The price at order placement is locked for the scheduled period; KidMonth/Partners may honour or renegotiate the lock in exceptional cases (e.g., Partner insolvency, product discontinuation), with prompt notice to the User.</p>
            <p><span className="font-semibold text-primary">9.4 Delivery:</span> Delivery timelines are set by the relevant Partner; KidMonth does not guarantee specific dates but will facilitate communication between User and Partner regarding delays.</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">10. VTU (Value Top-Up) Services</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            VTU services (airtime/data top-up) are offered with approved providers, processed in real time, and non-refundable once completed. KidMonth is not liable for delays/failures attributable to third-party networks; Users should verify recipient details before confirming any VTU transaction.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">11. Prohibited Activities</h3>
          <p className="mb-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Strictly prohibited:
          </p>
          <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <li>Creating multiple accounts for unfair contest/voting advantage.</li>
            <li>Using bots, scripts, or automation to generate or manipulate votes.</li>
            <li>Registering a child without parental/guardian knowledge or consent.</li>
            <li>Submitting false or fraudulent contest information.</li>
            <li>Bribing, coercing, or unduly influencing administrators or judges.</li>
            <li>Sharing another user's personal data without authorisation.</li>
            <li>Money laundering, fraud, or other financial crime.</li>
            <li>Uploading illegal, harmful, defamatory, or rights-infringing content.</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Violations may result in account suspension, contest disqualification, forfeiture of credits or earnings, and referral to law enforcement.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">12. Limitation of Liability</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            To the maximum extent permitted by law, KidMonth is not liable for indirect, incidental, special, consequential, or punitive damages; loss of profits, data, or goodwill; the conduct or content of Partners, Affiliates, or other Users; unauthorised access to or alteration of your data; or Platform failures from events beyond KidMonth's reasonable control (e.g., acts of God, internet outages, government action). Where liability cannot be excluded under applicable law, it is limited to amounts you paid KidMonth in the preceding 12 months.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">13. Governing Law & Dispute Resolution</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            These Terms are governed by the laws of the Federal Republic of Nigeria; EU consumer protection provisions additionally apply to EEA-based Users. Disputes are first subject to good-faith negotiation; if unresolved within 30 days, they proceed to mediation under Lagos Court of Arbitration rules (unless otherwise agreed). Either party may still seek emergency injunctive relief from a competent court.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">14. Termination</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            KidMonth may suspend or terminate any account at its sole discretion, including for fraud, breach of these Terms, or harmful conduct; credits, earnings, or orders obtained in violation of these Terms may be forfeited on termination. Users may terminate at any time via kidmonthyearltd@gmail.com; termination does not entitle you to refunds on non-refundable purchases.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">15. Amendments</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            KidMonth may amend these Terms at any time; material changes are notified via email or in-app at least 14 days before taking effect. Continued use after the effective date of an amendment constitutes acceptance.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">16. Severability</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            If any provision is found unenforceable or invalid, it will be modified to the minimum extent necessary to be enforceable, with the remaining provisions continuing in full force.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">17. Entire Agreement</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            These Terms, together with the Privacy Policy, Partner Agreement, Affiliate Terms, and Contest & Voting Rules, constitute the entire agreement between you and KidMonth regarding Platform use, superseding all prior agreements, understandings, or representations.
          </p>
        </div>
      </div>,
    ],
    items: null,
  },
  {
    id: "partner",
    title: "Partner Agreement",
    body: [
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-base font-bold text-primary">1. Introduction</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            This Agreement governs the relationship between KidMonth and any Partner approved to list products/services on Givaah, in addition to the general Terms. Partners are integral to KidMonth's trusted, high-quality marketplace and are subject to the standards below.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">2. Partner Eligibility & Onboarding</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Partners must be a registered business, sole trader, or legally recognised entity in good standing, and must complete registration with accurate business information. KidMonth may approve or reject any application at its absolute discretion.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">3. Partner Obligations</h3>
          <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <li>Ensure listings are accurately described, legally compliant, and of merchantable quality.</li>
            <li>Fulfil orders in a timely manner per communicated delivery timelines.</li>
            <li>Maintain adequate stock or service capacity for listed offerings.</li>
            <li>Comply with applicable Nigerian law, including consumer protection, tax, and licensing requirements.</li>
            <li>Treat all customers – including children and their Parents/Guardians – with courtesy and professionalism.</li>
            <li>Not sell counterfeit, illegal, or age-inappropriate goods.</li>
            <li>Promptly notify KidMonth of changes in availability, pricing, or business status.</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">4. Fees & Commission</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Fees, commissions, and revenue-sharing are agreed during Partner onboarding and documented in the Partner's onboarding agreement; changes require mutual written agreement. KidMonth may revise the general commission structure with 30 days' written notice.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">5. Voucher Redemption</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Partners must honour all valid vouchers presented within the 90-day redemption window as a core condition of participation; failing to honour vouchers without justifiable cause is grounds for suspension.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">6. Content & Listings</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Partners are responsible for the accuracy and legality of submitted listing content (descriptions, pricing, photographs, promotional materials). KidMonth may edit, remove, or reject listings that fail Platform standards or are inappropriate for its child-focused audience.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">7. Suspension & Termination</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            KidMonth may suspend or terminate a Partner's access immediately and without notice for: fraud, misrepresentation, or deception; persistent delayed/non-delivery; consistently poor-quality or non-compliant goods; legal or regulatory violations; conduct damaging the KidMonth brand; repeated unresolved complaints; or failure to honour valid vouchers. Listings are removed on termination, and outstanding financial obligations must be settled within 30 days.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">8. Intellectual Property</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            By submitting content (logos, images, descriptions, etc.), the Partner grants KidMonth a non-exclusive, royalty-free licence to display and use it on the Platform and in related promotional materials for the duration of the relationship.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">9. Liability</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Partners indemnify and hold harmless KidMonth Tech Ltd against claims, liabilities, damages, and expenses (including legal fees) arising from their breach of this Agreement, listings, or conduct. KidMonth is not liable for a Partner's loss of business, revenue, or reputation from Platform downtime, technical issues, or feature changes made with reasonable notice.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">10. Confidentiality</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Partners must keep confidential all proprietary information, pricing structures, and business processes shared by KidMonth; this obligation survives termination for two (2) years.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">11. Governing Law</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            This Agreement is governed by Nigerian law; disputes are resolved per Clause 13 of Part One.
          </p>
        </div>
      </div>,
    ],
    items: null,
  },
  {
    id: "contest-rules",
    title: "Contest & Voting Rules",
    body: [
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-base font-bold text-primary">1. Overview</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            KidMonth hosts talent discovery, recognition, savings, e-commerce, and engagement contests for children, teenagers, and adults ("Contests"), designed to celebrate talent and create development opportunities. Each Contest may carry its own specific rules communicated before opening; the rules in this Part apply to all Contests unless stated otherwise.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">2. Eligibility for Entry</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Contestants must apply in the correct age category at registration; only a Parent/Guardian may register a Child; a Partner or Affiliate registering a child must obtain and, on request, evidence prior written parental/guardian consent; a Child may not be entered in more than one active Contest unless expressly permitted; entry constitutes acceptance of these Rules and the general Terms.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">3. Contest Stages</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Contests run in stages, typically Stage 1 through 3 (occasionally extending to Stage 4 at KidMonth's discretion). Advancement and winners are determined by each Contestant's total weighted vote score on the leaderboard at each stage's close; the highest score wins. Each voting mechanic – KidMonth Free Voting, Givaah Voting Credits, and Prizeback Voting – carries its own weighted contribution, communicated in the Contest briefing or on the leaderboard. Each stage carries a minimum vote target, communicated at that stage's start; Contestants missing the target are liable to eviction regardless of absolute vote count, and it is the Parent/Guardian/support network's responsibility to help the Contestant meet it.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">4. Prizes</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Each Contest has its own published prize structure, which may include Givaah shopping vouchers, cash prizes, ambassadorial recognition, talent exposure (media features, brand collaborations, showcases), or scholarship contributions. Prizes are funded by KidMonth, Partner Vendors, and sponsors; no specific value is guaranteed until officially communicated, and KidMonth may substitute a prize of equal or greater value if the original becomes unavailable. Prize vouchers must be redeemed within 90 days of award or are forfeited.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">5. Voting Mechanics</h3>
          <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <p><span className="font-semibold text-primary">5.1 KidMonth Free Voting</span> – available to registered users only. Version 1: one free vote per Contestant per stage. Version 2: one free vote per Contestant per day throughout the active stage, plus Rewarded Ad Voting for extra free votes by watching designated ads (mechanics to be communicated at launch). Free votes cannot be purchased, transferred, or carried across stages.</p>
            <p><span className="font-semibold text-primary">5.2 Givaah Voting Credits</span> – earned through Givaah purchases, including vouchers and Scheduled Gift Orders; allocated automatically on purchase confirmation and irreversible. Open to the public without registration; no limit on Credits applied to a single Contestant. Unused Credits expire at the close of the relevant Contest unless stated otherwise.</p>
            <p><span className="font-semibold text-primary">5.3 Prizeback Voting</span> – a paid mechanic open to the public; no limit on votes cast per Contestant. Fifty percent (50%) of the value of Prizeback votes received is credited as Contestant earnings; the remaining 50% is KidMonth operational revenue. Prizeback is a participation-income feature: the more votes a Contestant receives, the greater their earnings.</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">6. Prizeback Earnings – Disbursement & Rules</h3>
          <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <p><span className="font-semibold text-primary">6.1 Ownership:</span> All Prizeback earnings belong to the Contestant, intended to support the child's upkeep and educational/scholarship future.</p>
            <p><span className="font-semibold text-primary">6.2 Payment:</span> Earnings are ordinarily disbursed weekly to the Contestant's registered bank account (or, where required by law or the receiving institution, a parent/guardian's account). Without a valid payout account, earnings remain pending for up to 90 days, and payouts may be suspended until valid details are provided.</p>
            <p><span className="font-semibold text-primary">6.3 Minimum Withdrawal:</span> The minimum payout is NGN 10,000; amounts below this threshold in a given week accumulate to a subsequent payout cycle.</p>
            <p><span className="font-semibold text-primary">6.4 Parent/Guardian Oversight:</span> Parents/Guardians retain full visibility of the child's earning activity and are encouraged to guide fund management for the child's benefit.</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">7. Voting Integrity & Anti-Fraud</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Fraudulent voting – bots, automated scripts, VPN manipulation, or multiple accounts – results in immediate Contestant disqualification and possible legal action. KidMonth may audit voting activity and disqualify fraudulent votes, voiding associated credits without refund. KidMonth's voting-integrity decisions are final.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">8. Disqualification & Exclusion</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            KidMonth may, at its absolute discretion, disqualify a Contestant or revoke votes where there is fraudulent/manipulative conduct, a rules or Terms violation, evidence of missing parental consent, or false/misleading/inappropriate profile content. Disqualification decisions are final, with no refunds for votes cast for a disqualified Contestant.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">9. Image & Content Rights</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Entering a Child into a Contest grants KidMonth a worldwide, non-exclusive, royalty-free, perpetual, irrevocable licence to use the child's name, image, photographs, videos, and contest content for the Contest, the Platform, and KidMonth's promotional/marketing activities – excluding third-party commercial advertising or endorsement without separate written consent where legally required.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">10. General Contest Conditions</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            KidMonth may cancel, postpone, or modify any Contest due to unforeseen circumstances, insufficient entries, or technical issues, communicating clearly with affected participants and making reasonable efforts to honour accumulated credits or offer alternatives. Results are final once announced; queries must be raised within 7 days. KidMonth administrators and their immediate family are ineligible to participate as Contestants.
          </p>
        </div>
      </div>,
    ],
    items: null,
  },
  {
    id: "affiliate",
    title: "Affiliate Terms",
    body: [
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-base font-bold text-primary">1. Introduction</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            The KidMonth Affiliate Programme lets individuals earn income by promoting the Platform, onboarding new Users, and introducing new Partners. Any individual may apply to become an Affiliate and, by doing so, agrees to these Affiliate Terms in addition to the general Terms. The Programme is performance-driven, rewarding Affiliates with both upfront sign-up earnings and ongoing activity-based commissions. Every registered User automatically becomes an Affiliate with a unique referral code; referred Users/Partners should enter this code at registration for the Affiliate to receive credit and qualify for commissions/rewards.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">2. Affiliate Registration</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Any individual may apply via the Platform registration process, providing accurate personal information and agreeing to these Terms. KidMonth may accept or reject applications at its discretion; an Affiliate may not register multiple accounts to circumvent earnings thresholds.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">3. Earnings Structure</h3>
          <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <p><span className="font-semibold text-primary">3.1 Sign-Up Earnings:</span> NGN 500 per User successfully onboarded, payable once the referred User reaches NGN 10,000 in cumulative purchases (excluding VTU); NGN 1,000 per Partner successfully onboarded, payable once the referred Partner reaches NGN 20,000 in cumulative sales.</p>
            <p><span className="font-semibold text-primary">3.2 Activity Earnings:</span> an uncapped, ongoing 0.5% commission on all purchases by referred Users and all sales by referred Partners (NGN 50 per NGN 10,000, excluding VTU) – a continuous income stream that grows with network activity.</p>
            <p><span className="font-semibold text-primary">3.3 Payment:</span> earnings are calculated and paid per KidMonth's published payment schedule, subject to the threshold conditions in Clause 3.1.</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">4. Affiliate Obligations</h3>
          <ul className="space-y-2 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            <li>Share your unique referral code so referrals are correctly linked to your account.</li>
            <li>Promote KidMonth honestly, accurately, and consistently with the brand.</li>
            <li>Make no false, misleading, or exaggerated claims about the Platform or earning potential.</li>
            <li>Direct all promotion at adults (Parents, Guardians, potential Partners) – never target or solicit children.</li>
            <li>Do not spam, harass, or send unsolicited bulk communications.</li>
            <li>Disclose your affiliate relationship per applicable advertising standards.</li>
            <li>Comply with all applicable laws, including tax obligations on your earnings.</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">5. Prohibited Conduct</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Creating fake User/Partner accounts to generate artificial commissions; misrepresenting the Platform's features, guarantees, or earning potential; circumventing referral tracking; unauthorised use of the KidMonth brand or logo; and any fraud, harassment, or conduct damaging KidMonth's reputation are all prohibited.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">6. Suspension & Termination</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            KidMonth may suspend or terminate Affiliate participation at any time, with or without notice, for fraud or unethical conduct, violation of these Terms, reputational harm, or inactivity exceeding six (6) consecutive months. On termination, unpaid earnings meeting all threshold conditions are settled within 30 days; earnings not meeting thresholds are forfeited.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">7. Growth, Advancement & Affiliate Prizes</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Affiliate performance is tracked on the KidMonth Affiliate Leaderboard, ranking Affiliates by onboarding activity and referral-network performance. Top-ranking Affiliates are eligible for periodic prizes (cash rewards, vouchers, exclusive recognition, and other benefits) tied to leaderboard standing, plus advanced tier recognition, priority opportunities as the Platform expands, and other benefits communicated by KidMonth from time to time.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">8. Intellectual Property</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Affiliates receive a limited, non-exclusive, revocable licence to use KidMonth-approved marketing materials and branding solely to promote the Platform; no other use of KidMonth IP is permitted without express written consent.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">9. Confidentiality</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            Affiliates must keep confidential all proprietary information shared in connection with the Programme, including commission structures, Platform strategies, and user data, both during participation and for two (2) years after it ends.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary">10. Governing Law</h3>
          <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
            These Affiliate Terms are governed by Nigerian law; disputes are resolved per Clause 13 of Part One.
          </p>
        </div>
      </div>,
    ],
    items: null,
  },
  {
    id: "acceptance",
    title: "Acceptance & Acknowledgement",
    body: [
      <div className="space-y-6">
        <p className="text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          By accessing, registering on, or using the KidMonth Platform in any capacity – as a User, Parent, Guardian, Partner, or Affiliate – you confirm that:
        </p>
        <ul className="space-y-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
          <li>You have read, understood, and agree to be legally bound by this document, including the Terms & Conditions, Contest & Voting Rules, Partner Agreement (where applicable), and Affiliate Terms (where applicable);</li>
          <li>You are at least 18 years of age, or a duly authorised representative of a business entity with legal authority to enter this agreement;</li>
          <li>Where you register a child, you are their legal Parent or Guardian and provide informed consent for their participation;</li>
          <li>You acknowledge that Scheduled Gift Orders, Voucher purchases, and Prizeback votes are non-refundable and non-cancellable once confirmed.</li>
        </ul>
        
      </div>,
    ],
    items: null
  },
];

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
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start lg:order-2">
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
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(section.id);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                        window.history.pushState(null, "", `#${section.id}`);
                      }
                    }}
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

          <article className="space-y-6 lg:order-1">
            <header className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Legal documentation</p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-5xl">Terms, agreements, and rules</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
                This document governs all use of the KidMonth platform, including the Givaah marketplace, all contest and voting mechanics, Partner listings, and Affiliate participation. By accessing or using any KidMonth service, you agree to be bound by the terms set out herein.
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

            {termsSections.map(ts =>
              <SectionCard key={ts.id} id={ts.id} title={ts.title} body={ts.body} items={ts.items} />
            )}

          </article>
        </div>
      </div>
    </main>
  );
}