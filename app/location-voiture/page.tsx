import { Icon } from "@/components/Icon";
import { OAZIS } from "@/lib/site-data";

export const metadata = {
  title: "Location de voiture avec chauffeur (VTC) – Oazis-Moroni",
  description:
    "Oazis-Moroni (Comores Airways) : location de voiture avec chauffeur privé / VTC aux Comores. Transferts aéroport Hahaya, hôtels, événements, longues distances. Disponible 7j/7."
};

export default function LocationVoiturePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-oazis-brown text-oazis-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(201,162,39,0.35),transparent_26rem)]" />
        <div className="site-container relative grid gap-8 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-oazis-gold/40 bg-oazis-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-oazis-sand">
              <Icon name="car" className="h-4 w-4" />
              {OAZIS.name} · {OAZIS.parent}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              {OAZIS.headline}
            </h1>
            <p className="mt-4 text-lg font-semibold italic text-oazis-sand">
              {OAZIS.tagline} — à votre service depuis {OAZIS.since}.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-oazis-cream/85">
              {OAZIS.intro}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={OAZIS.links.tel}
                className="inline-flex items-center justify-center rounded-2xl bg-oazis-gold px-5 py-3 text-sm font-extrabold text-oazis-brown shadow-card transition hover:bg-oazis-sand"
              >
                Appeler {OAZIS.phoneDisplay}
              </a>
              <a
                href={OAZIS.links.whatsapp}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-oazis-cream/30 bg-white/8 px-5 py-3 text-sm font-extrabold text-oazis-cream transition hover:bg-white/16"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Réserver sur WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-4xl border border-oazis-cream/15 bg-white/5 p-7">
            <div className="flex flex-wrap items-center gap-2">
              {OAZIS.welcome.map((word) => (
                <span
                  key={word}
                  className="rounded-full bg-oazis-gold/15 px-3 py-1 text-sm font-bold text-oazis-sand"
                >
                  {word}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xl font-semibold italic text-white">
              « {OAZIS.slogan} »
            </p>
            <div className="mt-6 grid gap-3 text-sm">
              <p className="flex items-center gap-3 text-oazis-cream/90">
                <Icon name="check" className="h-5 w-5 text-oazis-sand" />
                {OAZIS.availability}
              </p>
              <p className="flex items-center gap-3 text-oazis-cream/90">
                <Icon name="map" className="h-5 w-5 text-oazis-sand" />
                {OAZIS.location}
              </p>
              <a
                href={OAZIS.links.mailto}
                className="flex items-center gap-3 break-all text-oazis-cream/90 hover:text-white"
              >
                <Icon name="mail" className="h-5 w-5 text-oazis-sand" />
                {OAZIS.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-20">
        <p className="font-semibold uppercase tracking-[0.22em] text-oazis-gold">
          Tous vos trajets
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-oazis-brown md:text-4xl">
          Un chauffeur pour chacun de vos déplacements
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OAZIS.services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-oazis-gold/25 bg-oazis-cream p-6 shadow-card"
            >
              <Icon name={service.icon} className="h-9 w-9 text-oazis-gold" />
              <p className="mt-4 text-lg font-bold text-oazis-brown">
                {service.title}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-oazis-cream py-20">
        <div className="site-container">
          <p className="font-semibold uppercase tracking-[0.22em] text-oazis-gold">
            Ses formations
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-oazis-brown md:text-4xl">
            Des chauffeurs formés et professionnels
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OAZIS.formations.map((formation) => (
              <article
                key={formation.title}
                className="rounded-3xl border border-oazis-gold/25 bg-white p-6 shadow-card"
              >
                <Icon name={formation.icon} className="h-9 w-9 text-oazis-gold" />
                <h3 className="mt-4 text-lg font-bold text-oazis-brown">
                  {formation.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-oazis-coffee">
                  {formation.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-oazis-brown py-16 text-oazis-cream">
        <div className="site-container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {OAZIS.values.map((value) => (
              <span
                key={value.label}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em]"
              >
                <Icon name={value.icon} className="h-5 w-5 text-oazis-sand" />
                {value.label}
              </span>
            ))}
          </div>
          <p className="mt-8 text-center text-xl font-semibold italic text-white">
            « {OAZIS.slogan} »
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={OAZIS.links.tel}
              className="inline-flex items-center justify-center rounded-2xl bg-oazis-gold px-6 py-3 text-sm font-extrabold text-oazis-brown shadow-card transition hover:bg-oazis-sand"
            >
              Réservez dès maintenant
            </a>
            <a
              href={OAZIS.links.whatsapp}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-oazis-cream/30 bg-white/8 px-6 py-3 text-sm font-extrabold text-oazis-cream transition hover:bg-white/16"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
