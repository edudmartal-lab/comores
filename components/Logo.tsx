import Image from "next/image";

type LogoProps = {
  className?: string;
  invert?: boolean;
};

export function Logo({ className = "", invert = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`inline-flex shrink-0 items-center ${
          invert ? "rounded-2xl bg-white px-2 py-1.5" : ""
        }`}
      >
        <Image
          src="/images/brand/logo-embleme.png"
          alt="Emblème Comores Airways"
          width={259}
          height={179}
          priority
          className="h-9 w-auto md:h-11"
        />
      </span>
      <div className="leading-none">
        <p
          className={`whitespace-nowrap text-base font-extrabold tracking-[0.02em] md:text-xl ${
            invert ? "text-white" : "text-ca-blue"
          }`}
        >
          COMORES AIRWAYS
        </p>
        <p
          className={`mt-1 hidden whitespace-nowrap text-sm font-medium sm:block ${
            invert ? "text-white/72" : "text-ca-green"
          }`}
        >
          Relier les Comores au monde
        </p>
      </div>
    </div>
  );
}
