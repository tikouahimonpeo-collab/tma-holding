import React from "react";
import { Navbar1 } from "../accueil/components/Navbar1";
import { Footer3 } from "../accueil/components/Footer3";
import { Cta53 } from "../accueil/components/Cta53";
import { Testimonial6 } from "../accueil/components/Testimonial6";
import { Header } from "./components/Header";
import { Story } from "./components/Story";
import { Values } from "./components/Values";
import { Team } from "./components/Team";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <Header />
      <Story />
      <Values />
      <Team />
      <Testimonial6 />
      <Cta53 />
      <Footer3 />
    </div>
  );
}
