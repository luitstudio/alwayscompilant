import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";

export const metadata: Metadata = { title: "About Us", description: "Learn how Always Compliant helps businesses manage GST, ROC, tax, registrations and recurring compliance.", alternates: { canonical: "/about" } };

const supportAreas = ["GST", "ROC", "Tax", "Registrations", "Trademark", "Ongoing Compliance"];
const reasons = [
  "Deadline-aware execution",
  "Transparent scope and pricing",
  "Dedicated compliance support",
  "Practical regulatory expertise",
  "Clear guidance at every step",
];
const audiences = ["Startups", "MSMEs", "Retail Businesses", "E-commerce Brands", "Professionals", "Agencies", "Manufacturers"];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About Always Compliant" title="Compliance support with clarity and follow-through." description="Always Compliant helps startups, MSMEs and growing businesses manage GST, ROC, tax, registrations and recurring compliance with clear guidance and dependable coordination." primary={{ label: "Book Consultation", href: "/contact" }} secondary={{ label: "Explore Services", href: "/services" }} />
      <section className="ac-section ac-story">
        <div className="container ac-story-grid">
          <SectionHeading eyebrow="Our story" title="Built for businesses that want to stay prepared." description="The work begins with a simple idea: businesses should understand what is required, when it is due and what happens next." />
          <div className="ac-story-panel">
            <Image src="/assets/img/always-compliant/always-compliant-workflow-plan.svg" alt="A structured compliance plan showing documents and filing steps" width={738} height={220} unoptimized />
            <div className="ac-story-copy">
              <p>Our role is to simplify compliance, make deadlines visible and turn document requirements into a clear plan.</p>
              <p>From the first checklist to filing closure, dependable support reduces uncertainty and gives teams more confidence in every compliance decision.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="ac-section ac-section-tint">
        <div className="container">
          <SectionHeading eyebrow="What we help with" title="One dependable desk for essential compliance." description="Focused support across the filings, registrations and obligations businesses encounter as they grow." align="center" />
          <div className="ac-help-grid">{supportAreas.map((area, index) => <article key={area}><span>{String(index + 1).padStart(2, "0")}</span><h3>{area}</h3><p>{area === "Ongoing Compliance" ? "Recurring tracking, reminders and practical advisory." : `Clear preparation and coordinated support for ${area.toLowerCase()} requirements.`}</p></article>)}</div>
        </div>
      </section>
      <section className="ac-section">
        <div className="container ac-reason-grid">
          <div>
            <SectionHeading eyebrow="Why Always Compliant" title="Support designed around clarity and accountability." />
            <Image className="ac-reason-visual" src="/assets/img/always-compliant/always-compliant-expertise-orbit.svg" alt="Connected compliance support surrounding a central confirmation mark" width={317} height={117} unoptimized />
          </div>
          <ol className="ac-reason-list">{reasons.map((reason, index) => <li key={reason}><span>{String(index + 1).padStart(2, "0")}</span><h3>{reason}</h3></li>)}</ol>
        </div>
      </section>
      <section className="ac-section ac-audience">
        <div className="container ac-audience-grid">
          <SectionHeading eyebrow="Who we serve" title="Built for businesses moving from setup to recurring compliance." description="We support teams that need clear requirements, dependable coordination and practical guidance as they grow." />
          <div>
            <ul className="ac-audience-list">{audiences.map((audience) => <li key={audience}>{audience}</li>)}</ul>
            <div className="ac-center-link"><Link href="/services">See how we can help <span aria-hidden="true">-&gt;</span></Link></div>
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
