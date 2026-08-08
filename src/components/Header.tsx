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

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a href="tel:9514447150" className="text-dark font-semibold flex items-center gap-2 text-[15px]">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (951) 444-7150
            </a>
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-light transition-colors"
            >
              Contact Us
            </Link>
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
            <a href="tel:9514447150" className="text-primary font-semibold py-2">(951) 444-7150</a>
            <Link
              href="/contact"
              className="bg-primary text-white text-center px-6 py-2.5 rounded-full text-sm font-semibold mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
