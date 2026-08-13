import type { Metadata } from "next";
import QuoteWizard from "@/components/QuoteWizard";

export const metadata: Metadata = {
  title: "Instant Pool Estimate | Integrity Pools",
  description:
    "Get an accurate price range for your custom gunite pool in Murrieta, Temecula, and the Inland Empire. Instant estimate, no rep required.",
};

export default function QuotePage() {
  return <QuoteWizard />;
}
