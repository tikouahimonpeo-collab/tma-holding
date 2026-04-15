import Link from "next/link";
import { BRAND, WA } from "@/lib/brand";

export const metadata = {
  title: "Page introuvable — 404",
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-tma-night text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,144,255,0.18),transparent_65%)]" />

      <div className="container-tma relative z-10 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-tma-electric animate-pulse" />
            Erreur 404
          </div>

          <h1 className="text-[120px] font-extrabold leading-none text-transparent md:text-[200px]" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)" }}>
            404
          </h1>

          <h2 className="heading-lg mt-4 text-white">
            Cette page n&apos;existe pas. <br />
            <span className="text-tma-electric-200">Mais votre projet, si.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/70">
            La page a peut-être été déplacée, ou vous avez suivi un lien cassé.
            Pas de panique — notre équipe reste disponible pour parler de votre projet BTP.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="btn-primary !px-8 !py-4 !text-base">
              Retour à l&apos;accueil
            </Link>
            <a
              href={WA.general}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp !px-8 !py-4 !text-base"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
                <path d="M19.1 17.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5 3.5 1.4 3.5.9 4.2.9.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3z" />
              </svg>
              Nous contacter
            </a>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {[
              { label: "Services", href: "/services" },
              { label: "Réalisations", href: "/realisations" },
              { label: "TMA Shop", href: "/boutique" },
              { label: "À propos", href: "/a-propos" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:border-tma-electric/50 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
