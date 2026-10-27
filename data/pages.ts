export type ServiceCategory = "Start and register" | "File and maintain" | "Protect and organize";

export type ServiceDetail = {
  slug: string;
  title: string;
  category: ServiceCategory;
  description: string;
  icon: string;
  overview: string;
  whoNeedsIt: readonly string[];
  engagementIncludes: readonly string[];
  informationNeeded: readonly string[];
  process: readonly [string, string][];
  questions: readonly [string, string][];
};

export const serviceDirectory: readonly ServiceDetail[] = [
  {
    slug: "gst-registration",
    title: "GST Registration",
    category: "Start and register",
    description: "End-to-end GST setup with document review and expert guidance.",
    icon: "/assets/img/always-compliant/always-compliant-gst-registration.svg",
    overview:
      "GST registration support helps a business understand whether registration is relevant, prepare the right information and proceed with a cleaner application.",
    whoNeedsIt: [
      "Businesses reviewing GST applicability based on activity, turnover, location or customer requirements.",
      "New entities that want GST registration planned alongside incorporation, bank and invoicing setup.",
      "Operators that need help collecting promoter, address and business details before applying.",
    ],
    engagementIncludes: [
      "Applicability discussion based on your business profile.",
      "Document checklist and review before application preparation.",
      "Application preparation support and practical follow-up on queries or clarification requests.",
    ],
    informationNeeded: [
      "PAN, identity and address details for promoters or owners.",
      "Principal place of business details and supporting address documents.",
      "Business activity, constitution type, bank details and contact information.",
    ],
    process: [
      ["Confirm the registration context", "We first understand the business activity, structure and reason for registration."],
      ["Prepare the document file", "You receive a checklist so identity, address and business proofs can be reviewed before filing."],
      ["Coordinate the application", "The application is prepared with the available information and tracked through the next practical step."],
    ],
    questions: [
      ["Does every business need GST registration?", "No. GST registration depends on business activity, turnover, location, type of supply and other applicable conditions."],
      ["Can GST be planned before starting sales?", "Yes. Many businesses review GST requirements while setting up invoicing, bank details and customer onboarding."],
      ["Do you guarantee approval?", "No. We support preparation and coordination. Final processing depends on the applicable portal and authority review."],
    ],
  },
  {
    slug: "gst-filing",
    title: "GST Filing",
    category: "File and maintain",
    description: "Return preparation, reconciliation and due-date aligned filing support.",
    icon: "/assets/img/always-compliant/always-compliant-gst-filing.svg",
    overview:
      "GST filing support helps businesses organize sales, purchase and tax information before returns are prepared and reviewed.",
    whoNeedsIt: [
      "Registered businesses that need recurring return preparation and filing coordination.",
      "Teams that want sales and purchase records reviewed before submission.",
      "Businesses that need clearer document discipline around GST return cycles.",
    ],
    engagementIncludes: [
      "Review of shared GST records and filing context.",
      "Preparation support for applicable returns within the agreed scope.",
      "Practical reminders, query support and review steps before submission.",
    ],
    informationNeeded: [
      "Sales invoices, purchase records and credit or debit notes where relevant.",
      "GST portal access or authorization details as applicable.",
      "Payment, reconciliation and previous filing information where needed.",
    ],
    process: [
      ["Collect the records", "Sales, purchase and adjustment records are gathered before return preparation begins."],
      ["Review and reconcile", "Available details are checked for obvious gaps and questions are clarified."],
      ["Prepare and coordinate filing", "The return is prepared and the next filing step is coordinated after review."],
    ],
    questions: [
      ["What records should be prepared before GST filing?", "Sales records, purchase records, GST portal details and relevant adjustment information should be organized before preparation."],
      ["Can filing frequency vary?", "Yes. Filing requirements can vary by registration profile and applicable return category."],
      ["Can you help if earlier records are incomplete?", "We can help identify gaps and plan the next practical step, but missing records may affect preparation timelines."],
    ],
  },
  {
    slug: "roc-filing",
    title: "ROC Filing",
    category: "File and maintain",
    description: "Annual forms, statutory records and company law compliance coordination.",
    icon: "/assets/img/always-compliant/always-compliant-roc-filing.svg",
    overview:
      "ROC filing support helps companies and LLPs organize annual or event-based compliance requirements with clearer documents, owners and review steps.",
    whoNeedsIt: [
      "Companies and LLPs preparing annual compliance or event-based filings.",
      "Business owners who need help understanding what records are required after incorporation.",
      "Teams that want reminders and document coordination before filing pressure builds.",
    ],
    engagementIncludes: [
      "Review of the entity profile and filing context.",
      "Document checklist for applicable annual or event-based compliance.",
      "Preparation coordination, filing support and status communication within agreed scope.",
    ],
    informationNeeded: [
      "Entity details, incorporation records and authorized signatory information.",
      "Financial statements, statutory records or event documents where applicable.",
      "MCA access or authorization details as needed for the engagement.",
    ],
    process: [
      ["Map the obligation", "We identify whether the requirement is annual, event-based or document-led."],
      ["Organize records", "The entity records and supporting documents are prepared for review."],
      ["Coordinate filing", "The applicable form or compliance step is prepared and tracked through completion."],
    ],
    questions: [
      ["Is ROC compliance needed after registration?", "Yes. Companies and LLPs may have recurring and event-based statutory compliance requirements after formation."],
      ["Can ROC filings be handled together with tax support?", "Yes. The service can be coordinated with income-tax or accounting preparation where the scope requires it."],
      ["What if past filings are pending?", "Pending matters should be reviewed before quoting timing or scope because older gaps can affect the next step."],
    ],
  },
  {
    slug: "company-registration",
    title: "Company Registration",
    category: "Start and register",
    description: "Incorporation guidance, name approval support and post-registration compliance.",
    icon: "/assets/img/always-compliant/always-compliant-registration-flow.svg",
    overview:
      "Company registration support helps founders organize proposed names, director details and registered-office documents before incorporation work begins.",
    whoNeedsIt: [
      "Founders considering a private limited company for a structured business setup.",
      "Businesses that want incorporation planned alongside GST, tax and post-registration compliance.",
      "Promoters who need a clear document list before proceeding.",
    ],
    engagementIncludes: [
      "Entity setup discussion and name-preparation guidance.",
      "Director, shareholder and registered-office document checklist.",
      "Incorporation filing coordination and post-registration next-step guidance.",
    ],
    informationNeeded: [
      "Proposed company names and business activity details.",
      "Director and shareholder identity, address and contact details.",
      "Registered-office proof and related owner or occupancy documents.",
    ],
    process: [
      ["Clarify the setup", "The proposed activity, ownership and registered-office context are discussed first."],
      ["Prepare name and documents", "Names, promoter information and office documents are organized before filing."],
      ["Coordinate incorporation", "The filing process is supported and post-registration obligations are explained."],
    ],
    questions: [
      ["Can you advise whether a company is the right structure?", "We can discuss practical setup considerations, but final structure decisions should consider your ownership, tax and legal context."],
      ["Are post-registration steps included?", "Post-registration guidance can be included in scope so GST, tax and statutory requirements are not left vague."],
      ["Can registration timelines be guaranteed?", "No. Timelines can depend on document readiness, name availability and portal or authority processing."],
    ],
  },
  {
    slug: "llp-registration",
    title: "LLP Registration",
    category: "Start and register",
    description: "Partner documentation, name checks and incorporation filing assistance.",
    icon: "/assets/img/always-compliant/brand-registration.svg",
    overview:
      "LLP registration support helps partners prepare the setup, documents and post-registration compliance path for a limited liability partnership.",
    whoNeedsIt: [
      "Professional or service businesses considering a partner-led structure.",
      "Founders who want limited liability with a partnership-style operating model.",
      "Partners who need support organizing documents before incorporation.",
    ],
    engagementIncludes: [
      "LLP setup discussion and name-preparation guidance.",
      "Designated partner and registered-office document checklist.",
      "Filing coordination and next-step compliance guidance.",
    ],
    informationNeeded: [
      "Proposed LLP names and business activity details.",
      "Partner and designated partner identity, address and contact details.",
      "Registered-office proof and related documents.",
    ],
    process: [
      ["Review the partnership context", "Partner roles, proposed activity and registered-office details are gathered."],
      ["Prepare the filing file", "Names and partner documents are organized for application preparation."],
      ["Support registration steps", "The application is coordinated and post-registration obligations are explained."],
    ],
    questions: [
      ["Who may prefer an LLP?", "An LLP may suit partner-led professional or service businesses, depending on ownership and operating needs."],
      ["Do LLPs have ongoing compliance?", "Yes. LLPs can have recurring filing and record requirements after registration."],
      ["Can you help compare LLP and company registration?", "We can explain practical differences and document requirements so you can discuss the right structure with your advisor."],
    ],
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    category: "Protect and organize",
    description: "Search, class guidance and application follow-up for your brand identity.",
    icon: "/assets/img/always-compliant/brand-trademark.svg",
    overview:
      "Trademark registration support helps a business prepare a brand protection filing with clearer ownership details, class selection and application follow-up.",
    whoNeedsIt: [
      "Businesses that want to protect a name, logo, product mark or service identity.",
      "Founders launching a brand and checking whether trademark filing should be part of setup.",
      "Operators who need help preparing applicant details and mark information.",
    ],
    engagementIncludes: [
      "Basic mark and class discussion before application preparation.",
      "Document checklist for applicant and brand details.",
      "Application preparation support and practical follow-up on filing status.",
    ],
    informationNeeded: [
      "Brand name, logo or mark details proposed for filing.",
      "Applicant identity, address and business information.",
      "Goods or services connected with the proposed mark.",
    ],
    process: [
      ["Understand the mark", "We review what you want to protect and how it is used in business."],
      ["Prepare applicant details", "Applicant, class and mark information are organized before filing."],
      ["Coordinate application", "The application is prepared and follow-up steps are explained after filing."],
    ],
    questions: [
      ["Can trademark registration be guaranteed?", "No. Availability, examination and objections depend on the registry process and the facts of the mark."],
      ["Can a logo and name both be filed?", "They may be handled separately depending on the protection strategy and mark format."],
      ["When should a new brand consider trademark filing?", "It is useful to review trademark planning before significant public launch, packaging or marketing investment."],
    ],
  },
  {
    slug: "income-tax-filing",
    title: "Income Tax Filing",
    category: "File and maintain",
    description: "ITR review and filing support for individuals, professionals and businesses.",
    icon: "/assets/img/always-compliant/always-compliant-tax-support.svg",
    overview:
      "Income-tax filing support helps individuals, professionals and businesses bring income records, deductions and supporting documents together before return preparation.",
    whoNeedsIt: [
      "Individuals or professionals preparing annual income-tax returns.",
      "Business owners who need income, deduction and supporting records reviewed before filing.",
      "Taxpayers with multiple income sources who want a clearer preparation process.",
    ],
    engagementIncludes: [
      "Review of income sources and filing context.",
      "Checklist for income, deduction, tax payment and supporting records.",
      "Return preparation support and review before filing within agreed scope.",
    ],
    informationNeeded: [
      "Income records, Form 16 where applicable and business or professional income details.",
      "Deduction, investment, tax payment and bank information where relevant.",
      "Previous return details or portal access where needed.",
    ],
    process: [
      ["Collect income details", "Income sources and supporting records are gathered first."],
      ["Review deductions and tax data", "Available deductions, tax credits and payment information are organized."],
      ["Prepare and review return", "The return is prepared for review before the final filing step."],
    ],
    questions: [
      ["Can business owners use this service?", "Yes. Business owners and professionals can use the service after sharing income and supporting records."],
      ["Do you advise on deductions?", "We can help review commonly relevant deduction information based on documents shared, within the agreed scope."],
      ["Can missing documents delay filing?", "Yes. Missing income or tax records can affect accuracy and timing."],
    ],
  },
  {
    slug: "msme-registration",
    title: "MSME Registration",
    category: "Start and register",
    description: "Eligibility review and registration support for growing businesses.",
    icon: "/assets/img/always-compliant/industry-msme.svg",
    overview:
      "MSME registration support helps eligible businesses review basic details, prepare information and complete registration with a clearer record trail.",
    whoNeedsIt: [
      "Small and growing businesses reviewing whether MSME registration is relevant.",
      "Entrepreneurs who want Udyam registration aligned with business identity and tax records.",
      "Existing operators who need help organizing business details before applying.",
    ],
    engagementIncludes: [
      "Eligibility and business-detail discussion before application.",
      "Information checklist for owner and enterprise details.",
      "Application coordination and record guidance after registration.",
    ],
    informationNeeded: [
      "Owner or promoter identity and contact details.",
      "Enterprise name, activity and business address information.",
      "PAN, Aadhaar and related business details where applicable.",
    ],
    process: [
      ["Review basic eligibility", "We understand the business profile and registration reason first."],
      ["Prepare enterprise details", "Owner, activity and business information are organized."],
      ["Coordinate registration", "The application is supported and registration records are shared for safekeeping."],
    ],
    questions: [
      ["Is MSME registration suitable for every business?", "Suitability depends on the business profile and applicable MSME criteria."],
      ["Can MSME registration be done for an existing business?", "Yes, existing eligible businesses can review and apply with the relevant details."],
      ["Does MSME registration replace GST or tax filing?", "No. It is separate from GST, income-tax and other recurring compliance requirements."],
    ],
  },
  {
    slug: "business-compliance",
    title: "Business Compliance",
    category: "Protect and organize",
    description: "Recurring compliance tracking, reminders and practical advisory support.",
    icon: "/assets/img/always-compliant/always-compliant-expertise-deadline.svg",
    overview:
      "Business compliance support gives growing businesses a practical way to track recurring filings, document owners and next steps across GST, ROC, tax and registrations.",
    whoNeedsIt: [
      "Businesses that want one coordinated view of recurring compliance requirements.",
      "Owners who need help understanding what changes after registration or growth.",
      "Teams that want reminders, checklists and filing coordination without inflated claims.",
    ],
    engagementIncludes: [
      "Review of active registrations, entity type and recurring obligations.",
      "Compliance calendar planning and document checklist support.",
      "Coordination across GST, ROC, tax, registration and related advisory tasks.",
    ],
    informationNeeded: [
      "Entity type, registrations and previous filing context.",
      "Upcoming business changes, notices or pending requirements where relevant.",
      "Contact person and document owner details for recurring work.",
    ],
    process: [
      ["Map the compliance profile", "We identify the entity, active registrations and recurring obligations."],
      ["Build a working checklist", "Documents, owners and expected preparation steps are organized."],
      ["Coordinate recurring support", "Filing and advisory tasks are handled through clear updates and agreed scope."],
    ],
    questions: [
      ["Can one desk coordinate multiple compliance areas?", "Yes. GST, ROC, tax and registration tasks can be coordinated through one compliance context."],
      ["Is this a software subscription?", "No. Always Compliant provides professional assistance and coordination, not a software subscription."],
      ["Can you handle pending gaps?", "Pending gaps can be reviewed, but scope and timing depend on the records, filings and facts involved."],
    ],
  },
] as const;

export const serviceGroups: readonly { title: ServiceCategory; description: string; services: readonly ServiceDetail[] }[] = [
  {
    title: "Start and register",
    description: "For founders and operators preparing the legal and tax identity of a business.",
    services: serviceDirectory.filter((service) => service.category === "Start and register"),
  },
  {
    title: "File and maintain",
    description: "For businesses that need recurring returns, filings and review-ready records.",
    services: serviceDirectory.filter((service) => service.category === "File and maintain"),
  },
  {
    title: "Protect and organize",
    description: "For brand protection and coordinated compliance planning as the business grows.",
    services: serviceDirectory.filter((service) => service.category === "Protect and organize"),
  },
] as const;

export const featuredServiceLinks = [
  "GST Filing",
  "Company Registration",
  "ROC Filing",
  "Trademark Registration",
  "Income Tax Filing",
] as const;

export const contactServices = [...serviceDirectory.map(({ title }) => title), "Other"] as const;

export function servicePath(slug: string) {
  return `/services/${slug}`;
}

export function findService(slug: string) {
  return serviceDirectory.find((service) => service.slug === slug);
}

export const insightArticles = [
  {
    category: "GST",
    title: "What to prepare before your next GST filing",
    summary:
      "A practical review of the records, reconciliation checks and filing dates that help make return preparation smoother.",
    points: ["Gather sales and purchase documents", "Reconcile records before preparation", "Confirm the filing deadline", "Review the return before submission"],
  },
  {
    category: "ROC",
    title: "Why ROC due dates should never be left to memory",
    summary:
      "Annual filings and statutory obligations need a visible calendar so teams can prepare records early and reduce penalty risk.",
    points: ["Map annual filing obligations", "Track deadlines centrally", "Prepare statutory records", "Review before the due date"],
  },
  {
    category: "TRADEMARK",
    title: "When should a business protect its trademark?",
    summary:
      "Brand protection is easier to plan when search, class selection and filing are considered alongside business growth.",
    points: ["Identify the mark to protect", "Run an availability search", "Choose the relevant class", "Track the application after filing"],
  },
  {
    category: "REGISTRATION",
    title: "A clearer way to prepare for company registration",
    summary:
      "A confirmed name plan, director details and registered-office documents can prevent avoidable back-and-forth during incorporation.",
    points: ["Prepare proposed names", "Confirm director documents", "Organize address proofs", "Plan post-registration filings"],
  },
  {
    category: "TAX",
    title: "What makes an income-tax filing review-ready?",
    summary:
      "Income records, deductions and supporting documents should be brought together before return preparation begins.",
    points: ["Consolidate income records", "Review eligible deductions", "Match supporting documents", "Resolve gaps before filing"],
  },
  {
    category: "ONGOING COMPLIANCE",
    title: "Build a compliance calendar your team can actually use",
    summary:
      "A practical calendar connects each obligation to its owner, documents and lead time instead of recording only a due date.",
    points: ["List recurring obligations", "Assign clear ownership", "Add document lead times", "Review status consistently"],
  },
] as const;
