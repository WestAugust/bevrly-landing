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

export default function Glassmorphism() {
  return (
    <div
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #152240 40%, #0f1d34 100%)",
      }}
    >
      <Nav variant="transparent" />

      {/* Glass Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
        {/* Floating glass orbs */}
        <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74, 124, 255, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(52, 211, 153, 0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute top-[60%] left-[60%] w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-[860px]"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-8"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              color: "#4a7cff",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Now in beta
          </div>

          <h1 className="text-[clamp(42px,7vw,80px)] font-bold leading-[1.05] tracking-[-2.5px] text-white mb-7">
            The future of beverage operations is{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4a7cff 0%, #34d399 50%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              clear.
            </span>
          </h1>

          <p className="text-[clamp(17px,2vw,21px)] leading-relaxed text-white/45 max-w-[520px] mx-auto mb-10">
            Complete operations software for restaurants that take their
            beverage program seriously.
          </p>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="text-base font-semibold px-10 py-4 rounded-xl transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            Book a Demo
          </motion.button>
        </motion.div>

        {/* Glass cards floating */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[900px] w-full"
        >
          {[
            { label: "Pour Cost", value: "18.2%" },
            { label: "Monthly Rev", value: "$284k" },
            { label: "Variance", value: "-2.4%" },
            { label: "SKUs", value: "1,247" },
          ].map((s, i) => (
            <AnimatedSection key={s.label} delay={0.5 + i * 0.08}>
              <div
                className="p-5 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <span className="text-2xl md:text-3xl font-bold text-white block mb-1">
                  {s.value}
                </span>
                <span className="text-xs text-white/30 uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </motion.div>
      </section>

      <LogoBar variant="dark" />

      {/* Glass value props */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection>
            <h2 className="text-center text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] text-white mb-16">
              Why operators choose Bevrly.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Complete Visibility",
                desc: "See your entire beverage operation in one dashboard. Pour costs, inventory, orders, vendor performance — all in real time.",
                gradient: "from-accent/20 to-transparent",
              },
              {
                title: "Built for Restaurants",
                desc: "Not a warehouse tool with a food label. Every feature is designed for how beverage programs actually work.",
                gradient: "from-emerald/20 to-transparent",
              },
              {
                title: "Ridiculously Fast",
                desc: "From inventory counts to ordering to analytics — everything is fast, intuitive, and built to save you time.",
                gradient: "from-purple-400/20 to-transparent",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full p-8 rounded-2xl relative overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${item.gradient}`}
                  />
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/40">
                    {item.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
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
