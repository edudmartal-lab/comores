import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import type { destinations } from "@/lib/site-data";

type Destination = (typeof destinations)[number];

type DestinationCardProps = {
  destination: Destination;
  detailed?: boolean;
};

export function DestinationCard({
  destination,
  detailed = false
}: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-4xl border border-ca-mist bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div
        className={`relative overflow-hidden bg-ca-blue ${
          detailed ? "h-56" : "h-72"
        }`}
      >
        <Image
          src={destination.image}
          alt={`Illustration de la destination ${destination.name}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ca-blue/88 via-ca-blue/12 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <p className="text-2xl font-extrabold tracking-[-0.03em]">
            {destination.name}
          </p>
          <p className="mt-2 text-sm text-white/82">{destination.subtitle}</p>
        </div>
      </div>
      {detailed ? (
        <div className="p-6">
          <p className="text-sm leading-6 text-ca-ink/74">
            {destination.description}
          </p>
          <ButtonLink href="/reservation" variant="outline" className="mt-5 w-full">
            Demander cette destination
          </ButtonLink>
        </div>
      ) : null}
    </article>
  );
}
