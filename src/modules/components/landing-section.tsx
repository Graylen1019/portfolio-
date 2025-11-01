// landing-section.tsx
"use client";

import Link from "next/link";
import { GitStats } from "./git-stats";
import { FaChevronDown, FaEye, FaFileArrowDown, FaGithub, FaLinkedin } from "react-icons/fa6";

export const LandingSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="landing"
      className="min-h-screen w-full flex items-center justify-center"
      aria-label="Intro / Hero"
    >
      <div className="mx-auto w-full max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <h1 className="leading-[0.95] text-5xl sm:text-6xl font-anton">
            <span className="text-[#af76c4] font-bold block">GRAYLEN</span>
            <span className="text-white font-bold block">BIGELOW</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-200">
            Hi! I’m a <span className="text-[#af76c4]">Frontend Developer</span> focused on{" "}
            <span className="text-[#af76c4]">Next.js</span>. I build practical, fast, and
            delightful web apps with attention to the little details that make a big difference.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="https://www.linkedin.com/in/graylen-bigelow-834435371"
              target="_blank"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 hover:text-[#0A66C2] transition-transform hover:scale-105"
            >
              <FaLinkedin size={20} /> <span className="text-sm md:text-base">LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/Graylen1019"
              target="_blank"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 hover:text-zinc-300 transition-transform hover:scale-105"
            >
              <FaGithub size={20} /> <span className="text-sm md:text-base">GitHub</span>
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              aria-label="View Resume"
              className="inline-flex items-center gap-2 hover:text-purple-400 transition-transform hover:scale-105"
            >
              <FaEye size={20} /> <span className="text-sm md:text-base">View Resume</span>
            </Link>

            <Link
              href="/resume.pdf"
              download
              aria-label="Download Resume"
              className="inline-flex items-center gap-2 hover:text-purple-400 transition-transform hover:scale-105"
            >
              <FaFileArrowDown size={20} />{" "}
              <span className="text-sm md:text-base">Download Resume</span>
            </Link>
          </div>
        </div>

        {/* Right: Stats / Visual */}
        <div className="w-full">
          <GitStats />
        </div>
      </div>

      {/* Scroll hint (subtle) */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-80 hover:opacity-100 transition-opacity hover:cursor-pointer"
      >
        <FaChevronDown size={48} color="#af76c4" />
      </button>
    </section>
  );
};
