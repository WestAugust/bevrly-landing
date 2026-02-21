"use client";

import { motion } from "framer-motion";
import Nav from "@/components/sections/Nav";
import LogoBar from "@/components/sections/LogoBar";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductMockup from "@/components/sections/ProductMockup";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

const BENTO_ITEMS = [
  {
    title: "Pour Cost Tracking",
    desc: "Real-time visibility into your actual vs. theoretical costs",
    stat: "18.2%",
    statLabel: "avg pour cost",
    color: "#4a7cff",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    title: "Smart Ordering",
    desc: "Auto-generated POs based on par levels",
    stat: "10min",
    statLabel: "vs 3 hours",
    color: "#34d399",
    span: "md:col-span-1",
    large: false,
  },
  {
    title: "Vendor Management",
    desc: "Compare prices across distributors",
    stat: "12%",
    statLabel: "avg savings",
    color: "#fbbf24",
    span: "md:col-span-1",
    large: false,
  },
  {
    title: "Menu Costing",
    desc: "Build recipes with live ingredient costs",
    stat: "$284k",
    statLabel: "monthly rev tracked",
    color: "#a78bfa",
    span: "md:col-span-1",
    large: false,
  },
  {
    title: "Analytics",
    desc: "Category performance, velocity, and waste reports",
    stat: "1,247",
    statLabel: "SKUs tracked",
    color: "#f87171",
    span: "md:col-span-1",
    large: false,
  },
  {
    title: "Multi-Location",
    desc: "Centralized operations across all your venues",
    stat: "5+",
    statLabel: "locations",
    color: "#34d399",
    span: "md:col-span-2",
    large: false,
  },
];

export default function BentoGrid() {
  return (
    <div className="bg-white">
      <Nav variant="light" />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 bg-accent/[0.06] text-accent border border-accent/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Now in beta
          </div>
          <h1 className="text-[clamp(42px,7vw,78px)] font-bold leading-[1.05] tracking-[-2.5px] text-navy mb-7">
            Your beverage program,
            <br />
            <span className="text-gray-300">organized.</span>
          </h1>
          <p className="text-[clamp(17px,2vw,21px)] leading-relaxed text-gray-500 max-w-[520px] mx-auto mb-10">
            Everything you need to run a profitable beverage operation — in one modern platform.
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="text-base font-semibold px-10 py-4 rounded-xl bg-navy text-white shadow-lg"
          >
            Book a Demo
          </motion.button>
        </motion.div>
      </section>

      <LogoBar variant="light" />

      {/* Bento Feature Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <p className="text-center text-xs font-semibold tracking-[2px] uppercase text-accent mb-5">
              Platform
            </p>
            <h2 className="text-center text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] text-navy mb-16">
              Everything in one place.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {BENTO_ITEMS.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.06} className={item.span}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="h-full p-8 rounded-2xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${item.color}12`, color: item.color }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: item.color }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`font-bold tracking-tight block ${
                        item.large ? "text-5xl" : "text-3xl"
                      }`}
                      style={{ color: item.color }}
                    >
                      {item.stat}
                    </span>
                    <span className="text-xs text-gray-400 mt-1 block">
                      {item.statLabel}
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks variant="light" />
      <ProductMockup variant="light" />
      <Testimonials variant="light" />
      <Pricing variant="light" />
      <FAQ variant="light" />
      <ClosingCTA variant="navy" />
      <Footer variant="dark" />
    </div>
  );
}
