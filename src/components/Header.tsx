"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

export default function Header() {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const offset = -now.getTimezoneOffset() / 60;
      const offsetStr = offset >= 0 ? `+${offset}` : `${offset}`;
      setTime(`${hours}:${minutes} UTC${offsetStr} ::`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  // Determine if we are on a project page
  const isProjectPage = pathname?.startsWith("/project/");
  let projectTitle = "";
  if (isProjectPage) {
    const slug = pathname?.split("/project/")[1];
    const decodedSlug = decodeURIComponent(slug || "");
    const project = projects.find((p) => p.slug === decodedSlug);
    if (project) {
      projectTitle = project.title.toUpperCase();
    }
  }

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none text-white">
      {/* Top Header Bar */}
      <div className="w-full p-6 md:px-10 flex items-start justify-between pointer-events-auto">
        
        {/* Navigation Container */}
        <div className="relative">
          <motion.div 
            className={`flex items-center transition-all duration-300 cursor-pointer ${isScrolled ? 'bg-[#111] px-5 py-3 rounded-xl shadow-lg border border-white/10' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Logo */}
            <Link href="/" className="block shrink-0" onClick={(e) => e.stopPropagation()}>
              <img src="/bs/icon.png" alt="Logo" className="h-4 md:h-5 w-auto object-contain brightness-0 invert" />
            </Link>
            
            {/* Nav Links / Breadcrumbs */}
            <div className="ml-6 flex items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-white/60">
              {!isProjectPage ? (
                isScrolled ? (
                  <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                    <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
                    <span className="text-white">Home</span>
                  </Link>
                ) : (
                  <>
                    <div className="hidden md:flex items-center gap-6">
                      <Link href="/#work" className="hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>My work</Link>
                      <Link href="/#about" className="hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>About me</Link>
                      <Link href="/#contact" className="hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>Contact</Link>
                    </div>
                    <div className="flex md:hidden items-center text-white">
                      Menu
                    </div>
                  </>
                )
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
                  <span className="text-white">{projectTitle}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 bg-[#111] border border-white/10 rounded-xl p-6 min-w-[200px] flex flex-col gap-4 shadow-2xl pointer-events-auto"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/#work" className="text-sm font-medium hover:text-white/70 transition-colors">My work</Link>
                <Link href="/#about" className="text-sm font-medium hover:text-white/70 transition-colors">About me</Link>
                <Link href="/#contact" className="text-sm font-medium hover:text-white/70 transition-colors">Contact</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Time */}
        <div className="text-[10px] font-bold tracking-widest uppercase opacity-60 pt-3 md:pt-0">
          {time}
        </div>
      </div>
    </header>
  );
}
