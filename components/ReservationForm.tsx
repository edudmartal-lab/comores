"use client";

import { FormEvent, useState } from "react";
import { CONTACT } from "@/lib/site-data";
import { isFormDeliveryEnabled, openMailto, submitForm } from "@/lib/forms";

const inputClass =
  "w-full rounded-2xl border border-ca-mist bg-white px-4 py-3 text-ca-ink outline-none transition placeholder:text-ca-ink/40 focus:border-ca-turquoise focus:ring-4 focus:ring-ca-turquoise/15";

type Status = "idle" | "sending" | "success" | "mailto";

export function ReservationForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");
    const destination = String(formData.get("destination") ?? "");
    const date = String(formData.get("date") ?? "");
    const travelers = String(formData.get("travelers") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `RÉSERVATION - Demande de voyage - ${
      destination || "destination à préciser"
    }`;
    const body = [
      "Bonjour,",
      "",
      "Je souhaite recevoir une proposition pour un voyage.",
      "",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Email : ${email}`,
      `Destination : ${destination}`,
      `Date souhaitée : ${date}`,
      `Nombre de voyageurs : ${travelers}`,
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
      destination,
      date,
      travelers,
      message
    });

    if (delivered) {
      setStatus("success");
      form.reset();
      return;
    }

    openMailto(CONTACT.email, subject, body);
    setStatus("mailto");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-4xl border border-ca-mist bg-ca-cream p-6 shadow-card md:p-8"
    >
      {/* Anti-spam (honeypot Web3Forms) : laissé vide par les humains. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ca-blue">Nom</span>
          <input className={inputClass} name="name" required type="text" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ca-blue">
            Téléphone
          </span>
          <input className={inputClass} name="phone" required type="tel" />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-bold text-ca-blue">
            Email
          </span>
          <input className={inputClass} name="email" required type="email" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ca-blue">
            Destination
          </span>
          <input
            className={inputClass}
            name="destination"
            placeholder="Comores, Mayotte, Dubaï..."
            required
            type="text"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ca-blue">
            Date souhaitée
          </span>
          <input className={inputClass} name="date" type="date" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ca-blue">
            Nombre de voyageurs
          </span>
          <input
            className={inputClass}
            min="1"
            name="travelers"
            placeholder="1"
            type="number"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-bold text-ca-blue">
            Message
          </span>
          <textarea
            className={`${inputClass} min-h-36 resize-y`}
            name="message"
            placeholder="Ville de départ, retour souhaité, bagages, besoin d'hôtel ou transfert..."
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex rounded-2xl bg-ca-green px-6 py-3 text-sm font-extrabold text-white shadow-card transition hover:bg-ca-green/92 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ca-turquoise/40 disabled:opacity-60"
      >
        {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
      </button>
      {status === "success" ? (
        <p className="mt-4 text-sm font-semibold text-ca-green">
          Merci, votre demande a bien été envoyée. Nous revenons vers vous
          rapidement.
        </p>
      ) : null}
      {status === "mailto" ? (
        <p className="mt-4 text-sm font-semibold text-ca-green">
          Votre messagerie s'ouvre avec la demande préremplie.
        </p>
      ) : null}
      <p className="mt-5 text-sm leading-6 text-ca-ink/62">
        Ce formulaire ne confirme pas une réservation. Les disponibilités,
        tarifs et conditions sont vérifiés après échange.
      </p>
    </form>
  );
}
