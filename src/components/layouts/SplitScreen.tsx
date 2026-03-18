"use client";

import { motion } from "framer-motion";
import Nav from "@/components/sections/Nav";
import LogoBar from "@/components/sections/LogoBar";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductMockup from "@/components/sections/ProductMockup";
import Features from "@/components/_archive/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function SplitScreen() {
  return (
    <div className="bg-white">
      <Nav variant="light" />

      {/* Split Hero */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-32 pb-16 md:pb-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 bg-accent/[0.06] text-accent border border-accent/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Now in beta
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] tracking-[-2px] text-navy mb-6">
              Run your beverage program like a business.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-[440px] mb-10">
              Inventory, ordering, costing, analytics — all in one platform built for how restaurants actually operate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-base font-semibold px-8 py-4 rounded-xl bg-navy text-white"
              >
                Book a Demo
              </motion.button>
              <button className="text-sm font-medium text-gray-500 px-6 py-4">
                See how it works &rarr;
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right — visual */}
        <div className="relative bg-navy overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 p-8 md:p-12 w-full"
          >
            {/* Mini dashboard preview */}
            <div className="bg-white/[0.06] backdrop-blur rounded-2xl border border-white/[0.08] p-6 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/80 font-semibold">
                  Dashboard
                </span>
                <span className="text-xs text-white/30">Live</span>
              </div>
              {[
                { label: "Pour Cost", value: "18.2%", color: "#4a7cff" },
                { label: "Monthly Rev", value: "$284k", color: "#34d399" },
                { label: "Variance", value: "-2.4%", color: "#34d399" },
                { label: "Active SKUs", value: "1,247", color: "#a78bfa" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0"
                >
                  <span className="text-sm text-white/40">{s.label}</span>
                  <span
                    className="text-lg font-bold"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-emerald/5 pointer-events-none" />
        </div>
      </section>

      <LogoBar variant="light" />

      {/* Split feature sections */}
      {[
        {
          title: "Inventory that actually works.",
          desc: "Track every bottle across every location in real time. Automated variance detection, dead stock alerts, and one-tap counting.",
          stat: "1,247 SKUs",
          statSub: "tracked across 3 locations",
        },
        {
          title: "Ordering on autopilot.",
          desc: "Smart par levels, auto-generated POs, and one-click sending to any vendor. Stop spending hours on paperwork.",
          stat: "10 min",
          statSub: "weekly ordering time (was 3+ hrs)",
          reverse: true,
        },
      ].map((section, i) => (
        <section
          key={i}
          className={`py-24 px-8 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto ${
            (section as { reverse?: boolean }).reverse ? "direction-rtl" : ""
          }`}
          style={{
            direction:
              (section as { reverse?: boolean }).reverse ? "rtl" : "ltr",
          }}
        >
          <AnimatedSection>
            <div style={{ direction: "ltr" }}>
              <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight leading-[1.1] text-navy mb-5">
                {section.title}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-[440px] mb-8">
                {section.desc}
              </p>
              <button className="text-sm font-semibold text-accent">
                Learn more &rarr;
              </button>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div
              className="bg-gray-50 rounded-2xl border border-gray-100 p-10 text-center"
              style={{ direction: "ltr" }}
            >
              <span className="text-5xl font-bold text-navy block mb-2">
                {section.stat}
              </span>
              <span className="text-sm text-gray-400">{section.statSub}</span>
            </div>
          </AnimatedSection>
        </section>
      ))}

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
