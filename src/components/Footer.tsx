import Link from "next/link";
import Logo from "./Logo";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./ui";
import { AREAS, BUSINESS, SERVICES } from "@/lib/site";

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Builder Partners", href: "/builder-partners" },
  { label: "Financing", href: "/financing" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/quote" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="m-0 mb-6 inline-block border-b-2 border-cyan pb-4 text-[13px] font-bold uppercase tracking-[1.5px] text-white">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto w-full max-w-[1400px] section-x grid gap-14 pb-[60px] pt-20 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <Logo light />
          <p className="m-0 max-w-[280px] text-sm leading-[1.7] text-white/70">
            Temecula Valley&apos;s custom gunite pool builder. Pools, spas, hardscape and lighting,
            all on one contract, from a company that still services pools every week.
          </p>
          <p className="m-0 text-xs uppercase tracking-[1.2px] text-white/40">
            {BUSINESS.license}
            <br />
            {BUSINESS.credential}
          </p>
          <div className="mt-2.5 flex gap-3">
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded bg-white/10 text-white transition-colors hover:bg-cyan"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded bg-white/10 text-white transition-colors hover:bg-cyan"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm7.85-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>

        <nav aria-label="Services">
          <ColumnHeading>Services</ColumnHeading>
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-cyan"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <ColumnHeading>Company</ColumnHeading>
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm font-medium text-white/70 transition-colors hover:text-cyan">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColumnHeading>Contact</ColumnHeading>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/10">
                <PhoneIcon className="h-[18px] w-[18px]" />
              </div>
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[1px] text-white/50">
                  Phone
                </p>
                <p className="m-0 mt-1 text-sm font-medium leading-[1.6]">
                  <a
                    href={BUSINESS.phoneHref}
                    className="text-white transition-colors hover:text-cyan"
                  >
                    {BUSINESS.phone}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/10">
                <MapPinIcon />
              </div>
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[1px] text-white/50">
                  Office
                </p>
                <p className="m-0 mt-1 text-sm font-medium leading-[1.6]">
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/10">
                <ClockIcon />
              </div>
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[1px] text-white/50">
                  Hours
                </p>
                <p className="m-0 mt-1 text-sm font-medium leading-[1.6]">{BUSINESS.hours}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/10">
                <MapPinIcon />
              </div>
              <div>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[1px] text-white/50">
                  Service Area
                </p>
                <p className="m-0 mt-1 text-sm font-medium leading-[1.6]">
                  {AREAS.slice(0, 6)
                    .map((a) => a.name)
                    .join(", ")}{" "}
                  &amp; surrounding communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-[1400px] section-x flex flex-wrap items-center justify-between gap-5 py-6">
          <p className="m-0 text-[13px] text-white/50">
            &copy; {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
          </p>
          <div className="flex gap-7">
            <Link href="/privacy" className="text-[13px] text-white/50 transition-colors hover:text-cyan">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[13px] text-white/50 transition-colors hover:text-cyan">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
