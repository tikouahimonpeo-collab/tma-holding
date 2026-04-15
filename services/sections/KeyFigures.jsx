"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { KEY_FIGURES } from "../data/services";

/**
 * Compteur animé au scroll — incrémente de 0 vers la valeur cible.
 */
function AnimatedCounter({ value, suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const target = parseInt(String(value).replace(/[^\d]/g, ""), 10) || 0;

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setDisplay(Math.floor(target * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration, started]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/**
 * Bandeau Chiffres clés — fond noir profond, chiffres or.
 */
export function KeyFigures() {
  return (
    <section className="relative overflow-hidden bg-tma-night py-20 text-white md:py-24">
      {/* Pattern discret */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-tma relative">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {KEY_FIGURES.map((f, i) => (
            <motion.div
              key={f.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`text-center ${
                i < KEY_FIGURES.length - 1
                  ? "md:border-r md:border-white/10"
                  : ""
              }`}
            >
              <div className="text-5xl font-extralight leading-none tracking-tight text-tma-gold md:text-6xl lg:text-7xl">
                <AnimatedCounter value={f.k} suffix={f.suffix} />
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.22em] text-white/70 md:text-sm">
                {f.v}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
