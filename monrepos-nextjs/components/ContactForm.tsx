"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    emailjs
      .sendForm("gmail", "template_w511hpp", form, "gbYozUxtsoCwsPsHo")
      .then(
        () => {
          setOk(true);
          setStateMessage("Poruka je poslata! Javićemo vam se uskoro.");
          setIsSubmitting(false);
          form.reset();
          setTimeout(() => setStateMessage(null), 6000);
        },
        () => {
          setOk(false);
          setStateMessage("Došlo je do greške. Pokušajte ponovo ili nas pozovite.");
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 6000);
        }
      );
  };

  const field =
    "w-full rounded-lg border border-line bg-parchment px-4 py-3 text-espresso outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15";
  const label = "mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-cocoa";

  return (
    <form onSubmit={sendEmail} className="space-y-4">
      <div>
        <label className={label} htmlFor="to_name">
          Ime i prezime
        </label>
        <input id="to_name" name="to_name" type="text" required placeholder="Vaše ime" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="from_name">
          E-mail
        </label>
        <input id="from_name" name="from_name" type="email" required placeholder="ime@email.com" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="message">
          Poruka
        </label>
        <textarea id="message" name="message" placeholder="Želim da rezervišem boravak..." className={`${field} h-40 resize-none`} />
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full justify-center disabled:opacity-60">
        {isSubmitting ? "Slanje..." : "Pošalji poruku"}
      </button>
      {stateMessage && (
        <p className={`text-center text-sm font-semibold ${ok ? "text-sage" : "text-accent"}`}>{stateMessage}</p>
      )}
    </form>
  );
}
