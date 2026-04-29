"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "project">("default");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the outer rings
  const springConfig = { damping: 25, stiffness: 250 };
  const ring1X = useSpring(cursorX, springConfig);
  const ring1Y = useSpring(cursorY, springConfig);
  
  const ringMiddleX = useSpring(cursorX, { damping: 28, stiffness: 200 });
  const ringMiddleY = useSpring(cursorY, { damping: 28, stiffness: 200 });
  
  const ring2X = useSpring(cursorX, { damping: 30, stiffness: 150 });
  const ring2Y = useSpring(cursorY, { damping: 30, stiffness: 150 });

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Detect cursor type from hovered element
      const target = e.target as HTMLElement;
      const projectCard = target.closest('[data-cursor="project"]');
      if (projectCard) {
        setCursorType("project");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Dynamic Cursor Shape (Outer Ring) */}
      <motion.div
        style={{
          translateX: ring1X,
          translateY: ring1Y,
          x: "-50%",
          y: "-50%",
        }}
        initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
        animate={{
          width: cursorType === "project" ? 80 : 32,
          height: cursorType === "project" ? 80 : 32,
          backgroundColor: cursorType === "project" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderColor: cursorType === "project" ? "rgba(255, 255, 255, 1)" : "rgba(64, 64, 64, 0.8)",
          borderWidth: cursorType === "project" ? 0 : 1,
        }}
        className="rounded-full absolute top-0 left-0 flex items-center justify-center shadow-xl transition-colors duration-300"
      >
        <AnimatePresence>
          {cursorType === "project" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-bold uppercase tracking-widest text-black"
            >
              Explore
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Middle Lagging Ring */}
      <AnimatePresence>
        {cursorType === "default" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              translateX: ringMiddleX,
              translateY: ringMiddleY,
              x: "-50%",
              y: "-50%",
            }}
            className="w-8 h-8 border border-neutral-500/40 rounded-full absolute top-0 left-0"
          />
        )}
      </AnimatePresence>

      {/* Outer Lagging Ring */}
      <AnimatePresence>
        {cursorType === "default" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              translateX: ring2X,
              translateY: ring2Y,
              x: "-50%",
              y: "-50%",
            }}
            className="w-8 h-8 border border-neutral-400/60 rounded-full absolute top-0 left-0"
          />
        )}
      </AnimatePresence>
      
      {/* Inner Blue Dot */}
      <AnimatePresence>
        {cursorType === "default" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              translateX: cursorX,
              translateY: cursorY,
              x: "-50%",
              y: "-50%",
            }}
            className="w-1.5 h-1.5 bg-accent rounded-full absolute top-0 left-0"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
