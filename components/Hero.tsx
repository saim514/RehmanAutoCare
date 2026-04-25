import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
        {/* Water drop icon */}
        <div className="flex justify-center mb-6">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 4C32 4 10 26 10 40C10 52.15 20.75 62 32 62C43.25 62 54 52.15 54 40C54 26 32 4 32 4Z"
              fill="url(#dropGrad)"
            />
            <ellipse cx="32" cy="60" rx="18" ry="3" fill="url(#rippleGrad)" opacity="0.5" />
            <defs>
              <linearGradient id="dropGrad" x1="32" y1="4" x2="32" y2="62" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7EC8FF" />
                <stop offset="1" stopColor="#0d6fd4" />
              </linearGradient>
              <linearGradient id="rippleGrad" x1="14" y1="60" x2="50" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1a8cff" stopOpacity="0" />
                <stop offset="0.5" stopColor="#1a8cff" />
                <stop offset="1" stopColor="#1a8cff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider uppercase text-white mb-2">
          Rehman
        </h1>
        <h2 className="text-2xl sm:text-3xl font-light tracking-[0.3em] uppercase text-slate-300 mb-4">
          Auto Care
        </h2>
        <p className="text-brand-blue font-semibold tracking-widest uppercase text-sm mb-2">
          Mobile Detailing
        </p>
        <p className="text-slate-400 text-lg mb-10">
          We come to you — Levittown, NY
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-base py-3 px-8">
            DM to Book
          </Link>
          <Link
            href="/#services"
            className="border border-brand-blue/50 text-white font-semibold px-8 py-3 rounded-full hover:border-brand-blue hover:bg-brand-blue/10 transition-all duration-200"
          >
            View Services
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-navy to-transparent" />
    </section>
  );
}
