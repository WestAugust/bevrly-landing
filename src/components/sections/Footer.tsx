"use client";

interface FooterProps {
  variant?: "dark" | "light";
}

export default function Footer({ variant = "dark" }: FooterProps) {
  const isDark = variant === "dark";

  return (
    <footer
      className="px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-5"
      style={{
        background: isDark ? "#0a1628" : "#fff",
        borderTop: isDark
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid #e8eaed",
      }}
    >
      <span
        className="text-[17px] font-bold tracking-tight"
        style={{ color: isDark ? "rgba(255,255,255,0.4)" : "#8b92a0" }}
      >
        Bevrly
      </span>
      <div className="flex items-center gap-8">
        {["Contact", "LinkedIn", "Privacy", "Terms"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-[13px] font-medium transition-colors duration-200"
            style={{
              color: isDark ? "rgba(255,255,255,0.3)" : "#8b92a0",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = isDark
                ? "rgba(255,255,255,0.6)"
                : "#0a1628")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isDark
                ? "rgba(255,255,255,0.3)"
                : "#8b92a0")
            }
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
