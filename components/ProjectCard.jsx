import { WA } from "@/lib/brand";
import { IconArrow, IconWhatsApp, IconMapPin } from "./icons";
import { Badge } from "./SectionTitle";

export function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-tma-night text-white shadow-premium transition-all duration-500 hover:-translate-y-1">
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tma-night via-tma-night/50 to-transparent" />
      </div>

      <div className="absolute top-4 left-4">
        <Badge variant="premium">{project.category}</Badge>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <p className="flex items-center gap-1 text-xs text-white/70 mb-2">
          <IconMapPin className="w-3.5 h-3.5" /> {project.location} · {project.year}
        </p>
        <h3 className="font-display text-xl md:text-2xl font-bold leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-white/80 leading-relaxed line-clamp-2 mb-4">
          {project.summary}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={WA.projet(project.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#25D366] hover:text-white"
          >
            <IconWhatsApp className="w-4 h-4" /> Projet similaire
          </a>
          <span className="text-white/40">·</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90">
            {project.surface} <IconArrow className="w-4 h-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
