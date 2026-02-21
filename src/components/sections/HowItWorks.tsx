"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const STEPS = [
  {
    num: "01",
    title: "Connect your systems",
    desc: "Plug in your POS, vendors, and reservation platforms. We sync everything automatically — zero manual entry.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.64-6.36l-2.83 2.83m-5.06 5.06l-2.83 2.83m0-10.72l2.83 2.83m5.06 5.06l2.83 2.83" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "See the full picture",
    desc: "Real-time dashboards show pour costs, inventory levels, order status, and variance — all in one view.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Optimize & grow",
    desc: "Use insights to cut waste, negotiate better pricing, and build a beverage program that actually makes money.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

interface HowItWorksProps {
  variant?: "light" | "dark";
}

export default function HowItWorks({ variant = "light" }: HowItWorksProps) {
  const isDark = variant === "dark";

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: isDark ? "#0a1628" : "#f9fafb" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection>
          <p
            className="text-center text-xs font-semibold tracking-[2px] uppercase mb-5"
            style={{ color: "#4a7cff" }}
          >
            How it works
          </p>
          <h2
            className="text-center text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] mb-16"
            style={{ color: isDark ? "#fff" : "#0a1628" }}
          >
            Up and running in minutes.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.12}>
              <div className="relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-full w-full h-px"
                    style={{
                      background: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "#e8eaed",
                    }}
                  />
                )}

                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-2xl transition-all duration-300"
                  style={{
                    background: isDark
                      ? "rgba(255,255,255,0.03)"
                      : "#fff",
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "1px solid #e8eaed",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(74, 124, 255, 0.08)",
                      color: "#4a7cff",
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-[11px] font-bold tracking-[2px] uppercase block mb-3"
                    style={{ color: "#4a7cff" }}
                  >
                    Step {step.num}
                  </span>
                  <h3
                    className="text-xl font-bold tracking-tight mb-3"
                    style={{ color: isDark ? "#fff" : "#0a1628" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{
                      color: isDark ? "rgba(255,255,255,0.45)" : "#6b7280",
                    }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
