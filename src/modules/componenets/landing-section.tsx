// landing-section.tsx (Adjusted to use lucide-react and scroll to an ID)
import { ChevronDown } from "lucide-react"; // Import ChevronDown from lucide-react

export const LandingSection = () => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen h-[100svh] min-h-[530px] flex flex-col md:flex-row items-center justify-center md:justify-between lg:max-w-[65vw] md:mx-auto px-4 py-16 md:py-4 text-white relative">
      <div className="md:w-1/2 flex flex-col justify-center max-md:items-center max-md:w-full py-16 md:py-0">
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
            Hello! Im a
            <span className="ml-1 uppercase text-normal text-[#af76c4]">
              Frontend React Developer
            </span>
            , specializing in
            <span className="ml-1 uppercase text-normal text-[#af76c4]">
              Next.js
            </span>
            Where i build immersive digital experiences, passionately crafting
            <span className="ml-1 uppercase text-normal text-[#af76c4]">
              functional, responsive designs and innovative software solutions!
            </span>
          </p>
          <div className="max-md:flex max-md:items-center max-md:justify-center">
            <a
              data-aos="fade-right"
              className="group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden bg-primary text-[#af76c4] hover:bg-primary-hover mt-9 banner-button slide-up-and-fade"
              target="_blank"
              href={"https://www.linkedin.com/in/graylen-bigelow-834435371"}
              rel="noopener noreferrer"
            >
              <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
              <span className="z-[1]">Learn More</span>
            </a>
          </div>
        </div>
      </div>

      <button
        data-aos="fade-down"
        data-aos-delay="300"
        onClick={scrollToAboutMe}
        aria-label="Scroll to About Me section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#af76c4] rounded-full p-2" // Add button styles
      >
        <ChevronDown className=" h-24 w-36 md:h-36 md:w-48 text-[#af76c4]" />
      </button>
    </div>
  );
};
