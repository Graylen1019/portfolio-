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
    <section className="w-full h-full flex flex-col justify-center items-center py-24 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-[#af76c4] mb-8">Projects</h2>
      <div ref={ref} className="flex flex-col md:flex-row gap-8 max-w-6xl">
        <div className="flex flex-col gap-4 md:w-1/3">
          {projects.map((project) => (
            // eslint-disable-next-line jsx-a11y/role-supports-aria-props
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              aria-selected={selectedProject?.id === project.id}
              className={`p-4 text-left border rounded-xl transition-all ${selectedProject?.id === project.id
                  ? "border-[#af76c4] bg-[#1a1a1a]"
                  : "border-gray-700 hover:border-[#af76c4]/50"
                }`}
            >
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
            </button>
          ))}
        </div>


        <div className="md:w-2/3 bg-[#121212] p-6 rounded-2xl shadow-lg">
          {selectedProject && (
            <>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="rounded-xl object-cover mb-4"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[#af76c4]">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="bg-[#222] text-gray-300 text-xs px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#af76c4] hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#af76c4]"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <FooterSection />
    </section>
  );
};
