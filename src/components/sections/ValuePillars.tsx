"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const PILLARS = [
  {
    num: "01",
    title: "Get your\ntime back.",
    desc: "Fewer clicks. Less busywork. More time on the floor with your team and your guests. Bevrly handles the tedious stuff so you can focus on hospitality.",
  },
  {
    num: "02",
    title: "Know your\nnumbers.",
    desc: "Real-time clarity on your beverage program — what's moving, what's sitting, where the money goes. No more spreadsheets. No more guessing.",
  },
  {
    num: "03",
    title: "Order\nsmarter.",
    desc: "Automated par levels, one-click ordering, vendor price tracking. Stop overspending and start running a tighter ship.",
  },
  {
    num: "04",
    title: "Scale with\nconfidence.",
    desc: "Whether you're one location or twenty, Bevrly grows with you. Consistent processes, centralized data, total visibility.",
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
      className="py-24 md:py-32 px-6 md:px-12"
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
