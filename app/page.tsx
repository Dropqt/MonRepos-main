import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import RoomsPreview from "@/components/RoomsPreview";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: {
    absolute: "Vila Mon Repos Sokobanja - Smeštaj sa domaćom hranom i puni pansion",
  },
  description:
    "Udoban smeštaj sa domaćom hranom u centru Sokobanje. Puni pansion, mir i zelenilo, tradicija od 1931. Rezervišite svoj odmor u vili Mon Repos.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <RoomsPreview />
      <CtaBand />
    </>
  );
}
