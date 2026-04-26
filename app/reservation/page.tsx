import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { ReservationForm } from "@/components/ReservationForm";
import { CONTACT_LINKS } from "@/lib/site-data";

export const metadata = {
  title: "Réservation",
  description:
    "Envoyez une demande de billet, devis ou accompagnement voyage à Comores Airways."
};

export default function ReservationPage() {
  return (
    <>
      <PageHero
        eyebrow="Demande de voyage"
        title="Une demande simple, puis un échange humain."
        subtitle="Décrivez votre trajet, vos dates et vos besoins. Comores Airways vous répond avec une proposition adaptée, sans fausse réservation instantanée."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={CONTACT_LINKS.tel} variant="green">
            Appeler
          </ButtonLink>
          <ButtonLink href={CONTACT_LINKS.whatsapp} variant="outlineLight">
            Écrire sur WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      <section id="devis" className="site-container grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
            Réservation
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
            Envoyer ma demande
          </h2>
          <p className="mt-5 text-lg leading-8 text-ca-ink/78">
            Le formulaire prépare un email avec vos informations. Vous pouvez le
            relire avant l'envoi depuis votre messagerie.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              "Demande non engageante",
              "Réponse personnalisée selon les disponibilités",
              "Possibilité d'échanger par téléphone ou WhatsApp"
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-ca-mist bg-white p-5 font-semibold text-ca-blue shadow-card"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <ReservationForm />
      </section>
    </>
  );
}
