/**
 * Single source of truth for site content.
 *
 * Layout/structure is modelled on aquapoolsandoutdoorliving.com, rebranded for
 * Integrity Pools & Hardscape (Menifee, CA).
 *
 * ITEMS MARKED "TODO(matt)" ARE PLACEHOLDERS AND MUST BE CONFIRMED
 * BEFORE THIS SITE GOES LIVE.
 */

export const BUSINESS = {
  name: "Integrity Pools",
  legalName: "Integrity Pools & Hardscape",
  url: "https://integrity-pools.vercel.app",
  phone: "(951) 444-7150",
  phoneHref: "tel:+19514447150",
  email: "info@integritypoolcareca.com", // TODO(matt): confirm public email
  street: "27450 Ynez Rd",
  city: "Temecula",
  state: "CA",
  zip: "92591",
  hours: "Mon - Fri: 8 AM - 4 PM",
  since: 2012,
  license: "C-53 Lic. #945615 & #1154897",
  credential: "PHTA Certified Building Professional",
  ownerFirstName: "Ryan",
  ownerFullName: "Ryan Osborne",
  serviceAreaLine: "Menifee, Murrieta & the Inland Empire",
  areasServedNames: [
    "Menifee",
    "Temecula",
    "Murrieta",
    "Wildomar",
    "Menifee",
    "Lake Elsinore",
    "Canyon Lake",
    "Winchester",
    "French Valley",
    "Perris",
    "Hemet",
    "Corona",
    "Riverside",
    "Fallbrook",
    "Sun City",
    "Murrieta Hot Springs",
  ],
  social: {
    facebook: "https://www.facebook.com/integritypoolcare", // TODO(matt): confirm
    instagram: "https://www.instagram.com/integritypoolcare", // TODO(matt): confirm
  },
} as const;

/* ------------------------------------------------------------------ */
/* Stats bar                                                           */
/* ------------------------------------------------------------------ */

export const STATS = [
  // Matches Aqua's three-stat rhythm: a short number, then a two-word label.
  { value: "30+", label: "Years Experience" }, // confirmed by Matt 2026-08-14
  { value: "43", label: "5-star pool-care reviews" }, // verified 2026-08-14, all 5 star
  { value: "6–8 wks", label: "Typical new pool build" }, // confirmed by Matt 2026-08-14
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

/**
 * PHOTOGRAPHY NOTE (2026-08-14)
 *
 * Every image under /images/aqua/ is Aqua Pools & Outdoor Living's own
 * photography, mirrored from aquapoolsandoutdoorliving.com and self-hosted so
 * the demo renders exactly like the reference site. Slot-for-slot the same
 * photo Aqua uses in the same position wherever their service list overlaps
 * ours.
 *
 * These are Aqua's copyrighted photos of Aqua's builds. They are here so the
 * layout can be evaluated with real photography. They MUST be replaced with
 * Integrity's own photography before this site is pointed at a public domain.
 * Alt text is deliberately descriptive only and never claims Integrity built
 * the pool shown.
 *
 * Integrity's real photos are still in the repo under /images/photo-gallery,
 * /images/banner-img, etc. and can be swapped back in at any time.
 */

export type Service = {
  slug: string;
  name: string;
  short: string;
  /** Card image on the What We Build grid. */
  image: string;
  /** Large hero on the service page. Falls back to `image`. */
  heroImage?: string;
  imageAlt: string;
  heroImageAlt?: string;
  heroTitle: string;
  heroBlurb: string;
  intro: string;
  inclusions: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "custom-pools",
    name: "Custom Pools",
    short:
      "See your custom pool in a free 3D design. Choose the shape, depth, seating and finishes with Ryan before construction starts.",
    image: "/images/aqua/projects/pool-spa-14/pool-spa-14-06.webp",
    heroImage: "/images/aqua/projects/custom-pool-02/custom-pool-02-02.webp",
    imageAlt: "Curved pool with stone decking",
    heroImageAlt: "Curved pool with underwater lights and an illuminated stone wall",
    heroTitle: "Custom Pools",
    heroBlurb:
      "Gunite pools engineered for Southern California soil, sun and setbacks. You see the design before we dig, the quote is broken out line by line, and Ryan runs the build himself from excavation to startup.",
    intro:
      "Here is what is typically included in an Integrity custom pool build. Every yard is different, so your estimate documents carry the full inclusion list after we walk the site together.",
    inclusions: [
      { title: "Site & Soil Review", body: "Grade, drainage, access and utility locates before design starts." },
      { title: "3D Design Rendering", body: "A rendered view of your actual yard, revised until you sign off." },
      { title: "Permits & HOA Packet", body: "Drawings, submissions and inspection scheduling handled on our side." },
      { title: "Excavation & Haul-Off", body: "Dig, spoil removal and access protection for drives and lawn." },
      { title: "Steel & Plumbing", body: "Engineered rebar cage and schedule-40 runs, pressure tested." },
      { title: "Gunite Shell", body: "Pneumatically applied shell, cured and inspected before finish." },
      { title: "Tile, Coping & Decking", body: "Waterline tile, coping and your choice of deck material." },
      { title: "Equipment & Startup", body: "Pump, filter, heater, automation, plus a full walkthrough." },
    ],
    faqs: [
      {
        q: "How long does a custom pool take to build?",
        a: "A typical new pool takes six to eight weeks after excavation begins. Site conditions, weather and inspections can affect the schedule. Ryan reviews the timeline with you before construction starts.",
      },
      {
        q: "What does a custom pool cost?",
        a: "Most of our builds land between $85,000 and $195,000. Access, grading and retaining move that number far more than the finishes you pick, which is why we walk the yard before we put a price on paper.",
      },
      {
        q: "Do I see a design before construction starts?",
        a: "Yes. Every quote comes with a rendering of your yard. You look it over, tell us what to change, and we keep revising until it is right. Then we break ground.",
      },
      {
        q: "Do you pull the permits?",
        a: "Yes. We prepare the drawings, submit to the city or county, handle the HOA packet and book every inspection.",
      },
      {
        q: "Do you build fiberglass pools?",
        a: "No. We build gunite only. A sprayed concrete shell lets us customize the shape, depth and features to your yard. The structure is designed for the site conditions.",
      },
    ],
  },
  {
    slug: "plunge-pools",
    name: "Plunge Pools",
    short:
      "Compact custom concrete pools for smaller lots and tighter budgets, built to the same shell and equipment spec as a full-size build.",
    image: "/images/aqua/projects/plunge-pool-04/plunge-pool-04-05.webp",
    heroImage: "/images/aqua/projects/plunge-pool-08/plunge-pool-08-07.webp",
    imageAlt: "Compact rectangular pool with built-in steps and stone decking",
    heroImageAlt: "Compact pool with blue underwater lighting beside a patio",
    heroTitle: "Plunge Pools",
    heroBlurb:
      "Fit a pool into a smaller yard with a layout designed around your space. Ryan reviews access, seating and heating options, then shows you the design and costs before you decide.",
    intro:
      "A plunge pool is a full gunite build in a smaller shell. Nothing about the structure or the equipment is downgraded.",
    inclusions: [
      { title: "Same Gunite Shell", body: "Engineered steel and sprayed concrete, not a drop-in." },
      { title: "Full-Size Equipment", body: "Variable speed pump, filter and heater sized to the volume." },
      { title: "Spa Options", body: "Add a raised spillover spa or run the whole shell warm." },
      { title: "Bench & Ledge", body: "Built-in seating and a tanning ledge inside the footprint." },
      { title: "Tight Access Ready", body: "Small equipment and hand-dig where the gate will not take a machine." },
      { title: "Deck Integration", body: "Coping and decking laid to tie into the space you already have." },
      { title: "Automation", body: "Phone control for pump, heater and lights." },
      { title: "Startup & Handoff", body: "Water balance and a walkthrough once it is full." },
    ],
    faqs: [
      {
        q: "How small can a plunge pool be?",
        a: "We regularly build in the 8x16 to 12x24 range. Below that the equipment starts to cost more than the shell.",
      },
      {
        q: "Is a plunge pool cheaper than a full pool?",
        a: "Usually, but not proportionally. The permit, the equipment and the crew mobilization cost roughly the same, so the saving is mostly in shell size, deck and finish.",
      },
      {
        q: "Can it be heated year round?",
        a: "Yes, and a smaller volume heats faster and holds temperature more cheaply than a full-size pool.",
      },
    ],
  },
  {
    slug: "spas-and-hot-tubs",
    name: "Spas & Hot Tubs",
    short:
      "Raised, spillover and standalone gunite spas, tied straight into the pool's plumbing and automation.",
    image: "/images/aqua/projects/pool-spa-13/pool-spa-13-03.webp",
    imageAlt: "Raised square spa beside a rectangular pool",
    heroTitle: "Spas & Hot Tubs",
    heroBlurb:
      "Plan your spa seating, jets and heating around how you will use it. Integrity coordinates the spa with your pool design, plumbing and controls.",
    intro: "What goes into an Integrity spa build.",
    inclusions: [
      { title: "Gunite Structure", body: "Sprayed and steel-reinforced like the pool itself." },
      { title: "Spillover Design", body: "Raised wall and weir set so the spill sounds right, not just looks right." },
      { title: "Dedicated Heater", body: "Sized so the spa is usable within the hour." },
      { title: "Jet Layout", body: "Placed against where people actually sit." },
      { title: "Shared Plumbing", body: "Tied to the pool pad so one system runs both." },
      { title: "Automation", body: "Heat it from the couch before you walk outside." },
      { title: "Finish Match", body: "Tile, coping and plaster continuous with the pool." },
      { title: "Cover & Safety", body: "Options specified at design, not after final." },
    ],
    faqs: [
      {
        q: "Built-in spa or a portable hot tub?",
        a: "A built-in spa can share the pool design, finishes and controls. A portable tub is a separate unit. Ryan can price a built-in spa with your pool so you can compare options.",
      },
      {
        q: "How much does it add to a pool build?",
        a: "As a rough band, a raised spillover spa adds around $15,000 to $25,000 depending on size, finish and heater.",
      },
    ],
  },
  {
    slug: "pool-remodels",
    name: "Pool Remodels",
    short:
      "Update worn plaster, tile, pool edging and equipment. Get a clear proposal for the repairs and finishes your pool needs.",
    image: "/images/aqua/projects/pool-spa-13/pool-spa-13-01.webp",
    heroImage: "/images/aqua/projects/pool-spa-13/pool-spa-13-03.webp",
    imageAlt: "Rectangular pool and raised spa with stone decking",
    heroImageAlt: "Raised square spa with built-in seating beside a pool",
    heroTitle: "Pool Remodels",
    heroBlurb:
      "Refresh your pool without starting from scratch. We review the existing surface, structure and equipment, then price repairs and upgrades separately so you can choose what to change.",
    intro: "Repairs and upgrades we can include in your remodel proposal.",
    inclusions: [
      { title: "Chip & Replaster", body: "Old surface removed to the shell, new finish applied." },
      { title: "Waterline Tile", body: "Old tile off, new tile set and grouted." },
      { title: "Coping Replacement", body: "Cracked or dated coping swapped for stone or precast." },
      { title: "Deck Resurfacing", body: "New pavers, travertine or overlay across the deck." },
      { title: "Equipment Upgrade", body: "Variable-speed pump, cartridge filter, modern heater." },
      { title: "Automation Retrofit", body: "Phone control added to an older pad." },
      { title: "LED Conversion", body: "Old incandescent niches converted to color LED." },
      { title: "Structural Repair", body: "Cracks, hollow spots and plumbing leaks addressed first." },
    ],
    faqs: [
      {
        q: "How long does a remodel take?",
        a: "Two to five weeks for most scopes. A plaster-and-tile job is quicker than a full deck and equipment overhaul.",
      },
      {
        q: "How often does a pool need replastering?",
        a: "Typically every 10 to 15 years in our climate, sooner if the water chemistry has been left to drift.",
      },
    ],
  },
  {
    slug: "water-and-fire-features",
    name: "Water & Fire Features",
    short:
      "Waterfalls, sheer descents, grottos, bubblers and fire bowls, engineered into the plumbing from the start rather than added on.",
    image: "/images/aqua/projects/water-feature-01/water-feature-01-01.webp",
    imageAlt: "Rock waterfall surrounded by garden plants",
    heroTitle: "Water & Fire Features",
    heroBlurb:
      "Choose waterfalls, bubblers or fire bowls during design. Integrity plans the plumbing, gas lines and controls with the pool so you can see how each feature fits and what it costs.",
    intro: "Features we design and build into the shell.",
    inclusions: [
      { title: "Sheer Descents", body: "Clean sheet of water off a raised wall." },
      { title: "Rock Waterfalls", body: "Natural stone stacked and grouted over a plumbed core." },
      { title: "Grottos", body: "Cave and bench behind the falls, engineered and inspected." },
      { title: "Bubblers", body: "Small water jets set into a shallow pool ledge." },
      { title: "Deck Jets", body: "Arcs across the water, valved so you can turn them down." },
      { title: "Fire Bowls", body: "Gas run at rough-in, not surface-mounted after." },
      { title: "Fire & Water Combo", body: "Bowls that spill water and burn at the same time." },
      { title: "Dedicated Control", body: "Each feature on its own valve or automation channel." },
    ],
    faqs: [
      {
        q: "Can features be added to an existing pool?",
        a: "Some can. Anything needing new plumbing means opening deck, so it is far cheaper to decide at design stage.",
      },
      {
        q: "Do fire features need a gas line?",
        a: "Yes. We coordinate the run with your plumber at rough-in so it is buried, not surface-mounted.",
      },
    ],
  },
  {
    slug: "hardscapes",
    name: "Hardscapes",
    short:
      "More usable yard: pool decking, patios, retaining walls, steps and seat walls in paver, travertine or natural stone.",
    image: "/images/aqua/projects/hardscape-02/hardscape-02-01.webp",
    heroImage: "/images/aqua/projects/hardscape-02/hardscape-02-02.webp",
    imageAlt: "Paver patio, seat walls and pool decking around a finished yard",
    heroTitle: "Hardscapes",
    heroBlurb:
      "Plan space for walking, dining and seating around your pool. Integrity coordinates decking, walls, steps and drainage with the pool layout and construction schedule.",
    intro: "What we build in stone and concrete.",
    inclusions: [
      { title: "Pool Decking", body: "Paver, travertine, natural stone or broom-finish concrete." },
      { title: "Patios", body: "Dining and lounge space sized to real furniture." },
      { title: "Retaining Walls", body: "Engineered where the grade calls for it, block or stone faced." },
      { title: "Seat Walls", body: "Built-in seating around the fire pit and the deck edge." },
      { title: "Steps & Landings", body: "Grade changes handled properly, not with a temporary step." },
      { title: "Fire Pits", body: "Gas or wood, built into the hardscape." },
      { title: "Drainage", body: "Drain locations and runoff routes planned with the deck layout." },
      { title: "Driveways & Walks", body: "Front-of-house work on the same contract." },
    ],
    faqs: [
      {
        q: "Pavers or poured concrete?",
        a: "Pavers cost more and flex with soil movement rather than cracking. Poured concrete is cheaper and faster. Both are fine choices; it comes down to budget and how much you mind a hairline crack.",
      },
      {
        q: "Can you do hardscape without the pool?",
        a: "Yes, on a standalone contract, though our schedule is built around full backyard projects first.",
      },
    ],
  },
  {
    slug: "outdoor-lighting",
    name: "Outdoor Lighting",
    short:
      "Light pool edges, paths, steps and seating areas. Plan the fixtures and controls alongside your pool and patio.",
    image: "/images/aqua/projects/infinity-edge-01/infinity-edge-01-02.webp",
    heroImage: "/images/aqua/projects/infinity-edge-01/infinity-edge-01-02.webp",
    imageAlt: "Backyard pool and hardscape lit low after sunset",
    heroTitle: "Outdoor Lighting",
    heroBlurb:
      "Make paths, steps and pool features easier to see after dark. Integrity plans fixture locations and controls with your pool and patio, with lighting priced separately in your quote.",
    intro: "Lighting options to include in your project.",
    inclusions: [
      { title: "In-Pool LED", body: "Colour-changing niches on their own automation channel." },
      { title: "Path Lighting", body: "Low-voltage runs along walks and steps." },
      { title: "Wall Washing", body: "Grazing light up retaining walls and house elevations." },
      { title: "Tree Uplighting", body: "Palms and specimen trees lit from below." },
      { title: "Step Lights", body: "Recessed into risers so nobody misses a grade change." },
      { title: "Feature Lighting", body: "Waterfalls and sheer descents lit from behind the water." },
      { title: "Transformers", body: "Sized with headroom so the system can grow." },
      { title: "Timers & Control", body: "Astronomic timers or full app control." },
    ],
    faqs: [
      {
        q: "Can lighting be added to an existing yard?",
        a: "Yes. Low-voltage runs are shallow-buried and can be retrofitted without tearing up hardscape in most cases.",
      },
      {
        q: "What does backyard lighting cost?",
        a: "As part of a build, a typical package runs a few thousand dollars. It is priced as its own line so you can scale it up or down.",
      },
    ],
  },
  {
    slug: "equipment-and-automation",
    name: "Equipment & Automation",
    short:
      "Variable-speed pumps, cartridge filtration, heaters, salt systems and app control, specified per project rather than by brand contract.",
    image: "/images/aqua/projects/under-construction/under-construction-03.webp",
    heroImage: "/images/aqua/projects/under-construction/under-construction-02.webp",
    imageAlt: "Unfinished concrete pool shell with built-in steps and seating",
    heroTitle: "Equipment & Automation",
    heroBlurb:
      "Choose pumps, filters, heaters and controls sized for your pool. Integrity installs the equipment, shows you how to use it and offers ongoing pool care after startup.",
    intro: "Equipment and controls selected for your pool and how you use it.",
    inclusions: [
      { title: "Variable-Speed Pump", body: "Runs slow and quiet most of the day, cuts the power bill." },
      { title: "Cartridge Filtration", body: "Sized above the pool volume so it is not working flat out." },
      { title: "Heater", body: "Gas or heat pump, sized to how you actually plan to use it." },
      { title: "Salt Systems", body: "Cell sized with headroom, not to the minimum spec." },
      { title: "Automation", body: "Pump, heat, lights and features from your phone." },
      { title: "Clean Pad Layout", body: "Laid out so a technician can actually work on it." },
      { title: "Surge & Bonding", body: "Electrical done to code and inspected." },
      { title: "Startup Program", body: "Water balanced and managed through the first weeks." },
    ],
    faqs: [
      {
        q: "What brands do you install?",
        a: "Pentair, Jandy and Hayward are all on the shelf. Equipment is specified per project rather than by brand contract, so you get what suits the pool.",
      },
      {
        q: "Salt or chlorine?",
        a: "A salt system generates chlorine at the pool. We can explain the equipment cost and care needs of each option during your design review.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/* Service areas                                                       */
/* ------------------------------------------------------------------ */

export type Area = {
  slug: string;
  name: string;
  blurb: string;
  neighborhoods: string[];
};

export const AREAS: Area[] = [
  {
    slug: "menifee",
    name: "Menifee",
    blurb:
      "Plan a new pool or update an existing one in Menifee. Your free site visit covers the layout, access, drainage and any HOA requirements.",
    neighborhoods: ["Audie Murphy Ranch", "Heritage Lake", "Sun City"],
  },
  {
    slug: "temecula",
    name: "Temecula",
    blurb:
      "Design your pool and patio around your Temecula property. We review the available space, slope and access before preparing your proposal.",
    neighborhoods: ["Redhawk", "Vail Ranch", "Meadowview", "Wine Country", "Harveston"],
  },
  {
    slug: "murrieta",
    name: "Murrieta",
    blurb:
      "Get a pool layout sized to your Murrieta yard. Ryan reviews space for swimming, seating and decking during your free site visit.",
    neighborhoods: ["Copper Canyon", "Bear Creek", "The Colony", "Central Murrieta"],
  },
  {
    slug: "wildomar",
    name: "Wildomar",
    blurb:
      "Plan your pool, patio and features together in Wildomar. We check access and drainage before pricing the work.",
    neighborhoods: ["The Farm", "Sycamore Ranch", "Windsong Valley"],
  },
  {
    slug: "lake-elsinore",
    name: "Lake Elsinore",
    blurb:
      "Plan your Lake Elsinore pool around the slope and views of your property. We review access, drainage and any retaining walls needed for the layout.",
    neighborhoods: ["Tuscany Hills", "Canyon Hills", "Rosetta Canyon"],
  },
  {
    slug: "canyon-lake",
    name: "Canyon Lake",
    blurb:
      "Plan your Canyon Lake pool with HOA requirements and site access in mind. Drawings and construction access are reviewed before work begins.",
    neighborhoods: ["Canyon Lake POA"],
  },
  {
    slug: "winchester",
    name: "Winchester",
    blurb:
      "Turn your Winchester backyard into a planned pool and patio space. We review grading, drainage and access before preparing the design.",
    neighborhoods: ["Winchester Ranch", "Morgan Hill"],
  },
  {
    slug: "french-valley",
    name: "French Valley",
    blurb:
      "Get a pool design for your French Valley property. Your site visit covers layout, access and room for the deck and seating you want.",
    neighborhoods: ["French Valley", "Alta Murrieta edge"],
  },
  {
    slug: "perris",
    name: "Perris",
    blurb:
      "Plan a custom pool or remodel in Perris. We review the yard and your budget, then price the pool, decking and features separately.",
    neighborhoods: ["May Ranch", "Green Valley"],
  },
  {
    slug: "hemet",
    name: "Hemet",
    blurb:
      "Build a new pool or update your existing pool in Hemet. We assess the site or existing pool before recommending the work to include.",
    neighborhoods: ["East Hemet", "Seven Hills"],
  },
  {
    slug: "corona",
    name: "Corona",
    blurb:
      "Plan your Corona pool around the site conditions. We review slopes, drainage, access and retaining needs before pricing construction.",
    neighborhoods: ["South Corona", "Sierra Del Oro", "Eagle Glen"],
  },
  {
    slug: "riverside",
    name: "Riverside",
    blurb:
      "Plan a pool or remodel for your Riverside property. We review equipment access and existing landscaping during the site visit.",
    neighborhoods: ["Woodcrest", "Orangecrest", "Canyon Crest"],
  },
  {
    slug: "fallbrook",
    name: "Fallbrook",
    blurb:
      "Design your Fallbrook pool around the space, slope and views of your property. Access and drainage are part of the site review.",
    neighborhoods: ["Fallbrook", "De Luz"],
  },
  {
    slug: "sun-city",
    name: "Sun City",
    blurb:
      "Update your Sun City pool with new finishes, tile or equipment. We review its condition and price the recommended work separately.",
    neighborhoods: ["Sun City", "Cherry Hills"],
  },
  {
    slug: "murrieta-hot-springs",
    name: "Murrieta Hot Springs",
    blurb:
      "Plan your Murrieta Hot Springs pool or remodel around the existing yard. Access, utilities and landscaping are reviewed before construction.",
    neighborhoods: ["Murrieta Hot Springs", "Alta Murrieta", "Vineyard Knolls"],
  },
];

export const areaBySlug = (slug: string) => AREAS.find((a) => a.slug === slug);

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const PROCESS = [
  {
    title: "Consultation",
    body: "We walk the yard together, take measurements, and talk through how you actually want to use the space.",
  },
  {
    title: "Quote & 3D Design",
    body: "An itemized quote and a rendering of your yard, drawn to the measurements taken on site.",
  },
  {
    title: "Design Review",
    body: "You look it over and tell us what to change. We revise the layout, the features and the finishes until it is right.",
  },
  {
    title: "Construction",
    body: "A typical new pool takes six to eight weeks after excavation begins. Site conditions, weather and inspections can affect the schedule.",
  },
  {
    title: "Startup & Care",
    body: "Once water is in, our service crew balances the system and manages it through the first weeks so the finish cures properly.",
  },
];

/* ------------------------------------------------------------------ */
/* What to expect                                                      */
/* ------------------------------------------------------------------ */

export const EXPECTATIONS = [
  {
    title: "Work directly with Ryan",
    body: "Ryan runs your build and is your direct contact for questions, decisions and schedule updates.",
  },
  {
    title: "Design Before You Commit",
    body: "Your free 3D design shows the pool, spa and surrounding space in your yard. Review and revise the layout before you commit.",
  },
  {
    title: "See what each part costs",
    body: "Your quote lists the pool, equipment, decking and features separately. Compare proposals and adjust the plan with a clear view of each cost.",
  },
  {
    title: "Pool care after construction",
    body: "We balance the water at startup and show you how the equipment works. Weekly pool care is available after your build.",
  },
];

/* ------------------------------------------------------------------ */
/* Projects / gallery                                                  */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  alt: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "modern-pool-spa",
    title: "Modern Pool & Spa",
    category: "Custom Pools",
    image: "/images/aqua/projects/pool-spa-02/pool-spa-02-03.webp",
    alt: "Modern rectangular pool with a raised spa and a stone deck",
  },
  {
    slug: "vanishing-edge-spa",
    title: "Pool, Spa & Patio",
    category: "Spas",
    image: "/images/aqua/projects/pool-spa-16/pool-spa-16-02.webp",
    alt: "Pool and round spa beside a wide patio and two-story home",
  },
  {
    slug: "geometric-pool-deck",
    title: "Geometric Pool & Deck",
    category: "Custom Pools",
    image: "/images/aqua/projects/custom-pool-01/custom-pool-01-05.webp",
    alt: "Geometric gunite pool with a wide surrounding deck",
  },
  {
    slug: "freeform-pool-lawn",
    title: "Curved Pool with Evening Lighting",
    category: "Custom Pools",
    image: "/images/aqua/projects/custom-pool-02/custom-pool-02-02.webp",
    alt: "Curved pool with underwater lighting and an illuminated stone wall",
  },
  {
    slug: "fire-water-terrace",
    title: "Round Spa with Built-in Seating",
    category: "Spas",
    image: "/images/aqua/projects/pool-spa-12/pool-spa-12-01.webp",
    alt: "Round spa with curved bench seating beside a pool",
  },
  {
    slug: "hillside-lagoon",
    title: "Curved Pool & Stone Patio",
    category: "Custom Pools",
    image: "/images/aqua/projects/lagoon-pool-01/lagoon-pool-01-01.webp",
    alt: "Curved pool surrounded by a stone patio and trees",
  },
  {
    slug: "stone-terrace",
    title: "Patio with a Fire Pit & Seat Wall",
    category: "Hardscapes",
    image: "/images/aqua/projects/hardscape-01/hardscape-01-01.webp",
    alt: "Patio seating around a fire pit with a curved stone seat wall",
  },
  {
    slug: "rock-waterfall",
    title: "Garden Waterfall",
    category: "Water & Fire Features",
    image: "/images/aqua/projects/water-feature-01/water-feature-01-01.webp",
    alt: "Small rock waterfall surrounded by garden plants",
  },
  {
    slug: "lagoon-pool-garden",
    title: "Curved Pool Edge & Stone Deck",
    category: "Custom Pools",
    image: "/images/aqua/projects/lagoon-pool-02/lagoon-pool-02-03.webp",
    alt: "Close view of a curved pool edge with stone decking",
  },
  {
    slug: "infinity-edge",
    title: "Infinity Edge Pool",
    category: "Custom Pools",
    image: "/images/aqua/projects/infinity-edge-01/infinity-edge-01-04.webp",
    alt: "Pool with an infinity edge facing a wooded landscape",
  },
  {
    slug: "paver-deck-plunge",
    title: "Plunge Pool & Paver Deck",
    category: "Plunge Pools",
    image: "/images/aqua/projects/plunge-pool-08/plunge-pool-08-01.webp",
    alt: "Compact plunge pool set into a paver deck",
  },
  {
    slug: "spillover-spa",
    title: "Compact Pool with Bench Seating",
    category: "Plunge Pools",
    image: "/images/aqua/projects/plunge-pool-04/plunge-pool-04-02.webp",
    alt: "Narrow pool with built-in seating and stone decking",
  },
  {
    slug: "evening-lighting",
    title: "Path & Garden Lighting",
    category: "Outdoor Lighting",
    image: "/images/aqua/projects/outdoor-lighting-01/outdoor-lighting-01-01.webp",
    alt: "Garden lights along a walkway after dark",
  },
  {
    slug: "travertine-deck",
    title: "Covered Patio",
    category: "Hardscapes",
    image: "/images/aqua/projects/hardscape-04/hardscape-04-06.webp",
    alt: "Covered patio with columns and a ceiling fan beside a house",
  },
  {
    slug: "steel-and-plumbing",
    title: "Concrete Pool Shell in Progress",
    category: "The Build",
    image: "/images/aqua/projects/under-construction/under-construction-03.webp",
    alt: "Unfinished concrete pool shell with built-in steps and seating",
  },
  {
    slug: "grotto-feature",
    title: "Garden Water Feature",
    category: "Water & Fire Features",
    image: "/images/aqua/projects/water-feature-02/water-feature-02-01.webp",
    alt: "Small rock water feature among garden plants beside a house",
  },
  {
    slug: "courtyard-plunge",
    title: "Small Pool with Stone Surround",
    category: "Plunge Pools",
    image: "/images/aqua/projects/plunge-pool-05/plunge-pool-05-01.webp",
    alt: "Small rounded pool with stone edging in a wooded garden",
  },
  {
    slug: "classic-pool-spa",
    title: "Rectangular Pool & Raised Spa",
    category: "Custom Pools",
    image: "/images/aqua/projects/pool-spa-13/pool-spa-13-01.webp",
    alt: "Rectangular pool with a raised spa and stone deck",
  },
];

/* ------------------------------------------------------------------ */
/* Reviews                                                             */
/* ------------------------------------------------------------------ */

/**
 * Real, verbatim Google reviews, pulled 2026-08-14 from the LeadConnector review
 * widget on integritypoolcareca.com (43 reviews, all 5 star).
 *
 * NOTE(matt): every review Integrity has is for the SERVICE side of the business.
 * There are no reviews from pool BUILD customers yet. These carry trust in the
 * meantime because they name Ryan and speak to responsiveness and fair pricing,
 * but three build reviews would be far stronger. Ask your last three build
 * clients.
 */
export const REVIEWS = [
  {
    quote:
      "My pool need help electrically and new components, plus pool needed to be drained and refilled. My pool service at the time seemed like I was getting way over charged. I meet up with Ryan from Integrity Pool Care and his knowledge and price was what I was looking for. Very happy with the service. Definitely a 5 star. I highly recommend them.",
    name: "Mark Wagner",
    source: "Google review",
  },
  {
    quote:
      "Great service! I never worry about my pool being in good shape. Ryan responds almost immediately every time I have a question, even on weekends. I highly recommend Integrity Pool Care.",
    name: "Cathy Hackworth",
    source: "Google review",
  },
  {
    quote:
      "This is the best pool service I have ever had. They are professional, always complete the work on time and are very knowledgeable about all of our pool equipment needs. Excellent company.",
    name: "Janine Vogel",
    source: "Google review",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const HOME_FAQS = [
  {
    q: "How do you price a project?",
    a: "Every proposal is itemized: shell, equipment, decking and each remaining line priced separately, so one part can change without re-pricing the rest. Pricing comes after the site visit and design, since access, soil and grade move the number more than anything else.",
  },
  {
    q: "How long does a pool build take?",
    a: "Six to eight weeks from dig to swim is typical. Soil conditions, weather and the inspection queue move that window in either direction. We set a target date at contract and call if it changes.",
  },
  {
    q: "How long do permits and HOA approval take?",
    a: "Two to six weeks depending on the city and the season. Most HOAs turn around within a couple of weeks. Drawings, submissions and inspection scheduling are handled on our end.",
  },
  {
    q: "Do I get to see the design before you build?",
    a: "Every quote includes a design. It is revised until the layout is right, and nothing is dug before you sign off on it.",
  },
  {
    q: "Do you build fiberglass pools?",
    a: "No. We build gunite only. A sprayed concrete shell lets us customize the shape, depth and features. Your design accounts for the site conditions.",
  },
  {
    q: "Do you service the pool after it is built?",
    a: "Yes. Our service crew balances the water through startup, and weekly pool care is available afterward.",
  },
  {
    q: "Is financing available?",
    a: "Ask Ryan about financing options for your project. Start with the design and itemized quote; a lender will confirm eligibility, rates, terms and credit-check requirements.",
  },
];

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Builder Partners", href: "/builder-partners" },
  { label: "Contact", href: "/contact" },
];
