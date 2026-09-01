import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";

export const metadata: Metadata = { title: "About Us", description: "Learn how Always Compliant helps businesses manage GST, ROC, tax, registrations and recurring compliance.", alternates: { canonical: "/about" } };

const supportAreas = ["GST", "ROC", "Tax", "Registrations", "Trademark", "Ongoing Compliance"];
const reasons = ["Deadline-aware execution", "Transparent scope and pricing", "Dedicated compliance support", "Practical regulatory expertise", "Clear guidance at every step"];
const audiences = ["Startups", "MSMEs", "Retail Businesses", "E-commerce Brands", "Professionals", "Agencies", "Manufacturers"];

export default function AboutPage() {
  return <PageShell>
    <PageHero eyebrow="ABOUT ALWAYS COMPLIANT" title="Compliance, without the confusion." description="Always Compliant helps startups, MSMEs and growing businesses manage GST, ROC, tax, registrations and recurring compliance with clear guidance and dependable follow-through." primary={{ label: "Book Consultation", href: "/contact" }} secondary={{ label: "Explore Services", href: "/services" }} />
    <section className="ac-section ac-story"><div className="container ac-story-grid"><SectionHeading eyebrow="OUR STORY" title="Compliance clarity for businesses that want to stay ahead." description="We built Always Compliant around a simple idea: businesses should understand what is required, when it is due and what happens next." /><div className="ac-story-panel"><Image src="/assets/img/always-compliant/always-compliant-workflow-plan.svg" alt="A structured compliance plan showing documents and filing steps" width={738} height={220} /><div className="ac-story-copy"><p>Our role is to simplify compliance, make deadlines visible and turn document requirements into a clear plan.</p><p>From the first checklist to filing closure, dependable support reduces uncertainty and gives teams more confidence in every compliance decision.</p></div></div></div></section>
    <section className="ac-section ac-section-tint"><div className="container"><SectionHeading eyebrow="WHAT WE HELP WITH" title="One dependable desk for essential compliance." description="Focused support across the filings, registrations and obligations businesses encounter as they grow." align="center" /><div className="ac-help-grid">{supportAreas.map((area, index) => <article key={area}><span>{String(index + 1).padStart(2, "0")}</span><h3>{area}</h3><p>{area === "Ongoing Compliance" ? "Recurring tracking, reminders and practical advisory." : `Clear preparation and coordinated support for ${area.toLowerCase()} requirements.`}</p></article>)}</div></div></section>
    <section className="ac-section"><div className="container ac-reason-grid"><div><SectionHeading eyebrow="WHY ALWAYS COMPLIANT" title="Support designed around clarity and follow-through." /><Image className="ac-reason-visual" src="/assets/img/always-compliant/always-compliant-expertise-orbit.svg" alt="Connected compliance support surrounding a central confirmation mark" width={317} height={117} /></div><ol className="ac-reason-list">{reasons.map((reason, index) => <li key={reason}><span>{String(index + 1).padStart(2, "0")}</span><h3>{reason}</h3></li>)}</ol></div></section>
    <section className="ac-section ac-audience"><div className="container"><SectionHeading eyebrow="WHO WE SERVE" title="Built for businesses moving from setup to scale." align="center" /><div className="ac-audience-list">{audiences.map((audience) => <span key={audience}>{audience}</span>)}</div><div className="ac-stats"><div><strong>100+</strong><span>Businesses</span></div><div><strong>1K+</strong><span>Filings</span></div><div><strong>98%</strong><span>Satisfaction</span></div></div><div className="ac-center-link"><Link href="/services">See how we can help <span aria-hidden="true">→</span></Link></div></div></section>
    <CTASection />
  </PageShell>;
}
