import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { DestinationCard } from "@/components/DestinationCard";
import { FlightCurves } from "@/components/FlightCurves";
import { Icon } from "@/components/Icon";
import { OazisSection } from "@/components/OazisSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { PlaneBanner } from "@/components/PlaneBanner";
import { CONTACT_LINKS, destinations, services, trustItems } from "@/lib/site-data";

const featuredDestinations = destinations.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ca-blue text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster="/images/hero/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Vue aérienne d'un lagon turquoise et d'îles de l'océan Indien"
        >
          <source src="/videos/hero-lagon.webm" type="video/webm" />
          <source src="/videos/hero-lagon.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,31,74,0.72),rgba(13,71,161,0.32)_52%,transparent_78%),linear-gradient(0deg,rgba(7,31,74,0.55),transparent_38%)]" />
        <div className="site-container relative flex min-h-[640px] items-center py-20 lg:py-28">
          <div className="max-w-2xl animate-soft-reveal">
            <PlaneBanner className="mb-6" />
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-[-0.04em] md:text-6xl">
              Voyagez entre la France, les Comores et l'international.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
              Billets, séjours, Omra &amp; Hajj et transferts, avec un
              accompagnement humain.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/reservation" variant="green">
                Réserver
              </ButtonLink>
              <ButtonLink href="/contact" variant="outlineLight">
                Nous contacter
              </ButtonLink>
            </div>
          </div>
        </div>
        <FlightCurves className="absolute -bottom-9 left-0 right-0 h-28 w-full text-white" />
      </section>

      <section className="bg-white py-20">
        <div className="site-container">
          <div className="mb-8 text-center">
            <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
              Découvrir
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
              Les Comores en vidéo
            </h2>
          </div>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-4xl border border-ca-mist shadow-soft">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube-nocookie.com/embed/7yFB90Nl-Ic"
              title="Découvrez les Comores : les îles paradisiaques de l'Afrique de l'Est"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

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
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-center gap-3 rounded-2xl border border-ca-mist bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-ca-turquoise"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ca-cream text-ca-blue">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <p className="text-sm font-bold leading-snug text-ca-blue">
                {service.title}
              </p>
            </div>
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

      <OazisSection />

      <PhotoGallery />

      <ContactPanel />
    </>
  );
}
