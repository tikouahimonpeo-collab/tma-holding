import React from "react";
import { Navbar1 } from "../accueil/components/Navbar1";
import { Footer3 } from "../accueil/components/Footer3";
import { Testimonial6 } from "../accueil/components/Testimonial6";

import { ServicesHero } from "./sections/ServicesHero";
import { ServicesAnchor } from "./sections/ServicesAnchor";
import { WhyTMA } from "./sections/WhyTMA";
import { ServicesGrid } from "./sections/ServicesGrid";
import { KeyFigures } from "./sections/KeyFigures";
import { ServiceDetail } from "./sections/ServiceDetail";
import { PaintingCallout } from "./sections/PaintingCallout";
import { ConceptionProcess } from "./sections/ConceptionProcess";
import { RevetementTabs } from "./sections/RevetementTabs";
import { ShopFamilies } from "./sections/ShopFamilies";
import { GuaranteesBand } from "./sections/GuaranteesBand";
import { FinalCTASection } from "./sections/FinalCTASection";

import { SERVICES } from "./data/services";

// Mapping des encarts spécialisés par slug de service.
const EXTRAS = {
  peinture: <PaintingCallout />,
  conception: <ConceptionProcess />,
  revetement: <RevetementTabs />,
  shop: <ShopFamilies />,
};

export default function Page() {
  return (
    <div>
      <Navbar1 />

      {/* [2] Hero */}
      <ServicesHero />

      {/* [3] Ancres sticky */}
      <ServicesAnchor />

      {/* [4] Pourquoi TMA */}
      <WhyTMA />

      {/* [5] Grille 6 services preview */}
      <ServicesGrid />

      {/* [6] Chiffres clés */}
      <KeyFigures />

      {/* [7-12] Détails des 6 services avec encarts spécialisés */}
      {SERVICES.map((service, index) => (
        <ServiceDetail
          key={service.slug}
          service={service}
          index={index}
          extra={EXTRAS[service.slug] || null}
        />
      ))}

      {/* [13] Garanties */}
      <GuaranteesBand />

      {/* [14] Témoignages (existant) */}
      <Testimonial6 />

      {/* [15] CTA final */}
      <FinalCTASection />

      <Footer3 />
    </div>
  );
}
