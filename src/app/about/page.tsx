import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta, ProcessSteps } from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { BUSINESS, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Integrity Pools has been building Southern California pools since 2012. Owner-run, deliberately small, and still servicing the pools we build.",
};

const RULES = [
  {
    title: "Answer the Phone",
    body: "You get a direct number, not a call queue. Most build problems are small and fixable when they are raised the same week.",
  },
  {
    title: "Show It Before You Build It",
    body: "Every quote includes a design of your actual yard, revised until the layout is right. Nothing is dug before you sign off on it.",
  },
  {
    title: "Price and Schedule Up Front",
    body: "An itemised proposal and a target date at contract. If the date moves, the call comes the same day.",
  },
  {
    title: "Keep It One Project",
    body: "Pool, hardscape, features and lighting on one contract with our own crews. One schedule, one warranty, one number to call.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-x pb-14 pt-20">
        <div className="mx-auto w-full max-w-[900px]">
          <p className="eyebrow m-0 mb-5">About Integrity Pools</p>
          <h1 className="m-0 mb-7 text-[clamp(34px,5vw,56px)] font-extrabold uppercase leading-[1.08] tracking-[-0.5px] text-navy">
            Owner-Run, and Small on Purpose
          </h1>
          <p className="m-0 text-[17px] leading-[1.8] text-slate">
            Integrity Pools builds gunite pools, spas and the outdoor living space that goes around
            them, across the Temecula Valley and the wider Inland Empire. We only ever run a handful
            of projects at once. That is a deliberate choice, and it is the reason the same person
            stays on your build from the first walk-through to the day the water goes in.
          </p>
        </div>
      </section>

      <section className="section-x pb-4 pt-4">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="relative h-[280px] overflow-hidden rounded-lg sm:h-[420px]">
            <Image
              src="/images/banner-img/pool-drone-001-06-1.webp"
              alt="Aerial view of a finished Integrity Pools backyard in Temecula, CA"
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
          <SectionHeading eyebrow="Our Story" title="Two Halves of One Business" />
          <div className="flex flex-col gap-5 text-base leading-[1.8] text-slate">
            <p className="m-0">
              A pool, a patio and a lighting plan usually mean three companies, three contracts and
              three numbers to ring when the schedule slips. Removing that is the whole point of how
              we are set up.
            </p>
            <p className="m-0">
              We have been building Southern California pools since {BUSINESS.since}. Alongside the
              build side, we run a pool service business in the same valley. That is unusual, and it
              matters more than it sounds: we are the people who get called back to the pools we
              build. Nobody cuts a corner on an equipment pad they will personally be standing at in
              three years.
            </p>
            <p className="m-0">
              Around the owner sits a settled group of gunite crews, masons and finish trades, most
              of them on our jobs for years. That is why the stonework looks the same standard from
              one backyard to the next. You are not getting whichever crew was free that week.
            </p>
            <p className="m-0">
              He is also the ceiling on how much we take on. Every build goes across his desk and
              onto his schedule, which caps how many can run at once. We would rather turn work away
              than stretch a crew across more yards than it can properly cover.
            </p>
            <p className="m-0">
              Today we build across Temecula, Murrieta, Wildomar, Menifee, Lake Elsinore, Corona,
              Riverside and the communities in between.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-navy text-white">
        <div className="mx-auto w-full max-w-[1400px] section-x grid grid-cols-3 gap-4 py-12 sm:gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="m-0 text-[24px] font-extrabold text-white sm:text-[34px]">{s.value}</p>
              <p className="m-0 mt-1.5 text-[10px] font-semibold uppercase tracking-[1.5px] text-white/50 sm:text-[11px]">
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
            title="Four Rules We Work To"
            body="These four cover what goes wrong on most builds. Writing them down means nobody here has to work it out in the moment, and it means you can hold us to them."
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

      <ProcessSteps eyebrow="Our Process" title="The Same Five Steps, Every Time" />

      <FinalCta
        title="Come See the Work"
        body="Our recent clients are happy to talk, and there is almost always an active jobsite you can walk. Ask for either one and we will set it up. We would rather you saw the work in person than took our word for it."
      />
    </>
  );
}
