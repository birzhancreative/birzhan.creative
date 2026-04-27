import Image from "next/image";

export default function BehancePresentation() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#e0e0e0] font-sans selection:bg-[#ff3c00] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff3c00]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="z-10 text-center flex flex-col items-center gap-6 px-4">
          <p className="text-[#ff3c00] font-mono tracking-widest uppercase text-sm">Portfolio Case Study</p>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-white max-w-5xl leading-tight">
            Designing a Cinematic Digital Experience.
          </h1>
          <p className="text-xl text-[#8a8a8a] max-w-2xl mt-4">
            A deep dive into the UX/UI and development of Birzhan Shaimardan's multidisciplinary portfolio.
          </p>
        </div>

        {/* Hero Mockup (Laptop) */}
        <div className="absolute bottom-0 translate-y-1/3 w-[90%] max-w-6xl aspect-[16/10] bg-[#1a1a1a] rounded-t-3xl border-t border-x border-white/10 shadow-2xl overflow-hidden flex flex-col">
          <div className="w-full h-8 bg-[#2a2a2a] flex items-center px-4 gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 bg-black relative flex items-center justify-center border-x-[8px] border-b-[16px] border-[#1a1a1a]">
             <span className="text-[#8a8a8a] text-lg">📸 [Replace with Desktop Hero Screenshot]</span>
          </div>
        </div>
      </section>

      {/* spacer for hero mockup overlap */}
      <div className="h-64" />

      {/* 2. OVERVIEW SECTION */}
      <section className="w-full py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl text-white tracking-tight mb-8">The Challenge</h2>
            <p className="text-xl text-[#8a8a8a] leading-relaxed">
              To create a personal brand identity and digital platform that encapsulates a specific design philosophy: "less is more." 
              The portfolio needed to move away from traditional grid galleries and instead provide an immersive, cinematic experience that showcases a strong foundation in visual storytelling, UX/UI, branding, and motion graphics.
            </p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl text-white tracking-tight mb-8">The Solution</h2>
            <p className="text-xl text-[#8a8a8a] leading-relaxed mb-12">
              A meticulously crafted Next.js application utilizing high-fidelity interaction design. By implementing a global morphing cursor, a seamless scroll-based "drowning" effect, and a stark dark-mode aesthetic, the focus remains completely on the work.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-8">
              <div>
                <span className="block text-sm text-[#8a8a8a] uppercase tracking-wider mb-2">Role</span>
                <span className="text-white text-lg">UI/UX, Frontend Dev</span>
              </div>
              <div>
                <span className="block text-sm text-[#8a8a8a] uppercase tracking-wider mb-2">Stack</span>
                <span className="text-white text-lg">Next.js 16, Tailwind, Framer Motion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESIGN SYSTEM (TYPOGRAPHY & COLORS) */}
      <section className="w-full py-32 bg-[#111] px-6 md:px-12 lg:px-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl text-white tracking-tight">Design System</h2>
            <p className="text-[#8a8a8a] mt-4 text-xl">The foundation of the visual identity.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Typography */}
            <div>
              <h3 className="text-2xl text-white mb-8 border-b border-white/10 pb-4">Typography</h3>
              <div className="flex flex-col gap-8">
                <div className="bg-black p-8 rounded-2xl border border-white/5">
                  <span className="text-[#8a8a8a] text-sm uppercase tracking-wider mb-4 block">Primary Typeface</span>
                  <div className="text-7xl text-white tracking-tight mb-4">Inter</div>
                  <div className="text-2xl text-[#8a8a8a]">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
                  <div className="text-2xl text-[#8a8a8a] mt-2">a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
                  <div className="text-2xl text-[#8a8a8a] mt-2">0 1 2 3 4 5 6 7 8 9 ! @ # $ % & *</div>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="text-2xl text-white mb-8 border-b border-white/10 pb-4">Color Palette</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <div className="h-32 bg-[#0a0a0a] rounded-t-2xl border border-white/10 border-b-0"></div>
                  <div className="bg-[#1a1a1a] p-4 rounded-b-2xl border border-white/10">
                    <span className="text-white font-medium block">Void Black</span>
                    <span className="text-[#8a8a8a] text-sm font-mono mt-1 block">#0A0A0A</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="h-32 bg-[#e0e0e0] rounded-t-2xl border border-white/10 border-b-0"></div>
                  <div className="bg-[#1a1a1a] p-4 rounded-b-2xl border border-white/10">
                    <span className="text-white font-medium block">Silver Sand</span>
                    <span className="text-[#8a8a8a] text-sm font-mono mt-1 block">#E0E0E0</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="h-32 bg-[#ff3c00] rounded-t-2xl border border-[#ff3c00]/20 border-b-0"></div>
                  <div className="bg-[#1a1a1a] p-4 rounded-b-2xl border border-white/10">
                    <span className="text-white font-medium block">Cinematic Orange</span>
                    <span className="text-[#8a8a8a] text-sm font-mono mt-1 block">#FF3C00</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="h-32 bg-[#8A8A8A] rounded-t-2xl border border-white/10 border-b-0"></div>
                  <div className="bg-[#1a1a1a] p-4 rounded-b-2xl border border-white/10">
                    <span className="text-white font-medium block">Muted Gray</span>
                    <span className="text-[#8a8a8a] text-sm font-mono mt-1 block">#8A8A8A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIGH FIDELITY MOCKUPS (DESKTOP) */}
      <section className="w-full py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl text-white tracking-tight">Desktop Experience</h2>
            <p className="text-[#8a8a8a] mt-4 text-xl">Immersive scroll-based navigation.</p>
          </div>

          <div className="flex flex-col gap-32">
            {/* Desktop Mockup 1 */}
            <div className="w-full aspect-[16/10] bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col group hover:border-white/20 transition-colors duration-500">
               <div className="w-full h-8 bg-[#2a2a2a] flex items-center px-4 gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <div className="ml-4 bg-[#1a1a1a] px-4 py-1 rounded text-xs text-[#8a8a8a] font-mono">birzhanshaimardan.com</div>
              </div>
              <div className="flex-1 bg-black relative flex items-center justify-center">
                  <span className="text-[#8a8a8a] text-lg">📸 [Replace with Project Grid Screenshot]</span>
              </div>
            </div>

            {/* Desktop Mockup 2 */}
            <div className="w-full aspect-[16/10] bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col group hover:border-white/20 transition-colors duration-500">
               <div className="w-full h-8 bg-[#2a2a2a] flex items-center px-4 gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <div className="ml-4 bg-[#1a1a1a] px-4 py-1 rounded text-xs text-[#8a8a8a] font-mono">birzhanshaimardan.com/about</div>
              </div>
              <div className="flex-1 bg-black relative flex items-center justify-center">
                  <span className="text-[#8a8a8a] text-lg">📸 [Replace with About Section Screenshot]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MOBILE RESPONSIVENESS (PHONES) */}
      <section className="w-full py-32 bg-[#111] px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl text-white tracking-tight">Mobile Optimization</h2>
            <p className="text-[#8a8a8a] mt-4 text-xl">A seamless experience across all devices.</p>
          </div>

          <div className="flex justify-center gap-12 md:gap-24 flex-wrap">
            {/* Phone Mockup 1 */}
            <div className="w-[300px] h-[600px] bg-black rounded-[3rem] border-[12px] border-[#2a2a2a] shadow-2xl relative overflow-hidden">
               {/* iPhone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2a2a2a] rounded-b-xl z-20"></div>
               <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]">
                  <span className="text-[#8a8a8a] text-sm px-8 text-center">📸 [Replace with Mobile Home Screenshot]</span>
               </div>
            </div>

            {/* Phone Mockup 2 */}
            <div className="w-[300px] h-[600px] bg-black rounded-[3rem] border-[12px] border-[#2a2a2a] shadow-2xl relative overflow-hidden mt-16">
               {/* iPhone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2a2a2a] rounded-b-xl z-20"></div>
               <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]">
                  <span className="text-[#8a8a8a] text-sm px-8 text-center">📸 [Replace with Mobile Projects Screenshot]</span>
               </div>
            </div>

            {/* Phone Mockup 3 */}
            <div className="w-[300px] h-[600px] bg-black rounded-[3rem] border-[12px] border-[#2a2a2a] shadow-2xl relative overflow-hidden">
               {/* iPhone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2a2a2a] rounded-b-xl z-20"></div>
               <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]">
                  <span className="text-[#8a8a8a] text-sm px-8 text-center">📸 [Replace with Mobile Menu Screenshot]</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUTRO */}
      <section className="w-full py-48 bg-black flex flex-col items-center justify-center text-center px-4 border-t border-white/5">
        <h2 className="text-5xl md:text-7xl text-white tracking-tight mb-8">Thanks for scrolling.</h2>
        <p className="text-[#8a8a8a] text-xl">Let's create something amazing together.</p>
        <div className="mt-12 flex gap-4">
           <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white text-xl">✦</div>
        </div>
      </section>

    </div>
  );
}
