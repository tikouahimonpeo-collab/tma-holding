import Link from "next/link";
import { WA } from "@/lib/brand";
import { categoryName } from "@/lib/products";
import { Badge } from "./SectionTitle";
import { IconWhatsApp, IconArrow } from "./icons";

export function ProductCard({ product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-tma-stone shadow-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-1">
      <Link href={`/boutique/${product.slug}`} className="relative block h-56 md:h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
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
        <div className="absolute top-3 right-3">
          <Badge variant="whatsapp">
            <IconWhatsApp className="w-3 h-3" /> Disponible
          </Badge>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] uppercase tracking-[0.15em] text-tma-electric font-semibold mb-2">
          {categoryName(product.category)}
        </p>
        <Link
          href={`/boutique/${product.slug}`}
          className="font-display text-lg font-bold text-tma-night leading-snug hover:text-tma-electric transition-colors mb-2"
        >
          {product.name}
        </Link>
        <p className="text-sm text-tma-ash leading-relaxed line-clamp-2 mb-4">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex flex-col gap-2">
          <a
            href={WA.commande(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-sm font-semibold hover:bg-[#1DAA52] transition-colors"
          >
            <IconWhatsApp className="w-4 h-4" /> Commander sur WhatsApp
          </a>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={WA.prix(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 rounded-full border border-tma-stone text-tma-night px-3 py-2 text-xs font-semibold hover:border-tma-night hover:bg-tma-night hover:text-white transition-colors"
            >
              Demander le prix
            </a>
            <Link
              href="/devis"
              className="flex items-center justify-center gap-1 rounded-full border border-tma-stone text-tma-night px-3 py-2 text-xs font-semibold hover:border-tma-electric hover:bg-tma-electric hover:text-white transition-colors"
            >
              Obtenir un devis
            </Link>
          </div>
          <Link
            href={`/boutique/${product.slug}`}
            className="flex items-center justify-center gap-1 text-xs font-semibold text-tma-ash hover:text-tma-night mt-1"
          >
            Voir la fiche produit <IconArrow className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
