import Link from "next/link";
import Image from "next/image";

const stats = [
  { eyebrow: "", number: "30+", caption: "Years Combined Pool Experience" },
  { eyebrow: "", number: "1,600+", caption: "Pool Projects Completed" },
  { eyebrow: "", number: "", caption: "Serving Temecula to Riverside" },
];

export default function Hero() {
  return (
    <section className="relative isolate h-[57.5rem] pt-5 flex flex-col justify-between overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-primary">
        <Image
          src="/images/banner-img/pool-drone-001-06-1.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center lg:text-left px-4 sm:px-6 lg:px-0 lg:ml-52 pt-48">
        {/* Stars + reviews line */}
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
          <div className="flex text-white text-xs">
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
          <span className="text-white text-xs font-semibold uppercase tracking-widest">
            70+ Google Reviews
          </span>
        </div>

        {/* inline font style: the global h1 { font-family } rule is unlayered CSS and
            beats Tailwind's layered font-sans utility under v4 cascade layers */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Menifee&apos;s Trusted
          <br />
          Custom Pool Builder
        </h1>

        {/* CTA row floats right-of-center, right edge mirroring the copy's left inset */}
        <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-end gap-4 lg:mr-52">
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary-light text-white font-bold text-base px-8 py-4 rounded-full transition-colors inline-flex items-center gap-2"
          >
            Request My Free Design Consultation <span>→</span>
          </Link>
          <Link
            href="/gallery"
            className="border border-secondary text-white font-bold text-base px-8 py-4 rounded-full hover:border-white transition-colors inline-block text-center"
          >
            See Our Pools
          </Link>
        </div>
      </div>

      {/* Stats band pinned to the bottom of the hero */}
      <div className="hidden md:block w-full bg-dark/40 backdrop-blur-md border-t border-white/10 lg:mb-10">
        <div className="max-w-7xl mx-auto bg-primary/60">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.caption} className="text-center py-10 px-6">
                {s.eyebrow && (
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] mb-1">
                    {s.eyebrow}
                  </p>
                )}
                {s.number && (
                  <p className="text-5xl font-bold text-white mb-1">{s.number}</p>
                )}
                <p className={`text-white/80 text-xs uppercase tracking-widest ${!s.number ? "text-lg font-semibold text-white mt-2" : ""}`}>{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
