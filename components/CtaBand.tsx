import Link from "next/link";
import Hawk from "@/components/brand/Hawk";

export default function CtaBand() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <Hawk className="mx-auto h-7 w-14 text-sage" />
        <h2 className="mt-5 text-4xl">Vaš odmor počinje ovde</h2>
        <p className="mx-auto mt-3 max-w-xl text-cocoa">
          Rezervišite boravak u vili Mon Repos - domaća hrana, mir i topao doček već vas čekaju.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/kontakt" className="btn btn-primary">
            Rezervišite boravak
          </Link>
          <Link href="/cenovnik" className="btn btn-secondary">
            Pogledajte cenovnik
          </Link>
        </div>
      </div>
    </section>
  );
}
