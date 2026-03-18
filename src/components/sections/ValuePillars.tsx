"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const PILLARS = [
  {
    num: "01",
    title: "Get your time back.",
    desc: "Run counts faster, generate purchase orders automatically, and keep your beverage program organized without spreadsheets.",
  },
  {
    num: "02",
    title: "Know your numbers\n(not just COGS).",
    desc: "Track costs, inventory movement, waste, and profitability by bottle, cocktail, and category.",
  },
  {
    num: "03",
    title: "Make smarter decisions.",
    desc: "Adjust menus, pricing, and ordering based on real sales trends, product performance, and margin drivers.",
  },
  {
    num: "04",
    title: "Scale with confidence.",
    desc: "Run consistent beverage programs across every location and standardize ordering, recipes, and processes.",
  },
];

interface ValuePillarsProps {
  variant?: "light" | "dark";
  columns?: 2 | 4;
}

export default function ValuePillars({
  variant = "light",
  columns = 2,
}: ValuePillarsProps) {
  const isDark = variant === "dark";

  return (
    <section
      className="py-12 md:py-16 px-6 md:px-12"
      style={{ background: isDark ? "#0d1b2e" : "#fff" }}
    >
      <div
        className={`max-w-[1200px] mx-auto grid gap-12 md:gap-20 ${
          columns === 4
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {PILLARS.map((p, i) => (
          <AnimatedSection key={p.num} delay={i * 0.1}>
            <div className="py-6">
              <span
                className="text-xs font-semibold tracking-[2px] uppercase block mb-5"
                style={{ color: "#4a7cff" }}
              >
                {p.num}
              </span>
              <h2
                className="text-[clamp(28px,3.5vw,42px)] font-bold tracking-tight leading-[1.1] mb-5 whitespace-pre-line"
                style={{ color: isDark ? "#fff" : "#0a1628" }}
              >
                {p.title}
              </h2>
              <p
                className="text-[17px] leading-relaxed max-w-[440px]"
                style={{
                  color: isDark ? "rgba(255,255,255,0.45)" : "#6b7280",
                }}
              >
                {p.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
