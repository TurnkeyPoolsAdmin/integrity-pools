import Image from "next/image";
import Link from "next/link";
import {
  BuilderPartnersBanner,
  FinalCta,
  FinancingSection,
  Reviews,
  ServiceAreaSection,
  WhatWeBuild,
} from "@/components/sections";
import Faq from "@/components/Faq";
import FirstYearCare from "@/components/FirstYearCare";
import BuildProcess from "@/components/BuildProcess";
import { ArrowIcon, Button, SectionHeading } from "@/components/ui";
import { PROJECTS } from "@/lib/site";

const RECENT = [0, 9, 11];

const CONSULTATION_STEPS = [
  { title: "Walk the yard together.", body: "We take measurements, review access and discuss how you want to use the space." },
  { title: "See your pool in 3D.", body: "Explore the layout and features, then tell us what you’d like to change." },
  { title: "Understand where your budget goes.", body: "Review an itemized quote so you can compare choices and decide what matters most." },
];

const SALES_FAQS = [
  { q: "How long does construction take?", a: "A typical build takes six to eight weeks after excavation begins. Site conditions, weather and inspections can affect the schedule. We review the target timeline with you before construction." },
  { q: "Do you handle permits and HOA submissions?", a: "Yes. We prepare the drawings, handle submissions and schedule inspections. Approval times depend on the city and your HOA." },
  { q: "What type of pools do you build?", a: "We build custom concrete pools using gunite, which lets us shape the pool around your yard and chosen features. We do not build fiberglass pools." },
  { q: "What warranty comes with my pool?", a: "Coverage depends on the finish, equipment and installation. Your written warranty terms explain what is covered, for how long and any care requirements." },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-x flex flex-col justify-center py-9 sm:py-14 lg:py-20">
            <p className="eyebrow mb-6">Custom Pool Builder in Menifee, CA</p>
            <h1 className="display-heading m-0 max-w-[650px] text-[clamp(48px,5.6vw,82px)] leading-[1.02] text-navy">
              Your dream pool deserves a builder who cares about{" "}
              <span className="text-cyan">every detail.</span>
            </h1>
            <p className="mb-7 mt-5 max-w-[480px] text-base leading-[1.65] sm:mt-7 sm:text-[17px] sm:leading-[1.75] text-slate">
              Bring your pool to life with a dedicated project manager who coordinates the crews
              and keeps you informed from planning through construction. You’ll know who to call,
              how your pool is progressing and what comes next.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button href="/contact" size="lg" className="px-6 sm:px-9">Get My Free Consultation<ArrowIcon /></Button>
              <Link href="/gallery" className="inline-flex min-h-12 items-center gap-2 border-b border-navy text-sm font-semibold text-navy hover:text-cyan">
                Explore Pool Designs<ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 text-sm font-medium leading-relaxed text-slate">Free site visit, 3D design and itemized quote. No obligation to build.</p>
          </div>
          <div className="flex flex-col overflow-hidden bg-navy">
            <div className="hero-photo relative flex-1">
              <Image src="/images/aqua/projects/pool-spa-02/pool-spa-02-01.webp"
                alt="Gunite pool and spa with an outdoor living space alongside"
                fill sizes="(max-width: 1023px) 100vw, 55vw" loading="eager" fetchPriority="high"
                className="object-cover object-[55%_center]" />
            </div>
          </div>
        </div>
      </section>
      <BuildProcess />

      {/* Help the buyer picture the result. Reference images are not project proof. */}
      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-[640px]">
              <SectionHeading
                eyebrow="Picture Your Backyard"
                title="Make your backyard the place everyone wants to be."
                body="Give the kids room to splash, gather friends around the water or settle into the spa after a long day. Your pool can bring more of the time you enjoy into the home you already love."
              />
              <p className="mb-0 mt-5 text-base leading-[1.75] text-slate">Explore the shapes, features and finishes that fit your vision.</p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-b-2 border-cyan pb-1 text-xs font-bold uppercase tracking-[1.5px] text-navy transition-colors hover:text-cyan"
            >
              Explore Pool Designs
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
          <p className="mb-0 mt-7 text-sm leading-relaxed text-slate">These reference photos show design ideas, not completed Integrity projects.</p>
        </div>
      </section>

      <section className="section-x bg-navy py-[100px] text-white">
        <div className="mx-auto w-full max-w-[1400px]">
          <SectionHeading
            light
            className="max-w-[720px]"
            eyebrow="Your Customer Portal"
            title="See where things stand. Find what you need."
            body="Check your project timeline, schedule and permit status in your customer portal. Your plans and signed permits stay organized alongside equipment manuals and warranties, giving you one place to follow progress and find important details."
          />
        </div>
      </section>

      <section className="section-x bg-shell py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <SectionHeading
            className="mb-[50px] max-w-[720px]"
            eyebrow="Your Free Consultation"
            title="Find out what fits your yard and your budget."
            body="Bring your ideas, questions and wish list. We’ll help you turn them into a pool design and a clear picture of the cost."
          />
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 border-t-2 border-line-cool sm:grid-cols-2 sm:gap-x-0 lg:grid-cols-3">
            {CONSULTATION_STEPS.map((step, i) => (
              <div key={step.title} className="-mt-0.5 flex flex-col gap-3 border-t-2 border-aqua pb-2.5 pt-6 sm:pr-6 sm:pt-8">
                <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 text-base font-bold uppercase tracking-[0.5px] text-navy">{step.title}</h3>
                <p className="m-0 text-base leading-[1.7] text-slate">{step.body}</p>
                {i === 2 ? (
                  <p className="mb-0 mt-2 text-base leading-[1.7] text-slate">
                    <Link href="#pool-financing" className="font-semibold text-cyan underline underline-offset-4">Thinking about financing?</Link>{" "}
                    We can discuss options during your free consultation, so you can consider
                    the design and how you’ll pay for it together.
                  </p>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mb-7 mt-8 text-base leading-[1.75] text-slate">Take time to review the design and price before deciding to build.</p>
          <Button href="/contact">Get My Free Consultation<ArrowIcon /></Button>
        </div>
      </section>

      <FirstYearCare
        title="A year of expert care for the pool you’ve invested in."
        summary="Your new Integrity pool comes with professional startup and one full year of free pool service."
        body="We handle water chemistry and routine maintenance to help protect your finish and equipment from the first fill. You can enjoy your new pool with experienced help already in place."
        ctaLabel="See What Your First Year Includes"
        ctaHref="#first-year-care-details"
      />

      <WhatWeBuild featured />
      <Reviews
        eyebrow="Hear From Our Customers"
        title="What our pool-care customers say"
        body="These reviews come from Integrity Pool Care customers and cover maintenance, repairs and service, not new pool construction."
      />
      <FinancingSection />
      <ServiceAreaSection />
      <BuilderPartnersBanner />

      {/* FAQ */}
      <section className="section-x bg-shell py-[100px]">
        <div className="mx-auto w-full max-w-[980px]">
          <SectionHeading className="mb-10" eyebrow="Common Questions" title="A few more things worth knowing" />
          <Faq items={SALES_FAQS} />
        </div>
      </section>

      <FinalCta
        title="Let’s talk about the pool you have in mind."
        body="Tell us where you’re building and what you’d like to create. We’ll arrange a time to visit your yard."
        ctaLabel="Get My Free Consultation"
        includeCare={false}
        assurances={["No obligation to build."]}
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
