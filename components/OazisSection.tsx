import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";

const highlights = [
  {
    icon: "car" as const,
    title: "Transferts aéroport",
    text: "Accueil à l'arrivée et dépose au départ, sans stress de dernière minute."
  },
  {
    icon: "headset" as const,
    title: "Chauffeur dédié",
    text: "Un conducteur ponctuel et attentif pour vos trajets sur place."
  },
  {
    icon: "shield" as const,
    title: "Véhicules soignés",
    text: "Des berlines propres et confortables, adaptées aux familles et aux groupes."
  }
];

export function OazisSection() {
  return (
    <section className="bg-ca-cream py-20">
      <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-ca-mist bg-ca-blue shadow-soft">
            <Image
              src="/images/people/dame-voyageuse.jpg"
              alt="Voyageuse élégante avec sa valise dans un aéroport"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ca-blue/45 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-44 overflow-hidden rounded-3xl border-4 border-ca-cream shadow-card sm:block">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/people/voiture-blanche.jpg"
                alt="Berline blanche pour les transferts"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
            Oazis · Location &amp; transferts
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
            Voyagez l'esprit léger, du terminal à votre destination.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ca-ink/78">
            Avec Oazis, Comores Airways prolonge l'accompagnement sur place :
            accueil à l'aéroport, location de véhicule avec chauffeur et
            transferts, pour que chaque arrivée soit simple et sereine.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-ca-mist bg-white p-5 shadow-card"
              >
                <Icon name={item.icon} className="h-7 w-7 text-ca-blue" />
                <p className="mt-3 font-bold text-ca-blue">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-ca-ink/72">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/location-voiture" variant="green">
              Découvrir Oazis
            </ButtonLink>
            <ButtonLink href="/reservation" variant="outline">
              Demander un transfert
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
