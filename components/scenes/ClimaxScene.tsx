"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations";
import { getNavHeight } from "@/components/Navigation";
import { breakpoints } from "@/lib/responsive";

gsap.registerPlugin(ScrollTrigger);

export default function ClimaxScene() {
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
      const bgLayer = section.querySelector(".climax-bg");
      const line1 = section.querySelector(".climax-line-1");
      const line2 = section.querySelector(".climax-line-2");
      const gridOverlay = section.querySelector(".climax-grid");
      const compress = section.querySelector(".climax-compress");

      const mm = gsap.matchMedia();

      // Mobile timeline - reduced dramatic effects
      mm.add(breakpoints.mobile, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=150%",
            scrub: 0.6,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        // Background → green
        tl.fromTo(
          bgLayer,
          { backgroundColor: "#222422" },
          { backgroundColor: "#00C389", duration: 0.2, ease: "power2.inOut" },
          0
        );

        // Typography appears with less zoom
        tl.fromTo(
          line1,
          { scale: 1.3, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
          0.15
        ).fromTo(
          line2,
          { scale: 1.3, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
          0.2
        );

        // Grid enters
        tl.fromTo(gridOverlay, { opacity: 0 }, { opacity: 0.06, duration: 0.15 }, 0.4);

        // Simple scale down
        tl.to([line1, line2], { scale: 0.85, duration: 0.2, ease: "power2.inOut" }, 0.6);

        // Transition to compressed
        tl.to([line1, line2], { opacity: 0, duration: 0.1 }, 0.8);
        tl.fromTo(
          compress,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 0.15, ease: "power2.out" },
          0.85
        );

        // Darken
        tl.to(bgLayer, { backgroundColor: "#090A0A", duration: 0.1, ease: "power2.in" }, 0.94);
        tl.to(compress, { color: "#F4F2EC", duration: 0.1 }, 0.94);

        return () => {};
      });

      // Desktop timeline - full dramatic effect
      mm.add(breakpoints.desktop, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=220%",
            scrub: 0.8,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        tl.fromTo(
          bgLayer,
          { backgroundColor: "#222422" },
          { backgroundColor: "#00C389", duration: 0.18, ease: "power2.inOut" },
          0
        );

        tl.fromTo(
          line1,
          { scale: 2.5, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.22, ease: "power3.out" },
          0.12
        ).fromTo(
          line2,
          { scale: 2.5, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.22, ease: "power3.out" },
          0.18
        );

        tl.fromTo(gridOverlay, { opacity: 0 }, { opacity: 0.06, duration: 0.12 }, 0.32);
        tl.to([line1, line2], { scale: 0.55, duration: 0.25, ease: "power2.inOut" }, 0.58);
        tl.to([line1, line2], { opacity: 0, duration: 0.08 }, 0.83);
        tl.fromTo(
          compress,
          { opacity: 0, scale: 1.4 },
          { opacity: 1, scale: 1, duration: 0.12, ease: "power2.out" },
          0.86
        );

        tl.to(bgLayer, { backgroundColor: "#090A0A", duration: 0.08, ease: "power2.in" }, 0.94);
        tl.to(compress, { color: "#F4F2EC", duration: 0.08 }, 0.94);

        return () => {};
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [navHeight] }
  );

  return (
    <section
      ref={sectionRef}
      id="climax"
      data-scene="climax"
      className="scene-section relative overflow-hidden"
      style={{
        background: "#222422",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`,
        paddingBottom: "clamp(20px, 4vh, 48px)",
      }}
      aria-label="Zero Friction Capture — Stop Losing Saves. Start Building Knowledge."
    >
      <h2 className="sr-only">Zero Friction Capture</h2>

      <div className="climax-bg absolute inset-0" style={{ backgroundColor: "#222422" }} />

      <div
        className="climax-grid absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(9,10,10,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(9,10,10,0.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          opacity: 0,
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-4 md:px-6 w-full">
        <div
          className="climax-line-1"
          style={{
            fontSize: "clamp(2.2rem, 8vw, 11rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
            color: "#090A0A",
            textAlign: "center" as const,
            textTransform: "uppercase" as const,
            opacity: 0,
          }}
        >
          STOP LOSING SAVES.
        </div>
        <div
          className="climax-line-2 mt-3 md:mt-5"
          style={{
            fontSize: "clamp(1.8rem, 6vw, 8.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 0.88,
            color: "#090A0A",
            textAlign: "center" as const,
            textTransform: "uppercase" as const,
            opacity: 0,
          }}
        >
          START BUILDING KNOWLEDGE.
        </div>

        <div
          className="climax-compress absolute"
          style={{
            fontSize: "clamp(2rem, 6vw, 7rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 0.88,
            color: "#090A0A",
            opacity: 0,
          }}
        >
          SAVVVY
        </div>
      </div>
    </section>
  );
}
