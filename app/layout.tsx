import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savvvy — Turn Saved Video Into Instant, Structured Knowledge",
  description:
    "Turn saved short-form video into instant, structured knowledge with Savvvy Knowledge Engine.",
  keywords: [
    "Savvvy",
    "Knowledge Engine",
    "Short-form video",
    "Instant knowledge",
    "Whisper transcription",
    "Semantic retrieval",
  ],
  openGraph: {
    title: "Savvvy — Turn Saved Video Into Instant, Structured Knowledge",
    description:
      "Turn saved short-form video into instant, structured knowledge with Savvvy Knowledge Engine.",
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
