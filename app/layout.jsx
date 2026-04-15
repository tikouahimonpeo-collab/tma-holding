import "./globals.css";
import { BRAND } from "@/lib/brand";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = {
  metadataBase: new URL("https://tmaholding.ci"),
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
    url: "https://tmaholding.ci",
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
  "@type": "GeneralContractor",
  name: BRAND.name,
  description: BRAND.description,
  url: "https://tmaholding.ci",
  telephone: BRAND.phone,
  email: BRAND.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.address.line1,
    addressLocality: BRAND.address.city,
    addressCountry: "CI",
  },
  openingHours: "Mo-Sa 08:00-19:00",
  areaServed: { "@type": "City", name: "Abidjan" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
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
