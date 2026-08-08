import Link from "next/link";

const services = [
  {
    title: "New Pool Construction",
    desc: "Custom-designed gunite and plaster pools built to your specifications. From classic rectangles to freeform lagoons.",
    img: "https://thomaspools.us/assets/Everything-your-backyards-need/0721171355a%201.png",
  },
  {
    title: "Pool Remodeling",
    desc: "Outdated tile. Cracked plaster. Equipment from another decade. We bring aging pools back to life.",
    img: "https://thomaspools.us/assets/Everything-your-backyards-need/IMG%207216%201.png",
  },
  {
    title: "Spas & Hot Tubs",
    desc: "Standalone or integrated. Spillover designs. Therapeutic jets. The perfect complement to your pool or patio.",
    img: "https://thomaspools.us/assets/Everything-your-backyards-need/July%207%202020%201.png",
  },
  {
    title: "Hardscaping",
    desc: "Pavers, natural stone, concrete decking. The foundation that ties your entire outdoor space together.",
    img: "https://thomaspools.us/assets/Everything-your-backyards-need/Mar%2016%202022%201.png",
  },
  {
    title: "Fire Features",
    desc: "Fire pits, fire bowls, and linear fire walls that extend your outdoor season into cooler months.",
    img: "https://thomaspools.us/assets/Everything-your-backyards-need/Sept%2024%202019%201.png",
  },
  {
    title: "Outdoor Kitchens",
    desc: "Custom grills, countertops, and entertainment areas built for serious outdoor cooking.",
    img: "https://thomaspools.us/assets/Everything-your-backyards-need/unsplash_MiWGoGARyDQ.png",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4">
            Everything Your Backyard Needs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            One team. Full capability. From water to fire to stone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="service-card bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
