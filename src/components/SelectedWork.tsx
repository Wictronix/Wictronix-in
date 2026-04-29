"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/data/workData";

export default function SelectedWork() {
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

  // Header transforms
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [isMobile ? 1.4 : 2, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [isMobile ? "10vh" : "20vh", "0vh"]);
  // Project list transforms
  const listY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  // Only show first 4 projects on homepage
  const selectedProjects = projects.slice(0, 4);

  return (
    <section ref={containerRef} id="work" className="relative py-20 md:py-32 bg-white min-h-[120vh]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8">
          <motion.div 
            style={{ scale: headerScale, y: headerY }}
            className="max-w-2xl origin-left"
          >
            <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.2em] mb-4 md:mb-6 inline-block uppercase">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-bold leading-[0.95] tracking-tighter text-foreground">
              Built. Shipped. <br />
              <span className="text-accent">Scaled.</span>
            </h2>
          </motion.div>
          
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            style={{ y: listY }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 lg:gap-48"
          >
            {selectedProjects.map((project, i) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                data-cursor="project"
                className={`group cursor-pointer block ${i % 2 !== 0 ? "md:translate-y-32" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-muted/5 mb-6 border border-border transition-all duration-500 group-hover:border-accent/40">
                  <Image 
                    src={project.image} 
                    alt={project.outcome}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700"
                    priority={i < 2}
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] md:text-[11px] font-bold text-accent uppercase tracking-[0.1em]">
                      {project.metric} {project.metricLabel}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[7px] font-bold tracking-widest text-muted/60 bg-muted/5 border border-border/50 px-1.5 py-0.5 rounded-sm uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-tighter leading-tight mt-1">
                    {project.outcome}
                  </h3>
                </div>
              </Link>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-32 md:mt-48 pb-12"
          >
            <Link 
              href="/work" 
              className="group flex items-center space-x-3 bg-foreground text-background px-8 py-4 md:px-10 md:py-5 rounded-full font-bold hover:bg-accent transition-all duration-500 shadow-xl shadow-black/5"
            >
              <span className="text-[11px] md:text-sm uppercase tracking-[0.1em]">Explore All Case Studies</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
