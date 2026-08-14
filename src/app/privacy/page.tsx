import type { Metadata } from "next";
import { PageHero } from "@/components/sections";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section-x bg-white py-[80px]">
        <div className="mx-auto flex w-full max-w-[820px] flex-col gap-6 text-base leading-[1.8] text-slate">
          {/* TODO(matt): have this reviewed before launch. */}
          <p className="m-0">
            {BUSINESS.legalName} collects only the information you choose to give us through this
            website: your name, phone number, email address, project address and whatever you tell us
            about the project.
          </p>
          <h2 className="m-0 mt-4 text-xl font-bold uppercase tracking-[0.5px] text-navy">
            How we use it
          </h2>
          <p className="m-0">
            We use it to respond to your enquiry, schedule a site visit and prepare a proposal. We do
            not sell it, rent it or trade it.
          </p>
          <h2 className="m-0 mt-4 text-xl font-bold uppercase tracking-[0.5px] text-navy">
            Who we share it with
          </h2>
          <p className="m-0">
            Only the service providers we need to run the business, such as email and scheduling
            software, and a lending partner if you ask us to refer you to one.
          </p>
          <h2 className="m-0 mt-4 text-xl font-bold uppercase tracking-[0.5px] text-navy">
            Your choices
          </h2>
          <p className="m-0">
            You can ask us to delete your information at any time by calling {BUSINESS.phone} or
            emailing us. We will action it.
          </p>
        </div>
      </section>
    </>
  );
}
