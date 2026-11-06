import { FIRST_YEAR_CARE } from "@/lib/site";
import { ArrowIcon, Button } from "./ui";

export default function FirstYearCare({
  title = FIRST_YEAR_CARE.headline,
  summary = FIRST_YEAR_CARE.summary,
  ctaLabel = "Plan your pool with us",
}: { title?: string; summary?: string; ctaLabel?: string }) {
  return (
    <section id="first-year-care" className="section-x bg-shell py-[80px] sm:py-[100px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow m-0 mb-4">Included with every new pool</p>
            <h2 className="display-heading m-0 max-w-[680px] text-[clamp(36px,4.3vw,58px)] leading-[1.1] text-navy">
              {title}
            </h2>
            <p className="mb-7 mt-5 max-w-[640px] text-lg leading-[1.7] text-slate">
              {summary}
            </p>
            <Button href="/contact">{ctaLabel}<ArrowIcon /></Button>
          </div>
          <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
            <h3 className="m-0 font-sans text-2xl font-semibold leading-snug text-navy">
              The first weeks deserve expert care.
            </h3>
            <p className="mb-0 mt-4 text-base leading-[1.75] text-slate">
              A new pool finish is especially vulnerable to staining, scaling and discoloration
              during its first 28 days. Proper startup and ongoing care help protect its appearance
              and expected lifespan.{" "}
              <a href="https://nationalplastererscouncil.com/app-on-filling-the-pool-and-initial-start-up/" target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan underline underline-offset-4">
                Read the National Plasterers Council guidance.
              </a>
            </p>
            <p className="mb-0 mt-4 text-base leading-[1.75] text-slate">
              Poor water chemistry or maintenance can also affect warranty coverage. For example,{" "}
              <a href="https://www.pentair.com/en-us/warranty.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan underline underline-offset-4">
                Pentair may deny claims for damage caused by improper care or water chemistry.
              </a>{" "}
              Coverage depends on the finish or equipment and its warranty terms.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {FIRST_YEAR_CARE.steps.map((step, i) => (
            <div key={step.title} className="border-t-2 border-aqua pt-6">
              <p className="eyebrow m-0 mb-3">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="m-0 font-sans text-xl font-semibold leading-snug text-navy">{step.title}</h3>
              <p className="mb-0 mt-3 text-base leading-[1.7] text-slate">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
