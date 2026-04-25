import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rehman Auto Care | Mobile Detailing – Levittown, NY",
  description:
    "Premium mobile car detailing in Levittown, NY. We come to you. Exterior, interior, full detail, and deep detail packages starting at $60.",
  keywords: "mobile detailing, car detailing, Levittown NY, auto care, exterior detail, interior detail",
  openGraph: {
    title: "Rehman Auto Care | Mobile Detailing",
    description: "We come to you. Professional mobile detailing in Levittown, NY.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
