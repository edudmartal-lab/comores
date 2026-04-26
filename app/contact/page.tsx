import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { ContactPanel } from "@/components/ContactPanel";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { CONTACTS, CONTACT_LINKS, getContactLinks } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Mohamed Said et Nadhrat Soilihi, Comores Airways, par téléphone, email ou WhatsApp."
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
            Direction et accompagnement
          </h2>
          <p className="mt-2 text-ca-ink/70">
            Le directeur est affiché en premier, puis le contact Europe.
          </p>

          <div className="mt-8 space-y-6">
            {CONTACTS.map((contact, index) => {
              const links = getContactLinks(contact);

              return (
                <article
                  key={contact.key}
                  className="rounded-3xl border border-ca-mist bg-ca-cream p-5"
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      name={index === 0 ? "star" : "users"}
                      className="h-9 w-9 text-ca-blue"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold text-ca-blue">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-ca-ink/70">{contact.role}</p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    <a
                      href={links.tel}
                      className="flex items-center gap-3 font-semibold text-ca-blue"
                    >
                      <Icon name="phone" className="h-5 w-5 text-ca-turquoise" />
                      {contact.phoneDisplay}
                    </a>
                    <a
                      href={links.mailto}
                      className="flex items-center gap-3 break-all font-semibold text-ca-blue"
                    >
                      <Icon name="mail" className="h-5 w-5 text-ca-green" />
                      {contact.email}
                    </a>
                    <a
                      href={links.whatsapp}
                      className="flex items-center gap-3 font-semibold text-ca-green"
                    >
                      <Icon name="whatsapp" className="h-5 w-5" />
                      WhatsApp
                    </a>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-ca-ink/68">
                    {contact.note}
                  </p>
                </article>
              );
            })}

            {CONTACTS[0].addresses.map((address) => (
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
