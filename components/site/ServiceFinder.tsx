"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { serviceDirectory, servicePath } from "@/data/pages";
import { ButtonLink } from "./Button";

const finderOptions = [
  {
    id: "start",
    label: "Start or register",
    prompt: "I am setting up a business or formal registration.",
    serviceSlugs: ["company-registration", "llp-registration", "gst-registration", "msme-registration"],
    explanation: "Start with entity, GST or MSME registration support so the basic business identity is organized before filings begin.",
  },
  {
    id: "gst",
    label: "GST help",
    prompt: "I need GST registration or recurring filing support.",
    serviceSlugs: ["gst-registration", "gst-filing"],
    explanation: "GST work depends on your registration status, records and return cycle. These services cover setup and filing coordination.",
  },
  {
    id: "statutory",
    label: "ROC and statutory",
    prompt: "I need company, LLP or recurring statutory compliance.",
    serviceSlugs: ["roc-filing", "business-compliance"],
    explanation: "ROC and statutory work is easier when records, owners and due dates are mapped before the filing window gets tight.",
  },
  {
    id: "tax",
    label: "Income tax",
    prompt: "I need help preparing or reviewing an income-tax return.",
    serviceSlugs: ["income-tax-filing"],
    explanation: "Income-tax support begins with income records, deductions, tax payments and supporting documents reviewed together.",
  },
  {
    id: "protect",
    label: "Protect a brand",
    prompt: "I want to protect a business name, logo or mark.",
    serviceSlugs: ["trademark-registration"],
    explanation: "Trademark support helps you prepare applicant details, class selection context and application follow-up for a mark.",
  },
  {
    id: "ongoing",
    label: "Ongoing support",
    prompt: "I want one desk to coordinate recurring compliance.",
    serviceSlugs: ["business-compliance", "gst-filing", "roc-filing"],
    explanation: "Ongoing support connects recurring obligations to reminders, document owners and practical filing coordination.",
  },
] as const;

export function ServiceFinder() {
  const [selectedId, setSelectedId] = useState<(typeof finderOptions)[number]["id"]>("gst");
  const selected = finderOptions.find((option) => option.id === selectedId) ?? finderOptions[0];
  const services = useMemo(
    () => selected.serviceSlugs
      .map((slug) => serviceDirectory.find((service) => service.slug === slug))
      .filter((service): service is (typeof serviceDirectory)[number] => Boolean(service)),
    [selected],
  );

  return (
    <section className="ac-service-finder" id="service-finder" aria-labelledby="service-finder-title">
      <div className="container ac-service-finder-inner">
        <div className="ac-service-finder-lead">
          <span>Service finder</span>
          <h2 id="service-finder-title">What do you need help with?</h2>
          <p>Choose the closest situation. This is a routing aid, not tax or legal advice.</p>
        </div>

        <div className="ac-finder-options" aria-label="Compliance support categories">
          {finderOptions.map((option) => (
            <button
              className={option.id === selectedId ? "is-selected" : undefined}
              type="button"
              aria-pressed={option.id === selectedId}
              key={option.id}
              onClick={() => setSelectedId(option.id)}
            >
              <strong>{option.label}</strong>
              <span>{option.prompt}</span>
            </button>
          ))}
        </div>

        <div className="ac-finder-result" aria-live="polite">
          <div className="ac-finder-result-copy">
            <span>Suggested next step</span>
            <p>{selected.explanation}</p>
          </div>
          <div className="ac-finder-service-list">
            {services.map((service) => (
              <Link href={servicePath(service.slug)} key={service.slug}>
                <strong>{service.title}</strong>
                <span>{service.description}</span>
              </Link>
            ))}
          </div>
          <ButtonLink href="/contact" variant="secondary">Discuss this requirement <span aria-hidden="true">-&gt;</span></ButtonLink>
        </div>
      </div>
    </section>
  );
}
