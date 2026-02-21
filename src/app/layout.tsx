import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bevrly — Complete Beverage Operations for Restaurants",
  description:
    "Inventory, ordering, costing, and analytics — all in one platform built for how you actually run your beverage program.",
  openGraph: {
    title: "Bevrly — Complete Beverage Operations for Restaurants",
    description:
      "The best beverage programs are on Bevrly. Inventory, ordering, costing, and analytics in one platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
