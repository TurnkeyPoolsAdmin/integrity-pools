"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { ArrowIcon, PhoneIcon } from "./ui";
import { BUSINESS, NAV, SERVICES } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  return <HeaderContent key={pathname} pathname={pathname} />;
}

function HeaderContent({ pathname }: { pathname: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setServicesOpen(false);
      if (!headerRef.current?.contains(e.target as Node)) setMobileOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (servicesOpen) { setServicesOpen(false); servicesButton.current?.focus(); }
      if (mobileOpen) { setMobileOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen, servicesOpen]);

  const close = () => { setMobileOpen(false); setServicesOpen(false); };
  const linkCls = (href: string) => `flex min-h-11 items-center px-3 text-sm font-medium transition-colors hover:text-cyan ${isActive(href) ? "text-cyan" : "text-navy"}`;

  return (
    <header ref={headerRef} className="sticky top-0 z-[1000] border-b border-line bg-white/95 backdrop-blur-md">
      <div className="section-x mx-auto flex max-w-[1680px] items-center justify-between gap-3 py-4">
        <Logo />
        <nav aria-label="Main navigation" className="hidden xl:block">
          <ul className="m-0 flex list-none items-center gap-1 p-0">
            {NAV.filter((item) => item.href !== "/").map((item) => item.dropdown ? (
              <li key={item.href} ref={dropdownRef} className="relative" onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setServicesOpen(false);
              }}>
                <button ref={servicesButton} type="button" aria-expanded={servicesOpen} aria-controls="services-menu"
                  onClick={() => setServicesOpen(!servicesOpen)} className={`${linkCls(item.href)} cursor-pointer gap-2`}>
                  {item.label}<span aria-hidden="true" className={`text-xs transition-transform ${servicesOpen ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {servicesOpen && <div id="services-menu" className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-line bg-white p-3 shadow-xl">
                  <Link href="/services" onClick={close} className="block rounded-lg px-3 py-3 text-sm font-semibold text-cyan hover:bg-shell">All Services</Link>
                  {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} onClick={close}
                    className="block rounded-lg px-3 py-3 text-sm text-navy hover:bg-shell">{s.name}</Link>)}
                </div>}
              </li>
            ) : <li key={item.href}><Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={linkCls(item.href)}>{item.label}</Link></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/contact" className="hidden min-h-12 items-center gap-4 rounded-full bg-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-cyan sm:inline-flex">Start Your Project<ArrowIcon className="h-4 w-4" /></Link>
          <a href={BUSINESS.phoneHref} aria-label={`Call ${BUSINESS.phone}`} className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy sm:hidden"><PhoneIcon /></a>
          <button ref={menuButton} type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-controls="mobile-menu" aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)} className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-line xl:hidden">
            <span className={`block h-0.5 w-5 bg-navy transition-transform ${mobileOpen ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-navy transition-transform ${mobileOpen ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {mobileOpen && <nav id="mobile-menu" aria-label="Mobile navigation" className="section-x max-h-[calc(100dvh-100px)] overflow-y-auto border-t border-line bg-white pb-6 xl:hidden">
        <ul className="m-0 list-none p-0">
          {NAV.map((item) => <li key={item.href} className="border-b border-line"><Link href={item.href} onClick={close} aria-current={isActive(item.href) ? "page" : undefined} className={`${linkCls(item.href)} py-2`}>{item.label}</Link></li>)}
        </ul>
        <div className="my-4 grid grid-cols-2 gap-x-4">{SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} onClick={close} className="flex min-h-12 items-center text-sm text-slate hover:text-cyan">{s.name}</Link>)}</div>
        <Link href="/contact" onClick={close} className="flex min-h-12 items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white">Start Your Project</Link>
        <a href={BUSINESS.phoneHref} className="mt-3 flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-navy"><PhoneIcon className="h-4 w-4" />{BUSINESS.phone}</a>
      </nav>}
    </header>
  );
}
