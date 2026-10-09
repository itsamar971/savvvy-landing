"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations";
import { getNavHeight } from "@/components/Navigation";
import { breakpoints } from "@/lib/responsive";

gsap.registerPlugin(ScrollTrigger);

const NUMBERS = [
  { value: "< 400ms", label: "SHARE EXTENSION HUD EXIT" },
  { value: "< 4.5s", label: "FULL EXTRACTION CYCLE" },
  { value: "< 150ms", label: "2-KEYWORD SEMANTIC SEARCH" },
  { value: "> 99%", label: "INGEST SUCCESS RELIABILITY" },
];

const SUPPORTING_COPY = [
  "ZERO BOT DEPENDENCY",
  "AUTO REPO & LINK RESOLUTION",
  "STRUCTURED CHEATSHEETS",
  "REALTIME FIRESTORE SYNC",
];

export default function ScaleScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(72);

  useEffect(() => {
    setNavHeight(getNavHeight());
    
    const handleResize = () => setNavHeight(getNavHeight());
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !sectionRef.current) return;

      const section = sectionRef.current;
      const numberBlocks = section.querySelectorAll(".scale-number-block");
      const supportingLabels = section.querySelectorAll(".supporting-label");
      const maskCircle = section.querySelector(".mask-circle");

      const mm = gsap.matchMedia();

      // Mobile timeline - SAME as desktop
      mm.add(breakpoints.mobile, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=300%", // Same as desktop
            scrub: 0.8,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // First number enters (same as desktop)
        tl.fromTo(
          numberBlocks[0],
          { opacity: 0, y: 60, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, duration: 0.12, ease: "power2.out" },
          0
        );

        // Numbers transition (same as desktop)
        numberBlocks.forEach((block, i) => {
          if (i === 0) return;
          const startTime = 0.06 + i * 0.2;

          tl.to(
            numberBlocks[i - 1],
            { opacity: 0, y: -50, scale: 0.9, duration: 0.1, ease: "power2.in" },
            startTime
          );

          tl.fromTo(
            block,
            { opacity: 0, y: 60, scale: 0.85 },
            { opacity: 1, y: 0, scale: 1, duration: 0.12, ease: "power2.out" },
            startTime + 0.05
          );
        });

        // Supporting copy appears (same as desktop)
        tl.fromTo(
          supportingLabels,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.08, stagger: 0.03, ease: "power2.out" },
          0.58
        );

        // Final zoom effect (same as desktop)
        tl.to(numberBlocks[3], { scale: 1.15, duration: 0.12, ease: "power2.in" }, 0.8)
          .to(supportingLabels, { opacity: 0, x: 15, duration: 0.08, stagger: 0.015 }, 0.82)
          .fromTo(
            maskCircle,
            { scale: 0, opacity: 1 },
            { scale: 35, opacity: 1, duration: 0.18, ease: "power2.in" },
            0.88
          )
          .to(numberBlocks[3], { opacity: 0, duration: 0.04 }, 0.94);

        return () => {};
      });

      // Desktop timeline
      mm.add(breakpoints.desktop, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=300%",
            scrub: 0.8,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        tl.fromTo(
          numberBlocks[0],
          { opacity: 0, y: 60, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, duration: 0.12, ease: "power2.out" },
          0
        );

        numberBlocks.forEach((block, i) => {
          if (i === 0) return;
          const startTime = 0.06 + i * 0.2;

          tl.to(
            numberBlocks[i - 1],
            { opacity: 0, y: -50, scale: 0.9, duration: 0.1, ease: "power2.in" },
            startTime
          );

          tl.fromTo(
            block,
            { opacity: 0, y: 60, scale: 0.85 },
            { opacity: 1, y: 0, scale: 1, duration: 0.12, ease: "power2.out" },
            startTime + 0.05
          );
        });

        tl.fromTo(
          supportingLabels,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.08, stagger: 0.03, ease: "power2.out" },
          0.58
        );

        tl.to(numberBlocks[3], { scale: 1.15, duration: 0.12, ease: "power2.in" }, 0.8)
          .to(supportingLabels, { opacity: 0, x: 15, duration: 0.08, stagger: 0.015 }, 0.82)
          .fromTo(
            maskCircle,
            { scale: 0, opacity: 1 },
            { scale: 35, opacity: 1, duration: 0.18, ease: "power2.in" },
            0.88
          )
          .to(numberBlocks[3], { opacity: 0, duration: 0.04 }, 0.94);

        return () => {};
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [navHeight] }
  );

  return (
    <section
      ref={sectionRef}
      id="scale"
      data-scene="scale"
      className="scene-section relative overflow-hidden"
      style={{
        background: "#F4F2EC",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`,
        paddingBottom: "clamp(20px, 4vh, 48px)",
      }}
      aria-label="Performance Targets — Sub-400ms capture, sub-4.5s extraction, sub-150ms search, 99%+ reliability"
    >
      <h2 className="sr-only">System Latency &amp; Extraction Metrics</h2>

      {/* Number blocks */}
      <div className="relative flex flex-col items-center justify-center w-full">
        {NUMBERS.map((num, i) => (
          <div
            key={num.value}
            className="scale-number-block absolute flex flex-col items-center gap-4 md:gap-6"
            style={{ opacity: i === 0 ? undefined : 0 }}
          >
            <div
              className="text-tabular"
              style={{
                color: "#090A0A",
                fontSize: "clamp(4rem, 18vw, 28vw)",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 0.8,
              }}
            >
              {num.value}
            </div>
            <div
              style={{
                color: "#222422",
                fontSize: "clamp(10px, 2vw, 11px)",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                textAlign: "center" as const,
                maxWidth: "280px",
                paddingInline: "1rem",
              }}
            >
              {num.label}
            </div>
          </div>
        ))}
      </div>

      {/* Supporting copy */}
      <div className="absolute left-6 md:left-12 lg:left-16 flex flex-col gap-2.5" style={{ bottom: "clamp(80px, 15vh, 140px)" }}>
        {SUPPORTING_COPY.map((text) => (
          <span
            key={text}
            className="supporting-label"
            style={{
              color: "#222422",
              opacity: 0,
              fontSize: "clamp(9px, 1.8vw, 10px)",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
            }}
          >
            {text}
          </span>
        ))}
      </div>

      {/* Section indicator */}
      <div
        className="absolute right-6 md:right-12 lg:right-16"
        style={{
          top: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`,
          color: "#B8B8B0",
          fontSize: "clamp(9px, 1.8vw, 10px)",
          fontWeight: 500,
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
        }}
      >
        03 — PERFORMANCE TARGETS
      </div>

      {/* Zero mask */}
      <div
        className="mask-circle absolute rounded-full"
        style={{
          width: "clamp(60px, 15vw, 80px)",
          height: "clamp(60px, 15vw, 80px)",
          background: "#090A0A",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) scale(0)",
          transformOrigin: "center center",
        }}
      />
    </section>
  );
}
