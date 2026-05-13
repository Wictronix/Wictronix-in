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
    offset: ["start end", "end start"],
  });

  // Transforms for the "Integrate" bubble
  const integrateScale = useTransform(scrollYProgress, [0.1, 0.4], isMobile ? [1.8, 1] : [2.2, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  
  // Transforms for other bubbles
  const othersOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const othersScale = useTransform(scrollYProgress, [0.2, 0.4], [0.6, 1]);

  // Transforms for Title
  const titleX = useTransform(scrollYProgress, [0.2, 0.4], [-60, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section ref={containerRef} id="philosophy" className="relative bg-white pt-40 pb-20 md:pt-64 md:pb-32">
      <div className="relative flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Title Section */}
            <motion.div 
              style={{ x: isMobile ? 0 : titleX, opacity: titleOpacity }}
              className="relative text-center lg:text-left -mt-10 md:-mt-32"
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
            <div className="relative h-[450px] md:h-[450px] w-full flex items-center justify-center">
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
                        scale: isMobile ? 1 : (isIntegrate ? integrateScale : othersScale),
                        opacity: isMobile ? 1 : (isIntegrate ? 1 : othersOpacity),
                        willChange: "transform, opacity",
                      }}
                      className={`absolute ${isMobile ? "w-40 h-40" : item.size} rounded-full bg-accent shadow-[0_15px_60px_rgba(0,82,255,0.3)] flex flex-col items-center justify-center p-4 md:p-6 text-center z-10 border border-white/10`}
                    >
                      <motion.div style={{ opacity: contentOpacity }} className="flex flex-col items-center">
                        <span className={`text-white ${isMobile ? "text-xl" : "text-2xl"} font-display font-bold opacity-20 absolute top-2 md:top-6`}>
                          0{i + 1}
                        </span>
                        <h3 className={`${isMobile ? "text-lg" : "text-lg"} font-display font-bold tracking-tighter mb-0.5 md:mb-1 text-white`}>
                          {item.title}
                        </h3>
                        <p className="text-[9px] md:text-[10px] text-white/80 font-medium leading-tight px-1 md:px-2">
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

      <div className="mt-20 md:mt-32 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground py-24 md:py-40 flex flex-col items-center justify-center text-center relative rounded-[30px] md:rounded-[60px] mx-auto max-w-[1400px] shadow-[0_0_120px_-20px_rgba(0,82,255,0.3)] border border-white/5"
        >
          <p className="text-xl md:text-5xl font-display font-bold leading-tight tracking-tight max-w-4xl text-background px-6">
            "We don't just plan. We build the <span className="text-accent">engines of growth</span> and run them for you."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
