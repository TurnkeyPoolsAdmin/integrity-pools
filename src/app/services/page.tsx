import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import Partners from "@/components/Partners";
import CTASection from "@/components/CTASection";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Pool Construction & Remodeling | Integrity Pools",
  description:
    "Custom pools, pool remodeling, spas, smart pool systems, and pool hardscapes in Temecula and across the Inland Empire.",
};

const serviceDetails = [
  {
    title: "Pool Resurfacing & Remodeling",
    desc: "Give an aging pool a longer life and a cleaner look with updated plaster, tile, coping, and equipment. We help you decide which improvements matter most, what can stay, and where your budget will make the biggest difference.",
    img: "/images/service-multi-section-img/aug-10-2020-1.webp",
  },
  {
    title: "Smart Pool Technology",
    desc: "Control pumps, heaters, lighting, and water features from your phone. We install and configure smart systems that make daily pool ownership simpler and help equipment run more efficiently.",
    img: "/images/service-section-two-img/july-18-2022-1.webp",
  },
  {
    title: "Saltwater Pool Systems",
    desc: "Enjoy softer-feeling water and simpler chlorine management. We design new saltwater pools and convert compatible existing pools with equipment sized for reliable year-round use.",
    img: "/images/service-multi-section-img/0915171202a-1.webp",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-secondary-light font-semibold uppercase tracking-wider text-sm mb-3">
              Our Services
            </p>
            <h1 className="text-5xl font-heading font-bold mb-6">
              Pool Experts for the Way Your Family Wants to Live
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              Since 2012, Integrity has designed, built, and remodeled pools across the Inland Empire. We lead the pool, spa, equipment, and confirmed pool-hardscape scope, with early coordination when landscaping is part of the plan.
            </p>
            <Link href="/contact" className="btn-primary">
              Request My Free Design Consultation
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="#ffffff" />
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
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
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
