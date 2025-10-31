import Link from "next/link";
import { GitStats } from "./git-stats";
import { FaChevronDown, FaEye, FaFileArrowDown, FaGithub, FaLinkedin } from "react-icons/fa6";

export const LandingSection = () => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-screen h-svh min-h-[530px] flex flex-col md:flex-row items-center justify-center md:justify-between lg:max-w-[70vw] md:mx-auto px-4 py-16 md:py-4 text-white relative">
      <div className="flex flex-col justify-center max-md:items-center max-md:w-full py-16 md:py-0">
        <div className="max-w-[550px]">
          <h1
            className="leading-[.95] text-5xl max-md:text-center sm:text-5xl font-anton"
            data-aos="fade-right"
          >
            <span className="text-[#af76c4] font-bold">GRAYLEN</span>
            <br />
            <span className="text-white ml-6 font-bold">BIGELOW</span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="mt-6 text-normal text-white font-normal max-md:text-center"
          >
            Hi! I’m a
            <span className="ml-1 text-normal text-[#af76c4]">Frontend Developer</span>
            , focused on
            <span className="ml-1 text-normal text-[#af76c4]">Next.js</span>.
            <br />
            I love turning ideas into websites and apps that are not only
            <span className="ml-1 text-normal text-[#af76c4]">easy to use</span>
            , but also
            <span className="ml-1 text-normal text-[#af76c4]">fun to interact with</span>.
            <br />
            When I code, I focus on building practical, reliable solutions while paying attention to the little details that make a big difference.
          </p>
          <div className="flex flex-col md:flex-row items-center max-md:justify-center gap-4 md:gap-8 mt-4">
            <div className="justify-center flex items-center gap-4 text-white">
              <Link
                href="https://www.linkedin.com/in/graylen-bigelow-834435371"
                target="_blank"
                aria-label="LinkedIn"
                className="justify-center items-center gap-2 flex relative group hover:text-[#0A66C2] hover:scale-110 transition duration-200 ease-in-out"
              >
                <FaLinkedin size={20} /> <span className="text-sm md:text-lg">LinkedIn</span>
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
                <FaGithub size={20} /> <span className="text-sm md:text-lg">Github</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </Link>

              <Link
                href="/resume.pdf"
                target="-blank"
                aria-label="View Resume"
                className="items-center justify-center gap-2 flex relative group hover:text-purple-400 hover:scale-110 transition duration-200 ease-in-out"
              >
                <FaEye size={20} /> <span className="text-xs md:text-lg">View Resume</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View Resume
                </span>
              </Link>

              <Link
                href="/resume.pdf"
                download
                aria-label="Download Resume"
                className="items-center justify-center gap-2 flex relative group hover:text-purple-400 hover:scale-110 transition duration-200 ease-in-out"
              >
                <FaFileArrowDown size={20} /> <span className="text-sm md:text-lg">Download Resume</span>
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
        className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer focus:outline-none" // Add button styles
      >
        <FaChevronDown size={70} color="#af76c4" />
      </button>
    </div>
  );
};
