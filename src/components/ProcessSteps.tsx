import Link from "next/link";

const steps = [
  {
    step: "Step 1",
    title: "Consultation",
    desc: "We visit your property, listen to your vision, and discuss what's realistic for your space and budget. No pressure. No obligation.",
    img: "/images/how-we-wrok-with-you/unsplash-miwgogarydq-3.webp",
  },
  {
    step: "Step 2",
    title: "Design",
    desc: "Our team creates detailed plans and 3D renderings so you can see exactly what you're getting before we break ground.",
    img: "/images/how-we-wrok-with-you/unsplash-miwgogarydq.webp",
  },
  {
    step: "Step 3",
    title: "Permits & Prep",
    desc: "We handle all permitting and city requirements. You shouldn't have to navigate bureaucracy.",
    img: "/images/how-we-wrok-with-you/unsplash-ucmh1mnp5fo.webp",
  },
  {
    step: "Step 4",
    title: "Construction",
    desc: "Our crews and trusted subcontractors execute the build while keeping you informed at every milestone.",
    img: "/images/how-we-wrok-with-you/unsplash-miwgogarydq-1.webp",
  },
  {
    step: "Step 5",
    title: "Final Walkthrough",
    desc: "We don't disappear after the last tile is set. We walk you through everything and make sure you're completely satisfied.",
    img: "/images/how-we-wrok-with-you/unsplash-miwgogarydq-2.webp",
  },
];

export default function ProcessSteps() {
  return (
    <section className="pt-20 pb-20 lg:pt-32 lg:pb-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 lg:mb-24">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
            How We Work With You
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 hidden lg:block" />

          <div className="space-y-16">
            {steps.map((s, i) => (
              <div key={i} className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-secondary border-4 border-dark z-10" />
                </div>

                {/* Image - always on the left */}
                <div className="relative z-10">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img loading="lazy" decoding="async"
                      src={s.img}
                      alt={s.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>

                {/* Content - always on the right */}
                <div className="lg:pl-10">
                  <p className="text-secondary font-semibold text-sm mb-1">{s.step}</p>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs at the end of timeline */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
            >
              Start Your Project →
            </Link>
            <a
              href="tel:9514447150"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2 text-sm"
            >
              (951) 444-7150
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
