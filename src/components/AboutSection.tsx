"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-40 w-full bg-black py-32 md:py-48 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-[95%] md:max-w-6xl flex flex-col md:flex-row gap-16 md:gap-32">
        {/* Left Column - Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/3"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-2">
            About Me
          </h2>
        </motion.div>

        {/* Right Column - Content */}
        <div className="md:w-2/3 flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#8A8A8A] font-medium leading-[1.3] mb-12">
              <span className="text-white">Multidisciplinary Designer</span> focused on creating intuitive digital products and impactful brand identities. Experienced in UI/UX workflows, pre-press (DTP), and dynamic video production. Passionate about leveraging visual storytelling to solve complex design problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-8 border-t border-white/10 pt-12"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
              <div className="md:w-1/3">
                <h3 className="text-white text-lg font-bold tracking-tight">Education</h3>
              </div>
              <div className="md:w-2/3 flex flex-col gap-2 text-[#8A8A8A]">
                <p className="text-base text-white">Bachelor of Graphic Design | Vistula University, Warsaw</p>
                <p className="text-sm">GPA: 4.24 / 5.0</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-16 pt-8 border-t border-white/10">
              <div className="md:w-1/3">
                <h3 className="text-white text-lg font-bold tracking-tight">Core Competencies</h3>
              </div>
              <div className="md:w-2/3 flex flex-col gap-4 text-[#8A8A8A]">
                <div>
                  <span className="text-white block mb-1">Design Focus</span>
                  <span className="text-sm">UI/UX, Graphic Design, Motion Graphics, Video Editing</span>
                </div>
                <div>
                  <span className="text-white block mb-1">Languages</span>
                  <span className="text-sm">English (C1), Kazakh (Native), Russian (Native), Polish (A2)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
