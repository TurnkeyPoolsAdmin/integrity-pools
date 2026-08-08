/* Thin decorative strip between the hero and Recent Projects — matches
   Thomas's ~145px white band: one full-width 1440x105 image + 20px padding. */
export default function AfterHeroBanner() {
  return (
    <div className="bg-white py-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/after-home-banner-section/after-home-banner-img.png"
        alt=""
        aria-hidden="true"
        className="w-full h-auto"
      />
    </div>
  );
}
