import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import ValuePillars from "@/components/sections/ValuePillars";
import FAQ from "@/components/sections/FAQ";
import BinWiseTeaser from "@/components/sections/BinWiseTeaser";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Nav variant="light" />
      <Hero
        variant="light"
        headline="Smart beverage operations for hospitality."
        subline="Live insights. Less friction. Real profit."
      />
      <ValuePillars variant="light" columns={4} />
      <LogoBar variant="light" />
      <BinWiseTeaser />
      <FAQ variant="light" />
      <ClosingCTA variant="navy" />
      <Footer variant="dark" />
    </div>
  );
}
