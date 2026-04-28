"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    name: "Aura AI",
    metric: "₹40L pipeline in 60 days",
    tags: ["B2B SaaS", "Marketing"],
    image: "/images/project-1.png",
  },
  {
    name: "Flux Commerce",
    metric: "3x conversion rate in 45 days",
    tags: ["E-comm", "CRO"],
    image: "/images/project-2.png",
  },
  {
    name: "Zenith Fintech",
    metric: "120% MoM growth for 6 months",
    tags: ["Fintech", "GTM"],
    image: "/images/project-3.png",
  },
  {
    name: "Pulse Health",
    metric: "Shipped MVP in 14 days",
    tags: ["HealthTech", "Web"],
    image: "/images/project-4.jpg",
  },
];

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

  return (
    <section ref={containerRef} id="work" className="relative py-20 md:py-32 bg-white min-h-[120vh]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8">
          <motion.div 
            style={{ scale: headerScale, y: headerY }}
            className="max-w-2xl origin-left"
          >
            <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.2em] mb-4 md:mb-6 inline-block">
              Selected Projects
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-bold leading-[0.95] tracking-tighter">
              Built. Shipped. <br />
              <span className="text-accent">Scaled.</span>
            </h2>
          </motion.div>
          
          <motion.div>
            <Link 
              href="/work" 
              className="group flex items-center space-x-3 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-accent transition-all duration-500"
            >
              <span>View All Work</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            style={{ y: listY }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 lg:gap-48"
          >
            {projects.map((project, i) => (
              <div
                key={i}
                data-cursor="project"
                className={`group cursor-pointer ${i % 2 !== 0 ? "md:translate-y-32" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-muted/5 mb-6 border border-border">
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                    priority={i < 2}
                  />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-accent tracking-tighter">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold tracking-widest text-muted bg-muted/5 border border-border px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Second Row: Black Tagline */}
                <p className="text-foreground font-display font-bold text-sm md:text-base leading-tight">
                  {project.metric}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
