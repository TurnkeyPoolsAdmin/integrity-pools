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
        body="Build a custom pool, remodel an existing one or complete the space around it. Integrity coordinates design, permits and construction, with an itemized quote and a dedicated project manager for your project."
      />
      <WhatWeBuild />
      <ProcessSteps />
      <FinalCta />
    </>
  );
}
