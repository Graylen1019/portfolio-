"use client";
import gsap from "gsap";
import { useSectionEnter } from "@/hooks/useSectionEnter";
import Image from "next/image";

export function AboutSection({ sectionIndex = 1 }: { sectionIndex?: number }) {
  const ref = useSectionEnter(sectionIndex, (root) => {
    const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.out", duration: 0.8 } });
    tl.from(root.querySelector(".about-heading"), { opacity: 0, y: -30 })
      .from(root.querySelector(".about-image"), { opacity: 0, y: 20, scale: 0.96 }, "-=0.4")
      .from(root.querySelectorAll(".about-text > *"), { opacity: 0, y: 20, stagger: 0.12 }, "-=0.3");
    return tl;
  });

  return (
    <section className="w-full h-full flex items-center justify-center">
      <div ref={ref} className="max-w-6xl w-full mx-auto px-8 md:px-12">
        <h2 className="about-heading text-5xl font-bold text-center text-[#af76c4] mb-16">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="about-image md:w-1/2 flex justify-center">
            <Image
              width={256}
              height={256}
              src="/headshot.jpg"
              alt="Graylen Bigelow"
              className="about-image rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-[#af76c4]"
            />
          </div>

          <div className="about-text md:w-1/2 space-y-6 text-center md:text-left about-text">
            <p className="text-lg leading-relaxed text-zinc-300">
              Hello! I’m <span className="font-semibold text-[#af76c4]">Graylen Bigelow</span>, a passionate Frontend Developer who turns ideas into interactive, user-friendly web experiences.
            </p>
            <p className="text-lg leading-relaxed text-zinc-300">
              My expertise lies in React, Next.js, and TypeScript. I’ve contributed to projects like{" "}
              <span className="font-semibold text-[#af76c4]">Skinstric AI</span> and mentor at{" "}
              <span className="font-semibold text-[#af76c4]">Frontend Simplified</span>.
            </p>
            <p className="text-lg leading-relaxed text-zinc-300">
              Every project I take on is a chance to craft something functional, accessible, and visually cohesive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
