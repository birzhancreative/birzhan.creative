import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";

import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Birzhan Shaimardan | Koto Replica",
  description: "Graphic Designer & Content Creator based in Warsaw.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} antialiased min-h-screen overflow-x-hidden selection:bg-black selection:text-white`}
      >
        <Header />
        <Preloader />
        <CustomCursor />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
