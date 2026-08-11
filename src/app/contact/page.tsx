import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Plan Your Pool Project | Integrity Pools",
  description:
    "Start planning a new pool, remodel, spa, or pool-hardscape project with Integrity Pools in Temecula and the Inland Empire.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">
            Start With a Clear Pool Plan
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Tell us what you want from your pool and we will help you understand the options, priorities, and next steps for your property.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="#0f172a" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-heading font-bold">30+</p>
              <p className="text-gray-400 text-sm">Years Combined Pool Experience</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold">1,600+</p>
              <p className="text-gray-400 text-sm">Pool Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold">THE RIGHT</p>
              <p className="text-gray-400 text-sm">Specialists Aligned Early</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold">70+</p>
              <p className="text-gray-400 text-sm">Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
