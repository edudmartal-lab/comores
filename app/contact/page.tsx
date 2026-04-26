import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { ContactPanel } from "@/components/ContactPanel";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { CONTACT, CONTACT_LINKS } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Nadhrat Soilihi, Comores Airways, par téléphone, email ou WhatsApp."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Un contact direct pour préparer votre voyage."
        subtitle="Appelez, écrivez ou envoyez une demande : Comores Airways vous répond avec une approche claire et humaine."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={CONTACT_LINKS.tel} variant="green">
            Appeler
          </ButtonLink>
          <ButtonLink href={CONTACT_LINKS.mailto} variant="outlineLight">
            Écrire
          </ButtonLink>
          <ButtonLink href={CONTACT_LINKS.whatsapp} variant="outlineLight">
            WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      <section className="site-container grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-4xl border border-ca-mist bg-white p-7 shadow-card">
          <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
            Coordonnées
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ca-blue">
            {CONTACT.name}
          </h2>
          <p className="mt-2 text-ca-ink/70">{CONTACT.role}</p>

          <div className="mt-8 space-y-5">
            <a
              href={CONTACT_LINKS.tel}
              className="flex items-center gap-4 rounded-2xl border border-ca-mist p-4 transition hover:border-ca-turquoise hover:bg-ca-cream"
            >
              <Icon name="phone" className="h-8 w-8 text-ca-blue" />
              <span>
                <span className="block text-sm text-ca-ink/60">Téléphone</span>
                <strong className="text-ca-blue">{CONTACT.phoneDisplay}</strong>
              </span>
            </a>
            <a
              href={CONTACT_LINKS.mailto}
              className="flex items-center gap-4 rounded-2xl border border-ca-mist p-4 transition hover:border-ca-turquoise hover:bg-ca-cream"
            >
              <Icon name="mail" className="h-8 w-8 text-ca-green" />
              <span>
                <span className="block text-sm text-ca-ink/60">Email</span>
                <strong className="break-all text-ca-blue">
                  {CONTACT.email}
                </strong>
              </span>
            </a>
            {CONTACT.addresses.map((address) => (
              <div
                key={address.label}
                className="flex items-start gap-4 rounded-2xl border border-ca-mist p-4"
              >
                <Icon name="map" className="mt-1 h-8 w-8 text-ca-turquoise" />
                <span>
                  <span className="block text-sm font-semibold text-ca-green">
                    {address.label}
                  </span>
                  <strong className="text-ca-blue">{address.value}</strong>
                </span>
              </div>
            ))}
          </div>
        </aside>

        <ContactForm />
      </section>

      <ContactPanel compact />
    </>
  );
}
