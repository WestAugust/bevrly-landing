"use client";

import { motion } from "framer-motion";

interface HeroProps {
  variant?: "light" | "dark" | "gradient" | "split";
  headline?: string;
  subline?: string;
}

export default function Hero({
  variant = "light",
  headline = "Complete beverage operations for modern restaurants.",
  subline = "Inventory, ordering, costing, and analytics — all in one platform built for how you actually run your program.",
}: HeroProps) {
  const isDark = variant === "dark" || variant === "gradient";

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 pt-32 pb-8 overflow-hidden"
      style={{
        background:
          variant === "gradient"
            ? "linear-gradient(145deg, #0a1628 0%, #1a2d4a 40%, #243b5e 70%, #0a1628 100%)"
            : isDark
              ? "#0a1628"
              : "#ffffff",
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(74, 124, 255, 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(74, 124, 255, 0.04) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-[1100px]"
      >
        <h1
          className="text-[clamp(42px,7vw,82px)] font-bold leading-[1.05] tracking-[-2.5px] mb-7"
          style={{ color: isDark ? "#fff" : "#2563eb" }}
        >
          {headline}
        </h1>

        <div className="max-w-[800px] mx-auto mb-10 space-y-4">
          <p
            className="text-[clamp(18px,2.8vw,28px)] font-bold leading-[1.3] tracking-[-0.5px]"
            style={{ color: isDark ? "#fff" : "#0a1628" }}
          >
            Bevrly is data-driven beverage operations software.
          </p>
          <p
            className="text-[clamp(18px,2.8vw,28px)] font-bold leading-[1.3] tracking-[-0.5px]"
            style={{ color: isDark ? "#fff" : "#0a1628" }}
          >
            Connecting sales, inventory, and purchases to clearly show
            what&apos;s really driving your business.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-semibold px-8 py-3 rounded-xl transition-shadow duration-300"
            style={{
              background: isDark ? "#fff" : "#0a1628",
              color: isDark ? "#0a1628" : "#fff",
              boxShadow: isDark
                ? "0 8px 32px rgba(255,255,255,0.1)"
                : "0 8px 32px rgba(10, 22, 40, 0.2)",
            }}
          >
            Book a Demo
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
