"use client";
import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { IconSearch } from "./icons";

export function ProductGrid({ initialCategory = "all" }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState(initialCategory);

  const filtered = useMemo(() => {
    let list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          (p.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [cat, query]);

  return (
    <div>
      {/* Barre recherche + filtres */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-10">
        <div className="relative flex-1 max-w-xl">
          <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-tma-ash" />
          <input
            type="search"
            placeholder="Rechercher un produit, une catégorie, un tag…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-tma-stone bg-white pl-11 pr-4 py-3 text-[15px] text-tma-night placeholder:text-tma-ash focus:border-tma-electric focus:outline-none focus:ring-2 focus:ring-tma-electric/20"
          />
        </div>
        <p className="text-sm text-tma-ash">
          <span className="font-bold text-tma-night">{filtered.length}</span> produit{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Filtres catégories */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c.slug}
            onClick={() => setCat(c.slug)}
            className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all ${
              cat === c.slug
                ? "bg-tma-night text-white border-tma-night"
                : "bg-white text-tma-night border-tma-stone hover:border-tma-night"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Grille */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-tma-stone p-10 text-center">
          <p className="text-tma-ash">
            Aucun produit ne correspond à votre recherche. Contactez-nous sur WhatsApp pour une demande spécifique.
          </p>
        </div>
      )}
    </div>
  );
}
