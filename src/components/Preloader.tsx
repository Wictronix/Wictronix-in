"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    // Start flip after 0.5 seconds
    const t1 = setTimeout(() => setIsFlipped(true), 500);
    
    // Hide preloader after 1.4 seconds total
    const t2 = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
      window.scrollTo(0, 0);
    }, 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[10000] bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-full h-full flex items-center justify-center overflow-hidden">
        {/* 3D Container */}
        <div className="relative perspective-[1500px]">
          <motion.div
            initial={{ rotateY: 0, scale: 0.8, opacity: 0 }}
            animate={{ 
              rotateY: isFlipped ? 180 : 0,
              scale: isFlipped ? 1 : [0.8, 1.05, 1],
              opacity: 1
            }}
            transition={{ 
              rotateY: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
              scale: { duration: 0.5, ease: "easeOut" },
              opacity: { duration: 0.4 }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
          >
            {/* Front Face: Circle Logo */}
            <div 
              style={{ 
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden"
              }}
              className="absolute inset-0 flex items-center justify-center p-8"
            >
              <div className="relative">
                <img 
                  src="/images/wx.png" 
                  alt="WictroniX Circle" 
                  className="w-32 h-32 md:w-48 md:h-48 object-contain"
                />
                <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full -z-10 animate-pulse" />
              </div>
            </div>

            {/* Back Face: Name Logo */}
            <div 
              style={{ 
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)" 
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative group">
                <img 
                  src="/main_logo.svg" 
                  alt="WictroniX" 
                  className="h-10 md:h-12 w-auto" 
                />
                {/* Cinematic Shine Effect on reveal */}
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={isFlipped ? { x: "100%" } : {}}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Background Elements */}
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-accent/[0.02] blur-[120px] rounded-full pointer-events-none"
      />

      {/* Film Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </motion.div>
  );
}
