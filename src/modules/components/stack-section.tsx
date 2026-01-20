"use client";

import Image from "next/image";
import { FaAngular, FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaNpm, FaPython, FaReact, FaVuejs } from "react-icons/fa6";
import { RiNextjsFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiDjango, SiMongodb, SiOpenai, SiPostgresql, SiPrisma, SiTailwindcss, SiTrpc, SiVite } from "react-icons/si";
import { GoStarFill } from "react-icons/go";
import gsap from "gsap";
import { useSectionEnter } from "@/hooks/useSectionEnter";

export const StackSection = ({ sectionIndex = 3 }: { sectionIndex?: number }) => {
  const ref = useSectionEnter(sectionIndex, (root) => {
    const tl = gsap.timeline({ paused: true });
    tl.from(root.querySelector(".stack-heading"), {
      opacity: 0,
      y: -30,
      duration: 0.7,
      ease: "power2.out",
    }).from(
      root.querySelectorAll(".stack-icon"),
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
      },
      "-=0.2"
    );
    return tl;
  });

  return (
    <section id="stack" className="w-full h-full flex items-center justify-center">
      <div ref={ref} className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 ">
        <div className="items-center justify-center gap-4 mb-8 hidden md:flex">
          <h1 className="stack-heading text-4xl sm:text-5xl font-bold text-center text-[#af76c4]">My Stack</h1>
        </div>

        <div className="space-y-4 md:space-y-12 lg:space scale-[.65] w-full md:scale-[0.95]">
          {/* Languages */}
          <div className="gap-10 md:gap-0 grid sm:grid-cols-12">
            <div className="sm:col-span-5">
              <p className="text-3xl sm:text-4xl font-anton leading-none text-muted-foreground uppercase">Languages:</p>
            </div>
            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <RiJavascriptFill size={40} color="yellow" />
                <span className="text-xl md:text-2xl">JavaScript</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <BiLogoTypescript color="#00a6ff" size={40} />
                <div className="text-xl md:text-2xl flex items-center space-x-2">
                  <span>TypeScript</span>
                  <GoStarFill size={35} color="yellow" />
                </div>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <FaPython size={40} />
                <span className="text-xl md:text-2xl">Python</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <FaCss3Alt size={40} color="#00a6ff" />
                <span className="text-xl md:text-2xl">CSS</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <FaHtml5 size={40} color="orange" />
                <span className="text-xl md:text-2xl">HTML5</span>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="gap-10 md:gap-0 grid sm:grid-cols-12">
            <div className="sm:col-span-5">
              <p className="text-3xl sm:text-4xl font-anton leading-none text-muted-foreground uppercase">Frameworks:</p>
            </div>
            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <FaReact size={40} />
                <span className="text-xl md:text-2xl">React</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <RiNextjsFill size={40} />
                <div className="text-xl md:text-2xl flex items-center space-x-2">
                  <span>NextJS</span>
                  <GoStarFill size={35} color="yellow" />
                </div>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <SiVite size={40} />
                <span className="text-xl md:text-2xl">ViteJS</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <FaVuejs size={40} />
                <span className="text-xl md:text-2xl">VueJS</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <FaAngular size={40} />
                <span className="text-xl md:text-2xl">Angular</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="gap-10 md:gap-0 grid sm:grid-cols-12">
            <div className="sm:col-span-5">
              <p className="text-3xl sm:text-4xl font-anton leading-none text-muted-foreground uppercase">backend:</p>
            </div>
            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <FaNodeJs size={40} />
                <div className="text-xl md:text-2xl flex items-center space-x-2">
                  <span>NodeJS</span>
                  <GoStarFill size={35} color="yellow" />
                </div>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <SiDjango size={40} />
                <span className="text-xl md:text-2xl">Django</span>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="gap-10 md:gap-0 grid sm:grid-cols-12">
            <div className="sm:col-span-5">
              <p className="text-3xl sm:text-4xl font-anton leading-none text-muted-foreground uppercase">database:</p>
            </div>
            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <SiPrisma size={40} />
                <div className="text-xl md:text-2xl flex items-center space-x-2">
                  <span>Prisma ORM</span>
                  <GoStarFill size={35} color="yellow" />
                </div>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <SiPostgresql size={40} />
                <span className="text-xl md:text-2xl">PostgreSQL</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <SiMongodb size={40} />
                <span className="text-xl md:text-2xl">MongoDB</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="gap-10 md:gap-0 grid sm:grid-cols-12">
            <div className="sm:col-span-5">
              <p className="text-3xl sm:text-4xl font-anton leading-none text-muted-foreground uppercase">tools:</p>
            </div>
            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <FaNpm size={60} />
                <span className="text-xl md:text-2xl">NPM</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <Image width={40} height={40} src={"/icons/bun.svg"} alt="bun" />
                <span className="text-xl md:text-2xl">Bun</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <FaGitAlt size={40} color="red" />
                <span className="text-xl md:text-2xl">Git</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <SiTailwindcss size={40} />
                <span className="text-xl md:text-2xl">TailwindCSS</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <SiOpenai size={40} />
                <span className="text-xl md:text-2xl">OpenAI API</span>
              </div>

              <div className="stack-icon flex gap-3.5 items-center leading-none">
                <SiTrpc size={40} />
                <span className="text-xl md:text-2xl">TRPC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
