import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { CONTACT_LINKS } from "@/lib/site-data";

export const metadata = {
  title: "Omra & Hajj",
  description:
    "Accompagnement sobre, clair et humain pour les voyages Omra & Hajj avec Comores Airways."
};

export default function OmraHajjPage() {
  return (
    <>
      <PageHero
        eyebrow="Omra & Hajj"
        title="Un accompagnement sérieux, clair et respectueux."
        subtitle="Comores Airways vous accompagne dans l'organisation de vos voyages Omra & Hajj avec sérieux, clarté et attention humaine."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/reservation" variant="green">
            Demander un devis
          </ButtonLink>
          <ButtonLink href={CONTACT_LINKS.whatsapp} variant="outlineLight">
            WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      <section className="site-container py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              icon: "users",
              title: "Accompagnement",
              text: "Un interlocuteur vous aide à clarifier votre demande, vos dates, votre départ et les besoins de chaque voyageur."
            },
            {
              icon: "plane",
              title: "Organisation du voyage",
              text: "Les propositions peuvent porter sur les vols, l'hébergement, les transferts et les étapes du déplacement, selon les possibilités confirmées."
            },
            {
              icon: "file",
              title: "Conseils pratiques",
              text: "Vous êtes orienté sur les informations utiles à préparer avant le départ, avec un discours simple et prudent."
            },
            {
              icon: "mail",
              title: "Demande de devis",
              text: "Chaque demande fait l'objet d'un échange dédié afin de vous proposer une réponse adaptée à votre situation."
            }
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-4xl border border-ca-mist bg-white p-8 shadow-card"
            >
              <Icon
                name={item.icon}
                className="h-11 w-11 rounded-2xl bg-ca-cream p-2 text-ca-blue"
              />
              <h2 className="mt-6 text-2xl font-extrabold text-ca-blue">
                {item.title}
              </h2>
              <p className="mt-4 leading-8 text-ca-ink/76">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
              Sobriété
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
              Une préparation qui mérite du temps et de l'écoute.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ca-ink/78">
              Les voyages Omra & Hajj demandent attention, organisation et
              transparence. Le site vous permet de prendre contact facilement ;
              les détails sont ensuite confirmés directement avec Comores
              Airways.
            </p>
          </div>
          <div className="rounded-4xl border border-ca-mist bg-ca-cream p-8 shadow-card">
            <h3 className="text-2xl font-extrabold text-ca-blue">
              Préparer votre demande
            </h3>
            <ul className="mt-6 space-y-4 text-ca-ink/78">
              <li>Nombre de voyageurs</li>
              <li>Ville de départ souhaitée</li>
              <li>Période envisagée</li>
              <li>Besoin d'hébergement ou de transferts</li>
            </ul>
            <ButtonLink href="/reservation" variant="green" className="mt-8">
              Envoyer une demande
            </ButtonLink>
          </div>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
