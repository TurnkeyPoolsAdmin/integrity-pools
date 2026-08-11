import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Custom Pool Gallery | Integrity Pools",
  description: "Browse custom pools, spas, water features, remodels, and pool hardscapes completed by Integrity Pools across the Inland Empire.",
};

const categories = [
  {
    name: "Modern Pools",
    images: [
      { src: "/images/photo-gallery/modern-pools/0000.webp", alt: "Modern geometric pool" },
      { src: "/images/our-work-banner-img/dscn0269-1.webp", alt: "Custom modern pool design" },
      { src: "/images/our-work-banner-img/july-21-2022-1.webp", alt: "Contemporary backyard pool" },
    ],
  },
  {
    name: "Freeform Pools",
    images: [
      { src: "/images/photo-gallery/freeform-pools/20140116-121726.webp", alt: "Freeform pool with natural curves" },
      { src: "/images/Everything-your-backyards-need/0721171355a-1.webp", alt: "Natural shaped pool" },
      { src: "/images/Everything-your-backyards-need/july-7-2020-1.webp", alt: "Organic pool design" },
    ],
  },
  {
    name: "Spas & Water Features",
    images: [
      { src: "/images/photo-gallery/spas/img-5286.webp", alt: "Custom spa installation" },
      { src: "/images/Everything-your-backyards-need/img-7216-1.webp", alt: "Pool with water features" },
      { src: "/images/our-work-banner-img/img-7216-1.webp", alt: "Spa and pool combo" },
    ],
  },
  {
    name: "Pool Decking & Hardscapes",
    images: [
      { src: "/images/photo-gallery/outdoor-living/1102171046.webp", alt: "Outdoor living space" },
      { src: "/images/Everything-your-backyards-need/sept-24-2019-1.webp", alt: "Fire feature with pool" },
      { src: "/images/Everything-your-backyards-need/mar-16-2022-1.webp", alt: "Hardscape patio" },
    ],
  },
  {
    name: "Build Process",
    images: [
      { src: "/images/photo-gallery/pool-building-process/1010171358-hdr.webp", alt: "Pool construction in progress" },
      { src: "/images/how-we-wrok-with-you/unsplash-ucmh1mnp5fo.webp", alt: "Excavation and prep" },
      { src: "/images/how-we-wrok-with-you/unsplash-miwgogarydq-1.webp", alt: "Steel and plumbing phase" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Pools Built for Real Backyards</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Explore pools, spas, water features, remodels, and pool hardscapes created around real homes, real priorities, and the way each family wanted to live.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      {/* Gallery Sections */}
      {categories.map((cat) => (
        <section key={cat.name} className="py-16 even:bg-gray-light odd:bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-dark mb-8">{cat.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cat.images.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-md group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">
            See Something You Want in Your Yard?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Tell us what you like and we will help you understand how it could fit your property, priorities, and budget.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Get My Free Pool Plan
          </Link>
        </div>
      </section>
    </>
  );
}
