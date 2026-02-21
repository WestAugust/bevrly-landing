"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const FAQS = [
  {
    q: "Is Bevrly just for inventory management?",
    a: "No — Bevrly is complete beverage operations software. Inventory is just one piece. We also handle ordering, menu costing, vendor management, analytics, and POS integration. Think of it as the operating system for your entire beverage program.",
  },
  {
    q: "How long does setup take?",
    a: "Most operators are fully up and running within a week. We handle the POS integration and data import for you. Your first inventory count can happen on day one.",
  },
  {
    q: "Which POS systems do you integrate with?",
    a: "We integrate with Toast, Square, Revel, Clover, Lightspeed, and Aloha. Custom integrations are available on Enterprise plans.",
  },
  {
    q: "Can I manage multiple locations?",
    a: "Absolutely. Our Pro plan supports up to 5 locations, and Enterprise is unlimited. You get a centralized dashboard with per-location breakdowns, stock transfers, and cross-venue analytics.",
  },
  {
    q: "Do I need to change how my team does inventory?",
    a: "Nope. Bevrly works with your existing process — clipboard counts, barcode scanning, or whatever works for your team. We just make the data useful after it's captured.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Every plan includes email support. Pro plans get priority response and onboarding calls. Enterprise clients get a dedicated customer success manager and Slack connect.",
  },
];

interface FAQProps {
  variant?: "light" | "dark";
}

function FAQItem({
  q,
  a,
  isDark,
}: {
  q: string;
  a: string;
  isDark: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b"
      style={{
        borderColor: isDark ? "rgba(255,255,255,0.06)" : "#e8eaed",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span
          className="text-[16px] font-semibold pr-4"
          style={{ color: isDark ? "#fff" : "#0a1628" }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-xl"
          style={{ color: isDark ? "rgba(255,255,255,0.3)" : "#8b92a0" }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 text-[15px] leading-relaxed max-w-[640px]"
              style={{
                color: isDark ? "rgba(255,255,255,0.45)" : "#6b7280",
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ variant = "light" }: FAQProps) {
  const isDark = variant === "dark";

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: isDark ? "#0a1628" : "#f9fafb" }}
    >
      <div className="max-w-[720px] mx-auto">
        <AnimatedSection>
          <p
            className="text-center text-xs font-semibold tracking-[2px] uppercase mb-5"
            style={{ color: "#4a7cff" }}
          >
            FAQ
          </p>
          <h2
            className="text-center text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] mb-16"
            style={{ color: isDark ? "#fff" : "#0a1628" }}
          >
            Common questions.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div>
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} isDark={isDark} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
