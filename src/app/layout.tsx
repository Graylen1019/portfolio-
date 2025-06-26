// layout.tsx
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/modules/AOSProvider";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graylen Bigelow",
  description: "My Frontend-developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-black to-[#232323] ${anton} antialiased`}
      >
        <BackgroundBeamsWithCollision className="fixed inset-0 z-0" /> {/* Add fixed inset-0 z-0 */}

        <AOSProvider>
          <div className="relative z-10">
            {children}
          </div>
        </AOSProvider>
      </body>
    </html>
  );
}