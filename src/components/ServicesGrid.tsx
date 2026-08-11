import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "New Pool Construction",
    desc: "Custom pools designed around your property, your priorities, and the way your family wants to enjoy the water.",
    img: "/images/photo-gallery/modern-pools/0000.webp",
  },
  {
    title: "Pool Remodeling",
    desc: "Update worn finishes, aging equipment, and outdated features so your existing pool looks better and works better.",
    img: "/images/Everything-your-backyards-need/img-7216-1.webp",
  },
  {
    title: "Spas & Water Features",
    desc: "Integrated spas, spillovers, therapeutic jets, and water features that add comfort, movement, and a stronger focal point.",
    img: "/images/Everything-your-backyards-need/july-7-2020-1.webp",
  },
  {
    title: "Pool Decking & Hardscapes",
    desc: "Coping, pavers, concrete, and stonework that create a safe, comfortable connection between the pool and the yard.",
    img: "/images/Everything-your-backyards-need/mar-16-2022-1.webp",
  },
  {
    title: "Fire Features",
    desc: "Fire bowls, fire pits, and linear features that add warmth, contrast, and evening atmosphere around the pool.",
    img: "/images/Everything-your-backyards-need/sept-24-2019-1.webp",
  },
  {
    title: "Outdoor Kitchens",
    desc: "Grills, counters, and gathering spaces planned to make outdoor meals and pool days easier to enjoy.",
    img: "/images/photo-gallery/outdoor-living/1102171046.webp",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with wave accent */}
        <div className="relative mb-14 lg:mb-24">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
                Our Services
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-dark leading-tight">
                Everything Your
                <br />
                Pool Project Needs
              </h2>
            </div>
            {/* Decorative wave */}
            <div className="hidden lg:block opacity-20">
              <svg width="300" height="120" viewBox="0 0 300 120" fill="none">
                <path d="M0 30c25-20 50-20 75 0s50 20 75 0 50-20 75 0 50 20 75 0" stroke="#1a3a5c" strokeWidth="4" fill="none" />
                <path d="M0 60c25-20 50-20 75 0s50 20 75 0 50-20 75 0 50 20 75 0" stroke="#1a3a5c" strokeWidth="4" fill="none" />
                <path d="M0 90c25-20 50-20 75 0s50 20 75 0 50-20 75 0 50 20 75 0" stroke="#1a3a5c" strokeWidth="4" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {services.map((s) => (
            <div key={s.title} className="group">
              <div className="relative h-56 rounded-2xl overflow-hidden mb-4 shadow-sm">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{s.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-3">{s.desc}</p>
              <Link
                href="/services"
                className="text-secondary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                View Service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary-light text-white font-bold px-10 py-4 rounded-full transition-colors text-base"
          >
            Get My Free Pool Plan →
          </Link>
          <a
            href="tel:9514447150"
            className="border-2 border-dark text-dark font-bold px-10 py-4 rounded-full hover:bg-dark hover:text-white transition-colors inline-flex items-center gap-2 text-base"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (951) 444-7150
          </a>
        </div>
      </div>
    </section>
  );
}
