"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { RxChevronDown } from "react-icons/rx";
import { BRAND, NAV, WA } from "@/lib/brand";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((p) => !p);
  const openOnMobileDropdownMenu = () => setIsDropdownOpen((p) => !p);
  const openOnDesktopDropdownMenu = () => !isMobile && setIsDropdownOpen(true);
  const closeOnDesktopDropdownMenu = () => !isMobile && setIsDropdownOpen(false);
  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu: isMobileMenuOpen ? "open" : "close",
    animateMobileBtn: isMobileMenuOpen ? ["open", "rotatePhase"] : "closed",
    animateDropdownMenu: isDropdownOpen ? "open" : "close",
    animateDropdownIcon: isDropdownOpen ? "rotated" : "initial",
  };
};

export function Navbar1() {
  const a = useRelume();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container-tma flex min-h-[72px] items-center justify-between lg:min-h-[84px]">
        {/* Logo */}
        <Logo size={44} />


        {/* Mobile trigger */}
        <button
          aria-label="Menu"
          className="flex size-11 flex-col items-center justify-center lg:hidden"
          onClick={a.toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-tma-night"
            animate={a.animateMobileBtn}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-tma-night"
            animate={a.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              close: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-tma-night"
            animate={a.animateMobileBtn}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
            }}
          />
        </button>

        {/* Menu */}
        <motion.nav
          variants={{
            open: { height: "var(--h-open, 100dvh)" },
            close: { height: "var(--h-closed, 0)" },
          }}
          initial="close"
          animate={a.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="absolute left-0 top-full w-full overflow-hidden bg-white shadow-premium lg:static lg:flex lg:w-auto lg:items-center lg:gap-1 lg:shadow-none lg:[--h-closed:auto] lg:[--h-open:auto]"
        >
          <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:gap-1 lg:px-0 lg:py-0">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  onMouseEnter={a.openOnDesktopDropdownMenu}
                  onMouseLeave={a.closeOnDesktopDropdownMenu}
                  className="relative"
                >
                  <button
                    onClick={a.openOnMobileDropdownMenu}
                    className="flex w-full items-center justify-between gap-2 py-3 text-base font-medium text-tma-night transition hover:text-tma-electric lg:px-4 lg:py-2 lg:text-[15px]"
                  >
                    {item.label}
                    <motion.span
                      animate={a.animateDropdownIcon}
                      variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                      transition={{ duration: 0.25 }}
                    >
                      <RxChevronDown />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    <motion.div
                      variants={{
                        open: { opacity: 1, y: 0, display: "block" },
                        close: { opacity: 0, y: -6, transitionEnd: { display: "none" } },
                      }}
                      initial="close"
                      animate={a.animateDropdownMenu}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-1 pl-4 lg:absolute lg:left-0 lg:min-w-[240px] lg:rounded-xl lg:border lg:border-tma-night/8 lg:bg-white lg:p-3 lg:shadow-premium"
                    >
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          className="rounded-md px-3 py-2 text-sm text-tma-night/80 transition hover:bg-tma-stone hover:text-tma-electric"
                        >
                          {c.label}
                        </a>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 text-base font-medium text-tma-night transition hover:text-tma-electric lg:px-4 lg:py-2 lg:text-[15px]"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 px-6 pb-6 lg:ml-6 lg:flex-row lg:items-center lg:gap-3 lg:px-0 lg:pb-0">
            <LanguageSwitcher className="self-start lg:self-auto" />
            <a href="/contact" className="btn-ghost !py-2.5 !text-sm">
              Devis gratuit
            </a>
            <a
              href={WA.general}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp !py-2.5 !text-sm"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
                <path d="M19.1 17.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5 3.5 1.4 3.5.9 4.2.9.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
