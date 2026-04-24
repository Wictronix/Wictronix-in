"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Code, Megaphone, Lightbulb, Palette } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Technology",
    category: "Engineering",
    tagline: "Scalable Infrastructure & AI",
    description: "Building scalable digital infrastructure and AI-driven products with extreme precision.",
    icon: Code,
    items: ["Web & Mobile Apps", "AI Agents", "SaaS Products", "UI/UX Design"],
    href: "/services/technology",
    details: { speed: "99.9%", uptime: "24/7", stack: "Next.js / AI" }
  },
  {
    id: "02",
    title: "Marketing",
    category: "Growth",
    tagline: "Performance & Brand Velocity",
    description: "Data-led growth strategies that convert intent into revenue through precision targeting.",
    icon: Megaphone,
    items: ["SEO & Organic", "Performance Ads", "Brand Identity", "Content Strategy"],
    href: "/services/marketing",
    details: { reach: "Global", roas: "5.2x", focus: "Conversion" }
  },
  {
    id: "03",
    title: "Design",
    category: "Creative",
    tagline: "High-Fidelity Experiences",
    description: "Crafting interfaces that bridge the gap between technical complexity and user delight.",
    icon: Palette,
    items: ["Product Design", "Design Systems", "Motion Graphics", "3D Visualization"],
    href: "/services/design",
    details: { precision: "Pixel", style: "Minimal", tools: "Figma / Rive" }
  },
  {
    id: "04",
    title: "Consulting",
    category: "Strategy",
    tagline: "Strategic Scale & GTM",
    description: "Strategic direction for market expansion and business scale backed by real-world data.",
    icon: Lightbulb,
    items: ["GTM Strategy", "Business Dev", "Fundraising", "Market Research"],
    href: "/services/consulting",
    details: { equity: "Aligned", exit: "Focused", network: "Global" }
  },
];

const MIN_CARD_WIDTH = 280;
const MIN_CARD_HEIGHT = 240;
const DOCK_GAP = 15;

function ServiceCard({ service, index, progress }: { service: any, index: number, progress: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const [dockedState, setDockedState] = useState(false);
  
  // Custom grouping logic: 1&3 first, then 2&4
  const isGroupA = index === 0 || index === 2;
  const groupStart = isGroupA ? 0 : 0.4; 
  
  // Stagger within groups
  const stagger = (index === 2 || index === 3) ? 0.1 : 0;
  const start = groupStart + stagger;
  const slideEnd = start + 0.2; // Extended slide phase
  const dockPoint = slideEnd + 0.2; // Extended scale/Dock phase
  
  // 2x2 Grid Docking Position (Shifted left by 120px)
  const col = index % 2;
  const row = Math.floor(index / 2);
  const dockedX = (col * (MIN_CARD_WIDTH + DOCK_GAP)) - 120;
  const dockedY = row * (MIN_CARD_HEIGHT + DOCK_GAP) + 35;
  
  const opacity = useTransform(progress, [start, start + 0.05], [0, 1]);
  // X Position: Slides first, then stays at dockedX
  const x = useTransform(progress, [start, slideEnd], [1000, dockedX]);
  // Width scaling: Stays wide during slide, then shrinks to minimal on dockPoint
  const scrollWidth = useTransform(progress, [start, slideEnd, dockPoint], [560, 560, MIN_CARD_WIDTH]);
  
  // Track current scroll width to sync with hover transition
  const [liveScrollWidth, setLiveScrollWidth] = useState(560);
  
  useEffect(() => {
    const unsubscribeScroll = scrollWidth.on("change", (v: number) => {
      setLiveScrollWidth(v);
    });
    
    const unsubscribeDock = progress.on("change", (p: number) => {
      const isNowDocked = p > dockPoint;
      if (isNowDocked !== dockedState) setDockedState(isNowDocked);
    });

    return () => {
      unsubscribeScroll();
      unsubscribeDock();
    };
  }, [progress, dockPoint, dockedState, scrollWidth]);

  const showFullDetails = !dockedState || isHovered;

  // Fluid opacity transforms for the scroll-driven \"morph\" phase
  // These only apply when the card is NOT hovered (when scroll drives the state)
  const expandedOpacity = useTransform(progress, [slideEnd, dockPoint - 0.05], [1, 0]);
  const minimalOpacity = useTransform(progress, [slideEnd + 0.05, dockPoint], [0, 1]);

  // Persist high z-index during the 0.8s closing animation
  // Hovered = 200 (Highest)
  // Closing = 100 (Middle)
  // Idle = 10 + index (Base)
  const [activeZ, setActiveZ] = useState(10 + index);
  
  useEffect(() => {
    if (isHovered) {
      setActiveZ(200);
    } else {
      setActiveZ(100);
      const timer = setTimeout(() => {
        setActiveZ(10 + index);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isHovered, index]);

  return (
    <motion.div
      style={{ 
        opacity, 
        x, 
        y: dockedY,
        zIndex: activeZ
      }}
      className="absolute top-0 left-0 pointer-events-none"
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        layout
        initial={false}
        animate={{
          backgroundColor: isHovered ? "var(--color-card)" : "var(--foreground)",
          color: isHovered ? "var(--foreground)" : "var(--color-background)",
          scale: isHovered ? 1.02 : 1,
          height: MIN_CARD_HEIGHT,
          width: isHovered ? 460 : liveScrollWidth,
          rotateY: isHovered ? 2 : 0,
          rotateX: isHovered ? -1 : 0,
        }}
        transition={{ 
          backgroundColor: { duration: isHovered ? 0 : 0.6 },
          color: { duration: isHovered ? 0 : 0.6 },
          default: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        className="w-full h-full rounded-[24px] p-5 md:p-6 shadow-[10px_20px_40px_-15px_rgba(0,0,0,0.15),_0_0_1px_rgba(0,0,0,0.1)] relative overflow-hidden cursor-pointer border border-border/10 pointer-events-auto flex flex-col"
      >
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            className="absolute inset-0 pointer-events-none bg-[grid-linear-gradient(to_right,#000_1px,transparent_1px),grid-linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"
          />
        )}

        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Header Row */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[7px] font-mono opacity-40 tracking-widest">
                  Engine // 0{index + 1}
                </span>
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
              </div>
              <motion.h3 
                layout="position"
                className={`${showFullDetails ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"} font-display font-bold tracking-tighter leading-none`}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                layout="position"
                className={`${showFullDetails ? "text-xs md:text-sm" : "text-[11px] md:text-xs"} opacity-70 font-medium leading-tight mt-1`}
              >
                {service.tagline}
              </motion.p>
              
              {/* Minimal \"Building\" line - Smooth Morph */}
              <motion.p 
                style={{ opacity: isHovered ? 0 : minimalOpacity }}
                className="text-[12px] font-mono mt-4 tracking-tighter leading-tight max-w-[240px] opacity-70"
              >
                {service.description}
              </motion.p>
            </div>
            
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              className="w-6 h-6 rounded-none flex items-center justify-center border border-current opacity-20 flex-shrink-0"
            >
              <ArrowRight className="w-3 h-3" />
            </motion.div>
          </div>

          {/* Expanded Content Area (Horizontal Layout) - Smooth Morph */}
          <motion.div
            layout
            style={{ opacity: isHovered ? 1 : expandedOpacity }}
            className="flex gap-8 mt-4 items-end"
          >
            {/* Description Column */}
            <div className="flex-1 min-w-0">
              <p className="text-[10px] md:text-xs opacity-50 leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </div>

            {/* Items Column */}
            <div className="flex-1 grid grid-cols-1 gap-1.5 border-l border-current/10 pl-6">
              {service.items.slice(0, 4).map((item: string) => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-accent flex-shrink-0" />
                  <span className="text-[8px] md:text-[9px] font-mono font-bold tracking-wider opacity-60 truncate">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Technical Mini-Footer */}
            <div className="flex-shrink-0 flex flex-col gap-2 border-l border-current/10 pl-6">
              <div className="flex gap-4">
                {Object.entries(service.details).slice(0, 2).map(([key, value]: [string, any]) => (
                  <div key={key}>
                    <p className="text-[6px] font-mono opacity-40 uppercase mb-0.5">{key}</p>
                    <p className="text-[8px] font-mono font-bold capitalize">{value}</p>
                  </div>
                ))}
              </div>
              <Link 
                href={service.href}
                className="text-[9px] font-mono font-bold text-accent tracking-tighter mt-1 block"
              >
                Initialize _
              </Link>
            </div>
          </motion.div>

          {/* Minimal Mini-Footer - Smooth Morph */}
          <motion.div 
            style={{ opacity: isHovered ? 0 : minimalOpacity }}
            className="flex justify-between items-center pt-4 border-t border-current/5 mt-auto"
          >
            <span className="text-[7px] font-mono opacity-20 tracking-[0.3em]">
              System Ready // L_0{index + 1}
            </span>
            <div className="flex space-x-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-[2px] h-[2px] bg-current opacity-10" />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="services" className="relative min-h-[250vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden relative">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
            
            {/* Left: Sticky Info */}
            <div className="max-w-md relative z-20 flex-shrink-0">
              <span className="text-accent text-[10px] font-mono font-bold tracking-[0.5em] uppercase mb-8 block">
                Deployment Phase
              </span>
              
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.85] tracking-tighter mb-10">
                The Core <br />
                <span className="text-accent">Stack.</span>
              </h2>
              
              <p className="text-muted text-base font-medium leading-relaxed max-w-sm mb-16 opacity-80">
                Four precision-engineered engines working in parallel to ensure your product survives the gap between idea and impact.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex-1 h-[2px] bg-border relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-accent"
                    style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                  />
                </div>
                <span className="font-mono text-[10px] text-muted tracking-widest font-bold">L_04</span>
              </div>
            </div>

            {/* Right: Sequential Stacking Area (2x2 Grid) */}
            <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-start pb-20">
              <div className="relative w-[570px] h-full">
                {services.map((service, i) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    index={i} 
                    progress={smoothProgress} 
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
