import type { Metadata } from "next";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Testimonials | Integrity Pools & Hardscapes",
  description:
    "Read what homeowners across Southern California say about working with Integrity Pools. 70+ five-star Google reviews.",
};

const allTestimonials = [
  { name: "Shirley O.", text: "I was nervous to take on this project and was so happy I chose Integrity Pools for the job!!" },
  { name: "Jason H.", text: "The Integrity team was great to deal with and a big help with the learning process afterward." },
  { name: "Bree C.", text: "Integrity Pools does it all! I would recommend them to anyone looking for a local, friendly and professional pool company to work with." },
  { name: "Trish C.", text: "I highly recommend Integrity Pools." },
  { name: "Cali G.", text: "We will definitely call them back when we need any attention to our pool." },
  { name: "Nat T.", text: "Anything you need help with, they give you 200% effort." },
  { name: "Debby J.", text: "Their crew is great and the showroom team is very helpful." },
  { name: "Danielle O.", text: "Integrity Pools was so great! Saved the day for me." },
  { name: "Dani C.", text: "It's so nice to have a GOOD pool company here in the valley!" },
  { name: "Kristi A.", text: "We couldn't be more pleased with the results!" },
  { name: "Erin M.", text: "I would highly recommend Integrity Pools!" },
  { name: "Jeff W.", text: "Fast, friendly and superior service, great job team." },
  { name: "Warren S.", text: "Thank you to the Integrity Pools team for your great service." },
  { name: "Pilar G.", text: "Keep up the top notch workmanship!" },
  { name: "Logan M.", text: "Best pool builders around!" },
  { name: "Alissa D.", text: "I highly recommend them to anyone looking to build or remodel." },
  { name: "Carlos & Lindsey Q.", text: "Integrity Pools, you guys are the best." },
  { name: "Don F.", text: "Still looking great after 5 years!" },
  { name: "Greg & Janine", text: "Excellent experience. They walk you through the whole process." },
  { name: "Andy S.", text: "I highly recommend this team to help design and complete projects." },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-32 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-4">
            What Homeowners Are Saying
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-accent text-2xl">★★★★★</span>
            <span className="text-blue-200 text-lg">Over 70+ Google Reviews</span>
          </div>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what real homeowners say about
            working with us.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-light rounded-xl p-8 card-lift"
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

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Join Our Happy Homeowners?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Start with a free, no-obligation design consultation.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
