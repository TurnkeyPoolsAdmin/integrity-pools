import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      {/* Featured testimonial with background image */}
      <section className="relative min-h-[500px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/Everything-your-backyards-need/sept-24-2019-1.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {/* Location tag */}
            <div className="lg:w-1/3">
              <p className="text-white/80 uppercase tracking-widest text-xs font-semibold mb-2">
                Project Location
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Los Angeles, CA
              </div>
            </div>
            {/* Quote card */}
            <div className="lg:w-2/3 bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10">
              <p className="text-dark text-lg md:text-xl font-medium leading-relaxed mb-6">
                &ldquo;Integrity Pools does it all! I would recommend them to anyone looking
                for a local, friendly and professional pool company to work with. We had our
                pool done and still get compliments on how nice our pool is.&rdquo;
              </p>
              <p className="font-bold text-dark">Bree C.</p>
              <div className="text-accent text-sm mt-1">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Integrity Difference */}
      <section className="py-20 bg-[#4dd4e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big heading */}
          <h2 className="text-5xl md:text-7xl lg:text-[110px] font-heading font-bold text-white leading-none mb-12">
            The
            <br />
            <span className="text-5xl md:text-7xl lg:text-[130px]">INTEGRITY</span>
            <br />
            Difference
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: tagline + photo */}
            <div>
              <p className="text-dark text-xl font-semibold mb-8">
                Most pool companies build pools. We build backyards.
              </p>
              <div className="relative inline-block">
                <img
                  src="/images/the-thomas-difference/thomas-person.png"
                  alt="Company founder"
                  className="w-48 h-48 rounded-full object-cover"
                />
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
                <p className="text-white text-xl font-bold">Tom Reid</p>
                <p className="text-white/70 text-sm">Founder, Integrity Pools</p>
              </div>
            </div>

            {/* Right: description */}
            <div className="space-y-6 text-white text-lg leading-relaxed">
              <p>
                That means thinking beyond the waterline. It&apos;s the patio that connects
                your kitchen to your outdoor living space. The fire pit where you&apos;ll gather
                on cool evenings. The spa tucked into the corner where you&apos;ll actually unwind.
              </p>
              <p>
                Since 1990, we&apos;ve helped over 1,600 families across Los Angeles and Ventura
                Counties turn underused outdoor space into the place they actually want to be.
              </p>
              <p>
                Tom Reid, our owner, still walks every job site. Not because he has to, but
                because he cares how it turns out. That&apos;s the kind of company we&apos;ve always been.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href="/contact"
                  className="bg-dark text-white font-semibold px-8 py-3 rounded-full hover:bg-dark/80 transition-colors text-center text-sm"
                >
                  Start Your Project →
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-dark text-dark font-semibold px-8 py-3 rounded-full hover:bg-dark hover:text-white transition-colors text-center text-sm"
                >
                  Meet The Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
