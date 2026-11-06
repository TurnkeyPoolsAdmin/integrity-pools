import type { Metadata } from "next";
import QuoteWizard from "@/components/QuoteWizard";

export const metadata: Metadata = {
  title: "Sample Pool Estimate",
  description:
    "Explore pool sizes and features with a sample cost calculator. Request a free site visit from Integrity Pools for a confirmed project quote.",
};

export default function QuotePage() {
  return <QuoteWizard />;
}
