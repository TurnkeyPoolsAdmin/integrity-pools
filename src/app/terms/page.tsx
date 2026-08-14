import type { Metadata } from "next";
import { PageHero } from "@/components/sections";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="section-x bg-white py-[80px]">
        <div className="mx-auto flex w-full max-w-[820px] flex-col gap-6 text-base leading-[1.8] text-slate">
          {/* TODO(matt): have this reviewed before launch. */}
          <p className="m-0">
            This website is provided by {BUSINESS.legalName} for general information about our pool
            construction and outdoor living services.
          </p>
          <h2 className="m-0 mt-4 text-xl font-bold uppercase tracking-[0.5px] text-navy">
            Estimates and pricing
          </h2>
          <p className="m-0">
            Any price ranges, timelines or estimates shown here are illustrative. Nothing on this
            site is a quote or an offer to contract. A binding price comes only from a written
            proposal issued after a site visit.
          </p>
          <h2 className="m-0 mt-4 text-xl font-bold uppercase tracking-[0.5px] text-navy">
            Photography
          </h2>
          <p className="m-0">
            Project photography shows past work. Materials, finishes and site conditions vary, so
            your build will not be identical to any image shown.
          </p>
          <h2 className="m-0 mt-4 text-xl font-bold uppercase tracking-[0.5px] text-navy">
            Licensing
          </h2>
          <p className="m-0">
            {BUSINESS.legalName} is licensed and insured in the State of California.{" "}
            {BUSINESS.license}.
          </p>
        </div>
      </section>
    </>
  );
}
