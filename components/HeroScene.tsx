import { ButtonLink } from "@/components/ButtonLink";
import { FlightCurves } from "@/components/FlightCurves";
import { Icon } from "@/components/Icon";
import { PlaneBanner } from "@/components/PlaneBanner";
import { services } from "@/lib/site-data";

// Bande de nuages dupliquée pour un défilement infini et sans couture.
function CloudBand({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <div className="flex w-[200%]">
        {[0, 1].map((i) => (
          <svg
            key={i}
            viewBox="0 0 600 120"
            className="h-full w-1/2"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g fill="#ffffff" opacity="0.7">
              <ellipse cx="80" cy="80" rx="90" ry="34" />
              <ellipse cx="160" cy="64" rx="70" ry="30" />
              <ellipse cx="300" cy="86" rx="120" ry="40" />
              <ellipse cx="440" cy="66" rx="80" ry="30" />
              <ellipse cx="540" cy="84" rx="100" ry="36" />
            </g>
          </svg>
        ))}
      </div>
    </div>
  );
}

export function HeroScene() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden text-white">
      {/* 1. Ciel dégradé (base, visible tant qu'aucune photo n'est définie) */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#06122e_0%,#0D47A1_38%,#1f74c0_62%,#00B6C7_82%,#7fe3d6_100%)]" />

      {/* 2. Couche photo (vide pour l'instant, prête à recevoir une vraie image) */}
      <div className="hero-photo absolute inset-0" />

      {/* 3. Halo du soleil près de l'horizon */}
      <div className="absolute right-[12%] top-[46%] h-72 w-72 animate-sun-glow rounded-full bg-[radial-gradient(circle,rgba(255,236,178,0.95),rgba(255,176,92,0.35)_45%,transparent_70%)] blur-md" />

      {/* 4. Nuages qui dérivent (deux profondeurs) */}
      <CloudBand className="left-0 top-[14%] h-24 animate-drift-slower opacity-50" />
      <CloudBand className="left-0 top-[30%] h-28 animate-drift-slow opacity-70" />

      {/* 5. Avion qui traverse le ciel */}
      <div className="absolute top-[24%] left-0 animate-fly-across text-white/95 drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
        <svg viewBox="0 0 48 48" className="h-10 w-10" fill="currentColor" aria-hidden="true">
          <path d="M44 24c0 1.2-1 2.1-2.2 2.1l-11.6.1-7.7 13c-.3.5-.8.8-1.4.8h-2.5c-.7 0-1.2-.7-1-1.4l3.1-12.3-8.6.1-2.7 3.6c-.2.3-.6.5-1 .5H6.6c-.6 0-1.1-.6-.9-1.2l1.8-5.7L5.7 18c-.2-.6.3-1.2.9-1.2h1.8c.4 0 .8.2 1 .5l2.7 3.6 8.6.1L17.6 8.7c-.2-.7.3-1.4 1-1.4h2.5c.6 0 1.1.3 1.4.8l7.7 13 11.6.1c1.2 0 2.2.9 2.2 2.1Z" />
        </svg>
      </div>

      {/* 6. Silhouette d'île / Karthala à l'horizon */}
      <svg
        className="absolute bottom-0 left-0 h-[34%] w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 320V232c120-12 210-70 330-86 90-12 150 22 250 14 70-6 110-58 200-92 80-30 150-14 240 16 96 32 170 8 270-22v260Z"
          fill="#062b2a"
          opacity="0.55"
        />
        <path
          d="M0 320V268c150-26 250 18 400 6 120-10 180-66 320-66 120 0 180 56 320 52 120-4 200-44 400-30v60Z"
          fill="#04201f"
          opacity="0.8"
        />
      </svg>

      {/* 7. Voile pour le contraste du texte */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,12,32,0.62)_0%,rgba(3,12,32,0.28)_45%,transparent_78%)]" />
      <div className="absolute inset-0 bg-warm-grid bg-[length:42px_42px] opacity-[0.12]" />

      {/* Contenu */}
      <div className="site-container relative grid items-center gap-12 py-24 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-soft-reveal">
          <PlaneBanner className="mb-5" />
          <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
            Agence de voyage et services aériens
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Voyagez entre la France,{" "}
            <span className="animate-shimmer text-shimmer">les Comores</span> et
            l&apos;international.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Billets d&apos;avion, séjours sur mesure, Omra &amp; Hajj, assistance
            voyage, cargo et services aériens : un accompagnement humain et fiable
            à chaque étape.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/reservation" variant="green">
              Réserver
            </ButtonLink>
            <ButtonLink href="/reservation#devis" variant="light">
              Demander un devis
            </ButtonLink>
            <ButtonLink href="/contact" variant="outlineLight">
              Nous contacter
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-white/88 sm:grid-cols-3">
            {["France", "Comores", "International"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/18 bg-white/10 px-4 py-3 backdrop-blur"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-ca-turquoise" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[480px] animate-float-y rounded-[2rem] border border-white/20 bg-white/12 p-4 shadow-soft backdrop-blur-md">
          <div className="rounded-[1.5rem] bg-ca-cream/95 p-5 text-ca-ink">
            <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-ca-turquoise via-ca-blue to-ca-green p-6 text-white">
              <FlightCurves className="absolute -bottom-12 -right-12 w-72 opacity-80" />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
                Votre voyage
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                Notre accompagnement
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/86">
                Une personne identifiée, des réponses claires, et un suivi
                jusqu&apos;au départ.
              </p>
              <div className="mt-10 inline-flex animate-float-plane rounded-full bg-white px-4 py-3 text-ca-blue shadow-card">
                <Icon name="plane" className="h-7 w-7" />
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-ca-mist bg-white p-4"
                >
                  <Icon name={service.icon} className="mb-3 h-7 w-7 text-ca-blue" />
                  <p className="text-sm font-bold text-ca-blue">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FlightCurves className="absolute -bottom-9 left-0 right-0 h-28 w-full text-white" />
    </section>
  );
}
