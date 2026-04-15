import Link from "next/link";
import { WA, IMG } from "@/lib/brand";
import { featuredProducts, CATEGORIES } from "@/lib/products";
import { HeroSimple } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCard } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { IconWhatsApp, IconArrow, IconPackage } from "@/components/icons";

export const metadata = {
  title: "TMA Shop — Catalogue BTP premium livré à Abidjan",
  description:
    "Catalogue TMA Shop : carreaux, sanitaires, cuisines modernes, robinetterie, revêtements, matériaux BTP, équipements de chantier et articles importés. Commandez sur WhatsApp, livraison 24–48 h.",
};

export default function ShopPage({ searchParams }) {
  const initialCategory = searchParams?.cat || "all";
  const popular = featuredProducts().slice(0, 4);

  return (
    <>
      <HeroSimple
        image={IMG.heroShop}
        eyebrow="TMA Shop · E-commerce BTP"
        title="Le catalogue premium du BTP, livré à Abidjan."
        description="Carreaux, sanitaires, cuisines modernes, robinetterie, revêtements, matériaux BTP, équipements de chantier et articles importés. Commandez directement sur WhatsApp, livraison sous 24 à 48 h."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={WA.catalogue}
            target="_blank"
            variant="whatsapp"
            iconLeft={<IconWhatsApp className="w-5 h-5" />}
          >
            Recevoir le catalogue complet
          </Button>
          <Button href="/devis" variant="primary">
            Demander un devis fourniture
          </Button>
        </div>
      </HeroSimple>

      {/* CATÉGORIES */}
      <section className="py-16 md:py-20 bg-white border-b border-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-tma-electric mb-6">
            Catégories populaires
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CATEGORIES.slice(1).map((c) => (
              <Link
                key={c.slug}
                href={`#catalogue`}
                className="rounded-xl border border-tma-stone bg-tma-bone p-5 text-center hover:bg-tma-night hover:text-white hover:border-tma-night transition-all group"
              >
                <IconPackage className="mx-auto w-6 h-6 text-tma-electric group-hover:text-white mb-2" />
                <p className="text-sm font-semibold">{c.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUITS VEDETTES */}
      <section className="py-20 md:py-24 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionTitle
              eyebrow="Catalogue vedette"
              title="Les produits les plus demandés."
              description="Sélection des références TMA Shop plébiscitées par nos clients architectes, promoteurs et particuliers."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popular.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE COMPLET */}
      <section id="catalogue" className="py-20 md:py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Catalogue complet"
            title="Explorez tous nos produits."
            description="Recherche en temps réel, filtres par catégorie. Chaque fiche produit permet de demander le prix ou commander directement sur WhatsApp."
            className="mb-10"
          />
          <ProductGrid initialCategory={initialCategory} />
        </div>
      </section>

      {/* CATALOGUE COMPLET CTA */}
      <section className="py-20 bg-tma-night relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.equipement} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 md:px-8 text-center">
          <p className="text-tma-electric-200 text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Plus de 2 500 références
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Besoin d'un catalogue complet ? Contactez-nous sur WhatsApp.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Notre catalogue PDF détaillé (prix, dimensions, disponibilités) vous est envoyé gratuitement en quelques minutes. Demandez-le simplement sur WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href={WA.catalogue}
              target="_blank"
              variant="whatsapp"
              size="lg"
              iconLeft={<IconWhatsApp className="w-5 h-5" />}
            >
              Recevoir le catalogue PDF
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Livraison Abidjan 24–48 h"
        title="Commandez maintenant, livré chez vous demain."
        description="TMA Shop livre sur tout Abidjan et les grandes villes de Côte d'Ivoire. Paiement mobile ou à la livraison. Facture pro disponible."
      />
    </>
  );
}
