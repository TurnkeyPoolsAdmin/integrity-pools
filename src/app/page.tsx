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
import { ArrowIcon, Button, SectionHeading } from "@/components/ui";
import { HOME_FAQS, PROJECTS } from "@/lib/site";

const RECENT = [0, 9, 11];

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
              We design and build custom gunite pools, spas, hardscape and outdoor lighting for
              homeowners across Menifee, Murrieta and the Inland Empire.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button href="/contact" size="lg" className="px-6 sm:px-9">Start Your Project<ArrowIcon /></Button>
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
                See your pool design before you commit.
              </h2>
              <p className="mb-4 mt-3 max-w-[510px] text-base leading-[1.6] text-white">
                Get a free 3D design and itemized quote. Your dedicated project manager coordinates the team and keeps you informed throughout your build.
              </p>
              <Link href="/contact" className="inline-flex min-h-11 items-center gap-3 text-base font-bold underline decoration-white/60 underline-offset-[6px] transition-colors hover:text-cyan-light">
                Book a free site visit
                <ArrowIcon className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <StatsBar />
      <WhatWeBuild featured />

      {/* Recent work */}
      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              className="max-w-[640px]"
              eyebrow="Design Ideas"
              title="Explore pool shapes, spas and finishes"
              body="Save the ideas you like, then ask our design team how they could fit your yard. These reference photos show design options, not completed Integrity projects."
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
      <ProcessSteps body="Our team takes your project from site measurements and design review through construction and startup, with a dedicated project manager coordinating the work. Here is what happens at each step." />

      <Reviews />
      <ServiceAreaSection />
      <BuilderPartnersBanner />
      <FinancingSection />

      {/* FAQ */}
      <section className="section-x bg-shell py-[100px]">
        <div className="mx-auto w-full max-w-[980px]">
          <SectionHeading className="mb-10" eyebrow="FAQ" title="Common Questions" />
          <Faq items={HOME_FAQS} />
        </div>
      </section>

      <FinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOME_FAQS.map((f) => ({
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
