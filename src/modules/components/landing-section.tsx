import { ChevronDown, FileDown, FileUp, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { GitStats } from "./git-stats";

export const LandingSection = () => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-screen h-[100svh] min-h-[530px] flex flex-col md:flex-row items-center justify-center md:justify-between lg:max-w-[70vw] md:mx-auto px-4 py-16 md:py-4 text-white relative">
      <div className="flex flex-col justify-center max-md:items-center max-md:w-full py-16 md:py-0">
        <div className="max-w-[544px]">
          <h1
            className="leading-[.95] text-5xl max-md:text-center sm:text-7xl font-anton"
            data-aos="fade-up"
          >
            <span className="text-[#af76c4] font-bold">GRAYLEN</span>
            <br />
            <span className="text-white ml-6 font-bold">BIGELOW</span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="mt-6 text-normal md:text-lg text-white font-normal max-md:text-center"
          >
            Hello! I am a {""}
            <span className="ml-1 uppercase text-normal text-[#af76c4]">
              Frontend React Developer
            </span>
            , specializing in {""}
            <span className="ml-1 uppercase text-normal text-[#af76c4]">
              Next.js {""}
            </span>
            Where i build immersive digital experiences, passionately crafting {""}
            <span className="ml-1 uppercase text-normal text-[#af76c4]">
              functional, responsive designs and innovative software solutions!
            </span>
          </p>
          <div className="flex flex-col md:flex-row items-center max-md:justify-center gap-4 md:gap-8 mt-6">
            <div className="justify-center flex items-center gap-4 text-white">
              <Link
                href="https://www.linkedin.com/in/graylen-bigelow-834435371"
                target="_blank"
                aria-label="LinkedIn"
                className="justify-center items-center gap-2 flex relative group hover:text-[#0A66C2] hover:scale-110 transition duration-200 ease-in-out"
              >
                <Linkedin size={22} className="size-4 md:size-6" /> <span className="text-sm md:text-lg">LinkedIn</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </Link>

              <Link
                href="https://github.com/Graylen1019"
                target="_blank"
                aria-label="GitHub"
                className="items-center justify-center gap-2 flex relative group hover:text-gray-800 hover:scale-110 transition duration-200 ease-in-out"
              >
                <Github size={22} className="size-4 md:size-6" /> <span className="text-sm md:text-lg">Github</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </Link>

              <Link
                href="/resume.pdf"
                aria-label="View Resume"
                className="items-center justify-center gap-2 flex relative group hover:text-purple-400 hover:scale-110 transition duration-200 ease-in-out"
              >
                <FileUp size={22} className="size-4 md:size-6" /> <span className="text-xs md:text-lg">View</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View Resume
                </span>
              </Link>

              <Link
                href="/resume.docx"
                aria-label="Download Resume"
                className="items-center justify-center gap-2 flex relative group hover:text-purple-400 hover:scale-110 transition duration-200 ease-in-out"
              >
                <FileDown size={22} className="size-4 md:size-6" /> <span className="text-sm md:text-lg">Download</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Download Resume
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <GitStats />

      <button
        data-aos="fade-down"
        data-aos-delay="300"
        onClick={scrollToAboutMe}
        aria-label="Scroll to About Me section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer focus:outline-none" // Add button styles
      >
        <ChevronDown className=" h-24 w-36 md:h-36 md:w-48 text-[#af76c4]" />
      </button>
    </div>
  );
};
