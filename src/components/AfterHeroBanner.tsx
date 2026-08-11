/* Thin decorative strip between the hero and Recent Projects:
   one full-width 1440x105 image + 20px padding. */
export default function AfterHeroBanner() {
  return (
    <div className="bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img loading="lazy" decoding="async"
        src="/images/after-home-banner-section/after-home-banner-img.webp"
        alt=""
        aria-hidden="true"
        className="w-full h-auto"
      />
    </div>
  );
}
