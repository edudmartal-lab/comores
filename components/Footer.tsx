import Link from "next/link";
import { FlightCurves } from "@/components/FlightCurves";
import { Logo } from "@/components/Logo";
import { CONTACTS, navItems, getContactLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ca-ink text-white">
      <FlightCurves className="absolute -top-12 left-0 h-28 w-full opacity-35" />
      <div className="site-container relative grid gap-10 py-14 md:grid-cols-[1.1fr_0.7fr_0.9fr]">
        <div>
          <Logo invert />
          <p className="mt-5 max-w-md leading-7 text-white/72">
            Comores Airways accompagne vos voyages entre la France, les Comores
            et l'international avec clarté, sérieux et proximité.
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
          <div className="grid gap-4 text-sm text-white/72">
            {CONTACTS.map((contact) => {
              const links = getContactLinks(contact);

              return (
                <div key={contact.key} className="grid gap-2">
                  <p className="font-bold text-white">{contact.name}</p>
                  <a href={links.tel} className="hover:text-white">
                    {contact.phoneDisplay}
                  </a>
                  <a href={links.mailto} className="break-all hover:text-white">
                    {contact.email}
                  </a>
                  <a href={links.whatsapp} className="hover:text-white">
                    WhatsApp
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="site-container flex flex-col gap-2 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Comores Airways. Tous droits réservés.</p>
          <p>Site vitrine statique, sans paiement ni réservation automatique.</p>
        </div>
      </div>
    </footer>
  );
}
