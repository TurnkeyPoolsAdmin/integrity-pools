import Link from "next/link";

const steps = [
  {
    step: "Step 1",
    title: "Consultation",
    desc: "We visit your property, listen to your vision, and discuss what's realistic for your space and budget. No pressure. No obligation.",
    img: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_MiWGoGARyDQ-3.png",
  },
  {
    step: "Step 2",
    title: "Design",
    desc: "Our team creates detailed plans and 3D renderings so you can see exactly what you're getting before we break ground.",
    img: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_MiWGoGARyDQ.png",
  },
  {
    step: "Step 3",
    title: "Permits & Prep",
    desc: "We handle all permitting and city requirements. You shouldn't have to navigate bureaucracy.",
    img: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_UCMH1MNP5Fo.png",
  },
  {
    step: "Step 4",
    title: "Construction",
    desc: "Our crews and trusted subcontractors execute the build while keeping you informed at every milestone.",
    img: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_MiWGoGARyDQ-1.png",
  },
  {
    step: "Step 5",
    title: "Final Walkthrough",
    desc: "We don't disappear after the last tile is set. We walk you through everything and make sure you're completely satisfied.",
    img: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_MiWGoGARyDQ-2.png",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            How We Work With You
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 hidden lg:block" />

          <div className="space-y-16">
            {steps.map((s, i) => (
              <div key={i} className="relative flex flex-col lg:flex-row items-center gap-8">
                {/* Image - always on the left */}
                <div className="lg:w-5/12">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-60 object-cover"
                    />
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-4 h-4 rounded-full bg-secondary border-4 border-dark z-10" />
                </div>

                {/* Content - always on the right */}
                <div className="lg:w-5/12">
                  <p className="text-secondary font-semibold text-sm mb-1">{s.step}</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
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
              href="tel:6614959030"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2 text-sm"
            >
              (661) 495-9030
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
