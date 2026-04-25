"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur border-b border-brand-blue/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-widest uppercase text-white">
              Rehman <span className="text-brand-blue">Auto Care</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/#services" className="hover:text-brand-blue transition-colors">Services</Link>
            <Link href="/#addons" className="hover:text-brand-blue transition-colors">Add-Ons</Link>
            <Link href="/contact" className="btn-primary text-sm py-2 px-5">Book Now</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-brand-blue/20 py-4 flex flex-col gap-4 text-sm font-medium">
            <Link href="/#services" onClick={() => setOpen(false)} className="text-slate-300 hover:text-brand-blue transition-colors">Services</Link>
            <Link href="/#addons" onClick={() => setOpen(false)} className="text-slate-300 hover:text-brand-blue transition-colors">Add-Ons</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary text-center">Book Now</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
