import Image from "next/image";
import { ButtonLink } from "./Button";

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
      <div className="container ac-page-hero-grid">
        <div className="ac-hero-content">
          <span className="ac-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {(primary || secondary) && (
            <div className="ac-hero-actions">
              {primary && <ButtonLink href={primary.href}>{primary.label} <span aria-hidden="true">-&gt;</span></ButtonLink>}
              {secondary && <ButtonLink variant="secondary" href={secondary.href}>{secondary.label}</ButtonLink>}
            </div>
          )}
        </div>
        <div className="ac-hero-mark" aria-hidden="true">
          <Image src="/assets/img/always-compliant/always-compliant-mark.svg" alt="" width={59} height={56} unoptimized />
        </div>
      </div>
    </section>
  );
}
