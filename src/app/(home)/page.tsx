"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AlignJustify, MailIcon } from "lucide-react";
import {
  LandingModal,
  StackSection,
  AboutSection,
  LandingSection,
  LoadingSection,
  ProjectSection,
  ExperienceSection,
} from "@/modules/components/index";

// ✅ Consolidate imports for readability
// (if your build allows index re-exports in /components)

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isLandingModalOpen, setIsLandingModalOpen] = useState(false);

  // ✅ AOS + Loading logic cleanup
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);

    const checkAos = () => {
      if (window?.Aos) {
        window.Aos.init({
          startEvent: "DOMContentLoaded",
          duration: 1000,
          easing: "ease-in-out",
          once: false,
          mirror: false,
        });
        return true;
      }
      return false;
    };

    const interval = setInterval(() => {
      if (checkAos()) clearInterval(interval);
    }, 150);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const anyModalOpen = isLandingModalOpen;

  return (
    <main className="h-screen scroll-smooth text-white">

      {loading ? (
        <LoadingSection />
      ) : (
        <>
          {/* 📬 Floating Contact Button */}
          {!anyModalOpen && (
            <div className="hidden md:flex items-center justify-center gap-4 fixed bottom-6 right-6 z-30">
              <span className="text-lg text-zinc-300 tracking-wide">Contact Me</span>
              <Button
                onClick={() => setIsLandingModalOpen(true)}
                aria-label="Open Contact Modal"
                className="flex items-center justify-center size-20 rounded-full cursor-pointer 
                           transition-transform duration-300 hover:scale-101 hover:shadow-[0_0_20px_#af76c4aa] 
                           hover:text-[#af76c4] bg-zinc-900/60 backdrop-blur-md shadow-lg border border-[#af76c4]/30"
              >
                <MailIcon className="size-8 animate-[pulse_3s_ease-in-out_infinite]" />
              </Button>
            </div>
          )}

          {/* 📧 Vertical Email Tag */}
          <aside className="fixed top-1/2 left-[-175px] -translate-y-1/2 rotate-90 z-20 flex items-center gap-4 group">
            <div className="h-px w-20 bg-[#af76c4]/40 transition-all duration-500 group-hover:w-24 group-hover:bg-[#af76c4]" />
            <a
              href="mailto:Graylenbigelow@gmail.com"
              className="text-sm tracking-widest text-zinc-400 font-medium 
                         transition-all duration-300 group-hover:text-[#af76c4] group-hover:scale-105"
            >
              Graylenbigelow@gmail.com
            </a>
            <div className="h-px w-20 bg-[#af76c4]/40 transition-all duration-500 group-hover:w-24 group-hover:bg-[#af76c4]" />
          </aside>

          {/* 📄 Main Content */}
          <div className={anyModalOpen ? "overflow-hidden" : ""}>
            {isLandingModalOpen && (
              <LandingModal setIsModalOpen={setIsLandingModalOpen} />
            )}

            {!anyModalOpen && (
              <>
                <section id="landing" className="relative">
                  {/* Mobile menu button */}
                  <Button
                    variant="ghost"
                    aria-label="Open Menu"
                    className="rounded-full flex justify-center items-center z-20 cursor-pointer absolute top-4 right-4 md:hidden"
                    onClick={() => setIsLandingModalOpen(true)}
                  >
                    <AlignJustify size={26} />
                  </Button>
                  <LandingSection />
                </section>

                <section id="about">
                  <AboutSection />
                </section>

                <section id="experience">
                  <ExperienceSection />
                </section>

                <section id="stack">
                  <StackSection />
                </section>

                <section id="projects">
                  <ProjectSection />
                </section>
              </>
            )}
          </div>
        </>
      )}
    </main>
  );
}
