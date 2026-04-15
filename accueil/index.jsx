import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { HeroVideo } from "@/components/HeroVideo";
import { BeforeAfterSection } from "@/components/BeforeAfterSlider";
import { CorporateStats } from "@/components/CorporateStats";
import { DivisionsGrid } from "@/components/DivisionsGrid";
import { Leadership } from "@/components/Leadership";
import { PresenceMap } from "@/components/PresenceMap";
import { PressLogos } from "@/components/PressLogos";
import { Layout513 } from "./components/Layout513";
import { Layout419 } from "./components/Layout419";
import { Layout358 } from "./components/Layout358";
import { Portfolio11 } from "./components/Portfolio11";
import { Testimonial6 } from "./components/Testimonial6";
import { Faq1 } from "./components/Faq1";
import { Cta53 } from "./components/Cta53";
import { Contact14 } from "./components/Contact14";
import { Cta58 } from "./components/Cta58";
import { Layout141 } from "./components/Layout141";
import { Footer3 } from "./components/Footer3";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      {/* Pour activer la vidéo : place un fichier dans /public/videos/tma-chantier-hero.mp4
          et passe videoSrc="/videos/tma-chantier-hero.mp4" à HeroVideo.
          Sans videoSrc, fallback image Unsplash via IMG.heroHome. */}
      <HeroVideo />
      <PressLogos />
      <CorporateStats variant="dark" />
      <DivisionsGrid />
      <Layout513 />
      <Layout419 />
      <BeforeAfterSection />
      <Layout358 />
      <Portfolio11 />
      <PresenceMap />
      <Leadership />
      <Testimonial6 />
      <Faq1 />
      <Cta53 />
      <Contact14 />
      <Cta58 />
      <Layout141 />
      <Footer3 />
    </div>
  );
}
