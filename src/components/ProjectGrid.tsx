"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { useState, useRef, useEffect, useCallback } from "react";

// Get the specific 4 projects requested for the homepage grid
const featuredSlugs = ['glorious model o', 'domino', 'air astana', 'water cycle'];
const featuredProjects = featuredSlugs
  .map(slug => projects.find(p => p.slug === slug))
  .filter((p): p is Project => p !== undefined);

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState<Project | null>(featuredProjects[0]);

  return (
    <section id="work" className="relative w-full bg-[#0a0a0a] z-40">
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        
        {/* Left Sticky Sidebar */}
        <div className="w-full md:w-[35%] md:sticky md:top-0 h-auto md:h-screen p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          <div className="mt-16 md:mt-24">
            <h2 className="text-4xl md:text-[3.5rem] font-medium text-white tracking-tight leading-none mb-1">
              My work
            </h2>
            
            {/* Animated Title */}
            <div className="min-h-[4rem]">
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    key={activeProject.slug + "-title"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-4xl md:text-[3.5rem] font-medium tracking-tight text-[#8A8A8A] leading-none">
                      {activeProject.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="mb-12 md:mb-16 mt-8 md:mt-auto">
             <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    key={activeProject.slug + "-desc"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-8 md:gap-12"
                  >
                    <p className="text-sm md:text-base text-[#8A8A8A] font-light leading-relaxed max-w-sm">
                      {activeProject.description || "Project description coming soon."}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#111] rounded-sm flex items-center justify-center overflow-hidden shrink-0">
                         <img src={activeProject.cover} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">{activeProject.title}</h4>
                        <p className="text-[9px] font-bold tracking-widest uppercase text-[#5A5A5A]">
                          {activeProject.year || "2024"}, {activeProject.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </div>
        </div>

        {/* Right Scrollable Grid */}
        <div className="w-full md:w-[65%] relative bg-black">
          <div className="flex flex-col gap-2 p-2">
            {featuredProjects.map((project) => (
              <ProjectItem 
                key={project.slug} 
                project={project} 
                onInView={() => setActiveProject(project)} 
              />
            ))}

            {/* 5th element: View all my works */}
            <div className="w-full h-24 md:h-32 bg-[#1C1E22] flex items-center justify-center hover:bg-[#25282D] transition-colors cursor-none group rounded-sm mt-8">
              <Link href="/archive" className="w-full h-full flex items-center justify-center">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#8A8A8A] group-hover:text-white transition-colors">
                  [ View all projects ]
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project, onInView }: { project: Project, onInView: () => void }) {
  const ref = useRef(null);
  
  // Triggers when the item is roughly in the middle of the screen
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView]);

  return (
    <Link 
      href={`/project/${project.slug}`} 
      className="block group w-full"
      data-cursor="project"
    >
      <div 
        ref={ref}
        className="relative w-full aspect-video overflow-hidden bg-[#111] rounded-sm"
      >
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
    </Link>
  );
}
