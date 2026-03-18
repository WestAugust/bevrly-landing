"use client";

import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import ValuePillars from "@/components/sections/ValuePillars";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductMockup from "@/components/sections/ProductMockup";
import Features from "@/components/_archive/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";

export default function MinimalLight() {
  return (
    <div className="bg-white">
      <Nav variant="light" />
      <Hero variant="light" />
      <LogoBar variant="light" />
      <ValuePillars variant="light" columns={2} />
      <HowItWorks variant="light" />
      <ProductMockup variant="light" />
      <Features variant="light" layout="grid" />
      <Testimonials variant="light" />
      <Pricing variant="light" />
      <FAQ variant="light" />
      <ClosingCTA variant="navy" />
      <Footer variant="dark" />
    </div>
  );
}
