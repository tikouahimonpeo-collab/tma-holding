import { IconStar, IconQuote } from "./icons";

export function TestimonialCard({ quote, author, role, avatar, rating = 5 }) {
  return (
    <div className="relative rounded-2xl bg-white border border-tma-stone p-7 md:p-8 shadow-sm hover:shadow-premium transition-all">
      <IconQuote className="absolute top-5 right-5 w-10 h-10 text-tma-electric/10" />
      <div className="flex gap-1 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <IconStar key={i} className="w-4 h-4 text-tma-gold" />
        ))}
      </div>
      <p className="text-[15px] md:text-base text-tma-night leading-relaxed mb-6">
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="h-11 w-11 rounded-full object-cover"
            loading="lazy"
          />
        )}
        <div>
          <p className="font-semibold text-sm text-tma-night">{author}</p>
          <p className="text-xs text-tma-ash">{role}</p>
        </div>
      </div>
    </div>
  );
}
