"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Building2, ArrowRight, Zap, Globe } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-180, 0, 180]);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* 3D Rotating Logo Element (Simplified) */}
      <div className="flex justify-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
        <motion.div 
          style={{ rotateY, perspective: 1000 }}
          className="relative z-10"
        >
          <img src="/images/wx.png" alt="WictroniX Logo" className="w-28 h-28 md:w-32 md:h-32 object-contain" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto">
          {/* Left Path */}
          <Link href="/contact" className="contents">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-10 md:p-14 rounded-[48px] bg-accent text-white flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-[150px] -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-8">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold leading-[0.95] tracking-tighter mb-6">Ready to stop planning?</h2>
                <p className="text-white/80 text-base mb-10 max-w-xs font-medium">
                  Whether it's a website or a full GTM strategy, we move in weeks, not quarters.
                </p>
              </div>
              
              <div className="relative z-10 flex items-center space-x-3 text-lg font-bold group-hover:translate-x-3 transition-transform duration-500 w-fit">
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          </Link>

          {/* Right Path */}
          <Link href="/contact" className="contents">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-10 md:p-14 rounded-[48px] bg-[#FAFAFA] border border-border flex flex-col justify-between group cursor-pointer relative overflow-hidden hover:border-accent/40 transition-all duration-700"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-bl-[150px] -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold leading-[0.95] tracking-tighter mb-6">Need an embedded team?</h2>
                <p className="text-muted text-base mb-10 max-w-xs font-medium">
                  We deploy cross-functional squads that operate inside your business objectives.
                </p>
              </div>
              
              <div className="relative z-10 flex items-center space-x-3 text-lg font-bold group-hover:text-accent group-hover:translate-x-3 transition-all duration-500 w-fit">
                <span>Request Audit</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
