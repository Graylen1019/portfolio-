// footer-section.tsx
import React, { useState, useEffect } from "react";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer data-aos="fade-up" className="w-full h-[22vh] py-8 md:py-12 text-white text-center relative flex flex-col justify-center items-center"> {/* Added flex classes */}
      <div className="container mx-auto px-4 flex flex-col justify-center items-center"> {/* Added flex classes */}
        {/* Email Link */}
        <p className="text-lg md:text-xl mb-4 font-semibold">
          <a
            href="mailto:Graylenbigelow@gmail.com"
            className="text-[#af76c4] hover:text-[#9a65b3] transition-colors duration-300"
            aria-label="Email Graylen Bigelow"
          >
            Graylenbigelow@gmail.com
          </a>
        </p>

        {/* Copyright Information */}
        <p className="text-sm md:text-base text-gray-400">
          &copy; {currentYear} Graylen Bigelow. All rights reserved.
        </p>

        {/* Back to Top Button */}
        {isVisible && (
          <div className="mt-4"> {/* Added margin-top for spacing */}
            <button
              onClick={scrollToTop}
              className="flex gap-2 items-center justify-center text-center
              bg-[#af76c4] hover:bg-[#9a65b3] text-white
              p-3 rounded-full shadow-lg
              transition-opacity duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-[#af76c4] focus:ring-opacity-75
              z-50 opacity-100"
              aria-label="Back to top"
            >
              <p className="">Back to Top</p>
              {/* Arrow Up SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </footer>
  );
};