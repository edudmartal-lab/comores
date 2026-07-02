"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";
import { CONTACT_LINKS, navItems } from "@/lib/site-data";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Fermer le menu mobile à chaque changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-ca-mist/80 bg-white/92 shadow-[0_8px_24px_rgba(20,50,92,0.06)] backdrop-blur">
      <div className="site-container py-3">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Accueil Comores Airways"
            className="rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ca-turquoise/40"
          >
            <Logo />
          </Link>

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-1 text-sm font-bold text-ca-blue lg:flex"
          >
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-2 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ca-turquoise/40 ${
                    active
                      ? "bg-ca-cream text-ca-green"
                      : "text-ca-blue hover:bg-ca-cream/70 hover:text-ca-green"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href="/contact"
              variant="blue"
              className="hidden sm:inline-flex"
            >
              Nous contacter
            </ButtonLink>
            <ButtonLink
              href={CONTACT_LINKS.tel}
              variant="blue"
              className="sm:hidden"
            >
              Appeler
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-ca-mist bg-white text-ca-blue shadow-card transition hover:border-ca-turquoise focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ca-turquoise/40 lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          hidden={!open}
          className="mt-3 grid gap-1 border-t border-ca-mist pt-3 text-sm font-bold lg:hidden"
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-2xl px-4 py-3 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ca-turquoise/40 ${
                  active
                    ? "bg-ca-cream text-ca-green"
                    : "text-ca-blue hover:bg-ca-cream/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
