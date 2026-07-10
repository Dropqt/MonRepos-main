import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons/StickyButtons";
import AnalyticsListener from "@/components/AnalyticsListener";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://monrepossokobanja.com"),
  title: {
    default: "Mon Repos - Smeštaj sa hranom u Sokobanji",
    template: "%s - Mon Repos Sokobanja",
  },
  description:
    "Vila Mon Repos - porodični smeštaj sa domaćom hranom u srcu Sokobanje. Puni pansion, mir i zelenilo, tradicija od 1931. Rezervišite odmor u Sokobanji.",
  keywords: [
    "smeštaj Sokobanja",
    "vila Sokobanja",
    "smeštaj sa hranom Sokobanja",
    "puni pansion Sokobanja",
    "prenoćište Sokobanja",
    "odmor u Sokobanji",
    "Mon Repos Sokobanja",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: { google: "qSdjVFC7G6CHbXZvmBB0IBXSgKuay6piL0AAHM3FtVM" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/other/LogoVila.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/other/LogoVilaL.png",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://monrepossokobanja.com",
    siteName: "Mon Repos Sokobanja",
    title: "Vila Mon Repos - Smeštaj sa hranom u Sokobanji",
    description:
      "Porodični smeštaj sa domaćom hranom u srcu Sokobanje. Puni pansion, tradicija od 1931.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Vila Mon Repos, Sokobanja" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vila Mon Repos - Smeštaj sa hranom u Sokobanji",
    description: "Porodični smeštaj sa domaćom hranom u srcu Sokobanje.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://monrepossokobanja.com/#lodging",
  name: "Vila Mon Repos",
  description:
    "Porodični smeštaj sa domaćom hranom u srcu Sokobanje. Puni pansion, tradicija od 1931.",
  url: "https://monrepossokobanja.com",
  telephone: ["+381 63 7792-177", "+381 63 631-292", "+381 18 884-760"],
  email: "danica.blagojevic@gmail.com",
  foundingDate: "1931",
  priceRange: "3700 RSD",
  currenciesAccepted: "RSD",
  image: [
    "https://monrepossokobanja.com/og-image.jpg",
    "https://monrepossokobanja.com/assets/slikeVile/01.jpg",
  ],
  hasMap: "https://maps.app.goo.gl/1F8g3jhwDSTuhRfY8",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vrelska 4a",
    addressLocality: "Sokobanja",
    postalCode: "18230",
    addressCountry: "RS",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.6422413, longitude: 21.8701449 },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Domaća hrana (puni pansion)", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bašta i terasa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Blizina centra (3 minuta)", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr" className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col bg-parchment text-espresso">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyButtons />
        <AnalyticsListener />
      </body>
      <GoogleAnalytics gaId="G-YDXJRZLJ3F" />
    </html>
  );
}
