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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4">
            Ready To Level Up Your Yard Game
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the people who make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-dark">{member.name}</h3>
              <p className="text-secondary font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
