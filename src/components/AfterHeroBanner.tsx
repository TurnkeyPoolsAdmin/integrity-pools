export default function AfterHeroBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Wave top transition */}
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-[40px] md:h-[60px] relative z-10"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60C180 120 360 0 540 60C720 120 900 0 1080 60C1260 120 1440 0 1440 60V0H0V60Z"
          fill="white"
        />
      </svg>

      {/* Full-bleed backyard image band */}
      <div
        className="h-[160px] md:h-[230px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/Ready-To-transform-your-backyard-section/dscn0269-1.png')`,
        }}
      />

      {/* Wave bottom transition */}
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-[40px] md:h-[60px] relative z-10"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60C180 0 360 120 540 60C720 0 900 120 1080 60C1260 0 1440 120 1440 60V120H0V60Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
