import type { Metadata } from "next";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { siteContent } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Always Compliant collects, uses and protects the information you share with us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero eyebrow="PRIVACY POLICY" title="How we handle your information." description="This policy explains what we collect through this website, why, and how you can reach us with questions." />
      <section className="ac-section">
        <div className="container ac-legal">
          <p className="ac-legal-updated">Last updated: September 1, 2026</p>

          <h2>Information We Collect</h2>
          <p>When you submit the contact form on this website, we collect the details you provide: your full name, business name, email address, phone number, the service you are enquiring about and the message you send us. Our web server also records standard technical information (such as browser type and general access logs) common to most websites.</p>

          <h2>How We Use Your Information</h2>
          <p>We use the information you submit to respond to your enquiry, understand your compliance requirement, and contact you by phone, email or WhatsApp to discuss next steps. We do not use your contact-form details for unrelated marketing without your consent.</p>

          <h2>Sharing of Information</h2>
          <p>We do not sell or rent your personal information. We may share information with regulatory authorities, filing portals or professional partners only where necessary to deliver the compliance service you have requested, or where required by law.</p>

          <h2>Data Retention</h2>
          <p>We retain enquiry and engagement information for as long as needed to respond to you, complete the requested service, and meet any recordkeeping obligations that apply to compliance and filing work.</p>

          <h2>Data Security</h2>
          <p>We take reasonable administrative and technical precautions to protect the information you share with us. No method of storage or transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>

          <h2>Cookies</h2>
          <p>This website does not currently use tracking or advertising cookies. If that changes, this policy will be updated to describe what is used and why.</p>

          <h2>Your Rights</h2>
          <p>You may ask us to access, correct or delete the personal information you have shared with us by contacting us at the details below.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this policy from time to time. The date at the top of this page reflects the most recent revision.</p>

          <h2>Contact Us</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a> or{" "}
            <a href={siteContent.phoneHref}>{siteContent.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
