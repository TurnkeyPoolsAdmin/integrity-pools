"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { BUSINESS, NAV, SERVICES } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkCls = (href: string) =>
    `block px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.5px] transition-colors hover:text-cyan ${
      isActive(href) ? "text-cyan" : "text-navy"
    }`;

  return (
    <>
      <header className="section-x relative z-[1000] flex items-center justify-between gap-6 bg-white py-5">
        <Logo />

        <nav aria-label="Main navigation" className="hidden items-center lg:flex">
          <ul className="m-0 flex list-none items-center gap-0.5 p-0">
            {NAV.map((item) =>
              item.dropdown ? (
                <li key={item.href} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`flex cursor-pointer items-center gap-1.5 border-none bg-none px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.5px] transition-colors hover:text-cyan ${
                      isActive(item.href) ? "text-cyan" : "text-navy"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {servicesOpen ? (
                    <div className="absolute left-0 top-full z-50 mt-2 w-[280px] overflow-hidden rounded-lg border border-line bg-white py-2 shadow-[0_18px_50px_rgba(26,42,58,0.14)]">
                      <Link
                        href="/services"
                        className="block px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.5px] text-navy transition-colors hover:bg-shell hover:text-cyan"
                      >
                        All Services
                      </Link>
                      <div className="my-1 border-t border-line" />
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-5 py-2.5 text-[13px] font-medium text-slate transition-colors hover:bg-shell hover:text-cyan"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className={linkCls(item.href)}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden shrink-0 items-center justify-center rounded bg-navy px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.5px] text-white transition-colors hover:bg-cyan lg:inline-flex"
        >
          Request a Quote
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 cursor-pointer flex-col justify-center gap-1.5 border-none bg-none p-2.5 lg:hidden"
        >
          <span className="block h-0.5 w-6 bg-navy" />
          <span className="block h-0.5 w-6 bg-navy" />
          <span className="block h-0.5 w-6 bg-navy" />
        </button>
      </header>

      {mobileOpen ? (
        <div className="section-x border-b border-line bg-white pb-6 lg:hidden">
          <ul className="m-0 flex list-none flex-col p-0">
            {NAV.filter((n) => !n.dropdown).map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  className="block py-3.5 text-sm font-semibold uppercase tracking-[0.5px] text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mb-2 mt-6 text-[11px] font-bold uppercase tracking-[1.5px] text-muted">
            Services
          </p>
          <ul className="m-0 grid list-none grid-cols-2 gap-x-4 p-0">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block py-2 text-[13px] font-medium text-slate"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-navy px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.5px] text-white"
            >
              Request a Quote
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center rounded border-2 border-line-strong px-7 py-3 text-[13px] font-bold uppercase tracking-[0.5px] text-navy"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
