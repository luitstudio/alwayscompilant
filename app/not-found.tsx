import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = { title: "Page Not Found | Always Compliant" };

export default function NotFound() {
  return <div className="ac-site"><SiteHeader /><main><section className="ac-not-found"><div className="ac-not-found-orbit" aria-hidden="true"><span>GST</span><span>ROC</span><span>TAX</span><div><img src="/assets/img/always-compliant/always-compliant-mark.svg" alt="" /></div></div><div className="ac-not-found-copy"><span className="ac-eyebrow ac-eyebrow-light">404</span><h1>This page isn’t compliant with the map.</h1><p>The page you’re looking for may have moved, expired or never existed.</p><div className="ac-hero-actions"><Link className="ac-button ac-button-primary" href="/">Back to Home <span aria-hidden="true">→</span></Link><Link className="ac-button ac-button-secondary" href="/services">Explore Services <span aria-hidden="true">→</span></Link></div></div></section></main><SiteFooter /></div>;
}
