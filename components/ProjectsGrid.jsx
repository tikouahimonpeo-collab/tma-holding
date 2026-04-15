"use client";
import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid({ projects }) {
  const categories = useMemo(
    () => ["Tous", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );
  const [cat, setCat] = useState("Tous");
  const filtered = useMemo(
    () => (cat === "Tous" ? projects : projects.filter((p) => p.category === cat)),
    [cat, projects]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
              cat === c
                ? "bg-tma-night text-white border-tma-night"
                : "bg-white text-tma-night border-tma-stone hover:border-tma-night"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-tma-ash py-16">
          Aucun projet dans cette catégorie pour le moment.
        </p>
      )}
    </div>
  );
}
