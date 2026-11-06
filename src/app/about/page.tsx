import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta, ProcessSteps } from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { BUSINESS, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Work directly with owner Ryan Osborne on your pool design and build. Free 3D design, itemized pricing and ongoing pool care in Menifee and the Inland Empire.",
};

const RULES = [
  {
    title: "Answer the Phone",
    body: "Ryan is your direct contact for questions, schedule updates and decisions about your build.",
  },
  {
    title: "Show It Before You Build It",
    body: "Every quote includes a design of your actual yard, revised until the layout is right. Nothing is dug before you sign off on it.",
  },
  {
    title: "Price and Schedule Up Front",
    body: "Review each cost and the target schedule before construction starts. Ryan keeps you informed as the build progresses.",
  },
  {
    title: "Keep It One Project",
    body: "Coordinate the pool, decking, features and lighting in one plan, with Ryan managing the construction schedule.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-x pb-14 pt-20">
        <div className="mx-auto w-full max-w-[900px]">
          <p className="eyebrow m-0 mb-5">About Integrity Pools</p>
          <h1 className="display-heading m-0 mb-6 max-w-[900px] text-[clamp(46px,5.5vw,72px)] leading-[1.08] text-navy">
            Work with Ryan from design to first swim
          </h1>
          <p className="m-0 text-[17px] leading-[1.8] text-slate">
            Integrity Pools builds gunite pools, spas and the outdoor living space that goes around
            them, across Menifee, the Temecula Valley and the wider Inland Empire. Owner Ryan Osborne
            is your direct contact for the design, pricing and construction. You know who to call
            when you have questions or need to make a decision.
          </p>
        </div>
      </section>

      {/* TODO(matt): a real headshot of Ryan would sit well on the left of this block. */}
      <section className="section-x bg-shell py-[90px]">
        <div className="mx-auto grid w-full max-w-[1400px] gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="The Owner" title={BUSINESS.ownerFullName} />
          <div className="flex flex-col gap-5 text-base leading-[1.8] text-slate">
            <p className="m-0">
              {BUSINESS.ownerFirstName} has been building pools in Southern California since{" "}
              {BUSINESS.since}. He designs the projects himself, prices them himself, and stays on
              them from the first walk-through to the day the water goes in.
            </p>
            <p className="m-0">
              Ryan reviews your layout, explains the costs and coordinates the build. You can discuss
              changes directly with the person managing your project.
            </p>
            <p className="m-0">
              Before construction starts, you review the design, the itemized proposal and the schedule
              with Ryan. Your approval sets the plan for the work ahead.
            </p>
          </div>
        </div>
      </section>

      <section className="section-x pb-4 pt-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative h-[280px] overflow-hidden rounded-lg sm:h-[420px]">
            <Image
              src="/images/aqua/projects/custom-pool-01/custom-pool-01-01.webp"
              alt="Finished backyard pool, spa and deck at dusk"
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-x bg-white py-[90px]">
        <div className="mx-auto grid w-full max-w-[1400px] gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col">
            <h2 className="m-0 inline-block self-start border-b-2 border-cyan pb-3.5 text-[15px] font-bold uppercase tracking-[1.5px] text-navy">
              Our Story
            </h2>
            <p className="m-0 mt-6 text-[clamp(24px,2.6vw,32px)] font-bold uppercase leading-[1.2] text-navy">
              Pool construction and ongoing care
            </p>
          </div>
          <div className="flex flex-col gap-5 text-base leading-[1.8] text-slate">
            <p className="m-0">
              Your pool, patio and lighting need to work together. We plan them as one project,
              so the layout, drainage and equipment are considered before construction begins.
            </p>
            <p className="m-0">
              We have been building Southern California pools since {BUSINESS.since}. We also provide
              pool care in the same area. At startup, we balance the water and explain the equipment.
              You can continue with weekly service after the build.
            </p>
            <p className="m-0">
              {BUSINESS.ownerFirstName} coordinates the crews and trades involved in your pool,
              stonework and finishes. Questions about the work go directly to him.
            </p>
            <p className="m-0">
              Today we build across Menifee, Murrieta, Temecula, Wildomar, Lake Elsinore, Corona,
              Riverside and the communities in between.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-navy text-white">
        <div className="mx-auto w-full max-w-[1400px] section-x grid grid-cols-3 gap-4 py-12 sm:gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="m-0 whitespace-nowrap text-[18px] font-extrabold text-white sm:text-[34px]">
                {s.value}
              </p>
              <p className="m-0 mt-1.5 text-sm font-medium leading-normal text-white/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <SectionHeading
            className="mb-[50px] max-w-[720px]"
            eyebrow="How We Work"
            title="What you can expect from Integrity"
            body="A clear design, a detailed price and a direct contact help you make informed choices throughout your build."
          />
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {RULES.map((r, i) => (
              <div key={r.title} className="flex flex-col gap-3 bg-white px-6 py-8">
                <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 text-base font-bold uppercase tracking-[0.5px] text-navy">
                  {r.title}
                </h3>
                <p className="m-0 text-sm leading-[1.7] text-slate">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps eyebrow="Our Process" title="The steps from design to startup" />

      <FinalCta
        title="Meet Ryan and discuss your project"
        body="Book a free site visit to discuss your layout, budget and questions. Ryan will review the property and prepare a design and itemized quote so you can decide with clear information."
      />
    </>
  );
}
