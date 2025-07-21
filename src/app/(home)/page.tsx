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

export default function Home() {
  const [loading, setLoading] = useState(true);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  //TODO: Remove comments across page
  return (
    <main className="h-screen w-screen">
      {loading ? (
        <LoadingSection />
      ) : (
        <>
          {!isModalOpen && (
            <div className="hidden space-x-4 items-center justify-center md:flex fixed bottom-4 right-4">

              <span className="text-2xl text-white">
                Contact Me
              </span>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center size-22 rounded-full cursor-pointer hover:scale-105 hover:text-[#dee2d5dd]"
              >
                <MailIcon className="size-12" />
              </Button>
            </div>
          )}
          <div className="w-full text-white">
            <div className="fixed top-1/2 -translate-y-1/2 left-[-110px] rotate-90">
              <p className="hidden md:block text-muted-foreground font-bold tracking-widest">
                Graylenbigelow@gmail.com
              </p>
            </div>
            <div className="w-full h-full overflow-hidden">
              {isModalOpen && <LandingModal setIsModalOpen={setIsModalOpen} />}
              {!isModalOpen && (
                <>
                  <section id="landing" className="">
                    <Button
                      variant={"ghost"}
                      className="z-10 cursor-pointer absolute top-4 right-4 block md:hidden"
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                    >
                      <AlignJustify size={42} className=" size-10" />
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
