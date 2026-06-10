import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontakt i rezervacije - Vila Mon Repos, Vrelska 4a, Sokobanja. Pozovite za smeštaj sa domaćom hranom i puni pansion.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <div>
      <PageHeader eyebrow="Tu smo za vas" title="Kontakt" subtitle="Vrelska 4a · 18230 Sokobanja" />
      <Contact />
    </div>
  );
}
