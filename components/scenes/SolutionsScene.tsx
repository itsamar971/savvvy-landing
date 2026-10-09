"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations";
import { getNavHeight } from "@/components/Navigation";
import { breakpoints } from "@/lib/responsive";

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS = [
  {
    number: "01",
    title: "CAPTURE",
    body: "One tap from your feed to our engine.",
    detail:
      "Tap Share → Savvvy directly in Instagram, TikTok, or YouTube Shorts. No chat bots, no link-copying friction, and no 24-hour API restrictions.",
  },
  {
    number: "02",
    title: "EXTRACT",
    body: "Video audio becomes clean, structured schema.",
    detail:
      "Whisper handles word-level timestamps while Gemini 1.5 Flash strips the noise to pull copy-ready code snippets, tool names, resolved URLs, and bullet points.",
  },
  {
    number: "03",
    title: "RETRIEVE",
    body: "Zero-discipline instant recall.",
    detail:
      "Instant hybrid search across your entire card collection. Find that tutorial you saved 6 months ago in 2 keystrokes or export directly to Notion.",
  },
];

export default function SolutionsScene() {
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
      const panels = section.querySelectorAll(".solution-panel");

      const mm = gsap.matchMedia();

      // Mobile timeline - SAME as desktop (horizontal wipe)
      mm.add(breakpoints.mobile, () => {
        // Reset all panels to use clipPath
        panels.forEach((panel, i) => {
          if (i > 0) {
            gsap.set(panel, { clipPath: "inset(0 100% 0 0)" });
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=350%", // Same as desktop
            scrub: 1.0,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        panels.forEach((panel, i) => {
          const title = panel.querySelector(".solution-title");
          const number = panel.querySelector(".solution-number");
          const body = panel.querySelector(".solution-body");
          const detail = panel.querySelector(".solution-detail");
          const divider = panel.querySelector(".solution-divider");
          const gridOverlay = panel.querySelector(".solution-grid");

          const start = i * 0.3;

          // Horizontal wipe (same as desktop)
          if (i > 0) {
            tl.fromTo(
              panel,
              { clipPath: "inset(0 100% 0 0)" },
              { clipPath: "inset(0 0% 0 0)", duration: 0.15, ease: "power3.inOut" },
              start
            );
          }

          tl.fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.1, ease: "power2.out" }, start + 0.02);
          tl.fromTo(number, { opacity: 0 }, { opacity: 1, duration: 0.06 }, start + 0.04);
          tl.fromTo(divider, { scaleX: 0 }, { scaleX: 1, duration: 0.08, ease: "power2.out" }, start + 0.06);
          tl.fromTo(
            [body, detail],
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.08, stagger: 0.02, ease: "power2.out" },
            start + 0.08
          );

          if (gridOverlay) {
            tl.fromTo(gridOverlay, { opacity: 0 }, { opacity: 0.04, duration: 0.1 }, start + 0.06);
          }

          if (i < panels.length - 1) {
            tl.to([title, number, body, detail], { opacity: 0.15, duration: 0.08 }, start + 0.26);
          }
        });

        const lastPanel = panels[2];
        if (lastPanel) {
          const title = lastPanel.querySelector(".solution-title");
          const number = lastPanel.querySelector(".solution-number");
          const body = lastPanel.querySelector(".solution-body");
          const detail = lastPanel.querySelector(".solution-detail");

          tl.to(
            [title, number, body, detail],
            { opacity: 0, scale: 0.95, duration: 0.1, ease: "power2.in" },
            0.9
          );
        }

        return () => {};
      });

      // Desktop timeline
      mm.add(breakpoints.desktop, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=350%",
            scrub: 1.0,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        panels.forEach((panel, i) => {
          const title = panel.querySelector(".solution-title");
          const number = panel.querySelector(".solution-number");
          const body = panel.querySelector(".solution-body");
          const detail = panel.querySelector(".solution-detail");
          const divider = panel.querySelector(".solution-divider");
          const gridOverlay = panel.querySelector(".solution-grid");

          const start = i * 0.3;

          if (i > 0) {
            tl.fromTo(
              panel,
              { clipPath: "inset(0 100% 0 0)" },
              { clipPath: "inset(0 0% 0 0)", duration: 0.15, ease: "power3.inOut" },
              start
            );
          }

          tl.fromTo(
            title,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.1, ease: "power2.out" },
            start + 0.02
          );
          
          tl.fromTo(number, { opacity: 0 }, { opacity: 1, duration: 0.06 }, start + 0.04);
          
          tl.fromTo(
            divider,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.08, ease: "power2.out" },
            start + 0.06
          );
          
          tl.fromTo(
            [body, detail],
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.08, stagger: 0.02, ease: "power2.out" },
            start + 0.08
          );

          if (gridOverlay) {
            tl.fromTo(gridOverlay, { opacity: 0 }, { opacity: 0.04, duration: 0.1 }, start + 0.06);
          }

          if (i < panels.length - 1) {
            tl.to([title, number, body, detail], { opacity: 0.15, duration: 0.08 }, start + 0.26);
          }
        });

        const lastPanel = panels[2];
        if (lastPanel) {
          const title = lastPanel.querySelector(".solution-title");
          const number = lastPanel.querySelector(".solution-number");
          const body = lastPanel.querySelector(".solution-body");
          const detail = lastPanel.querySelector(".solution-detail");

          tl.to(
            [title, number, body, detail],
            { opacity: 0, scale: 0.95, duration: 0.1, ease: "power2.in" },
            0.9
          );
        }

        return () => {};
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [navHeight] }
  );

  return (
    <section
      ref={sectionRef}
      id="solutions"
      data-scene="solutions"
      className="scene-section relative overflow-hidden"
      style={{
        background: "#090A0A",
        minHeight: "100dvh",
        paddingTop: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`,
        paddingBottom: "clamp(20px, 4vh, 48px)",
      }}
      aria-label="How It Works — Capture, Extract, Retrieve"
    >
      <h2 className="sr-only">How It Works</h2>

      {SOLUTIONS.map((solution, i) => (
        <div
          key={solution.number}
          className="solution-panel absolute inset-0 flex items-center justify-center"
          style={{
            clipPath: i === 0 ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
            background: "#090A0A",
            zIndex: i + 1,
            paddingTop: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`,
            paddingBottom: "clamp(20px, 4vh, 48px)",
          }}
        >
          <div
            className="solution-grid absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(244,242,236,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,236,0.03) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              opacity: 0,
            }}
          />

          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 flex flex-col gap-6 md:gap-0 md:flex-row md:items-end md:justify-between">
            {/* Left: number + title */}
            <div className="flex flex-col">
              <span
                className="solution-number mb-4 md:mb-6"
                style={{
                  color: "#00C389",
                  opacity: 0,
                  fontSize: "clamp(11px, 2vw, 12px)",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                }}
              >
                {solution.number}
              </span>
              <div
                className="solution-title"
                style={{
                  fontSize: "clamp(3rem, 10vw, 15rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.82,
                  color: "#F4F2EC",
                  opacity: 0,
                }}
              >
                {solution.title}
              </div>
            </div>

            {/* Right: divider + body + detail */}
            <div className="flex flex-col w-full md:max-w-sm lg:max-w-md mb-2 md:mb-6">
              <div
                className="solution-divider w-full h-[1px] mb-4 md:mb-5"
                style={{
                  background: "rgba(244,242,236,0.12)",
                  transformOrigin: "left center",
                  transform: "scaleX(0)",
                }}
              />
              <p
                className="solution-body mb-3"
                style={{
                  color: "#F4F2EC",
                  fontSize: "clamp(1rem, 2vw, 1.35rem)",
                  fontWeight: 400,
                  lineHeight: 1.45,
                  opacity: 0,
                }}
              >
                {solution.body}
              </p>
              <p
                className="solution-detail"
                style={{
                  color: "#B8B8B0",
                  fontSize: "clamp(12px, 2vw, 13px)",
                  lineHeight: 1.65,
                  opacity: 0,
                }}
              >
                {solution.detail}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div
        className="absolute left-6 md:left-12 lg:left-16 z-10"
        style={{
          top: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`,
          color: "rgba(184,184,176,0.3)",
          fontSize: "clamp(9px, 1.8vw, 10px)",
          fontWeight: 500,
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
        }}
      >
        04 — HOW IT WORKS
      </div>
    </section>
  );
}
