// about-section.tsx
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div
      id="container"
      className="h-svh flex justify-center pt-48"
    >
      <div
        id="wrapper"
        className="text-white px-8 md:px-12 rounded-lg w-full max-w-7xl "
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
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <p
              data-aos="fade-down"
              className="text-sm md:text-lg leading-relaxed"
            >
              Hello! I’m{' '}
              <span className="font-semibold text-[#af76c4]">Graylen Bigelow</span>,
              a passionate Frontend Developer with a knack for turning ideas into interactive, user-friendly web applications.
            </p>

            <p
              data-aos="fade-up"
              className="text-sm md:text-lg leading-relaxed"
            >
              My expertise lies in React, Next.js, and TypeScript, creating responsive and accessible experiences that look great across devices.
              I’ve contributed to real-world projects like <span className="font-semibold text-[#af76c4]">Skinstric AI</span>, a real-time skin analysis platform,
              and I mentor students at <span className="font-semibold text-[#af76c4]">Frontend Simplified</span>, helping them build high-quality frontend applications
              and gain confidence in modern web development.
            </p>

            <p
              data-aos="fade-up"
              className="text-sm md:text-lg leading-relaxed"
            >
              I’m always exploring new tools and techniques to refine my craft — from performance optimizations and scalable component libraries to accessible design and smooth animations.
              Every project I work on is an opportunity to create something meaningful, practical, and enjoyable for users.
            </p>

            
          </div>

        </div>
      </div>
    </div>
  );
};
