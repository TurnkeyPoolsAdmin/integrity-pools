import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} | Custom Pool Builder in Temecula & Murrieta, CA`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Custom gunite pools, spas, hardscape and outdoor lighting across Temecula, Murrieta and the Inland Empire. Free site visit, 3D design and an itemized quote.",
  openGraph: {
    title: `${BUSINESS.name}`,
    description:
      "Custom gunite pools, spas, hardscape and outdoor lighting across Temecula, Murrieta and the Inland Empire.",
    type: "website",
    url: BUSINESS.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[2000] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <TopBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              name: BUSINESS.name,
              legalName: BUSINESS.legalName,
              url: BUSINESS.url,
              telephone: BUSINESS.phone,
              founder: { "@type": "Person", name: BUSINESS.ownerFullName },
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.street,
                addressLocality: BUSINESS.city,
                addressRegion: BUSINESS.state,
                postalCode: BUSINESS.zip,
                addressCountry: "US",
              },
              areaServed: BUSINESS.areasServedNames,
              openingHours: "Mo-Fr 08:00-16:00",
            }),
          }}
        />
      </body>
    </html>
  );
}
