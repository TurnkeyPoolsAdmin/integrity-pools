import { ArrowIcon, Button, SectionHeading } from "./ui";

const STAGES = [
  {
    title: "Layout & Excavation",
    benefit: "Get the groundwork right.",
    body: "Your pool’s shape, depth and position begin here. Your project manager checks the work daily as the yard is prepared and your pool takes shape.",
    visual: "Illustration of a marked-out pool excavation",
  },
  {
    title: "Steel & Plumbing",
    benefit: "Give the hidden work the attention it deserves.",
    body: "Steel reinforcement and plumbing become part of the pool you’ll depend on for years. We choose skilled tradespeople and keep a close eye on the work throughout construction.",
    visual: "Illustration of steel reinforcement and pool plumbing",
  },
  {
    title: "Concrete Shell",
    benefit: "Put experienced hands behind your pool’s structure.",
    body: "The concrete shell forms the body of your pool. Carefully chosen craftspeople and daily oversight bring our focus on workmanship to this critical stage.",
    visual: "Illustration of a formed concrete pool shell",
  },
  {
    title: "Tile, Coping & Decking",
    benefit: "Craftsmanship you’ll see every day.",
    body: "The tile, pool edging and surrounding deck bring your backyard together. We’re particular about the people doing this work because these are the details you’ll see and use every time you enjoy your pool.",
    visual: "Illustration of tile, pool edging and surrounding decking",
  },
  {
    title: "Interior Finish",
    benefit: "Choose quality all the way to the surface.",
    body: "We use genuine PebbleTec finishes. Your pool’s finish deserves the same care in material selection and workmanship as everything beneath it.",
    visual: "Illustration of a textured pool interior finish",
  },
  {
    title: "Startup & First-Year Care",
    benefit: "Protect your pool from the first fill.",
    body: "We handle professional startup and include one full year of free pool service. Water chemistry and routine maintenance receive expert attention while you enjoy your new pool.",
    visual: "Illustration of a filled pool and a water-testing vial",
  },
];

function StageIllustration({ stage, label }: { stage: number; label: string }) {
  const finished = stage >= 4;
  const water = stage === 6;
  return (
    <svg viewBox="0 0 420 236" role="img" aria-labelledby={`build-stage-${stage}-visual`} className="block h-auto w-full">
      <title id={`build-stage-${stage}-visual`}>{label}</title>
      <defs>
        <pattern id={`build-grid-${stage}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#0d2744" strokeOpacity=".045" />
        </pattern>
        <pattern id={`build-pebble-${stage}`} width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="12" height="12" fill="#a7c3c7" />
          <circle cx="3" cy="3" r="1.6" fill="#6d959c" />
          <circle cx="9" cy="8" r="2" fill="#d5e1da" />
        </pattern>
      </defs>
      <rect width="420" height="236" fill="#eef3f2" />
      <rect width="420" height="236" fill={`url(#build-grid-${stage})`} />
      <ellipse cx="218" cy="199" rx="145" ry="18" fill="#0d2744" opacity=".06" />
      {/* A consistent schematic pool lets the buyer follow the same shape through the build. */}
      <path d="M48 111 245 42 384 113 188 193Z" fill={finished ? "#d9d4c8" : "#d9c7a9"} />
      <path d="M48 111v13l140 80v-11Z" fill={finished ? "#c3bdaf" : "#bfa681"} />
      <path d="m188 193 196-80v13l-196 78Z" fill={finished ? "#b7b3a6" : "#a88c69"} />
      <path d="m87 115 155-55 104 53-154 63Z" fill={stage <= 2 ? "#92785c" : "#9eafb4"} stroke="#60757b" strokeWidth="2" />
      <path d="m87 115 22 27 83 43v-9Z" fill={stage <= 2 ? "#b49a77" : "#c7d1d1"} />
      <path d="m192 176 154-63-22 30-132 42Z" fill={stage <= 2 ? "#80694e" : "#80969c"} />
      <path d="m109 142 133-49 82 50-132 42Z" fill={water ? "#65bec9" : stage === 5 ? `url(#build-pebble-${stage})` : stage <= 2 ? "#c2ac8c" : "#d8dfdc"} />
      {stage === 1 ? (
        <g fill="none" stroke="#1c8290" strokeWidth="2">
          <path d="m73 105 169-61 119 65-170 71Z" strokeDasharray="5 5" />
          <path d="M73 105V88m169-44V27m119 82V92m-170 88v-17" />
          <path d="m305 39 22 12-24 41-15-9Z" fill="#0d2744" stroke="#0d2744" />
          <path d="m294 84-8 14q-5 8-14 3l-4-3q-7-5-2-12l9-15Z" fill="#1c8290" stroke="#1c8290" />
        </g>
      ) : null}
      {stage === 2 ? (
        <g fill="none" stroke="#294a60" strokeWidth="1.6">
          {[0, 1, 2, 3, 4, 5].map((n) => <path key={n} d={`M${111 + n * 22} ${140 - n * 8}l83 43`} />)}
          {[0, 1, 2, 3].map((n) => <path key={n} d={`M${124 + n * 21} ${150 + n * 11}l132-49`} />)}
          <path d="m99 117 15 20m22-34 15 20m22-33 15 20m23-34 15 20m23-33 15 20" />
          <path d="m280 164 52 28 39-16v-33" stroke="#159eae" strokeWidth="5" strokeLinejoin="round" />
          <circle cx="371" cy="139" r="6" fill="#eef3f2" stroke="#159eae" strokeWidth="3" />
        </g>
      ) : null}
      {stage === 3 ? (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="m91 114 151-54 101 52" stroke="#e7ece8" strokeWidth="5" />
          <path d="m306 43 44 20-54 17Z" fill="#a8b7ba" stroke="#60757b" strokeWidth="2" />
          <path d="m316 59 14-24" stroke="#0d2744" strokeWidth="9" />
          <path d="m136 144 38-14m16-5 29-11" stroke="#eef3f2" strokeWidth="3" />
        </g>
      ) : null}
      {finished ? (
        <g fill="none" strokeLinejoin="round">
          <path d="m87 115 155-55 104 53-154 63Z" stroke="#f9f7f0" strokeWidth="8" />
          <path d="m91 121 101 55 150-59" stroke="#287c8c" strokeWidth="5" strokeDasharray="7 2" />
          <path d="m62 118 27 15m219-62 18-9m-91 119 12 9m-96-24-13 16" stroke="#b7afa0" strokeWidth="2" />
        </g>
      ) : null}
      {stage === 5 ? (
        <g>
          <circle cx="336" cy="55" r="29" fill={`url(#build-pebble-${stage})`} stroke="#fff" strokeWidth="5" />
          <path d="m318 77-40 45" stroke="#608791" strokeWidth="2" strokeDasharray="3 4" />
        </g>
      ) : null}
      {water ? (
        <>
          <path d="m99 120 143-51 91 46-141 57Z" fill="#61c5cf" fillOpacity=".85" />
          <g fill="none" stroke="#e0f6f4" strokeWidth="2" strokeLinecap="round">
            <path d="m144 119 61-22m-41 37 73-27m-40 40 65-25" />
          </g>
          <g transform="rotate(18 340 55)">
            <rect x="330" y="29" width="20" height="51" rx="7" fill="#fff" stroke="#0d2744" strokeWidth="2" />
            <path d="M333 52h14v18q0 7-7 7t-7-7Z" fill="#66c4ce" />
            <rect x="328" y="23" width="24" height="11" rx="3" fill="#0d2744" />
            <path d="M342 43h5m-5 8h5m-5 8h5" stroke="#0d2744" strokeWidth="1.5" />
          </g>
        </>
      ) : null}
    </svg>
  );
}

export default function BuildProcess() {
  return (
    <section id="built-right" aria-labelledby="built-right-title" className="section-x scroll-mt-24 bg-shell py-[80px] sm:py-[100px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <div id="built-right-title">
          <SectionHeading
            className="max-w-[800px]"
            title="Built Right, From the Ground Up"
            body="The quality of your pool starts beneath the surface. Follow the six stages that turn your backyard into a finished pool, with selected craftspeople, carefully chosen materials and daily project-manager checks along the way."
          />
        </div>
        <ol className="m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
          {STAGES.map((stage, i) => (
            <li key={stage.title} className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
              <div className="relative border-b border-line">
                <StageIllustration stage={i + 1} label={stage.visual} />
                <span aria-hidden="true" className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-navy font-sans text-lg font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="m-0 font-sans text-xl font-semibold leading-snug text-navy"><span className="sr-only">Step {i + 1}: </span>{stage.title}</h3>
                <p className="mb-0 mt-4 text-base font-semibold leading-[1.6] text-navy">{stage.benefit}</p>
                <p className="mb-0 mt-3 text-base leading-[1.7] text-slate">{stage.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Button href="/contact">Get My Free Consultation<ArrowIcon /></Button>
        </div>
      </div>
    </section>
  );
}
