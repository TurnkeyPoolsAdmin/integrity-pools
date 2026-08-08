"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    src: "https://thomaspools.us/assets/our-work-banner-img/DSCN0269%201.png",
    alt: "Custom pool with water features",
  },
  {
    src: "https://thomaspools.us/assets/our-work-banner-img/July%2021%202022%201.png",
    alt: "Modern pool with hardscape patio",
  },
  {
    src: "https://thomaspools.us/assets/our-work-banner-img/IMG%207216%201.png",
    alt: "Luxury backyard transformation",
  },
  {
    src: "https://thomaspools.us/assets/photo-gallery/modern-pools/0000.JPG",
    alt: "Modern geometric pool",
  },
  {
    src: "https://thomaspools.us/assets/photo-gallery/freeform-pools/20140116_121726.jpg",
    alt: "Freeform pool design",
  },
];

export default function RecentProjects() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 3 : c - 1));
  const next = () => setCurrent((c) => (c >= projects.length - 3 ? 0 : c + 1));

  const visible = projects.slice(current, current + 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
              Recent Work
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">
              Our Recent Projects
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-gray-500 text-sm mr-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>LA &amp; Ventura Counties</span>
            </div>
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center hover:bg-dark hover:text-white transition-colors"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center hover:bg-dark hover:text-white transition-colors"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((project, i) => (
            <div
              key={current + i}
              className={`rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 ${
                i === 1 ? "md:scale-105 md:z-10" : ""
              }`}
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: projects.length - 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-secondary" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
