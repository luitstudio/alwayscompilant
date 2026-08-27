"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

const serviceLinks = ["GST Filing", "Company Registration", "ROC Compliance", "Trademark Registration", "Income Tax Filing"];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("ac-menu-open", mobileOpen);
    return () => document.body.classList.remove("ac-menu-open");
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const closeMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="ac-header">
      <div className="container ac-header-inner">
        <Link className="ac-logo" href="/" aria-label="Always Compliant home">
          <img src="/assets/img/always-compliant/always-compliant-logo-white.svg" alt="Always Compliant" />
        </Link>

        <nav className="ac-desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) =>
            item.href === "/services" ? (
              <div className="ac-nav-dropdown" key={item.href} onMouseLeave={() => setServicesOpen(false)}>
                <span className={isActive(item.href) ? "active" : undefined}>
                  <Link href={item.href}>{item.label}</Link>
                  <button
                    type="button"
                    aria-label="Toggle services menu"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((value) => !value)}
                    onFocus={() => setServicesOpen(true)}
                  >
                    <span aria-hidden="true">⌄</span>
                  </button>
                </span>
                <div className={`ac-service-menu${servicesOpen ? " is-open" : ""}`}>
                  {serviceLinks.map((service) => (
                    <Link href="/services" key={service}>{service}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link className={isActive(item.href) ? "active" : undefined} href={item.href} key={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link className="ac-header-cta" href="/contact">Book Consultation <span aria-hidden="true">↗</span></Link>
        <button
          className="ac-menu-toggle"
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="ac-mobile-menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div id="ac-mobile-menu" className={`ac-mobile-menu${mobileOpen ? " is-open" : ""}`}>
        <div className="ac-mobile-menu-head">
          <Link className="ac-mobile-logo" href="/" onClick={closeMenu}><img src="/assets/img/always-compliant/always-compliant-logo.svg" alt="Always Compliant" /></Link>
          <button type="button" aria-label="Close navigation" onClick={() => setMobileOpen(false)}>×</button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) =>
            item.href === "/services" ? (
              <div className="ac-mobile-services" key={item.href}>
                <span className={isActive(item.href) ? "active" : undefined}>
                  <Link href="/services" onClick={closeMenu}>Services</Link>
                  <button type="button" aria-label="Toggle service links" aria-expanded={servicesOpen} onClick={() => setServicesOpen((value) => !value)}>+</button>
                </span>
                {servicesOpen && <div>{serviceLinks.map((service) => <Link href="/services" key={service} onClick={closeMenu}>{service}</Link>)}</div>}
              </div>
            ) : (
              <Link className={isActive(item.href) ? "active" : undefined} href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>
            ),
          )}
        </nav>
        <Link className="ac-header-cta" href="/contact" onClick={closeMenu}>Book Consultation <span aria-hidden="true">↗</span></Link>
      </div>
      <button className={`ac-menu-backdrop${mobileOpen ? " is-open" : ""}`} aria-label="Close navigation" tabIndex={mobileOpen ? 0 : -1} onClick={() => setMobileOpen(false)} />
    </header>
  );
}
