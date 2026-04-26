import type { ReactNode } from "react";
import { FlightCurves } from "@/components/FlightCurves";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ca-blue text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(0,182,199,0.45),transparent_26rem),linear-gradient(120deg,rgba(13,71,161,1),rgba(11,143,102,0.78))]" />
      <div className="absolute inset-0 bg-warm-grid bg-[length:42px_42px] opacity-20" />
      <div className="site-container relative py-20 md:py-24">
        <p className="font-semibold uppercase tracking-[0.24em] text-white/72">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-[-0.04em] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
          {subtitle}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
      <FlightCurves className="absolute -bottom-10 left-0 h-28 w-full opacity-95" />
    </section>
  );
}
