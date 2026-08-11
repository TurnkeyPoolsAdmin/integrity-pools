"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    src: "/images/photo-gallery/modern-pools/0000.webp",
    alt: "Modern geometric pool with clean lines",
  },
  {
    src: "/images/photo-gallery/freeform-pools/20140116-121726.webp",
    alt: "Freeform pool with natural surroundings",
  },
  {
    src: "/images/photo-gallery/spas/img-5286.webp",
    alt: "Custom spa and water feature",
  },
  {
    src: "/images/photo-gallery/outdoor-living/1102171046.webp",
    alt: "Outdoor living space with pool and patio",
  },
  {
    src: "/images/photo-gallery/pool-building-process/1010171358-hdr.webp",
    alt: "Custom pool construction in progress",
  },
];

export default function RecentProjects() {
  const [current, setCurrent] = useState(0);
  const [slidePct, setSlidePct] = useState(50);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setSlidePct(mq.matches ? 100 : 50);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const maxIndex = Math.max(0, projects.length - (slidePct === 100 ? 1 : 2));
  const prev = () => setCurrent((c) => (c === 0 ? maxIndex : c - 1));
  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));

  return (
    <section className="pt-14 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-none text-dark">
            Recent Pool Projects
          </h2>
          <div className="flex items-center gap-2 text-gray-500 text-sm mt-4 md:mt-0 md:pb-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Custom pools, spas, remodels, and pool hardscapes across the Inland Empire</span>
          </div>
        </div>

        {/* Carousel with side arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gray-100 bg-white/95 text-dark flex items-center justify-center hover:bg-dark hover:text-white transition-colors shadow-xl"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gray-100 bg-white/95 text-dark flex items-center justify-center hover:bg-dark hover:text-white transition-colors shadow-xl"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Sliding track — 1 slide on mobile, 2 on desktop */}
          <div className="overflow-hidden px-4">
            <div
              className="flex transition-transform duration-500 ease-in-out -mx-3"
              style={{ transform: `translateX(-${current * slidePct}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.src}
                  className="w-full md:w-1/2 flex-shrink-0 px-3"
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <div className="relative h-72 md:h-96 overflow-hidden">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row: CTAs left, paragraph right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mt-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary-light text-white font-bold px-10 py-4 rounded-full transition-colors text-center text-base"
            >
              Request My Free Design Consultation →
            </Link>
            <Link
              href="/gallery"
              className="bg-white border border-gray-200 text-dark font-bold px-10 py-4 rounded-full hover:bg-dark hover:text-white transition-colors text-center text-base"
            >
              View Full Gallery
            </Link>
          </div>
          <p className="text-gray-600 max-w-md text-[15px] font-medium leading-relaxed mt-6 md:mt-0 md:text-right">
            See how families across the Inland Empire turned their ideas into pools built for the way they live.
          </p>
        </div>
      </div>
    </section>
  );
}
