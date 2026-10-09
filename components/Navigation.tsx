"use client";

import { useRef, useEffect, useState, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type NavTheme = "dark" | "warm" | "green";

interface ThemeColors {
  text: string;
  textMuted: string;
  border: string;
  ctaBg: string;
  ctaText: string;
  ctaHoverBg: string;
}

const THEME_MAP: Record<NavTheme, ThemeColors> = {
  dark: {
    text: "#F4F2EC",
    textMuted: "#B8B8B0",
    border: "rgba(244, 242, 236, 0.08)",
    ctaBg: "transparent",
    ctaText: "#F4F2EC",
    ctaHoverBg: "rgba(244, 242, 236, 0.06)",
  },
  warm: {
    text: "#090A0A",
    textMuted: "#222422",
    border: "rgba(9, 10, 10, 0.1)",
    ctaBg: "transparent",
    ctaText: "#090A0A",
    ctaHoverBg: "rgba(9, 10, 10, 0.05)",
  },
  green: {
    text: "#090A0A",
    textMuted: "#222422",
    border: "rgba(9, 10, 10, 0.12)",
    ctaBg: "transparent",
    ctaText: "#090A0A",
    ctaHoverBg: "rgba(9, 10, 10, 0.08)",
  },
};

const NAV_LINKS = [
  { label: "How It Works", href: "#solutions" },
  { label: "Capabilities", href: "#scale" },
  { label: "Personas", href: "#building" },
  { label: "Architecture", href: "#deep-dive" },
];

// Create a global navbar height storage
export let NAV_HEIGHT = 72;

export function getNavHeight(): number {
  return NAV_HEIGHT;
}

const Navigation = forwardRef<HTMLElement>((props, forwardedRef) => {
  const internalRef = useRef<HTMLElement>(null);
  const navRef = (forwardedRef as React.RefObject<HTMLElement>) || internalRef;
  const [theme, setTheme] = useState<NavTheme>("dark");
  const [hidden, setHidden] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Update global nav height
  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        NAV_HEIGHT = navRef.current.offsetHeight;
      }
    };
    
    updateHeight();
    window.addEventListener("resize", updateHeight);
    
    return () => window.removeEventListener("resize", updateHeight);
  }, [navRef]);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scenes: { selector: string; theme: NavTheme }[] = [
      { selector: "[data-scene='hero']", theme: "dark" },
      { selector: "[data-scene='building']", theme: "dark" },
      { selector: "[data-scene='scale']", theme: "warm" },
      { selector: "[data-scene='solutions']", theme: "dark" },
      { selector: "[data-scene='deep-dive']", theme: "dark" },
      { selector: "[data-scene='climax']", theme: "green" },
      { selector: "[data-scene='cta']", theme: "dark" },
    ];

    const triggers: ScrollTrigger[] = [];

    const createTriggers = () => {
      scenes.forEach(({ selector, theme: sceneTheme }) => {
        const el = document.querySelector(selector);
        if (!el) return;

        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 50px",
          end: "bottom 50px",
          onEnter: () => setTheme(sceneTheme),
          onEnterBack: () => setTheme(sceneTheme),
        });
        triggers.push(st);
      });

      const scrollSt = ScrollTrigger.create({
        start: "top -80px",
        end: "max",
        onUpdate: (self) => setScrolled(self.progress > 0),
      });
      triggers.push(scrollSt);
    };

    const timer = setTimeout(createTriggers, 300);

    return () => {
      clearTimeout(timer);
      triggers.forEach((st) => st.kill());
    };
  }, []);

  const colors = THEME_MAP[theme];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[200] transition-all duration-500"
      style={{
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="mx-auto flex items-center justify-between h-[72px] transition-all duration-300"
        style={{
          paddingLeft: "clamp(20px, 3.6vw, 60px)",
          paddingRight: "clamp(20px, 3.6vw, 60px)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          backgroundColor: "transparent",
          borderBottom: scrolled ? `1px solid ${colors.border}` : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a
          href="#main-content"
          className="flex items-center gap-2 transition-colors duration-300"
          style={{ color: colors.text }}
        >
          <span
            style={{
              fontSize: "clamp(16px, 4vw, 18px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Savvvy
          </span>
        </a>

        {/* Center nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 hover:opacity-70"
              style={{
                color: colors.textMuted,
                fontSize: 13,
                fontWeight: 450,
                letterSpacing: "0.01em",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="#cta"
            className="group relative flex items-center justify-center gap-1 md:gap-2 transition-all duration-300 overflow-hidden"
            style={{
              border: `1px solid ${colors.text}`,
              padding: "10px 24px",
              color: colors.text,
              fontSize: "clamp(10px, 2.5vw, 12px)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              whiteSpace: "nowrap",
            }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#090A0A]">
              Get Savvvy
            </span>
            <span className="hidden md:inline-block relative z-10 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#090A0A]">
              &#8599;
            </span>
            <div
              className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              style={{ background: colors.text }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
