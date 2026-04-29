"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const philosophy = [
  {
    id: "integrate",
    title: "Integrate",
    body: "The gap isn't tools-it's integration.",
    size: "w-48 h-48",
    style: { left: 'calc(40% - 50px)', top: '0', transform: 'translateX(-50%)' },
  },
  {
    id: "direct",
    title: "Direct",
    body: "Strategic direction for outcomes.",
    size: "w-48 h-48",
    style: { left: 'calc(40% - 146px)', top: '166.27px', transform: 'translateX(-50%)' },
  },
  {
    id: "execute",
    title: "Execute",
    body: "We do the work that AI can't finish.",
    size: "w-48 h-48",
    style: { left: 'calc(40% + 46px)', top: '166.27px', transform: 'translateX(-50%)' },
  },
];

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Transforms for the "Integrate" bubble
  const integrateScale = useTransform(scrollYProgress, [0.1, 0.8], [2.5, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  
  // Transforms for other bubbles
  const othersOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const othersScale = useTransform(scrollYProgress, [0.6, 0.9], [0.5, 1]);

  // Transforms for Title
  const titleX = useTransform(scrollYProgress, [0.5, 0.9], [-100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);

  return (
    <section ref={containerRef} id="philosophy" className="relative min-h-[150vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Title Section */}
            <motion.div 
              style={{ x: isMobile ? 0 : titleX, opacity: titleOpacity }}
              className="relative text-center lg:text-left"
            >
              <span className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] mb-4 md:mb-8 inline-block">
                Our Philosophy
              </span>
              <h2 className="text-[2.75rem] md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
                Execution is <br />
                <span className="text-accent">Everything.</span>
              </h2>
            </motion.div>

            {/* Right: Precise Triangle Bubble Cluster */}
            <div className="relative h-[400px] md:h-[450px] w-full flex items-center justify-center">
              <div className={`relative w-full max-w-[400px] h-full ${isMobile ? "flex flex-col items-center justify-center gap-6" : ""}`}>
                {philosophy.map((item, i) => {
                  const isIntegrate = item.id === "integrate";
                  
                  const mobileStyle = isMobile ? {
                    position: 'relative' as const,
                    left: 'auto',
                    top: 'auto',
                    transform: 'none',
                  } : item.style;

                  return (
                    <motion.div
                      key={item.title}
                      style={{
                        ...mobileStyle,
                        scale: isIntegrate ? integrateScale : othersScale,
                        opacity: isIntegrate ? 1 : othersOpacity,
                      }}
                      className={`absolute ${isMobile ? "w-32 h-32" : item.size} rounded-full bg-accent shadow-[0_15px_60px_rgba(0,82,255,0.3)] flex flex-col items-center justify-center p-4 md:p-6 text-center z-10 border border-white/10`}
                    >
                      <motion.div style={{ opacity: contentOpacity }} className="flex flex-col items-center">
                        <span className={`text-white ${isMobile ? "text-xl" : "text-2xl"} font-display font-bold opacity-20 absolute top-2 md:top-6`}>
                          0{i + 1}
                        </span>
                        <h3 className={`${isMobile ? "text-base" : "text-lg"} font-display font-bold tracking-tighter mb-0.5 md:mb-1 text-white`}>
                          {item.title}
                        </h3>
                        <p className="text-[8px] md:text-[10px] text-white/80 font-medium leading-tight px-1 md:px-2">
                          {item.body}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote section - 80% Viewport Height */}
      <div className="container mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-[80vh] flex flex-col items-center justify-center rounded-[40px] bg-foreground text-background text-center relative overflow-hidden px-10 md:px-20"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
          <p className="text-xl md:text-3xl font-display font-medium leading-tight tracking-tight max-w-4xl relative z-10 opacity-90">
            "We don't just plan. We build the <span className="text-accent">engines of growth</span> and run them for you."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
