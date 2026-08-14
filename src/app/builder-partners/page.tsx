import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import { FinalCta, PageHero, ProcessSteps } from "@/components/sections";
import { ArrowIcon, Button, SectionHeading } from "@/components/ui";
import { BUSINESS, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Builder Partners",
  description:
    "A pool partner for custom home builders and developers across the Temecula Valley. One scope, one schedule, one point of contact.",
};

const WHY = [
  {
    title: "Scheduling",
    body: "A committed window at contract, with notice the same day if weather or an inspection moves it.",
  },
  {
    title: "Point of Contact",
    body: "Ryan runs the whole scope and takes the call directly. Crew booking, sequencing and problems all go through him.",
  },
  {
    title: "Trade Coordination",
    body: "Pool work sequences around your excavator, grading and electrical rough-in rather than against them. Equipment pad power gets coordinated at plan stage.",
  },
  {
    title: "Permits and Inspections",
    body: "Drawings, permits, barrier compliance and inspection scheduling are handled on our side, including the re-inspection if one comes back.",
  },
  {
    title: "Full Exterior Scope",
    body: "Pool, hardscape, walls, drainage, features and lighting on one contract. One schedule and one warranty.",
  },
  {
    title: "Site Conditions",
    body: "Drive protection, contained spoil and a cleared site at the end of each day, on a property your client is still walking through.",
  },
];

const TAKE_ON = [
  { title: "Permits & Drawings", body: "Pool permit set, submissions and inspection scheduling, including re-inspections." },
  { title: "Barrier Compliance", body: "Pool-code fencing and gate hardware specified and installed to pass final." },
  { title: "Utility Coordination", body: "Equipment pad location and electrical load to your electrician at rough-in stage." },
  { title: "Grading Interface", body: "Pool elevations set to your finish grade, confirmed before excavation." },
  { title: "Access Protection", body: "Drive and lawn protection, contained spoil, site cleared daily." },
  { title: "Client Walkthrough", body: "Startup, equipment training and maintenance handoff at closing." },
];

const FAQS = [
  {
    q: "Do you work as a subcontractor on a builder's contract?",
    a: "Yes, and we also contract directly with the homeowner alongside your build. Either structure works, so pick whichever keeps the accounting and the client relationship simpler on your end.",
  },
  {
    q: "When in the build should the pool go in?",
    a: "Earlier than most schedules assume. Excavation needs yard access before final grade, hardscape and fencing close it off, and the equipment pad has to be coordinated with electrical rough-in. Plan review is the right time to bring us in.",
  },
  {
    q: "Can you build from our plans and elevations?",
    a: "Send them and we will price against them. Any conflict between the pool design and the grade or setbacks comes back during pricing, not during the dig.",
  },
  {
    q: "How do you handle change orders?",
    a: "Written, priced and signed before the work happens.",
  },
  {
    q: "What is your service area for builder work?",
    a: "Roughly an hour of the shop: the Temecula Valley, out through Menifee and Lake Elsinore, north to Corona and Riverside, and south to Fallbrook.",
  },
];

export default function BuilderPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Custom Home Builders"
        title="A Pool Partner for Custom Home Builders"
        body={`Pool and exterior construction across the Temecula Valley, sequenced with your grading, utility and hardscape trades. ${BUSINESS.ownerFirstName} runs the scope and takes the calls.`}
      >
        <div className="mt-9 flex flex-wrap gap-3.5">
          <Button href="/contact" variant="cyan" size="lg">
            <ArrowIcon />
            Send Us a Set of Plans
          </Button>
          <Button href={BUSINESS.phoneHref} variant="ghostLight" size="lg">
            {BUSINESS.phone}
          </Button>
        </div>
      </PageHero>

      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <SectionHeading
            className="mb-[50px] max-w-[720px]"
            eyebrow="Why Builders Call Us"
            title="Where a Pool Sub Fits Into Your Schedule"
            body="Six parts of the job that land on your critical path, and how we keep each one off it."
          />
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <div key={w.title} className="flex flex-col gap-3 bg-white px-6 py-8">
                <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 text-base font-bold uppercase tracking-[0.5px] text-navy">
                  {w.title}
                </h3>
                <p className="m-0 text-sm leading-[1.7] text-slate">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x bg-navy py-[100px] text-white">
        <div className="mx-auto w-full max-w-[1400px]">
          <SectionHeading
            light
            className="mb-[50px] max-w-[760px]"
            eyebrow="Off Your Plate"
            title="What We Take On"
            body="Everything below is our responsibility on a partnered build. Anything not on the list is worth settling at plan review, because the worst time to find a gap in scope is at rough-in."
          />
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {TAKE_ON.map((t) => (
              <div key={t.title} className="flex flex-col gap-3 bg-navy px-6 py-8">
                <h3 className="m-0 text-base font-bold uppercase tracking-[0.5px] text-white">
                  {t.title}
                </h3>
                <p className="m-0 text-sm leading-[1.7] text-white/65">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x bg-shell py-[100px]">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Design Support"
            title="Renderings You Can Put In Front of a Buyer"
            body="Every quote includes a design of the actual lot. On a spec or pre-sale build that rendering is yours to use as a selling asset, because a buyer commits to a backyard far more readily when they can see it."
          />
          <div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-b-2 border-cyan pb-1 text-xs font-bold uppercase tracking-[1.5px] text-navy transition-colors hover:text-cyan"
            >
              See renderings and builds
              <ArrowIcon className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      <ProcessSteps
        bg="bg-white"
        eyebrow="How It Runs"
        title="The Same Five Steps, Coordinated With You"
      />

      <section className="section-x bg-shell py-[90px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <SectionHeading
            className="mb-10 max-w-[720px]"
            eyebrow="Scope"
            title="What We Can Carry On One Contract"
            body="Pool, spa, features, hardscape, drainage and lighting on one contract. One sub to schedule and one number to call, instead of five of each."
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

      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto w-full max-w-[980px]">
          <SectionHeading className="mb-10" eyebrow="FAQ" title="Working Together" />
          <Faq items={FAQS} />
        </div>
      </section>

      <FinalCta
        bg="bg-shell"
        title="Send Us a Set of Plans"
        body="Send them over and we will price the pool against your drawings, then mark exactly where it lands on your critical path. Any conflict with the grade or the setbacks comes back to you during pricing, not during the dig."
      />
    </>
  );
}
