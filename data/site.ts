export const siteUrl = "https://alwayscompliant.in";

export const siteContent = {
  brand: "ALWAYS COMPLIANT",
  phoneDisplay: "+91 9864309838",
  phoneHref: "tel:+919864309838",
  email: "info@alwayscompliant.in",
  whatsappHref: "https://wa.me/919864309838",
  hero: {
    eyebrow: "GST & ROC Experts",
    heading: "Stay Compliant.<br>Grow With Confidence.",
    description:
      "Expert-led tax, registration and statutory compliance support for startups, MSMEs and growing businesses that want clarity before every filing.",
    primaryCta: "Book Consultation",
    secondaryCta: "WhatsApp Inquiry",
  },
  problems: {
    heading: "We know compliance feels difficult when filings move without warning.",
    cards: [
      {
        title: "Deadline Pressure",
        items: ["Missed due dates", "Penalty and notice risk", "No single point of contact"],
      },
      {
        title: "Unclear Costs",
        items: ["Unclear professional fees", "Incomplete documentation", "Missed due dates"],
      },
      {
        title: "Fragmented Support",
        items: ["No single point of contact", "Incomplete documentation", "Penalty and notice risk"],
      },
    ],
  },
  solutions: {
    heading: "Why Businesses Choose Always Compliant",
    cards: [
      ["Deadline-Aware Execution", "Dedicated compliance support from inquiry to filing closure."],
      ["Transparent Scope & Pricing", "Know the required work, applicable fees and expected timeline before filing."],
      ["Practical Regulatory Expertise", "GST, ROC, tax and registration guidance grounded in real filing requirements."],
      ["Clear Guidance at Every Step", "A dedicated point of contact keeps documents, deadlines and updates organized."],
    ],
  },
  services: {
    heading: "Services Built for Compliance",
    cards: [
      ["GST Registration", "End-to-end GST setup with document review and expert guidance."],
      ["GST Filing", "Return preparation, reconciliation and due-date aligned filing support."],
      ["ROC Filing", "Annual forms, statutory records and company law compliance coordination."],
      ["Company & LLP Registration", "Incorporation, name approval and partner or director documentation support."],
      ["Trademark, Tax & MSME Support", "Trademark, income tax, MSME registration and recurring business compliance guidance."],
    ],
  },
  workflow: {
    heading: "Get Started With Always Compliant",
    steps: [
      ["Share Your Requirement", "Tell us what you need help with — registration, filing, tax or ongoing compliance."],
      ["Get Your Compliance Plan", "We confirm the required documents, scope, timeline and applicable fees."],
      [
        "We Handle the Filing",
        "Our team coordinates documentation, preparation and filing. Receive clear updates and support through filing closure.",
      ],
    ],
  },
  industries:
    "Startups · MSMEs · Retail Businesses · E-commerce Brands · Professionals · Agencies · Manufacturers",
  introduction: {
    heading: "Compliance Support Across India",
    description: "One connected desk for setup, filings, protection and ongoing advisory.",
  },
  testimonials: [
    {
      quote:
        "ALWAYS COMPLIANT handled our GST registration with clarity. We knew exactly which documents were needed, what was filed and when to expect updates.",
      name: "Rohan Mehta",
      role: "Startup Founder",
    },
    {
      quote:
        "Their ROC support brought structure to our annual compliance. The scope was clear, the fees were transparent and every deadline was tracked.",
      name: "Priya Shah",
      role: "Director",
    },
    {
      quote:
        "Before launching our new brand, they guided us through trademark availability, filing and follow-up without making the process feel complicated.",
      name: "Amit Verma",
      role: "Business Owner",
    },
  ],
  faqs: [
    [
      "How often do I need to file GST returns?",
      "It depends on your registration type, turnover and return category. We review your filing profile, confirm the applicable return cycle and help you stay ahead of due dates.",
    ],
    [
      "What documents are required for company registration?",
      "You will typically need identity and address proofs, registered office details, director information and proposed names. We confirm the exact checklist before filing begins.",
    ],
    [
      "Is ROC compliance mandatory after company registration?",
      "Yes. Companies and LLPs must complete applicable annual filings and maintain statutory records. Timely ROC compliance helps avoid penalties and keeps the entity in good standing.",
    ],
    [
      "Can you help with trademark registration?",
      "Yes. We assist with trademark search, class selection guidance, application preparation and filing follow-up for your business name, logo or mark.",
    ],
    [
      "Do you file income tax returns for professionals?",
      "Yes. We assist salaried individuals, professionals, proprietors and business owners after reviewing income details, deductions, investments and supporting documents.",
    ],
    [
      "Can you manage ongoing business compliance?",
      "Yes. We support recurring GST, ROC, tax and business compliance with deadline reminders, document checks, filing coordination and dedicated assistance.",
    ],
  ],
} as const;

function replaceOnce(source: string, from: string, to: string) {
  const index = source.indexOf(from);

  if (index === -1) {
    throw new Error(`Unable to find Sastik content during migration: ${from}`);
  }

  return source.slice(0, index) + to + source.slice(index + from.length);
}

function replaceAll(source: string, from: string, to: string) {
  if (!source.includes(from)) {
    throw new Error(`Unable to find Sastik content during migration: ${from}`);
  }

  return source.split(from).join(to);
}

function replaceOptional(source: string, from: string, to: string) {
  return source.split(from).join(to);
}

function transformBlock(
  source: string,
  start: string,
  end: string,
  transform: (block: string) => string,
) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex) + end.length;

  if (startIndex === -1 || endIndex < end.length) {
    throw new Error(`Unable to locate template block: ${start}`);
  }

  return source.slice(0, startIndex) + transform(source.slice(startIndex, endIndex)) + source.slice(endIndex);
}

function replacePairs(source: string, pairs: ReadonlyArray<readonly [string, string]>) {
  return pairs.reduce((result, [from, to]) => replaceOnce(result, from, to), source);
}

function transformHeader(source: string) {
  void source;
  return '<div data-shared-site-header="true"></div>';
}

function transformHero(source: string) {
  let hero = source;
  hero = replacePairs(hero, [
    ["Join 1,000+ businesses, grow with confidence", siteContent.hero.eyebrow],
    ["AI Automation for Faster Business Operations", siteContent.hero.heading],
    [
      "Connect your tools, automate workflows, and help your team get more done with intelligent automation.",
      siteContent.hero.description,
    ],
  ]);
  hero = replaceAll(hero, "Start a 14-Days Free Trial", siteContent.hero.primaryCta);
  hero = replaceAll(hero, "Watch 2 Minutes Demo", siteContent.hero.secondaryCta);
  hero = replaceAll(hero, 'href="https://www.youtube.com/watch?v=7e90gBu4pas"', `href="${siteContent.whatsappHref}"`);
  hero = replaceAll(hero, " bg_white popup-video", " bg_white");
  return hero;
}

function transformProblems(source: string) {
  let section = replacePairs(source, [
    ["Problems", "Compliance Challenges"],
    ["What’s Slowing Your Team Down?", siteContent.problems.heading],
  ]);
  const oldCards = [
    ["Manual Work Everywhere", "Teams repeat the same tasks manually", "Unnecessary operational effort increases", "Automation opportunities remain unused"],
    ["Disconnected Tools", "Tools don’t integrate properly", "Data lives in separate silos", "Constant context switching reduces focus"],
    ["Inefficient Processes", "Information scattered across platforms", "Manual reporting slows leadership", "No real-time performance visibility"],
  ] as const;
  oldCards.forEach((oldCard, index) => {
    const card = siteContent.problems.cards[index];
    section = replacePairs(section, [
      [oldCard[0], card.title],
      [oldCard[1], card.items[0]],
      [oldCard[2], card.items[1]],
      [oldCard[3], card.items[2]],
    ]);
  });
  return section;
}

function transformSolutions(source: string) {
  let section = replacePairs(source, [
    ["Solutions", "Why Us"],
    ["How Sastik Improves Your Operations", siteContent.solutions.heading],
  ]);
  const oldCards = [
    ["Adaptive Growth", "Processes scale with demand while staying highly efficient and lean."],
    ["Rapid Execution", "Work progresses automatically, minimizing delays and keeping track"],
    ["Work Faster", "Automated workflows help teams move quicker and smarter."],
    ["Consistent Result", "Processes run smoothly, ensuring reliable, consistent, and timely results."],
  ] as const;
  oldCards.forEach((oldCard, index) => {
    section = replacePairs(section, [
      [oldCard[0], siteContent.solutions.cards[index][0]],
      [oldCard[1], siteContent.solutions.cards[index][1]],
    ]);
  });
  section = replaceAll(section, "Learn More", "Get Guidance");
  section = replaceAll(section, "See How it Works", "Get Filing Guidance");
  return section;
}

function transformFeatures(source: string) {
  let section = replacePairs(source, [
    ["Features", "Services"],
    ["Everything You Need for Smarter Workflows", siteContent.services.heading],
  ]);
  const oldCards = [
    ["Smart Priority Sorting", "Streamline workflow through smart priority ranking with intelligent automation"],
    ["Quick Smart Responses", "Sharp answers to keep conversations flowing smoothly without delays"],
    ["Smart AI Control", "Advanced AI control for seamless workflow automation without complexity"],
    ["Unified Channel Sync", "Connect every platform together, ensuring consistent messaging, instant updates, and smooth workflow management across teams"],
    ["Intelligent Lead Ranking", "Automatically score and prioritize leads using smart data insights to help your team focus on high value prospects"],
  ] as const;
  oldCards.forEach((oldCard, index) => {
    section = replacePairs(section, [
      [oldCard[0], siteContent.services.cards[index][0]],
      [oldCard[1], siteContent.services.cards[index][1]],
    ]);
  });
  return section;
}

function transformWorkflow(source: string) {
  let section = replaceOnce(source, "Get Started with Sastik in a Few Easy Steps", siteContent.workflow.heading);
  const oldSteps = [
    ["Connect Your Tools", "Plug Sastik into your tools and data sources securely. Setup is quick, seamless, and requires no heavy configuration."],
    ["Build Your Workflow", "Define your workflows once. Sastik’s AI handles repetitive tasks, adapts to change, and keeps everything running smoothly."],
    ["Run Automation", "Monitor performance, gain insights, and optimize in real time. Stay in control while your work runs itself."],
  ] as const;
  oldSteps.forEach((oldStep, index) => {
    section = replacePairs(section, [
      [oldStep[0], siteContent.workflow.steps[index][0]],
      [oldStep[1], siteContent.workflow.steps[index][1]],
    ]);
  });
  return section;
}

function transformIntroduction(source: string) {
  let itemIndex = 0;
  const section = replacePairs(source, [
    ["AI Introduction", siteContent.brand],
    ["Unlock the Full Strength of SaaS All in One Platform", siteContent.introduction.heading],
    ["Powerful automation solutions, all in one platform", siteContent.introduction.description],
    ["Custom AI Machine Learning", "Clear Document Checklist"],
    ["Custom Intelligence Powering Innovation.", "Know what is required before preparation and filing begins."],
    ["DeepSeek", "Deadline-Aware Reminders"],
    ["Intelligence Analyst", "Registration & Filing Support"],
    ["Excels in reasoning, calculations, and programming with clear.", "Stay prepared with practical reminders before applicable due dates."],
    ["AI Operational Automation", "Transparent Scope"],
    ["Streamline repetitive tasks on autopilot.", "Clear deliverables, applicable fees and timelines before work begins."],
    ["ChatGPT 5", "GST, ROC & Tax Experts"],
    ["Live Data Hunter", "Dedicated Compliance Desk"],
    [
      "Provides up-to-date insights and news from trusted sources.",
      "Experts coordinate registrations, filings and recurring compliance across India.",
    ],
  ]);

  return section.replace(/<div class="as-asintroduction-item">/g, () => {
    const direction = itemIndex++ % 2 === 0 ? "left" : "right";
    return `<div class="as-asintroduction-item ac-mobile-reveal ac-mobile-reveal--${direction}">`;
  });
}

function transformPricing(source: string) {
  let section = replacePairs(source, [
    ["Powerful Automation That Scales With You", "Engagements That Fit"],
    ["Start free and upgrade as your business grows.", "Clear scope and tailored support for each compliance requirement."],
    ["SaStik Joyful Start", "Essential"],
    ["$0", "Custom"],
    ["/14 Day’s Free Trial", "/ Filing"],
    ["Free Subscription", "Reliable filing support without unclear retainers."],
    ["Basic performance insights", "GST Filing"],
    ["Up to 1M tokens included monthly", "Income Tax Filing"],
    ["Limited workflow automation", "Document Readiness Check"],
    ["Single user access", "Due-date Reminders"],
    ["Basic app integrations", "Filing Status Updates"],
    ["Community support", "Transparent Scope & Fees"],
    ["Start Free Plan", "Get a Quote"],
    ["SaStik Joyful Start", "Business Compliance"],
    ["$15", "Custom"],
    ["Basic Subscription", "/ Advisory"],
    ["Free Subscription", "Registration, ROC support and proactive guidance."],
    ["Standard performance reporting", "Company Registration"],
    ["Up to 3M tokens included monthly", "ROC Filing"],
    ["Smart priority sorting", "Trademark Registration"],
    ["Create and manage automated workflows", "Statutory Compliance Review"],
    ["Basic integrations with popular apps", "Dedicated Advisory Support"],
    ["Performance tracking dashboard", "MSME Registration"],
    ["Start Essential Plan", "Book Compliance Review"],
    ["$160", "Custom"],
    ["/Year", "/ Plan"],
    ["Enterprise Pro", "Enterprise & MSME"],
    ["SaStik Enterprise Pro", "Custom Compliance Plan"],
    ["Essential Automation Toolkit", "For multi-entity, multi-filing or notice-response needs."],
    ["Unlimited automation projects", "Multi-entity Compliance"],
    ["Advanced analytics & reporting dashboard", "Multi-filing Coordination"],
    ["Memory-powered workflow optimization", "Notice-response Support"],
    ["Advanced comparison & testing tools", "Dedicated Compliance Review"],
    ["Premium community & priority support", "Priority Advisory Support"],
    ["Start Enterprise Pro", "Request a Custom Compliance Plan"],
  ]);
  section = replaceOnce(
    section,
    'aria-label="Request a Custom Compliance Plan" href="#!"',
    'aria-label="Request a Custom Compliance Plan" href="/contact"',
  );
  section = replaceAll(section, "Start Free Plan", "Get a Quote");
  section = replaceAll(section, "Start Essential Plan", "Book Compliance Review");
  section = replaceAll(section, "Start Enterprise Pro", "Request a Custom Compliance Plan");
  return section;
}

function transformTestimonials(source: string) {
  let section = replaceOnce(source, "How Teams Use Sastik to Work Faster", "How Businesses Stay Compliant With Confidence");
  section = replaceAll(section, "David Reynolds", siteContent.testimonials[1].name);
  section = replaceAll(section, "Operations Manager", siteContent.testimonials[1].role);
  section = replaceAll(section, "Daniel Thompson", siteContent.testimonials[0].name);
  section = replaceAll(section, "VP of Operations", siteContent.testimonials[0].role);
  section = replaceAll(section, "Matthew Collins", siteContent.testimonials[2].name);
  section = replaceAll(section, "Marketing Manager", siteContent.testimonials[2].role);
  section = replaceAll(section, "Ethan Brooks", siteContent.testimonials[0].name);
  section = replaceAll(section, "Automation Specialist", siteContent.testimonials[0].role);
  section = replaceAll(section, "Noah Richardson", siteContent.testimonials[1].name);
  section = replaceAll(section, "Technical Project Manager", siteContent.testimonials[1].role);
  section = replaceOnce(section, "Luminus.co", "Growing Business");
  section = replaceAll(
    section,
    'poster="assets/img/testimonial/video-img.png"',
    'poster="assets/img/always-compliant/always-compliant-testimonial-profile.svg"',
  );
  section = replaceAll(
    section,
    '<source src="https://www.pexels.com/download/video/7262257/">',
    "",
  );
  section = replaceAll(
    section,
    "Before switching to this platform, our workflows were scattered across multiple tools. <span>Now everything runs smoothly in one place,</span> saving us hours every week.",
    "ALWAYS COMPLIANT handled our GST registration with clarity. <span>We knew exactly which documents were needed,</span> what was filed and when to expect updates.",
  );
  section = replaceAll(
    section,
    "<span>The efficiency boost was immediate.</span> Processes that previously took hours are now completed without any manual involvement",
    "<span>Their ROC support brought structure to our annual compliance.</span> The scope was clear, the fees were transparent and every deadline was tracked.",
  );
  section = replaceAll(
    section,
    "Our operations <span>became far more organized and transparent.</span> Everyone knows what’s happening without constant check-ins.",
    "Their ROC support brought structure to our annual compliance. <span>The scope was clear and fees were transparent.</span> Every deadline was tracked.",
  );
  section = replaceAll(
    section,
    "What impressed me most is <span>how seamlessly it integrates into our existing process</span> without disrupting our workflow",
    "Before launching our new brand, <span>they guided us through trademark availability and filing</span> without making the process feel complicated.",
  );
  section = replaceAll(
    section,
    "The <span>automation features genuinely changed</span> how our team operates. Tasks that used to take days now happen automatically in the background",
    "ALWAYS COMPLIANT handled our GST registration with clarity. <span>Documents, filing and updates were clear</span> throughout the process.",
  );
  return section;
}

function transformSecurity(source: string) {
  let section = replacePairs(source, [
    ["Security", "Compliance Clarity"],
    ["Move Fast Without Compromising Security", "Transparent & Timely"],
    ["Enterprise-grade security keeps your workflows and data protected", "Defined scope, upfront fee clarity and reminder-led compliance tracking."],
  ]);
  section = replaceAll(section, "#1 Rated AI Workspace by Users", "Defined Scope and Fee Clarity");
  section = replaceAll(section, "Built for Teams That Scale Fast", "Deadline-Aware Compliance Tracking");
  section = replaceAll(section, "Smarter Workflows. Faster Results", "Fast Turnaround, Stronger Documentation");
  section = replaceAll(section, "Top rated by professionals worldwide", "Dedicated Guidance Through Closure");
  section = replaceAll(section, "Start a 14-Days Free Trial", "Get Filing Guidance");
  return section;
}

function faqItem(question: string, answer: string) {
  return `                                            <li class="accordion block">
                                                <div class="acc-btn">
                                                    ${question}
                                                    <span class="arrow"><span></span></span>
                                                </div>
                                                <div class="acc_body">
                                                    <div class="content">
                                                        <p>${answer}</p>
                                                    </div>
                                                </div>
                                            </li>\n`;
}

function transformFaq(source: string) {
  const oldFaqs = [
    ["What makes this different from other automation tools?", "We focus on simplicity and real operational impact. Instead of complex setups, you get visual workflows, smart automation logic, and scalable performance built for everyday business use."],
    ["What happens if an automation fails?", "If an automation encounters an issue, the system instantly notifies you and logs the error so you can quickly review and fix it. You can also edit, restart, or adjust the workflow to ensure everything runs smoothly again."],
    ["Do I need multiple tools after using this?", "No. The platform is designed to bring tasks, workflows, integrations, and collaboration into one unified workspace, helping reduce the need for multiple disconnected tools."],
    ["How reliable are the automations?", "Our automations are built to run consistently and accurately, even for complex workflows. With reliable infrastructure and real-time monitoring, your processes stay active and dependable."],
  ] as const;
  let section = replaceOnce(source, "Faq", "FAQ");
  oldFaqs.forEach((oldFaq, index) => {
    section = replacePairs(section, [
      [oldFaq[0], siteContent.faqs[index][0]],
      [oldFaq[1], siteContent.faqs[index][1]],
    ]);
  });
  const insertionPoint = "                                        </ul>";
  section = replaceOnce(
    section,
    insertionPoint,
    faqItem(...siteContent.faqs[4]) + faqItem(...siteContent.faqs[5]) + insertionPoint,
  );
  section = replaceAll(section, "Have More Questions? Book A Free Discovery Call", "Need Filing Guidance? Speak With Our Compliance Desk");
  section = replaceAll(section, "020 7946 0958", siteContent.phoneDisplay);
  section = replaceAll(section, "tel:02079460958", siteContent.phoneHref);
  section = replaceAll(section, "sastik@gmail.com", siteContent.email);
  return section;
}

function transformCta(source: string) {
  let section = replacePairs(source, [
    ["Make Automation Your Competitive Advantage", "Ready to Simplify Your Compliance?"],
    ["Enterprise-grade security keeps your workflows and data protected", "Get a clear filing path, document checklist, fee estimate and timeline before you begin."],
  ]);
  section = replaceAll(section, "Start a 14-Days Free Trial", "Request Consultation");
  section = replaceAll(section, "Watch 2 Minutes Demo", "Start WhatsApp Inquiry");
  section = replaceAll(section, 'href="https://www.youtube.com/watch?v=7e90gBu4pas"', `href="${siteContent.whatsappHref}"`);
  section = replaceAll(section, " bg_white popup-video", " bg_white");
  return section;
}

function transformBrand(source: string) {
  let section = replaceOnce(
    source,
    "Trusted by <span>15,000+</span> founders & business owners",
    "<span>100+</span> Businesses · <span>1K+</span> Filings",
  );
  section = replaceOnce(section, "4.9 Average user ratings", "98% Satisfaction");
  return section;
}

function transformVisualAssets(source: string) {
  const assets = [
    ["assets/img/logo/logo.svg", "assets/img/always-compliant/always-compliant-logo.svg"],
    ["assets/img/logo/logo-white.svg", "assets/img/always-compliant/always-compliant-logo-white.svg"],
    ["assets/img/logo/comparison-logo.svg", "assets/img/always-compliant/always-compliant-logo.svg"],
    ["assets/img/hero/img03.png", "assets/img/always-compliant/always-compliant-hero-final.svg"],
    ["assets/img/hero/img04.png", "assets/img/always-compliant/always-compliant-hero-gst-status.svg"],
    ["assets/img/hero/img05.png", "assets/img/always-compliant/always-compliant-hero-deadlines.svg"],
    ["assets/img/feature/as-fea-img01.png", "assets/img/always-compliant/always-compliant-gst-registration.svg"],
    ["assets/img/feature/as-fea-img02.png", "assets/img/always-compliant/always-compliant-gst-filing.svg"],
    ["assets/img/feature/as-fea-img03.png", "assets/img/always-compliant/always-compliant-roc-filing.svg"],
    ["assets/img/feature/as-fea-img04.png", "assets/img/always-compliant/always-compliant-registration-flow.svg"],
    ["assets/img/feature/as-fea-img05.png", "assets/img/always-compliant/always-compliant-tax-support.svg"],
    ["assets/img/process/img04.png", "assets/img/always-compliant/always-compliant-workflow-request.svg"],
    ["assets/img/process/img05.png", "assets/img/always-compliant/always-compliant-workflow-plan.svg"],
    ["assets/img/process/img06.png", "assets/img/always-compliant/always-compliant-workflow-filing.svg"],
    ["assets/img/integration/logo01.png", "assets/img/always-compliant/industry-startup.svg"],
    ["assets/img/integration/logo02.png", "assets/img/always-compliant/industry-msme.svg"],
    ["assets/img/integration/logo03.png", "assets/img/always-compliant/industry-retail.svg"],
    ["assets/img/integration/logo04.png", "assets/img/always-compliant/industry-ecommerce.svg"],
    ["assets/img/integration/logo05.png", "assets/img/always-compliant/industry-professional.svg"],
    ["assets/img/integration/logo06.png", "assets/img/always-compliant/industry-agency.svg"],
    ["assets/img/integration/logo07.png", "assets/img/always-compliant/industry-manufacturer.svg"],
    ["assets/img/integration/logo08.png", "assets/img/always-compliant/industry-startup.svg"],
    ["assets/img/integration/logo09.png", "assets/img/always-compliant/industry-msme.svg"],
    ["assets/img/integration/logo10.png", "assets/img/always-compliant/industry-retail.svg"],
    ["assets/img/integration/logo11.png", "assets/img/always-compliant/industry-ecommerce.svg"],
    ["assets/img/integration/logo12.png", "assets/img/always-compliant/industry-agency.svg"],
    ["assets/img/integration/logo13.png", "assets/img/always-compliant/industry-manufacturer.svg"],
    ["assets/img/integrate/img01.png", "assets/img/always-compliant/always-compliant-expertise-documents.svg"],
    ["assets/img/integrate/img02.png", "assets/img/always-compliant/always-compliant-expertise-filing.svg"],
    ["assets/img/integrate/img03.png", "assets/img/always-compliant/always-compliant-expertise-overview.svg"],
    ["assets/img/integrate/img04.png", "assets/img/always-compliant/always-compliant-expertise-deadline.svg"],
    ["assets/img/integrate/img05.png", "assets/img/always-compliant/always-compliant-expertise-command.svg"],
    ["assets/img/integrate/img06.png", "assets/img/always-compliant/always-compliant-expertise-orbit.svg"],
    ["assets/img/security/main-logo.svg", "assets/img/always-compliant/always-compliant-mark.svg"],
    ["assets/img/security/logo10.png", "assets/img/always-compliant/security-gst.svg"],
    ["assets/img/security/logo08.png", "assets/img/always-compliant/security-roc.svg"],
    ["assets/img/security/logo07.png", "assets/img/always-compliant/security-tax.svg"],
    ["assets/img/security/logo09.png", "assets/img/always-compliant/security-documents.svg"],
    ["assets/img/security/logo11.png", "assets/img/always-compliant/security-deadline.svg"],
    ["assets/img/testimonial/logo01.png", "assets/img/always-compliant/testimonial-startup.svg"],
    ["assets/img/testimonial/logo02.png", "assets/img/always-compliant/testimonial-msme.svg"],
    ["assets/img/testimonial/logo03.png", "assets/img/always-compliant/testimonial-business.svg"],
    ["assets/img/testimonial/logo04.png", "assets/img/always-compliant/testimonial-startup.svg"],
    ["assets/img/testimonial/logo05.png", "assets/img/always-compliant/testimonial-msme.svg"],
    ["assets/img/avatar/tes-avatar01.png", "assets/img/always-compliant/avatar-01.svg"],
    ["assets/img/avatar/tes-avatar02.png", "assets/img/always-compliant/avatar-02.svg"],
    ["assets/img/avatar/tes-avatar04.png", "assets/img/always-compliant/avatar-03.svg"],
    ["assets/img/avatar/tes-avatar05.png", "assets/img/always-compliant/avatar-01.svg"],
    ["assets/img/brand/as-brand-img01.png", "assets/img/always-compliant/brand-gst.svg"],
    ["assets/img/brand/as-brand-img02.png", "assets/img/always-compliant/brand-roc.svg"],
    ["assets/img/brand/as-brand-img03.png", "assets/img/always-compliant/brand-tax.svg"],
    ["assets/img/brand/as-brand-img04.png", "assets/img/always-compliant/brand-registration.svg"],
    ["assets/img/brand/as-brand-img05.png", "assets/img/always-compliant/brand-trademark.svg"],
  ] as const;

  return assets.reduce((html, [from, to]) => replaceAll(html, from, to), source);
}

function transformFooter(source: string) {
  let footer = replacePairs(source, [
    ["Join Our Newsletter", siteContent.brand],
    ["Enter your  mail", "Share your filing or registration requirement"],
    ["<span class=\"footer-widget-title\">Pages</span>", "<span class=\"footer-widget-title\">Navigation</span>"],
    ['<a href="#!">Problems</a>', '<a href="/">Home</a>'],
    ['<a href="#!">Solutions</a>', '<a href="/about">About</a>'],
    ['<a href="#!">How it works</a>', '<a href="/services">Services</a>'],
    ['<a href="#!">Use case</a>', '<a href="/insights">Insights</a>'],
    ['<a href="#!">Features</a>', '<a href="/contact">Contact</a>'],
    ["<span class=\"footer-widget-title\">Pages</span>", "<span class=\"footer-widget-title\">Services</span>"],
    ['<a href="#!">AI introduction</a>', '<a href="/services">GST Filing</a>'],
    ['<a href="#!">pricing</a>', '<a href="/services">Company Registration</a>'],
    ['<a href="#!">FAQ</a>', '<a href="/services">ROC Compliance</a>'],
    ['<a href="#!">Integrations</a>', '<a href="/services">Trademark Registration</a>'],
    ['<a href="#!">Security</a>', '<a href="/services">Income Tax Filing</a>'],
    ["<span class=\"footer-widget-title\">Help</span>", "<span class=\"footer-widget-title\">Contact</span>"],
    ['<a href="#!">24/7 Support</a>', `<a href="${siteContent.phoneHref}">${siteContent.phoneDisplay}</a>`],
    ['<a href="contact.html">Contact us</a>', `<a href="mailto:${siteContent.email}">${siteContent.email}</a>`],
    ["Copyright © 2026 <a href=\"index.html\">Sastik,</a> All rights reserved.", `© 2026 ${siteContent.brand}. All rights reserved`],
    [
      '<a href="#!">terms of service .</a> <a href="#!">privacy policy</a>',
      '<a href="/terms">Terms of Service</a> · <a href="/privacy">Privacy Policy</a>',
    ],
  ]);
  footer = transformBlock(footer, '<ul class="xb-social-media', "</ul>", () => "");
  footer = replaceOnce(footer, '<a href="#!">Subscribe</a>', '<a href="/contact">Contact Us</a>');
  return footer;
}

export function applyAlwaysCompliantContent(source: string) {
  let html = transformVisualAssets(source);
  html = transformBlock(html, '<header id="xb-header-area"', "</header>", transformHeader);
  html = transformBlock(html, '<section class="hero-area', "</section>", transformHero);
  html = transformBlock(html, '<section class="problem', "</section>", transformProblems);
  html = transformBlock(html, '<section class="solution', "</section>", transformSolutions);
  html = transformBlock(html, '<section id="feature"', "</section>", transformFeatures);
  html = transformBlock(html, '<section class="work', "</section>", transformWorkflow);
  html = transformBlock(html, '<section class="integration', "</section>", (section) =>
    replacePairs(section, [
      ["Integrations", "Industries"],
      ["Connect Everything. Work Without Limits.", "Industries We Serve"],
      ["One platform for all your tools and workflows", siteContent.industries],
    ]),
  );
  html = transformBlock(html, '<section class="introduction', "</section>", transformIntroduction);
  html = transformBlock(html, '<section id="pricing"', "</section>", transformPricing);
  html = transformBlock(html, '<section class="testimonial', "</section>", transformTestimonials);
  html = transformBlock(html, '<section class="security', "</section>", transformSecurity);
  html = transformBlock(html, '<section class="faq-section', "</section>", transformFaq);
  html = transformBlock(html, '<section class="cta', "</section>", transformCta);
  html = transformBlock(html, '<section class="brand-section', "</section>", transformBrand);
  html = transformBlock(html, '<footer class="footer', "</footer>", transformFooter);
  html = replaceAll(html, '<section class="problem pt-120 pb-120">', '<section id="about" class="problem pt-120 pb-120">');
  html = replaceAll(html, '<section class="introduction pos-rel pb-15">', '<section id="insights" class="introduction pos-rel pb-15">');
  html = replaceAll(html, '<section class="faq-section pos-rel pb-15">', '<section id="contact" class="faq-section pos-rel pb-15">');
  html = replaceOptional(html, 'href="index.html"', 'href="/"');
  html = replaceOptional(html, 'href="home-2.html"', 'href="/about"');
  html = replaceOptional(html, 'href="home-3.html"', 'href="/services"');
  html = replaceOptional(html, 'href="home-4.html"', 'href="/insights"');
  html = replaceOptional(html, 'href="about.html"', 'href="/about"');
  html = replaceOptional(html, 'href="team.html"', 'href="/services"');
  html = replaceOptional(html, 'href="career.html"', 'href="/services"');
  html = replaceOptional(html, 'href="career-details.html"', 'href="/services"');
  html = replaceOptional(html, 'href="case-details.html"', 'href="/services"');
  html = replaceOptional(html, 'href="error.html"', 'href="/contact"');
  html = replaceOptional(html, 'href="blog.html"', 'href="/insights"');
  html = replaceOptional(html, 'href="blog-details.html"', 'href="/insights"');
  html = replaceOptional(html, 'href="contact.html"', 'href="/contact"');
  return html;
}
