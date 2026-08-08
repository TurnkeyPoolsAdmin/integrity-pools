import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://thomaspools.us/assets/banner-img/Pool%20Drone%20001-06%201.png')`,
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          {/* Stars */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-accent text-xl">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span className="text-white/80 text-sm">Over 70+ Google Reviews</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
            Your Backyard.{" "}
            <span className="text-secondary-light">Reimagined.</span>
          </h1>

          <p className="text-xl text-white/80 mb-10 max-w-lg">
            Custom pools, spas, and outdoor living spaces built by Southern California&apos;s
            most trusted team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-center text-lg px-8 py-4">
              Book Free Design Consultation
            </Link>
            <Link href="/gallery" className="btn-secondary text-center text-lg px-8 py-4">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
