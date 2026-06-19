import { ButtonLink } from "@/components/ButtonLink";
import { DestinationCard } from "@/components/DestinationCard";
import { PageHero } from "@/components/PageHero";
import { PhotoGallery } from "@/components/PhotoGallery";
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
        subtitle="Les demandes les plus fréquentes. Itinéraires et disponibilités confirmés après échange."
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

      <PhotoGallery />

      <section className="bg-white py-16">
        <div className="site-container rounded-4xl border border-ca-mist bg-ca-cream p-8 shadow-card md:p-10">
          <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
            Important
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ca-blue">
            Une destination se confirme toujours avec vous.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-ca-ink/78">
            Pas de prix inventés ni de fausse réservation immédiate : nous
            vérifions les possibilités, puis vous orientons clairement.
          </p>
        </div>
      </section>
    </>
  );
}
