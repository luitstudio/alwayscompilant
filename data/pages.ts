export const serviceDirectory = [
  {
    title: "GST Registration",
    description: "End-to-end GST setup with document review and expert guidance.",
    icon: "/assets/img/always-compliant/always-compliant-gst-registration.svg",
  },
  {
    title: "GST Filing",
    description: "Return preparation, reconciliation and due-date aligned filing support.",
    icon: "/assets/img/always-compliant/always-compliant-gst-filing.svg",
  },
  {
    title: "ROC Filing",
    description: "Annual forms, statutory records and company law compliance coordination.",
    icon: "/assets/img/always-compliant/always-compliant-roc-filing.svg",
  },
  {
    title: "Company Registration",
    description: "Incorporation guidance, name approval support and post-registration compliance.",
    icon: "/assets/img/always-compliant/always-compliant-registration-flow.svg",
  },
  {
    title: "LLP Registration",
    description: "Partner documentation, name checks and incorporation filing assistance.",
    icon: "/assets/img/always-compliant/brand-registration.svg",
  },
  {
    title: "Trademark Registration",
    description: "Search, class guidance and application follow-up for your brand identity.",
    icon: "/assets/img/always-compliant/brand-trademark.svg",
  },
  {
    title: "Income Tax Filing",
    description: "ITR review and filing support for individuals, professionals and businesses.",
    icon: "/assets/img/always-compliant/always-compliant-tax-support.svg",
  },
  {
    title: "MSME Registration",
    description: "Eligibility review and registration support for growing businesses.",
    icon: "/assets/img/always-compliant/industry-msme.svg",
  },
  {
    title: "Business Compliance",
    description: "Recurring compliance tracking, reminders and practical advisory support.",
    icon: "/assets/img/always-compliant/always-compliant-expertise-deadline.svg",
  },
] as const;

export const contactServices = [...serviceDirectory.map(({ title }) => title), "Other"] as const;

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
