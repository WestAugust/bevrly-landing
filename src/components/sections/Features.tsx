"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const FEATURES = [
  {
    title: "Real-Time Inventory",
    desc: "Track every bottle across every location. Automated counts, variance alerts, and dead stock detection.",
    icon: "📦",
    span: "col-span-1",
  },
  {
    title: "Smart Ordering",
    desc: "Auto-generated POs based on par levels, usage trends, and lead times. One click to send to any vendor.",
    icon: "🛒",
    span: "col-span-1",
  },
  {
    title: "Menu Costing",
    desc: "Build cocktail and wine program recipes with live cost data. Know your margins before the drink hits the bar.",
    icon: "🍸",
    span: "col-span-1",
  },
  {
    title: "Analytics Dashboard",
    desc: "Pour costs, revenue by category, velocity reports, and waste tracking — all visualized in real time.",
    icon: "📊",
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "Vendor Management",
    desc: "Compare pricing, track delivery performance, and consolidate invoices across all your distributors.",
    icon: "🤝",
    span: "col-span-1",
  },
  {
    title: "POS Integration",
    desc: "Seamless sync with Toast, Square, Revel, and more. Sales data flows in automatically for accurate pour cost calculations.",
    icon: "💳",
    span: "col-span-1",
  },
  {
    title: "Multi-Location",
    desc: "Centralized view across all your venues. Transfer stock, compare performance, and standardize operations.",
    icon: "🏢",
    span: "col-span-1",
  },
  {
    title: "Team Permissions",
    desc: "Role-based access for GMs, bar managers, and ownership. Everyone sees exactly what they need.",
    icon: "👥",
    span: "col-span-1 md:col-span-2",
  },
];

interface FeaturesProps {
  variant?: "light" | "dark";
  layout?: "grid" | "bento";
}

export default function Features({
  variant = "light",
  layout = "grid",
}: FeaturesProps) {
  const isDark = variant === "dark";
  const isBento = layout === "bento";

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: isDark ? "#0d1b2e" : "#fff" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <p
            className="text-center text-xs font-semibold tracking-[2px] uppercase mb-5"
            style={{ color: "#4a7cff" }}
          >
            Features
          </p>
          <h2
            className="text-center text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] mb-5"
            style={{ color: isDark ? "#fff" : "#0a1628" }}
          >
            Everything your beverage
            <br />
            program needs.
          </h2>
          <p
            className="text-center text-lg mb-16 max-w-[500px] mx-auto"
            style={{ color: isDark ? "rgba(255,255,255,0.4)" : "#6b7280" }}
          >
            Not just inventory. Complete operations software.
          </p>
        </AnimatedSection>

        <div
          className={
            isBento
              ? "grid grid-cols-1 md:grid-cols-3 gap-4"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          }
        >
          {FEATURES.map((f, i) => (
            <AnimatedSection
              key={f.title}
              delay={i * 0.06}
              className={isBento ? f.span : ""}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="h-full p-7 rounded-2xl transition-all duration-300"
                style={{
                  background: isDark
                    ? "rgba(255,255,255,0.03)"
                    : "#f9fafb",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid #e8eaed",
                }}
              >
                <span className="text-2xl block mb-4">{f.icon}</span>
                <h3
                  className="text-lg font-bold tracking-tight mb-2"
                  style={{ color: isDark ? "#fff" : "#0a1628" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{
                    color: isDark ? "rgba(255,255,255,0.4)" : "#6b7280",
                  }}
                >
                  {f.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
