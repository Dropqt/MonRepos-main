import type { Metadata } from "next";
import { Roboto, Montserrat, Dancing_Script, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons/StickyButtons";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const ubuntu = Ubuntu({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Mon Repos Sokobanja",
  description: "Villa Mon Repos - Idealno mesto za vaš odmor u Sokobanji",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/assets/other/LogoVila.svg', type: 'image/svg+xml' },
    ],
    apple: '/assets/other/LogoVilaL.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${roboto.variable} ${montserrat.variable} ${dancingScript.variable} ${ubuntu.variable} app-container roboto-medium flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
        <StickyButtons />
      </body>
    </html>
  );
}
