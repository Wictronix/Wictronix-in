"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/workData";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
              Proof of <br />
              <span className="text-accent">Performance.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-medium max-w-2xl leading-relaxed">
              We don&apos;t lead with project names. We lead with the numbers that prove our impact. 
              Our methodology is built on outcome-first storytelling and process transparency.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent -z-10 blur-3xl opacity-30" />
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative flex flex-col h-full bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-accent/40 transition-all duration-700 hover:shadow-[0_0_80px_-20px_rgba(59,130,246,0.3)]"
              >
                {/* Image Section with Parallax Hover */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.outcome}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
                    >
                      <div className="text-accent text-xl md:text-2xl font-display font-bold leading-none mb-1">
                        {project.metric}
                      </div>
                      <div className="text-[8px] font-bold text-white/50 uppercase tracking-[0.2em] leading-none">
                        {project.metricLabel.split(' ').slice(0, 2).join(' ')}
                      </div>
                    </motion.div>
                  </div>

                  {/* Industry Label (with subtle background for legibility) */}
                  <div className="absolute bottom-6 left-8 z-20">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                      {project.industry.split('·')[0]}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col flex-grow relative">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-tight tracking-tighter group-hover:text-accent transition-colors duration-500">
                    {project.outcome}
                  </h3>
                  
                  <p className="text-white/50 text-sm leading-relaxed font-medium mb-8 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[9px] font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced CTA */}
                  <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8">
                    <Link 
                      href={`/work/${project.slug}`}
                      className="flex items-center space-x-3 text-white font-bold group/link"
                    >
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-accent group-hover/link:border-accent transition-all duration-500">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/link:scale-125" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em]">View Impact</span>
                    </Link>
                    
                    <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest group-hover:text-accent/40 transition-colors">
                      {project.engagement}
                    </span>
                  </div>
                </div>

                {/* Decorative Accent Glow */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/20 transition-all duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-black rounded-[3rem] mx-4 mb-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-6 leading-[0.9]">
                Facing a similar <br />
                <span className="text-accent">challenge?</span>
              </h2>
              <p className="text-black/60 text-lg md:text-xl font-medium">
                Let&apos;s build your next growth engine. Our process is transparent, 
                our results are measurable, and our focus is ROI.
              </p>
            </div>
            <Link 
              href="/contact"
              className="group relative px-12 py-6 bg-black text-white rounded-full font-bold text-xl overflow-hidden shadow-2xl transition-all"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
