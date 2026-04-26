import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";
import { CONTACT_LINKS, navItems } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ca-mist/80 bg-white/92 shadow-[0_8px_24px_rgba(20,50,92,0.06)] backdrop-blur">
      <div className="site-container py-3">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="Accueil Comores Airways">
            <Logo />
          </Link>

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-6 text-sm font-bold text-ca-blue lg:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-ca-green"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ButtonLink href="/contact" variant="blue" className="hidden sm:inline-flex">
            Nous contacter
          </ButtonLink>
          <ButtonLink href={CONTACT_LINKS.tel} variant="blue" className="sm:hidden">
            Appeler
          </ButtonLink>
        </div>

        <nav
          aria-label="Navigation mobile"
          className="mt-3 flex gap-2 overflow-x-auto pb-1 text-sm font-bold text-ca-blue lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-ca-mist bg-ca-cream px-4 py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
