export default function TeamSection() {
  const team = [
    {
      name: "Aaron Sternberg",
      role: "Head of Pricing and Design",
      desc: "Aaron leads the estimating and design process for every new project. He ensures each pool is thoughtfully designed, accurately priced, and aligned with your vision and budget.",
      img: "https://thomaspools.us/assets/ready-to-level-up-section-img/image%2031.png",
    },
    {
      name: "Mark Pesin",
      role: "Head of Project Management",
      desc: "Mark ensures every project is executed smoothly from start to finish. He oversees permitting, timelines, coordination, and on-site quality to deliver pools that meet the highest standards.",
      img: "https://thomaspools.us/assets/ready-to-level-up-section-img/mark_pesin.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#4dd4e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-white/80 uppercase tracking-widest text-sm font-semibold mb-2">
            Meet The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Ready To Level Up Your
            <br />
            Yard Game
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          {team.map((member) => (
            <div key={member.name}>
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white/20">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border-l-4 border-white pl-5">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-white/70 text-sm mb-3">{member.role}</p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mt-4 max-w-sm">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
