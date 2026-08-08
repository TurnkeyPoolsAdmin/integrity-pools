import Link from "next/link";

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "One Team, Start to Finish",
    desc: "No handoffs. No confusion. Our team personally oversees every project from design through final walkthrough.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Safety-First Construction",
    desc: "Certified in pool safety systems and drowning prevention. Your family's protection is built into every design.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Financing That Works",
    desc: "Flexible payment options so you can build the backyard you want on a timeline that makes sense.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "PHTA Certified",
    desc: "We hold the industry's top credential for pool construction professionals. Not all builders can say that.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Premium Equipment Partners",
    desc: "We install Hayward, Pentair, and Fluidra systems, the most reliable names in pool technology.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    title: "Full Backyard Capability",
    desc: "Pools, spas, fire features, outdoor kitchens, hardscaping. One contractor. One relationship. One vision.",
  },
];

export default function Benefits() {
  return (
    <>
      {/* Pool water wave divider */}
      <div className="relative w-full overflow-hidden">
        <svg viewBox="0 0 1440 120" className="w-full h-[80px] md:h-[120px]" preserveAspectRatio="none">
          <path d="M0 60C180 120 360 0 540 60C720 120 900 0 1080 60C1260 120 1440 0 1440 60V0H0V60Z" fill="#f8fafc" />
        </svg>
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://thomaspools.us/assets/Everything-your-backyards-need/pool-water-bg.png')`,
          }}
        />
        <div className="h-[200px] md:h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://thomaspools.us/assets/Everything-your-backyards-need/pool-water-bg.png')`,
          }}
        />
        <svg viewBox="0 0 1440 120" className="w-full h-[80px] md:h-[120px]" preserveAspectRatio="none">
          <path d="M0 60C180 0 360 120 540 60C720 0 900 120 1080 60C1260 0 1440 120 1440 60V120H0V60Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Benefits section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Benefits Over The Others
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">
              Why Homeowners
              <br />
              Choose Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-primary rounded-2xl p-8 hover:bg-primary-light transition-colors"
              >
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-6 text-secondary">
                  {b.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{b.title}</h3>
                <p className="text-blue-200 leading-relaxed text-sm">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
            >
              Start Your Project →
            </Link>
            <a
              href="tel:6614959030"
              className="border-2 border-dark text-dark font-semibold px-8 py-3 rounded-full hover:bg-dark hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (661) 495-9030
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
