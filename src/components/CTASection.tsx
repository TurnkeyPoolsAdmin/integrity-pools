export default function CTASection() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark leading-snug mb-6">
              Ready to See What Is Possible in Your Yard?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
              Start with a clear conversation about your property, priorities, and budget. We will help you understand the pool options that fit, the decisions that matter most, and how landscaping can be coordinated when it is part of the plan. No pressure and no vague sales pitch.
            </p>

            {/* Hours box */}
            <div className="border-l-4 border-gray-200 pl-4 mb-8 max-w-xs">
              <p className="text-xs uppercase tracking-normal font-normal text-gray-500 mb-1">Hours:</p>
              <p className="text-gray-600 text-sm">Mon-Sat: 9am-5pm</p>
              <p className="text-gray-600 text-sm">Sun: By Appointment</p>
            </div>

            <a
              href="tel:9514447150"
              className="border border-dark text-dark font-medium px-6 py-3 rounded-full hover:bg-dark hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (951) 444-7150
            </a>
          </div>

          {/* Right - Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img loading="lazy" decoding="async"
              src="/images/Ready-To-transform-your-backyard-section/dscn0269-1.webp"
              alt="Beautiful backyard with pool"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
