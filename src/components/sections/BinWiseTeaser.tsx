"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BinWiseTeaser() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto">
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative overflow-hidden rounded-2xl p-10 md:p-14"
            style={{
              background: "linear-gradient(135deg, #0a1628 0%, #1a2d4a 100%)",
            }}
          >
            {/* Subtle glow */}
            <div
              className="absolute top-[-50%] right-[-20%] w-[400px] h-[400px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(74, 124, 255, 0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h2 className="text-[clamp(28px,5vw,48px)] font-bold tracking-tight leading-[1.1] text-white mb-3">
                Frustrated with BinWise?
              </h2>
              <h3 className="text-[clamp(22px,3.5vw,36px)] font-bold tracking-tight leading-[1.1] mb-6">
                <span className="text-accent">We can migrate you in 20 minutes.</span>
              </h3>
              <p className="text-base text-white/45 max-w-[480px] mb-8 leading-relaxed">
                Keep all your items, barcodes, and recipes. Drop the busywork.
                No more manual uploads, matching, or 3-step inventory windows.
              </p>
              <Link
                href="/switch"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/[0.08] border border-white/[0.12] px-6 py-3 rounded-xl transition-all duration-200 hover:bg-white/[0.14] hover:-translate-y-0.5"
              >
                See what changes
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 7h12m-5-5l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
