import Image from "next/image";

export const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Youtube Clone",
      description:
        "Engineered a full-stack video sharing platform offering secure user authentication, efficient video uploads, and seamless content streaming. This project showcases a modern web application architecture.",
      techStack: ["bun", "Next.js", "TypeScript", "Tailwind CSS", "tRPC", "Drizzle ORM", "Clerk.js", "Mux", "UploadThing", "zod", "shadcn", "lucide-react"],
      image: "/projects/youtube-ss.png",
      liveLink: "https://new-tube-project.vercel.app/", 
      githubLink: "https://github.com/Graylen1019/NewTube-project",
    },
    {
      id: 2,
      title: "Google Docs Clone",
      description:
        "Created a real-time collaborative document editor application, drawing inspiration from Google Docs, which implements sophisticated synchronization mechanisms to provide a fluid and concurrent editing experience for multiple users.",
      techStack: ["npm", "Next.js", "TypeScript", "Tailwind CSS", "Clerk.js", "liveblocks", "shadcn", "lucide-react" /* assumed, common for real-time */],
      image: "/projects/docs-ss.png", 
      liveLink: "https://google-docs-rouge.vercel.app/", 
      githubLink: "https://github.com/Graylen1019/Google-docs",
    },
    {
      id: 3,
      title: "OMDb Movie API", 
      description:
        "Developed a responsive web application that leverages the OMDb API, providing access to a vast database of over 280,000 movies. This project demonstrates strong proficiency in front-end development principles and advanced state management techniques for a seamless user experience.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/projects/OMDb-ss.png", 
      liveLink: "https://final-proj-3.vercel.app/",
      githubLink: "https://github.com/Graylen1019/Final-proj-3", 
    },
    {
      id: 4,
      title: "Skinstric.ai Intern Project",
      description:
        "As an internship project, I engineered an application that converts user-submitted or webcam images to base64 for AI analysis, accurately predicting age, sex, and race via an external API. The application highlights strong development practices, including effective state management, responsive design, and polished transitions and animations.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/projects/skinstric-ss.png", 
      liveLink: "https://skinstric-intern.vercel.app/", 
      githubLink: "https://github.com/Graylen1019/skinstric-intern", 
    },
  ];

  return (
    <div
      id="projects-container"
      className="w-screen max-w-[1148px] mx-auto px-4 text-white"
    >
      <div className="flex items-center gap-4 mb-20 justify-center">
        <h1 data-aos="fade-up" className="text-5xl text-[#Af76c4] uppercase leading-none">
          My Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-right"
            data-aos-delay={100} 
            className="bg-[#2a2a2a] rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48 sm:h-64 bg-gray-700 flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg"
                />
              ) : (
                <span className="text-white text-lg">Image Coming Soon</span>
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-[#af76c4] mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-[#af76c4]/20 text-[#af76c4] text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-start gap-4 mt-auto pt-4 border-t border-gray-700">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white hover:text-[#af76c4] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white hover:text-[#af76c4] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.493.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.196-6.086 8.196-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};