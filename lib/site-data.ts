export const CONTACT = {
  name: "Nadhrat Soilihi",
  role: "Directrice Générale Europe (DGE)",
  phone: "+33695421957",
  phoneDisplay: "+33 6 95 42 19 57",
  email: "nadhrat.soilihi@comoresairways.com",
  addresses: [
    {
      label: "Adresse Paris",
      value: "140 Avenue des Champs-Élysées, 75008 Paris"
    },
    {
      label: "Adresse Noisy-le-Grand",
      value: "201 rue de Pizza, 93160 Noisy-le-Grand, France"
    }
  ]
} as const;

const whatsappText = encodeURIComponent(
  "Bonjour Nadhrat, je souhaite obtenir des informations pour un voyage avec Comores Airways."
);

export const CONTACT_LINKS = {
  tel: `tel:${CONTACT.phone}`,
  mailto: `mailto:${CONTACT.email}`,
  whatsapp: `https://wa.me/${CONTACT.phone.replace("+", "")}?text=${whatsappText}`
} as const;

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Réservation", href: "/reservation" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Omra & Hajj", href: "/omra-hajj" },
  { label: "Contact", href: "/contact" }
] as const;

export const services = [
  {
    title: "Billetterie aérienne",
    icon: "ticket",
    description:
      "Recherche et demande de billets selon votre trajet, vos dates et vos contraintes."
  },
  {
    title: "Séjours sur mesure",
    icon: "plane",
    description:
      "Organisation de séjours adaptés aux familles, voyageurs individuels et groupes."
  },
  {
    title: "Hôtels & appartements",
    icon: "hotel",
    description:
      "Orientation vers des solutions d'hébergement selon la destination et le besoin."
  },
  {
    title: "Véhicules & transferts",
    icon: "car",
    description:
      "Aide pour prévoir les déplacements utiles à l'arrivée, au départ ou pendant le séjour."
  },
  {
    title: "Assistance en escale",
    icon: "headset",
    description:
      "Accompagnement et informations pour rendre les étapes du voyage plus sereines."
  },
  {
    title: "Omra & Hajj",
    icon: "mosque",
    description:
      "Préparation sobre et attentive pour les demandes liées aux voyages spirituels."
  },
  {
    title: "Cargo & fret",
    icon: "cargo",
    description:
      "Demandes de transport de marchandises, colis ou bagages selon les possibilités."
  },
  {
    title: "Affrètement / Charter",
    icon: "plane",
    description:
      "Étude de demandes spécifiques pour groupes, organisations ou besoins ponctuels."
  },
  {
    title: "Assurance voyage",
    icon: "shield",
    description:
      "Information et accompagnement sur les protections utiles avant un départ."
  },
  {
    title: "Formalités et accompagnement",
    icon: "file",
    description:
      "Aide à clarifier les documents et étapes à anticiper avant le voyage."
  }
] as const;

export const destinations = [
  {
    name: "France",
    subtitle: "Paris et autres villes",
    image: "/images/destinations/france.svg",
    description:
      "Départs, retours et correspondances depuis la France, avec un suivi clair des options disponibles.",
    tags: ["Paris", "Province", "Correspondances"]
  },
  {
    name: "Comores",
    subtitle: "Moroni, Anjouan, Mohéli",
    image: "/images/destinations/comores.svg",
    description:
      "Une destination au cœur de l'agence, avec une connaissance concrète des besoins des familles et de la diaspora.",
    tags: ["Moroni", "Anjouan", "Mohéli"]
  },
  {
    name: "Mayotte",
    subtitle: "Océan Indien",
    image: "/images/destinations/mayotte.svg",
    description:
      "Accompagnement pour les trajets vers Mayotte et les liens avec les Comores et la métropole.",
    tags: ["Mamoudzou", "Familles", "Océan Indien"]
  },
  {
    name: "La Réunion",
    subtitle: "Liaisons océan Indien",
    image: "/images/destinations/reunion.svg",
    description:
      "Demandes de voyages vers La Réunion, avec attention portée aux correspondances et au budget.",
    tags: ["Saint-Denis", "Séjours", "Connexions"]
  },
  {
    name: "Tanzanie",
    subtitle: "Afrique de l'Est",
    image: "/images/destinations/tanzanie.svg",
    description:
      "Itinéraires vers la Tanzanie selon les disponibilités, les dates et les étapes souhaitées.",
    tags: ["Dar es Salaam", "Afrique", "Séjour"]
  },
  {
    name: "Zanzibar",
    subtitle: "Séjours et découvertes",
    image: "/images/destinations/zanzibar.svg",
    description:
      "Demandes de séjours à Zanzibar, entre détente, famille, découverte et organisation pratique.",
    tags: ["Plages", "Séjours", "Transferts"]
  },
  {
    name: "Nairobi",
    subtitle: "Hub régional",
    image: "/images/destinations/nairobi.svg",
    description:
      "Possibilités de connexions via Nairobi pour certains itinéraires régionaux et internationaux.",
    tags: ["Kenya", "Transit", "Connexions"]
  },
  {
    name: "Dubaï",
    subtitle: "Hub international",
    image: "/images/destinations/dubai.svg",
    description:
      "Demandes de vols, escales ou séjours via Dubaï, avec une proposition adaptée au profil du voyage.",
    tags: ["Escale", "Séjour", "International"]
  },
  {
    name: "Istanbul",
    subtitle: "Correspondances",
    image: "/images/destinations/istanbul.svg",
    description:
      "Itinéraires via Istanbul pour relier différentes destinations avec des options à confirmer ensemble.",
    tags: ["Transit", "Europe", "International"]
  },
  {
    name: "Djeddah",
    subtitle: "Omra & Hajj",
    image: "/images/destinations/djeddah.svg",
    description:
      "Demandes liées aux voyages spirituels, traitées avec sobriété, attention et clarté.",
    tags: ["Arabie saoudite", "Omra", "Hajj"]
  }
] as const;

export const trustItems = [
  "Accompagnement humain",
  "Fiabilité et sécurité",
  "Tarifs adaptés",
  "Bonne connaissance des destinations",
  "Réactivité et disponibilité"
] as const;
