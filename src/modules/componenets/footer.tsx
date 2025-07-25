// footer-section.tsx
import React from "react";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <p className="text-lg md:text-xl mb-4 font-semibold">
        <a
          href="mailto:Graylenbigelow@gmail.com"
          className="text-[#af76c4] hover:text-[#9a65b3] transition-colors duration-300"
          aria-label="Email Graylen Bigelow"
        >
          Graylenbigelow@gmail.com
        </a>
      </p>
      <p className="text-sm md:text-base text-gray-400">
        &copy; {currentYear} Graylen Bigelow. All rights reserved.
      </p>
    </div>
  );
};
