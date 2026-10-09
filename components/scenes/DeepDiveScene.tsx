"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animations";
import { getNavHeight } from "@/components/Navigation";
import { breakpoints } from "@/lib/responsive";

gsap.registerPlugin(ScrollTrigger);

const DOMAINS = [
  { title: "ALEX RIVERA (INDIE DEV / CS STUDENT)", desc: "Extracts copy-ready code blocks and raw GitHub repositories without scrubbing videos." },
  { title: "PRIYA SHARMA (FINTECH PM / FOUNDER)", desc: "Grabs startup teardowns, growth mechanics, and one-tap Notion syncs." },
  { title: "MARCUS VANCE (MOTION DESIGNER)", desc: "Extracts actionable tool shortcuts, plugin names, and keyframe cheat sheets." },
  { title: "DEVOPS & CLOUD ENGINEERS", desc: "Collects Docker setups, terminal commands, and architecture diagrams." },
  { title: "INDIE HACKERS & FOUNDERS", desc: "Logs monetization breakdowns, launch frameworks, and tool stacks." },
  { title: "PRODUCT DESIGNERS", desc: "Pulls design systems, micro-interaction links, and Figma asset URLs." },
  { title: "RESEARCHERS & STUDENTS", desc: "Converts dense 60-second explainers into flashcard-style markdown summaries." }
];

const CAT_FRAMEWORK = [
  { letter: "S", title: "SUMMARY", desc: "3 punchy takeaways capturing the core insight in seconds." },
  { letter: "C", title: "CODE & TOOLS", desc: "Validated syntax blocks, verified tool names, and resolved official links." },
  { letter: "T", title: "TAGS & VECTORS", desc: "Auto-categorized 768-dim embeddings for sub-150ms recall." }
];

const DELIVERY_STEPS = [
  { num: "01", title: "NATIVE CAPTURE", desc: "Native iOS/Android share-sheet triggers an async payload to our Express gateway with a <400ms HUD exit." },
  { num: "02", title: "TRANSCRIPTION & OCR", desc: "Whisper strips audio streams and generates word-level transcripts while scraping captions and creator metadata." },
  { num: "03", title: "GEMINI ENRICHMENT", desc: "Gemini 1.5 Flash outputs clean, strictly validated JSON cards and generates 768-dimension embeddings." }
];

const EDGE_FEATURES = [
  { title: "ZERO BOT LOCK-IN", desc: "Native OS share extensions bypass Meta's 24-hr DM limits and scraping bans." },
  { title: "STRUCTURED CODE & REPOS", desc: "Solves for concrete tools and code blocks rather than generic creator-hook notes." },
  { title: "ONE-TAP NOTION SYNC", desc: "Pushes formatted, cleanly indented database rows directly to your personal workspace." },
  { title: "SUB-150MS RECALL", desc: "Hybrid BM25 keyword matching paired with dense cosine similarity vector search." }
];

const RECORD_METRICS = [
  { val: "0", label: "PLATFORM BAN RISKS" },
  { val: "100%", label: "PRIVATE & SECURE RUNTIMES" },
  { val: "1-TAP", label: "SAVE MOTION TO COMPLETE RETRIEVAL" }
];

export default function DeepDiveScene() {
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
      const panels = section.querySelectorAll(".dive-panel");

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
            end: "+=500%", // Same as desktop
            scrub: 1.0,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        panels.forEach((panel, i) => {
          const title = panel.querySelector(".dive-title");
          const subtitle = panel.querySelector(".dive-subtitle");
          const items = panel.querySelectorAll(".dive-item");

          const start = i * 0.25;

          // Horizontal wipe (same as desktop)
          if (i > 0) {
            tl.fromTo(panel, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.15, ease: "power3.inOut" }, start);
          }

          tl.fromTo(title, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.1, ease: "power2.out" }, start + 0.02);

          if (subtitle) {
            tl.fromTo(subtitle, { opacity: 0 }, { opacity: 1, duration: 0.08, ease: "power2.out" }, start + 0.04);
          }

          tl.fromTo(items, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.1, stagger: 0.02, ease: "power2.out" }, start + 0.08);

          if (i < panels.length - 1) {
            tl.to([title, subtitle, items], { opacity: 0, scale: 0.95, duration: 0.1, ease: "power2.in" }, start + 0.22);
          }
        });

        const lastItems = panels[4]?.querySelectorAll(".dive-item") || [];
        const lastTitles = panels[4]?.querySelectorAll(".dive-title, .dive-subtitle") || [];
        if (lastTitles.length > 0) {
          tl.to([...lastTitles, ...lastItems], { opacity: 0.2, duration: 0.1, ease: "power2.inOut" }, 0.95);
        }

        return () => {};
      });

      // Desktop timeline
      mm.add(breakpoints.desktop, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=500%",
            scrub: 1.0,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        panels.forEach((panel, i) => {
          const title = panel.querySelector(".dive-title");
          const subtitle = panel.querySelector(".dive-subtitle");
          const items = panel.querySelectorAll(".dive-item");

          const start = i * 0.25;

          if (i > 0) {
            tl.fromTo(panel, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.15, ease: "power3.inOut" }, start);
          }

          tl.fromTo(title, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.1, ease: "power2.out" }, start + 0.02);

          if (subtitle) {
            tl.fromTo(subtitle, { opacity: 0 }, { opacity: 1, duration: 0.08, ease: "power2.out" }, start + 0.04);
          }

          tl.fromTo(items, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.1, stagger: 0.02, ease: "power2.out" }, start + 0.08);

          if (i < panels.length - 1) {
            tl.to([title, subtitle, items], { opacity: 0, scale: 0.95, duration: 0.1, ease: "power2.in" }, start + 0.22);
          }
        });

        const lastItems = panels[4]?.querySelectorAll(".dive-item") || [];
        const lastTitles = panels[4]?.querySelectorAll(".dive-title, .dive-subtitle") || [];
        if (lastTitles.length > 0) {
          tl.to([...lastTitles, ...lastItems], { opacity: 0.2, duration: 0.1, ease: "power2.inOut" }, 0.95);
        }

        return () => {};
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [navHeight] }
  );

  const panelStyle = {
    paddingTop: `clamp(${navHeight + 32}px, ${navHeight + 6}vh, ${navHeight + 72}px)`,
    paddingBottom: "clamp(32px, 6vh, 72px)",
  };

  return (
    <section ref={sectionRef} id="deep-dive" data-scene="deep-dive" className="scene-section relative overflow-hidden" style={{ minHeight: "100dvh" }}>
      <h2 className="sr-only">Enterprise Methodology</h2>

      {/* PANEL 1: DOMAIN EXPERTISE */}
      <div className="dive-panel absolute inset-0 z-10 flex items-center" style={{ clipPath: "inset(0 0 0 0)", backgroundColor: "#090A0A", ...panelStyle }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(244,242,236,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,236,0.03) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div className="absolute left-6 md:left-12 lg:left-16" style={{ top: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`, color: "rgba(244,242,236,0.3)", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const }}>
          05 — TARGET PERSONAS
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-center items-start md:items-center gap-6 lg:gap-24">
          <div className="w-full md:w-[45%] flex-shrink-0">
            <h3 className="dive-title" style={{ color: "#F4F2EC", fontSize: "clamp(2rem, 5vw, 5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 0.9, textTransform: "uppercase" as const }}>
              BUILT FOR BUILDERS
            </h3>
            <p className="dive-subtitle mt-4 md:mt-6" style={{ color: "#00C389", fontSize: "clamp(10px, 1.8vw, 11px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
              TAILORED FOR USERS WHO ACT ON SAVED CONTENT
            </p>
          </div>

          <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-h-[50vh] md:max-h-none overflow-y-auto md:overflow-visible">
            {DOMAINS.map((domain, i) => (
              <div key={domain.title} className="dive-item border-l md:border-l-0 md:border-t pl-4 md:pl-0 md:pt-4" style={{ borderColor: "rgba(244,242,236,0.15)" }}>
                <div style={{ color: "#00C389", fontSize: "clamp(9px, 1.6vw, 10px)", fontWeight: 700, letterSpacing: "0.2em", marginBottom: 4 }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ color: "#F4F2EC", fontSize: "clamp(11px, 2vw, 12px)", fontWeight: 700, letterSpacing: "0.05em", lineHeight: 1.4, textTransform: "uppercase" as const }}>{domain.title}</div>
                <div className="hidden md:block" style={{ color: "#B8B8B0", fontSize: "clamp(11px, 1.8vw, 12px)", fontWeight: 400, marginTop: 4, lineHeight: 1.5, maxWidth: "250px" }}>{domain.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PANEL 2: CAT FRAMEWORK */}
      <div className="dive-panel absolute inset-0 z-20 flex items-center" style={{ clipPath: "inset(0 100% 0 0)", backgroundColor: "#090A0A", ...panelStyle }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(244,242,236,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,236,0.03) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div className="absolute left-6 md:left-12 lg:left-16" style={{ top: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`, color: "rgba(244,242,236,0.3)", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const }}>
          06 — STRUCTURED OUTPUT
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-center items-start md:items-center gap-6 lg:gap-24">
          <div className="w-full md:w-[40%] flex-shrink-0">
            <h3 className="dive-title" style={{ color: "#F4F2EC", fontSize: "clamp(2rem, 5vw, 5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 0.9 }}>
              THE KNOWLEDGE CARD
            </h3>
            <p className="dive-subtitle mt-4 md:mt-6" style={{ color: "#00C389", fontSize: "clamp(11px, 1.8vw, 13px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
              ACTIONABLE DATA INSTEAD OF UNSEARCHABLE VIDEO
            </p>
          </div>

          <div className="w-full flex-1 flex flex-col gap-6 md:flex-row md:gap-12">
            {CAT_FRAMEWORK.map((cat) => (
              <div key={cat.letter} className="dive-item flex flex-row md:flex-col gap-4 md:gap-6 w-full items-center md:items-start">
                <div style={{ fontSize: "clamp(3rem, 10vw, 10rem)", fontWeight: 800, lineHeight: 0.8, color: "#00C389" }}>{cat.letter}</div>
                <div className="flex flex-col gap-1 md:gap-2 border-l md:border-l-0 pl-4 md:pl-0" style={{ borderColor: 'rgba(244,242,236,0.15)' }}>
                  <div style={{ color: "#F4F2EC", fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 700, letterSpacing: "0.15em" }}>{cat.title}</div>
                  <div style={{ color: "#B8B8B0", fontSize: "clamp(12px, 1.8vw, 13px)", lineHeight: 1.5, maxWidth: 260, fontWeight: 400 }}>{cat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PANEL 3: DELIVERY PROCESS */}
      <div className="dive-panel absolute inset-0 z-30 flex items-center" style={{ clipPath: "inset(0 100% 0 0)", backgroundColor: "#090A0A", ...panelStyle }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(244,242,236,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,236,0.03) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div className="absolute left-6 md:left-12 lg:left-16" style={{ top: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`, color: "rgba(244,242,236,0.3)", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const }}>
          07 — PIPELINE ARCHITECTURE
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-center items-start md:items-center gap-6 lg:gap-24">
          <div className="w-full md:w-[40%] flex-shrink-0">
            <h3 className="dive-title" style={{ color: "#F4F2EC", fontSize: "clamp(2rem, 5vw, 5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 0.9 }}>
              HOW WE EXTRACT VALUE
            </h3>
            <p className="dive-subtitle mt-4 md:mt-6" style={{ color: "#00C389", fontSize: "clamp(10px, 1.8vw, 11px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
              From Native Share-Sheet to Queryable Vector DB
            </p>
          </div>

          <div className="w-full flex-1 flex flex-col gap-6 md:gap-12">
            {DELIVERY_STEPS.map((step) => (
              <div key={step.num} className="dive-item flex flex-col gap-3 md:gap-4 md:pt-6 border-l md:border-l-0 md:border-t pl-4 md:pl-0" style={{ borderColor: "rgba(244,242,236,0.15)" }}>
                <div className="text-tabular" style={{ fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 700, color: "#00C389" }}>{step.num}</div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div style={{ color: "#F4F2EC", fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 700, letterSpacing: "0.05em" }}>{step.title}</div>
                  <div style={{ color: "#B8B8B0", fontSize: "clamp(12px, 1.8vw, 13px)", lineHeight: 1.5, maxWidth: "350px" }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PANEL 4: THE EDGE */}
      <div className="dive-panel absolute inset-0 z-40 flex items-center" style={{ clipPath: "inset(0 100% 0 0)", backgroundColor: "#F4F2EC", ...panelStyle }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(9,10,10,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(9,10,10,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div className="absolute left-6 md:left-12 lg:left-16" style={{ top: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`, color: "rgba(9,10,10,0.4)", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const }}>
          08 — WHY SAVVVY WINS
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-center items-start md:items-center gap-6 lg:gap-24">
          <div className="w-full md:w-[40%] flex-shrink-0">
            <h3 className="dive-title" style={{ color: "#090A0A", fontSize: "clamp(2rem, 5vw, 5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 0.9 }}>
              ENGINEERED FOR RETRIEVAL
            </h3>
            <p className="dive-subtitle mt-4 md:mt-6" style={{ color: "#00C389", fontSize: "clamp(11px, 1.8vw, 13px)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
              WHY NATIVE SHARE-SHEET CRUSHES BOTS &amp; BOOKMARKERS
            </p>
          </div>

          <div className="w-full flex-1 flex flex-col gap-6 md:gap-12">
            {EDGE_FEATURES.map((edge) => (
              <div key={edge.title} className="dive-item flex flex-col gap-2 md:gap-4 relative pl-4 border-l md:border-l-0 md:pl-0 md:pt-6 md:border-t" style={{ borderColor: "rgba(9,10,10,0.15)" }}>
                <div className="hidden md:block absolute left-0 top-0 w-8 h-[2px]" style={{ backgroundColor: "#00C389" }}></div>
                <div className="md:hidden absolute left-0 top-2 w-[2px] h-8" style={{ backgroundColor: "#00C389" }}></div>
                <div style={{ color: "#090A0A", fontSize: "clamp(12px, 2vw, 13px)", fontWeight: 700, letterSpacing: "0.1em" }}>{edge.title}</div>
                <div style={{ color: "#222422", fontSize: "clamp(11px, 1.8vw, 12px)", lineHeight: 1.5 }}>{edge.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PANEL 5: TRACK RECORD */}
      <div className="dive-panel absolute inset-0 z-50 flex items-center" style={{ clipPath: "inset(0 100% 0 0)", backgroundColor: "#090A0A", ...panelStyle }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(244,242,236,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,236,0.03) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div className="absolute left-6 md:left-12 lg:left-16" style={{ top: `clamp(${navHeight + 20}px, ${navHeight + 4}vh, ${navHeight + 48}px)`, color: "rgba(244,242,236,0.3)", fontSize: "clamp(9px, 1.8vw, 11px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const }}>
          09 — THE DECISION
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-center items-start md:items-center gap-8 lg:gap-24">
          <div className="w-full md:w-[40%] flex-shrink-0 flex flex-col">
            <h3 className="dive-title mb-6 md:mb-12" style={{ color: "#F4F2EC", fontSize: "clamp(1.75rem, 5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              BUILT ON REAL INFRASTRUCTURE
            </h3>

            <div className="dive-subtitle mb-6 md:mb-8" style={{ color: "#B8B8B0", fontSize: "clamp(9px, 1.8vw, 10px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
              WHY WE EXPLICITLY REJECTED DM AND MESSAGING BOTS
            </div>
          </div>

          <div className="w-full md:w-auto flex-1 flex flex-col max-h-[50vh] md:max-h-none overflow-y-auto md:overflow-visible md:pl-6">
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12 mb-12 md:mb-24">
              {RECORD_METRICS.map(metric => (
                <div key={metric.val} className="dive-item flex flex-col items-start gap-1 md:gap-3">
                  <div className="text-tabular" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 800, color: "#00C389", lineHeight: 1 }}>{metric.val}</div>
                  <div style={{ color: "#B8B8B0", fontSize: "clamp(9px, 1.8vw, 10px)", fontWeight: 600, letterSpacing: "0.15em" }}>{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-8 md:gap-16">
              <div className="dive-item w-full flex flex-col items-start pt-6 border-t" style={{ borderColor: "rgba(244,242,236,0.15)" }}>
                <div style={{ color: "#F4F2EC", fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 800, letterSpacing: "0.1em", marginBottom: 12 }}>THE INSTAGRAM DM BOT TRAP</div>
                <div style={{ color: "#B8B8B0", fontSize: "clamp(0.875rem, 1.8vw, 1.25rem)", lineHeight: 1.6, fontStyle: "italic", fontWeight: 400 }}>
                  &ldquo;Requires fragile Meta app reviews, frequently expires 24-hr reply windows, sends temporary lookaside links, and relies on scraping that risks instant shadowbans.&rdquo;
                </div>
              </div>

              <div className="dive-item w-full flex flex-col items-start pt-6 border-t" style={{ borderColor: "rgba(244,242,236,0.15)" }}>
                <div style={{ color: "#F4F2EC", fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 800, letterSpacing: "0.1em", marginBottom: 12 }}>THE TELEGRAM / WHATSAPP FORWARDING TRAP</div>
                <div style={{ color: "#B8B8B0", fontSize: "clamp(0.875rem, 1.8vw, 1.25rem)", lineHeight: 1.6, fontStyle: "italic", fontWeight: 400 }}>
                  &ldquo;Routing saves into messaging channels creates another messy inbox. Chat rooms are unstructured retrieval surfaces compared to indexed, filterable cards.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
