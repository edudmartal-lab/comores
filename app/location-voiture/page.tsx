import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Location de voiture & VTC",
  description:
    "Oazis par Comores Airways : location de véhicule avec chauffeur, transferts aéroport et accueil personnalisé à Moroni et en France."
};

const steps = [
  {
    icon: "headset" as const,
    title: "1. Vous nous dites tout",
    text: "Vol, horaires, nombre de passagers et bagages : on prépare le trajet à l'avance."
  },
  {
    icon: "plane" as const,
    title: "2. Accueil à l'aéroport",
    text: "Votre chauffeur vous attend à l'arrivée, avec un véhicule prêt et identifié."
  },
  {
    icon: "car" as const,
    title: "3. Transfert serein",
    text: "Dépose à votre hôtel, votre logement ou votre rendez-vous, en toute tranquillité."
  }
];

const features = [
  {
    image: "/images/people/voiture-blanche.jpg",
    alt: "Berline blanche soignée pour les transferts",
    title: "Berlines confortables",
    text: "Des véhicules récents et propres, type berline, adaptés aux familles, aux groupes et aux trajets professionnels."
  },
  {
    image: "/images/people/chauffeur.jpg",
    alt: "Chauffeur professionnel au volant",
    title: "Chauffeurs attentifs",
    text: "Des conducteurs ponctuels qui connaissent le terrain et veillent à votre confort à chaque étape."
  },
  {
    image: "/images/people/aeroport-terminal.jpg",
    alt: "Terminal d'aéroport lumineux",
    title: "Transferts aéroport",
    text: "Accueil à l'arrivée et dépose au départ, coordonnés avec vos horaires de vol."
  }
];

export default function LocationVoiturePage() {
  return (
    <>
      <PageHero
        eyebrow="Oazis · Location & VTC"
        title="Location de voiture avec chauffeur et transferts aéroport."
        subtitle="Oazis prolonge l'accompagnement de Comores Airways sur place : un accueil chaleureux, un véhicule prêt et un chauffeur dédié, de Moroni à la France."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/reservation" variant="green">
            Demander un transfert
          </ButtonLink>
          <ButtonLink href="/contact" variant="outlineLight">
            Nous contacter
          </ButtonLink>
        </div>
      </PageHero>

      <section className="site-container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-ca-mist bg-ca-blue shadow-soft">
              <Image
                src="/images/people/dame-voyageuse.jpg"
                alt="Voyageuse élégante avec sa valise dans un aéroport"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ca-blue/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-48 overflow-hidden rounded-3xl border-4 border-white shadow-card sm:block">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/people/dame-voiture.jpg"
                  alt="Voyageuse avec sa valise à côté du véhicule"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
              Un service pensé pour vous
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
              De l'aéroport à votre destination, sans imprévu.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ca-ink/78">
              Que vous voyagiez en famille, seul ou en groupe, Oazis organise vos
              déplacements à l'arrivée comme au départ. Vous êtes attendu, guidé
              et accompagné, pour profiter pleinement de votre séjour.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Prise en charge à l'aéroport",
                "Chauffeur dédié et ponctuel",
                "Véhicules propres et confortables",
                "Tarifs clairs, confirmés à l'avance"
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-ca-mist bg-white p-4 text-sm font-semibold text-ca-blue shadow-card"
                >
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-ca-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="site-container">
          <div className="mb-10 max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
              Nos prestations
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
              Un véhicule, un chauffeur, un accueil.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group overflow-hidden rounded-4xl border border-ca-mist bg-ca-cream shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xl font-extrabold text-ca-blue">
                    {feature.title}
                  </p>
                  <p className="mt-3 leading-7 text-ca-ink/74">{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-4xl border border-ca-mist bg-white p-6 shadow-card"
            >
              <Icon name={step.icon} className="h-8 w-8 text-ca-green" />
              <p className="mt-4 text-lg font-extrabold text-ca-blue">
                {step.title}
              </p>
              <p className="mt-2 leading-7 text-ca-ink/74">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
