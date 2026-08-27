import type { Metadata } from "next";
import { CTASection } from "@/components/site/CTASection";
import { InsightCard } from "@/components/site/InsightCard";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { insightArticles } from "@/data/pages";

export const metadata: Metadata = { title: "Compliance Insights | Always Compliant", description: "Practical guidance on GST, ROC, tax, registrations and business compliance." };

export default function InsightsPage() {
  return <PageShell>
    <PageHero eyebrow="INSIGHTS" title="Practical guidance for staying compliant." description="Simple explanations, filing guidance and practical compliance insights for businesses navigating GST, ROC, tax and registrations." />
    <section className="ac-section ac-insights"><div className="container"><SectionHeading eyebrow="COMPLIANCE LIBRARY" title="Useful preparation before the deadline arrives." description="Educational guidance to help you ask better questions and organize the right information. These resources are general information, not legal or tax advice." /><div className="ac-insight-grid">{insightArticles.map((article, index) => <InsightCard {...article} featured={index === 0} key={article.title} />)}</div></div></section>
    <section className="ac-section ac-insight-note"><div className="container"><div className="ac-note-card"><img src="/assets/img/always-compliant/always-compliant-expertise-documents.svg" alt="A compliance checklist with filing status indicators" /><div><span className="ac-eyebrow">A PRACTICAL REMINDER</span><h2>Good compliance starts before the form is opened.</h2><p>Confirm the obligation, due date, document owner and review step early. Requirements can vary by entity and filing profile, so seek advice for your specific circumstances.</p></div></div></div></section>
    <CTASection title="Have a compliance question specific to your business?" label="Request Consultation" />
  </PageShell>;
}
