export default function Stats() {
  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "1,600+", label: "Backyard Transformations" },
    { number: "70+", label: "5-Star Google Reviews" },
  ];

  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-heading font-bold text-white mb-2">{stat.number}</p>
              <p className="text-blue-200 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-blue-200 mt-8 text-lg">
          We Partner With The Best Designers In The Industry
        </p>
      </div>
    </section>
  );
}
