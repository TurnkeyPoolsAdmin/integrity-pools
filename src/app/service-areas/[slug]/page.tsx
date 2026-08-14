import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import { FinalCta, ProcessSteps, Reviews } from "@/components/sections";
import { ArrowIcon, Button, SectionHeading } from "@/components/ui";
import { AREAS, BUSINESS, HOME_FAQS, PROJECTS, SERVICES, areaBySlug } from "@/lib/site";

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areaBySlug(slug);
  if (!area) return {};
  return {
    title: `Pool Builder in ${area.name}, CA`,
    description: `Custom gunite pools, spas, hardscape and lighting built in ${area.name}, CA by Integrity Pools. Free site visit, design and itemised quote.`,
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areaBySlug(slug);
  if (!area) notFound();

  const HERO_IMAGE = "/images/photo-gallery/modern-pools/0000.webp";
  const nearby = AREAS.filter((a) => a.slug !== area.slug);
  const gallery = PROJECTS.filter((p) => p.image !== HERO_IMAGE).slice(0, 6);

  return (
    <>
      <section className="bg-navy text-white">
        <div className="section-x">
          <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 pb-[70px] pt-[60px] lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-xs text-white/50">
                <Link href="/" className="transition-colors hover:text-cyan">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/service-areas" className="transition-colors hover:text-cyan">
                  Service Areas
                </Link>
              </nav>
              <p className="eyebrow m-0 mb-4">Serving {area.name}, CA</p>
              <h1 className="m-0 mb-6 text-[clamp(34px,4.1vw,50px)] font-extrabold uppercase leading-[1.08] tracking-[-0.5px] text-white">
                Custom Pool Builder in <span className="text-cyan">{area.name}</span>
              </h1>
              <p className="m-0 mb-9 max-w-[560px] text-[17px] leading-[1.75] text-white/70">
                {area.blurb} We design the pool, build the deck and walls around it, run the lighting
                and hand it over with the water balanced.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Button href="/contact" variant="cyan" size="lg">
                  <ArrowIcon />
                  Book a Site Visit
                </Button>
                <Button href={BUSINESS.phoneHref} variant="ghostLight" size="lg">
                  {BUSINESS.phone}
                </Button>
              </div>
              {area.neighborhoods.length ? (
                <p className="m-0 mt-9 border-t border-white/10 pt-7 text-sm leading-[1.8] text-white/50">
                  <span className="font-semibold text-white/70">Neighbourhoods we build in: </span>
                  {area.neighborhoods.join(" · ")}
                </p>
              ) : null}
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:h-[420px]">
              <Image
                src="/images/photo-gallery/modern-pools/0000.webp"
                alt={`Custom pool built by Integrity Pools near ${area.name}, CA`}
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <SectionHeading
            className="mb-[50px] max-w-[720px]"
            eyebrow="What We Build"
            title={`Pools & Outdoor Living in ${area.name}`}
            body={`Everything below is built by our own crews on one contract, anywhere in ${area.name} and the surrounding communities.`}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex flex-col gap-2 rounded-lg border border-line bg-white p-6 transition-colors hover:border-cyan"
              >
                <span className="text-[15px] font-bold uppercase tracking-[0.5px] text-navy">
                  {s.name}
                </span>
                <span className="text-[13px] leading-[1.6] text-slate">{s.short}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps eyebrow="How It Works" title={`How a ${area.name} Build Runs`} />

      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <SectionHeading
            className="mb-11 max-w-[720px]"
            eyebrow="Recent Work"
            title="Backyards Near You"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((p) => (
              <Link
                key={p.slug}
                href="/gallery"
                className="group relative block h-[210px] overflow-hidden rounded-lg"
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 430px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-3 left-3 rounded-[3px] bg-navy/85 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[1px] text-white">
                  {p.city} &middot; {p.category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x bg-shell py-[100px]">
        <div className="mx-auto w-full max-w-[980px]">
          <SectionHeading className="mb-10" eyebrow="FAQ" title="Common Questions" />
          <Faq items={HOME_FAQS.slice(0, 5)} />
        </div>
      </section>

      <Reviews light />

      <section className="section-x bg-white py-[90px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <h2 className="m-0 mb-6 inline-block border-b-2 border-cyan pb-3.5 text-[15px] font-bold uppercase tracking-[1.5px] text-navy">
            We Also Build In
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {nearby.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="rounded border border-line bg-white px-4 py-2.5 text-[13px] font-semibold text-navy transition-colors hover:border-cyan hover:text-cyan"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        bg="bg-shell"
        title={`Build in ${area.name}`}
        body={`Tell us about the yard. We walk the site, talk through what is realistic in ${area.name}, and send an itemised proposal with a design.`}
      />
    </>
  );
}
