export default function Partners() {
  const partners = [
    {
      name: "Pentair",
      src: "/images/Logos/partners-logo/pentair-logo.png",
    },
    {
      name: "Hayward",
      src: "/images/Logos/partners-logo/hayward-logo.png",
    },
    {
      name: "Fluidra",
      src: "/images/Logos/partners-logo/fluidra-logo.png",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Credential badges */}
          <div className="space-y-4">
            {/* PHTA */}
            <div className="bg-[#f2f8fb] rounded-lg px-10 py-5 inline-flex items-center gap-4 shadow w-full max-w-sm">
              <span className="text-2xl font-heading font-bold text-dark">PHTA</span>
              <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold leading-tight">
                Certified Building<br />Professional
              </span>
            </div>

            {/* Years */}
            <div className="bg-[#f2f8fb] rounded-lg px-10 py-5 inline-flex items-center gap-4 shadow max-w-xs">
              <span className="text-3xl font-heading font-bold text-dark">30+</span>
              <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold leading-tight">
                Years Combined<br />Experience
              </span>
            </div>

            {/* Transformations */}
            <div className="bg-[#f2f8fb] rounded-lg px-10 py-5 inline-flex items-center gap-4 shadow w-full max-w-sm">
              <span className="text-3xl font-heading font-bold text-dark">1,600+</span>
              <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold leading-tight">
                Backyard<br />Transformations
              </span>
            </div>

            {/* BBB Accredited */}
            <div className="bg-[#f2f8fb] rounded-lg px-10 py-5 inline-flex items-center gap-4 shadow max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-[#005a8b]/10 rounded-lg p-2">
                  <svg className="w-8 h-8 text-[#005a8b]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z" opacity="0" />
                    <text x="4" y="18" fontSize="14" fontWeight="bold" fill="currentColor">BBB</text>
                  </svg>
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold leading-tight">
                  BBB<br />Accredited
                </span>
              </div>
            </div>

            {/* Licensed & Insured */}
            <div className="bg-[#f2f8fb] rounded-lg px-10 py-5 inline-flex items-center gap-4 shadow max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 rounded-lg p-2">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold leading-tight">
                  Licensed And<br />Fully Insured
                </span>
              </div>
            </div>

            {/* License */}
            <div className="bg-[#f2f8fb] rounded-lg px-10 py-5 shadow max-w-xs">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">California</p>
              <p className="text-xl font-heading font-bold text-dark">C53 License</p>
              <p className="text-xs text-gray-500">#945615, #1154897</p>
            </div>
          </div>

          {/* Right - Heading + Partners */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-dark leading-tight mb-8">
              Built on
              <br />
              Standards,
              <br />
              Not Shortcuts
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed mb-10 max-w-lg">
              Credentials matter. They&apos;re how you know a contractor takes
              their work seriously. Here&apos;s what we bring to every project:
            </p>

            <div className="border-t border-gray-300 pt-8">
              <h3 className="uppercase tracking-[0.2em] text-[11px] font-bold text-dark mb-6">
                Equipment Partners:
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-8">
                We exclusively install equipment from Hayward, Pentair, and
                Fluidra &mdash; industry leaders in reliability, efficiency, and
                innovation.
              </p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
                {partners.map((p) => (
                  <img
                    key={p.name}
                    src={p.src}
                    alt={p.name}
                    className="h-9 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
