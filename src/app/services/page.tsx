"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Megaphone, Lightbulb, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";

const pillars = [
  {
    id: "technology",
    name: "Technology",
    summary: "We build products that ship and scale. From MVPs to enterprise platforms, our engineering team builds with your business model in mind, not just your feature list.",
    subServices: ["Custom Web Dev", "Mobile Apps", "AI & Automation", "SaaS Product Dev", "Cloud & DevOps", "UI/UX Design"],
    href: "/services/technology",
    icon: Code,
    image: "/images/project-1.png",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "marketing",
    name: "Marketing",
    summary: "Marketing that generates pipeline, not just impressions. We build marketing engines that compound: SEO that ranks, ads that convert, content that sells.",
    subServices: ["SEO & Organic Growth", "Performance Marketing", "Brand & Identity", "Content Strategy", "Social Media"],
    href: "/services/marketing",
    icon: Megaphone,
    image: "/images/project-2.png",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "consulting",
    name: "Consulting",
    summary: "Strategy that stays until it's executed. Most consultants hand you a deck and leave. We stay for the execution, running the first sprints ourselves.",
    subServices: ["Go-To-Market", "Embedded BD", "Fundraising Support", "Market Research", "Competitive Intel"],
    href: "/services/consulting",
    icon: Lightbulb,
    image: "/images/project-3.png",
    color: "from-amber-500/20 to-orange-500/20"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden flex items-center justify-center min-h-screen">
        {/* Big Concave Blue Background */}
        <motion.div 
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-0 z-0 flex items-end justify-center"
        >
          <div 
            className="w-full h-[22%] md:h-[45%] bg-accent relative overflow-hidden border-b-[8px] md:border-b-[16px] border-black"
          >
            {/* Massive Semi-Circle Cutout - Panoramic Curve */}
            <div className="absolute top-0 left-0 -translate-y-[85%] w-full aspect-square bg-white rounded-full z-10" />

            {/* Subtle Texture/Glow inside the blue block */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
            
            {/* Black Accent Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent text-[9px] font-bold tracking-[0.3em] uppercase mb-8 block"
            >
              The Engines of Growth
            </motion.span>

            <div className="relative">
              <motion.h1 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-[0.95] mb-8 text-foreground"
              >
                Three Engines. <br />
                <motion.span 
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
                  className="text-accent block mt-1"
                >
                  One Execution Layer.
                </motion.span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-sm md:text-base text-muted font-medium leading-relaxed max-w-xl mx-auto opacity-80"
            >
              We don't sell services in isolation. We integrate tech, marketing, and strategy into a unified execution plan matched to your growth objectives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pillar Sections - Full Width Editorial Layout */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-6 md:px-12 space-y-32">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 md:gap-20 group relative
                p-10 md:p-16 border-2 border-accent/20 hover:border-accent/40 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-700
                ${i === 0 ? "mt-[30px]" : ""}
              `}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className={`absolute -inset-10 bg-gradient-to-br ${pillar.color} blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000`} />
                <div className="relative aspect-square md:aspect-[4/3] bg-muted border border-black/5 flex items-center justify-center overflow-hidden shadow-2xl">
                  <Image 
                    src={pillar.image} 
                    alt={pillar.name} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-50 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent" />
                  
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-32 h-32 md:w-40 md:h-40 bg-black text-white flex items-center justify-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] z-10 relative overflow-hidden group/icon"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                    <pillar.icon className="w-12 h-12 md:w-20 md:h-20 text-accent" />
                  </motion.div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-12 right-12 w-24 h-24 border border-white/10 rounded-full" />
                  <div className="absolute bottom-12 left-12 w-32 h-32 border border-white/10 rounded-full" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <span className="text-accent text-[9px] font-bold tracking-[0.4em] uppercase mb-4 block">Engine_0{i + 1}</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter leading-none mb-6">
                  {pillar.name}
                </h2>
                
                <p className="text-base text-muted font-medium leading-relaxed mb-10 opacity-80 max-w-xl">
                  {pillar.summary}
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-12">
                  {pillar.subServices.map(service => (
                    <div key={service} className="flex items-center space-x-2 group/item">
                      <div className="w-1 h-1 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted group-hover:text-foreground transition-colors">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-black/5 pt-10">
                  <p className="text-[11px] text-muted-foreground font-medium leading-relaxed mb-8 max-w-sm">
                    "Every engagement is customized. These aren't packages, they're capabilities we deploy based on what your business actually needs."
                  </p>
                  
                  <Link 
                    href={pillar.href} 
                    className="inline-flex items-center space-x-3 bg-foreground text-background px-8 py-4 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all duration-500 shadow-xl group/btn"
                  >
                    <span>Explore {pillar.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <LogoMarquee 
        title="Companies we've executed for across all three pillars"
        subtitle="Global Trust"
      />

      {/* Diagnostic CTA */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,var(--color-accent)_0%,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-8 block">Diagnostic Sync</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-none mb-10">
              Not sure which service you need? <br />
              <span className="text-accent">That's literally our job.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              We diagnose the bottlenecks first, then deploy the engines. No guesswork, just strategic execution.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-4 bg-accent text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-accent/20 group"
            >
              <span>Let's Diagnose Together</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
