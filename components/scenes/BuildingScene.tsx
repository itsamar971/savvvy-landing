"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations";
import { getNavHeight } from "@/components/Navigation";
import { breakpoints } from "@/lib/responsive";

gsap.registerPlugin(ScrollTrigger);

const WORDS = ["SAVE", "EXTRACT", "STRUCTURE", "RECALL"];

const GRID_ITEMS = [
  { label: "WHISPER-1 AUDIO PASS", x: "8%", y: "18%" },
  { label: "GEMINI 1.5 FLASH EXTRACTION", x: "68%", y: "14%" },
  { label: "HYBRID BM25 VECTOR EMBEDDINGS", x: "12%", y: "52%" },
  { label: "NATIVE OS INTENT RECEIVER", x: "62%", y: "60%" },
  { label: "STRUCTURED JSON SCHEMAS", x: "38%", y: "82%" },
];

export default function BuildingScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(72);

  useEffect(() => {
    setNavHeight(getNavHeight());
    
    const handleResize = () => setNavHeight(getNavHeight());
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reduced motion fallback — runs outside GSAP context to avoid circular Context cleanup
  useEffect(() => {
    if (!sectionRef.current || !prefersReducedMotion()) return;
    const section = sectionRef.current;
    section.querySelectorAll<HTMLElement>(".building-word").forEach((el) => {
      el.style.clipPath = "none";
      el.style.opacity = "1";
    });
    section.querySelectorAll<HTMLElement>(".grid-label").forEach((el) => {
      el.style.opacity = "0.35";
    });
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !sectionRef.current) return;

      const section = sectionRef.current;
      const gridLines = section.querySelectorAll(".grid-line");
      const gridLabels = section.querySelectorAll(".grid-label");
      const words = section.querySelectorAll(".building-word");

      const mm = gsap.matchMedia();

      // Mobile timeline - SAME as desktop but optimized
      mm.add(breakpoints.mobile, () => {
        // Reset all words to visible (remove clipPath for mobile)
        words.forEach((word) => {
          gsap.set(word, { clipPath: "inset(0 0 0 0)" });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%", // Same dramatic scroll
            scrub: 1.0,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Grid animates in
        tl.fromTo(
          gridLines,
          { scaleX: 0, scaleY: 0 },
          { scaleX: 1, scaleY: 1, duration: 0.2, stagger: 0.02, ease: "power2.out" },
          0
        );

        tl.fromTo(
          gridLabels,
          { opacity: 0, y: 10 },
          { opacity: 0.35, y: 0, duration: 0.15, stagger: 0.03, ease: "power2.out" },
          0.1
        );

        // Words reveal with clip-path (same as desktop but without horizontal offset)
        words.forEach((word, i) => {
          tl.fromTo(
            word,
            { clipPath: "inset(0 100% 0 0)", opacity: 0 },
            { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.18, ease: "power3.out" },
            0.22 + i * 0.12
          );
        });

        // Words compress and fade (same as desktop)
        tl.to(
          words,
          {
            scale: 0.5,
            y: (i: number) => (i - 1.5) * -25,
            opacity: 0.2,
            duration: 0.2,
            ease: "power2.inOut",
          },
          0.78
        )
          .to(gridLines, { opacity: 0.05, scale: 0.85, duration: 0.15 }, 0.78)
          .to(gridLabels, { opacity: 0, duration: 0.1 }, 0.82)
          .to(section, { backgroundColor: "#F4F2EC", duration: 0.15 }, 0.87)
          .to(words, { color: "#090A0A", opacity: 0, duration: 0.08 }, 0.92);

        return () => {};
      });

      // Desktop timeline
      mm.add(breakpoints.desktop, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            scrub: 1.0,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        tl.fromTo(
          gridLines,
          { scaleX: 0, scaleY: 0 },
          { scaleX: 1, scaleY: 1, duration: 0.2, stagger: 0.02, ease: "power2.out" },
          0
        );

        tl.fromTo(
          gridLabels,
          { opacity: 0, y: 10 },
          { opacity: 0.35, y: 0, duration: 0.15, stagger: 0.03, ease: "power2.out" },
          0.1
        );

        words.forEach((word, i) => {
          tl.fromTo(
            word,
            { clipPath: "inset(0 100% 0 0)", x: i % 2 === 0 ? -80 : 80 },
            { clipPath: "inset(0 0% 0 0)", x: 0, duration: 0.18, ease: "power3.out" },
            0.22 + i * 0.12
          );
        });

        tl.to(
          words,
          {
            scale: 0.5,
            y: (i: number) => (i - 1.5) * -25,
            opacity: 0.2,
            duration: 0.2,
            ease: "power2.inOut",
          },
          0.78
        )
          .to(gridLines, { opacity: 0.05, scale: 0.85, duration: 0.15 }, 0.78)
          .to(gridLabels, { opacity: 0, duration: 0.1 }, 0.82)
          .to(section, { backgroundColor: "#F4F2EC", duration: 0.15 }, 0.87)
          .to(words, { color: "#090A0A", opacity: 0, duration: 0.08 }, 0.92);

        return () => {};
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [navHeight] }
  );

  return (
    <section
      ref={sectionRef}
      id="building"
      data-scene="building"
      className="scene-section relative overflow-hidden"
      style={{
        background: "#090A0A",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`,
        paddingBottom: "clamp(20px, 4vh, 48px)",
      }}
      aria-label="System Engine — Save, Extract, Structure, Recall"
    >
      <h2 className="sr-only">The Retrieval Bottleneck</h2>

      {/* Structural grid lines - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {[18, 33, 50, 67, 82].map((top) => (
          <div
            key={`h-${top}`}
            className="grid-line absolute left-[8%] right-[8%] h-[1px]"
            style={{
              top: `${top}%`,
              background: "rgba(244, 242, 236, 0.06)",
              transformOrigin: "left center",
            }}
          />
        ))}
        {[12, 30, 50, 70, 88].map((left) => (
          <div
            key={`v-${left}`}
            className="grid-line absolute top-[12%] bottom-[12%] w-[1px]"
            style={{
              left: `${left}%`,
              background: "rgba(244, 242, 236, 0.06)",
              transformOrigin: "center top",
            }}
          />
        ))}
      </div>

      {/* Grid coordinate labels - desktop only */}
      {GRID_ITEMS.map((item) => (
        <span
          key={item.label}
          className="grid-label absolute hidden lg:block"
          style={{
            left: item.x,
            top: item.y,
            color: "#B8B8B0",
            opacity: 0.35,
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
          }}
        >
          {item.label}
        </span>
      ))}

      {/* Main words - mobile centered layout */}
      <div className="relative z-10 flex flex-col items-center md:items-start gap-3 md:gap-6 px-6 md:px-12 lg:px-16 w-full">
        {WORDS.map((word, i) => (
          <div
            key={word}
            className={`building-word text-center md:text-left ${i === 0 ? "" : i === 1 ? "md:ml-[12vw]" : i === 2 ? "md:ml-[4vw]" : "md:ml-[18vw]"}`}
            style={{
              color: "#F4F2EC",
              clipPath: "none",
              marginLeft: i === 0 ? "0" : i === 1 ? "0" : i === 2 ? "0" : "0",
              fontSize: "clamp(2.5rem, 8vw, 11rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              textTransform: "uppercase" as const,
            }}
          >
            {word}
          </div>
        ))}
      </div>

      {/* Scene marker */}
      <div
        className="absolute left-6 md:left-12 lg:left-16"
        style={{
          bottom: "clamp(24px, 5vh, 48px)",
          color: "rgba(184,184,176,0.25)",
          fontSize: "clamp(9px, 1.8vw, 10px)",
          fontWeight: 500,
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
        }}
      >
        02 — SYSTEM ENGINE
      </div>
    </section>
  );
}
