import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://thomaspools.us/assets/banner-img/Pool%20Drone%20001-06%201.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full pt-20">
        {/* Stars */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex text-accent text-xl">
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
          <span className="text-white/80 text-sm">Over 70+ Google Reviews</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-10">
          Your Backyard.
          <br />
          <span className="text-secondary-light">Reimagined.</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary-light text-white font-semibold text-lg px-10 py-4 rounded-full transition-colors inline-block"
          >
            Start Your Project →
          </Link>
          <a
            href="tel:6614959030"
            className="border-2 border-white text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (661) 495-9030
          </a>
        </div>
      </div>
    </section>
  );
}
