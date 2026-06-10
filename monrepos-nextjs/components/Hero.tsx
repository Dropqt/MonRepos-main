import Link from "next/link";
import Wordmark from "@/components/brand/Wordmark";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden text-center">
      <img
        src="/assets/slikeVile/01.jpg"
        alt="Vila Mon Repos u Sokobanji"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* vignette - placeholder treatment until the reference screenshot */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/35 via-espresso/45 to-espresso/80" />

      <div className="relative z-10 px-5 py-24">
        <Wordmark
          stacked
          className="text-[clamp(3.5rem,11vw,7rem)] leading-[0.88] text-[#fdf8ee] drop-shadow-[0_2px_20px_rgba(20,14,8,0.45)]"
        />
        <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.38em] text-[#e7d6b2]">
          Est. 1931 · Sokobanja
        </p>
        <p className="mx-auto mt-3 max-w-xl font-serif text-2xl italic text-[#f4ead6] md:text-[26px]">
          Smeštaj sa hranom u srcu Sokobanje
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/kontakt" className="btn btn-primary">
            Rezervišite boravak
          </Link>
          <Link href="/galerija" className="btn btn-light">
            Pogledajte galeriju
          </Link>
        </div>
      </div>
    </section>
  );
}
