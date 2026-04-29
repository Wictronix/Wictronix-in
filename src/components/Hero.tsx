"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const words = ["performance", "intelligence", "ecosystems"];

const carouselItems = [
  {
    pill: "For founders, teams, and enterprises",
    title: "The Execution Layer Between \nYour Ideas and Growth.",
    content: "In the age of AI, everyone has access to the same tools. The gap isn't capability it's the ability to integrate, direct, and execute across domains without dropping the ball. WictroniX closes that gap.",
    ctaPrimary: "Start a Project →",
    hrefPrimary: "/contact",
    ctaSecondary: "See Our Work →",
    hrefSecondary: "/work"
  },
  {
    pill: "Proof of work",
    title: "14,000+ Organic Clicks. \n60 Days. 80% AI Search Share.",
    content: "We don't show credentials. We show outcomes. Browse our work-every project leads with a dominant metric.",
    ctaPrimary: "Explore Our Work →",
    hrefPrimary: "/work",
  },
  {
    pill: "For enterprises & MNCs",
    title: "Your Embedded Business \nDevelopment Unit.",
    content: "A cross-functional team tech, marketing, strategy operating inside your growth objectives with founder-level accountability and agency-level speed.",
    ctaPrimary: "Request a Team Audit →",
    hrefPrimary: "/contact",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Map carousel items to positions based on current index
  const getPosition = (i: number) => {
    const diff = (i - index + carouselItems.length) % carouselItems.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <section className="relative h-screen bg-white flex flex-col items-center justify-start overflow-hidden pt-24 md:pt-32">
      {/* Header Text Overlay */}
      <div className="text-center z-20 mb-4 md:mb-12 px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-muted/60 mb-2 md:mb-4"
        >
          we build
        </motion.p>
        <div className="h-12 md:h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-[2.5rem] sm:text-5xl md:text-8xl font-display font-bold tracking-tighter text-foreground"
            >
              {words[index]}<span className="text-accent">.</span>
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Main Image Container - Positioned Downward */}
      <div className="relative w-[94%] h-[540px] md:h-auto md:aspect-video rounded-t-[30px] md:rounded-t-[60px] overflow-hidden z-10 shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.1)] border-x border-t border-border/50">
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
              
              // Mobile stacking logic
              const xOffset = isMobile ? 0 : 280;
              const yOffset = isMobile ? (pos === "center" ? 0 : pos === "left" ? -20 : 20) : 0;
              const scale = isMobile ? (pos === "center" ? 1 : 0.85) : (pos === "center" ? 1 : 0.85);
              const rotateX = isMobile ? (pos === "center" ? 0 : pos === "left" ? -10 : 10) : 0;
              const rotateY = isMobile ? 0 : (pos === "center" ? 0 : pos === "left" ? 15 : -15);

              return (
                <motion.div
                  key={i}
                  animate={{
                    x: pos === "center" ? 0 : pos === "left" ? -xOffset : xOffset,
                    y: yOffset,
                    scale: scale,
                    opacity: pos === "center" ? 1 : 0.6,
                    zIndex: pos === "center" ? 20 : 10,
                    rotateX: rotateX,
                    rotateY: rotateY,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute bg-white p-5 md:p-6 rounded-[20px] shadow-2xl text-center w-[80vw] max-w-[300px] md:w-[340px] h-[300px] md:h-[340px] flex flex-col items-center justify-center border border-black/5"
                >
                  <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-black/5 text-black text-[7px] font-bold tracking-[0.1em] mb-3 border border-black/10">
                    <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                    <span>{item.pill}</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 leading-tight tracking-tighter whitespace-pre-line">
                    {item.title}
                  </h2>
                  <p className="text-muted font-medium text-[11px] md:text-[12px] leading-snug max-w-[240px] md:max-w-[260px]">
                    {item.content}
                  </p>

                  {item.ctaPrimary && (
                    <div className="flex items-center justify-center gap-2 mt-5">
                      <Link href={item.hrefPrimary || "#"}>
                        <button className="px-4 py-2 bg-accent text-white rounded-full font-bold text-[9px] tracking-wider transition-all hover:bg-accent-dark hover:scale-105 active:scale-95 shadow-lg shadow-accent/20">
                          {item.ctaPrimary}
                        </button>
                      </Link>
                      {item.ctaSecondary && (
                        <Link href={item.hrefSecondary || "#"}>
                          <button className="px-4 py-2 bg-black/5 text-black rounded-full font-bold text-[9px] tracking-wider border border-black/5 transition-all hover:bg-black/10 hover:border-black/10">
                            {item.ctaSecondary}
                          </button>
                        </Link>
                      )}
                    </div>
                  )}
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
