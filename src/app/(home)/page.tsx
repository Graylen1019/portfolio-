"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
import Link from "next/link";

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
  const [_, setUnderMaintenance] = useState(false); // Placeholder for maintenance mode

  const sections = [
    //@ts-expect-error next-line
    { node: <LandingSection sectionIndex={0} />, key: "landing" },
    { node: <AboutSection sectionIndex={1} />, key: "about" },
    { node: <ExperienceSection sectionIndex={2} />, key: "experience" },
    { node: <StackSection sectionIndex={3} />, key: "stack" },
    { node: <ProjectSection sectionIndex={4} />, key: "projects" },
  ];

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    setUnderMaintenance(true); // Placeholder for maintenance mode
    return () => clearTimeout(t);
  }, []);

  // GSAP fade timeline
  useEffect(() => {
    if (loading || isLandingModalOpen || !fadeRef.current) return;

    const slides = gsap.utils.toArray<HTMLDivElement>(".section");
    if (!slides.length) return;

    // Kill old triggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Initialize all slides
    slides.forEach((slide, i) => {
      gsap.set(slide, {
        opacity: 0,
        scale: 0.95,
        pointerEvents: i === 0 ? "auto" : "none", // disable clicks initially
        willChange: "opacity, transform",
      });
    })

    // Make first slide visible
    gsap.set(slides[0], { opacity: 1, scale: 1, pointerEvents: "auto" });

    // Create timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: fadeRef.current,
        start: "top top",
        end: () => `+=${slides.length * window.innerHeight}`,
        scrub: 0.35,
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        snap: {
          snapTo: 1 / (slides.length - 1),
          duration: 0.4,
          ease: "power2.out",
        },
      },
    });

    // 🔑 FIX: stop pin-spacer from blocking clicks
    const st = tl.scrollTrigger;
    if (st?.pin && st.pin.parentNode) {
      (st.pin.parentNode as HTMLElement).style.pointerEvents = "none";
    }


    // Animate each slide
    slides.forEach((slide, i) => {
      const next = slides[i + 1];
      if (!next) return;

      const position = i + 0.001; // 👈 critical

      tl.to(
        slide,
        {
          opacity: 0,
          scale: 1.05,
          duration: 0.8,
          ease: "power3.out",
          pointerEvents: "none",
        },
        position
      );

      tl.fromTo(
        next,
        { opacity: 0, scale: 0.95, pointerEvents: "none" },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          pointerEvents: "auto",
        },
        position
      );
    });

    // Dispatch custom event if you need
    window.dispatchEvent(new CustomEvent("section:active", { detail: 0 }));

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loading, isLandingModalOpen]);


  // ⭐ IMPORTANT FIX: do NOT unmount pinned content — hide it instead
  useEffect(() => {
    if (isLandingModalOpen) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.globalTimeline.clear();
    }
  }, [isLandingModalOpen]);

  // Keep triggers aligned when modal toggles (safe)
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 50);
    return () => clearTimeout(id);
  }, [isLandingModalOpen]);

  return (
    <main className="text-white overflow-x-hidden relative select-none">
      {loading ? (
        <LoadingSection />
      ) : (
        <>
          {/* Floating Contact Button */}
          {!isLandingModalOpen && (
            <div className="hidden md:flex items-center justify-center gap-4 fixed bottom-12 right-6 z-30">
              <span className="text-lg text-zinc-300 tracking-wide">
                Contact Me
              </span>
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

          {/* ⭐ FIX: KEEP THIS MOUNTED — JUST HIDE IT */}

          <div
            ref={fadeRef}
            className={`relative h-screen overflow-hidden ${isLandingModalOpen ? "hidden" : ""
              }`}
          >
            {sections.map((s, i) => (
              <div
                key={s.key}
                className="section absolute inset-0 opacity-0 will-change-transform pointer-events-none"
                style={{ zIndex: sections.length - i }}
              >
                {s.node}
              </div>
            ))}
          </div>

          {/* Rotated Email Tag */}
          {!isLandingModalOpen && (
            <aside className="fixed top-1/2 left-[-175px] -translate-y-1/2 rotate-90 z-20 flex items-center gap-4 group">
              <div className="h-px w-20 bg-[#af76c4]/40 transition-all duration-500 group-hover:bg-[#af76c4]" />
              <a
                href="mailto:Graylenbigelow@gmail.com"
                target="_blank"
                className="text-sm tracking-widest text-zinc-400 font-medium transition-all duration-300 group-hover:text-[#af76c4]"
              >
                Graylenbigelow@gmail.com
              </a>
              <div className="h-px w-20 bg-[#af76c4]/40 transition-all duration-500 group-hover:bg-[#af76c4]" />
            </aside>
          )}

          {/* Maintenance Mode Banner */}
          {!isLandingModalOpen && _ && (
            <>
            <div className="fixed bottom-0 left-0 w-full bg-yellow-600 text-black text-center py-2 z-20">
                <p className="text-lg font-bold">
                  ⚠️ This site is currently under maintenance. Some features may  not work as expected. I appreciate your patience! For more info, click <Link href={"https://github.com/Graylen1019/portfolio-/blob/main/README.md"} className="text-white text-lg font-medium">&quot;Here&quot;</Link>. ⚠️
                </p>
              </div>
              <button className="bg-red w-4 h-6">
                More Info
              </button>
              </>
          )}

          {/* Modal */}
          {isLandingModalOpen &&
            typeof window !== "undefined" &&
            createPortal(
              <LandingModal setIsModalOpen={setIsLandingModalOpen} />,
              document.body
            )}
        </>
      )}
    </main>
  );
}
