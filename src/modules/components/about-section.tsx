// about-section.tsx
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div
      id="container"
      className="h-[100svh] flex items-center justify-center p-4 "
    >
      <div
        id="wrapper"
        className="text-white p-8 md:p-12 rounded-lg w-full max-w-6xl "
      >
        <h2
          data-aos="fade-up"
          className="text-4xl sm:text-5xl font-bold text-center text-[#af76c4] mb-20"
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-36 scale-[0.95]">
          <div
            data-aos="fade-right"
            className="max-md:mb-8 md:w-1/2 justify-center"
          >
            <Image
              width={192}
              height={192}
              src={"/headshot.jpg"}
              alt="Graylen Bigelow"
              className="rounded-full shadow-lg w-48 h-48 md:w-72 md:h-72 object-cover border-4 border-[#af76c4]"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p
              data-aos="fade-down"
              className="text-sm md:text-lg leading-relaxed mb-4"
            >
              Hello! I am {""}
              <span className="font-semibold text-[#af76c4]">
                Graylen Bigelow
              </span>
              . I discovered frontend development through a love of clean
              interfaces and seamless functionality, and ever since, I’ve been
              focused on crafting high-quality digital products using
              technologies like React, Next.js, TypeScript, and JavaScript.
            </p>
            <p
              data-aos="fade-left"
              className="text-sm md:text-lg leading-relaxed mb-4"
            >
              Before stepping into tech, I honed leadership and communication
              skills as a {""}
              <span className="font-semibold text-[#af76c4]">
                Senior Shift Manager at McDonalds
              </span>
              , where I led teams, trained new hires, and solved problems under
              pressure. That experience taught me how to collaborate, stay
              adaptable, and always put people first — qualities I now bring to
              every dev project I work on.
            </p>
            <p
              data-aos="fade-up"
              className="text-sm md:text-lg leading-relaxed"
            >
              I am currently looking to grow my skills even further and
              contribute to teams building innovative, scalable software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
