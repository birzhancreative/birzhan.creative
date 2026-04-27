"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="relative z-40 w-full bg-black py-32 md:py-48 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-[95%] md:max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-[44px] font-normal tracking-tight text-white leading-[1.15]"
        >
          Designer and video creator <span className="text-[#8A8A8A]">with a strong foundation in visual storytelling, UX/UI, branding and motion graphics.</span>
        </motion.h2>
      </div>
    </section>
  );
}
