/**
 * Single source of truth for site content.
 *
 * Layout/structure is modelled on aquapoolsandoutdoorliving.com, rebranded for
 * Integrity Pools & Hardscape (Temecula, CA).
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
  serviceAreaLine: "Temecula, Murrieta & the Inland Empire",
  areasServedNames: [
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
  { value: "Since 2012", label: "Building SoCal Pools" },
  { value: "43", label: "Five-Star Reviews" }, // verified 2026-08-14, all 5 star
  { value: "8-12 wks", label: "Average Build" }, // TODO(matt): confirm your real build window
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
      "Make it your own. Gunite pools shaped to your yard: spa, benches, tanning ledge, vanishing edge. If you can picture it, we can pour it.",
    image: "/images/aqua/projects/pool-spa-14/pool-spa-14-06.webp",
    heroImage: "/images/aqua/projects/custom-pool-02/custom-pool-02-02.webp",
    imageAlt: "Custom gunite pool and spa with a wide stone sun deck at dusk",
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
        a: "Eight to twelve weeks from dig to swim on a typical build. You get the schedule at contract and a phone call the same day if anything moves it, rather than finding out from an empty jobsite.",
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
        a: "No. We build gunite only. A sprayed concrete shell can take any shape your yard calls for and it is the right structure for our soil.",
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
    imageAlt: "Compact plunge pool with a raised spa and a clean paver deck",
    heroTitle: "Plunge Pools",
    heroBlurb:
      "A small yard is not a reason to skip the pool. A plunge pool gets you cold water, warm water and somewhere to sit, on a footprint that still leaves you a yard.",
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
        a: "Usually, but not proportionally. The permit, the equipment and the crew mobilisation cost roughly the same, so the saving is mostly in shell size, deck and finish.",
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
    image: "/images/aqua/projects/custom-pool-03/custom-pool-03-01.webp",
    heroImage: "/images/aqua/projects/pool-spa-16/pool-spa-16-03.webp",
    imageAlt: "Raised gunite spa spilling over into the pool below",
    heroTitle: "Spas & Hot Tubs",
    heroBlurb:
      "A built spa is part of the pool, not a plastic tub parked next to it. Same shell, same equipment pad, same finish, one control on your phone.",
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
        a: "A built spa costs more up front and adds to the home. A portable tub is cheaper and moves with you. If you are already building a pool, the built spa is almost always the better value.",
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
      "Replaster, retile, new coping, new equipment. Bring a tired 1990s pool back to something you want to swim in.",
    image: "/images/aqua/projects/pool-spa-13/pool-spa-13-01.webp",
    heroImage: "/images/aqua/projects/pool-spa-13/pool-spa-13-03.webp",
    imageAlt: "Pool with new waterline tile, coping and resurfaced decking",
    heroTitle: "Pool Remodels",
    heroBlurb:
      "Plaster does not last forever, and neither does 30-year-old tile. A remodel is the cheapest way to get a new pool without digging one.",
    intro: "The scopes we most often carry on a remodel.",
    inclusions: [
      { title: "Chip & Replaster", body: "Old surface removed to the shell, new finish applied." },
      { title: "Waterline Tile", body: "Old tile off, new tile set and grouted." },
      { title: "Coping Replacement", body: "Cracked or dated coping swapped for stone or precast." },
      { title: "Deck Resurfacing", body: "New pavers, travertine or overlay across the deck." },
      { title: "Equipment Upgrade", body: "Variable-speed pump, cartridge filter, modern heater." },
      { title: "Automation Retrofit", body: "Phone control added to an older pad." },
      { title: "LED Conversion", body: "Old incandescent niches converted to colour LED." },
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
    image: "/images/aqua/projects/pool-spa-12/pool-spa-12-01.webp",
    heroImage: "/images/aqua/projects/lagoon-pool-01/lagoon-pool-01-01.webp",
    imageAlt: "Fire bowls and a spillway feature built into the pool edge",
    heroTitle: "Water & Fire Features",
    heroBlurb:
      "The parts of the pool people remember. Get them into the plan early and they are plumbed properly. Add them later and you are cutting deck.",
    intro: "Features we design and build into the shell.",
    inclusions: [
      { title: "Sheer Descents", body: "Clean sheet of water off a raised wall." },
      { title: "Rock Waterfalls", body: "Natural stone stacked and grouted over a plumbed core." },
      { title: "Grottos", body: "Cave and bench behind the falls, engineered and inspected." },
      { title: "Bubblers", body: "On the tanning ledge, where the kids end up anyway." },
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
      "The pool is the centrepiece. The hardscape is what makes the yard usable around it. Both on one contract and one schedule.",
    intro: "What we build in stone and concrete.",
    inclusions: [
      { title: "Pool Decking", body: "Paver, travertine, natural stone or broom-finish concrete." },
      { title: "Patios", body: "Dining and lounge space sized to real furniture." },
      { title: "Retaining Walls", body: "Engineered where the grade calls for it, block or stone faced." },
      { title: "Seat Walls", body: "Built-in seating around the fire pit and the deck edge." },
      { title: "Steps & Landings", body: "Grade changes handled properly, not with a temporary step." },
      { title: "Fire Pits", body: "Gas or wood, built into the hardscape." },
      { title: "Drainage", body: "Deck drains and area drains that take water somewhere sensible." },
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
      "Low-voltage path, wall, tree and in-pool lighting, so the yard is still worth being in after the sun drops.",
    image: "/images/aqua/projects/infinity-edge-01/infinity-edge-01-02.webp",
    heroImage: "/images/aqua/projects/landscape-09/landscape-09-01.webp",
    imageAlt: "Backyard pool and hardscape lit low after sunset",
    heroTitle: "Outdoor Lighting",
    heroBlurb:
      "A backyard you only use in daylight is half a backyard. Lighting is the cheapest line on the quote and the one people notice most.",
    intro: "The lighting scopes we carry.",
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
    imageAlt: "Pool plumbing and equipment pad during construction",
    heroTitle: "Equipment & Automation",
    heroBlurb:
      "We also service pools in this valley, which means we install the equipment we are willing to be called back out to fix.",
    intro: "What goes on an Integrity equipment pad.",
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
        a: "Salt for most residential builds. It is gentler on skin and easier to keep stable. It still makes chlorine, it just makes it on site.",
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
    slug: "temecula",
    name: "Temecula",
    blurb:
      "Our home city. Wine country lots, Redhawk and Vail Ranch backyards, and a permit office we know by name.",
    neighborhoods: ["Redhawk", "Vail Ranch", "Meadowview", "Wine Country", "Harveston"],
  },
  {
    slug: "murrieta",
    name: "Murrieta",
    blurb:
      "Ten minutes up the 15. Larger lots on the west side, tighter tract yards on the east, and we build in both.",
    neighborhoods: ["Copper Canyon", "Bear Creek", "The Colony", "Central Murrieta"],
  },
  {
    slug: "wildomar",
    name: "Wildomar",
    blurb:
      "Half-acre and one-acre parcels where there is room for the pool, the deck and the fire pit without crowding the house.",
    neighborhoods: ["The Farm", "Sycamore Ranch", "Windsong Valley"],
  },
  {
    slug: "menifee",
    name: "Menifee",
    blurb:
      "Newer construction with blank backyards. A pool, deck and lighting package turns one into a finished space in one contract.",
    neighborhoods: ["Audie Murphy Ranch", "Heritage Lake", "Sun City"],
  },
  {
    slug: "lake-elsinore",
    name: "Lake Elsinore",
    blurb:
      "Hillside lots with a view worth designing around, and grades that make the retaining plan as important as the pool plan.",
    neighborhoods: ["Tuscany Hills", "Canyon Hills", "Rosetta Canyon"],
  },
  {
    slug: "canyon-lake",
    name: "Canyon Lake",
    blurb:
      "Gated community work with access constraints we plan for up front, including HOA submissions and gate scheduling.",
    neighborhoods: ["Canyon Lake POA"],
  },
  {
    slug: "winchester",
    name: "Winchester",
    blurb:
      "Fast-growing tracts with new backyards waiting on a plan. We handle the builder-grade grading you inherited.",
    neighborhoods: ["Winchester Ranch", "Morgan Hill"],
  },
  {
    slug: "french-valley",
    name: "French Valley",
    blurb:
      "Between Temecula and Winchester, mostly newer homes with usable rear yards and straightforward access.",
    neighborhoods: ["French Valley", "Alta Murrieta edge"],
  },
  {
    slug: "perris",
    name: "Perris",
    blurb:
      "Larger inland lots where budget goes further and the shade structure matters as much as the water.",
    neighborhoods: ["May Ranch", "Green Valley"],
  },
  {
    slug: "hemet",
    name: "Hemet",
    blurb:
      "Established neighbourhoods with a lot of tired 1980s and 1990s pools. Remodel country as much as new build country.",
    neighborhoods: ["East Hemet", "Seven Hills"],
  },
  {
    slug: "corona",
    name: "Corona",
    blurb:
      "North end of our range. Hillside builds with real grade changes and retaining that has to be engineered properly.",
    neighborhoods: ["South Corona", "Sierra Del Oro", "Eagle Glen"],
  },
  {
    slug: "riverside",
    name: "Riverside",
    blurb:
      "Older, larger lots with mature planting. Access planning matters more here than anywhere else we work.",
    neighborhoods: ["Woodcrest", "Orangecrest", "Canyon Crest"],
  },
  {
    slug: "fallbrook",
    name: "Fallbrook",
    blurb:
      "Just over the county line. Rural parcels, long driveways and views that set the whole design.",
    neighborhoods: ["Fallbrook", "De Luz"],
  },
  {
    slug: "sun-city",
    name: "Sun City",
    blurb:
      "A lot of original 1960s and 1970s pools here. Remodels, replaster and equipment upgrades are most of what we do in this pocket.",
    neighborhoods: ["Sun City", "Cherry Hills"],
  },
  {
    slug: "murrieta-hot-springs",
    name: "Murrieta Hot Springs",
    blurb:
      "Established east-side neighbourhoods with mature yards, where access planning decides how the build runs.",
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
    body: "An itemised quote and a rendering of your yard, drawn to the measurements taken on site.",
  },
  {
    title: "Design Review",
    body: "You look it over and tell us what to change. We revise the layout, the features and the finishes until it is right.",
  },
  {
    title: "Construction",
    body: "Eight to twelve weeks from dig to swim on a typical build, with updates as we move through each phase.",
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
    title: "Single Point of Contact",
    body: "No telephone game with office staff. Once your project starts you get one number, and it is Ryan's. He runs your build and he takes the call.",
  },
  {
    title: "Design Before You Commit",
    body: "Every quote comes with a rendering of the space, so you know the exact layout and how it all fits together before you sign anything.",
  },
  {
    title: "Itemised Quotes",
    body: "The proposal is broken out line by line, so you can see what each part costs and make a true apples-to-apples comparison with another builder.",
  },
  {
    title: "We Are Still Here After",
    body: "We service pools in this valley every week. When we put something in the ground we are the ones who get called back to it, which is a strong reason to build it right.",
  },
];

/* ------------------------------------------------------------------ */
/* Projects / gallery                                                  */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  title: string;
  city: string;
  category: string;
  image: string;
  alt: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "modern-pool-spa",
    title: "Modern Pool & Spa",
    city: "Temecula",
    category: "Custom Pools",
    image: "/images/aqua/projects/pool-spa-02/pool-spa-02-03.webp",
    alt: "Modern rectangular pool with a raised spa and a stone deck",
  },
  {
    slug: "vanishing-edge-spa",
    title: "Vanishing Edge Spa",
    city: "Murrieta",
    category: "Spas",
    image: "/images/aqua/projects/pool-spa-16/pool-spa-16-02.webp",
    alt: "Vanishing edge spa set into a raised deck above the pool",
  },
  {
    slug: "geometric-pool-deck",
    title: "Geometric Pool & Deck",
    city: "Temecula",
    category: "Custom Pools",
    image: "/images/aqua/projects/custom-pool-01/custom-pool-01-05.webp",
    alt: "Geometric gunite pool with a wide surrounding deck",
  },
  {
    slug: "freeform-pool-lawn",
    title: "Freeform Pool & Lawn",
    city: "Murrieta",
    category: "Custom Pools",
    image: "/images/aqua/projects/custom-pool-02/custom-pool-02-02.webp",
    alt: "Freeform gunite pool bordered by lawn and planting",
  },
  {
    slug: "fire-water-terrace",
    title: "Fire & Water Terrace",
    city: "Wildomar",
    category: "Water & Fire Features",
    image: "/images/aqua/projects/pool-spa-12/pool-spa-12-01.webp",
    alt: "Pool terrace with fire bowls and a spillover spa",
  },
  {
    slug: "hillside-lagoon",
    title: "Hillside Lagoon Pool",
    city: "Lake Elsinore",
    category: "Custom Pools",
    image: "/images/aqua/projects/lagoon-pool-01/lagoon-pool-01-01.webp",
    alt: "Lagoon-style pool with boulder edging on a sloped lot",
  },
  {
    slug: "stone-terrace",
    title: "Stone Terrace & Patio",
    city: "Temecula",
    category: "Hardscapes",
    image: "/images/aqua/projects/hardscape-01/hardscape-01-01.webp",
    alt: "Paver terrace and seat walls wrapping a finished backyard",
  },
  {
    slug: "rock-waterfall",
    title: "Rock Waterfall",
    city: "Menifee",
    category: "Water & Fire Features",
    image: "/images/aqua/projects/water-feature-01/water-feature-01-01.webp",
    alt: "Stacked stone waterfall spilling into the shallow end of a pool",
  },
  {
    slug: "lagoon-pool-garden",
    title: "Lagoon Pool & Garden",
    city: "Riverside",
    category: "Custom Pools",
    image: "/images/aqua/projects/lagoon-pool-02/lagoon-pool-02-03.webp",
    alt: "Lagoon pool surrounded by mature planting and stone",
  },
  {
    slug: "infinity-edge",
    title: "Infinity Edge Pool",
    city: "Corona",
    category: "Custom Pools",
    image: "/images/aqua/projects/infinity-edge-01/infinity-edge-01-04.webp",
    alt: "Infinity edge pool looking out over a valley view",
  },
  {
    slug: "paver-deck-plunge",
    title: "Plunge Pool & Paver Deck",
    city: "Winchester",
    category: "Plunge Pools",
    image: "/images/aqua/projects/plunge-pool-08/plunge-pool-08-01.webp",
    alt: "Compact plunge pool set into a paver deck",
  },
  {
    slug: "spillover-spa",
    title: "Spillover Spa & Pool",
    city: "Canyon Lake",
    category: "Spas",
    image: "/images/aqua/projects/plunge-pool-04/plunge-pool-04-02.webp",
    alt: "Raised spillover spa beside a compact gunite pool",
  },
  {
    slug: "evening-lighting",
    title: "Evening Lighting Scheme",
    city: "Temecula",
    category: "Outdoor Lighting",
    image: "/images/aqua/projects/outdoor-lighting-01/outdoor-lighting-01-01.webp",
    alt: "Backyard pool and planting lit with low-voltage fixtures after dark",
  },
  {
    slug: "travertine-deck",
    title: "Travertine Pool Deck",
    city: "Menifee",
    category: "Hardscapes",
    image: "/images/aqua/projects/hardscape-04/hardscape-04-06.webp",
    alt: "Travertine pool decking and steps running down to the water",
  },
  {
    slug: "steel-and-plumbing",
    title: "Steel & Plumbing Stage",
    city: "Temecula",
    category: "The Build",
    image: "/images/aqua/projects/under-construction/under-construction-03.webp",
    alt: "Rebar cage and plumbing runs in place before gunite",
  },
  {
    slug: "grotto-feature",
    title: "Grotto & Waterfall",
    city: "Murrieta",
    category: "Water & Fire Features",
    image: "/images/aqua/projects/water-feature-02/water-feature-02-01.webp",
    alt: "Grotto bench tucked behind a stone waterfall",
  },
  {
    slug: "courtyard-plunge",
    title: "Courtyard Plunge Pool",
    city: "French Valley",
    category: "Plunge Pools",
    image: "/images/aqua/projects/plunge-pool-05/plunge-pool-05-01.webp",
    alt: "Small plunge pool built into a walled courtyard",
  },
  {
    slug: "classic-pool-spa",
    title: "Classic Pool & Spa",
    city: "Hemet",
    category: "Pool Remodels",
    image: "/images/aqua/projects/pool-spa-13/pool-spa-13-01.webp",
    alt: "Refinished pool and spa with new tile and coping",
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
    a: "Every proposal is itemised: shell, equipment, decking and each remaining line priced separately, so one part can change without re-pricing the rest. Pricing comes after the site visit and design, since access, soil and grade move the number more than anything else.",
  },
  {
    q: "How long does a pool build take?",
    a: "Eight to twelve weeks from dig to swim is typical in our area. Soil conditions, weather and the inspection queue move that window in either direction. We set a target date at contract and call if it changes.",
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
    a: "No. We build gunite only. A sprayed concrete shell takes whatever shape your yard calls for and it is the right structure for Inland Empire soil.",
  },
  {
    q: "Do you service the pool after it is built?",
    a: "Yes, and that is the part most builders cannot say. Our service crew balances the water through startup and can stay on it weekly after that.",
  },
  {
    q: "Is financing available?",
    a: "Yes. Checking a rate takes a few minutes and runs a soft credit check, so it will not affect your score. Financing covers the whole project, including decking and lighting.",
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
