"use client";

import { motion } from "framer-motion";
import { Search, Users, Zap, TrendingUp, ChevronRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "System Audit",
    tagline: "Infrastructure Diagnosis",
    body: "We perform a comprehensive deep-dive into your architecture, marketing funnels, and growth bottlenecks.",
    icon: Search,
    color: "bg-blue-500",
    image: "/images/methodology/audit.png",
    metrics: ["100+ Data Points", "System Mapping", "Leak Detection"]
  },
  {
    id: "02",
    title: "Tactical Squad",
    tagline: "Talent Deployment",
    body: "We assemble a custom cross-functional squad of engineers and growth hackers specifically for your vertical.",
    icon: Users,
    color: "bg-purple-500",
    image: "/images/methodology/squad.png",
    metrics: ["Custom Vetting", "Zero Friction", "Direct Slack Access"]
  },
  {
    id: "03",
    title: "High-Velocity Sprint",
    tagline: "Rapid Execution",
    body: "Bi-weekly high-output sprints with daily async updates. We ship optimized code and campaigns every 14 days.",
    icon: Zap,
    color: "bg-accent",
    image: "/images/methodology/sprint.png",
    metrics: ["14-Day Cycles", "Daily Updates", "CI/CD Precision"]
  },
  {
    id: "04",
    title: "System Scale",
    tagline: "Exponential Growth",
    body: "We optimize winning variables and scale your infrastructure to handle the next 10x of user load and revenue.",
    icon: TrendingUp,
    color: "bg-green-500",
    image: "/images/methodology/scale.png",
    metrics: ["Auto-Scaling", "ROI Indexing", "Full Documentation"]
  },
];

function PhaseCard({ step, index }: { step: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="bg-white border border-accent/20 rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group flex flex-col h-full"
    >
      {/* Background Image with Blur Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={step.image} 
          alt={step.title}
          className="w-full h-full object-cover opacity-100 grayscale transition-transform duration-[2000ms] group-hover:scale-110"
        />
        <div className={`absolute inset-0 ${index < 3 ? 'bg-white/90' : 'bg-white/80'}`} />
      </div>

      {/* Subtle Phase ID */}
      <div className="absolute top-6 right-8 text-6xl font-display font-bold opacity-[0.03] select-none z-10 group-hover:opacity-[0.06] transition-opacity">
        {step.id}
      </div>

      <div className="p-6 md:p-8 relative z-20 flex flex-col h-full">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`w-8 h-8 rounded-lg ${step.color}/10 flex items-center justify-center`}>
            <step.icon className="w-5 h-5 text-accent" />
          </div>
          <span className="text-[9px] font-mono font-bold text-accent tracking-[0.2em]">
            Phase_{step.id}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-display font-bold tracking-tighter mb-1 leading-none">
          {step.title}
        </h3>
        <p className="text-xs md:text-sm text-accent/60 font-medium mb-3">
          {step.tagline}
        </p>
        <p className="text-muted text-[13px] leading-relaxed max-w-sm mb-6 flex-grow">
          {step.body}
        </p>

        <div className="mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-l border-border pl-6">
            {step.metrics.map((metric: string) => (
              <div key={metric} className="flex flex-col">
                <span className="text-[6px] font-mono opacity-40 tracking-widest mb-0.5 uppercase">Focus</span>
                <span className="text-[10px] font-bold tracking-tight">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Methodology() {
  return (
    <section 
      id="process" 
      className="relative z-30 bg-white rounded-t-[40px] md:rounded-t-[120px] mt-[-60px] md:mt-[-100px] shadow-[0_-40px_100px_-20px_rgba(59,130,246,0.4)] py-16 md:py-24"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Area */}
        <div className="mb-10 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[9px] md:text-[10px] font-bold tracking-[0.3em] mb-2 md:mb-4 block"
          >
            Execution Lifecycle
          </motion.span>
          <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tighter leading-none">
            How We <span className="text-accent">Build.</span>
          </h2>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <PhaseCard key={step.id} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
