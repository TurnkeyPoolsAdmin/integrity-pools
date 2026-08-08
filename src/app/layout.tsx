import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Integrity Pools & Hardscapes | Custom Pools in Southern California",
  description:
    "Custom pools, spas, hardscaping, and outdoor living spaces in Menifee, Murrieta, Temecula, Corona, and Riverside. 30+ years experience. Free consultations.",
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
    <html lang="en" className={`h-full antialiased ${jakarta.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
