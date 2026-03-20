"use client";

import { motion } from "framer-motion";
import Nav from "@/components/sections/Nav";
import LogoBar from "@/components/sections/LogoBar";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductMockup from "@/components/sections/ProductMockup";
import Features from "@/components/_archive/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/_archive/FAQ";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BoldEditorial() {
  return (
    <div className="bg-white">
      <Nav variant="light" />

      {/* Editorial Hero — oversized type */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 pt-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold tracking-[3px] uppercase text-accent block mb-8">
              Beverage Operations, Reimagined
            </span>
            <h1 className="text-[clamp(52px,10vw,140px)] font-bold leading-[0.9] tracking-[-4px] text-navy mb-8">
              Stop
              <br />
              guessing.
              <br />
              <span className="text-gray-300">Start</span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #0a1628 0%, #4a7cff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                knowing.
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row items-start gap-6 mt-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-base font-semibold px-10 py-4 rounded-xl bg-navy text-white"
              >
                Book a Demo
              </motion.button>
              <p className="text-gray-500 text-lg max-w-[340px] leading-relaxed">
                Complete beverage operations for restaurants that take their
                program seriously.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <LogoBar variant="light" />

      {/* Editorial value props — large text blocks */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto space-y-32">
          {[
            {
              big: "18.2%",
              label: "Average pour cost reduction in the first 90 days.",
            },
            {
              big: "3hrs",
              label:
                "Saved per week on ordering alone. That's time back on the floor.",
            },
            {
              big: "1,247",
              label:
                "SKUs tracked in real time. Every bottle, every location, every day.",
            },
          ].map((item, i) => (
            <AnimatedSection key={i}>
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-16">
                <span className="text-[clamp(64px,12vw,160px)] font-bold tracking-[-4px] leading-none text-navy">
                  {item.big}
                </span>
                <p className="text-xl md:text-2xl text-gray-400 max-w-[400px] leading-relaxed pb-4">
                  {item.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

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
