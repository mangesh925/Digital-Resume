import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Mangesh Ahirrao",
  description: "Digital Resume",
};

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
