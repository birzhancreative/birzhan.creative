"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseTrail() {
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Define 8 dots with increasing lag/spring delay
  const trailDots = Array.from({ length: 8 }).map((_, i) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const springX = useSpring(mouseX, {
      stiffness: 400 - i * 40,
      damping: 25 + i * 3,
      mass: 0.5 + i * 0.1,
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const springY = useSpring(mouseY, {
      stiffness: 400 - i * 40,
      damping: 25 + i * 3,
      mass: 0.5 + i * 0.1,
    });

    return {
      x: springX,
      y: springY,
      size: 16 - i * 1.5,
      opacity: 0.8 - i * 0.1,
    };
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {trailDots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#F4F4F0] mix-blend-overlay"
          style={{
            x: dot.x,
            y: dot.y,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      ))}
    </div>
  );
}
