"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Quote, ExternalLink, Globe } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

import Image from "next/image";

const clientLogos = [
  { name: "DQ Care", path: "/images/logos/DQcare.webp" },
  { name: "Broad", path: "/images/logos/broad.webp" },
  { name: "Bell", path: "/images/logos/bell.webp", invert: true },
  { name: "Moveazy", path: "/images/logos/moveazy.webp" },
  { name: "PPS", path: "/images/logos/pps.webp" },
  { name: "Success Techno", path: "/images/logos/successtechno.webp" },
  { name: "Zetquant", path: "/images/logos/zetquant.webp" },
  { name: "CTC", path: "/images/logos/CTC.webp" },
  { name: "Logo White", path: "/images/logos/logo_white.avif", invert: true },
];

const metrics = [
  { value: 50, suffix: "+", label: "Engagements Delivered" },
  { value: 4, suffix: "", label: "Markets Served" },
  { value: 10, suffix: "Cr+", label: "Capital Facilitated" },
  { value: 12, suffix: "+", label: "Industry Verticals" },
];

const testimonials = [
  {
    quote: "They didn't just build a tool; they built a revenue engine. We saw a 3x increase in inbound leads within the first quarter of deployment.",
    author: "Prateek Kataria",
    role: "Managing Director, Broad HVAC",
  },
  {
    quote: "The level of ownership WictroniX takes is unparalleled. They solved complex integration gaps that our internal teams had been struggling with for months.",
    author: "Dr. Ankit Shah",
    role: "Founder, DQ Care",
  },
  {
    quote: "Strategic, execution-focused, and fast. They managed to drop our customer acquisition costs by 40% while doubling our platform activity.",
    author: "James Chen",
    role: "CTO, Zetquant",
  },
];

function Counter({ value, suffix, label, index }: { value: number; suffix: string; label: string, index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col group cursor-default"
    >
      <span className="text-accent text-[8px] font-mono font-bold tracking-[0.2em] mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
        Metric_0{index + 1}
      </span>
      <div className="flex items-baseline space-x-1 mb-2">
        <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-foreground tabular-nums leading-none transition-all duration-500">
          {count}
        </h3>
        <span className="text-2xl md:text-3xl font-display font-bold text-accent">
          {suffix}
        </span>
      </div>
      <div className="text-[10px] tracking-[0.2em] font-bold text-muted-foreground mt-2 border-t border-border/50 pt-4 w-fit pr-8 group-hover:border-accent group-hover:text-foreground transition-all duration-500">
        {label}
      </div>
    </motion.div>
  );
}

export default function SocialTrust() {
  return (
    <section className="py-20 bg-white border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Area */}
        <div className="max-w-xl mb-16 mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-2 bg-accent/10 rounded-lg text-accent">
              <Globe className="w-4 h-4" />
            </div>
            <span className="text-accent text-[10px] font-bold tracking-[0.2em]">
              Global Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-[0.95]">
            Proof of <span className="text-accent">Scale.</span>
          </h2>
        </div>

        {/* Minimalist Status Pod Grid (With Accent Border & Shadow) */}
        <div className="max-w-lg mx-auto mb-32 relative">
          <div className="grid grid-cols-2 border border-accent/30 rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] bg-white">
            {metrics.map((m, i) => (
              <div 
                key={i} 
                className="p-6 md:p-8 border-r border-b last:border-b-0 even:border-r-0 border-accent/10 group hover:bg-[#FAFAFA] transition-colors duration-700 text-center"
              >
                <div className="text-accent text-[7px] font-mono font-bold tracking-[0.1em] mb-3 opacity-30 group-hover:opacity-100 transition-opacity">
                  M_0{i + 1}
                </div>

                <div className="flex items-baseline justify-center space-x-0.5">
                  <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter text-foreground tabular-nums leading-none">
                    {m.value}
                  </h3>
                  <span className="text-lg md:text-xl font-display font-bold text-accent">
                    {m.suffix}
                  </span>
                </div>

                <div className="text-[9px] font-bold tracking-[0.1em] text-muted-foreground mt-3 group-hover:text-foreground transition-colors duration-500">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Center Point Crosshair (Simplified) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center bg-white border border-border/40 rounded-full">
            <div className="w-1 h-1 rounded-full bg-accent" />
          </div>
        </div>

        {/* Scattered "Organic" Logo Cloud */}
        <div className="py-24 border-y border-border/40 mb-20 relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center items-center gap-x-12 md:gap-x-20 gap-y-10 md:gap-y-16 max-w-5xl mx-auto">
            {clientLogos.map((logo, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative h-16 w-44 md:h-20 md:w-56 opacity-100 hover:scale-110 transition-all duration-500 cursor-default"
              >
                <Image
                  src={logo.path}
                  alt={logo.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100px, 150px"
                  className={`object-contain ${(logo as any).invert ? 'invert' : ''}`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium Testimonials Grid (3-Column, Black Theme) */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 rounded-[40px] bg-black text-white border border-white/5 hover:border-accent/30 transition-all duration-700 group relative overflow-hidden shadow-2xl flex flex-col justify-between"
            >
              {/* Subtle Decorative Gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
              
              <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5 group-hover:text-accent/20 transition-colors duration-500" />
              
              <div className="relative z-10">
                <p className="text-base md:text-lg font-medium mb-12 leading-relaxed text-white/90">
                  &quot;{t.quote}&quot;
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-auto">
                  <div className="flex flex-col">
                    <div className="text-sm font-bold text-white tracking-tight">{t.author}</div>
                    <div className="text-[10px] text-accent font-mono font-bold tracking-widest mt-0.5 uppercase">
                      {t.role.split(',')[0]}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
