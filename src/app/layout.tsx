// layout.tsx
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";


import "./globals.css";
import Analytics from "@/components/analytics";
import { BackgroundBeams } from "@/components/ui/background-beams";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });


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
              jobTitle: 'Frontend Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
            }),
          }}
        />
      </head>
      <body
        className={`bg-black ${anton.className} antialiased`}
      >
        <Analytics />
        <BackgroundBeams />
        {children}
      </body>
    </html>
  );
}