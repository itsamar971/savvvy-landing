"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations";
import { getNavHeight } from "@/components/Navigation";
import { breakpoints } from "@/lib/responsive";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const metaLeftRef = useRef<HTMLDivElement>(null);
  const metaRightRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
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
      const letters = section.querySelectorAll(".hero-letter");
      const subtitleLetters = section.querySelectorAll(".hero-subtitle-letter");
      const metaItems = section.querySelectorAll(".hero-meta-item");

      const mm = gsap.matchMedia();

      // Mobile timeline - Simple, elegant slide up with SMOOTHER scrub
      mm.add(breakpoints.mobile, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%", // Longer for smoother feel
            scrub: 1.5, // Much higher scrub for ultra-smooth
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        // Metadata enters from bottom - slower, smoother
        tl.fromTo(
          metaLeftRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.25, ease: "sine.out" },
          0
        )
          .fromTo(
            metaRightRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.25, ease: "sine.out" },
            0.1
          )
          .to(scrollIndicatorRef.current, { opacity: 0, duration: 0.2, ease: "sine.inOut" }, 0.2);

        // Subtitle letters fade with ultra-gentle stagger
        tl.to(subtitleLetters, { 
          opacity: 0, 
          y: -20, 
          duration: 0.4, 
          ease: "sine.inOut",
          stagger: 0.02
        }, 0.4);

        // Metadata slides out smoothly
        tl.to(metaLeftRef.current, { 
          opacity: 0, 
          x: -30,
          duration: 0.3, 
          ease: "sine.in" 
        }, 0.6)
          .to(metaRightRef.current, { 
            opacity: 0, 
            x: 30,
            duration: 0.3, 
            ease: "sine.in" 
          }, 0.6);

        // All letters float up smoothly except first
        letters.forEach((letter, i) => {
          if (i !== 0) {
            tl.to(letter, { 
              opacity: 0, 
              y: -50,
              scale: 0.92,
              duration: 0.35, 
              ease: "sine.in"
            }, 0.75);
          }
        });

        // 'A' scales and floats with silk-smooth easing
        tl.to(
          letters[0],
          { 
            scale: 4,
            opacity: 0.5,
            y: "25vh",
            duration: 0.5, 
            ease: "sine.inOut"
          },
          0.85
        );

        // Final butter-smooth fade
        tl.to(
          letters[0],
          { 
            opacity: 0,
            duration: 0.15, 
            ease: "sine.in" 
          },
          0.95
        );

        return () => {};
      });

      // Desktop timeline - Dramatic zoom and scatter
      mm.add(breakpoints.desktop, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=250%",
            scrub: 0.8,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        tl.fromTo(
          metaLeftRef.current,
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 0.12, ease: "power2.out" },
          0
        )
          .fromTo(
            metaRightRef.current,
            { clipPath: "inset(0 0 0 100%)" },
            { clipPath: "inset(0 0 0 0%)", duration: 0.12, ease: "power2.out" },
            0.03
          )
          .fromTo(
            metaItems,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.1, stagger: 0.02, ease: "power2.out" },
            0.02
          )
          .to(scrollIndicatorRef.current, { opacity: 0, duration: 0.05 }, 0.1);

        letters.forEach((letter, i) => {
          tl.to(letter, { 
            y: i % 2 === 0 ? -10 : 10,
            rotation: i % 2 === 0 ? -2 : 2, 
            duration: 0.2, 
            ease: "power2.inOut" 
          }, 0.18);
        });

        // Subtitle explodes outward
        tl.to(subtitleLetters, { 
          opacity: 0, 
          y: -15,
          x: (i: number) => (i - subtitleLetters.length / 2) * 5,
          scale: 1.1,
          stagger: 0.008, 
          duration: 0.12 
        }, 0.3);
        
        tl.to([metaLeftRef.current, metaRightRef.current], { 
          opacity: 0,
          scale: 0.9, 
          duration: 0.08 
        }, 0.4);

        // Letters scatter radially
        letters.forEach((letter, i) => {
          if (i !== 0) {
            const angle = (i / letters.length) * 360;
            const distance = 100;
            tl.to(
              letter,
              { 
                opacity: 0, 
                scale: 0.8,
                x: Math.cos(angle * Math.PI / 180) * distance,
                y: Math.sin(angle * Math.PI / 180) * distance,
                rotation: i % 2 === 0 ? -30 : 30,
                duration: 0.15 
              },
              0.5
            );
          }
        });

        tl.to(
          letters[0],
          { 
            scale: 60, 
            x: "30vw", 
            y: "15vh",
            rotation: 5, 
            duration: 0.45, 
            ease: "power2.in" 
          },
          0.6
        );

        return () => {};
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [navHeight] }
  );

  const heroLetters = "SAVVVY".split("");
  const subtitleLetters = "KNOWLEDGE ENGINE".split("");

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-scene="hero"
      className="scene-section relative overflow-hidden"
      style={{
        background: "#090A0A",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: `clamp(${navHeight + 32}px, ${navHeight + 6}vh, ${navHeight + 80}px)`,
        paddingBottom: "clamp(32px, 6vh, 80px)",
      }}
      aria-label="Savvvy — Turn saved short-form video into instant, structured knowledge"
    >
      <h1 className="sr-only">
        Savvvy — Turn saved short-form video into instant, structured knowledge
      </h1>

      {/* Top-left metadata */}
      <div
        ref={metaLeftRef}
        className="absolute left-6 md:left-12 lg:left-16 flex flex-col gap-1.5"
        style={{
          top: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`,
          clipPath: "inset(0 100% 0 0)",
        }}
      >
        <span className="hero-meta-item" style={{ color: "#B8B8B0", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, opacity: 0 }}>
          OS-NATIVE CAPTURE
        </span>
        <span className="hero-meta-item" style={{ color: "#B8B8B0", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, opacity: 0 }}>
          WHISPER TRANSCRIPTION
        </span>
        <span className="hero-meta-item" style={{ color: "#B8B8B0", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, opacity: 0 }}>
          SEMANTIC KNOWLEDGE RETRIEVAL
        </span>
      </div>

      {/* Main title - mobile optimized */}
      <div className="relative w-full flex flex-col items-center select-none px-4 md:px-8">
        <div className="flex justify-center w-full" aria-hidden="true" style={{ lineHeight: 0.82 }}>
          {heroLetters.map((letter, i) => (
            <span
              key={`hero-${i}`}
              className="hero-letter inline-block"
              style={{
                color: "#F4F2EC",
                fontSize: "clamp(10vw, 15vw, 20vw)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 0.82,
                transformOrigin: "center center",
                textTransform: "uppercase" as const,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="w-full flex justify-end pr-[2vw] mt-1 md:mt-2" aria-hidden="true">
          {subtitleLetters.map((letter, i) => (
            <span
              key={`sub-${i}`}
              className="hero-subtitle-letter inline-block"
              style={{
                color: "#B8B8B0",
                fontSize: "clamp(0.75rem, 2.5vw, 4rem)",
                fontWeight: 300,
                letterSpacing: "clamp(0.15em, 0.35em, 0.4em)",
                whiteSpace: "pre" as const,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom metadata - responsive positioning */}
      <div
        ref={metaRightRef}
        className="absolute right-6 md:right-12 lg:right-16 text-right flex flex-col gap-1"
        style={{
          bottom: "clamp(80px, 15vh, 140px)",
          clipPath: "inset(0 0 0 100%)",
        }}
      >
        <span className="hero-meta-item" style={{ color: "#B8B8B0", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, opacity: 0 }}>
          THE VALUE IS IN RETRIEVAL
        </span>
        <span className="hero-meta-item" style={{ color: "#B8B8B0", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, opacity: 0 }}>
          NOT THE SAVE TAB
        </span>
      </div>

      <div
        className="absolute left-6 md:left-12 lg:left-16 flex flex-col gap-1"
        style={{ bottom: "clamp(80px, 15vh, 140px)" }}
      >
        <span className="hero-meta-item text-tabular" style={{ color: "rgba(184,184,176,0.4)", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", opacity: 0 }}>
          v2.0 STABLE
        </span>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ bottom: "clamp(32px, 6vh, 60px)" }}
      >
        <span style={{ color: "#B8B8B0", fontSize: "clamp(9px, 1.8vw, 10px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const }}>
          SCROLL TO EXPLORE PIPELINE
        </span>
        <div
          className="w-[1px] origin-top"
          style={{
            height: "clamp(16px, 3vh, 24px)",
            background: "linear-gradient(to bottom, #B8B8B0, transparent)",
          }}
        />
      </div>
    </section>
  );
}
