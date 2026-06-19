// Vidéo de présentation embarquée (YouTube). L'iframe s'exécute dans le
// navigateur du visiteur : aucune configuration réseau n'est nécessaire.
export function VideoSection() {
  return (
    <section className="bg-white py-20">
      <div className="site-container">
        <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
          En vidéo
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
          Découvrez les Comores et notre accompagnement
        </h2>
        <div className="mt-8 overflow-hidden rounded-4xl border border-ca-mist shadow-soft">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/7yFB90Nl-Ic"
              title="Comores Airways en vidéo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
