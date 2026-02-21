"use client";

import { ThemeProvider, useTheme } from "@/lib/theme-context";
import FloatingThemeSwitcher from "@/components/ui/FloatingThemeSwitcher";
import MinimalLight from "@/components/layouts/MinimalLight";
import DarkMode from "@/components/layouts/DarkMode";
import GradientLuxe from "@/components/layouts/GradientLuxe";
import BoldEditorial from "@/components/layouts/BoldEditorial";
import BentoGrid from "@/components/layouts/BentoGrid";
import SplitScreen from "@/components/layouts/SplitScreen";
import Glassmorphism from "@/components/layouts/Glassmorphism";

function LayoutRenderer() {
  const { theme } = useTheme();

  switch (theme) {
    case "minimal-light":
      return <MinimalLight />;
    case "dark-mode":
      return <DarkMode />;
    case "gradient-luxe":
      return <GradientLuxe />;
    case "bold-editorial":
      return <BoldEditorial />;
    case "bento-grid":
      return <BentoGrid />;
    case "split-screen":
      return <SplitScreen />;
    case "glassmorphism":
      return <Glassmorphism />;
    default:
      return <MinimalLight />;
  }
}

export default function Home() {
  return (
    <ThemeProvider>
      <LayoutRenderer />
      <FloatingThemeSwitcher />
    </ThemeProvider>
  );
}
