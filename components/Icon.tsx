import type { SVGProps } from "react";

export type IconName =
  | "calendar"
  | "car"
  | "check"
  | "cargo"
  | "file"
  | "globe"
  | "headset"
  | "hotel"
  | "luggage"
  | "mail"
  | "map"
  | "mosque"
  | "phone"
  | "plane"
  | "shield"
  | "star"
  | "ticket"
  | "users"
  | "whatsapp";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName | string;
};

export function Icon({ name, className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {renderIcon(name)}
    </svg>
  );
}

function renderIcon(name: IconName | string) {
  switch (name) {
    case "ticket":
      return (
        <>
          <path d="M4 7.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.2a2.3 2.3 0 0 0 0 4.6v2.2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.2a2.3 2.3 0 0 0 0-4.6V7.5Z" />
          <path d="M9 8h6M9 12h4M9 16h6" />
        </>
      );
    case "hotel":
      return (
        <>
          <path d="M4 20V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
          <path d="M16 10h2a2 2 0 0 1 2 2v8M8 8h1M12 8h1M8 12h1M12 12h1M8 16h1M12 16h1M3 20h18" />
        </>
      );
    case "car":
      return (
        <>
          <path d="M5 17h14M7 17v2M17 17v2M6 14l1.4-4.2A2.5 2.5 0 0 1 9.8 8h4.4a2.5 2.5 0 0 1 2.4 1.8L18 14" />
          <path d="M4 14h16v3H4zM7.5 14.5h.1M16.4 14.5h.1" />
        </>
      );
    case "headset":
      return (
        <>
          <path d="M4 13a8 8 0 0 1 16 0" />
          <path d="M4 13v4a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2ZM20 13v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
          <path d="M15 20h-3" />
        </>
      );
    case "mosque":
      return (
        <>
          <path d="M4 20h16M6 20v-7a6 6 0 0 1 12 0v7" />
          <path d="M9 20v-4a3 3 0 0 1 6 0v4M5 11l-1-1 1-1M19 11l1-1-1-1M12 3v3M10 5h4" />
        </>
      );
    case "cargo":
      return (
        <>
          <path d="M3 16h18M5 16V9l7-4 7 4v7M8 16v-5h8v5M9 20h6" />
          <path d="M7 8.5 12 11l5-2.5" />
        </>
      );
    case "shield":
      return (
        <>
          <path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      );
    case "file":
      return (
        <>
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v5h5M9.5 13h5M9.5 17h5" />
        </>
      );
    case "calendar":
      return (
        <>
          <path d="M5 5h14v15H5zM8 3v4M16 3v4M5 10h14" />
          <path d="M8 14h2M13 14h3M8 17h2" />
        </>
      );
    case "luggage":
      return (
        <>
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM9 10v7M15 10v7" />
        </>
      );
    case "users":
      return (
        <>
          <path d="M16 21v-2a4 4 0 0 0-8 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path d="M20 21v-2.2a3.2 3.2 0 0 0-2.4-3.1M16.5 4.4a3.2 3.2 0 0 1 0 6.2" />
        </>
      );
    case "phone":
      return (
        <path d="M7 4h3l1.5 4-2 1.2a11 11 0 0 0 5.3 5.3l1.2-2 4 1.5v3a2 2 0 0 1-2.2 2A15.8 15.8 0 0 1 4 6.2 2 2 0 0 1 7 4Z" />
      );
    case "mail":
      return (
        <>
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </>
      );
    case "map":
      return (
        <>
          <path d="M12 21s7-4.8 7-11a7 7 0 1 0-14 0c0 6.2 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      );
    case "whatsapp":
      return (
        <>
          <path d="M5 20 6.2 16A7.5 7.5 0 1 1 9 18.1L5 20Z" />
          <path d="M9.5 8.5c.3 2.4 2 4.1 4 4.8l1.2-1.1 1.8.8c-.2 1.2-1.1 2-2.4 2-3.2-.2-5.6-2.7-6-5.9 0-1.2.8-2.1 2-2.3l.8 1.7-1.4 1Z" />
        </>
      );
    case "globe":
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21M12 3C9.6 5.4 8.4 8.4 8.4 12S9.6 18.6 12 21" />
        </>
      );
    case "check":
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12.2 2.3 2.3 4.8-5" />
        </>
      );
    case "star":
      return <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />;
    case "plane":
    default:
      return (
        <>
          <path d="M3 12 21 4l-5 16-4.2-7.2L3 12Z" />
          <path d="m21 4-9.2 8.8" />
        </>
      );
  }
}
