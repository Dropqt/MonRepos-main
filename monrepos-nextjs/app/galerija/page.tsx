import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Galerija",
  description: "Pogledajte fotografije vile Mon Repos - enterijer, sobe i prostori u Sokobanji.",
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
