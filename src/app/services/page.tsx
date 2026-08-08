import type { Metadata } from "next";
import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import Partners from "@/components/Partners";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services | Integrity Pools & Hardscapes",
  description:
    "Pool construction, remodeling, hardscaping, fire features, outdoor kitchens, and spa installations across Southern California.",
};

const serviceDetails = [
  {
    title: "Pool Resurfacing & Remodeling",
    desc: "Transform your existing pool with new plaster, tile, coping, and equipment upgrades. We handle complete remodels that bring aging pools back to life with modern finishes and energy-efficient systems.",
    img: "https://thomaspools.us/assets/service-multi-section-img/Aug%2010%202020%201.png",
  },
  {
    title: "Smart Pool Technology",
    desc: "Control your pool from your phone. We install and configure smart pool systems including iAquaLink and ScreenLogic so you can manage pumps, heaters, lighting, and more from anywhere.",
    img: "https://thomaspools.us/assets/service-section-two-img/July%2018%202022%201.png",
  },
  {
    title: "Saltwater Pool Systems",
    desc: "Softer water, less maintenance, no harsh chemicals. We design and convert pools to saltwater systems that are gentler on skin and easier to maintain year-round.",
    img: "https://thomaspools.us/assets/service-multi-section-img/0915171202a%201.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-secondary-light font-semibold uppercase tracking-wider text-sm mb-3">
              Our Services
            </p>
            <h1 className="text-5xl font-heading font-bold mb-6">
              Your Los Angeles Area Swimming Pool & Spa Contractors
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              Serving the Santa Clarita Valley, the Greater Los Angeles Area, and Ventura
              County since 1990. From new builds to complete remodels, we handle every
              aspect of your outdoor transformation.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceDetails.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-heading font-bold text-dark mb-4">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ServicesGrid />
      <ProcessSteps />
      <Partners />
      <CTASection />
    </>
  );
}
