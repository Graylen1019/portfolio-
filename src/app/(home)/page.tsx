"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const lettersLoaded_ms = 1200;

  setTimeout(() => {
    setFadeOut(true);
  }, lettersLoaded_ms);

  let translate = "";
  if (fadeOut === true) {
    translate = "-translate-y-full";
  }

  setTimeout(() => {
    setLoading(false);
  }, 2400);

  return (
    <>
      <section id="landing" className="relative overflow-hidden">
        {loading ? (
          <div className="w-screen mx-auto px-4 h-[100svh] min-h-[530px] max-md:pb-10 flex items-center justify-between max:md:flex-col ">
            <div className="absolute inset-0 flex flex-row w-full  h-full">
              <div
                className={`bg-[#1A1B1C] h-full w-[14.2857142857vw] duration-300 transition ease-in-out ${
                  fadeOut && "border-[#af76c4] border-l-4"
                } ${translate}`}
              />
              <div
                className={`bg-[#1A1B1C] h-full w-[14.2857142857vw] duration-500 transition ease-in-out ${
                  fadeOut && "border-[#af76c4] border-l-4"
                } ${translate}`}
              />
              <div
                className={`bg-[#1A1B1C] h-full w-[14.2857142857vw] duration-700 transition ease-in-out ${
                  fadeOut && "border-[#af76c4] border-l-4"
                } ${translate}`}
              />
              <div
                className={`bg-[#1A1B1C] h-full w-[14.2857142857vw] duration-900 transition ease-in-out ${
                  fadeOut && "border-[#af76c4] border-l-4"
                } ${translate}`}
              />
              <div
                className={`bg-[#1A1B1C] h-full w-[14.2857142857vw] duration-[1100ms] transition ease-in-out ${
                  fadeOut && "border-[#af76c4] border-l-4"
                } ${translate}`}
              />
              <div
                className={`bg-[#1A1B1C] h-full w-[14.2857142857vw] duration-[1300ms] transition ease-in-out ${
                  fadeOut && "border-[#af76c4] border-l-4"
                } ${translate}`}
              />
              <div
                className={`bg-[#1A1B1C] h-full w-[14.2857142857vw] duration-[1500ms] transition ease-in-out ${
                  fadeOut && "border-[#af76c4] border-l-4"
                } ${translate}`}
              />
            </div>

            <div className="w-screen flex items-center justify-center z-40">
              <div
                data-aos="fade-in"
                className={`flex flex-row text-[24rem] font-bold text-[#af76c4] tracking-[-0.07em] transition-opacity duration-500 ease-in-out ${
                  fadeOut && "opacity-0"
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
        ) : (
          <div className="w-screen lg:max-w-[65vw] md: mx-auto px-4 h-[100svh] min-h-[530px] max-md:pb-10 flex items-center justify-between max-md:flex-col ">
            <div className="md:absolute bottom-[1/2] left-1 md:text-start">
              <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] ">
                <div className="">
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
                      frontend developer
                    </span>
                    , passionate about functional, responsive designs, and all
                    things software related.
                  </p>
                  <Link
                    data-aos="fade-right"
                    className="group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden bg-primary text-[#af76c4] hover:bg-primary-hover mt-9 banner-button slide-up-and-fade"
                    target="_blank"
                    href={"/"}
                  >
                    <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                    <span className="z-[1]">Hire Me</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:absolute bottom-[10%] right-1 flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
              <div data-aos="fade-up">
                <h5 className="text-3xl sm:text-4xl font-anton text-[#af76c4] mb-1.5">
                  5+
                </h5>
                <p className="text-white font-light">Completed Projects</p>
              </div>
            </div>
          </div>
        )}
      </section>
      <section id="about" className="relative overflow-hidden">
        <div className="w-full mx-auto px-4">
          <div>
            H1
          </div>
        </div>
      </section>
    </>
  );
}
