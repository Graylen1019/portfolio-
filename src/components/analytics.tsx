"use client";

import { useEffect } from "react";

const GA_ID = (process.env.NEXT_PUBLIC_GA_ID as string) || "G-JS7CTNF345";

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) {
      console.warn("Analytics: NEXT_PUBLIC_GA_ID is not set. Skipping gtag injection.");
      return;
    }

  // 1) external gtag script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  script.onload = () => console.log("Analytics: gtag.js loaded");
  script.onerror = (err) => console.error("Analytics: failed to load gtag.js", err);
  document.head.appendChild(script);

    // 2) inline init
    const inline = document.createElement("script");
    inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');`;
    document.head.appendChild(inline);

  // optional: expose a quick flag so you can inspect initialization in the console
  console.log("Analytics: injected gtag with id", GA_ID);
  console.log("Analytics: inline init script appended");

    return () => {
      console.log("Analytics: cleanup - removing injected scripts");
      try {
        document.head.removeChild(script);
      } catch (e) {
        void e;
      }
      try {
        document.head.removeChild(inline);
      } catch (e) {
        void e;
      }
    };
  }, []);

  return null;
}
