"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

interface ProductMockupProps {
  variant?: "light" | "dark";
}

export default function ProductMockup({ variant = "light" }: ProductMockupProps) {
  const isDark = variant === "dark";

  const sidebarItems = [
    { name: "Dashboard", active: true },
    { name: "Inventory", active: false },
    { name: "Orders", active: false },
    { name: "Analytics", active: false },
    { name: "Menu Costing", active: false },
    { name: "Vendors", active: false },
  ];

  const stats = [
    { label: "Pour Cost", value: "18.2%" },
    { label: "Monthly Rev", value: "$284k" },
    { label: "Variance", value: "-2.4%", positive: true },
    { label: "SKUs Tracked", value: "1,247" },
  ];

  const rows = [
    { name: "Tito's Vodka 1.75L", onHand: "24 units", usage: "8.2", status: "Healthy", color: "emerald" },
    { name: "Clase Azul Reposado", onHand: "3 units", usage: "1.8", status: "Reorder", color: "amber" },
    { name: "Veuve Clicquot Brut", onHand: "1 unit", usage: "4.1", status: "Low", color: "rose" },
    { name: "Buffalo Trace Bourbon", onHand: "18 units", usage: "6.5", status: "Healthy", color: "emerald" },
  ];

  return (
    <section
      className="py-10 md:py-20 px-6 md:px-12"
      style={{ background: isDark ? "#0a1628" : "#fff" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <p className="text-center text-xs font-semibold tracking-[2px] uppercase text-accent mb-5">
            The platform
          </p>
          <h2
            className="text-center text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] mb-14"
            style={{ color: isDark ? "#fff" : "#0a1628" }}
          >
            Built for how you
            <br />
            actually operate.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div
            className="w-full rounded-2xl p-[3px]"
            style={{
              background: "#0a1628",
              boxShadow:
                "0 32px 80px rgba(10, 22, 40, 0.18), 0 0 0 1px rgba(10, 22, 40, 0.05)",
            }}
          >
            <div className="w-full rounded-[14px] bg-navy-light overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-5 py-4 bg-white/[0.04] border-b border-white/[0.06]">
                <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
              </div>

              {/* Content */}
              <div className="p-5 md:p-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 min-h-[400px]">
                {/* Sidebar */}
                <div className="flex md:flex-col gap-1.5 overflow-x-auto md:overflow-x-visible">
                  {sidebarItems.map((item) => (
                    <div
                      key={item.name}
                      className="px-3.5 py-2.5 rounded-lg text-[13px] font-medium whitespace-nowrap"
                      style={{
                        background: item.active
                          ? "rgba(74, 124, 255, 0.12)"
                          : "transparent",
                        color: item.active
                          ? "#4a7cff"
                          : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    Beverage Program Overview
                  </h3>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    {stats.map((s) => (
                      <div key={s.label} className="flex flex-col gap-1.5">
                        <span className="text-[11px] font-medium uppercase tracking-[1px] text-white/35">
                          {s.label}
                        </span>
                        <span
                          className="text-2xl font-bold tracking-tight"
                          style={{
                            color: s.positive ? "#34d399" : "#fff",
                          }}
                        >
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Table */}
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[1px] text-white/25 bg-white/[0.02]">
                      <span>Item</span>
                      <span>On Hand</span>
                      <span>Usage / Wk</span>
                      <span className="hidden md:block">Status</span>
                    </div>
                    {rows.map((r) => (
                      <div
                        key={r.name}
                        className="grid grid-cols-[2fr_1fr_1fr_1fr] px-5 py-3.5 text-[13px] text-white/50 border-t border-white/[0.04] items-center"
                      >
                        <span className="text-white/80 font-medium">
                          {r.name}
                        </span>
                        <span>{r.onHand}</span>
                        <span>{r.usage}</span>
                        <span className="hidden md:block">
                          <span
                            className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                            style={{
                              background:
                                r.color === "emerald"
                                  ? "rgba(52, 211, 153, 0.12)"
                                  : r.color === "amber"
                                    ? "rgba(251, 191, 36, 0.12)"
                                    : "rgba(248, 113, 113, 0.12)",
                              color:
                                r.color === "emerald"
                                  ? "#34d399"
                                  : r.color === "amber"
                                    ? "#fbbf24"
                                    : "#f87171",
                            }}
                          >
                            {r.status}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
