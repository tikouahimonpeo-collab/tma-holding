import { IMG } from "@/lib/brand";
import { PROJECTS } from "@/lib/projects";
import { HeroSimple } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Réalisations — Nos chantiers BTP premium à Abidjan",
  description:
    "Villas, immeubles R+5, rénovations haut de gamme, revêtement marbre, aménagements corporate. Découvrez les réalisations TMA Holding en Côte d'Ivoire.",
};

export default function RealisationsPage() {
  return (
    <>
      <HeroSimple
        image={IMG.heroRealisations}
        eyebrow="Réalisations"
        title="Des chantiers qui racontent notre exigence."
        description="Villas premium, immeubles résidentiels, rénovations haut de gamme, revêtement marbre, aménagements corporate. Un échantillon du travail TMA Holding."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ProjectsGrid projects={PROJECTS} />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-tma-stone">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Transformation"
            title="L'effet TMA : avant / après."
            description="Parce qu'un bon projet se voit au premier coup d'œil."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { before: IMG.chantier, after: IMG.villa, title: "Villa Cocody — Construction neuve" },
              { before: IMG.renovation, after: IMG.interieur, title: "Rénovation Riviera — Intérieur repensé" },
            ].map((t) => (
              <div key={t.title} className="rounded-2xl bg-white border border-tma-stone overflow-hidden shadow-premium">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={t.before} alt="Avant" className="h-64 w-full object-cover" loading="lazy" />
                    <span className="absolute top-3 left-3 bg-white/90 text-tma-night text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Avant
                    </span>
                  </div>
                  <div className="relative">
                    <img src={t.after} alt="Après" className="h-64 w-full object-cover" loading="lazy" />
                    <span className="absolute top-3 left-3 bg-tma-electric text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Après
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-tma-night">{t.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Un projet similaire en tête ?"
        title="Transformez votre vision en chantier livré."
        description="Nos équipes peuvent reproduire ou adapter n'importe lequel de ces projets à votre terrain, votre budget, votre style."
      />
    </>
  );
}
