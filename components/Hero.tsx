import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1600&q=80')",
        }}
      />
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071526]/80 via-[#071526]/70 to-[#071526]" />

      {/* Blue glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(26,140,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Water drop */}
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 flex items-center justify-center rounded-full"
            style={{ background: "rgba(26,140,255,0.15)", boxShadow: "0 0 30px rgba(26,140,255,0.4)" }}
          >
            <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
              <path
                d="M32 4C32 4 10 26 10 40C10 52.15 20.75 62 32 62C43.25 62 54 52.15 54 40C54 26 32 4 32 4Z"
                fill="url(#dropGrad)"
              />
              <defs>
                <linearGradient id="dropGrad" x1="32" y1="4" x2="32" y2="62" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#90d8ff" />
                  <stop offset="1" stopColor="#1a8cff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Brand name */}
        <p
          className="text-brand-blue font-bold tracking-[0.25em] uppercase text-sm mb-3"
          style={{ textShadow: "0 0 20px rgba(26,140,255,0.6)" }}
        >
          Mobile Detailing · Levittown, NY
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-widest uppercase text-white leading-none mb-2">
          REHMAN
        </h1>
        <h2 className="text-2xl sm:text-3xl font-light tracking-[0.4em] uppercase mb-4"
          style={{ color: "rgba(255,255,255,0.7)" }}>
          AUTO CARE
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Professional mobile detailing — we come to you. Starting at <span className="text-brand-blue font-semibold">$60</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-base py-4 px-10 text-lg">
            DM to Book
          </Link>
          <Link
            href="/#services"
            className="text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200"
            style={{ border: "1px solid rgba(26,140,255,0.4)", background: "rgba(26,140,255,0.08)" }}
          >
            View Services
          </Link>
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          {["Mobile Service", "Levittown, NY", "We Come To You", "Starting at $60"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#071526] to-transparent" />
    </section>
  );
}
