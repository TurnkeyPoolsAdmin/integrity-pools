"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/site";
import { ArrowIcon } from "./ui";

const categories = ["All Ideas", ...new Set(PROJECTS.map((p) => p.category))];

export default function ProjectGallery() {
  const [category, setCategory] = useState("All Ideas");
  const [selected, setSelected] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const visible = PROJECTS.filter((p) => category === "All Ideas" || p.category === category);
  const index = visible.findIndex((p) => p.slug === selected);
  const project = visible[index];
  const isOpen = selected !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      document.body.style.overflow = overflow;
      dialog.close();
    };
  }, [isOpen]);

  const move = (direction: number) => setSelected(visible[(index + direction + visible.length) % visible.length].slug);

  return (
    <>
      <div className="mb-9 flex flex-wrap gap-2" role="group" aria-label="Filter design ideas">
        {categories.map((c) => <button key={c} type="button" aria-pressed={c === category} onClick={() => setCategory(c)}
          className={`min-h-11 cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${c === category ? "border-navy bg-navy text-white" : "border-line-strong bg-white text-navy hover:border-cyan"}`}>{c}</button>)}
      </div>
      <p className="mb-5 text-sm text-slate" role="status">{visible.length} {visible.length === 1 ? "design idea" : "design ideas"}{category === "All Ideas" ? "" : ` · ${category}`}</p>
      <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => <figure id={p.slug} key={p.slug} className="group m-0">
          <button type="button" onClick={() => setSelected(p.slug)} aria-label={`View ${p.title}`} aria-haspopup="dialog"
            className="project-photo relative block w-full cursor-pointer overflow-hidden rounded-xl bg-shell">
            <Image src={p.image} alt={p.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <span aria-hidden="true" className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-navy shadow-sm">+</span>
          </button>
          <figcaption className="mt-4">
            <p className="text-base font-medium leading-normal text-cyan">{p.category}</p>
            <h2 className="mt-1 font-sans text-xl font-semibold leading-snug text-navy">{p.title}</h2>
          </figcaption>
        </figure>)}
      </div>
      <dialog ref={dialogRef} className="gallery-dialog" aria-labelledby="project-title" onClose={() => setSelected(null)}
        onClick={(e) => { if (e.target === e.currentTarget) dialogRef.current?.close(); }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); move(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); move(-1); }
        }}>
        {project && <div>
          <div className="flex items-center justify-between gap-4 px-5 py-3">
            <span className="text-sm text-slate" aria-live="polite">{index + 1} of {visible.length} · {project.category}</span>
            <button autoFocus type="button" onClick={() => dialogRef.current?.close()} className="min-h-11 cursor-pointer rounded-full border border-line px-5 text-sm font-semibold">Close <span aria-hidden="true">×</span></button>
          </div>
          <div className="relative h-[min(58dvh,650px)] bg-navy">
            <Image src={project.image} alt={project.alt} fill sizes="(max-width: 1152px) 95vw, 1120px" className="object-contain" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-5 p-5 sm:p-7">
            <div><h2 id="project-title" className="font-sans text-xl font-semibold leading-snug">{project.title}</h2><p className="mt-2 text-base leading-normal text-slate">Design reference photo</p></div>
            <div className="flex items-center gap-2">
              <button type="button" aria-label="Previous design idea" onClick={() => move(-1)} className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-line"><ArrowIcon className="h-5 w-5 rotate-180" /></button>
              <button type="button" aria-label="Next design idea" onClick={() => move(1)} className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-line"><ArrowIcon className="h-5 w-5" /></button>
            </div>
            <Link href="/contact" className="flex min-h-12 items-center rounded-full bg-navy px-6 text-sm font-semibold text-white">Plan Your Project</Link>
          </div>
        </div>}
      </dialog>
    </>
  );
}
