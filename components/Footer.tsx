import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-blue/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Rehman Auto Care. Levittown, NY.</p>
        <div className="flex gap-6">
          <Link href="/#services" className="hover:text-brand-blue transition-colors">Services</Link>
          <Link href="/#addons" className="hover:text-brand-blue transition-colors">Add-Ons</Link>
          <Link href="/contact" className="hover:text-brand-blue transition-colors">Book Now</Link>
          <Link
            href="https://www.instagram.com/rehmanautocare/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-blue transition-colors"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
