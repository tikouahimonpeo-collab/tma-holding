import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND, WA, IMG } from "@/lib/brand";
import { ARTICLES, articleBySlug } from "@/lib/articles";
import { HeroSimple } from "@/components/HeroSection";
import { Button } from "@/components/Button";
import { IconWhatsApp, IconArrow } from "@/components/icons";

const imgMap = {
  construction: IMG.construction,
  ciment: IMG.ciment,
  renovation: IMG.renovation,
  importation: IMG.importation || IMG.chantier,
};

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = articleBySlug(params.slug);
  if (!a) return {};
  const url = `https://tma-holding.net/blog/${a.slug}`;
  return {
    title: `${a.title} | Blog TMA Holding Abidjan`,
    description: a.excerpt,
    keywords: a.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.excerpt,
      url,
      publishedTime: a.date,
      images: [{ url: imgMap[a.image] || IMG.chantier }],
    },
  };
}

export default function ArticlePage({ params }) {
  const a = articleBySlug(params.slug);
  if (!a) notFound();

  const url = `https://tma-holding.net/blog/${a.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    author: { "@type": "Organization", name: BRAND.name },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: { "@type": "ImageObject", url: "https://tma-holding.net/logo-tma.jpg" },
    },
    datePublished: a.date,
    dateModified: a.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [imgMap[a.image] || IMG.chantier],
    keywords: a.keywords.join(", "),
  };

  const other = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <HeroSimple
        image={imgMap[a.image] || IMG.chantier}
        eyebrow={a.category}
        title={a.title}
        description={a.excerpt}
      />

      {/* Contenu */}
      <article className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <nav className="text-sm text-tma-ash mb-8">
            <Link href="/" className="hover:text-tma-night">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-tma-night">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-tma-night font-medium">{a.title}</span>
          </nav>

          <div className="flex items-center gap-3 text-xs text-tma-ash mb-8">
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

          {a.sections.map((s, i) => (
            <section key={i} className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-tma-night leading-tight mb-5">
                {s.h2}
              </h2>
              {s.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="text-tma-night leading-relaxed mb-4 text-[17px]"
                  dangerouslySetInnerHTML={{
                    __html: p
                      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br/>"),
                  }}
                />
              ))}
            </section>
          ))}

          {/* CTA contextuel */}
          <div className="mt-14 rounded-3xl bg-tma-night text-white p-8 md:p-10 shadow-premium">
            <p className="text-tma-electric-200 text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Passons à l'action
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-4">
              Besoin d'un accompagnement concret sur votre projet ?
            </h3>
            <p className="text-white/80 mb-6">
              Un conseiller TMA Holding analyse votre demande et vous revient
              sous 24 h avec un chiffrage clair.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                href={WA.devis}
                target="_blank"
                variant="whatsapp"
                size="lg"
                iconLeft={<IconWhatsApp className="w-5 h-5" />}
              >
                {a.ctaLabel || "Écrire sur WhatsApp"}
              </Button>
              <Button href="/devis" variant="primary" size="lg">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Articles liés */}
      {other.length > 0 && (
        <section className="py-16 bg-tma-stone">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <p className="text-tma-electric text-xs font-bold tracking-[0.25em] uppercase mb-3">
              À lire aussi
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-tma-night mb-8">
              Autres guides du blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {other.map((o) => (
                <Link
                  key={o.slug}
                  href={`/blog/${o.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-tma-stone hover:shadow-md transition-shadow block"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={imgMap[o.image] || IMG.chantier}
                      alt={o.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex items-center rounded-full bg-tma-stone text-tma-night px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] mb-3">
                      {o.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-tma-night leading-snug group-hover:text-tma-electric transition-colors mb-2">
                      {o.title}
                    </h3>
                    <p className="text-sm text-tma-ash leading-relaxed line-clamp-2">
                      {o.excerpt}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-tma-electric">
                      Lire <IconArrow className="w-4 h-4" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
