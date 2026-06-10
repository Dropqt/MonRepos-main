import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte vilu Mon Repos za rezervacije i informacije - Vrelska 4a, 18230 Sokobanja.",
};

export default function KontaktPage() {
  return (
    <div>
      <PageHeader eyebrow="Tu smo za vas" title="Kontakt" subtitle="Vrelska 4a · 18230 Sokobanja" />
      <Contact />
    </div>
  );
}
