import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import { FinalCta, ProcessSteps, Reviews } from "@/components/sections";
import { ArrowIcon, Button, SectionHeading } from "@/components/ui";
import { AREAS, BUSINESS, PROJECTS, SERVICES, serviceBySlug } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Temecula, CA`,
    description: service.heroBlurb.slice(0, 155),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);
  const gallery = PROJECTS.filter((p) => p.image !== service.image).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="section-x">
          <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 pb-[70px] pt-[60px] lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-xs text-white/50">
                <Link href="/" className="transition-colors hover:text-cyan">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/services" className="transition-colors hover:text-cyan">
                  Services
                </Link>
              </nav>
              <p className="eyebrow m-0 mb-4">{service.name} Design &amp; Construction</p>
              <h1 className="m-0 mb-6 text-[clamp(34px,4.1vw,50px)] font-extrabold uppercase leading-[1.08] tracking-[-0.5px] text-white">
                {service.heroTitle} in Temecula, <span className="text-cyan">CA</span>
              </h1>
              <p className="m-0 mb-9 max-w-[560px] text-[17px] leading-[1.75] text-white/70">
                {service.heroBlurb}
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Button href="/quote" variant="cyan" size="lg">
                  <ArrowIcon />
                  Request a Quote
                </Button>
                <Button href={BUSINESS.phoneHref} variant="ghostLight" size="lg">
                  {BUSINESS.phone}
                </Button>
              </div>
              <dl className="m-0 mt-11 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                <div>
                  <dt className="m-0 text-[10px] font-semibold uppercase tracking-[1.5px] text-white/40">
                    Typical Timeline
                  </dt>
                  <dd className="m-0 mt-1.5 text-sm font-bold text-white">8-12 weeks, dig to dive</dd>
                </div>
                <div>
                  <dt className="m-0 text-[10px] font-semibold uppercase tracking-[1.5px] text-white/40">
                    Included
                  </dt>
                  <dd className="m-0 mt-1.5 text-sm font-bold text-white">
                    A design with every quote
                  </dd>
                </div>
                <div>
                  <dt className="m-0 text-[10px] font-semibold uppercase tracking-[1.5px] text-white/40">
                    Financing
                  </dt>
                  <dd className="m-0 mt-1.5 text-sm font-bold text-white">Available on request</dd>
                </div>
              </dl>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:h-[440px]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <SectionHeading
            className="mb-[50px] max-w-[720px]"
            eyebrow="Scope of Work"
            title="What's Included in Your Proposal"
            body={service.intro}
          />
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {service.inclusions.map((inc, i) => (
              <div key={inc.title} className="flex flex-col gap-3 bg-white px-6 py-8">
                <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 text-[15px] font-bold uppercase tracking-[0.5px] text-navy">
                  {inc.title}
                </h3>
                <p className="m-0 text-sm leading-[1.7] text-slate">{inc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps eyebrow="The Build" title="From First Walk-Through to First Swim" />

      {/* Gallery */}
      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              className="max-w-[720px]"
              eyebrow="Project Gallery"
              title={`${service.name} We've Built Near Temecula`}
            />
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-b-2 border-cyan pb-1 text-xs font-bold uppercase tracking-[1.5px] text-navy transition-colors hover:text-cyan"
            >
              View Full Gallery
              <ArrowIcon className="h-3 w-3" />
            </Link>
          </div>
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

      <Reviews light eyebrow="Temecula Valley Homeowners" title="In Their Words" />

      {/* FAQ */}
      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[980px]">
          <SectionHeading className="mb-10" eyebrow="FAQ" title={`${service.name} in Temecula`} />
          <Faq items={service.faqs} />
        </div>
      </section>

      {/* Cross links */}
      <section className="section-x bg-shell py-[90px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <h2 className="m-0 mb-6 inline-block border-b-2 border-cyan pb-3.5 text-[15px] font-bold uppercase tracking-[1.5px] text-navy">
            Other Services in Temecula
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
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

          <h2 className="m-0 mb-6 mt-14 block w-fit border-b-2 border-cyan pb-3.5 text-[15px] font-bold uppercase tracking-[1.5px] text-navy">
            {service.name} Nearby
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {AREAS.map((a) => (
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
        title={`Get a Quote for Your ${service.name} Project`}
        body="Tell us about the yard. We walk the site, talk through what is realistic, and send an itemised proposal with a design, normally inside a week."
      />
    </>
  );
}
