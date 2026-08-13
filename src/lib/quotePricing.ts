// ============================================================
// QUOTE WIZARD PRICING CONFIG
// ALL DOLLAR AMOUNTS ARE PLACEHOLDERS. Edit this file to set
// real prices — nothing else needs to change.
// ============================================================

export type PoolModel = {
  id: string;
  name: string;
  size: string;
  lengthFt: number;
  widthFt: number;
  description: string;
  basePrice: number; // PLACEHOLDER
};

export const POOL_MODELS: PoolModel[] = [
  {
    id: "cocktail",
    name: "Cocktail",
    size: "8′ × 16′",
    lengthFt: 16,
    widthFt: 8,
    description:
      "The perfect entry-level pool for smaller yards. A very popular option.",
    basePrice: 85000,
  },
  {
    id: "classic",
    name: "Classic",
    size: "12′ × 24′",
    lengthFt: 24,
    widthFt: 12,
    description:
      "The compact and sensible option. Great middle ground for smaller yards while keeping real swimming space.",
    basePrice: 105000,
  },
  {
    id: "family",
    name: "Family",
    size: "15′ × 30′",
    lengthFt: 30,
    widthFt: 15,
    description:
      "The most popular choice. Generous swimming space with a timeless form factor.",
    basePrice: 130000,
  },
  {
    id: "resort",
    name: "Resort",
    size: "18′ × 36′",
    lengthFt: 36,
    widthFt: 18,
    description:
      "A statement pool. Full-sized dimensions for the ultimate backyard experience.",
    basePrice: 160000,
  },
  {
    id: "estate",
    name: "Estate",
    size: "20′ × 40′",
    lengthFt: 40,
    widthFt: 20,
    description:
      "The largest standard residential footprint we offer. A piece that defines the property.",
    basePrice: 195000,
  },
];

export type DeckingMaterial = {
  id: string;
  name: string;
  description: string;
  pricePerSqft: number; // PLACEHOLDER
};

export const DECKING_MATERIALS: DeckingMaterial[] = [
  {
    id: "concrete",
    name: "Poured Concrete",
    description:
      "Clean, durable, and cost-effective. Easy to maintain and highly customizable. Can be sealed at additional cost.",
    pricePerSqft: 14,
  },
  {
    id: "travertine",
    name: "Travertine Pavers",
    description:
      "Premium natural stone that stays cool underfoot and looks timeless. Typically available in Ivory, Silver, and Noce colors.",
    pricePerSqft: 28,
  },
  {
    id: "pavers",
    name: "Standard Pavers",
    description:
      "Classic warmth and character. Individual pavers can be replaced if damaged.",
    pricePerSqft: 22,
  },
  {
    id: "flagstone",
    name: "Natural Flagstone",
    description:
      "Organic, unique, and luxurious. No two flagstone decks look the same.",
    pricePerSqft: 30,
  },
  {
    id: "bluestone",
    name: "Bluestone Pavers",
    description:
      "A classic premium decking material. Popular in higher-end builds.",
    pricePerSqft: 32,
  },
  {
    id: "porcelain",
    name: "Porcelain Tiles",
    description:
      "Our highest-end finish. Will level up any backyard to a new level of luxury. Many options available.",
    pricePerSqft: 38,
  },
];

export const DECKING_COVERAGE = [
  { id: "minimal", label: "Minimal | 4 ft around pool", apronFt: 4 },
  { id: "standard", label: "Standard | 6 ft around pool", apronFt: 6 },
  { id: "generous", label: "Generous | 8 ft around pool", apronFt: 8 },
  { id: "expansive", label: "Expansive | 10 ft around pool", apronFt: 10 },
];

export function deckingSqft(pool: PoolModel, apronFt: number): number {
  const total =
    (pool.lengthFt + 2 * apronFt) * (pool.widthFt + 2 * apronFt) -
    pool.lengthFt * pool.widthFt;
  return Math.round(total / 4) * 4;
}

export type FeatureOption = {
  id: string;
  name: string;
  description: string;
  price: number; // PLACEHOLDER
};

export type FeatureGroup = { label: string; options: FeatureOption[] };

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    label: "Sanitization",
    options: [
      {
        id: "salt",
        name: "Saltwater System",
        description:
          "Gentler on skin and eyes than traditional chlorine. Cheaper to run. Self-generating and easier to maintain.",
        price: 2500,
      },
      {
        id: "uv",
        name: "UV Sanitizer",
        description:
          "A secondary sanitation layer that neutralizes bacteria and reduces chemical use.",
        price: 2000,
      },
    ],
  },
  {
    label: "Heating",
    options: [
      {
        id: "heatpump",
        name: "Heat Pump",
        description:
          "Energy-efficient heating that extends your swim season by months.",
        price: 6500,
      },
      {
        id: "gas",
        name: "Gas Heater",
        description:
          "Fast, powerful heating ideal for pools that need rapid temperature changes.",
        price: 5500,
      },
    ],
  },
  {
    label: "Features",
    options: [
      {
        id: "spa",
        name: "Built-in Spa",
        description:
          "A seamlessly integrated spa/hot tub. Either level or raised. Will instantly level up any backyard pool project.",
        price: 20000,
      },
      {
        id: "shelf",
        name: "Sun Shelf / Tanning Ledge",
        description:
          "A shallow entry platform perfect for loungers, toddlers, and pets.",
        price: 6000,
      },
      {
        id: "sheer",
        name: "Sheer-Descent Water Feature",
        description:
          "Raised back wall with an elegant sheer-descent water feature. Another instant level-up for any pool project.",
        price: 7500,
      },
      {
        id: "jets",
        name: "Deck Jets",
        description:
          "Elegant water arcs that shoot from the deck into the pool. Very popular with kids and pets.",
        price: 3500,
      },
      {
        id: "led",
        name: "LED Color Lighting",
        description:
          "Multi-color LED lighting that transforms your pool at night.",
        price: 2500,
      },
    ],
  },
  {
    label: "Automation",
    options: [
      {
        id: "automation",
        name: "Pool Automation System",
        description:
          "Control everything — lights, pump, temperature, jets — from your phone.",
        price: 6000,
      },
    ],
  },
];

export const TIMELINES = [
  { id: "asap", label: "As soon as possible", sub: "I'm ready to move forward" },
  { id: "1-3", label: "1–3 months", sub: "Planning soon" },
  { id: "3-6", label: "3–6 months", sub: "Still in early stages" },
  { id: "6-12", label: "6–12 months", sub: "Looking ahead" },
  { id: "exploring", label: "Just exploring", sub: "No timeline yet" },
];

export const SERVICE_CITIES = [
  "murrieta",
  "temecula",
  "wildomar",
  "menifee",
  "winchester",
  "french valley",
  "corona",
  "lake elsinore",
  "canyon lake",
  "riverside",
  "fallbrook",
  "hemet",
  "sun city",
  "perris",
];

export const SERVICE_ZIPS = [
  "92562", "92563", "92584", "92585", "92586", "92587", "92590",
  "92591", "92592", "92595", "92596", "92530", "92532",
  "92879", "92880", "92881", "92882", "92883", "92501", "92503",
  "92504", "92505", "92506", "92507", "92508", "92509", "92028",
  "92544", "92545", "92570", "92571",
];

export function isServedAddress(address: string): boolean {
  const a = address.toLowerCase();
  if (SERVICE_CITIES.some((c) => a.includes(c))) return true;
  const zips = a.match(/\b9\d{4}\b/g) ?? [];
  return zips.some((z) => SERVICE_ZIPS.includes(z));
}

export type EstimateInput = {
  poolId: string;
  deckingId: string | null;
  deckingSqftValue: number;
  featureIds: string[];
};

export function computeEstimate(input: EstimateInput): {
  low: number;
  high: number;
  mid: number;
} {
  const pool = POOL_MODELS.find((p) => p.id === input.poolId);
  let total = pool ? pool.basePrice : 0;
  if (input.deckingId) {
    const mat = DECKING_MATERIALS.find((m) => m.id === input.deckingId);
    if (mat) total += mat.pricePerSqft * input.deckingSqftValue;
  }
  const allFeatures = FEATURE_GROUPS.flatMap((g) => g.options);
  for (const id of input.featureIds) {
    const f = allFeatures.find((o) => o.id === id);
    if (f) total += f.price;
  }
  const round5k = (n: number) => Math.round(n / 5000) * 5000;
  return { low: round5k(total * 0.92), high: round5k(total * 1.1), mid: total };
}

export function formatUsd(n: number): string {
  return "$" + n.toLocaleString("en-US");
}
