import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: {
    default: "Comores Airways | Agence de voyage et services aériens",
    template: "%s | Comores Airways"
  },
  description:
    "Billets d'avion, séjours sur mesure, Omra & Hajj, assistance voyage, cargo et services aériens entre la France, les Comores et l'international.",
  metadataBase: new URL("https://comoresairways.com"),
  openGraph: {
    title: "Comores Airways",
    description:
      "Voyagez avec un accompagnement humain et fiable entre la France, les Comores et l'international.",
    locale: "fr_FR",
    siteName: "Comores Airways",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
