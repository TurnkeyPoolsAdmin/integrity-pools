import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { PageHero } from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your backyard. Free site visit, free design and an itemised quote across Temecula, Murrieta and the Inland Empire.",
};

const NEXT_STEPS = [
  {
    title: "The First Call",
    body: "A short conversation about the yard, the budget, and how the finished space actually gets used.",
  },
  {
    title: "The Site Visit",
    body: "Usually within a week. Grade, access, drainage and utilities get checked, and what is realistic is covered on the spot.",
  },
  {
    title: "The Proposal",
    body: "An itemised, fixed-scope proposal with a design concept. No deposit required to see it.",
  },
];

const CONTACT_FAQS = [
  {
    q: "What does the consultation include?",
    a: "A site visit, a design concept and an itemised proposal, at no cost and with no obligation to proceed.",
  },
  {
    q: "Do I need to be home for the site visit?",
    a: "Yes. We need you at the property so we can talk through how you want to use the space while we are standing in it.",
  },
  {
    q: "How soon can you start?",
    a: "It depends on the season. Spring and early summer book furthest out; a fall or winter start is usually the fastest. Current availability is covered on the first call.",
  },
  {
    q: "Is there any pressure to sign?",
    a: "No. Take as long as you need. The proposal is yours to compare against anyone else's.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Backyard"
        body="A few quick questions and we will come back with real numbers. No pressure, no obligation, and no sales visit you have to sit through."
      />

      <section className="section-x bg-shell pb-[90px] pt-[70px]">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <ContactForm />

          <aside className="flex flex-col gap-6 rounded-lg border border-line bg-white p-8">
            <h2 className="m-0 text-[22px] font-bold uppercase tracking-[0.5px] text-navy">
              Prefer the Phone?
            </h2>
            <a
              href={BUSINESS.phoneHref}
              className="text-[26px] font-extrabold text-cyan transition-colors hover:text-navy"
            >
              {BUSINESS.phone}
            </a>
            <div className="flex flex-col gap-5 border-t border-line pt-6">
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">
                  Hours
                </p>
                <p className="m-0 mt-1 text-sm text-slate">{BUSINESS.hours}</p>
              </div>
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">
                  Office
                </p>
                <p className="m-0 mt-1 text-sm leading-[1.7] text-slate">
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </p>
              </div>
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">
                  Service Area
                </p>
                <p className="m-0 mt-1 text-sm leading-[1.7] text-slate">
                  Temecula, Murrieta &amp; surrounding Inland Empire communities
                </p>
              </div>
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">
                  Response Time
                </p>
                <p className="m-0 mt-1 text-sm text-slate">One business day</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-x bg-white py-[90px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <SectionHeading className="mb-11 max-w-[720px]" eyebrow="Next Steps" title="What Happens Next" />
          <div className="grid gap-px bg-line sm:grid-cols-3">
            {NEXT_STEPS.map((s, i) => (
              <div key={s.title} className="flex flex-col gap-3 bg-white px-6 py-8">
                <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 text-base font-bold uppercase tracking-[0.5px] text-navy">
                  {s.title}
                </h3>
                <p className="m-0 text-sm leading-[1.7] text-slate">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x bg-shell py-[100px]">
        <div className="mx-auto w-full max-w-[980px]">
          <SectionHeading className="mb-10" eyebrow="FAQ" title="About the Consultation" />
          <Faq items={CONTACT_FAQS} />
        </div>
      </section>
    </>
  );
}
