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
    items: [
      "Full-Stack Web Applications",
      "Mobile Applications (iOS + Android)",
      "ERP/CRM Systems",
      "AI Agents",
      "Custom SaaS Products",
      "UI/UX Design"
    ],
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
    items: [
      "SEO & Search Optimization",
      "Social Media Marketing",
      "Brand Identity",
      "Performance Marketing"
    ],
    href: "/services/marketing",
    details: { reach: "Global", roas: "5.2x", focus: "Conversion" }
  },
  {
    id: "03",
    title: "Consulting",
    category: "Strategy",
    tagline: "Strategic Scale & GTM",
    description: "Strategic direction for market expansion and business scale backed by real-world data.",
    icon: Lightbulb,
    items: [
      "Tech & Business Consulting",
      "Fundraising Strategy",
      "GTM Strategy",
      "Business Development"
    ],
    href: "/services/consulting",
    details: { equity: "Aligned", exit: "Focused", network: "Global" }
  },
];

const MIN_CARD_WIDTH = 280;
const MIN_CARD_HEIGHT = 240;
const DOCK_GAP = 15;

function ServiceCard({ service, index, progress }: { service: any, index: number, progress: any }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Entry timing logic
  const start = index * 0.12; 
  const end = start + 0.2;
  
  // 1x3 Single Row Layout - Vertical cards
  const cardWidth = 250;
  const cardHeight = 420;
  const gapX = 16;
  const col = index;
  const row = 0;
  
  const xPos = col * (cardWidth + gapX);
  const yPos = 0;

  // Animations: Simple slide from right and fade in
  const opacity = useTransform(progress, [start, start + 0.05], [0, 1]);
  const x = useTransform(progress, [start, end], [800, xPos]);
  
  return (
    <Link href="/services">
      <motion.div
        style={{ 
          opacity, 
          x, 
          y: yPos,
          zIndex: 10 + index 
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? "var(--color-background)" : "#0A0A0B",
          color: isHovered ? "#0A0A0B" : "var(--color-background)",
          borderColor: isHovered ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[250px] h-[420px] rounded-[24px] p-6 shadow-2xl flex flex-col justify-between cursor-pointer border overflow-hidden"
      >
        <div className="relative z-10 flex flex-col h-full">
          {/* Header: Title, Tagline & Icon/Index */}
          <div className="flex justify-between items-start mb-2">
            <div className="flex flex-col">
              <h3 className="text-2xl font-display font-bold tracking-tighter mb-0.5">
                {service.title}
              </h3>
              <p className="text-accent text-[9px] font-bold tracking-wider">
                {service.tagline}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isHovered ? "bg-accent/10 text-accent" : "bg-white/10 text-white"}`}>
                <service.icon size={16} strokeWidth={2.5} />
              </div>
              <span className={`text-[10px] font-mono font-bold tracking-widest transition-opacity ${isHovered ? "opacity-30" : "opacity-40"}`}>
                // 0{index + 1}
              </span>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-grow">
            <div className={`w-full h-[1px] mb-4 transition-colors ${isHovered ? "bg-black/5" : "bg-white/10"}`} />
            <p className={`text-[12px] leading-relaxed mb-6 font-medium transition-opacity ${isHovered ? "opacity-70" : "opacity-60"}`}>
              {service.description}
            </p>

            {/* Feature List (Restored Vertical Bullet Points) */}
            <div className="grid grid-cols-1 gap-1.5">
              {service.items.map((item: string) => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-accent/60 rounded-full" />
                  <span className={`text-[10px] font-bold tracking-tight transition-opacity ${isHovered ? "opacity-60" : "opacity-90"}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Link */}
          <div 
            className={`flex items-center justify-between pt-1 mt-1 border-t transition-colors ${isHovered ? "border-black/5" : "border-white/5"}`}
          >
            <span className={`text-[9px] font-bold tracking-widest transition-colors ${isHovered ? "text-black/40" : "text-white/40"}`}>
              Explore Engine
            </span>
            <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${isHovered ? "border-black/10 text-black group-hover:border-accent" : "border-white/10 text-white"}`}>
              <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
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
    <section ref={containerRef} id="services" className="relative min-h-[150vh] lg:min-h-[250vh] bg-white py-20 lg:py-0">
      <div className="lg:sticky lg:top-0 lg:h-screen flex items-center lg:overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 py-10 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start lg:items-center">
            
            {/* Left: Info Area */}
            <div className="max-w-md relative z-20">
              <span className="text-accent text-[10px] font-mono font-bold tracking-[0.2em] mb-4 md:mb-8 block">
                Services
              </span>
              
              <h2 className="text-4xl md:text-7xl font-display font-bold leading-[0.85] tracking-tighter mb-6 md:mb-10">
                What We <br />
                <span className="text-accent">Do.</span>
              </h2>
              
              <p className="text-muted text-base font-medium leading-relaxed max-w-sm mb-16 opacity-80">
                Three precision-engineered engines working in parallel to ensure your product survives the gap between impact and growth.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex-1 h-[1px] bg-border relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-accent"
                    style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                  />
                </div>
                <span className="font-mono text-[10px] text-muted tracking-widest font-bold">L_03</span>
              </div>
            </div>

            {/* Right: Sequential Stacking Area (1x3 Row) */}
            <div className="relative h-[500px] w-[784px] hidden lg:flex items-center">
              <div className="relative w-full h-full">
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

            {/* Mobile Fallback */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 w-full pb-32 px-2">
              {services.map((service, i) => (
                <div key={service.id} className="bg-[#0A0A0B] text-white rounded-2xl p-6 border border-white/5 shadow-2xl">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-xl font-display font-bold tracking-tight mb-1">{service.title}</h3>
                  <p className="text-white/60 text-[13px] leading-relaxed mb-5">{service.description}</p>
                  <Link href="/services" className="text-accent font-bold text-xs tracking-widest inline-flex items-center">
                    Learn More <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
