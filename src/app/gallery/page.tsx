import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import { FinalCta, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Custom gunite pools, spas, hardscape and lighting built by Integrity Pools across Menifee, Murrieta and the Inland Empire.",
};

export default function GalleryPage() {

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Backyards We've Finished"
        body="Every one of these started as an empty yard and a conversation. Photography is from real Integrity Pools projects across Menifee, the Temecula Valley and the Inland Empire."
      />

      <section className="section-x bg-white py-[80px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <ProjectGallery />
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
