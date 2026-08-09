import Link from "next/link";

const benefits = [
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <circle cx="9" cy="7" r="3" />
        <circle cx="15" cy="7" r="3" />
        <path d="M3 21v-2a4 4 0 014-4h2" />
        <path d="M15 15h2a4 4 0 014 4v2" />
        <path strokeLinecap="round" d="M12 11v4m-2-2h4" />
      </svg>
    ),
    title: "One Team, Start to Finish",
    desc: "No handoffs. No confusion. Our team personally oversees every project from design through final walkthrough.",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M4 18v-3a1 1 0 011-1h14a1 1 0 011 1v3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 14V9l5-4 5 4v5" />
        <path strokeLinecap="round" d="M5 14l7-5.5L19 14" />
      </svg>
    ),
    title: "Safety-First Construction",
    desc: "Certified in pool safety systems and drowning prevention. Your family's protection is built into every design.",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M6 12h.01M18 12h.01" />
      </svg>
    ),
    title: "Financing That Works",
    desc: "Flexible payment options so you can build the backyard you want on a timeline that makes sense.",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" d="M4 9h16" />
      </svg>
    ),
    title: "PHTA Certified",
    desc: "We hold the industry's top credential for pool construction professionals. Not all builders can say that.",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Premium Equipment Partners",
    desc: "We install Hayward, Pentair, and Fluidra systems, the most reliable names in pool technology.",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    title: "Full Backyard Capability",
    desc: "Pools, spas, fire features, outdoor kitchens, hardscaping. One contractor. One relationship. One vision.",
  },
];

export default function Benefits() {
  return (
    <>
      {/* Pool water wave divider — Thomas's pre-masked swimmer PNG (transparent wavy edges baked in) */}
      <div className="w-full bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async"
          src="/images/reviews-section-img/mask-group.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-auto"
        />
      </div>

      {/* Benefits section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-4">
              Benefits Over The Others
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight text-dark">
              Why Homeowners
              <br />
              Choose Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-dark rounded-2xl p-12 min-h-[26rem] shadow-xl hover:bg-primary-light transition-colors group flex flex-col"
              >
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-10 text-white/80 group-hover:text-white transition-colors">
                  {b.icon}
                </div>
                <h3 className="font-bold text-2xl text-white mb-5">{b.title}</h3>
                <p className="text-gray-300 leading-relaxed text-[15px]">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary-light text-white font-bold px-9 py-4 rounded-full transition-colors text-base"
            >
              Start Your Project →
            </Link>
            <a
              href="tel:9514447150"
              className="bg-white border border-dark text-dark font-bold px-9 py-4 rounded-full hover:bg-dark hover:text-white transition-colors inline-flex items-center gap-2 text-base"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (951) 444-7150
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
