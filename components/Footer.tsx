import Link from "next/link";
import { FlightCurves } from "@/components/FlightCurves";
import { Logo } from "@/components/Logo";
import { COORDINATES, CONTACT_LINKS, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ca-ink text-white">
      <FlightCurves className="absolute -top-12 left-0 h-28 w-full opacity-35" />
      <div className="site-container relative grid gap-10 py-14 md:grid-cols-[1.1fr_0.7fr_0.9fr]">
        <div>
          <Logo invert />
          <p className="mt-5 max-w-md leading-7 text-white/72">
            Transport aérien et services voyages, en partenariat avec les
            agences de voyages : Comores Airways accompagne vos trajets entre
            la France, les Comores et l'international avec clarté, sérieux et
            proximité.
          </p>
        </div>
        <nav aria-label="Navigation de pied de page">
          <p className="mb-4 font-extrabold">Pages</p>
          <div className="grid gap-3 text-sm text-white/72">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <div>
          <p className="mb-4 font-extrabold">Contact</p>
          <div className="grid gap-2 text-sm text-white/72">
            {COORDINATES.addresses.map((address) => (
              <p key={address.label}>
                {address.label} : {address.value}
              </p>
            ))}
            {COORDINATES.phones.map((phone) => (
              <a
                key={phone.tel}
                href={`tel:${phone.tel}`}
                className="hover:text-white"
              >
                {phone.label} : {phone.display}
              </a>
            ))}
            {COORDINATES.emails.map((email) => (
              <a
                key={email.value}
                href={`mailto:${email.value}`}
                className="break-all hover:text-white"
              >
                {email.label} : {email.value}
              </a>
            ))}
            <a href={CONTACT_LINKS.whatsapp} className="hover:text-white">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="site-container flex flex-col gap-2 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Comores Airways. Tous droits réservés.</p>
          <p>
            Site conçu par <span className="font-semibold text-white/75">Diego</span> ✈️ pour Comores Airways.
          </p>
        </div>
      </div>
    </footer>
  );
}
