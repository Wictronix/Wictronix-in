"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Search, Users, Zap, TrendingUp, ChevronRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "SYSTEM AUDIT",
    tagline: "Infrastructure Diagnosis",
    body: "We perform a comprehensive deep-dive into your existing technical architecture, marketing funnels, and growth bottlenecks.",
    icon: Search,
    color: "bg-blue-500",
    image: "/images/methodology/audit.png",
    metrics: ["100+ Data Points", "System Mapping", "Leak Detection"]
  },
  {
    id: "02",
    title: "TACTICAL SQUAD",
    tagline: "Talent Deployment",
    body: "We assemble a custom cross-functional squad of engineers, designers, and growth hackers specifically for your vertical.",
    icon: Users,
    color: "bg-purple-500",
    image: "/images/methodology/squad.png",
    metrics: ["Custom Vetting", "Zero Friction", "Direct Slack Access"]
  },
  {
    id: "03",
    title: "HIGH-VELOCITY SPRINT",
    tagline: "Rapid Execution",
    body: "Bi-weekly high-output sprints with daily async updates. We ship production-ready code and optimized campaigns every 14 days.",
    icon: Zap,
    color: "bg-accent",
    image: "/images/methodology/sprint.png",
    metrics: ["14-Day Cycles", "Daily Updates", "CI/CD Precision"]
  },
  {
    id: "04",
    title: "SYSTEM SCALE",
    tagline: "Exponential Growth",
    body: "We optimize the winning variables and scale your digital infrastructure to handle the next 10x of user load and revenue.",
    icon: TrendingUp,
    color: "bg-green-500",
    image: "/images/methodology/scale.png",
    metrics: ["Auto-Scaling", "ROI Indexing", "Full Documentation"]
  },
];

function PhaseCard({ step, index, progress }: { step: any, index: number, progress: any }) {
  const start = index * 0.15;
  const end = start + 0.3;
  
  // Stacking offset and scaling
  const y = useTransform(progress, [start, end], [1000, (index * 15) + 60]);
  const scale = useTransform(progress, [start, end], [0.95, 1]);
  const opacity = useTransform(progress, [start, start + 0.05], [0, 1]);
  
  return (
    <motion.div
      style={{ y, scale, opacity, zIndex: 10 + index }}
      className="absolute inset-0 flex items-start justify-center pointer-events-none pt-20"
    >
      <div className="w-full max-w-2xl bg-white border border-border/50 rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] pointer-events-auto relative overflow-hidden group">
        
        {/* Background Image with Blur Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={step.image} 
            alt={step.title}
            className="w-full h-full object-cover opacity-100 grayscale transition-transform duration-[2000ms]"
          />
          <div className={`absolute inset-0 ${index < 3 ? 'bg-white/85' : 'bg-white/70'}`} />
        </div>

        {/* Subtle Phase ID */}
        <div className="absolute top-6 right-8 text-6xl font-display font-black opacity-[0.03] select-none z-10">
          {step.id}
        </div>

        <div className="p-6 md:p-10 relative z-20 flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-10 h-10 rounded-xl ${step.color}/10 flex items-center justify-center`}>
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-[9px] font-mono font-bold text-accent tracking-[0.4em] uppercase">
                PHASE_{step.id}
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tighter mb-3 leading-none">
              {step.title}
            </h3>
            <p className="text-base md:text-lg text-accent/60 font-medium mb-6">
              {step.tagline}
            </p>
            <p className="text-muted text-sm leading-relaxed max-w-md mb-8">
              {step.body}
            </p>
          </div>

          <div className="w-full md:w-48 flex flex-col justify-center">
            <div className="space-y-4 border-l border-border pl-6">
              {step.metrics.map((metric: string) => (
                <div key={metric} className="flex flex-col">
                  <span className="text-[8px] font-mono opacity-40 uppercase tracking-widest mb-1">Key Focus</span>
                  <span className="text-xs font-bold tracking-tight">{metric}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 flex items-center space-x-3 text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-accent group/btn">
              <span>Initialize _</span>
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <section 
      ref={containerRef}
      id="process" 
      className="relative z-30 min-h-[300vh] bg-white rounded-t-[80px] md:rounded-t-[120px] mt-[-100px] shadow-[0_-40px_100px_-20px_rgba(59,130,246,0.4)]"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden relative">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative">
          
          {/* Header Area */}
          <div className="absolute top-32 left-6 md:left-12 z-50">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-accent text-xs font-bold tracking-[0.5em] uppercase mb-4 block"
            >
              Execution Lifecycle
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none">
              How We <span className="text-accent italic">Build.</span>
            </h2>
          </div>

          {/* Stacking Area */}
          <div className="relative w-full h-[600px] mt-[70px]">
            {steps.map((step, i) => (
              <PhaseCard key={step.id} step={step} index={i} progress={smoothProgress} />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
            <span className="text-[9px] font-mono font-bold tracking-[0.3em] uppercase">Scroll to Stack</span>
            <div className="w-[1px] h-12 bg-border relative overflow-hidden">
              <motion.div 
                style={{ scaleY: smoothProgress }}
                className="absolute top-0 left-0 w-full h-full bg-accent origin-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
