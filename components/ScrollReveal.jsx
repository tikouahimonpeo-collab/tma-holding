"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Wrapper générique pour animations d'apparition au scroll.
 *
 * <ScrollReveal>
 *   <div>...</div>
 * </ScrollReveal>
 *
 * Variants disponibles : "up" (défaut), "left", "right", "zoom", "fade".
 */
export function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  amount = 0.2,
}) {
  const variants = {
    up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
    zoom: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
    fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Effet parallax vertical — place à l'intérieur d'une section avec
 * position: relative. L'enfant va se déplacer plus lentement que le scroll.
 *
 * <div className="relative overflow-hidden">
 *   <Parallax speed={0.3}>
 *     <img ... className="absolute inset-0" />
 *   </Parallax>
 * </div>
 */
export function Parallax({ children, speed = 0.3, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Compteur animé de 0 → target, se déclenche quand entre dans le viewport.
 * Utile pour stats ("150+ projets", "10 ans", etc.)
 *
 * <Counter to={150} suffix="+" duration={1.6} />
 */
export function Counter({ to, duration = 1.4, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done) {
          const start = performance.now();
          const tick = (t) => {
            const progress = Math.min((t - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(to * eased));
            if (progress < 1) requestAnimationFrame(tick);
            else setDone(true);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, done]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}
