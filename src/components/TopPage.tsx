"use client";

import { useRef } from "react";
import HeroSection from "./HeroSection";
import OurServicesSection from "./OurServicesSection";

export default function TopPage() {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <HeroSection onButtonClick={handleScrollToServices}/>
      <OurServicesSection ref={servicesRef} />
    </>
  );
}
