import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Pool Financing Options | Integrity Pools",
  description:
    "Explore financing options for a new pool, pool remodel, spa, or qualifying pool-hardscape project with Integrity Pools.",
};

const partners = [
  {
    name: "Paramount",
    desc: "Financing options for qualifying pool and home-improvement projects, with terms set by the lender.",
  },
  {
    name: "HFS Financial",
    desc: "Home-improvement financing programs that may be used for qualifying swimming pool projects.",
  },
  {
    name: "Lyon Financial",
    desc: "Lending programs focused on swimming pools and other qualifying home-improvement projects.",
  },
  {
    name: "LightStream",
    desc: "Unsecured home-improvement loans for qualified borrowers, subject to the lender's current terms.",
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
              Build the Pool You Want With a Payment Plan That Fits
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Explore lending options for a new pool, remodel, spa, or qualifying pool-hardscape project. We will help you connect the project scope and budget to the financing path that makes sense for you.
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
              Compare programs from lenders that serve pool and home-improvement customers. Approval, rates, terms, and funding decisions are set by each lender.
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
              <h3 className="font-bold text-dark text-lg mb-2">Plan Your Pool</h3>
              <p className="text-gray-600 text-sm">
                Meet with Integrity to define the pool scope, priorities, and estimated project budget.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">Explore Your Options</h3>
              <p className="text-gray-600 text-sm">
                Review available lender programs and apply directly for the option you believe fits your needs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">Start Building</h3>
              <p className="text-gray-600 text-sm">
                After financing, contracts, design, and permits are complete, your pool can move into the construction schedule.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary text-lg">
              Explore My Pool Options
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
