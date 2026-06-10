import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";

// "Otvori u Google Mapama" link - official Mon Repos share link.
const MAPS_LINK = "https://maps.app.goo.gl/1F8g3jhwDSTuhRfY8";

// Google Maps embed (points to the Mon Repos place).
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2848639507465!2d21.87014486955873!3d43.64224130103251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47543a4d14cd059f%3A0x53ec847bca4f5f11!2sMonrepos!5e0!3m2!1ssr!2srs!4v1705347358715!5m2!1ssr!2srs";

function Row({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-espresso">
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sand text-accent">
        {icon}
      </span>
      <span>{children}</span>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        {/* left: contact details + map */}
        <div>
          <p className="eyebrow">Pišite nam</p>
          <h2 className="text-4xl">Kontaktirajte nas</h2>
          <p className="mt-3 max-w-md text-cocoa">
            Za rezervacije i sva pitanja - pozovite nas ili pošaljite poruku. Rado ćemo
            vam pomoći da isplanirate boravak.
          </p>

          <div className="mt-7 space-y-3">
            <Row icon={<FaMapMarkerAlt />}>Vrelska 4a, 18230 Sokobanja</Row>
            <Row icon={<FaPhone />}>
              Danica -{" "}
              <a className="transition-colors hover:text-accent" href="tel:0637792177">
                063/7792-177
              </a>
            </Row>
            <Row icon={<FaPhone />}>
              Mileta -{" "}
              <a className="transition-colors hover:text-accent" href="tel:063631292">
                063/631-292
              </a>
            </Row>
            <Row icon={<FaPhone />}>
              <a className="transition-colors hover:text-accent" href="tel:018884760">
                018/884-760
              </a>{" "}
              ·{" "}
              <a className="transition-colors hover:text-accent" href="tel:018884740">
                018/884-740
              </a>
            </Row>
            <Row icon={<FaEnvelope />}>
              <a
                className="transition-colors hover:text-accent"
                href="mailto:danica.blagojevic@gmail.com"
              >
                danica.blagojevic@gmail.com
              </a>
            </Row>
          </div>

          {/* map */}
          <div className="mt-8">
            <div className="overflow-hidden rounded-2xl border border-line shadow-[0_18px_40px_-22px_rgba(42,33,24,0.55)]">
              <iframe
                src={MAPS_EMBED}
                title="Mon Repos - Vrelska 4a, Sokobanja"
                className="block h-[380px] w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              className="btn btn-secondary mt-5 w-full justify-center"
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Otvori u Google Mapama
            </a>
            <p className="mt-4 text-center font-serif text-sm italic text-cocoa">
              Samo tri minuta hoda od centra Sokobanje.
            </p>
          </div>
        </div>

        {/* right: form */}
        <div className="panel p-6 md:p-8 lg:sticky lg:top-24">
          <h3 className="text-2xl">Pošaljite poruku</h3>
          <p className="mt-1 text-sm text-cocoa">
            Popunite formu i javićemo vam se u najkraćem roku.
          </p>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
