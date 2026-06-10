import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Cenovnik",
  description:
    "Cenovnik vile Mon Repos u Sokobanji - puni pansion sa domaćom hranom, popusti za decu i načini plaćanja.",
  alternates: { canonical: "/cenovnik" },
};

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
      <span>{children}</span>
    </li>
  );
}

export default function CenovnikPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Cene i plaćanje"
        title="Cenovnik"
        subtitle="Puni pansion uz domaću hranu - jednostavno i pošteno."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        {/* main price */}
        <div className="panel overflow-hidden">
          <div className="grid md:grid-cols-[1.05fr_1fr]">
            <div className="flex flex-col items-center justify-center bg-espresso p-10 text-center text-parchment">
              <p className="uplabel text-[11px] text-parchment/60">Puni pansion</p>
              <p className="mt-3 font-display text-6xl font-extrabold leading-none text-parchment">
                3.500
                <span className="ml-2 text-2xl font-normal text-parchment/70">din</span>
              </p>
              <p className="mt-3 text-sm text-parchment/70">doručak · ručak · večera</p>
            </div>
            <div className="flex flex-col justify-center p-10">
              <h2 className="text-3xl">Sve što vam treba</h2>
              <p className="mt-3 leading-relaxed text-cocoa">
                U ovom periodu cena punog pansiona iznosi 3.500 din. Kontaktirajte nas
                radi dogovora i rezervacije termina.
              </p>
              <Link href="/kontakt" className="btn btn-primary mt-6 self-start">
                Rezervišite boravak
              </Link>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="panel p-8">
            <h3 className="text-2xl">Popusti za decu</h3>
            <ul className="mt-5 space-y-3 text-cocoa">
              <Item>Do 3 godine ne plaćaju pansion</Item>
              <Item>
                3-7 godina u posebnom ležaju plaćaju <b className="text-espresso">50%</b>
              </Item>
              <Item>
                7-12 godina u posebnom ležaju plaćaju <b className="text-espresso">70%</b>
              </Item>
            </ul>
          </div>

          <div className="panel p-8">
            <h3 className="text-2xl">Mogućnosti plaćanja</h3>
            <ul className="mt-5 space-y-3 text-cocoa">
              <Item>Odloženo plaćanje</Item>
              <Item>Plaćanje preko vaučera (uz doplatu)</Item>
              <Item>PIO fond</Item>
              <Item>Čekovi građana</Item>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
