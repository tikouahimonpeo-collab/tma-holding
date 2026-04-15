import Link from "next/link";
import { WA, IMG } from "@/lib/brand";
import { SERVICES } from "@/lib/services";
import { HeroSimple } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { IconCheck, IconArrow, IconWhatsApp } from "@/components/icons";

export const metadata = {
  title: "Services — Construction, rénovation, peinture airless, revêtement & plus",
  description:
    "Nos expertises BTP : construction (villas, R+1 à R+5), rénovation, peinture professionnelle airless, enduit mécanique, conception 2D/3D, revêtement premium et importation de matériaux.",
};

const CONSTRUCTION_TYPES = [
  "Villas 1 à 5 chambres et plus",
  "Maisons basses et résidences familiales",
  "Immeubles R+1, R+2, R+3, R+4, R+5",
  "Bureaux et commerces",
  "Aménagements extérieurs",
  "Agrandissements et extensions",
];

const RENOVATION_TYPES = [
  "Rénovation complète clé en main",
  "Salon, chambre, cuisine, salle de bain",
  "Façade et ravalement",
  "Jardin et extérieur",
  "Électricité, plomberie, carrelage",
  "Design intérieur et décoration",
];

export default function ServicesPage() {
  return (
    <>
      <HeroSimple
        image={IMG.heroServices}
        eyebrow="Nos services"
        title="Sept expertises, un seul interlocuteur."
        description="De la conception à la livraison, TMA Holding maîtrise toute la chaîne du BTP haut de gamme. Chaque service est pensé pour maximiser la qualité et tenir vos délais."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 hover:bg-white hover:text-tma-night transition-all"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </HeroSimple>

      {/* GRILLE DE SERVICES */}
      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Vue d'ensemble"
            title="Tous les métiers du BTP premium réunis."
            description="Chaque service TMA Holding est dirigé par un chef de métier expérimenté. Nous n'externalisons pas ce qui fait notre réputation : la qualité d'exécution."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* CONSTRUCTION — BLOC DÉTAILLÉ */}
      <DetailSection
        slug="construction-detail"
        eyebrow="Focus — Construction"
        title="Villas, immeubles et ouvrages clé en main."
        image={IMG.construction}
        benefit="Budget respecté, délais tenus, garantie décennale."
        bullets={CONSTRUCTION_TYPES}
        service="Construction"
      />

      {/* RÉNOVATION — BLOC DÉTAILLÉ */}
      <DetailSection
        slug="renovation-detail"
        eyebrow="Focus — Rénovation"
        title="Moderniser sans reconstruire."
        image={IMG.renovation}
        benefit="Un habitat repensé, plus moderne et plus confortable."
        bullets={RENOVATION_TYPES}
        service="Rénovation"
        reverse
      />

      {/* PEINTURE PRO + ENDUIT — BLOC */}
      <section className="py-20 md:py-28 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-white p-8 md:p-10 border border-tma-stone shadow-premium">
            <p className="text-tma-electric text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Peinture professionnelle
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-tma-night mb-4">
              Application airless — rapidité et finition
            </h3>
            <p className="text-tma-ash leading-relaxed mb-5">
              Grâce à notre flotte airless, nous peignons jusqu'à 3 fois plus vite qu'une peinture traditionnelle, avec un rendu velouté parfaitement uniforme. Devis au m², transparent.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Devis au m² clair",
                "Rapidité x3 vs rouleau",
                "Finition velouté sans trace",
                "Réduction main-d'œuvre",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-tma-night">
                  <IconCheck className="w-4 h-4 mt-0.5 text-tma-electric shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              <Button href="/devis" variant="dark" size="sm">
                Devis peinture au m²
              </Button>
              <Button
                href={WA.service("Peinture professionnelle")}
                target="_blank"
                variant="whatsapp"
                size="sm"
                iconLeft={<IconWhatsApp className="w-4 h-4" />}
              >
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-tma-night text-white p-8 md:p-10 shadow-premium">
            <p className="text-tma-electric-200 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Enduit mécanique
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Rendu homogène, application rapide
            </h3>
            <p className="text-white/80 leading-relaxed mb-5">
              L'enduit mécanisé divise par 2 le temps de chantier pour un rendu plus homogène que la méthode manuelle. Idéal pour grandes surfaces, intérieur comme extérieur.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Machine haute pression",
                "Rendu sans jointure",
                "Temps divisé par 2",
                "Finition taloché, gratté ou lissé",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-white/90">
                  <IconCheck className="w-4 h-4 mt-0.5 text-tma-electric shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              <Button href="/devis" variant="primary" size="sm">
                Devis enduit mécanique
              </Button>
              <Button
                href={WA.service("Enduit mécanique")}
                target="_blank"
                variant="whatsapp"
                size="sm"
                iconLeft={<IconWhatsApp className="w-4 h-4" />}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPTION + REVÊTEMENT */}
      <DetailSection
        slug="conception-detail"
        eyebrow="Focus — Conception 2D / 3D"
        title="Voyez votre projet avant de le construire."
        image={IMG.conception}
        benefit="Décidez en connaissance de cause, sans mauvaise surprise."
        bullets={[
          "Plans techniques et permis",
          "Modélisation 3D photo-réaliste",
          "Visite virtuelle du projet",
          "Implantation, façades, coupes",
          "Révisions illimitées avant validation",
          "Intégration à votre budget global",
        ]}
        service="Conception 2D / 3D"
      />

      <DetailSection
        slug="revetement-detail"
        eyebrow="Focus — Revêtement & finition"
        title="Des finitions dignes des plus belles adresses."
        image={IMG.marbre}
        benefit="Carrelage, marbre, sanitaire, finitions premium — sans compromis."
        bullets={[
          "Pose carrelage sols et murs",
          "Marbre et pierre naturelle",
          "Habillage mural décoratif",
          "Installation sanitaire complète",
          "Peinture et laque haut de gamme",
          "Détails premium sur mesure",
        ]}
        service="Revêtement & finition"
        reverse
      />

      {/* IMPORTATION */}
      <DetailSection
        slug="importation-detail"
        eyebrow="Focus — Importation & fourniture"
        title="Sourcing matériaux, équipements et articles importés."
        image={IMG.equipement}
        benefit="Des prix directs fabricant, sans intermédiaire."
        bullets={[
          "Sourcing Europe, Asie, Moyen-Orient",
          "Matériaux premium à prix direct",
          "Équipements BTP et chantier",
          "Mobilier, luminaires, sanitaires",
          "Accompagnement logistique complet",
          "Solutions compétitives et transparentes",
        ]}
        service="Importation & fourniture"
      />

      <CTASection
        eyebrow="Besoin d'un chiffrage ?"
        title="Un devis gratuit en 24 h, c'est tout ce qu'il faut pour commencer."
        description="Décrivez-nous votre projet. Nous revenons vers vous sous 24 h avec un chiffrage clair, détaillé et sans engagement."
      />
    </>
  );
}

function DetailSection({ slug, eyebrow, title, image, benefit, bullets, service, reverse = false }) {
  return (
    <section id={slug} className="py-20 md:py-28 bg-white">
      <div
        className={`mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reverse ? "lg:[&>div:first-child]:order-last" : ""
        }`}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[5/4]">
          <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-tr from-tma-night/30 via-transparent to-transparent" />
        </div>
        <div>
          <p className="text-tma-electric text-xs font-bold tracking-[0.2em] uppercase mb-3">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tma-night leading-tight mb-4">
            {title}
          </h2>
          <p className="text-tma-night/80 italic mb-6 border-l-4 border-tma-electric pl-4">
            {benefit}
          </p>
          <ul className="space-y-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <IconCheck className="w-5 h-5 mt-0.5 text-tma-electric shrink-0" />
                <span className="text-tma-night">{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button href="/devis" variant="dark" iconRight={<IconArrow className="w-4 h-4" />}>
              Demander un devis
            </Button>
            <Button
              href={WA.service(service)}
              target="_blank"
              variant="whatsapp"
              iconLeft={<IconWhatsApp className="w-5 h-5" />}
            >
              Écrire sur WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
