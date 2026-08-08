import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Integrity Pools & Hardscapes",
  description: "Browse our portfolio of custom pools, spas, hardscaping, and outdoor living projects across Southern California.",
};

const categories = [
  {
    name: "Modern Pools",
    images: [
      { src: "https://thomaspools.us/assets/photo-gallery/modern-pools/0000.JPG", alt: "Modern geometric pool" },
      { src: "https://thomaspools.us/assets/our-work-banner-img/DSCN0269%201.png", alt: "Custom modern pool design" },
      { src: "https://thomaspools.us/assets/our-work-banner-img/July%2021%202022%201.png", alt: "Contemporary backyard pool" },
    ],
  },
  {
    name: "Freeform Pools",
    images: [
      { src: "https://thomaspools.us/assets/photo-gallery/freeform-pools/20140116_121726.jpg", alt: "Freeform pool with natural curves" },
      { src: "https://thomaspools.us/assets/Everything-your-backyards-need/0721171355a%201.png", alt: "Natural shaped pool" },
      { src: "https://thomaspools.us/assets/Everything-your-backyards-need/July%207%202020%201.png", alt: "Organic pool design" },
    ],
  },
  {
    name: "Spas & Water Features",
    images: [
      { src: "https://thomaspools.us/assets/photo-gallery/spas/IMG_5286.JPG", alt: "Custom spa installation" },
      { src: "https://thomaspools.us/assets/Everything-your-backyards-need/IMG%207216%201.png", alt: "Pool with water features" },
      { src: "https://thomaspools.us/assets/our-work-banner-img/IMG%207216%201.png", alt: "Spa and pool combo" },
    ],
  },
  {
    name: "Outdoor Living",
    images: [
      { src: "https://thomaspools.us/assets/photo-gallery/outdoor-living/1102171046.jpg", alt: "Outdoor living space" },
      { src: "https://thomaspools.us/assets/Everything-your-backyards-need/Sept%2024%202019%201.png", alt: "Fire feature with pool" },
      { src: "https://thomaspools.us/assets/Everything-your-backyards-need/Mar%2016%202022%201.png", alt: "Hardscape patio" },
    ],
  },
  {
    name: "Build Process",
    images: [
      { src: "https://thomaspools.us/assets/photo-gallery/pool-building-process/1010171358_HDR.jpg", alt: "Pool construction in progress" },
      { src: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_UCMH1MNP5Fo.png", alt: "Excavation and prep" },
      { src: "https://thomaspools.us/assets/how-we-wrok-with-you/unsplash_MiWGoGARyDQ-1.png", alt: "Steel and plumbing phase" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Our Work</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Browse our portfolio of custom pools, spas, hardscaping, and outdoor
            living projects built for families across Southern California.
          </p>
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
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
            Like What You See?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Let&apos;s talk about bringing this level of quality to your backyard.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
