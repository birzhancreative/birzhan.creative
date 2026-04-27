"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const textOpacity = useTransform(scrollY, [0, 100, 200, 300], [1, 0.5, 0.5, 0]);

  // Video Player State
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Sync state when modal opens
  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      // Ensure it starts playing when modal opens if we want it to
      videoRef.current.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    } else if (!isModalOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isModalOpen]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.log(err));
      } else {
        videoRef.current.requestFullscreen().catch(err => console.log(err));
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const percentage = clickPosition / rect.width;
      const newTime = percentage * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const m = Math.floor(timeInSeconds / 60);
    const s = Math.floor(timeInSeconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* 
        PURE PARALLAX DROWN EFFECT:
        The video container is fixed to the viewport background.
        The spacer below pushes all subsequent content down by 100vh.
        When the user scrolls, the next section naturally slides up over this fixed video.
      */}
    <div className="relative w-full h-[150vh] z-0">
      <div className="sticky top-0 w-full h-screen pointer-events-auto bg-black overflow-hidden">
        
        {/* Text Layer: Always visible initially, fades out as you scroll down */}
        <div className="absolute bottom-10 left-6 md:left-10 md:bottom-12 z-20 pointer-events-none mix-blend-difference">
          <motion.div style={{ opacity: textOpacity }}>
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              Birzhan Shaimardan
            </h1>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#8A8A8A] leading-[1.1]">
              Your Designer
            </h2>
          </motion.div>
        </div>

        {/* Video Area (Uses the global CustomCursor for PLAY) */}
        <div 
          className="absolute inset-0 w-full h-full cursor-none z-10"
          data-cursor="play"
          onClick={() => setIsModalOpen(true)}
        >
          <video
            src="/who am i.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80 pointer-events-none" 
          />
        </div>
      </div>
    </div>

      {/* Custom Fullscreen Video Player Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black cursor-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-cursor="close"
            onClick={() => {
              setIsModalOpen(false);
              if (videoRef.current) videoRef.current.pause();
            }}
          >
            {/* Fullscreen Video Area */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <video
                ref={videoRef}
                src="/who am i.mp4"
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                playsInline
              />
            </div>

            {/* Custom Controls Bar */}
            <div 
              className="absolute bottom-0 w-full p-8 md:p-12 flex flex-col gap-6 z-[110] bg-gradient-to-t from-black/80 to-transparent cursor-auto"
              data-cursor="default"
              onClick={(e) => e.stopPropagation()} // Prevents the click from closing the modal
            >
               {/* Progress Bar */}
               <div 
                 className="w-full h-1 md:h-[2px] bg-white/20 rounded-full overflow-hidden cursor-pointer relative hover:h-2 transition-all"
                 onClick={handleSeek}
               >
                 <div 
                   className="h-full bg-white absolute top-0 left-0 transition-all duration-100 ease-linear"
                   style={{ width: `${progressPercentage}%` }}
                 ></div>
               </div>
               
               {/* Controls */}
               <div className="flex items-center justify-between text-white text-[10px] font-bold tracking-widest uppercase mt-2">
                  <div className="flex items-center gap-8">
                     <button 
                       className="hover:text-gray-400 flex items-center gap-2 transition-colors" 
                       onClick={togglePlay}
                     >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current"/> : <Play className="w-4 h-4 fill-current"/>}
                        {isPlaying ? "Pause" : "Play"}
                     </button>
                     <button 
                       className="hover:text-gray-400 flex items-center gap-2 transition-colors"
                       onClick={toggleMute}
                     >
                       {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />} 
                       {isMuted ? "Unmute" : "Mute"}
                     </button>
                  </div>
                  <div className="flex items-center gap-8">
                     <span className="text-[#8A8A8A] min-w-[80px] text-right">
                       {formatTime(currentTime)} / {formatTime(duration)}
                     </span>
                     <button 
                       className="hover:text-gray-400 flex items-center gap-2 transition-colors"
                       onClick={toggleFullscreen}
                     >
                        Fullscreen <Maximize className="w-4 h-4" />
                     </button>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
