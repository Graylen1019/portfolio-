// page.tsx
"use client";
import { AboutSection } from "@/modules/componenets/about-section";
import { FooterSection } from "@/modules/componenets/footer";
import { LandingSection } from "@/modules/componenets/landing-section";
import { LoadingSection } from "@/modules/componenets/loading-section";
import { ProjectSection } from "@/modules/componenets/project-section";
import { StackSection } from "@/modules/componenets/stack-section";
import { useEffect, useState } from "react";

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

  return (
    <main className="h-screen w-screen">
      {loading ? (
        <LoadingSection />
      ) : (
        <div className="text-white">
          <div className="hidden lg:block fixed top-[75%] -translate-y-[75%] left-[-12vh] rotate-90">
            <p className="text-muted-foreground font-bold tracking-widest">
              Graylenbigelow@gmail.com
            </p>
          </div>
          <div className="w-full h-full overflow-hidden">
            <section id="landing" className="">
              <LandingSection />
            </section>
            <section id="about" className="pb-[125px]">
              <AboutSection />
            </section>
            <section id="stack" className="pb-[125px]">
              <StackSection />
            </section>
            <section id="projects" className="">
              <ProjectSection />
            </section>
            <section id="footer" className="pt-16">
              <FooterSection />
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
