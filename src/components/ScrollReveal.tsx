"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds a subtle fade-and-rise as each section scrolls into view.
 * - No markup changes needed: it tags every <section> inside <main>.
 * - Safe with JS disabled (nothing is hidden until this runs).
 * - Honors prefers-reduced-motion.
 * - Re-scans on client-side route changes.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section")
    );
    if (!sections.length) return;

    const reveal = (el: HTMLElement) => {
      el.setAttribute("data-reveal", "shown");
    };

    // If IntersectionObserver is unavailable, just show everything.
    if (typeof IntersectionObserver === "undefined") {
      sections.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    for (const el of sections) {
      if (el.getAttribute("data-reveal") === "shown") continue;
      el.setAttribute("data-reveal", "hidden");
      observer.observe(el);
    }

    // Safety net: reveal anything already in view on the next frame, so
    // above-the-fold content never waits on (or gets stuck behind) the observer.
    const raf = requestAnimationFrame(() => {
      for (const el of sections) {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          reveal(el);
          observer.unobserve(el);
        }
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
