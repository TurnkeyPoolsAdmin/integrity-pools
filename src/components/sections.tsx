import Image from "next/image";
import Link from "next/link";
import {
  AREAS,
  BUSINESS,
  EXPECTATIONS,
  PROCESS,
  REVIEWS,
  SERVICES,
  STATS,
} from "@/lib/site";
import { ArrowIcon, Button, CheckIcon, ChatIcon, PhoneIcon, SectionHeading } from "./ui";

/* ---------------- Stats bar ---------------- */

export function StatsBar() {
  return (
    <div className="border-y border-line bg-white">
      <div className="mx-auto w-full max-w-[1400px] section-x grid grid-cols-3 gap-4 py-7 sm:gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="m-0 whitespace-nowrap text-[20px] font-extrabold text-navy sm:text-[30px]">
              {s.value}
            </p>
            <p className="m-0 mt-1 text-[10px] font-semibold uppercase tracking-[1.5px] text-slate sm:text-[11px]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- What we build ---------------- */

export function WhatWeBuild() {
  return (
    <section className="section-x bg-white py-[100px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeading
          className="mb-[50px] max-w-[720px]"
          eyebrow="What We Build"
          title="Everything in the yard, on one contract"
          body="No juggling three contractors to finish one backyard. With Integrity it is one point of contact, one project manager and one contract across the whole build. Here is what we take on."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white text-inherit transition-all hover:border-cyan hover:shadow-[0_14px_40px_rgba(26,42,58,0.10)]"
            >
              <div className="relative h-[128px] overflow-hidden sm:h-[172px]">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4 sm:gap-2.5 sm:p-6">
                <h3 className="m-0 text-[15px] font-bold uppercase leading-tight tracking-[0.5px] text-navy sm:text-base">
                  {s.name}
                </h3>
                <p className="m-0 flex-1 text-[13px] leading-[1.6] text-slate sm:text-sm sm:leading-[1.65]">
                  {s.short}
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.5px] text-cyan">
                  Learn More
                  <ArrowIcon className="h-[13px] w-[13px]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- What to expect ---------------- */

export function WhatToExpect() {
  return (
    <section className="section-x bg-navy py-[100px] text-white">
      <div className="mx-auto grid w-full max-w-[1400px] items-start gap-[70px] lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading light eyebrow="Working With Us" title="What to Expect on a Build" />
          <p className="m-0 mb-8 mt-5 text-base leading-[1.75] text-white/70">
            Handing six figures to a contractor and letting them dig up your yard is nerve-wracking.
            We have built the whole process around removing the parts that make it feel that way.
          </p>
          <Button href="/about" variant="cyan">
            More About Us
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
          {EXPECTATIONS.map((e, i) => (
            <div
              key={e.title}
              className="flex flex-col gap-3 bg-navy px-5 py-7 sm:px-[30px] sm:py-[34px]"
            >
              <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="m-0 text-base font-bold uppercase tracking-[0.5px] text-white">
                {e.title}
              </h3>
              <p className="m-0 text-sm leading-[1.7] text-white/65">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

export function ProcessSteps({
  eyebrow = "How It Works",
  title = "How a Build Runs",
  body,
  bg = "bg-shell",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  bg?: string;
}) {
  return (
    <section className={`section-x ${bg} py-[100px]`}>
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeading className="mb-[50px] max-w-[720px]" eyebrow={eyebrow} title={title} body={body} />
        <div className="grid grid-cols-2 gap-x-4 gap-y-0 border-t-2 border-line-cool sm:gap-x-0 lg:grid-cols-5">
          {PROCESS.map((p, i) => (
            <div
              key={p.title}
              className="-mt-0.5 flex flex-col gap-3 border-t-2 border-cyan pb-2.5 pt-6 sm:pr-6 sm:pt-8"
            >
              <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="m-0 text-base font-bold uppercase tracking-[0.5px] text-navy">
                {p.title}
              </h3>
              <p className="m-0 text-sm leading-[1.7] text-slate">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */

export function Reviews({
  eyebrow = "Reviews",
  title = "What Clients Say",
  light = false,
}: {
  eyebrow?: string;
  title?: string;
  light?: boolean;
}) {
  return (
    <section className={`section-x py-[100px] ${light ? "bg-navy text-white" : "bg-shell"}`}>
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeading className="mb-11 max-w-[720px]" eyebrow={eyebrow} title={title} light={light} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className={`m-0 flex flex-col gap-5 rounded-lg p-8 ${
                light ? "border border-white/10 bg-white/5" : "border border-line bg-white"
              }`}
            >
              <div
                aria-label="Five out of five stars"
                className="flex gap-[3px] text-[15px] tracking-[2px] text-cyan"
              >
                <span aria-hidden="true">★★★★★</span>
              </div>
              <blockquote
                className={`m-0 text-[15px] leading-[1.8] ${light ? "text-white/80" : "text-ink"}`}
              >
                {r.quote}
              </blockquote>
              <figcaption
                className={`mt-auto border-t pt-[18px] ${light ? "border-white/10" : "border-line"}`}
              >
                <p className={`m-0 text-sm font-bold ${light ? "text-white" : "text-navy"}`}>
                  {r.name}
                </p>
                <p
                  className={`m-0 mt-[3px] text-xs tracking-[0.5px] ${
                    light ? "text-white/50" : "text-slate"
                  }`}
                >
                  {r.source}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Service areas ---------------- */

export function ServiceAreaSection() {
  return (
    <section className="section-x bg-white py-[100px]">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Where We Work"
            title="Temecula, Murrieta & the Inland Empire"
            body="We stay within about an hour of the shop. That covers the Temecula Valley, out through Menifee and Lake Elsinore, north to Corona and Riverside, and south over the county line to Fallbrook. Close enough that our crews turn up on time and we can come back quickly if you need us."
          />
          <a
            href={BUSINESS.phoneHref}
            className="mt-7 inline-flex items-center gap-2.5 text-base font-bold text-navy transition-colors hover:text-cyan"
          >
            <span className="text-cyan">
              <PhoneIcon />
            </span>
            Not sure if you&apos;re in range? Call us.
          </a>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
          {AREAS.map((a) => (
            <Link
              key={a.slug}
              href={`/service-areas/${a.slug}`}
              className="flex items-center justify-between gap-2 bg-white p-[22px] text-sm font-semibold tracking-[0.3px] text-navy transition-colors hover:bg-shell hover:text-cyan"
            >
              {a.name}
              <span aria-hidden="true" className="text-[13px] text-cyan">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Builder partners banner ---------------- */

export function BuilderPartnersBanner() {
  return (
    <section className="section-x bg-shell py-[100px]">
      <div className="mx-auto grid w-full max-w-[1400px] gap-0 overflow-hidden rounded-lg shadow-[0_20px_60px_rgba(26,42,58,0.10)] lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-5 bg-navy px-8 py-12 text-white sm:px-14 sm:py-16">
          <p className="eyebrow m-0">For Custom Home Builders</p>
          <h2 className="m-0 text-[clamp(26px,3vw,36px)] font-bold uppercase leading-[1.2]">
            Working With Custom Home Builders
          </h2>
          <p className="m-0 text-[15px] leading-[1.75] text-white/70">
            Building custom homes or developing in the Temecula Valley? We take the entire exterior
            scope off your critical path: pool, deck, walls, drainage and lighting, sequenced with
            your grading and electrical trades, on one contract with {BUSINESS.ownerFirstName} as
            your single point of contact.
          </p>
          <Button href="/builder-partners" variant="cyan" className="mt-2 self-start">
            Builder Partners
          </Button>
        </div>
        <div className="relative min-h-[340px] overflow-hidden">
          <Image
            src="/images/aqua/projects/pool-spa-17/pool-spa-17-04.webp"
            alt="Finished pool and spa with a travertine deck on a builder project"
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Financing ---------------- */

const FINANCE_POINTS = [
  {
    title: "Soft credit check",
    body: "Checking a rate is a soft pull, so it will not touch your credit score.",
  },
  {
    title: "Monthly payment estimates",
    body: "See what a given scope works out to per month before you commit to it.",
  },
  {
    title: "Applies to the whole yard",
    body: "Pool, hardscape, features and lighting can all be financed as one project.",
  },
];

export function FinancingSection() {
  return (
    <section className="section-x bg-white py-[100px]">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-16 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="eyebrow m-0 mb-4">Financing</p>
          <h2 className="m-0 mb-5 text-[clamp(28px,3.6vw,42px)] font-bold uppercase leading-[1.15] text-navy">
            Pool Financing Without the Wait
          </h2>
          <p className="m-0 mb-7 max-w-[560px] text-base leading-[1.75] text-slate">
            Get the backyard you want now and spread the cost. Our lending partners can estimate an
            affordable monthly payment on your project in a few minutes. It is fast, simple, and it
            does not affect your credit.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Button href="/financing">Check Your Rate</Button>
            <Button href="/quote" variant="outline">
              Get an Instant Estimate
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-5 rounded-lg border border-line bg-shell p-8 sm:p-10">
          {FINANCE_POINTS.map((p) => (
            <div key={p.title} className="flex items-start gap-3.5">
              <span className="mt-1 shrink-0 text-cyan">
                <CheckIcon />
              </span>
              <div>
                <p className="m-0 mb-1 text-sm font-bold uppercase tracking-[0.5px] text-navy">
                  {p.title}
                </p>
                <p className="m-0 text-sm leading-[1.65] text-slate">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

export function FinalCta({
  eyebrow = "Let's Talk",
  title = "Start With a Site Visit",
  body,
  bg = "bg-white",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  bg?: string;
}) {
  return (
    <section className={`section-x ${bg} py-[100px] text-center`}>
      <div className="mx-auto max-w-[800px]">
        <p className="eyebrow m-0 mb-5">{eyebrow}</p>
        <h2 className="m-0 mb-6 text-[clamp(32px,4.5vw,48px)] font-bold uppercase leading-[1.15] text-navy">
          {title}
        </h2>
        <p className="mx-auto mb-10 mt-0 max-w-[600px] text-base leading-[1.7] text-slate">
          {body ??
            `We build across Temecula, Murrieta, Menifee, Wildomar and the towns around them. Call or send the form and ${BUSINESS.ownerFirstName} will find a time to come and walk the yard with you.`}
        </p>
        <Button href="/contact" size="lg" className="px-10">
          <ChatIcon />
          Get Your Free Consultation
        </Button>
        <ul className="m-0 mt-7 flex list-none flex-wrap items-center justify-center gap-x-8 gap-y-3 p-0">
          {["Free site visit", "Free design and quote", "No obligation"].map((t) => (
            <li
              key={t}
              className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-muted"
            >
              <span className="shrink-0 text-cyan">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Page hero (subpages) ---------------- */

export function PageHero({
  eyebrow,
  title,
  body,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  crumbs?: { label: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="section-x bg-navy pb-[60px] pt-[70px] text-white">
      <div className="mx-auto w-full max-w-[1400px]">
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-xs text-white/50">
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex gap-2">
                <Link href={c.href} className="transition-colors hover:text-cyan">
                  {c.label}
                </Link>
                {i < crumbs.length - 1 ? <span aria-hidden="true">/</span> : null}
              </span>
            ))}
          </nav>
        ) : null}
        {eyebrow ? <p className="eyebrow m-0 mb-4">{eyebrow}</p> : null}
        <h1 className="m-0 max-w-[900px] text-[clamp(34px,4.5vw,52px)] font-extrabold uppercase leading-[1.1] tracking-[-0.5px] text-white">
          {title}
        </h1>
        {body ? (
          <p className="m-0 mt-6 max-w-[680px] text-[17px] leading-[1.75] text-white/70">{body}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
