import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { serviceGroups, servicePath } from "@/data/pages";

export const metadata: Metadata = {
  title: "Business Compliance Services",
  description: "GST, ROC, tax, registration, trademark and ongoing compliance support for startups, MSMEs and growing businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our services"
        title="Find the right compliance support by business need."
        description="From registrations and filings to tax support and recurring compliance, Always Compliant gives businesses one dependable desk for staying prepared."
        primary={{ label: "Book Consultation", href: "/contact" }}
      />
      <section className="ac-section ac-services-directory">
        <div className="container ac-directory-layout">
          <SectionHeading
            eyebrow="Service directory"
            title="Start, file, protect and keep the business organized."
            description="The service directory is grouped by the decision a business owner is usually trying to make. Each service page explains the work, information needed and next step."
          />
          <div className="ac-directory-groups">
            {serviceGroups.map((group) => (
              <section className="ac-directory-group" aria-labelledby={`group-${group.title.replace(/\s+/g, "-").toLowerCase()}`} key={group.title}>
                <div className="ac-directory-group-head">
                  <span>{group.title}</span>
                  <h2 id={`group-${group.title.replace(/\s+/g, "-").toLowerCase()}`}>{group.description}</h2>
                </div>
                <div className="ac-directory-rows">
                  {group.services.map((service) => (
                    <Link className="ac-directory-row" href={servicePath(service.slug)} key={service.slug}>
                      <strong>{service.title}</strong>
                      <p>{service.description}</p>
                      <span aria-hidden="true">-&gt;</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="ac-section ac-process">
        <div className="container">
          <SectionHeading eyebrow="How support begins" title="A clear route from requirement to filing." align="center" />
          <ol className="ac-process-timeline">
            <li><span>01</span><h3>Share the requirement</h3><p>Tell us the filing, registration or compliance area you need help with.</p></li>
            <li><span>02</span><h3>Confirm the plan</h3><p>Receive the document checklist, scope, timeline and applicable fee details.</p></li>
            <li><span>03</span><h3>Coordinate the work</h3><p>We support preparation, review, submission and practical status updates.</p></li>
          </ol>
        </div>
      </section>
      <CTASection title="Need help choosing the right service?" label="Book Consultation" />
    </PageShell>
  );
}
