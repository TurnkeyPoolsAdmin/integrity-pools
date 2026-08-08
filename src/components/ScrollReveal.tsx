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

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    for (const el of sections) {
      if (el.classList.contains("is-visible")) continue;
      el.setAttribute("data-reveal", "");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
