type PlaneBannerProps = {
  className?: string;
};

// Petit avion qui tracte une banderole « COMORES AIRWAYS ».
// Utilisé en haut de la page d'accueil pour rappeler la marque.
export function PlaneBanner({ className = "" }: PlaneBannerProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="animate-float-plane text-white" aria-hidden="true">
        <svg viewBox="0 0 48 48" className="h-9 w-9" fill="currentColor">
          <path d="M44 24c0 1.2-1 2.1-2.2 2.1l-11.6.1-7.7 13c-.3.5-.8.8-1.4.8h-2.5c-.7 0-1.2-.7-1-1.4l3.1-12.3-8.6.1-2.7 3.6c-.2.3-.6.5-1 .5H6.6c-.6 0-1.1-.6-.9-1.2l1.8-5.7L5.7 18c-.2-.6.3-1.2.9-1.2h1.8c.4 0 .8.2 1 .5l2.7 3.6 8.6.1L17.6 8.7c-.2-.7.3-1.4 1-1.4h2.5c.6 0 1.1.3 1.4.8l7.7 13 11.6.1c1.2 0 2.2.9 2.2 2.1Z" />
        </svg>
      </span>
      <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-soft backdrop-blur">
        Comores Airways
      </span>
    </div>
  );
}
