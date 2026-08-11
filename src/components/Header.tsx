"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Wave icon */}
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="text-primary">
              <rect width="40" height="40" rx="4" fill="currentColor" />
              <path d="M8 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M8 22c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M8 30c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
            <span className="text-primary font-heading font-bold text-xl tracking-wide">
              INTEGRITY
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-dark hover:text-secondary font-medium transition-colors text-[15px]">
              Home
            </Link>
            <Link href="/services" className="text-dark hover:text-secondary font-medium transition-colors text-[15px]">
              Services
            </Link>
            <Link href="/financing" className="text-dark hover:text-secondary font-medium transition-colors text-[15px]">
              Financing
            </Link>
          </nav>

          {/* Call CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:9514447150"
              className="flex items-center gap-3 bg-secondary hover:bg-secondary-light transition-colors rounded-full pl-4 pr-6 py-2"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                </svg>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-white font-bold text-[15px]">(951) 444-7150</span>
                <span className="text-white/80 text-[11px]">Call Now • Open 7 Days</span>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 gap-3">
            <Link href="/" className="text-dark py-2 font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/services" className="text-dark py-2 font-medium" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link href="/financing" className="text-dark py-2 font-medium" onClick={() => setMobileOpen(false)}>Financing</Link>
            <a
              href="tel:9514447150"
              className="flex flex-col items-center bg-secondary text-white text-center px-6 py-2.5 rounded-full mt-2 leading-tight"
              onClick={() => setMobileOpen(false)}
            >
              <span className="font-bold text-sm">(951) 444-7150</span>
              <span className="text-white/80 text-[11px]">Call Now • Open 7 Days</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
