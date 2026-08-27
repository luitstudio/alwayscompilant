import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, description, primary, secondary }: PageHeroProps) {
  return (
    <section className="ac-page-hero">
      <div className="ac-hero-orbit ac-hero-orbit-one" aria-hidden="true"></div>
      <div className="ac-hero-orbit ac-hero-orbit-two" aria-hidden="true"></div>
      <div className="container ac-hero-content">
        <span className="ac-eyebrow ac-eyebrow-light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {(primary || secondary) && <div className="ac-hero-actions">
          {primary && <Link className="ac-button ac-button-primary" href={primary.href}>{primary.label} <span aria-hidden="true">↗</span></Link>}
          {secondary && <Link className="ac-button ac-button-secondary" href={secondary.href}>{secondary.label} <span aria-hidden="true">→</span></Link>}
        </div>}
        <div className="ac-hero-mark" aria-hidden="true"><img src="/assets/img/always-compliant/always-compliant-mark.svg" alt="" /></div>
      </div>
    </section>
  );
}
