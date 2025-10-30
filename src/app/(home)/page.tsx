"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AlignJustify, MailIcon } from "lucide-react";
import { FooterSection } from "@/modules/components/footer";
import { LandingModal } from "@/modules/components/landing-modal";
import { StackSection } from "@/modules/components/stack-section";
import { AboutSection } from "@/modules/components/about-section";
import { LandingSection } from "@/modules/components/landing-section";
import { LoadingSection } from "@/modules/components/loading-section";
import { ProjectSection } from "@/modules/components/project-section";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isLandingModalOpen, setIsLandingModalOpen] = useState(false);

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

  const anyModalOpen = isLandingModalOpen; 

  return (
    <main className="h-screen w-screen">
      {loading ? (
        <LoadingSection />
      ) : (
        <>
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
            <div className="fixed top-1/2 -translate-y-1/2 left-[-110px] rotate-90 z-20">
              <p className="hidden md:block text-muted-foreground font-bold tracking-widest">
                Graylenbigelow@gmail.com
              </p>
            </div>

            <div className={`w-full h-full ${anyModalOpen ? 'overflow-hidden' : ''}`}>
              {isLandingModalOpen && <LandingModal setIsModalOpen={setIsLandingModalOpen} />}
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
                  <section id="about">
                    <AboutSection />
                  </section>
                  <section id="stack">
                    <StackSection />
                  </section>
                  <section id="projects">
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
