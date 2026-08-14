import type { Metadata } from "next";
import { FinalCta, PageHero, ProcessSteps, WhatWeBuild } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom gunite pools, plunge pools, spas, remodels, water and fire features, hardscape, lighting and equipment across the Temecula Valley.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything in the Yard, One Contract"
        body="Pool, spa, deck, walls, features and lighting from one company with its own crews. One schedule, one warranty, one number to call."
      />
      <WhatWeBuild />
      <ProcessSteps />
      <FinalCta />
    </>
  );
}
