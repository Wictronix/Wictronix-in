"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const words = ["performance", "intelligence", "ecosystems"];

const carouselItems = [
  {
    pill: "Execution Layer",
    title: "Bespoke Digital Solutions for Scale.",
    content: "We bridge the gap between ambitious ideas and technical reality.",
  },
  {
    pill: "Growth Engine",
    title: "Performance Based Indexing.",
    content: "Our squads are indexed to your growth, not just your billable hours.",
  },
  {
    pill: "Strategic Partner",
    title: "Full-Stack Enterprise Strategy.",
    content: "Operating as an embedded unit to execute across all domains.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Map carousel items to positions based on current index
  const getPosition = (i: number) => {
    const diff = (i - index + carouselItems.length) % carouselItems.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <section className="relative h-screen bg-white flex flex-col items-center justify-between overflow-hidden pt-32">
      {/* Header Text Overlay */}
      <div className="text-center z-20 mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-bold uppercase tracking-[0.5em] text-muted/60 mb-4"
        >
          we build
        </motion.p>
        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-foreground"
            >
              {words[index]}<span className="text-accent">.</span>
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Main Image Container - Positioned Downward */}
      <div className="relative w-[94%] aspect-video rounded-t-[40px] md:rounded-t-[60px] overflow-hidden z-10 shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.1)] border-x border-t border-border/50">
        <img
          src="/images/premium_tech_bg.png?v=1.1"
          alt="Premium Tech Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        {/* Carousel Cards Stack */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="relative flex items-center justify-center w-full h-full">
            {carouselItems.map((item, i) => {
              const pos = getPosition(i);
              return (
                <motion.div
                  key={i}
                  animate={{
                    x: pos === "center" ? 0 : pos === "left" ? -320 : 320,
                    scale: pos === "center" ? 1 : 0.9,
                    opacity: pos === "center" ? 1 : 0.5,
                    zIndex: pos === "center" ? 20 : 10,
                    rotateY: pos === "center" ? 0 : pos === "left" ? 15 : -15,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute bg-white/10 backdrop-blur-3xl p-8 md:p-10 rounded-[32px] shadow-2xl text-center max-w-sm border border-white/20"
                >
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-6 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span>{item.pill}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-tight tracking-tighter">
                    {item.title}
                  </h2>
                  <p className="text-white/60 font-medium text-sm md:text-base leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-accent/[0.02] rounded-full" />
      </div>
    </section>
  );
}
