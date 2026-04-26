import { ButtonLink } from "@/components/ButtonLink";
import { DestinationCard } from "@/components/DestinationCard";
import { PageHero } from "@/components/PageHero";
import { destinations } from "@/lib/site-data";

export const metadata = {
  title: "Destinations",
  description:
    "Destinations accompagnées par Comores Airways : France, Comores, Mayotte, La Réunion, Tanzanie, Zanzibar, Nairobi, Dubaï, Istanbul et Djeddah."
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="France, Comores, océan Indien et grands hubs internationaux."
        subtitle="Les destinations présentées indiquent les demandes les plus fréquentes. Les itinéraires, compagnies et disponibilités sont confirmés après échange."
      >
        <ButtonLink href="/reservation" variant="green">
          Demander un itinéraire
        </ButtonLink>
      </PageHero>

      <section className="site-container py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              destination={destination}
              detailed
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-container rounded-4xl border border-ca-mist bg-ca-cream p-8 shadow-card md:p-10">
          <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
            Important
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ca-blue">
            Une destination se confirme toujours avec vous.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-ca-ink/78">
            Comores Airways ne publie pas de prix inventés ni de fausse
            réservation immédiate. L'objectif est de comprendre votre besoin,
            vérifier les possibilités disponibles, puis vous orienter clairement.
          </p>
        </div>
      </section>
    </>
  );
}
