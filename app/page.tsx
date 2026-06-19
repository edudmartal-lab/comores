import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { DestinationCard } from "@/components/DestinationCard";
import { HeroScene } from "@/components/HeroScene";
import { Icon } from "@/components/Icon";
import { OazisSection } from "@/components/OazisSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ServiceCard } from "@/components/ServiceCard";
import { CONTACT_LINKS, destinations, services, trustItems } from "@/lib/site-data";

const featuredDestinations = destinations.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <HeroScene />

      <section className="site-container py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
              Des solutions simples, claires et accompagnées
            </h2>
          </div>
          <Link
            href="/services"
            className="font-bold text-ca-green hover:text-ca-blue"
          >
            Voir tous les services
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} compact />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
              Confiance
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="mt-5 text-lg leading-8 text-ca-ink/78">
              Comores Airways privilégie une relation directe : vous savez à qui
              vous parlez, ce qui est proposé, et comment votre voyage est suivi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={CONTACT_LINKS.whatsapp} variant="green">
                WhatsApp
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Poser une question
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-ca-mist bg-ca-cream p-5 shadow-card"
              >
                <Icon name="check" className="h-8 w-8 text-ca-green" />
                <p className="mt-4 font-bold text-ca-blue">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
              Destinations
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
              Les destinations les plus demandées
            </h2>
          </div>
          <Link
            href="/destinations"
            className="font-bold text-ca-green hover:text-ca-blue"
          >
            Découvrir les destinations
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredDestinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              destination={destination}
            />
          ))}
        </div>
      </section>

      <PhotoGallery />

      <OazisSection />

      <ContactPanel />
    </>
  );
}
