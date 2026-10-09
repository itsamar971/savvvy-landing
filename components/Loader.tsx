"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const finish = useCallback(() => {
    setVisible(false);
    onCompleteRef.current();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const counter = counterRef.current;
    if (!container || !line || !counter) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      finish();
      return;
    }

    const counterObj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.4,
          ease: "power3.inOut",
          onComplete: finish,
        });
      },
    });

    tl.fromTo(
      ".loader-word span",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
        stagger: 0.02,
        ease: "power3.out",
      }
    )
      .fromTo(
        ".loader-subtitle span",
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.015,
          ease: "power3.out",
        },
        "-=0.05"
      )
      .fromTo(
        line,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: "power2.inOut" },
        "-=0.05"
      )
      .to(
        counterObj,
        {
          val: 100,
          duration: 0.4,
          ease: "power2.inOut",
          onUpdate: () => {
            counter.textContent = String(Math.round(counterObj.val)).padStart(
              3,
              "0"
            );
          },
        },
        "<"
      );

    return () => {
      tl.kill();
    };
  }, [finish]);

  if (!visible) return null;

  const wrapChars = (text: string, className: string) =>
    text.split("").map((char, i) => (
      <span
        key={`${className}-${i}`}
        style={{ display: "inline-block", opacity: 0 }}
      >
        {char === " " ? " " : char}
      </span>
    ));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "#090A0A", clipPath: "inset(0 0 0 0)" }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <div
            className="loader-word text-scene-title"
            style={{ color: "#F4F2EC" }}
          >
            {wrapChars("SAVVVY", "title")}
          </div>
          <div
            className="loader-word text-scene-large mt-1"
            style={{ color: "#B8B8B0", fontWeight: 400 }}
          >
            {wrapChars("KNOWLEDGE ENGINE", "sub")}
          </div>
        </div>

        <div
          ref={lineRef}
          className="w-48 h-[1px] mt-6"
          style={{
            background: "#B8B8B0",
            transformOrigin: "left center",
            transform: "scaleX(0)",
          }}
        />

        <div className="flex items-center gap-4 mt-4">
          <div
            className="loader-subtitle text-metadata"
            style={{ color: "#B8B8B0" }}
          >
            {wrapChars("STOP SAVING. START RETRIEVING.", "meta")}
          </div>
        </div>

        <div className="text-metadata mt-2" style={{ color: "#B8B8B0" }}>
          INDEXING{" "}
          <span ref={counterRef} className="text-tabular">
            000
          </span>
          %
        </div>
      </div>
    </div>
  );
}
