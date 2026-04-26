import { Icon } from "@/components/Icon";
import type { services } from "@/lib/site-data";

type Service = (typeof services)[number];

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  return (
    <article
      className={`rounded-3xl border border-ca-mist bg-white shadow-card transition hover:-translate-y-1 hover:border-ca-turquoise hover:shadow-soft ${
        compact ? "p-5" : "p-7"
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ca-cream text-ca-blue">
        <Icon name={service.icon} className="h-7 w-7" />
      </div>
      <h3
        className={`mt-5 font-extrabold text-ca-blue ${
          compact ? "text-base" : "text-xl"
        }`}
      >
        {service.title}
      </h3>
      <p
        className={`mt-3 leading-7 text-ca-ink/70 ${
          compact ? "text-sm" : "text-base"
        }`}
      >
        {service.description}
      </p>
    </article>
  );
}
