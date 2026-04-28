"use client";

import { motion } from "framer-motion";
import React from "react";

const logos = [
  { name: "Acme Corp", icon: "◈" }, { name: "Wayne Ent", icon: "●" }, { name: "Soylent", icon: "◆" }, 
  { name: "Initech", icon: "■" }, { name: "Umbrella", icon: "○" }, { name: "Hooli", icon: "H" }, 
  { name: "Globex", icon: "G" }, { name: "Stark Ind", icon: "S" }, { name: "Cyberdyne", icon: "C" }, 
  { name: "Massive", icon: "M" }, { name: "Bluth Co", icon: "B" }, { name: "Dunder", icon: "D" }, 
  { name: "Aperture", icon: "A" }, { name: "Wonka", icon: "W" }, { name: "Veidt", icon: "V" }
];

interface LogoMarqueeProps {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}

export default function LogoMarquee({ title, subtitle, variant = "light" }: LogoMarqueeProps) {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className={`py-24 overflow-hidden ${variant === "dark" ? "bg-black text-white" : "bg-white text-foreground"}`}>
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        {subtitle && (
          <span className="text-accent text-[9px] font-bold tracking-[0.3em] uppercase mb-4 block">
            {subtitle}
          </span>
        )}
        {title && (
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tighter">
            {title}
          </h2>
        )}
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-10">
          {duplicatedLogos.map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center space-x-3 mx-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group/logo"
            >
              <span className="font-bold text-accent/60 text-3xl group-hover/logo:scale-110 transition-transform">
                {logo.icon}
              </span>
              <span className="font-display font-bold tracking-tighter text-xl">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className={`absolute inset-y-0 left-0 w-32 bg-gradient-to-r ${variant === "dark" ? "from-black" : "from-white"} to-transparent z-10`} />
        <div className={`absolute inset-y-0 right-0 w-32 bg-gradient-to-l ${variant === "dark" ? "from-black" : "from-white"} to-transparent z-10`} />
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
