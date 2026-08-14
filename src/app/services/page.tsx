import type { Metadata } from "next";
import { FinalCta, PageHero, ProcessSteps, WhatWeBuild } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom gunite pools, plunge pools, spas, remodels, water and fire features, hardscape, lighting and equipment across Menifee and the Temecula Valley.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Pool Construction, Remodeling & Hardscape"
        body="A narrow list, run deep. New gunite builds, remodels of tired pools, and the decking, walls and lighting that finish the space, all from one company with its own crews. One schedule, one warranty, one number to call."
      />
      <WhatWeBuild />
      <ProcessSteps />
      <FinalCta />
    </>
  );
}
