// page.tsx
"use client";
import { AboutSection } from "@/modules/componenets/about-section";
import { FooterSection } from "@/modules/componenets/footer";
import { LandingSection } from "@/modules/componenets/landing-section";
import { LoadingSection } from "@/modules/componenets/loading-section";
import { ProjectSection } from "@/modules/componenets/project-section";
import { StackSection } from "@/modules/componenets/stack-section";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AlignJustify, MailIcon } from "lucide-react";
import { LandingModal } from "@/modules/componenets/landing-modal";
// ProjectModal import is now removed from here, as it's handled by ProjectSection
// import { ProjectModal } from "@/modules/componenets/ProjectModal"; // REMOVED

// The Project interface declaration is REMOVED from page.tsx as it's no longer used here.
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   techStack: string[];
//   image: string;
//   liveLink?: string;
//   githubLink?: string;
//   longDescription?: string;
//   keyFeatures?: string[];
//   challenges?: string;
//   learnings?: string;
// }

export default function Home() {
  const [loading, setLoading] = useState(true);

  // State for the general (contact) modal remains here
  const [isLandingModalOpen, setIsLandingModalOpen] = useState(false);

  // Project modal states are REMOVED from page.tsx
  // const [isProjectModalOpen, setIsProjectModalOpen] = useState(false); // REMOVED
  // const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null); // REMOVED

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    const aosLoadCheck = setInterval(() => {
      if (window.Aos) {
        window.Aos.init({
          disable: false,
          startEvent: "DOMContentLoaded",
          initClassName: "aos-init",
          animatedClassName: "aos-animate",
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
          offset: 120,
          delay: 0,
          duration: 1000,
          easing: "ease",
          once: false,
          mirror: false,
          anchorPlacement: "top-bottom",
        });
        clearInterval(aosLoadCheck);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(aosLoadCheck);
    };
  }, []);

  // Project modal functions are REMOVED from page.tsx
  // const openProjectModal = (project: Project) => { // REMOVED
  //   setSelectedProjectForModal(project);
  //   setIsProjectModalOpen(true);
  // }; // REMOVED

  // const closeProjectModal = () => { // REMOVED
  //   setIsProjectModalOpen(false);
  //   setSelectedProjectForModal(null);
  // }; // REMOVED

  // `anyModalOpen` now only depends on `isLandingModalOpen`
  const anyModalOpen = isLandingModalOpen; // Adjusted logic

  return (
    <main className="h-screen w-screen">
      {loading ? (
        <LoadingSection />
      ) : (
        <>
          {/* Contact Me button, hidden if the LandingModal is open */}
          {!anyModalOpen && (
            <div className="hidden space-x-4 items-center justify-center md:flex fixed bottom-4 right-4 z-20">
              <span className="text-lg text-white ">
                Contact Me
              </span>
              <Button
                onClick={() => setIsLandingModalOpen(true)}
                className="flex items-center justify-center size-20 rounded-full cursor-pointer hover:scale-105 hover:text-[#dee2d5dd]"
              >
                <MailIcon className="size-8" />
              </Button>
            </div>
          )}

          <div className="w-full text-white">
            {/* Fixed email display */}
            <div className="fixed top-1/2 -translate-y-1/2 left-[-110px] rotate-90 z-20">
              <p className="hidden md:block text-muted-foreground font-bold tracking-widest">
                Graylenbigelow@gmail.com
              </p>
            </div>

            {/* Main content container. Overflow hidden to prevent body scroll when modal is open */}
            <div className={`w-full h-full ${anyModalOpen ? 'overflow-hidden' : ''}`}>

              {/* Landing Modal (Contact) - Renders when isLandingModalOpen is true */}
              {isLandingModalOpen && <LandingModal setIsModalOpen={setIsLandingModalOpen} />}

              {/* Main sections are rendered if the LandingModal is NOT open.
                  ProjectModal is now handled internally by ProjectSection. */}
              {!anyModalOpen && (
                <>
                  <section id="landing" className="">
                    <Button
                      variant={"ghost"}
                      className="rounded-full flex justify-center items-center z-10 cursor-pointer absolute top-4 right-4 md:hidden"
                      onClick={() => {
                        setIsLandingModalOpen(true);
                      }}
                    >
                      <AlignJustify size={22} className=" size-10" />
                    </Button>
                    <LandingSection />
                  </section>
                  <section id="about" className="md:pb-[64px]">
                    <AboutSection />
                  </section>
                  <section id="stack" className="py-[64px] ">
                    <StackSection />
                  </section>
                  <section id="projects" className="pt-[64px]">
                    {/* ProjectSection no longer receives onOpenProjectModal prop */}
                    <ProjectSection />
                  </section>
                  <footer className="w-full h-[20vh] py-8 md:py-12 text-white text-center relative flex flex-col justify-center items-center">
                    <FooterSection />
                  </footer>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
