import Image from "next/image";
import { ArrowIcon, Button, SectionHeading } from "./ui";

const STAGES = [
  {
    title: "Layout & Excavation",
    benefit: "Your design starts taking shape.",
    body: "We establish your pool’s position, shape and depth, then prepare the ground for construction. The pool you pictured begins to become part of your backyard.",
    image: "/images/build-process/01-layout-excavation-modern.webp",
    visual: "Architectural drawing of the pool excavation with layout lines and survey stakes",
  },
  {
    title: "Steel & Plumbing",
    benefit: "Quality beneath the surface.",
    body: "Steel supports the structure. Plumbing carries the water. We put experienced tradespeople behind this hidden work because you’ll depend on it long after construction is complete.",
    image: "/images/build-process/02-steel-plumbing-modern.webp",
    visual: "Architectural drawing of steel reinforcement across the pool floor and walls, with plumbing routes",
  },
  {
    title: "Concrete Shell",
    benefit: "A solid start to years of enjoyment.",
    body: "The concrete shell forms your pool’s walls, floor and steps. Your project manager checks the work daily as construction moves forward, keeping close attention on how your pool is built.",
    image: "/images/build-process/03-concrete-shell-modern.webp",
    visual: "Architectural cutaway of a concrete pool shell, entry steps and embedded steel",
  },
  {
    title: "Tile, Coping & Decking",
    benefit: "Details you’ll appreciate every day.",
    body: "The tile line, stone edging and surrounding deck bring your backyard together. Carefully chosen materials and precise installation make these everyday surfaces feel like part of one complete design.",
    image: "/images/build-process/04-tile-coping-decking-modern.webp",
    visual: "Architectural drawing of waterline tile, stone coping and deck paving around the pool",
  },
  {
    title: "Interior Finish",
    benefit: "Genuine PebbleTec. A finish worth investing in.",
    body: "We use genuine PebbleTec finishes, with care in both material selection and application. Your pool’s surface gets the same attention as the structure beneath it.",
    image: "/images/build-process/05-interior-finish-modern.webp",
    visual: "Architectural cutaway showing a pebble finish across the pool floor, walls and steps",
  },
  {
    title: "Startup & First-Year Care",
    benefit: "Enjoy your pool. We’ll help protect it.",
    body: "Professional startup and one full year of free pool service are included. We manage water chemistry and routine maintenance while you settle into life with your new pool.",
    image: "/images/build-process/06-startup-care-modern.webp",
    visual: "Architectural drawing of a filled pool with water-testing vials and a pool brush",
  },
];

export default function BuildProcess() {
  return (
    <section id="built-right" aria-labelledby="built-right-title" className="section-x scroll-mt-24 bg-shell py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <div id="built-right-title">
          <SectionHeading
            className="max-w-[800px]"
            title="Built Right, From the Ground Up"
            body="The quality of your pool starts beneath the surface. Follow the six stages that turn your backyard into a finished pool, with selected craftspeople, carefully chosen materials and daily project-manager checks along the way."
          />
        </div>
        <div className="mt-7 grid gap-3 rounded-xl border border-line border-l-[3px] border-l-aqua bg-white px-5 py-5 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-8 md:px-6">
          <div>
            <p className="mb-2 mt-0 text-xs font-semibold uppercase tracking-[1.2px] text-cyan">Design &amp; Consultation</p>
            <h3 className="m-0 font-sans text-xl font-semibold leading-snug text-navy">Before we build, make it yours.</h3>
          </div>
          <p className="m-0 text-[15px] leading-[1.65] text-slate">
            Walk your yard with us, explore your pool in 3D and review an itemized quote.
            Refine the design around the way you want to live and the budget you have in mind.
          </p>
        </div>
        <ol className="m-0 mt-8 grid list-none gap-5 p-0 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
          {STAGES.map((stage, i) => (
            <li key={stage.title} className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
              <div className="relative h-[176px] overflow-hidden border-b border-line bg-shell sm:h-[160px]">
                <Image
                  src={stage.image}
                  alt={stage.visual}
                  fill
                  sizes="(max-width: 639px) 264px, 240px"
                  className="object-contain"
                />
                <span aria-hidden="true" className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-navy font-sans text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="m-0 font-sans text-lg font-semibold leading-snug text-navy"><span className="sr-only">Step {i + 1}: </span>{stage.title}</h3>
                <p className="mb-0 mt-3 text-[15px] font-semibold leading-[1.55] text-navy">{stage.benefit}</p>
                <p className="mb-0 mt-2 text-[15px] leading-[1.65] text-slate">{stage.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button href="/contact">Get My Free Consultation<ArrowIcon /></Button>
        </div>
      </div>
    </section>
  );
}
