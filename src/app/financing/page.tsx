import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Financing | Integrity Pools & Hardscapes",
  description:
    "Flexible financing options for your pool project. We work with top lending partners to fit your budget.",
};

const partners = [
  {
    name: "Paramount",
    desc: "Competitive rates and flexible terms for pool and home improvement projects.",
  },
  {
    name: "HFS Financial",
    desc: "Specializing in swimming pool financing with quick approvals and low rates.",
  },
  {
    name: "Lyon Financial",
    desc: "Pool financing experts with programs designed specifically for backyard projects.",
  },
  {
    name: "LightStream",
    desc: "Unsecured loans with low, fixed rates and no fees for qualified borrowers.",
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-secondary-light font-semibold uppercase tracking-wider text-sm mb-3">
              Financing
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Finance Your Dream Pool or Outdoor Space
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We work within your budget, offering financing options from trusted
              lending partners so you can build the backyard you want on a timeline
              that makes sense.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      {/* Financing Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">
              Our Financing Partners
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&apos;ve partnered with industry-leading lenders to give you options that
              fit your financial situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-gray-light rounded-xl p-8 card-lift"
              >
                <h3 className="text-2xl font-bold text-dark mb-3">{p.name}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">
              How Financing Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">Design Your Project</h3>
              <p className="text-gray-600 text-sm">
                Meet with our team to plan your dream backyard and get a detailed estimate.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">Choose Your Lender</h3>
              <p className="text-gray-600 text-sm">
                We help you compare options from our lending partners to find the best fit.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">Start Building</h3>
              <p className="text-gray-600 text-sm">
                Once approved, we break ground. You enjoy your new backyard while paying over time.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary text-lg">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
