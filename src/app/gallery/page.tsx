import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import { FinalCta, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore pool shapes, spas, decking and lighting ideas. Ask Integrity Pools for a free design based on your yard and budget.",
};

export default function GalleryPage() {

  return (
    <>
      <PageHero
        eyebrow="Design Inspiration"
        title="Find ideas for your pool and patio"
        body="Explore layouts, materials and features to discuss with our design team. These reference photos show design options, not completed Integrity projects."
      />

      <section className="section-x bg-white py-[80px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <ProjectGallery />
        </div>
      </section>

      <FinalCta
        bg="bg-shell"
        title="See your ideas in a design for your yard"
        body="Tell our team which layouts and features you like. Your free site visit leads to a 3D design and itemized quote based on your property."
      />
    </>
  );
}
