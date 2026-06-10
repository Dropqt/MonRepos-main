import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons/StickyButtons";

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
    "Vila Mon Repos - porodični smeštaj sa domaćom hranom u srcu Sokobanje. Tradicija od 1931. godine, mir, zelenilo i topao doček.",
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
    siteName: "Mon Repos Sokobanja",
    title: "Mon Repos - Smeštaj sa hranom u Sokobanji",
    description:
      "Porodični smeštaj sa domaćom hranom u srcu Sokobanje. Tradicija od 1931.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Vila Mon Repos",
  description: "Porodični smeštaj sa domaćom hranom u srcu Sokobanje. Tradicija od 1931.",
  url: "https://monrepossokobanja.com",
  telephone: ["+381 63 7792-177", "+381 63 631-292", "+381 18 884-760"],
  email: "danica.blagojevic@gmail.com",
  foundingDate: "1931",
  priceRange: "3500 RSD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vrelska 4a",
    addressLocality: "Sokobanja",
    postalCode: "18230",
    addressCountry: "RS",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.6422413, longitude: 21.8701449 },
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
      </body>
    </html>
  );
}
