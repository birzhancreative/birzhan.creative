"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <motion.img
            src="/bs/icon.png"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
            alt="Loading"
            className="w-16 h-auto md:w-24 object-contain brightness-0 invert"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: [1, 1.05, 1] }}
            transition={{ 
              scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
