"use client";

import { useState, type FormEvent } from "react";
import { contactServices } from "@/data/pages";
import { siteContent } from "@/data/site";

type FieldName = "name" | "email" | "phone" | "service" | "message";
type Errors = Partial<Record<FieldName, string>>;

function validate(data: FormData) {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const service = String(data.get("service") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (name.length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a valid phone number.";
  if (!service) errors.service = "Choose the service you need.";
  if (message.length < 15) errors.message = "Tell us a little more about your requirement.";

  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      form.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name")),
          business: String(data.get("business") || ""),
          email: String(data.get("email")),
          phone: String(data.get("phone")),
          service: String(data.get("service")),
          message: String(data.get("message")),
          website: String(data.get("website") || ""),
        }),
      });

      if (!response.ok) throw new Error("Unable to submit inquiry");

      form.reset();
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldError = (name: FieldName) => errors[name] ? <span className="ac-field-error" id={`${name}-error`}>{errors[name]}</span> : null;

  return <form className="ac-contact-form" noValidate onSubmit={handleSubmit} aria-busy={status === "loading"}>
    <div className="ac-form-heading"><span className="ac-eyebrow">SEND AN INQUIRY</span><h2>Tell us what you need help with.</h2><p>Your inquiry will be sent securely to our compliance desk.</p></div>
    <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" hidden />
    <div className="ac-form-grid">
      <div className="ac-field"><label htmlFor="name">Full Name <span>*</span></label><input id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{fieldError("name")}</div>
      <div className="ac-field"><label htmlFor="business">Business Name</label><input id="business" name="business" autoComplete="organization" /></div>
      <div className="ac-field"><label htmlFor="email">Email Address <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{fieldError("email")}</div>
      <div className="ac-field"><label htmlFor="phone">Phone Number <span>*</span></label><input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />{fieldError("phone")}</div>
      <div className="ac-field ac-field-full"><label htmlFor="service">Service Required <span>*</span></label><select id="service" name="service" defaultValue="" aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined}><option value="" disabled>Select a service</option>{contactServices.map((service) => <option value={service} key={service}>{service}</option>)}</select>{fieldError("service")}</div>
      <div className="ac-field ac-field-full"><label htmlFor="message">Message <span>*</span></label><textarea id="message" name="message" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined}></textarea>{fieldError("message")}</div>
    </div>
    <button className="ac-button ac-button-primary ac-submit" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending inquiry..." : "Send Inquiry"} <span aria-hidden="true">↗</span></button>
    <div className="ac-form-status" aria-live="polite">
      {status === "success" && <p className="success">Thank you. Your inquiry has been sent to our compliance desk.</p>}
      {status === "error" && Object.keys(errors).length === 0 && <p className="error">We could not send your inquiry. Please try again or email <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>.</p>}
      {status === "error" && Object.keys(errors).length > 0 && <p className="error">Please correct the highlighted fields before continuing.</p>}
    </div>
  </form>;
}
