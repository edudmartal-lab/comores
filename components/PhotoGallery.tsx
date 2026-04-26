import Image from "next/image";
import { comoresPhotos } from "@/lib/site-data";

export function PhotoGallery() {
  return (
    <section className="bg-white py-20">
      <div className="site-container">
        <div className="mb-10 max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.22em] text-ca-green">
            Comores
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ca-blue md:text-4xl">
            Des paysages qui rappellent l'attachement au pays.
          </h2>
          <p className="mt-4 leading-8 text-ca-ink/74">
            Ces visuels mettent en avant l'océan Indien, les reliefs et le
            Karthala, dans une approche sobre et chaleureuse.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {comoresPhotos.map((photo) => (
            <figure
              key={photo.title}
              className="group overflow-hidden rounded-4xl border border-ca-mist bg-ca-cream shadow-card"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ca-blue/64 to-transparent" />
              </div>
              <figcaption className="p-5 text-sm font-extrabold text-ca-blue">
                {photo.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
