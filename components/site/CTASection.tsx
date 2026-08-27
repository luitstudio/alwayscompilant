import Link from "next/link";

export function CTASection({ title = "Ready to simplify your compliance?", label = "Request Consultation" }: { title?: string; label?: string }) {
  return <section className="ac-cta"><div className="container"><div className="ac-cta-inner"><div><span className="ac-eyebrow ac-eyebrow-light">NEXT STEP</span><h2>{title}</h2><p>Tell us what you need help with. We’ll outline the documents, scope and expected timeline.</p></div><Link className="ac-button ac-button-light" href="/contact">{label} <span aria-hidden="true">↗</span></Link></div></div></section>;
}
