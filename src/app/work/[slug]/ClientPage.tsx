"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/workData";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap } from "lucide-react";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (project?.details?.heroMetric.value) {
      const rawValue = project.details.heroMetric.value;
      const numericPart = rawValue.replace(/[^0-9]/g, "");
      const hasLetters = /[a-zA-Z]/.test(rawValue);

      if (numericPart && !hasLetters) {
        const val = parseInt(numericPart);
        let start = 0;
        const duration = 2000;
        const increment = val / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= val) {
            setCount(val);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }
  }, [project]);

  if (!project || !project.details) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <Link href="/work" className="text-accent font-bold hover:underline">Back to Work</Link>
        </div>
      </div>
    );
  }

  const { details } = project;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link href="/work" className="inline-flex items-center space-x-2 text-white/40 hover:text-white mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to all work</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex flex-col gap-4 mb-8">
              <span className="text-accent text-sm font-bold uppercase tracking-[0.2em]">
                {project.metric} {project.metricLabel}
              </span>
              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-white">
                {project.outcome}
              </h1>
            </div>
            
            <p className="text-lg md:text-2xl text-white/50 max-w-2xl font-medium leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Project Image Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-20 relative aspect-[21/9] max-w-4xl mx-auto w-full overflow-hidden rounded-[40px] border border-white/10"
          >
            <Image 
              src={project.image}
              alt={project.outcome}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 right-0 w-1/3 h-full bg-accent/10 blur-[120px] rounded-full -z-10" />
      </section>

      {/* Context Bar */}
      <section className="py-8 bg-white/5 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Industry</p>
              <p className="text-sm font-bold text-white/80">{details.context.industry}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Services</p>
              <p className="text-sm font-bold text-white/80">{details.context.services.join(" · ")}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Duration</p>
              <p className="text-sm font-bold text-white/80">{details.context.duration}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Engagement</p>
              <p className="text-sm font-bold text-white/80">{details.context.engagement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="py-24 md:py-32 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-4">01 - The Situation</h2>
              <p className="text-2xl font-display font-bold leading-tight">Before <br />WictroniX.</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
                &ldquo;{details.situation}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 md:py-32 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-16 text-center">02 - The Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {details.approach.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-accent/40 transition-colors"
              >
                <div className="absolute top-8 right-8 text-white/10 font-display font-bold text-4xl group-hover:text-accent/20 transition-colors">
                  0{i + 1}
                </div>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-[9px] font-bold uppercase tracking-widest rounded-full mb-6">
                  {item.phase}
                </span>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-6">03 - The Results</h2>
            <p className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Quantifiable Impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {details.results.metrics.map((metric, i) => (
              <div key={i} className="text-center p-12 bg-white/5 rounded-[2.5rem] border border-white/5">
                <p className="text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tighter">{metric.value}</p>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-10 md:p-16 bg-accent rounded-[3rem] text-white relative overflow-hidden">
              <Zap className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-display font-bold mb-8 leading-tight">
                  {details.results.qualitative}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {details.results.additionalWins?.map((win, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-white/60 flex-shrink-0" />
                      <span className="text-sm font-bold">{win}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack & Tools */}
      <section className="py-24 md:py-32 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-6">04 - Stack & Tools</h2>
              <p className="text-3xl font-display font-bold tracking-tighter mb-6">The engine behind the outcomes.</p>
              <p className="text-white/50 text-sm leading-relaxed">
                We use a curated selection of industry-leading tools and custom-built infrastructure to ensure scalability and performance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:max-w-2xl justify-center md:justify-end">
              {project.stack.map((item) => (
                <span key={item} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white/70 hover:text-white hover:border-accent/40 transition-all cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white text-black rounded-t-[4rem]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
            Building a B2B business <br />
            that buyers <span className="text-accent">can&apos;t find online?</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-black/60 mb-12 max-w-2xl mx-auto">
            Let&apos;s change that. We solve visibility, credibility, and conversion problems for founders.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact"
              className="group relative px-12 py-6 bg-black text-white rounded-full font-bold text-xl overflow-hidden shadow-2xl transition-all w-full md:w-auto"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <p className="text-black/40 font-bold uppercase text-xs tracking-widest">or</p>
            <Link href="/services" className="text-lg font-bold hover:text-accent transition-colors">
              Explore Services →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
