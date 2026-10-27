import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/site/Button";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div className="ac-site">
      <SiteHeader />
      <main>
        <section className="ac-not-found">
          <div className="ac-not-found-orbit" aria-hidden="true">
            <span>GST</span>
            <span>ROC</span>
            <span>TAX</span>
            <div><Image src="/assets/img/always-compliant/always-compliant-mark.svg" alt="" width={59} height={56} unoptimized /></div>
          </div>
          <div className="ac-not-found-copy">
            <span className="ac-eyebrow ac-eyebrow-light">404</span>
            <h1>This page is not compliant with the map.</h1>
            <p>The page you are looking for may have moved, expired or never existed.</p>
            <div className="ac-hero-actions">
              <ButtonLink href="/">Back to Home <span aria-hidden="true">-&gt;</span></ButtonLink>
              <ButtonLink href="/services" variant="secondary">Explore Services <span aria-hidden="true">-&gt;</span></ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
