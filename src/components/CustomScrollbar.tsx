'use client';

import { useLenis } from 'lenis/react';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomScrollbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [vh, setVh] = useState(0);
  const scrollY = useMotionValue(0);
  
  // High-response spring to match Lenis's smooth feel without adding lag
  const smoothY = useSpring(scrollY, {
    stiffness: 1000,
    damping: 100,
    mass: 0.1
  });

  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh();
    window.addEventListener('resize', updateVh);
    return () => window.removeEventListener('resize', updateVh);
  }, []);

  useLenis(({ progress }) => {
    // 140px accounts for 100px thumb height + 40px top/bottom margins
    const range = vh - 140;
    scrollY.set(progress * range);
  });

  return (
    <div 
      className="fixed right-0 top-0 bottom-0 z-[9999] w-3 pointer-events-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Track */}
      <div className="absolute right-[5px] top-4 bottom-4 w-[1px] bg-black/5" />
      
      {/* Thumb Wrapper */}
      <div className="absolute top-4 bottom-4 right-0 left-0 pointer-events-auto">
        <motion.div 
          className="absolute right-[4px] rounded-full"
          style={{ 
            height: '100px',
            y: smoothY,
            boxShadow: '0 0 20px rgba(0,82,255,0.4)',
          }}
          animate={{ 
            width: isHovered ? '4px' : '2px',
            backgroundColor: isHovered ? 'rgba(0,82,255,1)' : 'rgba(0,82,255,0.7)',
          }}
        />
      </div>
    </div>
  );
}
