"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: no backend wired up yet. Show an inline confirmation.
    // Drop a real endpoint (GHL, email, etc.) into this handler when ready.
    setSubmitted(true);
  };

  return (
    <section className="relative mx-4 my-10 rounded-[2.5rem] bg-dark min-h-[700px] overflow-hidden">
      {/* Background photo + dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/Ready-To-transform-your-backyard-section/dscn0269-1.webp')`,
          backgroundColor: "#1a2f42",
        }}
      />
      <div className="absolute inset-0 bg-dark/90" />
      {/* Wave pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M0 100c40-30 80-30 120 0s80 30 120 0 80-30 120 0 80 30 120 0 80-30 120 0 80 30 120 0 80-30 120 0" stroke="white" strokeWidth="20" fill="none" />
          <path d="M0 200c40-30 80-30 120 0s80 30 120 0 80-30 120 0 80 30 120 0 80-30 120 0 80 30 120 0 80-30 120 0" stroke="white" strokeWidth="20" fill="none" />
          <path d="M0 300c40-30 80-30 120 0s80 30 120 0 80-30 120 0 80 30 120 0 80-30 120 0 80 30 120 0 80-30 120 0" stroke="white" strokeWidth="20" fill="none" />
          <path d="M0 400c40-30 80-30 120 0s80 30 120 0 80-30 120 0 80 30 120 0 80-30 120 0 80 30 120 0 80-30 120 0" stroke="white" strokeWidth="20" fill="none" />
          <path d="M0 500c40-30 80-30 120 0s80 30 120 0 80-30 120 0 80 30 120 0 80-30 120 0 80 30 120 0 80-30 120 0" stroke="white" strokeWidth="20" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="p-8 md:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left side - text */}
            <div>
              <p className="text-white/60 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                Contact Us
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight mb-6">
                Let&apos;s Build Your
                <br />
                Pool Plan
              </h2>
              <p className="text-white font-medium leading-relaxed max-w-md">
                Tell us what you want from your pool, spa, remodel, or pool-hardscape project. If landscaping is part of the larger plan, include that too so we can discuss coordination from the start. We will reach out within 24 hours.
              </p>
            </div>

            {/* Right side - form */}
            <div>
              {submitted ? (
                <div className="bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">
                    Thanks{formData.name ? `, ${formData.name.split(" ")[0]}` : ""}!
                  </h3>
                  <p className="text-white/70 leading-relaxed max-w-sm mx-auto">
                    We got your request and will reach out within 24 hours to talk
                    through your project.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
                    }}
                    className="mt-6 text-secondary-light font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all appearance-none"
                  >
                    <option value="" className="text-dark">Select</option>
                    <option value="New Pool" className="text-dark">New Pool</option>
                    <option value="Pool Remodel" className="text-dark">Pool Remodel</option>
                    <option value="Spa / Hot Tub" className="text-dark">Spa / Hot Tub</option>
                    <option value="Pool Decking / Hardscape" className="text-dark">Pool Decking / Hardscape</option>
                    <option value="Fire Features" className="text-dark">Fire Features</option>
                    <option value="Outdoor Kitchen" className="text-dark">Outdoor Kitchen</option>
                    <option value="Pool + Landscape Coordination" className="text-dark">Pool + Landscape Coordination</option>
                    <option value="Other" className="text-dark">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                    placeholder="Enter Project Details"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-4 rounded-full transition-colors text-sm"
                >
                  Get My Free Pool Plan →
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
