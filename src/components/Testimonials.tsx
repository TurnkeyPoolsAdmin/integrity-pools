import Link from "next/link";

const testimonials = [
  {
    name: "Shirley O.",
    text: "I was nervous to do this job and was so happy I chose Integrity Pools for the job!!",
  },
  {
    name: "Jason H.",
    text: "Great to deal with and a big help with the learning process afterward.",
  },
  {
    name: "Greg & Janine",
    text: "Excellent experience. They walk you through the whole process.",
  },
  {
    name: "Trish C.",
    text: "I highly recommend Integrity Pools.",
  },
  {
    name: "Cali G.",
    text: "We will definitely call them back when we need any attention to our pool.",
  },
];

function QuoteIcon() {
  return (
    <svg className="w-12 h-12 text-secondary/30" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="pt-20 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row - split layout */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-secondary font-bold tracking-widest text-sm mb-4">
              Reviews
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight text-dark">
              Why Homeowners
              <br />
              Trust Integrity
            </h2>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-accent text-sm">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm italic">70+ Google Reviews</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-0">
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary-light text-white font-bold px-8 py-3.5 rounded-full transition-colors text-center text-base"
            >
              Get My Free Pool Plan →
            </Link>
            <Link
              href="/testimonials"
              className="bg-white border border-gray-200 text-dark font-bold px-8 py-3.5 rounded-full hover:bg-dark hover:text-white transition-colors text-center text-base"
            >
              Read More Reviews
            </Link>
          </div>
        </div>

        {/* Reviews grid - 3 top, 2 bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <QuoteIcon />
              <p className="text-gray-700 mt-5 mb-6 leading-relaxed text-[17px]">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-semibold text-dark">{t.name}</p>
              <div className="text-accent text-sm mt-1">★★★★★</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(3, 5).map((t, i) => (
            <div
              key={i + 3}
              className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <QuoteIcon />
              <p className="text-gray-700 mt-5 mb-6 leading-relaxed text-[17px]">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-semibold text-dark">{t.name}</p>
              <div className="text-accent text-sm mt-1">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
