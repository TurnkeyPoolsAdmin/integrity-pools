"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg font-heading">IP</span>
            </div>
            <div>
              <span className="text-primary font-heading font-bold text-xl block leading-tight">
                INTEGRITY POOLS
              </span>
              <span className="text-gray-medium text-xs tracking-widest uppercase">
                & Hardscapes
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-dark hover:text-secondary font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-dark hover:text-secondary font-medium transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-dark hover:text-secondary font-medium transition-colors">
              Gallery
            </Link>
            <Link href="/financing" className="text-dark hover:text-secondary font-medium transition-colors">
              Financing
            </Link>
            <Link href="/testimonials" className="text-dark hover:text-secondary font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-dark hover:text-secondary font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:6614959030" className="text-primary font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (661) 495-9030
            </a>
            <Link href="/contact" className="btn-primary text-sm">
              Free Consultation
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
            <Link href="/gallery" className="text-dark py-2 font-medium" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/financing" className="text-dark py-2 font-medium" onClick={() => setMobileOpen(false)}>Financing</Link>
            <Link href="/testimonials" className="text-dark py-2 font-medium" onClick={() => setMobileOpen(false)}>Testimonials</Link>
            <Link href="/contact" className="text-dark py-2 font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
            <a href="tel:6614959030" className="text-primary font-semibold py-2">(661) 495-9030</a>
            <Link href="/contact" className="btn-primary text-center text-sm mt-2" onClick={() => setMobileOpen(false)}>
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
