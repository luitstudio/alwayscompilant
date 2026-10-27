import { ButtonLink } from "./Button";

export function CTASection({ title = "Ready to simplify your compliance?", label = "Request Consultation" }: { title?: string; label?: string }) {
  return (
    <section className="ac-cta">
      <div className="container">
        <div className="ac-cta-inner">
          <div>
            <span className="ac-eyebrow ac-eyebrow-light">Next step</span>
            <h2>{title}</h2>
            <p>Tell us what you need help with. We will outline the documents, scope and expected timeline before work begins.</p>
          </div>
          <ButtonLink variant="light" href="/contact">{label} <span aria-hidden="true">-&gt;</span></ButtonLink>
        </div>
      </div>
    </section>
  );
}
