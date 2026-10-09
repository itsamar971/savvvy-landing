"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function splitTextToSpans(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent || "";
  element.textContent = "";
  element.setAttribute("aria-label", text);

  const spans: HTMLSpanElement[] = [];
  for (const char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.setAttribute("aria-hidden", "true");
    if (char === " ") span.style.width = "0.3em";
    element.appendChild(span);
    spans.push(span);
  }
  return spans;
}

export function createPinnedTimeline(
  trigger: HTMLElement,
  options: {
    scrub?: number;
    start?: string;
    end?: string;
    pin?: boolean | HTMLElement;
    pinSpacing?: boolean;
    anticipatePin?: number;
    onEnter?: () => void;
    onLeave?: () => void;
    onEnterBack?: () => void;
    onLeaveBack?: () => void;
  } = {}
): gsap.core.Timeline {
  const {
    scrub = 0.8,
    start = "top top",
    end = "+=150%",
    pin = true,
    pinSpacing = true,
    anticipatePin = 1,
    onEnter,
    onLeave,
    onEnterBack,
    onLeaveBack,
  } = options;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub,
      pin,
      pinSpacing,
      anticipatePin,
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack,
    },
  });

  return tl;
}

export { gsap, ScrollTrigger };
