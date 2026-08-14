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
import { BUSINESS, HOME_FAQS, PROJECTS } from "@/lib/site";

const HERO_TILES: {
  src: string;
  alt: string;
  label: string;
  className: string;
  sizes: string;
  priority?: boolean;
  imgClassName?: string;
}[] = [
  {
    src: "/images/aqua/projects/pool-spa-02/pool-spa-02-01.webp",
    alt: "Gunite pool and spa with an outdoor living space alongside",
    label: "Custom Pools",
    className: "col-span-2",
    sizes: "(max-width: 1024px) 100vw, 1040px",
    priority: true,
  },
  {
    src: "/images/aqua/projects/pool-spa-16/pool-spa-16-01.webp",
    alt: "Gunite pool and spa beneath a covered outdoor structure",
    label: "Pools & Spas",
    className: "lg:row-span-2",
    sizes: "(max-width: 1024px) 50vw, 400px",
    imgClassName: "object-[25%_center]",
  },
  {
    src: "/images/aqua/projects/plunge-pool-01/plunge-pool-01-02.webp",
    alt: "Plunge pool lit low in the evening",
    label: "Plunge Pools",
    className: "",
    sizes: "(max-width: 1024px) 50vw, 520px",
  },
  {
    src: "/images/aqua/projects/plunge-pool-05/plunge-pool-05-03.webp",
    alt: "Plunge pool with a raised spa spilling into it",
    label: "Water Features",
    className: "hidden lg:block",
    sizes: "420px",
  },
];

const RECENT = [
  { i: 2, className: "col-span-2 row-span-2", sizes: "(max-width: 1024px) 100vw, 700px" },
  { i: 9, className: "", sizes: "(max-width: 1024px) 50vw, 350px" },
  { i: 11, className: "row-span-2", sizes: "(max-width: 1024px) 50vw, 350px" },
  { i: 10, className: "", sizes: "(max-width: 1024px) 50vw, 350px" },
  { i: 3, className: "sm:col-span-2 sm:row-span-2", sizes: "(max-width: 1024px) 100vw, 700px" },
  { i: 12, className: "sm:col-span-2 sm:row-span-2", sizes: "(max-width: 1024px) 100vw, 700px" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-x py-[70px] lg:py-[90px]">
        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-center lg:pr-5">
            <p className="m-0 mb-6 text-[13px] font-semibold uppercase tracking-[2.5px] text-cyan">
              Temecula&apos;s Custom Pool Builder
            </p>
            <h1 className="m-0 mb-7 text-[clamp(40px,5.5vw,62px)] font-extrabold uppercase leading-[1.05] tracking-[-0.5px] text-navy">
              <span className="block">Pools, Spas</span>
              <span className="block">&amp; Hardscape</span>
              <span className="block text-cyan">in Temecula, CA</span>
            </h1>
            <p className="m-0 mb-10 max-w-[500px] text-[17px] leading-[1.75] text-slate">
              We design and build custom gunite pools, spas, hardscape and outdoor lighting for
              homeowners across Temecula, Murrieta and the Inland Empire.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button href="/contact" size="lg">
                <ArrowIcon />
                Start Your Project
              </Button>
              <Button href={BUSINESS.phoneHref} variant="outline" size="lg">
                {BUSINESS.phone}
              </Button>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 grid-rows-[150px_150px] gap-3 sm:grid-rows-[170px_170px] lg:grid-cols-[1fr_1fr_0.8fr] lg:grid-rows-[200px_200px]">
            {HERO_TILES.map((t) => (
              <div
                key={t.src}
                className={`relative overflow-hidden rounded-lg shadow-[0_8px_30px_rgba(26,42,58,0.12)] ${t.className}`}
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes={t.sizes}
                  priority={t.priority}
                  className={`object-cover ${t.imgClassName ?? ""}`}
                />
                <span className="absolute bottom-3 left-3 rounded-[3px] bg-navy/85 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[1px] text-white">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />
      <WhatWeBuild />
      <WhatToExpect />
      <ProcessSteps body="We have worked hard to make the process as smooth and streamlined as we can. Here is how a typical Integrity backyard build runs." />

      {/* Recent work */}
      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              className="max-w-[640px]"
              eyebrow="Recent Work"
              title="Backyards We've Finished"
            />
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-b-2 border-cyan pb-1 text-xs font-bold uppercase tracking-[1.5px] text-navy transition-colors hover:text-cyan"
            >
              View Full Gallery
              <ArrowIcon className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[210px] lg:grid-cols-4">
            {RECENT.map(({ i, className, sizes }) => {
              const p = PROJECTS[i];
              return (
                <div key={p.slug} className={`relative overflow-hidden rounded-lg ${className}`}>
                  <Link href="/gallery" className="group block h-full w-full">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes={sizes}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute bottom-3 left-3 rounded-[3px] bg-navy/85 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[1px] text-white">
                      {p.city} &middot; {p.category}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
