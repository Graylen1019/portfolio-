// landing-section.tsx (Further adjusted)
export const LandingSection = () => {
  return (
    <div className="w-screen h-[100svh] min-h-[530px] flex flex-col md:flex-row items-center justify-between lg:max-w-[65vw] md:mx-auto px-4 text-white">
      {/* Left content block */}
      <div className="md:w-1/2 flex flex-col justify-center max-md:w-full py-16 md:py-0"> {/* Added py-16 or a custom py- to push content */}
        <div className="max-w-[544px]">
          <h1
            className="leading-[.95] text-6xl sm:text-7xl font-anton"
            data-aos="fade-up"
          >
            <span className="text-[#af76c4] font-bold">GRAYLEN</span>
            <br />
            <span className="text-white ml-11 font-bold">BIGELOW</span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="mt-6 text-lg text-white font-normal"
          >
            Hello! Im a
            <span className="ml-1 uppercase text-normal text-[#af76c4]">
              {" "}frontend developer
            </span>
            , passionate about functional, responsive designs, and all things
            software related.
          </p>
          <a
            data-aos="fade-right"
            className="group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden bg-primary text-[#af76c4] hover:bg-primary-hover mt-9 banner-button slide-up-and-fade"
            target="_blank"
            href={"#"}
            rel="noopener noreferrer"
          >
            <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
            <span className="z-[1]">Hire Me</span>
          </a>
        </div>
      </div>
      {/* Right content block */}
      <div className="md:w-1/2 flex flex-col justify-end items-end text-center md:text-right py-16 md:py-0 max-md:w-full"> {/* Added py-16 or a custom py- to push content */}
        <div data-aos="fade-up">
          <h5 className="text-3xl sm:text-4xl font-anton text-[#af76c4] mb-1.5">
            5+
          </h5>
          <p className="text-white font-light">Completed Projects</p>
        </div>
      </div>
    </div>
  );
};