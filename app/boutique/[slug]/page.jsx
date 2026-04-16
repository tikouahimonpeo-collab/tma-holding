import Link from "next/link";
import { notFound } from "next/navigation";
import { WA } from "@/lib/brand";
import {
  PRODUCTS,
  productBySlug,
  relatedProducts,
  categoryName,
} from "@/lib/products";
import { SectionTitle, Badge } from "@/components/SectionTitle";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { IconWhatsApp, IconArrow, IconCheck } from "@/components/icons";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = productBySlug(params.slug);
  if (!product) return {};
  const url = `https://tma-holding.net/boutique/${product.slug}`;
  return {
    title: `${product.name} | TMA Shop Abidjan prix direct import`,
    description: `${product.shortDescription} Import direct. Livraison 45-50 jours à Abidjan. Commandez sur WhatsApp.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} — TMA Shop`,
      description: product.shortDescription,
      url,
      images: [{ url: product.image }],
      type: "website",
    },
  };
}

export default function ProductPage({ params }) {
  const product = productBySlug(params.slug);
  if (!product) notFound();

  const related = relatedProducts(product);
  const url = `https://tma-holding.net/boutique/${product.slug}`;
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.shortDescription,
    category: categoryName(product.category),
    brand: { "@type": "Brand", name: "TMA Shop" },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "XOF",
      availability:
        product.availability === "Sur commande"
          ? "https://schema.org/PreOrder"
          : "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "TMA Holding" },
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://tma-holding.net" },
      { "@type": "ListItem", position: 2, name: "TMA Shop", item: "https://tma-holding.net/boutique" },
      { "@type": "ListItem", position: 3, name: categoryName(product.category), item: `https://tma-holding.net/boutique?cat=${product.category}` },
      { "@type": "ListItem", position: 4, name: product.name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Fil d'Ariane + hero produit */}
      <section className="pt-32 md:pt-40 pb-16 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <nav className="text-sm text-tma-ash mb-6">
            <Link href="/" className="hover:text-tma-night">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/boutique" className="hover:text-tma-night">TMA Shop</Link>
            <span className="mx-2">/</span>
            <Link
              href={`/boutique?cat=${product.category}`}
              className="hover:text-tma-night"
            >
              {categoryName(product.category)}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-tma-night font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/5]">
              <img
                src={product.image}
                alt={product.name}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-5 left-5">
                  <Badge
                    variant={
                      product.badge === "Premium"
                        ? "premium"
                        : product.badge === "Nouveau"
                        ? "new"
                        : product.badge === "Import"
                        ? "import"
                        : "default"
                    }
                  >
                    {product.badge}
                  </Badge>
                </div>
              )}
            </div>

            {/* Infos */}
            <div>
              <p className="text-tma-electric text-xs font-bold tracking-[0.2em] uppercase mb-3">
                {categoryName(product.category)}
              </p>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-tma-night leading-[1.1] tracking-tight mb-5">
                {product.name}
              </h1>
              <p className="text-[17px] text-tma-ash leading-relaxed mb-6">
                {product.longDescription}
              </p>

              {/* Tags + dispo */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-tma-night text-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]">
                  ⚓ Import direct
                </span>
                <Badge>Disponible sur commande</Badge>
                {(product.tags || []).map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              {/* Bandeau prix + délai */}
              <div className="rounded-2xl bg-tma-night text-white p-6 mb-6 shadow-premium">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-tma-electric-200 text-[11px] font-bold tracking-[0.2em] uppercase mb-1">
                      Tarification
                    </p>
                    <p className="font-display text-lg font-bold leading-tight">
                      Prix direct usine
                    </p>
                    <p className="text-white/70 text-xs mt-1">
                      Jusqu'à -40 % vs marché local
                    </p>
                  </div>
                  <div>
                    <p className="text-tma-electric-200 text-[11px] font-bold tracking-[0.2em] uppercase mb-1">
                      Livraison
                    </p>
                    <p className="font-display text-lg font-bold leading-tight">
                      45 à 50 jours
                    </p>
                    <p className="text-white/70 text-xs mt-1">
                      Import sécurisé
                    </p>
                  </div>
                </div>
              </div>

              {/* Avantages */}
              <div className="rounded-2xl bg-tma-bone border border-tma-stone p-5 mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-tma-electric mb-3">
                  Pourquoi ce produit ?
                </p>
                <ul className="space-y-2">
                  {[
                    "Qualité professionnelle sélectionnée par nos acheteurs",
                    "Import direct fournisseur — aucun intermédiaire",
                    "Contrôle qualité avant expédition",
                    "Livraison à Abidjan et grandes villes (45-50 jours)",
                    "Facture professionnelle disponible",
                    "Installation possible par les équipes TMA Holding",
                  ].map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-tma-night">
                      <IconCheck className="w-4 h-4 mt-0.5 text-tma-electric shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={WA.commande(product.name)}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  iconLeft={<IconWhatsApp className="w-5 h-5" />}
                >
                  Commander sur WhatsApp
                </Button>
                <Button
                  href={WA.prix(product.name)}
                  target="_blank"
                  variant="dark"
                  size="lg"
                >
                  Demander le prix
                </Button>
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                <Button href="/devis" variant="light" size="md">
                  Obtenir un devis avec pose
                </Button>
                <Button href="/boutique" variant="ghost" size="md" iconLeft={<IconArrow className="w-4 h-4 rotate-180" />}>
                  Retour au catalogue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUITS SIMILAIRES */}
      {related.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionTitle
              eyebrow="Vous aimerez aussi"
              title="Produits similaires"
              description={`D'autres références de la catégorie ${categoryName(product.category)}.`}
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Besoin d'un conseil ?"
        title="Notre équipe TMA Shop vous répond sur WhatsApp."
        description="Disponibilités, quantités, délais d'import, pose sur chantier : obtenez toutes vos réponses directement sur WhatsApp."
      />
    </>
  );
}
