import Link from "next/link";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "We Are An All-in-One Pool Company",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "You & Your Family's Safety is Our Top Priority",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Financing Options Are Available To You",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Technologically Advanced, Licensed & Insured",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Receive The Highest Level of Craftsmanship",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Every Project Receives Individualized Specifications",
  },
];

export default function SpecialFeatures() {
  return (
    <>
      {/* Blue brand section — mark + heading left, plain icon list right */}
      <section className="bg-secondary text-white pt-20 lg:pt-28 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - large wave mark + heading */}
            <div>
              <svg width="180" height="180" viewBox="0 0 50 50" fill="none" className="mb-10 w-32 h-32 lg:w-44 lg:h-44">
                <path d="M4 8c6-6 12-6 18 0s12 6 18 0" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M4 17c6-6 12-6 18 0s12 6 18 0" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M13 26c4-4 8-4 12 0s8 4 12 0" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M13 35c4-4 8-4 12 0" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#f8f9f3] leading-[1.15]">
                What is Special
                <br />
                About Integrity
                <br />
                Pools?
              </h2>
            </div>

            {/* Right - plain white icon rows + CTAs */}
            <div className="lg:pt-4">
              <div className="space-y-7">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className="w-9 flex-shrink-0 text-white [&>svg]:w-8 [&>svg]:h-8">{f.icon}</div>
                    <p className="text-white font-semibold text-lg md:text-xl">{f.title}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-10">
                <Link
                  href="/contact"
                  className="bg-dark text-white font-bold px-8 py-4 rounded-full hover:bg-black transition-colors text-center text-base shadow-xl inline-flex items-center justify-center gap-2"
                >
                  <span className="whitespace-nowrap">Book Free Design Consultation</span> <span>→</span>
                </Link>
                <a
                  href="tel:9514447150"
                  className="border border-white/70 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 text-base"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (951) 444-7150
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masked drone photo flowing out of the blue (pre-masked asset);
          transparent top scallops show the blue above, bottom scallops show the
          dark of the next section */}
      <div style={{ background: "linear-gradient(to bottom, var(--color-secondary) 50%, var(--color-dark) 50%)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async"
          src="/images/what-is-special-section/mask-group.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-auto"
        />
      </div>
    </>
  );
}
