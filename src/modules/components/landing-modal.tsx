'use client'; // This directive marks this as a Client Component

import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button"; // Assuming this Button component is correctly imported and styled
import { ArrowLeft, FileDown, FileUp, Github, Linkedin, ProjectorIcon, TextSearchIcon, User2, X } from "lucide-react"; // Changed from AlignJustify to X for a more intuitive close icon
import React, { useRef, useState } from "react"; // Import useState
import Link from "next/link";

interface ModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LandingModal: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Correctly type the event parameter for a form submission
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (form.current) {
      setIsLoading(true); // Set loading state
      setStatusMessage(null); // Clear previous messages

      emailjs
        .sendForm('service_wf18wra', 'template_9o46a5g', form.current, {
          publicKey: 'sNxjBfyQn7wZM94BM',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setStatusMessage('Email sent! Im excited to start working with you! Check out my projects in the meantime!');
            setIsSuccess(true);
            // Optionally clear the form after success
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log('FAILED...', error.text);
            setStatusMessage(`Failed to send message: ${error.text || 'Unknown error'}`);
            setIsSuccess(false);
          },
        )
        .finally(() => {
          setIsLoading(false); // Clear loading state
        });
    } else {
      console.log('Form reference is null.');
      setStatusMessage('Form could not be processed. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    // Main modal overlay/container
    <div className="overflow-hidden text-white w-screen h-screen p-4 sm:p-8 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center z-50 bg-black">
      {/* Button to close the modal */}
      <Button
        variant={"ghost"}
        className=" rounded-full z-10 cursor-pointer absolute top-6 right-4"
        onClick={() => {
          setIsModalOpen(false);
        }}
        aria-label="Close modal"
      >
        <X size={36} className="size-10" /> {/* Changed from AlignJustify to X icon */}
      </Button>
      <div className="w-full space-y-10 md:space-x-30 flex flex-col items-center justify-center md:flex-row mx-auto py-10 px-6">

        <div className="w-full relative rounded-lg p-6 sm:p-10 max-w-4xl md:w-1/3 max-h-[90vh] overflow-y-auto flex flex-col items-center justify-center">
          <h2 className="hidden md:block text-3xl sm:text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-xl space-y-4">
            <div>
              <label htmlFor="user_name" className="block text-lg font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-lg font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || isSuccess}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          {/* Status Message Display */}
          {statusMessage && (
            <div className={`mt-6 p-3 rounded-md text-center text-lg font-semibold ${isSuccess ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
              }`}>
              {statusMessage}
            </div>
          )}
        </div>

        {!statusMessage && (
          <div className="md:flex gap-x-12 items-center justify-center">
            <div className="flex md:flex-col gap-4 md:gap-12 text-white justify-center items-center md:items-start w-full">
              <Link
                href="/"
                onClick={() => setIsModalOpen(false)}
                aria-label="Home"
                className="items-center text-center justify-center gap-1 flex relative group hover:text-[#0A66C2] hover:scale-110 transition duration-200 ease-in-out"
              >
                <ArrowLeft size={22} className="md:size-12" /> <span className="md:text-2xl">Home</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Back to Home
                </span>
              </Link>

              <Link
                href="/"
                aria-label="About Me"
                onClick={() => alert('This feature is currently unavailable. Due to the current changes i have made, GSAP is not allowing this button to work. I am working on a fix!')}

                className="items-center justify-center gap-1 flex relative group hover:text-gray-800 hover:scale-110 transition duration-200 ease-in-out"
              >
                <User2 size={22} className="md:size-12" /> <span className="md:text-2xl">About</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  About Me
                </span>
              </Link>

              <Link
                href="/"
                onClick={() => alert('This feature is currently unavailable. Due to the current changes i have made, GSAP is not allowing this button to work. I am working on a fix!')}

                aria-label="Stack"
                className="items-center justify-center gap-1 flex relative group hover:text-purple-400 hover:scale-110 transition duration-200 ease-in-out"
              >
                <TextSearchIcon size={22} className="md:size-12" /> <span className="md:text-2xl">Stack</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  My Stack
                </span>
              </Link>

              <Link
                href="/"
                onClick={() => alert('This feature is currently unavailable. Due to the current changes i have made, GSAP is not allowing this button to work. I am working on a fix!')}

                aria-label="Projects "
                className="items-center justify-center gap-1 flex relative group hover:text-purple-400 hover:scale-110 transition duration-200 ease-in-out"
              >
                <ProjectorIcon size={22} className="md:size-12" /> <span className="md:text-2xl">Projects</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  My Projects
                </span>
              </Link>

            </div>
            <div className="flex md:flex-col gap-4 md:gap-12 text-white items-center md:items-start justify-center">
              <Link
                href="https://www.linkedin.com/in/graylen-bigelow-834435371"
                target="_blank"
                aria-label="LinkedIn"
                className="items-center justify-center gap-2 flex relative group hover:text-[#0A66C2] hover:scale-110 transition duration-200 ease-in-out"
              >
                <Linkedin size={22} className="md:size-12" /> <span className="md:text-2xl">LinkedIn</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </Link>

              <Link
                href="https://github.com/Graylen1019"
                target="_blank"
                aria-label="GitHub"
                className="items-center justify-center gap-1 flex relative group hover:text-gray-800 hover:scale-110 transition duration-200 ease-in-out"
              >
                <Github size={22} className="md:size-12" /> <span className="md:text-2xl">Github</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                aria-label="View Resume"
                className="items-center gap-1 flex relative group hover:text-purple-400 hover:scale-110 transition duration-200 ease-in-out"
              >
                <FileUp size={22} className="md:size-12" /> <span className="md:text-2xl">View</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View Resume
                </span>
              </Link>

              <Link
                href="/resume.docx"
                aria-label="Download Resume"
                className="items-center justify-center gap-1 flex relative group hover:text-purple-400 hover:scale-110 transition duration-200 ease-in-out"
              >
                <FileDown size={22} className="md:size-12" /> <span className="md:text-2xl">Download</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Download Resume
                </span>
              </Link>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

