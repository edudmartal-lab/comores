export const ADDRESSES = [
  {
    label: "Adresse Paris",
    value: "140 Avenue des Champs-Élysées, 75008 Paris"
  },
  {
    label: "Adresse Noisy-le-Grand",
    value: "201 rue de Pizza, 93160 Noisy-le-Grand, France"
  }
] as const;

// Coordonnées de l'agence, sans nom de représentant : uniquement
// téléphone et email, comme demandé par la direction.
export const COORDINATES = {
  phones: [
    {
      label: "Téléphone (Paris)",
      display: "+33 6 35 16 70 81",
      tel: "+33635167081"
    },
    {
      label: "Téléphone (Comores – Moroni)",
      display: "+269 325 48 25",
      tel: "+2693254825"
    }
  ],
  emails: [
    {
      label: "Email",
      value: "contact@comoresairways.com"
    },
    {
      label: "Réservation",
      value: "resa@comoresairways.com"
    }
  ],
  addresses: ADDRESSES
} as const;

export const PRIMARY_PHONE = COORDINATES.phones[0];
export const PRIMARY_EMAIL = COORDINATES.emails[0];

// Conservé pour les formulaires (mailto de destination).
export const CONTACT = { email: PRIMARY_EMAIL.value } as const;

const whatsappText = encodeURIComponent(
  "Bonjour, je souhaite obtenir des informations pour un voyage avec Comores Airways."
);

export const CONTACT_LINKS = {
  tel: `tel:${PRIMARY_PHONE.tel}`,
  mailto: `mailto:${PRIMARY_EMAIL.value}`,
  whatsapp: `https://wa.me/${PRIMARY_PHONE.tel.replace("+", "")}?text=${whatsappText}`
} as const;

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Réservation", href: "/reservation" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Omra & Hajj", href: "/omra-hajj" },
  { label: "Location voiture", href: "/location-voiture" },
  { label: "Contact", href: "/contact" }
] as const;

// Oazis-Moroni : service de location de voiture avec chauffeur privé (VTC),
// proposé sous la marque Comores Airways. Contenu repris du dépliant officiel.
export const OAZIS = {
  name: "Oazis-Moroni",
  parent: "Comores Airways",
  headline: "Location de voiture avec chauffeur privé – VTC",
  tagline: "Votre confort, notre priorité",
  slogan: "Plus qu'un trajet, une expérience de confiance.",
  since: "2009",
  availability: "Disponible 7j/7 – 24h/24",
  location: "Moroni – Comores",
  intro:
    "Voyagez en toute sérénité avec un service fiable, ponctuel et sécurisé, partout aux Comores.",
  welcome: ["Namkaribou", "Tafadhoile", "مرحبا بكم", "Welcome"],
  phoneDisplay: "+269 325 48 25",
  phoneTel: "+2693254825",
  email: "contact@comoresairways.com",
  services: [
    { title: "Transfert aéroport (Hahaya)", icon: "plane" },
    { title: "Hôtels, assemblées, hôpitaux", icon: "hotel" },
    { title: "Location journée / demi-journée", icon: "calendar" },
    { title: "Longues distances & régions", icon: "map" },
    {
      title: "Événements (travail, famille, sport, réunion)",
      icon: "users"
    }
  ],
  values: [
    { label: "Confort", icon: "check" },
    { label: "Ponctualité", icon: "check" },
    { label: "Sécurité", icon: "shield" },
    { label: "Discrétion", icon: "check" },
    { label: "Satisfaction", icon: "star" }
  ],
  formations: [
    {
      title: "Accueil & relation client",
      icon: "users",
      text: "Savoir accueillir, écouter et satisfaire chaque client."
    },
    {
      title: "Sécurité routière & conduite professionnelle",
      icon: "shield",
      text: "Maîtrise de la conduite défensive et respect des règles de sécurité."
    },
    {
      title: "Géographie touristique",
      icon: "map",
      text: "Bonne connaissance des régions et sites touristiques des Comores."
    },
    {
      title: "Communication professionnelle",
      icon: "headset",
      text: "Communication claire, courtoise et adaptée à tous les voyageurs."
    },
    {
      title: "Gestion du temps & organisation",
      icon: "calendar",
      text: "Ponctualité, planification et sens de l'organisation pour un service efficace."
    }
  ],
  links: {
    tel: "tel:+2693254825",
    mailto: "mailto:contact@comoresairways.com",
    whatsapp: `https://wa.me/2693254825?text=${encodeURIComponent(
      "Bonjour, je souhaite réserver un transfert avec Oazis-Moroni (Comores Airways)."
    )}`
  }
} as const;

export const services = [
  {
    title: "Billetterie aérienne",
    icon: "ticket",
    description: "Billets selon votre trajet, vos dates et votre budget."
  },
  {
    title: "Séjours sur mesure",
    icon: "plane",
    description: "Séjours adaptés aux familles, individuels et groupes."
  },
  {
    title: "Hôtels & appartements",
    icon: "hotel",
    description: "Hébergements choisis selon la destination."
  },
  {
    title: "Véhicules & transferts",
    icon: "car",
    description: "Transferts à l'arrivée comme au départ."
  },
  {
    title: "Assistance en escale",
    icon: "headset",
    description: "Un accompagnement à chaque étape du voyage."
  },
  {
    title: "Omra & Hajj",
    icon: "mosque",
    description: "Préparation attentive de vos voyages spirituels."
  },
  {
    title: "Cargo & fret",
    icon: "cargo",
    description: "Transport de marchandises, colis et bagages."
  },
  {
    title: "Affrètement / Charter",
    icon: "plane",
    description: "Solutions sur mesure pour groupes et organisations."
  },
  {
    title: "Assurance voyage",
    icon: "shield",
    description: "Les protections utiles avant le départ."
  },
  {
    title: "Formalités et accompagnement",
    icon: "file",
    description: "Documents et étapes clarifiés avant de partir."
  }
] as const;

export const destinations = [
  {
    name: "France",
    subtitle: "Paris et autres villes",
    image: "/images/destinations/france.svg",
    description:
      "Départs, retours et correspondances depuis la France.",
    tags: ["Paris", "Province", "Correspondances"]
  },
  {
    name: "Comores",
    subtitle: "Moroni, Anjouan, Mohéli",
    image: "/images/destinations/comores-plage.jpg",
    description:
      "Au cœur de l'agence : familles et diaspora des Comores.",
    tags: ["Moroni", "Anjouan", "Mohéli"]
  },
  {
    name: "Mayotte",
    subtitle: "Océan Indien",
    image: "/images/destinations/mayotte.svg",
    description:
      "Trajets vers Mayotte, les Comores et la métropole.",
    tags: ["Mamoudzou", "Familles", "Océan Indien"]
  },
  {
    name: "La Réunion",
    subtitle: "Liaisons océan Indien",
    image: "/images/destinations/reunion.svg",
    description:
      "Voyages vers La Réunion : correspondances et budget.",
    tags: ["Saint-Denis", "Séjours", "Connexions"]
  },
  {
    name: "Tanzanie",
    subtitle: "Afrique de l'Est",
    image: "/images/destinations/tanzanie.svg",
    description: "Itinéraires vers la Tanzanie selon vos dates.",
    tags: ["Dar es Salaam", "Afrique", "Séjour"]
  },
  {
    name: "Zanzibar",
    subtitle: "Séjours et découvertes",
    image: "/images/destinations/zanzibar.svg",
    description: "Séjours à Zanzibar : détente et découverte.",
    tags: ["Plages", "Séjours", "Transferts"]
  },
  {
    name: "Nairobi",
    subtitle: "Hub régional",
    image: "/images/destinations/nairobi.svg",
    description:
      "Connexions via Nairobi, régionales et internationales.",
    tags: ["Kenya", "Transit", "Connexions"]
  },
  {
    name: "Dubaï",
    subtitle: "Hub international",
    image: "/images/destinations/dubai.svg",
    description: "Vols, escales et séjours via Dubaï.",
    tags: ["Escale", "Séjour", "International"]
  },
  {
    name: "Istanbul",
    subtitle: "Correspondances",
    image: "/images/destinations/istanbul.svg",
    description: "Itinéraires et correspondances via Istanbul.",
    tags: ["Transit", "Europe", "International"]
  },
  {
    name: "Djeddah",
    subtitle: "Omra & Hajj",
    image: "/images/destinations/djeddah.svg",
    description: "Voyages spirituels, traités avec attention.",
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

export const comoresPhotos = [
  {
    title: "Rivage des Comores",
    image: "/images/destinations/comores-plage.jpg",
    alt: "Plage et lagon turquoise aux Comores"
  },
  {
    title: "Lagon et reliefs",
    image: "/images/destinations/lagon-comores.jpg",
    alt: "Lagon calme avec reliefs verts aux Comores"
  },
  {
    title: "Paysage du Karthala",
    image: "/images/destinations/karthala-paysage.jpg",
    alt: "Paysage volcanique du Karthala"
  },
  {
    title: "Cratère du Karthala",
    image: "/images/destinations/cratere-karthala.jpg",
    alt: "Vue panoramique du cratère du Karthala"
  }
] as const;
