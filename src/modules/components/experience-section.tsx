"use client";

import { Briefcase } from "lucide-react";
import gsap from "gsap";
import { useSectionEnter } from "@/hooks/useSectionEnter";

export function ExperienceSection({ sectionIndex = 2 }: { sectionIndex?: number }) {
  const experiences = [
    {
      company: "Frontend Simplified",
      role: "Peer Mentor — Frontend Development (React & Next.js)",
      date: "March 2025 – Present",
      description:
        "Recognized in the top 5% of my cohort for technical excellence and mentorship. Guided 20+ students through code reviews, debugging, and architecture decisions. Led workshops on frontend performance optimization, improving portfolio load times by ~50%. Developed reusable UI components that cut project build time by 40% and standardized code quality. Helped 90% of students achieve WCAG compliance and 85% adopt CI/CD pipelines.",
    },
    {
      company: "Skinstric AI",
      role: "Frontend Engineer",
      date: "June 2025 – July 2025",
      description:
        "Architected a real-time skin analysis platform using OpenAI’s Vision API with Next.js, achieving ~98% detection accuracy across diverse skin conditions. Built a responsive UI with TailwindCSS, GSAP, and custom animations that improved engagement by ~60% and boosted user retention by ~40%. Leveraged Next.js Server Components and Lottie animations to reduce analysis time to under 2 seconds. Designed a modular UI library enabling rapid A/B testing and integrated a 4D Mini model for enhanced texture and tone accuracy.",
    },
  ];

  const ref = useSectionEnter(sectionIndex, (root) => {
    const tl = gsap.timeline({ paused: true });
    tl.from(root.querySelector(".exp-heading"), {
      opacity: 0,
      y: -30,
      duration: 0.7,
      ease: "power2.out",
    }).from(
      root.querySelectorAll(".exp-card"),
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      },
      "-=0.2"
    );
    return tl;
  });

  return (
    <>
    <section id="experience" className="w-full h-full flex items-center justify-center">
      <div ref={ref} className="max-w-4xl w-full px-6 md:px-12">
        <h2 className="exp-heading text-3xl md:text-5xl font-bold mb-12 flex items-center gap-3">
          <Briefcase className="text-[#af76c4]" size={34} />
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="exp-card border-l-2 border-[#af76c4]/50 pl-6 hover:border-[#af76c4] transition-colors duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#af76c4]">{exp.role}</h3>
              <p className="text-zinc-400 text-sm mb-2">
                {exp.company} &middot; {exp.date}
              </p>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>

  );
}
