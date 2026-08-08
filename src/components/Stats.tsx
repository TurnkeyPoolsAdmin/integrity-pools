export default function Stats() {
  return (
    <section className="relative -mt-20 z-20 pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark/85 backdrop-blur-sm rounded-2xl py-10 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="text-center py-4 md:py-0 md:px-6">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Over</p>
              <p className="text-4xl md:text-5xl font-heading font-bold text-white mb-1">30+</p>
              <p className="text-white/70 text-sm">Years Experience</p>
            </div>
            <div className="text-center py-4 md:py-0 md:px-6">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">More Than</p>
              <p className="text-4xl md:text-5xl font-heading font-bold text-white mb-1">1,600+</p>
              <p className="text-white/70 text-sm">Backyard Transformations</p>
            </div>
            <div className="text-center py-4 md:py-0 md:px-6">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">We Partner With</p>
              <p className="text-4xl md:text-5xl font-heading font-bold text-white mb-1">THE BEST</p>
              <p className="text-white/70 text-sm">Designers In The Industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
