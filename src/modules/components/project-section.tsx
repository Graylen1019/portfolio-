"use client";

import Image from "next/image";
import { useState } from "react";
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

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "YouTube Clone",
    description:
      "Full-stack video platform with authentication, uploads, and streaming.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "tRPC",
      "Drizzle",
      "Clerk",
      "Mux",
    ],
    image: "/projects/youtube-ss.png",
    liveLink: "https://new-tube-project.vercel.app/",
    githubLink: "https://github.com/Graylen1019/NewTube-project",
  },
  {
    id: 2,
    title: "Google Docs Clone",
    description:
      "Real-time collaborative editor using Liveblocks and Clerk.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Liveblocks"],
    image: "/projects/docs-ss.png",
    liveLink: "https://google-docs-rouge.vercel.app/",
    githubLink: "https://github.com/Graylen1019/Google-docs",
  },
  {
    id: 3,
    title: "OMDb Movie App",
    description:
      "Movie search app with filtering and detailed views using OMDb API.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/projects/OMDb-ss.png",
    liveLink: "https://final-proj-3.vercel.app/",
    githubLink: "https://github.com/Graylen1019/Final-proj-3",
  },
  {
    id: 4,
    title: "Skinstric AI",
    description:
      "AI-powered skin analysis app using OpenAI Vision.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/projects/skinstric-ss.png",
    liveLink: "https://skinstric-intern.vercel.app/",
    githubLink: "https://github.com/Graylen1019/skinstric-intern",
  },
];

interface ProjectsSectionProps {
  sectionIndex?: number;
}

export function ProjectSection({ sectionIndex }: ProjectsSectionProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = sectionIndex; // to avoid unused variable warning
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const activeProject = PROJECTS.find(p => p.id === activeId)!;

  return (
    <section className="relative z-50 w-full px-6 py-24 flex flex-col">
      <div className="mx-auto max-w-6xl pb-32">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#af76c4]">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          {/* LEFT LIST */}
          <div className="flex flex-col gap-4">
            {PROJECTS.map(project => {
              const isActive = project.id === activeId;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  className={`cursor-pointer rounded-xl border p-4 text-left transition-colors
                    ${
                      isActive
                        ? "border-[#af76c4] bg-[#1a1a1a]"
                        : "border-gray-700 hover:border-[#af76c4]/60"
                    }`}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {project.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT DETAILS */}
          <div className="rounded-2xl bg-[#121212] p-6 shadow-lg">
            <div className="relative mb-4 aspect-video w-full">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="rounded-xl object-cover"
                priority
              />
            </div>

            <h3 className="mb-2 text-2xl font-semibold text-[#af76c4]">
              {activeProject.title}
            </h3>

            <p className="mb-4 text-gray-300">
              {activeProject.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {activeProject.techStack.map(tech => (
                <span
                  key={tech}
                  className="rounded-md bg-[#222] px-2 py-1 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {activeProject.liveLink && (
                <a
                  href={activeProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#af76c4] hover:underline"
                >
                  Live Demo
                </a>
              )}
              {activeProject.githubLink && (
                <a
                  href={activeProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#af76c4]"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </section>
  );
}
