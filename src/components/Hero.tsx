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
    <section className="relative isolate min-h-[54rem] pt-5 flex flex-col justify-between overflow-hidden bg-[#0a1220]">
      {/* Background Image + left-to-right ombre */}
      <div className="absolute inset-0 -z-10 bg-[#0a1220]">
        <Image
          src="/images/banner-img/hero-handshake.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1220] from-8% via-[#0a1220]/85 via-38% to-transparent to-75%" />
      </div>

      {/* Main Content — constrained left column like the demo */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 lg:pt-36">
        <div className="max-w-[590px]">
          {/* Trust Pills */}
          <div className="inline-flex items-center gap-0 bg-white/5 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-3.5 h-3.5 text-secondary-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {["Licensed", "Insured", "Local"].map((label, i) => (
              <span key={label} className="flex items-center text-white/90 text-[11px] font-semibold uppercase tracking-wider">
                {i > 0 && <span className="mx-2.5 text-white/25">|</span>}
                {label}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.9rem] font-extrabold text-white leading-[1.08] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            #1 Custom Pool
            <br />
            Builder in{" "}
            <span className="relative inline-block text-secondary-light">
              Menifee
              <svg
                className="absolute left-0 -bottom-2 w-full text-secondary-light"
                viewBox="0 0 220 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M3 9C60 3 160 3 217 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/85 text-base sm:text-lg leading-snug mb-8">
            Expert pool design, construction and remodeling for
            <br className="hidden sm:block" />
            homeowners across Menifee and the Inland Empire.
          </p>

          {/* Lead Form Card — demo-exact */}
          <div className="bg-[#0c1626]/75 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-lg sm:text-xl font-bold">
                Get Your <span className="text-secondary-light">Free</span> Pool Quote
              </h2>
              <span className="hidden sm:flex items-center gap-1.5 text-white/45 text-xs">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <label htmlFor="hero-name" className="block text-white/80 text-xs font-semibold mb-1.5">Full Name</label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <input
                        type="text"
                        id="hero-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full pl-9 pr-3 py-3 rounded-lg bg-[#121f33] border border-white/10 text-white text-sm placeholder-white/35 focus:border-secondary-light focus:ring-1 focus:ring-secondary-light outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="hero-phone" className="block text-white/80 text-xs font-semibold mb-1.5">Phone Number</label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <input
                        type="tel"
                        id="hero-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(951) 444-7150"
                        className="w-full pl-9 pr-3 py-3 rounded-lg bg-[#121f33] border border-white/10 text-white text-sm placeholder-white/35 focus:border-secondary-light focus:ring-1 focus:ring-secondary-light outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="hero-address" className="block text-white/80 text-xs font-semibold mb-1.5">Property Address</label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <input
                        type="text"
                        id="hero-address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Your Address"
                        className="w-full pl-9 pr-3 py-3 rounded-lg bg-[#121f33] border border-white/10 text-white text-sm placeholder-white/35 focus:border-secondary-light focus:ring-1 focus:ring-secondary-light outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-3.5 rounded-lg transition-colors text-base flex items-center justify-center gap-2"
                >
                  Get My Free Quote <span aria-hidden="true">→</span>
                </button>

                <p className="text-center text-white/45 text-xs mt-3 flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  No obligation. 100% free estimate.
                </p>
              </form>
            )}
          </div>

          {/* Trust Badge Bar — dark pill under the form, demo-exact */}
          <div className="mt-4 bg-[#0c1626]/75 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3.5 flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="flex text-accent text-sm leading-none">★★★★★</span>
                  <span className="text-white text-xs font-bold">5.0 Rating</span>
                </div>
                <span className="text-white/50 text-[10px] mt-0.5">70+ Happy Homeowners</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-base leading-none tracking-tight">Google</span>
              <span className="flex text-accent text-[10px] leading-none mt-1">★★★★★</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="bg-white/10 border border-white/20 rounded px-1.5 py-0.5 text-white text-[10px] font-bold">BBB</span>
              <span className="flex flex-col leading-tight">
                <span className="text-white text-[10px] font-bold uppercase">Accredited</span>
                <span className="text-white/50 text-[9px] uppercase">Business</span>
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white text-sm font-extrabold italic">PHTA</span>
              <span className="text-white/50 text-[9px]">Certified Pool Builder</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-base leading-none">yelp</span>
              <span className="flex text-accent text-[10px] leading-none mt-1">★★★★★</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Value Prop Strip — aligned with the form column */}
      <div className="relative z-10 mt-6 mb-8 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[590px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Fast & Reliable",
                subtitle: "Most Quotes Same Day",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: "Family Owned & Local",
                subtitle: "Serving the Inland Empire",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-2 py-1">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-light">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white text-[12px] font-bold leading-tight whitespace-nowrap">{item.title}</p>
                  <p className="text-white/50 text-[10px] leading-tight whitespace-nowrap">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
