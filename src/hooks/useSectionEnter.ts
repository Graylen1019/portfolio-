// hooks/useSectionEnter.ts
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useSectionEnter(sectionIndex: number, build: (ctxEl: HTMLElement) => gsap.core.Timeline) {
  const rootRef = useRef<HTMLDivElement>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const onActive = (e: Event) => {
      const idx = (e as CustomEvent<number>).detail;
      if (idx === sectionIndex && !playedRef.current && rootRef.current) {
        const tl = build(rootRef.current);
        tl.play(0);
        playedRef.current = true;
      }
    };
    window.addEventListener("section:active", onActive as EventListener);
    return () => window.removeEventListener("section:active", onActive as EventListener);
  }, [sectionIndex, build]);

  return rootRef;
}
