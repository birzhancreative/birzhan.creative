"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

type CursorState = "default" | "project" | "play" | "close";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      
      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      
      if (cursorAttr === 'play') {
        setCursorState('play');
      } else if (cursorAttr === 'close') {
        setCursorState('close');
      } else if (cursorAttr === 'project' || target.closest(".project-card")) {
        setCursorState('project');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Determine size and styling based on state
  let width = 12;
  let height = 12;
  let bg = "#FFFFFF";
  let content = null;
  let borderRadius = "9999px";

  if (cursorState === "project") {
    width = 110;
    height = 32;
    borderRadius = "6px"; // Rectangular with slightly rounded corners
    bg = "rgba(0, 0, 0, 0.6)"; // Darker translucent background for better contrast on white images
    content = (
      <div className="flex items-center justify-center gap-1.5 text-white px-2">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
        VIEW CASE
      </div>
    );
  } else if (cursorState === "play") {
    width = 90;
    height = 40;
    bg = "#1A1C20"; // Dark pill for play
    content = (
      <div className="flex items-center gap-2 text-white px-4">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3L19 12L5 21V3Z" />
        </svg>
        PLAY
      </div>
    );
  } else if (cursorState === "close") {
    width = 100;
    height = 40;
    bg = "#FFFFFF"; // White pill for close
    content = (
      <div className="flex items-center gap-2 text-black px-4">
        <X className="w-3 h-3" strokeWidth={3} />
        CLOSE
      </div>
    );
  }

  // To center the cursor accurately
  const offsetX = width / 2;
  const offsetY = height / 2;

  // Mix blend differs. White dot uses difference.
  const isDifference = cursorState === "default";
  const backdropBlur = cursorState === "project" ? "blur(8px)" : "none";

  return (
    <motion.div
      className="hidden md:flex fixed top-0 left-0 pointer-events-none z-[9999] items-center justify-center font-black tracking-widest text-[10px] overflow-hidden"
      style={{
        mixBlendMode: isDifference ? "difference" : "normal",
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur
      }}
      animate={{
        x: mousePosition.x - offsetX,
        y: mousePosition.y - offsetY,
        width,
        height,
        backgroundColor: bg,
        borderRadius: borderRadius
      }}
      transition={{ 
        type: "spring", 
        damping: 30, 
        stiffness: 400,
        mass: 0.5 // faster tracking
      }}
    >
      <AnimatePresence mode="wait">
        {content && (
          <motion.div
            key={cursorState}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center whitespace-nowrap"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
