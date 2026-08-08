export default function Partners() {
  const partners = [
    {
      name: "Pentair",
      src: "https://thomaspools.us/assets/Logos/partners-logo/PENTAIR-LOGO.png",
    },
    {
      name: "Hayward",
      src: "https://thomaspools.us/assets/Logos/partners-logo/HAYWARD-LOGO.png",
    },
    {
      name: "Fluidra",
      src: "https://thomaspools.us/assets/Logos/partners-logo/FLUIDRA-LOGO.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-dark mb-3">
            Built on Standards, Not Shortcuts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We exclusively install equipment from industry leaders in reliability,
            efficiency, and innovation.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {partners.map((p) => (
            <div key={p.name} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={p.src}
                alt={p.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
