import React from "react";
import { Benefits } from "@/components/Sections/Benefits/Benefits";
import { Blog } from "@/components/Sections/Blog/Blog";
import { FAQ } from "@/components/Sections/FAQ/FAQ";
import { Hero } from "@/components/Sections/Hero/Hero";
import { HowItWorks } from "@/components/Sections/HowItWorks/HowItWorks";
import { IdealFor } from "@/components/Sections/IdealFor/IdealFor";
import { Info } from "@/components/Sections/Info/Info";
import { PopularCities } from "@/components/Sections/PopularCities/PopularCities";
import { Pricing } from "@/components/Sections/Pricing/Pricing";
import { StartToday } from "@/components/Sections/StartToday/StartToday";
import { WhyUs } from "@/components/Sections/WhyUs/WhyUs";

export default async function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Info />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <WhyUs />
      <FAQ />
      <IdealFor />
      <PopularCities />
      <Blog />
      <StartToday />
    </React.Fragment>
  );
}
