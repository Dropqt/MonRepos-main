import Hawk from "@/components/brand/Hawk";

type SplitProps = {
  eyebrow: string;
  title: string;
  text: string;
  img: string;
  alt: string;
  reverse?: boolean;
};

function Split({ eyebrow, title, text, img, alt, reverse = false }: SplitProps) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <figure className={`frame ${reverse ? "md:order-2" : ""}`}>
        <img src={img} alt={alt} className="h-[340px] w-full" loading="lazy" />
      </figure>
      <div className={reverse ? "md:order-1" : ""}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="text-4xl">{title}</h2>
        <p className="mt-5 leading-relaxed text-cocoa">{text}</p>
      </div>
    </div>
  );
}

export default function Story() {
  return (
    <>
      <section className="mx-auto max-w-6xl space-y-20 px-5 py-20 md:space-y-28 md:py-28">
        <Split
          eyebrow="Dobrodošli"
          title="Tradicija i radoznalost"
          img="/assets/slikeVile/03.jpg"
          alt="Vila Mon Repos u Sokobanji"
          text="Dobrodošli u Mon Repos, gde se tradicija i radoznalost stapaju u jedinstveno iskustvo. Na ovom mestu je naš poznati nobelovac Ivo Andrić 1942. godine zadovoljavao svoju radoznalost istražujući netaknute predele Sokobanje. Iskusite atmosferu prošlosti i otkrijte nasleđe koje zrači iz svakog ugla naše vile."
        />
        <Split
          reverse
          eyebrow="Domaća kuhinja"
          title="Smeštaj sa hranom"
          img="/assets/slikeVile/enterijer-15.jpg"
          alt="Trpezarija vile Mon Repos"
          text="Kod nas ne dobijate samo sobu - dobijate i sto. Doručak, ručak i večeru spremamo domaći, od svežih i lokalnih namirnica, baš kao nekada. Puni pansion znači da o svemu mislimo mi, a vi samo uživate u ukusima Sokobanje."
        />
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="text-center">
            <Hawk className="mx-auto h-6 w-12 text-sage" />
            <p className="eyebrow mt-4">Doživljaj</p>
            <h2 className="text-4xl">Mir, priroda i banjski ritam</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <article className="panel p-8">
              <h3 className="text-2xl">Aktivni odmor</h3>
              <p className="mt-3 leading-relaxed text-cocoa">
                Da li žudite za oazom elegancije i opuštanja, gde se prošlost susreće sa
                savremenim udobnostima? Smešteno usred netaknute prirode, idealno za
                ljubitelje aktivnog odmora - vila Mon Repos je vaše utočište. Istražujte
                staze i biciklističke puteve i otkrivajte tajanstvene pejzaže.
              </p>
            </article>
            <article className="panel p-8">
              <h3 className="text-2xl">Banjski mir</h3>
              <p className="mt-3 leading-relaxed text-cocoa">
                Posle šetnje kroz slikovitu banju, predah pronađite u mirnom kutku uz
                prijatnu kafu. Udaljenost od centra je samo tri minuta hoda, uz laku
                dostupnost lokalnih atrakcija i restorana. Opustite se, povežite se sa
                prirodom i uživajte u mirnom ritmu banjskog života.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
