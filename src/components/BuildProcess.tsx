import Image from "next/image";
import { ArrowIcon, Button, SectionHeading } from "./ui";

const STAGES = [
  {
    title: "Layout & Excavation",
    benefit: "Get the groundwork right.",
    body: "Your pool’s shape, depth and position begin here. Your project manager checks the work daily as the yard is prepared and your pool takes shape.",
    image: "/images/build-process/01-layout-excavation.webp",
    visual: "Construction illustration of an excavator shaping a pool, with layout strings and exposed soil walls",
  },
  {
    title: "Steel & Plumbing",
    benefit: "Give the hidden work the attention it deserves.",
    body: "Steel reinforcement and plumbing become part of the pool you’ll depend on for years. We choose skilled tradespeople and keep a close eye on the work throughout construction.",
    image: "/images/build-process/02-steel-plumbing.webp",
    visual: "Construction illustration of a steel cage across the pool floor and walls, with plumbing beside the shell",
  },
  {
    title: "Concrete Shell",
    benefit: "Put experienced hands behind your pool’s structure.",
    body: "The concrete shell forms the body of your pool. Carefully chosen craftspeople and daily oversight bring our focus on workmanship to this critical stage.",
    image: "/images/build-process/03-concrete-shell.webp",
    visual: "Construction illustration of a concrete pool shell and entry steps, with a cutaway revealing embedded steel",
  },
  {
    title: "Tile, Coping & Decking",
    benefit: "Craftsmanship you’ll see every day.",
    body: "The tile, pool edging and surrounding deck bring your backyard together. We’re particular about the people doing this work because these are the details you’ll see and use every time you enjoy your pool.",
    image: "/images/build-process/04-tile-coping-decking.webp",
    visual: "Construction illustration of waterline tile, stone coping and aligned deck pavers around the empty pool",
  },
  {
    title: "Interior Finish",
    benefit: "Choose quality all the way to the surface.",
    body: "We use genuine PebbleTec finishes. Your pool’s finish deserves the same care in material selection and workmanship as everything beneath it.",
    image: "/images/build-process/05-interior-finish.webp",
    visual: "Construction illustration of a pebble finish covering the pool interior and steps, with a matching surface sample",
  },
  {
    title: "Startup & First-Year Care",
    benefit: "Protect your pool from the first fill.",
    body: "We handle professional startup and include one full year of free pool service. Water chemistry and routine maintenance receive expert attention while you enjoy your new pool.",
    image: "/images/build-process/06-startup-care.webp",
    visual: "Construction illustration of a filled pool with a water-testing kit and pool brush on the deck",
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
        <ol className="m-0 mt-8 grid list-none gap-5 p-0 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
          {STAGES.map((stage, i) => (
            <li key={stage.title} className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
              <div className="relative h-[176px] overflow-hidden border-b border-line bg-[#f4f0e9] sm:h-[160px]">
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
