// components/AOSProvider.tsx (or modules/AOSProvider.tsx based on your import path)
'use client'; // This directive is CRUCIAL for App Router client-side logic

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure this path is correct relative to this file

interface AOSProviderProps {
  children: React.ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      // Your desired global AOS settings go here
      duration: 800, // Example: Set a default animation duration
      once: false,  // Example: Animations can repeat
      mirror: true, // Example: Animations reverse on scroll up
      offset: 120, // Example: Trigger animations when element is 120px from bottom of viewport
      // ... all the settings you discussed previously ...
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      delay: 0,
      easing: 'ease',
      anchorPlacement: 'top-bottom',
    });
  }, []); // The empty dependency array ensures this runs only once on component mount

  // We render the children, but the AOS initialization happens in the useEffect
  return <>{children}</>;
}