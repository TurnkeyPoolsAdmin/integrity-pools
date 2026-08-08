import Link from "next/link";

const citiesLeft = [
  "Bakersfield", "Beverly Hills", "Brentwood", "Burbank", "Calabasas",
  "Camarillo", "Canyon Country", "Castaic", "Chatsworth", "Fillmore",
  "Glendale", "Hollywood Hills",
];

const citiesRight = [
  "Pacific Palisades", "Palmdale", "San Marino", "Santa Clarita",
  "Sherman Oaks", "Sierra Madre", "Simi Valley", "South Pasadena",
  "Thousand Oaks", "Valencia", "Ventura", "Victorville",
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function ServiceAreas() {
  return (
    <>
      {/* Hero with wave overlay */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/Ready-To-transform-your-backyard-section/dscn0269-1.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Wave overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" fill="none">
            <path d="M0 200c60-40 120-40 180 0s120 40 180 0 120-40 180 0 120 40 180 0 120-40 180 0 120 40 180 0" stroke="white" strokeWidth="40" fill="none" />
            <path d="M0 280c60-40 120-40 180 0s120 40 180 0 120-40 180 0 120 40 180 0 120-40 180 0 120 40 180 0" stroke="white" strokeWidth="40" fill="none" />
            <path d="M0 360c60-40 120-40 180 0s120 40 180 0 120-40 180 0 120 40 180 0 120-40 180 0 120 40 180 0" stroke="white" strokeWidth="40" fill="none" />
            <path d="M0 440c60-40 120-40 180 0s120 40 180 0 120-40 180 0 120 40 180 0 120-40 180 0 120 40 180 0" stroke="white" strokeWidth="40" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 text-center text-white py-20">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Service Areas
          </p>
          <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Proudly Serving
            <br />
            Southern California
          </h2>
        </div>
      </section>

      {/* Areas list + Showroom card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-12">
            <h3 className="text-2xl font-heading font-bold text-dark uppercase tracking-wide">
              Areas Served
            </h3>
            <p className="text-gray-600 max-w-md leading-relaxed">
              From our home base in Castaic, we&apos;ve built pools and outdoor
              spaces across Los Angeles County, Ventura County, and the
              Santa Clarita Valley. If you&apos;re within driving distance of our
              showroom, we can help.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* City columns */}
            <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-3">
              <div className="space-y-3">
                {citiesLeft.map((city) => (
                  <div key={city} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-dark font-medium">{city}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {citiesRight.map((city) => (
                  <div key={city} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-dark font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Showroom card */}
            <div className="lg:w-[400px] bg-secondary rounded-2xl p-10 text-white">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Showroom
                <br />
                Address
              </h3>
              <div className="border-l-4 border-white/30 pl-4 mb-8">
                <svg className="w-6 h-6 mb-2 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xl font-bold">29441 The Old Rd</p>
                <p className="text-xl font-bold">Castaic, CA 91384</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="bg-dark text-white font-semibold px-6 py-3 rounded-full hover:bg-dark/80 transition-colors text-center text-sm"
                >
                  Start Your Project →
                </Link>
                <a
                  href="tel:6614959030"
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (661) 495-9030
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
