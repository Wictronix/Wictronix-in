"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "project" | "hover">("default");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the outer rings
  const springConfig = { damping: 25, stiffness: 250 };
  const ring1X = useSpring(cursorX, springConfig);
  const ring1Y = useSpring(cursorY, springConfig);
  

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Detect cursor type from hovered element
      const target = e.target as HTMLElement;
      const isProject = target.closest('[data-cursor="project"]');
      const isHoverable = target.closest('a, button, [role="button"]');

      if (isProject) {
        setCursorType("project");
      } else if (isHoverable) {
        setCursorType("hover");
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
          width: cursorType === "project" ? 80 : cursorType === "hover" ? 56 : 32,
          height: cursorType === "project" ? 80 : cursorType === "hover" ? 56 : 32,
          backgroundColor: cursorType === "project" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderColor: cursorType === "project" ? "rgba(255, 255, 255, 1)" : cursorType === "hover" ? "var(--color-accent)" : "rgba(64, 64, 64, 0.8)",
          borderWidth: cursorType === "project" ? 0 : cursorType === "hover" ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="rounded-full absolute top-0 left-0 flex items-center justify-center shadow-xl"
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
