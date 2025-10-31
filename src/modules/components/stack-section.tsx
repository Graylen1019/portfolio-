import Image from "next/image";
import { FaAngular, FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaNpm, FaPython, FaReact, FaVuejs } from "react-icons/fa6";
import { RiNextjsFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiDjango, SiMongodb, SiOpenai, SiPostgresql, SiPrisma, SiTailwindcss, SiTrpc, SiVite } from "react-icons/si";
import { GoStarFill } from "react-icons/go";

export const StackSection = () => {
  return (
    <section
      id="stack"
      className="snap-start bg-linear-to-b from-black to-[#232323]"
      data-aos="fade-up"
    >

      <div
        id="container"
        className="flex justify-center py-24"
      >
        <div
          id="wrapper"
          className="flex items-center justify-center flex-col w-screen max-w-7xl mx-auto px-4 space-y-10 "
        >
          <div className="flex items-center gap-4">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-bold text-center text-[#af76c4] "
            >
              My Stack
            </h1>
          </div>
          <div className="space-y-4 md:space-y-12 lg:space scale-[.85]">
            <div className="gap-10 md:gap-0 grid sm:grid-cols-12">
              <div data-aos="fade-right" className=" sm:col-span-5">
                <p className="text-3xl sm:text-4xl font-anton leading-none text-muted-foreground uppercase">
                  Languages:
                </p>
              </div>
              <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                <div
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div className="">
                    <RiJavascriptFill size={40} color="yellow" />
                  </div>
                  <span className="text-xl md:text-2xl">JavaScript</span>
                </div>
                <div
                  data-aos-delay="150"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <BiLogoTypescript color="#00a6ff" size={40} />
                  </div>
                  <div className="text-xl md:text-2xl flex items-center space-x-2">
                    <span>
                      TypeScript
                    </span>
                    <GoStarFill size={35} color="yellow" />
                  </div>
                </div>
                <div
                  data-aos-delay="300"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div className="">
                    <FaPython size={40} />
                  </div>
                  <span className=" text-xl md:text-2xl">Python</span>
                </div>
                <div
                  data-aos-delay="350"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <FaCss3Alt size={40} color="#00a6ff" />
                  </div>
                  <span className="text-xl md:text-2xl">Cascading Style Sheets (CSS)</span>
                </div>
                <div
                  data-aos-delay="400"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <FaHtml5 size={40} color="orange" />
                  </div>
                  <span className="text-xl md:text-2xl">HyperText Markup Language (HTML5)</span>
                </div>
              </div>
            </div>
            <div className="gap-10 md:gap-0 grid sm:grid-cols-12">
              <div data-aos="fade-right" className=" sm:col-span-5">
                <p className="text-3xl sm:text-4xl font-anton leading-none text-muted-foreground uppercase">
                  Frameworks:
                </p>
              </div>
              <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                <div
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div className="">
                    <FaReact size={40} />
                  </div>
                  <span className="text-xl md:text-2xl">React</span>
                </div>
                <div
                  data-aos-delay="150"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <RiNextjsFill size={40} />
                  </div>
                  <div className="text-xl md:text-2xl flex items-center space-x-2">
                    <span>
                      NextJS
                    </span>
                    <GoStarFill size={35} color="yellow" />
                  </div>
                </div>
                <div
                  data-aos-delay="300"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div className="">
                    <SiVite size={40} />
                  </div>
                  <span className=" text-xl md:text-2xl">ViteJS</span>
                </div>
                <div
                  data-aos-delay="350"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <FaVuejs size={40} />
                  </div>
                  <span className="text-xl md:text-2xl">VueJS</span>
                </div>
                <div
                  data-aos-delay="400"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <FaAngular size={40} />
                  </div>
                  <span className="text-xl md:text-2xl">Angular</span>
                </div>
              </div>
            </div>
            <div className="gap-10 md:gap-0 grid sm:grid-cols-12">
              <div data-aos="fade-right" className=" sm:col-span-5">
                <p className="text-3xl sm:text-4xl font-anton leading-none text-muted-foreground uppercase">
                  backend:
                </p>
              </div>
              <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                <div
                  data-aos-delay="200"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <FaNodeJs size={40} />
                  </div>
                  <div className="text-xl md:text-2xl flex items-center space-x-2">
                    <span>
                      NodeJS
                    </span>
                    <GoStarFill size={35} color="yellow" />
                  </div>
                </div>
                <div
                  data-aos-delay="200"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <SiDjango size={40} />
                  </div>
                  <span className="text-xl md:text-2xl">Django</span>
                </div>
              </div>
            </div>
            <div className="gap-10 md:gap-0 grid sm:grid-cols-12">
              <div data-aos="fade-right" className=" sm:col-span-5">
                <p className="text-3xl sm:text-4xl font-anton leading-none text-muted-foreground uppercase">
                  database:
                </p>
              </div>
              <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                <div
                  data-aos-delay="300"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <SiPrisma size={40} />
                  </div>
                  <div className="text-xl md:text-2xl flex items-center space-x-2">
                    <span>
                      Prisma ORM
                    </span>
                    <GoStarFill size={35} color="yellow" />
                  </div>
                </div>
                <div
                  data-aos-delay="300"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <SiPostgresql size={40} />
                  </div>
                  <span className="text-xl md:text-2xl">PostgreSQL</span>
                </div>
                <div
                  data-aos-delay="300"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <SiMongodb size={40} />
                  </div>
                  <span className="text-xl md:text-2xl">MongoDB</span>
                </div>
              </div>

            </div>
            <div className="gap-10 md:gap-0 grid sm:grid-cols-12">
              <div data-aos="fade-right" className=" sm:col-span-5">
                <p className="text-3xl sm:text-4xl font-anton leading-none text-muted-foreground uppercase">
                  tools:
                </p>
              </div>
              <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                <div
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <FaNpm size={60} />
                  </div>
                  <span className="text-xl md:text-2xl">NPM</span>
                </div>
                <div
                  data-aos-delay="200"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <Image
                      width={40}
                      height={40}
                      src={"/icons/bun.svg"}
                      alt="typescript-icon"
                    />
                  </div>
                  <span className="text-xl md:text-2xl">Bun</span>
                </div>
                <div
                  data-aos-delay="400"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <FaGitAlt size={40} color="red" />
                  </div>
                  <span className="text-xl md:text-2xl">Git</span>
                </div>
                <div
                  data-aos-delay="400"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <SiTailwindcss size={40} />
                  </div>
                  <span className="text-xl md:text-2xl">TailwindCSS</span>
                </div>
                <div
                  data-aos-delay="400"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <SiOpenai size={40} />
                  </div>
                  <span className="text-xl md:text-2xl">OpenAI API</span>
                </div>
                <div
                  data-aos-delay="400"
                  data-aos="fade-up"
                  className="flex gap-3.5 items-center leading-none"
                >
                  <div>
                    <SiTrpc size={40} />
                  </div>
                  <span className="text-xl md:text-2xl">TRPC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};
