import type { Metadata } from "next";
import Faq from "@/components/Faq";
import { FinalCta, PageHero } from "@/components/sections";
import { Button, CheckIcon, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Start with a free design and itemized quote from Integrity Pools. Discuss project costs and financing questions with Ryan.",
};

const POINTS = [
  {
    title: "See each cost",
    body: "Review separate prices for the pool, equipment, decking and features.",
  },
  {
    title: "Compare design choices",
    body: "Discuss how pool size, finishes and optional features affect your budget.",
  },
  {
    title: "Discuss financing",
    body: "Ask about financing for the work in your proposal. Availability and terms depend on the lender.",
  },
  {
    title: "Decide after the design",
    body: "Get the design and the itemized quote first, then work out how you want to pay for it.",
  },
];

const FAQS = [
  {
    q: "Does checking a rate affect my credit?",
    a: "Ask the lender which type of credit check it uses before you submit personal information. The process depends on the lender and the application.",
  },
  {
    q: "What can be financed?",
    a: "Confirm eligible work with the lender using your itemized proposal, which lists the pool, equipment and any decking or features you choose.",
  },
  {
    q: "Do I need to finance through you?",
    a: "No. You can arrange your own payment source. Discuss the project payment schedule with Ryan before signing a construction contract.",
  },
  {
    q: "How much do I need to put down?",
    a: "Ask the lender about its down payment requirements and Ryan about the construction payment schedule. These are confirmed separately.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Start with a clear project budget"
        body="A free design and itemized quote help you see the total cost before you make a decision. Ask Ryan about financing options for the work you are planning."
      />

      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto grid w-full max-w-[1400px] items-start gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="How It Works"
              title="Get the design and quote first"
              body="Review the pool, equipment, decking and features as separate costs. Ryan can help you compare design choices and adjust the plan to your budget. A lender will confirm any financing offer and its terms."
            />
            <div className="mt-9 flex flex-wrap gap-3.5">
              {/* TODO(matt): swap in your real lending partner links */}
              <Button href="/contact" size="lg">
                Talk to Us About Financing
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Request a Quote
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-lg border border-line bg-shell p-8 sm:p-10">
            {POINTS.map((p) => (
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

      <section className="section-x bg-shell py-[100px]">
        <div className="mx-auto w-full max-w-[980px]">
          <SectionHeading className="mb-10" eyebrow="FAQ" title="Financing Questions" />
          <Faq items={FAQS} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
