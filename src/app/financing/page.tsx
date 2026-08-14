import type { Metadata } from "next";
import Faq from "@/components/Faq";
import { FinalCta, PageHero } from "@/components/sections";
import { Button, CheckIcon, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Estimate an affordable monthly payment on your custom pool project. Soft credit check, no impact on your score.",
};

const POINTS = [
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
  {
    title: "Decide after the design",
    body: "Get the design and the itemised quote first, then work out how you want to pay for it.",
  },
];

const FAQS = [
  {
    q: "Does checking a rate affect my credit?",
    a: "No. A rate check is a soft pull. Only a full application, once you decide to proceed, involves a hard pull.",
  },
  {
    q: "What can be financed?",
    a: "The whole project. Pool shell, equipment, decking, walls, features and lighting can all sit on one loan rather than being split up.",
  },
  {
    q: "Do I need to finance through you?",
    a: "No. Plenty of clients use a HELOC, a cash-out refinance or their own funds. The lending partners are there as an option, not a requirement.",
  },
  {
    q: "How much do I need to put down?",
    a: "That depends on the lender and the product. We can walk you through the options once we know the project scope.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Pool Financing Without the Wait"
        body="Get the backyard you want now and spread the cost. Our lending partners can estimate an affordable monthly payment on your project in a few minutes."
      />

      <section className="section-x bg-white py-[100px]">
        <div className="mx-auto grid w-full max-w-[1400px] items-start gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="How It Works"
              title="Three Minutes to a Number"
              body="Tell the lender roughly what you are building and what your finances look like. You get a monthly payment estimate back straight away, with no impact on your credit score. Bring that number to the design conversation and we will build to it."
            />
            <div className="mt-9 flex flex-wrap gap-3.5">
              {/* TODO(matt): swap in your real lending partner links */}
              <Button href="/contact" size="lg">
                Talk to Us About Financing
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get an Instant Estimate
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
