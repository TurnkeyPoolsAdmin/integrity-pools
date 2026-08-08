import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://thomaspools.us/assets/Ready-To-transform-your-backyard-section/DSCN0269%201.png')`,
        }}
      />
      <div className="absolute inset-0 bg-dark/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Ready To Transform Your Backyard?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          You&apos;ve looked at the photos. You&apos;ve read the reviews. Now let&apos;s talk
          about what&apos;s possible in your space. No commitment. No sales pitch.
          Just a straightforward discussion about your backyard and your budget.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Book Free Consultation
          </Link>
          <a href="tel:6614959030" className="btn-secondary text-lg px-10 py-4">
            Call (661) 495-9030
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-white/60">
          <div>
            <p className="font-semibold text-white">Hours</p>
            <p>Mon - Sat: 9am - 5pm</p>
            <p>Sun: By Appointment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
