import { useEffect, useState } from "react";

export const LoadingSection = () => {
  
  const [loading, setLoading] = useState<string | boolean>(true);
  const [fadeOut, setFadeOut] = useState(false);

  // This translate state will control the upward movement of the background divs
  let translate = "";
  if (fadeOut === true) {
    translate = "-translate-y-full";
  }

  const lettersLoaded_ms = 1200; // Time when letters are considered "loaded" and fade-out begins

  // Sets the fadeOut state to true after 'lettersLoaded_ms'
  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, lettersLoaded_ms);
    return () => clearTimeout(fadeOutTimer);
  }, []);

  // Sets the main 'loading' state to false after 2400ms, removing the loading screen
  useEffect(() => {
    const loadingOffTimer = setTimeout(() => {
      setLoading(false);
    }, 3500); // This should be >= lettersLoaded_ms + transition duration of the translate
    return () => clearTimeout(loadingOffTimer);
  }, []);


  // Only render the loading section if 'loading' is true
  if (!loading) {
    return null; // Don't render anything if loading is false
  }

  return (
    <div
      // The id uses the 'loading' state for demonstration, but typically IDs are static
      id={`${loading}`}
      className="fixed inset-0 w-screen h-screen bg-transparent z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background divs that move up */}
      <div className="absolute inset-0 flex flex-row w-full h-full">
        {/* Each div has a different duration for staggered effect */}
        {[300, 500, 700, 900, 1100, 1300, 1500].map((duration, index) => (
          <div
            key={index} // Unique key for list rendering
            className={`bg-gradient-to-b from-black to-[#2a2a2a] h-full w-[14.2857142857vw] duration-1000 transition ease-in-out ${
              fadeOut ? "border-[#af76c4] border-l-4 " : ""
            } ${translate}`}
            style={{ transitionDuration: `${duration}ms` }} // Apply dynamic duration
          />
        ))}
      </div>

      {/* Centered text with fade-in and fade-out */}
      <div className="w-screen flex items-center justify-center z-40">
        <div
          data-aos="fade-in"
          className={`flex flex-row text-[clamp(4rem,20vw,24rem)] font-bold text-[#af76c4] tracking-[-0.07em] transition-opacity duration-500 ease-in-out ${
            fadeOut ? "opacity-0" : ""
          } `}
        >
          {/* Individual letters with staggered fade-up animation */}
          <div data-aos="fade-up">G</div>
          <div data-aos-delay="100" data-aos="fade-up">R</div>
          <div data-aos-delay="200" data-aos="fade-up">A</div>
          <div data-aos-delay="300" data-aos="fade-up">Y</div>
          <div data-aos-delay="400" data-aos="fade-up">L</div>
          <div data-aos-delay="500" data-aos="fade-up">E</div>
          <div data-aos-delay="600" data-aos="fade-up">N</div>
        </div>
      </div>
    </div>
  );
};