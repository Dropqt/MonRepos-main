"use client";

import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function StickyButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base =
    "flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1";

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Na vrh stranice"
          className={`${base} bg-espresso text-parchment`}
        >
          <FaArrowUp />
        </button>
      )}
      <a
        href="tel:0637792177"
        aria-label="Pozovite nas"
        className={`${base} bg-cream text-espresso ring-1 ring-line`}
      >
        <FaPhone />
      </a>
      <a
        href="mailto:danica.blagojevic@gmail.com"
        aria-label="Pošaljite nam email"
        className={`${base} bg-accent text-white`}
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
