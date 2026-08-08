import Link from "next/link";

export default function RecentProjects() {
  const projects = [
    {
      src: "https://thomaspools.us/assets/our-work-banner-img/DSCN0269%201.png",
      alt: "Custom pool with water features",
    },
    {
      src: "https://thomaspools.us/assets/our-work-banner-img/July%2021%202022%201.png",
      alt: "Modern pool with hardscape patio",
    },
    {
      src: "https://thomaspools.us/assets/our-work-banner-img/IMG%207216%201.png",
      alt: "Luxury backyard transformation",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4">Recent Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every backyard tells a story. Here&apos;s what we&apos;ve built for families across
            Los Angeles and Ventura Counties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {projects.map((project, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-center">
            Start Your Project
          </Link>
          <Link href="/gallery" className="btn-outline text-center">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
