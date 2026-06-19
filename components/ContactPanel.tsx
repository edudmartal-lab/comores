import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { COORDINATES, CONTACT_LINKS } from "@/lib/site-data";

type ContactPanelProps = {
  compact?: boolean;
};

export function ContactPanel({ compact = false }: ContactPanelProps) {
  return (
    <section className={compact ? "bg-ca-cream py-14" : "bg-ca-blue py-20 text-white"}>
      <div className="site-container">
        <div
          className={`relative overflow-hidden rounded-4xl border p-7 shadow-soft md:p-10 ${
            compact
              ? "border-ca-mist bg-white text-ca-ink"
              : "border-white/18 bg-white/10 text-white backdrop-blur"
          }`}
        >
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-ca-turquoise/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p
                className={`font-semibold uppercase tracking-[0.22em] ${
                  compact ? "text-ca-green" : "text-white/72"
                }`}
              >
                Contact direct
              </p>
              <h2
                className={`mt-3 text-3xl font-extrabold tracking-[-0.03em] md:text-4xl ${
                  compact ? "text-ca-blue" : "text-white"
                }`}
              >
                Un projet de voyage ? Parlons-en simplement.
              </h2>
              <p
                className={`mt-4 max-w-2xl leading-8 ${
                  compact ? "text-ca-ink/72" : "text-white/78"
                }`}
              >
                Une équipe à votre écoute pour clarifier votre besoin et trouver
                la réponse la plus adaptée. Appelez ou écrivez-nous directement.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={CONTACT_LINKS.tel} variant={compact ? "blue" : "light"}>
                  Appeler
                </ButtonLink>
                <ButtonLink href={CONTACT_LINKS.whatsapp} variant="green">
                  WhatsApp
                </ButtonLink>
                <ButtonLink href={CONTACT_LINKS.mailto} variant={compact ? "outline" : "outlineLight"}>
                  Écrire
                </ButtonLink>
              </div>
            </div>
            <div
              className={`rounded-3xl border p-6 ${
                compact
                  ? "border-ca-mist bg-ca-cream"
                  : "border-white/18 bg-white text-ca-ink"
              }`}
            >
              <p className="font-extrabold text-ca-blue">Coordonnées</p>
              <div className="mt-6 space-y-4 text-sm">
                {COORDINATES.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    className="flex gap-3 font-semibold text-ca-blue"
                    href={`tel:${phone.tel}`}
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
                    className="flex gap-3 break-all font-semibold text-ca-blue"
                    href={`mailto:${email.value}`}
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
                  className="flex gap-3 font-semibold text-ca-green"
                  href={CONTACT_LINKS.whatsapp}
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
