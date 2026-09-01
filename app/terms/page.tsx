import type { Metadata } from "next";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { siteContent } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply to using this website and engaging Always Compliant for compliance support.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="TERMS OF SERVICE" title="Terms that apply to working with us." description="Please read these terms before using this website or engaging Always Compliant for compliance support." />
      <section className="ac-section">
        <div className="container ac-legal">
          <p className="ac-legal-updated">Last updated: September 1, 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>By using this website or submitting an enquiry, you agree to these terms. If you do not agree, please do not use the site or submit the contact form.</p>

          <h2>About Our Services</h2>
          <p>Always Compliant provides guidance and coordination support for GST, ROC, income tax, trademark, company registration and related recurring business compliance matters across India.</p>

          <h2>General Information, Not Professional Advice</h2>
          <p>Content on this website, including the Insights section, is general information intended to help you understand common compliance requirements. It is not legal, tax or professional advice and does not account for your specific circumstances. Requirements can vary by entity type, turnover, jurisdiction and filing profile, so specific guidance is confirmed only after we review your requirement directly.</p>

          <h2>Starting an Engagement</h2>
          <p>Submitting the contact form or speaking with our team does not by itself create a client or professional-service relationship. Before any filing or advisory work begins, we confirm the applicable scope, required documents, fees and expected timeline with you separately in writing.</p>

          <h2>Your Responsibilities</h2>
          <p>Timely and accurate compliance work depends on the information and documents you provide. You are responsible for ensuring the details you share with us are accurate, complete and provided within the timelines we agree on.</p>

          <h2>Fees</h2>
          <p>Applicable fees are confirmed before work begins and are specific to the scope discussed. Fees may change if the scope of a requirement changes after the initial review.</p>

          <h2>Limitation of Liability</h2>
          <p>To the extent permitted by law, Always Compliant is not liable for indirect or consequential loss arising from your use of this website. This does not limit any liability that cannot be excluded under applicable law, including liability arising from a confirmed professional engagement.</p>

          <h2>Third-Party Links</h2>
          <p>Where this site links to third-party destinations (such as WhatsApp), we are not responsible for the content or privacy practices of those external services.</p>

          <h2>Governing Law</h2>
          <p>These terms are governed by the laws of India.</p>

          <h2>Changes to These Terms</h2>
          <p>We may update these terms from time to time. The date at the top of this page reflects the most recent revision.</p>

          <h2>Contact Us</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a> or{" "}
            <a href={siteContent.phoneHref}>{siteContent.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
