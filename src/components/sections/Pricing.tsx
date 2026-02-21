"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const PLANS = [
  {
    name: "Starter",
    price: "$149",
    period: "/mo",
    desc: "For single-location operators getting started.",
    features: [
      "1 location",
      "Inventory tracking",
      "Basic ordering",
      "POS integration",
      "Email support",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Pro",
    price: "$349",
    period: "/mo",
    desc: "For serious programs that want full visibility.",
    features: [
      "Up to 5 locations",
      "Everything in Starter",
      "Menu costing & recipes",
      "Analytics dashboard",
      "Vendor price tracking",
      "Priority support",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For groups that need scale and customization.",
    features: [
      "Unlimited locations",
      "Everything in Pro",
      "Custom integrations",
      "Dedicated CSM",
      "API access",
      "SSO & permissions",
    ],
    cta: "Talk to Sales",
    featured: false,
  },
];

interface PricingProps {
  variant?: "light" | "dark";
}

export default function Pricing({ variant = "light" }: PricingProps) {
  const isDark = variant === "dark";

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: isDark ? "#0d1b2e" : "#fff" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection>
          <p
            className="text-center text-xs font-semibold tracking-[2px] uppercase mb-5"
            style={{ color: "#4a7cff" }}
          >
            Pricing
          </p>
          <h2
            className="text-center text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] mb-5"
            style={{ color: isDark ? "#fff" : "#0a1628" }}
          >
            Simple, transparent pricing.
          </h2>
          <p
            className="text-center text-lg mb-16 max-w-[460px] mx-auto"
            style={{ color: isDark ? "rgba(255,255,255,0.4)" : "#6b7280" }}
          >
            14-day free trial on all plans. No credit card required.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-8 rounded-2xl flex flex-col relative transition-all duration-300"
                style={{
                  background: plan.featured
                    ? isDark
                      ? "rgba(74, 124, 255, 0.08)"
                      : "rgba(74, 124, 255, 0.03)"
                    : isDark
                      ? "rgba(255,255,255,0.03)"
                      : "#f9fafb",
                  border: plan.featured
                    ? "2px solid rgba(74, 124, 255, 0.3)"
                    : isDark
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "1px solid #e8eaed",
                }}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full bg-accent text-white">
                    Popular
                  </span>
                )}

                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: isDark ? "#fff" : "#0a1628" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className="text-4xl font-bold tracking-tight"
                    style={{ color: isDark ? "#fff" : "#0a1628" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{
                      color: isDark ? "rgba(255,255,255,0.35)" : "#6b7280",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className="text-sm mb-8"
                  style={{
                    color: isDark ? "rgba(255,255,255,0.4)" : "#6b7280",
                  }}
                >
                  {plan.desc}
                </p>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm"
                      style={{
                        color: isDark ? "rgba(255,255,255,0.6)" : "#374151",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3.5 8.5L6.5 11.5L12.5 5.5"
                          stroke="#4a7cff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: plan.featured
                      ? "#4a7cff"
                      : isDark
                        ? "rgba(255,255,255,0.06)"
                        : "#0a1628",
                    color: plan.featured
                      ? "#fff"
                      : isDark
                        ? "rgba(255,255,255,0.7)"
                        : "#fff",
                    border: plan.featured
                      ? "none"
                      : isDark
                        ? "1px solid rgba(255,255,255,0.1)"
                        : "none",
                  }}
                >
                  {plan.cta}
                </button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
