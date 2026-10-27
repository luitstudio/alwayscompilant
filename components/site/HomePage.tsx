import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/site/Button";
import { CTASection } from "@/components/site/CTASection";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceFinder } from "@/components/site/ServiceFinder";
import { serviceDirectory, serviceGroups, servicePath } from "@/data/pages";
import { siteContent } from "@/data/site";

const approachItems = [
  ["Scope before filing", "Documents, fees and expected timelines are clarified before work begins."],
  ["Preparation before pressure", "Recurring obligations are translated into document lists, review steps and practical reminders."],
  ["One coordinated desk", "GST, ROC, tax, registrations and related advisory are handled with one consistent context."],
  ["Plain-language updates", "Clients receive useful status notes instead of vague progress language or unsupported guarantees."],
] as const;

const audiences = siteContent.industries.split(" - ");

function ComplianceDossierVisual() {
  return (
    <figure className="ac-advisory-visual">
      <div className="ac-advisory-image-frame">
        <Image
          src="/assets/img/always-compliant/always-compliant-advisory-review.jpg"
          alt="Advisor and client reviewing business documents at a desk"
          width={1800}
          height={1314}
          priority
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 92vw, 58vw"
        />
      </div>
      <div className="ac-advisory-note" aria-label="Engagement focus">
        <span>Review first</span>
        <p>Documents, scope and next steps are clarified before the filing work begins.</p>
      </div>
      <div className="ac-advisory-index" aria-hidden="true">
        <span>GST</span><span>ROC</span><span>TAX</span><span>REG</span>
      </div>
    </figure>
  );
}

export function HomePage() {
  return (
    <PageShell>
      <section className="ac-home-hero" aria-labelledby="home-hero-title">
        <div className="container ac-home-hero-grid">
          <div className="ac-home-hero-copy">
            <span className="ac-hero-kicker">Tax, registration and statutory compliance</span>
            <h1 id="home-hero-title">A steadier way through compliance.</h1>
            <p>Practical GST, ROC, tax and registration support for Indian businesses that need clarity before every filing.</p>
            <div className="ac-home-actions">
              <ButtonLink href="/contact">Book Consultation <span aria-hidden="true">-&gt;</span></ButtonLink>
              <ButtonLink href="#service-finder" variant="secondary">Find the right service</ButtonLink>
            </div>
            <dl className="ac-hero-proof">
              <div><dt>Coverage</dt><dd>GST, ROC, income tax, registrations and trademark support</dd></div>
              <div><dt>Working style</dt><dd>Documents, scope and timelines reviewed before execution</dd></div>
            </dl>
          </div>
          <ComplianceDossierVisual />
        </div>
      </section>

      <ServiceFinder />

      <section className="ac-section ac-advisory-transition">
        <div className="container ac-transition-layout">
          <div className="ac-transition-statement">
            <span>How support begins</span>
            <h2>Clear process over vague promises.</h2>
            <p>Always Compliant focuses on practical preparation, visible deadlines and accountable communication before every filing or registration step.</p>
          </div>
          <ol className="ac-transition-steps">
            {approachItems.map(([title, text], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ac-section ac-section-tint">
        <div className="container ac-home-services">
          <div className="ac-home-service-lead">
            <SectionHeading eyebrow="Core services" title="Support for the obligations businesses actually face." description="Choose the service area you need help with. We confirm the document checklist, scope, timeline and fees before work begins." />
            <Link className="ac-text-link" href="/services">View complete service directory <span aria-hidden="true">-&gt;</span></Link>
          </div>
          <div className="ac-service-index" aria-label="Core compliance services">
            {serviceDirectory.map((service, index) => (
              <Link className="ac-service-row" href={servicePath(service.slug)} key={service.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{service.title}</strong>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ac-section ac-service-architecture">
        <div className="container">
          <SectionHeading eyebrow="Service architecture" title="Organized around how businesses actually ask for help." description="Always Compliant groups the work by the decision a visitor is trying to make: start, file or organize." />
          <div className="ac-service-groups">
            {serviceGroups.map((group) => (
              <article className="ac-service-group" key={group.title}>
                <div>
                  <span>{group.title}</span>
                  <p>{group.description}</p>
                </div>
                <ul>
                  {group.services.map((service) => (
                    <li key={service.slug}><Link href={servicePath(service.slug)}>{service.title}</Link></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ac-section ac-why-section">
        <div className="container ac-why-grid">
          <SectionHeading eyebrow="Why Always Compliant" title={siteContent.solutions.heading} description="A professional compliance partner should make obligations understandable, not more intimidating." />
          <div className="ac-why-list">
            {siteContent.solutions.cards.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ac-section ac-process">
        <div className="container">
          <SectionHeading eyebrow="How support begins" title={siteContent.workflow.heading} description="A simple sequence keeps documents, decisions and filing steps organized." align="center" />
          <ol className="ac-process-timeline">
            {siteContent.workflow.steps.map(([title, text], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ac-section ac-audience">
        <div className="container ac-audience-grid">
          <SectionHeading eyebrow="Who we serve" title="Designed for businesses moving from setup to recurring compliance." description="The service model fits startups, MSMEs and operators who need reliable guidance without unsupported claims or confusing jargon." />
          <ul className="ac-audience-list">{audiences.map((audience) => <li key={audience}>{audience}</li>)}</ul>
        </div>
      </section>

      <section className="ac-section ac-faq-section">
        <div className="container ac-faq-grid">
          <SectionHeading eyebrow="Questions" title="Common compliance questions, answered plainly." description="These answers are general guidance. Your exact requirements are confirmed after reviewing your business profile and filing context." />
          <div className="ac-faq-list">
            {siteContent.faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to make your next compliance step clearer?" label="Book Consultation" />
    </PageShell>
  );
}
