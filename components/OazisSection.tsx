import Link from "next/link";
import { Icon } from "@/components/Icon";
import { OAZIS } from "@/lib/site-data";

// Bande « Oazis-Moroni » (location de voiture avec chauffeur / VTC).
// Présence volontairement secondaire (~10%) sous la marque Comores Airways,
// avec l'identité marron / doré du dépliant officiel.
export function OazisSection() {
  return (
    <section className="bg-ca-cream py-20">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-4xl bg-oazis-brown p-7 text-oazis-cream shadow-soft md:p-10">
          <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full bg-oazis-gold/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-oazis-gold/40 bg-oazis-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-oazis-sand">
                <Icon name="car" className="h-4 w-4" />
                {OAZIS.name} · {OAZIS.parent}
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-white md:text-4xl">
                {OAZIS.headline}
              </h2>
              <p className="mt-2 font-semibold italic text-oazis-sand">
                {OAZIS.tagline} — depuis {OAZIS.since}.
              </p>
              <p className="mt-4 max-w-xl leading-7 text-oazis-cream/85">
                {OAZIS.intro}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {OAZIS.services.map((service) => (
                  <li
                    key={service.title}
                    className="inline-flex items-center gap-2 rounded-full border border-oazis-cream/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-oazis-cream/90"
                  >
                    <Icon name={service.icon} className="h-4 w-4 text-oazis-sand" />
                    {service.title}
                  </li>
                ))}
              </ul>

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
                  WhatsApp
                </a>
                <Link
                  href="/location-voiture"
                  className="inline-flex items-center justify-center rounded-2xl border border-oazis-cream/30 px-5 py-3 text-sm font-extrabold text-oazis-cream transition hover:bg-white/10"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-oazis-cream/15 bg-white/5 p-6">
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
              <p className="mt-6 text-lg font-semibold italic text-white">
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
        </div>
      </div>
    </section>
  );
}
