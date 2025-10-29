// layout.tsx
import React from "react";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/modules/AOSProvider";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Analytics from "@/components/analytics";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bigelowgraylen.com'),
  title: 'Graylen Bigelow — Frontend Developer',
  description:
    'Graylen Bigelow — Frontend developer skilled in React, Next.js, and TypeScript. Portfolio showcasing modern frontend projects.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Graylen Bigelow — Frontend Developer',
    description:
      'Frontend developer portfolio of Graylen Bigelow. Showcasing projects built with React, Next.js, and TypeScript.',
    url: 'https://bigelowgraylen.com',
    siteName: 'Graylen Bigelow Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://bigelowgraylen.com/og-image.png', // Optional — add a screenshot/banner of your portfolio
        width: 1200,
        height: 630,
        alt: 'Graylen Bigelow Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graylen Bigelow — Frontend Developer',
    description:
      'Frontend developer portfolio showcasing React, Next.js, and TypeScript projects.',
    images: ['https://bigelowgraylen.com/og-image.png'], // Same as OpenGraph image
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Graylen Bigelow',
              url: 'https://bigelowgraylen.com',
              sameAs: [
                'https://www.linkedin.com/in/graylen-bigelow-834435371',
                'https://github.com/Graylen1019',
              ],
              jobTitle: 'Fullstack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
            }),
          }}
        />
      </head>
      <body
        className={`bg-gradient-to-b from-black to-[#232323] ${anton} antialiased`}
      >
        <Analytics />
        <BackgroundBeamsWithCollision className="fixed inset-0 z-0" />

        <AOSProvider>
          <div className="relative z-10">
            {children}
          </div>
        </AOSProvider>
      </body>
    </html>
  );
}