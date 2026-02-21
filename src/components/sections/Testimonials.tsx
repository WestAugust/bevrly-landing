"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const TESTIMONIALS = [
  {
    quote: "We cut our pour cost by 4 points in the first two months. Bevrly showed us exactly where the waste was hiding.",
    name: "Sarah Chen",
    role: "Beverage Director",
    venue: "Nightbird SF",
    initials: "SC",
  },
  {
    quote: "Ordering used to take me 3 hours a week. Now it takes 10 minutes. I actually have time to train my bar team.",
    name: "Marcus Rivera",
    role: "GM / Partner",
    venue: "Bar Goto NYC",
    initials: "MR",
  },
  {
    quote: "Finally, software that understands how restaurants actually work. Not some generic warehouse tool with a food label slapped on.",
    name: "James Whitmore",
    role: "Wine Director",
    venue: "Compagnie des Vins Surnaturels",
    initials: "JW",
  },
];

interface TestimonialsProps {
  variant?: "light" | "dark";
}

export default function Testimonials({ variant = "light" }: TestimonialsProps) {
  const isDark = variant === "dark";

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: isDark ? "#0a1628" : "#f9fafb" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <p
            className="text-center text-xs font-semibold tracking-[2px] uppercase mb-5"
            style={{ color: "#4a7cff" }}
          >
            From the floor
          </p>
          <h2
            className="text-center text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] mb-16"
            style={{ color: isDark ? "#fff" : "#0a1628" }}
          >
            Operators love Bevrly.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-8 rounded-2xl flex flex-col transition-all duration-300"
                style={{
                  background: isDark ? "rgba(255,255,255,0.03)" : "#fff",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid #e8eaed",
                }}
              >
                <p
                  className="text-[16px] leading-relaxed mb-8 flex-1"
                  style={{
                    color: isDark ? "rgba(255,255,255,0.7)" : "#374151",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: "rgba(74, 124, 255, 0.1)",
                      color: "#4a7cff",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: isDark ? "#fff" : "#0a1628" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: isDark
                          ? "rgba(255,255,255,0.35)"
                          : "#6b7280",
                      }}
                    >
                      {t.role}, {t.venue}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
