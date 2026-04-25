import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Detail | Rehman Auto Care",
  description: "DM us on Instagram to book your mobile detail in Levittown, NY.",
};

const services = [
  { name: "Exterior Detail", price: "$60–80" },
  { name: "Interior Detail", price: "$70–100" },
  { name: "Full Detail", price: "$160–180", popular: true },
  { name: "Deep Detail", price: "$180–220" },
];

const addons = [
  { name: "Heavy stain removal", price: "+ $20–50" },
  { name: "Pet hair removal", price: "+ $30" },
  { name: "Extra dirty fee", price: "+ $20–50" },
  { name: "Express maintenance wash", price: "+ $60", note: "Returning clients only" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Book a Detail</h1>
          <p className="text-slate-400 text-lg">
            DM us on Instagram — we&apos;ll confirm your appointment and answer any questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Instagram CTA */}
          <div className="card flex flex-col items-center text-center gap-6 py-10">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>

            <div>
              <p className="text-white font-bold text-2xl mb-1">@rehmanautocare</p>
              <p className="text-slate-400 text-sm">Instagram DM is the fastest way to book</p>
            </div>

            <Link
              href="https://ig.me/m/rehmanautocare"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center text-base py-3"
            >
              Open DM on Instagram
            </Link>

            <Link
              href="https://www.instagram.com/rehmanautocare/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue text-sm hover:underline"
            >
              View profile →
            </Link>

            <div className="w-full border-t border-brand-blue/20 pt-4 text-slate-500 text-sm space-y-1">
              <p>📍 Levittown, NY and surrounding areas</p>
              <p>🚗 Mobile service — we come to you</p>
            </div>
          </div>

          {/* Right: Quick reference pricing */}
          <div className="flex flex-col gap-4">
            <div className="card">
              <h2 className="text-white font-bold text-lg mb-4">Services</h2>
              <ul className="space-y-3">
                {services.map((svc) => (
                  <li key={svc.name} className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm flex items-center gap-2">
                      {svc.name}
                      {svc.popular && (
                        <span className="bg-brand-blue/20 text-brand-blue text-xs px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                    </span>
                    <span className="price-tag text-base">{svc.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="text-white font-bold text-lg mb-4">Add-Ons</h2>
              <ul className="space-y-3">
                {addons.map((addon) => (
                  <li key={addon.name} className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-slate-300 text-sm">{addon.name}</span>
                      {addon.note && (
                        <p className="text-slate-500 text-xs">{addon.note}</p>
                      )}
                    </div>
                    <span className="price-tag text-sm shrink-0">{addon.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-slate-500 text-xs text-center">
              All prices vary based on vehicle size and condition. Final price confirmed at booking.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/" className="text-slate-400 hover:text-brand-blue text-sm transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
