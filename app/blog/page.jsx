import Link from "next/link";
import { IMG } from "@/lib/brand";
import { ARTICLES } from "@/lib/articles";
import { HeroSimple } from "@/components/HeroSection";
import { IconArrow } from "@/components/icons";

export const metadata = {
  title: "Blog BTP Abidjan | Construction, Rénovation, Matériaux — TMA Holding",
  description:
    "Conseils et guides BTP pour la Côte d'Ivoire : prix construction villa Abidjan, top matériaux, rénovation maison, import direct Chine. Expertise TMA Holding.",
  keywords: [
    "blog BTP Abidjan",
    "conseils construction Côte d'Ivoire",
    "guide rénovation Abidjan",
    "prix matériaux BTP",
  ],
  alternates: { canonical: "https://tma-holding.net/blog" },
  openGraph: {
    title: "Blog TMA Holding — Conseils BTP Côte d'Ivoire",
    description:
      "Guides pratiques pour construire, rénover et importer en Côte d'Ivoire.",
    url: "https://tma-holding.net/blog",
  },
};

const imgMap = {
  construction: IMG.construction,
  ciment: IMG.ciment,
  renovation: IMG.renovation,
  importation: IMG.importation || IMG.chantier,
};

export default function BlogPage() {
  return (
    <>
      <HeroSimple
        image={IMG.heroServices}
        eyebrow="Blog TMA Holding"
        title="Conseils BTP pour la Côte d'Ivoire."
        description="Guides pratiques, prix réels, erreurs à éviter : tout ce qu'il faut savoir pour construire, rénover ou importer en Côte d'Ivoire."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map((a) => (
              <article
                key={a.slug}
                className="group rounded-3xl overflow-hidden border border-tma-stone bg-white hover:shadow-premium transition-shadow"
              >
                <Link
                  href={`/blog/${a.slug}`}
                  className="block relative aspect-[16/9] overflow-hidden"
                >
                  <img
                    src={imgMap[a.image] || IMG.chantier}
                    alt={a.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-tma-night text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]">
                      {a.category}
                    </span>
                  </div>
                </Link>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 text-xs text-tma-ash mb-3">
                    <time dateTime={a.date}>
                      {new Date(a.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{a.readingTime} min de lecture</span>
                  </div>

                  <Link href={`/blog/${a.slug}`}>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-tma-night leading-snug hover:text-tma-electric transition-colors mb-3">
                      {a.title}
                    </h2>
                  </Link>

                  <p className="text-tma-ash leading-relaxed mb-5 text-sm">
                    {a.excerpt}
                  </p>

                  <Link
                    href={`/blog/${a.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-tma-electric hover:text-tma-night"
                  >
                    Lire l'article <IconArrow className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
