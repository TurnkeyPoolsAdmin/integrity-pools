import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta, PageHero } from "@/components/sections";
import { AREAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Integrity Pools builds custom pools, spas and hardscape across Temecula, Murrieta, Wildomar, Menifee, Lake Elsinore, Corona, Riverside and more.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="Temecula, Murrieta & the Inland Empire"
        body="We stay within about an hour of the shop. Close enough that our crews turn up on time and we can come back quickly if you need us."
      />
      <section className="section-x bg-white py-[80px]">
        <div className="mx-auto grid w-full max-w-[1400px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <Link
              key={a.slug}
              href={`/service-areas/${a.slug}`}
              className="flex flex-col gap-3 rounded-lg border border-line bg-white p-7 transition-all hover:border-cyan hover:shadow-[0_14px_40px_rgba(26,42,58,0.08)]"
            >
              <span className="text-[17px] font-bold uppercase tracking-[0.5px] text-navy">
                {a.name}
              </span>
              <span className="text-sm leading-[1.7] text-slate">{a.blurb}</span>
              <span className="mt-1 text-[11px] font-bold uppercase tracking-[1.5px] text-cyan">
                Pool builder in {a.name} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
      <FinalCta bg="bg-shell" />
    </>
  );
}
