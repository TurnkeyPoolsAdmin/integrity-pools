import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Integrity Pool Builders - home"
      className={`inline-flex max-w-full shrink-0 items-center self-start ${light ? "rounded-lg bg-white px-4 py-3" : "min-h-12"}`}
    >
      {!light && (
        <Image
          src="/images/brand/integrity-symbol.png"
          alt=""
          width={1000}
          height={1000}
          sizes="52px"
          loading="eager"
          className="h-[52px] w-[52px] sm:hidden"
        />
      )}
      {/* Frame the original artwork without changing its colors or proportions.
          The supplied PNG has generous blank space around the logo. */}
      <svg
        viewBox="160 180 1750 340"
        aria-hidden="true"
        focusable="false"
        className={`h-auto w-[280px] max-w-full ${light ? "block" : "hidden sm:block"}`}
      >
        <image href="/images/brand/integrity-main.png" width="2000" height="700" />
      </svg>
    </Link>
  );
}
