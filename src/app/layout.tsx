import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Integrity Pools & Hardscapes | Custom Pools in Southern California",
  description:
    "Custom pools, spas, hardscaping, and outdoor living spaces in Los Angeles, Ventura County, and the Santa Clarita Valley. 30+ years experience. Free consultations.",
  openGraph: {
    title: "Integrity Pools & Hardscapes",
    description: "Your Backyard. Reimagined. Custom pools and outdoor living in Southern California.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
