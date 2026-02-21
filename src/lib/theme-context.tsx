"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export const THEMES = [
  { id: "minimal-light", label: "Minimal Light" },
  { id: "dark-mode", label: "Dark Mode" },
  { id: "gradient-luxe", label: "Gradient Luxe" },
  { id: "bold-editorial", label: "Bold Editorial" },
  { id: "bento-grid", label: "Bento Grid" },
  { id: "split-screen", label: "Split Screen" },
  { id: "glassmorphism", label: "Glassmorphism" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "minimal-light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>("minimal-light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
