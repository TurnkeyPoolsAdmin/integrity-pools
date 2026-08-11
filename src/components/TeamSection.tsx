export default function TeamSection() {
  const team = [
    {
      name: "Phil Bovard",
      role: "Head of Pool Design and Pricing",
      desc: "Phil leads pool design and pricing. He helps homeowners turn ideas, priorities, and budgets into a clear pool plan before major decisions are made. The goal is simple: fewer surprises, smarter choices, and a design the family will enjoy for years.",
    },
    {
      name: "Matt Sheeran",
      role: "Head of Customer Experience",
      desc: "Matt leads the customer experience from the first call through the final swim. He built the process around clear updates, fast answers, and making sure homeowners always understand what is happening and what comes next.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#26b6c6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 lg:mb-20">
          <p className="text-white/80 uppercase tracking-[0.25em] text-sm font-normal mb-2">
            Meet The Team
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
            Pool Experts Who Put
            <br />
            Homeowners First
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl">
          {team.map((member) => (
            <div key={member.name}>
              <div
                className="w-40 h-40 rounded-full mb-6 shadow-lg border-4 border-white/20 bg-white/20 flex items-center justify-center"
                aria-label={`${member.name} photo placeholder`}
              >
                <svg className="w-20 h-20 text-white/50" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                </svg>
              </div>
              <div className="border-l-4 border-white pl-5">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-white/70 text-sm mb-3">{member.role}</p>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mt-4 max-w-sm">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
