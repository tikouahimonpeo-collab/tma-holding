import Link from "next/link";
import { WA } from "@/lib/brand";
import { categoryName } from "@/lib/products";
import { Badge } from "./SectionTitle";
import { IconWhatsApp, IconArrow, IconCheck } from "./icons";

export function ProductCard({ product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-tma-stone shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link
        href={`/boutique/${product.slug}`}
        className="relative block h-56 md:h-64 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* Badge IMPORT DIRECT permanent */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-tma-night text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] shadow-md">
            ⚓ Import direct
          </span>
        </div>
        {/* Badge secondaire (Premium / Nouveau / Bestseller…) */}
        {product.badge && (
          <div className="absolute top-3 right-3">
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
        {/* Bande prix direct usine */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tma-night/95 to-transparent py-2 px-3">
          <p className="text-[11px] font-bold text-tma-electric-200 uppercase tracking-[0.15em]">
            Prix direct usine
          </p>
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

        {/* Mentions clés import direct */}
        <ul className="space-y-1.5 mb-4 text-[11px] text-tma-night">
          <li className="flex items-center gap-1.5">
            <IconCheck className="w-3 h-3 text-tma-electric shrink-0" />
            <span>Disponible sur commande</span>
          </li>
          <li className="flex items-center gap-1.5">
            <IconCheck className="w-3 h-3 text-tma-electric shrink-0" />
            <span>Livraison : <strong>45-50 jours</strong></span>
          </li>
          <li className="flex items-center gap-1.5">
            <IconCheck className="w-3 h-3 text-tma-electric shrink-0" />
            <span>Qualité professionnelle</span>
          </li>
        </ul>

        <div className="mt-auto flex flex-col gap-2">
          <a
            href={WA.commande(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-sm font-semibold hover:bg-[#1DAA52] transition-colors"
          >
            <IconWhatsApp className="w-4 h-4" /> Commander via WhatsApp
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
              href={`/boutique/${product.slug}`}
              className="flex items-center justify-center gap-1 rounded-full border border-tma-stone text-tma-night px-3 py-2 text-xs font-semibold hover:border-tma-electric hover:bg-tma-electric hover:text-white transition-colors"
            >
              Voir la fiche
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
