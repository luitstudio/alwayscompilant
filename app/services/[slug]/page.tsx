import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/site/Button";
import { CTASection } from "@/components/site/CTASection";
import { PageShell } from "@/components/site/PageShell";
import { findService, serviceDirectory, servicePath } from "@/data/pages";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceDirectory.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: servicePath(service.slug) },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const related = serviceDirectory.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 3);

  return (
    <PageShell>
      <section className="ac-service-detail-hero" aria-labelledby="service-title">
        <div className="container ac-service-detail-hero-grid">
          <div>
            <span className="ac-eyebrow">{service.category}</span>
            <h1 id="service-title">{service.title}</h1>
            <p>{service.overview}</p>
            <div className="ac-hero-actions">
              <ButtonLink href="/contact">Book Consultation <span aria-hidden="true">-&gt;</span></ButtonLink>
              <ButtonLink href="/services" variant="secondary">All Services</ButtonLink>
            </div>
          </div>
          <aside className="ac-service-brief" aria-label={`${service.title} service summary`}>
            <span>Service file</span>
            <dl>
              <div><dt>Focus</dt><dd>{service.title}</dd></div>
              <div><dt>Category</dt><dd>{service.category}</dd></div>
              <div><dt>Next step</dt><dd>Confirm scope, documents and expected process before work begins.</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="ac-section">
        <div className="container ac-service-detail-grid">
          <div className="ac-service-detail-copy">
            <section aria-labelledby="who-needs-this">
              <span className="ac-section-label">01</span>
              <h2 id="who-needs-this">Who may need this service</h2>
              <ul className="ac-editorial-list">{service.whoNeedsIt.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section aria-labelledby="engagement-includes">
              <span className="ac-section-label">02</span>
              <h2 id="engagement-includes">What the engagement can include</h2>
              <ul className="ac-editorial-list">{service.engagementIncludes.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section aria-labelledby="information-needed">
              <span className="ac-section-label">03</span>
              <h2 id="information-needed">Information usually needed</h2>
              <ul className="ac-editorial-list">{service.informationNeeded.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>

          <aside className="ac-service-side-note">
            <span>Before filing</span>
            <p>Exact requirements can vary by business profile, entity type, portal status and document readiness. Always Compliant confirms scope before starting work.</p>
          </aside>
        </div>
      </section>

      <section className="ac-section ac-section-tint">
        <div className="container">
          <div className="ac-section-heading ac-align-center">
            <span className="ac-eyebrow">Process</span>
            <h2>How this support usually begins.</h2>
          </div>
          <ol className="ac-process-timeline">
            {service.process.map(([title, text], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ac-section">
        <div className="container ac-faq-grid">
          <div className="ac-section-heading">
            <span className="ac-eyebrow">Questions</span>
            <h2>Common questions about {service.title.toLowerCase()}.</h2>
            <p>These answers are general information. The exact next step is confirmed after reviewing your business context.</p>
          </div>
          <div className="ac-faq-list">
            {service.questions.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="ac-section ac-related-services">
          <div className="container">
            <div className="ac-section-heading">
              <span className="ac-eyebrow">Related support</span>
              <h2>Services often reviewed in the same context.</h2>
            </div>
            <div className="ac-related-list">
              {related.map((item) => (
                <Link href={servicePath(item.slug)} key={item.slug}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title={`Need help with ${service.title.toLowerCase()}?`} label="Discuss This Service" />
    </PageShell>
  );
}
