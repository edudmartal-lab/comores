import { ButtonLink } from "@/components/ButtonLink";

const YOUTUBE_ID = "7yFB90Nl-Ic";

export function VideoSection() {
  return (
    <section className="bg-ca-blue py-20 text-white">
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-semibold uppercase tracking-[0.22em] text-ca-turquoise">
            En vidéo
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
            Découvrez Comores Airways en images
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/85">
            Prenez quelques instants pour découvrir notre univers, nos
            destinations et notre façon d'accompagner chaque voyageur, de la
            France aux Comores et à l'international.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/reservation" variant="green">
              Réserver
            </ButtonLink>
            <ButtonLink href="/contact" variant="outlineLight">
              Nous contacter
            </ButtonLink>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-4xl border border-white/20 bg-black shadow-soft">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0`}
            title="Comores Airways en vidéo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
