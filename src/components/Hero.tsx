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
            Book Free Design Consultation →
          </Link>
          <Link
            href="/gallery"
            className="border-2 border-white text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-colors inline-block text-center"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
