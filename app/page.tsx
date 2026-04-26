import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { DestinationCard } from "@/components/DestinationCard";
import { FlightCurves } from "@/components/FlightCurves";
import { Icon } from "@/components/Icon";
import { ServiceCard } from "@/components/ServiceCard";
import { CONTACT_LINKS, destinations, services, trustItems } from "@/lib/site-data";

const featuredDestinations = destinations.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ca-blue text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,182,199,0.55),transparent_28rem),linear-gradient(90deg,rgba(7,31,74,0.92),rgba(13,71,161,0.72),rgba(11,143,102,0.42))]" />
        <div className="absolute inset-0 bg-warm-grid bg-[length:38px_38px] opacity-20" />
        <div className="site-container relative grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="animate-soft-reveal">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              Agence de voyage et services aériens
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-[-0.04em] md:text-6xl">
              Voyagez entre la France, les Comores et l'international, avec un
              accompagnement humain et fiable.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88">
              Billets d'avion, séjours sur mesure, Omra & Hajj, assistance
              voyage, cargo et services aériens : Comores Airways vous
              accompagne à chaque étape de votre voyage.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/reservation" variant="green">
                Réserver
              </ButtonLink>
              <ButtonLink href="/reservation#devis" variant="light">
                Demander un devis
              </ButtonLink>
              <ButtonLink href="/contact" variant="outlineLight">
                Nous contacter
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-3 text-sm text-white/86 sm:grid-cols-3">
              {["France", "Comores", "International"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/18 bg-white/10 px-4 py-3 backdrop-blur"
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-ca-turquoise" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] animate-soft-reveal rounded-[2rem] border border-white/20 bg-white/12 p-4 shadow-soft backdrop-blur">
            <div className="rounded-[1.5rem] bg-ca-cream p-5 text-ca-ink">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-ca-turquoise via-ca-blue to-ca-green p-6 text-white">
                <FlightCurves className="absolute -bottom-12 -right-12 w-72 opacity-80" />
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
                  Votre voyage
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Notre accompagnement
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/86">
                  Une personne identifiée, des réponses claires, et un suivi
                  jusqu'au départ.
                </p>
                <div className="mt-10 inline-flex animate-float-plane rounded-full bg-white px-4 py-3 text-ca-blue shadow-card">
                  <Icon name="plane" className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.slice(0, 4).map((service) => (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-ca-mist bg-white p-4"
                  >
                    <Icon
                      name={service.icon}
                      className="mb-3 h-7 w-7 text-ca-blue"
                    />
                    <p className="text-sm font-bold text-ca-blue">
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <FlightCurves className="absolute -bottom-9 left-0 right-0 h-28 w-full text-white" />
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

      <ContactPanel />
    </>
  );
}
