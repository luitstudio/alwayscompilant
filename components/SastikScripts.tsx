"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const scripts = [
  "jquery-3.7.1.min.js",
  "bootstrap.bundle.min.js",
  "swiper.min.js",
  "wow.min.js",
  "appear.js",
  "imagesloaded.pkgd.min.js",
  "isotope.pkgd.min.js",
  "jquery.nice-select.min.js",
  "jquery.marquee.min.js",
  "jquery.magnific-popup.min.js",
  "jqueryui.js",
  "odometer.min.js",
  "parallaxie.js",
  "parallax.min.js",
  "parallax-scroll.js",
  "easing.min.js",
  "scrollspy.js",
  "plugin.js",
  "lenis.js",
  "main.js",
];

export function SastikScripts() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || !window.matchMedia("(max-width: 767px)").matches) return;

    const items = document.querySelectorAll<HTMLElement>(".introduction .ac-mobile-reveal");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    let cancelled = false;

    async function loadScripts() {
      for (const script of scripts) {
        if (cancelled) return;

        const src = `/assets/js/${script}`;
        const existing = document.querySelector<HTMLScriptElement>(
          `script[data-sastik-script="${script}"]`,
        );

        if (existing?.dataset.loaded === "true") continue;

        await new Promise<void>((resolve, reject) => {
          const element = existing ?? document.createElement("script");

          if (!existing) {
            element.src = src;
            element.async = false;
            element.dataset.sastikScript = script;
          }

          element.addEventListener(
            "load",
            () => {
              element.dataset.loaded = "true";
              resolve();
            },
            { once: true },
          );
          element.addEventListener("error", () => reject(new Error(`Unable to load ${src}`)), {
            once: true,
          });

          if (!existing) document.body.appendChild(element);
        });
      }
    }

    void loadScripts();

    const fallback = window.setTimeout(() => {
      const loader = document.getElementById("preloader");
      if (loader && getComputedStyle(loader).display !== "none") {
        loader.style.display = "none";
        document
          .querySelectorAll<HTMLElement>(
            ".heroTitleUp, .xbFadeUp, .xbFadeUpContent, .xbFadeUpImg, .xbFadeUpItem",
          )
          .forEach((element) => {
            element.style.opacity = "1";
            element.style.visibility = "visible";
          });
      }
    }, 2600);

    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
