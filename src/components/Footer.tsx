import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Large logo section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-6">
          {/* Wave icon */}
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" className="flex-shrink-0">
            <path d="M10 20c15-12 30-12 45 0s30 12 45 0" stroke="#0f172a" strokeWidth="8" fill="none" />
            <path d="M10 45c15-12 30-12 45 0s30 12 45 0" stroke="#0f172a" strokeWidth="8" fill="none" />
            <path d="M10 70c15-12 30-12 45 0s30 12 45 0" stroke="#0f172a" strokeWidth="8" fill="none" />
            <path d="M10 95c15-12 30-12 45 0s30 12 45 0" stroke="#0f172a" strokeWidth="8" fill="none" />
            <path d="M35 95 L15 130" stroke="#0f172a" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M65 95 L85 130" stroke="#0f172a" strokeWidth="8" fill="none" strokeLinecap="round" />
          </svg>
          {/* Company name */}
          <div>
            <p className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-dark leading-none tracking-tight">
              INTEGRITY
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark tracking-[0.15em]">
              POOLS &amp; HARDSCAPE
            </p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left - tagline */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                Building Southern
                <br />
                California Backyards
                <br />
                Since 1990
              </h2>
            </div>

            {/* Middle - Contact */}
            <div>
              <p className="uppercase tracking-[0.2em] text-sm font-semibold text-white/60 mb-4">
                Contact Us
              </p>
              <p className="text-white/80 mb-1">29441 The Old Rd, Castaic,</p>
              <p className="text-white/80 mb-4">CA 91384</p>
              <a href="tel:6614959030" className="text-white/80 hover:text-white transition-colors">
                (661) 495-9030
              </a>
            </div>

            {/* Right - Nav */}
            <div>
              <nav className="flex flex-col gap-3">
                <Link href="/" className="text-white/80 hover:text-white transition-colors font-medium">Home</Link>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors font-medium">Services</Link>
                <Link href="/financing" className="text-white/80 hover:text-white transition-colors font-medium">Financing</Link>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors font-medium">Contact</Link>
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map */}
              <div>
                <p className="text-sm font-semibold text-white mb-3">Map &amp; Directions</p>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=29441+The+Old+Rd,+Castaic,+CA+91384&hl=en&z=13&output=embed"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>

              {/* Quality seal placeholder */}
              <div className="flex items-end justify-end">
                <div className="w-32 h-32 rounded-full border-2 border-white/20 flex items-center justify-center text-center p-4">
                  <div>
                    <svg className="w-8 h-8 mx-auto mb-1 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-[8px] uppercase tracking-wider text-white/30 leading-tight">
                      Quality Seal<br />of Approval
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 uppercase tracking-wider">
            <p>C53 License #945615, #1154897 &nbsp;|&nbsp; PHTA Certified Building Professional</p>
            <p>&copy; {new Date().getFullYear()} Integrity Pools. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
