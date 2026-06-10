import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Galerija",
  description:
    "Galerija vile Mon Repos u Sokobanji - fotografije soba, enterijera i prostora našeg smeštaja sa hranom.",
  alternates: { canonical: "/galerija" },
};

export default function GalerijaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Vila u slici"
        title="Galerija"
        subtitle="Enterijer, sobe i prostori vile Mon Repos."
      />
      <Gallery />
    </div>
  );
}
