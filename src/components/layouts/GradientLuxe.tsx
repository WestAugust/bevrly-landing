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

export default function GradientLuxe() {
  return (
    <div style={{ background: "#0a1628" }}>
      <Nav variant="transparent" />
      <Hero
        variant="gradient"
        headline="Elevate every pour."
        subline="The premium operations platform for world-class beverage programs. From cellar to service, Bevrly has you covered."
      />
      <LogoBar variant="dark" />
      <section
        className="relative"
        style={{
          background:
            "linear-gradient(180deg, #0a1628 0%, #0d1f38 50%, #0a1628 100%)",
        }}
      >
        <ValuePillars variant="dark" columns={2} />
      </section>
      <HowItWorks variant="dark" />
      <ProductMockup variant="dark" />
      <Features variant="dark" layout="bento" />
      <Testimonials variant="dark" />
      <Pricing variant="dark" />
      <FAQ variant="dark" />
      <ClosingCTA variant="accent" />
      <Footer variant="dark" />
    </div>
  );
}
