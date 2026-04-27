"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24">
      <Header />
      
      <div className="w-full px-6 md:px-12 lg:px-16 mb-16">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
          All Projects
        </h1>
        <p className="text-xl text-[#8A8A8A] font-light">
          A comprehensive archive of selected works.
        </p>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16">
        {/* 2 columns grid for all previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Link 
              href={`/project/${project.slug}`} 
              key={project.slug}
              className="block group"
              data-cursor="project"
            >
              <motion.div 
                className="relative w-full aspect-video rounded-sm overflow-hidden bg-[#111]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>
              
              <div className="mt-4">
                <h3 className="text-lg font-bold text-white group-hover:text-[#8A8A8A] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#5A5A5A] mt-1">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
