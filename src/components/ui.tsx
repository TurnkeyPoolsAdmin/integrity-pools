import Link from "next/link";
import type { ReactNode } from "react";

/* ---------------- Icons ---------------- */

export function ArrowIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- Buttons ---------------- */

const BTN_BASE =
  "inline-flex items-center justify-center gap-2.5 rounded text-[13px] font-bold uppercase tracking-[1px] transition-colors";

const VARIANTS = {
  primary: "bg-navy text-white hover:bg-cyan",
  cyan: "bg-cyan text-white hover:bg-white hover:text-navy",
  outline: "border-2 border-line-strong bg-white text-navy hover:border-cyan hover:text-cyan",
  ghostLight: "border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy",
} as const;

const SIZES = {
  md: "px-8 py-4",
  lg: "px-9 py-[18px] text-sm",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  external?: boolean;
  className?: string;
}) {
  const cls = `${BTN_BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? <p className="eyebrow m-0 mb-4">{eyebrow}</p> : null}
      <h2
        className={`m-0 text-[clamp(30px,4vw,44px)] font-bold uppercase leading-[1.15] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mb-0 mt-5 text-base leading-[1.75] ${
            light ? "text-white/70" : "text-slate"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
