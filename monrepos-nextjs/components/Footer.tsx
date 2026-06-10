import Link from "next/link";
import Wordmark from "@/components/brand/Wordmark";
import Hawk from "@/components/brand/Hawk";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-espresso text-parchment">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* brand */}
          <div>
            <Wordmark stacked className="text-[40px] leading-[0.9] text-parchment" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-parchment/70">
              Porodični smeštaj sa domaćom hranom u srcu Sokobanje. Tradicija, mir i
              topao doček - od 1931.
            </p>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-parchment/55">
              Kontakt
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-parchment/90">
              <li>Vrelska 4a, 18230 Sokobanja</li>
              <li>
                Danica:{" "}
                <a className="transition-colors hover:text-accent" href="tel:0637792177">
                  063/7792-177
                </a>
              </li>
              <li>
                Mileta:{" "}
                <a className="transition-colors hover:text-accent" href="tel:063631292">
                  063/631-292
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-accent" href="tel:018884760">
                  018/884-760
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-accent"
                  href="mailto:danica.blagojevic@gmail.com"
                >
                  danica.blagojevic@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-parchment/55">
              Stranice
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-parchment/90">
              <li>
                <Link className="transition-colors hover:text-accent" href="/">
                  Početna
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-accent" href="/galerija">
                  Galerija
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-accent" href="/cenovnik">
                  Cenovnik
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-accent" href="/kontakt">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <span className="h-px flex-1 bg-parchment/15" />
          <Hawk className="h-5 w-10 text-sage" />
          <span className="h-px flex-1 bg-parchment/15" />
        </div>

        <p className="mt-6 text-center text-xs tracking-wide text-parchment/55">
          © {year} Mon Repos · Sokobanja · Sva prava zadržana
        </p>
      </div>
    </footer>
  );
}
