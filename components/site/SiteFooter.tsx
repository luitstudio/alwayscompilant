import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="ac-footer">
      <div className="container">
        <div className="ac-footer-main">
          <div className="ac-footer-brand">
            <Link href="/"><Image src="/assets/img/always-compliant/always-compliant-logo-white.svg" alt="Always Compliant" width={132} height={28} /></Link>
            <p>Clear guidance for GST, ROC, tax, registrations and recurring business compliance.</p>
          </div>
          <div>
            <h2>Navigation</h2>
            <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link>
          </div>
          <div>
            <h2>Services</h2>
            <Link href="/services">GST Filing</Link><Link href="/services">Company Registration</Link><Link href="/services">ROC Compliance</Link><Link href="/services">Trademark Registration</Link><Link href="/services">Income Tax Filing</Link>
          </div>
          <div>
            <h2>Contact</h2>
            <a href={siteContent.phoneHref}>{siteContent.phoneDisplay}</a>
            <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
            <a href={siteContent.whatsappHref} target="_blank" rel="noreferrer">WhatsApp inquiry</a>
          </div>
        </div>
        <div className="ac-footer-bottom"><span>© 2026 Always Compliant. All rights reserved.</span><span className="ac-footer-legal">Tax, registration and compliance advisory <Link href="/terms">Terms of Service</Link> <Link href="/privacy">Privacy Policy</Link></span></div>
      </div>
    </footer>
  );
}
