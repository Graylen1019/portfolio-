import Image from "next/image";

export const StackSection = () => {
  return (
    <div
      id="container"
      className="flex items-center justify-center flex-col w-screen max-w-[1148px] mx-auto px-4 pt-[84px] pb-[128px]" // Removed h-[100svh] and max-h-[536px]
    >
      <div className="flex items-center gap-4 mb-48">
        <h1
          data-aos="fade-up"
          className="text-5xl text-[#Af76c4] uppercase leading-none"
        >
          My stack
        </h1>
      </div>
      <div className="space-y-32">
        <div className="grid sm:grid-cols-12">
          <div data-aos="fade-right" className=" sm:col-span-5">
            <p className="text-5xl font-anton leading-none text-muted-foreground uppercase">
              frontend:
            </p>
          </div>
          <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
            <div
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div className="">
                <Image
                  width={40}
                  height={40}
                  src={"/icons/react.png"}
                  alt="react-icon"
                />
              </div>
              <span className="text-2xl">React</span>
            </div>
            <div
              data-aos-delay="150"
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/icons/next.webp"}
                  alt="next-icon"
                />
              </div>
              <h1>Next.js</h1>
            </div>
            <div
              data-aos-delay="300"
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div className="">
                <Image
                  width={40}
                  height={40}
                  src={"/icons/tailwind.png"}
                  alt="tailwind-icon"
                />
              </div>
              <span className=" text-2xl">Tailwind</span>
            </div>
            <div
              data-aos-delay="350"
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/icons/ts.png"}
                  alt="typescript-icon"
                />
              </div>
              <span className="text-2xl">Typescript</span>
            </div>
            <div
              data-aos-delay="400"
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/icons/js.png"}
                  alt="javascript-icon"
                />
              </div>
              <span className="text-2xl">Javascript</span>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-12">
          <div data-aos="fade-right" className=" sm:col-span-5">
            <p className="text-5xl font-anton leading-none text-muted-foreground uppercase">
              backend:
            </p>
          </div>
          <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
            <div
              data-aos-delay="200"
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/icons/trpc.svg"}
                  alt="typescript-icon"
                />
              </div>
              <span className="text-2xl">
                tRPC (TypeScript Remote Procedure Call)
              </span>
            </div>
            <div
              data-aos-delay="200"
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/icons/avatar-mono-rounded.svg"}
                  alt="clerk-js"
                />
              </div>
              <span className="text-2xl">Clerk Authentication</span>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-12">
          <div data-aos="fade-right" className=" sm:col-span-5">
            <p className="text-5xl font-anton leading-none text-muted-foreground uppercase">
              database:
            </p>
          </div>
          <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
            <div
              data-aos-delay="300"
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div>
                <Image
                  width={60}
                  height={60}
                  src={"/icons/drizzle.svg"}
                  alt="typescript-icon"
                />
              </div>
              <span className="text-2xl">Drizzle ORM</span>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-12">
          <div data-aos="fade-right" className=" sm:col-span-5">
            <p className="text-5xl font-anton leading-none text-muted-foreground uppercase">
              tools:
            </p>
          </div>
          <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
            <div
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div>
                <Image
                  width={60}
                  height={60}
                  src={"/icons/npm.svg"}
                  alt="typescript-icon"
                />
              </div>
              <span className="text-2xl">NPM</span>
            </div>
            <div
              data-aos-delay="200"
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/icons/bun.svg"}
                  alt="typescript-icon"
                />
              </div>
              <span className="text-2xl">Bun</span>
            </div>
            <div
              data-aos-delay="400"
              data-aos="fade-up"
              className="flex gap-3.5 items-center leading-none"
            >
              {" "}
              {/* Corrected gap-3 5 to gap-3.5 */}
              <div>
                <Image
                  width={40}
                  height={40}
                  src={"/icons/git.png"}
                  alt="typescript-icon"
                />
              </div>
              <span className="text-2xl">git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
