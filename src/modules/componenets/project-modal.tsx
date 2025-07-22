import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

// Define the Project interface to ensure consistency across components
// This should match the interface in page.tsx and project-section.tsx
interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  longDescription?: string;
  keyFeatures?: string[];
  challenges?: string;
  learnings?: string;
}

// Define props for ProjectModal
interface ProjectModalProps {
  project: Project;
  onClose: () => void; // Function to close the modal, passed from page.tsx
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Effect to handle closing the modal on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape); // Cleanup
  }, [onClose]); // Dependency array includes onClose

  // Function to close modal when clicking outside of it (on the overlay)
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click occurred outside the modal content
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // Safety check: if no project data is provided, don't render the modal
  if (!project) return null;

  // Add a console.log here to verify project data is received
  console.log("ProjectModal rendering with project:", project.title);

  return (
    <div
    data-aos="fade-in"    
     // Fixed positioning to cover the entire viewport
      // z-50 ensures it's on top of other content
      // flex for centering, bg-black with opacity for backdrop, backdrop-blur for effect
      // p-4 for padding on smaller screens
      // animate-fade-in for entrance animation (requires CSS keyframes in globals.css)
      className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300"
      onClick={handleOverlayClick} // Attach overlay click handler
    >
      <div
        ref={modalRef} // Reference for checking clicks outside
        // Styling for the modal's content container
        // max-w-7xl for increased width
        // w-full for responsiveness, max-h-[90vh] and overflow-y-auto for scrollable content
        // transform, scale-95, animate-scale-in-fade-in for entrance animation
        className="bg-[#1a1a1a] rounded-xl shadow-2xl p-8 max-w-7xl w-full max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in-fade-in"
        style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }} // Ensure animation stays at end state
      >
        <div className="flex justify-end">
          <button
            onClick={onClose} // Call onClose prop to close the modal
            className="text-gray-400 hover:text-white transition-colors duration-200 text-3xl leading-none"
            aria-label="Close modal" // Accessibility label
          >
            &times; {/* Standard close icon */}
          </button>
        </div>

        {/* Changed grid layout for better visual flow on larger screens */}
        {/* On medium screens and up, image and associated elements will be in one column,
            and text details in the second. On small screens, they stack. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Left Column: Image, Title, Description, Tech Stack, and Links */}
          <div className="flex flex-col">
            {project.image && (
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-lg bg-gray-800 mb-6">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  layout="fill"
                  objectFit="contain" // Ensures the entire image is visible
                  className="rounded-lg"
                />
              </div>
            )}

            {/* Project Title - Moved here, below the image */}
            <h2 className="text-4xl font-bold text-[#af76c4] mb-3 leading-tight">
              {project.title}
            </h2>
            {/* Project Description - Moved here, below the title */}
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Tech Stack Tags - Moved here, below the description */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-[#af76c4]/20 text-[#af76c4] text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Live Demo and GitHub Links - Moved here, below the tech stack */}
            <div className="flex justify-start gap-5 pt-6 border-t border-gray-700/60">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-[#af76c4] transition-colors duration-200 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  <span className="group-hover:underline group-hover:underline-offset-4">Live Demo</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-[#af76c4] transition-colors duration-200 group"
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
                  <span className="group-hover:underline group-hover:underline-offset-4">GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Key Features, Challenges, and Learnings */}
          <div>
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Challenges:</h3>
                <p className="text-gray-300">{project.challenges}</p>
              </div>
            )}

            {project.learnings && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Learnings:</h3>
                <p className="text-gray-300">{project.learnings}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
