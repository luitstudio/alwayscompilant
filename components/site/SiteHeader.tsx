"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

const serviceLinks = [
  "GST Filing",
  "Company Registration",
  "ROC Compliance",
  "Trademark Registration",
  "Income Tax Filing",
] as const;

type HeaderContentProps = {
  mobileOpen: boolean;
  servicesOpen: boolean;
  menuId: string;
  isActive: (href: string) => boolean;
  onClose: () => void;
  onMenuToggle: () => void;
  onServicesToggle: () => void;
  logoPriority?: boolean;
};

function HeaderContent({ mobileOpen, servicesOpen, menuId, isActive, onClose, onMenuToggle, onServicesToggle, logoPriority = false }: HeaderContentProps) {
  return (
    <div className="container">
      <div className="header__wrap ul_li_between">
        <div className="xb-header-logo">
          <Link href="/" className="logo" aria-label="Always Compliant home"><Image src="/assets/img/always-compliant/always-compliant-logo-white.svg" alt="Always Compliant" width={132} height={28} priority={logoPriority} /></Link>
        </div>
        <div className="main-menu__wrap navbar navbar-expand-lg p-0">
          <nav className="main-menu collapse navbar-collapse" aria-label="Primary navigation">
            <ul>
              {navigation.map((item) => (
                <li className={`${item.href === "/services" ? "menu-item-has-children " : ""}${isActive(item.href) ? "active" : ""}`.trim() || undefined} key={item.href}>
                  <Link href={item.href}><span>{item.label}</span></Link>
                  {item.href === "/services" && <ul className="submenu">{serviceLinks.map((service) => <li key={service}><Link href="/services"><span>{service}</span></Link></li>)}</ul>}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="xb-header-btn d-lg-block d-none">
          <Link className="thm-btn thm-btn--gradient2" data-split-link="" aria-label="Book Consultation" href="/contact">
            <div className="inner"><div className="text" data-link-shadow="">Book Consultation</div><div className="arrow"><Image src="/assets/img/icon/sms-icon02.svg" alt="" width={15} height={15} /></div></div>
            <div className="btn-shape"><div className="shape shape--1"></div><div className="shape shape--2"></div><div className="shape shape--3"></div></div>
          </Link>
        </div>
        <div className="header-bar-mobile side-menu d-lg-none">
          <button className={`xb-nav-mobile ac-mobile-menu-toggle${mobileOpen ? " active" : ""}`} type="button" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} aria-controls={menuId} onClick={onMenuToggle}><span></span><span></span><span></span></button>
        </div>
      </div>
      <div className="xb-header-wrap">
        <div className={`xb-header-menu${mobileOpen ? " active" : ""}`} id={menuId} aria-hidden={!mobileOpen}>
          <div className="xb-header-menu-scroll">
            <button className="xb-menu-close xb-hide-xl xb-close" type="button" aria-label="Close navigation" onClick={onClose}></button>
            <div className="xb-logo-mobile xb-hide-xl"><Link href="/" rel="home" onClick={onClose}><Image src="/assets/img/always-compliant/always-compliant-logo.svg" alt="Always Compliant" width={132} height={28} /></Link></div>
            <nav className="xb-header-nav" aria-label="Mobile navigation">
              <ul className="xb-menu-primary clearfix">
                {navigation.map((item) => (
                  <li className={`${item.href === "/services" ? "menu-item menu-item-has-children " : "menu-item "}${isActive(item.href) ? "active" : ""}`.trim()} key={item.href}>
                    <Link href={item.href} onClick={onClose}><span>{item.label}</span></Link>
                    {item.href === "/services" && (
                      <>
                        <ul className={`sub-menu${servicesOpen ? " active" : ""}`} style={{ display: servicesOpen ? "block" : undefined }}>
                          {serviceLinks.map((service) => <li key={service}><Link href="/services" onClick={onClose}><span>{service}</span></Link></li>)}
                        </ul>
                        <span className={`xb-menu-toggle ac-mobile-services-toggle${servicesOpen ? " active" : ""}`} role="button" tabIndex={0} aria-label="Toggle service links" aria-expanded={servicesOpen} onClick={onServicesToggle} onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            onServicesToggle();
                          }
                        }}></span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="ac-mobile-actions">
              <Link className="thm-btn thm-btn--gradient2 ac-mobile-consultation" href="/contact" onClick={onClose}><span className="inner"><span className="text">Book Consultation</span></span></Link>
            </div>
          </div>
        </div>
        <div className="xb-header-menu-backdrop" role="button" tabIndex={mobileOpen ? 0 : -1} aria-label="Close navigation" onClick={onClose}></div>
      </div>
    </div>
  );
}

export function SiteHeader({ legacyBehavior = false }: { legacyBehavior?: boolean }) {
  const pathname = usePathname();
  const previousScrollY = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    if (legacyBehavior) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setStickyVisible(currentScrollY > 100 && currentScrollY < previousScrollY.current);
      previousScrollY.current = currentScrollY;
    };
    previousScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [legacyBehavior]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("ac-mobile-menu-open", mobileOpen);
    return () => document.body.classList.remove("ac-mobile-menu-open");
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };
  const toggleMenu = () => {
    setMobileOpen((open) => !open);
  };
  const sharedProps = {
    mobileOpen,
    servicesOpen,
    isActive,
    onClose: closeMenu,
    onMenuToggle: toggleMenu,
    onServicesToggle: () => setServicesOpen((open) => !open),
  };

  return (
    <header id="xb-header-area" className="header-area header-area--three header-transparent is-sticky">
      <div className={`xb-header stricky${legacyBehavior ? "" : " original"}`}><HeaderContent {...sharedProps} menuId="ac-mobile-nav" logoPriority /></div>
      {!legacyBehavior && <div className={`xb-header stricky xb-header-area-sticky xb-sticky-stt${stickyVisible ? " xb-header-fixed" : ""}`}><HeaderContent {...sharedProps} menuId="ac-mobile-nav-sticky" /></div>}
    </header>
  );
}
