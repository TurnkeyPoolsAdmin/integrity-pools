"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative isolate min-h-[56rem] pt-5 flex flex-col justify-between overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-primary">
        <Image
          src="/images/banner-img/hero-handshake.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1220] via-[#0a1220]/80 to-[#0a1220]/10" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-36 lg:pt-44">
        {/* Trust Pills */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
          {["Licensed", "Insured", "Local"].map((label) => (
            <span
              key={label}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full"
            >
              <svg className="w-3.5 h-3.5 text-secondary-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {label}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 text-center lg:text-left"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Custom Pool Builder in
          <br />
          <span className="text-secondary-light underline decoration-secondary decoration-4 underline-offset-8">
            Menifee &amp; Inland Empire
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mb-10 text-center lg:text-left">
          Expert pool construction, remodeling, spas, and pool hardscapes for
          homeowners across the Inland Empire.
        </p>

        {/* Inline Lead Form */}
        <div className="max-w-2xl">
          <div className="bg-[#0d1a2b]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white text-lg sm:text-xl font-bold">
                Get Your <span className="text-secondary-light underline">Free</span> Design Consultation
              </h2>
              <span className="hidden sm:flex items-center gap-1.5 text-white/50 text-xs">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Takes 30 seconds
              </span>
            </div>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-bold text-lg">
                  Thanks{formData.name ? `, ${formData.name.split(" ")[0]}` : ""}!
                </p>
                <p className="text-white/60 text-sm mt-1">
                  We will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div>
                    <label htmlFor="hero-name" className="block text-white/70 text-xs font-semibold mb-1.5">Full Name</label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <input
                        type="text"
                        id="hero-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white text-sm placeholder-white/40 focus:border-secondary-light focus:ring-1 focus:ring-secondary-light outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="hero-phone" className="block text-white/70 text-xs font-semibold mb-1.5">Phone Number</label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <input
                        type="tel"
                        id="hero-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(951) 555-0123"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white text-sm placeholder-white/40 focus:border-secondary-light focus:ring-1 focus:ring-secondary-light outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="hero-address" className="block text-white/70 text-xs font-semibold mb-1.5">Property Address</label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <input
                        type="text"
                        id="hero-address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Property Address"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white text-sm placeholder-white/40 focus:border-secondary-light focus:ring-1 focus:ring-secondary-light outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-4 rounded-lg transition-colors text-base flex items-center justify-center gap-2"
                >
                  Request My Free Design Consultation <span>→</span>
                </button>

                <p className="text-center text-white/50 text-xs mt-3 flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  No obligation. 100% free consultation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Trust Badge Bar */}
      <div className="relative z-10 mt-10 lg:mt-auto">
        {/* Trust Badges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="max-w-2xl bg-[#0d1a2b]/80 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8">
            {/* Google Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex text-accent text-sm">★★★★★</div>
              <div>
                <p className="text-white text-xs font-bold">5.0 Rating</p>
                <p className="text-white/60 text-[10px]">70+ Google Reviews</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/20" />

            {/* Google */}
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm tracking-tight">Google</span>
              <div className="flex text-accent text-xs">★★★★★</div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/20" />

            {/* BBB */}
            <div className="flex items-center gap-1.5">
              <div className="bg-white/10 border border-white/20 rounded px-2 py-1">
                <span className="text-white text-[10px] font-bold uppercase tracking-wide">BBB</span>
              </div>
              <span className="text-white text-xs font-semibold">A+ Rating</span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/20" />

            {/* PHTA */}
            <div className="flex items-center gap-1.5">
              <div className="bg-white/10 border border-white/20 rounded px-2 py-1">
                <span className="text-white text-[10px] font-bold uppercase tracking-wide">PHTA</span>
              </div>
              <span className="text-white text-xs font-semibold">Certified</span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/20" />

            {/* Yelp */}
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm">Yelp</span>
              <div className="flex text-accent text-xs">★★★★★</div>
            </div>
          </div>
        </div>

        {/* Bottom Value Prop Strip */}
        <div className="w-full bg-dark/80 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Licensed, Insured & Certified",
                  subtitle: "PHTA Certified Pool Professionals",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ),
                  title: "Pools, Spas & Remodels",
                  subtitle: "Full-Service Pool Construction",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                  title: "Serving the Inland Empire Since 2012",
                  subtitle: "Proudly Based in Menifee, CA",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3 py-5 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-light">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">{item.title}</p>
                    <p className="text-white/50 text-xs">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
