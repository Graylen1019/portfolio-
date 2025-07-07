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
        className="text-white p-8 md:p-12 rounded-lg w-full max-w-6xl"
      >
        <h2
          data-aos="fade-up"
          className="text-4xl sm:text-5xl font-bold text-center text-[#af76c4] mb-20"
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-36">
          <div
            data-aos="fade-right"
            className="hidden md:w-1/2 md:flex justify-center"
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
              , a passionate and driven frontend developer who embarked on my
              coding journey, when I discovered a profound interest in crafting
              intuitive user interfaces (UI), building robust functionality, and
              ensuring seamless responsive designs across all devices.
            </p>
            <p
              data-aos="fade-left"
              className="text-sm md:text-lg leading-relaxed mb-4"
            >
              Currently, as a {""}
              <span className="font-semibold text-[#af76c4]">
                Senior Shift Manager at McDonalds
              </span>
              , I have honed valuable transferable skills that directly
              contribute to my capabilities as a developer. My extensive
              experience in teamwork, leadership, and training – coupled with
              certifications in training and leadership – has equipped me with a
              strong foundation in collaborative problem-solving, project
              coordination, and effectively guiding teams.
            </p>
            <p
              data-aos="fade-up"
              className="text-sm md:text-lg leading-relaxed"
            >
              I am eager to apply my growing technical expertise and leadership
              acumen to build engaging web experiences and contribute to
              innovative software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
