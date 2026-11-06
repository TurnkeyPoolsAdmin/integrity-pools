import Image from "next/image";
import Link from "next/link";
import {
  BuilderPartnersBanner,
  FinalCta,
  FinancingSection,
  ProcessSteps,
  Reviews,
  ServiceAreaSection,
  StatsBar,
  WhatToExpect,
  WhatWeBuild,
} from "@/components/sections";
import Faq from "@/components/Faq";
import FirstYearCare from "@/components/FirstYearCare";
import { ArrowIcon, Button, SectionHeading } from "@/components/ui";
import { FIRST_YEAR_CARE, HOME_FAQS, PROJECTS } from "@/lib/site";

const RECENT = [0, 9, 11];

// Each existing section advances a different buying decision. The consultation
// section explains the free first step; the team section explains why to choose us.
const CONSULTATION_STEPS = [
  { title: "Tell us your ideas", body: "Share your city, the features you want and your budget goals. Our team will arrange a free visit to your yard." },
  { title: "Walk the yard", body: "Show us how you want to use the space. We take measurements and review access, slope and drainage." },
  { title: "See your 3D design", body: "See where the pool, spa and patio could go in your own yard. Review the layout and tell us what you want to change." },
  { title: "Review your quote", body: "See the pool, equipment, decking and features priced separately. Choose where to spend and where to adjust." },
  { title: "Decide when ready", body: "Review the design and price before committing to a build. The site visit, design and quote are free, with no obligation." },
];

const SALES_FAQS = [
  { q: "Do I need a finished plan before I contact you?", a: "No. Bring your ideas, questions and budget goals. We review your yard, prepare a 3D design and provide an itemized quote so you can decide what works for you." },
  { q: "Does the free consultation commit me to a build?", a: "No. Your site visit, design and quote are free, with no obligation to build. You can review the layout and costs before deciding." },
  ...HOME_FAQS,
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-x flex flex-col justify-center py-9 sm:py-14 lg:py-20">
            <p className="eyebrow mb-6">Menifee&apos;s Custom Pool Builder</p>
            <h1 className="display-heading m-0 max-w-[650px] text-[clamp(48px,5.6vw,82px)] leading-[1.02] text-navy">
              Pools, Spas<br />&amp; Hardscape<br />
              <span className="text-cyan">in Menifee, CA</span>
            </h1>
            <p className="mb-7 mt-5 max-w-[480px] text-base leading-[1.65] sm:mt-7 sm:text-[17px] sm:leading-[1.75] text-slate">
              See your new backyard in 3D before you commit. Get a clear quote and a dedicated
              project manager to guide your build. Every new pool includes professional startup
              and one year of free pool service.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button href="/contact" size="lg" className="px-6 sm:px-9">Get My Free Consultation<ArrowIcon /></Button>
              <Link href="/gallery" className="inline-flex min-h-12 items-center gap-2 border-b border-navy text-sm font-semibold text-navy hover:text-cyan">
                View Gallery<ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 text-sm font-medium leading-relaxed text-slate">Free site visit · Free design and quote · No obligation</p>
          </div>
          <div className="flex flex-col overflow-hidden bg-navy">
            <div className="hero-photo relative flex-1">
              <Image src="/images/aqua/projects/pool-spa-02/pool-spa-02-01.webp"
                alt="Gunite pool and spa with an outdoor living space alongside"
                fill sizes="(max-width: 1023px) 100vw, 55vw" loading="eager" fetchPriority="high"
                className="object-cover object-[55%_center]" />
            </div>
            <div className="px-6 py-7 text-white sm:px-9 sm:py-8">
              <h2 className="m-0 max-w-[530px] font-sans text-[26px] font-bold leading-[1.2] tracking-[-0.3px] sm:text-[30px]">
                {FIRST_YEAR_CARE.headline}
              </h2>
              <p className="mb-4 mt-3 max-w-[510px] text-base leading-[1.6] text-white">
                Included with every new pool. Our team handles startup, water chemistry and routine maintenance, so your pool gets expert care from day one.
              </p>
              <Link href="#first-year-care" className="inline-flex min-h-11 items-center gap-3 text-base font-bold underline decoration-white/60 underline-offset-[6px] transition-colors hover:text-cyan-light">
                See what your first year includes
                <ArrowIcon className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <StatsBar />
      <FirstYearCare
        title="Protect your new pool from the first fill"
        summary="Your new pool is a major investment. Its first weeks need close attention as the finish cures and the water is balanced. That is why every new Integrity pool includes professional startup and one year of free service. Our team handles the chemistry and routine maintenance while you get to enjoy your pool."
        ctaLabel="Get My Free Consultation"
      />
      <WhatWeBuild featured />

      {/* Help the buyer picture the result. Reference images are not project proof. */}
      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              className="max-w-[640px]"
              eyebrow="Design Ideas"
              title="Picture what could work in your backyard"
              body="A place to swim, room to gather or a spa for quiet evenings. Save the features you like and bring them to your free design consultation. These reference photos show design options, not completed Integrity projects."
            />
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-b-2 border-cyan pb-1 text-xs font-bold uppercase tracking-[1.5px] text-navy transition-colors hover:text-cyan"
            >
              View Full Gallery
              <ArrowIcon className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {RECENT.map((i) => {
              const p = PROJECTS[i];
              return (
                <Link key={p.slug} href={`/gallery#${p.slug}`} className="group block">
                  <div className="project-photo relative overflow-hidden rounded-xl">
                    <Image src={p.image} alt={p.alt} fill sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div><p className="text-base font-medium text-cyan">{p.category}</p>
                    <h3 className="mt-1 font-sans text-xl font-semibold leading-snug text-navy">{p.title}</h3></div>
                    <ArrowIcon className="h-5 w-5 shrink-0 text-cyan" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <WhatToExpect />
      <ProcessSteps
        eyebrow="Your Free Consultation"
        title="Find out what fits your yard and budget"
        body="You do not need a finished plan to get started. Bring your ideas and questions. We will help you turn them into a design and a quote you can evaluate before you decide to build."
        steps={CONSULTATION_STEPS}
      />

      <Reviews
        eyebrow="Hear From Our Customers"
        title="See why homeowners trust our pool-care team"
        body="Your included year of service puts pool care at the heart of our offer. Read what Integrity Pool Care customers say about communication, maintenance and equipment work. These reviews cover pool care, not new pool construction."
      />
      <ServiceAreaSection />
      <BuilderPartnersBanner />
      <FinancingSection />

      {/* FAQ */}
      <section className="section-x bg-shell py-[100px]">
        <div className="mx-auto w-full max-w-[980px]">
          <SectionHeading className="mb-10" eyebrow="Before You Decide" title="Get answers before you take the next step" />
          <Faq items={SALES_FAQS} />
        </div>
      </section>

      <FinalCta
        eyebrow="Start With a Free Consultation"
        title="See your pool design. Know your price."
        body="Tell us about your yard and the pool you have in mind. Our team will arrange your free site visit, then prepare a 3D design and itemized quote. You can review the layout, ask questions and decide whether Integrity is the right builder for you."
        ctaLabel="Get My Free Consultation"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: SALES_FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
