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

export default function DarkMode() {
  return (
    <div style={{ background: "#0a1628" }}>
      <Nav variant="dark" />
      <Hero variant="dark" />
      <LogoBar variant="dark" />
      <ValuePillars variant="dark" columns={2} />
      <HowItWorks variant="dark" />
      <ProductMockup variant="dark" />
      <Features variant="dark" layout="grid" />
      <Testimonials variant="dark" />
      <Pricing variant="dark" />
      <FAQ variant="dark" />
      <ClosingCTA variant="accent" />
      <Footer variant="dark" />
    </div>
  );
}
