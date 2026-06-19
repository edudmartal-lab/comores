"use client";

import { FormEvent, useState } from "react";
import { CONTACT } from "@/lib/site-data";
import { isFormDeliveryEnabled, openMailto, submitForm } from "@/lib/forms";

const inputClass =
  "w-full rounded-2xl border border-ca-mist bg-white px-4 py-3 text-ca-ink outline-none transition placeholder:text-ca-ink/40 focus:border-ca-turquoise focus:ring-4 focus:ring-ca-turquoise/15";

type Status = "idle" | "sending" | "success" | "mailto";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
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

    setStatus("sending");
    const delivered = await submitForm({
      subject,
      from_name: name || "Visiteur du site",
      replyto: email,
      name,
      phone,
      email,
      message
    });

    if (delivered) {
      setStatus("success");
      form.reset();
      return;
    }

    // Repli : ouverture de la messagerie avec un email prérempli.
    openMailto(CONTACT.email, subject, body);
    setStatus("mailto");
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
        {isFormDeliveryEnabled
          ? "Remplissez le formulaire : votre message nous est envoyé directement."
          : "Le bouton ouvre votre messagerie avec un email prérempli."}
      </p>

      {/* Anti-spam (honeypot Web3Forms) : laissé vide par les humains. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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
        disabled={status === "sending"}
        className="mt-6 inline-flex rounded-2xl bg-ca-blue px-6 py-3 text-sm font-extrabold text-white shadow-card transition hover:bg-ca-blue/92 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ca-turquoise/40 disabled:opacity-60"
      >
        {status === "sending"
          ? "Envoi…"
          : isFormDeliveryEnabled
            ? "Envoyer mon message"
            : "Préparer mon email"}
      </button>
      {status === "success" ? (
        <p className="mt-4 text-sm font-semibold text-ca-green">
          Merci, votre message a bien été envoyé. Nous vous répondrons au plus
          vite.
        </p>
      ) : null}
      {status === "mailto" ? (
        <p className="mt-4 text-sm font-semibold text-ca-green">
          Votre messagerie s'ouvre avec le message prérempli.
        </p>
      ) : null}
    </form>
  );
}
