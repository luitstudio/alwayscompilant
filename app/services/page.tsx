import type { Metadata } from "next";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { serviceDirectory } from "@/data/pages";

export const metadata: Metadata = { title: "Business Compliance Services | Always Compliant", description: "GST, ROC, tax, registration, trademark and ongoing compliance support for startups, MSMEs and growing businesses." };

export default function ServicesPage() {
  return <PageShell>
    <PageHero eyebrow="OUR SERVICES" title="Compliance support for every stage of your business." description="From registrations and filings to tax support and recurring compliance, Always Compliant gives businesses one dependable desk for staying prepared." primary={{ label: "Book Consultation", href: "/contact" }} />
    <section className="ac-section ac-services-directory"><div className="container"><SectionHeading eyebrow="SERVICE DIRECTORY" title="Practical support, clearly scoped." description="Choose the area you need help with. We’ll confirm the documents, process and expected timeline before work begins." align="center" /><div className="ac-service-grid">{serviceDirectory.map((service, index) => <ServiceCard {...service} index={index} key={service.title} />)}</div></div></section>
    <section className="ac-section ac-process"><div className="container"><SectionHeading eyebrow="HOW SUPPORT BEGINS" title="A clear route from requirement to filing." align="center" /><div className="ac-process-grid"><article><span>01</span><h3>Share the requirement</h3><p>Tell us the filing, registration or compliance area you need help with.</p></article><article><span>02</span><h3>Confirm the plan</h3><p>Receive the document checklist, scope, timeline and applicable fee details.</p></article><article><span>03</span><h3>Coordinate the filing</h3><p>We support preparation, review, submission and practical status updates.</p></article></div></div></section>
    <CTASection title="Need help choosing the right service?" label="Book Consultation" />
  </PageShell>;
}
