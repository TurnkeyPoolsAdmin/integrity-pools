export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://thomaspools.us/assets/the-thomas-difference/thomas-person.png"
                alt="Company founder"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-xl p-6 shadow-lg hidden md:block">
              <p className="text-3xl font-heading font-bold">30+</p>
              <p className="text-blue-200 text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2">
              The Difference
            </p>
            <h2 className="text-4xl font-heading font-bold text-dark mb-6">
              Most pool companies build pools.{" "}
              <span className="text-secondary">We build backyards.</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                That means thinking beyond the waterline. It&apos;s the patio that connects
                your kitchen to your outdoor living space. The fire pit where you&apos;ll gather
                on cool evenings. The spa tucked into the corner where you&apos;ll actually unwind.
              </p>
              <p>
                Since 1990, we&apos;ve helped over 1,600 families across Los Angeles and Ventura
                Counties turn underused outdoor space into the place they actually want to be.
              </p>
              <p>
                Tom Reid, our owner, still walks every job site. Not because he has to, but
                because he cares how it turns out. That&apos;s the kind of company we&apos;ve always been.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
