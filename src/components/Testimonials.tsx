const testimonials = [
  {
    name: "Shirley O.",
    text: "I was nervous to do this job and was so happy I chose Thomas Pools for the job!!",
    rating: 5,
  },
  {
    name: "Jason H.",
    text: "Thomas was great to deal with and a big help with the learning process afterward.",
    rating: 5,
  },
  {
    name: "Bree C.",
    text: "Thomas Pools does it all! I would recommend Thomas Pools to anyone looking for a local, friendly and professional pool company to work with.",
    rating: 5,
  },
  {
    name: "Trish C.",
    text: "I highly recommend Thomas Pools.",
    rating: 5,
  },
  {
    name: "Cali G.",
    text: "We will definitely call them back when we need any attention to our pool.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4">
            What Homeowners Are Saying
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-accent text-2xl">★★★★★</span>
            <span className="text-gray-600">Over 70+ Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-accent text-lg mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-semibold text-dark">{t.name}</p>
              <p className="text-sm text-gray-medium">Google Review</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
