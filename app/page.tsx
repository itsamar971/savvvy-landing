"use client";

import { useState, useCallback, useEffect } from "react";
import { useSmoothScroll } from "@/lib/smooth-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import HeroScene from "@/components/scenes/HeroScene";

gsap.registerPlugin(ScrollTrigger);

const BuildingScene = dynamic(
  () => import("@/components/scenes/BuildingScene"),
  { ssr: false }
);
const ScaleScene = dynamic(() => import("@/components/scenes/ScaleScene"), {
  ssr: false,
});
const SolutionsScene = dynamic(
  () => import("@/components/scenes/SolutionsScene"),
  { ssr: false }
);
const DeepDiveScene = dynamic(() => import("@/components/scenes/DeepDiveScene"), {
  ssr: false,
});
const ClimaxScene = dynamic(() => import("@/components/scenes/ClimaxScene"), {
  ssr: false,
});
const CTAScene = dynamic(() => import("@/components/scenes/CTAScene"), {
  ssr: false,
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const lenisRef = useSmoothScroll();

  useEffect(() => {
    if (lenisRef.current && !loaded) {
      lenisRef.current.stop();
    }
  }, [lenisRef, loaded]);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
    if (lenisRef.current) {
      lenisRef.current.start();
    }
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, [lenisRef]);

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />
      <Navigation />
      <main
        id="main-content"
        className="relative"
        style={{ overflow: loaded ? undefined : "hidden" }}
      >
        <HeroScene />
        <BuildingScene />
        <ScaleScene />
        <SolutionsScene />
        <DeepDiveScene />
        <ClimaxScene />
        <CTAScene />
      </main>
    </>
  );
}
