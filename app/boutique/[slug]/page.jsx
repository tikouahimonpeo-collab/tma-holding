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
  return {
    title: `${product.name} — TMA Shop`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }) {
  const product = productBySlug(params.slug);
  if (!product) notFound();

  const related = relatedProducts(product);

  return (
    <>
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
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="whatsapp">{product.availability}</Badge>
                {(product.tags || []).map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              {/* Avantages */}
              <div className="rounded-2xl bg-tma-bone border border-tma-stone p-5 mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-tma-electric mb-3">
                  Pourquoi ce produit ?
                </p>
                <ul className="space-y-2">
                  {[
                    "Qualité premium sélectionnée par nos acheteurs",
                    "Livraison rapide à Abidjan et grandes villes de Côte d'Ivoire",
                    "Facture professionnelle disponible",
                    "Installation possible par nos équipes",
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
        description="Disponibilités, quantités, délais de livraison, pose : obtenez toutes vos réponses en quelques minutes."
      />
    </>
  );
}
