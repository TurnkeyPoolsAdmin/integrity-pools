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
              <p className="text-dark text-xl md:text-2xl font-bold leading-relaxed mb-6">
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
      <section className="py-32 bg-[#4dd4e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big heading */}
          <h2 className="text-5xl md:text-7xl lg:text-[130px] font-heading font-extrabold text-[#f8f9f3] leading-[0.8] lg:leading-[120px] mb-12">
            The
            <br />
            <span className="text-5xl md:text-7xl lg:text-[150px]">INTEGRITY</span>
            <br />
            Difference
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: tagline + photo */}
            <div>
              <p className="text-[#f8f9f3]/90 text-2xl font-bold mb-8">
                Most pool companies build pools. We build backyards.
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
                Ryan started Integrity Pools in 2012 with one belief: building a pool
                should feel as good as the finished pool looks. He&apos;d watched too many
                families get burned by contractors who overpromised, went quiet, and left
                them guessing.
              </p>
              <p>
                So he built the opposite kind of company. One where you always know where
                things stand, the price you&apos;re quoted is the price you pay, and the crew
                treats your home like their own. Since then we&apos;ve helped hundreds of
                families across Los Angeles and Ventura Counties turn an underused backyard
                into the place they actually want to be.
              </p>
              <p>
                Ryan still meets homeowners himself and walks every job site in person. Not
                because he has to, but because he cares how it turns out. Empathy first,
                integrity always. That&apos;s the whole company in three words.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href="/contact"
                  className="bg-dark text-white font-bold px-10 py-4 rounded-full hover:bg-dark/80 transition-colors text-center text-[15px]"
                >
                  Start Your Project →
                </Link>
                <Link
                  href="/services"
                  className="bg-white text-dark font-bold px-10 py-4 rounded-full hover:bg-dark hover:text-white transition-colors text-center text-[15px]"
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
