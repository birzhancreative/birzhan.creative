"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

interface ProjectClientContentProps {
  projectData: any;
  mediaFiles: string[];
}

export default function ProjectClientContent({ projectData, mediaFiles }: ProjectClientContentProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback sections if none
  const sections = [
    { title: "Challenge", content: projectData.challenge || projectData.description || "The project required an innovative approach to modern problems, pushing boundaries while remaining grounded in core identity." },
    { title: "Solution", content: projectData.solution || "We developed a comprehensive strategy focusing on digital transformation, emphasizing user experience and seamless integration." },
    { title: "Tools", content: projectData.tools || "Adobe Creative Suite, Figma" }
  ];

  // We can use Intersection Observer on the media items to update activeIndex.
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            // Map media index to section index
            const sectionIndex = Math.min(
              sections.length - 1,
              Math.floor((index / mediaFiles.length) * sections.length)
            );
            setActiveIndex(sectionIndex);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // trigger when item is fairly centered
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [mediaFiles.length, sections.length]);

  // We don't separate hero media anymore, all media goes to the right column
  const contentMedia = mediaFiles;

  return (
    <div className="bg-[#000] text-white">
      <div className="flex flex-col md:flex-row min-h-screen relative z-10 bg-black pt-24 md:pt-0">
        {/* Left Sidebar (Sticky) */}
        <div className="w-full md:w-[35%] md:h-screen md:sticky top-0 left-0 md:pt-32 px-6 md:px-12 flex flex-col pb-10 z-10 border-b md:border-b-0 md:border-r border-white/10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:mt-0 mt-8"
          >
            <h1 className="text-2xl md:text-3xl font-medium mb-2">{projectData.title}</h1>
            <p className="text-sm md:text-base text-white/70 mb-4">{projectData.description || "A new era of design"}</p>
            <p className="text-[10px] text-white/40 uppercase tracking-widest">{projectData.category} - {projectData.year || "2024"}</p>
          </motion.div>

          {/* Sections Scroll Spy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 md:mt-12 flex-1 flex flex-col gap-4"
          >
            {sections.map((sec, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] transition-colors duration-300 ${activeIndex === i ? 'text-white' : 'text-transparent'}`}>•</span>
                  <h3 className={`text-xs md:text-sm cursor-pointer transition-colors duration-300 ${activeIndex === i ? 'text-white font-medium' : 'text-white/40 hover:text-white/70'}`}
                      onClick={() => {
                         const targetMediaIndex = Math.floor((i / sections.length) * contentMedia.length);
                         sectionRefs.current[targetMediaIndex]?.scrollIntoView({ behavior: 'smooth' });
                      }}>
                    {sec.title}
                  </h3>
                </div>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs md:text-sm text-white/60 mt-2 leading-relaxed pl-4">
                        {sec.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content (Scrollable Media) */}
        <div className="w-full md:w-[65%] pt-10 md:pt-32 px-4 md:px-10 pb-0 flex flex-col gap-8 md:gap-16">
          {contentMedia.length > 0 ? contentMedia.map((src, index) => {
            const isVideo = src.toLowerCase().endsWith(".mp4");
            return (
              <div 
                key={index} 
                data-index={index}
                ref={(el) => {
                  if (el) sectionRefs.current[index] = el;
                }}
                className="w-full aspect-video relative rounded-xl overflow-hidden bg-transparent"
              >
                {isVideo ? (
                  <video src={src} autoPlay loop muted playsInline className="w-full h-full object-contain absolute inset-0" />
                ) : (
                  <img src={src} alt={`${projectData.title} ${index + 1}`} className="w-full h-full object-contain absolute inset-0" />
                )}
              </div>
            );
          }) : (
            <div className="py-32 text-center text-[#8a8a8a]">No more media available</div>
          )}
          
          {/* We can put the Footer at the very bottom of the right column */}
          <div className="mt-20 border-t border-white/5 pt-10 pb-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
