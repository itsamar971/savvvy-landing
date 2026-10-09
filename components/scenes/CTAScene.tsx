"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations";
import { getNavHeight } from "@/components/Navigation";

gsap.registerPlugin(ScrollTrigger);

export default function CTAScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(72);
  useGSAP(
    () => {
      // Form was removed, so no animations needed here anymore, but keeping hook for structure if needed
    },
    { scope: sectionRef, dependencies: [navHeight] }
  );

  return (
    <section
      ref={sectionRef}
      id="cta"
      data-scene="cta"
      className="scene-section relative overflow-hidden"
      style={{
        background: "#090A0A",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: `clamp(${navHeight + 40}px, ${navHeight + 8}vh, ${navHeight + 100}px)`,
        paddingBottom: "clamp(40px, 8vh, 100px)",
      }}
      aria-label="Request Early Access — Savvvy Knowledge Engine"
    >


      {/* Footer */}
      <footer
        className="relative z-10 w-full mt-auto"
        style={{ borderTop: "1px solid rgba(244,242,236,0.08)" }}
      >
        {/* Main footer grid */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          style={{ padding: "clamp(40px, 6vw, 72px) clamp(20px, 3.6vw, 60px)" }}
        >
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ color: "#F4F2EC", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 900, letterSpacing: "-0.04em" }}>
                SAVVVY
              </span>
              <span style={{ color: "#00C389", fontSize: "clamp(9px, 1.4vw, 11px)", fontWeight: 700, letterSpacing: "0.2em" }}>
                ENGINE
              </span>
            </div>
            <p style={{ color: "#B8B8B0", fontSize: "clamp(11px, 1.6vw, 13px)", lineHeight: 1.7, maxWidth: 260, fontWeight: 400 }}>
              Turning saved Reels, TikToks, and YouTube Shorts into searchable, structured knowledge cards — instantly.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#00C389", flexShrink: 0 }} />
              <span style={{ color: "#00C389", fontSize: "clamp(9px, 1.4vw, 10px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
                SYSTEM OPERATIONAL
              </span>
            </div>
          </div>

          {/* Col 2 — HQ & Contact */}
          <div className="flex flex-col gap-3">
            <div style={{ color: "#00C389", fontSize: "clamp(9px, 1.4vw, 10px)", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, marginBottom: 4 }}>
              HEADQUARTERS &amp; CONTACT
            </div>
            <div style={{ color: "#B8B8B0", fontSize: "clamp(11px, 1.5vw, 12px)", lineHeight: 1.9, fontWeight: 400 }}>
              Kompally, Hyderabad<br />
              Telangana, India
            </div>
            <div style={{ color: "#B8B8B0", fontSize: "clamp(11px, 1.5vw, 12px)", lineHeight: 1.7 }}>
              <span style={{ color: "#F4F2EC", fontWeight: 600 }}>Email: </span>
              <a
                href="mailto:savvvy.in@gmail.com"
                style={{ color: "#B8B8B0", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#00C389"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B8B8B0"; }}
              >
                savvvy.in@gmail.com
              </a>
            </div>
            <div style={{ color: "#B8B8B0", fontSize: "clamp(11px, 1.5vw, 12px)", fontWeight: 400 }}>
              <span style={{ color: "#F4F2EC", fontWeight: 600 }}>Phone: </span>+91 9542710588
            </div>
          </div>

          {/* Col 3 — Navigation */}
          <div className="flex flex-col gap-3">
            <div style={{ color: "#00C389", fontSize: "clamp(9px, 1.4vw, 10px)", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, marginBottom: 4 }}>
              NAVIGATION
            </div>
            {([
              { num: "00", label: "HOME", href: "#main-content" },
              { num: "01", label: "HOW IT WORKS", href: "#solutions" },
              { num: "02", label: "CAPABILITIES", href: "#scale" },
              { num: "03", label: "PERSONAS", href: "#building" },
              { num: "04", label: "ARCHITECTURE", href: "#deep-dive" },
              { num: "05", label: "REQUEST ACCESS", href: "#cta" },
            ] as { num: string; label: string; href: string }[]).map((link) => (
              <a
                key={link.num}
                href={link.href}
                style={{ color: "#B8B8B0", fontSize: "clamp(11px, 1.5vw, 12px)", fontWeight: 500, letterSpacing: "0.06em", textDecoration: "none", display: "flex", gap: 8, transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F4F2EC"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B8B8B0"; }}
              >
                <span style={{ color: "rgba(184,184,176,0.35)", fontWeight: 400, minWidth: 28 }}>{link.num} /</span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Col 4 — Legal & Compliance */}
          <div className="flex flex-col gap-3">
            <div style={{ color: "#00C389", fontSize: "clamp(9px, 1.4vw, 10px)", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, marginBottom: 4 }}>
              LEGAL &amp; COMPLIANCE
            </div>
            {([
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Refund Policy", href: "/refund" },
              { label: "Data Storing", href: "/data-storing" },
              { label: "Cookie Settings", href: "/cookies" },
            ] as { label: string; href: string }[]).map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: "#B8B8B0",
                  fontSize: "clamp(11px, 1.5vw, 12px)",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  padding: "6px 0",
                  borderBottom: "1px solid rgba(244,242,236,0.07)",
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F4F2EC"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B8B8B0"; }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="w-full flex flex-col md:flex-row items-center justify-between gap-3"
          style={{
            padding: "14px clamp(20px, 3.6vw, 60px)",
            borderTop: "1px solid rgba(244,242,236,0.06)",
            color: "rgba(184,184,176,0.35)",
            fontSize: "clamp(9px, 1.4vw, 10px)",
            fontWeight: 400,
            letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
          }}
        >
          <span style={{ textAlign: "center" }}>&copy; 2026 Savvvy. All rights reserved.</span>
          <span style={{ opacity: 0.5, fontSize: "clamp(8px, 1.2vw, 9px)", textAlign: "center" }}>
            All Savvvy knowledge schemas and artifacts are protected under international copyright law.
          </span>
          <a
            href="#main-content"
            style={{
              color: "#F4F2EC",
              fontSize: "clamp(9px, 1.4vw, 10px)",
              fontWeight: 600,
              letterSpacing: "0.14em",
              border: "1px solid rgba(244,242,236,0.2)",
              padding: "6px 16px",
              textDecoration: "none",
              whiteSpace: "nowrap" as const,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#00C389"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(244,242,236,0.2)"; }}
          >
            BACK TO TOP &#8593;
          </a>
        </div>
      </footer>
    </section>
  );
}
