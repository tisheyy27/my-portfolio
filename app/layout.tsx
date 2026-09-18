import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

// CHANGE THESE — they control your Google result and link previews.
export const metadata: Metadata = {
  title: "Tisha Bajaj — Software Developer",
  description:
    "Software developer building web applications. Based in Delhi, India.",
  openGraph: {
    title: "Tisha Bajaj — Software Developer",
    description:
      "Software developer building web applications. Based in Delhi, India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={grotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
