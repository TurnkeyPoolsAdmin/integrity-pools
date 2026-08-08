import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Pre-footer CTA */}
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Building Southern California Backyards Since 1990
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Pools &amp; Hardscapes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold font-heading">IP</span>
              </div>
              <span className="font-heading font-bold text-lg">INTEGRITY POOLS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Custom pools, hardscaping, and outdoor living spaces across Southern California.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link>
              <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</Link>
              <Link href="/financing" className="text-gray-400 hover:text-white transition-colors text-sm">Financing</Link>
              <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">Testimonials</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <p>29441 The Old Rd</p>
              <p>Castaic, CA 91384</p>
              <a href="tel:6614959030" className="hover:text-white transition-colors">(661) 495-9030</a>
              <div className="mt-2">
                <p>Mon - Sat: 9am - 5pm</p>
                <p>Sun: By Appointment</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Find Us</h3>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=29441+The+Old+Rd,+Castaic,+CA+91384&hl=en&z=13&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Integrity Pools. All rights reserved.</p>
          <p>C53 License #945615, #1154897 | PHTA Certified Building Professional</p>
        </div>
      </div>
    </footer>
  );
}
