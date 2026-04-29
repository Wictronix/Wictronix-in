"use client";

import { motion } from "framer-motion";
import React from "react";

import Image from "next/image";

const logos = [
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

interface LogoMarqueeProps {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
  grayscale?: boolean;
}

export default function LogoMarquee({ title, subtitle, variant = "light", grayscale = false }: LogoMarqueeProps) {
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

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
              className={`flex items-center mx-12 transition-all duration-500 cursor-default group/logo ${grayscale ? "grayscale opacity-40 hover:grayscale-0 hover:opacity-100" : "opacity-80 hover:opacity-100"}`}
            >
              <div className="relative h-12 w-32">
                <Image
                  src={logo.path}
                  alt={logo.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100px, 150px"
                  className={`object-contain transition-transform duration-500 group-hover/logo:scale-110 ${(logo as any).invert ? 'invert' : ''}`}
                />
              </div>
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
