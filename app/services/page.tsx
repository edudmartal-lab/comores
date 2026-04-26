import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services",
  description:
    "Billetterie, séjours, Omra & Hajj, assistance, cargo, charter, assurance et formalités avec Comores Airways."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Des services de voyage pensés pour être compris, suivis et rassurants."
        subtitle="Comores Airways accompagne les familles, voyageurs, étudiants, pèlerins et professionnels dans leurs démarches de voyage et services aériens."
      >
        <ButtonLink href="/reservation" variant="green">
          Demander un devis
        </ButtonLink>
      </PageHero>

      <section className="site-container py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="site-container grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Clarté",
              text: "Vous recevez des informations compréhensibles, sans jargon ni promesse automatique."
            },
            {
              title: "Suivi",
              text: "Chaque demande est traitée avec attention, de la première question jusqu'au voyage."
            },
            {
              title: "Souplesse",
              text: "Les propositions sont ajustées selon le trajet, les dates, les voyageurs et les contraintes."
            }
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-4xl border border-ca-mist bg-ca-cream p-8 shadow-card"
            >
              <h2 className="text-2xl font-extrabold text-ca-blue">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-ca-ink/75">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
