"use client";

import Image from "next/image";
import React, { useState } from "react";
import gsap from "gsap";
import { useSectionEnter } from "@/hooks/useSectionEnter";
import { FooterSection } from "./footer";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
}

export const ProjectSection: React.FC<{ sectionIndex?: number }> = ({ sectionIndex = 4 }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "YouTube Clone",
      description:
        "A full-stack video sharing platform with secure authentication, video uploads, and smooth streaming built on Next.js, Bun, and Mux.",
      techStack: [
        "Next.js",
        "Bun",
        "TypeScript",
        "TailwindCSS",
        "tRPC",
        "Drizzle ORM",
        "Clerk.js",
        "Mux",
        "UploadThing",
      ],
      image: "/projects/youtube-ss.png",
      liveLink: "https://new-tube-project.vercel.app/",
      githubLink: "https://github.com/Graylen1019/NewTube-project",
    },
    {
      id: 2,
      title: "Google Docs Clone",
      description:
        "Real-time collaborative text editor powered by Liveblocks and Clerk.js, providing a seamless experience for multiple users editing simultaneously.",
      techStack: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Liveblocks",
        "Clerk.js",
      ],
      image: "/projects/docs-ss.png",
      liveLink: "https://google-docs-rouge.vercel.app/",
      githubLink: "https://github.com/Graylen1019/Google-docs",
    },
    {
      id: 3,
      title: "OMDb Movie App",
      description:
        "A responsive app leveraging the OMDb API with dynamic search, filtering, and detailed movie views, optimized for smooth UX and fast load times.",
      techStack: ["Next.js", "TypeScript", "TailwindCSS"],
      image: "/projects/OMDb-ss.png",
      liveLink: "https://final-proj-3.vercel.app/",
      githubLink: "https://github.com/Graylen1019/Final-proj-3",
    },
    {
      id: 4,
      title: "Skinstric AI",
      description:
        "AI-powered skin analysis app using OpenAI Vision API with real-time image processing, custom GSAP animations, and accurate detection results.",
      techStack: ["Next.js", "TypeScript", "TailwindCSS", "GSAP"],
      image: "/projects/skinstric-ss.png",
      liveLink: "https://skinstric-intern.vercel.app/",
      githubLink: "https://github.com/Graylen1019/skinstric-intern",
    },
  ];

  // ✨ Animate in sync with scroll
  const ref = useSectionEnter(sectionIndex, (root) => {
    const tl = gsap.timeline({ paused: true });
    tl.from(root.querySelector(".proj-heading"), {
      opacity: 0,
      y: -30,
      duration: 0.7,
      ease: "power2.out",
    })
      .fromTo(
        root.querySelectorAll(".proj-card"),
        { opacity: 0.5, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        root.querySelector(".footer"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power1.out",
        },
        "-=0.25"
      );
    return tl;
  });

  return (
    <section
      id="projects"
      className="w-full h-full flex flex-col items-center justify-center text-white"
    >
      <div ref={ref} className="flex justify-center py-24 w-full">
        <div className="flex items-center justify-center flex-col w-screen max-w-7xl mx-auto px-4 space-y-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="proj-heading text-4xl md:text-6xl font-extrabold tracking-tight text-[#af76c4] mb-2">
              Projects
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
              A selection of my most recent builds — blending performance,
              architecture, and clean UX.
            </p>
          </div>

          {/* Two-column layout (Desktop) */}
          <div className="hidden md:flex w-full max-w-6xl h-[80vh] gap-8">
            {/* Left Column - Project List */}
            <div className="w-1/3 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-[#af76c4]/40 pr-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`proj-card group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-[#af76c4]/40 hover:bg-[#1e1e1e] transition-all duration-300 ${selectedProject?.id === project.id
                      ? "border-[#af76c4]/60 bg-[#1e1e1e]"
                      : ""
                    }`}
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-[#af76c4]">
                      {project.title}
                    </span>
                    <span className="text-xs text-gray-400 line-clamp-2">
                      {project.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column - Project Details */}
            <div
              className={`flex-1 max-h-[60vh] bg-[#1a1a1a] rounded-2xl border border-[#af76c4]/20 p-6 transition-all duration-500 ${selectedProject
                  ? "opacity-100 translate-x-0"
                  : "opacity-50 translate-x-6"
                }`}
            >
              {selectedProject ? (
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-bold text-[#af76c4]">
                        {selectedProject.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="text-gray-300 mb-6 text-base leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#af76c4]/10 text-[#af76c4] text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative w-full h-80 rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500 text-center">
                  <p>Select a project to preview details</p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile grid */}
          <div className="grid grid-cols-1 md:hidden gap-10 max-w-6xl w-full px-4 mt-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="proj-card bg-[#1c1c1c] border border-transparent hover:border-[#af76c4]/40 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-[#af76c4] mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base mb-5 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 6).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#af76c4]/10 text-[#af76c4] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer fade-in */}
          <div className="footer w-full">
            <FooterSection />
          </div>
        </div>
      </div>
    </section>
  );
};
