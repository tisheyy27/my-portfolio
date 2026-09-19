import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tisha Bajaj — Learning to build software",
  description:
    "BCA student at Bharati Vidyapeeth (BVIMR), Delhi. Learning Python, C, SQL and the foundations of machine learning.",
  openGraph: {
    title: "Tisha Bajaj — Learning to build software",
    description:
      "BCA student in Delhi, learning Python, C, SQL and machine learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}