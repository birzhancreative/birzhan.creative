"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="w-full py-24 px-6 md:px-12 lg:px-16 border-t border-white/10 bg-black z-40 text-white relative">
      <div className="max-w-[95%] md:max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* Left Column */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-2">
            Contact
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#8A8A8A]">
            Let's work together
          </p>
        </motion.div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col pt-2">
          {/* Mail */}
          <motion.div 
            className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/10 gap-4 sm:gap-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-sm font-medium">Mail</span>
            <a 
              href="mailto:birzhan.creative@gmail.com" 
              className="text-sm text-[#8A8A8A] hover:text-white transition-colors"
            >
              birzhan.creative@gmail.com
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div 
            className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/10 gap-4 sm:gap-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-medium">LinkedIn</span>
            <a href="https://www.linkedin.com/in/birzhanshaimardan/" target="_blank" rel="noreferrer" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">
              birzhanshaimardan
            </a>
          </motion.div>

          {/* Behance */}
          <motion.div 
            className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/10 gap-4 sm:gap-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-sm font-medium">Behance</span>
            <a href="https://www.behance.net/birzhanshaimardan" target="_blank" rel="noreferrer" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">
              birzhanshaimardan
            </a>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/10 gap-4 sm:gap-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-sm font-medium">Social Media</span>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/birzhan_shaimardan/" target="_blank" rel="noreferrer" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">Instagram</a>
              <span className="text-[#8A8A8A]">,</span>
              <a href="https://www.youtube.com/@Birzhan_Shaimardan" target="_blank" rel="noreferrer" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">YouTube</a>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Very bottom copyright */}
      <motion.div 
        className="max-w-[95%] md:max-w-6xl mx-auto mt-24 text-[10px] uppercase tracking-widest font-bold text-[#5A5A5A]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        © {new Date().getFullYear()} Birzhan Shaimardan
      </motion.div>
    </footer>
  );
}
