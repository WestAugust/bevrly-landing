"use client";

import { motion } from "framer-motion";

interface NavProps {
  variant?: "light" | "dark" | "transparent";
}

export default function Nav({ variant = "light" }: NavProps) {
  const isDark = variant === "dark" || variant === "transparent";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-5 flex items-center justify-between"
      style={{
        background:
          variant === "transparent"
            ? "rgba(10, 22, 40, 0.6)"
            : isDark
              ? "rgba(10, 22, 40, 0.85)"
              : "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: isDark
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(10, 22, 40, 0.06)",
      }}
    >
      <span
        className="text-[22px] font-bold tracking-tight"
        style={{ color: isDark ? "#fff" : "#0a1628" }}
      >
        Bevrly
      </span>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6">
          {["Product", "Pricing", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: isDark ? "rgba(255,255,255,0.5)" : "#6b7280",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = isDark
                  ? "rgba(255,255,255,0.9)"
                  : "#0a1628")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isDark
                  ? "rgba(255,255,255,0.5)"
                  : "#6b7280")
              }
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: isDark ? "#fff" : "#0a1628",
            color: isDark ? "#0a1628" : "#fff",
          }}
        >
          Book a Demo
        </button>
      </div>
    </motion.nav>
  );
}
