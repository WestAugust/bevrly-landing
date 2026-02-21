"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const LOGOS = [
  "Eleven Madison Park",
  "Alinea Group",
  "Nobu",
  "Union Square Hospitality",
  "Major Food Group",
  "Death & Co",
  "Momofuku",
  "Le Bernardin",
  "Dante NYC",
  "The NoMad",
];

interface LogoBarProps {
  variant?: "light" | "dark";
}

export default function LogoBar({ variant = "light" }: LogoBarProps) {
  const isDark = variant === "dark";

  return (
    <AnimatedSection>
      <section
        className="py-16 md:py-20"
        style={{
          background: isDark ? "#0a1628" : "#fff",
          borderTop: isDark
            ? "1px solid rgba(255,255,255,0.04)"
            : "1px solid #e8eaed",
        }}
      >
        <p
          className="text-center text-[13px] font-semibold tracking-[1.5px] uppercase mb-9"
          style={{ color: isDark ? "rgba(255,255,255,0.25)" : "#8b92a0" }}
        >
          Trusted by the best
        </p>
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 w-[120px] z-10 pointer-events-none"
            style={{
              background: isDark
                ? "linear-gradient(to right, #0a1628, transparent)"
                : "linear-gradient(to right, #fff, transparent)",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-[120px] z-10 pointer-events-none"
            style={{
              background: isDark
                ? "linear-gradient(to left, #0a1628, transparent)"
                : "linear-gradient(to left, #fff, transparent)",
            }}
          />
          <div className="flex items-center gap-16 animate-scroll-logos w-max">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span
                key={i}
                className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight whitespace-nowrap select-none shrink-0"
                style={{
                  color: isDark ? "rgba(255,255,255,0.15)" : "#d1d5db",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.15)" : "#d1d5db",
                  }}
                />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
