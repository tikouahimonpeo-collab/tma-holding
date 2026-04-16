import "./globals.css";
import { Inter } from "next/font/google";
import { BRAND } from "@/lib/brand";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://tma-holding.net"),
  title: {
    default: `${BRAND.name} — ${BRAND.baseline}`,
    template: `%s · ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: [
    "entreprise BTP Abidjan",
    "construction villa Abidjan",
    "rénovation maison Côte d'Ivoire",
    "matériaux BTP Abidjan",
    "fournisseur carrelage Abidjan",
    "cuisine moderne Abidjan",
    "sanitaire premium Côte d'Ivoire",
    "devis construction Abidjan",
    "peinture professionnelle Abidjan",
    "conception 2D 3D Abidjan",
    "TMA Holding",
    "TMA Shop",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  openGraph: {
    type: "website",
    locale: "fr_CI",
    url: "https://tma-holding.net",
    siteName: BRAND.name,
    title: `${BRAND.name} — ${BRAND.baseline}`,
    description: BRAND.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.baseline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.baseline}`,
    description: BRAND.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo-tma.jpg", type: "image/jpeg" },
    ],
    apple: "/logo-tma.jpg",
  },
};

export const viewport = {
  themeColor: "#0A1A2F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness", "Store"],
  "@id": "https://tma-holding.net/#organization",
  name: BRAND.name,
  alternateName: ["TMA Holding", "TMA Shop"],
  description: BRAND.description,
  url: "https://tma-holding.net",
  logo: "https://tma-holding.net/logo-tma.jpg",
  image: "https://tma-holding.net/logo-tma.jpg",
  telephone: [BRAND.phone, BRAND.phoneLocal],
  email: BRAND.email,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.address.line1,
    addressLocality: BRAND.address.city,
    addressRegion: "Abidjan",
    addressCountry: "CI",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 5.3522,
    longitude: -3.9667,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Abidjan" },
    { "@type": "AdministrativeArea", name: "Côte d'Ivoire" },
  ],
  serviceType: [
    "Construction villa",
    "Rénovation",
    "Peinture professionnelle airless",
    "Enduit mécanique",
    "Conception 2D et 3D",
    "Revêtement et finition",
    "Importation matériaux BTP",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "TMA Shop — Catalogue BTP",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Carreaux" },
      { "@type": "OfferCatalog", name: "Sanitaires" },
      { "@type": "OfferCatalog", name: "Cuisines modernes" },
      { "@type": "OfferCatalog", name: "Robinetterie" },
      { "@type": "OfferCatalog", name: "Matériaux BTP" },
      { "@type": "OfferCatalog", name: "Équipements de chantier" },
    ],
  },
  sameAs: [
    BRAND.social.instagram,
    BRAND.social.facebook,
    BRAND.social.linkedin,
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-tma-bone text-tma-ink font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
