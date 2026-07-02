import { Icon } from "@/components/Icon";
import { CONTACT_LINKS } from "@/lib/site-data";

// Bouton d'appel à l'action flottant : accès direct à WhatsApp depuis
// n'importe quelle page, sans masquer le contenu.
export function WhatsAppFab() {
  return (
    <a
      href={CONTACT_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire à Comores Airways sur WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-ca-green px-4 py-3 font-extrabold text-white shadow-soft transition hover:bg-ca-green/92 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ca-turquoise/40 sm:bottom-7 sm:right-7"
    >
      <Icon name="whatsapp" className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">WhatsApp</span>
    </a>
  );
}
