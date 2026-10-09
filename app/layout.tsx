import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise — The Future Is Built, Not Taught",
  description:
    "Enterprise workforce transformation through AI-powered learning. Knowledge becomes systems. Systems become organizations. Organizations become transformation.",
  keywords: [
    "enterprise learning",
    "workforce transformation",
    "AI upskilling",
    "corporate training",
    "Accredian",
  ],
  openGraph: {
    title: "Accredian Enterprise — The Future Is Built, Not Taught",
    description:
      "Enterprise workforce transformation through AI-powered learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
