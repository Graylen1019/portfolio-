import { useEffect, useState } from "react";

export const LoadingSection = () => {
  const [loading, setLoading] = useState<string | boolean>(true);
  const [fadeOut, setFadeOut] = useState(false);

  let translate = "";
  if (fadeOut === true) {
    translate = "-translate-y-full";
  }

  const lettersLoaded_ms = 1200;

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, lettersLoaded_ms);
    return () => clearTimeout(fadeOutTimer);
  }, []);

  useEffect(() => {
    const loadingOffTimer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(loadingOffTimer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div
      id={`${loading}`}
      className="fixed inset-0 w-screen h-screen bg-transparent z-50 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-row w-full h-full">
        {[300, 500, 700, 900, 1100, 1300, 1500].map((duration, index) => (
          <div
            key={index}
            className={`bg-linear-to-t from-black to-[#2a2a2a] h-full w-[14.2857142857vw] duration-1000 transition ease-in-out ${
              fadeOut ? "border-[#af76c4] border-l-4 " : ""
            } ${translate}`}
            style={{ transitionDuration: `${duration}ms` }}
          />
        ))}
      </div>

      <div className="w-screen flex items-center justify-center z-40">
        <div
          data-aos="fade-in"
          className={`flex flex-row text-[clamp(4rem,20vw,24rem)] font-bold text-[#af76c4] tracking-[-0.07em] transition-opacity duration-500 ease-in-out ${
            fadeOut ? "opacity-0" : ""
          } `}
        >
          <div data-aos="fade-up">G</div>
          <div data-aos-delay="100" data-aos="fade-up">
            R
          </div>
          <div data-aos-delay="200" data-aos="fade-up">
            A
          </div>
          <div data-aos-delay="300" data-aos="fade-up">
            Y
          </div>
          <div data-aos-delay="400" data-aos="fade-up">
            L
          </div>
          <div data-aos-delay="500" data-aos="fade-up">
            E
          </div>
          <div data-aos-delay="600" data-aos="fade-up">
            N
          </div>
        </div>
      </div>
    </div>
  );
};
