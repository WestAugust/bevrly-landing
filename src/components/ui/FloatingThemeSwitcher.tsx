"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme, THEMES } from "@/lib/theme-context";

export default function FloatingThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const currentLabel = THEMES.find((t) => t.id === theme)?.label;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white dark:bg-navy-light rounded-2xl shadow-2xl border border-gray-200/60 dark:border-white/10 p-2 min-w-[220px]"
            style={{
              background: theme === "dark-mode" || theme === "glassmorphism"
                ? "rgba(19, 32, 56, 0.95)"
                : "rgba(255, 255, 255, 0.97)",
              backdropFilter: "blur(20px)",
              borderColor: theme === "dark-mode" || theme === "glassmorphism"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.08)",
            }}
          >
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                style={{
                  color: t.id === theme
                    ? "#4a7cff"
                    : theme === "dark-mode" || theme === "glassmorphism"
                      ? "rgba(255,255,255,0.6)"
                      : "#6b7280",
                  background: t.id === theme
                    ? theme === "dark-mode" || theme === "glassmorphism"
                      ? "rgba(74, 124, 255, 0.12)"
                      : "rgba(74, 124, 255, 0.06)"
                    : "transparent",
                }}
              >
                {t.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-3 px-5 py-3 rounded-full shadow-lg border text-sm font-semibold transition-colors duration-300"
        style={{
          background: theme === "dark-mode" || theme === "glassmorphism"
            ? "rgba(19, 32, 56, 0.9)"
            : "rgba(255, 255, 255, 0.95)",
          borderColor: theme === "dark-mode" || theme === "glassmorphism"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.08)",
          color: theme === "dark-mode" || theme === "glassmorphism"
            ? "rgba(255,255,255,0.8)"
            : "#0a1628",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-accent" />
        {currentLabel}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="opacity-40"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  );
}
