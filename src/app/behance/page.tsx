/* eslint-disable @next/next/no-img-element */

export default function BehancePresentation() {
  return (
    <div className="bg-[#050505] min-h-screen text-[#f5f5f7] font-sans overflow-x-hidden flex flex-col items-center">
      
      {/* Behance Canvas Wrapper */}
      <div className="w-full max-w-[1400px] bg-black mx-auto shadow-2xl relative">
        
        {/* 1. HERO SECTION */}
        <section className="relative w-full pt-32 pb-16 flex flex-col items-center overflow-hidden bg-black">
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="z-10 text-center flex flex-col items-center gap-4 px-4 mt-12 mb-20">
            <h2 className="text-xl md:text-2xl font-medium tracking-wide text-[#86868b] uppercase">Case Study</h2>
            <h1 className="text-6xl md:text-[8rem] font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-[#666] leading-none py-2">
              birzhan.creative
            </h1>
            <p className="text-2xl font-medium tracking-tight text-white mt-6">
              A minimalist digital portfolio.
            </p>
          </div>

          {/* MacBook Pro Mockup (Hero) - Aspect Video for perfect 16:9 fit */}
          <div className="relative w-[90%] max-w-5xl aspect-video bg-black rounded-t-[2rem] p-2 md:p-3 pb-0 shadow-[0_-20px_80px_rgba(255,255,255,0.05)] border-t border-x border-[#333] z-20">
            <div className="relative w-full h-full bg-[#050505] rounded-t-[1.5rem] overflow-hidden border-t border-x border-[#222]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-black rounded-b-[1rem] z-20 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10" />
              </div>
              <video src="/behance/1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </section>

        {/* 2. OVERVIEW SECTION */}
        <section className="w-full py-32 px-6 bg-[#0a0a0a] border-t border-[#111]">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white leading-tight">
              Less is more.<br />
              <span className="text-[#86868b]">Focusing on the work.</span>
            </h2>
            <p className="text-2xl font-medium text-[#86868b] leading-relaxed">
              Moving away from traditional galleries, this platform provides an immersive, cinematic experience that puts visual storytelling, branding, and motion graphics front and center.
            </p>
          </div>
        </section>

        {/* 3. DESKTOP EXPERIENCE */}
        <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-[#111]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">
                Desktop Flow
              </h2>
            </div>

            <div className="flex flex-col gap-24">
              {/* Desktop Mockup 2 */}
              <div className="relative w-full rounded-[2rem] p-3 bg-gradient-to-b from-[#222] to-black shadow-2xl">
                <div className="relative w-full rounded-[1.5rem] overflow-hidden bg-black border border-[#222]">
                   <img src="/behance/2.png" alt="Grid Mockup" className="w-full h-auto object-cover object-top" />
                </div>
              </div>

              {/* Desktop Mockup 3 */}
              <div className="relative w-full rounded-[2rem] p-3 bg-gradient-to-b from-[#222] to-black shadow-2xl">
                <div className="relative w-full rounded-[1.5rem] overflow-hidden bg-black border border-[#222]">
                   <img src="/behance/3.png" alt="About Mockup" className="w-full h-auto object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MOBILE EXPERIENCE */}
        <section className="w-full py-32 px-6 bg-[#0a0a0a] border-t border-[#111]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">
                Mobile Experience
              </h2>
            </div>

            <div className="flex justify-center gap-12 flex-wrap items-center">
              {/* Phone Mockup 1 */}
              <div className="w-[320px] h-[660px] bg-black rounded-[4rem] p-3 shadow-2xl relative border border-[#333] shadow-[0_0_0_2px_#111,0_20px_40px_rgba(0,0,0,0.5)]">
                 <div className="w-full h-full bg-[#050505] rounded-[3.2rem] overflow-hidden relative border border-[#222]">
                   {/* Dynamic Island */}
                   <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20 flex items-center justify-between px-3 shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]">
                      <div className="w-3 h-3 rounded-full bg-[#0a0a0a] border border-white/10" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/5" />
                   </div>
                   <img src="/behance/phone 1.png" alt="Mobile Home" className="w-full h-full object-cover object-top" />
                 </div>
              </div>

              {/* Phone Mockup 2 */}
              <div className="w-[320px] h-[660px] bg-black rounded-[4rem] p-3 shadow-2xl relative border border-[#333] shadow-[0_0_0_2px_#111,0_20px_40px_rgba(0,0,0,0.5)]">
                 <div className="w-full h-full bg-[#050505] rounded-[3.2rem] overflow-hidden relative border border-[#222]">
                   {/* Dynamic Island */}
                   <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20 flex items-center justify-between px-3 shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]">
                      <div className="w-3 h-3 rounded-full bg-[#0a0a0a] border border-white/10" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/5" />
                   </div>
                   <img src="/behance/phone 2.png" alt="Mobile Projects" className="w-full h-full object-cover object-top" />
                 </div>
              </div>

              {/* Phone Mockup 3 */}
              <div className="w-[320px] h-[660px] bg-black rounded-[4rem] p-3 shadow-2xl relative border border-[#333] shadow-[0_0_0_2px_#111,0_20px_40px_rgba(0,0,0,0.5)]">
                 <div className="w-full h-full bg-[#050505] rounded-[3.2rem] overflow-hidden relative border border-[#222]">
                   {/* Dynamic Island */}
                   <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20 flex items-center justify-between px-3 shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]">
                      <div className="w-3 h-3 rounded-full bg-[#0a0a0a] border border-white/10" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/5" />
                   </div>
                   <img src="/behance/phone 3.png" alt="Mobile Menu" className="w-full h-full object-cover object-top" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TYPOGRAPHY & COLORS */}
        <section className="w-full py-32 px-6 bg-black border-t border-[#111]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-white tracking-tight">Typography.</h3>
              <div className="p-10 rounded-[2rem] bg-[#0a0a0a] border border-[#222]">
                <div className="text-8xl font-semibold text-white tracking-tighter mb-4">Inter</div>
                <div className="text-xl text-[#86868b] tracking-wide font-medium leading-relaxed">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-white tracking-tight">Colors.</h3>
              {/* Removed Cinematic Orange, changed to grid-cols-3 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-[1.5rem] bg-[#0a0a0a] border border-[#222] flex flex-col justify-end aspect-square">
                  <span className="text-white font-medium text-sm">Void Black</span>
                  <span className="text-[#86868b] text-xs mt-1 font-medium">#0A0A0A</span>
                </div>
                <div className="p-4 rounded-[1.5rem] bg-[#e0e0e0] border border-[#222] flex flex-col justify-end aspect-square">
                  <span className="text-black font-medium text-sm">Silver Sand</span>
                  <span className="text-[#666] text-xs mt-1 font-medium">#E0E0E0</span>
                </div>
                <div className="p-4 rounded-[1.5rem] bg-[#8A8A8A] border border-[#222] flex flex-col justify-end aspect-square">
                  <span className="text-white font-medium text-sm">Muted Gray</span>
                  <span className="text-[#d0d0d0] text-xs mt-1 font-medium">#8A8A8A</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OUTRO */}
        <section className="w-full py-40 bg-black flex flex-col items-center justify-center text-center px-4 border-t border-[#111]">
          <h2 className="text-5xl md:text-[6rem] font-semibold tracking-tighter text-white mb-8">
            Thank you.
          </h2>
        </section>

      </div>
    </div>
  );
}
