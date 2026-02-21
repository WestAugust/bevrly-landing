"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface ClosingCTAProps {
  variant?: "navy" | "accent" | "light";
}

export default function ClosingCTA({ variant = "navy" }: ClosingCTAProps) {
  const isLight = variant === "light";

  return (
    <section
      className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden"
      style={{
        background:
          variant === "accent"
            ? "linear-gradient(135deg, #4a7cff 0%, #2855cc 100%)"
            : isLight
              ? "#fff"
              : "#0a1628",
      }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(74, 124, 255, 0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(74, 124, 255, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-[700px] mx-auto">
        <AnimatedSection>
          <h2
            className="text-[clamp(32px,5vw,56px)] font-bold tracking-[-2px] leading-[1.1] mb-5"
            style={{ color: isLight ? "#0a1628" : "#fff" }}
          >
            Ready to see what Bevrly can do for your program?
          </h2>
          <p
            className="text-lg mb-10"
            style={{
              color: isLight
                ? "#6b7280"
                : "rgba(255,255,255,0.5)",
            }}
          >
            15 minutes. No pressure. Just a conversation.
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="text-base font-semibold px-10 py-4 rounded-xl transition-shadow duration-300"
            style={{
              background: isLight ? "#0a1628" : "#fff",
              color: isLight ? "#fff" : "#0a1628",
              boxShadow: isLight
                ? "0 8px 32px rgba(10,22,40,0.2)"
                : "0 8px 32px rgba(255,255,255,0.15)",
            }}
          >
            Book a Demo
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
}
