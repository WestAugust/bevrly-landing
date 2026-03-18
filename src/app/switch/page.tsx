"use client";

import { motion } from "framer-motion";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import ClosingCTA from "@/components/sections/ClosingCTA";
import AnimatedSection from "@/components/ui/AnimatedSection";

const OLD_ITEMS = [
  "\"Creating\" items for every invoice",
  "Manually categorizing items",
  "Uploading sales through Avero",
  "Matching sales line by line",
  "Manually running reports",
  "3-step inventory window",
];

const NEW_ITEMS = [
  "Direct POS integration with live depletions",
  "Bulk Toast upload and pre-matching",
  "Cocktail recipes, batching, and reporting",
  "Simple iOS app for inventory and daily maintenance",
  "Advanced binning and location depletion",
  "Daily executive summary right in your email",
];

export default function SwitchPage() {
  return (
    <div className="bg-white">
      <Nav variant="light" />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 pt-32 pb-8 relative overflow-hidden">
        <div
          className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(74, 124, 255, 0.04) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-[800px]"
        >
          <span className="inline-block text-xs font-semibold tracking-[2px] uppercase text-accent mb-6">
            BinWise Migration
          </span>
          <h1 className="text-[clamp(36px,6vw,68px)] font-bold leading-[1.05] tracking-[-2px] mb-6 text-[#2563eb]">
            Stop fighting your software.
          </h1>
          <p className="text-[clamp(18px,2.5vw,24px)] text-gray-500 leading-relaxed max-w-[560px] mx-auto mb-4">
            Migrate from BinWise to Bevrly in 20 minutes. Keep everything —
            items, barcodes, recipes.
          </p>
        </motion.div>
      </section>

      {/* Before / After Split */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* OLD — what goes away */}
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M5 5l10 10M15 5L5 15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      What you&apos;re done with
                    </h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      The old way
                    </p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {OLD_ITEMS.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-200/60 flex items-center justify-center">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        >
                          <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-gray-600 line-through decoration-red-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* NEW — what you get */}
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 10l3.5 3.5L15 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      What you get instead
                    </h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      The Bevrly way
                    </p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {NEW_ITEMS.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-green-200/60 flex items-center justify-center">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 5.5l2 2L8 3.5" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-gray-700 font-medium">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <ClosingCTA variant="navy" />
      <Footer variant="dark" />
    </div>
  );
}
