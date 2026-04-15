// Web App Manifest Next.js natif
// Documentation : https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest

export default function manifest() {
  return {
    name: "TMA Holding — BTP Premium Abidjan",
    short_name: "TMA Holding",
    description:
      "Construction, rénovation, revêtement et matériaux BTP à Abidjan. Devis sous 24 h.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#0A1A2F",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
