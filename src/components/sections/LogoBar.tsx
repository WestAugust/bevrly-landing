"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const LOGOS = [
  { src: "/logos/claud_nyc.png", alt: "Claud NYC" },
  { src: "/logos/cote_miami.png", alt: "Cote Miami" },
  { src: "/logos/cucina_alba_nyc.png", alt: "Cucina Alba NYC" },
  { src: "/logos/four_horsemen_brooklyn.png", alt: "Four Horsemen Brooklyn" },
  { src: "/logos/le_chene_nyc.png", alt: "Le Chêne NYC" },
  { src: "/logos/market_table_nyc.png", alt: "Market Table NYC" },
  { src: "/logos/penny_nyc.png", alt: "Penny NYC" },
  { src: "/logos/plus_de_vin_brooklyn.png", alt: "Plus de Vin Brooklyn" },
  { src: "/logos/roya_austin.png", alt: "Roya Austin" },
  { src: "/logos/rude_mouth_brooklyn.png", alt: "Rude Mouth Brooklyn" },
  { src: "/logos/santi_nyc.png", alt: "Santi NYC" },
  { src: "/logos/stars_wine_bar_nyc.png", alt: "Stars Wine Bar NYC" },
  { src: "/logos/the_mary_lane_nyc.png", alt: "The Mary Lane NYC" },
  { src: "/logos/wayward_fare.png", alt: "Wayward Fare" },
  { src: "/logos/wrigley_mansion_az.png", alt: "Wrigley Mansion AZ" },
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
          <div className="flex items-center gap-20 animate-scroll-logos w-max">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center h-20 opacity-70 hover:opacity-90 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={80}
                  className="object-contain h-16 w-auto"
                  style={{
                    filter: isDark ? "brightness(0) invert(1)" : "brightness(0)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
