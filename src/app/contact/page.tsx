import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Contact Us | Integrity Pools & Hardscapes",
  description:
    "Get in touch with Integrity Pools for a free design consultation. Serving Menifee, Murrieta, Temecula, Corona, and Riverside.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">
            What Are You Waiting For?
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Contact us today to get one step closer to building your backyard paradise.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="#0f172a" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-heading font-bold">30+</p>
              <p className="text-gray-400 text-sm">Years Combined Experience</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold">1,600+</p>
              <p className="text-gray-400 text-sm">Backyard Transformations</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold">THE BEST</p>
              <p className="text-gray-400 text-sm">Designers in the Industry</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold">70+</p>
              <p className="text-gray-400 text-sm">Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
