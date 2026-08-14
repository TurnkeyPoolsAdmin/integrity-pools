import { BUSINESS } from "@/lib/site";
import { PhoneIcon } from "./ui";

export default function TopBar() {
  return (
    <div className="section-x flex flex-wrap items-center justify-between gap-1.5 border-b border-line bg-white py-2.5 text-[13px]">
      <a
        href={BUSINESS.phoneHref}
        className="flex items-center gap-2 font-medium text-navy transition-colors hover:text-cyan"
      >
        <span className="text-cyan">
          <PhoneIcon className="h-4 w-4" />
        </span>
        Give us a call {BUSINESS.phone}
      </a>
      <span className="hidden font-normal text-slate lg:block">
        Serving <strong className="font-semibold text-navy">Menifee, Murrieta</strong> &amp; the
        Inland Empire
      </span>
    </div>
  );
}
