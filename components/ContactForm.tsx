"use client";

import { FormEvent, useState } from "react";
import { CONTACT } from "@/lib/site-data";

const inputClass =
  "w-full rounded-2xl border border-ca-mist bg-white px-4 py-3 text-ca-ink outline-none transition placeholder:text-ca-ink/40 focus:border-ca-turquoise focus:ring-4 focus:ring-ca-turquoise/15";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `Contact Comores Airways - ${name || "nouvelle demande"}`;
    const body = [
      "Bonjour,",
      "",
      "Je souhaite contacter Comores Airways.",
      "",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Email : ${email}`,
      "",
      "Message :",
      message,
      "",
      "Merci."
    ].join("\n");

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-4xl border border-ca-mist bg-ca-cream p-6 shadow-card md:p-8"
    >
      <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
        Message
      </p>
      <h2 className="mt-3 text-3xl font-extrabold text-ca-blue">
        Écrire à Comores Airways
      </h2>
      <p className="mt-4 leading-7 text-ca-ink/70">
        Le bouton ouvre votre messagerie avec un email prérempli. Vous gardez la
        main avant l'envoi.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ca-blue">Nom</span>
          <input className={inputClass} name="name" required type="text" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ca-blue">
            Téléphone
          </span>
          <input className={inputClass} name="phone" type="tel" />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-bold text-ca-blue">
            Email
          </span>
          <input className={inputClass} name="email" required type="email" />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-bold text-ca-blue">
            Message
          </span>
          <textarea
            className={`${inputClass} min-h-36 resize-y`}
            name="message"
            required
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex rounded-2xl bg-ca-blue px-6 py-3 text-sm font-extrabold text-white shadow-card transition hover:bg-ca-blue/92 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ca-turquoise/40"
      >
        Préparer mon email
      </button>
      {sent ? (
        <p className="mt-4 text-sm font-semibold text-ca-green">
          Votre messagerie devrait s'ouvrir avec le message prérempli.
        </p>
      ) : null}
    </form>
  );
}
