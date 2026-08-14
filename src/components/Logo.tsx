import Link from "next/link";

export function WaveMark({ className = "h-10 w-10", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 110 132" fill="none" className={className} aria-hidden="true">
      <path d="M8 18c14-11 28-11 42 0s28 11 42 0" stroke={color} strokeWidth={9} strokeLinecap="round" />
      <path d="M8 44c14-11 28-11 42 0s28 11 42 0" stroke={color} strokeWidth={9} strokeLinecap="round" />
      <path d="M8 70c14-11 28-11 42 0s28 11 42 0" stroke={color} strokeWidth={9} strokeLinecap="round" />
      <path d="M8 96c14-11 28-11 42 0s28 11 42 0" stroke={color} strokeWidth={9} strokeLinecap="round" />
      <path d="M34 100L16 128" stroke={color} strokeWidth={9} strokeLinecap="round" />
      <path d="M64 100l18 28" stroke={color} strokeWidth={9} strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "text-white" : "text-navy";
  const sub = light ? "text-white/60" : "text-slate";
  return (
    <Link href="/" aria-label="Integrity Pools - home" className="flex shrink-0 items-center gap-3">
      <WaveMark className="h-[46px] w-[38px]" color={light ? "#ffffff" : "#1b86c8"} />
      <span className="flex flex-col leading-none">
        <span className={`text-[22px] font-extrabold uppercase tracking-[1px] ${ink}`}>
          Integrity
        </span>
        <span className={`mt-1 text-[9px] font-semibold uppercase tracking-[2.6px] ${sub}`}>
          Pools &amp; Hardscape
        </span>
      </span>
    </Link>
  );
}
