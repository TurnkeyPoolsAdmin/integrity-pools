import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta, PageHero } from "@/components/sections";
import { PROJECTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Custom gunite pools, spas, hardscape and lighting built by Integrity Pools across Temecula, Murrieta and the Inland Empire.",
};

export default function GalleryPage() {
  const categories = Array.from(new Set(PROJECTS.map((p) => p.category)));

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Backyards We've Finished"
        body="Every one of these started as an empty yard and a conversation. Photography is from real Integrity Pools projects across the Temecula Valley and Inland Empire."
      >
        <ul className="m-0 mt-8 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
          {categories.map((c) => (
            <li
              key={c}
              className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/50"
            >
              {c}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="section-x bg-white py-[80px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <figure
                key={p.slug}
                className="group m-0 overflow-hidden rounded-lg border border-line bg-white"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 430px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
                  <span className="text-sm font-bold uppercase tracking-[0.5px] text-navy">
                    {p.title}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-cyan">
                    {p.city}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        bg="bg-shell"
        title="Want One of These?"
        body="Send us the yard. We walk the site, talk through what is realistic, and come back with an itemised proposal and a design."
      />
    </>
  );
}
