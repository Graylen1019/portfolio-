"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

import {
  LandingModal,
  StackSection,
  AboutSection,
  LandingSection,
  LoadingSection,
  ProjectSection,
  ExperienceSection,
} from "@/modules/components/index";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isLandingModalOpen, setIsLandingModalOpen] = useState(false);
  const fadeRef = useRef<HTMLDivElement>(null);

  // Keep ordering stable; pass sectionIndex so internals can sync.
  const sections = [
    //@ts-expect-error next-line
    { node: <LandingSection sectionIndex={0} />, key: "landing" },
    { node: <AboutSection sectionIndex={1} />, key: "about" },
    { node: <ExperienceSection sectionIndex={2} />, key: "experience" },
    { node: <StackSection sectionIndex={3} />, key: "stack" },
    { node: <ProjectSection sectionIndex={4} />, key: "projects" },
  ];

  // Simulated loading
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  // Master pinned timeline with depth-only crossfades + sync events
  useEffect(() => {
    if (loading || !fadeRef.current) return;

    const slides = gsap.utils.toArray<HTMLDivElement>(".section");
    if (!slides.length) return;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    gsap.set(slides, { willChange: "opacity, transform" }); // GPU hinting

    // ensure first is visible
    gsap.set(slides[0], { opacity: 1, scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: fadeRef.current,
        start: "top top",
        end: () => `+=${slides.length * window.innerHeight}`,
        scrub: 0.4,             // slightly tighter follow
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        snap: {
          snapTo: 1 / (slides.length - 1),
          duration: 0.35,       // quick snap-in
          ease: "power2.out",
        },
      },
    });

    slides.forEach((slide, i) => {
      const next = slides[i + 1];
      if (!next) return;

      tl.to(
        slide,
        {
          opacity: 0,
          scale: 1.05,
          duration: 0.75,
          ease: "power3.out",
        },
        i
      );

      tl.fromTo(
        next,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
        },
        i
      );
    });




    // fire once for landing at start
    window.dispatchEvent(new CustomEvent("section:active", { detail: 0 }));

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loading]);

  const anyModalOpen = isLandingModalOpen;

  return (
    <main className="text-white overflow-x-hidden relative select-none">
      {loading ? (
        <LoadingSection />
      ) : (
        <>
          {/* Floating Contact */}
          {!anyModalOpen && (
            <div className="hidden md:flex items-center justify-center gap-4 fixed bottom-6 right-6 z-30">
              <span className="text-lg text-zinc-300 tracking-wide">Contact Me</span>
              <Button
                onClick={() => setIsLandingModalOpen(true)}
                aria-label="Open Contact Modal"
                className="flex items-center justify-center size-20 rounded-full cursor-pointer 
                           transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#af76c4aa] 
                           hover:text-[#af76c4] bg-zinc-900/60 backdrop-blur-md shadow-lg border border-[#af76c4]/30"
              >
                <MailIcon className="size-8 animate-[pulse_3s_ease-in-out_infinite]" />
              </Button>
            </div>
          )}

          {/* Rotated Email Tag */}
          <aside className="fixed top-1/2 left-[-175px] -translate-y-1/2 rotate-90 z-20 flex items-center gap-4 group">
            <div className="h-px w-20 bg-[#af76c4]/40 transition-all duration-500  group-hover:bg-[#af76c4]" />
            <a
              href="mailto:Graylenbigelow@gmail.com"
              className="text-sm tracking-widest text-zinc-400 font-medium transition-all duration-300 group-hover:text-[#af76c4]"
            >
              Graylenbigelow@gmail.com
            </a>
            <div className="h-px w-20 bg-[#af76c4]/40 transition-all duration-500  group-hover:bg-[#af76c4]" />
          </aside>

          {/* Modal */}
          {isLandingModalOpen && (
            <LandingModal setIsModalOpen={setIsLandingModalOpen} />
          )}

          {/* Pinned, overlapping slides */}
          <div ref={fadeRef} className="relative h-screen overflow-hidden">
            {sections.map((s, i) => (
              <div
                key={s.key}
                className="section absolute inset-0 opacity-0 will-change-transform"
                style={{ zIndex: sections.length - i }}
              >
                {s.node}
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
