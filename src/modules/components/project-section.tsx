import Image from "next/image";
import React, { useState } from "react"; // Re-import useState
import { ProjectModal } from "./project-modal";

// Define a type for your project structure for better type safety
// This interface should match the one in ProjectModal.tsx
interface Project {
  id: number;
  title: string;
  description: string; // Shorter description for the main card view
  techStack: string[];
  image: string;
  liveLink?: string; // Optional link to live demo
  githubLink?: string; // Optional link to GitHub repo
  longDescription?: string; // Detailed description for the modal
  keyFeatures?: string[]; // Bullet points for features in the modal
  challenges?: string; // Challenges faced during the project
  learnings?: string; // Key takeaways/learnings from the project
}

// ProjectSection no longer accepts any props related to modal management
export const ProjectSection: React.FC = () => {
  // Your existing projects array with added detailed fields for the modal
  const projects: Project[] = [
    {
      id: 1,
      title: "Youtube Clone",
      description: "Engineered a full-stack video sharing platform offering secure user authentication, efficient video uploads, and seamless content streaming. This project showcases a modern web application architecture.",
      techStack: ["bun", "Next.js", "TypeScript", "Tailwind CSS", "tRPC", "Drizzle ORM", "Clerk.js", "Mux", "UploadThing", "zod", "shadcn", "lucide-react"],
      image: "/projects/youtube-ss.png",
      liveLink: "https://new-tube-project.vercel.app/",
      githubLink: "https://github.com/Graylen1019/NewTube-project",
      longDescription: "This project was a deep dive into building a scalable video platform from the ground up. It involved setting up robust authentication with Clerk.js, managing video uploads and streaming with Mux and UploadThing, and ensuring data integrity with Drizzle ORM. The real-time capabilities for comments and interactions were particularly challenging but rewarding. The aim was to replicate core YouTube functionalities, focusing on performance and user experience.",
      keyFeatures: [
        "User authentication (signup/login) with Clerk.js",
        "Video upload, processing, and seamless streaming via Mux and UploadThing",
        "Search and filter functionality for videos",
        "Like/dislike system for user engagement",
        "Commenting system for video interactions",
        "Modern web application architecture using tRPC for type-safe APIs"
      ],
      challenges: "Implementing efficient video streaming and handling large file uploads securely were significant challenges. Optimizing database queries for complex relationships, especially in a real-time context, also required careful consideration and database schema design with Drizzle ORM.",
      learnings: "Gained extensive experience with serverless functions, advanced database schema design, and integrating multiple third-party APIs for media processing. Improved skills in performance optimization and building full-stack applications with Next.js and Bun."
    },
    {
      id: 2,
      title: "Google Docs Clone",
      description: "Created a real-time collaborative document editor application, drawing inspiration from Google Docs, which implements sophisticated synchronization mechanisms to provide a fluid and concurrent editing experience for multiple users.",
      techStack: ["npm", "Next.js", "TypeScript", "Tailwind CSS", "Clerk.js", "liveblocks", "shadcn", "lucide-react"],
      image: "/projects/docs-ss.png",
      liveLink: "https://google-docs-rouge.vercel.app/",
      githubLink: "https://github.com/Graylen1019/Google-docs",
      longDescription: "The primary goal of this project was to understand and implement real-time collaboration. Liveblocks was instrumental in achieving seamless document synchronization across multiple users. It involved complex state management and optimistic UI updates to provide a smooth user experience, simulating the collaborative power of Google Docs.",
      keyFeatures: [
        "Real-time collaborative text editing with Liveblocks",
        "Rich text formatting capabilities (bold, italic, underline, etc.)",
        "Multiple user cursors and presence indicators",
        "Document saving and loading functionality",
        "Secure user authentication with Clerk.js"
      ],
      challenges: "The biggest challenge was managing concurrent edits and ensuring data consistency across all connected clients. Latency compensation for a smooth, lag-free user experience during real-time typing was also a complex aspect. Integrating Liveblocks effectively required a deep dive into its API and concepts.",
      learnings: "Deepened understanding of WebSocket-based real-time APIs, collaborative editing algorithms, and optimistic UI design patterns. Gained practical experience in building highly interactive and synchronized web applications."
    },
    {
      id: 3,
      title: "OMDb Movie API",
      description: "Developed a responsive web application that leverages the OMDb API, providing access to a vast database of over 280,000 movies. This project demonstrates strong proficiency in front-end development principles and advanced state management techniques for a seamless user experience.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/projects/OMDb-ss.png",
      liveLink: "https://final-proj-3.vercel.app/",
      githubLink: "https://github.com/Graylen1019/Final-proj-3",
      longDescription: "This project focused heavily on front-end architecture, API integration, and user experience design. I implemented various filtering, sorting, and search functionalities to allow users to easily navigate the vast OMDb movie database. It demonstrates advanced state management techniques to ensure a smooth and responsive interface, even with a large amount of data.",
      keyFeatures: [
        "Search movies by title, year, or type",
        "Detailed view for each movie (plot, cast, ratings, genre)",
        "Responsive design for optimal viewing on all devices",
        "Pagination for efficient browsing of search results",
        "Robust error handling for API requests"
      ],
      challenges: "Handling API rate limits effectively, optimizing data fetching strategies to minimize load times, and designing an intuitive search and filter system for a large dataset were key challenges. Ensuring a good user experience when dealing with external API dependencies also required careful consideration.",
      learnings: "Improved proficiency in consuming RESTful APIs, asynchronous data handling, and building highly interactive user interfaces. Gained experience in designing efficient data flows for external data sources."
    },
    {
      id: 4,
      title: "Skinstric.ai Intern Project",
      description: "As an internship project, I engineered an application that converts user-submitted or webcam images to base64 for AI analysis, accurately predicting age, sex, and race via an external API. The application highlights strong development practices, including effective state management, responsive design, and polished transitions and animations.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/projects/skinstric-ss.png",
      liveLink: "https://skinstric-intern.vercel.app/",
      githubLink: "https://github.com/Graylen1019/skinstric-intern",
      longDescription: "This internship project provided hands-on experience with AI API integration and client-side image processing. The focus was on creating a seamless user flow for image submission, displaying real-time feedback, and presenting AI analysis results clearly. Ensuring cross-browser compatibility for webcam access and handling large base64 strings efficiently without impacting performance were interesting and critical aspects of this project.",
      keyFeatures: [
        "Image upload functionality (file input)",
        "Live webcam feed integration for image capture",
        "Client-side image processing and conversion to Base64",
        "Integration with an external AI API for age, sex, and race prediction",
        "Displaying AI prediction results with clear visualizations",
        "Responsive design with polished transitions and animations"
      ],
      challenges: "Working with browser camera APIs and handling large base64 strings efficiently without impacting performance were critical. Integrating with a specific external AI API required careful data formatting and understanding of its response structure. Ensuring the UI remained responsive during image processing was also a key challenge.",
      learnings: "Gained practical experience with client-side image manipulation, interacting with external AI services, and building responsive UIs for data visualization. Learned about optimizing performance for data-intensive client-side operations."
    },
  ];

  // Re-added state to control modal visibility and selected project data
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Function to open the modal with specific project data
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null); // Clear selected project when closing
  };

  return (

    <div
      id="projects-container"
      className="w-screen max-w-[1024px] mx-auto px-4 py-20 text-white"
    >
          <div className="flex items-center justify-center mb-16">
            <h1 data-aos="fade-up" className="text-5xl text-[#Af76c4] leading-tight font-extrabold tracking-tight">
              My Projects
            </h1>
          </div>

          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                data-aos="fade-right"
                data-aos-delay={100}
                // Call the local openModal function when the card is clicked
                onClick={() => openModal(project)}
                className="bg-[#242424] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-6 border border-transparent hover:border-[#af76c4]/40 hover:bg-[#2c2c2c] transition-all duration-300 ease-in-out cursor-pointer"
              >
                {project.image && (
                  <div className="relative w-full h-40 md:w-64 md:h-40 flex-shrink-0 mb-6 md:mb-0 md:mr-8 rounded-lg overflow-hidden shadow-md bg-gray-700">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-grow">
                  <h2 className="text-3xl font-bold text-[#af76c4] mb-2 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#af76c4]/15 text-[#af76c4] text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>


      {/* ProjectModal is now rendered here, controlled by ProjectSection's state */}
      {isProjectModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};
