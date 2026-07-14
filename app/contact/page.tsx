import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { ContactPanel } from "@/components/ContactPanel";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { COORDINATES, CONTACT_LINKS } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Comores Airways par téléphone, email ou WhatsApp."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Un contact direct pour préparer votre voyage."
        subtitle="Appelez, écrivez ou envoyez une demande : nous vous répondons rapidement."
        image="/images/destinations/comores-plage.jpg"
        imageAlt="Plage et lagon aux Comores"
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
            Téléphone et email
          </h2>
          <p className="mt-2 text-ca-ink/70">
            Contactez-nous directement par téléphone, email ou WhatsApp.
          </p>

          <div className="mt-8 space-y-6">
            <article className="rounded-3xl border border-ca-mist bg-ca-cream p-5">
              <div className="space-y-3">
                {COORDINATES.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="flex items-center gap-3 font-semibold text-ca-blue"
                  >
                    <Icon name="phone" className="h-5 w-5 shrink-0 text-ca-turquoise" />
                    <span>
                      <span className="block text-xs font-medium text-ca-ink/60">
                        {phone.label}
                      </span>
                      {phone.display}
                    </span>
                  </a>
                ))}
                {COORDINATES.emails.map((email) => (
                  <a
                    key={email.value}
                    href={`mailto:${email.value}`}
                    className="flex items-center gap-3 break-all font-semibold text-ca-blue"
                  >
                    <Icon name="mail" className="h-5 w-5 shrink-0 text-ca-green" />
                    <span>
                      <span className="block text-xs font-medium text-ca-ink/60">
                        {email.label}
                      </span>
                      {email.value}
                    </span>
                  </a>
                ))}
                <a
                  href={CONTACT_LINKS.whatsapp}
                  className="flex items-center gap-3 font-semibold text-ca-green"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </article>

            {COORDINATES.addresses.map((address) => (
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
