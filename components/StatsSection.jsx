export function StatsSection({ stats, light = false }) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 ${
        light ? "text-white" : "text-tma-night"
      }`}
    >
      {stats.map((s, i) => (
        <div key={i} className="border-l-2 border-tma-electric pl-5">
          <p className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            {s.k}
          </p>
          <p className={`mt-2 text-sm ${light ? "text-white/70" : "text-tma-ash"}`}>
            {s.v}
          </p>
        </div>
      ))}
    </div>
  );
}
