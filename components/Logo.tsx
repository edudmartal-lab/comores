type LogoProps = {
  className?: string;
  invert?: boolean;
};

export function Logo({ className = "", invert = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 82 54"
        className="h-12 w-[74px] shrink-0"
        aria-hidden="true"
      >
        <path
          d="M29.5 7.2C18.1 7.9 8.8 16.8 8.8 27.6c0 11 9.6 19.9 21.2 20.4-6.4-3.6-10.5-10.2-10.5-17.6 0-8.9 5.7-16.9 14.1-20.2l-4.1-3Z"
          fill="#0B8F66"
        />
        <path
          d="M42.6 7.2h10.2l18 39.6H59.5l-3.1-7.6H39.2l-3.1 7.6H25.3L42.6 7.2Zm10.1 23.4-4.8-11.8-4.9 11.8h9.7Z"
          fill="#0D47A1"
        />
        <path
          d="M17.5 34.8c16.4-9.7 34.5-12.5 55.7-7.2-16.4 1.1-31.7 5.3-47.5 13.2l-8.2-6Z"
          fill="#0B8F66"
        />
        <path
          d="M21 35.1c14.8-7.5 30.4-9.7 48.8-6"
          stroke="#F7F7F2"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="m35.2 32.1 1.4 2.8 3.1.4-2.2 2.1.5 3.1-2.8-1.5-2.7 1.5.5-3.1-2.2-2.1 3-.4 1.4-2.8ZM48.3 29.2l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.2-2.3 1.2.4-2.6-1.9-1.8 2.7-.4 1.1-2.4ZM59.4 28.7l1 2 2.2.4-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.4 1-2Z"
          fill="#F7F7F2"
        />
      </svg>
      <div className="leading-none">
        <p
          className={`text-xl font-extrabold tracking-[0.02em] ${
            invert ? "text-white" : "text-ca-blue"
          }`}
        >
          COMORES AIRWAYS
        </p>
        <p
          className={`mt-1 text-sm font-medium ${
            invert ? "text-white/72" : "text-ca-green"
          }`}
        >
          Relier les Comores au monde
        </p>
      </div>
    </div>
  );
}
