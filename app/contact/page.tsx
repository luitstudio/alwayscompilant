import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { siteContent } from "@/data/site";

export const metadata: Metadata = { title: "Contact Us", description: "Talk to Always Compliant about GST, ROC, tax, registrations and ongoing business compliance.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <PageShell>
    <PageHero eyebrow="GET IN TOUCH" title="Let’s make your compliance simpler." description="Tell us what you need help with and our team will help you understand the next steps, required documents and expected timeline." />
    <section className="ac-section ac-contact"><div className="container ac-contact-grid"><div className="ac-contact-details"><span className="ac-eyebrow">BOOK A CONSULTATION</span><h2>Clear guidance starts with one conversation.</h2><p>Get guidance on GST, ROC, tax, registration or ongoing compliance.</p><div className="ac-contact-cards"><a href={siteContent.whatsappHref} target="_blank" rel="noreferrer"><span>WHATSAPP</span><strong>Start a WhatsApp inquiry</strong><small>Use the configured support destination</small></a><a href={siteContent.phoneHref}><span>PHONE</span><strong>{siteContent.phoneDisplay}</strong><small>Speak with the compliance desk</small></a><a href={`mailto:${siteContent.email}`}><span>EMAIL</span><strong>{siteContent.email}</strong><small>Share documents or your requirement</small></a></div><div className="ac-contact-assurance"><Image src="/assets/img/always-compliant/always-compliant-mark.svg" alt="" width={59} height={56} /><p>We’ll help you identify the next step without implying that an inquiry has already been submitted.</p></div></div><ContactForm /></div></section>
  </PageShell>;
}
