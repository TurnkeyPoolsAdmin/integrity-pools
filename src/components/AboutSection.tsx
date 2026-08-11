import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      {/* Featured testimonial with background image */}
      <section className="relative min-h-[585px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/one-person-review-img/pool1.webp')`,
            backgroundColor: "#1a2f42",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
            {/* Location tag */}
            <div className="lg:w-1/3 lg:pb-6">
              <p className="text-white uppercase tracking-widest text-xs font-semibold mb-2 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                Project Location
              </p>
              <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Temecula, CA
              </div>
            </div>
            {/* Quote card */}
            <div className="lg:w-[55%] lg:ml-auto bg-white/95 backdrop-blur-sm rounded-lg p-8 md:p-12">
              <p className="text-dark text-xl md:text-2xl font-bold leading-relaxed mb-6">
                &ldquo;We couldn&apos;t be more pleased with the results!&rdquo;
              </p>
              <p className="font-bold text-dark">Kristi A.</p>
              <div className="text-accent text-sm mt-1">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Integrity Difference */}
      <section className="py-32 bg-[#3bc2d1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big heading — three uniform lines, tight leading, off-white */}
          <h2 className="text-6xl md:text-8xl lg:text-[140px] font-heading font-extrabold text-[#f8f9f3] leading-[0.95] tracking-tight mb-16">
            The
            <br />
            INTEGRITY
            <br />
            Difference
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: tagline + photo */}
            <div>
              <p className="text-[#f8f9f3]/90 text-2xl font-bold mb-8">
                We build the pool right, then help the rest of your plan fit around it.
              </p>
              <div className="relative inline-block">
                <div
                  className="w-48 h-48 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center"
                  aria-label="Founder photo placeholder"
                >
                  <svg className="w-24 h-24 text-white/50" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                  </svg>
                </div>
                {/* Wave accent behind photo */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-40">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M0 20c10-10 20-10 30 0s20 10 30 0 20-10 30 0" stroke="white" strokeWidth="3" fill="none" />
                    <path d="M0 40c10-10 20-10 30 0s20 10 30 0 20-10 30 0" stroke="white" strokeWidth="3" fill="none" />
                    <path d="M0 60c10-10 20-10 30 0s20 10 30 0 20-10 30 0" stroke="white" strokeWidth="3" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-white text-xl font-bold">Ryan Osborne</p>
                <p className="text-white/70 text-sm">Founder, Integrity Pools</p>
              </div>
            </div>

            {/* Right: description */}
            <div className="space-y-6 text-white text-lg leading-relaxed">
              <p>
                Ryan started Integrity Pools in 2012 with one belief: building a pool should feel as good as the finished pool looks. He had seen too many families deal with vague pricing, poor communication, and contractors who disappeared when questions came up.
              </p>
              <p>
                So he built a pool company around clear plans, honest conversations, and personal accountability. Integrity stays focused on the pool, spa, and pool-hardscape work it knows best. When a project also includes landscaping, the right independent specialist can be involved early so the plans work together before construction begins.
              </p>
              <p>
                Ryan still meets homeowners and walks job sites in person. Customers know where the project stands, what happens next, and who is responsible. That is the Integrity difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href="/contact"
                  className="bg-dark text-white font-bold px-10 py-4 rounded-full hover:bg-dark/80 transition-colors text-center text-[15px]"
                >
                  Request My Free Design Consultation →
                </Link>
                <Link
                  href="/services"
                  className="bg-white text-dark font-bold px-10 py-4 rounded-full hover:bg-dark hover:text-white transition-colors text-center text-[15px]"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
