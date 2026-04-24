"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const philosophy = [
  {
    id: "integrate",
    title: "INTEGRATE",
    body: "The gap isn't tools—it's integration.",
    size: "w-48 h-48",
    style: { left: 'calc(40% - 50px)', top: '0', transform: 'translateX(-50%)' },
  },
  {
    id: "direct",
    title: "DIRECT",
    body: "Strategic direction for outcomes.",
    size: "w-48 h-48",
    style: { left: 'calc(40% - 146px)', top: '166.27px', transform: 'translateX(-50%)' },
  },
  {
    id: "execute",
    title: "EXECUTE",
    body: "We do the work that AI can't finish.",
    size: "w-48 h-48",
    style: { left: 'calc(40% + 46px)', top: '166.27px', transform: 'translateX(-50%)' },
  },
];

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
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
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Title Section */}
            <motion.div 
              style={{ x: titleX, opacity: titleOpacity }}
              className="relative"
            >
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-8 inline-block">
                Our Philosophy
              </span>
              <h2 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
                Execution is <br />
                <span className="text-accent">Everything.</span>
              </h2>
            </motion.div>

            {/* Right: Precise Triangle Bubble Cluster */}
            <div className="relative h-[450px] w-full flex items-center justify-center">
              <div className="relative w-full max-w-[400px] h-[360px]">
                {philosophy.map((item, i) => {
                  const isIntegrate = item.id === "integrate";
                  
                  return (
                    <motion.div
                      key={item.title}
                      style={{
                        ...item.style,
                        scale: isIntegrate ? integrateScale : othersScale,
                        opacity: isIntegrate ? 1 : othersOpacity,
                      }}
                      className={`absolute ${item.size} rounded-full bg-accent shadow-[0_15px_60px_rgba(0,82,255,0.3)] flex flex-col items-center justify-center p-6 text-center z-10 border border-white/10`}
                    >
                      <motion.div style={{ opacity: contentOpacity }} className="flex flex-col items-center">
                        <span className="text-white text-2xl font-display font-bold opacity-20 absolute top-6">
                          0{i + 1}
                        </span>
                        <h3 className="text-lg font-display font-bold tracking-tighter mb-1 text-white">
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-white/80 font-medium leading-tight px-2">
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
