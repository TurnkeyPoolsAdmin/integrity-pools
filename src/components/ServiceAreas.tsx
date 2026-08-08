const cities = [
  "Bakersfield", "Beverly Hills", "Brentwood", "Burbank", "Calabasas",
  "Camarillo", "Canyon Country", "Castaic", "Chatsworth", "Fillmore",
  "Glendale", "Hollywood Hills", "Pacific Palisades", "Palmdale",
  "San Marino", "Santa Clarita", "Sherman Oaks", "Sierra Madre",
  "Simi Valley", "South Pasadena", "Thousand Oaks", "Valencia",
  "Ventura", "Victorville",
];

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Proudly Serving Southern California
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            From our home base in Castaic, we&apos;ve built pools and outdoor spaces
            across Los Angeles County, Ventura County, and the Santa Clarita Valley.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
          {cities.map((city) => (
            <div
              key={city}
              className="bg-white/10 rounded-lg px-4 py-3 text-center text-sm hover:bg-white/20 transition-colors"
            >
              {city}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/20 pt-12">
          <div>
            <p className="text-3xl font-heading font-bold">PHTA</p>
            <p className="text-blue-200 text-sm">Certified Building Professional</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold">BBB</p>
            <p className="text-blue-200 text-sm">Accredited Business</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold">C53</p>
            <p className="text-blue-200 text-sm">Licensed & Fully Insured</p>
          </div>
        </div>
      </div>
    </section>
  );
}
