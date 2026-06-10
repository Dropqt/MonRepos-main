import Link from "next/link";

const shots = [
  { src: "/assets/slikeVile/sobe-4.jpg", label: "Sobe" },
  { src: "/assets/slikeVile/sobe-9.jpg", label: "Udobnost" },
  { src: "/assets/slikeVile/enterijer-5.jpg", label: "Enterijer" },
  { src: "/assets/slikeVile/terasa-3.jpg", label: "Terasa" },
];

export default function RoomsPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Smeštaj</p>
          <h2 className="text-4xl">Naše sobe i prostori</h2>
        </div>
        <Link href="/galerija" className="anim-link">
          Cela galerija →
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shots.map((s) => (
          <Link
            key={s.src}
            href="/galerija"
            className="group relative overflow-hidden rounded-xl border border-line"
          >
            <img
              src={s.src}
              alt={s.label}
              loading="lazy"
              className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/75 to-transparent p-4 text-sm font-semibold uppercase tracking-[0.14em] text-parchment">
              {s.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
