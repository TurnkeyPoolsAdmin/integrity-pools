const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "We visit your property, listen to your vision, and discuss what's realistic for your space and budget. No pressure. No obligation.",
    img: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_MiWGoGARyDQ-3.png",
  },
  {
    number: "02",
    title: "Design",
    desc: "Our team creates detailed plans and 3D renderings so you can see exactly what you're getting before we break ground.",
    img: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_MiWGoGARyDQ.png",
  },
  {
    number: "03",
    title: "Permits & Prep",
    desc: "We handle all permitting and city requirements. You shouldn't have to navigate bureaucracy.",
    img: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_UCMH1MNP5Fo.png",
  },
  {
    number: "04",
    title: "Construction",
    desc: "Our crews and trusted subcontractors execute the build while keeping you informed at every milestone.",
    img: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_MiWGoGARyDQ-1.png",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    desc: "We don't disappear after the last tile is set. We walk you through everything and make sure you're completely satisfied.",
    img: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_MiWGoGARyDQ-2.png",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4">
            How We Work With You
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A clear, transparent process from first conversation to final walkthrough.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-heading font-bold text-secondary/20">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
