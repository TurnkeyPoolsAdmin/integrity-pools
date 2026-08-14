"use client";

import { useId, useState } from "react";

export type FaqItem = { q: string; a: string };

export default function Faq({
  items,
  light = false,
}: {
  items: FaqItem[];
  light?: boolean;
}) {
  const [open, setOpen] = useState(0);
  const base = useId().replace(/:/g, "");

  const border = light ? "border-white/15" : "border-line-cool";
  const q = light ? "text-white" : "text-navy";
  const a = light ? "text-white/70" : "text-slate";
  const badge = light ? "bg-white/10 text-cyan" : "bg-white text-cyan";

  return (
    <div className={`border-t ${border}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`border-b ${border}`}>
            <h3 className="m-0">
              <button
                type="button"
                id={`${base}-btn-${i}`}
                aria-controls={`${base}-panel-${i}`}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`flex w-full cursor-pointer items-center justify-between gap-6 border-none bg-transparent py-[26px] text-left text-[17px] font-semibold transition-colors hover:text-cyan ${q}`}
              >
                {item.q}
                <span
                  aria-hidden="true"
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-base font-bold leading-none ${badge}`}
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={`${base}-panel-${i}`}
              aria-labelledby={`${base}-btn-${i}`}
              role="region"
              hidden={!isOpen}
            >
              <p className={`m-0 pb-7 pr-0 text-[15px] leading-[1.8] md:pr-[60px] ${a}`}>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
